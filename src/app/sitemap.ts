import { MetadataRoute } from "next";
import { MAIN_ROUTES, LEGAL_ROUTES } from "@/data/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smartmeal.ai";

  const allRoutes = [...MAIN_ROUTES, ...LEGAL_ROUTES].map((route) => {
    // Strip anchors for the sitemap since they aren't distinct pages yet
    // In a real app with multi-page structure, these would map to real paths
    const path = route.href.split("#")[0]; 
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1.0 : 0.8,
    };
  });

  // Deduplicate URLs in case multiple hash routes point to '/'
  const uniqueUrls = new Map(allRoutes.map(item => [item.url, item])).values();

  return Array.from(uniqueUrls);
}
