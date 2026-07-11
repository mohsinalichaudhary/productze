// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable the nitro Cloudflare Worker preset so the build produces a plain
  // static prerender output (client assets + static HTML) that can be hosted
  // on any standard static web host with no Node.js server.
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every route to static HTML so the build output can be hosted
    // on any plain static web host (e.g. Hostinger shared hosting) with no
    // Node.js server. crawlLinks follows in-app <Link>s from each page.
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/contact" },
      { path: "/portfolio" },
      { path: "/pricing" },
      { path: "/services" },
      { path: "/solutions" },
    ],
  },
});
