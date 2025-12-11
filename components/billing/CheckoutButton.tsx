"use client";

import { useState } from "react";

type Plan = "automatisation" | "ia" | "site";

type CheckoutButtonProps = {
  plan: Plan;
  label?: string;
  variant?: "primary" | "outline";
};

const paymentLinks: Record<Plan, string | undefined> = {
  automatisation: process.env.NEXT_PUBLIC_STRIPE_LINK_AUTOMATION,
  ia: process.env.NEXT_PUBLIC_STRIPE_LINK_IA,
  site: process.env.NEXT_PUBLIC_STRIPE_LINK_SITE,
};

export function CheckoutButton({ plan, label, variant = "primary" }: CheckoutButtonProps) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setError(null);
    const url = paymentLinks[plan];

    if (!url) {
      setError("Lien Stripe non configuré pour cette offre.");
      return;
    }

    setLoading(true);
    // Redirection vers Stripe
    window.location.href = url;
  };

  const baseClasses =
    "inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-70";
  const primaryClasses = "bg-indigo-600 text-white hover:bg-indigo-500";
  const outlineClasses =
    "border border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-50 dark:hover:bg-slate-900";

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={`${baseClasses} ${
          variant === "primary" ? primaryClasses : outlineClasses
        }`}
      >
        {loading ? "Redirection vers Stripe..." : label ?? "Commander via Stripe"}
      </button>
      {error && (
        <p className="text-[11px] text-rose-600 dark:text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
}
