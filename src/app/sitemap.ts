import type { MetadataRoute } from "next";
import { portfolioCompanies } from "@/data/portfolio";

const BASE_URL = "https://wisdomera.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const portfolioRoutes = portfolioCompanies.map((c) => ({
    url: `${BASE_URL}/portfolio/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...portfolioRoutes,
  ];
}
