(function() {
  self.Life = function(seed) {
    this.height = seed.length;
    this.width = seed[0].length;
    this.state = seed;
    this.prevState = [];
  };

  Life.prototype = {
    toString() {
      return this.state
        .map(row => {
          return row.join(" ") + "\n";
        })
        .join(" ");
    },
    copyArray(array) {
      return array
        .map(i => {
          return i.slice();
        })
        .slice();
    },
    next() {
      this.prevState = this.copyArray(this.state);
      for (let i = 0; i < this.height; ++i) {
        for (let j = 0; j < this.width; ++j) {
          let prevRow = this.prevState[i - 1] || [];
          let nextRow = this.prevState[i + 1] || [];
          let aliveNeighbors = [
            prevRow[j - 1],
            prevRow[j],
            prevRow[j + 1],
            this.prevState[i][j - 1],
            this.prevState[i][j + 1],
            nextRow[j - 1],
            nextRow[j],
            nextRow[j + 1],
          ];
          aliveNeighbors = aliveNeighbors.reduce((agg, cur) => {
            return agg + +!!cur;
          }, 0);

          if (
            this.prevState[i][j] &&
            (aliveNeighbors < 2 || aliveNeighbors > 3)
          ) {
            this.state[i][j] = 0;
          }
          if (
            this.prevState[i][j] &&
            (aliveNeighbors === 2 || aliveNeighbors === 3)
          ) {
            this.state[i][j] = 1;
          }
          if (!this.prevState[i][j] && aliveNeighbors === 3) {
            this.state[i][j] = 1;
          }
        }
      }
    },
  };
})();

const seed = [
  [0, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
