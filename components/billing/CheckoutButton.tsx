"use client";

import { useMemo } from "react";

type Billing = "monthly" | "yearly";
type Plan = "automatisation" | "ia" | "site";

const LINKS: Record<Plan, Record<Billing, string | undefined>> = {
  automatisation: {
    monthly: process.env.NEXT_PUBLIC_STRIPE_LINK_AUTO_MONTHLY,
    yearly: process.env.NEXT_PUBLIC_STRIPE_LINK_AUTO_YEARLY,
  },
  ia: {
    monthly: process.env.NEXT_PUBLIC_STRIPE_LINK_IA_MONTHLY,
    yearly: process.env.NEXT_PUBLIC_STRIPE_LINK_IA_YEARLY,
  },
  site: {
    monthly: process.env.NEXT_PUBLIC_STRIPE_LINK_SITE_MONTHLY,
    yearly: process.env.NEXT_PUBLIC_STRIPE_LINK_SITE_YEARLY,
  },
};

export function CheckoutButton({
  plan,
  billing,
  label,
  variant = "primary",
}: {
  plan: Plan;
  billing: Billing;
  label: string;
  variant?: "primary" | "secondary";
}) {
  const href = useMemo(() => LINKS?.[plan]?.[billing], [plan, billing]);

  const base =
    "inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-indigo-600 text-white hover:bg-indigo-500"
      : "border border-slate-300 text-slate-900 hover:bg-slate-50";

  if (!href) {
    return (
      <button className={`${base} ${styles}`} disabled title="Stripe non configuré">
        {label}
      </button>
    );
  }

  return (
    <a className={`${base} ${styles}`} href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}
