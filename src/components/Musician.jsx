import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Musician.module.css'

gsap.registerPlugin(ScrollTrigger)

export default function Musician() {
  const sectionRef  = useRef(null)
  const imgRef      = useRef(null)
  const imgWrapRef  = useRef(null)
  const quoteRef    = useRef(null)
  const para1Ref    = useRef(null)
  const para2Ref    = useRef(null)

  // VanillaTilt
  useEffect(() => {
    if (!imgRef.current) return
    VanillaTilt.init(imgRef.current, {
      max: 8,
      speed: 500,
      glare: true,
      'max-glare': 0.18,
      perspective: 1100,
    })
    return () => imgRef.current?.vanillaTilt?.destroy()
  }, [])

  // GSAP ScrollTrigger
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on image
      gsap.to(imgWrapRef.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end:   'bottom top',
          scrub: true,
        },
      })

      // Quote fades up
      gsap.fromTo(quoteRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9,
          ease: 'cubic-bezier(0.23,1,0.32,1)',
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 78%',
          },
        }
      )

      // Paragraphs stagger
      gsap.fromTo([para1Ref.current, para2Ref.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'cubic-bezier(0.23,1,0.32,1)',
          scrollTrigger: {
            trigger: para1Ref.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section} id="musician">

      {/* ── Full-bleed image ── */}
      <div className={styles.imgOuter} ref={imgRef} data-cursor>
        <div className={styles.imgWrap} ref={imgWrapRef}>
          <img
            src="/ustaad-noor-bakhsh.jpg"
            alt="Ustad Noor Bakhsh playing the electric dambura"
            className={styles.img}
          />
        </div>
        <div className={styles.imgGradient} />
        <div className={styles.imgCredits}>
          <p className={styles.imgName}>Ustad Noor Bakhsh</p>
          <p className={styles.imgSub}>Electric Dambura &middot; Balochistan</p>
        </div>
      </div>

      {/* ── Text block ── */}
      <div className={styles.textBlock}>
        <blockquote ref={quoteRef} className={styles.pullQuote}>
          "His version is rough, low and minimal. The energy lives in the
          lower frequencies. There is no percussion. What you hear instead
          is closer to the landscape: vast, unhurried, resonant."
        </blockquote>

        <p ref={para1Ref} className={styles.body}>
          The dambura is a long-necked lute native to Balochistan. Ustad Noor Bakhsh's
          version is homemade and electric — run through a small amplifier powered by a
          motorcycle battery, performed outdoors for village audiences under open sky.
          There is no stage. There is no studio. There is just the instrument, the amplifier,
          and a field.
        </p>

        <p ref={para2Ref} className={styles.body}>
          The track is his interpretation of{' '}
          <em className={styles.songTitle}>Aaye Ho Meri Zindagi Mein Tum Bahar Banke</em>
          {' '}— from the 1996 Bollywood film Raja Hindustani. As a Hindi film song it is
          lush, orchestrated, produced across the full frequency spectrum. In his hands it
          becomes something else. I picked this recording because it connects to my culture,
          and because responding to it visually felt meaningful in a way no random track
          could replicate. Every colour in these visualisers carries weight.
        </p>
      </div>

    </section>
  )
}
