// app/tarifications/page.tsx
import Link from "next/link";
import Script from "next/script";
import PricingClient from "@/components/tarifications/pricing-client";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webcresson.com";

export const metadata = {
  title: "Tarifications | WebCressonTech",
  description:
    "Offres d’automatisation (n8n/RPA), intégration IA et création de sites Next.js rapides, SEO et connectés CRM. Mensuel ou annuel, paiement Stripe sécurisé.",
  alternates: { canonical: `${baseUrl}/tarifications` },
  openGraph: {
    title: "Tarifications | WebCressonTech",
    description:
      "Automatisation, IA, sites Next.js SEO. Offres claires, ROI rapide, paiement Stripe.",
    url: `${baseUrl}/tarifications`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifications | WebCressonTech",
    description:
      "Automatisation, IA, sites Next.js SEO. Offres claires, ROI rapide, paiement Stripe.",
  },
};

export default function TarificationsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Puis-je combiner plusieurs packs ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Beaucoup de projets mixent automatisation, IA et site. On définit un périmètre cohérent et rentable, puis on priorise.",
        },
      },
      {
        "@type": "Question",
        name: "Les abonnements sont-ils obligatoires ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non. Vous pouvez démarrer par un projet ponctuel, puis passer en abonnement pour la maintenance, l’évolution et le suivi.",
        },
      },
      {
        "@type": "Question",
        name: "Comment se passe le paiement ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Paiement sécurisé via Stripe (mensuel/annuel) ou virement selon le périmètre. Tout est clarifié avant démarrage.",
        },
      },
    ],
  };

  return (
    <div className="space-y-16 lg:space-y-20">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          TARIFICATIONS
        </p>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Des offres simples,
            <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              pensées pour un ROI rapide.
            </span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Automatisation (n8n / no-code / RPA légère), intégration IA concrète et sites Next.js
            rapides + SEO propre. Vous choisissez un pack, on livre un système utile, puis on
            peut l’améliorer mois après mois.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-500"
          >
            Demander un audit gratuit →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Parler de votre cas →
          </Link>
        </div>

        <div className="grid gap-3 text-xs text-slate-500 dark:text-slate-400 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
            <p className="font-semibold text-slate-900 dark:text-slate-50">✅ Livraison cadrée</p>
            <p className="mt-1">On priorise ce qui rapporte (temps, CA, visibilité).</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
            <p className="font-semibold text-slate-900 dark:text-slate-50">💳 Stripe sécurisé</p>
            <p className="mt-1">Mensuel / Annuel, sans friction, facturation claire.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-950/50">
            <p className="font-semibold text-slate-900 dark:text-slate-50">📈 ROI piloté</p>
            <p className="mt-1">Simulateur + suivi si vous activez la maintenance.</p>
          </div>
        </div>
      </section>

      {/* PRICING + ROI (client) */}
      <PricingClient />

      {/* FAQ */}
      <section className="space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            FAQ
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Questions fréquentes
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Si vous ne trouvez pas la réponse ici, écrivez-moi via Contact.
          </p>
        </div>

        <div className="space-y-5 text-sm text-slate-600 dark:text-slate-300">
          <FaqItem question="Puis-je combiner plusieurs packs ?">
            Oui. On mixe souvent un socle automatisation + un module IA + un site web. On
            construit un périmètre cohérent et rentable.
          </FaqItem>

          <FaqItem question="Les abonnements sont-ils obligatoires ?">
            Non. L’abonnement sert surtout à maintenir, améliorer et faire évoluer sans vous
            soucier de la technique.
          </FaqItem>

          <FaqItem question="C’est adapté pour micro-entreprise / TPE ?">
            Oui. L’objectif est d’apporter des gains réels sans “usine à gaz”, avec des choix
            simples et des priorités claires.
          </FaqItem>

          <FaqItem question="Comment se passe le paiement ?">
            Stripe (lien sécurisé) pour les abonnements, et selon le périmètre pour les projets.
            Tout est cadré avant le démarrage.
          </FaqItem>
        </div>
      </section>
    </div>
  );
}

type FaqItemProps = { question: string; children: React.ReactNode };

function FaqItem({ question, children }: FaqItemProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{question}</h3>
      <p className="mt-1">{children}</p>
    </div>
  );
}
