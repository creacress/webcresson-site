// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchBlogPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatArticleHtml(raw: string): string {
  if (!raw) return "";

  let html = raw;

  // Paragraphes lisibles
  html = html.replace(
    /<p>/g,
    '<p class="mb-4 text-[15px] leading-relaxed text-slate-100">'
  );

  // Titres H2 = grosses sections avec séparateur
  html = html.replace(
    /<h2>/g,
    '<hr class="my-10 border-slate-800/80" /><h2 class="mt-2 mb-4 text-xl font-semibold text-slate-50">'
  );

  // Titres H3 = sous-sections
  html = html.replace(
    /<h3>/g,
    '<h3 class="mt-6 mb-3 text-lg font-semibold text-slate-100">'
  );

  // Listes
  html = html.replace(
    /<ul>/g,
    '<ul class="my-4 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-slate-100">'
  );
  html = html.replace(
    /<ol>/g,
    '<ol class="my-4 list-decimal space-y-1 pl-5 text-[15px] leading-relaxed text-slate-100">'
  );
  html = html.replace(
    /<li>/g,
    '<li class="text-[15px] leading-relaxed">'
  );

  // Strong
  html = html.replace(
    /<strong>/g,
    '<strong class="font-semibold text-slate-50">'
  );

  // Liens
  html = html.replace(
    /<a /g,
    '<a class="font-medium text-indigo-300 underline-offset-2 hover:text-indigo-200 hover:underline" '
  );

  return html;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

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
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) notFound();

  const baseHtml =
    post && typeof post.contentHtml === "string" ? post.contentHtml : "";
  const html = formatArticleHtml(baseHtml);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 sm:py-14 lg:py-16">
      {/* HERO */}
      <header className="space-y-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Blog WebCressonTech • IA & automatisation
        </p>

        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
          <span>
            Publié le{" "}
            {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            })}
          </span>

          {post.updatedAt && (
            <span className="text-[11px] text-slate-500">
              • Mis à jour le{" "}
              {new Date(post.updatedAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
              )
            </span>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-900/60 px-2.5 py-0.5 text-[11px] font-medium text-slate-200 ring-1 ring-slate-700/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {post.excerpt && (
          <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* CONTENU */}
      <article className="rounded-3xl border border-slate-800/80 bg-slate-950/70 px-5 py-7 shadow-[0_18px_45px_rgba(15,23,42,0.9)] backdrop-blur sm:px-8 sm:py-9">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      {/* CTA */}
      <section className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-600/20 via-indigo-500/10 to-purple-600/20 px-6 py-7 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.85)] sm:px-8 sm:py-8">
        <h2 className="text-base font-semibold text-indigo-100 sm:text-lg">
          Passer de la lecture à l’action
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-indigo-100/80 sm:text-[15px]">
          Vous souhaitez automatiser vos process, intégrer l’IA à votre activité
          ou moderniser votre site web&nbsp;? Profitez d’un audit gratuit de
          votre activité, de vos outils et de votre site, adapté à votre
          contexte de TPE/PME.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-400"
          >
            Demander un audit gratuit
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-indigo-300/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-indigo-100 hover:border-indigo-200/70 hover:bg-indigo-500/10"
          >
            Découvrir nos services
          </a>
        </div>
      </section>
    </div>
  );
}
