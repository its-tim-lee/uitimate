import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';
import vite from './vite.config.js';
export default defineConfig({
  integrations: [react(), tailwind({
    applyBaseStyles: false, // according to https://ui.shadcn.com/docs/installation/astro
  })],
  vite
});