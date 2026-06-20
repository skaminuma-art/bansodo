import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { isSiteLocked } from "@/lib/site-lock";

export default function robots(): MetadataRoute.Robots {
  if (isSiteLocked()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
