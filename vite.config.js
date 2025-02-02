import { builderDevTools } from "@builder.io/dev-tools/vite";
import tailwind from "@tailwindcss/vite";
/**
 * HACK: currently, this file is literally just used for Builder to work in Astro,
 * cuz it'd try to search whether there're supported config files such as vite.config.[js|ts]
 */
export default {
  plugins: [
    tailwind(),
    builderDevTools()
  ],
  // ssr: { noExternal: ["@builder.io/react"] },
}