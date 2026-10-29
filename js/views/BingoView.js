// Bingo de palavras: vês a palavra em inglês e tocas na tradução certa na grelha; completa uma linha para fazer bingo
class BingoView extends View {
  static SIZE = 4;

  constructor(app) {
    super(app);
    this.start();
  }

  get tab() { return "jogo"; }

  start() {
    const seen = new Set();
    this.pool = Utils.shuffle(GameView.words(this.app)).filter(w => {
      if (w.pt.length > 20 || w.en.length > 14 || seen.has(w.pt) || seen.has(w.en)) return false;
      seen.add(w.pt);
      seen.add(w.en);
      return true;
    });
    this.cells = this.pool.slice(0, BingoView.SIZE * BingoView.SIZE);
    this.marked = new Set();
    this.step = 0;
    this.mistakes = 0;
    this.wrongCell = null;
    this.bingo = false;
    this.xp = 0;
    this.pickCall();
  }

  // A palavra chamada é sempre uma das casas ainda por marcar
  pickCall() {
    const free = this.cells.map((_, i) => i).filter(i => !this.marked.has(i));
    this.callIdx = free.length ? Utils.pick(free) : null;
  }

  // Depois de cada acerto, as casas por marcar mudam de palavras e de lugar; as já marcadas ficam
  refresh() {
    const free = this.cells.map((_, i) => i).filter(i => !this.marked.has(i));
    const taken = new Set(this.cells.filter((_, i) => this.marked.has(i)).flatMap(w => [w.pt, w.en]));
    const here = new Set(free.map(i => this.cells[i].key));
    const fresh = this.pool.filter(w => !taken.has(w.pt) && !taken.has(w.en) && !here.has(w.key) && !this.cells.some(c => c.key === w.key));
    const words = Utils.shuffle(free.map(i => this.cells[i]).map(w => (fresh.length && Math.random() < 0.6 ? fresh.splice(Math.floor(Math.random() * fresh.length), 1)[0] : w)));
    free.forEach((i, k) => (this.cells[i] = words[k]));
  }

  get n() { return BingoView.SIZE; }
  get ready() { return this.cells.length === this.n * this.n; }
  get call() { return this.cells[this.callIdx]; }
  get over() { return this.bingo || this.callIdx === null; }

  hasLine() {
    const n = this.n, m = i => this.marked.has(i);
    const lines = [];
    for (let r = 0; r < n; r++) lines.push(Array.from({ length: n }, (_, c) => r * n + c));
    for (let c = 0; c < n; c++) lines.push(Array.from({ length: n }, (_, r) => r * n + c));
    lines.push(Array.from({ length: n }, (_, i) => i * n + i), Array.from({ length: n }, (_, i) => i * n + (n - 1 - i)));
    return lines.find(l => l.every(m)) || null;
  }

  render() {
    if (!this.ready) return GameView.needWords("Bingo");
    const line = this.bingo ? this.hasLine() : null;
    const grid = this.cells.map((w, i) => `<button class="opt bcell ${this.marked.has(i) ? "ok" : ""} ${this.wrongCell === i ? "no" : ""} ${line && line.includes(i) ? "line" : ""}" data-action="bpick" data-v="${i}" ${this.marked.has(i) || this.over ? "disabled" : ""}>${this.esc(w.pt)}</button>`).join("");
    const head = this.over
      ? `<div class="fb ${this.bingo ? "ok" : "no"}">${this.bingo ? `🎉 BINGO! +${this.xp} XP` : `Acabaram as palavras sem fazer uma linha. +${this.xp} XP`}</div>
         <div class="row" style="justify-content:center"><button class="btn" data-action="bagain">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div>`
      : `<div class="bcall"><div class="eyebrow">Palavra ${this.step + 1} · as outras casas mudam a cada acerto</div><div class="q">${this.esc(this.call.en)}</div><div class="ipa">/${this.esc(this.call.ipa)}/</div></div>`;
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Bingo de palavras</span><span class="muted">${this.mistakes} erro${this.mistakes === 1 ? "" : "s"}</span></div>
      <section class="panel" style="text-align:center;gap:14px">${head}
        <div class="bgrid" style="grid-template-columns:repeat(${this.n},1fr)">${grid}</div>
        <span class="muted" style="font-size:.85rem">Toca na tradução da palavra de cima. Quando acertas, as outras casas mudam de palavra e de sítio. Completa uma linha, coluna ou diagonal para fazer bingo.</span></section>`;
  }

  pick(i) {
    if (this.over || this.marked.has(i)) return;
    if (i === this.callIdx) {
      this.marked.add(i);
      this.wrongCell = null;
      this.step++;
      if (this.hasLine()) return this.finish(true);
      this.refresh();
      this.pickCall();
    } else {
      this.mistakes++;
      this.wrongCell = i;
    }
  }

  finish(bingo) {
    this.bingo = bingo;
    this.xp = bingo ? 5 + Math.max(0, 8 - this.mistakes) : 2;
    this.progress.addGame(this.xp);
    this.app.save();
  }

  onAction(action, value) {
    if (action === "bagain") { this.start(); this.app.render(); return true; }
    if (action !== "bpick") return false;
    this.pick(Number(value));
    this.app.render();
    return true;
  }
}
