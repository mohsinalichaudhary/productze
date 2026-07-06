import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { ServicesSection } from "@/components/site/ServicesSection";
import { StatsShowcase } from "@/components/site/StatsShowcase";
import { PortfolioSection } from "@/components/site/PortfolioSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <StatsShowcase />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}
