// components/ui/SeasonalBadge.tsx
interface SeasonalBadgeProps {
  label: string;
  variant?: "promo" | "season" | "info";
}

const variantClasses: Record<NonNullable<SeasonalBadgeProps["variant"]>, string> = {
  promo: "bg-rose-500/10 text-rose-300 border-rose-400/40",
  season: "bg-amber-500/10 text-amber-300 border-amber-400/40",
  info: "bg-sky-500/10 text-sky-300 border-sky-400/40",
};

export function SeasonalBadge({
  label,
  variant = "promo",
}: SeasonalBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
