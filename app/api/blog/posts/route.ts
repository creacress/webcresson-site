// app/api/blog/posts/route.ts
import { NextResponse } from "next/server";

export const revalidate = 60; // ajuste: 60s, 300s, 3600s...

type N8nListResponse =
  | { posts: any[] }
  | any[]
  | { data?: any[]; posts?: any[] };

function normalizePosts(payload: N8nListResponse): any[] {
  // n8n "All Entries" peut renvoyer un array d'items
  if (Array.isArray(payload)) {
    // cas fréquent: [{ posts: [...] }]
    const first = payload[0];
    if (first && Array.isArray(first.posts)) return first.posts;
    // ou array direct de posts
    return payload;
  }
  if (payload && Array.isArray((payload as any).posts)) return (payload as any).posts;
  if (payload && Array.isArray((payload as any).data)) return (payload as any).data;
  return [];
}

export async function GET() {
  const url = process.env.BLOG_API_LIST_URL;
  if (!url) {
    return NextResponse.json({ posts: [], error: "BLOG_API_LIST_URL missing" }, { status: 500 });
  }

  try {
    const res = await fetch(url, {
      // côté serveur -> pas de CORS
      headers: { Accept: "application/json" },
      next: { revalidate }, // contrôle le cache côté Next  [oai_citation:2‡Next.js](https://nextjs.org/docs/app/api-reference/functions/fetch?utm_source=chatgpt.com)
    });

    if (!res.ok) {
      return NextResponse.json(
        { posts: [], error: `Upstream ${res.status}` },
        { status: 502 }
      );
    }

    const payload = (await res.json()) as N8nListResponse;
    const posts = normalizePosts(payload);

    return NextResponse.json({ posts });
  } catch (e: any) {
    return NextResponse.json(
      { posts: [], error: e?.message ?? "Fetch error" },
      { status: 502 }
    );
  }
}