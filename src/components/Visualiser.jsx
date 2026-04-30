import {
  useEffect, useRef, useImperativeHandle, forwardRef, useState,
} from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { createNoise3D } from 'simplex-noise'
import beatData from '../data/beatTimes.json'
import styles from './Visualiser.module.css'

const SHOCKWAVE_COUNT = 4
const BEAT_PARTICLE_POOL_SIZE = 36
const BEAT_PARTICLES_PER_PULSE = 8
const BEAT_VISUAL_OFFSET = -0.18
const LOW_BIN_RANGE = [1, 24]
const MID_BIN_RANGE = [25, 79]
const HIGH_BIN_RANGE = [80, 180]

const FFT_BANDS = [
  {
    id: 'low',
    range: LOW_BIN_RANGE,
    count: 9,
    radius: 3.45,
    startAngle: 122,
    endAngle: 172,
    faceAngle: -12,
    width: 0.16,
    depth: 0.22,
    maxHeight: 2.5,
    response: 1.15,
    color: 0x22d8ff,
    emissive: 0x0b6b85,
  },
  {
    id: 'mid',
    range: MID_BIN_RANGE,
    count: 14,
    radius: 2.74,
    startAngle: 188,
    endAngle: 262,
    faceAngle: 0,
    width: 0.13,
    depth: 0.2,
    maxHeight: 1.86,
    response: 1,
    color: 0x2dffb0,
    emissive: 0x0a8058,
  },
  {
    id: 'high',
    range: HIGH_BIN_RANGE,
    count: 18,
    radius: 3.12,
    startAngle: 286,
    endAngle: 344,
    faceAngle: 16,
    width: 0.075,
    depth: 0.13,
    maxHeight: 1.32,
    response: 0.9,
    color: 0xc9d4ff,
    emissive: 0x5e6a99,
  },
]

const MANUAL_BEAT_TIMES = Array.isArray(beatData.beats) ? beatData.beats : []

const COLORS = {
  background: new THREE.Color(0x010711),
  glass: new THREE.Color(0x9fdfff),
  core: new THREE.Color(0x1b3148),
  coreBright: new THREE.Color(0xc4f6ff),
  ringLow: new THREE.Color(0x6fd6e7),
  ringMid: new THREE.Color(0x7ed8d2),
  ringHigh: new THREE.Color(0xc5d8e8),
  cyanLight: new THREE.Color(0x65d8ff),
  amber: new THREE.Color(0xf2b84a),
}

const MODES = [
  { id: 'amplitude', tab: 'Amplitude', readout: 'Mode: Amplitude' },
  { id: 'fft', tab: 'Frequency', readout: 'Mode: Frequency' },
  { id: 'beats', tab: 'Beat Response', readout: 'Mode: Beat Response' },
]

