// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      prenom,
      nom,
      email,
      entreprise,
      sujet,
      message,
      source,
    }: {
      prenom: string;
      nom?: string;
      email: string;
      entreprise?: string;
      sujet?: string;
      message: string;
      source?: string;
    } = body;

    if (!prenom || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Prénom, email et message sont obligatoires." },
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
