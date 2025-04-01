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
  /**
   * HACK: Below handles the common caveats that the lib not uses module-map correctly in their package.json.
   * The instruction of react-syntax-highlighter tells us to do something like:
   * ```
   * import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
   * ```
   * What this means is that, it bypasses the package's module resolution system (ie., `exports` field in package.json)
   * which tells Node.js which module system approach to use when process certain file
   * (ie., Node.js will process the import statement we shown above)
   * Since we direct to access the raw ESM file, Node.js then has no idea what approach to use, so it defaults to use CJS,
   * and that'll lead to a bug.
   *
   * To fix this:
   * 1. optimizeDeps will wrap the package into an ESM module, so that such stuff can totally be used in Vite without issue,
   *    and in that stuff, Vite also use/treat that package in a ESM way.
   * 2. But wrapping that in an ESM still not enough, cuz Node.js can still process that package directly,
   *    and that's why we need noExternal, which will prevent node.js to do that,
   *    and instead, Node.js will only process the wrapped one
   */
  optimizeDeps: {
    include: ['react-syntax-highlighter'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  ssr: {
    noExternal: ['react-syntax-highlighter']
  }
});
