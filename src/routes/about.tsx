import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Heart, Gauge, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { ProcessSection } from "@/components/site/ProcessSection";
import { StatsShowcase } from "@/components/site/StatsShowcase";
import { CTASection } from "@/components/site/CTASection";
import { SectionHeading } from "@/components/site/SectionHeading";
import { OFFICE_IMAGES, EXPERIENCE } from "@/lib/site-data";

const VALUES = [
  { icon: Sparkles, title: "Craft", desc: "We sweat every pixel and every millisecond." },
  { icon: Gauge, title: "Speed", desc: "Momentum wins. We ship fast without cutting corners." },
  { icon: Heart, title: "Partnership", desc: "Your goals are our goals. We're in it with you." },
  { icon: ShieldCheck, title: "Results", desc: "We measure success by your growth, not deliverables." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Productze" },
      {
        name: "description",
        content:
          "Productze is a digital agency helping businesses build powerful online presence with design, marketing, and AI.",
      },
      { property: "og:title", content: "About — Productze" },
      { property: "og:description", content: "The team building world-class digital products." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        badge="✨ About Productze"
        title={<>We build <span className="gradient-text">digital advantages</span></>}
        subtitle="Productze is a premium digital agency helping businesses establish a powerful online presence through design, marketing, and AI."
      />
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl glass p-6 text-center"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent/40">
                <v.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 font-bold">{v.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <StatsShowcase />
      <ProcessSection />
      <CTASection />
    </>
  );
}
