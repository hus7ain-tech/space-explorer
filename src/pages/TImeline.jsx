import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    {
        year: 'T+0',
        title: 'The Big Bang',
        description: 'The moment of creation. Infinite density, infinite heat. The universe begins its rapid expansion from a singularity.',
    },
    {
        year: 'T+380k Years',
        title: 'Recombination',
        description: 'The universe cools enough for protons and electrons to combine into neutral hydrogen atoms. Light is finally free to travel—the Cosmic Microwave Background is born.',
    },
    {
        year: 'T+100M Years',
        title: 'Star Formation',
        description: 'Gravity pulls gas clouds together. The first stars ignite, ending the Cosmic Dark Ages and illuminating the void.',
    },
    {
        year: 'Present Day',
        title: 'You Are Here',
        description: 'A fleeting moment in cosmic time. Humanity looks up, wondering what lies beyond the veil of night.',
    },
    {
        year: 'T+4B Years',
        title: 'Andromeda Collision',
        description: 'Our Milky Way merges with the Andromeda galaxy, creating a new, elliptical galaxy. The night sky changes forever.',
    },
];

const TimelineItem = ({ item, index, isLast }) => {
    const itemRef = useRef(null);
    const textRef = useRef(null);

    // Zero-G Floating Effect
    useGSAP(() => {
        gsap.to(textRef.current, {
            y: 5, // Reduced movement for cleaner look
            duration: 3 + Math.random() * 2,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
            delay: Math.random() * 2,
        });
    }, { scope: itemRef });

    return (
        <div
            ref={itemRef}
            className={`relative flex items-start w-full ${isLast ? 'mb-0' : 'mb-24'}`}
        >
            {/* Node on the Line */}
            <div className="absolute left-[21px] top-2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10 box-content shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

            {/* Content Container */}
            <div className="pl-8 md:pl-16 w-full text-left">
                <div ref={textRef}>
                    <span className="font-unbounded text-accent text-sm opacity-80 mb-1 block">{item.year}</span>
                    <h3 className="text-2xl font-bold font-unbounded text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 font-open-sans leading-relaxed max-w-2xl">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const Timeline = () => {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);
    const lineRef = useRef(null);
    const glowLineRef = useRef(null);

    useGSAP(() => {
        // Animate the glow line height as user scrolls
        gsap.fromTo(glowLineRef.current,
            { height: '0%' },
            {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: 'top center',
                    end: 'bottom bottom',
                    scrub: 1,
                }
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative min-h-screen bg-[#1a1a1a] py-20 overflow-hidden">
            {/* Sunrise Gradient Effect */}
            <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_70%)] z-0 pointer-events-none blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-center text-5xl font-unbounded text-white mb-32 uppercase tracking-widest opacity-90">
                    Timeline of the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Cosmos</span>
                </h2>

                <div ref={wrapperRef} className="relative max-w-4xl mx-auto">
                    {/* Continuous Line (Base) */}
                    <div
                        ref={lineRef}
                        className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-800 to-transparent opacity-30"
                    />

                    {/* Continuous Line (Glow) */}
                    <div
                        ref={glowLineRef}
                        className="absolute left-[20px] top-0 w-[2px] bg-gradient-to-b from-white via-white to-transparent shadow-[0_0_15px_rgba(59,130,246,0.8)] z-0"
                    />

                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            item={item}
                            index={index}
                            isLast={index === timelineData.length - 1}
                        />
                    ))}
                </div>

                <div className="text-center mt-32 pl-16">
                    <p className="text-gray-600 font-mono text-sm uppercase tracking-[0.5em]">End of Known Data</p>
                </div>
            </div>
            {/* Solar Flare Gradient Effect */}
            <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_bottom_right,rgba(255,77,0,0.15),transparent_70%)] z-0 pointer-events-none blur-3xl" />
        </div>
    );
};
