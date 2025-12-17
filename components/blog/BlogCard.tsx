// components/blog/BlogCard.tsx
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

type BlogCardProps = {
  post: BlogPost;
};

function formatDateFr(dateStr?: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function BlogCard({ post }: BlogCardProps) {
  const category = post.tags?.[0] ?? "Article";
  const date = formatDateFr(post.publishedAt ?? post.createdAt ?? post.updatedAt);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
    >
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-500 dark:text-indigo-300">
        {category}
      </p>

      <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-slate-50 dark:group-hover:text-indigo-300">
        {post.title}
      </h3>

      {post.excerpt ? (
        <p className="mt-2 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
          {post.excerpt}
        </p>
      ) : null}

      {date ? (
        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{date}</p>
      ) : null}
    </Link>
  );
}
