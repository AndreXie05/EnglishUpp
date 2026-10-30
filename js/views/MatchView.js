// Ecrã do exercício "ligar": cada palavra inglesa à sua tradução ou à sua pronúncia
class MatchView extends View {
  static lastVariant = {};

  constructor(app, theme, mode = "pt") {
    super(app);
    this.theme = theme;
    this.mode = mode; // "pt" = tradução, "ipa" = pronúncia
    // Variações: sentido contrário ou, nas traduções, frases de exemplo
    const usable = theme.words.filter(w => w.exPt && w.exPt !== w.pt);
    const choices = mode === "ipa" ? ["en-ipa", "ipa-en"] : ["en-pt", "pt-en", ...(usable.length >= theme.words.length * 0.8 ? ["en-sent"] : [])];
    // não repete a variante da última vez que fizeste este exercício nesta lição
    const memo = MatchView.lastVariant, id = `${theme.id}:${mode}`;
    this.variant = Utils.pick(choices.length > 1 ? choices.filter(c => c !== memo[id]) : choices);
    memo[id] = this.variant;
    this.exercise = new MatchExercise(this.variant === "en-sent" ? usable : theme.words);
    this.recorded = false;
  }

  get dictOk() { return true; }

  get tab() { return "temas"; }

  get title() {
    return this.mode === "ipa" ? "Ligar palavras e pronúncia" : "Ligar palavras e tradução";
  }

  // Texto de cada lado: o lado "en" fica à esquerda e o "pt" à direita (só os nomes das colunas, a lógica é a mesma)
  leftLabel(w) {
    const v = this.variant;
    if (v === "pt-en") return this.esc(w.pt);
    if (v === "ipa-en") return `/${this.esc(w.ipa)}/`;
    return this.mode === "ipa" ? this.esc(w.en) : `${this.esc(w.en)} <span class="ipa">/${this.esc(w.ipa)}/</span>`;
  }

  rightLabel(w) {
    const v = this.variant;
    if (v === "pt-en") return `${this.esc(w.en)} <span class="ipa">/${this.esc(w.ipa)}/</span>`;
    if (v === "ipa-en") return this.esc(w.en);
    if (v === "en-sent") return this.esc(w.exPt);
    return this.esc(this.mode === "ipa" ? `/${w.ipa}/` : w.pt);
  }

  render() {
    const ex = this.exercise;
    const top = `<div class="row" style="justify-content:space-between"><span class="eyebrow">${this.title} · ${this.esc(this.theme.pt)}</span><button class="linkbtn" data-action="open" data-section="exercicios" data-v="${this.theme.id}">Sair</button></div>`;
    if (ex.finished) return top + this.resultScreen();
    const hint = {
      "en-ipa": "Carrega numa palavra inglesa e depois na transcrição que mostra como se diz.",
      "ipa-en": "Carrega numa pronúncia /…/ e depois na palavra inglesa que se diz assim.",
      "en-pt": "Carrega numa palavra inglesa e depois na tradução certa.",
      "pt-en": "Carrega numa palavra em português e depois na tradução em inglês.",
      "en-sent": "Carrega numa palavra inglesa e depois na frase em português onde ela aparece.",
    }[this.variant];
    return `${top}
      <div class="bar"><i style="width:${Math.round(ex.round / ex.rounds.length * 100)}%"></i></div>
      <section class="panel">
        <div class="eyebrow">Ronda ${ex.round + 1} de ${ex.rounds.length}</div>
        <p style="margin:0">${hint}</p>
        <div class="match ${this.variant === "en-sent" ? "sent" : ""}">
          <div class="col">${ex.left.map(w => this.cell("en", w, this.leftLabel(w))).join("")}</div>
          <div class="col">${ex.right.map(w => this.cell("pt", w, this.rightLabel(w))).join("")}</div>
        </div>
        ${ex.roundDone ? `<div class="fb ok">Ronda completa!</div><div class="row"><button class="btn" id="nextbtn" data-action="matchNext">Continuar</button></div>` : ""}
      </section>`;
  }

  cell(side, w, label) {
    const ex = this.exercise;
    let state = "";
    if (ex.matched.has(w.key)) state = "ok";
    else if (ex.selected?.side === side && ex.selected.key === w.key) state = "sel";
    else if (ex.wrongPair && ex.wrongPair[side] === w.key) state = "no";
    const ipa = (side === "pt" && this.variant === "en-ipa") || (side === "en" && this.variant === "ipa-en") ? " ipa-opt" : "";
    return `<button class="opt mcell${ipa} ${state}" data-action="matchPick" data-side="${side}" data-v="${this.esc(w.key)}" ${ex.matched.has(w.key) ? "disabled" : ""}>${label}</button>`;
  }

  resultScreen() {
    const ex = this.exercise;
    if (!this.recorded) {
      this.progress.addTest(ex.score, ex.total, true, `${this.theme.id}:match-${this.mode}`);
      this.app.save();
      this.recorded = true;
    }
    return `<h1>${ex.errors === 0 ? "Perfeito, sem erros!" : `Terminaste com ${ex.errors} erro${ex.errors > 1 ? "s" : ""}`}</h1>
      <div class="row"><button class="btn" data-action="matchAgain">Repetir</button>
        <button class="btn ghost" data-action="open" data-section="exercicios" data-v="${this.theme.id}">Voltar à lição</button></div>`;
  }

  afterRender() {
    document.getElementById("nextbtn")?.focus();
  }

  onAction(action, value, el) {
    if (action === "matchPick") {
      this.exercise.select(el.dataset.side, value);
      this.app.render();
      return true;
    }
    if (action === "matchNext") {
      this.exercise.nextRound();
      this.app.render();
      return true;
    }
    if (action === "matchAgain") {
      this.app.show(new MatchView(this.app, this.theme, this.mode));
      return true;
    }
    return false;
  }
}
