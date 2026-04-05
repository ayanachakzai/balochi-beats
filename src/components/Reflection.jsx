import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Reflection.module.css'

gsap.registerPlugin(ScrollTrigger)

const BLOCKS = [
  {
    label: 'What Amplitude Taught',
    text: `I had assumed a lively folk performance would produce fast, erratic amplitude
jumps. What I saw instead was slow, sustained breathing — the sphere rising and falling
over several seconds at a time. That is the dambura. Long notes, held. No rush.
The visualiser showed time, not just loudness.`,
  },
  {
    label: 'What FFT Taught',
    text: `The left side of the frequency ring is almost always fully lit. The right side
only spikes occasionally. Looking at it, you immediately understand why the recording
sounds the way it does. This is a low instrument. Its energy lives near the floor.
FFT made that impossible to misread.`,
  },
  {
    label: 'What Beats Taught',
    text: `Beat detection was the most surprising part. I expected the pattern to be
irregular — folk music, hand-plucked, no metronome. But the saffron particle bursts came
at recognisable intervals. There is a pulse in there. It is not loud or insistent.
It is simply present, the way heartbeats are present.`,
  },
]

export default function Reflection() {
  const sectionRef  = useRef(null)
  const quoteRef    = useRef(null)
  const quoteWords  = useRef([])
  const blocksRef   = useRef([])
  const ruleRef     = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote — word by word
      const words = quoteWords.current.filter(Boolean)
      if (words.length) {
        gsap.fromTo(words,
          { y: 20, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.55,
            stagger: 0.07,
            ease: 'cubic-bezier(0.23,1,0.32,1)',
            scrollTrigger: { trigger: quoteRef.current, start: 'top 75%' },
          }
        )
      }

      // Saffron rule
      gsap.fromTo(ruleRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1, opacity: 1, duration: 0.8, transformOrigin: 'center',
          ease: 'power2.out',
          scrollTrigger: { trigger: ruleRef.current, start: 'top 80%' },
        }
      )

      // Blocks stagger
      const blocks = blocksRef.current.filter(Boolean)
      if (blocks.length) {
        gsap.fromTo(blocks,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.8,
            stagger: 0.25,
            ease: 'cubic-bezier(0.23,1,0.32,1)',
            scrollTrigger: { trigger: blocks[0], start: 'top 80%' },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const quoteText = 'This project started as a technical exercise. It ended as something more personal.'.split(' ')

  return (
    <section ref={sectionRef} className={styles.section} id="reflection">
      <div className={styles.inner}>

        {/* Decorative quote mark */}
        <div className={styles.decorQuote} aria-hidden="true">"</div>

        {/* Lead quote */}
        <blockquote ref={quoteRef} className={styles.leadQuote}>
          {quoteText.map((w, i) => (
            <React.Fragment key={i}>
              <span
                ref={el => quoteWords.current[i] = el}
                className={styles.quoteWord}
              >
                {w}
              </span>{' '}
            </React.Fragment>
          ))}
        </blockquote>

        {/* Saffron rule */}
        <div ref={ruleRef} className={styles.saffronLine} />

        {/* Reflection blocks */}
        {BLOCKS.map((b, i) => (
          <div
            key={i}
            ref={el => blocksRef.current[i] = el}
            className={styles.block}
          >
            <span className={styles.blockLabel}>{b.label}</span>
            <p className={styles.blockText}>{b.text}</p>
          </div>
        ))}

        {/* Credits */}
        <div className={styles.credits}>
          <div className={styles.creditRow}>
            <span className={styles.creditKey}>Music</span>
            <span className={styles.creditVal}>Ustad Noor Bakhsh — Aaye Ho Meri Zindagi Mein Tum Bahar Banke</span>
          </div>
          <div className={styles.creditRow}>
            <span className={styles.creditKey}>Instrument</span>
            <span className={styles.creditVal}>Homemade electric dambura, Balochistan</span>
          </div>
          <div className={styles.creditRow}>
            <span className={styles.creditKey}>Python</span>
            <span className={styles.creditVal}>Dorothy — amplitude, FFT, beat detection</span>
          </div>
          <div className={styles.creditRow}>
            <span className={styles.creditKey}>Web</span>
            <span className={styles.creditVal}>Three.js · Web Audio API · GSAP · Lenis · React</span>
          </div>
        </div>

        <p className={styles.closing}>
          Week 5 &nbsp;—&nbsp; Creative Data Methods &nbsp;—&nbsp; UAL Creative Computing Institute
        </p>

      </div>
    </section>
  )
}
