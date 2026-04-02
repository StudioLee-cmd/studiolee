import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import ChatbotContent from "./ChatbotContent";

export const metadata: Metadata = {
  title: `AI Chatbot voor je Bedrijf | 24/7 Leadopvang — ${siteDetails.siteName}`,
  description: `Een AI chatbot voor je bedrijf vangt klanten op, beantwoordt vragen en boekt afspraken — 24/7, ook buiten kantooruren. StudioLee bouwt chatbots voor 17+ branches.`,
  openGraph: {
    title: `AI Chatbot voor je Bedrijf — ${siteDetails.siteName}`,
    description: `Een AI chatbot vangt klanten op, beantwoordt vragen en boekt afspraken — 24/7. Gebouwd voor jouw branche.`,
    url: `${siteDetails.siteUrl}chatbot`,
    type: "website",
    locale: "nl_NL",
  },
};

export default function ChatbotPage() {
  return <ChatbotContent />;
}
