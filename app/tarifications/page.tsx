import Link from "next/link";
import { CheckoutButton } from "@/components/billing/CheckoutButton";

export const metadata = {
  title: "Tarifications | WebCressonTech",
  description:
    "Offres d’automatisation no-code/RPA, intégration IA et création de sites Next.js modernes avec SEO et CRM pour TPE, PME et indépendants.",
};

export default function TarificationsPage() {
  return (
    <div className="space-y-20 lg:space-y-24">
      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          TARIFS
        </p>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            3 offres claires,
            <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              alignées sur ton niveau et ton rythme.
            </span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Automatisation no-code & RPA légère, intégration IA concrète et sites Next.js
            modernes : chaque pack est pensé pour être rentable rapidement, que tu sois
            micro-entrepreneur, TPE ou PME.
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
            Parler d’un cas précis →
          </Link>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Les montants sont indicatifs : on ajuste ensemble selon ton périmètre (volume de
          données, nombre d’outils, complexité). Paiement par Stripe (lien sécurisé) ou
          virement. Actuellement :{" "}
          <span className="font-semibold text-red-600 dark:text-red-400">
            Offre Noël : tarifs remisés d’environ 30%.
          </span>
        </p>
      </section>

      {/* PRICING GRID */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* AUTOMATISATION */}
        <PricingCard
          plan="automatisation"
          category="AUTOMATISATION"
          label="Pack Automatisation & Prospection"
          description="Pour remplacer les tâches répétitives (prospection, emails, CRM, admin) par des workflows no-code qui tournent tout seuls."
          originalPrice="à partir de 1287 € HT"
          promoPrice="à partir de 990 €"
          priceSuffix="HT, une fois"
          bullets={[
            "Audit de tes process actuels (prospection, emails, CRM)",
            "Design de ton pipeline automatisé (n8n / no-code / RPA légère)",
            "1 à 3 workflows : prospection, emails, CRM ou admin",
            "Notifications & relances automatiques",
            "Session de prise en main + mini-doc",
          ]}
          maintenance={
            "Option : abonnement maintenance automatisation à partir de 120 € HT / mois (surveillance, petites évolutions, corrections)."
          }
          secondaryHref="/audit-gratuit"
          secondaryLabel="Démarrer par un audit automatique →"
        />

        {/* IA – OFFRE MISE EN AVANT */}
        <PricingCard
          highlighted
          badge="Populaire"
          plan="ia"
          category="INTÉGRATION IA"
          label="Pack Assistant IA pour TPE / PME"
          description="Pour avoir une IA qui connaît ton activité : réponses clients, résumés, contenus, idées, décisions… sans usine à gaz."
          originalPrice="à partir de 897 € HT"
          promoPrice="à partir de 690 €"
          priceSuffix="HT, une fois"
          bullets={[
            "Cadrage : cas d’usage IA adaptés à ton métier",
            "Assistant IA relié à tes docs / données (scope défini ensemble)",
            "Exemples : IA pour micro-entrepreneur, cabinet conseil, artisan",
            "1 à 2 intégrations : emails, Notion, CRM ou n8n",
            "Formation rapide pour l’utiliser au quotidien",
          ]}
          maintenance={
            "Option : abonnement maintenance IA à partir de 150 € HT / mois (surveillance prompts, mises à jour, ajustements)."
          }
          secondaryHref="/contact"
          secondaryLabel="Parler de ton cas d’usage IA →"
        />

        {/* SITE WEB */}
        <PricingCard
          plan="site"
          category="SITE WEB & PRÉSENCE EN LIGNE"
          label="PackSite web moderne & présence web"
          description="Pour un site moderne, rapide, relié à ton CRM, avec une base SEO propre et un vrai suivi de ta présence sur le web."
          originalPrice="à partir de 767 € HT"
          promoPrice="à partir de 590 €"
          priceSuffix="HT, projet"
          bullets={[
            "Site vitrine Next.js (pages clés + blog)",
            "Structure SEO (titres, métas, performance, schema)",
            "Formulaires connectés à ton CRM (Notion, HubSpot, etc.)",
            "Mise en place d’un plan de contenus initial",
            "Session de prise en main + conseils de suivi",
          ]}
          maintenance={
            "Option : abonnement maintenance site & SEO à partir de 180 € HT / mois (mises à jour, sécurité, petits contenus, suivi SEO)."
          }
          secondaryHref="/contact"
          secondaryLabel="Discuter de ton futur site →"
        />
      </section>

      {/* ROI */}
      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-sky-50 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)] lg:grid-cols-[1.3fr,0.7fr]">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
            ROI
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            L’objectif : que chaque offre s’autofinance rapidement
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            On choisit ensemble les sujets qui ont le plus d’impact : temps gagné, chiffre
            d’affaires, meilleure visibilité ou meilleure expérience client.
          </p>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>• Estimation du temps ou des opportunités perdues aujourd’hui</li>
            <li>• Projection réaliste du gain avec l’automatisation / l’IA</li>
            <li>• Comparaison avec le coût de la mission et de la maintenance</li>
            <li>• Ajustements possibles pour rester rentable</li>
          </ul>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Le but n’est pas d’empiler les outils, mais de créer un système simple qui t’apporte
            un vrai levier sur le long terme.
          </p>
        </div>

        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            Tu hésites entre plusieurs offres ?
          </h3>
          <p>
            On peut commencer par un <strong>audit gratuit</strong> pour cartographier ton
            activité, tes outils et tes priorités. Ensuite, on choisit ensemble le pack le plus
            pertinent (ou un mix léger des trois) et le niveau de maintenance mensuelle adapté.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/audit-gratuit"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-500"
            >
              Demander un audit gratuit →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/80 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
            >
              Poser une question rapide →
            </Link>
          </div>
        </div>
      </section>

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
            Si tu ne trouves pas la réponse ici, tu peux m’écrire directement depuis la page
            Contact.
          </p>
        </div>

        <div className="space-y-5 text-sm text-slate-600 dark:text-slate-300">
          <FaqItem question="Est-ce que je peux combiner plusieurs packs ?">
            Oui. Beaucoup de projets mélangent un peu d’automatisation, un peu d’IA et un site
            web. On définit ensemble un périmètre cohérent et on l’adapte à ton budget.
          </FaqItem>

          <FaqItem question="Les abonnements de maintenance sont-ils obligatoires ?">
            Non, ils sont optionnels. Tu peux faire un projet “one shot” puis reprendre plus tard.
            La maintenance est surtout utile si tu veux faire évoluer ton système régulièrement
            sans te soucier de la technique.
          </FaqItem>

          <FaqItem question="Je suis une micro-entreprise, c’est adapté pour moi ?">
            Oui, clairement. L’idée est d’apporter à une petite structure les outils qui font
            gagner un temps fou, avec des packs simples et des niveaux de maintenance adaptés à
            ta taille.
          </FaqItem>

          <FaqItem question="Comment se passe le paiement ?">
            Selon ton cas : lien de paiement Stripe ou virement. Tout est clarifié avant le début
            de la mission dans une proposition simple.
          </FaqItem>
        </div>
      </section>
    </div>
  );
}

