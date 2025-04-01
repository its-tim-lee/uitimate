import type { Config } from "@react-router/dev/config";
import { componentUris } from "#/helpers/route";

export default {
  // Though it's a global setting, individual routes can still be statically pre-rendered. Routes can also use client data loading with clientLoader to avoid server rendering/fetching for their portion of the UI.
  ssr: true,
  /**
   * When `prenreder: true`,
   *  It means all static paths (no dynamic segments like "/post/:slug")
   * When `ssr: false`,
   * - without prerender setting, the entire app will be a SPA.
   * - when prerender is only for certain routes, the others will be SPA.
   */
  async prerender({ getStaticPaths }) {
    return [
      ...getStaticPaths(),
      ...componentUris
    ];
  },
} satisfies Config;
