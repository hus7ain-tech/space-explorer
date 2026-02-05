import React, { useRef } from 'react'
import nebulaImg from '../assets/nebula.jfif'
import eventHorizonImg from '../assets/event_horizon.jfif'
import quantumImg from '../assets/quantum_entanglement.jfif'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const slides = [
    {
        id: 'nebula',
        img: nebulaImg,
        heading: 'Nebula',
        text: "A nebula is a vast interstellar cloud of dust and gas where stars are born or formed from the remains of dying stars. These glowing, colorful structures are illuminated by nearby stellar radiation, making them some of the most visually striking objects in space."
    },
    {
        id: 'event_horizon',
        img: eventHorizonImg,
        heading: 'Event Horizon',
        text: 'Event Horizon There is a point of no return—a boundary where the pull is so strong that not even light can escape. This is the moment of immersion. When a user crosses the threshold of a truly great experience, the outside world fades, leaving only the journey ahead.'
    },
    {
        id: 'quantum',
        img: quantumImg,
        heading: 'Quantum Entanglement',
        text: 'Quantum Entanglement Distance is an illusion. In the vast network of the cosmos, particles remain connected across light-years, instantly affecting one another. Our connectivity reflects this cosmic web, binding users and interfaces together in a seamless, instantaneous dance of data.'
    }
]

export const Nebula = () => {
    const containerRef = useRef(null)
    const wrapperRef = useRef(null)

    useGSAP(() => {
        const totalSlides = slides.length;

        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            gsap.to(wrapperRef.current, {
                x: `-${(totalSlides - 1) * 100}vw`,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    end: `+=${totalSlides * 100}%`,
                }
            });
        });

    }, { scope: containerRef })

    return (
        <div ref={containerRef} className='relative min-h-screen md:h-screen bg-white overflow-hidden'>

            <div ref={wrapperRef} className='flex flex-col md:flex-row h-auto md:h-full w-full md:w-[300vw]'>
                {slides.map((slide) => (
                    <div key={slide.id} className='w-full md:w-screen h-screen md:h-full flex flex-col md:flex-row shrink-0 bg-white'>
                        <div className='w-full md:w-1/2 h-1/2 md:h-full' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}>
                            <img
                                src={slide.img}
                                alt={slide.id}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center p-8 md:p-12'>
                            <h2 className='text-black text-2xl md:text-4xl font-unbounded font-space-grotesk mb-4 md:mb-6'>{slide.heading}</h2>
                            <p className='text-black text-sm md:text-lg leading-relaxed text-justify font-space-grotesk text-gray-600 max-w-lg'>
                                {slide.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
