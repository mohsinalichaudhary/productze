import { cn } from "@/lib/utils";

/**
 * Productze mark — a typographic monogram: a solid ink square holding a
 * negative-space "P" cut by an upward step, the shorthand for growth.
 * Drawn, not iconography.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="Productze"
      className={cn("shrink-0", className)}
    >
      <rect width="40" height="40" rx="10" className="fill-foreground" />
      <path
        d="M13 29V11h9.2c3.6 0 6 2.2 6 5.6s-2.4 5.7-6 5.7H17"
        fill="none"
        className="stroke-background"
        strokeWidth="3"
        strokeLinecap="square"
      />
      <path
        d="M20.5 26.5l3.6-3.6 4.2 4.2"
        fill="none"
        className="stroke-background"
        strokeWidth="2.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <LogoMark className="h-8 w-8" />
      <span className="truncate text-[1.05rem] font-semibold tracking-[-0.04em]">
        productze
      </span>
    </span>
  );
}
