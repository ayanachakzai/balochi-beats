# Week 5 – Balochi Audio Visualisers

## The Concept

This week I moved into audio visualisation but still wanted the work to feel close to home. I picked a recording of Ustad Noor Bakhsh, a Balochi folk musician who plays a homemade electric dambura powered by a motorcycle battery, usually outdoors with a small amp.

The track is his version of _“Aaye Ho Meri Zindagi Mein Tum Bahar Banke”_ from the Indian film Raja Hindustani. I know it as a Bollywood love song, but his version feels very different. It is rough, low and quite minimal, with most of the energy sitting in the lower frequencies.

I wanted to visualise this partly because of the sound itself and partly because it connects to my culture. Instead of using a random track, I liked the idea that the visuals respond to a Balochi musician, Balochi instrument and a familiar song, with colours that hint at Balochi textiles and landscapes.

![Ustaad Noor Bakhsh](/Week%204-5/ustaad-noor-bakhsh.jpg)

## Visualiser 1 — Amplitude

The first visualiser is based only on amplitude. For me, amplitude just means how loud the audio is at each moment. I mapped that value to the size of a circle in the centre of the screen.

The sketch sets up Dorothy and starts streaming the file:

```python
# snippet from 1. balochi_visualiser_amp.py
from dorothy import Dorothy

dot = Dorothy()
```

```python
# snippet from 1. balochi_visualiser_amp.py
def setup(self):
    dot.music.start_file_stream("balochi_audio.wav")
    dot.music.play()
```

The background is a dark purple, and the circle is a deep red. When the track is quiet, the circle stays small. When Ustad Noor Bakhsh hits the strings harder, the circle grows fast. Because the instrument has a lot of low energy, the movement looks more like steady breathing than fast flickering.

This version is simple but already shows the dynamics of the performance: which parts are softer, which are stronger, and how the overall energy of the song changes over time.

## Visualiser 2 — FFT

For the second visualiser, I wanted to look inside the sound a bit more. My basic understanding of FFT is that it splits the audio into different frequency bands, so instead of “how loud is it?”, we see “which ranges (low to high) are active now?”.

```python
# snippet from 2. balochi_visualiser_amp_fft.py
def setup(self):
    dot.music.start_file_stream("balochi_audio.wav")
    dot.music.play()
```

In draw, I keep an amplitude circle and add FFT bars:

```python
# snippet from 2. balochi_visualiser_amp_fft.py
def draw(self):
    dot.background((5, 10, 35))
    amp = dot.music.amplitude()
    size = 80 + amp * 900
    dot.fill((0, 180, 170))
    dot.circle((dot.width//2, dot.height//2), size)

    fft = dot.music.fft()
    if fft is None:
        return

    half = len(fft) // 2
```

The lower frequencies are drawn on the left as red rectangles:

```python
# snippet from 2. balochi_visualiser_amp_fft.py
for i in range(half):
    h = fft[i] * 50
    x = int(i * 3)
    dot.fill((200, 40, 40))  # embroidered red
    dot.rectangle((x, dot.height), (x + 2, dot.height - h))
```

The higher frequencies go on the right in orange:

```python
# snippet from 2. balochi_visualiser_amp_fft.py
for i in range(half, len(fft)):
    h = fft[i] * 200
    x = 450 + int((i - half) * 3)
    dot.fill((255, 160, 40))  # warm Balochi orange
    dot.rectangle((x, dot.height), (x + 2, dot.height - h))
```

The colour palette (navy, red, orange, teal) is again chosen to feel Balochi. In practice, the left side (low frequencies) is much more active, which makes sense for the dambura. The right side only spikes sometimes, showing the higher harmonics.

This visualiser makes it clearer that the piece is not balanced across all frequencies. It is mainly about a strong low/mid drone, with fewer bright highs, which fits how the recording sounds.

## Visualiser 3 — Beats

