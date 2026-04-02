import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import SocialMediaContent from "./SocialMediaContent";

export const metadata: Metadata = {
  title: `Social Media Uitbesteden voor MKB | Automatisering & Content — ${siteDetails.siteName}`,
  description: `Social media uitbesteden aan StudioLee: AI-content, multi-platform scheduling en analytics. Professionele social media zonder dat je er tijd aan kwijt bent.`,
  openGraph: {
    title: `Social Media Uitbesteden — ${siteDetails.siteName}`,
    description: `Social media automatisering voor MKB. AI-content, multi-platform scheduling en rapportage.`,
    url: `${siteDetails.siteUrl}social-media`,
    type: "website",
    locale: "nl_NL",
  },
};

export default function SocialMediaPage() {
  return <SocialMediaContent />;
}
