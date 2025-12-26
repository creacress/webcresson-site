import Link from "next/link";

export const metadata = {
  title: "WCT Platform | WebCressonTech",
  description:
    "WCT Platform : un système d’information simple pour créer, déployer et piloter des IA, chatbots et automatisations (RPA) pour TPE/PME.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 lg:space-y-24">
      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          WCT PLATFORM
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          WCT Platform :
          <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            votre SI pour créer des IA, chatbots et automatisations.
          </span>
        </h1>

        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Une plateforme modulaire (modules WCT) qui accompagne les entreprises pour :
          créer des assistants IA (RAG), déployer des chatbots, automatiser (RPA) et connecter
          leurs outils — avec une interface moderne et des intégrations fiables.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-500"
          >
            Voir les packs & tarifs →
          </Link>
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Demander un audit gratuit
          </Link>
          <Link
            href="/demo-ia"
            className="inline-flex items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-50/70 px-5 py-2.5 text-sm font-medium text-indigo-700 shadow-sm hover:bg-indigo-100 dark:border-indigo-400/60 dark:bg-slate-950/70 dark:text-indigo-200 dark:hover:bg-slate-900"
          >
            Tester la Démo IA →
          </Link>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Vous démarrez avec 1 module (chatbot, automatisation ou site) puis vous ajoutez les
          briques WCT au fil de votre croissance : tout est conçu pour être modulaire.
        </p>
      </section>

      {/* MODULES WCT */}
      <section className="space-y-16">
        {/* MARKETING */}
        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
                WCT GROWTH
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
                Accélérer votre acquisition avec un système marketing clair.
              </h2>
              <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                WCT Growth structure votre acquisition : positionnement, messages, SEO et contenu.
                Objectif : arrêter le "bricolage" et piloter une machine simple, mesurable et durable.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <p className="font-medium text-slate-700 dark:text-slate-200">
                Détail du service sur la page{" "}
                <span className="font-semibold text-indigo-500 dark:text-indigo-300">
                  WCT Growth
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/services/marketing"
                  className="inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-medium text-slate-50 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Découvrir le service Marketing →
                </Link>
                <Link
                  href="/tarifications"
                  className="inline-flex items-center text-[11px] font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
                >
                  Voir les packs Marketing →
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              label="Stratégie & messages"
              description="Clarifier vos offres, vos cibles, vos messages et votre promesse pour que vos clients comprennent rapidement ce que vous apportez."
              points={[
                "Positionnement clair",
                "Messages orientés bénéfices",
                "Alignement site / réseaux",
              ]}
            />
            <ServiceCard
              label="SEO & contenus"
              description="Définir vos thématiques, vos mots-clés et vos contenus prioritaires pour Google et pour vos clients."
              points={[
                "Plan de contenu SEO",
                "Pages piliers & blog",
                "Suivi des résultats clés",
              ]}
            />
            <ServiceCard
              label="Présence régulière"
              description="Un calendrier éditorial simple à tenir, éventuellement dopé par l’IA et l’automatisation pour garder le rythme."
              points={[
                "Planning réaliste",
                "Templates prêts à l’emploi",
                "Possibilité d’automatiser une partie",
              ]}
            />
          </div>
        </div>

        {/* AUTOMATISATION & IA */}
        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
                WCT AUTOMATE + WCT AI
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
                Automatiser et intégrer l’IA dans vos process (sans chaos).
              </h2>
              <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                WCT Automate orchestre vos workflows (RPA) et connecte vos outils.
                WCT AI ajoute la couche intelligente : analyse, résumé, classification, assistants métiers.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <p className="font-medium text-slate-700 dark:text-slate-200">
                Détail du service sur la page{" "}
                <span className="font-semibold text-indigo-500 dark:text-indigo-300">
                  WCT Automate + WCT AI
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/services/automatisation"
                  className="inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-medium text-slate-50 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Découvrir le service Automatisation →
                </Link>
                <Link
                  href="/tarifications"
                  className="inline-flex items-center text-[11px] font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
                >
                  Voir les packs Automatisation →
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              label="Workflows n8n / Zapier"
              description="Relier vos outils et automatiser les actions récurrentes : CRM, emails, fichiers, formulaires, back-office."
              points={[
                "Scénarios documentés",
                "Déclencheurs clairs",
                "Suivi & logs des exécutions",
              ]}
            />
            <ServiceCard
              label="IA intégrée à vos process"
              description="Utiliser l’IA pour analyser, résumer, classer ou enrichir vos données, sans changer complètement vos outils."
              points={[
                "Analyse de documents",
                "Génération de contenu métier",
                "Aides à la décision",
              ]}
            />
            <ServiceCard
              label="Prospection & administratif"
              description="Automatiser la génération de leads, le suivi des demandes, la facturation et les relances pour garder le contrôle."
              points={[
                "Enrichissement & suivi des leads",
                "Préparation de factures / devis",
                "Relances intelligentes",
              ]}
            />
          </div>
        </div>

        {/* SITES WEB */}
        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
                WCT STUDIO
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
                Une interface moderne pour piloter votre SI (web, IA, automatisations).
              </h2>
              <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                WCT Studio regroupe : site web, formulaires, dashboard et widgets (chat) — connectés à vos données.
                Votre front devient le point d’entrée du SI : clair, rapide, SEO-ready et évolutif.
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <p className="font-medium text-slate-700 dark:text-slate-200">
                Détail du service sur la page{" "}
                <span className="font-semibold text-indigo-500 dark:text-indigo-300">
                  WCT Studio
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/services/web"
                  className="inline-flex items-center rounded-full bg-slate-900 px-4 py-1.5 text-[11px] font-medium text-slate-50 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Découvrir le service Site web →
                </Link>
                <Link
                  href="/tarifications"
                  className="inline-flex items-center text-[11px] font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
                >
                  Voir les packs Site web →
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              label="Site vitrine moderne"
              description="Un site clair, crédible et responsive, inspiré des univers SaaS modernes, avec les pages clés pour présenter vos offres."
              points={[
                "Design premium",
                "Mobile-first",
                "Structure claire & rassurante",
              ]}
            />
            <ServiceCard
              label="SEO & performances"
              description="Structure SEO, balises, performances et blog intégré pour préparer votre visibilité Google dès le départ."
              points={[
                "SEO technique intégré",
                "Blog prêt pour le contenu",
                "Core Web Vitals optimisés",
              ]}
            />
            <ServiceCard
              label="Site connecté & évolutif"
              description="Formulaires reliés à votre CRM, intégrations n8n possibles, prêt pour accueillir IA, chatbots et automatisations."
              points={[
                "Connexion CRM / outils internes",
                "Prêt pour les workflows n8n",
                "Évolutif sans tout refaire",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-3 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-sky-50 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Vous voulez savoir par où commencer ?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          On commence par un audit de votre situation (site, process, visibilité), puis on
          identifie ensemble le service ou le pack le plus pertinent pour vos objectifs.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Demander un audit gratuit →
          </Link>
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Consulter les packs & tarifs
          </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * Carte service réutilisable
 */
type ServiceCardProps = {
  label: string;
  description: string;
  points: string[];
};

function ServiceCard({ label, description, points }: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-100/70 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)] dark:hover:border-indigo-500/50 dark:hover:shadow-[0_22px_60px_rgba(0,0,0,0.9)]">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400" />
          Module WCT
        </div>
        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
          {label}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
        <ul className="mt-3 space-y-1.5 text-sm text-slate-500 dark:text-slate-400">
          {points.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <span>Compatible avec WCT Growth, WCT Automate, WCT AI et WCT Studio.</span>
        <Link
          href="/tarifications"
          className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
        >
          Voir les tarifs →
        </Link>
      </div>
    </div>
  );
}
