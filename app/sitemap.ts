import type { MetadataRoute } from "next"
import { siteUrl, staticRoutes } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changefreq: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }))
}
