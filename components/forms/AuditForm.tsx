"use client";

import { useState, type FormEvent } from "react";

const SUBJECT_OPTIONS = [
  "Automatisation (prospection / emails / CRM)",
  "Intégration IA",
  "Création / refonte de site",
  "SEO & visibilité",
  "Autre (à préciser)",
];

const TOTAL_STEPS = 3 as const;

export function AuditForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [prenom, setPrenom] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");
  const [checked, setChecked] = useState<string[]>([]);
  const [contexte, setContexte] = useState("");

  const [loading, setLoading] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [message, setMessage] = useState<null | { type: "ok" | "error"; text: string }>(null);

  const toggleSujet = (label: string) => {
    setChecked((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label],
    );
  };

  const validateStep = (currentStep: 1 | 2 | 3): boolean => {
    if (currentStep === 1) {
      if (!prenom.trim() || !email.trim()) {
        setLocalError("Ajoute au moins votre prénom et votre email pour continuer.");
        return false;
      }
    }

    if (currentStep === 2) {
      if (checked.length === 0) {
        setLocalError("Choisis au moins un sujet pour que l’audit soit pertinent.");
        return false;
      }
    }

    if (currentStep === 3) {
      if (!contexte.trim()) {
        setLocalError("Décris votre contexte en quelques lignes pour que je puisse t’aider.");
        return false;
      }
    }

    setLocalError(null);
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    // Étape intermédiaire → on avance seulement
    if (step < TOTAL_STEPS) {
      const ok = validateStep(step);
      if (!ok) return;
      setStep((prev) => (prev + 1) as 1 | 2 | 3);
      return;
    }

    // Dernière étape → validation + envoi
    const ok = validateStep(step);
    if (!ok) return;

    setLoading(true);
    try {
      const res = await fetch("/api/audit-gratuit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom,
          entreprise,
          email,
          site,
          sujets: checked,
          contexte,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data?.error || "Erreur inconnue");
      }

      setMessage({
        type: "ok",
        text: "Merci ! Ta demande d’audit a bien été envoyée. Je reviens vers toi rapidement.",
      });

      // reset léger
      setContexte("");
    } catch (_err) {
      setMessage({
        type: "error",
        text: "Impossible d’envoyer ta demande pour le moment. Réessaie dans quelques minutes.",
      });
    } finally {
      setLoading(false);
    }
  };

  const progress = (step / TOTAL_STEPS) * 100;

  const currentStepLabel =
    step === 1
      ? "Infos de base"
      : step === 2
      ? "Sur quoi tu veux qu’on se concentre"
      : "votre contexte";

  const helperSentence =
    step === 1
      ? "30 secondes pour poser les infos de base."
      : step === 2
      ? "Choisis ce qui t’intéresse, ça m’aide à prioriser."
      : "Quelques lignes suffisent, pas besoin de roman.";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)] text-sm"
    >
      {/* Header + progression */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            Demander votre audit gratuit
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

      {/* STEP 1 */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
              votre prénom *
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
              Nom de votre entreprise (ou activité)
            </label>
            <input
              type="text"
              value={entreprise}
              onChange={(e) => setEntreprise(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
              Email de contact *
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
              Site web (si tu en as un)
            </label>
            <input
              type="url"
              placeholder="https://..."
              value={site}
              onChange={(e) => setSite(e.target.value)}
              className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
            />
          </div>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="space-y-3">
          <label className="block text-xs font-medium text-slate-700 dark:text-slate-200">
            Quels sujets t’intéressent le plus ? *
          </label>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            vous pouvez en sélectionner plusieurs : ça m’aide à voir où l’impact sera le plus fort.
          </p>
          <div className="flex flex-wrap gap-2">
            {SUBJECT_OPTIONS.map((label) => {
              const active = checked.includes(label);
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => toggleSujet(label)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition
                    ${
                      active
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:border-indigo-400 dark:bg-indigo-950/40 dark:text-indigo-100"
                        : "border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    }`}
                >
                  {active ? "✓" : "+"} <span>{label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="space-y-3">
          <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
            Décris votre contexte en quelques lignes *
          </label>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Par exemple : où tu perds du temps, ce qui te frustre, comment tu travailles
            aujourd’hui, ce que tu aimerais déléguer à un système.
          </p>
          <textarea
            rows={5}
            value={contexte}
            onChange={(e) => setContexte(e.target.value)}
            placeholder="Ex : je passe beaucoup de temps sur la prospection mail, mon site ne convertit pas vraiment, je dois tout faire à la main côté admin..."
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
          />
        </div>
      )}

      {message && (
        <p
          className={`text-xs ${
            message.type === "ok"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-rose-600 dark:text-rose-400"
          }`}
        >
          {message.text}
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
            : "Envoyer la demande d’audit"}
        </button>
      </div>

      <p className="text-[11px] text-slate-500 dark:text-slate-400">
        Bientôt : ce formulaire créera automatiquement une fiche dans votre CRM / Notion
        et déclenchera un workflow n8n pour le suivi.
      </p>
    </form>
  );
}
