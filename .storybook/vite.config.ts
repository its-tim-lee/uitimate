import { defineConfig } from 'vite'
import postcss from './postcss.config.ts'
import path from 'path';
import { fileURLToPath } from 'url';
import tailwind from "@tailwindcss/vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Storybook recommends to use this standalone vite config to get an optimal experience.
 */
export default defineConfig({
  css: {
    /**
     * #20241220
     * HACK: To use postcss in TS, importing its content at here is the simplest way to make it work with Vite.
     * Currently, the only reason to use an independent postcss config is just for the separation of concerns,
     * and this way of usage will still be able to reach the tailwind config in the project root.
     */
    postcss
  },
  plugins: [
    tailwind(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '~': path.resolve(__dirname, '../'),
    },
  },
})
