// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SnowOverlay } from "@/components/marketing/seasonal/SnowOverlay";

import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://webcresson.com"),
  title: {
    default: "WebCressonTech – Automatisation, IA & Sites Web",
    template: "%s | WebCressonTech",
  },
  description:
    "Automatisation, intégration IA, création de sites web et accompagnement sur la toile pour PME et indépendants.",
  alternates: { canonical: "https://webcresson.com" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 antialiased dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 dark:text-slate-50`}
      >
        <ThemeProvider>
          {/* Curseur custom global */}
          <CustomCursor />
          <div className="relative flex min-h-screen flex-col z-10">
            {/* Gradient de fond derrière tout */}
            <div
              aria-hidden
              className="pointer-events-none fixed inset-x-0 top-[-200px] -z-10 h-[400px] bg-gradient-to-b from-indigo-200/70 via-white to-transparent blur-3xl dark:from-indigo-900/40 dark:via-slate-950 dark:to-transparent"
            />

            {/* Neige globale (Noël) */}
            <div className="pointer-events-none fixed inset-0 z-0">
              <SnowOverlay density={70} />
            </div>

            <Header />

            <main className="flex-1">
              <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                {children}
              </div>
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
