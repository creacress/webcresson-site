// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchBlogPostBySlug } from "@/lib/blog";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article introuvable | WebCressonTech",
      description:
        "Cet article n’existe pas ou n’est plus disponible sur WebCressonTech.",
    };
  }

  const title = post.seoTitle || `${post.title} | WebCressonTech`;
  const description =
    post.seoDescription ||
    post.excerpt ||
    "Articles sur l’automatisation, l’IA et la création de sites web pour TPE, PME et indépendants.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://webcresson.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await fetchBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 py-8 sm:py-10">
      {/* HEADER */}
      <header className="space-y-4">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-300" />
          Blog WebCressonTech • IA & automatisation
        </p>

        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span>
            Publié le{" "}
            {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </span>

          {post.updatedAt && (
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              (Mis à jour le{" "}
              {new Date(post.updatedAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
              )
            </span>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.excerpt && (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* CONTENU */}
      <article
        className="prose prose-slate max-w-none prose-headings:scroll-mt-24 prose-a:text-indigo-600 hover:prose-a:text-indigo-500 dark:prose-invert dark:prose-headings:text-slate-50"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* CTA */}
      <section className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 text-sm shadow-sm dark:border-indigo-900/60 dark:bg-indigo-950/40">
        <h2 className="text-base font-semibold text-indigo-900 dark:text-indigo-100">
          Passer de la lecture à l’action
        </h2>
        <p className="mt-2 text-sm text-indigo-950/80 dark:text-indigo-100/80">
          Vous souhaitez automatiser vos process, intégrer l’IA à votre activité
          ou moderniser votre site web&nbsp;? Profitez d’un audit gratuit de
          votre activité, de vos outils et de votre site.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          >
            Demander un audit gratuit
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-100 dark:hover:bg-indigo-900/60"
          >
            Découvrir nos services
          </a>
        </div>
      </section>
    </div>
  );
}
