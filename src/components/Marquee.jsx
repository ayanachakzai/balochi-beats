import styles from './Marquee.module.css'

const WORDS = [
  { text: 'USTAD NOOR BAKHSH', accent: 'teal' },
  { text: '·', accent: 'dim' },
  { text: 'ELECTRIC DAMBURA', accent: 'saffron' },
  { text: '·', accent: 'dim' },
  { text: 'BALOCHISTAN', accent: 'teal' },
  { text: '·', accent: 'dim' },
  { text: 'AAYE HO MERI ZINDAGI', accent: 'saffron' },
  { text: '·', accent: 'dim' },
  { text: 'UAL CCI', accent: 'saffron' },
  { text: '·', accent: 'dim' },
]

function Track() {
  return (
    <div className={styles.track}>
      {Array.from({ length: 6 }).flatMap((_, ri) =>
        WORDS.map((w, wi) => (
          <span
            key={`${ri}-${wi}`}
            className={`${styles.word} ${styles[w.accent]}`}
          >
            {w.text}&nbsp;&nbsp;
          </span>
        ))
      )}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.inner}>
        <Track />
        <Track />
      </div>
    </div>
  )
}
