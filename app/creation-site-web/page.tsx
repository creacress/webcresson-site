

import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Création de site web : Next.js, SEO & conversion | WebCressonTech",
  description:
    "Création de site web professionnel (vitrine / landing) : Next.js rapide, mobile-first, SEO technique, pages qui convertissent. Audit gratuit + plan d’action.",
  alternates: {
    canonical: "/creation-site-web",
  },
  openGraph: {
    title: "Création de site web : Next.js, SEO & conversion | WebCressonTech",
    description:
      "Création de site web professionnel (vitrine / landing) : Next.js rapide, mobile-first, SEO technique, pages qui convertissent. Audit gratuit + plan d’action.",
    url: "/creation-site-web",
    type: "website",
  },
};

const SITE_URL = "https://webcresson.com";
const PAGE_URL = `${SITE_URL}/creation-site-web`;

export default function CreationSiteWebPage() {
  const faq = [
    {
      q: "Pourquoi Next.js pour un site vitrine ?",
      a: "Parce que c’est rapide, scalable et excellent pour le SEO : rendu performant, bonnes Core Web Vitals, pages optimisées et architecture moderne. Résultat : un site qui charge vite et qui se référence mieux.",
    },
    {
      q: "Quelle différence entre un site “beau” et un site qui convertit ?",
      a: "Un site qui convertit est pensé parcours + messages + CTA : page d’accueil claire, pages services orientées intentions, preuves (cas, chiffres), formulaires simples, suivi analytics. Le design sert la conversion.",
    },
    {
      q: "En combien de temps peut-on sortir le site ?",
      a: "Souvent 2 à 4 semaines pour un site vitrine solide (selon contenus et validation). On peut sortir une V1 rapide, puis itérer (pages, blog, landing Ads).",
    },
    {
      q: "Est-ce que vous faites aussi l’accompagnement (SEO, contenu, acquisition) ?",
      a: "Oui : stratégie SEO, plan éditorial, optimisation des pages, tracking (GA4), et itérations mensuelles. L’objectif : générer des leads, pas juste “un site en ligne”.",
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-24">
      {/* SEO IA: Données structurées (JSON-LD) */}
      <Script
        id="ld-breadcrumbs-creation-site"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
              { "@type": "ListItem", position: 3, name: "Création de site web", item: PAGE_URL },
            ],
          }),
        }}
      />

      <Script
        id="ld-service-creation-site"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Création de site web (Next.js, SEO, conversion)",
            serviceType: "Website development / SEO",
            provider: {
              "@type": "Organization",
              name: "WebCressonTech",
              url: SITE_URL,
            },
            areaServed: ["FR"],
            url: PAGE_URL,
            description:
              "Création de sites web Next.js rapides, mobile-first et optimisés SEO : pages services, landing pages, blog, tracking et optimisation conversion.",
            offers: {
              "@type": "Offer",
              url: `${SITE_URL}/tarifications`,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <Script
        id="ld-faq-creation-site"
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
          SITE WEB (NEXT.JS)
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Création de site web professionnel
          <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            mobile-first, SEO, performance et conversion.
          </span>
        </h1>

        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Un site qui charge vite et qui convertit : pages services orientées “intention”, CTA clairs, tracking,
          et un socle technique propre (Next.js + SEO). Ensuite, on vous accompagne pour le faire grandir.
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
            Parler de votre projet
          </Link>
        </div>

        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="font-medium">Quick wins :</span>
            <span>• V1 en 2–4 semaines</span>
            <span>• pages services “SEO IA” prêtes à citer</span>
            <span>• suivi GA4 + optimisations</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Objectif : un site qui génère des demandes (audit, contact), pas juste une vitrine.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            Pourquoi ça marche
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Performance + SEO + message = leads
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            On combine technique (vitesse), contenu (intentions) et conversion (CTA) pour transformer la visite en contact.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Feature title="Rapide" desc="Next.js + optimisation Core Web Vitals (LCP/INP/CLS)." />
          <Feature title="Référencé" desc="SEO technique + pages orientées intentions (services / villes / besoins)." />
          <Feature title="Convertit" desc="Copywriting, preuves, CTA, formulaires simples et tracking." />
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            Ce que vous obtenez
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Un socle propre, puis un accompagnement
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            On livre un site solide (tech + design + SEO) et on peut ensuite vous accompagner pour le faire évoluer.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="Création du site"
            items={[
              "Design moderne + mobile-first",
              "Pages : accueil, services, contact, audit, tarifs",
              "SEO technique (metadata, sitemap, robots, schema)",
            ]}
          />
          <Card
            title="Accompagnement sur le web"
            items={[
              "Optimisations SEO continues",
              "Plan éditorial + blog (si besoin)",
              "Landing pages Google Ads / campagnes",
              "Suivi conversions (GA4) + itérations",
            ]}
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
            Comment on avance
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Step n="01" title="Cadrage" desc="Offre, audience, objectifs, pages." />
          <Step n="02" title="Design" desc="Maquettes + structure SEO." />
          <Step n="03" title="Build" desc="Next.js, composants, perf, tracking." />
          <Step n="04" title="Growth" desc="SEO, contenu, tests, itérations." />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                Vous voulez un site qui génère des demandes ?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Audit gratuit → quick wins + plan d’action pour un site performant et rentable.
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
          Votre site doit travailler pour vous.
        </h2>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          On construit un site rapide + SEO, puis on vous accompagne pour générer des leads.
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