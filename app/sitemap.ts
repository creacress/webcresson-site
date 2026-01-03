// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webcresson.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Keep a single timestamp for deterministic output
  const now = new Date();

  // TODO plus tard : récupérer les slugs + updatedAt de blog depuis ta DB / API n8n
  const blogPosts: { slug: string; updatedAt?: string }[] = [];

  const staticRoutes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "daily", priority: 1 },

    // Conversion
    { path: "/tarifications", changeFrequency: "weekly", priority: 0.9 },
    { path: "/audit-gratuit", changeFrequency: "weekly", priority: 0.95 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/a-propos", changeFrequency: "monthly", priority: 0.7 },

    // Hub services
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },

    // Pages “réponse IA” (priorité)
    { path: "/automatisation-entreprise", changeFrequency: "weekly", priority: 0.9 },
    { path: "/integration-ia-entreprise", changeFrequency: "weekly", priority: 0.9 },
    { path: "/chatbot-entreprise", changeFrequency: "weekly", priority: 0.88 },
    { path: "/creation-site-web", changeFrequency: "weekly", priority: 0.88 },

    // Routes legacy / anciennes pages services (garde si elles existent encore)
    { path: "/services/automatisation", changeFrequency: "weekly", priority: 0.6 },
    { path: "/services/web", changeFrequency: "weekly", priority: 0.6 },
    { path: "/services/marketing", changeFrequency: "weekly", priority: 0.6 },

    // Blog
    { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const lastModified = post.updatedAt ? new Date(post.updatedAt) : now;

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  return [...staticPages, ...blogPages];
}