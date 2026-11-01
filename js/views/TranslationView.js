// Jogo de tradução: 10 frases em português para escrever em inglês, com pontos e combo
class TranslationView extends View {
  static ROUND_SIZE = 10;

  constructor(app, themes, title) {
    super(app);
    this.themes = themes;
    this.title = title;
    this.tasks = app.sentences.pick(themes, TranslationView.ROUND_SIZE).map(p => new TranslationTask(p, app.dict));
    this.index = 0;
    this.points = 0;
    this.correct = 0;
    this.combo = 0;
    this.bestCombo = 0;
    this.gained = 0;
    this.given = "";
    this.result = null;
    this.showHint = false;
    this.saved = false;
  }

  get dictOk() { return true; }

  get tab() { return "escrita"; }

  get task() {
    return this.tasks[this.index];
  }

  get finished() {
    return this.index >= this.tasks.length;
  }

  // Certa: 10 pontos mais 2 por cada acerto seguido (até +10). Quase certa: 5 pontos. Errada: zero e perde o combo
  award(r) {
    if (r.correct) {
      this.combo++;
      this.bestCombo = Math.max(this.bestCombo, this.combo);
      this.correct++;
      return 10 + 2 * Math.min(this.combo - 1, 5);
    }
    if (r.almost) return 5;
    this.combo = 0;
    return 0;
  }

  render() {
    return this.finished ? this.resultScreen() : this.taskScreen();
  }

  afterRender() {
    if (this.result) document.getElementById("nextbtn")?.focus();
    else document.getElementById("tr-input")?.focus();
  }

  taskScreen() {
    const t = this.task, r = this.result;
    const hint = this.showHint && t.word
      ? `<div class="muted">Palavra-chave: <span class="chip">${this.esc(t.word.en)}</span> = ${this.esc(t.word.pt)}</div>`
      : t.word ? `<button class="linkbtn" data-action="hint" style="align-self:flex-start">Preciso de ajuda</button>` : "";
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Treino · ${this.esc(this.title)} · ${this.index + 1} de ${this.tasks.length}</span><button class="linkbtn" data-action="nav" data-v="escrita">Sair</button></div>
      <div class="bar"><i style="width:${Math.round(this.index / this.tasks.length * 100)}%"></i></div>
      <div class="row"><span class="pill now">${this.points} pontos</span>${this.combo > 1 ? `<span class="pill done">Combo x${this.combo}</span>` : ""}</div>
      <section class="panel" style="gap:16px">
        <div class="eyebrow">Escreve em inglês</div>
        <div class="q q-sm">${this.esc(t.pt)}</div>
        ${r ? "" : hint}
        <form id="tform" class="row" style="flex-wrap:nowrap">
          <input type="text" id="tr-input" autocomplete="off" autocapitalize="off" spellcheck="false" ${r ? "disabled" : ""} value="${this.esc(this.given)}" aria-label="Tradução">
          <button class="btn" ${r ? "disabled" : ""}>Corrigir</button>
        </form>
        ${r ? this.feedback(t, r) : ""}
      </section>`;
  }

  feedback(t, r) {
    const ops = r.diff.ops;
    const mine = ops.filter(o => o.type !== "missing")
      .map(o => o.type === "same" ? `<span>${this.esc(o.word)}</span>` : `<del>${this.esc(o.word)}</del>`).join(" ");
    const right = ops.filter(o => o.type !== "extra")
      .map(o => o.type === "same" ? `<span>${this.esc(o.word)}</span>` : `<ins>${this.esc(o.word)}</ins>`).join(" ");
    const title = r.correct ? "Certo!" : r.almost ? "Quase! Só há uma diferença." : `Ainda não. Há ${r.diff.errors} diferenças.`;
    return `<div class="fb ${r.correct ? "ok" : "no"}">${title} <strong>+${this.gained} pontos</strong></div>
      ${r.correct ? "" : `<div class="diff">
        <div><span class="eyebrow">A tua resposta</span><p>${mine || "<em>(vazio)</em>"}</p></div>
        <div><span class="eyebrow">Correto</span><p>${right}</p></div>
        <p class="muted" style="margin:0;font-size:.85rem"><del>riscado</del> = está a mais ou errado · <ins>verde</ins> = faltou</p></div>`}
      ${this.example(t.en, t.pt)}
      <div class="row"><button class="btn" id="nextbtn" data-action="nextTr">Continuar</button>${t.word ? this.cambridgeLink(t.word) : ""}</div>`;
  }

  resultScreen() {
    if (!this.saved) {
      this.progress.addRound({
        themeId: this.themes.length === 1 ? this.themes[0].id : null,
        title: this.title,
        points: this.points,
        correct: this.correct,
        total: this.tasks.length,
        bestCombo: this.bestCombo,
      });
      this.app.save();
      this.saved = true;
    }
    return `<div><div class="eyebrow">Treino terminado · ${this.esc(this.title)}</div><h1>${this.points} pontos</h1></div>
      <div class="stats">
        <div class="stat"><b>${this.correct}/${this.tasks.length}</b><span>frases certas</span></div>
        <div class="stat"><b>x${this.bestCombo}</b><span>melhor combo</span></div>
        <div class="stat"><b>${this.progress.weekPoints()}</b><span>pontos esta semana</span></div>
      </div>
      <p class="muted" style="margin:0">Este treino ficou guardado no registo da semana e desaparece sozinho ao fim de 7 dias.</p>
      <div class="row"><button class="btn" data-action="translateAgain">Jogar outra vez</button>
        <button class="btn ghost" data-action="nav" data-v="escrita">Voltar à escrita</button></div>`;
  }

  onSubmit(form) {
    if (form.id !== "tform" || this.result) return false;
    const value = document.getElementById("tr-input").value;
    if (!value.trim()) return true;
    this.given = value;
    this.result = this.task.check(value);
    this.gained = this.award(this.result);
    this.points += this.gained;
    this.app.render();
    return true;
  }

  onAction(action) {
    switch (action) {
      case "hint":
        this.showHint = true;
        this.app.render();
        return true;
      case "nextTr":
        this.index++;
        this.given = "";
        this.result = null;
        this.showHint = false;
        this.app.render();
        return true;
      case "translateAgain":
        this.app.show(new TranslationView(this.app, this.themes, this.title));
        return true;
    }
    return false;
  }
}
