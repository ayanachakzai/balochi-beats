import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './VisualiserSection.module.css'

gsap.registerPlugin(ScrollTrigger)

// ── Python source ──────────────────────────────────────────────────────────
const CODE = {
  amplitude: `from dorothy import Dorothy

dot = Dorothy()

class MySketch:
    def __init__(self):
        dot.start_loop(self.setup, self.draw)

    def setup(self):
        # stream Balochi audio from file
        dot.music.start_file_stream("balochi_audio.wav")
        dot.music.play()

    def draw(self):
        dot.background((40, 0, 60))  # deep purple

        amp = dot.music.amplitude()
        r = 50 + amp * 900  # map to radius

        dot.fill((180, 20, 40))  # balochi red
        dot.circle(
            (dot.width//2, dot.height//2),
            r
        )

MySketch()`,

  fft: `from dorothy import Dorothy

dot = Dorothy()

class MySketch:
    def __init__(self):
        dot.start_loop(self.setup, self.draw)

    def setup(self):
        dot.music.start_file_stream("balochi_audio.wav")
        dot.music.play()

    def draw(self):
        dot.background((5, 10, 35))  # deep navy

        amp = dot.music.amplitude()
        size = 80 + amp * 900
        dot.fill((0, 180, 170))
        dot.circle((dot.width//2, dot.height//2), size)

        fft = dot.music.fft()
        if fft is None:  # guard clause
            return

        half = len(fft) // 2

        # Low frequencies — embroidered red
        for i in range(half):
            h = fft[i] * 50
            x = int(i * 3)
            dot.fill((200, 40, 40))
            dot.rectangle((x, dot.height), (x + 2, dot.height - h))

        # High frequencies — Balochi orange
        for i in range(half, len(fft)):
            h = fft[i] * 200
            x = 450 + int((i - half) * 3)
            dot.fill((255, 160, 40))
            dot.rectangle((x, dot.height), (x + 2, dot.height - h))

MySketch()`,

  beats: `from dorothy import Dorothy
import numpy as np

dot = Dorothy()

class MySketch:
    def __init__(self):
        dot.start_loop(self.setup, self.draw)

    def setup(self):
        dot.music.start_file_stream("balochi_audio.wav")
        dot.music.play()

    def draw(self):
        dot.background((10, 10, 10))

        amp = dot.music.amplitude()
        size = 70 + amp * 900

        dot.fill((220, 40, 40))
        dot.circle((dot.width // 2, dot.height // 2), size)

        fft = dot.music.fft()
        if fft is not None:
            num_bars = 20
            bars = fft[:num_bars]
            bar_width = dot.width // num_bars

            for i in range(num_bars):
                h = bars[i] * 100
                if i < num_bars // 2:
                    dot.fill((220, 60, 60))
                else:
                    dot.fill((40, 80, 200))
                x1 = i * bar_width
                x2 = x1 + bar_width - 2
                dot.rectangle(
                    (x1, dot.height),
                    (x2, dot.height - h)
                )

        if dot.music.is_beat():
            dot.fill((255, 200, 60))
            dot.circle(
                (dot.width // 2, dot.height // 2),
                size + 40
            )

MySketch()`,
}

const FILENAMES = {
  amplitude: '1__balochi_visualiser_amp.py',
  fft:       '2__balochi_visualiser_amp_fft.py',
  beats:     '3__balochi_visualiser_with_beats.py',
}

// ── Syntax highlight ───────────────────────────────────────────────────────
function highlight(raw) {
  return raw
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    // comments
    .replace(/(#[^\n]*)/g,
      '<span class="c">$1</span>')
    // keywords
    .replace(/\b(from|import|class|def|if|else|elif|for|in|range|return|not|None|True|False|and|or)\b/g,
      '<span class="kw">$1</span>')
    // strings
    .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,
      '<span class="str">$1</span>')
    // numbers – only bare numbers not inside words
    .replace(/(?<![.\w])(\d+)(?![.\w])/g,
      '<span class="num">$1</span>')
    // built-in function names
    .replace(/\b(Dorothy|start_file_stream|play|background|fill|circle|amplitude|rectangle|fft|is_beat|start_loop)\b/g,
      '<span class="fn">$1</span>')
}

// ── IDE Code block ─────────────────────────────────────────────────────────
function CodeWindow({ mode, className }) {
  const wrapRef  = useRef(null)
  const [text, setText] = useState('')
  const [active, setActive] = useState(false)
  const iRef  = useRef(0)
  const rafRef = useRef(null)
  const code = CODE[mode]

  // trigger on intersection
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !active) setActive(true) },
      { threshold: 0.15 }
    )
    if (wrapRef.current) obs.observe(wrapRef.current)
    return () => obs.disconnect()
  }, [active])

  // typewriter
  useEffect(() => {
    if (!active) return
    iRef.current = 0
    setText('')
    function tick() {
      iRef.current = Math.min(iRef.current + 5, code.length)
      setText(code.slice(0, iRef.current))
      if (iRef.current < code.length) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, code])

  return (
    <div ref={wrapRef} className={`${styles.ide} ${className || ''}`}>
      {/* Chrome */}
      <div className={styles.ideChrome}>
        <span className={styles.dot} style={{ background: '#ff5f57' }} />
        <span className={styles.dot} style={{ background: '#febc2e' }} />
        <span className={styles.dot} style={{ background: '#28c840' }} />
        <span className={styles.ideFile}>{FILENAMES[mode]}</span>
      </div>
      {/* Code */}
      <pre
        className={styles.ideCode}
        dangerouslySetInnerHTML={{ __html: highlight(text) }}
      />
      <span className={styles.ideCursor}>▋</span>
    </div>
  )
}