function formatTime(value) {
  if (!Number.isFinite(value)) return '0:00'
  const minutes = Math.floor(value / 60)
  const seconds = Math.floor(value % 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
}

function averageBins(freqData, [start, end]) {
  if (!freqData?.length) return 0
  const safeStart = Math.max(0, Math.min(freqData.length - 1, start))
  const safeEnd = Math.max(safeStart + 1, Math.min(freqData.length, end))
  let sum = 0
  for (let i = safeStart; i < safeEnd; i += 1) sum += freqData[i]
  return sum / Math.max(1, safeEnd - safeStart) / 255
}

function sampleBand(freqData, [start, end], index, count) {
  if (!freqData?.length) return 0
  const safeStart = Math.max(0, Math.min(freqData.length - 1, start))
  const safeEnd = Math.max(safeStart + 1, Math.min(freqData.length, end))
  const progress = count <= 1 ? 0 : index / (count - 1)
  const bin = safeStart + Math.floor(progress * (safeEnd - safeStart - 1))
  return freqData[Math.min(freqData.length - 1, bin)] / 255
}

const Visualiser = forwardRef(function Visualiser({ onModeChange }, ref) {
  const [started, setStarted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [activeMode, setActiveMode] = useState('amplitude')
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const canvasRef = useRef(null)
  const audioRef = useRef(null)
  const rendererRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const clockRef = useRef(new THREE.Clock())
  const rafRef = useRef(null)
  const sculptureRef = useRef(null)
  const shellRef = useRef(null)
  const coreRef = useRef(null)
  const coreGeoRef = useRef(null)
  const coreOriginalRef = useRef(null)
  const fftColumnsRef = useRef([])
  const shockwavesRef = useRef([])
  const particlesRef = useRef([])
  const keyLightRef = useRef(null)
  const rimLightRef = useRef(null)
  const beatLightRef = useRef(null)
  const beatGlowRef = useRef(0)
  const amplitudeLevelRef = useRef(0.08)
  const noiseRef = useRef(createNoise3D())
  const audioCtxRef = useRef(null)
  const analyserRef = useRef(null)
  const dataArrayRef = useRef(null)
  const timeDataArrayRef = useRef(null)
  const rollingBassRef = useRef(0.05)
  const beatCooldownRef = useRef(0)
  const lastBeatEnergyRef = useRef(0)
  const manualBeatIndexRef = useRef(0)
  const lastAudioTimeRef = useRef(0)

  const modeRef = useRef('amplitude')
  const interpRef = useRef({
    amplitudeBlend: 1,
    frequencyBlend: 0,
    beatBlend: 0,
    shellScale: 1,
    coreScale: 1.04,
    ringOpacity: 0.08,
    ringScale: 0.88,
    deformation: 0.035,
    camX: 0,
    camZ: 7.5,
    camY: 0.3,
  })

  useImperativeHandle(ref, () => ({
    setMode(mode) {
      doModeTransition(mode)
    },
  }))

  function doModeTransition(newMode) {
    if (modeRef.current === newMode) return
    modeRef.current = newMode
    setActiveMode(newMode)
    onModeChange?.(newMode)

    const p = interpRef.current
    if (newMode === 'amplitude') {
      gsap.to(p, {
        amplitudeBlend: 1,
        frequencyBlend: 0,
        beatBlend: 0,
        shellScale: 1,
        coreScale: 1.04,
        ringOpacity: 0.08,
        ringScale: 0.86,
        deformation: 0.035,
        camX: 0,
        camZ: 7.5,
        camY: 0.3,
        duration: 0.9,
        ease: 'power2.inOut',
      })
    } else if (newMode === 'fft') {
      gsap.to(p, {
        amplitudeBlend: 0.22,
        frequencyBlend: 1,
        beatBlend: 0,
        shellScale: 0.94,
        coreScale: 0.92,
        ringOpacity: 0.92,
        ringScale: 1.08,
        deformation: 0.14,
        camX: -0.85,
        camZ: 8.85,
        camY: 1.72,
        duration: 0.9,
        ease: 'power2.inOut',
      })
    } else {
      gsap.to(p, {
        amplitudeBlend: 0.35,
        frequencyBlend: 0.22,
        beatBlend: 1,
        shellScale: 0.98,
        coreScale: 1.02,
        ringOpacity: 0.42,
        ringScale: 1,
        deformation: 0.2,
        camX: 0.35,
        camZ: 8.1,
        camY: 0.42,
        duration: 0.9,
        ease: 'power2.inOut',
      })
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const isMobile = window.matchMedia('(max-width: 720px), (pointer: coarse)').matches
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile,
      alpha: false,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.35 : 1.75))
    renderer.shadowMap.enabled = false
    renderer.outputColorSpace = THREE.SRGBColorSpace
    rendererRef.current = renderer

    const scene = new THREE.Scene()
    scene.background = COLORS.background
    scene.fog = new THREE.FogExp2(0x010711, 0.035)
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 80)
    camera.position.set(0, 0.3, 7.5)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    const sculpture = new THREE.Group()
    scene.add(sculpture)
    sculptureRef.current = sculpture

    const ambient = new THREE.AmbientLight(0x9fcfff, 0.38)
    scene.add(ambient)

    const keyLight = new THREE.PointLight(0x65d8ff, 4.2, 18)
    keyLight.position.set(-3.6, 4.2, 4.8)
    scene.add(keyLight)
    keyLightRef.current = keyLight

    const rimLight = new THREE.PointLight(0x345dff, 2.4, 22)
    rimLight.position.set(4.2, -1.8, -4.6)
    scene.add(rimLight)
    rimLightRef.current = rimLight

    const beatLight = new THREE.PointLight(0xf2b84a, 0, 16)
    beatLight.position.set(0, 0.6, 3.2)
    scene.add(beatLight)
    beatLightRef.current = beatLight

    const coreLight = new THREE.PointLight(0xaeefff, 1.8, 7)
    coreLight.position.set(0.9, 0.75, 1.15)
    sculpture.add(coreLight)

    const shellGeo = new THREE.SphereGeometry(1.92, isMobile ? 48 : 72, isMobile ? 24 : 36)
    const shellMtl = new THREE.MeshPhysicalMaterial({
      color: COLORS.glass,
      transparent: true,
      opacity: 0.22,
      roughness: 0.12,
      metalness: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      transmission: 0.35,
      thickness: 0.9,
      ior: 1.38,
      reflectivity: 0.72,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    const shell = new THREE.Mesh(shellGeo, shellMtl)
    sculpture.add(shell)
    shellRef.current = shell

    const coreGeo = new THREE.IcosahedronGeometry(1.18, isMobile ? 3 : 4)
    const coreOriginal = coreGeo.attributes.position.array.slice()
    const coreMtl = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x254d68),
      emissive: new THREE.Color(0x123f5c),
      emissiveIntensity: 0.95,
      roughness: 0.2,
      metalness: 0.9,
    })
    const core = new THREE.Mesh(coreGeo, coreMtl)
    sculpture.add(core)
    coreRef.current = core
    coreGeoRef.current = coreGeo
    coreOriginalRef.current = coreOriginal

    const coreWireMtl = new THREE.MeshBasicMaterial({
      color: 0xd8fbff,
      transparent: true,
      opacity: 0.24,
      wireframe: true,
      depthWrite: false,
    })
    const coreWire = new THREE.Mesh(coreGeo, coreWireMtl)
    sculpture.add(coreWire)

    const crystalGeo = new THREE.OctahedronGeometry(0.58, 1)
    const crystalMtl = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xb9f3ff),
      emissive: new THREE.Color(0x1f718c),
      emissiveIntensity: 0.65,
      metalness: 0.38,
      roughness: 0.08,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.74,
      depthWrite: false,
    })
    const innerCrystal = new THREE.Mesh(crystalGeo, crystalMtl)
    innerCrystal.rotation.set(0.35, 0.4, -0.1)
    sculpture.add(innerCrystal)

    const fftColumns = []
    const fftColumnGroup = new THREE.Group()
    fftColumnGroup.position.set(0, -1.74, 0.08)
    scene.add(fftColumnGroup)

    FFT_BANDS.forEach(band => {
      const bandGroup = new THREE.Group()
      bandGroup.userData.band = band.id
      fftColumnGroup.add(bandGroup)

      for (let i = 0; i < band.count; i += 1) {
        const geometry = new THREE.BoxGeometry(band.width, 1, band.depth)
        geometry.translate(0, 0.5, 0)
        const material = new THREE.MeshStandardMaterial({
          color: band.color,
          emissive: band.emissive,
          emissiveIntensity: 0.75,
          roughness: 0.2,
          metalness: 0.42,
          transparent: true,
          opacity: 0,
        })
        const column = new THREE.Mesh(geometry, material)
        const progress = band.count <= 1 ? 0 : i / (band.count - 1)
        const angle = THREE.MathUtils.degToRad(THREE.MathUtils.lerp(band.startAngle, band.endAngle, progress))
        column.position.set(Math.cos(angle) * band.radius, 0, Math.sin(angle) * band.radius)
        column.rotation.y = THREE.MathUtils.degToRad(band.faceAngle)
        column.scale.y = 0.04
        bandGroup.add(column)
        fftColumns.push({
          mesh: column,
          material,
          band,
          index: i,
          value: 0,
        })
      }
    })
    fftColumnsRef.current = fftColumns

    const shockwaves = []
    const shockwaveGeo = new THREE.RingGeometry(0.96, 1.03, 128)
    for (let i = 0; i < SHOCKWAVE_COUNT; i += 1) {
      const ringMtl = new THREE.MeshBasicMaterial({
        color: COLORS.amber,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
      const ring = new THREE.Mesh(shockwaveGeo, ringMtl)
      ring.rotation.x = -Math.PI / 2
      ring.visible = false
      ring.userData.age = 0
      ring.userData.life = 42
      scene.add(ring)
      shockwaves.push(ring)
    }
    shockwavesRef.current = shockwaves

    const particleGeo = new THREE.SphereGeometry(0.035, 6, 6)
    const particles = []
    for (let i = 0; i < BEAT_PARTICLE_POOL_SIZE; i += 1) {
      const particle = new THREE.Mesh(
        particleGeo,
        new THREE.MeshBasicMaterial({
          color: COLORS.amber,
          transparent: true,
          opacity: 0,
          depthWrite: false,
        })
      )
      particle.visible = false
      particle.userData.active = false
      particle.userData.life = 0
      scene.add(particle)
      particles.push(particle)
    }
    particlesRef.current = particles

    function onResize() {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    onResize()
    window.addEventListener('resize', onResize)

    function animate() {
      rafRef.current = requestAnimationFrame(animate)
      const t = clockRef.current.getElapsedTime()
      const lerp = interpRef.current

      let amplitude = (Math.sin(t * 0.85) * 0.5 + 0.5) * 0.16 + 0.04
      let rawAmplitude = amplitude
      let isBeat = false
      let freqData = null
      let lowEnergy = 0
      let midEnergy = 0
      let highEnergy = 0

      if (analyserRef.current && dataArrayRef.current) {
        analyserRef.current.getByteFrequencyData(dataArrayRef.current)
        freqData = dataArrayRef.current
        let sum = 0
        for (let i = 0; i < freqData.length; i += 1) sum += freqData[i]
        rawAmplitude = sum / freqData.length / 255

        if (timeDataArrayRef.current) {
          analyserRef.current.getByteTimeDomainData(timeDataArrayRef.current)
          let rmsSum = 0
          for (let i = 0; i < timeDataArrayRef.current.length; i += 1) {
            const centered = (timeDataArrayRef.current[i] - 128) / 128
            rmsSum += centered * centered
          }
          const rms = Math.sqrt(rmsSum / timeDataArrayRef.current.length)
          rawAmplitude = THREE.MathUtils.clamp((rms - 0.055) * 1.75, 0.035, 0.46)
        }
        lowEnergy = averageBins(freqData, LOW_BIN_RANGE)
        midEnergy = averageBins(freqData, MID_BIN_RANGE)
        highEnergy = averageBins(freqData, HIGH_BIN_RANGE)

        if (!audioRef.current?.paused) {
          const audioTime = audioRef.current?.currentTime || 0
            if (audioTime < lastAudioTimeRef.current - 0.25) {
              syncManualBeatIndex(audioTime)
            }

          const energyRise = lowEnergy - lastBeatEnergyRef.current
          rollingBassRef.current = rollingBassRef.current * 0.92 + lowEnergy * 0.08

          while (MANUAL_BEAT_TIMES[manualBeatIndexRef.current] != null) {
            const scheduledBeatTime = MANUAL_BEAT_TIMES[manualBeatIndexRef.current] + BEAT_VISUAL_OFFSET
            if (scheduledBeatTime >= audioTime - 0.12) break
            manualBeatIndexRef.current += 1
          }

          const nextManualBeat = MANUAL_BEAT_TIMES[manualBeatIndexRef.current]
          const nextVisualBeat = nextManualBeat == null ? null : nextManualBeat + BEAT_VISUAL_OFFSET
          const hasManualBeat =
            modeRef.current === 'beats' &&
            nextVisualBeat != null &&
            lastAudioTimeRef.current < nextVisualBeat &&
            audioTime >= nextVisualBeat

          const fallbackThreshold = Math.max(rollingBassRef.current * 1.85, 0.13)
          const hasFallbackAccent =
            MANUAL_BEAT_TIMES.length === 0 &&
            modeRef.current === 'beats' &&
            lowEnergy > fallbackThreshold &&
            energyRise > 0.06

          if (
            (hasManualBeat || hasFallbackAccent) &&
            beatCooldownRef.current <= 0
          ) {
            isBeat = true
            beatGlowRef.current = 1
            beatCooldownRef.current = hasManualBeat ? 10 : 20
            if (hasManualBeat) manualBeatIndexRef.current += 1
          }

          if (beatCooldownRef.current > 0) beatCooldownRef.current -= 1
          lastBeatEnergyRef.current = lowEnergy
          lastAudioTimeRef.current = audioTime
        }
      }

      const amplitudeSmoothing = rawAmplitude > amplitudeLevelRef.current ? 0.16 : 0.075
      amplitudeLevelRef.current = THREE.MathUtils.lerp(amplitudeLevelRef.current, rawAmplitude, amplitudeSmoothing)
      amplitude = amplitudeLevelRef.current

      beatGlowRef.current *= 0.88
      const beatGlow = beatGlowRef.current * lerp.beatBlend

      keyLight.intensity = 2.2 + amplitude * 3.2
      rimLight.intensity = 1.4 + lerp.frequencyBlend * 1.4
      beatLight.intensity = beatGlow * 8
      coreLight.intensity = 1.35 + amplitude * 2.2 + beatGlow * 3.4

      camera.position.x += (lerp.camX - camera.position.x) * 0.045
      camera.position.y += (lerp.camY + Math.sin(t * 0.22) * 0.05 - camera.position.y) * 0.04
      camera.position.z += (lerp.camZ - camera.position.z) * 0.04
      camera.lookAt(0, -0.12 + lerp.frequencyBlend * -0.2, 0)

      sculpture.rotation.y += 0.0009 + lerp.frequencyBlend * 0.002
      sculpture.rotation.x = Math.sin(t * 0.12) * (0.045 + lerp.frequencyBlend * 0.055)

      const shellScale = lerp.shellScale * (1 + amplitude * (0.22 * lerp.amplitudeBlend + 0.04) + beatGlow * 0.08)
      shell.scale.setScalar(THREE.MathUtils.lerp(shell.scale.x, shellScale, 0.065))
      shell.material.opacity = 0.18 + lerp.amplitudeBlend * 0.08 + amplitude * 0.06 + beatGlow * 0.08
      shell.material.emissive?.set?.(0x000000)

      const coreScale = lerp.coreScale * (1 + amplitude * (0.46 * lerp.amplitudeBlend + 0.06) + beatGlow * 0.18)
      core.scale.setScalar(THREE.MathUtils.lerp(core.scale.x, coreScale, 0.065))
      core.material.color.copy(COLORS.core).lerp(COLORS.coreBright, amplitude * 0.55 + beatGlow * 0.28)
      core.material.emissive.copy(new THREE.Color(0x0a243c)).lerp(COLORS.amber, beatGlow * 0.45)
      core.material.emissiveIntensity = 0.7 + amplitude * 1.45 + beatGlow * 1.15
      coreWire.scale.copy(core.scale).multiplyScalar(1.012)
      coreWire.rotation.copy(core.rotation)
      coreWire.material.opacity = 0.18 + lerp.amplitudeBlend * 0.08 + lerp.frequencyBlend * 0.06 + beatGlow * 0.12
      innerCrystal.scale.setScalar(0.92 + amplitude * 0.18 + beatGlow * 0.14)
      innerCrystal.rotation.x += 0.004 + lerp.frequencyBlend * 0.003
      innerCrystal.rotation.y -= 0.003 + lerp.beatBlend * 0.002
      innerCrystal.material.emissiveIntensity = 0.48 + amplitude * 0.65 + beatGlow * 1.4
      innerCrystal.material.opacity = 0.6 + lerp.frequencyBlend * 0.16 + beatGlow * 0.16

      const position = coreGeo.attributes.position
      const original = coreOriginal
      const noise = noiseRef.current
      const deformationStrength = lerp.deformation + amplitude * (0.045 * lerp.amplitudeBlend + 0.025) + beatGlow * 0.08
      const noiseSpeed = t * (0.055 + amplitude * 0.05)
      for (let i = 0; i < position.count; i += 1) {
        const ox = original[i * 3]
        const oy = original[i * 3 + 1]
        const oz = original[i * 3 + 2]
        const length = Math.sqrt(ox * ox + oy * oy + oz * oz) || 1
        const nx = ox / length
        const ny = oy / length
        const nz = oz / length
        const n =
          noise(nx * 1.55 + noiseSpeed, ny * 1.55, nz * 1.55 - noiseSpeed) * 0.55 +
          noise(nx * 3.2 - noiseSpeed * 0.7, ny * 3.2 + noiseSpeed, nz * 3.2) * 0.22
        const radius = 1 + n * deformationStrength
        position.setXYZ(i, ox * radius, oy * radius, oz * radius)
      }
      position.needsUpdate = true
      coreGeo.computeVertexNormals()

      const fftVisibility = lerp.frequencyBlend + lerp.beatBlend * 0.1
      fftColumnsRef.current.forEach(column => {
        const value = sampleBand(freqData, column.band.range, column.index, column.band.count)
        const smoothing = column.band.id === 'high' ? 0.3 : column.band.id === 'mid' ? 0.23 : 0.18
        column.value = THREE.MathUtils.lerp(column.value, value, smoothing)

        const beatLift = beatGlow * (column.band.id === 'low' ? 0.42 : column.band.id === 'mid' ? 0.3 : 0.2)
        const targetHeight =
          0.06 +
          column.value * column.band.maxHeight * column.band.response * (0.78 + lerp.frequencyBlend * 0.42) +
          beatLift

        column.mesh.scale.y = THREE.MathUtils.lerp(column.mesh.scale.y, targetHeight, 0.22)
        column.mesh.position.y = -0.03
        column.mesh.rotation.z = 0
        column.mesh.rotation.x = 0
        column.material.opacity = THREE.MathUtils.lerp(
          column.material.opacity,
          Math.min(1, fftVisibility * (0.52 + column.value * 0.72 + beatGlow * 0.16)),
          0.14
        )
        column.material.color.setHex(column.band.color)
        column.material.emissive.setHex(column.band.emissive)
        column.material.emissiveIntensity =
          0.62 +
          column.value * (column.band.id === 'low' ? 2.25 : column.band.id === 'mid' ? 2 : 1.65) +
          beatGlow * 0.75

        if (beatGlow > 0.02 && modeRef.current === 'beats') {
          column.material.color.lerp(COLORS.amber, beatGlow * 0.35)
          column.material.emissive.lerp(COLORS.amber, beatGlow * 0.45)
        }
      })

      if (isBeat && modeRef.current === 'beats') {
        const ring = shockwavesRef.current.find(item => !item.visible) || shockwavesRef.current[0]
        if (ring) {
          ring.visible = true
          ring.userData.age = 0
          ring.scale.setScalar(0.22)
          ring.material.opacity = 0.7
        }

        let activated = 0
        particlesRef.current.forEach(particle => {
          if (particle.userData.active || activated >= BEAT_PARTICLES_PER_PULSE) return
          const angle = Math.random() * Math.PI * 2
          const lift = (Math.random() - 0.5) * 0.18
          particle.position.set(Math.cos(angle) * 0.7, lift, Math.sin(angle) * 0.7)
          particle.userData.vx = Math.cos(angle) * (0.035 + Math.random() * 0.035)
          particle.userData.vy = (Math.random() - 0.5) * 0.035
          particle.userData.vz = Math.sin(angle) * (0.035 + Math.random() * 0.035)
          particle.userData.life = 24
          particle.userData.active = true
          particle.visible = true
          particle.material.opacity = 0.72
          activated += 1
        })
      }

      shockwavesRef.current.forEach(ring => {
        if (!ring.visible) return
        ring.userData.age += 1
        const progress = ring.userData.age / ring.userData.life
        const ease = 1 - (1 - progress) * (1 - progress)
        ring.scale.setScalar(0.5 + ease * 5.8)
        ring.material.opacity = Math.max(0, (1 - progress) * 0.58 * lerp.beatBlend)
        if (progress >= 1) {
          ring.visible = false
          ring.material.opacity = 0
        }
      })

      particlesRef.current.forEach(particle => {
        if (!particle.userData.active) return
        particle.position.x += particle.userData.vx
        particle.position.y += particle.userData.vy
        particle.position.z += particle.userData.vz
        particle.userData.life -= 1
        particle.material.opacity = Math.max(0, particle.userData.life / 24)
        if (particle.userData.life <= 0) {
          particle.userData.active = false
          particle.visible = false
          particle.material.opacity = 0
        }
      })

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      shellGeo.dispose()
      shellMtl.dispose()
      coreGeo.dispose()
      coreMtl.dispose()
      coreWireMtl.dispose()
      crystalGeo.dispose()
      crystalMtl.dispose()
      fftColumnsRef.current.forEach(column => {
        column.mesh.geometry.dispose()
        column.material.dispose()
      })
      shockwaveGeo.dispose()
      shockwavesRef.current.forEach(ring => {
        scene.remove(ring)
        ring.material.dispose()
      })
      particlesRef.current.forEach(particle => {
        scene.remove(particle)
        particle.material.dispose()
      })
      particleGeo.dispose()
      fftColumnsRef.current = []
      shockwavesRef.current = []
      particlesRef.current = []
    }
  }, [])

  function resetBeatTracking() {
    rollingBassRef.current = 0.05
    beatCooldownRef.current = 0
    lastBeatEnergyRef.current = 0
    syncManualBeatIndex(audioRef.current?.currentTime || 0)
  }

  function syncManualBeatIndex(time = 0) {
    let index = 0
    while (MANUAL_BEAT_TIMES[index] != null) {
      const scheduledBeatTime = MANUAL_BEAT_TIMES[index] + BEAT_VISUAL_OFFSET
      if (scheduledBeatTime >= time - 0.12) break
      index += 1
    }
    manualBeatIndexRef.current = index
    lastAudioTimeRef.current = time
  }

  async function initAudio() {
    if (audioCtxRef.current) return
    const audio = audioRef.current
    const ctx = new AudioContext()
    audioCtxRef.current = ctx

    const analyser = ctx.createAnalyser()
    analyser.fftSize = 512
    analyser.smoothingTimeConstant = 0.55
    analyserRef.current = analyser
    dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount)
    timeDataArrayRef.current = new Uint8Array(analyser.fftSize)

    const src = ctx.createMediaElementSource(audio)
    src.connect(analyser)
    analyser.connect(ctx.destination)

    if (ctx.state === 'suspended') await ctx.resume()
    resetBeatTracking()
    await audio.play()
    setPlaying(true)
    setStarted(true)
  }

  async function handlePlay() {
    if (!started) {
      await initAudio()
      return
    }

    const audio = audioRef.current
    if (audio.paused) {
      await audioCtxRef.current?.resume()
      resetBeatTracking()
      await audio.play()
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  function handleSeek(event) {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = event.currentTarget.getBoundingClientRect()
    const pct = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width))
    audio.currentTime = pct * duration
    resetBeatTracking()
    setCurrentTime(audio.currentTime)
  }

  const progress = duration ? Math.min(100, (currentTime / duration) * 100) : 0
  const activeReadout = MODES.find(mode => mode.id === activeMode)?.readout || 'Mode: Amplitude'

  return (
    <section className={styles.playerSection} id="player">
      <div className={styles.playerWindow}>
        <div className={styles.titleBar}>
          <span>Balochi Beats Player</span>
          <div className={styles.windowControls} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={styles.menuRow} aria-label="Player menu">
          <span>File</span>
          <span>Play</span>
          <span>View</span>
          <span>Analysis</span>
          <span>Help</span>
        </div>

        <audio
          ref={audioRef}
          src="/balochi_audio.wav"
          loop
          preload="auto"
          onLoadedMetadata={event => setDuration(event.currentTarget.duration || 0)}
          onTimeUpdate={event => setCurrentTime(event.currentTarget.currentTime || 0)}
        />

        <div className={styles.playerBody}>
          <div className={styles.leftPanel}>
            <div className={styles.brandBlock}>
              <p className={styles.overline}>Custom web audio player</p>
              <h1>Balochi Beats</h1>
              <p className={styles.subtitle}>
                A browser-based audio analysis of loudness, frequency, and rhythm.
              </p>
            </div>

            <div className={styles.nowPlaying}>
              <span className={styles.label}>Now playing</span>
              <strong>Ustad Noor Bakhsh / Balochi music recording</strong>
            </div>

            <div className={styles.playlistPanel}>
              <div className={styles.panelTitle}>Playlist / Studies</div>
              <ol>
                <li className={activeMode === 'amplitude' ? styles.activeTrack : ''}>01 Amplitude visualisation</li>
                <li className={activeMode === 'fft' ? styles.activeTrack : ''}>02 FFT / frequency visualisation</li>
                <li className={activeMode === 'beats' ? styles.activeTrack : ''}>03 Beat response / rhythm</li>
              </ol>
            </div>
          </div>

          <div className={styles.screenPanel}>
            <div className={styles.screenTop}>
              <span>{activeReadout}</span>
              <span>{playing ? 'Signal: live' : 'Signal: standby'}</span>
            </div>
            <div className={styles.visualiserScreen}>
              <canvas ref={canvasRef} className={styles.canvas} />
              <div
                className={`${styles.frequencyLegend} ${activeMode === 'amplitude' ? styles.legendSubtle : ''}`}
                aria-label="Visualiser legend"
              >
                <span><i className={styles.lowKey} />LOW: bright cyan front-left bars</span>
                <span><i className={styles.midKey} />MID: vivid mint centre bars</span>
                <span><i className={styles.highKey} />HIGH: icy blue right-rear bars</span>
                <span><i className={styles.beatKey} />BEAT: amber pulse</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.transportDeck}>
          <div className={styles.timeRow}>
            <span>{formatTime(currentTime)}</span>
            <button className={styles.progressBar} type="button" onClick={handleSeek} aria-label="Seek audio">
              <span style={{ width: `${progress}%` }} />
            </button>
            <span>{formatTime(duration)}</span>
          </div>

          <div className={styles.controlRow}>
            <button className={styles.playButton} onClick={handlePlay} type="button" data-cursor>
              {playing ? 'Pause' : started ? 'Resume' : 'Play'}
            </button>

            <div className={styles.modeTabs} role="tablist" aria-label="Analysis modes">
              {MODES.map(mode => (
                <button
                  key={mode.id}
                  type="button"
                  role="tab"
                  aria-selected={activeMode === mode.id}
                  className={activeMode === mode.id ? styles.modeActive : ''}
                  onClick={() => doModeTransition(mode.id)}
                  data-cursor
                >
                  {mode.tab}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.statusStrip}>
            <span>Source: Balochi recording</span>
            <span>Analysis: amplitude / frequency / approximate rhythm response</span>
            <span>{started ? 'Decoder ready' : 'Press Play to connect analyser'}</span>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Visualiser
