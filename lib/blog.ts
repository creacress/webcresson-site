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
  contentHtml: string; // toujours une string normalisée
  publishedAt: string;
  updatedAt?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  coverImage?: string | null;
  tags?: string[];
};

const LIST_URL = process.env.BLOG_API_LIST_URL;
const DETAIL_URL = process.env.BLOG_API_DETAIL_URL;

function unwrapRoot(json: any) {
  return Array.isArray(json) ? json[0] : json;
}

export async function fetchBlogPosts(): Promise<BlogPostSummary[]> {
  if (!LIST_URL) {
    console.error("BLOG_API_LIST_URL manquant");
    return [];
  }

  const res = await fetch(LIST_URL, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error(
      "fetchBlogPosts error:",
      res.status,
      await res.text().catch(() => ""),
    );
    return [];
  }

  const raw = await res.json();
  const data = unwrapRoot(raw);

  const posts = (data?.posts ?? []) as BlogPostSummary[];

  // on enlève les lignes vides
  return posts.filter(
    (p) => p && p.slug && p.title && p.publishedAt,
  ) as BlogPostSummary[];
}

export async function fetchBlogPostBySlug(
  slug: string,
): Promise<BlogPostDetail | null> {
  if (!DETAIL_URL) {
    console.error("BLOG_API_DETAIL_URL manquant");
    return null;
  }

  const url = `${DETAIL_URL}?slug=${encodeURIComponent(slug)}`;

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error(
      "fetchBlogPostBySlug error:",
      res.status,
      await res.text().catch(() => ""),
    );
    return null;
  }

  const raw = await res.json();
  const data = unwrapRoot(raw);

  if (!data?.found || !data.post) return null;

  const p = data.post as any;

  const contentHtml: string =
    typeof p.contentHtml === "string"
      ? p.contentHtml
      : typeof p.content_html === "string"
      ? p.content_html
      : typeof p.content === "string"
      ? p.content
      : "";

  const publishedAt: string =
    p.publishedAt || p.published_at || new Date().toISOString();

  const updatedAt: string | null = p.updatedAt || p.updated_at || null;

  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt ?? null,
    contentHtml,
    publishedAt,
    updatedAt,
    seoTitle: p.seoTitle ?? p.seo_title ?? null,
    seoDescription: p.seoDescription ?? p.seo_description ?? null,
    coverImage: p.coverImage ?? p.cover_image ?? null,
    tags: p.tags ?? [],
  };
}

