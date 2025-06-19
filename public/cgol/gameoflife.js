// Überarbeitete Version von gameoflife.js – modular, DOM-Elemente gecached, Speicher optimiert

class GameOfLife {
  constructor() {
    this.canvas = document.getElementById("gameCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.cellSize = 8;
    this.rows = Math.floor(this.canvas.height / this.cellSize);
    this.cols = Math.floor(this.canvas.width / this.cellSize);
    this.grid = this.createGrid();
    this.nextGrid = this.createGrid();
    this.isPlaying = false;
    this.generation = 0;
    this.speed = 5;
    this.lastTime = 0;
    this.fps = 0;
    this.frameCount = 0;
    this.lastFpsTime = 0;

    this.dom = {
      generation: document.getElementById("generation"),
      population: document.getElementById("population"),
      fps: document.getElementById("fps"),
      playBtn: document.getElementById("playBtn"),
      speedSlider: document.getElementById("speedSlider"),
      speedValue: document.getElementById("speedValue"),
    };

    this.setupEvents();
    this.draw();
  }

  createGrid() {
    return Array.from({ length: this.rows }, () =>
      Array(this.cols).fill(false)
    );
  }

  setupEvents() {
    this.canvas.addEventListener("click", (e) => this.toggleCell(e));
    this.canvas.addEventListener("mousemove", (e) => {
      if (e.buttons === 1) this.toggleCell(e);
    });

    this.dom.playBtn.addEventListener("click", () => this.play());
    document
      .getElementById("pauseBtn")
      .addEventListener("click", () => this.pause());
    document
      .getElementById("clearBtn")
      .addEventListener("click", () => this.clear());
    document
      .getElementById("randomBtn")
      .addEventListener("click", () => this.randomize());

    this.dom.speedSlider.addEventListener("input", (e) => {
      this.speed = parseInt(e.target.value);
      this.dom.speedValue.textContent = this.speed;
    });

    document.querySelectorAll(".pattern-btn").forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.loadPattern(e.target.dataset.pattern)
      );
    });
  }

  toggleCell(e) {
    const rect = this.canvas.getBoundingClientRect();
    const col = Math.floor((e.clientX - rect.left) / this.cellSize);
    const row = Math.floor((e.clientY - rect.top) / this.cellSize);
    if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
      this.grid[row][col] = !this.grid[row][col];
      this.draw();
    }
  }

  play() {
    this.isPlaying = true;
    this.dom.playBtn.classList.add("playing");
    this.dom.playBtn.textContent = "⏸ Läuft";
    this.animate();
  }

  pause() {
    this.isPlaying = false;
    this.dom.playBtn.classList.remove("playing");
    this.dom.playBtn.textContent = "▶ Start";
  }

  clear() {
    this.pause();
    this.grid = this.createGrid();
    this.generation = 0;
    this.updateStats();
    this.draw();
  }

  randomize() {
    this.pause();
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        this.grid[r][c] = Math.random() < 0.3;
      }
    }
    this.generation = 0;
    this.updateStats();
    this.draw();
  }

  loadPattern(name) {
    this.clear();
    const r0 = Math.floor(this.rows / 2);
    const c0 = Math.floor(this.cols / 2);
    const patterns = {
      glider: [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
      ],
      gosperGun: [
        [5, 1],
        [5, 2],
        [6, 1],
        [6, 2],
        [5, 11],
        [6, 11],
        [7, 11],
        [4, 12],
        [8, 12],
        [3, 13],
        [9, 13],
        [3, 14],
        [9, 14],
        [6, 15],
        [4, 16],
        [8, 16],
        [5, 17],
        [6, 17],
        [7, 17],
        [6, 18],
        [3, 21],
        [4, 21],
        [5, 21],
        [3, 22],
        [4, 22],
        [5, 22],
        [2, 23],
        [6, 23],
        [1, 25],
        [2, 25],
        [6, 25],
        [7, 25],
        [3, 35],
        [3, 36],
        [4, 35],
        [4, 36],
      ],
      beacon: [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 1],
        [0, 0, 1, 1],
      ],
      toad: [
        [0, 1, 1, 1],
        [1, 1, 1, 0],
      ],
      pulsar: [
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      ],
    };
    const pattern = patterns[name];
    if (!pattern) return;
    if (name === "gosperGun") {
      // Koordinatenoffsets
      const rowOffset = r0 - 10;
      const colOffset = c0 - 20;
      for (let [r, c] of pattern) {
        const tr = rowOffset + r;
        const tc = colOffset + c;
        if (tr >= 0 && tr < this.rows && tc >= 0 && tc < this.cols) {
          this.grid[tr][tc] = true;
        }
      }
    } else {
      const sr = r0 - Math.floor(pattern.length / 2);
      const sc = c0 - Math.floor(pattern[0].length / 2);
      for (let r = 0; r < pattern.length; r++) {
        for (let c = 0; c < pattern[r].length; c++) {
          const tr = sr + r;
          const tc = sc + c;
          if (tr >= 0 && tr < this.rows && tc >= 0 && tc < this.cols) {
            this.grid[tr][tc] = pattern[r][c] === 1;
          }
        }
      }
    }
    this.draw();
  }

  countNeighbors(r, c) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const nr = r + i,
          nc = c + j;
        if (nr >= 0 && nr < this.rows && nc >= 0 && nc < this.cols) {
          if (this.grid[nr][nc]) count++;
        }
      }
    }
    return count;
  }

  nextGeneration() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const alive = this.grid[r][c];
        const neighbors = this.countNeighbors(r, c);
        this.nextGrid[r][c] = alive
          ? neighbors === 2 || neighbors === 3
          : neighbors === 3;
      }
    }
    [this.grid, this.nextGrid] = [this.nextGrid, this.grid];
    for (let r = 0; r < this.rows; r++) {
      this.nextGrid[r].fill(false);
    }
    this.generation++;
  }

  draw() {
    this.ctx.fillStyle = "#0a0a1a";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.strokeStyle = "rgba(100,255,218,0.1)";
    this.ctx.lineWidth = 0.5;
    for (let i = 0; i <= this.cols; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * this.cellSize, 0);
      this.ctx.lineTo(i * this.cellSize, this.canvas.height);
      this.ctx.stroke();
    }
    for (let i = 0; i <= this.rows; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, i * this.cellSize);
      this.ctx.lineTo(this.canvas.width, i * this.cellSize);
      this.ctx.stroke();
    }
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.grid[r][c]) {
          const x = c * this.cellSize;
          const y = r * this.cellSize;
          const g = this.ctx.createRadialGradient(
            x + 4,
            y + 4,
            0,
            x + 4,
            y + 4,
            4
          );
          g.addColorStop(0, "#64ffda");
          g.addColorStop(1, "#3f51b5");
          this.ctx.fillStyle = g;
          this.ctx.shadowColor = "#64ffda";
          this.ctx.shadowBlur = 5;
          this.ctx.fillRect(x + 1, y + 1, this.cellSize - 2, this.cellSize - 2);
          this.ctx.shadowBlur = 0;
        }
      }
    }
    this.updateStats();
  }

  updateStats() {
    let population = 0;
    for (let row of this.grid) for (let cell of row) if (cell) population++;
    this.dom.generation.textContent = this.generation;
    this.dom.population.textContent = population;
  }

  updateFps(currentTime) {
    this.frameCount++;
    if (currentTime - this.lastFpsTime >= 1000) {
      this.fps = Math.round(
        (this.frameCount * 1000) / (currentTime - this.lastFpsTime)
      );
      this.dom.fps.textContent = this.fps;
      this.frameCount = 0;
      this.lastFpsTime = currentTime;
    }
  }

  animate(time = 0) {
    if (!this.isPlaying) return;
    this.updateFps(time);
    const interval = 1000 / this.speed;
    if (time - this.lastTime >= interval) {
      this.nextGeneration();
      this.draw();
      this.lastTime = time;
    }
    requestAnimationFrame((t) => this.animate(t));
  }
}

window.addEventListener("load", () => new GameOfLife());
