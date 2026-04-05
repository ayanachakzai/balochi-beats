import {
  useEffect, useRef, useImperativeHandle, forwardRef, useState,
} from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import styles from './Visualiser.module.css'

// ── GLSL ────────────────────────────────────────────────────────────────────

const PLANE_VERT = /* glsl */`
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uFlat;
  varying float vElev;
  varying vec2  vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float waves =
      sin(pos.x * 0.28 + uTime * 0.55) * cos(pos.z * 0.28 + uTime * 0.42) * 1.6
    + sin(pos.x * 0.65 + uTime * 0.90) * cos(pos.z * 0.50 + uTime * 0.35) * 0.7;

    float elev = waves * (uAmplitude * 2.8 + 0.4) * (1.0 - uFlat);
    pos.y += elev;
    vElev = elev;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const PLANE_FRAG = /* glsl */`
  uniform vec3  uColor;
  uniform float uAmplitude;
  varying float vElev;

  void main() {
    float t = clamp(vElev * 0.18 + 0.5, 0.0, 1.0);
    vec3 low  = vec3(0.040, 0.165, 0.160); /* --teal */
    vec3 high = vec3(0.165, 0.615, 0.565); /* --teal-bright */
    vec3 col  = mix(low, high, t) + uAmplitude * 0.15;
    gl_FragColor = vec4(col, 0.75);
  }
