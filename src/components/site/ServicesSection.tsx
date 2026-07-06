import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection({ full = false }: { full?: boolean }) {
  return (
    <section id="services" className="relative px-6 py-24">
      <SectionHeading
        eyebrow="What we do"
        title={<>Everything you need to <span className="gradient-text">grow online</span></>}
        subtitle="Six specialized services, one accountable team. From first pixel to compounding growth."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="group relative overflow-hidden rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--glow-strong)]"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/40 text-2xl">
              {s.icon}
            </div>
            <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <ul className="mt-5 space-y-2.5">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full gradient-brand">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
