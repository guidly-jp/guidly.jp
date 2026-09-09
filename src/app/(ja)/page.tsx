import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { ja } from "@/content/ja";
import { buildMetadata, organizationJsonLd } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata(ja);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(ja)) }} />
      <HomePage t={ja} />
    </>
  );
}
