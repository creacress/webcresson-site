// app/a-propos/page.tsx
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | WebCressonTech",
  description:
    "WebCressonTech accompagne les TPE/PME avec l’automatisation (n8n), l’intégration IA (assistants, RAG) et la création de sites Next.js optimisés SEO.",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos | WebCressonTech",
    description:
      "WebCressonTech accompagne les TPE/PME avec l’automatisation (n8n), l’intégration IA (assistants, RAG) et la création de sites Next.js optimisés SEO.",
    url: "/a-propos",
    type: "website",
  },
};

export default function AProposPage() {
  return (
    <div className="space-y-20 lg:space-y-24">
      {/* SEO IA / EEAT : données structurées (JSON-LD) */}
      <Script
        id="ld-breadcrumbs-a-propos"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://webcresson.com" },
              { "@type": "ListItem", position: 2, name: "À propos", item: "https://webcresson.com/a-propos" },
            ],
          }),
        }}
      />

      <Script
        id="ld-org-a-propos"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "WebCressonTech",
            url: "https://webcresson.com",
            areaServed: ["FR"],
            knowsAbout: [
              "Automatisation n8n",
              "Intégration IA",
              "Chatbot entreprise",
              "RAG (Retrieval-Augmented Generation)",
              "Sites Next.js",
              "SEO technique",
            ],
            sameAs: [],
          }),
        }}
      />

      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          À PROPOS
        </p>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            WebCressonTech,
            <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              un copilote tech pour les petites structures.
            </span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            WebCressonTech accompagne les TPE/PME, indépendants et associations qui veulent
            automatiser, intégrer l’IA et avoir un site web moderne — sans se perdre dans la technique.
            On avance par étapes, avec des quick wins mesurables.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-500"
          >
            Découvrir les services →
          </Link>
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Voir les packs & tarifs →
          </Link>
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-50/70 px-5 py-2.5 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-100 dark:border-indigo-400/60 dark:bg-slate-950/70 dark:text-indigo-200 dark:hover:bg-slate-900"
          >
            Demander un audit gratuit →
          </Link>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          L’idée : un partenaire technique qui parle ton langage, comprend ton métier, et met en place des
          systèmes simples, utiles et pérennes.
        </p>
      </section>

      {/* CE QUE JE FAIS CONCRÈTEMENT */}
      <section className="space-y-8">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            Concret
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Ce que je fais concrètement pour une petite structure
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Objectif : gagner du temps, réduire les erreurs et générer plus de demandes (leads).
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <QuickLink
            title="Automatisation (n8n)"
            desc="Workflows, intégrations API, CRM, facturation, reporting."
            href="/automatisation-entreprise"
          />
          <QuickLink
            title="Intégration IA (assistants, RAG)"
            desc="Extraction, classification, assistants sur documents, IA sous contrôle."
            href="/integration-ia-entreprise"
          />
          <QuickLink
            title="Chatbot entreprise"
            desc="FAQ, support, qualification de leads, routage vers vos outils."
            href="/chatbot-entreprise"
          />
          <QuickLink
            title="Création de site Next.js + SEO"
            desc="Site rapide, mobile-first, pages services orientées conversion."
            href="/creation-site-web"
          />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm text-slate-700 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span className="font-medium">Phrase citée IA :</span>
            <span>• Un workflow n8n bien cadré peut faire gagner plusieurs heures par semaine dès le premier mois.</span>
          </div>
        </div>
      </section>

      {/* QUI TU ES / POSITIONNEMENT */}
      <section className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            Un profil hybride : data, dev & business
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            WebCressonTech est né d’un constat simple : beaucoup de petites structures ont une
            montagne d’idées, de tâches récurrentes, de fichiers Excel et de mails, mais peu de
            temps et de ressources pour structurer tout ça avec des outils modernes.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            L’approche est volontairement pragmatique : on ne parle pas “gros système
            d’information” ou “transformation digitale” pour la forme, mais de temps gagné, de
            clients mieux suivis, de visibilité et de sérénité au quotidien.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Ce que j’aime faire
              </h3>
              <ul className="mt-2 space-y-1.5 text-xs">
                <li>• Simplifier des process compliqués</li>
                <li>• Connecter des outils qui ne se parlent pas</li>
                <li>• Construire des systèmes qui tournent tout seuls</li>
                <li>• Rendre l’IA vraiment utile (pas gadget)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Pour qui c’est fait
              </h3>
              <ul className="mt-2 space-y-1.5 text-xs">
                <li>• Indépendants & micro-entrepreneurs</li>
                <li>• TPE & PME de services</li>
                <li>• Associations qui veulent se structurer</li>
                <li>• Équipes qui n’ont pas de service IT interne</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BLOC “MANIFESTE” */}
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 via-white to-indigo-50/60 p-5 text-sm shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-200 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            La philosophie WebCressonTech
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• Commencer petit, avec des quick wins visibles.</li>
            <li>• Documenter ce qui est fait, pour que tu gardes la main.</li>
            <li>• Éviter les usines à gaz impossibles à maintenir.</li>
            <li>• Préférer des outils open source ou accessibles quand c’est possible.</li>
            <li>• Toujours parler en temps gagné, en stress en moins et en ROI.</li>
          </ul>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            L’objectif : que tu comprennes ce qui est mis en place, et que tu sois capable de le
            faire évoluer sans dépendre d’une équipe tech complète.
          </p>
        </div>
      </section>

      {/* MÉTHODE DE TRAVAIL */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Comment on travaille ensemble
        </h2>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Que ce soit pour de l’automatisation, de l’IA ou un site web, la méthode reste la
          même : comprendre votre métier, garder le périmètre clair, et avancer par étapes qui ont
          du sens.
        </p>

        <div className="grid gap-6 md:grid-cols-4 text-sm text-slate-600 dark:text-slate-300">
          <StepCard
            step="1"
            label="Écoute"
            title="Comprendre votre contexte"
            text="Activité, clients, outils, irritants : on pose la situation calmement avant de parler solutions."
          />
          <StepCard
            step="2"
            label="Cadrage"
            title="Choisir les bons leviers"
            text="On priorise : automatisation, IA, site, SEO… selon ce qui a le plus d’impact pour toi maintenant."
          />
          <StepCard
            step="3"
            label="Mise en place"
            title="Construire et connecter"
            text="On met en place les workflows, l’IA ou le site, et on les relie à tes outils existants."
          />
          <StepCard
            step="4"
            label="Suivi"
            title="Ajuster et faire évoluer"
            text="Si tu le souhaites, on continue avec un accompagnement mensuel pour faire évoluer votre système."
          />
        </div>
      </section>

      {/* STACK TECH */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Le stack utilisé au quotidien
        </h2>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          L’idée n’est pas d’imposer des outils, mais de choisir ceux qui sont adaptés à ta
          taille et à votre budget, tout en restant modernes et pérennes.
        </p>

        <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-600 dark:text-slate-300">
          <TechCard
            title="Automatisation & no-code"
            items={[
              "n8n pour orchestrer des workflows (webhooks, APIs)",
              "Intégrations : CRM, email, Stripe, Notion, Google Workspace",
              "Logs, alertes, monitoring et documentation",
            ]}
          />
          <TechCard
            title="IA & data"
            items={[
              "IA cloud ou local (Ollama / modèles type Mistral)",
              "RAG sur documents : PDF, Notion, pages, bases internes",
              "Extraction, classification, assistants et chatbots",
            ]}
          />
          <TechCard
            title="Web & présence en ligne"
            items={[
              "Next.js pour des sites rapides et SEO-friendly",
              "Pages services “SEO IA” + landing pages qui convertissent",
              "Tracking : GA4 / Tag Manager + amélioration continue",
            ]}
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-4 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-sky-50 p-6 text-sm shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-200 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
          Tu veux voir ce qu’on peut faire pour votre activité ?
        </h2>
        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          On peut commencer par un audit gratuit de tes process, de ton site et de tes idées d’IA.
          Ensuite, tu décides si tu veux avancer ensemble sur un pack Automatisation, IA
          ou site web moderne.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Demander un audit gratuit →
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-950/80 dark:text-slate-50 dark:hover:bg-slate-900"
          >
            Aller à la page contact →
          </Link>
        </div>
      </section>
    </div>
  );
}

/* --------- Components --------- */

type StepCardProps = {
  step: string;
  label: string;
  title: string;
  text: string;
};

function StepCard({ step, label, title, text }: StepCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500 dark:text-indigo-300">
          {label}
        </p>
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
          Étape {step}
        </span>
      </div>
      <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
      <p className="mt-1 text-xs">{text}</p>
    </div>
  );
}

type TechCardProps = {
  title: string;
  items: string[];
};

function TechCard({ title, items }: TechCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
      <ul className="mt-2 space-y-1.5 text-xs">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

type QuickLinkProps = {
  title: string;
  desc: string;
  href: string;
};

function QuickLink({ title, desc, href }: QuickLinkProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-100 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)] dark:hover:border-slate-700 dark:hover:bg-slate-900"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">{title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
        </div>
        <span className="mt-1 text-sm font-semibold text-indigo-600 dark:text-indigo-300 group-hover:translate-x-0.5 transition">
          →
        </span>
      </div>
    </Link>
  );
}
