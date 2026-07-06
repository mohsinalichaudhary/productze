import { Link } from "@tanstack/react-router";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "gradient-brand text-primary-foreground shadow-[var(--glow-violet)] hover:shadow-[var(--glow-strong)] hover:-translate-y-0.5",
  outline:
    "glass text-foreground hover:bg-accent/30 hover:-translate-y-0.5",
  ghost: "text-muted-foreground hover:text-foreground",
};

export const GlowButton = forwardRef<
  HTMLAnchorElement,
  { to: string; variant?: Variant; className?: string; children: React.ReactNode }
>(({ to, variant = "primary", className, children }, ref) => {
  return (
    <Link ref={ref} to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
});

GlowButton.displayName = "GlowButton";
