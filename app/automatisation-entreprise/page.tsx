

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Automatisation entreprise : workflows n8n & intégrations | WebCressonTech",
  description:
    "Automatisation pour entreprise (TPE/PME) : workflows n8n, intégrations API, CRM/ERP, facturation, reporting. Audit gratuit + plan d’action ROI.",
  alternates: {
    canonical: "/automatisation-entreprise",
  },
  openGraph: {
    title: "Automatisation entreprise : workflows n8n & intégrations | WebCressonTech",
    description:
      "Automatisation pour entreprise (TPE/PME) : workflows n8n, intégrations API, CRM/ERP, facturation, reporting. Audit gratuit + plan d’action ROI.",
    url: "/automatisation-entreprise",
    type: "website",
  },
};

const SITE_URL = "https://webcresson.com";
const PAGE_URL = `${SITE_URL}/automatisation-entreprise`;

export default function AutomatisationEntreprisePage() {
  const faq = [
    {
      q: "Qu’est-ce que l’automatisation en entreprise ?",
      a: "C’est le fait de confier à des workflows (ex : n8n) des tâches répétitives : transferts de données, relances, création de documents, synchronisation CRM, reporting, etc. Objectif : gagner du temps, réduire les erreurs et améliorer la rentabilité.",
    },
    {
      q: "Pourquoi utiliser n8n plutôt qu’un autre outil ?",
      a: "n8n est très flexible (API, webhooks, logique avancée), self-hostable, et permet de créer des automatisations robustes et maintenables. On peut connecter CRM, email, Notion, Google Workspace, Stripe, ERP…",
    },
    {
      q: "Combien de temps pour un premier résultat ?",
      a: "Souvent 7 à 14 jours pour un premier workflow utile (selon accès et complexité). Ensuite, on itère en s’appuyant sur la valeur business (ROI) et les retours terrain.",
    },
    {
      q: "Est-ce que c’est sécurisé ?",
      a: "Oui, si c’est fait correctement : gestion des secrets (env), rôles/accès, logs, monitoring, chiffrement, et limitation des données sensibles. On valide ensemble les contraintes (RGPD / accès) avant d’automatiser.",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-24">
      {/* SEO IA: Données structurées (JSON-LD) */}
      <Script
        id="ld-breadcrumbs-automatisation"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
              { "@type": "ListItem", position: 3, name: "Automatisation entreprise", item: PAGE_URL },
            ],
          }),
        }}
      />

      <Script
        id="ld-service-automatisation"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Automatisation entreprise (workflows n8n)",
            serviceType: "Business process automation",
            provider: {
              "@type": "Organization",
              name: "WebCressonTech",
              url: SITE_URL,
            },
            areaServed: ["FR"],
            url: PAGE_URL,
            description:
              "Automatisation de tâches et intégrations via n8n : webhooks, APIs, CRM/ERP, facturation, reporting, synchronisation et alerting.",
            offers: {
              "@type": "Offer",
              url: `${SITE_URL}/tarifications`,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <Script
        id="ld-faq-automatisation"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />

      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          AUTOMATISATION (n8n)
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Automatisation d’entreprise
          <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            workflows n8n, intégrations API, ROI rapide.
          </span>
        </h1>

        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          On automatise vos tâches répétitives pour gagner du temps, réduire les erreurs et connecter vos outils.
          Concrètement : CRM, emails, facturation, reporting, alertes — via des workflows n8n robustes et maintenables.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-500"
          >
            Demander un audit gratuit →
          </Link>
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Voir les packs & tarifs
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-50/70 px-5 py-2.5 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-100 dark:border-indigo-400/60 dark:bg-slate-950/70 dark:text-indigo-200 dark:hover:bg-slate-900"
          >
            Parler d’un cas concret
          </Link>
        </div>

        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="font-medium">Gains rapides :</span>
            <span>• 1er workflow utile en 7–14 jours</span>
            <span>• réduction des erreurs humaines</span>
            <span>• suivi + logs + amélioration continue</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Approche simple : on priorise les actions au meilleur ROI, puis on industrialise.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            Résultat attendu
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Moins de tâches, plus de business
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            L’automatisation sert à supprimer les frictions : copier-coller, relances manuelles, fichiers dispersés,
            erreurs de saisie, perte d’infos entre outils.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Feature
            title="Temps gagné"
            desc="Workflows qui tournent 24/7 : tri, création, synchronisation, relances, reporting."
          />
          <Feature
            title="Qualité"
            desc="Moins d’erreurs, plus de traçabilité : logs, alertes, contrôle des étapes."
          />
          <Feature
            title="Scalabilité"
            desc="Même process, plus de volume : vous absorbez la croissance sans recruter trop tôt."
          />
        </div>
      </section>

      {/* USE CASES */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            Cas concrets
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Exemples d’automatisations n8n
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            On cible des automatisations qui payent vite : sales, ops, admin, support.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="Prospection & CRM"
            items={[
              "Création/MAJ de leads depuis formulaires",
              "Enrichissement (SIREN, site web, emails)",
              "Routage vers pipelines + notifications",
            ]}
          />
          <Card
            title="Facturation & finance"
            items={["Création automatique de factures", "Relances intelligentes", "Reporting mensuel (Notion/Sheets)"]}
          />
          <Card
            title="Support & opérations"
            items={["Tri de tickets", "Alertes Slack/Email", "Base de connaissances synchronisée"]}
          />
          <Card
            title="Contenu & SEO"
            items={["Génération + validation", "Publication planifiée", "Mise à jour sitemap + indexation"]}
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            Méthode
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Comment on travaille
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Step n="01" title="Audit" desc="On cartographie les tâches + priorités ROI." />
          <Step n="02" title="Design" desc="On définit les flux, règles et erreurs possibles." />
          <Step n="03" title="Build" desc="On construit n8n + intégrations + tests." />
          <Step n="04" title="Run" desc="Logs, monitoring, itérations, documentation." />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Prêt à automatiser ce qui vous prend trop de temps ?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Audit gratuit → plan d’action concret (quick wins + roadmap).
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/audit-gratuit"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
              >
                Demander un audit →
              </Link>
              <Link
                href="/tarifications"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
              >
                Tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            FAQ
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Questions fréquentes
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Réponses directes — pensées pour vos prospects et pour les moteurs IA.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Demander un audit gratuit →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Voir tous les services
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-3 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-sky-50 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          On transforme vos tâches répétitives en workflows fiables.
        </h2>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Dites-nous ce qui vous prend du temps : on vous propose un plan d’automatisation concret.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Audit gratuit →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
      <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
        {items.map((it) => (
          <li key={it}>• {it}</li>
        ))}
      </ul>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
        {n}
      </div>
      <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{q}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{a}</p>
    </div>
  );
}