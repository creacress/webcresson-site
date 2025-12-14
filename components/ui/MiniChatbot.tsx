"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Msg = { role: "user" | "assistant"; content: string };

export function MiniChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Salut 👋 Dis-moi ton objectif (plus de leads, SEO, automatisation, IA) et je te guide.",
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
        body: JSON.stringify({ type: "chat", messages: next }),
      });
      const data = await res.json();
      setMsgs((m) => [...m, { role: "assistant", content: String(data.text ?? "Réessaie.") }]);
    } catch {
      setMsgs((m) => [...m, { role: "assistant", content: "Erreur réseau. Réessaie." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500"
        aria-label="Ouvrir le chatbot"
      >
        {open ? "Fermer" : "Chat IA"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[92vw] max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Assistant WebCressonTech</p>
              <p className="text-xs text-slate-500">Qualification + orientation</p>
            </div>
            <Link
              href="/demo-ia"
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-300"
            >
              Démo IA →
            </Link>
          </div>

          <div className="h-72 space-y-3 overflow-auto px-4 py-3 text-sm">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[92%] rounded-xl px-3 py-2 ${
                  m.role === "user"
                    ? "ml-auto bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="max-w-[92%] rounded-xl bg-slate-100 px-3 py-2 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                …
              </div>
            )}
          </div>

          <div className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-800">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: je veux plus de leads…"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-800 dark:bg-slate-950"
              onKeyDown={(e) => (e.key === "Enter" ? send() : null)}
            />
            <button
              onClick={send}
              disabled={!canSend}
              className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </>
  );
}