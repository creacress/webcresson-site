// lib/blog.ts

export type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;

  contentMarkdown?: string;
  contentHtml?: string;

  seoTitle?: string;
  seoDescription?: string;

  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;

  coverImageUrl?: string;
  tags?: string[];
};

type AnyObj = Record<string, any>;

function normalizePosts(payload: any): AnyObj[] {
  if (Array.isArray(payload)) {
    const first = payload[0];
    if (first && Array.isArray(first.posts)) return first.posts;
    return payload;
  }
  if (payload && Array.isArray(payload.posts)) return payload.posts;
  if (payload && Array.isArray(payload.data)) return payload.data;
  return [];
}

function normalizePost(payload: any): { found: boolean; post?: AnyObj } {
  if (Array.isArray(payload)) {
    const first = payload[0];
    if (first && typeof first.found === "boolean") return first;
    if (first?.post) return { found: true, post: first.post };
    return { found: false };
  }
  if (payload && typeof payload.found === "boolean") return payload;
  if (payload?.post) return { found: true, post: payload.post };
  return { found: false };
}

const isServer = () => typeof window === "undefined";

/**
 * Server (build/prerender/SSR): fetch direct n8n (URL absolue)
 * Client: fetch via Next API (/api/...) pour éviter CORS
 */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const url = isServer() ? process.env.BLOG_API_LIST_URL : "/api/blog/posts";
  if (!url) return [];

  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) return [];

  const payload = await res.json();
  return normalizePosts(payload) as BlogPost[];
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!slug) return null;

  const base = isServer() ? process.env.BLOG_API_DETAIL_URL : "/api/blog/post";
  if (!base) return null;

  const res = await fetch(`${base}?slug=${encodeURIComponent(slug)}`, {
    headers: { Accept: "application/json" },
  });

  if (!res.ok) return null;

  const payload = await res.json();
  const out = normalizePost(payload);
  return out.found ? (out.post as BlogPost) : null;
}

export const fetchBlogPost = fetchBlogPostBySlug;