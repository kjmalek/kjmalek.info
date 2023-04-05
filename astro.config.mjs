import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind()],
  site: "https://kjmalek.info",
  build: {
    format: "file",
  },
  experimental: {
    contentCollections: true,
    assets: true,
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
