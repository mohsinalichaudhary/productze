import { Link } from "@tanstack/react-router";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:opacity-85",
  outline: "border border-border bg-background text-foreground hover:bg-accent",
  ghost: "text-muted-foreground hover:text-foreground",
};

type Props = {
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

export const GlowButton = forwardRef<HTMLAnchorElement, Props>(
  ({ to, href, variant = "primary", className, children }, ref) => {
    const classes = cn(base, variants[variant], className);

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <Link ref={ref} to={to ?? "/"} className={classes}>
        {children}
      </Link>
    );
  },
);

GlowButton.displayName = "GlowButton";
