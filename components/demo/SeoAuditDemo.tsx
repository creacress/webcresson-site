"use client";

import { useMemo, useState } from "react";

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
  const [out, setOut] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const canRun = useMemo(() => isUrl(url.trim()) && !loading, [url, loading]);

  async function run() {
    if (!canRun) return;
    setOut("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-plan": "free" },
        body: JSON.stringify({ type: "seo_audit", url: url.trim() }),
      });

      const data = await res.json();
      setOut(data.text ?? "Aucun résultat.");
    } catch {
      setOut("Erreur réseau. Réessaie.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
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
          Auditer
        </button>
      </div>

      <div className="min-h-40 whitespace-pre-wrap rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
        {loading ? "Analyse en cours…" : out || "Résultat ici (diagnostic + quick wins)."}
      </div>
    </div>
  );
}
