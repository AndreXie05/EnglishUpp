// Corrige o erro: uma frase com um erro típico de quem fala português; toca na palavra errada e vê a versão certa
class FixView extends View {
  static ROUNDS = 10;

  constructor(app) {
    super(app);
    this.state = "intro";
  }

  get tab() { return "jogo"; }
  get dictOk() { return this.state === "play"; }

  static clean(t) { return t.replace(/[.,!?]+$/, ""); }

  newGame() {
    this.state = "play";
    this.i = 0;
    this.correct = 0;
    this.used = new Set();
    this.xp = 0;
    this.load();
  }

  load() {
    const keys = FIXES.map((_, i) => String(i)).filter(k => !this.used.has(k));
    const k = this.progress.drawFromDeck("fix", keys.length ? keys : FIXES.map((_, i) => String(i)));
    this.app.save?.();
    this.used.add(k);
    this.item = FIXES[Number(k)];
    this.tokens = this.item.wrong.split(" ");
    this.chosen = null;
  }

  isBad(t) { return this.item.bad.includes(FixView.clean(t)); }

  render() {
    if (this.state === "intro") return `<div><div class="eyebrow">Jogo</div><h1>Corrige o erro 🛠️</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">Cada frase tem um erro que os portugueses fazem muitas vezes em inglês. Toca na palavra errada e vê a versão certa, com a explicação. São ${FixView.ROUNDS} frases.</p>
        <div class="row" style="justify-content:center"><button class="btn" data-action="fixstart">Começar</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    if (this.state === "over") return `<div><div class="eyebrow">Fim</div><h1>${this.correct} de ${FixView.ROUNDS}${this.correct === FixView.ROUNDS ? " 🎉" : ""}</h1></div>
      <section class="panel"><p style="margin:0">Ganhaste ${this.xp} XP.</p><div class="row"><button class="btn" data-action="fixstart">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    const a = this.chosen !== null;
    const toks = this.tokens.map((t, i) => `<button class="opt fixtok ${a ? (this.isBad(t) ? "ok" : i === this.chosen ? "no" : "") : ""}" data-action="fixpick" data-v="${i}" ${a ? "disabled" : ""}>${this.esc(t)}</button>`).join("");
    const good = a && this.isBad(this.tokens[this.chosen]);
    const after = a ? `<div class="fb ${good ? "ok" : "no"}">${good ? "Certo!" : "Não era essa."} A frase certa é: <b>${this.esc(this.item.right)}</b><br>${this.esc(this.item.tip)}</div>
      <div class="row" style="justify-content:center"><button class="btn" data-action="fixnext">${this.i === FixView.ROUNDS - 1 ? "Ver resultado" : "Seguinte →"}</button></div>` : "";
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Corrige o erro</span><span class="pill now">${this.i + 1} de ${FixView.ROUNDS}</span></div>
      <section class="panel" style="text-align:center;gap:14px"><div class="eyebrow">Toca na palavra errada</div><div class="fixrow">${toks}</div>${after}</section>`;
  }

  pick(i) {
    if (this.chosen !== null) return;
    this.chosen = i;
    if (this.isBad(this.tokens[i])) this.correct++;
  }

  next() {
    if (this.i >= FixView.ROUNDS - 1) {
      this.state = "over";
      this.xp = this.correct + (this.correct === FixView.ROUNDS ? 3 : 0);
      this.progress.addGame(this.xp);
      this.app.save();
    } else { this.i++; this.load(); }
  }

  onAction(action, value) {
    switch (action) {
      case "fixstart": this.newGame(); break;
      case "fixpick": this.pick(Number(value)); break;
      case "fixnext": this.next(); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
