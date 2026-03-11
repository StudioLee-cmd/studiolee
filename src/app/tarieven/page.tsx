"use client";
import React, { useState } from 'react';
import Container from '@/components/Container';
import { BsArrowRight, BsLightningCharge, BsCameraVideo, BsRocket, BsTools, BsHeadset } from 'react-icons/bs';
import ShinyText from '@/components/ShinyText';
import ConsultingFormModal from '@/components/ConsultingFormModal';
import FreeTrialModal from '@/components/FreeTrialModal';
import Link from 'next/link';
import { serviceOfferSchema, breadcrumbSchema } from '@/utils/schema';

const pricingTiers = [
    {
        id: 'saas',
        name: 'AI SaaS',
        subtitle: 'Volledig DIY',
        price: '€79',
        priceSuffix: '/m',
        pricePrefix: 'Vanaf',
        description: 'Toegang tot het platform, tickets & feature requests.',
        icon: BsRocket,
        features: [
            'Toegang tot AI platform',
            'Zelf configureren & beheren',
            'Ticket support',
            'Feature requests indienen',
            'Maandelijks opzegbaar',
        ],
        cta: 'Start Gratis',
        highlighted: false,
    },
    {
        id: 'build',
        name: 'One-Time Build',
        subtitle: 'Custom Build-out',
        price: '€1.000',
        priceSuffix: '',
        pricePrefix: 'Vanaf',
        description: 'Geen maandelijkse kosten. Betaal alleen voor gebruik (Vapi/OpenAI).',
        icon: BsTools,
        features: [
            'Volledig custom gebouwd',
            'Geen maandelijkse kosten',
            'Betaal alleen voor gebruik',
            'Vapi / OpenAI integratie',
            'Eenmalige investering',
        ],
        cta: 'Vraag Offerte Aan',
        highlighted: true,
    },
    {
        id: 'managed',
        name: 'Managed Service',
        subtitle: 'KPI Focused',
        price: 'Op aanvraag',
        priceSuffix: '',
        pricePrefix: '',
        description: 'Volledige ontzorging. Wij bouwen en optimaliseren op basis van jouw targets.',
        icon: BsHeadset,
        features: [
            'Volledige ontzorging',
            'KPI-gestuurd werken',
            'Continu optimaliseren',
            'Dedicated accountmanager',
            'Strategische begeleiding',
        ],
        cta: 'Neem Contact Op',
        highlighted: false,
    },
];

