"use client";
import React from 'react';
import { FiTrendingUp, FiStar, FiClock } from 'react-icons/fi';
import Container from './Container';


const pillars = [
    {
        title: "De Omzet Generator",
        subtitle: "Vang Elke Lead",
        description: "Mis nooit meer een klus van €500+ omdat je bezig was. Voice AI & SMS vangt elke lead, 24/7.",
        icon: <FiTrendingUp size={32} />,
    },
    {
        title: "De Reputatie Bouwer",
        subtitle: "Domineer Google",
        description: "Rank #1 in jouw regio. Door slimme artikelen en 5-sterren reviews ben je altijd de eerste keuze.",
        icon: <FiStar size={32} />,
    },
    {
        title: "De Tijd Bespaarder",
        subtitle: "Geen Admin Meer",
        description: "Bespaar 10 uur per week. De AI regelt de planning, mails en vragen zodat jij kan vakwerk kan leveren.",
        icon: <FiClock size={32} />,
    }
];

const USPPillars: React.FC = () => {
    return (
        <section id="bento-grid" className="py-20 bg-white dark:bg-black">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-start p-10 rounded-[2.5rem] bg-hero-background border border-gray-100 dark:border-neutral-800 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                {React.cloneElement(pillar.icon as React.ReactElement, { size: 120, className: "text-primary" })}
                            </div>

                            <div className="p-4 rounded-2xl bg-white dark:bg-neutral-800 shadow-md mb-8 text-primary ring-4 ring-primary/10">
                                {pillar.icon}
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                                {pillar.title}
                            </h3>
                            <span className="text-sm font-bold uppercase tracking-widest text-primary mb-5 block">
                                {pillar.subtitle}
                            </span>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium relative z-10">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default USPPillars;
