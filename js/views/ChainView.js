// Cadeia de palavras: tu e o computador dizem palavras à vez; cada uma começa na última letra da anterior
class ChainView extends View {
  static GOAL = 10;
  static ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  constructor(app) {
    super(app);
    this.state = "intro";
    const seen = new Set();
    const ok = list => list.filter(w => /^[a-z]{2,10}$/.test(w.en) && !seen.has(w.en) && seen.add(w.en));
    this.pool = ok(GameView.words(app));
    // Poucos temas: a cadeia ficava curta demais, por isso usa palavras de todos os temas
    this.wide = this.pool.length < 150;
    if (this.wide) { seen.clear(); this.pool = ok(app.dict.themes.flatMap(t => t.words)); }
    this.byEn = new Map(this.pool.map(w => [w.en, w]));
  }

  get tab() { return "jogo"; }
  get dictOk() { return this.state === "play"; }

  newGame() {
    this.state = "play";
    this.chain = [];
    this.typed = "";
    this.msg = "";
    this.hints = 0;
    this.mine = 0;
    this.xp = 0;
    const start = Utils.pick(this.pool.filter(w => w.en.length >= 3 && w.en.length <= 6 && this.next(w.en).length));
    this.chain.push({ who: "pc", w: start });
  }

  usedSet() { return new Set(this.chain.map(c => c.w.en)); }

  // Palavras possíveis a seguir a uma palavra
  next(word, used = this.usedSet()) {
    const c = word.at(-1);
    return this.pool.filter(w => w.en[0] === c && !used.has(w.en));
  }

  get last() { return this.chain.at(-1).w; }

  render() {
    if (this.pool.length < 30) return GameView.needWords("Cadeia de palavras");
    if (this.state === "intro") return `<div><div class="eyebrow">Jogo</div><h1>Cadeia de palavras 🔗</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">O computador diz uma palavra. Tu dizes outra que <b>comece na última letra</b> da anterior (por exemplo <i>cat → tree → egg</i>), com palavras dos temas do Jogo. Chega a ${ChainView.GOAL} palavras tuas para ganhar. Podes pedir dicas.</p>${this.wide ? `<p class="muted" style="margin:0">Os temas escolhidos têm poucas palavras, por isso este jogo usa palavras de todos os temas.</p>` : ""}
        <div class="row" style="justify-content:center"><button class="btn" data-action="chainstart">Começar</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    if (this.state === "over") return `<div><div class="eyebrow">Fim</div><h1>${this.won ? "🏆 Ganhaste!" : `${this.mine} palavra${this.mine === 1 ? "" : "s"}`}</h1></div>
      <section class="panel"><p style="margin:0">${this.why} Ganhaste ${this.xp} XP.</p>
        <div class="chainlist">${this.chips()}</div>
        <div class="row"><button class="btn" data-action="chainstart">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    const need = this.last.en.at(-1).toUpperCase();
    const cells = Array.from({ length: Math.max(this.typed.length, 4) }, (_, i) => `<span class="mycell ${this.typed[i] ? "typed" : ""}">${this.esc(this.typed[i] || "")}</span>`).join("");
    const kb = ChainView.ROWS.map((r, i) => `<div class="krow">${i === 2 ? `<button class="opt key wide" data-action="chenter">Enter</button>` : ""}${[...r].map(c => `<button class="opt key" data-action="chkey" data-v="${c}">${c}</button>`).join("")}${i === 2 ? `<button class="opt key wide" data-action="chback" aria-label="Apagar">⌫</button>` : ""}</div>`).join("");
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Cadeia de palavras</span><span class="pill now">${this.mine} de ${ChainView.GOAL}</span></div>
      <section class="panel" style="gap:12px"><div class="chainlist">${this.chips()}</div>
        <div class="eyebrow" style="text-align:center">A tua palavra tem de começar por <b style="font-size:1.2rem">${need}</b></div>
        <div class="mystrow">${cells}</div>
        <div class="muted" style="min-height:1.4em;text-align:center">${this.esc(this.msg)}</div>
        <div class="mkb">${kb}</div>
        <div class="row" style="justify-content:center"><button class="btn ghost small" data-action="chhint">💡 Dica (${this.hints})</button><button class="btn ghost small" data-action="chquit">Desistir</button></div></section>`;
  }

  chips() {
    return this.chain.map(c => `<span class="chip ${c.who}"><b>${this.esc(c.w.en)}</b> <small>${this.esc(c.w.pt)}</small></span>`).join('<span class="chainarrow">→</span>');
  }

  type(c) { if (this.typed.length < 10) { this.typed += c; this.msg = ""; } }

  submit() {
    const w = this.typed, need = this.last.en.at(-1);
    if (w.length < 2) { this.msg = "Escreve uma palavra."; return; }
    if (w[0] !== need) { this.msg = `Tem de começar por “${need.toUpperCase()}”.`; return; }
    if (this.usedSet().has(w)) { this.msg = "Essa palavra já foi usada."; return; }
    const word = this.byEn.get(w);
    if (!word) { this.msg = "Essa palavra não está nos temas escolhidos."; return; }
    this.chain.push({ who: "me", w: word });
    this.mine++;
    this.typed = "";
    this.msg = "";
    if (this.mine >= ChainView.GOAL) return this.finish(true, "Fizeste a cadeia toda!");
    const opts = this.next(word.en);
    if (!opts.length) return this.finish(true, "O computador já não sabe nenhuma palavra!");
    this.chain.push({ who: "pc", w: Utils.pick(opts) });
    if (!this.next(this.last.en).length) this.finish(true, "O computador pôs uma palavra sem continuação: ganhaste!");
  }

  finish(won, why) {
    this.state = "over";
    this.won = won;
    this.why = why;
    this.xp = Math.max(this.mine ? 1 : 0, this.mine + (won ? 4 : 0) - Math.min(this.hints, this.mine));
    if (this.mine) { this.progress.addGame(this.xp); this.app.save(); }
  }

  hint() {
    const opts = this.next(this.last.en);
    if (!opts.length) return;
    const w = Utils.pick(opts);
    this.hints++;
    this.msg = `Dica: “${w.pt}” (${w.en.length} letras, começa por ${w.en[0].toUpperCase()}).`;
  }

  onKey(e) {
    if (this.state !== "play" || e.ctrlKey || e.metaKey || e.altKey) return;
    const c = e.key.toLowerCase();
    if (/^[a-z]$/.test(c)) this.type(c);
    else if (e.key === "Backspace") this.typed = this.typed.slice(0, -1);
    else if (e.key === "Enter" && e.target.tagName !== "BUTTON") this.submit();
    else return;
    this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "chainstart": this.newGame(); break;
      case "chkey": this.type(value); break;
      case "chback": this.typed = this.typed.slice(0, -1); break;
      case "chenter": this.submit(); break;
      case "chhint": this.hint(); break;
      case "chquit": this.finish(false, "Desististe."); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
