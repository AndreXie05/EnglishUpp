// Chuva de palavras: as palavras inglesas caem; toca na tradução certa antes de chegarem ao fundo
class RainView extends View {
  static LIVES = 3;
  static LANES = 4;
  static TICK = 50;
  static HEIGHT = 300;

  constructor(app) {
    super(app);
    this.state = "intro";
    this.pool = this.makePool();
  }

  get tab() { return "jogo"; }

  makePool() {
    const seen = new Set();
    return GameView.words(this.app).filter(w => {
      if (w.en.length > 11 || w.pt.length > 20 || seen.has(w.pt) || seen.has(w.en)) return false;
      seen.add(w.pt);
      seen.add(w.en);
      return true;
    });
  }

  newGame() {
    this.state = "play";
    this.words = [];       // palavras a cair: { w, lane, y, el }
    this.score = 0;
    this.lives = RainView.LIVES;
    this.spawnIn = 0;
    this.time = 0;
    this.xp = 0;
    this.optionsKey = "";
    this.flash = "";
  }

  // Velocidade e ritmo aumentam com a pontuação
  get speed() { return 0.7 + Math.min(this.score, 40) * 0.035; }   // pixéis por tick
  get gap() { return Math.max(900, 2600 - this.score * 45); }       // ms entre palavras

  render() {
    if (this.pool.length < 8) return GameView.needWords("Chuva de palavras");
    if (this.state === "play") return this.playScreen();
    if (this.state === "over") return this.overScreen();
    const best = this.progress.data.rainBest || 0;
    return `<div><div class="eyebrow">Jogo</div><h1>Chuva de palavras 🌧️</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">As palavras inglesas caem do céu. Toca na tradução certa antes de chegarem ao chão. Tens ${RainView.LIVES} vidas: perdes uma se uma palavra chegar ao chão ou se tocares numa tradução errada. A chuva fica cada vez mais rápida.</p>
        <p class="muted" style="margin:0">Recorde: ${best} palavras</p>
        <div class="row" style="justify-content:center"><button class="btn" data-action="rainstart">Começar</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  playScreen() {
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Chuva de palavras</span><span id="rainhud"></span></div>
      <div class="rainstage" id="rainstage" style="height:${RainView.HEIGHT}px" aria-label="Palavras a cair"></div>
      <div class="rainopts" id="rainopts"></div>
      <span class="muted" style="font-size:.85rem">Também podes carregar nas teclas 1 a 4.</span>`;
  }

  overScreen() {
    const rec = this.score > 0 && this.score === this.progress.data.rainBest;
    return `<div><div class="eyebrow">Fim da chuva</div><h1>${this.score} palavra${this.score === 1 ? "" : "s"}${rec ? " · novo recorde! 🎉" : ""}</h1></div>
      <section class="panel"><p style="margin:0">Ganhaste ${this.xp} XP. Recorde: ${this.progress.data.rainBest || 0}.</p>
        <div class="row"><button class="btn" data-action="rainstart">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  afterRender() {
    clearInterval(this.timer);
    if (this.state !== "play") return;
    this.stage = document.getElementById("rainstage");
    this.words.forEach(o => { o.el = null; });
    this.timer = setInterval(() => this.tick(), RainView.TICK);
    this.hud();
    this.sync();
  }

  hud() {
    const el = document.getElementById("rainhud");
    if (el) el.innerHTML = `<b>${this.score}</b> certas · ${"❤️".repeat(this.lives)}${"🖤".repeat(RainView.LIVES - this.lives)}`;
  }

  spawn() {
    const used = new Set(this.words.map(o => o.w.key));
    const free = Array.from({ length: RainView.LANES }, (_, i) => i).filter(l => !this.words.some(o => o.lane === l && o.y < 50));
    const w = Utils.pick(this.pool.filter(x => !used.has(x.key)));
    if (!free.length || !w) return;
    this.words.push({ w, lane: Utils.pick(free), y: -30, el: null });
  }

  tick() {
    if (this.app.view !== this || this.state !== "play" || !document.getElementById("rainstage")) return clearInterval(this.timer);
    this.time += RainView.TICK;
    this.spawnIn -= RainView.TICK;
    if (this.spawnIn <= 0) { this.spawn(); this.spawnIn = this.gap; }
    let missed = 0;
    this.words = this.words.filter(o => {
      o.y += this.speed;
      if (o.y >= RainView.HEIGHT - 34) { o.el?.remove(); missed++; return false; }
      return true;
    });
    if (missed) {
      this.lives -= missed;
      this.hud();
      if (this.lives <= 0) return this.end();
    }
    this.sync();
  }

  // Desenha as palavras e as 4 traduções (a das palavras que estão a cair + uma de engano)
  sync() {
    const stage = document.getElementById("rainstage");
    if (!stage) return;
    this.words.forEach(o => {
      if (!o.el) {
        o.el = document.createElement("span");
        o.el.className = "rainword";
        o.el.innerHTML = `${this.esc(o.w.en)}<small class="ipa">/${this.esc(o.w.ipa)}/</small>`;
        o.el.style.left = `${6 + o.lane * (88 / RainView.LANES)}%`;
        stage.appendChild(o.el);
      }
      o.el.style.top = `${o.y}px`;
    });
    const key = this.words.map(o => o.w.key).join("|");
    if (key === this.optionsKey) return;
    this.optionsKey = key;
    this.options = this.options && this.options.filter(w => this.words.some(o => o.w.key === w.key));
    const have = new Set((this.options || []).map(w => w.key));
    const list = [...(this.options || [])];
    // As traduções novas entram num lugar ao acaso, mas as que já lá estão não mudam de sítio
    const add = w => { list.splice(Math.floor(Math.random() * (list.length + 1)), 0, w); have.add(w.key); };
    this.words.forEach(o => { if (!have.has(o.w.key) && list.length < 4) add(o.w); });
    while (list.length < 4) {
      const d = Utils.pick(this.pool);
      if (!have.has(d.key) && !list.some(x => x.pt === d.pt)) add(d);
    }
    this.options = list;
    const box = document.getElementById("rainopts");
    if (box) box.innerHTML = list.map(w => `<button class="opt" data-action="rainpick" data-v="${this.esc(w.key)}">${this.esc(w.pt)}</button>`).join("");
  }

  pick(key) {
    const hit = this.words.filter(o => o.w.key === key).sort((a, b) => b.y - a.y)[0];
    if (!hit) {
      // Tradução de engano: perde-se uma vida
      this.lives--;
      this.hud();
      if (this.lives <= 0) this.end();
      return;
    }
    hit.el?.classList.add("pop");
    const el = hit.el;
    setTimeout(() => el?.remove(), 250);
    this.words = this.words.filter(o => o !== hit);
    this.options = (this.options || []).filter(w => w.key !== key);
    this.score++;
    this.hud();
    this.optionsKey = "";
    this.sync();
  }

  end() {
    clearInterval(this.timer);
    this.state = "over";
    this.xp = Math.min(25, this.score);
    this.progress.data.rainBest = Math.max(this.score, this.progress.data.rainBest || 0);
    this.progress.addGame(this.xp);
    this.app.save();
    this.app.render();
  }

  onKey(e) {
    if (this.state !== "play") return;
    const n = Number(e.key);
    const btn = document.querySelectorAll("#rainopts .opt")[n - 1];
    if (n >= 1 && n <= 4 && btn) this.pick(btn.dataset.v);
  }

  onAction(action, value) {
    switch (action) {
      case "rainstart": this.newGame(); this.app.render(); return true;
      case "rainpick": this.pick(value); return true;
      default: return false;
    }
  }
}
