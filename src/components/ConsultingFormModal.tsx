'use client';

import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';

interface ConsultingFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    callType: 'laser' | 'roadmap';
}

const ConsultingFormModal: React.FC<ConsultingFormModalProps> = ({ isOpen, onClose, onSuccess, callType }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        businessName: '',
        location: '',
        websiteUrl: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.businessName || !formData.location) {
            setError('Vul alle verplichte velden in.');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            // First send info to n8n webhook
            const webhookResponse = await fetch('https://n8n.aireclamestudio.nl/webhook/studiolee-new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    callType,
                    source: 'consulting_form',
                    timestamp: new Date().toISOString()
                }),
            });

            if (!webhookResponse.ok) {
                console.warn('Webhook submission failed, but proceeding to payment anyway.');
            }

            // Call the parent success handler to trigger Stripe payment
            onSuccess();
        } catch (err) {
            console.error('Submission error:', err);
            // Even if webhook fails, we want them to go to payment if possible
            // But we give feedback if it's a critical error
            onSuccess();
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="flex min-h-full items-center justify-center p-4">
                <div
                    className="relative bg-white dark:bg-neutral-950 rounded-3xl shadow-2xl max-w-lg w-full p-8 transform transition-all border border-gray-100 dark:border-neutral-800"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        disabled={isLoading}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Laatste Stap voor je {callType === 'laser' ? 'Laser' : 'Roadmap'} Call
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Vul je gegevens in zodat Tim zich optimaal kan voorbereiden op jullie gesprek.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                    Naam <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-neutral-900"
                                    placeholder="Jan de Vries"
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                    E-mail <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-neutral-900"
                                    placeholder="jan@bedrijf.nl"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                    Bedrijfsnaam <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="businessName"
                                    name="businessName"
                                    required
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-neutral-900"
                                    placeholder="Bedrijf B.V."
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                    Locatie <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-neutral-900"
                                    placeholder="Amsterdam"
                                    disabled={isLoading}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="websiteUrl" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                Website URL <span className="text-gray-400 font-normal">(Optioneel)</span>
                            </label>
                            <input
                                type="url"
                                id="websiteUrl"
                                name="websiteUrl"
                                value={formData.websiteUrl}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-neutral-900"
                                placeholder="https://www.jouwwebsite.nl"
                                disabled={isLoading}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                Waar kunnen we je bij helpen? <span className="text-gray-400 font-normal">(Optioneel)</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 dark:border-neutral-800 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-neutral-900 resize-none"
                                placeholder="Typ hier je bericht..."
                                disabled={isLoading}
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-sm font-medium">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Gegevens versturen...
                                </>
                            ) : (
                                <>Verder naar Betaling <BsArrowRight /></>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConsultingFormModal;
