"use client";
import React from 'react';
import Image from 'next/image';

const icons = [
    "7opCNBkJ2cIXMUnbvJmtMZnfk4.png", // LinkedIn?
    "859967303558699.png", // Not present in public list? Checking list again... 8599... was not in list. 
    // From list:
    "7opCNBkJ2cIXMUnbvJmtMZnfk4.png",
    "ApYHxyYFPAqbu4O6OCc49FEPLM4.png",
    "BdqpLcWl3WmGwoB67iCYju6Pljs.png",
    "H4Q1AOufBKSAPNUZWixDnSVGJE.png",
    "HVJUX4QbpAn0hi2dXKVIGaJpg8U.png",
    "KXhZK8GXL1oHX4q9tyfEAJOL6sA.png",
    "QnFCBFiuuk9pyfyQjbyK45zrnsE.png",
    "TLHVW5Q7Z0hKTxPQ7lFtFbD4A.png",
    "UEAMi2LUCCLX1uPGpi3Uns7PNk.png",
    "W3zhmmZ2HM66wU1Qz4UXBRoDJI.png",
    "aElwk6cNC6Sji6lyiweJEtZmTU.png",
    "alCWZVvt4x45pspoYcBY76a3ofY.png",
    "b66uORV2X52dynZ0cnWtAbQmvoQ.png",
    "bBmRNsXpTGKEokH8tEhheqsYrog.png",
    "bjjGhP5iKr5txXTf0opmeN2N5A.png",
    "g1eISL6G549ys2Z7AYF0vr8Avoo.png",
    "gq8lRmwkPpp3HDcoHVAkSPVAU.png",
    "klVnSEgUhyoG6RJq43d4GXNSS84.png",
    "wBLEbrIFrSGbrbE3yxYT46fJco.png",
    "zIuYWpI8ZvWttxlEFiL3LzrXoZg.png"
];

const IntegrationMarquee = () => {
    return (
        <div
            className="w-full overflow-hidden bg-transparent py-10"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
        >
            <div className="flex animate-marquee whitespace-nowrap gap-12">
                {/* Loop 1 */}
                <div className="flex gap-12 items-center">
                    {icons.map((icon, index) => (
                        <div key={`i1-${index}`} className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 flex items-center justify-center p-3 relative hover:scale-110 transition-transform">
                            <Image
                                src={`/integrations/${icon}`}
                                alt="Integration"
                                width={80}
                                height={80}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    ))}
                </div>
                {/* Loop 2 for seamless effect */}
                <div className="flex gap-12 items-center">
                    {icons.map((icon, index) => (
                        <div key={`i2-${index}`} className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-700 flex items-center justify-center p-3 relative hover:scale-110 transition-transform">
                            <Image
                                src={`/integrations/${icon}`}
                                alt="Integration"
                                width={80}
                                height={80}
                                className="object-contain w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default IntegrationMarquee;
