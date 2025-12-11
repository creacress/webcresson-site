// components/ui/RoiCard.tsx
"use client";

import { useMemo, useState } from "react";
import { Card } from "./Card";

export function RoiCard() {
  const [hoursPerMonth, setHoursPerMonth] = useState(20);
  const [hourRate, setHourRate] = useState(60);

  const monthlyGain = useMemo(
    () => Math.max(0, Math.round(hoursPerMonth * hourRate)),
    [hoursPerMonth, hourRate],
  );

  return (
    <Card
      eyebrow="ROI"
      title="Calculez votre ROI en quelques secondes"
      description="Estimation rapide du gain potentiel grâce à l’automatisation de vos tâches récurrentes."
    >

      <div className="flex flex-col gap-3">
        <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
          Heures économisées par mois
          <input
            type="number"
            min={0}
            className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
            value={hoursPerMonth}
            onChange={(e) => setHoursPerMonth(Number(e.target.value) || 0)}
          />
        </label>
        <label className="text-xs font-medium text-slate-700 dark:text-slate-200">
          Valeur d’une heure (€/h)
          <input
            type="number"
            min={0}
            className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
            value={hourRate}
            onChange={(e) => setHourRate(Number(e.target.value) || 0)}
          />
        </label>

        <div className="mt-2 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-blue-500 px-4 py-3 text-sm text-white shadow-lg shadow-indigo-900/60">
          Gain estimé :{" "}
          <span className="font-semibold">
            {monthlyGain.toLocaleString("fr-FR")} € / mois
          </span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Estimation indicative. On pourra affiner ensemble sur votre cas réel
          (process, outils, volume, etc.).
        </p>
      </div>
    </Card>
  );
}
