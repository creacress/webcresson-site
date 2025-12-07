// components/seasonal/SeasonalTheme.tsx
"use client";

import { ReactNode } from "react";
import { SnowOverlay } from "./SnowOverlay";


export type Season = "none" | "noel" | "halloween" | "soldes";

interface SeasonalWrapperProps {
  season: Season;
  children: ReactNode;
  withSnow?: boolean; // pour Noël
}

/**
 * Wrapper qui ajoute des décos saisonnières (neige, vibes halloween, soldes)
 * autour d'une section ou d'un bloc (ex: section tarifs).
 */
export function SeasonalWrapper({
  season,
  children,
  withSnow = true,
}: SeasonalWrapperProps) {
  if (season === "none") return <>{children}</>;

  return (
    <div className="relative">
      {/* Contenu normal au-dessus des effets */}
      <div className="relative z-10">{children}</div>

      {/* Neige pro pour Noël (particules glow) */}
      {season === "noel" && withSnow && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <SnowOverlay density={70} />
        </div>
      )}

      {/* Citrouilles / chauves-souris pour Halloween */}
      {season === "halloween" && (
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="absolute left-4 top-4 text-2xl drop-shadow-[0_0_12px_rgba(249,115,22,0.7)]">
            🎃
          </div>
          <div className="absolute right-6 top-6 text-xl rotate-12 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
            🦇
          </div>
        </div>
      )}

      {/* Tags soldes */}
      {season === "soldes" && (
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="absolute -right-4 top-6 rotate-12 rounded-full bg-pink-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
            SOLDES
          </div>
          <div className="absolute left-6 -top-3 rotate-[-10deg] rounded-full bg-amber-500 px-3 py-1 text-[11px] font-semibold text-slate-900 shadow">
            -20% LANCEMENT
          </div>
        </div>
      )}
    </div>
  );
}

interface SeasonalBadgeProps {
  season: Season;
  label?: string;
}

/**
 * Petit badge à coller sur une Card (chapeau Noël, tag Halloween, étiquette SOLDES)
 */
export function SeasonalBadge({ season, label }: SeasonalBadgeProps) {
  if (season === "none") return null;

  if (season === "noel") {
    return (
      <div className="absolute -right-1 -top-1 flex items-center gap-1 rounded-full bg-red-600 px-2 py-1 text-[10px] font-semibold text-white shadow-md">
        🎅 {label ?? "Spécial Noël"}
      </div>
    );
  }

  if (season === "halloween") {
    return (
      <div className="absolute -right-1 -top-1 flex items-center gap-1 rounded-full bg-orange-600 px-2 py-1 text-[10px] font-semibold text-slate-900 shadow-md">
        🎃 {label ?? "Spécial Halloween"}
      </div>
    );
  }

  if (season === "soldes") {
    return (
      <div className="absolute -right-1 -top-1 flex items-center gap-1 rounded-full bg-pink-600 px-2 py-1 text-[10px] font-semibold text-white shadow-md">
        🛍️ {label ?? "Soldes"}
      </div>
    );
  }

  return null;
}
