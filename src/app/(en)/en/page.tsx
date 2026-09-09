import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { en } from "@/content/en";
import { buildMetadata, organizationJsonLd } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(en);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(en)) }} />
      <HomePage t={en} />
    </>
  );
}
