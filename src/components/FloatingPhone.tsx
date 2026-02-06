'use client';

import React from 'react';
import { BsTelephone } from 'react-icons/bs';

const FloatingPhone: React.FC = () => {
    const phoneNumber = '+31 970 102 23669';
    const phoneLink = 'tel:+3197010223669';

    return (
        <a
            href={phoneLink}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            aria-label="Bel ons"
        >
            <BsTelephone className="w-5 h-5 group-hover:animate-pulse" />
            <span className="font-semibold text-sm hidden sm:inline">{phoneNumber}</span>
        </a>
    );
};

export default FloatingPhone;
