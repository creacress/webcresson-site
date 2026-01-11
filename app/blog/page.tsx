// app/blog/page.tsx
import Link from "next/link";

export const dynamic = "force-dynamic"; // évite cache si tu veux voir les nouveaux posts direct

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  tags?: string[];
  createdAt?: string;
};

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/blog?status=PUBLISHED&take=20`, {
    // si NEXT_PUBLIC_SITE_URL n'est pas défini, Next utilisera relative en prod via Vercel
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blog posts");
  return (await res.json()) as { items: BlogPost[] };
}

export default async function BlogPage() {
  // fallback safe si NEXT_PUBLIC_SITE_URL n’est pas set en local
  const data = await (async () => {
    try {
      return await getPosts();
    } catch {
      const res = await fetch(`/api/blog?status=PUBLISHED&take=20`, { cache: "no-store" });
      if (!res.ok) return { items: [] };
      return (await res.json()) as { items: BlogPost[] };
    }
  })();

  const posts = data.items ?? [];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="mt-2 text-sm opacity-80">Guides & retours terrain sur l’automatisation et l’IA.</p>

      <div className="mt-8 grid gap-4">
        {posts.length === 0 ? (
          <div className="rounded-xl border p-6 opacity-80">Aucun article pour le moment.</div>
        ) : (
          posts.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              className="rounded-xl border p-6 transition hover:opacity-90"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-medium">{p.title}</h2>
                {p.createdAt ? (
                  <span className="text-xs opacity-70">
                    {new Date(p.createdAt).toLocaleDateString("fr-FR")}
                  </span>
                ) : null}
              </div>

              {p.excerpt ? <p className="mt-2 text-sm opacity-80">{p.excerpt}</p> : null}

              {!!p.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.slice(0, 6).map((t) => (
                    <span key={t} className="rounded-full border px-2 py-1 text-xs opacity-80">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          ))
        )}
      </div>
    </main>
  );
}