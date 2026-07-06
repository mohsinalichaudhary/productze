import { cn } from "@/lib/utils";

/**
 * Productze logo. The mark is an upward growth trajectory with an arrowhead —
 * the literal business outcome the agency sells (growth), not decorative sparkle.
 * The negative-space bar-chart risers reinforce "measurable results."
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-xl gradient-brand shadow-[var(--glow-violet)]",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="h-[58%] w-[58%] text-primary-foreground"
      >
        <path
          d="M4 17 L10 11 L14 14 L20 7"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 7 H20 V12"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex min-w-0 items-center gap-2", className)}>
      <LogoMark className="h-9 w-9" />
      <span className="truncate text-lg font-bold tracking-tight">Productze</span>
    </span>
  );
}
