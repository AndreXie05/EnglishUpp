// Torre: cada resposta certa põe mais um andar; cada erro tira uma vida e dois andares
class TowerView extends View {
  static GOAL = 25;
  static LIVES = 3;

  constructor(app) {
    super(app);
    this.state = "intro";
    this.words = GameView.words(app);
    this.factory = GameView.factory(app);
  }

  get tab() { return "jogo"; }

  newGame() {
    this.state = "play";
    this.floors = 0;
    this.peak = 0;
    this.lives = TowerView.LIVES;
    this.used = new Set();
    this.last = "";
    this.xp = 0;
    this.q = GameView.draw(this.factory, this.words, this.used);
  }

  render() {
    if (this.words.length < 20) return GameView.needWords("Torre");
    const best = this.progress.data.towerBest || 0;
    if (this.state === "intro") return `<div><div class="eyebrow">Jogo</div><h1>Torre 🏗️</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">Cada resposta certa põe mais um andar na torre. Cada erro custa uma das ${TowerView.LIVES} vidas e <b>deita abaixo dois andares</b>. Chega aos ${TowerView.GOAL} andares, ou pára quando quiseres.</p>
        <p class="muted" style="margin:0">Torre mais alta: ${best} andares</p>
        <div class="row" style="justify-content:center"><button class="btn" data-action="towstart">Construir</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    if (this.state === "over") return `<div><div class="eyebrow">Fim</div><h1>${this.win ? "🏆 Torre completa!" : `${this.floors} andares`}</h1></div>
      <section class="panel"><p style="margin:0">A torre chegou a ${this.peak} andares. Ganhaste ${this.xp} XP. Torre mais alta: ${this.progress.data.towerBest || 0}.</p>
        <div class="row"><button class="btn" data-action="towstart">Outra torre</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    const blocks = Array.from({ length: this.floors }, (_, i) => `<i class="tb t${i % 6}"></i>`).reverse().join("");
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Torre</span><span class="pill now">${"❤️".repeat(this.lives)}${"🖤".repeat(TowerView.LIVES - this.lives)}</span></div>
      <div class="towergrid"><section class="panel" style="gap:14px">${GameView.questionHtml(this, this.q, null, "towpick")}
        <div class="muted" style="min-height:1.4em;text-align:center">${this.last}</div>
        <div class="row" style="justify-content:center"><button class="btn ghost small" data-action="towstop">Parar aqui</button></div></section>
      <div class="tower" aria-label="Torre com ${this.floors} andares"><b class="towfl">${this.floors}</b>${blocks}</div></div>`;
  }

  end(win = false) {
    this.state = "over";
    this.win = win;
    this.xp = Math.min(25, Math.ceil(this.floors / 2) + (win ? 5 : 0));
    this.progress.data.towerBest = Math.max(this.peak, this.progress.data.towerBest || 0);
    this.progress.addGame(this.xp, "tower");
    this.app.save();
  }

  pick(key) {
    const q = this.q, ok = key === q.word.key;
    this.progress.recordStat?.(q.word, q.type, ok);
    if (ok) {
      this.floors++;
      this.peak = Math.max(this.peak, this.floors);
      this.last = "✅ Certo! Mais um andar.";
      if (this.floors >= TowerView.GOAL) return this.end(true);
    } else {
      this.lives--;
      this.floors = Math.max(0, this.floors - 2);
      this.last = `❌ Era “${this.esc(GameView.answerLabel(q))}”. Caíram dois andares!`;
      if (this.lives <= 0) return this.end(false);
    }
    this.q = GameView.draw(this.factory, this.words, this.used);
  }

  onKey(e) {
    if (this.state !== "play") return;
    const k = Number(e.key);
    if (k >= 1 && k <= 4 && this.q.options[k - 1]) this.pick(this.q.options[k - 1].key);
    else return;
    this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "towstart": this.newGame(); break;
      case "towpick": this.pick(value); break;
      case "towstop": this.end(false); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
