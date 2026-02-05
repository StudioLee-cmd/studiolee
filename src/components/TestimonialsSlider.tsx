"use client";

import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import { testimonials } from '@/data/testimonials';
import { FaStar } from 'react-icons/fa';
import './TestimonialsSlider.css';

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };

interface TestimonialCardProps {
    name: string;
    role: string;
    message: string;
    stars?: number;
}

const TestimonialCard = memo(({ name, role, message, stars = 5 }: TestimonialCardProps) => (
    <div className="testimonial-card">
        <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
                <FaStar
                    key={i}
                    className={`w-3 h-3 ${i < stars ? 'text-amber-400' : 'text-gray-200'}`}
                />
            ))}
        </div>
        <p className="text-gray-700 text-sm italic mb-4 line-clamp-3">
            &quot;{message}&quot;
        </p>
        <div className="mt-auto">
            <h4 className="font-bold text-gray-900 text-sm">{name}</h4>
            <p className="text-xs text-gray-500">{role}</p>
        </div>
    </div>
));

TestimonialCard.displayName = 'TestimonialCard';

interface TestimonialRowProps {
    items: typeof testimonials;
    direction: 'left' | 'right';
    speed?: number;
}

const TestimonialRow = memo(({ items, direction, speed = 50 }: TestimonialRowProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLDivElement>(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);

    const targetVelocity = useMemo(() => {
        return direction === 'left' ? speed : -speed;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
        const containerWidth = containerRef.current?.clientWidth ?? 0;
        const sequenceRect = seqRef.current?.getBoundingClientRect?.();
        const sequenceWidth = sequenceRect?.width ?? 0;

        if (sequenceWidth > 0) {
            setSeqWidth(Math.ceil(sequenceWidth));
            const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
            setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
    }, []);

    // ResizeObserver
    useEffect(() => {
        if (!window.ResizeObserver) {
            window.addEventListener('resize', updateDimensions);
            updateDimensions();
            return () => window.removeEventListener('resize', updateDimensions);
        }
        const observers: ResizeObserver[] = [];
        [containerRef, seqRef].forEach(ref => {
            if (ref.current) {
                const observer = new ResizeObserver(updateDimensions);
                observer.observe(ref.current);
                observers.push(observer);
            }
        });
        updateDimensions();
        return () => observers.forEach(o => o.disconnect());
    }, [updateDimensions]);

    // Animation loop
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let rafId: number | null = null;
        let lastTime: number | null = null;
        let offset = 0;
        let velocity = 0;

        const animate = (time: number) => {
            if (lastTime === null) {
                lastTime = time;
            }

            const deltaTime = Math.max(0, time - lastTime) / 1000;
            lastTime = time;

            const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
            velocity += (targetVelocity - velocity) * easingFactor;

            if (seqWidth > 0) {
                offset = offset + velocity * deltaTime;
                offset = ((offset % seqWidth) + seqWidth) % seqWidth;
                track.style.transform = `translate3d(${-offset}px, 0, 0)`;
            }

            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [targetVelocity, seqWidth]);

    const rows = useMemo(
        () =>
            Array.from({ length: copyCount }, (_, copyIndex) => (
                <div
                    className="testimonials-list"
                    key={`copy-${copyIndex}`}
                    ref={copyIndex === 0 ? seqRef : undefined}
                >
                    {items.map((item, idx) => (
                        <TestimonialCard
                            key={`${copyIndex}-${idx}`}
                            name={item.name}
                            role={item.role}
                            message={item.message}
                            stars={item.stars}
                        />
                    ))}
                </div>
            )),
        [copyCount, items]
    );

    return (
        <div ref={containerRef} className="testimonials-row">
            <div className="testimonials-track" ref={trackRef}>
                {rows}
            </div>
        </div>
    );
});

TestimonialRow.displayName = 'TestimonialRow';

const TestimonialsSlider = () => {
    // Split testimonials into 2 sets for 2 rows
    const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
    const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

    return (
        <section id="testimonials" className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                    Wat Onze Klanten Zeggen
                </h2>
                <p className="text-center text-gray-500 max-w-2xl mx-auto">
                    Echte ondernemers, echte resultaten. Ontdek hoe STUDIOLEE hun bedrijf transformeerde.
                </p>
            </div>

            <div className="space-y-6">
                <TestimonialRow items={row1} direction="left" speed={40} />
                <TestimonialRow items={row2} direction="right" speed={40} />
            </div>

            <div className="text-center mt-8 text-[10px] text-gray-400 opacity-70">
                * Voorbeeldreviews ter illustratie. Echte klantervaringen volgen binnenkort.
            </div>
        </section>
    );
};

export default TestimonialsSlider;
