import type { MetadataRoute } from "next";

import { newsArticles } from "@/lib/mock-data";

const BASE_URL = "https://www.springfes.com";

const staticRoutes = ["", "/about", "/contact", "/culture", "/news"];

const serviceSlugs = [
  "store-operations",
  "logistics",
  "customer-service",
  "it-solutions",
  "live-streaming",
  "creative-studio",
  "brand-growth",
  "shop-operations",
  "warehouse-logistics",
  "content-live",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pageEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
  }));

  const newsEntries: MetadataRoute.Sitemap = newsArticles.map((article) => ({
    url: `${BASE_URL}/news/${article.slug}`,
    lastModified: article.date,
  }));

  return [...pageEntries, ...serviceEntries, ...newsEntries];
}