const TarievenPage = () => {
    const [loading, setLoading] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const [selectedType, setSelectedType] = useState<'laser' | 'roadmap'>('laser');

    const handleOpenModal = (type: 'laser' | 'roadmap') => {
        setSelectedType(type);
        setIsModalOpen(true);
    };

    const handleFormSuccess = () => {
        setIsModalOpen(false);
        handlePayment(selectedType);
    };

    const handlePayment = async (type: 'laser' | 'roadmap') => {
        setLoading(type);
        try {
            const price = type === 'laser' ? '179.00' : '279.00';
            const description = type === 'laser' ? 'Laser Call (15 min) - Studio Lee' : 'Roadmap Call (30 min) - Studio Lee';

            const response = await fetch('/api/create-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: price, description, type }),
            });

            const data = await response.json();
            if (data.checkoutUrl) {
                window.location.href = data.checkoutUrl;
            } else {
                console.error("Payment creation failed", data);
                alert(`Er ging iets mis: ${data.error || 'Onbekende fout'}`);
            }
        } catch (error: any) {
            console.error(error);
            alert(`Er is een fout opgetreden: ${error.message}`);
        } finally {
            setLoading(null);
        }
    };

    const services = pricingTiers.map(tier => ({
        name: tier.name,
        description: tier.description,
        ...(tier.price !== 'Op aanvraag' && { price: tier.price.replace('€', '').replace('.', '') }),
    }));

    return (
        <main className="pt-28 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceOfferSchema(services)) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
                    { name: 'Home', url: 'https://studiolee.nl' },
                    { name: 'Tarieven', url: 'https://studiolee.nl/tarieven' },
                ])) }}
            />
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                        Tarieven
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-gray-900 dark:text-white tracking-tight mb-4">
                        Kies jouw model
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Drie heldere opties. Geen verborgen kosten. Van zelfstandig aan de slag tot volledige ontzorging.
                    </p>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                    {pricingTiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`relative rounded-3xl p-8 border transition-all hover:shadow-2xl group ${tier.highlighted
                                    ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 text-white shadow-xl scale-[1.02]'
                                    : 'bg-white dark:bg-neutral-900 border-gray-100 dark:border-neutral-800 shadow-lg'
                                }`}
                        >
                            {/* Popular badge */}
                            {tier.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary text-white shadow-lg shadow-primary/30">
                                        Populair
                                    </span>
                                </div>
                            )}

                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${tier.highlighted
                                    ? 'bg-white/20 text-white'
                                    : 'bg-primary/10 text-primary'
                                }`}>
                                <tier.icon size={24} />
                            </div>

                            {/* Title & Subtitle */}
                            <h2 className={`text-2xl font-bold mb-1 ${tier.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                                }`}>
                                {tier.name}
                            </h2>
                            <p className={`text-sm font-medium mb-4 ${tier.highlighted ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'
                                }`}>
                                {tier.subtitle}
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 mb-4">
                                {tier.pricePrefix && (
                                    <span className={`text-sm ${tier.highlighted ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'
                                        }`}>
                                        {tier.pricePrefix}
                                    </span>
                                )}
                                <span className={`text-4xl font-black ${tier.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                                    }`}>
                                    {tier.price}
                                </span>
                                {tier.priceSuffix && (
                                    <span className={`${tier.highlighted ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400'
                                        }`}>
                                        {tier.priceSuffix}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className={`text-sm mb-6 ${tier.highlighted ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'
                                }`}>
                                {tier.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-green-400' : 'text-green-500'
                                            }`} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className={`text-sm ${tier.highlighted ? 'text-gray-200' : 'text-gray-700 dark:text-gray-300'
                                            }`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            {tier.id === 'saas' ? (
                                <button
                                    onClick={() => setIsSignupModalOpen(true)}
                                    className={`flex items-center justify-center w-full py-4 rounded-xl font-bold transition-all gap-2 ${tier.highlighted
                                            ? 'bg-white text-gray-900 hover:bg-gray-100'
                                            : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                                        }`}
                                >
                                    {tier.cta} <BsArrowRight />
                                </button>
                            ) : (
                                <a
                                    href="https://calendly.com/tim-studiolee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center w-full py-4 rounded-xl font-bold transition-all gap-2 ${tier.highlighted
                                            ? 'bg-white text-gray-900 hover:bg-gray-100'
                                            : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                                        }`}
                                >
                                    {tier.cta} <BsArrowRight />
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 max-w-4xl mx-auto mb-12">
                    <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-800" />
                    <span className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Of start met een gesprek</span>
                    <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-800" />
                </div>

                {/* Consulting Calls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {/* Laser Call */}
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-gray-100 dark:border-neutral-800 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-primary/20 text-blue-600 dark:text-primary rounded-2xl flex items-center justify-center mb-6">
                                <BsLightningCharge size={24} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Laser Call</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-black text-gray-900 dark:text-white">€179</span>
                                <span className="text-gray-500 dark:text-gray-400">/ 15 min</span>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 mb-8 min-h-[3rem]">
                                Twijfel je nog? Of weet je nog niet precies wat je nodig hebt? We bespreken je situatie kort.
                                <span className="block mt-2 text-xs font-semibold text-blue-600 dark:text-primary">* Kosten worden in mindering gebracht bij samenwerking.</span>
                            </p>

                            <button
                                onClick={() => handleOpenModal('laser')}
                                disabled={loading === 'laser'}
                                className="flex items-center justify-center w-full py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading === 'laser' ? 'Momentje...' : <>Start Je Groei Nu <BsArrowRight /></>}
                            </button>
                        </div>
                    </div>

                    {/* Roadmap Call */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group text-white">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6">
                                <BsCameraVideo size={24} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">Roadmap Call</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-black text-white">€279</span>
                                <span className="text-gray-400">/ 30 min</span>
                            </div>

                            <p className="text-gray-300 mb-8 min-h-[3rem]">
                                Jij hebt vragen, ik heb antwoorden. Inclusief voorbereiding en direct een strategieplan.
                                <span className="block mt-2 text-xs font-semibold text-green-400">* Kosten worden in mindering gebracht bij samenwerking.</span>
                            </p>

                            <button
                                onClick={() => handleOpenModal('roadmap')}
                                disabled={loading === 'roadmap'}
                                className="flex items-center justify-center w-full py-4 rounded-xl bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading === 'roadmap' ? 'Momentje...' : <><ShinyText text="Start Je Groei Nu" speed={3} color="#1f2937" shineColor="#3b82f6" /> <BsArrowRight /></>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Info Box */}
                <div className="max-w-3xl mx-auto bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-100 dark:border-yellow-900/30 rounded-2xl p-6 text-yellow-900 dark:text-yellow-100 text-sm text-center mb-8">
                    <p className="font-bold mb-2">📅 Let op: Agenda & Voorbereiding</p>
                    <p>
                        Ik heb <strong>minimaal 7 dagen</strong> nodig om me in te lezen in jouw situatie.
                        Na betaling ontvang je direct the link naar mijn agenda om een moment te kiezen (minimaal 7 dagen in de toekomst).
                    </p>
                    <p className="mt-3 text-yellow-700 dark:text-yellow-400/80 italic">
                        Spoedklus (morgen)? Mail naar <a href="mailto:tim@studiolee.nl" className="underline font-semibold text-yellow-800 dark:text-yellow-300">tim@studiolee.nl</a>.
                        We kijken of er plek is (toeslag van toepassing).
                    </p>
                </div>

                <p className="text-center text-gray-400 mt-4 text-xs">
                    * Prijzen exclusief btw. Factuur wordt automatisch verzonden.
                </p>

                <ConsultingFormModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSuccess={handleFormSuccess}
                    callType={selectedType}
                />

                <FreeTrialModal
                    isOpen={isSignupModalOpen}
                    onClose={() => setIsSignupModalOpen(false)}
                    isAnnual={false}
                />
            </Container>
        </main>
    );
};

export default TarievenPage;