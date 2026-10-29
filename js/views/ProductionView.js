// Exercícios de escrita de produção: ordenar frases, escrever frases próprias e completar textos
class ProductionView extends View {
  static ROUND = { order: 8, write: 6 };
  static TITLES = { order: "Ordenar frases", write: "Escrever frases", cloze: "Completar o texto" };

  constructor(app, mode, themes, title) {
    super(app);
    this.mode = mode;
    this.themes = themes;
    this.scopeTitle = title;
    this.index = 0;
    this.points = 0;
    this.correct = 0;
    this.result = null;   // resultado da tarefa atual (depois de corrigir)
    this.built = [];      // ordenar: palavras já escolhidas, por ordem
    this.given = "";      // escrever: texto escrito
    this.saved = false;
    this.cloze = null;
    this.tasks = this.makeTasks();
    if (mode === "cloze") this.cloze = this.tasks[0] || null;
  }

  get dictOk() { return true; }

  get tab() { return "escrita"; }

  makeTasks() {
    if (this.mode === "order") {
      const pool = Utils.shuffle(this.themes.flatMap(t => this.app.sentences.sentences(t.id)).filter(OrderTask.fits));
      return pool.slice(0, ProductionView.ROUND.order).map(p => new OrderTask(p));
    }
    if (this.mode === "write") {
      const words = Utils.shuffle(this.themes.flatMap(t => t.words).filter(WriteTask.fits));
      return words.slice(0, ProductionView.ROUND.write).map(w => new WriteTask(w));
    }
    for (const t of Utils.shuffle(this.themes)) {
      const c = ClozeTask.build(t, this.dict);
      if (c) return [c];
    }
    return [];
  }

  get task() { return this.tasks[this.index]; }

  get finished() {
    return this.mode !== "cloze" && this.index >= this.tasks.length;
  }

  render() {
    if (!this.tasks.length) return this.emptyScreen();
    if (this.mode === "cloze") return this.clozeScreen();
    return this.finished ? this.resultScreen() : this.mode === "order" ? this.orderScreen() : this.writeScreen();
  }

  afterRender() {
    if (this.result) document.getElementById("nextbtn")?.focus();
    else document.getElementById("pw-input")?.focus();
  }

