"use client";
import React from 'react';
import Section from './Section';
import Container from './Container';
import { BsGraphUp, BsPeople, BsPalette, BsStar, BsGear, BsCodeSlash, BsLightning, BsLink45Deg } from 'react-icons/bs';

const services = [
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
                        <div key={index} className="p-6 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 hover:bg-white dark:hover:bg-neutral-800 border border-gray-100 dark:border-neutral-800 hover:border-blue-100 dark:hover:border-primary/50 hover:shadow-lg transition-all group">
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
