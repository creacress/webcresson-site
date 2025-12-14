import Stripe from "stripe";
import { NextResponse } from "next/server";

type Billing = "monthly" | "yearly";
type Plan = "automatisation" | "ia" | "site";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-11-17.clover",
});

const PRICE: Record<Plan, Record<Billing, string>> = {
  automatisation: {
    monthly: process.env.STRIPE_PRICE_AUTO_MONTHLY!,
    yearly: process.env.STRIPE_PRICE_AUTO_YEARLY!,
  },
  ia: {
    monthly: process.env.STRIPE_PRICE_IA_MONTHLY!,
    yearly: process.env.STRIPE_PRICE_IA_YEARLY!,
  },
  site: {
    monthly: process.env.STRIPE_PRICE_SITE_MONTHLY!,
    yearly: process.env.STRIPE_PRICE_SITE_YEARLY!,
  },
};

export async function POST(req: Request) {
  const { plan, billing } = (await req.json()) as { plan: Plan; billing: Billing };

  const priceId = PRICE?.[plan]?.[billing];
  if (!priceId) {
    return NextResponse.json(
      { error: "Lien de paiement Stripe non configuré (priceId manquant)." },
      { status: 400 }
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${baseUrl}/merci?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/tarifications`,
    allow_promotion_codes: true,
  });

  return NextResponse.json({ url: session.url });
}
