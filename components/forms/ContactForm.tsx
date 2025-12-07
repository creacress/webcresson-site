"use client";

import { useState, type FormEvent } from "react";

const TOTAL_STEPS = 3 as const;

export function ContactForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("");

  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<null | { type: "ok" | "error"; text: string }>(null);

  const validateStep = (currentStep: 1 | 2 | 3): boolean => {
    if (currentStep === 1) {
      if (!prenom.trim() || !email.trim()) {
        setLocalError("Ajoute au moins votre prénom et votre email pour continuer.");
        return false;
      }
    }

    if (currentStep === 2) {
      if (!sujet.trim()) {
        setLocalError("Choisis un sujet principal pour que je sache par où commencer.");
        return false;
      }
    }

    if (currentStep === 3) {
      if (!message.trim()) {
        setLocalError("Donne quelques détails dans votre message pour que je puisse répondre.");
        return false;
      }
    }

    setLocalError(null);
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);

    if (step < TOTAL_STEPS) {
      const ok = validateStep(step);
      if (!ok) return;
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
      return;
    }

    const ok = validateStep(step);
    if (!ok) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom,
          nom,
          email,
          entreprise,
          sujet,
          message,
          source,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Erreur inconnue");
      }

      setFeedback({
        type: "ok",
        text: "Merci ! votre message a bien été envoyé. Je te réponds au plus vite.",
      });

      // reset léger
      setMessage("");
    } catch (_err) {
      setFeedback({
        type: "error",
        text: "Impossible d’envoyer le message pour le moment. Réessaie un peu plus tard.",
      });
    } finally {
      setLoading(false);
    }
  };

  const progress = (step / TOTAL_STEPS) * 100;

  const currentStepLabel =
    step === 1
      ? "Qui tu es"
      : step === 2
      ? "Le sujet de votre message"
      : "Ce que tu veux m’expliquer";

  const helperSentence =
    step === 1
      ? "On commence par tes coordonnées pour pouvoir te répondre."
      : step === 2
      ? "Un sujet clair m’aide à te répondre rapidement."
      : "Deux ou trois phrases suffisent pour commencer.";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)] text-sm"
    >
      {/* Header + progression */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            Laisser un message
          </h2>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
            Étape {step} / {TOTAL_STEPS}
          </span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {currentStepLabel} – {helperSentence}
        </p>
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-indigo-500 transition-[width]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {localError && (
        <p className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-200">
          {localError}
        </p>
      )}

      {/* STEP 1 : identité */}
      {step === 1 && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
                Prénom *
              </label>
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
                Nom
              </label>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
              Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
              Nom de l’entreprise / activité
            </label>
            <input
              type="text"
              value={entreprise}
              onChange={(e) => setEntreprise(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
            />
          </div>
        </div>
      )}

      {/* STEP 2 : sujet / source */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
              Sujet principal *
            </label>
            <select
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              value={sujet}
              onChange={(e) => setSujet(e.target.value)}
            >
              <option value="">Sélectionne un sujet…</option>
              <option>Automatisation (prospection, emails, CRM…)</option>
              <option>Intégration IA</option>
              <option>Création / refonte de site</option>
              <option>SEO & présence web</option>
              <option>Autre / pas sûr</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
              Comment as-tu entendu parler de WebCressonTech ?
            </label>
            <input
              type="text"
              placeholder="Ex : LinkedIn, bouche-à-oreille, recherche Google..."
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
            />
          </div>
        </div>
      )}

      {/* STEP 3 : message */}
      {step === 3 && (
        <div className="space-y-3">
          <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
            Message *
          </label>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            vous pouvez par exemple expliquer :
            <br />
            • où tu perds du temps aujourd’hui
            <br />
            • ce que tu aimerais améliorer
            <br />
            • les outils que tu utilises déjà
          </p>
          <textarea
            rows={5}
            placeholder="Ex : je passe beaucoup de temps sur [tâche], j’aimerais [objectif], voici les outils que j’utilise aujourd’hui..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
          />
        </div>
      )}

      {feedback && (
        <p
          className={`text-xs ${
            feedback.type === "ok"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-rose-600 dark:text-rose-400"
          }`}
        >
          {feedback.text}
        </p>
      )}

      {/* Actions */}
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        {step > 1 && (
          <button
            type="button"
            onClick={() => {
              setLocalError(null);
              setStep((prev) => (prev - 1) as 1 | 2 | 3);
            }}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            ← Revenir à l’étape précédente
          </button>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {loading
            ? "Envoi en cours..."
            : step < TOTAL_STEPS
            ? "Continuer"
            : "Envoyer le message"}
        </button>
      </div>

      <p className="text-[11px] text-slate-500 dark:text-slate-400">
        Bientôt : ce formulaire sera relié à n8n pour créer un contact dans votre CRM
        / Notion et déclencher un workflow de suivi.
      </p>
    </form>
  );
}
