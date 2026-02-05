import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Navbar = () => {
    const navContainerRef = useRef(null);
    const lastScrollY = useRef(0);

    useGSAP(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY.current && currentScrollY > 50;

            // If scrolling down and not already hidden
            if (isScrollingDown) {
                gsap.to(navContainerRef.current, {
                    yPercent: -200,
                    duration: 0.5,
                    ease: 'power3.inOut'
                });
            } else {
                // If scrolling up
                gsap.to(navContainerRef.current, {
                    yPercent: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                });
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, { scope: navContainerRef }); // Scope isn't strictly necessary for window listener but good practice

    return (
        <div ref={navContainerRef} className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[600px] z-[100]">
            <nav className="
                flex items-center justify-between 
                px-4 md:px-8 py-4 
                rounded-full 
                backdrop-blur-xl 
                bg-white/5 
                border border-white/10 
                shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
            ">
                <div className="font-unbounded text-white font-bold text-lg tracking-wider">
                    COSMOS
                </div>

                <div className="flex items-center gap-8">
                    {[
                        { name: 'Mission', link: '#nebula' },
                        { name: 'Ships', link: '#ships' },
                        { name: 'Crew', link: '#crew' }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className="
                                group text-sm font-medium text-gray-300 
                                hover:text-white
                                transition-colors duration-300
                            "
                        >
                            <div className="relative overflow-hidden h-[1.2em]">
                                <span className="block group-hover:-translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                                    {item.name}
                                </span>
                                <span className="absolute top-0 left-0 block translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                                    {item.name}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
};
