// components/blog/BlogCard.tsx
import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

export function BlogCard({ slug, title, description, category, date }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
    >
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-500 dark:text-indigo-300">
        {category}
      </p>

      <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-slate-50 dark:group-hover:text-indigo-300">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
        {description}
      </p>

      <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">{date}</p>
    </Link>
  );
}
