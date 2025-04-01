import { reactRouterDevTools } from "react-router-devtools"
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
  plugins: [
    dynamicImport(),
    tailwindcss(),
    reactRouterDevTools(),
    reactRouter(),
    tsconfigPaths()
  ],
});
