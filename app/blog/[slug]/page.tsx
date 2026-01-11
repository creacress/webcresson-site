// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

type BlogPost = {
  title: string;
  slug: string;
  excerpt?: string | null;
  contentMarkdown: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  tags?: string[];
  createdAt?: string;
};

async function getBaseUrl() {
  // Next 16: `headers()` can be async (sync dynamic APIs)
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "https";

  // Fallback local/dev
  if (!host) return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return `${proto}://${host}`;
}

async function fetchJson<T>(path: string): Promise<Response> {
  const base = await getBaseUrl();
  return fetch(`${base}${path}`, { cache: "no-store" });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const res = await fetchJson(`/api/blog/${encodeURIComponent(slug)}`);
    if (!res.ok) return {};
    const { post } = (await res.json()) as any;
  
    return {
      title: post.metaTitle ?? post.title,
      description: post.metaDescription ?? post.excerpt ?? "",
    };
  }
  
async function getPost(slug: string) {
  const res = await fetchJson(`/api/blog/${encodeURIComponent(slug)}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch post");
  return (await res.json()) as { post: BlogPost };
}

function simpleMarkdownToHtml(md: string) {
  // mini rendu (safe) : titres + paragraphes + listes basiques
  // si tu veux du vrai markdown: je te mets next-mdx-remote / react-markdown après
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const lines = md.split("\n");
  let html = "";
  let inUl = false;

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (/^###\s+/.test(line)) {
      if (inUl) { html += "</ul>"; inUl = false; }
      html += `<h3>${esc(line.replace(/^###\s+/, ""))}</h3>`;
      continue;
    }
    if (/^##\s+/.test(line)) {
      if (inUl) { html += "</ul>"; inUl = false; }
      html += `<h2>${esc(line.replace(/^##\s+/, ""))}</h2>`;
      continue;
    }
    if (/^- /.test(line)) {
      if (!inUl) { html += "<ul>"; inUl = true; }
      html += `<li>${esc(line.replace(/^- /, ""))}</li>`;
      continue;
    }
    if (line === "" || /^---$/.test(line)) {
      if (inUl) { html += "</ul>"; inUl = false; }
      if (/^---$/.test(line)) html += "<hr />";
      continue;
    }

    if (inUl) { html += "</ul>"; inUl = false; }
    html += `<p>${esc(line)}</p>`;
  }

  if (inUl) html += "</ul>";
  return html;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // IMPORTANT Next 16: params est une Promise
  const data = await getPost(slug);

  if (!data?.post) notFound();

  const p = data.post;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">{p.title}</h1>
        {p.createdAt ? (
          <p className="mt-2 text-sm opacity-70">
            {new Date(p.createdAt).toLocaleDateString("fr-FR")}
          </p>
        ) : null}

        {!!p.tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full border px-2 py-1 text-xs opacity-80">
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {p.excerpt ? <p className="mt-4 opacity-80">{p.excerpt}</p> : null}
      </div>

      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: simpleMarkdownToHtml(p.contentMarkdown) }}
      />
    </main>
  );
}