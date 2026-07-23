import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

import { site } from "./src/content/site";

/**
 * GitHub Pages serves project repos from a subpath
 * (`/<repo>/`), so the demo build needs a base. Production on the real domain
 * serves from the root and leaves these unset.
 *
 *   BASE_PATH=/attorney-brandon-price-crum/  SITE_URL=https://…  npm run build
 */
const basePath = process.env.BASE_PATH ?? "/";
const siteUrl = (process.env.SITE_URL ?? site.url).replace(/\/$/, "");

export default defineConfig({
  base: basePath,
  // Vite resolves the "@/*" alias straight from tsconfig.json.
  resolve: { tsconfigPaths: true },
  // Vite exposes `base` as import.meta.env.BASE_URL on its own; only the
  // absolute canonical/OG host needs injecting.
  define: { __SITE_URL__: JSON.stringify(siteUrl) },
  plugins: [
    tailwindcss(),
    tanstackStart({
      // Every page is static content, so ship static HTML and let the CDN serve
      // it. Only the contact server function needs a running server.
      prerender: { enabled: true, crawlLinks: true, failOnError: true },
      sitemap: { enabled: true, host: siteUrl },
    }),
    react(),
  ],
});
