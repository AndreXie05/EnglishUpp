// Verbos principais: lista com as formas, tabela de conjugação de cada verbo e treino
class VerbsView extends View {
  static FILTERS = [["irregular", "Irregulares"], ["regular", "Regulares"], ["all", "Todos"]];

  constructor(app, verb = null, page = null) {
    super(app);
    this.verb = verb;
    this.page = page; // "tenses" = guia dos tempos verbais
    this.step = 0; // passo do guia dos tempos
    this.filter = "irregular";
    this.query = "";
  }

  get tab() { return "verbos"; }

  get verbs() {
    return Verb.all().filter(v => (this.filter === "all" || (this.filter === "irregular") === v.irregular) && v.matches(this.query))
      .sort((a, b) => a.base.localeCompare(b.base));
  }

  render() {
    if (this.page === "tenses") return this.tensesPage();
    return this.verb ? this.detailPage(this.verb) : this.listPage();
  }

  listPage() {
    const all = Verb.all(), best = this.progress.grammarScore("verbs");
    return `<div><div class="eyebrow">${all.length} verbos · ${all.filter(v => v.irregular).length} irregulares</div><h1>Verbos</h1></div>
      <p class="muted" style="margin:0">Os verbos mais usados, com o passado, o particípio passado e a conjugação em cada tempo. Clica num verbo para ver a tabela completa.</p>
      <div class="gamegrid">
        <button class="gcard g2" data-action="vtenses"><span class="gicon" aria-hidden="true">📘</span><span class="gname">Os tempos explicados</span><span class="gdesc">Lê primeiro: presente, passado, futuro…</span></button>
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

  // Guia dos tempos, um passo de cada vez: introdução, os 5 tempos e como escolher (setas ou botões para mudar)
  static STEPS = TENSE_GUIDE.length + 2;

  tensesPage() {
    const step = this.step, last = VerbsView.STEPS - 1;
    const tenseName = t => Verb.TENSES.find(([k]) => k === t)[1];
    const tabs = [["👋", "Início"], ...TENSE_GUIDE.map(g => [g.icon, tenseName(g.tense)]), ["🤔", "Como escolher"]]
      .map(([icon, name], i) => `<button data-action="vstep" data-v="${i}" aria-pressed="${i === step}">${icon} ${name}</button>`).join("");
    let body;
    if (step === 0) {
      body = `<section class="panel"><h2>👋 A ideia geral</h2><p style="margin:0">A base são três ideias: <b>presente</b>, <b>passado</b> e <b>futuro</b>. Além disso, o inglês diz se a ação <b>está a acontecer</b> (contínuo, com -ing) ou se <b>já aconteceu</b> (perfeito, com have + particípio).</p>
        <p style="margin:0">Nas páginas seguintes vês os 5 tempos mais usados, um de cada vez: os mesmos que aparecem nas tabelas e nos exercícios. Usa as setas ← → ou os botões em baixo.</p></section>`;
    } else if (step === last) {
      body = `<section class="panel"><h2>🤔 Como escolher o tempo certo</h2>
        <div class="rule"><span class="eyebrow">Quando acontece?</span><span>Sempre / em geral → <b>presente simples</b> · ontem, já acabou → <b>passado simples</b> · amanhã → <b>futuro (will)</b></span></div>
        <div class="rule"><span class="eyebrow">Está a acontecer agora?</span><span>→ <b>presente contínuo</b> (am / is / are + -ing)</span></div>
        <div class="rule"><span class="eyebrow">Já aconteceu e não dizes quando?</span><span>→ <b>present perfect</b> (have / has + particípio)</span></div>
        <div class="row"><button class="btn" data-action="vdrill">Treinar todos misturados</button></div></section>`;
    } else {
      const g = TENSE_GUIDE[step - 1], go = Verb.all().find(v => v.base === "go");
      const conj = Verb.PRONOUNS.map(([label, key]) => `<span><b>${label}</b> ${this.esc(go.form(g.tense, key))}</span>`).join("");
      const lesson = this.app.grammar.find(l => l.id === g.lesson);
      body = `<section class="panel"><div class="eyebrow">${step} de ${TENSE_GUIDE.length} · ${this.esc(g.when)}</div><h2>${g.icon} ${tenseName(g.tense)}</h2>
        <p style="margin:0">${this.rich(g.use)}</p>
        <div class="rule"><span class="eyebrow">Como se forma</span><span>${this.rich(g.form)}</span></div>
        <div class="rule"><span class="eyebrow">Exemplo com go (ir)</span><span class="tconj">${conj}</span></div>
        <div class="rule"><span class="eyebrow">Negativa e pergunta</span><span>${this.rich(g.neg)}<br>${this.rich(g.ask)}</span></div>
        <div class="rule"><span class="eyebrow">Pistas na frase</span><span><i>${this.esc(g.clues)}</i></span></div>
        <div class="rule"><span class="eyebrow">Exemplos</span>${g.examples.map(([en, pt]) => `<span class="ex">${this.esc(en)}<br><i class="muted">${this.esc(pt)}</i></span>`).join("")}</div>
        ${g.note ? `<p class="muted" style="margin:0">💡 ${this.rich(g.note)}</p>` : ""}
        <div class="row"><button class="btn small ghost" data-action="vdrilltense" data-v="${g.tense}">Treinar só este tempo</button>${lesson ? `<button class="linkbtn" data-action="vlesson" data-v="${lesson.id}">Lição completa: ${this.esc(lesson.pt)}</button>` : ""}</div></section>`;
    }
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Verbos</span><button class="linkbtn" data-action="vback">← Todos os verbos</button></div>
      <h1>Os tempos verbais</h1>
      <div class="tabs" role="group" aria-label="Partes do guia">${tabs}</div>
      <div class="bar"><i style="width:${step / last * 100}%"></i></div>
      ${body}
      <div class="row" style="justify-content:space-between"><button class="btn ghost" data-action="vstep" data-v="${step - 1}" ${step === 0 ? "disabled" : ""}>← Anterior</button>
        <span class="muted">${step + 1} / ${VerbsView.STEPS}</span>
        <button class="btn" data-action="vstep" data-v="${step + 1}" ${step === last ? "disabled" : ""}>Seguinte →</button></div>`;
  }

  onKey(e) {
    if (this.page !== "tenses") return;
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (d) this.onAction("vstep", this.step + d);
  }

  // **negrito** nos textos do guia
  rich(s) {
    return this.esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
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
        this.page = null;
        break;
      case "vfilter":
        this.filter = value;
        break;
      case "vtenses":
        this.page = "tenses";
        this.step = 0;
        this.progress.data.tensesSeen = true;
        this.app.save();
        window.scrollTo(0, 0);
        break;
      case "vstep": {
        const step = Number(value);
        if (step < 0 || step >= VerbsView.STEPS) return true;
        this.step = step;
        window.scrollTo(0, 0);
        break;
      }
      case "vdrilltense":
        this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(new VerbDrill(Verb.all(), 10, value))));
        return true;
      case "vlesson":
        this.app.show(new GrammarView(this.app, null, this.app.grammar.find(l => l.id === value)));
        return true;
      case "vdrill": {
        // Na primeira vez, explica os tempos antes dos exercícios
        if (!this.progress.data.tensesSeen) return this.onAction("vtenses");
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
