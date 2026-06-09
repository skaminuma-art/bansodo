import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const SERVICE_PATHS = [
  "/services/line",
  "/services/website",
  "/services/meo",
  "/services/sns",
  "/services/crm",
  "/services/ai",
  "/services/recruitment",
  "/services/support",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/salon-package`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...SERVICE_PATHS.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
