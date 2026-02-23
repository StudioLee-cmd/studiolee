"use client";
import React, { useState } from 'react';
import { heroDetails } from '@/data/hero';
import AIScanModal from './AIScanModal';
import LogoLoop from './LogoLoop';
import Antigravity from './Antigravity';

const Hero: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        "Linkbuilding",
        "Web Development",
        "Automations",
        "Strategie Sessies",
        "Social Media",
        "Reviews Beheer",
        "Google SEO Optimalisatie",
        "AI Vindbaarheid (ChatGPT)",
        "SEO Content Updates"
    ];

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    React.useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % services.length;
            const fullText = services[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 100);

            if (!isDeleting && text === fullText) {
                // Pause at end of word
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                // Move to next word
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, services]);

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pt-24 pb-20 md:pt-28 md:pb-32 px-6 sm:px-8 md:px-5 overflow-hidden"
        >
            <div className="text-center relative z-10 max-w-6xl mx-auto w-full overflow-x-hidden px-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">jouw groeipartner voor het ai tijdperk</span>
                </div>

                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-gray-900 dark:text-slate-200 tracking-tight leading-[1.1] mb-8">
                    Jouw Tijd Is Kostbaar.<br />
                    Wij Automatiseren Je <br />
                    <span className="text-primary block mt-2 h-[1.2em] relative">
                        {text}
                        <span className="absolute ml-1 w-1 h-3/4 bg-primary animate-pulse inline-block align-middle"></span>
                    </span>
                </h1>

                <p className="mt-8 text-base sm:text-lg md:text-2xl text-gray-500 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                    STUDIOLEE maakt werken met AI, marketing en automatisering 10x makkelijker.
                    Wij geven ondernemers meer kracht en efficiëntie.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 mt-12 mb-20">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-12 py-5 rounded-full bg-primary text-white text-xl font-bold hover:bg-secondary transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-300 ring-4 ring-primary/20"
                    >
                        Start Gratis AI Business Scan
                    </button>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                        Ontvang binnen 2 minuten een AI-gegenereerde blauwdruk. Gratis &amp; direct resultaat.
                    </p>
                </div>

                <div className="absolute inset-0 w-full h-full -z-10 opacity-50 pointer-events-none">
                    <Antigravity
                        count={300}
                        magnetRadius={6}
                        ringRadius={7}
                        waveSpeed={0.4}
                        waveAmplitude={1}
                        particleSize={1.5}
                        lerpSpeed={0.05}
                        color="#0EA5E9"
                        autoAnimate
                        particleVariance={1}
                        rotationSpeed={0}
                        depthFactor={1}
                        pulseSpeed={3}
                        particleShape="capsule"
                        fieldStrength={10}
                    />
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-transparent z-0"></div>
                    <p className="text-sm font-semibold text-gray-500 mb-6 uppercase tracking-widest">Integreer met de beste tools</p>
                    <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
                        <LogoLoop
                            logos={[
                                { src: "/integrations/7opCNBkJ2cIXMUnbvJmtMZnfk4.png", alt: "Integration" },
                                { src: "/integrations/ApYHxyYFPAqbu4O6OCc49FEPLM4.png", alt: "Integration" },
                                { src: "/integrations/BdqpLcWl3WmGwoB67iCYju6Pljs.png", alt: "Integration" },
                                { src: "/integrations/H4Q1AOufBKSAPNUZWixDnSVGJE.png", alt: "Integration" },
                                { src: "/integrations/HVJUX4QbpAn0hi2dXKVIGaJpg8U.png", alt: "Integration" },
                                { src: "/integrations/KXhZK8GXL1oHX4q9tyfEAJOL6sA.png", alt: "Integration" },
                                { src: "/integrations/QnFCBFiuuk9pyfyQjbyK45zrnsE.png", alt: "Integration" },
                                { src: "/integrations/TLHVW5Q7Z0hKTxPQ7lFtFbD4A.png", alt: "Integration" },
                                { src: "/integrations/UEAMi2LUCCLX1uPGpi3Uns7PNk.png", alt: "Integration" },
                                { src: "/integrations/W3zhmmZ2HM66wU1Qz4UXBRoDJI.png", alt: "Integration" },
                                { src: "/integrations/aElwk6cNC6Sji6lyiweJEtZmTU.png", alt: "Integration" },
                                { src: "/integrations/alCWZVvt4x45pspoYcBY76a3ofY.png", alt: "Integration" },
                                { src: "/integrations/b66uORV2X52dynZ0cnWtAbQmvoQ.png", alt: "Integration" },
                                { src: "/integrations/bBmRNsXpTGKEokH8tEhheqsYrog.png", alt: "Integration" },
                                { src: "/integrations/bjjGhP5iKr5txXTf0opmeN2N5A.png", alt: "Integration" },
                                { src: "/integrations/g1eISL6G549ys2Z7AYF0vr8Avoo.png", alt: "Integration" },
                                { src: "/integrations/gq8lRmwkPpp3HDcoHVAkSPVAU.png", alt: "Integration" },
                                { src: "/integrations/klVnSEgUhyoG6RJq43d4GXNSS84.png", alt: "Integration" },
                                { src: "/integrations/wBLEbrIFrSGbrbE3yxYT46fJco.png", alt: "Integration" },
                                { src: "/integrations/zIuYWpI8ZvWttxlEFiL3LzrXoZg.png", alt: "Integration" },
                                { src: "/images/logos/n8n.jpg", alt: "n8n" },
                                { src: "/images/logos/copilot.png", alt: "Copilot" },
                                { src: "/images/logos/storychief.png", alt: "StoryChief" }
                            ]}
                            speed={100}
                            direction="left"
                            logoHeight={60}
                            gap={60}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut
                        />
                    </div>
                </div>

            </div>

            <AIScanModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section >
    );
};

export default Hero;
