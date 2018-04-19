(function() {
  self.life = (seed) => {
    this.height = seed.length;
    this.width = seed[0].length;
    this.state = seed;

    for (let i = 0; i < this.height; ++i) {
      for (let j = 0; i < this.width; ++j) {
        let aliveNeighbors
      }
    }
  }
})()

const seed = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0],
  [0,0,0,1,0,0,0,0],
  [0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0],
]