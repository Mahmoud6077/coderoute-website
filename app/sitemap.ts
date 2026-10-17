import type { MetadataRoute } from "next";
import { locales, site } from "@/lib/site";

// Update when page content changes, so search engines know to re-read it.
const LAST_UPDATED = new Date("2026-10-17");

const pages = [
  { path: "", changeFrequency: "monthly" as const, priority: 1 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((lang) => ({
      url: `${site.url}/${lang}${path}`,
      lastModified: LAST_UPDATED,
      changeFrequency,
      priority,
      // Tells Google the English and Arabic pages are translations of each other.
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])) },
    })),
  );
}
