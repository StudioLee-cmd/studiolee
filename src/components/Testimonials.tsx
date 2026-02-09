"use client";
import React from 'react';
import { testimonials } from '@/data/testimonials';
import { FaStar } from 'react-icons/fa';

const Testimonials: React.FC = () => {
    return (
        <div className="w-full py-10 px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow h-full"
                    >
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`w-4 h-4 ${i < (testimonial.stars || 5) ? 'text-amber-400' : 'text-gray-200 dark:text-neutral-700'}`}
                                />
                            ))}
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 italic mb-6 flex-grow">
                            &quot;{testimonial.message}&quot;
                        </p>

                        <div className="flex items-center gap-4 mt-auto">
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{testimonial.name}</h4>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8 text-[10px] text-gray-400 opacity-70">
                * Reviews zijn AI-gegenereerde voorbeelden ter illustratie. Echte ervaringen volgen binnenkort.
            </div>
        </div>
    );
};

export default Testimonials;
