// app/blog/page.tsx
import Link from "next/link";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  tags?: string[] | null;
  createdAt?: string;
};

async function absoluteUrl(path: string) {
  const h = await headers(); // ✅ await
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";
  if (!host) throw new Error("Missing host header");
  return `${proto}://${host}${path.startsWith("/") ? path : `/${path}`}`;
}

export default async function BlogPage() {
  const url = await absoluteUrl("/api/blog?status=PUBLISHED&take=20");

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`API error: ${res.status}`);

  const data = (await res.json()) as { items: BlogPost[] };
  const posts = data.items ?? [];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Blog</h1>

      <div className="mt-8 grid gap-4">
        {posts.map((p) => (
          <Link key={p.id} href={`/blog/${p.slug}`} className="rounded-xl border p-6">
            <h2 className="text-xl font-medium">{p.title}</h2>
            {p.excerpt ? <p className="mt-2 text-sm opacity-80">{p.excerpt}</p> : null}
          </Link>
        ))}
      </div>
    </main>
  );
}