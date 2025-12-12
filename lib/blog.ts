// lib/blog.ts
export type BlogPostSummary = {
  slug: string | null;
  title: string | null;
  excerpt: string | null;
  publishedAt: string | null;
  tags?: string[];
};

export type BlogPostDetail = {
  slug: string;
  title: string;
  excerpt: string | null;
  contentHtml: string;
  publishedAt: string;
  updatedAt?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  coverImage?: string | null;
  tags?: string[];
};

const LIST_URL =
  process.env.BLOG_API_LIST_URL ?? process.env.NEXT_PUBLIC_BLOG_API_LIST_URL;

const DETAIL_URL =
  process.env.BLOG_API_DETAIL_URL ?? process.env.NEXT_PUBLIC_BLOG_API_DETAIL_URL;

const fetchOpts =
  process.env.NODE_ENV === "development"
    ? ({ cache: "no-store" } as const)
    : ({ next: { revalidate: 300 } } as const);

function unwrapRoot(json: any) {
  return Array.isArray(json) ? json[0] : json;
}

export async function fetchBlogPosts(): Promise<BlogPostSummary[]> {
  if (!LIST_URL) return [];

  const res = await fetch(LIST_URL, fetchOpts);
  if (!res.ok) return [];

  const data = unwrapRoot(await res.json());
  const posts = (data?.posts ?? []) as BlogPostSummary[];

  return posts.filter((p) => p?.slug && p?.title && p?.publishedAt);
}

export async function fetchBlogPostBySlug(
  slug: string,
): Promise<BlogPostDetail | null> {
  if (!DETAIL_URL) return null;

  const url = new URL(DETAIL_URL);
  url.searchParams.set("slug", slug);

  const res = await fetch(url.toString(), fetchOpts);
  if (!res.ok) return null;

  const data = unwrapRoot(await res.json());
  if (!data?.found || !data.post) return null;

  const p = data.post as any;

  const contentHtml =
    typeof p.contentHtml === "string"
      ? p.contentHtml
      : typeof p.content_html === "string"
        ? p.content_html
        : typeof p.content === "string"
          ? p.content
          : "";

  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt ?? null,
    contentHtml,
    publishedAt: p.publishedAt || p.published_at || new Date().toISOString(),
    updatedAt: p.updatedAt || p.updated_at || null,
    seoTitle: p.seoTitle ?? p.seo_title ?? null,
    seoDescription: p.seoDescription ?? p.seo_description ?? null,
    coverImage: p.coverImage ?? p.cover_image ?? null,
    tags: p.tags ?? [],
  };
}
