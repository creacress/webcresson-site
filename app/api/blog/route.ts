import { NextResponse } from "next/server";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function POST(req: Request) {
  const secret = process.env.WEB_CRESSON_API_TOKEN;
  if (!secret) return NextResponse.json({ error: "Missing server token" }, { status: 500 });

  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";

  if (token !== secret) return unauthorized();

  const body = await req.json();

  // TODO: on stocke juste après (DB ou fichier)
  return NextResponse.json({ ok: true }, { status: 201 });
}