"use client";
import React from 'react';
import Section from './Section';
import Container from './Container';
import { BsYoutube, BsArrowRight } from 'react-icons/bs';

const YouTubeSection = () => {
    return (
        <Section
            id="youtube"
            title="Business Rescues"
            description="Kijk mee hoe wij Nederlandse bedrijven transformeren met onze aanpak."
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-600/30 mb-6 font-semibold text-sm">
                            <BsYoutube />
                            <span>STUDIOLEE op YouTube</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            Wij laten zien hoe het moet. <br />
                            <span className="text-gray-400">Transparant en eerlijk.</span>
                        </h3>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            In onze video's nemen we je mee achter de schermen. We laten zien hoe we vastgelopen bedrijven weer winstgevend maken door middel van slimme marketing, automatisering en branding.
                        </p>

                        <a
                            href="https://www.youtube.com/@DIGITAL.STUDIOLEE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors"
                        >
                            Bekijk onze video's <BsArrowRight />
                        </a>
                    </div>

                    {/* Video Placeholder / Thumbnail Area */}
                    <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 group cursor-pointer">
                        {/* You would typically embed an iframe or an image here. Using a styled placeholder for now. */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center pl-2 shadow-2xl transform group-hover:scale-110 transition-transform">
                                <BsYoutube size={40} className="text-white" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="font-bold text-lg">Hoe wij deze bakkerij van de ondergang redden...</p>
                            <p className="text-sm text-gray-300">Studio Lee • 25k weergaven</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default YouTubeSection;
