

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chatbot entreprise : support client & automatisation | WebCressonTech",
  description:
    "Chatbot pour entreprise (TPE/PME) : FAQ, support client, assistant interne, RAG sur documents. Déploiement web + intégrations. Audit gratuit.",
  alternates: {
    canonical: "/chatbot-entreprise",
  },
  openGraph: {
    title: "Chatbot entreprise : support client & automatisation | WebCressonTech",
    description:
      "Chatbot pour entreprise (TPE/PME) : FAQ, support client, assistant interne, RAG sur documents. Déploiement web + intégrations. Audit gratuit.",
    url: "/chatbot-entreprise",
    type: "website",
  },
};

const SITE_URL = "https://webcresson.com";
const PAGE_URL = `${SITE_URL}/chatbot-entreprise`;

export default function ChatbotEntreprisePage() {
  const faq = [
    {
      q: "Qu’est-ce qu’un chatbot d’entreprise ?",
      a: "Un chatbot d’entreprise répond automatiquement aux questions (clients ou équipe) et exécute des actions : recherche d’infos, création de tickets, collecte de leads, guidage sur le site. Il peut s’appuyer sur vos documents via un système RAG.",
    },
    {
      q: "Quelle différence entre FAQ et chatbot RAG ?",
      a: "Une FAQ répond à des questions fixes. Un chatbot RAG (Retrieval-Augmented Generation) va chercher l’information dans vos sources (PDF, Notion, site, base interne) puis répond de manière contextualisée, avec un contrôle des contenus.",
    },
    {
      q: "Quels canaux sont possibles ?",
      a: "Site web (widget), page dédiée, WhatsApp/Instagram (selon cas), Slack/Teams en interne, et API. On commence souvent par le web pour valider la valeur.",
    },
    {
      q: "Est-ce que ça peut halluciner ?",
      a: "Oui, comme toute IA. On réduit fortement le risque via : RAG, consignes strictes, limites de réponses, réponses avec sources, tests, monitoring et fallback humain pour certains cas.",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-24">
      {/* SEO IA: Données structurées (JSON-LD) */}
      <Script
        id="ld-breadcrumbs-chatbot"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
              { "@type": "ListItem", position: 3, name: "Chatbot entreprise", item: PAGE_URL },
            ],
          }),
        }}
      />

      <Script
        id="ld-service-chatbot"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Chatbot entreprise (FAQ, RAG, support)",
            serviceType: "AI customer support / internal assistant",
            provider: {
              "@type": "Organization",
              name: "WebCressonTech",
              url: SITE_URL,
            },
            areaServed: ["FR"],
            url: PAGE_URL,
            description:
              "Chatbot pour entreprise : support client, qualification de leads, assistant interne. RAG sur documents, intégrations (CRM, ticketing, email, Notion) et déploiement web.",
            offers: {
              "@type": "Offer",
              url: `${SITE_URL}/tarifications`,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <Script
        id="ld-faq-chatbot"
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
          CHATBOT (IA)
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Chatbot pour entreprise
          <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            support client, leads, assistant interne.
          </span>
        </h1>

        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Un chatbot bien fait répond vite, réduit la charge support et transforme des visiteurs en prospects.
          On le connecte à vos contenus (FAQ, docs, offres) et à vos outils (CRM, ticketing) pour un vrai ROI.
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
            Décrire votre besoin
          </Link>
        </div>

        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="font-medium">Gains rapides :</span>
            <span>• chatbot FAQ en 1–2 semaines</span>
            <span>• chatbot RAG en 2–4 semaines</span>
            <span>• qualification de leads + routage CRM</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Objectif : réponses utiles, contrôle, et escalade vers un humain quand nécessaire.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            À quoi ça sert
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Un chatbot qui convertit (pas un gadget)
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Un bon chatbot répond sur vos offres, guide sur le site, collecte les infos et déclenche des actions.
            Résultat : moins de support, plus de leads qualifiés.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Feature
            title="Support 24/7"
            desc="Réponses immédiates sur les services, tarifs, délais, et questions fréquentes."
          />
          <Feature
            title="Leads"
            desc="Qualification (besoin, budget, urgence) + envoi vers CRM / email / Slack."
          />
          <Feature
            title="Assistant interne"
            desc="Recherche dans vos docs (RAG) : process, procédures, onboarding, FAQ interne."
          />
        </div>
      </section>

      {/* USE CASES */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            Cas d’usage
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Exemples de chatbots entreprise
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            On démarre souvent simple (FAQ), puis on ajoute le RAG + intégrations.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="Chatbot FAQ (site web)"
            items={["Réponses aux questions fréquentes", "Orientation vers les bonnes pages", "CTA audit / contact"]}
          />
          <Card
            title="Chatbot RAG (docs)"
            items={["Réponses depuis PDF/Notion/base", "Limites + guardrails", "Citations / sources si besoin"]}
          />
          <Card
            title="Qualification & routage"
            items={["Questions pour qualifier", "Création de lead + tâches", "Notification équipe"]}
          />
          <Card
            title="Support + ticketing"
            items={["Création de ticket", "Catégorisation", "Escalade vers humain"]}
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
            Mise en place (simple et cadrée)
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Step n="01" title="Audit" desc="Objectifs, questions, canaux, KPI." />
          <Step n="02" title="Contenus" desc="FAQ + sources (docs, pages, base)." />
          <Step n="03" title="Build" desc="Widget + RAG + intégrations." />
          <Step n="04" title="Run" desc="Tests, monitoring, amélioration continue." />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Vous voulez un chatbot qui rapporte (et pas juste “un bot”)
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
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">Votre chatbot peut faire plus que répondre.</h2>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          On le transforme en point d’entrée : support + conversion + routage.
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