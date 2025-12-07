// app/blog/[slug]/page.tsx

import type { Metadata } from "next";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

// Optionnel : pour plus tard, quand tu récupèreras le contenu via n8n / API
// Ici, on met juste des valeurs de base pour éviter l'erreur de build.
export async function generateMetadata(
  { params }: BlogPostPageProps,
): Promise<Metadata> {
  const { slug } = params;

  const title = `Article – ${slug} | WebCressonTech`;
  const description =
    "Article de blog WebCressonTech autour de l’IA, de l’automatisation et des sites web performants.";

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://webcressontech.com";
  const url = `${baseUrl}/blog/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "WebCressonTech",
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // Placeholder propre en attendant le branchement avec n8n
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 py-10 lg:py-14">
      <header className="space-y-3">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-indigo-300" />
          Article de blog
        </p>
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          Article en préparation
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Cette page servira à afficher l’article :{" "}
          <span className="font-mono text-xs text-slate-700 dark:text-slate-200">
            {slug}
          </span>
          . Très bientôt, le contenu sera récupéré automatiquement depuis vos
          workflows n8n.
        </p>
      </header>

      <section className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-6 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
          Placeholder technique
        </p>
        <p className="leading-relaxed">
          Le routage dynamique est déjà en place pour le blog. Dès que vous
          connecterez n8n ou votre CMS, cette page affichera le contenu complet
          de chaque article (titre, métas, corps, CTA, etc.), tout en restant
          optimisée pour le SEO et le mobile.
        </p>
      </section>
    </div>
  );
}
