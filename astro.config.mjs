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
      // Exclude gallery from sitemap until real photos are added (Phase 2)
      filter: (page) => !page.includes('/gallery'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
