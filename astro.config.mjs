// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// import tailwind from '@astrojs/tailwind';
import vite from './vite.config.js';

import icon from 'astro-icon';

export default defineConfig({
  integrations: [// tailwind({
  // applyBaseStyles: false, // according to https://ui.shadcn.com/docs/installation/astro
  // })
  react(), icon()],
  vite
});