# Productze — Premium Digital Agency Website

A cinematic, dark-luxury SaaS agency site with glassmorphism, glowing purple/pink/blue gradients, particle effects, and smooth Framer Motion animations. Built as a multi-route site so each section is SEO-indexable and shareable.

## Design System

- **Theme:** Dark by default. Near-black background (`oklch` deep navy-black), layered radial gradient glows in violet, magenta/pink, and electric blue.
- **Typography:** Distinctive pairing — `Space Grotesk` for display headings + `Inter`/`DM Sans` for body (loaded via `<link>` in `__root.tsx`, referenced through `@theme` tokens). Not generic defaults used as the whole system; Space Grotesk gives the modern-tech edge.
- **Tokens (in `src/styles.css`):** semantic colors, gradient tokens (`--gradient-hero`, `--gradient-primary`), glow shadow tokens, glass surface tokens. No hardcoded color classes in components.
- **Effects:** Glassmorphism (`backdrop-blur` + translucent borders), gradient text, glow shadows, animated gradient arcs, subtle grid/circuit pattern overlay, floating cards, mouse-follow radial glow on the hero, particle field.
- **Motion:** Framer Motion for entrance reveals (fade/slide/scale on scroll via `whileInView`), hover lift on cards, staggered children, animated counters for stats.

## Routes

```text
src/routes/
  __root.tsx      -> shell: fonts, dark class, shared Nav + Footer, meta
  index.tsx       -> Home (hero, services preview, showcase stats, portfolio preview, testimonials, process, CTA)
  services.tsx    -> full Services grid (6 cards)
  solutions.tsx   -> Solutions overview
  portfolio.tsx   -> Portfolio grid with hover animations
  pricing.tsx     -> Pricing tiers
  about.tsx       -> About + process + team/values
  contact.tsx     -> Contact form + details + Book Call CTA
```

Each route gets its own `head()` with unique title/description/og tags. Glassmorphism nav bar (Services, Solutions, Portfolio, Pricing, About, Contact) with top-right **Book Call** + **Get Started** buttons; mobile drawer for small screens.

## Components (`src/components/`)

- `Navbar` — sticky glass nav, active-link states, mobile sheet.
- `Footer` — company info, services, resources, social links, contact.
- `Hero` — badge (✨ Digital Products & Growth Solutions), headline, subheadline, two CTAs, animated gradient arcs, floating analytics cards, circuit pattern, particle canvas, mouse-follow glow.
- `ServicesSection` — 6 premium animated cards:
  - 🚀 Website Development · 📈 SEO & Growth Marketing · 🎯 Performance Marketing · 🤖 AI Automation · 🎨 Branding & Creative · 💻 Digital Products (each with its bullet list).
- `StatsShowcase` — animated counters: 100+ Projects, 50+ Clients, 300% Avg Growth, 24/7 Support.
- `PortfolioSection` — project cards (Website, Marketing, SEO, AI) with hover reveal/scale.
- `TestimonialsSection` — glass testimonial cards with avatar, name, role, star rating.
- `ProcessSection` — 6-step workflow: Discovery → Strategy → Design → Development → Launch → Growth (numbered timeline).
- `CTASection` — "Ready to Scale Your Business Online?" + Schedule Free Consultation / View Pricing.
- Shared UI: `GlowButton` variants, `GlassCard`, `SectionHeading`, `Badge`, `ParticleField`, `GradientBackdrop`.

Home page composes the section components; standalone routes reuse the same section components with expanded content.

## Technical

- **Stack:** TanStack Start + React 19 + Tailwind v4 (config in `src/styles.css`) + shadcn UI (Button, Sheet, Card, etc.).
- **Add dependency:** `framer-motion` (via `bun add`).
- **Particles/mouse glow:** lightweight canvas + pointer-tracked radial gradient, `prefers-reduced-motion` respected.
- **Responsive:** grid → flex breakpoints, `min-w-0`/`truncate` in nav header row, mobile nav drawer.
- **SEO:** semantic HTML, single H1 per page, per-route meta + og/twitter tags, alt text, real title/description in `__root.tsx` (replacing "Lovable App" defaults).
- **Buttons/forms** are presentational (CTAs link to Contact/Pricing; contact form is UI-only). No backend unless you later want form submissions, bookings, or a CMS — I can add Lovable Cloud for that in a follow-up.

## Notes

- All content from your brief is included verbatim (badge, headline, subheadline, service bullets, stats, process steps, CTA copy).
- Portfolio/testimonial imagery will use tasteful generated placeholder visuals and avatars so the site looks complete and premium out of the box.
- No backend is set up in this plan (static marketing site). If you want the contact form or "Book Call" to actually send/store data, say so and I'll wire up Lovable Cloud.