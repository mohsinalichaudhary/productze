import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mx-auto max-w-2xl text-center ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
          <span className="h-1 w-1 rounded-full bg-foreground" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-medium sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
    </motion.div>
  );
}
