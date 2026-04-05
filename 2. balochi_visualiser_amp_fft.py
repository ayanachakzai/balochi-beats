from dorothy import Dorothy

dot = Dorothy()

class MySketch:
    def __init__(self):
        dot.start_loop(self.setup, self.draw)

    def setup(self):
        dot.music.start_file_stream("balochi_audio.wav")
        dot.music.play()

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

        for i in range(half):
            h = fft[i] * 50
            x = int(i * 3)

            dot.fill((200, 40, 40))    # embroidered red
            dot.rectangle((x, dot.height), (x + 2, dot.height - h))

        for i in range(half, len(fft)):
            h = fft[i] * 200
            x = 450 + int((i - half) * 3)

            dot.fill((255, 160, 40))   # warm Balochi orange
            dot.rectangle((x, dot.height), (x + 2, dot.height - h))

MySketch()
