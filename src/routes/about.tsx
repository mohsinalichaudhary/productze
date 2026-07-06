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

      {/* Office / studio */}
      <section className="px-6 py-14">
        <SectionHeading
          eyebrow="Based in Pakistan"
          title={<>Inside our <span className="gradient-text">studio</span></>}
          subtitle="A dedicated team building brands, content, and growth for clients worldwide."
        />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          {OFFICE_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-3xl glass"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1280}
                height={896}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 py-14">
        <SectionHeading
          eyebrow="Track record"
          title={<>Experience that <span className="gradient-text">delivers</span></>}
          subtitle="Hands-on across SEO, social media, news publishing, and digital marketing."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role + e.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-2xl glass p-6 sm:flex sm:items-start sm:justify-between sm:gap-6"
            >
              <div>
                <h3 className="font-bold">{e.role}</h3>
                <p className="text-sm text-primary">{e.org}</p>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              </div>
              <span className="mt-2 shrink-0 text-xs font-medium text-muted-foreground sm:mt-0">
                {e.period}
              </span>
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
