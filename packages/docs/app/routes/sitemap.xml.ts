import { generateSitemap } from "@forge42/seo-tools/sitemap"
import data from "#/data/repo.ts"
import { componentUris } from "#/helpers/route"

export const loader = async () => {
  const routes = componentUris.filter(u => !u.includes("/recipe/"));
  routes.push("/", "/docs/get-started/introduction", "/docs/get-started/setup/read-me-first");
  const sitemap = await generateSitemap({
    domain: data.domain,
    routes: routes.map(route => ({ url: route })),
  });
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}