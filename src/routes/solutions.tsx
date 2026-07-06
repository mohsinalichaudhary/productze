import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Rocket, Search, Target, Bot, Palette, Code2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { StatsShowcase } from "@/components/site/StatsShowcase";

const SOLUTIONS = [
  {
    icon: Rocket,
    title: "For Startups",
    desc: "Launch fast with an MVP, a conversion-ready site, and growth foundations built in.",
  },
  {
    icon: Target,
    title: "For E-commerce",
    desc: "Storefronts, paid acquisition, and CRO that turn browsers into repeat buyers.",
  },
  {
    icon: Search,
    title: "For Local Business",
    desc: "Local SEO, Google Business optimization, and lead-gen that fills your pipeline.",
  },
  {
    icon: Bot,
    title: "For Operations",
    desc: "AI agents and workflow automation that remove busywork and scale your team.",
  },
  {
    icon: Palette,
    title: "For Brands",
    desc: "Identity, creative, and content that make you unforgettable across every channel.",
  },
  {
    icon: Code2,
    title: "For SaaS",
    desc: "Product design, dashboards, and custom software engineered to scale.",
  },
];

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Productze" },
      {
        name: "description",
        content:
          "Tailored digital solutions for startups, e-commerce, local business, operations, brands, and SaaS.",
      },
      { property: "og:title", content: "Solutions — Productze" },
      { property: "og:description", content: "Solutions tailored to your business model." },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHeader
        badge="🧩 Solutions"
        title={<>Solutions tailored to <span className="gradient-text">your business</span></>}
        subtitle="Whatever stage you're at, we have a proven playbook to move you forward."
      />
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--glow-strong)]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/40">
                <s.icon className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <StatsShowcase />
      <CTASection />
    </>
  );
}
