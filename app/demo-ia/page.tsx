// app/demo-ia/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ChatDemo from "@/components/demo/ChatDemo";
import SeoAuditDemo from "@/components/demo/SeoAuditDemo";
<<<<<<< HEAD
import RoiDemo from "@/components/demo/RoiDemo";
=======
>>>>>>> origin/master

export const metadata: Metadata = {
  title: "Démo IA | WebCressonTech",
  description:
<<<<<<< HEAD
    "Testez gratuitement nos démos IA : assistant de qualification, audit SEO automatisé et estimateur de ROI. Passez en premium pour des analyses plus puissantes.",
=======
    "Testez gratuitement nos démos IA : assistant de qualification et audit SEO automatisé. Passez en premium pour des analyses plus puissantes.",
>>>>>>> origin/master
  alternates: { canonical: "/demo-ia" },
  openGraph: {
    title: "Démo IA | WebCressonTech",
    description:
<<<<<<< HEAD
      "Assistant IA + audit SEO + ROI gratuits. Testez, puis débloquez la version premium.",
=======
      "Assistant IA + audit SEO gratuit. Testez, puis débloquez la version premium.",
>>>>>>> origin/master
    url: "/demo-ia",
    type: "website",
  },
};

export default function DemoIAPage() {
  return (
    <main className="space-y-12">
      {/* HERO */}
<<<<<<< HEAD
      <section className="space-y-5 pt-6">
=======
      <section className="pt-6 space-y-5">
>>>>>>> origin/master
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          Démo gratuite • IA Gateway
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Testez nos produits IA{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
            gratuitement
          </span>
        </h1>

        <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
<<<<<<< HEAD
          Trois démos qui augmentent votre conversion : un assistant qui qualifie
          vos besoins, un audit SEO rapide, et un estimateur de ROI (automatisation).
=======
          Deux démos qui augmentent votre conversion : un assistant qui qualifie
          vos besoins, et un audit SEO automatisé. Ensuite, vous passez en premium
          pour aller plus loin.
>>>>>>> origin/master
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/tarifications"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 dark:bg-white dark:text-zinc-900"
          >
            Voir les offres
          </Link>
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-900"
          >
            Lancer un audit gratuit
          </Link>
        </div>
      </section>

      {/* GRID DEMOS */}
<<<<<<< HEAD
      <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {/* Chat */}
=======
      <section className="grid gap-6 lg:grid-cols-2">
>>>>>>> origin/master
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mb-4 space-y-1">
            <h2 className="text-lg font-bold">Assistant IA (qualification)</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
<<<<<<< HEAD
              Pose des questions, comprend votre besoin, et vous envoie vers la
              bonne action (audit / contact / tarification).
=======
              Pose des questions, comprend ton besoin, et t’envoie vers la bonne
              action (audit / contact / tarification).
>>>>>>> origin/master
            </p>
          </div>
          <ChatDemo />
        </div>

<<<<<<< HEAD
        {/* SEO */}
=======
>>>>>>> origin/master
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mb-4 space-y-1">
            <h2 className="text-lg font-bold">Audit SEO IA (URL → plan d’action)</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
<<<<<<< HEAD
              Collez l’URL d’une page : vous obtenez un diagnostic + quick wins.
=======
              Colle l’URL d’une page : tu obtiens un diagnostic + quick wins.
>>>>>>> origin/master
            </p>
          </div>
          <SeoAuditDemo />
          <p className="mt-3 text-xs text-zinc-500">
<<<<<<< HEAD
            Démo : structure / intentions / contenu. Pour un audit complet (crawl,
            Core Web Vitals, indexation), passez par l’audit gratuit.
          </p>
        </div>

        {/* ROI */}
        <div className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mb-4 space-y-1">
            <h2 className="text-lg font-bold">Estimateur ROI (automatisation)</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              En 60 secondes : économies mensuelles + ROI à 3/6/12 mois.
            </p>
          </div>
          <RoiDemo />
          <p className="mt-3 text-xs text-zinc-500">
            Estimation indicative. On confirme les chiffres et les tâches exactes via
            l’audit gratuit.
=======
            Démo : on analyse surtout la structure / intentions / contenu. Pour un audit
            complet (crawl, Core Web Vitals, indexation), passez par l’audit gratuit.
>>>>>>> origin/master
          </p>
        </div>
      </section>

      {/* VALUE */}
      <section className="rounded-2xl border border-zinc-200/60 bg-gradient-to-b from-white to-zinc-50 p-6 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-950">
        <h3 className="text-lg font-bold">Pourquoi c’est gratuit ?</h3>
<<<<<<< HEAD
        <ul className="mt-3 grid gap-3 text-sm text-zinc-700 dark:text-zinc-200 sm:grid-cols-2">
=======
        <ul className="mt-3 grid gap-3 sm:grid-cols-2 text-sm text-zinc-700 dark:text-zinc-200">
>>>>>>> origin/master
          <li className="rounded-xl border border-zinc-200/60 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            ✅ Tester la valeur en 30 secondes
          </li>
          <li className="rounded-xl border border-zinc-200/60 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            ✅ Qualifier votre besoin automatiquement
          </li>
          <li className="rounded-xl border border-zinc-200/60 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            ✅ Vous proposer la meilleure offre
          </li>
          <li className="rounded-xl border border-zinc-200/60 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            ✅ Débloquer la version premium si utile
          </li>
        </ul>
      </section>
    </main>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/master
