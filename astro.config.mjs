// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://skinaestheticsnorthampton.co.uk',
  integrations: [
    react(),
    sitemap({
      // Exclude gallery (Phase 2 — awaiting real photos) and /thanks (form confirmation, not for SEO)
      filter: (page) => !page.includes('/gallery') && !page.includes('/thanks'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
