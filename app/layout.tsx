// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { SnowOverlay } from "@/components/marketing/seasonal/SnowOverlay";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GTMPageView } from "@/components/analytics/GTMPageView";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const SITE_URL = "https://webcresson.com";
const ENABLE_PT = process.env.NEXT_PUBLIC_ENABLE_PT === "true"; // active quand /pt/... existe

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "WebCressonTech – Automatisation, IA & Sites Web",
    template: "%s | WebCressonTech",
  },
  description:
    "Automatisation, intégration IA, création de sites web et accompagnement sur la toile pour PME et indépendants.",
  alternates: {
    canonical: SITE_URL,
    ...(ENABLE_PT
      ? {
          languages: {
            "fr-FR": SITE_URL,
            "pt-PT": `${SITE_URL}/pt`,
          },
        }
      : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "WebCressonTech",
    locale: "fr_FR",
    title: "WebCressonTech – Automatisation, IA & Sites Web",
    description:
      "Automatisation, intégration IA, création de sites web et accompagnement sur la toile pour PME et indépendants.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCressonTech – Automatisation, IA & Sites Web",
    description:
      "Automatisation, intégration IA, création de sites web et accompagnement sur la toile pour PME et indépendants.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-FR" suppressHydrationWarning>
      <head>
        {/* GTM global (optionnel, si tu utilises Tag Manager) */}
        {GTM_ID && (
          <Script id="gtm-head" strategy="beforeInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        )}
        {/* SEO IA: données structurées (JSON-LD) */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WebCressonTech",
              url: SITE_URL,
              areaServed: ["FR", "PT"],
              knowsAbout: [
                "Automatisation n8n",
                "Intelligence artificielle pour PME",
                "Chatbot entreprise",
                "Intégration IA",
                "Sites web Next.js",
                "SEO technique",
              ],
            }),
          }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "WebCressonTech",
              url: SITE_URL,
              inLanguage: "fr-FR",
            }),
          }}
        />
      </head>

      <body
        className={`${inter.className} bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 antialiased dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 dark:text-slate-50`}
      >
        {/* GTM noscript */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <ThemeProvider>
          <CustomCursor />

          {/* GTM page_view dans une zone de Suspense pour useSearchParams */}
          <Suspense fallback={null}>
            <GTMPageView />
          </Suspense>

          <div className="relative z-10 flex min-h-screen flex-col">
            {/* Gradient de fond */}
            <div
              aria-hidden
              className="pointer-events-none fixed inset-x-0 top-[-200px] -z-10 h-[400px] bg-gradient-to-b from-indigo-200/70 via-white to-transparent blur-3xl dark:from-indigo-900/40 dark:via-slate-950 dark:to-transparent"
            />

            {/* Neige saisonnière */}
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

        {/* Vercel Web Analytics : traque toutes les pages */}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
