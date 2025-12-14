import { createGateway } from "@ai-sdk/gateway";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const gateway = createGateway({
  apiKey: process.env.AI_GATEWAY_API_KEY!,
});

export async function POST(req: Request) {
  const plan = (req.headers.get("x-plan") ?? "free").toLowerCase();
  const body = await req.json();

  // 🔀 Routing modèles
  const model =
    plan === "premium"
      ? gateway("gpt-5.2")              // puissant
      : gateway("gemini-2.5-flash-lite"); // rapide / pas cher

  const prompt =
    body.type === "seo_audit"
      ? `Fais un audit SEO clair et actionnable pour cette URL : ${body.url}`
      : `Agis comme un assistant business qui qualifie le besoin client :
${JSON.stringify(body.messages)}`;

  const result = await generateText({
    model,
    prompt,
  });

  return NextResponse.json({ text: result.text });
}
