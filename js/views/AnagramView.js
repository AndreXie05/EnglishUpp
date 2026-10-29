// Anagramas: ordena as letras para formar a palavra, contra o relógio
class AnagramView extends View {
  static SECONDS = 90;

  constructor(app) {
    super(app);
    this.state = "intro";
    this.pool = GameView.words(app).filter(w => /^[a-z]{4,9}$/.test(w.en));
  }

  get tab() { return "jogo"; }

  newGame() {
    this.state = "play";
    this.score = 0;
    this.skipped = 0;
    this.left = AnagramView.SECONDS;
    this.xp = 0;
    this.used = new Set();
    this.nextWord();
  }

  nextWord() {
    const free = this.pool.filter(w => !this.used.has(w.key));
    this.word = Utils.pick(free.length ? free : this.pool);
    this.used.add(this.word.key);
    // Baralha até a ordem ser diferente da palavra
    let letters;
    do { letters = Utils.shuffle([...this.word.en]); } while (letters.join("") === this.word.en);
    this.tiles = letters.map((ch, i) => ({ ch, i }));
    this.built = [];
    this.flash = "";
  }

  render() {
    if (this.pool.length < 8) return GameView.needWords("Anagramas");
    if (this.state === "play") return this.playScreen();
    if (this.state === "over") return this.overScreen();
    const best = this.progress.data.anagramBest || 0;
    return `<div><div class="eyebrow">Jogo</div><h1>Anagramas 🔀</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">Tens ${AnagramView.SECONDS} segundos para formar o máximo de palavras. Toca nas letras (ou escreve no teclado) pela ordem certa. A tradução é a pista.</p>
        <p class="muted" style="margin:0">Recorde: ${best} palavras</p>
        <div class="row" style="justify-content:center"><button class="btn" data-action="angstart">Começar</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  playScreen() {
    const w = this.word;
    const slots = [...w.en].map((_, k) => `<span class="angslot ${this.flash}">${this.built[k] !== undefined ? this.esc(this.tiles[this.built[k]].ch) : ""}</span>`).join("");
    const tiles = this.tiles.map(t => `<button class="opt angtile" data-action="angpick" data-v="${t.i}" ${this.built.includes(t.i) ? "disabled" : ""}>${this.esc(t.ch)}</button>`).join("");
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Anagramas</span><span id="angtime" class="pill now">⏱ ${this.left}s</span><span><b>${this.score}</b> certas</span></div>
      <section class="panel" style="text-align:center;gap:14px">
        <div class="eyebrow">Significa “${this.esc(w.pt)}” (${this.esc(w.pos)}) · ${w.en.length} letras</div>
        <div class="angslots">${slots}</div>
        <div class="angtiles">${tiles}</div>
        <div class="row" style="justify-content:center"><button class="btn ghost small" data-action="angback">⌫ Apagar</button><button class="btn ghost small" data-action="angskip">Passar →</button></div>
      </section>`;
  }

  overScreen() {
    const rec = this.score > 0 && this.score === this.progress.data.anagramBest;
    return `<div><div class="eyebrow">Fim do tempo</div><h1>${this.score} palavra${this.score === 1 ? "" : "s"}${rec ? " · novo recorde! 🎉" : ""}</h1></div>
      <section class="panel"><p style="margin:0">Passaste ${this.skipped}. Ganhaste ${this.xp} XP. Recorde: ${this.progress.data.anagramBest || 0}.</p>
        <div class="row"><button class="btn" data-action="angstart">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  afterRender() {
    clearInterval(this.timer);
    if (this.state !== "play") return;
    this.timer = setInterval(() => {
      if (this.app.view !== this || this.state !== "play") return clearInterval(this.timer);
      this.left--;
      const el = document.getElementById("angtime");
      if (el) el.textContent = `⏱ ${this.left}s`;
      if (this.left <= 0) this.end();
    }, 1000);
  }

  end() {
    clearInterval(this.timer);
    this.state = "over";
    this.xp = Math.min(20, this.score);
    this.progress.data.anagramBest = Math.max(this.score, this.progress.data.anagramBest || 0);
    this.progress.addGame(this.xp);
    this.app.save();
    this.app.render();
  }

  pick(i) {
    if (this.built.includes(i) || this.built.length >= this.tiles.length) return;
    this.built.push(i);
    if (this.built.length === this.tiles.length) this.check();
  }

  check() {
    const attempt = this.built.map(i => this.tiles[i].ch).join("");
    if (attempt === this.word.en) {
      this.score++;
      this.nextWord();
    } else {
      this.built = [];
    }
  }

  onKey(e) {
    if (this.state !== "play") return;
    const c = e.key.toLowerCase();
    if (/^[a-z]$/.test(c)) {
      const t = this.tiles.find(x => x.ch === c && !this.built.includes(x.i));
      if (t) this.pick(t.i);
    } else if (e.key === "Backspace") this.built.pop();
    else return;
    this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "angstart": this.newGame(); break;
      case "angpick": this.pick(Number(value)); break;
      case "angback": this.built.pop(); break;
      case "angskip": this.skipped++; this.nextWord(); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
