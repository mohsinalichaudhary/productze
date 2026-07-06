import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO, CONTENT_WINS, STARTUP_CLIENTS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-6 py-24">
      <SectionHeading
        eyebrow="Selected work"
        title={<>Results we're <span className="gradient-text">proud of</span></>}
        subtitle="Websites, e-commerce stores, news portals, and viral social media growth we've shipped."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2">
        {PORTFOLIO.map((p, i) => {
          const isLink = Boolean(p.url);
          const Wrapper = isLink ? motion.a : motion.article;
          return (
            <Wrapper
              key={p.title}
              {...(isLink
                ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
                : {})}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group relative block overflow-hidden rounded-3xl glass"
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
            </Wrapper>
          );
        })}
      </div>

      {/* Content growth wins */}
      <div className="mx-auto mt-20 max-w-6xl">
        <SectionHeading
          eyebrow="Content & social growth"
          title={<>Numbers that <span className="gradient-text">move businesses</span></>}
          subtitle="Real audience growth driven through data-tested content strategy."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {CONTENT_WINS.map((w, i) => (
            <motion.div
              key={w.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl glass p-7 text-center"
            >
              <div className="text-4xl font-bold gradient-text">{w.metric}</div>
              <div className="mt-2 text-sm font-semibold">{w.label}</div>
              <p className="mt-2 text-sm text-muted-foreground">{w.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Startups & companies supported */}
      <div className="mx-auto mt-20 max-w-6xl">
        <SectionHeading
          eyebrow="Startups & companies"
          title={<>Trusted on <span className="gradient-text">ambitious builds</span></>}
          subtitle="Tech development and growth support for startups across industries."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STARTUP_CLIENTS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="rounded-2xl glass p-6"
            >
              <h3 className="font-bold">{c.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
