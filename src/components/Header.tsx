'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import FreeTrialModal from './FreeTrialModal';
import ShinyText from './ShinyText';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-0">
            <Container className="!px-0 max-w-7xl mx-auto">
                <nav className="flex justify-between items-center py-2 px-4">
                    {/* Logo (Left) */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            {/* Using standard img to bypass Next.js Image optimization issues */}
                            <img
                                src="/images/brand/logo-header-v3.png"
                                alt={siteDetails.siteName}
                                className="h-6 md:h-10 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu (Center) */}
                    <ul className="hidden lg:flex flex-grow justify-center space-x-10">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-gray-600 hover:text-primary font-medium transition-colors text-base">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button (Right) */}
                    <div className="hidden md:flex items-center gap-6 flex-shrink-0">
                        <Link href="/login" className="text-gray-600 font-medium hover:text-primary transition-colors hidden lg:block">
                            Inloggen
                        </Link>
                        <button
                            onClick={() => document.getElementById('consulting')?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-white bg-primary hover:bg-secondary px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            <ShinyText text="Plan Een Gesprek" speed={3} color="#ffffff" shineColor="#60a5fa" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-foreground hover:text-primary focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-8 w-8" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-8 w-8" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu (Instant, no animation) */}
            {isOpen && (
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute w-full left-0 z-50">
                    <ul className="flex flex-col space-y-4 py-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-lg text-foreground hover:text-primary block font-medium" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <button
                                onClick={() => {
                                    document.getElementById('consulting')?.scrollIntoView({ behavior: 'smooth' });
                                    toggleMenu();
                                }}
                                className="w-full text-white bg-primary hover:bg-primary-accent px-5 py-3 rounded-xl font-bold text-center block"
                            >
                                Start Gratis
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            <FreeTrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isAnnual={false} />
        </header>
    );
};

export default Header;
