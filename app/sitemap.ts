import type { MetadataRoute } from "next";
import brand from "@/lib/brand";

export const dynamic = "force-static";

const base = brand.SITE_URL;

const routes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/",                      priority: 1.0, changeFrequency: "weekly" },
  { url: "/product",               priority: 0.9, changeFrequency: "weekly" },
  { url: "/solutions/managers",    priority: 0.8, changeFrequency: "monthly" },
  { url: "/solutions/supervisors", priority: 0.8, changeFrequency: "monthly" },
  { url: "/solutions/agents",      priority: 0.8, changeFrequency: "monthly" },
  { url: "/security",              priority: 0.7, changeFrequency: "monthly" },
  { url: "/pricing",               priority: 0.9, changeFrequency: "weekly" },
  { url: "/demo",                  priority: 1.0, changeFrequency: "monthly" },
  { url: "/legal/privacy",         priority: 0.3, changeFrequency: "yearly" },
  { url: "/legal/terms",           priority: 0.3, changeFrequency: "yearly" },
  { url: "/legal/cookies",         priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${base}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
