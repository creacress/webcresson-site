import Link from "next/link";

export const metadata = {
  title: "Création de site web moderne | WebCressonTech",
  description:
    "Création de sites web Next.js rapides, SEO-friendly, mobile-first et connectés à vos outils (CRM, n8n, IA). Pensé pour convertir vos visiteurs en clients.",
};

export default function WebServicesPage() {
  return (
    <div className="space-y-20 lg:space-y-24">
      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          SERVICES SITE WEB
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Un site web moderne,
          <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
            rapide, crédible et pensé pour convertir.
          </span>
        </h1>

        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Nous créons des sites web en Next.js, mobile-first, optimisés pour le SEO et reliés
          à vos outils (CRM, automatisations, IA). L’objectif n’est pas seulement d’avoir un
          “beau site”, mais un véritable levier de visibilité et de business.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-500"
          >
            Voir les packs Site web →
          </Link>
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Demander un audit gratuit
          </Link>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400">
          Vous pouvez commencer avec un site vitrine simple, puis ajouter blog, automatisations
          et IA au fur et à mesure. Tout est pensé pour évoluer.
        </p>
      </section>

      {/* SECTION 1 – BÉNÉFICES CLÉS */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            POURQUOI REFAIRE VOTRE SITE ?
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Un site web n’est plus une carte de visite. C’est un système qui travaille pour vous.
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Votre site doit rassurer, expliquer ce que vous faites, capter des leads et
            simplifier votre quotidien (formulaires, prises de RDV, filtres, automatisations…).
            On le conçoit comme un outil de vente, pas seulement comme un design.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <WebBenefitCard
            eyebrow="Crédibilité & image"
            title="Une vitrine professionnelle"
            description="Positionnez-vous au niveau des meilleurs acteurs de votre marché avec un site clair, structuré et rassurant."
            points={[
              "Design moderne, inspiré des meilleurs SaaS",
              "Messages clairs, orientés bénéfices",
              "Pages clés structurées pour vos clients",
            ]}
          />
          <WebBenefitCard
            eyebrow="Visibilité & SEO"
            title="Pensé pour être trouvé"
            description="On prépare votre site pour Google dès le départ : structure, vitesse, contenu, blog relié à n8n pour publier régulièrement."
            points={[
              "SEO technique intégré",
              "Blog optimisé pour vos thématiques",
              "Connecté à Google Analytics & Search Console",
            ]}
          />
          <WebBenefitCard
            eyebrow="Conversion & business"
            title="Transforme vos visites en opportunités"
            description="Des parcours simples vers la prise de contact, l’audit, la prise de RDV ou la demande de devis."
            points={[
              "Formulaires connectés à votre CRM",
              "CTAs clairs sur tout le site",
              "Possibilité de scénarios d’emails automatiques",
            ]}
          />
        </div>
      </section>

      {/* SECTION 2 – CE QUE LE SITE INCLUT */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              CE QUE VOTRE SITE COMPREND
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
              Un site complet, prêt à l’emploi et pensé pour évoluer.
            </h2>
            <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              Que vous partiez de zéro ou d’un site existant, on construit une base solide :
              structure claire, pages essentielles, connecteurs prêts pour l’automatisation.
            </p>
          </div>

          <div className="space-y-1 text-xs text-slate-500 dark:text-slate-400">
            <p className="font-medium text-slate-700 dark:text-slate-200">
              Disponible dans les{" "}
              <span className="font-semibold text-indigo-500 dark:text-indigo-300">
                packs Site web & packs combinés
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
            title="Architecture claire & mobile-first"
            description="Pages structurées, navigation intuitive, design pensé d’abord pour le mobile, puis pour le desktop."
          />
          <FeatureCard
            title="Next.js 16 & performances"
            description="Stack moderne (Next.js + React), optimisation des images, bundling léger, temps de chargement réduits."
          />
          <FeatureCard
            title="SEO technique intégré"
            description="Balises méta, sitemap, robots.txt, URLs propres, structure Hn, performance & lisibilité pour Google."
          />
          <FeatureCard
            title="Blog connecté à vos outils"
            description="Blog relié (ou prêt à l’être) à n8n / IA pour publier régulièrement du contenu optimisé."
          />
          <FeatureCard
            title="Formulaires & CRM"
            description="Formulaires reliés à votre CRM (Notion, HubSpot, Pipedrive...) et à vos scénarios d’emailing."
          />
          <FeatureCard
            title="Préparé pour l’IA & l’automatisation"
            description="Site pensé pour accueillir plus tard vos assistants IA, chatbots et automatisations web."
          />
        </div>
      </section>

      {/* SECTION 3 – PROCESSUS DE CRÉATION */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            COMMENT ÇA SE PASSE ?
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Un processus simple, cadré, pour ne pas vous prendre tout votre temps.
          </h2>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            Vous restez concentré sur votre activité, nous gérons la partie technique. Vous
            validez les textes, le design et les grandes étapes, sans rentrer dans le code.
          </p>
        </div>

        <ol className="space-y-4">
          <StepItem
            step="01"
            title="Audit & cadrage"
            description="On part de votre situation : activité, clients, offres, site actuel (s’il existe), concurrents, objectifs (visibilité, crédibilité, prise de RDV, ventes...)."
          />
          <StepItem
            step="02"
            title="Structure & maquettes"
            description="On définit l’arborescence, les sections clés, les CTA. Puis on vous propose une structure claire que vous validez avant intégration."
          />
          <StepItem
            step="03"
            title="Développement & intégrations"
            description="Mise en place du site en Next.js, intégration des contenus, paramétrage SEO, formulaires, connexions (CRM, n8n, analytics...)."
          />
          <StepItem
            step="04"
            title="Mise en ligne & optimisation"
            description="Tests, corrections, mise en ligne, connexion à Google Analytics / Search Console, conseils pour vos premiers contenus."
          />
        </ol>
      </section>

      {/* SECTION 4 – POUR QUI C'EST IDÉAL ? */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            POUR QUI ?
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Un site pensé pour les TPE, PME et indépendants qui veulent passer un cap.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <PersonaCard
            title="Indépendants & consultants"
            description="Vous avez besoin d’un site qui explique clairement ce que vous faites, rassure et génère des demandes d’appel ou d’audit."
            tags={["Positionnement", "Crédibilité", "Prise de contact"]}
          />
          <PersonaCard
            title="TPE & petites équipes"
            description="Vous voulez un site qui montre votre sérieux, met en avant vos services et vous aide à mieux suivre vos leads."
            tags={["Services", "Equipe", "Suivi client"]}
          />
          <PersonaCard
            title="PME en structuration"
            description="Votre activité grandit et vous avez besoin d’un site aligné avec votre niveau actuel, capable de s’intégrer dans vos process."
            tags={["Process", "Automatisation", "Scaling"]}
          />
        </div>
      </section>

      {/* SECTION 5 – FAQ RAPIDE */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            QUESTIONS FRÉQUENTES
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Ce que les clients demandent le plus souvent avant de se lancer.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FaqItem
            question="Est-ce que vous pouvez repartir de mon site actuel ?"
            answer="Oui. On peut soit le refondre complètement, soit réutiliser une partie de votre contenu en le structure mieux (SEO, clarté, conversions)."
          />
          <FaqItem
            question="Combien de temps faut-il pour un site ?"
            answer="Selon la complexité, comptez généralement entre 3 et 6 semaines : audit, structure, contenu, développement, tests et mise en ligne."
          />
          <FaqItem
            question="Est-ce que je peux modifier mon site moi-même ensuite ?"
            answer="Oui. Nous pouvons prévoir une partie administrable (contenus, blog, textes simples) et vous montrer comment faire via une courte prise en main."
          />
          <FaqItem
            question="Est-ce que le site est prêt pour l’IA et les automatisations ?"
            answer="Oui. Le site est pensé pour être connecté à vos automatisations n8n, à vos assistants IA ou à d’autres services sans tout refaire."
          />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="space-y-3 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-sky-50 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Prêt à passer à un site qui fait vraiment le lien entre votre activité et vos clients ?
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          On commence par un audit gratuit de votre situation actuelle (ou de votre idée de
          site), puis on vous propose un plan concret et un pack adapté à vos objectifs.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500"
          >
            Découvrir les packs Site web →
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

/* COMPOSANTS RÉUTILISABLES */

type WebBenefitCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

function WebBenefitCard({ eyebrow, title, description, points }: WebBenefitCardProps) {
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
