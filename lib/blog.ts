// lib/blog.ts
export type BlogPost = {
  slug: string;
  title: string;

  excerpt?: string;

  // contenu
  contentMarkdown?: string;
  contentHtml?: string; // ✅ ton [slug] l'utilise

  // SEO
  seoTitle?: string;       // ✅
  seoDescription?: string; // ✅

  // dates
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;

  // média / meta
  coverImageUrl?: string;
  tags?: string[];
};

// --- API (via /api/blog/...) ---

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const res = await fetch("/api/blog/posts", { next: { revalidate: 60 } });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data?.posts) ? (data.posts as BlogPost[]) : [];
}

// ✅ alias demandé par ton page.tsx slug
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const res = await fetch(`/api/blog/post?slug=${encodeURIComponent(slug)}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data?.found ? (data.post as BlogPost) : null;
}

// (optionnel) alias plus court si tu veux
export const fetchBlogPost = fetchBlogPostBySlug;