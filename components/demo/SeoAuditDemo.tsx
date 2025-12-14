"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Audit = {
  score: number;
  summary: string;
  top3: { title: string; why: string; how: string }[];
  quickWins: { title: string; how: string }[];
  nextStep: { cta: string; link: string };
};

function isUrl(v: string) {
  try {
    const u = new URL(v);
    return ["http:", "https:"].includes(u.protocol);
  } catch {
    return false;
  }
}

export default function SeoAuditDemo() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [audit, setAudit] = useState<Audit | null>(null);
  const [err, setErr] = useState<string>("");

  const canRun = useMemo(() => isUrl(url.trim()) && !loading, [url, loading]);

  async function run() {
    if (!canRun) return;
    setErr("");
    setAudit(null);
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-plan": "free" },
        body: JSON.stringify({ type: "seo_audit", url: url.trim() }),
      });

      const data = (await res.json()) as Audit;
      if (typeof data?.score !== "number") throw new Error("Bad payload");
      setAudit(data);
    } catch {
      setErr("Impossible de générer l’audit. Réessaie avec une autre URL.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://exemple.com/page"
          className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-800 dark:bg-zinc-950"
        />
        <button
          onClick={run}
          disabled={!canRun}
          className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-zinc-900"
        >
          {loading ? "Analyse…" : "Auditer"}
        </button>
      </div>

      {!audit && !err && (
        <div className="rounded-xl border border-zinc-200/60 bg-zinc-50 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
          Résultat en 60 secondes : score, top 3 priorités, quick wins, prochaine étape.
        </div>
      )}

      {err && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
          {err}
        </div>
      )}

      {audit && (
        <div className="space-y-4">
          <div className="rounded-2xl border border-zinc-200/60 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-zinc-500">Score SEO</p>
                <p className="text-2xl font-extrabold">{audit.score}/100</p>
              </div>
              <div className="h-2 w-40 rounded-full bg-zinc-100 dark:bg-zinc-900">
                <div
                  className="h-2 rounded-full bg-indigo-600"
                  style={{ width: `${Math.max(0, Math.min(100, audit.score))}%` }}
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
              {audit.summary}
            </p>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200/60 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-sm font-bold">Top 3 priorités</h3>
              <div className="mt-3 space-y-3">
                {audit.top3?.slice(0, 3).map((x, i) => (
                  <div key={i} className="rounded-xl border border-zinc-200/60 p-3 dark:border-zinc-800">
                    <p className="font-semibold">{x.title}</p>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                      <span className="font-semibold">Pourquoi :</span> {x.why}
                    </p>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                      <span className="font-semibold">Comment :</span> {x.how}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200/60 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-sm font-bold">Quick wins (30 min)</h3>
              <div className="mt-3 space-y-3">
                {audit.quickWins?.slice(0, 3).map((x, i) => (
                  <div key={i} className="rounded-xl border border-zinc-200/60 p-3 dark:border-zinc-800">
                    <p className="font-semibold">{x.title}</p>
                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">{x.how}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-200/60 bg-indigo-50 p-4 dark:border-indigo-900/60 dark:bg-indigo-950/30">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                {audit.nextStep?.cta ?? "Aller plus loin"}
              </p>
              <Link
                href={audit.nextStep?.link ?? "/audit-gratuit"}
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Continuer
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}