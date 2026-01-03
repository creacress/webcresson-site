// app/robots.ts
import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://webcresson.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/private"],
      },

      // AI crawlers (allow)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
