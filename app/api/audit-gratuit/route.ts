// app/api/audit-gratuit/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      prenom,
      entreprise,
      email,
      site,
      sujets,
      contexte,
    }: {
      prenom: string;
      entreprise?: string;
      email: string;
      site?: string;
      sujets?: string[];
      contexte: string;
    } = body;

    if (!prenom || !email || !contexte) {
      return NextResponse.json(
        { ok: false, error: "Champs obligatoires manquants." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: true, // 465 = SSL
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
      `Sujets : ${(sujets && sujets.join(", ")) || "—"}`,
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
      <p><strong>Sujets :</strong> ${(sujets && sujets.join(", ")) || "—"}</p>
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
