import type { MetadataRoute } from "next";
import brand from "@/lib/brand";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${brand.SITE_URL}/sitemap.xml`,
    host: brand.SITE_URL,
  };
}
