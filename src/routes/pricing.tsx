import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { CTASection } from "@/components/site/CTASection";
import { GlowButton } from "@/components/site/GlowButton";

const PLANS = [
  {
    name: "Starter",
    price: "$1,500",
    period: "/project",
    desc: "Perfect for a sharp, professional online presence.",
    features: ["5-page website", "Responsive design", "Basic SEO setup", "Contact forms", "2 weeks delivery"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$4,500",
    period: "/project",
    desc: "For businesses ready to scale traffic and leads.",
    features: [
      "Everything in Starter",
      "Advanced SEO & content",
      "Performance marketing setup",
      "Branding & creative",
      "Analytics & CRO",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    desc: "Full digital partner with AI & custom software.",
    features: [
      "Everything in Growth",
      "Custom web app / SaaS",
      "AI agents & automation",
      "Dedicated team",
      "Ongoing growth retainer",
      "24/7 support",
    ],
    featured: false,
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Productze" },
      {
        name: "description",
        content: "Transparent pricing for websites, growth marketing, and custom digital products.",
      },
      { property: "og:title", content: "Pricing — Productze" },
      { property: "og:description", content: "Simple, transparent plans that scale with you." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHeader
        badge="💎 Pricing"
        title={<>Simple, transparent <span className="gradient-text">pricing</span></>}
        subtitle="Plans that scale with your ambition. No hidden fees, ever."
      />
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl items-start gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl p-8 ${
                p.featured
                  ? "glass shadow-[var(--glow-strong)] ring-1 ring-primary/40 lg:-translate-y-3"
                  : "glass"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-brand px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-bold gradient-text">{p.price}</span>
                <span className="pb-1 text-sm text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full gradient-brand">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <GlowButton
                to="/contact"
                variant={p.featured ? "primary" : "outline"}
                className="mt-8 w-full justify-center"
              >
                Get Started
              </GlowButton>
            </motion.div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
