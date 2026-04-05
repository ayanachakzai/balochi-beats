import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const posRef  = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafRef  = useRef(null)
  const hovRef  = useRef(false)

  useEffect(() => {
    function onMove(e) {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    function onOver(e) {
      hovRef.current = !!e.target.closest('a, button, [role="button"], [data-cursor]')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    function loop() {
      rafRef.current = requestAnimationFrame(loop)
      const { x, y } = posRef.current

      // Dot snaps
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      }

      // Ring lerps
      ringPos.current.x += (x - ringPos.current.x) * 0.12
      ringPos.current.y += (y - ringPos.current.y) * 0.12

      if (ringRef.current) {
        const scale = hovRef.current ? 1 : 0.4
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%) scale(${scale})`
        ringRef.current.style.opacity = hovRef.current ? '1' : '0.5'
      }
    }
    loop()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <div id="custom-cursor">
      <div ref={dotRef}  className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </div>
  )
}
