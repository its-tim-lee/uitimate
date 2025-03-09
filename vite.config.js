
import tailwind from "@tailwindcss/vite";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/**
 * HACK: currently, this file is literally just used for Builder to work in Astro,
 * cuz it'd try to search whether there're supported config files such as vite.config.[js|ts]
 */
export default {
  plugins: [
    tailwind(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}