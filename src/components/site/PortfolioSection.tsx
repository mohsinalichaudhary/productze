import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <SectionHeading
        eyebrow="Selected work"
        title={<>Results we're <span className="gradient-text">proud of</span></>}
        subtitle="A snapshot of websites, campaigns, SEO wins, and AI systems we've shipped."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2">
        {PORTFOLIO.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="group relative overflow-hidden rounded-3xl glass"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium">
                {p.tag}
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 p-6">
              <div>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass transition-all duration-300 group-hover:gradient-brand">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
