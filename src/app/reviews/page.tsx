import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: `Google Reviews Automatiseren | Review Management — ${siteDetails.siteName}`,
  description: `Automatiseer het verzamelen van Google reviews met StudioLee. NFC-kaarten, geautomatiseerde flows en slimme opvolging — meer 5-sterren reviews zonder moeite.`,
  openGraph: {
    title: `Google Reviews Automatiseren — ${siteDetails.siteName}`,
    description: `Meer Google reviews verzamelen met NFC-kaarten en geautomatiseerde flows. Review management voor MKB.`,
    url: `${siteDetails.siteUrl}reviews`,
    type: "website",
    locale: "nl_NL",
  },
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
