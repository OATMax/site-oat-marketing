import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { SEGMENTS } from "@/lib/segments";
import { getPostSlugs } from "@/lib/sanity.client";

const BASE = "https://oatmarketing.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes = ["", "/about", "/services", "/blog", "/contact", "/careers"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const segmentRoutes = SEGMENTS.map((s) => ({
    url: `${BASE}/who-we-work-with/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const slugs = await getPostSlugs();
  const blogRoutes = slugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...segmentRoutes, ...blogRoutes];
}
