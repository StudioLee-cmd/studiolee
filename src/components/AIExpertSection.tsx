"use client";
import React from 'react';
import Container from './Container';
import { BsBraces, BsPersonCheck, BsShieldCheck } from 'react-icons/bs';

const pillars = [
    {
        icon: <BsBraces size={28} />,
        title: "AI-First",
        subtitle: "Snelheid & Schaal",
        description: "Wij zetten AI in waar het écht waarde toevoegt: snelheid, consistentie en schaalbaarheid. Van content tot workflows — AI doet het zware werk, razendsnel."
    },
    {
        icon: <BsPersonCheck size={28} />,
        title: "Expert Human-in-the-Loop",
        subtitle: "Senior Vakkennis Stuurt AI Aan",
        description: "AI zonder vakkennis levert middelmatige resultaten. Onze senior specialisten in SEO, CRO, web development en marketing sturen de AI aan. Wij hebben de frameworks al uitgewerkt — jij profiteert direct."
    },
    {
        icon: <BsShieldCheck size={28} />,
        title: "Garantie op Maat",
        subtitle: "Eerlijk Over Haalbaarheid",
        description: "Wij automatiseren 100% alleen waar het bewezen werkt. Geen loze beloftes. Wij zijn eerlijk over wat haalbaar is en bieden daarom garanties op maat — afgestemd op jouw specifieke situatie."
    }
];

const AIExpertSection: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-white dark:bg-black relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <Container>
                <div className="text-center mb-16 relative z-10">
                    <span className="inline-block text-sm font-bold uppercase tracking-widest text-primary mb-4">
                        Onze Aanpak
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
                        AI-Powered. <span className="text-primary">Expert-Driven.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Veel bureaus gooien AI op het probleem en hopen op het beste. Wij doen het anders.
                        Onze senior experts sturen de AI aan met jarenlange vakkennis — zodat je niet alleen snelle, maar ook de <strong className="text-gray-700 dark:text-gray-300">beste</strong> resultaten krijgt.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className={`group relative flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-300 h-full ${index === 1
                                    ? 'bg-gray-900 dark:bg-white border-gray-800 dark:border-gray-200 shadow-2xl scale-[1.02]'
                                    : 'bg-gray-50 dark:bg-neutral-900 border-gray-100 dark:border-neutral-800 hover:border-primary/30 hover:shadow-lg'
                                }`}
                        >
                            {/* Icon */}
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${index === 1
                                    ? 'bg-primary text-white'
                                    : 'bg-primary/10 text-primary'
                                }`}>
                                {pillar.icon}
                            </div>

                            {/* Title */}
                            <h3 className={`text-2xl font-bold mb-2 tracking-tight ${index === 1
                                    ? 'text-white dark:text-gray-900'
                                    : 'text-gray-900 dark:text-white'
                                }`}>
                                {pillar.title}
                            </h3>

                            {/* Subtitle */}
                            <span className={`text-sm font-bold uppercase tracking-widest mb-5 block ${index === 1
                                    ? 'text-primary'
                                    : 'text-primary'
                                }`}>
                                {pillar.subtitle}
                            </span>

                            {/* Description */}
                            <p className={`leading-relaxed text-base font-medium ${index === 1
                                    ? 'text-gray-300 dark:text-gray-600'
                                    : 'text-gray-600 dark:text-gray-400'
                                }`}>
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom trust line */}
                <div className="mt-12 text-center relative z-10">
                    <p className="text-sm text-gray-400 dark:text-gray-500 italic">
                        &quot;AI zonder expert is een gok. Wij maken het een zekerheid.&quot;
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default AIExpertSection;
