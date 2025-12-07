// app/api/checkout/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY manquant dans les variables d'environnement");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-11-17.clover",
});

const PLAN_TO_PRICE: Record<string, string | undefined> = {
  automation: process.env.STRIPE_PRICE_AUTOMATION,
  ia: process.env.STRIPE_PRICE_IA,
  site: process.env.STRIPE_PRICE_SITE,
};

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plan, customerEmail } = body as {
      plan?: "automation" | "ia" | "site";
      customerEmail?: string;
    };

    if (!plan || !PLAN_TO_PRICE[plan]) {
      return NextResponse.json(
        { ok: false, error: "Plan inconnu ou non configuré." },
        { status: 400 },
      );
    }

    const priceId = PLAN_TO_PRICE[plan]!;

    const successUrl =
      process.env.STRIPE_SUCCESS_URL ??
      `${req.nextUrl.origin}/tarifications?status=success`;
    const cancelUrl =
      process.env.STRIPE_CANCEL_URL ??
      `${req.nextUrl.origin}/tarifications?status=cancel`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${successUrl}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      customer_email: customerEmail,
      metadata: {
        plan,
      },
    });

    return NextResponse.json({ ok: true, url: session.url });
  } catch (error) {
    console.error("[STRIPE_CHECKOUT_ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Erreur lors de la création de la session Stripe." },
      { status: 500 },
    );
  }
}
