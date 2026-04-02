import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
    kvk: string;
    btw: string;
    address: string;
    legalName: string;
} = {
    subheading: "STUDIOLEE helpt ambitieuze ondernemers groeien met slimme AI-oplossingen, marketing en automatisering. Wij regelen de techniek, zodat jij je kunt focussen op je bedrijf.",
    quickLinks: [
        { text: "Tarieven", url: "/tarieven" },
        { text: "Gratis Website", url: "/free-website" },
        { text: "Gratis AI Scan", url: "/free-trial" },
        { text: "Blog", url: "/blog" },
        { text: "Portfolio", url: "/portfolio" },
        { text: "AI Chatbot", url: "/chatbot" },
        { text: "AI Telefonist", url: "/voice-ai" },
        { text: "SEO & Vindbaarheid", url: "/seo" },
        { text: "Social Media", url: "/social-media" },
        { text: "Review Management", url: "/reviews" },
        { text: "Review Pakket", url: "/review-pakket" }
    ],
    email: 'tim@studiolee.nl',
    telephone: '+31612345678',
    socials: {
        instagram: 'https://www.instagram.com',
        linkedin: 'https://www.linkedin.com',
    },
    kvk: '98933353',
    btw: 'NL005362803B09',
    address: 'De Donge 9, 3448CJ, Woerden',
    legalName: 'DigitalStudioLee'
}