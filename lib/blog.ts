// lib/blog.ts
export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  tags?: string[];
};

export type BlogPostDetail = {
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  publishedAt: string;
  updatedAt?: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
  coverImage?: string | null;
  tags?: string[];
};

const LIST_URL = process.env.BLOG_API_LIST_URL;
const DETAIL_URL = process.env.BLOG_API_DETAIL_URL;

export async function fetchBlogPosts(): Promise<BlogPostSummary[]> {
  if (!LIST_URL) {
    console.error("BLOG_API_LIST_URL manquant");
    return [];
  }

  const res = await fetch(LIST_URL, {
    // GET par défaut
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error(
      "fetchBlogPosts error:",
      res.status,
      await res.text().catch(() => "")
    );
    return [];
  }

  const data = await res.json();
  return (data.posts ?? []) as BlogPostSummary[];
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
      await res.text().catch(() => "")
    );
    return null;
  }

  const data = await res.json();
  if (!data.found || !data.post) return null;

  return data.post as BlogPostDetail;
}
