import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import SEOContent from "./SEOContent";

export const metadata: Metadata = {
  title: `SEO Bureau voor MKB | AI Vindbaarheid & Contentmarketing — ${siteDetails.siteName}`,
  description: `StudioLee is het SEO bureau voor MKB-ondernemers. Wij combineren Ahrefs-onderzoek, AI-content en technische SEO om jouw bedrijf vindbaar te maken op Google en AI-zoekmachines.`,
  openGraph: {
    title: `SEO Bureau voor MKB — ${siteDetails.siteName}`,
    description: `SEO, AI-content en technische optimalisatie voor MKB-bedrijven. Gevonden worden op Google en ChatGPT.`,
    url: `${siteDetails.siteUrl}seo`,
    type: "website",
    locale: "nl_NL",
  },
};

export default function SEOPage() {
  return <SEOContent />;
}
