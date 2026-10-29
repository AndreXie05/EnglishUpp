// Adivinha a imagem: vês um emoji e escolhes a palavra em inglês
class EmojiView extends View {
  static ROUNDS = 10;

  constructor(app) {
    super(app);
    this.state = "intro";
    const withPic = list => list.filter(w => EMOJI[w.en]).filter((w, i, a) => a.findIndex(x => x.en === w.en) === i);
    this.pool = withPic(GameView.words(app));
    // Nos primeiros temas quase não há objetos com imagem: usa palavras de todos os temas
    this.fallback = this.pool.length < 8;
    if (this.fallback) this.pool = withPic(app.dict.themes.flatMap(t => t.words));
    this.clash = {};
    EMOJI_CLASH.forEach(g => g.forEach(a => g.forEach(b => { if (a !== b) (this.clash[a] ||= new Set()).add(b); })));
  }

  get tab() { return "jogo"; }

  newGame() {
    this.state = "play";
    this.i = 0;
    this.correct = 0;
    this.used = new Set();
    this.xp = 0;
    this.loadQuestion();
  }

  loadQuestion() {
    const keys = this.pool.map(w => w.key).filter(k => !this.used.has(k));
    const key = this.progress.drawFromDeck("emoji", keys.length ? keys : this.pool.map(w => w.key));
    this.app.save?.();
    this.word = this.pool.find(w => w.key === key);
    this.used.add(key);
    const bad = this.clash[this.word.en] || new Set();
    const others = Utils.shuffle(this.pool.filter(w => w.en !== this.word.en && !bad.has(w.en)));
    const opts = [];
    for (const w of others) if (opts.length < 3 && !opts.some(o => (this.clash[o.en] || new Set()).has(w.en))) opts.push(w);
    this.options = Utils.shuffle([this.word, ...opts]);
    this.chosen = null;
  }

  render() {
    if (this.pool.length < 8) return GameView.needWords("Adivinha a imagem");
    if (this.state === "intro") return `<div><div class="eyebrow">Jogo</div><h1>Adivinha a imagem 🖼️</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">Vês uma imagem e escolhes a palavra em inglês. Sem tradução, só a imagem! São ${EmojiView.ROUNDS} palavras.</p>${this.fallback ? `<p class="muted" style="margin:0">Os temas escolhidos têm poucos objetos com imagem, por isso este jogo usa palavras de todos os temas.</p>` : ""}
        <div class="row" style="justify-content:center"><button class="btn" data-action="emstart">Começar</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    if (this.state === "over") return `<div><div class="eyebrow">Fim</div><h1>${this.correct} de ${EmojiView.ROUNDS}${this.correct === EmojiView.ROUNDS ? " 🎉" : ""}</h1></div>
      <section class="panel"><p style="margin:0">Ganhaste ${this.xp} XP.</p><div class="row"><button class="btn" data-action="emstart">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    const w = this.word, a = this.chosen !== null;
    const opts = this.options.map((o, k) => `<button class="opt emopt ${a ? (o.key === w.key ? "ok" : o.key === this.chosen ? "no" : "") : ""}" data-action="empick" data-v="${this.esc(o.key)}" ${a ? "disabled" : ""}><b>${k + 1}</b> ${this.esc(o.en)}</button>`).join("");
    const after = a ? `<div class="fb ${this.chosen === w.key ? "ok" : "no"}">${this.chosen === w.key ? "Certo!" : "Era"} <b>${this.esc(w.en)}</b> /${this.esc(w.ipa)}/ · ${this.esc(w.pt)}</div>
      <div class="row" style="justify-content:center"><button class="btn" data-action="emnext">${this.i === EmojiView.ROUNDS - 1 ? "Ver resultado" : "Seguinte →"}</button></div>` : "";
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Adivinha a imagem</span><span class="pill now">${this.i + 1} de ${EmojiView.ROUNDS}</span></div>
      <section class="panel" style="text-align:center;gap:14px"><div class="emoji" role="img" aria-label="Imagem">${EMOJI[w.en]}</div>
        <div class="eyebrow">Qual é a palavra em inglês?</div><div class="emopts">${opts}</div>${after}</section>`;
  }

  pick(key) {
    if (this.chosen !== null) return;
    this.chosen = key;
    if (key === this.word.key) this.correct++;
  }

  next() {
    if (this.i >= EmojiView.ROUNDS - 1) {
      this.state = "over";
      this.xp = this.correct + (this.correct === EmojiView.ROUNDS ? 3 : 0);
      this.progress.addGame(this.xp);
      this.app.save();
    } else { this.i++; this.loadQuestion(); }
  }

  onKey(e) {
    if (this.state !== "play") return;
    const k = Number(e.key);
    if (this.chosen === null && k >= 1 && k <= this.options.length) this.pick(this.options[k - 1].key);
    else if (e.key === "Enter" && this.chosen !== null && e.target.tagName !== "BUTTON") this.next();
    else return;
    this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "emstart": this.newGame(); break;
      case "empick": this.pick(value); break;
      case "emnext": this.next(); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
