

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Intégration IA entreprise : assistants, RAG & automatisations | WebCressonTech",
  description:
    "Intégration IA pour entreprise (TPE/PME) : assistants, chatbots, RAG sur documents, extraction, classification. Déploiement + intégrations (CRM, email). Audit gratuit.",
  alternates: {
    canonical: "/integration-ia-entreprise",
  },
  openGraph: {
    title: "Intégration IA entreprise : assistants, RAG & automatisations | WebCressonTech",
    description:
      "Intégration IA pour entreprise (TPE/PME) : assistants, chatbots, RAG sur documents, extraction, classification. Déploiement + intégrations (CRM, email). Audit gratuit.",
    url: "/integration-ia-entreprise",
    type: "website",
  },
};

const SITE_URL = "https://webcresson.com";
const PAGE_URL = `${SITE_URL}/integration-ia-entreprise`;

export default function IntegrationIAEntreprisePage() {
  const faq = [
    {
      q: "Qu’est-ce qu’une intégration IA en entreprise ?",
      a: "C’est l’ajout d’un module IA dans vos outils et vos processus : assistant (support/ops), extraction de données, classification, génération de réponses, ou analyse de documents. L’IA devient un “collègue” connecté à vos données.",
    },
    {
      q: "C’est quoi le RAG et pourquoi c’est utile ?",
      a: "Le RAG (Retrieval-Augmented Generation) permet à l’IA de chercher l’information dans vos sources (PDF, Notion, site, base interne) puis de répondre de manière contextualisée. Ça réduit les hallucinations et améliore la pertinence.",
    },
    {
      q: "Quels cas d’usage ont le meilleur ROI ?",
      a: "Souvent : support client (FAQ + réponses), qualification de leads, extraction de champs depuis documents, tri/catégorisation (tickets, emails), et assistant interne sur procédures.",
    },
    {
      q: "Peut-on héberger l’IA en local (Ollama) ?",
      a: "Oui. Pour certaines entreprises, un déploiement local (Ollama/Mistral) est pertinent : contrôle des données, coûts, et conformité. On choisit l’architecture selon vos contraintes.",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-24">
      {/* SEO IA: Données structurées (JSON-LD) */}
      <Script
        id="ld-breadcrumbs-integration-ia"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
              { "@type": "ListItem", position: 3, name: "Intégration IA entreprise", item: PAGE_URL },
            ],
          }),
        }}
      />

      <Script
        id="ld-service-integration-ia"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Intégration IA entreprise (assistants, RAG, extraction)",
            serviceType: "AI integration / AI assistant",
            provider: {
              "@type": "Organization",
              name: "WebCressonTech",
              url: SITE_URL,
            },
            areaServed: ["FR"],
            url: PAGE_URL,
            description:
              "Intégration IA pour entreprise : assistants IA, RAG sur documents, extraction et classification, déploiement web/API et intégrations (CRM, email, ticketing).",
            offers: {
              "@type": "Offer",
              url: `${SITE_URL}/tarifications`,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <Script
        id="ld-faq-integration-ia"
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
          INTÉGRATION IA
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Intégration IA en entreprise
          <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            assistants, RAG sur documents, automatisations.
          </span>
        </h1>

        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          On intègre l’IA à vos outils pour répondre plus vite, automatiser la compréhension (docs, emails) et
          améliorer vos process. Résultat : moins de charge, plus de qualité, et un ROI mesurable.
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
            Discuter de votre cas
          </Link>
        </div>

        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="font-medium">Gains rapides :</span>
            <span>• extraction / tri en 1–2 semaines</span>
            <span>• assistant RAG en 2–4 semaines</span>
            <span>• intégrations CRM/ticketing</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          On commence par la valeur : un use-case, des KPI, puis on industrialise.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            Résultat attendu
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            IA utile : productivité + qualité
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            L’IA sert à accélérer, standardiser et aider vos équipes. On combine IA + automatisation (workflows) pour un vrai impact.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Feature title="Support" desc="Réponses plus rapides, meilleure satisfaction, moins de tickets." />
          <Feature title="Ops" desc="Extraction, tri, classification : moins de tâches manuelles." />
          <Feature title="Sales" desc="Qualification, réponses aux objections, aide à la vente." />
        </div>
      </section>

      {/* USE CASES */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            Cas concrets
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Exemples d’intégrations IA
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            On démarre souvent par un use-case simple, puis on élargit.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="Assistant interne (RAG)"
            items={["Procédures, onboarding, FAQ interne", "Recherche dans vos documents", "Réponses cadrées + sources"]}
          />
          <Card
            title="Support client"
            items={["FAQ + base de connaissances", "Tri de demandes", "Escalade vers humain si besoin"]}
          />
          <Card
            title="Extraction de documents"
            items={["Devis/factures/PDF", "Champs structurés vers CRM/Sheets", "Contrôles qualité + logs"]}
          />
          <Card
            title="Tri & classification"
            items={["Emails / tickets", "Catégorisation", "Priorisation et routage"]}
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
            Comment on déploie une IA (sans prise de risque)
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Step n="01" title="Cadrage" desc="Use-case, KPI, risques, données." />
          <Step n="02" title="Sources" desc="FAQ, docs, pages, structure RAG." />
          <Step n="03" title="Build" desc="API, UI, intégrations, tests." />
          <Step n="04" title="Run" desc="Monitoring, feedback, itérations." />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Vous voulez une IA utile (et maîtrisée) ?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Audit gratuit → quick wins + plan d’action + estimation de valeur.
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
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">L’IA doit faire gagner du temps (et rester sous contrôle).</h2>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          On choisit l’architecture adaptée : local (Ollama) ou cloud, avec des garde-fous.
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