`

// ── Constants ────────────────────────────────────────────────────────────────
const BAR_COUNT   = 128
const BAR_RADIUS  = 10
const STAR_COUNT  = 3000

// ── Component ────────────────────────────────────────────────────────────────
const Visualiser = forwardRef(function Visualiser({ onModeChange }, ref) {
  // React state (UI only)
  const [started,    setStarted]    = useState(false)
  const [playing,    setPlaying]    = useState(false)
  const [activeMode, setActiveMode] = useState('amplitude')

  // DOM
  const canvasRef    = useRef(null)
  const audioRef     = useRef(null)
  const titleRef     = useRef(null)
  const subtitleRef  = useRef(null)
  const playBtnRef   = useRef(null)
  const overlayRef   = useRef(null)
  const modeBarRef   = useRef(null)

  // Three.js
  const rendererRef  = useRef(null)
  const sceneRef     = useRef(null)
  const cameraRef    = useRef(null)
  const clockRef     = useRef(new THREE.Clock())
  const rafRef       = useRef(null)

  // Meshes
  const sphereRef     = useRef(null)
  const sphereGeoRef  = useRef(null)
  const origPosRef    = useRef(null)
  const planeMtlRef   = useRef(null)
  const barsRef       = useRef([])
  const barGroupRef   = useRef(null)
  const starsRef      = useRef(null)
  const starsMtlRef   = useRef(null)
  const pointLightRef = useRef(null)
  const particlesRef  = useRef([])

  // Audio
  const audioCtxRef    = useRef(null)
  const analyserRef    = useRef(null)
  const dataArrayRef   = useRef(null)
  const beatActiveRef   = useRef(false)
  const beatIntervalRef = useRef(null)
  const beatTimeoutRef  = useRef(null)

  // Mode & interpolation state (mutated by GSAP, read in animate)
  const modeRef  = useRef('amplitude')
  const interpRef = useRef({
    sphereScale: 1.0,
    barOpacity:  0.0,
    planeFlat:   0.0,
    camZ:       14.0,
    camY:        4.5,
  })

  // ── Expose setMode to App.jsx (ScrollTrigger) ──────────────────────────
  useImperativeHandle(ref, () => ({
    setMode(m) { doModeTransition(m) },
  }))

  function doModeTransition(newMode) {
    if (modeRef.current === newMode) return
    modeRef.current = newMode
    setActiveMode(newMode)
    if (onModeChange) onModeChange(newMode)

    const p = interpRef.current
    const sph = sphereRef.current
    if (newMode === 'amplitude') {
      gsap.to(p, { sphereScale: 1.0, barOpacity: 0.0, planeFlat: 0.0, camZ: 14, camY: 4.5, duration: 1.2, ease: 'power2.inOut' })
      if (sph) { sph.material.color.set(0xb41428); sph.material.emissive.set(0xb41428) }
    } else if (newMode === 'fft') {
      gsap.to(p, { sphereScale: 0.25, barOpacity: 1.0, planeFlat: 1.0, camZ: 18, camY: 5.5, duration: 1.2, ease: 'power2.inOut' })
      if (sph) { sph.material.color.set(0x2a9d8f); sph.material.emissive.set(0x0d4d47) }
    } else {
      gsap.to(p, { sphereScale: 0.7, barOpacity: 1.0, planeFlat: 1.0, camZ: 16, camY: 5.0, duration: 1.2, ease: 'power2.inOut' })
      if (sph) { sph.material.color.set(0xe8a020); sph.material.emissive.set(0xe8a020) }
    }
  }

  // ── Three.js setup ────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    const W = canvas.clientWidth
    const H = canvas.clientHeight

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setSize(W, H, false)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = false
    rendererRef.current = renderer

    // Scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x060d0f)
    scene.fog = new THREE.FogExp2(0x060d0f, 0.018)
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 300)
    camera.position.set(0, 4.5, 14)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    // ── Lights ──
    const ambient = new THREE.AmbientLight(0xf5ede0, 0.25)
    scene.add(ambient)

    const pointLight = new THREE.PointLight(0xe8a020, 2.5, 35)
    pointLight.position.set(0, 6, 0)
    scene.add(pointLight)
    pointLightRef.current = pointLight

    // ── Desert Plane ──
    const planeGeo = new THREE.PlaneGeometry(200, 200, 120, 120)
    planeGeo.rotateX(-Math.PI / 2)
    const planeMtl = new THREE.ShaderMaterial({
      uniforms: {
        uTime:      { value: 0 },
        uAmplitude: { value: 0 },
        uFlat:      { value: 0 },
        uColor:     { value: new THREE.Color(0x1a5c5a) },
      },
      vertexShader:   PLANE_VERT,
      fragmentShader: PLANE_FRAG,
      wireframe:      true,
      transparent:    true,
    })
    const plane = new THREE.Mesh(planeGeo, planeMtl)
    plane.position.y = -1.5
    scene.add(plane)
    planeMtlRef.current = planeMtl

    // ── Stars ──
    const starGeo = new THREE.BufferGeometry()
    const starPos = new Float32Array(STAR_COUNT * 3)
    for (let i = 0; i < STAR_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.random() * Math.PI * 0.48  // upper hemisphere only
      const r     = 80 + Math.random() * 60
      starPos[i*3]   = r * Math.sin(phi) * Math.cos(theta)
      starPos[i*3+1] = r * Math.cos(phi) + 2
      starPos[i*3+2] = r * Math.sin(phi) * Math.sin(theta)
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    const starsMtl = new THREE.PointsMaterial({
      color: 0xf5ede0,
      size: 0.18,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    })
    const stars = new THREE.Points(starGeo, starsMtl)
    scene.add(stars)
    starsRef.current  = stars
    starsMtlRef.current = starsMtl

    // ── Central Sphere ──
    const sphereGeo = new THREE.SphereGeometry(1.6, 64, 32)
    const origPos   = sphereGeo.attributes.position.array.slice()
    const sphereMtl = new THREE.MeshStandardMaterial({
      color:             new THREE.Color(0x2a9d8f),
      emissive:          new THREE.Color(0x0d4d47),
      emissiveIntensity: 0.4,
      roughness: 0.55,
      metalness: 0.35,
    })
    const sphere = new THREE.Mesh(sphereGeo, sphereMtl)
    sphere.position.y = 0.5
    scene.add(sphere)
    sphereRef.current    = sphere
    sphereGeoRef.current = sphereGeo
    origPosRef.current   = origPos

    // ── Frequency Bars ──
    const barGroup = new THREE.Group()
    scene.add(barGroup)
    barGroupRef.current = barGroup

    const bars = []
    for (let i = 0; i < BAR_COUNT; i++) {
      const angle  = (i / BAR_COUNT) * Math.PI * 2
      const isLow  = i < BAR_COUNT / 2
      const barGeo = new THREE.BoxGeometry(0.09, 1, 0.09)
      barGeo.translate(0, 0.5, 0) // pivot bottom
      const barMtl = new THREE.MeshStandardMaterial({
        color:             isLow ? new THREE.Color(0xff4444) : new THREE.Color(0xffaa00),
        emissive:          isLow ? new THREE.Color(0xff2200) : new THREE.Color(0xff7700),
        emissiveIntensity: 2.2,
        roughness: 0.4,
        metalness: 0.3,
        transparent: true,
        opacity: 0,
      })
      const bar = new THREE.Mesh(barGeo, barMtl)
      bar.position.set(
        Math.sin(angle) * BAR_RADIUS,
        -1.5,
        Math.cos(angle) * BAR_RADIUS,
      )
      bar.scale.y = 0.02
      barGroup.add(bar)
      bars.push(bar)
    }
    barsRef.current = bars

    // ── Resize ──
    function onResize() {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }
    window.addEventListener('resize', onResize)

    // ── Animate ──
    const camDrift = { x: 0, y: 4.5, z: 14 }

    function animate() {
      rafRef.current = requestAnimationFrame(animate)
      const t    = clockRef.current.getElapsedTime()
      const lerp = interpRef.current

      // ── Audio ──
      let amplitude   = (Math.sin(t * 0.85) * 0.5 + 0.5) * 0.18 + 0.04
      let isBeat      = false
      let freqData    = null

      if (analyserRef.current && dataArrayRef.current) {
        analyserRef.current.getByteFrequencyData(dataArrayRef.current)
        freqData = dataArrayRef.current

        let sum = 0
        for (let i = 0; i < freqData.length; i++) sum += freqData[i]
        amplitude = sum / freqData.length / 255
      }

      // ── Beat: BPM timer ──
      if (beatActiveRef.current) {
        isBeat = true
        beatActiveRef.current = false
      }

      // ── Point light ──
      pointLight.intensity = 1.5 + amplitude * 4

      // ── Camera drift ──
      const driftX  = Math.sin(t * 0.09) * 1.8
      const driftY  = Math.sin(t * 0.065) * 0.6
      camera.position.x += (lerp.camZ * 0 + driftX - camera.position.x) * 0.03
      camera.position.y += (lerp.camY + driftY - camera.position.y) * 0.04
      camera.position.z += (lerp.camZ - camera.position.z) * 0.04
      camera.lookAt(0, 0.5, 0)

      // ── Plane shader ──
      planeMtl.uniforms.uTime.value      = t
      planeMtl.uniforms.uAmplitude.value = amplitude
      planeMtl.uniforms.uFlat.value      = lerp.planeFlat

      // ── Sphere vertex displacement ──
      const baseScale = Math.max(0.4, lerp.sphereScale)
      const targetSphereScale = baseScale * (1 + amplitude * 0.35)
      sphere.scale.setScalar(
        THREE.MathUtils.lerp(sphere.scale.x, targetSphereScale, 0.1)
      )

      const posAttr = sphereGeoRef.current.attributes.position
      const orig    = origPosRef.current
      for (let i = 0; i < posAttr.count; i++) {
        const ox = orig[i*3], oy = orig[i*3+1], oz = orig[i*3+2]
        const len = Math.sqrt(ox*ox + oy*oy + oz*oz) || 1
        const nx = ox/len, ny = oy/len, nz = oz/len
        const d =
          Math.sin(ox * 2.8 + t * 1.3) *
          Math.cos(oy * 2.8 + t * 0.95) *
          Math.sin(oz * 2.8 + t * 0.75)
        const disp = d * amplitude * 0.7
        posAttr.setXYZ(i, ox + nx*disp, oy + ny*disp, oz + nz*disp)
      }
      posAttr.needsUpdate = true
      sphereGeoRef.current.computeVertexNormals()
      // ── Beat: particle burst (beats mode only) ──
      const currentMode = modeRef.current
      if (isBeat && currentMode === 'beats') {
        for (let i = 0; i < 40; i++) {
          const geo = new THREE.SphereGeometry(0.06, 6, 6)
          const mat = new THREE.MeshBasicMaterial({
            color:       0xe8a020,
            transparent: true,
            opacity:     1.0,
          })
          const p = new THREE.Mesh(geo, mat)
          p.position.set(0, 0, 0)
          p.userData.vx   = (Math.random() - 0.5) * 0.35
          p.userData.vy   = (Math.random() - 0.5) * 0.35
          p.userData.vz   = (Math.random() - 0.5) * 0.35
          p.userData.life = 30
          sceneRef.current.add(p)
          particlesRef.current.push(p)
        }
      }

      // ── Update active particles ──
      particlesRef.current = particlesRef.current.filter(p => {
        p.position.x += p.userData.vx
        p.position.y += p.userData.vy
        p.position.z += p.userData.vz
        p.userData.life--
        p.material.opacity = p.userData.life / 30
        if (p.userData.life <= 0) {
          sceneRef.current.remove(p)
          p.geometry.dispose()
          p.material.dispose()
          return false
        }
        return true
      })

      // ── Bars ──
      const bv = lerp.barOpacity
      for (let i = 0; i < BAR_COUNT; i++) {
        const bar = barsRef.current[i]
        bar.material.opacity = THREE.MathUtils.lerp(bar.material.opacity, bv, 0.08)

        if (freqData && bv > 0.01) {
          const fi  = Math.floor((i / BAR_COUNT) * (freqData.length * 0.8))
          const val = freqData[fi] / 255
          bar.scale.y = THREE.MathUtils.lerp(bar.scale.y, 0.02 + val * 6, 0.22)
        }
      }

      // ── Stars ──
      stars.rotation.y += 0.00006

      // ── Stars ──
      stars.rotation.y += 0.00006

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      sphereGeo.dispose()
      planeGeo.dispose()
      starGeo.dispose()
      bars.forEach(b => { b.geometry.dispose(); b.material.dispose() })
      particlesRef.current.forEach(p => {
        scene.remove(p)
        p.geometry.dispose()
        p.material.dispose()
      })
      particlesRef.current = []
      clearTimeout(beatTimeoutRef.current)
      clearInterval(beatIntervalRef.current)
    }
  }, [])

  // ── Page load sequence ─────────────────────────────────────────────────
  useEffect(() => {
    if (!titleRef.current) return
    gsap.set([titleRef.current, subtitleRef.current, playBtnRef.current], {
      opacity: 0, y: 24,
    })
    const tl = gsap.timeline({ delay: 0.3 })
    tl.to(titleRef.current,    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.5)
    tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.0)
    tl.to(playBtnRef.current,  { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 1.5)
  }, [])

  // ── BPM timer ──────────────────────────────────────────────────────────
  function triggerBeat() {
    beatActiveRef.current = true
  }

  // ── Audio ──────────────────────────────────────────────────────────────
  async function initAudio() {
    if (audioCtxRef.current) return
    const audio = audioRef.current
    const ctx   = new AudioContext()
    audioCtxRef.current = ctx

    const analyser = ctx.createAnalyser()
    analyser.fftSize              = 512
    analyser.smoothingTimeConstant = 0.55
    analyserRef.current = analyser
    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount)

    const src = ctx.createMediaElementSource(audio)
    src.connect(analyser)
    analyser.connect(ctx.destination)

    if (ctx.state === 'suspended') await ctx.resume()
    await audio.play()
    setPlaying(true)
    setStarted(true)

    // fade out title overlay
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.9, ease: 'power2.in' })

    // Start BPM-synced beat timer — 112 BPM = 545ms interval
    // Delay first beat to match audio's first beat at ~0.67s
    beatTimeoutRef.current = setTimeout(() => {
      triggerBeat()
      beatIntervalRef.current = setInterval(triggerBeat, 545)
    }, 670)
  }

  async function handlePlay() {
    if (!started) {
      await initAudio()
    } else {
      const audio = audioRef.current
      if (audio.paused) {
        await audioCtxRef.current?.resume()
        await audio.play()
        setPlaying(true)
      } else {
        audio.pause()
        setPlaying(false)
      }
    }
  }

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} />

      <audio ref={audioRef} src="/balochi_audio.wav" loop preload="auto" />

      {/* Pre-play overlay */}
      <div ref={overlayRef} className={styles.overlay}>
        <h1 ref={titleRef} className={styles.heroTitle}>Ustad Noor Bakhsh</h1>
        <p ref={subtitleRef} className={styles.heroSubtitle}>
          Balochi Audio Visualisers &nbsp;&middot;&nbsp; Week 5
        </p>
        <button
          ref={playBtnRef}
          className={styles.playBtn}
          onClick={handlePlay}
          aria-label="Play music"
          data-cursor
        >
          <PlayIcon />
          <span className={styles.playLabel}>play</span>
        </button>
      </div>

      {/* Mode switcher — appears after play */}
      {started && (
        <div ref={modeBarRef} className={styles.modeSwitcher}>
          {[
            { id: 'amplitude', label: 'Amplitude' },
            { id: 'fft',       label: 'FFT' },
            { id: 'beats',     label: 'Beats' },
          ].map(({ id, label }) => (
            <button
              key={id}
              className={`${styles.modeBtn} ${activeMode === id ? styles.modeBtnActive : ''}`}
              onClick={() => doModeTransition(id)}
              data-cursor
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Pause / resume */}
      {started && (
        <button
          className={styles.pauseBtn}
          onClick={handlePlay}
          aria-label={playing ? 'Pause' : 'Resume'}
          data-cursor
        >
          {playing ? <PauseIcon /> : <PlayIconSmall />}
        </button>
      )}

      {/* Colour legend — FFT and BEATS modes only */}
      <div
        className={styles.legend}
        style={{ opacity: (activeMode === 'fft' || activeMode === 'beats') ? 1 : 0 }}
      >
        <div className={styles.legendRow}>
          <span className={styles.swatch} style={{ background: '#ff4444' }} />
          <span className={styles.legendLabel}>Low Freq</span>
        </div>
        <div className={styles.legendRow}>
          <span className={styles.swatch} style={{ background: '#ffaa00' }} />
          <span className={styles.legendLabel}>High Freq</span>
        </div>
        {activeMode === 'beats' && (
          <div className={styles.legendRow}>
            <span className={styles.swatch} style={{ background: '#e8a020' }} />
            <span className={styles.legendLabel}>Beat</span>
          </div>
        )}
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollText}>scroll</span>
        <ScrollArrow />
      </div>
    </section>
  )
})

export default Visualiser

// ── Inline SVG icons ────────────────────────────────────────────────────────
function PlayIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.2" />
      <polygon points="26,20 48,32 26,44" fill="currentColor" />
    </svg>
  )
}

function PlayIconSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <polygon points="3,1 14,8 3,15" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="3" y="2" width="4" height="12" />
      <rect x="9" y="2" width="4" height="12" />
    </svg>
  )
}

function ScrollArrow() {
  return (
    <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
      <rect x="6" y="1" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="9" cy="5" r="1.5" fill="currentColor" />
      <line x1="9" y1="16" x2="9" y2="26" stroke="currentColor" strokeWidth="1.2" />
      <polyline points="5,22 9,26 13,22" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  )
}
