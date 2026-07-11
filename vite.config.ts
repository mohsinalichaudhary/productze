import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true, failOnError: true },
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
