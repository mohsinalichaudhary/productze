import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { GlowButton } from "./GlowButton";
import founder from "@/assets/founder-mohsin.png";

const HERO_STATS = [
  { value: "+25", label: "Projects delivered" },
  { value: "+372K", label: "Content views driven" },
];

export function Hero() {
  return (
    <section className="relative px-6 pt-32 pb-16 sm:pt-40">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        {/* Left — editorial type block */}
        <div className="relative">
          <span className="hidden lg:block absolute -left-10 top-8 origin-left -rotate-90 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Digital agency
          </span>

          <div className="flex gap-10">
            {HERO_STATS.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-3xl font-medium tracking-tight sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-10 text-[3.5rem] font-medium leading-[0.9] tracking-[-0.05em] sm:text-[5.5rem] lg:text-[7rem]"
          >
            Hello
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-md border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            — It's Productze. We build websites, digital products and full-scale
            digital marketing for businesses ready to grow online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <GlowButton to="/contact">
              Start your project <ArrowUpRight className="h-4 w-4" />
            </GlowButton>
            <GlowButton to="/portfolio" variant="outline">
              View our work
            </GlowButton>
          </motion.div>

          <div className="mt-12 hidden items-center gap-2 text-xs text-muted-foreground lg:flex">
            <ArrowDown className="h-3.5 w-3.5" /> Scroll down
          </div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-2xl bg-card"
        >
          <img
            src={founder}
            alt="Mohsin Ali Chaudhary, founder of Productze"
            width={896}
            height={1200}
            fetchPriority="high"
            className="mono-photo h-full max-h-[34rem] w-full object-cover object-top"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 border-t border-border bg-background/85 px-5 py-3 backdrop-blur">
            <span className="text-sm font-medium">Mohsin Ali Chaudhary</span>
            <span className="text-xs text-muted-foreground">Founder · Productze</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
