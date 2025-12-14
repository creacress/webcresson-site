"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckoutButton } from "@/components/billing/CheckoutButton";

type Billing = "monthly" | "yearly";
type Plan = "automatisation" | "ia" | "site";

const PROMO = {
  enabled: true,
  label: "Offre de saison",
  percentLabel: 30, // juste pour l'affichage du badge
};

const YEARLY_DISCOUNT_LABEL = 15; // juste pour le texte, pas pour calculer

function eur(n: number) {
  return `${Math.round(n)} €`;
}

const PRICING: Record<
  Plan,
  {
    name: string;
    category: string;
    pitch: string;
    outcomes: string[];
    includes: string[];
    reassurance: string[];

    monthlyBase: number;
    monthlyPrice: number;

    yearlyBase: number;
    yearlyPrice: number;

    setupBase: number;
    setupPrice: number;

    cta: string;
    highlight: boolean;
    badge: string;
  }
> = {
  // ✅ LE PLUS CHER
  automatisation: {
    name: "Automatisation & Prospection",
    category: "AUTOMATISATION",
    pitch:
      "Remplacez les tâches répétitives par des workflows fiables (prospection, relances, CRM, admin).",
    outcomes: ["+ temps gagné", "+ régularité", "+ leads traités"],
    includes: [
      "Audit rapide des process",
      "1 à 3 workflows (n8n / no-code / RPA légère)",
      "Relances + notifications",
      "Mini-doc + prise en main",
    ],
    reassurance: ["Sans engagement", "Résiliable à tout moment", "Support humain"],

    monthlyBase: 570,
    monthlyPrice: 390,

    yearlyBase: 6840,
    yearlyPrice: 4100,

    setupBase: 1980,
    setupPrice: 1190,

    cta: "Lancer mon automatisation",
    highlight: false,
    badge: "",
  },

  // ✅ INTERMÉDIAIRE
  ia: {
    name: "Assistant IA (TPE/PME)",
    category: "INTÉGRATION IA",
    pitch:
      "Une IA qui connaît votre activité : réponses, résumés, contenus, aide à la décision — sans complexité inutile.",
    outcomes: ["+ réactivité", "+ qualité", "+ production de contenu"],
    includes: [
      "Cadrage cas d’usage IA",
      "Assistant IA relié à vos docs (scope défini)",
      "1 à 2 intégrations (emails / Notion / CRM / n8n)",
      "Formation express",
    ],
    reassurance: ["Sans engagement", "Résiliable à tout moment", "Support humain"],

    monthlyBase: 342,
    monthlyPrice: 240,

    yearlyBase: 4104,
    yearlyPrice: 2448,

    setupBase: 1290,
    setupPrice: 790,

    cta: "Activer l’IA",
    highlight: true,
    badge: "Le plus choisi",
  },

  // ✅ LE MOINS CHER
  site: {
    name: "Site web Next.js + SEO",
    category: "SITE WEB",
    pitch:
      "Un site rapide, moderne, mobile-first, avec une base SEO propre et des formulaires connectés à votre CRM.",
    outcomes: ["+ visibilité", "+ crédibilité", "+ demandes"],
    includes: [
      "Site vitrine Next.js (pages clés)",
      "SEO (métas, perf, schema, structure)",
      "Formulaires connectés (Notion/HubSpot…)",
      "Conseils contenus + prise en main",
    ],
    reassurance: ["Sans engagement", "Résiliable à tout moment", "Support humain"],

    monthlyBase: 257,
    monthlyPrice: 180,

    yearlyBase: 2160,
    yearlyPrice: 1285,

    setupBase: 767,
    setupPrice: 413,

    cta: "Créer mon site",
    highlight: false,
    badge: "",
  },
};


