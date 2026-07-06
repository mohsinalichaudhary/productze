import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Productze" },
      {
        name: "description",
        content:
          "Explore our website builds, marketing campaigns, SEO results, and AI automation projects.",
      },
      { property: "og:title", content: "Portfolio — Productze" },
      { property: "og:description", content: "Real results across web, marketing, SEO, and AI." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHeader
        badge="🎨 Portfolio"
        title={<>Work that <span className="gradient-text">speaks for itself</span></>}
        subtitle="A selection of projects across websites, marketing, SEO, and AI automation."
      />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
