import { motion } from "framer-motion";
import { SERVICES } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="relative px-6 py-24">
      <SectionHeading
        eyebrow="Services"
        title={<>Everything you need to <span className="gradient-text">grow online</span></>}
        subtitle="Six specialised services, one accountable team — from first pixel to compounding growth."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            className="group bg-background p-8 transition-colors duration-300 hover:bg-card"
          >
            <span className="text-xs tabular-nums text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 text-xl font-medium tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-6 space-y-2 border-t border-border pt-5">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">
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
