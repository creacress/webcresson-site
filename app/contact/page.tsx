// app/contact/page.tsx
import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact | WebCressonTech",
  description:
    "Contacte WebCressonTech pour parler d’automatisation, d’intégration IA, de création de site Next.js ou pour poser tes questions.",
};

export default function ContactPage() {
  return (
    <div className="space-y-18 lg:space-y-20">
      {/* HERO */}
      <section className="space-y-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:border-indigo-900/60 dark:bg-indigo-950/40 dark:text-indigo-200">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          CONTACT
        </p>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
            On discute de votre projet,
            <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              calmement, sans bullshit.
            </span>
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Une question sur l’automatisation, l’IA, votre site, les offres ou l’audit gratuit ?
            vous pouvez me laisser un message ici. Objectif : des réponses concrètes, pas un pitch
            générique.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/audit-gratuit"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-500"
          >
            Commencer par un audit gratuit →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-50 dark:hover:border-slate-600 dark:hover:bg-slate-900"
          >
            Voir les services →
          </Link>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400">
          Le formulaire pourra être relié à n8n (création de fiche dans votre CRM, tags, suivi des
          réponses…) une fois que le backend sera en place. L’idée : ne saisir les infos qu’une
          seule fois.
        </p>
      </section>

      {/* GRID : INFOS + FORM */}
      <section className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
        {/* COLONNE GAUCHE : INFOS / RASSURANCE */}
        <div className="space-y-8 text-sm text-slate-600 dark:text-slate-300">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
              Comment je peux t’aider ?
            </h2>
            <p>
              La plupart des échanges commencent par :{" "}
              <span className="italic">
                “je sais qu’il y a des choses à automatiser ou améliorer, mais je ne sais pas
                par où commencer”.
              </span>{" "}
              C’est exactement ce que ce formulaire sert à clarifier.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Types de sujets fréquents
            </h3>
            <ul className="mt-2 space-y-1.5 text-xs">
              <li>• Automatiser la prospection ou les relances clients</li>
              <li>• Mettre en place un assistant IA pour un métier précis</li>
              <li>• Créer / refondre un site Next.js plus clair et plus SEO</li>
              <li>• Connecter site, CRM, outils internes et reporting</li>
              <li>• Structurer une petite stack simple mais efficace</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Coordonnées directes
            </h3>
            <p className="text-sm">
              Email :{" "}
              <a
                href="mailto:contact@webcresson.com"
                className="font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200"
              >
                contact@webcresson.com
              </a>
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              vous pouvez aussi répondre directement à un mail si Vous avez déjà reçu un audit ou une
              proposition.
            </p>
          </div>

          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Ce que je ne fais pas
            </h3>
            <ul className="mt-1 space-y-1.5">
              <li>• Pas de “growth hack” opaque ou douteux</li>
              <li>• Pas de promesse magique de résultats irréalistes</li>
              <li>• Pas de dépendance forcée : tu gardes la main sur tes outils</li>
            </ul>
          </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE */}
        <ContactForm />
      </section>

      {/* PETITE FAQ / RASSURANCE */}
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-100 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
          Avant d’écrire, tu te demandes peut-être…
        </h2>
        <div className="grid gap-5 text-sm text-slate-600 dark:text-slate-300 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Est-ce que je vais me faire “vendre” quelque chose ?
            </h3>
            <p className="mt-1 text-xs sm:text-sm">
              Non. L’idée est d’abord de voir si je peux vraiment t’aider. Si ce n’est pas le
              cas, je te le dirai simplement, et je pourrai parfois te rediriger vers autre
              chose.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Est-ce que tu prends des petits projets ?
            </h3>
            <p className="mt-1 text-xs sm:text-sm">
              Oui, tant qu’il y a un minimum d’impact pour toi : un workflow bien choisi, un
              assistant IA utile, une mini refonte de site peuvent déjà changer votre quotidien.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Est-ce que vous pouvez intervenir à distance ?
            </h3>
            <p className="mt-1 text-xs sm:text-sm">
              Oui, tout peut se faire à distance (visio, partage d’écran, comptes d’accès
              sécurisés). La plupart des missions se font ainsi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
