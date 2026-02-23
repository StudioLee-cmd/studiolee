'use client';

import React, { useState } from 'react';

const categories = [
    {
        name: 'Sales',
        pills: [
            'AI Voice Agents',
            'Website Chatbots',
            { label: 'Automated Sales Decks', badge: 'NIEUW' },
            'Slimme Follow-ups',
            'WhatsApp Automatisering',
        ],
    },
    {
        name: 'Development',
        pills: [
            'Custom Web Apps (o.a. Booking)',
            'n8n Workflows',
            'Automatische Facturatie',
            'Automated Reporting',
            'CRM Snapshots',
        ],
    },
    {
        name: 'Content',
        pills: [
            'Automated Social Media',
            'UGC-Style Video Automation',
            'AI Afbeeldingen',
            'Video Automation (Reels/TikTok)',
        ],
    },
    {
        name: 'Optimalisatie',
        pills: [
            'CRO',
            'SEO Automatisering',
            'NFC QR Review Tools',
            'E-mail automation',
        ],
    },
];

type PillItem = string | { label: string; badge: string };

const SolutionsSlider: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <section className="w-full py-6 md:py-10 bg-gray-50/80 dark:bg-neutral-950/50 border-y border-gray-100 dark:border-neutral-800/50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Category Tabs */}
                <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
                    {categories.map((cat, idx) => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveCategory(idx)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === idx
                                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                                    : 'bg-white dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 border border-gray-200 dark:border-neutral-700'
                                }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Pills Slider */}
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50/80 dark:from-neutral-950/50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50/80 dark:from-neutral-950/50 to-transparent z-10 pointer-events-none" />

                    <div
                        className="flex items-center gap-3 overflow-x-auto pb-2 px-4 scrollbar-hide"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {categories[activeCategory].pills.map((pill: PillItem, idx: number) => {
                            const isObject = typeof pill === 'object';
                            const label = isObject ? pill.label : pill;
                            const badge = isObject ? pill.badge : null;

                            return (
                                <span
                                    key={idx}
                                    className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap bg-white dark:bg-neutral-800/80 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-neutral-700 cursor-default select-none transition-all duration-300 hover:border-primary/30 hover:text-gray-700 dark:hover:text-gray-300"
                                    title="Binnenkort beschikbaar"
                                >
                                    {label}
                                    {badge && (
                                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                                            ⚡️ {badge}
                                        </span>
                                    )}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Hide scrollbar CSS */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default SolutionsSlider;
