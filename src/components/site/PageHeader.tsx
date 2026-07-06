import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHeader({
  badge,
  title,
  subtitle,
}: {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative px-6 pt-36 pb-10 text-center sm:pt-44">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        {badge && (
          <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-2 text-xs font-medium sm:text-sm">
            {badge}
          </span>
        )}
        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
      </motion.div>
    </section>
  );
}
