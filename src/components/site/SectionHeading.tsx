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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mx-auto max-w-2xl text-center ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-border glass px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
