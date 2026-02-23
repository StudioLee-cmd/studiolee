"use client";
import React, { useState } from 'react';
import Section from './Section';
import Container from './Container';
import { BsArrowRight, BsCameraVideo, BsLightningCharge } from 'react-icons/bs';
import ShinyText from './ShinyText';
import ConsultingFormModal from './ConsultingFormModal';

const ConsultingPricing = () => {
    const [loading, setLoading] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    return (
        <Section
            id="consulting"
            title="Start met Strategie"
            description="Geen standaard pakketten, maar persoonlijk advies. Boek een sessie met Tim."
        >
            <Container>
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

                <div className="max-w-3xl mx-auto bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-100 dark:border-yellow-900/30 rounded-2xl p-6 text-yellow-900 dark:text-yellow-100 text-sm text-center">
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

                <p className="text-center text-gray-400 mt-8 text-xs">
                    * Prijzen exclusief btw. Factuur wordt automatisch verzonden.
                </p>

                <ConsultingFormModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSuccess={handleFormSuccess}
                    callType={selectedType}
                />
            </Container>
        </Section>
    );
};

export default ConsultingPricing;
