import portfolioWeb from "@/assets/portfolio-web.jpg";
import portfolioMarketing from "@/assets/portfolio-marketing.jpg";
import portfolioAi from "@/assets/portfolio-ai.jpg";

export const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    icon: "🚀",
    title: "Website Development",
    desc: "High-performance sites engineered to convert visitors into customers.",
    items: ["Business websites", "Landing pages", "E-commerce stores"],
  },
  {
    icon: "📈",
    title: "SEO & Growth Marketing",
    desc: "Rank higher, get found, and compound organic traffic over time.",
    items: ["Technical SEO", "Local SEO", "Content strategy", "Search optimization"],
  },
  {
    icon: "🎯",
    title: "Performance Marketing",
    desc: "Data-driven paid campaigns that deliver measurable ROI.",
    items: ["Meta Ads", "Google Ads", "Lead generation", "Conversion optimization"],
  },
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "Automate the busywork with intelligent agents and workflows.",
    items: ["AI agents", "Chatbots", "Workflow automation", "Business process automation"],
  },
  {
    icon: "🎨",
    title: "Branding & Creative",
    desc: "Memorable brands and scroll-stopping creative that stand out.",
    items: ["Brand identity", "Social media design", "Content creation", "Video editing"],
  },
  {
    icon: "💻",
    title: "Digital Products",
    desc: "From MVP to scale — we ship robust products users love.",
    items: ["SaaS MVPs", "Web applications", "Dashboards", "Custom software"],
  },
] as const;

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 300, suffix: "%", label: "Average Growth" },
  { value: 24, suffix: "/7", label: "Support" },
] as const;

export const PORTFOLIO = [
  {
    tag: "Website",
    title: "Nova Commerce Platform",
    desc: "A conversion-first e-commerce storefront with a 3x checkout uplift.",
    image: portfolioWeb,
  },
  {
    tag: "Marketing",
    title: "Scale-Up Growth Engine",
    desc: "Full-funnel paid strategy driving 300% qualified lead growth.",
    image: portfolioMarketing,
  },
  {
    tag: "SEO",
    title: "Local Authority Domination",
    desc: "Technical + local SEO that pushed 40 keywords to page one.",
    image: portfolioMarketing,
  },
  {
    tag: "AI",
    title: "Autonomous Support Agent",
    desc: "An AI agent resolving 70% of tickets with zero human touch.",
    image: portfolioAi,
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Founder, Lumen Studio",
    rating: 5,
    quote:
      "Productze rebuilt our entire online presence. Traffic tripled and our conversion rate has never been higher.",
  },
  {
    name: "Marcus Reid",
    role: "CEO, Northwind Labs",
    rating: 5,
    quote:
      "The AI automation they shipped saved us 30 hours a week. Genuinely a $10k-tier team at a fraction of the friction.",
  },
  {
    name: "Priya Nair",
    role: "CMO, Vantage Retail",
    rating: 5,
    quote:
      "World-class design and marketing execution. Every dollar we spent came back multiplied. Highly recommended.",
  },
] as const;

export const PROCESS = [
  { step: "01", title: "Discovery", desc: "We dig into your goals, market, and users." },
  { step: "02", title: "Strategy", desc: "A clear, data-backed roadmap to results." },
  { step: "03", title: "Design", desc: "Premium interfaces crafted to convert." },
  { step: "04", title: "Development", desc: "Fast, scalable, production-grade builds." },
  { step: "05", title: "Launch", desc: "Seamless go-live with zero downtime." },
  { step: "06", title: "Growth", desc: "Optimize, iterate, and scale continuously." },
] as const;

export const CONTACT = {
  whatsappNumber: "923430571260",
  phoneDisplay: "+92 343 0571260",
  email: "mohsinalichaudhary698@gmail.com",
  location: "Remote · Worldwide",
} as const;

export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  "Hi Productze, I'd like to book a call about my project.",
)}`;
