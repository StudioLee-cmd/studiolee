'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Container from './Container';
import FreeTrialModal from './FreeTrialModal';
import ShinyText from './ShinyText';
import { AnimatedThemeToggler } from './AnimatedThemeToggler';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
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
                    <ul className="hidden lg:flex flex-grow justify-center space-x-10 pl-20">
                                                {menuItems.map(item => (
                            <li key={item.text} className="relative"
                                ref={item.children ? dropdownRef : undefined}
                                onMouseEnter={() => { if (item.children) { if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current); setOpenDropdown(item.text); } }}
                                onMouseLeave={() => { if (item.children) { dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 300); } }}>
                                {item.children ? (
                                    <>
                                        <button onClick={() => setOpenDropdown(openDropdown === item.text ? null : item.text)} className="text-gray-600 hover:text-primary font-medium transition-colors text-base dark:text-gray-300 dark:hover:text-primary flex items-center gap-1">
                                            {item.text}
                                            <svg className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.text ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </button>
                                        <div className={`absolute top-full left-0 mt-1 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl shadow-xl py-2 min-w-[220px] z-50 transition-all duration-200 ease-out origin-top ${openDropdown === item.text ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}`}>
                                            {item.children.map(child => (
                                                <Link key={child.text} href={child.url} className="block px-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors" onClick={() => setOpenDropdown(null)}>
                                                    {child.text}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link href={item.url} className="text-gray-600 hover:text-primary font-medium transition-colors text-base dark:text-gray-300 dark:hover:text-primary">
                                        {item.text}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button (Right) */}
                    <div className="hidden md:flex items-center gap-6 flex-shrink-0">
                        <AnimatedThemeToggler />
                        <a
                            href="https://calendly.com/tim-studiolee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-primary hover:bg-secondary px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 inline-block"
                        >
                            <ShinyText text="Plan Een Gesprek" speed={3} color="#ffffff" shineColor="var(--primary-accent)" />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-4">
                        <AnimatedThemeToggler />
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
                <div id="mobile-menu" className="md:hidden bg-white dark:bg-neutral-900 shadow-lg border-t border-gray-100 dark:border-neutral-800 absolute w-full left-0 z-50">
                    <ul className="flex flex-col space-y-4 py-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                {item.children ? (
                                    <div>
                                        <span className="text-lg text-foreground font-semibold block mb-2">{item.text}</span>
                                        <div className="pl-4 space-y-2">
                                            {item.children.map(child => (
                                                <Link key={child.text} href={child.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                                    {child.text}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link href={item.url} className="text-lg text-foreground hover:text-primary block font-medium" onClick={toggleMenu}>
                                        {item.text}
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li className="pt-2">
                            <a
                                href="https://calendly.com/tim-studiolee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-white bg-primary hover:bg-primary-accent px-5 py-3 rounded-xl font-bold text-center block"
                                onClick={toggleMenu}
                            >
                                Start Gratis
                            </a>
                        </li>
                    </ul>
                </div>
            )}

            <FreeTrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isAnnual={false} />
        </header>
    );
};

export default Header;
