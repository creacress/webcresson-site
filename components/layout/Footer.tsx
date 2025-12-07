// components/layout/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-500 text-xs font-bold text-white">
              W
            </div>
            <span className="text-sm font-semibold tracking-tight">
              WebCressonTech
            </span>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Automatisation, intégration IA et sites web Next.js pour PME,
            micro-entrepreneurs et associations.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Société
            </h3>
            <ul className="mt-3 space-y-1.5 text-xs">
              <li><Link href="/a-propos">À propos</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/tarifications">Tarifications</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Ressources
            </h3>
            <ul className="mt-3 space-y-1.5 text-xs">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/audit-gratuit">Audit gratuit</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Contact
            </h3>
            <p className="mt-3 text-xs">
              Email :{" "}
              <a
                href="mailto:contact@webcresson.com"
                className="font-medium text-slate-900"
              >
                contact@webcresson.com
              </a>
              <br />
              Basé en France.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-500 sm:px-6 lg:px-8">
          <span>© {new Date().getFullYear()} WebCressonTech. Tous droits réservés.</span>
          <div className="flex gap-4">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
