// app/blog/page.tsx
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata = {
  title: "Blog | WebCressonTech",
  description:
    "Conseils en automatisation, IA, no-code, prospection, sites web modernes et productivité pour TPE, PME et indépendants.",
};

export default function BlogPage() {
  // ⚠️ Pour l'instant c’est statique. Plus tard : on récupérera les articles via n8n → API → DB
  const articles = [
    {
      slug: "automatiser-prospection-tpe",
      title: "Automatiser sa prospection quand on est une TPE",
      description:
        "Comment automatiser 60% de ta prospection sans perdre la personnalisation. Outils, workflows n8n, exemples concrets.",
      category: "Automatisation",
      date: "03 Janvier 2025",
    },
    {
      slug: "assistant-ia-metier-tpe",
      title: "Créer un assistant IA vraiment utile pour son métier",
      description:
        "Les meilleurs cas d’usage IA pour indépendants et PME. Comment éviter les assistants inutiles et construire un système utile.",
      category: "Intégration IA",
      date: "29 Décembre 2024",
    },
    {
      slug: "site-nextjs-seo-tpe",
      title: "Pourquoi un site Next.js booste votre SEO et votre image",
      description:
        "Explications simples : vitesse, structure SEO, affichage mobile-first, conversion, image professionnelle.",
      category: "Site Web",
      date: "20 Décembre 2024",
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-20">
      {/* HERO */}
      <section className="space-y-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500 dark:text-indigo-300">
          BLOG
        </p>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            Conseils & stratégies pour
            <span className="block bg-gradient-to-r from-indigo-500 to-sky-500 bg-clip-text text-transparent">
              automatiser, utiliser l’IA et moderniser votre activité.
            </span>
          </h1>

          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Des articles courts, concrets, pensés pour les indépendants, les
            TPE et les PME qui veulent gagner du temps, avoir une meilleure
            visibilité et mettre l’IA au service de leur business.
          </p>
        </div>
      </section>

      {/* LISTING */}
      <section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.slug} {...article} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 space-y-3 rounded-3xl border border-slate-200 bg-white/80 p-6 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Tu veux automatiser ta création de contenus ?
        </h2>
        <p>
          Je peux connecter votre blog à n8n pour publier automatiquement des
          articles générés, relus et optimisés SEO. Tu gardes la validation
          finale.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 mt-2"
        >
          Me contacter →
        </a>
      </section>
    </div>
  );
}
