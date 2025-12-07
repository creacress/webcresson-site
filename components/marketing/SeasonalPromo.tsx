// components/marketing/SeasonalPromo.tsx
import Link from "next/link";

type SeasonalPromoVariant = "season" | "sale";

interface SeasonalPromoProps {
  variant?: SeasonalPromoVariant;
  label?: string;          // Texte au-dessus (ex: Hiver 2025, Lancement, etc.)
  title: string;
  description: string;
  highlight?: string;      // Phrase en plus (ex: "-20% sur…")
  ctaLabel: string;
  ctaHref: string;
  until?: string;          // Ex: "jusqu'au 31 janvier"
}

export function SeasonalPromo({
  variant = "season",
  label,
  title,
  description,
  highlight,
  ctaLabel,
  ctaHref,
  until,
}: SeasonalPromoProps) {
  const badgeText =
    variant === "sale" ? "Offre spéciale" : "Thème saisonnier";

  return (
    <section className="relative overflow-hidden rounded-3xl border border-indigo-200/70 bg-gradient-to-r from-indigo-50 via-sky-50 to-slate-50 p-6 shadow-sm shadow-indigo-100 dark:border-indigo-500/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-[-40%] w-1/2 bg-gradient-to-tr from-indigo-400/30 via-sky-400/25 to-transparent blur-3xl dark:from-indigo-500/40 dark:via-sky-500/30"
      />

      <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white dark:bg-indigo-500">
              {badgeText}
            </span>
            {label && (
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-indigo-700 dark:text-indigo-300">
                {label}
              </span>
            )}
          </div>

          <h2 className="text-lg font-semibold text-slate-900 md:text-xl dark:text-slate-50">
            {title}
          </h2>

          <p className="text-sm text-slate-700 dark:text-slate-300">
            {description}
          </p>

          {highlight && (
            <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              {highlight}
            </p>
          )}

          {until && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Offre valable {until}.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 md:items-end md:text-right">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            {ctaLabel}
          </Link>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Tu pourras changer ce bloc à chaque saison ou campagne de soldes.
          </p>
        </div>
      </div>
    </section>
  );
}
