import { useMemo } from 'react'
import styles from './VisualiserSection.module.css'

const STUDIES = {
  amplitude: {
    index: '01',
    title: 'Amplitude',
    concept: 'Loudness becomes scale.',
    explanation:
      'This study reads average signal energy from the audio and maps it to the breathing size and surface movement of the visual form.',
    method: 'average energy -> sphere scale / surface movement',
    status: 'Live level reading',
    output: 'expanding central form',
    file: '1. balochi_visualiser_amp.py',
    code: `dot.music.start_file_stream("balochi_audio.wav")
dot.music.play()

amp = dot.music.amplitude()
radius = 50 + amp * 900

dot.background((40, 0, 60))
dot.fill((180, 20, 40))
dot.circle((dot.width//2, dot.height//2), radius)

# Web version: average analyser energy
# drives sphere scale + surface movement.`,
  },
  fft: {
    index: '02',
    title: 'Frequency',
    concept: 'Frequencies become architecture.',
    explanation:
      'This study separates the recording into frequency bands, letting low and high energy appear as bars around the player display.',
    method: 'Web Audio FFT -> frequency bars',
    status: 'Low and high bands',
    output: 'frequency ring / architecture',
    file: '2. balochi_visualiser_amp_fft.py',
    code: `fft = dot.music.fft()
if fft is None:
    return

half = len(fft) // 2

for i in range(half):
    h = fft[i] * 50
    x = int(i * 3)
    dot.fill((200, 40, 40))
    dot.rectangle((x, dot.height), (x + 2, dot.height - h))

for i in range(half, len(fft)):
    h = fft[i] * 200
    x = 450 + int((i - half) * 3)
    dot.fill((255, 160, 40))
    dot.rectangle((x, dot.height), (x + 2, dot.height - h))

# Web version: getByteFrequencyData()
# maps bins to the circular bar display.`,
  },
  beats: {
    index: '03',
    title: 'Beat Response',
    concept: 'Rhythm becomes pulse.',
    explanation:
      'This study presents rhythmic energy as an approximate browser-side response. It is a visual pulse, not a claim of perfect beat detection.',
    method: 'approximate browser-side rhythmic response',
    status: 'Interpretive pulse',
    output: 'gold pulse / particle burst',
    file: '3. balochi_visualiser_with_beats.py',
    code: `amp = dot.music.amplitude()
size = 70 + amp * 900

fft = dot.music.fft()
if fft is not None:
    num_bars = 20
    bars = fft[:num_bars]

if dot.music.is_beat():
    dot.fill((255, 200, 60))
    dot.circle((dot.width // 2, dot.height // 2), size + 40)

# Web version: approximate rhythmic response
# triggers gold pulses / particle bursts.`,
  },
}

function highlight(raw) {
  return raw.split('\n').map(line => {
    const escaped = line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    if (escaped.trim().startsWith('#')) {
      return `<span class="comment">${escaped}</span>`
    }

    return escaped
      .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, '<span class="str">$1</span>')
      .replace(/\b(if|else|for|in|return|None|len|range|int)\b/g, '<span class="kw">$1</span>')
      .replace(/\b(dot|music|amplitude|fft|circle|fill|rectangle|background|start_file_stream|play|getByteFrequencyData)\b/g, '<span class="fn">$1</span>')
      .replace(/(\d+)/g, '<span class="num">$1</span>')
  }).join('\n')
}

export default function VisualiserSection({ sectionRef, mode }) {
  const study = STUDIES[mode]
  const html = useMemo(() => highlight(study.code), [study.code])

  return (
    <article ref={sectionRef} className={styles.studyRow}>
      <section className={styles.notepad} aria-labelledby={`${mode}-title`}>
        <div className={styles.titleBar}>
          <span>{`${study.index}_${mode}_notes.txt - Notepad`}</span>
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
        <div className={styles.textArea}>
          <p className={styles.docLabel}>{study.index} / {study.title}</p>
          <h2 id={`${mode}-title`}>{study.concept}</h2>
          <p>{study.explanation}</p>
          <dl className={styles.infoGrid}>
            <div>
              <dt>METHOD</dt>
              <dd>{study.method}</dd>
            </div>
            <div>
              <dt>OUTPUT</dt>
              <dd>{study.output}</dd>
            </div>
            <div>
              <dt>STATUS</dt>
              <dd>{study.status}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles.command} aria-label={`${study.title} code evidence`}>
        <div className={styles.cmdTitle}>Command Prompt - {study.file}</div>
        <pre className={styles.cmdBody}>
          <span className={styles.prompt}>C:\balochi_beats&gt; run {study.file}</span>
          {'\n'}
          <code dangerouslySetInnerHTML={{ __html: html }} />
        </pre>
      </section>
    </article>
  )
}
