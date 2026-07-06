import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Productze" },
      {
        name: "description",
        content: "Book a call or send us a message. Let's build your digital presence together.",
      },
      { property: "og:title", content: "Contact — Productze" },
      { property: "og:description", content: "Get in touch to start your project." },
    ],
  }),
  component: ContactPage,
});

const DETAILS = [
  { icon: Mail, label: "Email", value: "hello@productze.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 012-3456" },
  { icon: MapPin, label: "Location", value: "Remote · Worldwide" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thanks! We'll get back to you within 24 hours.");
  };

  return (
    <>
      <PageHeader
        badge="📬 Contact"
        title={<>Let's build something <span className="gradient-text">remarkable</span></>}
        subtitle="Tell us about your project and we'll get back to you within 24 hours."
      />
      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex items-center gap-4 rounded-2xl glass p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-brand">
                  <d.icon className="h-5 w-5 text-primary-foreground" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">{d.label}</span>
                  <span className="block font-semibold">{d.value}</span>
                </span>
              </div>
            ))}
            <div className="rounded-2xl glass p-5">
              <p className="text-sm text-muted-foreground">
                Prefer a call? Book a free 30-minute consultation and we'll map out your growth plan.
              </p>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl glass p-7"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Message sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Jane Doe" />
                  <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
                </div>
                <Field label="Company" name="company" placeholder="Acme Inc." required={false} />
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Project details</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what you're looking to build..."
                    className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-violet)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--glow-strong)]"
                >
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
