// app/blog/page.tsx
import Link from "next/link";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  tags?: string[];
  createdAt?: string;
  status?: string;
};

function getBaseUrl(h: Headers) {
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (!host) throw new Error("Missing host header");
  return `${proto}://${host}`;
}

async function getPosts() {
  const h = await headers(); // Next 16 => Promise<ReadonlyHeaders>
  const baseUrl = getBaseUrl(h);

  // ✅ ALL pour voir ce que n8n poste (draft/brouillon)
  const res = await fetch(`${baseUrl}/api/blog?status=ALL&take=20`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = (await res.json()) as { posts: BlogPost[] };
  return data.posts ?? [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">Blog</h1>
        <p className="mt-2 opacity-70">Guides concrets automation / IA / PME.</p>
      </div>

      {posts.length === 0 ? (
        <div className="rounded-2xl border p-6 opacity-80">
          Aucun article pour le moment.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              className="group rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold group-hover:underline">
                  {p.title}
                </h2>
                {p.status ? (
                  <span className="rounded-full border px-2 py-0.5 text-xs opacity-70">
                    {p.status}
                  </span>
                ) : null}
              </div>

              {p.excerpt ? <p className="mt-2 opacity-75">{p.excerpt}</p> : null}

              {!!p.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border px-2 py-1 text-xs opacity-70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {p.createdAt ? (
                <p className="mt-4 text-xs opacity-60">
                  {new Date(p.createdAt).toLocaleDateString("fr-FR")}
                </p>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}