// Bingo de palavras: vês a palavra em inglês e tocas na tradução certa na grelha; completa uma linha para fazer bingo.
// Depois de cada palavra (certa ou errada) as casas por marcar trocam; se erras, perdes essa palavra.
// Os erros só se mostram no fim, para a grelha não mudar de tamanho durante o jogo
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
    this.misses = []; // palavras falhadas, para o resumo do fim
    this.bingo = false;
    this.xp = 0;
    this.pickCall();
  }

  // A palavra chamada é sempre uma das casas ainda por marcar
  pickCall() {
    const free = this.cells.map((_, i) => i).filter(i => !this.marked.has(i));
    this.callIdx = free.length ? Utils.pick(free) : null;
  }

  // Depois de cada palavra, as casas por marcar mudam de palavras e de lugar; as já marcadas ficam
  refresh() {
    const free = this.cells.map((_, i) => i).filter(i => !this.marked.has(i));
    const taken = new Set(this.cells.filter((_, i) => this.marked.has(i)).flatMap(w => [w.pt, w.en]));
    const fresh = Utils.shuffle(this.pool.filter(w => !taken.has(w.pt) && !taken.has(w.en)));
    const used = new Set();
    // palavras novas, sem traduções repetidas na grelha
    const words = [];
    for (const w of fresh) {
      if (words.length === free.length) break;
      if (used.has(w.pt) || used.has(w.en)) continue;
      used.add(w.pt);
      used.add(w.en);
      words.push(w);
    }
    if (words.length === free.length) free.forEach((i, k) => (this.cells[i] = words[k]));
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
    // Cada casa com a cor da sua coluna; as marcadas levam um carimbo ✓; depois de um erro, as casas novas viram-se
    const flip = this.flip;
    this.flip = false;
    const grid = this.cells.map((w, i) => {
      const on = this.marked.has(i);
      return `<button class="bcell bc${i % this.n} ${on ? "ok" : flip ? "flip" : ""} ${line && line.includes(i) ? "line" : ""}" style="animation-delay:${flip && !on ? (i % 7) * 40 : 0}ms" data-action="bpick" data-v="${i}" ${on || this.over ? "disabled" : ""}>
        <span class="bctext">${this.esc(w.pt)}</span>${on ? `<span class="bcstamp" aria-hidden="true">✓</span>` : ""}</button>`;
    }).join("");
    const misses = this.over && this.misses.length ? `<div class="bmisses"><div class="eyebrow">❌ As que falhaste (${this.misses.length})</div>${this.misses.map(m =>
      `<div class="bmrow"><b>${this.esc(m.en)}</b><span class="ipa">/${this.esc(m.ipa)}/</span><span>= ${this.esc(m.pt)}</span><span class="muted">(escolheste “${this.esc(m.picked)}”)</span></div>`).join("")}</div>` : "";
    const head = this.over
      ? `<div class="fb ${this.bingo ? "ok" : "no"}">${this.bingo ? `🎉 BINGO! +${this.xp} XP` : `Acabaram as palavras sem fazer uma linha. +${this.xp} XP`}</div>${misses}
         <div class="row" style="justify-content:center"><button class="btn" data-action="bagain">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div>`
      : `<div class="bcall"><div class="eyebrow">Palavra ${this.step + 1}</div><div class="q">${this.esc(this.call.en)}</div><div class="ipa">/${this.esc(this.call.ipa)}/</div></div>`;
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Bingo de palavras</span><span class="muted">${this.mistakes} erro${this.mistakes === 1 ? "" : "s"}</span></div>
      <section class="panel" style="text-align:center;gap:14px">${head}
        <div class="bgrid" style="grid-template-columns:repeat(${this.n},1fr)">${grid}</div>
        <span class="muted" style="font-size:.85rem">Toca na tradução da palavra de cima. Depois de cada palavra, as casas por marcar trocam; se errares, perdes essa palavra. Completa uma linha, coluna ou diagonal para fazer bingo. Os erros aparecem no fim.</span></section>`;
  }

  pick(i) {
    if (this.over || this.marked.has(i)) return;
    if (i === this.callIdx) {
      this.marked.add(i);
      this.step++;
      if (this.hasLine()) return this.finish(true);
    } else {
      // Errou: guarda a palavra para o resumo do fim
      this.mistakes++;
      this.misses.push({ en: this.call.en, ipa: this.call.ipa, pt: this.call.pt, picked: this.cells[i].pt });
    }
    // Certa ou errada: as casas por marcar trocam e vem outra palavra
    this.refresh();
    this.flip = true;
    this.pickCall();
  }

  finish(bingo) {
    this.bingo = bingo;
    this.xp = bingo ? 5 + Math.max(0, 8 - this.mistakes) : 2;
    this.progress.addGame(this.xp, "bingo");
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