// ── Callout box ────────────────────────────────────────────────────────────
function Callout({ text }) {
  return (
    <div className={styles.callout}>
      <span className={styles.calloutLabel}>Why it works</span>
      <p className={styles.calloutText}>{text}</p>
    </div>
  )
}

// ── SECTION A — Amplitude (text left, code right, split) ──────────────────
function AmplitudeSection({ sectionRef }) {
  const secRef     = useRef(null)
  const ghostRef   = useRef(null)
  const headRef    = useRef(null)
  const codeRef    = useRef(null)
  const calloutRef = useRef(null)

  // expose outer ref
  useEffect(() => {
    if (sectionRef) sectionRef.current = secRef.current
  }, [sectionRef])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ghost number drifts left
      gsap.to(ghostRef.current, {
        x: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: secRef.current,
          start: 'top bottom',
          end:   'bottom top',
          scrub: 1.5,
        },
      })

      // heading slides in from left
      gsap.fromTo(headRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9,
          ease: 'cubic-bezier(0.23,1,0.32,1)',
          scrollTrigger: { trigger: headRef.current, start: 'top 78%' },
        }
      )

      // code block slides in from right
      const ampIdeEl = codeRef.current?.firstElementChild
      if (ampIdeEl) gsap.set(ampIdeEl, { opacity: 1 })
      gsap.fromTo(codeRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, delay: 0.3,
          ease: 'cubic-bezier(0.23,1,0.32,1)',
          scrollTrigger: { trigger: codeRef.current, start: 'top 80%' },
        }
      )

      // callout fades up
      gsap.fromTo(calloutRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7,
          ease: 'cubic-bezier(0.23,1,0.32,1)',
          scrollTrigger: { trigger: calloutRef.current, start: 'top 82%' },
        }
      )
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={secRef} className={styles.section} style={{ background: '#030a0b' }} id="vis-amplitude">
      <span ref={ghostRef} className={`${styles.ghost} ${styles.ghostLeft}`}>01</span>

      <div className={styles.splitGrid}>
        {/* LEFT 55% */}
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>Visualiser 01 — Amplitude</span>
          <h2 ref={headRef} className={styles.heading}>
            Loudness mapped to a{' '}
            <em className={styles.saffron}>breathing</em> sphere
          </h2>
          <p className={styles.body}>
            Amplitude is the simplest reading of audio: how loud is it right now?
            I mapped that single value to the radius of a circle — 50 pixels at silence,
            950 at peak. The sketch reads <code className={styles.inlineCode}>dot.music.amplitude()</code> every
            frame and redraws.
          </p>
          <p className={styles.body}>
            Because the dambura has a lot of sustained low energy, the sphere never
            snaps or flickers. It <em>breathes</em> — rising and falling over several
            seconds at a time. That slow, continuous movement is the instrument's
            character made visible.
          </p>
          <p className={styles.body}>
            The 3D version uses the same value to drive both the sphere scale and a
            sine-wave vertex displacement across its geometry, so it warps organically
            rather than uniformly growing.
          </p>
          <div ref={calloutRef}>
            <Callout text="The simplest reading of any audio. No frequency analysis, no beat detection. Just loudness over time — and that alone tells you something real about the dambura." />
          </div>
        </div>

        {/* RIGHT 45% — sticky */}
        <div className={styles.codeCol} ref={codeRef}>
          <CodeWindow mode="amplitude" />
        </div>
      </div>
    </section>
  )
}

