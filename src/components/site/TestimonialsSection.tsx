import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24">
      <SectionHeading
        eyebrow="Testimonials"
        title={<>Loved by <span className="gradient-text">ambitious teams</span></>}
        subtitle="Don't take our word for it — here's what our clients say."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-3xl glass p-7"
          >
            <Quote className="h-8 w-8 text-primary/40" />
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-magenta text-magenta" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                loading="lazy"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30"
              />
              <span>
                <span className="block text-sm font-semibold">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
