// Anagramas: ordena as letras para formar a palavra. Dois modos: contra o relógio, ou sem tempo com 3 vidas
// (cada erro ou palavra passada tira uma vida)
class AnagramView extends View {
  static SECONDS = 90;
  static LIVES = 3;

  constructor(app) {
    super(app);
    this.state = "intro";
    this.pool = GameView.words(app).filter(w => /^[a-z]{4,9}$/.test(w.en));
  }

  get tab() { return "jogo"; }

  newGame(mode = this.mode || "time") {
    this.mode = mode;
    this.lives = AnagramView.LIVES;
    this.msg = "";
    this.lost = null;
    this.state = "play";
    this.score = 0;
    this.skipped = 0;
    this.left = AnagramView.SECONDS;
    this.deadline = Date.now() + AnagramView.SECONDS * 1000;
    this.stopTimer();
    this.xp = 0;
    this.used = new Set();
    this.nextWord();
  }

  // Cada palavra sai uma só vez por jogo; quando acabam as palavras dos temas escolhidos, o jogo acaba
  nextWord(keepMsg = false) {
    const free = this.pool.filter(w => !this.used.has(w.key));
    if (!free.length) return this.end(true);
    this.word = Utils.pick(free);
    this.used.add(this.word.key);
    // Baralha até a ordem ser diferente da palavra
    let letters;
    do { letters = Utils.shuffle([...this.word.en]); } while (letters.join("") === this.word.en);
    this.tiles = letters.map((ch, i) => ({ ch, i }));
    this.built = [];
    this.flash = "";
    if (!keepMsg) this.msg = "";
  }

  render() {
    if (this.pool.length < 8) return GameView.needWords("Anagramas");
    if (this.state === "play") return this.playScreen();
    if (this.state === "over") return this.overScreen();
    const best = this.progress.data.anagramBest || 0, bestLives = this.progress.data.anagramLivesBest || 0;
    return `<div><div class="eyebrow">Jogo</div><h1>Anagramas 🔀</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">Toca nas letras (ou escreve no teclado) pela ordem certa para formar a palavra em inglês. A tradução é a pista.</p>
        <div class="row" style="justify-content:center"><button class="btn" data-action="angstart" data-v="time">⏱ Contra o relógio</button><button class="btn" data-action="angstart" data-v="lives">❤️ 3 vidas, sem tempo</button></div>
        <p class="muted" style="margin:0">Contra o relógio: ${AnagramView.SECONDS} segundos para formar o máximo de palavras · recorde ${best}.<br>3 vidas: sem pressa, mas cada erro ou palavra passada tira uma vida · recorde ${bestLives}.</p>
        <div class="row" style="justify-content:center"><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  playScreen() {
    const w = this.word;
    const slots = [...w.en].map((_, k) => `<span class="angslot ${this.flash}">${this.built[k] !== undefined ? this.esc(this.tiles[this.built[k]].ch) : ""}</span>`).join("");
    const tiles = this.tiles.map(t => `<button class="opt angtile" data-action="angpick" data-v="${t.i}" ${this.built.includes(t.i) ? "disabled" : ""}>${this.esc(t.ch)}</button>`).join("");
    const lives = this.mode === "lives";
    const status = lives ? `<span class="pill" aria-label="${this.lives} vidas">${"❤️".repeat(this.lives)}${"🤍".repeat(AnagramView.LIVES - this.lives)}</span>` : `<span id="angtime" class="pill now">⏱ ${this.left}s</span>`;
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Anagramas</span>${status}<span><b>${this.score}</b> certas</span></div>
      <section class="panel" style="text-align:center;gap:14px">
        <div class="eyebrow">Significa “${this.esc(w.pt)}” (${this.esc(w.pos)}) · ${w.en.length} letras</div>
        ${this.msg ? `<div class="fb ${this.msgOk ? "ok" : "no"}" style="margin:0">${this.msg}</div>` : ""}
        <div class="angslots">${slots}</div>
        <div class="angtiles">${tiles}</div>
        <div class="row" style="justify-content:center"><button class="btn ghost small" data-action="angback">⌫ Apagar</button><button class="btn ghost small" data-action="angskip">Passar →${lives ? " (−1 vida)" : ""}</button></div>
      </section>`;
  }

  get bestKey() {
    return this.mode === "lives" ? "anagramLivesBest" : "anagramBest";
  }

  overScreen() {
    const best = this.progress.data[this.bestKey] || 0;
    const rec = this.score > 0 && this.score === best && this.newRecord;
    const title = this.allDone ? "Acabaram as palavras" : this.mode === "lives" ? "Sem vidas" : "Fim do tempo";
    const lost = this.lost ? `<p style="margin:0">A última palavra era <b>${this.esc(this.lost.en)}</b> <span class="ipa">/${this.esc(this.lost.ipa)}/</span> — ${this.esc(this.lost.pt)}.</p>` : "";
    return `<div><div class="eyebrow">${title}</div><h1>${this.score} palavra${this.score === 1 ? "" : "s"}${rec ? " · novo recorde! 🎉" : ""}</h1></div>
      <section class="panel">${this.allDone ? `<p style="margin:0">Já saíram todas as ${this.pool.length} palavras dos temas escolhidos.</p>` : ""}${lost}<p style="margin:0">Passaste ${this.skipped}. Ganhaste ${this.xp} XP. Recorde: ${best}.</p>
        <div class="row"><button class="btn" data-action="angstart" data-v="${this.mode}">Jogar outra vez</button><button class="btn ghost" data-action="angmenu">Mudar de modo</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  // O ecrã é refeito a cada letra: o relógio não pode recomeçar aqui, e o tempo conta pela hora real
  afterRender() {
    if (this.state !== "play" || this.mode === "lives" || this.timer) return;
    this.timer = setInterval(() => {
      if (this.app.view !== this || this.state !== "play") return this.stopTimer();
      this.left = Math.max(0, Math.ceil((this.deadline - Date.now()) / 1000));
      const el = document.getElementById("angtime");
      if (el) el.textContent = `⏱ ${this.left}s`;
      if (this.left <= 0) this.end();
    }, 200);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  end(allDone = false) {
    this.stopTimer();
    this.state = "over";
    this.allDone = allDone;
    this.xp = Math.min(20, this.score);
    this.newRecord = this.score > (this.progress.data[this.bestKey] || 0);
    this.progress.data[this.bestKey] = Math.max(this.score, this.progress.data[this.bestKey] || 0);
    this.progress.addGame(this.xp, "anagram");
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
      if (this.mode === "lives") { this.msg = "Certo!"; this.msgOk = true; }
    } else {
      this.built = [];
      if (this.mode === "lives") this.loseLife("Não é essa. Perdeste uma vida — tenta outra vez.");
    }
  }

  // Modo 3 vidas: errar ou passar tira uma vida; sem vidas, o jogo acaba
  loseLife(msg) {
    this.lives--;
    this.msg = msg;
    this.msgOk = false;
    if (this.lives <= 0) {
      this.lost = this.word;
      this.end();
    }
  }

  skip() {
    this.skipped++;
    if (this.mode !== "lives") return this.nextWord();
    const w = this.word;
    this.loseLife(`A palavra era <b>${this.esc(w.en)}</b> (${this.esc(w.pt)}). Perdeste uma vida.`);
    if (this.state === "play") this.nextWord(true);
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
      case "angstart": this.newGame(value || this.mode); break;
      case "angmenu": this.state = "intro"; break;
      case "angpick": this.pick(Number(value)); break;
      case "angback": this.built.pop(); break;
      case "angskip": this.skip(); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
