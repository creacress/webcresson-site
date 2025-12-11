// app/sitemap.ts
import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webcresson.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // TODO plus tard : récupérer les slugs de blog depuis ta DB / API n8n
  const blogPosts: { slug: string; updatedAt?: string }[] = [];

  const staticRoutes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "daily", priority: 1 },

    { path: "/tarifications", changeFrequency: "weekly", priority: 0.9 },
    { path: "/audit-gratuit", changeFrequency: "weekly", priority: 0.9 },

    // Services
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services/web", changeFrequency: "weekly", priority: 0.85 },
    { path: "/services/automatisation", changeFrequency: "weekly", priority: 0.85 },
    { path: "/services/marketing", changeFrequency: "weekly", priority: 0.85 },

    { path: "/a-propos", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },

    { path: "/blog", changeFrequency: "daily", priority: 0.8 },
  ];

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
