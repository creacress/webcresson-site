// components/ui/Card.tsx
import { ReactNode } from "react";

interface CardProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Card({ eyebrow, title, description, children }: CardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm shadow-slate-100 transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950/90 dark:shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-500 dark:text-indigo-300">
          {eyebrow}
        </p>
      )}
      <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-50">
        {title}
      </h3>
      {description && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
      {children && (
        <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          {children}
        </div>
      )}
    </section>
  );
}
