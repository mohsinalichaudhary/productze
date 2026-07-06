import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowButton } from "./GlowButton";

export function CTASection() {
  return (
    <section className="px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] glass px-6 py-16 text-center sm:px-12"
      >
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/30 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-magenta/25 blur-[100px]" />
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Ready to Scale Your <span className="gradient-text">Business Online?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
          Let's build your digital presence and accelerate your growth.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <GlowButton to="/contact">
            Schedule Free Consultation <ArrowRight className="h-4 w-4" />
          </GlowButton>
          <GlowButton to="/pricing" variant="outline">
            View Pricing
          </GlowButton>
        </div>
      </motion.div>
    </section>
  );
}
