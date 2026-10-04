import type { MetadataRoute } from "next";
import { locales, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) => [
    { url: `${site.url}/${lang}`, changeFrequency: "monthly" as const, priority: 1 },
    { url: `${site.url}/${lang}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
  ]);
}