export default function PricingClient() {
  const [billing, setBilling] = useState<Billing>("yearly");
  const [selectedForROI, setSelectedForROI] = useState<Plan>("ia");

  const display = useMemo(() => {
    const out: Record<Plan, { base: number; price: number }> = {
      automatisation: {
        base: billing === "monthly" ? PRICING.automatisation.monthlyBase : PRICING.automatisation.yearlyBase,
        price: billing === "monthly" ? PRICING.automatisation.monthlyPrice : PRICING.automatisation.yearlyPrice,
      },
      ia: {
        base: billing === "monthly" ? PRICING.ia.monthlyBase : PRICING.ia.yearlyBase,
        price: billing === "monthly" ? PRICING.ia.monthlyPrice : PRICING.ia.yearlyPrice,
      },
      site: {
        base: billing === "monthly" ? PRICING.site.monthlyBase : PRICING.site.yearlyBase,
        price: billing === "monthly" ? PRICING.site.monthlyPrice : PRICING.site.yearlyPrice,
      },
    };
    return out;
  }, [billing]);

  return (
    <section className="space-y-10">
      {/* Billing toggle */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Choisissez votre rythme
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Mensuel pour démarrer vite, annuel pour optimiser le coût.
          </p>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            {PROMO.enabled ? (
              <>
                <span className="font-semibold text-red-600 dark:text-red-300">
                  {PROMO.label} : -{PROMO.percentLabel}%
                </span>{" "}
                + Annuel : avantage affiché (≈ -{YEARLY_DISCOUNT_LABEL}%).
              </>
            ) : (
              <>Annuel : avantage affiché (≈ -{YEARLY_DISCOUNT_LABEL}%).</>
            )}
          </p>
        </div>

        <div className="inline-flex w-full items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white/70 p-2 dark:border-slate-800 dark:bg-slate-950/50 sm:w-auto">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`w-1/2 rounded-xl px-4 py-2 text-sm font-medium transition sm:w-auto ${
              billing === "monthly"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
            }`}
          >
            Mensuel
          </button>
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={`w-1/2 rounded-xl px-4 py-2 text-sm font-medium transition sm:w-auto ${
              billing === "yearly"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
            }`}
          >
            Annuel
          </button>
        </div>
      </div>

      {/* Mobile-first: horizontal scroll snap | Desktop: grid */}
      <div className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0">
        <div className="flex snap-x snap-mandatory gap-4 sm:grid sm:snap-none sm:grid-cols-3">
          {(Object.keys(PRICING) as Plan[]).map((plan) => (
            <PricingCard
              key={plan}
              plan={plan}
              billing={billing}
              base={display[plan].base}
              price={display[plan].price}
              onPickROI={() => setSelectedForROI(plan)}
              isSelectedForROI={selectedForROI === plan}
            />
          ))}
        </div>
      </div>

      {/* ROI Simulator */}
      <RoiSimulator
        plan={selectedForROI}
        billing={billing}
        planCost={billing === "monthly" ? PRICING[selectedForROI].monthlyPrice : PRICING[selectedForROI].yearlyPrice}
        setupCost={PRICING[selectedForROI].setupPrice}
      />

      {/* Mini reassurance strip */}
      <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-sky-50 p-6 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <p className="text-sm text-slate-700 dark:text-slate-200">
          Vous hésitez ? Commencez par un audit gratuit : on chiffre les gains, on priorise, puis
          on choisit l’offre (ou un mix léger).
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Demander un audit gratuit →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Poser une question →
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  billing,
  base,
  price,
  onPickROI,
  isSelectedForROI,
}: {
  plan: Plan;
  billing: Billing;
  base: number;
  price: number;
  onPickROI: () => void;
  isSelectedForROI: boolean;
}) {
  const p = PRICING[plan];

  const cardBase =
    "relative flex w-[86%] shrink-0 snap-center flex-col rounded-3xl border p-6 shadow-sm transition sm:w-auto";
  const normal =
    "border-slate-200 bg-white/80 shadow-slate-100 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90";
  const highlight =
    "border-indigo-500/70 bg-white shadow-[0_24px_65px_rgba(15,23,42,0.18)] ring-2 ring-indigo-500/60 hover:-translate-y-1 dark:border-indigo-400/70 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950";

  return (
    <div className={`${cardBase} ${p.highlight ? highlight : normal}`}>
      {p.highlight && p.badge && (
        <div className="absolute right-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white dark:bg-indigo-500">
          {p.badge}
        </div>
      )}

      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        {p.category}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
        {p.name}
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {p.pitch}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.outcomes.map((o) => (
          <span
            key={o}
            className="rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200"
          >
            {o}
          </span>
        ))}
      </div>

      {/* Price block */}
      <div className="mt-5 space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs line-through text-slate-400 dark:text-slate-500">
            {eur(base)} HT / {billing === "monthly" ? "mois" : "an"}
          </span>

          {PROMO.enabled && (
            <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-red-600 dark:bg-red-500/15 dark:text-red-300">
              -{PROMO.percentLabel}% {PROMO.label}
            </span>
          )}
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-semibold text-slate-900 dark:text-slate-50">
            {eur(price)}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            HT / {billing === "monthly" ? "mois" : "an"}
          </span>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Mise en place à partir de{" "}
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {eur(p.setupPrice)}
          </span>{" "}
          HT (one-shot).{" "}
          <span className="line-through text-slate-400 dark:text-slate-500">
            {eur(p.setupBase)}
          </span>
        </p>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {p.includes.map((line) => (
          <li key={line} className="flex gap-2">
            <span className="mt-0.5 text-slate-400">•</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 grid gap-1 text-xs text-slate-500 dark:text-slate-400">
        {p.reassurance.map((r) => (
          <div key={r}>✔ {r}</div>
        ))}
      </div>

      <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
        {/* Stripe CTA */}
        <CheckoutButton
          plan={plan}
          billing={billing}
          label={p.cta}
          variant="primary"
        />

        <button
          type="button"
          onClick={onPickROI}
          className={`inline-flex w-full items-center justify-center rounded-full border px-4 py-2.5 text-sm font-medium transition ${
            isSelectedForROI
              ? "border-indigo-500/50 bg-indigo-500/10 text-indigo-700 dark:text-indigo-200"
              : "border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-50 dark:hover:bg-slate-900"
          }`}
        >
          {isSelectedForROI ? "ROI sélectionné ✓" : "Simuler mon ROI"}
        </button>

        <Link
          href={plan === "automatisation" ? "/audit-gratuit" : "/contact"}
          className="text-center text-xs text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          Besoin d’aide pour choisir ? →
        </Link>
      </div>
    </div>
  );
}

function RoiSimulator({
  plan,
  billing,
  planCost,
  setupCost,
}: {
  plan: Plan;
  billing: Billing;
  planCost: number; // prix affiché (mensuel ou annuel)
  setupCost: number; // setup promo
}) {
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [hourlyValue, setHourlyValue] = useState(35);
  const [leadsPerMonth, setLeadsPerMonth] = useState(30);
  const [closeRate, setCloseRate] = useState(10);
  const [avgDeal, setAvgDeal] = useState(450);
  const [timeSavedPct, setTimeSavedPct] = useState(35);

  const monthlyHours = (hoursPerWeek * 4.33 * timeSavedPct) / 100;
  const monthlyTimeValue = monthlyHours * hourlyValue;

  const monthlyExtraDeals = (leadsPerMonth * closeRate) / 100 * 0.2;
  const monthlyRevenueLift = monthlyExtraDeals * avgDeal;

  const monthlyGain = Math.round(monthlyTimeValue + monthlyRevenueLift);

  const recurringMonthlyCost =
    billing === "monthly" ? planCost : Math.round(planCost / 12);

  const paybackMonths =
    monthlyGain > 0 ? (setupCost + recurringMonthlyCost) / monthlyGain : Infinity;

  return (
    <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white/70 p-6 dark:border-slate-800 dark:bg-slate-950/50 lg:grid-cols-[1.15fr,0.85fr]">
      <div className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
          SIMULATEUR ROI
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Estimez votre retour sur investissement
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Sélection actuelle :{" "}
          <span className="font-semibold">{PRICING[plan].name}</span>. Ajustez les curseurs.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field
            label="Heures perdues / semaine"
            value={`${hoursPerWeek}h`}
            min={0}
            max={40}
            step={1}
            onChange={setHoursPerWeek}
          />
          <Field
            label="Valeur horaire (€/h)"
            value={`${hourlyValue}€`}
            min={10}
            max={200}
            step={5}
            onChange={setHourlyValue}
          />
          <Field
            label="Leads / mois"
            value={`${leadsPerMonth}`}
            min={0}
            max={300}
            step={5}
            onChange={setLeadsPerMonth}
          />
          <Field
            label="Taux de closing (%)"
            value={`${closeRate}%`}
            min={0}
            max={60}
            step={1}
            onChange={setCloseRate}
          />
          <Field
            label="Panier moyen (€/vente)"
            value={`${avgDeal}€`}
            min={50}
            max={5000}
            step={50}
            onChange={setAvgDeal}
          />
          <Field
            label="Temps économisé (%)"
            value={`${timeSavedPct}%`}
            min={0}
            max={90}
            step={5}
            onChange={setTimeSavedPct}
          />
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Estimation simple (temps + CA). En audit, on chiffre avec vos données réelles.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:to-slate-950">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Résumé</p>

        <div className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
          <Row k="Gain temps estimé / mois" v={`${Math.round(monthlyHours)}h`} />
          <Row k="Valeur du temps / mois" v={`${Math.round(monthlyTimeValue)} €`} />
          <Row k="Estimation gain CA / mois" v={`${Math.round(monthlyRevenueLift)} €`} />
          <div className="h-px bg-slate-200 dark:bg-slate-800" />
          <Row k="Gain total estimé / mois" v={`${monthlyGain} €`} strong />
          <Row k="Coût récurrent estimé / mois" v={`${recurringMonthlyCost} €`} />
          <Row k="Mise en place (one-shot)" v={`${setupCost} €`} />
        </div>

        <div className="mt-5 rounded-2xl bg-indigo-500/10 p-4 text-sm text-indigo-700 dark:text-indigo-200">
          <p className="font-semibold">Payback estimé</p>
          <p className="mt-1">
            {Number.isFinite(paybackMonths)
              ? `${Math.max(0.3, paybackMonths).toFixed(1)} mois`
              : "Indéterminé"}{" "}
            pour amortir la mise en place.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
        <span>{label}</span>
        <span className="font-semibold text-slate-900 dark:text-slate-50">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

function Row({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-600 dark:text-slate-300">{k}</span>
      <span className={strong ? "font-semibold text-slate-900 dark:text-slate-50" : ""}>{v}</span>
    </div>
  );
}
