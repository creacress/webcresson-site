import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";

  if (!process.env.WEB_CRESSON_API_TOKEN || token !== process.env.WEB_CRESSON_API_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  // TODO: enregistrer en DB ou fichier
  return NextResponse.json({ ok: true, received: body }, { status: 201 });
}