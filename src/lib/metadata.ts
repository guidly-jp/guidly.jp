import type { Metadata } from "next";
import { SITE_URL, LINKS } from "./site";
import type { SiteContent } from "@/content/types";

export function buildMetadata(t: SiteContent): Metadata {
  const alternates = { ja: "/", en: "/en/", "x-default": "/" };
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: t.path, languages: alternates },
    openGraph: {
      type: "website",
      url: t.path,
      siteName: "Guidly, Inc.",
      title: t.meta.ogTitle,
      description: t.meta.description,
      locale: t.lang === "ja" ? "ja_JP" : "en_US",
      images: [{ url: "/images/ogp.jpg", width: 1200, height: 630, alt: "Guidly, Inc." }],
    },
    twitter: { card: "summary_large_image", title: t.meta.ogTitle, description: t.meta.description, images: ["/images/ogp.jpg"] },
    icons: { icon: "/favicon.ico" },
    robots: { index: true, follow: true },
  };
}

/** Organization 構造化データ（良い税理士の運営組織としての実体） */
export function organizationJsonLd(t: SiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t.lang === "ja" ? "ガイドリー株式会社" : "Guidly, Inc.",
    alternateName: t.lang === "ja" ? "Guidly, Inc." : "ガイドリー株式会社",
    url: SITE_URL,
    logo: `${SITE_URL}/images/ogp.jpg`,
    foundingDate: "2025-05",
    founder: { "@type": "Person", name: t.lang === "ja" ? "宮田 巧" : "Takumi Miyata" },
    address: {
      "@type": "PostalAddress",
      streetAddress: t.lang === "ja" ? "南1条西2丁目1-2 木NINARU BLDG. TREEBASE" : "Minami 1-jo Nishi 2-chome 1-2, Ki NINARU Bldg. TREEBASE",
      addressLocality: t.lang === "ja" ? "札幌市中央区" : "Chuo-ku, Sapporo",
      addressRegion: t.lang === "ja" ? "北海道" : "Hokkaido",
      postalCode: "060-0061",
      addressCountry: "JP",
    },
    sameAs: [LINKS.yoiZeirishi, LINKS.taxmatch],
  };
}
