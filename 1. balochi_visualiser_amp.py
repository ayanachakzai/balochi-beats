from dorothy import Dorothy

dot = Dorothy()

class MySketch:
    def __init__(self):
        dot.start_loop(self.setup, self.draw)

    def setup(self):
        dot.music.start_file_stream("balochi_audio.wav")
        dot.music.play()

    def draw(self):
        dot.background((40, 0, 60))

        amp = dot.music.amplitude()
        r = 50 + amp * 900

        dot.fill((180, 20, 40))
        dot.circle((dot.width//2, dot.height//2), r)

MySketch()
