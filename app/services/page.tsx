import Link from "next/link";

export const metadata = {
  title: "Services | WebCressonTech",
  description:
    "Automatisation n8n, intégration IA, création de Website SEO et accompagnement digital pour TPE, PME et indépendants.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 lg:space-y-24">
      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          SERVICES
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Des solutions modernes pour automatiser,
          <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            accélérer et structurer votre business.
          </span>
        </h1>

        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Automatisation no-code, IA opérationnelle, sites web Next.js et accompagnement
          digital : WebCressonTech aide les TPE, PME et indépendants à gagner du temps,
          rassurer leurs clients et structurer leurs workflows sans complexité technique.
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
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          vous pouvez commencer petit (une automatisation, un mini-site) et évoluer ensuite :
          tout est pensé pour être modulaire.
        </p>
      </section>

      {/* BLOCS SERVICES */}
      <section className="space-y-16">
        {/* AUTOMATISATION */}
        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
                AUTOMATISATION
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
                Automatiser votre activité sans code : gagner du temps, réduire les erreurs
              </h2>
              <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                On utilise n8n, Zapier, Make et des scripts légers pour remplacer les tâches
                répétitives : emails, CRM, relances, factures, leads, administration, etc.
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
              <p className="font-medium text-slate-700 dark:text-slate-200">
                Pack Automatisation à partir de{" "}
                <span className="font-semibold text-indigo-500 dark:text-indigo-300">
                  l’offre dédiée
                </span>
              </p>
              <Link
                href="/tarifications"
                className="inline-flex items-center text-[11px] font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
              >
                Voir les tarifs Automatisation →
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Automation Cards */}
            <ServiceCard
              label="Prospection automatisée"
              description="Génère et enrichit des listes de prospects, envoie des messages personnalisés et suit les réponses automatiquement."
              points={[
                "Scraping + enrichissement SIREN/SIRET",
                "Messages LinkedIn / email personnalisés",
                "Suivi automatique des réponses",
              ]}
            />

            <ServiceCard
              label="Emails & relances automatisés"
              description="Fini les oublis : factures, devis, RDV, onboarding… tout peut se faire automatiquement."
              points={[
                "Emails déclenchés par événement",
                "Suivi des paiements / factures",
                "Relances intelligentes",
              ]}
            />

            <ServiceCard
              label="CRM & administration automatisés"
              description="Mise à jour automatique de votre CRM, archivage, export comptable, dossiers clients."
              points={[
                "Notion / HubSpot / Pipedrive automatisés",
                "Tri des documents",
                "Back-office sans saisie manuelle",
              ]}
            />
          </div>
        </div>

        {/* IA */}
        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
                INTÉGRATION IA
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
                IA intégrée à votre métier : plus rapide, plus malin, plus simple
              </h2>
              <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                On intègre l’IA directement dans votre workflow : génération de contenus,
                analyse de documents, assistants, recommandations, réponses automatiques, etc.
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
              <p className="font-medium text-slate-700 dark:text-slate-200">
                Pack IA pensé pour{" "}
                <span className="font-semibold text-indigo-500 dark:text-indigo-300">
                  TPE, PME et indépendants
                </span>
              </p>
              <Link
                href="/tarifications"
                className="inline-flex items-center text-[11px] font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
              >
                Voir les tarifs IA →
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* IA Cards */}
            <ServiceCard
              label="Assistant IA métier"
              description="Une IA spécialisée dans votre activité : réponses, rédaction, calculs, décisions."
              points={[
                "IA pour artisans (devis / réponses clients)",
                "IA pour consultants (résumés immédiats)",
                "IA pour e-commerce (support automatisé)",
              ]}
            />

            <ServiceCard
              label="Analyse & synthèse de documents"
              description="Résumer, classifier, structurer et extraire les infos importantes automatiquement."
              points={[
                "Résumé de PDF / comptes-rendus",
                "Extraction de données",
                "Tableaux, listes, actions à mener",
              ]}
            />

            <ServiceCard
              label="Contenus automatisés"
              description="Génère des posts, emails, pages ou scripts adaptés à votre votre et votre audience."
              points={[
                "Posts LinkedIn calibrés",
                "Articles pour votre blog",
                "Emails pros prêts à envoyer",
              ]}
            />
          </div>
        </div>

        {/* SITES WEB */}
        <div className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
                SITES WEB
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
                Website modernes, rapides et pensés pour convertir
              </h2>
              <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                Création de sites web design + SEO + intégration CRM + blog relié à n8n.
                Le tout avec un suivi pour t’aider à bien rester visible sur le web.
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
              <p className="font-medium text-slate-700 dark:text-slate-200">
                Packs site web{" "}
                <span className="font-semibold text-indigo-500 dark:text-indigo-300">
                  alignés sur tes objectifs
                </span>
              </p>
              <Link
                href="/tarifications"
                className="inline-flex items-center text-[11px] font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
              >
                Voir les tarifs Site Web →
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Web cards */}
            <ServiceCard
              label="Site vitrine moderne"
              description="Design premium inspiré des meilleurs templates SaaS."
              points={[
                "Pages clés (accueil, services, contact...)",
                "Blog intégré",
                "Animations propres & responsive",
              ]}
            />

            <ServiceCard
              label="SEO + contenu"
              description="Structure SEO, conseils rédactionnels, optimisation Core Web Vitals."
              points={[
                "Mots-clés & structure",
                "Pages piliers + blog optimisé",
                "Audit SEO régulier",
              ]}
            />

            <ServiceCard
              label="CRM & présence web"
              description="On t’aide à connecter votre site à votre CRM et à organiser votre suivi client."
              points={[
                "HubSpot / Notion / Pipedrive",
                "Formulaires connectés",
                "Automatisation du suivi",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-3 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-sky-50 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Prêt à passer d’un process “à la main” à un système qui travaille pour toi ?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          On commence par un audit rapide de votre activité, puis on choisit ensemble le pack
          le plus rentable pour toi. Tu gardes la main, on s’occupe de la partie technique.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Découvrir les packs & tarifs →
          </Link>
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Demander un audit gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}

/**
 * Petite carte réutilisable, modernisée :
 * - layout flex-col avec footer
 * - hover border/translate
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
          Service inclus dans les packs
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
        <span>Compatible avec les offres Automation / IA / Site web.</span>
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
