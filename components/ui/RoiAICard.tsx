"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type RoiPayload = {
  monthlyCost: number;
  monthlySaved: number;
  roi3m: number;
  roi6m: number;
  roi12m: number;
  summary: string;
  assumptions: { label: string; value: string }[];
  nextStep: { cta: string; link: string };
};

function fmt(n: number) {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n);
}

export function RoiAICard() {
  const [teamSize, setTeamSize] = useState(1);
  const [tasksCount, setTasksCount] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<RoiPayload | null>(null);
  const [err, setErr] = useState("");

  const canRun = useMemo(
    () => teamSize >= 1 && tasksCount >= 0 && hoursPerWeek >= 0 && !loading,
    [teamSize, tasksCount, hoursPerWeek, loading]
  );

  async function run() {
    if (!canRun) return;
    setErr("");
    setData(null);
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-plan": "free" },
        body: JSON.stringify({
          type: "roi",
          teamSize,
          tasksCount,
          hoursPerWeek,
        }),
      });

      const json = (await res.json()) as RoiPayload;
      if (typeof json?.monthlySaved !== "number") throw new Error("bad payload");
      setData(json);
    } catch {
      setErr("Impossible de calculer le ROI. Réessaie.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
          ROI (Démo IA)
        </p>
        <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Estimez vos gains en 60 secondes
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Renseignez 3 infos. On vous donne les économies mensuelles + ROI.
        </p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Field label="Équipe" value={teamSize} onChange={setTeamSize} min={1} step={1} />
        <Field label="Tâches" value={tasksCount} onChange={setTasksCount} min={0} step={1} />
        <Field label="h / semaine" value={hoursPerWeek} onChange={setHoursPerWeek} min={0} step={0.5} />
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={run}
          disabled={!canRun}
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 disabled:opacity-50"
        >
          {loading ? "Calcul…" : "Calculer"}
        </button>
        <Link
          href="/demo-ia"
          className="inline-flex items-center justify-center rounded-full border border-indigo-500/40 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50 dark:border-indigo-400/60 dark:bg-slate-950/60 dark:text-indigo-200 dark:hover:bg-slate-900"
        >
          Voir toutes les démos →
        </Link>
      </div>

      {!data && !err && (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200">
          Résultat : économies / mois + ROI 3/6/12 mois (estimation).
        </div>
      )}

      {err && (
        <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
          {err}
        </div>
      )}

      {data && (
        <div className="mt-4 space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Kpi title="Coût actuel / mois" value={`${fmt(data.monthlyCost)} €`} />
            <Kpi title="Économies / mois" value={`${fmt(data.monthlySaved)} €`} />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Kpi title="ROI 3 mois" value={`${fmt(data.roi3m)} %`} />
            <Kpi title="ROI 6 mois" value={`${fmt(data.roi6m)} %`} />
            <Kpi title="ROI 12 mois" value={`${fmt(data.roi12m)} %`} />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{data.summary}</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {data.assumptions?.slice(0, 4).map((a, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-200"
                >
                  <span className="font-semibold">{a.label} :</span> {a.value}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-200/60 bg-indigo-50 p-4 dark:border-indigo-900/60 dark:bg-indigo-950/30">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                {data.nextStep?.cta ?? "Valider par un audit"}
              </p>
              <Link
                href={data.nextStep?.link ?? "/audit-gratuit"}
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
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

function Field(props: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  step: number;
}) {
  return (
    <label className="space-y-1">
      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{props.label}</span>
      <input
        type="number"
        min={props.min}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
      />
    </label>
  );
}

function Kpi({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-50">{value}</p>
    </div>
  );
}