"use client";
import Link from "next/link";
import React, { useState } from 'react';
import { BsCheckCircleFill, BsStars } from "react-icons/bs";
import PricingColumn from "./PricingColumn";
import FreeTrialModal from "../FreeTrialModal";
import PurchaseOptionsModal from "../PurchaseOptionsModal";
import GuaranteeSection from "./GuaranteeSection";
import { tiers } from "@/data/pricing";
import { IPricing } from "@/types";

const UnlimitedOptionBlock = () => {
    return (
        <div className="max-w-4xl mx-auto mt-12 cursor-pointer relative z-20">
            <div className="block relative group overflow-hidden rounded-3xl">
                <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-1 rounded-3xl shadow-xl transition-transform hover:scale-[1.01] duration-300">
                    <div className="bg-white dark:bg-neutral-900 rounded-[22px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden h-full">
                        <div className="relative z-10 flex-1 text-center md:text-left">
                            <h3 className="text-2xl lg:text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2 flex items-center justify-center md:justify-start gap-3">
                                🚀 Unlimited Option
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 font-medium text-lg mb-2">
                                Upgrade naar onbeperkt gebruik van <strong>Voice AI en alle workflows</strong>.
                            </p>
                            <p className="text-xs text-gray-400 italic max-w-2xl leading-relaxed">
                                *Kan op elk moment wijzigen. Exclusief de premium-versies van de AI's (Credits). Bevat wel alle standaard tools voor dagelijks gebruik.
                            </p>
                        </div>

                        <div className="relative z-10 flex flex-col items-center md:items-end flex-shrink-0">
                            <div className="text-3xl lg:text-4xl font-extrabold text-sky-900 dark:text-white">
                                € 197,-
                            </div>
                            <div className="text-sm font-semibold text-sky-700 dark:text-sky-300 uppercase tracking-wide">p/m extra</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Pricing: React.FC = () => {
    const [isAnnual, setIsAnnual] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);
    const [selectedOptionTier, setSelectedOptionTier] = useState<IPricing | null>(null);

    const handleShowOptions = (tier: IPricing) => {
        setSelectedOptionTier(tier);
        setIsOptionsModalOpen(true);
    };

    // Full Service Tier (Index 3)
    const fullServiceTier = tiers[3];

    return (
        <div className="relative w-full overflow-hidden bg-gray-50/50">

            {/* Content Container - Centered and Constrained */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 space-y-12 py-12">

                {/* Toggle Switch */}
                <div className="flex justify-center items-center gap-4 mb-8">
                    <span className={`text-lg font-medium ${!isAnnual ? 'text-foreground dark:text-white' : 'text-gray-400'}`}>Kwartaal</span>
                    <button
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none ${isAnnual ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'}`}
                    >
                        <div
                            className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full shadow-md transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}
                        />
                    </button>
                    <span className={`text-lg font-medium ${isAnnual ? 'text-foreground dark:text-white' : 'text-gray-400'}`}>
                        Jaarlijks
                        <span className="ml-2 text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full border border-green-200 dark:border-green-800">
                            Beste Keus
                        </span>
                    </span>
                </div>

                {/* Signing Bonus Banner */}
                {/* Signing Bonus Banner - REMOVED per user request */}

                {/* Top 3 Tiers */}
                <div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
                >
                    {tiers.slice(0, 3).map((tier, index) => (
                        <div key={tier.name} className="h-full">
                            <PricingColumn
                                tier={tier}
                                highlight={index === 2} // Highlight Elite
                                isAnnual={isAnnual}
                                onStartTrial={() => setIsModalOpen(true)}
                                onShowOptions={() => handleShowOptions(tier)}
                            />
                        </div>
                    ))}
                </div>

                {/* Unlimited Option Add-on */}
                <UnlimitedOptionBlock />

                {/* Agency Tier */}
                <div className="max-w-4xl mx-auto mt-12">
                    <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 border border-slate-800 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-4">
                            <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/50 uppercase tracking-wider">
                                VIP Service
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
                            <div className="md:col-span-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <BsStars className="text-yellow-400" size={32} />
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white">{fullServiceTier.name}</h3>
                                </div>
                                <p className="text-gray-300 text-lg mb-6 max-w-2xl">
                                    {fullServiceTier.focus}
                                </p>

                                <div className="mb-6 inline-block bg-yellow-500/10 text-yellow-400 text-sm font-semibold px-3 py-1 rounded border border-yellow-500/20">
                                    Alles uit Elite + Maatwerk
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8">
                                    {fullServiceTier.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 text-gray-200">
                                            <BsCheckCircleFill className="text-yellow-400 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center md:text-right">
                                <p className="text-gray-400 mb-2">Vanaf prijs</p>
                                <p className="text-4xl lg:text-5xl font-black text-white mb-6">
                                    € {fullServiceTier.priceMonthly},-
                                </p>
                                <p className="text-gray-500 text-sm mb-6">per maand (ex. btw)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Guarantee Section */}
                <GuaranteeSection />

                <FreeTrialModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    isAnnual={isAnnual}
                />

                <PurchaseOptionsModal
                    isOpen={isOptionsModalOpen}
                    onClose={() => setIsOptionsModalOpen(false)}
                    tier={selectedOptionTier}
                    isAnnual={isAnnual}
                />
            </div>
        </div>
    )
}

export default Pricing