import React from 'react';
import { BsCheckCircle, BsCalendarCheck, BsExclamationTriangle } from 'react-icons/bs';
import Link from 'next/link';

// Helper to get params from server component would be different, 
// using client component for simplicity of query params access or standard page props.
// For Next.js 13+ App Router, searchParams is passed as prop.

const PaymentSuccessPage = ({ searchParams }: { searchParams: { type?: string } }) => {
    const type = searchParams.type;

    let calendlyLink = "https://calendly.com/studiolee";
    let title = "Betaling Geslaagd!";

    if (type === 'laser') {
        calendlyLink = "https://calendly.com/studiolee/laser-call";
        title = "Laser Call Betaald";
    } else if (type === 'roadmap') {
        calendlyLink = "https://calendly.com/studiolee/roadmap-call";
        title = "Roadmap Call Betaald";
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4">
            <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BsCheckCircle size={40} />
                </div>

                <h1 className="text-3xl font-black font-heading text-gray-900 mb-4">{title}</h1>
                <p className="text-gray-600 mb-8 text-lg">
                    Bedankt voor je betaling. Je kunt nu direct je sessie inplannen in mijn agenda.
                </p>

                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 mb-8 text-left flex gap-3 text-yellow-800">
                    <BsExclamationTriangle className="flex-shrink-0 mt-1" />
                    <div className="text-sm">
                        <strong>Let op:</strong> Ik heb minimaal 7 dagen voorbereidingstijd nodig om me goed in te lezen.
                        Plan je call dus niet eerder dan over een week.
                        <br /><br />
                        <em>Spoed (morgen)? Mail naar <a href="mailto:tim@studiolee.nl" className="underline">tim@studiolee.nl</a>. (Toeslag mogelijk & geen garantie).</em>
                    </div>
                </div>

                <Link
                    href={calendlyLink}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                    <BsCalendarCheck />
                    Nu Inplannen
                </Link>

                <p className="mt-6 text-sm text-gray-400">
                    Factuur is per mail verzonden. Geen mail ontvangen? Check je spam.
                </p>
            </div>
        </section>
    );
};

export default PaymentSuccessPage;
