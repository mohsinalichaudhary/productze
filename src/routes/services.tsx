import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Productze" },
      {
        name: "description",
        content:
          "Website development, SEO & growth marketing, performance marketing, AI automation, branding, and digital products — all under one roof.",
      },
      { property: "og:title", content: "Services — Productze" },
      {
        property: "og:description",
        content: "Six specialized services to grow your business online.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="🚀 Our Services"
        title={<>Services built to <span className="gradient-text">drive growth</span></>}
        subtitle="From first pixel to compounding growth, we cover the full digital stack."
      />
      <ServicesSection full />
      <ProcessSection />
      <CTASection />
    </>
  );
}
