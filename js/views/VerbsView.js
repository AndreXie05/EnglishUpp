// Verbos principais: lista com as formas, tabela de conjugação de cada verbo e treino
class VerbsView extends View {
  static FILTERS = [["irregular", "Irregulares"], ["regular", "Regulares"], ["all", "Todos"]];

  constructor(app, verb = null) {
    super(app);
    this.verb = verb;
    this.filter = "irregular";
    this.query = "";
  }

  get tab() { return "verbos"; }

  get verbs() {
    return Verb.all().filter(v => (this.filter === "all" || (this.filter === "irregular") === v.irregular) && v.matches(this.query))
      .sort((a, b) => a.base.localeCompare(b.base));
  }

  render() {
    return this.verb ? this.detailPage(this.verb) : this.listPage();
  }

  listPage() {
    const all = Verb.all(), best = this.progress.grammarScore("verbs");
    return `<div><div class="eyebrow">${all.length} verbos · ${all.filter(v => v.irregular).length} irregulares</div><h1>Verbos</h1></div>
      <p class="muted" style="margin:0">Os verbos mais usados, com o passado, o particípio passado e a conjugação em cada tempo. Clica num verbo para ver a tabela completa.</p>
      <div class="gamegrid">
        <button class="gcard g5" data-action="vdrill"><span class="gicon" aria-hidden="true">🎯</span><span class="gname">Treinar ${this.filter === "all" ? "todos" : this.filter === "regular" ? "os regulares" : "os irregulares"}</span>
          <span class="gdesc">15 perguntas${best != null ? ` · melhor ${best}%` : ""}</span></button>
        <button class="gcard g4" data-action="vchallenge"><span class="gicon" aria-hidden="true">⏱️</span><span class="gname">Desafio de 60 s</span><span class="gdesc">Quantos acertas em 1 minuto?</span></button>
      </div>
      <input type="search" id="vsearch" class="search" placeholder="Procura um verbo (go, went, ir)…" autocomplete="off" autocapitalize="off" spellcheck="false" value="${this.esc(this.query)}" aria-label="Procurar verbo">
      <div class="tabs" role="group" aria-label="Tipo">${VerbsView.FILTERS.map(([k, label]) =>
        `<button data-action="vfilter" data-v="${k}" aria-pressed="${this.filter === k}">${label}</button>`).join("")}</div>
      <div id="vlist">${this.list()}</div>`;
  }

  list() {
    const vs = this.verbs;
    if (!vs.length) return `<p class="muted" style="margin:0">Não há nenhum verbo assim na lista.</p>`;
    return `<div class="vlist"><div class="vrow vhead"><span>Infinitivo</span><span>Passado</span><span>Particípio</span></div>${vs.map(v =>
      `<button class="vrow ${v.irregular ? "irr" : "reg"}" data-action="vopen" data-v="${this.esc(v.base)}"><span><b>${this.esc(v.base)}</b><small class="muted"> ${this.esc(v.pt)}</small></span><span class="vpast">${this.esc(v.past)}</span><span class="vpart">${this.esc(v.participle)}</span></button>`).join("")}</div>`;
  }

  detailPage(v) {
    const head = Verb.TENSES.map(([, name]) => `<th scope="col">${name}</th>`).join("");
    const rows = Verb.PRONOUNS.map(([label, key]) => `<tr><th scope="row">${label}</th>${Verb.TENSES.map(([t]) =>
      `<td>${this.esc(v.answers(t, key).join(" / "))}</td>`).join("")}</tr>`).join("");
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${v.irregular ? "Verbo irregular" : "Verbo regular"}</span><button class="linkbtn" data-action="vback">← Todos os verbos</button></div>
      <div class="vhero ${v.irregular ? "irr" : "reg"}"><span class="vheroicon" aria-hidden="true">${v.irregular ? "⚡" : "✅"}</span><div class="hw"><h1>${this.esc(v.base)}</h1><span class="pt">${this.esc(v.pt)}</span></div></div>
      <section class="panel"><h2>Formas principais</h2>
        <div class="forms">${[["Infinitivo", v.base], ["3.ª pessoa (he / she / it)", v.third], ["-ing", v.ing], ["Passado simples", v.past], ["Particípio passado", v.participle]].map(([k, f], i) =>
          `<div class="fchip f${i}"><span class="eyebrow">${k}</span><b>${this.esc(f)}</b></div>`).join("")}</div></section>
      <section class="panel"><h2>Conjugação</h2><div class="vscroll"><table class="vtable"><thead><tr><th></th>${head}</tr></thead><tbody>${rows}</tbody></table></div>
        <span class="muted" style="font-size:.9rem">O futuro usa <b>will</b> + infinitivo. O present perfect usa <b>have / has</b> + particípio passado. O contínuo usa <b>am / is / are</b> + -ing.</span></section>
      <div class="row"><button class="btn" data-action="vdrill1" data-v="${this.esc(v.base)}">Treinar “${this.esc(v.base)}”</button></div>`;
  }

  afterRender() {
    const input = document.getElementById("vsearch");
    if (!input) return;
    input.addEventListener("input", () => {
      this.query = input.value;
      document.getElementById("vlist").innerHTML = this.list();
    });
  }

  onAction(action, value) {
    switch (action) {
      case "vopen":
        this.verb = Verb.all().find(v => v.base === value);
        window.scrollTo(0, 0);
        break;
      case "vback":
        this.verb = null;
        break;
      case "vfilter":
        this.filter = value;
        break;
      case "vdrill": {
        const pool = Verb.all().filter(v => this.filter === "all" || (this.filter === "irregular") === v.irregular);
        this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(new VerbDrill(pool))));
        return true;
      }
      case "vdrill1":
        this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(new VerbDrill([Verb.all().find(v => v.base === value)], 8))));
        return true;
      default:
        return false;
    }
    this.app.render();
    return true;
  }
}
