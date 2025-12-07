// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;

const ipHits = new Map<string, { count: number; ts: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = ipHits.get(ip);

  if (!current || now - current.ts > RATE_LIMIT_WINDOW_MS) {
    ipHits.set(ip, { count: 1, ts: now });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX) return true;

  ipHits.set(ip, { count: current.count + 1, ts: current.ts });
  return false;
}

function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();

  const xRealIp = req.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  return "unknown";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, error: "Trop de requêtes. Réessayez plus tard." },
        { status: 429 },
      );
    }

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { ok: false, error: "Content-Type invalide." },
        { status: 400 },
      );
    }

    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Données invalides." },
        { status: 400 },
      );
    }

    const prenom = sanitizeString((body as any).prenom, 100);
    const nom = sanitizeString((body as any).nom, 100);
    const email = sanitizeString((body as any).email, 200);
    const entreprise = sanitizeString((body as any).entreprise, 200);
    const sujet = sanitizeString((body as any).sujet, 200);
    const message = sanitizeString((body as any).message, 5000);
    const source = sanitizeString((body as any).source, 200);

    if (!prenom || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Prénom, email et message sont obligatoires." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Adresse email invalide." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const to =
      process.env.CONTACT_RECIPIENT ??
      process.env.AUDIT_RECIPIENT ??
      process.env.SMTP_USER!;

    const subject = `Nouveau message de contact – ${prenom}${
      nom ? ` ${nom}` : ""
    }${entreprise ? ` (${entreprise})` : ""}`;

    const text = [
      `Prénom : ${prenom}`,
      `Nom : ${nom || "—"}`,
      `Email : ${email}`,
      `Entreprise : ${entreprise || "—"}`,
      `Sujet : ${sujet || "—"}`,
      `Source : ${source || "—"}`,
      "",
      "Message :",
      message,
    ].join("\n");

    const html = `
      <h2>Nouveau message via le formulaire de contact</h2>
      <p><strong>Prénom :</strong> ${prenom}</p>
      <p><strong>Nom :</strong> ${nom || "—"}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Entreprise :</strong> ${entreprise || "—"}</p>
      <p><strong>Sujet :</strong> ${sujet || "—"}</p>
      <p><strong>Source :</strong> ${source || "—"}</p>
      <h3>Message</h3>
      <p style="white-space:pre-line;">${message}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur lors de l’envoi de l’email." },
      { status: 500 },
    );
  }
}
