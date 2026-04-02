import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import VoiceAIContent from "./VoiceAIContent";

export const metadata: Metadata = {
  title: `AI Telefonist voor Bedrijven | Geen Oproep Meer Missen — ${siteDetails.siteName}`,
  description: `Een AI telefonist voor je bedrijf beantwoordt elke oproep, plant afspraken en stuurt samenvattingen via WhatsApp — 24/7. StudioLee bouwt Voice AI voor 17+ branches.`,
  openGraph: {
    title: `AI Telefonist voor Bedrijven — ${siteDetails.siteName}`,
    description: `Een AI telefonist beantwoordt elke oproep en plant afspraken — 24/7 bereikbaar, Nederlandstalig.`,
    url: `${siteDetails.siteUrl}voice-ai`,
    type: "website",
    locale: "nl_NL",
  },
};

export default function VoiceAIPage() {
  return <VoiceAIContent />;
}
