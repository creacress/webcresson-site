import Link from "next/link";

export const metadata = {
  title: "Automatisation & IA | WebCressonTech",
  description:
    "Automatisation de vos process, intégration IA, RPA, n8n, Zapier. Gagnez du temps, réduisez les tâches répétitives et sécurisez vos flux de données.",
};

export default function AutomationServicesPage() {
  return (
    <div className="space-y-20 lg:space-y-24">
      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          SERVICES AUTOMATISATION & IA
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Automatisez vos process,
          <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
            intégrez l’IA et récupérez du temps chaque semaine.
          </span>
        </h1>

        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Nous concevons des workflows d’automatisation et d’IA (n8n, Zapier, RPA, API) 
          adaptés à votre activité : moins de tâches manuelles, moins d’erreurs, plus de temps pour 
          ce qui a vraiment de la valeur.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-500"
          >
            Voir les packs Automatisation →
          </Link>
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Demander un audit de vos process
          </Link>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          L’objectif : remplacer les copier-coller, fichiers perdus et tâches répétitives
          par des scénarios clairs, monitorés et évolutifs.
        </p>
      </section>

      {/* SECTION 1 – BÉNÉFICES CLÉS */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            POURQUOI AUTOMATISER ?
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Moins de tâches manuelles, plus de contrôle sur vos flux de données.
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            L’automatisation n’est pas que “technique”. C’est une manière de sécuriser vos opérations,
            fiabiliser vos données et dégager du temps pour la stratégie, la vente ou vos clients.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <AutomationBenefitCard
            eyebrow="Gain de temps"
            title="Moins de clics, plus de valeur"
            description="Ce qui vous prend aujourd’hui 2 heures par semaine peut être exécuté en quelques secondes par une machine."
            points={[
              "Suppression des tâches répétitives",
              "Réduction du temps passé sur l’administratif",
              "Focus sur les actions à forte valeur ajoutée",
            ]}
          />
          <AutomationBenefitCard
            eyebrow="Fiabilité des données"
            title="Moins d’erreurs humaines"
            description="Vos données circulent entre vos outils sans copier-coller, avec des règles claires et traçables."
            points={[
              "Moins d’oublis et de doublons",
              "Historique des opérations",
              "Contrôle sur ce qui se passe, quand, et pourquoi",
            ]}
          />
          <AutomationBenefitCard
            eyebrow="Scalabilité"
            title="Un système qui grandit avec vous"
            description="Vous pouvez gérer plus de demandes, de leads ou de clients sans exploser votre charge mentale."
            points={[
              "Workflows qui se dupliquent et s’adaptent",
              "Ajout progressif de nouveaux scénarios",
              "Architecture pensée pour durer",
            ]}
          />
        </div>
      </section>

      {/* SECTION 2 – CE QUE L’AUTOMATISATION INCLUT */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              CE QUE NOUS METTONS EN PLACE
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
              Des workflows d’automatisation concrets, reliés à vos outils existants.
            </h2>
            <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Nous analysons vos process actuels, identifions les “zones de friction”, puis 
              concevons des scénarios d’automatisation adaptés : prospection, CRM, facturation,
              contenu, reporting, etc.
            </p>
          </div>

          <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
            <p className="font-medium text-slate-700 dark:text-slate-200">
              Disponible dans les{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-300">
                packs Automatisation seuls ou combinés (Site web + Marketing)
              </span>
              .
            </p>
            <Link
              href="/tarifications"
              className="inline-flex items-center text-[11px] font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300"
            >
              Voir les offres détaillées →
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Workflows n8n, Zapier, Make"
            description="Conception de scénarios clairs, documentés, pour connecter vos outils sans devoir développer un SI from scratch."
          />
          <FeatureCard
            title="Automatisation de la prospection"
            description="Recherche, enrichissement, qualification et suivi des prospects, avec notifications et tâches pour le suivi humain."
          />
          <FeatureCard
            title="Connexion CRM & outils internes"
            description="Synchronisation entre votre site, vos formulaires, votre CRM, vos fichiers et vos outils de suivi (Notion, HubSpot, Pipedrive…)."
          />
          <FeatureCard
            title="IA intégrée à vos process"
            description="Rédaction assistée, analyse de texte, scoring, classification, extraction d’infos à partir de documents ou de flux web."
          />
          <FeatureCard
            title="Facturation & administratif"
            description="Préparation de factures, relances, génération de documents, envoi d’emails automatiques, suivi des statuts."
          />
          <FeatureCard
            title="Monitoring & logs"
            description="Suivi des workflows, alertes en cas d’erreur, logs exploitables pour comprendre rapidement ce qui se passe."
          />
        </div>
      </section>

      {/* SECTION 3 – PROCESSUS */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            COMMENT ÇA SE PASSE ?
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            On part de vos process actuels, puis on construit des workflows réalistes.
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            L’idée n’est pas d’automatiser “tout et n’importe quoi”, mais ce qui est répétitif, 
            chronophage et à faible valeur ajoutée, sans casser votre organisation.
          </p>
        </div>

        <ol className="space-y-4">
          <StepItem
            step="01"
            title="Cartographie de vos process"
            description="Nous identifions les tâches répétitives, les transferts de données manuels, les risques d’erreur et les pertes de temps au quotidien."
          />
          <StepItem
            step="02"
            title="Conception des scénarios"
            description="Nous définissons des workflows simples, avec des déclencheurs clairs (nouveau lead, nouvelle facture, nouveau fichier, etc.) et des règles métier."
          />
          <StepItem
            step="03"
            title="Mise en place & tests"
            description="Paramétrage des outils (n8n, Zapier, API, IA), tests sur des cas réels, ajustements et sécurisation des flux."
          />
          <StepItem
            step="04"
            title="Passage en production & suivi"
            description="Mise en route des scénarios, dashboard de suivi, consignes simples pour votre équipe, possibilité d’évolutions au fil du temps."
          />
        </ol>
      </section>

      {/* SECTION 4 – POUR QUI ? */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            POUR QUI ?
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Pour ceux qui en ont marre de tout faire à la main.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <PersonaCard
            title="Indépendants débordés"
            description="Vous passez trop de temps dans vos mails, vos fichiers et vos outils. L’automatisation vous permet de respirer et de reprendre du temps pour vos clients."
            tags={["Solopreneurs", "Consultants", "Coachs"]}
          />
          <PersonaCard
            title="TPE avec beaucoup de flux"
            description="Beaucoup de demandes, de devis, de factures, de mails… mais peu de structuration. L’automatisation apporte de l’ordre sans lourdeur."
            tags={["TPE", "Petites équipes", "Back-office"]}
          />
          <PersonaCard
            title="PME en croissance"
            description="Votre volume augmente, votre équipe n’a plus le temps de tout suivre manuellement. Vous avez besoin de processus solides et scalables."
            tags={["Croissance", "Industrialisation", "Process"]}
          />
        </div>
      </section>

      {/* SECTION 5 – FAQ */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            QUESTIONS FRÉQUENTES
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Ce que les clients posent souvent comme questions avant d’automatiser.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FaqItem
            question="Est-ce que je dois déjà avoir des outils en place ?"
            answer="Non. Nous pouvons partir de votre situation actuelle, suggérer des outils adaptés (CRM, n8n, etc.) et construire la stack au fur et à mesure."
          />
          <FaqItem
            question="Est-ce que l’automatisation va remplacer l’humain ?"
            answer="L’objectif est de vous débarrasser des tâches mécaniques, pas de retirer le relationnel ou la réflexion. Vous gardez la main sur les décisions importantes."
          />
          <FaqItem
            question="Est-ce que c’est compliqué à maintenir ?"
            answer="Non, si c’est bien conçu. Nous documentons les scénarios, nommons clairement les étapes et pouvons prévoir un accompagnement si nécessaire."
          />
          <FaqItem
            question="Et si un workflow tombe en panne ?"
            answer="Nous mettons en place des logs, des alertes et des contrôles pour que vous soyez prévenu rapidement et que le problème soit facile à identifier."
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-3 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-emerald-50 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Prêt à arrêter les copier-coller et les tâches répétitives ?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          On commence par une cartographie simple de vos process, puis on identifie les 2 à 3
          automatisations les plus rentables à mettre en place rapidement.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Découvrir les packs Automatisation →
          </Link>
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Demander un audit de vos process
          </Link>
        </div>
      </section>
    </div>
  );
}

/* COMPOSANTS RÉUTILISABLES */

type AutomationBenefitCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

function AutomationBenefitCard({
  eyebrow,
  title,
  description,
  points,
}: AutomationBenefitCardProps) {
  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md hover:shadow-indigo-100/70 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)] dark:hover:border-indigo-500/50 dark:hover:shadow-[0_22px_60px_rgba(0,0,0,0.9)]">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400" />
          {eyebrow}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
        <ul className="mt-3 space-y-1.5 text-sm text-slate-500 dark:text-slate-400">
          {points.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h3>
      <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

type StepItemProps = {
  step: string;
  title: string;
  description: string;
};

function StepItem({ step, title, description }: StepItemProps) {
  return (
    <li className="flex gap-4 rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
        {step}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          {title}
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </li>
  );
}

type PersonaCardProps = {
  title: string;
  description: string;
  tags: string[];
};

function PersonaCard({ title, description, tags }: PersonaCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
      <div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          {title}
        </h3>
        <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

type FaqItemProps = {
  question: string;
  answer: string;
};

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
        {question}
      </h3>
      <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300">{answer}</p>
    </div>
  );
}
