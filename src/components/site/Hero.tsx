import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react";
import { GlowButton } from "./GlowButton";
import { ParticleField } from "./ParticleField";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 30 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden px-6 pt-36 pb-24 sm:pt-44"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-[background] duration-200"
        style={{
          background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, oklch(0.7 0.16 162 / 0.16), transparent 60%)`,
        }}
      />
      <ParticleField className="absolute inset-0 -z-10 h-full w-full" />

      {/* glowing arcs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-primary/20"
        style={{ maskImage: "radial-gradient(circle, transparent 55%, black 70%, transparent 100%)" }}
      />

      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-2 text-xs font-medium sm:text-sm"
        >
          ✨ Digital Products & Growth Solutions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Transform Your Business with{" "}
          <span className="gradient-text">Digital Products, AI & Growth Marketing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          We help businesses establish a powerful online presence through websites, digital
          products, SEO, branding, AI automation, and performance marketing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <GlowButton to="/contact">
            Start Your Project <ArrowRight className="h-4 w-4" />
          </GlowButton>
          <GlowButton to="/portfolio" variant="outline">
            <Play className="h-4 w-4" /> View Our Work
          </GlowButton>
        </motion.div>
      </div>

      {/* floating analytics cards */}
      <FloatingCard
        className="left-[6%] top-[30%] hidden xl:flex"
        icon={<TrendingUp className="h-4 w-4 text-electric" />}
        title="+312%"
        sub="Organic traffic"
        delay={0.3}
      />
      <FloatingCard
        className="right-[6%] top-[24%] hidden xl:flex"
        icon={<Users className="h-4 w-4 text-magenta" />}
        title="12,480"
        sub="Leads generated"
        delay={0.5}
      />
      <FloatingCard
        className="right-[10%] bottom-[8%] hidden xl:flex"
        icon={<Zap className="h-4 w-4 text-primary" />}
        title="70% auto"
        sub="Tickets resolved"
        delay={0.7}
      />
    </section>
  );
}

function FloatingCard({
  className = "",
  icon,
  title,
  sub,
  delay,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  sub: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute z-10 items-center gap-3 rounded-2xl glass px-4 py-3 shadow-[var(--glow-violet)] animate-float ${className}`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/40">{icon}</span>
      <span className="text-left">
        <span className="block text-sm font-bold leading-tight">{title}</span>
        <span className="block text-xs text-muted-foreground">{sub}</span>
      </span>
    </motion.div>
  );
}
