"use client";

import { useMemo, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatDemo() {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Salut 👋 Décris ton objectif (plus de leads, meilleur SEO, automatisation, IA) et je te guide.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const canSend = useMemo(() => input.trim().length >= 3 && !loading, [input, loading]);

  async function send() {
    if (!canSend) return;

    const next = [...msgs, { role: "user", content: input.trim() } as Msg];
    setMsgs(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-plan": "free" },
        body: JSON.stringify({
          type: "chat",
          messages: next,
        }),
      });

      const data = await res.json();
      setMsgs((m) => [...m, { role: "assistant", content: data.text ?? "Hmm, réessaie." }]);
    } catch {
      setMsgs((m) => [...m, { role: "assistant", content: "Erreur réseau. Réessaie." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <div className="h-72 overflow-auto rounded-xl border border-zinc-200 p-3 text-sm dark:border-zinc-800">
        <div className="space-y-3">
          {msgs.map((m, i) => (
            <div
              key={i}
              className={`max-w-[92%] rounded-xl px-3 py-2 ${
                m.role === "user"
                  ? "ml-auto bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100"
              }`}
            >
              {m.content}
            </div>
          ))}
          {loading && (
            <div className="max-w-[92%] rounded-xl bg-zinc-100 px-3 py-2 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              …
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ex: je veux plus de leads sur mon site…"
          className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-800 dark:bg-zinc-950"
          onKeyDown={(e) => (e.key === "Enter" ? send() : null)}
        />
        <button
          onClick={send}
          disabled={!canSend}
          className="shrink-0 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}