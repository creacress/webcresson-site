import Link from "next/link";

export const metadata = {
  title: "Marketing & présence en ligne | WebCressonTech",
  description:
    "Stratégie marketing, SEO, contenu IA, LinkedIn et présence sur la toile. Attirez les bons clients avec un système clair et mesurable.",
};

export default function MarketingServicesPage() {
  return (
    <div className="space-y-20 lg:space-y-24">
      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          SERVICES MARKETING
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Un marketing clair,
          <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            régulier et pensé pour attirer les bons clients.
          </span>
        </h1>

        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          On pose une stratégie simple, exploitable et mesurable : SEO, contenu, posts LinkedIn,
          présence sur la toile et funnels d’acquisition. Vous savez enfin quoi dire, à qui le dire
          et où le dire… sans y passer vos journées.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-500"
          >
            Voir les packs Marketing →
          </Link>
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Demander un audit de visibilité
          </Link>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          L’objectif : plus de visibilité, mais surtout plus de demandes qualifiées, avec un système
          que vous pouvez maintenir dans le temps.
        </p>
      </section>

      {/* SECTION 1 – BÉNÉFICES CLÉS */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            POURQUOI STRUCTURER VOTRE MARKETING ?
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Arrêter les actions au hasard et mettre en place un système d’acquisition.
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Posts aléatoires, site laissé de côté, pas de suivi… Résultat : du temps perdu et peu
            de retours. On pose un marketing simple, cohérent avec votre offre, relié à votre site
            et à vos automatisations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <MarketingBenefitCard
            eyebrow="Stratégie claire"
            title="Vous savez quoi dire et à qui"
            description="On clarifie votre positionnement, vos offres et vos messages pour parler aux bonnes personnes, avec les bons mots."
            points={[
              "Messages orientés bénéfices clients",
              "Promesse principale + preuves concrètes",
              "Alignement site / réseaux / offres",
            ]}
          />
          <MarketingBenefitCard
            eyebrow="Visibilité régulière"
            title="Une présence qui ne dépend pas de votre humeur"
            description="Calendrier éditorial, contenus préparés, automatisations : votre présence ne s’arrête plus dès que vous êtes débordé."
            points={[
              "Planning de contenu simple à suivre",
              "Posts et articles pouvant être automatisés",
              "Rituels clairs plutôt que “quand j’ai le temps”",
            ]}
          />
          <MarketingBenefitCard
            eyebrow="Impact business"
            title="Du contenu qui génère des opportunités"
            description="Chaque contenu a un rôle : attirer, rassurer ou convertir. On relie vos actions à vos résultats."
            points={[
              "CTAs clairs vers audit, appel ou devis",
              "Landing pages dédiées pour vos offres",
              "Suivi via Analytics & outils de tracking",
            ]}
          />
        </div>
      </section>

      {/* SECTION 2 – CE QUE LE MARKETING INCLUT */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              CE QUE NOUS METTONS EN PLACE
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
              Une base marketing qui tient dans la durée, reliée à votre site et vos outils.
            </h2>
            <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              On ne parle pas uniquement de “faire des posts”. On construit un socle : messages,
              offres, contenus clés, canaux prioritaires, puis on automatise ce qui peut l’être.
            </p>
          </div>

          <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
            <p className="font-medium text-slate-700 dark:text-slate-200">
              Disponible dans les{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-300">
                packs Marketing et combinaisons Marketing + Site web + Automatisation
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
            title="Positionnement & messages"
            description="On clarifie à qui vous vous adressez, quels problèmes vous résolvez et pourquoi on devrait vous choisir vous."
          />
          <FeatureCard
            title="Stratégie SEO & contenus"
            description="Mots-clés prioritaires, sujets d’articles, structure de vos pages, idées de contenus pensés pour Google et vos clients."
          />
          <FeatureCard
            title="Ligne éditoriale & ton"
            description="Une façon de parler cohérente avec votre personnalité, votre secteur et vos clients (ni trop froide, ni trop “startup”.)"
          />
          <FeatureCard
            title="Calendrier éditorial simple"
            description="Plan clair des contenus à produire/automatiser : articles, posts LinkedIn, emails, pages de vente, études de cas."
          />
          <FeatureCard
            title="Contenus IA + validation humaine"
            description="On s’appuie sur l’IA pour produire plus vite, mais avec des garde-fous pour garder un ton humain, incarné et crédible."
          />
          <FeatureCard
            title="Suivi & métriques clés"
            description="On pose des repères : trafic, demandes, taux de conversion. Vous voyez ce qui marche, sans dashboards incompréhensibles."
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
            On part de votre réalité terrain, pas d’un modèle théorique.
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            L’idée n’est pas de vous transformer en créateur de contenu à temps plein, mais de
            créer un système qui tourne avec votre niveau d’énergie et vos contraintes.
          </p>
        </div>

        <ol className="space-y-4">
          <StepItem
            step="01"
            title="Diagnostic visibilité & offres"
            description="On regarde votre site, vos réseaux, vos offres, votre cible actuelle et vos envies. Objectif : comprendre d’où on part et où vous voulez aller."
          />
          <StepItem
            step="02"
            title="Stratégie & messages"
            description="On pose votre positionnement, vos messages clés, vos angles de communication et les canaux prioritaires (site, LinkedIn, email…)."
          />
          <StepItem
            step="03"
            title="Plan de contenu & automatisations"
            description="On construit un calendrier éditorial réaliste. Là où c’est pertinent, on branche l’IA et les automatisations (n8n, intégrations site web)."
          />
          <StepItem
            step="04"
            title="Mise en route & ajustements"
            description="On lance, on mesure, on ajuste. Vous avez des scripts, des templates, des routines claires, et un système qui peut tourner."
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
            Pour ceux qui veulent arrêter l’impro et passer à un marketing structuré.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <PersonaCard
            title="Indépendants & freelances"
            description="Vous êtes souvent recommandé, mais votre visibilité repose trop sur votre réseau. Vous voulez enfin une présence claire et assumée."
            tags={["Personal branding", "Visibilité", "Leads qualifiés"]}
          />
          <PersonaCard
            title="TPE & petites structures"
            description="Vous avez une vraie valeur mais vous n’êtes pas assez visibles. On pose un système simple pour générer des demandes de façon régulière."
            tags={["Présence en ligne", "Acquisition", "Clarté de l’offre"]}
          />
          <PersonaCard
            title="PME en structuration"
            description="Vous voulez aligner marketing, site, offres et actions commerciales, avec un langage commun et des indicateurs clairs."
            tags={["Stratégie", "Alignement", "Suivi des résultats"]}
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
            Ce qu’on vous demande souvent avant de travailler ensemble.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FaqItem
            question="Est-ce que vous gérez aussi l’exécution des contenus ?"
            answer="Oui, selon le pack. On peut vous fournir la stratégie + les templates, ou aller jusqu’à la rédaction et l’automatisation avec l’IA et n8n."
          />
          <FaqItem
            question="Est-ce que je dois être très présent sur les réseaux ?"
            answer="On adapte à votre réalité. Mieux vaut un rythme réaliste que vous tenez, qu’un plan parfait que vous abandonnez après 3 semaines."
          />
          <FaqItem
            question="Est-ce que c’est lié à mon site WebCressonTech ?"
            answer="Oui. L’idéal est d’aligner votre site, vos offres et votre marketing. On peut intervenir uniquement sur le marketing, mais le combo est plus puissant."
          />
          <FaqItem
            question="Est-ce que l’IA ne risque pas de rendre mes contenus “génériques” ?"
            answer="On utilise l’IA comme accélérateur, pas comme pilote. Votre vision, votre ton et vos exemples restent au centre. L’IA sert à produire plus vite, pas à vous remplacer."
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-3 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-sky-50 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Prêt à structurer votre marketing et votre présence en ligne ?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          On commence par un audit de votre visibilité actuelle (site, réseaux, messages). Vous
          repartez avec un plan concret, même si nous ne travaillons pas ensemble ensuite.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Découvrir les packs Marketing →
          </Link>
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Demander un audit de visibilité
          </Link>
        </div>
      </section>
    </div>
  );
}

/* COMPOSANTS RÉUTILISABLES */

type MarketingBenefitCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

function MarketingBenefitCard({
  eyebrow,
  title,
  description,
  points,
}: MarketingBenefitCardProps) {
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
