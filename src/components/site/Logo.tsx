import { cn } from "@/lib/utils";
import logoMark from "@/assets/productze-logo.png";

/**
 * Productze brand mark — a custom monogram "P" that fuses an upward growth
 * arrow with a forward play shape: the promise of momentum and results.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logoMark}
      alt="Productze logo"
      width={512}
      height={512}
      className={cn("shrink-0 object-contain", className)}
    />
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