/* --------- Components --------- */

type PricingCardProps = {
  plan: "automatisation" | "ia" | "site";
  category: string;
  label: string;
  description: string;
  originalPrice: string;
  promoPrice: string;
  priceSuffix: string;
  bullets: string[];
  maintenance?: string;
  secondaryHref: string;
  secondaryLabel: string;
  highlighted?: boolean;
  badge?: string;
};

function PricingCard({
  plan,
  category,
  label,
  description,
  originalPrice,
  promoPrice,
  priceSuffix,
  bullets,
  maintenance,
  secondaryHref,
  secondaryLabel,
  highlighted,
  badge,
}: PricingCardProps) {
  const baseCardClasses =
    "relative flex flex-col rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1";
  const normalClasses =
    "border-slate-200 bg-white/80 shadow-slate-100 hover:shadow-xl dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]";
  const highlightedClasses =
    "border-indigo-500/70 bg-white shadow-[0_24px_65px_rgba(15,23,42,0.18)] ring-2 ring-indigo-500/60 dark:border-indigo-400/70 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 dark:ring-indigo-500/60";

  return (
    <div className={`${baseCardClasses} ${highlighted ? highlightedClasses : normalClasses}`}>
      {highlighted && badge && (
        <div className="absolute right-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white dark:bg-indigo-500">
          {badge}
        </div>
      )}

      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
        {category}
      </p>
      <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">{label}</h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>

      {/* Prix avec offre Noël */}
      <div className="mt-5 space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs line-through text-slate-400 dark:text-slate-500">
            {originalPrice}
          </span>
          <span className="rounded-full bg-red-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-red-600 dark:bg-red-500/15 dark:text-red-300">
            Offre Noël -30%
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
            {promoPrice}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{priceSuffix}</span>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
        {bullets.map((line) => (
          <li key={line}>• {line}</li>
        ))}
        {maintenance && (
          <li className="mt-1 text-xs text-slate-500 dark:text-slate-400">{maintenance}</li>
        )}
      </ul>

      <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
        {/* CTA Stripe principal */}
        <CheckoutButton
          plan={plan}
          label={
            highlighted
              ? "Commander le pack IA via Stripe"
              : "Commander ce pack via Stripe"
          }
          variant="primary"
        />

        {/* CTA secondaire vers audit/contact */}
        <Link
          href={secondaryHref}
          className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium ${
            highlighted
              ? "border border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-50 dark:hover:bg-slate-900"
              : "border border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-50 dark:hover:bg-slate-900"
          }`}
        >
          {secondaryLabel}
        </Link>

        {highlighted && (
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Possibilité d’ajouter un suivi mensuel si tu veux faire évoluer l’IA progressivement.
          </p>
        )}
      </div>
    </div>
  );
}

type FaqItemProps = {
  question: string;
  children: React.ReactNode;
};

function FaqItem({ question, children }: FaqItemProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{question}</h3>
      <p className="mt-1">{children}</p>
    </div>
  );
}
