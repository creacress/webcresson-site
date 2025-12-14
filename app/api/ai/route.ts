<<<<<<< HEAD
// app/api/ai/route.ts
import { NextResponse } from "next/server";
import { createGateway } from "@ai-sdk/gateway";
import { generateText } from "ai";
=======
import { createGateway } from "@ai-sdk/gateway";
import { generateText } from "ai";
import { NextResponse } from "next/server";
>>>>>>> origin/master

export const runtime = "nodejs";

const gateway = createGateway({
  apiKey: process.env.AI_GATEWAY_API_KEY!,
});

<<<<<<< HEAD
type Plan = "free" | "premium";
type ChatMsg = { role: "user" | "assistant"; content: string };

type SeoAuditPayload = {
  score: number; // 0-100
  summary: string; // 1 phrase
  top3: { title: string; why: string; how: string }[];
  quickWins: { title: string; how: string }[];
  nextStep: { cta: string; link: string };
};

type RoiPayload = {
  monthlyCost: number; // coût actuel estimé €/mois
  monthlySaved: number; // économies estimées €/mois
  roi3m: number; // %
  roi6m: number; // %
  roi12m: number; // %
  summary: string; // 1 phrase
  assumptions: { label: string; value: string }[];
  nextStep: { cta: string; link: string };
};

function safeJsonParse<T>(raw: string): T | null {
  try {
    const start = raw.indexOf("{");
    const end = raw.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) return null;
    return JSON.parse(raw.slice(start, end + 1)) as T;
  } catch {
    return null;
  }
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function euros(n: number) {
  const x = Number.isFinite(n) ? n : 0;
  return Math.round(x * 100) / 100;
}

function pickModel(plan: Plan) {
  return plan === "premium"
    ? gateway("gpt-5.2") // puissant
    : gateway("gemini-2.5-flash-lite"); // rapide/cheap
}

