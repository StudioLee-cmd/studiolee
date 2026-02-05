"use client";

import React, { useRef, useEffect } from 'react';

interface AntigravityProps {
    count?: number;
    magnetRadius?: number;
    ringRadius?: number;
    waveSpeed?: number;
    waveAmplitude?: number;
    particleSize?: number;
    lerpSpeed?: number;
    color?: string;
    autoAnimate?: boolean;
    particleVariance?: number;
    rotationSpeed?: number;
    depthFactor?: number;
    pulseSpeed?: number;
    particleShape?: 'circle' | 'square' | 'capsule';
    fieldStrength?: number;
}

const Antigravity: React.FC<AntigravityProps> = ({
    count = 300,
    magnetRadius = 6,
    ringRadius = 7,
    waveSpeed = 0.4,
    waveAmplitude = 1,
    particleSize = 1.5,
    lerpSpeed = 0.05,
    color = "#5227FF",
    autoAnimate = true,
    particleVariance = 1,
    rotationSpeed = 0,
    depthFactor = 1,
    pulseSpeed = 3,
    particleShape = "capsule",
    fieldStrength = 10
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.parentElement?.clientWidth || window.innerWidth;
        let height = canvas.parentElement?.clientHeight || window.innerHeight;

        const setSize = () => {
            width = canvas.parentElement?.clientWidth || window.innerWidth;
            height = canvas.parentElement?.clientHeight || window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        setSize();
        window.addEventListener('resize', setSize);

        // Particles
        interface Particle {
            x: number;
            y: number;
            baseX: number;
            baseY: number;
            size: number;
            density: number;
            angle: number;
            color: string;
            pulse: number;
        }

        const particles: Particle[] = [];
        const init = () => {
            particles.length = 0;
            for (let i = 0; i < count; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const size = (Math.random() * particleVariance) + particleSize;
                const density = (Math.random() * 30) + 1;
                particles.push({
                    x,
                    y,
                    baseX: x,
                    baseY: y,
                    size,
                    density,
                    angle: Math.random() * 360,
                    color: color,
                    pulse: Math.random() * Math.PI
                });
            }
        };

        const mouse = { x: -9999, y: -9999 };
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        window.addEventListener('mousemove', handleMouseMove);

        let animationId: number;
        let time = 0;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            time += waveSpeed * 0.01;

            particles.forEach(p => {
                // Wave / Pulse motion
                if (autoAnimate) {
                    p.pulse += pulseSpeed * 0.01;
                    p.x = p.baseX + Math.sin(p.pulse) * (waveAmplitude * 10);
                    p.y = p.baseY + Math.cos(p.pulse) * (waveAmplitude * 10);
                }

                // Mouse Interaction (Magnet/Antigravity)
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;

                // Effective radius calculation based on magnetRadius prop (scaled up for usability)
                const maxDistance = magnetRadius * 20;
                const force = (maxDistance - distance) / maxDistance;
                const directionX = forceDirectionX * force * p.density * fieldStrength;
                const directionY = forceDirectionY * force * p.density * fieldStrength;

                if (distance < maxDistance) {
                    p.x -= directionX;
                    p.y -= directionY;
                } else {
                    if (p.x !== p.baseX) {
                        const dx2 = p.x - p.baseX;
                        p.x -= dx2 * lerpSpeed;
                    }
                    if (p.y !== p.baseY) {
                        const dy2 = p.y - p.baseY;
                        p.y -= dy2 * lerpSpeed;
                    }
                }

                // Draw
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 1 - (distance / (maxDistance * 2)); // Fade out near mouse? Or far? Let's keep it solid but maybe size varies
                if (ctx.globalAlpha < 0.2) ctx.globalAlpha = 0.2;

                ctx.beginPath();
                if (particleShape === 'capsule') {
                    // Draw capsule-ish (elongated circle)
                    ctx.ellipse(p.x, p.y, p.size * 2, p.size, p.angle, 0, Math.PI * 2);
                } else if (particleShape === 'square') {
                    ctx.rect(p.x, p.y, p.size * 2, p.size * 2);
                } else {
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                }
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', setSize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [count, magnetRadius, waveSpeed, waveAmplitude, particleSize, lerpSpeed, color, autoAnimate, particleVariance, pulseSpeed, particleShape, fieldStrength]);

    return (
        <canvas ref={canvasRef} className="block w-full h-full" />
    );
};

export default Antigravity;
