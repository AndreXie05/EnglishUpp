// Forca com palavras que já estudaste
class HangmanView extends View {
  static LIVES = 6;
  static ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

  constructor(app) {
    super(app);
    this.start();
  }

  get tab() { return "jogo"; }

  start() {
    const pool = GameView.words(this.app).filter(w => /^[a-z]{4,10}$/.test(w.en));
    this.word = Utils.pick(pool);
    this.guessed = new Set();
    this.lives = HangmanView.LIVES;
    this.xp = 0;
  }

  get won() { return [...this.word.en].every(c => this.guessed.has(c)); }
  get lost() { return this.lives <= 0; }

  // Boneco em SVG: a forca fica sempre; cada erro acrescenta uma parte (cabeça, tronco, braços, pernas)
  figure() {
    const parts = [
      `<circle cx="120" cy="52" r="16"/>`,
      `<line x1="120" y1="68" x2="120" y2="118"/>`,
      `<line x1="120" y1="80" x2="98" y2="104"/>`,
      `<line x1="120" y1="80" x2="142" y2="104"/>`,
      `<line x1="120" y1="118" x2="102" y2="150"/>`,
      `<line x1="120" y1="118" x2="138" y2="150"/>`,
    ].slice(0, HangmanView.LIVES - this.lives).join("");
    return `<svg viewBox="0 0 200 180" role="img" aria-label="Forca com ${HangmanView.LIVES - this.lives} de ${HangmanView.LIVES} partes do boneco" style="width:100%;max-width:220px;margin:0 auto;display:block" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="30" y1="170" x2="170" y2="170"/><line x1="60" y1="170" x2="60" y2="14"/><line x1="60" y1="14" x2="120" y2="14"/><line x1="120" y1="14" x2="120" y2="36"/>
      <g stroke="${this.lost ? "var(--bad)" : this.won ? "var(--good)" : "currentColor"}">${parts}</g></svg>`;
  }

  render() {
    if (!this.word) return GameView.needWords("Forca");
    const w = this.word, over = this.won || this.lost;
    const shown = [...w.en].map(c => this.guessed.has(c) || this.lost ? c : "_").join(" ");
    const keys = HangmanView.ALPHABET.map(c => {
      const hit = this.guessed.has(c);
      const cls = hit ? (w.en.includes(c) ? "ok" : "no") : "";
      return `<button class="opt key ${cls}" data-action="hletter" data-v="${c}" ${hit || over ? "disabled" : ""}>${c}</button>`;
    }).join("");
    const end = over ? `<div class="fb ${this.won ? "ok" : "no"}">${this.won ? `Boa! “${this.esc(w.en)}” /${this.esc(w.ipa)}/ · +${this.xp} XP` : `Era “${this.esc(w.en)}” /${this.esc(w.ipa)}/.`}</div>
      <div class="row" style="justify-content:center"><button class="btn" data-action="hagain">Outra palavra</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div>` : "";
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Forca</span><span aria-label="${this.lives} vidas">${"♥".repeat(this.lives)}${"♡".repeat(HangmanView.LIVES - this.lives)}</span></div>
      <section class="panel" style="gap:16px;text-align:center"><div class="eyebrow">Significa “${this.esc(w.pt)}” (${this.esc(w.pos)}) · ${w.en.length} letras</div><div class="ipa" style="font-size:1.2rem">/${this.esc(w.ipa)}/ · clica nas letras ou escreve no teclado</div>
        ${this.figure()}
        <div class="q" style="letter-spacing:.15em;text-align:center">${shown}</div>
        <div class="keys">${keys}</div>${end}</section>`;
  }

  onKey(e) {
    const c = e.key.toLowerCase();
    if (HangmanView.ALPHABET.includes(c)) this.onAction("hletter", c);
  }

  onAction(action, value) {
    if (action === "hagain") {
      this.start();
      this.app.render();
      return true;
    }
    if (action !== "hletter" || this.won || this.lost || this.guessed.has(value)) return action === "hletter";
    this.guessed.add(value);
    if (!this.word.en.includes(value)) this.lives--;
    if (this.won) {
      this.xp = 2 + this.lives;
      this.progress.addGame(this.xp);
      this.app.save();
    } else if (this.lost) {
      this.progress.bump("games");
      this.app.save();
    }
    this.app.render();
    return true;
  }
}
