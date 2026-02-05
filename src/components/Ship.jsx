import React, { useRef } from "react";
import astra from "../assets/astra_vanguard.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Ship = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from("h2", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".ship-info", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            }, "-=0.5")
            .from(".ship-image", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=0.8");

    }, { scope: containerRef });

    return (
        <div id="ships" ref={containerRef} className="m-4 md:my-10 md:mx-auto px-4 md:px-10 bg-white max-w-6xl font-space-grotesk">

            {/* Title */}
            <div className="flex items-center justify-center mb-10">
                <h2 className="text-5xl font-unbounded uppercase tracking-wide">
                    Astra Vanguard
                </h2>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-auto md:h-[600px]">

                {/* LEFT — Goal + Objective */}
                <div className="ship-info rounded-2xl p-6 text-black border border-gray-200 flex flex-col justify-start bg-gray-50">

                    <div className="mb-6">
                        <h1 className="font-bold text-lg mb-2">Goal</h1>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Long-range exploration and scientific surveying of uncharted
                            systems. Designed for autonomous missions lasting multiple years
                            without resupply.
                        </p>
                    </div>

                    <div>
                        <h1 className="font-bold text-lg mb-2">Objective</h1>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Establish deep-space reconnaissance, deploy probes, and maintain
                            sustained orbital research with full mission recovery capability.
                        </p>
                    </div>
                </div>

                {/* CENTER — Technical Overview */}
                <div className="ship-info rounded-2xl p-6 text-black border border-gray-200 bg-gray-50 flex flex-col">

                    <h1 className="font-bold text-lg mb-4">Technical Overview</h1>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm">

                        <span className="text-gray-500">Class</span>
                        <span>Deep Space Explorer</span>

                        <span className="text-gray-500">Length</span>
                        <span>410 m</span>

                        <span className="text-gray-500">Crew</span>
                        <span>120 personnel</span>

                        <span className="text-gray-500">Propulsion</span>
                        <span>Dual fusion drives</span>

                        <span className="text-gray-500">Max Speed</span>
                        <span>0.35c · Warp 3.2 FTL</span>

                        <span className="text-gray-500">Power Core</span>
                        <span>Helium-3 fusion reactor</span>


                        <span className="text-gray-500">Systems</span>
                        <span>Quantum sensors · AI autopilot · Probe bay</span>
                    </div>
                </div>

                {/* RIGHT — Large Image */}
                <div className="ship-image md:col-start-2 md:row-start-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg bg-black">

                    <img
                        src={astra}   // <-- place your generated image here
                        alt="Astra Vanguard spacecraft"
                        className="w-full h-full object-cover"
                    />

                </div>
            </div>
        </div>
    );
};
