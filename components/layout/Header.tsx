// components/layout/Header.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/tarifications", label: "Tarifications" },
  { href: "/audit-gratuit", label: "Audit gratuit" },
  { href: "/blog", label: "Blog" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-500 text-xs font-bold text-white">
            W
          </div>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            WebCressonTech
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-slate-900 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + theme switch + burger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Switch theme */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Basculer le thème"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? (
                // Soleil
                <span className="text-lg">☀️</span>
              ) : (
                // Lune
                <span className="text-lg">🌙</span>
              )}
            </button>
          )}

          <Link
            href="/audit-gratuit"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 sm:inline-flex"
          >
            Audit gratuit
          </Link>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Ouvrir le menu"
          >
            <span className="block h-[1.5px] w-4 bg-slate-800 dark:bg-slate-100" />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-1 hover:bg-slate-50 dark:hover:bg-slate-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/audit-gratuit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white dark:bg-white dark:text-slate-900"
              onClick={() => setOpen(false)}
            >
              Audit gratuit
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
