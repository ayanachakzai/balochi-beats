import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Visualiser        from './components/Visualiser'
import Marquee           from './components/Marquee'
import Musician          from './components/Musician'
import VisualiserSection from './components/VisualiserSection'
import Reflection        from './components/Reflection'
import Cursor            from './components/Cursor'
import SectionDivider    from './components/SectionDivider'
import styles            from './App.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const visualiserRef = useRef(null)
  const ampRef        = useRef(null)
  const fftRef        = useRef(null)
  const beatsRef      = useRef(null)

  // ── Lenis + GSAP ──────────────────────────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration:    1.35,
      easing:      t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(time => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  // ── ScrollTrigger mode switches ───────────────────────────────────────────
  useEffect(() => {
    const pairs = [
      { ref: ampRef,   mode: 'amplitude' },
      { ref: fftRef,   mode: 'fft'       },
      { ref: beatsRef, mode: 'beats'     },
    ]

    const triggers = []

    // slight delay to let VisualiserSection components mount + assign refs
    const id = setTimeout(() => {
      pairs.forEach(({ ref, mode }) => {
        if (!ref.current) return
        triggers.push(
          ScrollTrigger.create({
            trigger:     ref.current,
            start:       'top 58%',
            onEnter:     () => visualiserRef.current?.setMode(mode),
            onEnterBack: () => visualiserRef.current?.setMode(mode),
          })
        )
      })
    }, 400)

    return () => {
      clearTimeout(id)
      triggers.forEach(t => t.kill())
    }
  }, [])

  return (
    <>
      <Cursor />

      {/* Fixed grain overlay — NOT on canvas section */}
      <div className={styles.grain} aria-hidden="true" />

      <Visualiser ref={visualiserRef} />

      <main className={styles.main}>
        <Marquee />
        <SectionDivider />

        <Musician />
        <SectionDivider />

        <VisualiserSection sectionRef={ampRef}   mode="amplitude" />
        <SectionDivider />

        <VisualiserSection sectionRef={fftRef}   mode="fft" />
        <SectionDivider />

        <VisualiserSection sectionRef={beatsRef} mode="beats" />
        <SectionDivider />

        <Reflection />
      </main>
    </>
  )
}
