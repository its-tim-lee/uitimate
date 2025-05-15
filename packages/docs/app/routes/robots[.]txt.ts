import { generateRobotsTxt } from "@forge42/seo-tools/robots"
import data from "#/data/repo.ts";

export async function loader({ request }: { request: Request }) {
  if (import.meta.env.MODE !== "production") return;
  const robotsTxt = generateRobotsTxt([
    {
      userAgent: "*",
      allow: ["/"],
      sitemap: [`${data.domain}/sitemap-index.xml`],
    },
  ])
  return new Response(robotsTxt, { headers: { "Content-Type": "text/plain" } })
}
