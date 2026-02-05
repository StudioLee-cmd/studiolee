import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Self Service',
        price: 75, // €75 p/m (Excl BTW) Betaal per jaar
        priceMonthly: 129,
        ctaType: 'trial',
        features: [
            'DIY (Doe het zelf)',
            'Toegang tot Software + AI Tools',
            'Zelf posten & reviews beheren',
            'Geen calls',
            'Video tutorials',
            '24/7 Support via Chat'
        ],
        focus: 'Focus: Voor de doe-het-zelver.',
        savings: '€ 648,- korting per jaar',
    },
    {
        name: 'Pro',
        price: 379,
        priceMonthly: 379,
        ctaType: 'options',
        guarantee: true,
        stripeMonthly: 'https://buy.stripe.com/14AcN68ahdreb475p4bjW09',
        stripeYearly: 'https://buy.stripe.com/9B65kEeyF72Q8VZ6t8bjW0b',
        features: [
            'Content Machine',
            '1x AI/Google Blog p/w',
            '4x Social Media posts p/w',
            'Review Management',
            '15 min strategie call p/m',
            'Maandelijks rapport',
            'Geen Ads',
            'Managed Dashboard & Setup'
        ],
        focus: 'Focus: MKB - Externe high-end software service.',
        savings: 'Meest Gekozen',
    },
    {
        name: 'Elite',
        price: 579,
        priceMonthly: 579,
        ctaType: 'options',
        guarantee: true,
        stripeMonthly: 'https://buy.stripe.com/bJe6oIaip86U6NR6t8bjW0a',
        stripeYearly: 'https://buy.stripe.com/8x2cN6bmtcna1tx8BgbjW0c',
        features: [
            'Growth Machine',
            '2x AI/Google Blogs p/w',
            '8x Social Media posts p/w',
            '2x Oude Artikelen updaten p/w',
            'Meta Ads Management (Standaard)',
            '30 min strategie call p/m',
            'Maandelijks rapport',
            'Physical Review Solutions (NFC/QR)'
        ],
        focus: 'Focus: Best Value - Maximale inzet & dominantie.',
        savings: 'Compleet',
    },
    {
        name: 'Full Service',
        price: 999,
        priceMonthly: 999,
        pricePrefix: 'Vanaf',
        ctaType: 'call',
        guarantee: true,
        features: [
            'Partner Model',
            'Alles Custom (SEO, Socials, Ads)',
            'Linkbuilding inbegrepen',
            'Sales systeem optimalisatie',
            '60 min strategie call p/m',
            'Fysieke Marketing (DM/Flyers)',
            'Strategie op Locatie (Optioneel)'
        ],
        focus: 'Focus: Het complete pakket voor marketingsucces.',
        savings: 'Premium',
    },
]

export const consulting = [
    {
        name: 'Laser Call (15 min)',
        price: 179,
        description: 'Twijfel je nog of heb je specifieke vragen? We bespreken je situatie.',
        link: 'https://calendly.com/studiolee/laser-call' // Placeholder
    },
    {
        name: 'Roadmap Call (30 min)',
        price: 279,
        description: 'Ik bereid me voor en we maken direct een strategieplan face-to-face. Kosten deductible.',
        link: 'https://calendly.com/studiolee/roadmap-call' // Placeholder
    }
];

export const physicalProducts = [
    {
        name: 'Small Pakket',
        price: 179,
        description: 'Voor de starter. Kleine oplage bordjes/stickers (NFC/QR).',
    },
    {
        name: 'Large Pakket',
        price: 279,
        description: 'Voor de grotere zaak. Grote oplage bordjes/stickers.',
    }
];

export const addOns = [
    {
        name: 'AI Dominance Scan (Geo)',
        price: 800,
        description: 'Complete Enterprise-level analyse over AI-vindbaarheid voor jouw regio.',
        oneTime: true
    },
    {
        name: 'Branding Pakket',
        price: '799+',
        description: 'Logo’s, campagne-concepten en store-ideeën.',
        oneTime: true
    },
    {
        name: 'Extra Ad Campagne',
        price: 250,
        description: 'Setup kosten voor een extra campagne.',
        oneTime: true
    },
    {
        name: 'Custom n8n Workflow',
        price: '500 - 5.000',
        description: 'Specifieke automatiseringen op maat gemaakt.',
        oneTime: true
    }
];