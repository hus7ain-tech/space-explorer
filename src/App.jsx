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
