import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Musician from './components/Musician'
import Reflection from './components/Reflection'
import Visualiser from './components/Visualiser'
import VisualiserSection from './components/VisualiserSection'
import styles from './App.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const visualiserRef = useRef(null)
  const ampRef = useRef(null)
  const fftRef = useRef(null)
  const beatsRef = useRef(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return undefined

    const lenis = new Lenis({
      duration: 0.95,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    const tick = time => lenis.raf(time * 1000)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(tick)
    }
  }, [])

  useEffect(() => {
    const triggers = []
    const sections = [
      { ref: ampRef, mode: 'amplitude' },
      { ref: fftRef, mode: 'fft' },
      { ref: beatsRef, mode: 'beats' },
    ]

    const id = window.setTimeout(() => {
      sections.forEach(({ ref, mode }) => {
        if (!ref.current) return
        triggers.push(
          ScrollTrigger.create({
            trigger: ref.current,
            start: 'top 56%',
            onEnter: () => visualiserRef.current?.setMode(mode),
            onEnterBack: () => visualiserRef.current?.setMode(mode),
          })
        )
      })
    }, 220)

    return () => {
      window.clearTimeout(id)
      triggers.forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className={styles.main}>
      <Visualiser ref={visualiserRef} />

      <section className={styles.manualGrid} aria-label="Analysis modules">
        <VisualiserSection sectionRef={ampRef} mode="amplitude" />
        <VisualiserSection sectionRef={fftRef} mode="fft" />
        <VisualiserSection sectionRef={beatsRef} mode="beats" />
      </section>

      <Musician />
      <Reflection />
    </main>
  )
}
