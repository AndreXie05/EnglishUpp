// Intruso: três palavras são do mesmo tema e uma vem de outro; toca na que não pertence ao grupo
class OddView extends View {
  static ROUNDS = 10;

  constructor(app) {
    super(app);
    this.state = "intro";
    const ok = w => w.en.length <= 14 && !/[A-Z]/.test(w.en);
    this.themes = GameView.themes(app).filter(t => t.words.filter(ok).length >= 6);
    this.all = app.dict.themes.filter(t => t.words.filter(ok).length >= 6);
    this.ok = ok;
  }

  get tab() { return "jogo"; }
  get dictOk() { return this.state === "play"; }

  newGame() {
    this.state = "play";
    this.i = 0;
    this.correct = 0;
    this.xp = 0;
    this.loadRound();
  }

  loadRound() {
    for (let n = 0; n < 40; n++) {
      const A = Utils.pick(this.themes);
      // O tema do intruso fica longe do tema do grupo, para a diferença ser clara
      const others = (this.themes.length > 1 ? this.themes : this.all).filter(t => t.id !== A.id && Math.abs(t.index - A.index) >= 3);
      if (!others.length) continue;
      const B = Utils.pick(others);
      const posCount = {};
      A.words.filter(this.ok).forEach(w => (posCount[w.pos] = (posCount[w.pos] || 0) + 1));
      const pos = Object.keys(posCount).sort((a, b) => posCount[b] - posCount[a])[0];
      const group = Utils.shuffle(A.words.filter(w => this.ok(w) && w.pos === pos)).slice(0, 3);
      const odd = Utils.pick(B.words.filter(w => this.ok(w) && w.pos === pos && !group.some(g => g.en === w.en || g.pt === w.pt)));
      if (group.length < 3 || !odd) continue;
      this.A = A;
      this.B = B;
      this.odd = odd;
      this.options = Utils.shuffle([...group, odd]);
      this.chosen = null;
      return;
    }
    this.state = "none";
  }

  render() {
    if (this.state === "none" || this.themes.length < 1) return GameView.needWords("Intruso");
    if (this.state === "intro") return `<div><div class="eyebrow">Jogo</div><h1>Intruso 🧐</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">Quatro palavras: três são do mesmo tema e uma é de outro. Toca na que <b>não pertence</b> ao grupo. São ${OddView.ROUNDS} rondas.</p>
        <div class="row" style="justify-content:center"><button class="btn" data-action="oddstart">Começar</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    if (this.state === "over") return `<div><div class="eyebrow">Fim</div><h1>${this.correct} de ${OddView.ROUNDS}${this.correct === OddView.ROUNDS ? " 🎉" : ""}</h1></div>
      <section class="panel"><p style="margin:0">Ganhaste ${this.xp} XP.</p><div class="row"><button class="btn" data-action="oddstart">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    const a = this.chosen !== null;
    const opts = this.options.map((w, k) => `<button class="opt emopt ${a ? (w.key === this.odd.key ? "ok" : w.key === this.chosen ? "no" : "") : ""}" data-action="oddpick" data-v="${this.esc(w.key)}" ${a ? "disabled" : ""}><b>${k + 1}</b> ${this.esc(w.en)} <span class="ipa">/${this.esc(w.ipa)}/</span>${a ? `<br><small>${this.esc(w.pt)}</small>` : ""}</button>`).join("");
    const after = a ? `<div class="fb ${this.chosen === this.odd.key ? "ok" : "no"}">${this.chosen === this.odd.key ? "Certo!" : "Não."} “${this.esc(this.odd.en)}” é do tema ${this.esc(this.B.pt)}; as outras são do tema ${this.esc(this.A.pt)}.</div>
      <div class="row" style="justify-content:center"><button class="btn" data-action="oddnext">${this.i === OddView.ROUNDS - 1 ? "Ver resultado" : "Seguinte →"}</button></div>` : "";
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Intruso</span><span class="pill now">${this.i + 1} de ${OddView.ROUNDS}</span></div>
      <section class="panel" style="text-align:center;gap:14px"><div class="eyebrow">Qual palavra não pertence ao grupo?</div><div class="emopts">${opts}</div>${after}</section>`;
  }

  pick(key) {
    if (this.chosen !== null) return;
    this.chosen = key;
    if (key === this.odd.key) this.correct++;
  }

  next() {
    if (this.i >= OddView.ROUNDS - 1) {
      this.state = "over";
      this.xp = this.correct + (this.correct === OddView.ROUNDS ? 3 : 0);
      this.progress.addGame(this.xp);
      this.app.save();
    } else { this.i++; this.loadRound(); }
  }

  onKey(e) {
    if (this.state !== "play") return;
    const k = Number(e.key);
    if (this.chosen === null && k >= 1 && k <= 4) this.pick(this.options[k - 1].key);
    else if (e.key === "Enter" && this.chosen !== null && e.target.tagName !== "BUTTON") this.next();
    else return;
    this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "oddstart": this.newGame(); break;
      case "oddpick": this.pick(value); break;
      case "oddnext": this.next(); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
