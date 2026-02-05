import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);

    // Canvas Animation Logic
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.originX = this.x; // Store original position
                this.originY = this.y;
                this.vx = 0; // Start static
                this.vy = 0;
                this.size = Math.random() * 2;
                this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`;
            }

            update() {
                // Mouse interaction (Repulsion)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const repelDistance = 200;

                if (distance < repelDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (repelDistance - distance) / repelDistance; // Linear falloff
                    const repelStrength = 3;

                    this.vx -= forceDirectionX * force * repelStrength;
                    this.vy -= forceDirectionY * force * repelStrength;
                }

                // Spring back to origin
                const springX = (this.originX - this.x) * 0.05; // Spring stiffness
                const springY = (this.originY - this.y) * 0.05;

                this.vx += springX;
                this.vy += springY;

                // Friction
                this.vx *= 0.9;
                this.vy *= 0.9;

                // Update position
                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const particleCount = Math.min(window.innerWidth * 0.5, 1000); // Scale count with screen size
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.fillStyle = '#030303';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // GSAP Text Animations
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from(containerRef.current, { opacity: 0, duration: 1.5 })
            .from(titleRef.current, { y: 100, opacity: 0, duration: 1, skewY: 7 }, '-=1')
            .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
            .from(ctaRef.current, { y: 20, opacity: 0, scale: 0.9, duration: 0.6 }, '-=0.4');

        // Background Color Transition ScrollTrigger
        gsap.to(containerRef.current, {
            backgroundColor: "#ffffff",
            color: "#000000",
            duration: 0.3,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%", // Trigger when bottom of hero is 20% from top (almost out)
                toggleActions: "play reverse play reverse", // Play when passing down, reverse when passing up
            },
            markers: true,
        });

        // Fade out canvas/stars
        gsap.to(canvasRef.current, {
            opacity: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "bottom 20%",
                toggleActions: "play reverse play reverse",
            }
        });

        // Ensure text stays visible (optional specific text color overrides can go here if needed)

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#030303] text-white">
            <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_70%)] z-10 pointer-events-none blur-3xl" />

            {/* Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 block"
            />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-20 text-center pointer-events-none">

                {/* Main Heading */}
                <div className="overflow-hidden mb-6">
                    <h1
                        ref={titleRef}
                        className="text-6xl uppercase md:text-7xl lg:text-9xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 will-change-transform font-space-grotesk"
                    >
                        Explore the <br />
                        <span className="text-transparent font-source-serif">Unknown</span>
                    </h1>
                </div>

                {/* Subheading */}
                <p
                    ref={subtitleRef}
                    className="font-space-grotesk text-lg md:text-xl text-gray-400 max-w-2xl mb-12 tracking-wide font-light"
                >
                    Journey beyond the event horizon. Discover new worlds, ancient civilizations, and the mysteries that lie within the deep void.
                </p>

                {/* CTA Button */}
                <div ref={ctaRef} className="pointer-events-auto">
                    <button
                        className="
                            group relative px-8 py-4 bg-white text-black 
                            font-unbounded font-bold text-sm tracking-widest uppercase
                            overflow-hidden
                            transition-all duration-300
                        "
                    >
                        <div className="relative overflow-hidden h-[1.2em]">
                            <span className="block group-hover:-translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                                Start exploring
                            </span>
                            <span className="absolute top-0 left-0 block translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]">
                                Start exploring
                            </span>
                        </div>
                    </button>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce pointer-events-none">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-500">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
        </div>
    );
};

export default Hero;