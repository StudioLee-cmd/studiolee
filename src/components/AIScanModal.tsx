'use client';

import React, { useState, useEffect } from 'react';

interface AIScanModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AIScanModal: React.FC<AIScanModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        websiteUrl: '',
        email: '',
        challenge: '',
        surpriseMe: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Prevent body scroll when modal is open
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

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setShowSuccess(false);
            setError('');
        }
    }, [isOpen]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const target = e.target;
        const { name, value } = target;
        const checked = target instanceof HTMLInputElement ? target.checked : false;
        const type = target instanceof HTMLInputElement ? target.type : 'text';

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.websiteUrl || !formData.email) {
            setError('Vul alle verplichte velden in.');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/ai-scan', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowSuccess(true);
            } else {
                throw new Error('Er is iets misgegaan.');
            }
        } catch {
            setError('Er is een fout opgetreden. Probeer het later opnieuw.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="flex min-h-full items-center justify-center p-4">
                <div
                    className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 transform transition-all border border-gray-100 dark:border-neutral-800 animate-in fade-in zoom-in duration-200"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        disabled={isLoading}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {showSuccess ? (
                        <div className="text-center py-6">
                            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                                <svg className="h-10 w-10 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                🚀 Je scan is onderweg!
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                We analyseren <strong>{formData.websiteUrl}</strong> en sturen je blauwdruk naar <strong>{formData.email}</strong>.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                                Je ontvangt binnen 2 minuten een e-mail met je persoonlijke AI Business Scan rapport.
                            </p>
                            {/* Video while waiting */}
                            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/3RaBKCJdLMA?autoplay=1&mute=1"
                                    title="Waiting Room Video"
                                    style={{ border: 0 }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <button
                                onClick={onClose}
                                className="inline-block w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:opacity-90 transition-all shadow-lg"
                            >
                                Sluiten
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="mb-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3">
                                    <span>✨</span> Gratis AI Business Scan
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    Ontvang je AI Blauwdruk
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">
                                    Vul je gegevens in en ontvang binnen 2 minuten een gepersonaliseerd rapport.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="scan-name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                        Naam <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="scan-name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-neutral-800"
                                        placeholder="Hoe wil je genoemd worden?"
                                        disabled={isLoading}
                                    />
                                </div>

                                {/* Website URL Field */}
                                <div>
                                    <label htmlFor="scan-website" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                        Website URL <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="url"
                                        id="scan-website"
                                        name="websiteUrl"
                                        required
                                        value={formData.websiteUrl}
                                        onChange={(e) => { e.target.setCustomValidity(''); handleChange(e); }}
                                        onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('URL is ongeldig. Als je (nog) geen website hebt, vul een Facebook URL in en leg je situatie uit in het berichtveld.')}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-neutral-800"
                                        placeholder="https://jouwwebsite.nl"
                                        disabled={isLoading}
                                    />
                                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                                        *Controleer of dit de juiste website is voor de analyse.
                                    </p>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="scan-email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                        E-mail <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="scan-email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-neutral-800"
                                        placeholder="jouw@email.nl"
                                        disabled={isLoading}
                                    />
                                </div>

                                {/* Challenge Field */}
                                <div>
                                    <label htmlFor="scan-challenge" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                                        Waar loop je nu tegenaan?
                                    </label>
                                    <textarea
                                        id="scan-challenge"
                                        name="challenge"
                                        rows={3}
                                        value={formData.challenge}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-neutral-800 resize-none"
                                        placeholder="Ik heb te weinig tijd voor..."
                                        disabled={isLoading}
                                    />
                                </div>

                                {/* Surprise Me Checkbox */}
                                <div className="flex items-center">
                                    <input
                                        id="scan-surprise"
                                        name="surpriseMe"
                                        type="checkbox"
                                        checked={formData.surpriseMe}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                                        disabled={isLoading}
                                    />
                                    <label htmlFor="scan-surprise" className="ml-3 text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                                        ✨ Ik weet het niet, verras mij maar
                                    </label>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                                        {error}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg shadow-lg"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Bezig met scannen...
                                        </span>
                                    ) : (
                                        '🚀 START SCAN & STUUR RAPPORT'
                                    )}
                                </button>
                            </form>

                            {/* Trust Badges */}
                            <div className="mt-6 pt-5 border-t border-gray-100 dark:border-neutral-800">
                                <div className="flex items-center justify-center space-x-6 text-xs text-gray-400 dark:text-gray-500">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        100% Gratis
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Direct resultaat
                                    </div>
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 text-green-500 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Geen spam
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AIScanModal;
