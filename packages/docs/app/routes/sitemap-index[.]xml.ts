import { generateSitemapIndex } from "@forge42/seo-tools/sitemap"
import data from "#/data/repo.ts"

export const loader = async () => {
  const domain = data.domain;
  const today = new Date().toISOString().split('T')[0]; // e.g., "2024-07-17"
  const sitemaps = generateSitemapIndex([
    {
      url: `${domain}/sitemap/xml`,
      lastmod: today,
    },
  ])
  return new Response(sitemaps, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
