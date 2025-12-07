// app/blog/page.tsx
import Link from "next/link";
import { fetchBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | WebCressonTech",
  description:
    "Articles sur l’automatisation, l’IA et les sites web pour TPE/PME. SEO, RPA, n8n, stratégies concrètes pour gagner du temps.",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="space-y-10 lg:space-y-16">
      {/* HERO */}
      <section className="space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-300" />
          Blog WebCressonTech • Automatisation & IA
        </p>

        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
          Décupler le potentiel de votre activité avec l’automatisation & l’IA
        </h1>

        <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Des articles pensés pour les TPE, PME et indépendants qui veulent
          gagner du temps, réduire les erreurs et booster leur visibilité en
          ligne.
        </p>
      </section>

      {/* LISTE D'ARTICLES */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md hover:ring-indigo-100 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-indigo-700/60 dark:hover:ring-indigo-900/60"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </span>
                {post.tags?.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-base font-semibold leading-snug text-slate-900 group-hover:text-indigo-600 dark:text-slate-50 dark:group-hover:text-indigo-300">
                <Link href={`/blog/${post.slug}`} className="line-clamp-2">
                  {post.title}
                </Link>
              </h2>

              <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
              >
                Lire l’article
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}

        {posts.length === 0 && (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Aucun article pour l’instant. Les premiers articles vont être générés
            automatiquement par votre workflow n8n. 
          </p>
        )}
      </section>
    </div>
  );
}
