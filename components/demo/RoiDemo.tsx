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

export default function RoiDemo() {
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
    <div className="space-y-4">
      {/* Inputs */}
      <div className="grid gap-3 sm:grid-cols-3">
        <Field
          label="Taille équipe"
          value={teamSize}
          onChange={setTeamSize}
          min={1}
          step={1}
        />
        <Field
          label="Tâches répétitives"
          value={tasksCount}
          onChange={setTasksCount}
          min={0}
          step={1}
        />
        <Field
          label="Temps / semaine (h)"
          value={hoursPerWeek}
          onChange={setHoursPerWeek}
          min={0}
          step={0.5}
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={run}
          disabled={!canRun}
          className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
        >
          {loading ? "Calcul…" : "Calculer"}
        </button>
        <button
          onClick={() => {
            setTeamSize(1);
            setTasksCount(5);
            setHoursPerWeek(6);
            setData(null);
            setErr("");
          }}
          className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold dark:border-zinc-800"
        >
          Reset
        </button>
      </div>

      {!data && !err && (
        <div className="rounded-xl border border-zinc-200/60 bg-zinc-50 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
          Résultat : économies mensuelles + ROI à 3/6/12 mois (estimation).
        </div>
      )}

      {err && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
          {err}
        </div>
      )}

      {data && (
        <div className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Kpi title="Coût actuel estimé / mois" value={`${fmt(data.monthlyCost)} €`} />
            <Kpi title="Économies estimées / mois" value={`${fmt(data.monthlySaved)} €`} />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <Kpi title="ROI 3 mois" value={`${fmt(data.roi3m)} %`} />
            <Kpi title="ROI 6 mois" value={`${fmt(data.roi6m)} %`} />
            <Kpi title="ROI 12 mois" value={`${fmt(data.roi12m)} %`} />
          </div>

          <div className="rounded-2xl border border-zinc-200/60 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <p className="text-sm font-semibold">{data.summary}</p>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {data.assumptions?.slice(0, 4).map((a, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-200/60 bg-zinc-50 p-3 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                >
                  <span className="font-semibold">{a.label} :</span> {a.value}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-indigo-200/60 bg-indigo-50 p-4 dark:border-indigo-900/60 dark:bg-indigo-950/30">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                {data.nextStep?.cta ?? "Valider avec un audit"}
              </p>
              <Link
                href={data.nextStep?.link ?? "/audit-gratuit"}
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

function Field(props: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  step: number;
}) {
  return (
    <label className="space-y-1">
      <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
        {props.label}
      </span>
      <input
        type="number"
        min={props.min}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-zinc-800 dark:bg-zinc-950"
      />
    </label>
  );
}

function Kpi({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-200/60 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs uppercase tracking-wide text-zinc-500">{title}</p>
      <p className="mt-1 text-2xl font-extrabold">{value}</p>
    </div>
  );
}

function fmt(n: number) {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n);
}