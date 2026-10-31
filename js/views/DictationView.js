// Ditado: lê a frase, ela esconde-se, e escreves de memória. Pequenos erros de escrita são aceites mas corrigidos.
class DictationView extends View {
  static ROUNDS = 8;

  constructor(app) {
    super(app);
    this.state = "intro";
    this.known = w => app.dict.entryMap.has(w);
  }

  get tab() { return "jogo"; }
  get dictOk() { return this.state === "play"; }

  // Frases com 3 a 12 palavras: as situações úteis e frases inventadas
  static lines(app) {
    return [...PHRASES.flatMap(p => p.lines.map(([en, pt]) => ({ en, pt }))), ...GameView.freeSentences(app)].filter(l => { const n = Dictation.words(l.en).length; return n >= 3 && n <= 12; });
  }

  newGame() {
    this.state = "play";
    this.i = 0;
    this.correct = 0;
    this.typos = 0;
    this.all = DictationView.lines(this.app);
    this.xp = 0;
    this.load();
  }

  load() {
    const k = this.progress.drawFromDeck("dictation", this.all.map((_, i) => String(i)));
    this.app.save?.();
    const l = this.all[Number(k)];
    this.dictation = new Dictation(l.en, l.pt, this.known);
    this.shown = true;
    this.result = null;
    this.given = "";
  }

  render() {
    if (this.state === "intro") return `<div><div class="eyebrow">Jogo</div><h1>Ditado ✍️</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">Lê a frase em inglês. Quando estiveres pronto, ela esconde-se e escreves de memória. Se te enganares numa letra (por exemplo <i>banc</i> em vez de <i>bank</i>), aceito na mesma e mostro como se escreve. São ${DictationView.ROUNDS} frases.</p>
        <div class="row" style="justify-content:center"><button class="btn" data-action="dictstart">Começar</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    if (this.state === "over") return `<div><div class="eyebrow">Fim</div><h1>${this.correct} de ${DictationView.ROUNDS}${this.correct === DictationView.ROUNDS ? " 🎉" : ""}</h1></div>
      <section class="panel"><p style="margin:0">Ganhaste ${this.xp} XP.</p><div class="row"><button class="btn" data-action="dictstart">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    const head = `<div class="row" style="justify-content:space-between"><span class="eyebrow">Ditado</span><span class="pill now">${this.i + 1} de ${DictationView.ROUNDS}</span></div>`;
    const d = this.dictation;
    if (this.shown) return `${head}<section class="panel" style="text-align:center;gap:14px"><div class="eyebrow">Lê e decora a frase</div>
      <div class="q q-sm">${this.esc(d.en)}</div><div class="muted">${this.esc(d.pt)}</div>
      <div class="row" style="justify-content:center"><button class="btn" data-action="dicthide">Já sei, esconder</button></div></section>`;
    return `${head}<section class="panel" style="gap:14px"><div class="eyebrow">Escreve a frase em inglês</div><div class="muted">${this.esc(d.pt)}</div>
      <form id="dictform" class="row" style="flex-wrap:nowrap"><input type="text" id="dict-input" autocomplete="off" autocapitalize="off" spellcheck="false" ${this.result ? "disabled" : ""} value="${this.esc(this.given)}" aria-label="Frase"><button class="btn" ${this.result ? "disabled" : ""}>Corrigir</button></form>
      ${this.result ? this.feedback() : `<div class="row"><button class="linkbtn" data-action="dictpeek">Ver outra vez</button></div>`}</section>`;
  }

  feedback() {
    const r = this.result;
    const mine = r.ops.filter(o => o.type !== "missing").map(o => o.type === "same" ? `<span>${this.esc(o.given)}</span>`
      : o.type === "typo" ? `<span>${this.esc(o.given)}</span>` : `<del>${this.esc(o.given)}</del>`).join(" ");
    const right = r.ops.filter(o => o.type !== "extra").map(o => o.type === "same" ? `<span>${this.esc(o.want)}</span>`
      : o.type === "typo" ? `<span>${this.esc(o.want)}</span>` : `<ins>${this.esc(o.want)}</ins>`).join(" ");
    const typos = r.ops.filter(o => o.type === "typo").map(o => `<b>${this.esc(o.given)}</b> → <b>${this.esc(o.want)}</b>`).join(", ");
    const title = r.correct ? (r.typos ? "Certo! Só tiveste uns erros de escrita." : "Certo!") : `Ainda não. Há ${r.wrong} diferença${r.wrong === 1 ? "" : "s"}.`;
    return `<div class="fb ${r.correct ? "ok" : "no"}">${title}</div>
      ${typos ? `<div class="muted">Escreve-se: ${typos}</div>` : ""}
      ${r.correct && !r.typos ? "" : `<div class="diff"><div><span class="eyebrow">A tua resposta</span><p>${mine || "<em>(vazio)</em>"}</p></div>
        <div><span class="eyebrow">Correto</span><p>${right}</p></div></div>`}
      <div class="ex">${this.esc(this.dictation.en)}</div>
      <div class="row"><button class="btn" id="nextbtn" data-action="dictnext">${this.i === DictationView.ROUNDS - 1 ? "Ver resultado" : "Seguinte →"}</button></div>`;
  }

  onSubmit(form) {
    if (form.id !== "dictform" || this.result) return false;
    const value = document.getElementById("dict-input").value;
    if (!value.trim()) return true;
    this.given = value;
    this.result = this.dictation.check(value);
    if (this.result.correct) { this.correct++; this.typos += this.result.typos; }
    this.app.render();
    return true;
  }

  next() {
    if (this.i >= DictationView.ROUNDS - 1) {
      this.state = "over";
      this.xp = this.correct + (this.correct === DictationView.ROUNDS ? 3 : 0);
      this.progress.addGame(this.xp, "dictation");
      this.app.save();
    } else { this.i++; this.load(); }
  }

  onAction(action) {
    switch (action) {
      case "dictstart": this.newGame(); break;
      case "dicthide": this.shown = false; break;
      case "dictpeek": this.given = document.getElementById("dict-input")?.value || ""; this.shown = true; break;
      case "dictnext": this.next(); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
