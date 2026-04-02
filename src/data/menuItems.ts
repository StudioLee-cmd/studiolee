import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "AI Chatbot", url: "/chatbot" },
            { text: "AI Telefonist", url: "/voice-ai" },
            { text: "SEO & Vindbaarheid", url: "/seo" },
            { text: "Social Media", url: "/social-media" },
            { text: "Review Management", url: "/reviews" },
            { text: "Review Pakket", url: "/review-pakket" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/free-trial"
    },
    {
        text: "Gratis Website",
        url: "/free-website"
    },
    {
        text: "Blog",
        url: "/blog"
    },
    {
        text: "Portfolio",
        url: "/portfolio"
    }
];
