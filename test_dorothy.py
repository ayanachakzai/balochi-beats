from dorothy import Dorothy

dot = Dorothy()

class Test:
    def __init__(self):
        dot.start_loop(self.setup, self.draw)

    def setup(self):
        dot.background((50, 0, 70))

    def draw(self):
        dot.background((50, 0, 70))
        dot.fill(dot.red)
        dot.circle((dot.width//2, dot.height//2), 100)

Test()
