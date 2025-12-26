// lib/blog.ts

export type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  contentHtml?: string;
  contentMarkdown?: string;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  tags?: string[];
};

export type BlogPostsListResponse = { posts: BlogPost[] };
export type BlogPostDetailResponse = { found: boolean; post?: BlogPost | null; error?: string };

// Base URL of your n8n Webhook endpoints.
// Example (prod): https://microgenie.app/webhook
// Example (test): http://31.97.178.252:5678/webhook-test
const base = (process.env.N8N_BLOG_API_BASE || "https://microgenie.app/webhook").replace(/\/$/, "");

// Endpoints (keep these explicit to avoid confusion between workflows)
const LIST_ENDPOINT = "blog-posts";
// Prefer a dedicated detail endpoint to avoid collisions with other workflows using the same path.
// If you keep your workflow at /blog-post, set N8N_BLOG_DETAIL_ENDPOINT=blog-post
const DETAIL_ENDPOINT = (process.env.N8N_BLOG_DETAIL_ENDPOINT || "blog-post-detail").replace(/^\//, "");

async function safeJson<T>(res: Response): Promise<T | null> {
  if (!res.ok) return null;
  try {
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

function joinUrl(baseUrl: string, path: string): string {
  return `${baseUrl}/${path.replace(/^\//, "")}`;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const url = joinUrl(base, LIST_ENDPOINT);

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  const data = await safeJson<BlogPostsListResponse>(res);
  return data?.posts ?? [];
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const cleanSlug = String(slug || "").trim();
  if (!cleanSlug) return null;

  // Primary: dedicated endpoint (default: /blog-post-detail?slug=...)
  const primaryUrl = `${joinUrl(base, DETAIL_ENDPOINT)}?slug=${encodeURIComponent(cleanSlug)}`;

  const primaryRes = await fetch(primaryUrl, {
    next: { revalidate: 60 },
  });

  const primaryData = await safeJson<BlogPostDetailResponse>(primaryRes);
  if (primaryData?.found && primaryData.post) return primaryData.post;

  // Backward-compatible fallback: /blog-post?slug=...
  // Useful if you haven't renamed the workflow path yet.
  const fallbackUrl = `${joinUrl(base, "blog-post")}?slug=${encodeURIComponent(cleanSlug)}`;
  const fallbackRes = await fetch(fallbackUrl, {
    next: { revalidate: 60 },
  });

  const fallbackData = await safeJson<BlogPostDetailResponse>(fallbackRes);
  if (fallbackData?.found && fallbackData.post) return fallbackData.post;

  return null;
}