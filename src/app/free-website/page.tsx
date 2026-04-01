'use client';

import React, { useState } from 'react';
import Container from '@/components/Container';

const N8N_WEBHOOK_URL = "https://n8n.aireclamestudio.nl/webhook/freewebsite";

const NICHE_OPTIONS = [
    "Restaurants",
    "Kappers",
    "Beauty & Nagel Salons",
    "Schilders",
    "Loodgieters",
    "Elektro Installateurs",
    "Fysiotherapeuten",
    "Makelaars",
    "Stukadoors",
    "Dakdekkers",
    "Rijscholen",
    "Huisartsen",
    "Beauty & Nagel Klinieken",
    "Fietsenmakers",
    "Dierenartsen",
    "Verhuizers",
    "Reparateurs (Telefoon)",
    "Overig",
];

const FreeWebsitePage = () => {
    const [formData, setFormData] = useState({
        clientName: '',
        contactName: '',
        email: '',
        phone: '',
        domain: '',
        city: '',
        niche: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError('');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.clientName || !formData.contactName || !formData.email || !formData.domain || !formData.city || !formData.niche) {
            setError('Vul alle verplichte velden in.');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                throw new Error('Er is iets misgegaan bij het versturen.');
            }
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'Er is een fout opgetreden. Probeer het later opnieuw.'
            );
        } finally {
            setIsLoading(false);
        }
    };

    // Success state
    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-12 px-4 sm:px-6 lg:px-8">
                <Container>
                    <div className="max-w-md mx-auto text-center">
                        <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Aanvraag ontvangen!</h2>
                            <p className="text-gray-600 mb-2">
                                We gaan direct aan de slag met je website design.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Je ontvangt het resultaat meestal binnen <strong className="text-gray-900">48 uur</strong> op <strong className="text-gray-900">{formData.email}</strong>.
                            </p>
                            <a
                                href={`https://wa.me/31611594862?text=Hoi!%20Ik%20heb%20net%20een%20gratis%20website%20design%20aangevraagd%20voor%20${encodeURIComponent(formData.clientName)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-all hover:scale-[1.02]"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.838-6.318-2.236l-.44-.362-3.26 1.093 1.093-3.26-.362-.44A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                                Direct chatten via WhatsApp
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-12 px-4 sm:px-6 lg:px-8">
            <Container>
                <div className="max-w-lg mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                            Gratis AI Website Design
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Wij maken een volledig nieuw website design op basis van jouw huidige site.
                            Met moderne animaties, SEO optimalisatie en een live preview link.
                        </p>
                        <p className="text-gray-500 text-sm mt-2">
                            Meestal binnen <strong className="text-gray-700">48 uur</strong> klaar — uiterlijk binnen een week.
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Client Name */}
                            <div>
                                <label htmlFor="clientName" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                    Bedrijfsnaam <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="clientName"
                                    name="clientName"
                                    required
                                    value={formData.clientName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-gray-700/50 dark:placeholder-gray-400"
                                    placeholder="Bijv. Kapsalon Stijl"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Domain */}
                            <div>
                                <label htmlFor="domain" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                    Huidige website URL <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="url"
                                    id="domain"
                                    name="domain"
                                    required
                                    value={formData.domain}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-gray-700/50 dark:placeholder-gray-400"
                                    placeholder="https://jouwwebsite.nl"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Contact Name */}
                            <div>
                                <label htmlFor="contactName" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                    Jouw naam <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="contactName"
                                    name="contactName"
                                    required
                                    value={formData.contactName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-gray-700/50 dark:placeholder-gray-400"
                                    placeholder="Voornaam Achternaam"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                    E-mailadres <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-gray-700/50 dark:placeholder-gray-400"
                                    placeholder="jouw@email.nl"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Phone (optional) */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                    Telefoonnummer <span className="text-gray-400 font-normal">(optioneel)</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-gray-700/50 dark:placeholder-gray-400"
                                    placeholder="06 12345678"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Niche */}
                            <div>
                                <label htmlFor="niche" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                    Branche <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="niche"
                                    name="niche"
                                    required
                                    value={formData.niche}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-gray-700/50 bg-white dark:bg-gray-700/50 appearance-none cursor-pointer"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 0.75rem center',
                                        backgroundSize: '1.5em 1.5em',
                                        paddingRight: '2.5rem',
                                    }}
                                    disabled={isLoading}
                                >
                                    <option value="">Selecteer je branche...</option>
                                    {NICHE_OPTIONS.map((niche) => (
                                        <option key={niche} value={niche}>{niche}</option>
                                    ))}
                                </select>
                            </div>

                            {/* City */}
                            <div>
                                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                    Stad <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white dark:bg-gray-700/50 dark:placeholder-gray-400"
                                    placeholder="Bijv. Amsterdam"
                                    disabled={isLoading}
                                />
                            </div>

                            {/* Error */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg shadow-lg"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Bezig met verwerken...
                                    </span>
                                ) : (
                                    'Vraag Gratis Website Design Aan'
                                )}
                            </button>
                        </form>

                        {/* Trust Badges */}
                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    100% Gratis
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Geen verplichtingen
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Meestal binnen 48 uur
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* How it works */}
                    <div className="mt-12 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Hoe het werkt</h2>
                        <div className="space-y-4">
                            {[
                                { step: '1', title: 'Vul het formulier in', desc: 'Deel je website URL en bedrijfsgegevens — duurt minder dan een minuut.' },
                                { step: '2', title: 'Wij analyseren je website', desc: 'Onze AI scant je huidige site, analyseert je concurrenten en ontwerpt een nieuw design.' },
                                { step: '3', title: 'Ontvang je live preview', desc: 'Binnen 48 uur ontvang je een link naar je nieuwe website design. Bevalt het? Dan bouwen we het af.' },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-4 bg-white dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SEO Content: What do you get? */}
                    <div className="mt-16 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
                                Wat krijg je precies?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { title: 'Professioneel design op maat', desc: 'Gebaseerd op jouw huidige site en branche. Geen template — volledig op maat.' },
                                    { title: 'Live preview link', desc: 'Je krijgt een werkende link naar je nieuwe site. Bekijk het op desktop en mobiel.' },
                                    { title: 'SEO-geoptimaliseerd', desc: 'Meta tags, snelle laadtijden en mobielvriendelijk. Klaar om gevonden te worden.' },
                                    { title: 'De bestanden zijn van jou', desc: 'Je kunt het design gratis ontvangen. Wil je het afgebouwd? Dan bouwen we het af.' },
                                ].map((item) => (
                                    <div key={item.title} className="bg-white dark:bg-gray-800/50 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SEO Content: Pricing after free design */}
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 text-white">
                            <h2 className="text-xl font-bold mb-4 text-center">En daarna? Jij kiest.</h2>
                            <div className="space-y-3 text-sm max-w-md mx-auto">
                                <div className="flex justify-between border-b border-gray-700 pb-2">
                                    <span className="text-gray-300">Website kopen (eenmalig)</span>
                                    <span className="font-bold">€800</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-700 pb-2">
                                    <span className="text-gray-300">Hosting + onderhoud + blogs</span>
                                    <span className="font-bold">€200/jaar</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-700 pb-2">
                                    <span className="text-gray-300">Of: compleet 25-in-1 AI platform</span>
                                    <span className="font-bold text-blue-400">€79/maand</span>
                                </div>
                                <div className="flex justify-between pt-1">
                                    <span className="text-gray-300">Managed service (volledige ontzorging)</span>
                                    <span className="font-bold text-blue-400">Op aanvraag</span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-xs text-center mt-4">
                                Niet verplicht. Het design is en blijft gratis.
                                <a href="/tarieven" className="text-blue-400 hover:text-blue-300 ml-1">Bekijk alle tarieven →</a>
                            </p>
                        </div>

                        {/* SEO Content: Why free? */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
                                Waarom bieden wij dit gratis aan?
                            </h2>
                            <div className="text-gray-600 dark:text-gray-300 space-y-3 text-base leading-relaxed">
                                <p>
                                    De meeste MKB-bedrijven betalen €3.000 tot €10.000 voor een website bij een bureau. Of ze worstelen zelf
                                    met WordPress, Wix of Squarespace. Het resultaat: een site die er niet uitziet, niet gevonden wordt,
                                    en geen klanten oplevert.
                                </p>
                                <p>
                                    Wij draaien het om. Je ziet eerst wat wij voor je kunnen maken — gratis, zonder risico. Bevalt het design?
                                    Dan koop je het voor €800 eenmalig. Dat is een fractie van wat een bureau vraagt. En wil je meer?
                                    Met ons 25-in-1 AI platform voor €79/maand krijg je ook een chatbot, Voice AI telefonist,
                                    SEO automatisering, review management en social media.
                                </p>
                                <p>
                                    Wij zijn geen gewone tool en geen goedkoop alternatief. STUDIOLEE levert agency-kwaliteit — strategie,
                                    consulting én uitvoering — voor een tiende van de prijs. Normaal betaal je €1.500+ per maand voor een bureau.
                                    Bij ons krijg je hetzelfde, maar slimmer geleverd.
                                </p>
                            </div>
                        </div>

                        {/* SEO Content: Bureau comparison */}
                        <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                                Website laten maken: wat kost het?
                            </h2>
                            <div className="space-y-3">
                                {[
                                    { method: 'Zelf bouwen (Wix/WordPress)', price: 'Gratis – €50/mnd', pro: 'Goedkoop', con: 'Kost 20-40 uur + ziet er niet professioneel uit' },
                                    { method: 'Webdesign bureau', price: '€3.000 – €10.000', pro: 'Professioneel', con: 'Duur + weken wachten' },
                                    { method: 'Freelancer', price: '€1.000 – €3.000', pro: 'Flexibel', con: 'Wisselende kwaliteit' },
                                    { method: 'STUDIOLEE', price: '€800 eenmalig', pro: 'Professioneel + snel', con: 'Gratis preview eerst, dan pas betalen' },
                                ].map((row) => (
                                    <div key={row.method} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl ${row.method === 'STUDIOLEE' ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800' : 'bg-gray-50 dark:bg-gray-700/30'}`}>
                                        <div className="flex-1">
                                            <span className="font-semibold text-gray-900 dark:text-white">{row.method}</span>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{row.pro} · {row.con}</p>
                                        </div>
                                        <span className={`font-bold mt-1 sm:mt-0 ${row.method === 'STUDIOLEE' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>{row.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
                                Veelgestelde Vragen
                            </h2>
                            <div className="space-y-3">
                                {[
                                    { q: 'Is het echt gratis?', a: 'Ja, 100%. Wij maken een professioneel website design op maat. Je ontvangt een live preview link. Geen kosten, geen verplichtingen. De bestanden kun je gratis opvragen.' },
                                    { q: 'Wat kost de website als ik het wil kopen?', a: '€800 eenmalig voor de website plus €200 per jaar voor hosting, onderhoud en blogs. Geen maandelijks abonnement nodig voor alleen de website.' },
                                    { q: 'Wat is het 25-in-1 AI platform?', a: 'Voor €79/maand krijg je naast de website ook een AI chatbot, Voice AI telefonist, SEO automatisering, review management, social media planner, CRM en meer. Maandelijks opzegbaar.' },
                                    { q: 'Hoe snel is het klaar?', a: 'Meestal binnen 48 uur. Uiterlijk binnen een week. Je ontvangt een live link naar je nieuwe website design.' },
                                    { q: 'Hoe verschilt STUDIOLEE van een bureau?', a: 'Een traditioneel bureau rekent €1.500–€3.000+ per maand. Wij leveren dezelfde kwaliteit — strategie, consulting én uitvoering — voor een tiende van de prijs. Alles inbegrepen, geen verborgen kosten.' },
                                ].map((faq) => (
                                    <details key={faq.q} className="group bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-xl">
                                        <summary className="cursor-pointer p-4 font-semibold text-gray-900 dark:text-white flex justify-between items-center">
                                            {faq.q}
                                            <span className="text-blue-500 group-open:rotate-45 transition-transform text-xl ml-2">+</span>
                                        </summary>
                                        <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400">{faq.a}</div>
                                    </details>
                                ))}
                            </div>
                        </div>

                        {/* Internal links */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/tarieven" className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all">
                                Bekijk alle tarieven
                            </a>
                            <a href="/portfolio" className="text-center border border-gray-300 dark:border-gray-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-gray-900 dark:text-white">
                                Bekijk ons portfolio
                            </a>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <p className="text-center text-sm text-gray-500 mt-8">
                        Heb je vragen? Neem contact met ons op via{' '}
                        <a href="https://wa.me/31611594862" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                            WhatsApp
                        </a>
                        {' '}of{' '}
                        <a href="mailto:tim@studiolee.nl" className="text-blue-600 hover:text-blue-700 font-medium">
                            tim@studiolee.nl
                        </a>
                    </p>
                </div>
            </Container>

            {/* Schema.org FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            { q: 'Is het echt gratis?', a: 'Ja, 100%. Wij maken een professioneel website design op maat. Je ontvangt een live preview link. Geen kosten, geen verplichtingen.' },
                            { q: 'Wat kost de website als ik het wil kopen?', a: '€800 eenmalig plus €200 per jaar voor hosting, onderhoud en blogs.' },
                            { q: 'Wat is het 25-in-1 AI platform?', a: 'Voor €79/maand krijg je een AI chatbot, Voice AI telefonist, SEO, review management, social media en meer.' },
                            { q: 'Hoe snel is het klaar?', a: 'Meestal binnen 48 uur.' },
                            { q: 'Hoe verschilt STUDIOLEE van een bureau?', a: 'Agency-kwaliteit voor een tiende van de prijs. Inclusief strategie en consulting.' },
                        ].map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
                    }),
                }}
            />
        </div>
    );
};

export default FreeWebsitePage;
