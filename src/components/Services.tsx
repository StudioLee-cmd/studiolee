"use client";
import React from 'react';
import Section from './Section';
import Container from './Container';
import { BsGraphUp, BsPeople, BsPalette, BsStar, BsGear, BsCodeSlash, BsLightning, BsLink45Deg } from 'react-icons/bs';

const services = [
    {
        title: "Vindbaarheid in ChatGPT & Google",
        description: "Dominantie in AI-zoeksystemen én Google. Wij zorgen dat jouw klanten je vinden, ongeacht hoe ze zoeken.",
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
        title: "Automations (n8n)",
        description: "Slimme workflows die saai werk uit handen nemen. Van facturatie tot klantcontact.",
        icon: BsGear
    },
    {
        title: "Web Development",
        description: "Razendsnelle, moderne websites die bezoekers omzetten in betalende klanten.",
        icon: BsCodeSlash
    },
    {
        title: "CRO (Conversie)",
        description: "Optimalisatie van je site om meer rendement uit elke bezoeker te halen.",
        icon: BsLightning
    },
    {
        title: "Linkbuilding",
        description: "Vergroot je autoriteit en stijg in de zoekresultaten met kwalitatieve backlinks.",
        icon: BsLink45Deg
    }
];

const Services = () => {
    return (
        <Section
            id="services"
            title="Custom Services"
            description="Geen standaard werk, maar maatwerk perfect afgestemd op jouw bedrijf."
        >
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
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