function buildChatPrompt(messages: ChatMsg[]) {
  const lastUser =
    [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  return `
Tu es l'assistant WebCressonTech. Ton but : qualifier le besoin et orienter vers la bonne page.
Règles:
- Réponse courte (max 6 lignes)
- 1 question de qualification max
- Termine par un CTA clair parmi:
  - /audit-gratuit (si SEO/site)
  - /tarifications (si budget/offres)
  - /contact (si besoin complexe/urgent)

Contexte: le client vient d'une page "Démo IA".
Message du client: ${JSON.stringify(lastUser)}
`;
}

function buildSeoAuditPrompt(url: string) {
  return `
Tu es un consultant SEO. Réponds UNIQUEMENT en JSON valide (sans markdown, sans texte autour).
Objectif: audit ultra-court et actionnable (lecture 60 secondes) pour l'URL: ${url}

Schéma JSON EXACT:
{
  "score": number,
  "summary": string,
  "top3": [{"title": string, "why": string, "how": string}],
  "quickWins": [{"title": string, "how": string}],
  "nextStep": {"cta": string, "link": string}
}

Contraintes:
- Français
- "why" et "how" : 1 phrase chacun max
- pas plus de 12 mots par title
- top3 = 3 items si possible
- quickWins = 3 items si possible
- nextStep.link doit être une route interne: "/audit-gratuit" ou "/contact" ou "/tarifications"
`;
}

function fallbackSeoAudit(): SeoAuditPayload {
  return {
    score: 70,
    summary: "Audit indisponible pour le moment. Essayez une autre URL.",
    top3: [],
    quickWins: [],
    nextStep: { cta: "Lancer un audit gratuit", link: "/audit-gratuit" },
  };
}

function computeRoiLocal(input: {
  teamSize: number;
  tasksCount: number;
  hoursPerWeek: number; // heures répétitives / semaine (déjà “global équipe” si tu veux)
  hourlyRate: number; // €/h
  automationCoverage: number; // 0..1
  successRate: number; // 0..1
  monthlyServiceCost: number; // €/mois (ton offre)
}): RoiPayload {
  const weeklyHours = Math.max(0, input.hoursPerWeek);
  const monthlyHours = weeklyHours * 4.33;

  const monthlyCost = monthlyHours * input.hourlyRate;
  const monthlySaved = monthlyCost * input.automationCoverage * input.successRate;

  const netMonthly = monthlySaved - input.monthlyServiceCost;

  const roiPct = (months: number) => {
    const invest = input.monthlyServiceCost * months;
    if (invest <= 0) return 0;
    return ((netMonthly * months) / invest) * 100;
  };

  const summary =
    monthlySaved >= input.monthlyServiceCost
      ? "Rentabilité probable si on automatise les tâches les plus répétitives."
      : "Rentabilité possible, mais il faut viser des tâches à plus fort impact.";

  return {
    monthlyCost: euros(monthlyCost),
    monthlySaved: euros(monthlySaved),
    roi3m: euros(roiPct(3)),
    roi6m: euros(roiPct(6)),
    roi12m: euros(roiPct(12)),
    summary,
    assumptions: [
      { label: "Taux d’automatisation", value: `${Math.round(input.automationCoverage * 100)}%` },
      { label: "Taux de succès", value: `${Math.round(input.successRate * 100)}%` },
      { label: "Coût horaire estimé", value: `${euros(input.hourlyRate)} €/h` },
      { label: "Coût service", value: `${euros(input.monthlyServiceCost)} €/mois` },
    ],
    nextStep: { cta: "Valider par un audit gratuit", link: "/audit-gratuit" },
  };
}

export async function POST(req: Request) {
  const plan = ((req.headers.get("x-plan") ?? "free").toLowerCase() as Plan) || "free";
  const model = pickModel(plan);

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide." }, { status: 400 });
  }

  const type = String(body?.type ?? "");
  if (!type) return NextResponse.json({ error: "type manquant." }, { status: 400 });

  // -------------------------
  // 1) CHAT (qualification)
  // -------------------------
  if (type === "chat") {
    const messages = (body?.messages ?? []) as ChatMsg[];
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "messages manquants." }, { status: 400 });
    }

    const prompt = buildChatPrompt(messages);

    const result = await generateText({
      model,
      prompt,
      maxOutputTokens: 350,
      temperature: 0.4,
    });

    return NextResponse.json({
      text: result.text.trim(),
      plan,
      model: plan === "premium" ? "gpt-5.2" : "gemini-2.5-flash-lite",
    });
  }

  // -------------------------
  // 2) SEO AUDIT (JSON)
  // -------------------------
  if (type === "seo_audit") {
    const url = String(body?.url ?? "").trim();
    if (!url || (!url.startsWith("http://") && !url.startsWith("https://"))) {
      return NextResponse.json({ error: "url invalide." }, { status: 400 });
    }

    const prompt = buildSeoAuditPrompt(url);

    const result = await generateText({
      model,
      prompt,
      maxOutputTokens: 520,
      temperature: 0.3,
    });

    const parsed = safeJsonParse<SeoAuditPayload>(result.text);
    if (!parsed) return NextResponse.json(fallbackSeoAudit(), { status: 200 });

    const normalized: SeoAuditPayload = {
      score: clamp(Number(parsed.score ?? 0), 0, 100),
      summary: String(parsed.summary ?? "").slice(0, 220),
      top3: Array.isArray(parsed.top3) ? parsed.top3.slice(0, 3) : [],
      quickWins: Array.isArray(parsed.quickWins) ? parsed.quickWins.slice(0, 3) : [],
      nextStep: {
        cta: String(parsed.nextStep?.cta ?? "Lancer un audit gratuit").slice(0, 80),
        link: String(parsed.nextStep?.link ?? "/audit-gratuit"),
      },
    };

    const allowed = new Set(["/audit-gratuit", "/contact", "/tarifications"]);
    if (!allowed.has(normalized.nextStep.link)) {
      normalized.nextStep.link = "/audit-gratuit";
    }

    return NextResponse.json(normalized, { status: 200 });
  }

  // -------------------------
  // 3) ROI (JSON)
  // -------------------------
  if (type === "roi") {
    const teamSize = Number(body?.teamSize ?? 1);
    const tasksCount = Number(body?.tasksCount ?? 5);
    const hoursPerWeek = Number(body?.hoursPerWeek ?? 6);

    if (
      !Number.isFinite(teamSize) ||
      !Number.isFinite(tasksCount) ||
      !Number.isFinite(hoursPerWeek)
    ) {
      return NextResponse.json({ error: "payload invalide." }, { status: 400 });
    }

    const t = Math.max(1, Math.round(teamSize));
    const tasks = Math.max(0, Math.round(tasksCount));
    const h = Math.max(0, hoursPerWeek);

    // Hypothèses (MVP) : tu peux les rendre éditables côté UI plus tard
    const hourlyRate = plan === "premium" ? 55 : 35; // €/h
    const baseCoverage = Math.min(0.75, 0.25 + tasks * 0.06 + h * 0.02);
    const automationCoverage = plan === "premium" ? Math.min(0.85, baseCoverage + 0.1) : baseCoverage;
    const successRate = plan === "premium" ? 0.85 : 0.7;

    // coût service indicatif (mets ici ton prix automatisation mensuel si tu veux)
    const monthlyServiceCost = 180;

    // impact “équipe” : on multiplie les heures répétitives par la taille de l’équipe
    const effectiveHours = h * t;

    const payload = computeRoiLocal({
      teamSize: t,
      tasksCount: tasks,
      hoursPerWeek: effectiveHours,
      hourlyRate,
      automationCoverage,
      successRate,
      monthlyServiceCost,
    });

    // Option : une phrase premium plus “humaine” (toujours courte)
    if (plan === "premium") {
      const p = `
Réponds UNIQUEMENT en JSON valide.
Schéma: { "summary": string }

Contexte:
- équipe: ${t}
- tâches répétitives: ${tasks}
- heures/semaine (équipe): ${effectiveHours}
- économies estimées/mois: ${payload.monthlySaved} €
Fais une phrase courte, sobre, orientée business (sans hype).
`;
      const r = await generateText({
        model,
        prompt: p,
        maxOutputTokens: 120,
        temperature: 0.4,
      });

      const parsed = safeJsonParse<{ summary: string }>(r.text);
      if (parsed?.summary) payload.summary = String(parsed.summary).slice(0, 160);
    }

    return NextResponse.json(payload, { status: 200 });
  }

  return NextResponse.json({ error: "type inconnu." }, { status: 400 });
}
=======
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
>>>>>>> origin/master
