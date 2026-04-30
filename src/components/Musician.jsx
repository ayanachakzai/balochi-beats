import styles from './Musician.module.css'

const TRACK_META = [
  ['Artist', 'Ustad Noor Bakhsh'],
  ['Source', 'Balochi music recording'],
  ['Translation', 'sound -> code -> motion'],
  ['Studies', 'amplitude / frequency / beat response'],
]

export default function Musician() {
  return (
    <section className={styles.section} id="musician" aria-labelledby="source-title">
      <div className={styles.window}>
        <div className={styles.titleBar}>
          <span>source_material.txt - Notepad</span>
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

        <div className={styles.body}>
          <figure className={styles.artwork}>
            <img
              src="/ustaad-noor-bakhsh.jpg"
              alt="Ustad Noor Bakhsh playing the electric dambura"
            />
            <figcaption>Source artwork / Ustad Noor Bakhsh</figcaption>
          </figure>

          <div className={styles.content}>
            <p className={styles.kicker}>Source Material</p>
            <h2 id="source-title">A recording treated as signal, memory, and movement.</h2>
            <p className={styles.copy}>
              The player begins with Balochi music connected to Ustad Noor Bakhsh. It treats
              the recording as source material, not background decoration, reading loudness,
              frequency, and rhythmic energy as visible studies.
            </p>

            <dl className={styles.metaGrid}>
              {TRACK_META.map(([key, value]) => (
                <div className={styles.metaRow} key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
