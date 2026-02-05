import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const BlackHoleCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useGSAP(() => {
        // 1. Setup GSAP quickTo for high-performance mouse tracking
        // This is much faster than standard .to() for mouse movement
        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.6, ease: "power3.out" });

        // 2. Mouse Move Listener
        const handleMouseMove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        // 3. Hover Listeners (detecting links/buttons to "grow" the gravity well)
        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add listeners to window and specific interactive elements
        window.addEventListener('mousemove', handleMouseMove);

        // Select all interactive elements (you can add more selectors like '.card')
        const targets = document.querySelectorAll('a, button, input, textarea');
        targets.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            targets.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    // 4. Animate the scale when hovering interactive elements
    useGSAP(() => {
        gsap.to(cursorRef.current, {
            scale: isHovering ? 2.5 : 1, // Grow large to "consume" the button
            duration: 0.3,
            ease: "back.out(1.7)", // A slight bounce for organic feel
        });
    }, [isHovering]);

    return (
        <div
            ref={cursorRef}
            className="hidden md:block fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            style={{
                // THE "BLACK HOLE" ILLUSION
                // 1. Blur the background content
                backdropFilter: "blur(6px)",
                // 2. Clear background but add a very subtle tint
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                // 3. The Border: A glowing accretion disk
                border: "1px solid rgba(255, 255, 255, 0.3)",
                // 4. The Shadow: This creates the "bending" depth effect
                // Inset shadow makes it look like a hole, Drop shadow makes it glow
                boxShadow: `
          inset 0 0 20px rgba(0,0,0, 0.8), 
          0 0 15px rgba(255, 255, 255, 0.1)
        `
            }}
        />
    );
};

export default BlackHoleCursor;