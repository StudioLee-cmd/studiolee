import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import ReviewPakketContent from "./ReviewPakketContent";

export const metadata: Metadata = {
  title: `Review Pakket voor MKB | NFC Kaarten & Automatisering — ${siteDetails.siteName}`,
  description: `Review pakket met NFC-kaarten, geautomatiseerde review flows en Google integratie. Verzamel moeiteloos 5-sterren reviews. Bekijk pakketten en prijzen.`,
  openGraph: {
    title: `Review Pakket — ${siteDetails.siteName}`,
    description: `NFC review kaarten + geautomatiseerde flows. Meer Google reviews voor jouw bedrijf.`,
    url: `${siteDetails.siteUrl}review-pakket`,
    type: "website",
    locale: "nl_NL",
  },
};

export default function ReviewPakketPage() {
  return <ReviewPakketContent />;
}
