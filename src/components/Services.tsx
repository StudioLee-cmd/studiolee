"use client";
import React, { useState } from 'react';
import Section from './Section';
import Container from './Container';
import {
    BsGraphUp, BsPeople, BsPalette, BsStar, BsGear, BsCodeSlash,
    BsLightning, BsLink45Deg, BsMic, BsChatDots, BsFileEarmarkSlides,
    BsBell, BsWhatsapp, BsKanban, BsReceipt, BsBarChart, BsPersonVcard,
    BsCameraVideo, BsImage, BsCameraReels, BsSearch, BsEnvelope
} from 'react-icons/bs';

type ServiceItem = {
    title: string;
    description: string;
    icon: React.ComponentType<{ size: number }>;
    isNew?: boolean;
};

type ServiceCategory = {
    id: string;
    label: string;
    services: ServiceItem[];
};

const categories: ServiceCategory[] = [
    {
        id: 'all',
        label: 'Alles',
        services: [
            {
                title: "AI & Google Vindbaarheid",
                description: "Dominantie in ChatGPT en Google. Wij zorgen dat jouw klanten je vinden, ongeacht welk platform ze gebruiken.",
                icon: BsGraphUp
            },
            {
                title: "Social Media",
                description: "Van content creatie tot beheer. Wij bouwen een community rondom jouw merk.",
                icon: BsPeople
            },
            {
                title: "High-End Branding",
                description: "Een uitstraling die klopt. Logo's, huisstijl en visuals die vertrouwen wekken.",
                icon: BsPalette
            },
            {
                title: "Review Management",
                description: "Verzamel en beheer 5-sterren reviews volledig automatisch met onze NFC & QR tools.",
                icon: BsStar
            },
            {
                title: "Automations",
                description: "Slimme n8n workflows die saai werk uit handen nemen. Van facturatie tot complex klantcontact.",
                icon: BsGear
            },
            {
                title: "Web Development",
                description: "Razendsnelle, moderne websites die bezoekers omzetten in betalende klanten.",
                icon: BsCodeSlash
            },
            {
                title: "Conversie Optimalisatie",
                description: "CRO-technieken die je site optimaliseren om meer rendement uit elke bezoeker te halen.",
                icon: BsLightning
            },
            {
                title: "Linkbuilding",
                description: "Vergroot je autoriteit en stijg in de zoekresultaten met kwalitatieve backlinks.",
                icon: BsLink45Deg
            },
        ],
    },
    {
        id: 'sales',
        label: 'Sales',
        services: [
            {
                title: "AI Voice Agents",
                description: "Automatische AI-gestuurde telefoongesprekken die leads kwalificeren en afspraken inplannen.",
                icon: BsMic
            },
            {
                title: "Website Chatbots",
                description: "Slimme chatbots die 24/7 vragen beantwoorden en bezoekers converteren naar klanten.",
                icon: BsChatDots
            },
            {
                title: "Automated Sales Decks",
                description: "AI-gegenereerde presentaties die automatisch worden samengesteld op basis van klantdata.",
                icon: BsFileEarmarkSlides,
                isNew: true
            },
            {
                title: "Slimme Follow-ups",
                description: "Geautomatiseerde opvolgingen die op het juiste moment de juiste boodschap sturen.",
                icon: BsBell
            },
            {
                title: "WhatsApp Automatisering",
                description: "Automatische WhatsApp-berichten voor bevestigingen, reminders en klantcommunicatie.",
                icon: BsWhatsapp
            },
        ],
    },
    {
        id: 'development',
        label: 'Development',
        services: [
            {
                title: "Custom Web Apps (o.a. Booking)",
                description: "Op maat gemaakte webapplicaties zoals boekingssystemen, portals en dashboards.",
                icon: BsCodeSlash
            },
            {
                title: "n8n Workflows",
                description: "Krachtige automatiseringsworkflows die al je tools en systemen naadloos verbinden.",
                icon: BsKanban
            },
            {
                title: "Automatische Facturatie",
                description: "Facturen die zichzelf aanmaken, versturen en opvolgen. Nooit meer handmatig factureren.",
                icon: BsReceipt
            },
            {
                title: "Automated Reporting",
                description: "Real-time dashboards en rapporten die automatisch worden gegenereerd en verstuurd.",
                icon: BsBarChart
            },
            {
                title: "CRM Snapshots",
                description: "Directe overzichten van je klantdata, pipeline en prestaties in één oogopslag.",
                icon: BsPersonVcard
            },
        ],
    },
    {
        id: 'content',
        label: 'Content',
        services: [
            {
                title: "Automated Social Media",
                description: "Content die zichzelf plant, publiceert en optimaliseert op al je kanalen.",
                icon: BsPeople
            },
            {
                title: "UGC-Style Video Automation",
                description: "Authentieke, user-generated style video's automatisch geproduceerd met AI.",
                icon: BsCameraVideo
            },
            {
                title: "AI Afbeeldingen",
                description: "Professionele visuals en afbeeldingen gegenereerd met AI, klaar voor publicatie.",
                icon: BsImage
            },
            {
                title: "Video Automation (Reels/TikTok)",
                description: "Korte, virale video's automatisch gecreëerd en geoptimaliseerd voor social media.",
                icon: BsCameraReels
            },
        ],
    },
    {
        id: 'optimalisatie',
        label: 'Optimalisatie',
        services: [
            {
                title: "CRO",
                description: "Conversie Rate Optimalisatie die elke bezoeker maximaal benut voor meer omzet.",
                icon: BsLightning
            },
            {
                title: "SEO Automatisering",
                description: "Geautomatiseerde SEO-taken zoals technical audits, keyword monitoring en content optimalisatie.",
                icon: BsSearch
            },
            {
                title: "NFC Review Tools",
                description: "Slimme NFC-kaarten en QR-codes waarmee klanten moeiteloos reviews achterlaten.",
                icon: BsStar
            },
            {
                title: "E-mail Warm-up",
                description: "Verhoog je e-mail deliverability met geautomatiseerde warm-up en reputatieopbouw.",
                icon: BsEnvelope
            },
        ],
    },
];

const Services = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const currentServices = categories[activeCategory].services;

    return (
        <Section
            id="services"
            title="Custom Services"
            description="Geen standaard werk, maar maatwerk perfect afgestemd op jouw bedrijf."
        >
            <Container>
                {/* Category Tabs */}
                <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
                    {categories.map((cat, idx) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(idx)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === idx
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-neutral-700 border border-gray-200 dark:border-neutral-700'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {currentServices.map((service, index) => (
                        <div key={index} className="relative p-6 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 hover:bg-white dark:hover:bg-neutral-800 border border-gray-100 dark:border-neutral-800 hover:border-blue-100 dark:hover:border-primary/50 hover:shadow-lg transition-all group">
                            {service.isNew && (
                                <span className="absolute top-3 right-3 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                                    ⚡️ NIEUW
                                </span>
                            )}
                            <div className="w-12 h-12 bg-white dark:bg-neutral-900 text-blue-600 dark:text-primary rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-blue-600 dark:group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default Services;
