import portfolioAi from "@/assets/portfolio-ai.jpg";
import coverShawls from "@/assets/cover-shawls.jpg";
import coverWesteriya from "@/assets/cover-westeriya.jpg";
import coverCreckler from "@/assets/cover-creckler.jpg";
import coverKinewshd from "@/assets/cover-kinewshd.jpg";
import office1 from "@/assets/office-1.jpg";
import office2 from "@/assets/office-2.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const OFFICE_IMAGES = [
  { src: office1, alt: "Productze creative team collaborating in our Pakistan studio" },
  { src: office2, alt: "Productze strategists planning a social media growth campaign" },
] as const;

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
    icon: "📱",
    title: "Social Media Marketing",
    desc: "Full account management and content that grows real, engaged audiences.",
    items: ["Instagram & Facebook", "TikTok & YouTube", "Content calendars", "Community management"],
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
] as const;

export const STATS = [
  { value: 372, suffix: "K+", label: "Content Views Driven" },
  { value: 13, suffix: "K+", label: "Followers Grown" },
  { value: 25, suffix: "+", label: "Projects Delivered" },
  { value: 24, suffix: "/7", label: "Support" },
] as const;

export const PORTFOLIO = [
  {
    tag: "E-commerce",
    title: "Shawls Store",
    desc: "Premium shawls e-commerce store with product catalog, cart, and seamless checkout.",
    image: portfolioWeb,
    url: "https://shawls.lovable.app",
  },
  {
    tag: "E-commerce",
    title: "Westeriya Store",
    desc: "Feature-rich e-commerce platform with modern design, filtering, and optimized shopping.",
    image: portfolioWeb,
    url: "https://westeriya.lovable.app",
  },
  {
    tag: "Web Design",
    title: "Creckler Blog",
    desc: "Full blogging website with content management and SEO-optimized articles.",
    image: portfolioMarketing,
    url: "https://creckler.com",
  },
  {
    tag: "News Portal",
    title: "KiNewsHD Urdu",
    desc: "WordPress news portal with category publishing and full Urdu language support.",
    image: portfolioMarketing,
    url: "https://urdu.kinewshd.com",
  },
  {
    tag: "Social Growth",
    title: "Plot Twist Clips — YouTube",
    desc: "Grew a channel to 372,900 views in 28 days with A/B-tested thumbnails and trend targeting.",
    image: portfolioAi,
    url: "",
  },
  {
    tag: "Social Growth",
    title: "@trendin_ai — Instagram",
    desc: "Scaled to 13,400 followers across 204 posts, driving referral traffic to productze.com.",
    image: portfolioAi,
    url: "https://instagram.com/trendin_ai",
  },
] as const;

export const CONTENT_WINS = [
  {
    metric: "372,900",
    label: "YouTube views in 28 days",
    detail: "Plot Twist Clips — with 69,000 views in a single 48-hour window.",
  },
  {
    metric: "13,400",
    label: "Instagram followers",
    detail: "@trendin_ai grown organically across 204 posts on AI & marketing.",
  },
  {
    metric: "1,800",
    label: "Watch hours in 28 days",
    detail: "Editing, scheduling, and analytics all managed in-house.",
  },
] as const;

export const STARTUP_CLIENTS = [
  { name: "AgerLink", desc: "An all-encompassing platform revolutionizing the agri-food sector." },
  { name: "XAir", desc: "A modern tech company simplifying the aviation experience." },
  { name: "Hivefolio", desc: "Esports & gaming career platform for building your brand and network." },
  { name: "League Online", desc: "Online learning platform built for a closed community in Singapore." },
  { name: "Saudi Green Building Forum", desc: "Leading voice for Sustainable Development Goals in West Asia." },
  { name: "ExcellCare", desc: "Admin & staff dashboard for managing tasks and operations." },
] as const;

export const EXPERIENCE = [
  {
    role: "SMM & News Editor",
    org: "KiNews HD",
    period: "Jul 2022 – Present",
    desc: "News publishing and social media account management with daily updates and customer response.",
  },
  {
    role: "News Editor",
    org: "DomailDigital",
    period: "Dec 2025 – Present",
    desc: "News publishing based on daily trends sourced from across the internet.",
  },
  {
    role: "Digital Marketing Intern",
    org: "Nicon Group Colleges, Rawalpindi",
    period: "2024",
    desc: "Ran social campaigns generating qualified student leads and coordinated multi-platform outreach.",
  },
  {
    role: "SEO Analyst",
    org: "Providers Care Billing LLC",
    period: "Jul 2022 – Jan 2023",
    desc: "Search optimization and analytics to improve organic visibility and rankings.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ayesha Khan",
    role: "Founder, Lumen Studio",
    rating: 5,
    avatar: avatar1,
    quote:
      "Productze rebuilt our entire online presence. Traffic tripled and our conversion rate has never been higher.",
  },
  {
    name: "Bilal Ahmed",
    role: "CEO, Northwind Labs",
    rating: 5,
    avatar: avatar2,
    quote:
      "Their social media management transformed our brand. Followers and leads grew month after month — a genuinely elite team.",
  },
  {
    name: "Sana Malik",
    role: "CMO, Vantage Retail",
    rating: 5,
    avatar: avatar3,
    quote:
      "World-class design and marketing execution. Every rupee we spent came back multiplied. Highly recommended.",
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
  location: "Pakistan · Serving clients worldwide",
} as const;

export const WHATSAPP_LINK = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
  "Hi Productze, I'd like to book a call about my project.",
)}`;
