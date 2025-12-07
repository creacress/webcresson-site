// app/blog/page.tsx
import Link from "next/link";
import { fetchBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | WebCressonTech",
  description:
    "Articles concrets sur l’automatisation, l’IA et les sites web Next.js pour TPE/PME et indépendants.",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:py-14 lg:py-16">
      {/* HERO */}
      <section className="space-y-6 text-center md:text-left">
        <p className="inline-flex items-center gap-2 self-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-200 md:self-start">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Blog WebCressonTech • IA, automatisation & web
        </p>

        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Des articles concrets pour automatiser et booster votre activité
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-[15px]">
            Focus TPE/PME, automatisation, IA et sites web modernes. Des
            contenus pensés pour être actionnables&nbsp;: moins de blabla, plus
            de retours terrains et de cas concrets.
          </p>
        </div>
      </section>

      {/* LISTE D'ARTICLES */}
      {posts.length === 0 ? (
        <section className="mt-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-8 text-center text-sm text-slate-300 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur">
          Aucun article pour le moment. Le premier article sera généré
          automatiquement par votre workflow n8n, puis apparaîtra ici avec les
          prochains.
        </section>
      ) : (
        <section className="grid gap-6 md:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.slug!}
              className="group flex h-full flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur transition hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-[0_20px_60px_rgba(79,70,229,0.35)]"
            >
              <div className="space-y-4">
                {/* Ligne du haut : date + “Nouveau” + tags */}
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  <span>
                    {post.publishedAt &&
                      new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                  </span>
                  {index === 0 && (
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                      Nouveau
                    </span>
                  )}
                  {post.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900/70 px-2 py-0.5 text-[10px] font-semibold text-slate-200 ring-1 ring-slate-700/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Titre */}
                <h2 className="text-[17px] font-semibold leading-snug text-slate-50 group-hover:text-indigo-300">
                  <Link href={`/blog/${post.slug}`} className="line-clamp-2">
                    {post.title}
                  </Link>
                </h2>

                {/* Extrait */}
                {post.excerpt && (
                  <p className="line-clamp-3 text-sm text-slate-300/90">
                    {post.excerpt}
                  </p>
                )}
              </div>

              {/* Bas de carte */}
              <div className="mt-5 flex items-center justify-between text-sm">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-medium text-indigo-300 hover:text-indigo-200"
                >
                  Lire l’article
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </Link>

                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <span className="h-1 w-1 rounded-full bg-slate-600" />
                  <span>Lecture rapide</span>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
