// Bomba-relógio: responde a perguntas seguidas; a bomba explode ao fim de um tempo escondido. Desarma para guardar tudo
class BombView extends View {
  constructor(app) {
    super(app);
    this.state = "intro";
    this.words = GameView.words(app);
    this.factory = GameView.factory(app);
  }

  get tab() { return "jogo"; }

  newGame() {
    this.state = "play";
    this.score = 0;
    this.used = new Set();
    this.fuse = 25 + Math.random() * 30; // segundos escondidos
    this.t0 = Date.now();
    this.last = "";
    this.xp = 0;
    this.q = GameView.draw(this.factory, this.words, this.used);
  }

  get left() { return this.fuse - (Date.now() - this.t0) / 1000; }

  render() {
    if (this.words.length < 20) return GameView.needWords("Bomba-relógio");
    const best = this.progress.data.bombBest || 0;
    if (this.state === "intro") return `<div><div class="eyebrow">Jogo</div><h1>Bomba-relógio 💣</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">Responde a perguntas seguidas. A bomba explode quando menos esperas, e não sabes quando! Cada erro encurta o rastilho. Se carregares em <b>Desarmar</b> antes de explodir, guardas todos os pontos; se explodir, ficas só com metade.</p>
        <p class="muted" style="margin:0">Recorde desarmando: ${best} certas</p>
        <div class="row" style="justify-content:center"><button class="btn" data-action="bombstart">Acender o rastilho</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    if (this.state === "over") return `<div><div class="eyebrow">${this.boom ? "BUM!" : "Desarmada"}</div><h1>${this.boom ? "💥 A bomba explodiu" : "✅ Bomba desarmada"}</h1></div>
      <section class="panel"><p style="margin:0">Acertaste ${this.score}. ${this.boom ? "Como explodiu, ficaste com metade." : ""} Ganhaste ${this.xp} XP. Recorde desarmando: ${this.progress.data.bombBest || 0}.</p>
        <div class="row"><button class="btn" data-action="bombstart">Outra bomba</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Bomba-relógio</span><span class="pill now">${this.score} certas</span></div>
      <section class="panel" style="gap:14px"><div class="bomb" id="bomb" role="img" aria-label="Bomba a trabalhar">💣</div>
        ${GameView.questionHtml(this, this.q, null, "bombpick")}
        <div class="muted" style="min-height:1.4em;text-align:center">${this.last}</div>
        <div class="row" style="justify-content:center"><button class="btn" data-action="bombstop">✂️ Desarmar e guardar ${this.score} certas</button></div></section>`;
  }

  afterRender() {
    clearInterval(this.timer);
    if (this.state !== "play") return;
    this.timer = setInterval(() => {
      if (this.app.view !== this || this.state !== "play") return clearInterval(this.timer);
      const left = this.left, el = document.getElementById("bomb");
      if (el) el.style.animationDuration = `${Math.max(0.2, Math.min(1.2, left / 12))}s`;
      if (left <= 0) this.end(true);
    }, 200);
  }

  end(boom) {
    clearInterval(this.timer);
    this.state = "over";
    this.boom = boom;
    this.xp = boom ? Math.min(10, Math.ceil(this.score / 2)) : Math.min(20, this.score);
    if (!boom) this.progress.data.bombBest = Math.max(this.score, this.progress.data.bombBest || 0);
    this.progress.addGame(this.xp);
    this.app.save();
    this.app.render();
  }

  pick(key) {
    const q = this.q, ok = key === q.word.key;
    this.progress.recordStat?.(q.word, q.type, ok);
    if (ok) { this.score++; this.last = "✅ Certo!"; } else {
      this.fuse -= 4;
      this.last = `❌ Era “${this.esc(GameView.answerLabel(q))}”. O rastilho ficou mais curto!`;
    }
    if (this.left <= 0) return this.end(true);
    this.q = GameView.draw(this.factory, this.words, this.used);
  }

  onKey(e) {
    if (this.state !== "play") return;
    const k = Number(e.key);
    if (k >= 1 && k <= 4 && this.q.options[k - 1]) this.pick(this.q.options[k - 1].key);
    else return;
    if (this.state === "play") this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "bombstart": this.newGame(); break;
      case "bombpick": this.pick(value); if (this.state !== "play") return true; break;
      case "bombstop": return this.end(false), true;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
