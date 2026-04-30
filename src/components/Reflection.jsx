import styles from './Reflection.module.css'

const NOTES = [
  ['Studies', 'amplitude / frequency / beat response'],
  ['Medium', 'React / Web Audio API / Three.js'],
  ['Status', 'artistic analysis with approximate rhythm response'],
]

export default function Reflection() {
  return (
    <section className={styles.section} id="reflection" aria-labelledby="final-note-title">
      <div className={styles.panel}>
        <div className={styles.header}>
          <span>final_note.txt - Notepad</span>
          <span className={styles.windowButtons} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className={styles.menuRow}>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Help</span>
        </div>

        <div className={styles.content}>
          <p className={styles.label}>Final Note</p>
          <h2 id="final-note-title">The music remains the source.</h2>
          <p>
            Balochi Beats is not a replacement for listening. It is a way of noticing how
            one recording expands, separates, pulses, and leaves traces on screen.
          </p>
          <p>
            The browser player reinterprets the original audio-analysis coursework through
            Web Audio and real-time visuals. Loudness and frequency are read directly; rhythm
            is presented as an approximate browser-side beat response.
          </p>

          <dl className={styles.noteGrid}>
            {NOTES.map(([key, value]) => (
              <div className={styles.noteRow} key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
