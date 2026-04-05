from dorothy import Dorothy
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

        # red circle (balochi theme)
        dot.fill((220, 40, 40))
        dot.circle((dot.width // 2, dot.height // 2), size)

        fft = dot.music.fft()

        if fft is not None:
            num_bars = 20
            bars = fft[:num_bars]

            bar_width = dot.width // num_bars

            for i in range(num_bars):
                h = bars[i] * 100

                # low freq = warm red
                if i < num_bars // 2:
                    dot.fill((220, 60, 60))
                # high freq = deep blue
                else:
                    dot.fill((40, 80, 200))

                x1 = i * bar_width
                x2 = x1 + bar_width - 2

                dot.rectangle((x1, dot.height), (x2, dot.height - h))

        if dot.music.is_beat():
            dot.fill((255, 200, 60))   # gold flash
            dot.circle((dot.width // 2, dot.height // 2), size + 40)

MySketch()
