// app/api/audit-gratuit/route.ts
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
    const entreprise = sanitizeString((body as any).entreprise, 200);
    const email = sanitizeString((body as any).email, 200);
    const site = sanitizeString((body as any).site, 300);
    const contexte = sanitizeString((body as any).contexte, 8000);
    const sujets = Array.isArray((body as any).sujets)
      ? (body as any).sujets
          .map((s: unknown) => sanitizeString(s, 200))
          .filter(Boolean)
      : [];

    if (!prenom || !email || !contexte) {
      return NextResponse.json(
        { ok: false, error: "Champs obligatoires manquants." },
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

    const to = process.env.AUDIT_RECIPIENT ?? process.env.SMTP_USER!;

    const subject = `Nouvelle demande d’audit gratuit – ${prenom} (${entreprise || "indépendant"})`;

    const text = [
      `Prénom : ${prenom}`,
      `Entreprise : ${entreprise || "—"}`,
      `Email : ${email}`,
      `Site : ${site || "—"}`,
      `Sujets : ${sujets.length ? sujets.join(", ") : "—"}`,
      "",
      "Contexte :",
      contexte,
    ].join("\n");

    const html = `
      <h2>Nouvelle demande d’audit gratuit</h2>
      <p><strong>Prénom :</strong> ${prenom}</p>
      <p><strong>Entreprise :</strong> ${entreprise || "—"}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Site :</strong> ${site || "—"}</p>
      <p><strong>Sujets :</strong> ${sujets.length ? sujets.join(", ") : "—"}</p>
      <h3>Contexte</h3>
      <p style="white-space:pre-line;">${contexte}</p>
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
    console.error("[AUDIT_API_ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur lors de l’envoi de l’email." },
      { status: 500 },
    );
  }
}
