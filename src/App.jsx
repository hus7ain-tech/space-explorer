import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import Hero from './pages/Hero'
import { Nebula } from './pages/Nebula'
import { Timeline } from './pages/TImeline'
import { Contact } from './components/Contact'
import BlackHoleCursor from './components/BlackHoleCursor'
import { Ship } from './components/Ship'
import { Footer } from './components/Footer'
// import GrainOverlay from './components/GrainyOverlay'; // Import the new component

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleAnchorClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          lenis.scrollTo(targetElement, { duration: 1.5 }); // Added duration for smoother effect
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, [])

  return (
    <div>
      <BlackHoleCursor />
      <Navbar />
      <Hero />
      <Nebula />
      <Timeline />
      <Ship />
      <Contact />
      <Footer />
    </div>
  )
}