// ── SECTION B — FFT (code left, text right, mirrored) ─────────────────────
function FFTSection({ sectionRef }) {
  const secRef     = useRef(null)
  const ghostRef   = useRef(null)
  const headRef    = useRef(null)
  const codeRef    = useRef(null)
  const calloutRef = useRef(null)

  useEffect(() => {
    if (sectionRef) sectionRef.current = secRef.current
  }, [sectionRef])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ghostRef.current, {
        x: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: secRef.current,
          start: 'top bottom',
          end:   'bottom top',
          scrub: 1.5,
        },
      })

      gsap.fromTo(headRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9,
          ease: 'cubic-bezier(0.23,1,0.32,1)',
          scrollTrigger: { trigger: headRef.current, start: 'top 78%' },
        }
      )

      // Force .ide visible — CSS opacity:0 is overridden by inline style
      const ideEl = codeRef.current?.firstElementChild
      if (ideEl) gsap.set(ideEl, { opacity: 1 })

      // Slide the wrapper in — wrapper opacity controls the block's visibility
      gsap.fromTo(codeRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, delay: 0.3,
          ease: 'cubic-bezier(0.23,1,0.32,1)',
          scrollTrigger: { trigger: codeRef.current, start: 'top 80%' },
        }
      )

      gsap.fromTo(calloutRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7,
          ease: 'cubic-bezier(0.23,1,0.32,1)',
          scrollTrigger: { trigger: calloutRef.current, start: 'top 82%' },
        }
      )
    }, secRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={secRef} className={styles.section} style={{ background: '#040d0d' }} id="vis-fft">
      <span ref={ghostRef} className={`${styles.ghost} ${styles.ghostRight}`}>02</span>

      <div className={`${styles.splitGrid} ${styles.splitGridFlip}`}>
        {/* LEFT 45% — sticky code */}
        <div className={styles.codeCol} ref={codeRef}>
          <CodeWindow mode="fft" />
        </div>

        {/* RIGHT 55% */}
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>Visualiser 02 — FFT</span>
          <h2 ref={headRef} className={styles.heading}>
            Frequency split into{' '}
            <em className={styles.tealBright}>standing stones</em>
          </h2>
          <p className={styles.body}>
            FFT (Fast Fourier Transform) splits the audio into frequency bands — from
            very low to very high. Instead of "how loud?" we see "which frequencies are
            active right now?" 128 bars rise from the desert plane in a ring: the first
            64 are crimson for low frequencies, the last 64 teal-bright for highs.
          </p>
          <p className={styles.body}>
            The left side of the ring — low frequencies — is almost always fully lit.
            The right side only spikes occasionally on certain plucks. This asymmetry is
            not a flaw. It is a portrait of the instrument. The dambura is a low instrument.
            Its energy lives near the floor.
          </p>
          <p className={styles.body}>
            In FFT mode the desert plane goes flat so the bars tell the full story.
            The camera pulls back to show the complete stone circle.
          </p>
          <div ref={calloutRef}>
            <Callout text="The left side never really stops. The right side wakes up briefly and goes quiet. In thirty seconds of watching it, you understand the dambura better than any description could explain." />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── SECTION C — Beats (full-width, cinematic) ─────────────────────────────
function BeatsSection({ sectionRef }) {
  const secRef    = useRef(null)
  const ghostRef  = useRef(null)
  const headRef   = useRef(null)
  const wordsRef  = useRef([])

  useEffect(() => {
    if (sectionRef) sectionRef.current = secRef.current
  }, [sectionRef])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ghost number
      gsap.to(ghostRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: secRef.current,
          start: 'top bottom',
          end:   'bottom top',
          scrub: 1.5,
        },
      })

      // Heading words animate in one by one
      const words = wordsRef.current.filter(Boolean)
      if (words.length) {
        gsap.fromTo(words,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'cubic-bezier(0.23,1,0.32,1)',
            scrollTrigger: { trigger: headRef.current, start: 'top 75%' },
          }
        )
      }
    }, secRef)
    return () => ctx.revert()
  }, [])

  const headWords = ['A', 'saffron', 'shockwave', 'on', 'every', 'accent']

  return (
    <section ref={secRef} className={styles.section} style={{ background: '#060d0f' }} id="vis-beats">
      <span ref={ghostRef} className={`${styles.ghost} ${styles.ghostCentre}`}>03</span>

      <div className={styles.cinematicWrap}>
        {/* Top text */}
        <div className={styles.cinematicText}>
          <span className={styles.eyebrow}>Visualiser 03 — Beats</span>

          <h2 ref={headRef} className={styles.headingCinematic}>
            {headWords.map((w, i) => (
              <span
                key={i}
                ref={el => wordsRef.current[i] = el}
                className={
                  w === 'saffron' || w === 'shockwave'
                    ? `${styles.headWord} ${styles.saffron}`
                    : styles.headWord
                }
              >
                {w}{' '}
              </span>
            ))}
          </h2>

          <div className={styles.cinematicBody}>
            <p className={styles.body}>
              There is no heavy drum in this recording. But there are clear rhythmic
              accents in the plucking. When{' '}
              <code className={styles.inlineCode}>dot.music.is_beat()</code> fires, a
              gold circle flashes over the red one for a single frame.
            </p>
            <p className={styles.body}>
              In the 3D version this becomes a saffron RingGeometry shockwave that
              expands outward across the desert plane — scale 0 to 10, fading over
              45 frames. Multiple shockwaves stack. Stars pulse saffron simultaneously.
              The camera micro-shakes. Those brief gold moments make the rhythm readable
              at a glance without needing percussion.
            </p>
          </div>
        </div>

        {/* Code block — full width */}
        <div className={styles.cinematicCode}>
          <CodeWindow mode="beats" />
        </div>
      </div>
    </section>
  )
}

// ── Router ─────────────────────────────────────────────────────────────────
export default function VisualiserSection({ sectionRef, mode }) {
  if (mode === 'amplitude') return <AmplitudeSection sectionRef={sectionRef} />
  if (mode === 'fft')       return <FFTSection       sectionRef={sectionRef} />
  if (mode === 'beats')     return <BeatsSection     sectionRef={sectionRef} />
  return null
}