  header(extra = "") {
    const n = this.mode === "cloze" ? "" : ` · ${this.index + 1} de ${this.tasks.length}`;
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${ProductionView.TITLES[this.mode]} · ${this.esc(this.scopeTitle)}${n}</span><button class="linkbtn" data-action="nav" data-v="escrita">Sair</button></div>${extra}`;
  }

  emptyScreen() {
    return `${this.header()}<section class="panel"><p style="margin:0">Não há material suficiente para este exercício nestes temas. Escolhe outro nível.</p>
      <div class="row"><button class="btn" data-action="nav" data-v="escrita">Voltar</button></div></section>`;
  }

  /* ----- ordenar a frase ----- */

  orderScreen() {
    const t = this.task, r = this.result;
    const left = this.remaining();
    const answer = this.built.length
      ? this.built.map((w, i) => `<button class="chipbtn word" data-action="unpick" data-v="${i}" ${r ? "disabled" : ""}>${this.esc(w)}</button>`).join(" ")
      : `<span class="muted">Toca nas palavras pela ordem certa</span>`;
    return `${this.header()}<div class="bar"><i style="width:${Math.round(this.index / this.tasks.length * 100)}%"></i></div>
      <div class="row"><span class="pill now">${this.points} pontos</span></div>
      <section class="panel" style="gap:16px"><div class="eyebrow">Ordena as palavras em inglês</div>
        <div class="q q-sm">${this.esc(t.pt)}</div>
        <div class="row" style="min-height:44px;gap:8px">${answer}</div>
        ${r ? "" : `<div class="row" style="gap:8px">${left.map(({ w, i }) => `<button class="chipbtn word" data-action="pick" data-v="${i}">${this.esc(w)}</button>`).join(" ")}</div>
          <div class="row"><button class="btn" data-action="ocheck" ${left.length ? "disabled" : ""}>Corrigir</button><button class="linkbtn" data-action="oclear">Recomeçar</button></div>`}
        ${r ? this.orderFeedback(t, r) : ""}</section>`;
  }

  // Palavras da frase que ainda não foram escolhidas (guarda o índice para repetidas)
  remaining() {
    const used = new Set(this.usedIdx || []);
    return this.task.pool.map((w, i) => ({ w, i })).filter(x => !used.has(x.i));
  }

  orderFeedback(t, r) {
    return `<div class="fb ${r.ok ? "ok" : "no"}">${r.ok ? "Certo!" : "Ainda não."}</div>
      <div class="answer"><div><span class="eyebrow">Frase certa</span> <span class="pt">${this.esc(t.en)}</span></div></div>
      <div class="row"><button class="btn" id="nextbtn" data-action="pnext">Continuar</button></div>`;
  }

  /* ----- escrever uma frase ----- */

  writeScreen() {
    const t = this.task, r = this.result, w = t.word;
    return `${this.header()}<div class="bar"><i style="width:${Math.round(this.index / this.tasks.length * 100)}%"></i></div>
      <div class="row"><span class="pill now">${this.points} pontos</span></div>
      <section class="panel" style="gap:16px"><div class="eyebrow">Escreve uma frase com esta palavra</div>
        <div class="q">${this.esc(w.en)}</div><div class="ipa">/${this.esc(w.ipa)}/ · ${this.esc(w.pt)}</div>
        <form id="pform" class="row" style="flex-wrap:nowrap">
          <input type="text" id="pw-input" autocomplete="off" spellcheck="false" ${r ? "disabled" : ""} value="${this.esc(this.given)}" aria-label="A tua frase">
          <button class="btn" ${r ? "disabled" : ""}>Corrigir</button></form>
        ${r ? this.writeFeedback(t, r) : ""}</section>`;
  }

  writeFeedback(t, r) {
    const w = t.word;
    return `<div class="fb ${r.ok ? "ok" : "no"}">${r.ok ? "Muito bem!" : "Falta ajustar."}</div>
      ${r.ok ? `<div class="muted">Verifiquei a palavra, o tamanho e a pontuação. A gramática compara tu com o modelo.</div>` : `<ul>${r.problems.map(p => `<li>${this.esc(p)}</li>`).join("")}</ul>`}
      <div class="answer"><div><span class="eyebrow">Frase modelo</span></div><div class="ex">${this.esc(w.exEn)}<br><i>${this.esc(w.exPt)}</i></div></div>
      <div class="row"><button class="btn" id="nextbtn" data-action="pnext">Continuar</button></div>`;
  }

  /* ----- completar o texto ----- */

  clozeScreen() {
    const c = this.cloze, r = this.result;
    const body = c.segments.map(s => {
      if (s.blank === undefined) return this.esc(s.text);
      const res = r?.[s.blank];
      if (r) {
        const cls = res === "ok" ? "ok" : res === "almost" ? "almost" : "no";
        return `<span class="cl ${cls}">${this.esc(s.answer)}</span>`;
      }
      return `<input class="cin" type="text" size="${Math.max(6, s.answer.length)}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Espaço ${s.blank + 1}" placeholder="${this.esc(s.pt)}">`;
    }).join("");
    const score = r ? `<div class="stats"><div class="stat"><b>${r.filter(x => x === "ok").length}/${c.blanks.length}</b><span>certas</span></div><div class="stat"><b>${this.points}</b><span>pontos</span></div></div>
      ${r.includes("almost") ? `<div class="muted">Verde: certa. Amarela: deste a palavra da lição, mas no texto aparece noutra forma (plural, passado...). Vermelha: errada.</div>` : ""}` : "";
    return `${this.header()}
      <section class="panel" style="gap:16px"><div class="eyebrow">${this.esc(c.theme.pt)} · Completa o texto com as palavras da lição</div>
        <form id="cform"><p class="clozetext">${body}</p>${r ? "" : `<div class="row"><button class="btn">Corrigir</button></div>`}</form>
        ${r ? `${score}<div class="row"><button class="btn" data-action="cmore">Outro texto</button><button class="btn ghost" data-action="nav" data-v="escrita">Voltar</button></div>` : `<span class="muted" style="font-size:.9rem">A dica em cada espaço é a tradução da palavra. Se o texto pedir plural ou passado, escreve a forma certa.</span>`}</section>`;
  }

  /* ----- fim e ações ----- */

  resultScreen() {
    return `<div><div class="eyebrow">${ProductionView.TITLES[this.mode]} terminado</div><h1>${this.correct >= this.tasks.length * 0.7 ? "Muito bem!" : "Continua a praticar!"}</h1></div>
      <div class="stats"><div class="stat"><b>${this.correct}/${this.tasks.length}</b><span>certas</span></div><div class="stat"><b>${this.points}</b><span>pontos</span></div></div>
      <div class="row"><button class="btn" data-action="pagain">Outro treino</button><button class="btn ghost" data-action="nav" data-v="escrita">Voltar à escrita</button></div>`;
  }

  saveRound() {
    if (this.saved) return;
    this.saved = true;
    const total = this.mode === "cloze" ? this.cloze.blanks.length : this.tasks.length;
    this.progress.addRound({ title: `${ProductionView.TITLES[this.mode]} · ${this.scopeTitle}`, points: this.points, correct: this.correct, total });
    this.app.save();
  }

  onSubmit(form) {
    if (form.id === "pform") {
      if (this.result) return true;
      const text = form.querySelector("input").value;
      if (!text.trim()) return true;
      this.given = text;
      const r = this.task.check(text);
      this.result = r;
      if (r.ok) { this.correct++; this.points += 10; }
      this.progress.recordAnswer(this.task.word.key, r.ok);
      this.app.save();
      this.app.render();
      return true;
    }
    if (form.id === "cform") {
      if (this.result) return true;
      const values = [...form.querySelectorAll("input")].map(i => i.value);
      this.result = this.cloze.blanks.map((b, i) => this.cloze.checkBlank(b, values[i] || ""));
      this.result.forEach((res, i) => {
        if (res === "ok") { this.correct++; this.points += 5; } else if (res === "almost") this.points += 2;
        this.progress.recordAnswer(this.cloze.blanks[i].key, res === "ok");
      });
      this.saveRound();
      this.app.render();
      return true;
    }
    return false;
  }

  onAction(action, value) {
    switch (action) {
      case "pick":
        this.usedIdx = [...(this.usedIdx || []), Number(value)];
        this.built.push(this.task.pool[Number(value)]);
        break;
      case "unpick": {
        const i = Number(value);
        this.usedIdx.splice(i, 1);
        this.built.splice(i, 1);
        break;
      }
      case "oclear":
        this.usedIdx = [];
        this.built = [];
        break;
      case "ocheck": {
        const r = this.task.check(this.built);
        this.result = r;
        if (r.ok) { this.correct++; this.points += 10; }
        if (this.task.key) this.progress.recordAnswer(this.task.key, r.ok);
        this.app.save();
        break;
      }
      case "pnext":
        this.index++;
        this.result = null;
        this.built = [];
        this.usedIdx = [];
        this.given = "";
        if (this.finished) this.saveRound();
        break;
      case "pagain":
        this.app.show(new ProductionView(this.app, this.mode, this.themes, this.scopeTitle));
        return true;
      case "cmore":
        this.app.show(new ProductionView(this.app, "cloze", this.themes, this.scopeTitle));
        return true;
      default:
        return false;
    }
    this.app.render();
    return true;
  }
}
