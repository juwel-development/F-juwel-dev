import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './plugin/remark-reading-time.mjs';

import tailwindcss from '@tailwindcss/vite';

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