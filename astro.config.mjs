import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './plugin/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap(), mdx()],
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  site: 'https://juwel.dev',
});
