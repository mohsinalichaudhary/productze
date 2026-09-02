import { motion } from "framer-motion";
import { TEAM } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function TeamSection() {
  return (
    <section className="px-6 py-24">
      <SectionHeading
        eyebrow="Based in Pakistan"
        title={<>The people <span className="gradient-text">behind the work</span></>}
        subtitle="A hands-on studio of developers, marketers and content creators serving clients worldwide."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-3">
        {TEAM.map((m, i) => (
          <motion.figure
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <img
              src={m.image}
              alt={m.alt}
              loading="lazy"
              width={1024}
              height={1280}
              className="mono-photo aspect-[4/5] w-full object-cover"
            />
            <figcaption className="border-t border-border px-5 py-4">
              <span className="block text-sm font-medium">{m.name}</span>
              <span className="block text-xs text-muted-foreground">{m.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
