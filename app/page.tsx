import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { RoiCard } from "@/components/ui/RoiCard";

import { SeasonalWrapper } from "@/components/marketing/seasonal/SeasonalTheme";
import { SeasonalPromo } from "@/components/marketing/SeasonalPromo";
// Si tu utilises les badges plus tard :
// import { SeasonalBadge } from "@/components/seasonal/SeasonalTheme";

{/* PROMO SAISONNIÈRE / SOLDES */}
<SeasonalPromo
  variant="sale"
  label="Hiver 2025"
  title="Offre spéciale sur l’automatisation pour bien démarrer l’année"
  description="Pendant une période limitée, le pack Automatisation & Prospection inclut un workflow supplémentaire et une session de suivi offerte."
  highlight="-15 % sur les frais de mise en place pour les TPE et micro-entrepreneurs."
  ctaLabel="Profiter de l’offre"
  ctaHref="/tarifications"
  until="jusqu'au 31 janvier 2025"
/>

export default function HomePage() {
  return (
      <div className="space-y-20 lg:space-y-24">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              Automatisation • IA • Sites Performants
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
              <span className="relative inline-block">
                Des solutions digitales qui travaillent
                {/* Chapeau de Noël stylé */}
                <span className="pointer-events-none absolute -top-7 left-4 h-8 w-8">
                  <svg
                    viewBox="0 0 64 64"
                    className="h-full w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
                  >
                    {/* bande blanche */}
                    <rect
                      x="10"
                      y="32"
                      width="44"
                      height="10"
                      rx="5"
                      className="fill-slate-50 dark:fill-slate-200"
                    />
                    {/* partie rouge */}
                    <path
                      d="M12 32 C18 10, 40 6, 52 20 L40 32 Z"
                      className="fill-red-600 dark:fill-red-500"
                    />
                    {/* pompon */}
                    <circle
                      cx="50"
                      cy="20"
                      r="6"
                      className="fill-slate-50 dark:fill-slate-200"
                    />
                  </svg>
                </span>
              </span>
              <span className="block bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
                à la place de votre activité.
              </span>
            </h1>

            <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              WebCressonTech conçoit des workflows n8n, des intégrations IA et des
              Website optimisés SEO pour les PME, freelances et
              associations. Moins d’opérationnel, plus de temps pour votre cœur de
              métier.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/audit-gratuit"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
              >
                Demander un audit gratuit
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
              >
                Découvrir les services →
              </Link>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Audit offert : cartographie de vos process, pistes d’automatisation,
              priorisation et recommandations SEO.
            </p>
          </div>

          <div className="lg:pl-8">
            <RoiCard />
          </div>
        </section>

        {/* FEATURES (comme “Essential Integrations”) */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              FONCTIONNALITÉS
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
              Un stack moderne pour automatiser votre activité
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              On assemble Next.js, n8n, Stripe, bases de données et IA pour créer
              un système fiable : site vitrine, tunnels, prospection, reporting,
              tout parle ensemble.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card
              eyebrow="Automatisation"
              title="Workflows n8n sur mesure"
              description="On remplace les copier-coller et tâches manuelles par des scénarios qui tournent en arrière-plan."
            >
              <ul className="mt-2 space-y-1.5 text-xs">
                <li>• Synchronisation CRM, facturation, emails</li>
                <li>• Scraping & enrichissement de données</li>
                <li>• Scénarios de relance et notifications</li>
              </ul>
            </Card>
            <Card
              eyebrow="IA"
              title="IA intégrée à votre quotidien"
              description="Pas de chatbot gadget : des assistants IA connectés à vos données et vos process."
            >
              <ul className="mt-2 space-y-1.5 text-xs">
                <li>• Résumés de docs et comptes-rendus</li>
                <li>• Génération de contenus maîtrisés</li>
                <li>• Aide à la décision à partir de vos données</li>
              </ul>
            </Card>
            <Card
              eyebrow="Web"
              title="Website SEO-first"
              description="Un site rapide, propre et pensé pour Google dès le début : structure, contenu, performance."
            >
              <ul className="mt-2 space-y-1.5 text-xs">
                <li>• Architecture claire & pages pilier</li>
                <li>• Blog prêt à être relié à n8n</li>
                <li>• Core Web Vitals pris en compte</li>
              </ul>
            </Card>
            <Card
              eyebrow="Stripe"
              title="Facturation simplifiée"
              description="Stripe pour encaisser vos prestations, abonnements ou packs d’accompagnement."
            >
              <ul className="mt-2 space-y-1.5 text-xs">
                <li>• Liens de paiement sécurisés</li>
                <li>• Abonnements récurrents</li>
                <li>• Intégration avec vos outils comptables</li>
              </ul>
            </Card>
            <Card
              eyebrow="Monitoring"
              title="Suivi & métriques"
              description="On suit ce qui compte : temps gagné, leads générés, conversion du site ou de la prospection."
            >
              <ul className="mt-2 space-y-1.5 text-xs">
                <li>• Dashboards simples</li>
                <li>• Rapports automatisés</li>
                <li>• Itérations en continu</li>
              </ul>
            </Card>
            <Card
              eyebrow="Accompagnement"
              title="Pas juste un livrable"
              description="Vous n’êtes pas laissé seul avec un setup incompréhensible : on prend le temps de vous expliquer."
            >
              <ul className="mt-2 space-y-1.5 text-xs">
                <li>• Sessions d’onboarding</li>
                <li>• Docs & vidéos courtes</li>
                <li>• Support asynchrone selon l’offre</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* ABOUT (comme “Know Details About Our Company”) */}
        <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              À PROPOS
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
              WebCressonTech, studio d’automatisation & d’IA
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Basé en France, WebCressonTech accompagne des indépendants, PME et
              associations qui veulent structurer leur activité avec des outils
              modernes, sans se perdre dans la technique.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card
                eyebrow="Mission"
                title="Rendre l’automatisation accessible"
                description="Montrer que n8n, l’IA et Next.js ne sont pas réservés aux gros groupes, mais aux petites structures qui veulent gagner en temps et en sérénité."
              />
              <Card
                eyebrow="Vision"
                title="Un SI simple, mais intelligent"
                description="Des outils reliés entre eux, un site qui convertit, des automatisations qui tournent : un système d’information à taille humaine."
              />
            </div>
          </div>

          <div className="space-y-4">
            <Card
              eyebrow="Stack"
              title="DB, n8n, IA, Stripe, Next.js"
              description="On assemble un stack moderne en restant pragmatique : ce qui vous apporte du ROI en premier passe en priorité."
            >
              <ul className="mt-2 space-y-1.5 text-xs">
                <li>• Next.js 15+ pour le site et le blog</li>
                <li>• n8n pour orchestrer les workflows</li>
                <li>• IA (local / cloud) selon votre contexte</li>
                <li>• Stripe pour la facturation si besoin</li>
              </ul>
            </Card>
            <Card
              eyebrow="Process"
              title="Audit → Design → Implémentation → Suivi"
              description="On commence par comprendre votre contexte avant d’écrire la moindre ligne de code."
            >
              <ol className="mt-2 space-y-1.5 text-xs list-decimal list-inside">
                <li>Audit de vos process & outils actuels</li>
                <li>Priorisation des quick wins</li>
                <li>Mise en place des workflows & du site</li>
                <li>Suivi des résultats et ajustements</li>
              </ol>
            </Card>
          </div>
        </section>

        {/* TEAM (comme “Our Team”) */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              ÉQUIPE
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
              Un profil hybride : data, dev & business
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Profil data / IA avec un pied dans le terrain : automatisation de
              process, prospection, marketing de contenu et transformation
              digitale.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              eyebrow="Fondateur"
              title="Alexis Cresson"
              description="Ingénieur data & automatisation. Mise en place de workflows n8n, IA et Website pour petites et moyennes structures."
            />
            <Card
              eyebrow="Réseau"
              title="Dev & designers partenaires"
              description="Selon les besoins : intégrateurs, designers UI, experts SEO ou data viennent renforcer le projet."
            />
            <Card
              eyebrow="Approche"
              title="Pédagogie & transparence"
              description="On vous explique ce qui est fait, pourquoi, et comment vous pouvez garder la main sur vos outils."
            />
          </div>
        </section>

        {/* “Portfolio / Cases” simplifié */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              CAS D’USAGE
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
              Quelques scénarios typiques qu’on met en place
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Chaque projet est adapté, mais beaucoup de besoins se ressemblent :
              prospection, suivi clients, automatisation admin, contenu…
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              eyebrow="Prospection"
              title="Pipeline B2B automatisé"
              description="Scraper les entreprises cibles, enrichir les données, générer des messages personnalisés et suivre les réponses."
            />
            <Card
              eyebrow="Admin"
              title="Dossiers & factures fluides"
              description="Génération automatique de docs, stockage structuré, rappels, synchronisation avec votre outil de facturation."
            />
            <Card
              eyebrow="Marketing"
              title="Blog & LinkedIn connectés"
              description="Articles générés / aidés par l’IA, planifiés via n8n et reliés à votre site pour booster votre SEO."
            />
          </div>
        </section>

        {/* PRICING TEASER – ALIGNÉ SUR /TARIFICATIONS */}
        <section className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-sky-50 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
                  TARIFS
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
                  Des offres lisibles, adaptées aux petites structures
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Micro-entreprise, asso, PME : l’objectif est que l’investissement
                  soit couvert par le temps gagné ou le chiffre d’affaires généré.
                  Actuellement :{" "}
                  <span className="font-semibold text-red-600 dark:text-red-400">
                    Offre Noël ≈ -30 % sur les packs principaux.
                  </span>
                </p>
              </div>
              <Link
                href="/tarifications"
                className="inline-flex items-center justify-center rounded-full border border-indigo-500/40 bg-white/80 px-4 py-2 text-xs font-medium text-indigo-700 shadow-sm hover:border-indigo-500 hover:bg-indigo-50 dark:border-indigo-400/60 dark:bg-slate-950/60 dark:text-indigo-200 dark:hover:bg-slate-900"
              >
                Voir tous les détails des offres →
              </Link>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {/* AUTOMATISATION */}
              <Card
                eyebrow="Automatisation"
                title="Pack Automatisation & Prospection"
                description="Pour remplacer les tâches répétitives (prospection, emails, CRM, admin) par des workflows no-code qui tournent seuls."
              >
                <p className="mt-3 text-xs text-slate-500 line-through dark:text-slate-500">
                  À partir de 1 287 € HT
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  À partir de 990 € HT
                  <span className="ml-2 inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-red-600 dark:bg-red-500/15 dark:text-red-300">
                    Offre Noël
                  </span>
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Mise en place une fois. Maintenance en option dès 120 € HT / mois.
                </p>
              </Card>

              {/* IA */}
              <Card
                eyebrow="IA"
                title="Pack Assistant IA TPE / PME"
                description="Une IA qui connaît votre activité : clients, docs, process — sans usine à gaz."
              >
                <p className="mt-3 text-xs text-slate-500 line-through dark:text-slate-500">
                  À partir de 897 € HT
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  À partir de 690 € HT
                  <span className="ml-2 inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-red-600 dark:bg-red-500/15 dark:text-red-300">
                    Offre Noël
                  </span>
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Pack une fois. Maintenance IA en option dès 150 € HT / mois.
                </p>
              </Card>

              {/* SITE WEB */}
              <Card
                eyebrow="Site Web"
                title="Pack Site web moderne & Présence Web"
                description="Un site moderne, rapide, relié à votre CRM, avec une base SEO propre."
              >
                <p className="mt-3 text-xs text-slate-500 line-through dark:text-slate-500">
                  À partir de 767 € HT
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-50">
                  À partir de 590 € HT
                  <span className="ml-2 inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-red-600 dark:bg-red-500/15 dark:text-red-300">
                    Offre Noël
                  </span>
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Projet au forfait. Maintenance site & SEO dès 180 € HT / mois.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* BLOG TEASER */}
        <section className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              BLOG
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
              Comprendre l’IA, l’automatisation et le SEO sans jargon
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Des articles reliés à n8n pour publier régulièrement : cas concrets,
              tutos et retours d’expérience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Card
              eyebrow="Automatisation"
              title="Par où commencer avec n8n quand on n’a pas de temps ?"
            />
            <Card
              eyebrow="IA"
              title="Utiliser l’IA pour assister, pas remplacer, vos process"
            />
            <Card
              eyebrow="SEO & Web"
              title="Ce qu’unSite web moderne bien pensé change pour votre visibilité"
            />
          </div>

          <Link
            href="/blog"
            className="inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200"
          >
            Accéder à tous les articles →
          </Link>
        </section>

        {/* SUPPORT / CONTACT MINI (comme “Need any help?”) */}
        <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-[0_18px_45px_rgba(0,0,0,0.65)] lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              SUPPORT
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
              Besoin d’un coup de main pour cadrer votre projet ?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Vous avez une idée assez claire de ce que vous voulez faire (site, IA,
              automatisation) mais vous ne savez pas par où commencer ? On peut en
              parler sur un créneau rapide.
            </p>

            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50">
                  Email
                </p>
                <a
                  href="mailto:contact@webcresson.com"
                  className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200"
                >
                  contact@webcresson.com
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Ouvrir la page contact
            </Link>
          </div>

          <form className="space-y-4 text-sm">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
                Votre prénom
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-200">
                De quoi avez-vous besoin ?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-indigo-400 dark:focus:ring-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
            >
              Envoyer le message (bientôt relié à n8n)
            </button>
          </form>
        </section>
      </div>
  );
}
