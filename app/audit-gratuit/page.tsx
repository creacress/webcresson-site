// app/audit-gratuit/page.tsx
import Link from "next/link";
import { AuditForm } from "@/components/forms/AuditForm";

export const metadata = {
  title: "Audit gratuit | WebCressonTech",
  description:
    "Audit gratuit de votre activité, de vos outils et de vos process pour identifier les meilleures opportunités d’automatisation, d’IA et d’amélioration de votre site web.",
};

export default function AuditGratuitPage() {
  return (
    <div className="space-y-18 lg:space-y-20">
      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          AUDIT GRATUIT
        </p>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Faites auditer votre activité, vos outils et votre site
            <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              pour dégager les meilleurs quick wins.
            </span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            L’audit gratuit vous donne une vision claire de ce que l’on peut automatiser
            (prospection, emails, CRM, admin), où l’IA peut vous aider au quotidien, et comment
            faire en sorte que votre site serve vraiment votre business.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#audit-form"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-500"
          >
            Remplir le formulaire d’audit →
          </a>
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Voir les packs & tarifs →
          </Link>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Vous remplissez le formulaire, je regarde votre contexte (sans bullshit), puis je vous
          renvoie 3 à 5 pistes concrètes et priorisées. Vous êtes libre ensuite de les mettre en
          place avec moi… ou de votre côté.
        </p>
      </section>

      {/* GRID : EXPLICATION + FORM */}
      <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        {/* COLONNE GAUCHE : CE QUI EST AUDITÉ */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
              Ce que l’audit couvre concrètement
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              On regarde ce que vous faites aujourd’hui, comment, avec quels outils et où ça
              coince. L’objectif : sortir 3 à 5 actions prioritaires, pas un rapport de 40 pages.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                1. Automatisation & no-code
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>• Tâches répétitives (prospection, emails, CRM, administratif)</li>
                <li>• Outils utilisés (Excel, Notion, CRM, boîte mail…)</li>
                <li>• Idées de workflows n8n / no-code très concrets</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                2. Intégration IA pour TPE / PME / indépendants
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>• Cas d’usage IA adaptés à votre métier</li>
                <li>• Quels types de contenus / docs peuvent être pris en charge</li>
                <li>• Idées d’assistants IA simples à mettre en place</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                3. Site web & présence en ligne
              </h3>
              <ul className="mt-2 space-y-1.5 text-sm">
                <li>• Qualité de la structure (pages, clarté, messages)</li>
                <li>• Bases SEO (titres, métas, contenu, vitesse)</li>
                <li>• Connexions possibles avec votre CRM et vos outils</li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 via-indigo-50 to-sky-50 p-4 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-300">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Ce que vous recevez après l’audit
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm">
              <li>• 3 à 5 actions priorisées (impact / simplicité)</li>
              <li>• 1 ou 2 idées de workflows / IA très concrets</li>
              <li>• Une proposition de pack si vous voulez aller plus loin (optionnel)</li>
            </ul>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Le but : que vous ayez une feuille de route claire, même si vous décidez de tout
              faire vous-même.
            </p>
          </div>
        </div>

        {/* COLONNE DROITE : FORM */}
        <div id="audit-form">
          <AuditForm />
        </div>
      </section>

      {/* MINI FAQ / RASSURANCE */}
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
              RASSURANCE
            </p>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
              Quelques précisions avant de vous lancer
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Si vous avez un doute, vous pouvez aussi passer par la page Contact pour me poser une
              question rapide.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Poser une question avant l’audit →
          </Link>
        </div>

        <div className="grid gap-5 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Est-ce vraiment gratuit ?
            </h3>
            <p className="mt-1">
              Oui. L’audit vous donne une vision claire. Vous pouvez ensuite décider de ne rien
              faire, de faire vous-même, ou de me confier une mission : c’est vous qui choisissez.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Combien de temps ça prend ?
            </h3>
            <p className="mt-1">
              De votre côté : quelques minutes pour remplir le formulaire. De mon côté : je reviens
              vers vous avec une analyse synthétique et des pistes concrètes.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Est-ce réservé à un certain type de business ?
            </h3>
            <p className="mt-1">
              Non, mais je travaille surtout avec des TPE, indépendants, assos et PME de services
              qui veulent clarifier et automatiser leur quotidien.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
