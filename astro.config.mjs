import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './plugin/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), mdx()],
  prefetch: true,

  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  site: 'https://juwel.dev',

  vite: {
    plugins: [tailwindcss()],
  },
});