The third visualiser combines amplitude, a small FFT section, and beat detection. I wanted something that reacts more obviously to key rhythmic moments in the song.

First, I still use amplitude for a main circle:

```python
# snippet from 3. balochi_visualiser_with_beats.py
def draw(self):
    dot.background((10, 10, 10))
    amp = dot.music.amplitude()
    size = 70 + amp * 900
    dot.fill((220, 40, 40))
    dot.circle((dot.width // 2, dot.height // 2), size)
```

Then a small set of FFT bars at the bottom:

```python
# snippet from 3. balochi_visualiser_with_beats.py
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
        dot.rectangle((x1, dot.height), (x2, dot.height - h))
```

The new part is using beat detection:

```python
# snippet from 3. balochi_visualiser_with_beats.py
if dot.music.is_beat():
    dot.fill((255, 200, 60))  # gold flash
    dot.circle((dot.width // 2, dot.height // 2), size + 40)
```

Whenever `dot.music.is_beat()` returns true, a bigger gold circle appears for that frame. It acts like a visual highlight for stronger moments in the music.

In this song there is no heavy drum, but there are still clear accents in the plucking. The gold flashes make those accents stand out more. This version feels more rhythmic than the first two, because you can see both the continuous movement (amplitude / FFT) and the specific beats.

## Problems, Environment, and Debugging

### Problem 1 – FFT fine in notes, broken in my setup

In the lecture notes, the FFT visualiser worked normally:

```text
Error in draw(): The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()
Error in draw(): The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()
```

### Problem 2 – Environment and path issues

I also hit basic file / environment problems:

```text
FileNotFoundError: [Errno 2] No such file or directory: 'balochi_audio.wav'
```

and other environment warnings that changed depending on which Python / conda setup I was accidentally using.

Working perfectly in lecture enviroment.
![code working](/Week%204-5/errors/week5%20fft%20code%20working%20fine%20in%20lecture%20notes.png)


Due to bugs and environment, the code started messing up the result.
![Code not Working](/Week%204-5/errors/week5-fft-code-working-crashing-in-my-environment.png)






### Problem 3 – Laptop freezing and Dorothy hanging

Sometimes Dorothy opened, printed a lot of error lines, my fan went crazy, and the whole laptop felt like it might crash. The window just sat there and stopped responding.

![Computer crash](/Week%204-5/errors/computer-crashing-dorothy.png)




## Fix

In the end the only real fix was a full reset:

- I **uninstalled conda completely**.
- I **uninstalled Dorothy**.
- I then **reinstalled conda** and created one fresh environment.
- I **reinstalled Dorothy in that single env** and stopped switching between base / other envs.

After that clean install, the same visualiser files started running properly. I also:

- Checked the audio path once with a tiny `librosa.load()` script.
- Kept `if fft is None: return` so draw wouldn’t run on missing FFT data.

With this reset, the amplitude, FFT, and beat visualisers all ran without freezing my laptop.

## AI Assistance and Policy

For this week I did use an AI assistant, but only for support around errors and setup. I used it to:

- Help explain error messages like the “truth value of an array with more than one element is ambiguous” one.
- Understand possible causes of Python / conda environment problems.
- Get quick, plain-English explanations of what some library functions do.

I did not use AI to write the main creative code or design the visualisers. The use of `dot.music.amplitude()`, `dot.music.fft()`, `dot.music.is_beat()`, and the overall visual decisions came from the course material, examples, and my own trials.


## Final Thoughts

This project helped me see one piece of music in three different ways: as loudness over time, as a spread of frequencies, and as a sequence of beats. It made the link between sound and visuals feel more concrete.

I also saw how much of creative coding is about debugging and environment problems. Small things like the wrong Python version or a missing file can stop everything until you fix them.

Using Ustad Noor Bakhsh’s version of an Indian film song made the work feel more personal. The visualisers are simple, but it was satisfying to see this Balochi instrument and melody show up as circles, bars and flashes on the screen.