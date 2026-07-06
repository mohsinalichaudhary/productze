import { motion } from "framer-motion";
import { PROCESS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section className="px-6 py-24">
      <SectionHeading
        eyebrow="How we work"
        title={<>A proven path from <span className="gradient-text">idea to growth</span></>}
        subtitle="A transparent, six-step process that keeps momentum high and surprises low."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROCESS.map((p, i) => (
          <motion.div
            key={p.step}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1.5"
          >
            <span className="block text-5xl font-bold text-transparent [-webkit-text-stroke:1px_oklch(0.62_0.24_300_/_0.5)]">
              {p.step}
            </span>
            <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
