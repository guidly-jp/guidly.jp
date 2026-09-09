import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, alternates: { languages: { ja: `${SITE_URL}/`, en: `${SITE_URL}/en/` } } },
    { url: `${SITE_URL}/en/`, lastModified, alternates: { languages: { ja: `${SITE_URL}/`, en: `${SITE_URL}/en/` } } },
    { url: `${SITE_URL}/privacy/`, lastModified },
  ];
}
