import { createGateway } from "@ai-sdk/gateway";
import { generateText } from "ai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const gateway = createGateway({
  apiKey: process.env.AI_GATEWAY_API_KEY!,
});

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

function normalizePlan(v: unknown): "free" | "premium" {
  const s = String(v ?? "free").toLowerCase();
  return s === "premium" ? "premium" : "free";
}

function safeString(v: unknown, fallback = ""): string {
  return typeof v === "string" ? v : fallback;
}

function safeMessages(v: unknown): ChatMessage[] {
  if (!Array.isArray(v)) return [];
  return v
    .map((m) => {
      const role = m?.role;
      const content = m?.content;
      if ((role === "user" || role === "assistant" || role === "system") && typeof content === "string") {
        return { role, content } as ChatMessage;
      }
      return null;
    })
    .filter(Boolean) as ChatMessage[];
}

function stripMarkdownLike(text: string): string {
  // We don't want markdown-heavy answers in UI.
  return text
    .replace(/```[\s\S]*?```/g, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function isValidHttpUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

const SYSTEM_CHAT = `
Tu es l’assistant WebCressonTech.
Ton rôle : qualifier rapidement le besoin d’un visiteur professionnel et l’orienter.

Règles strictes :
- Réponse courte (max 2 phrases).
- Une seule question à la fois.
- Ton humain, direct, orienté business.
- Pas de jargon IA.
- Pas de listes longues.
- Pas de markdown.

Objectif : comprendre le besoin principal puis orienter vers UNE action :
- /audit-gratuit si besoin clair et sérieux
- /demo-ia si besoin flou ou curieux
- /contact si urgence, budget, ou demande de devis

Format :
1) Reformulation courte.
2) Une question simple pour avancer.
`;

const SYSTEM_SEO = `
Tu es un auditeur SEO senior.
But : produire un audit SEO ultra lisible, court et actionnable, sans markdown.

Contraintes :
- Pas de markdown (pas de #, pas de listes avec *).
- Maximum 12 lignes.
- Pas d’explications théoriques.
- Prioriser l’impact (conversion + SEO).

Format EXACT à respecter :
SCORE: <0-100>
TOP 3 ACTIONS: 1) ... | 2) ... | 3) ...
QUICK WINS (48h): ... | ... | ...
RISQUES: ... | ...
CONTENU: ...
TECHNIQUE: ...
NEXT STEP: ... (doit encourager l’audit gratuit)
`;

export async function POST(req: Request) {
  try {
    const plan = normalizePlan(req.headers.get("x-plan"));
    const body = await req.json().catch(() => ({}));

    const typeRaw = safeString(body?.type, "").toLowerCase();
    // backward compat: if no type but messages exist => chat
    const type: "seo_audit" | "chat" =
      typeRaw === "seo_audit" || typeRaw === "seo" ? "seo_audit" : "chat";

    // 🔀 Routing modèles
    const model =
      plan === "premium"
        ? gateway("gpt-5.2")
        : gateway("gemini-2.5-flash-lite");

    if (type === "seo_audit") {
      const url = safeString(body?.url, "").trim();
      if (!url || !isValidHttpUrl(url)) {
        return NextResponse.json(
          {
            text: "URL invalide. Collez une URL complète (https://...).",
          },
          { status: 400 }
        );
      }

      const prompt = `URL: ${url}\nContexte: site vitrine B2B (services).`; 

      const result = await generateText({
        model,
        system: SYSTEM_SEO,
        prompt,
        // AI SDK: prefer maxOutputTokens over maxTokens
        maxOutputTokens: plan === "premium" ? 500 : 350,
        temperature: 0.2,
      });

      return NextResponse.json({
        text: stripMarkdownLike(result.text),
      });
    }

    // CHAT
    const messages = safeMessages(body?.messages);
    // get last user message, keep a tiny context window
    const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
    const contextWindow = messages
      .slice(-8)
      .map((m) => `${m.role.toUpperCase()}: ${m.content}`)
      .join("\n");

    const prompt = `Conversation récente:\n${contextWindow}\n\nDernier message utilisateur:\n${lastUser}`;

    const result = await generateText({
      model,
      system: SYSTEM_CHAT,
      prompt,
      maxOutputTokens: plan === "premium" ? 220 : 160,
      temperature: 0.4,
    });

    return NextResponse.json({
      text: stripMarkdownLike(result.text),
    });
  } catch (err) {
    console.error("/api/ai error", err);
    return NextResponse.json(
      { text: "Erreur serveur. Réessayez dans quelques secondes." },
      { status: 500 }
    );
  }
}
