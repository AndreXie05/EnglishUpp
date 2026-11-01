// Verbos principais: lista com as formas, tabela de conjugação de cada verbo e treino
class VerbsView extends View {
  static PER_PAGE = 9;

  static TENSE_COLORS = ["#2F6FED", "#D6409F", "#8E4EC6", "#12A594", "#F5A524"];

  static FILTERS = [["irregular", "Irregulares"], ["regular", "Regulares"], ["all", "Todos"]];

  constructor(app, verb = null, page = null) {
    super(app);
    this.verb = verb;
    this.page = page; // "tenses" = guia dos tempos verbais
    this.step = 0; // passo do guia dos tempos
    this.filter = "irregular";
    this.query = "";
    this.vpage = 0; // página da lista de verbos (VerbsView.PER_PAGE de cada vez)
  }

  get tab() { return "gramatica"; }

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
    const tile = (action, color, icon, name, desc, rec) => `<button class="gtile wide" style="--gc:${color}" data-action="${action}">
      <span class="gt-top"><span class="gt-icon" aria-hidden="true">${icon}</span>${rec ? `<span class="gt-rec">${rec}</span>` : ""}</span>
      <span class="gt-body"><span class="gt-name">${name}</span><span class="gt-desc">${desc}</span></span><span class="gt-play">Começar ▶</span></button>`;
    const verbBest = this.progress.data.verbBest;
    return `${GrammarView.header(this, "verbs", `${all.length} verbos · ${all.filter(v => v.irregular).length} irregulares`, "Verbos", "Os verbos mais usados, com o passado, o particípio e a conjugação em cada tempo. Clica num verbo para ver a tabela completa.")}
      <div class="vtiles">
        ${tile("vdrill", "#2F6FED", "🎯", `Treinar ${this.filter === "all" ? "todos" : this.filter === "regular" ? "os regulares" : "os irregulares"}`, "15 perguntas em todos os tempos", best != null ? `🏅 ${best}%` : "")}
        ${tile("vchallenge", "#F5A524", "⏱️", "Desafio de 60 s", "Quantos acertas em 1 minuto?", verbBest ? `🏆 ${verbBest}` : "")}
      </div>
      <div class="dsearch"><span aria-hidden="true">🔍</span><input type="search" id="vsearch" placeholder="Procura um verbo (go, went, ir)…" autocomplete="off" autocapitalize="off" spellcheck="false" value="${this.esc(this.query)}" aria-label="Procurar verbo"></div>
      <div class="tabs" role="group" aria-label="Tipo">${VerbsView.FILTERS.map(([k, label]) =>
        `<button data-action="vfilter" data-v="${k}" aria-pressed="${this.filter === k}">${k === "irregular" ? "⚡ " : k === "regular" ? "✓ " : ""}${label}<span class="tabcount">${all.filter(v => k === "all" || (k === "irregular") === v.irregular).length}</span></button>`).join("")}</div>
      <div id="vlist">${this.list()}</div>`;
  }

  // Botões Anterior / Seguinte da lista, com a página atual
  pager(pages) {
    return `<div class="vpager"><button class="btn ghost small" data-action="vpage" data-v="${this.vpage - 1}" ${this.vpage === 0 ? "disabled" : ""}>← Anteriores</button>
      <span class="muted">${this.vpage + 1} / ${pages}</span>
      <button class="btn small" data-action="vpage" data-v="${this.vpage + 1}" ${this.vpage >= pages - 1 ? "disabled" : ""}>Seguintes →</button></div>`;
  }

  list() {
    const vs = this.verbs;
    if (!vs.length) return `<p class="muted" style="margin:0">Não há nenhum verbo assim na lista.</p>`;
    const per = VerbsView.PER_PAGE, pages = Math.ceil(vs.length / per);
    this.vpage = Math.min(this.vpage, pages - 1);
    const shown = vs.slice(this.vpage * per, (this.vpage + 1) * per);
    // Cada verbo num cartão: infinitivo e tradução, e as três formas umas por baixo das outras (infinitivo ↓ passado ↓ particípio)
    return `<div class="vgrid">${shown.map(v => `<button class="vcard ${v.irregular ? "irr" : "reg"}" data-action="vopen" data-v="${this.esc(v.base)}">
        <span class="vchead"><b>${this.esc(v.base)}</b><span class="vtype">${v.irregular ? "⚡ irregular" : "✓ regular"}</span></span>
        <span class="vcpt">${this.esc(v.pt)}</span>
        <span class="vforms"><span class="base"><small>infinitivo</small>${this.esc(v.base)}</span><i aria-hidden="true">↓</i><span class="past"><small>passado</small>${this.esc(v.past)}</span><i aria-hidden="true">↓</i><span class="part"><small>particípio</small>${this.esc(v.participle)}</span></span></button>`).join("")}</div>
      ${pages > 1 ? this.pager(pages) : ""}`;
  }

  // Pronúncia de uma forma (ou de várias, separadas por " / ")
  ipaOf(form) {
    const ipa = form.split(" / ").map(f => this.app.ipa.of(f)).filter(Boolean);
    return ipa.length ? `/${ipa.join(" · ")}/` : "";
  }

  detailPage(v) {
    // Conjugação: um cartão por tempo, com a cor e o ícone do guia dos tempos
    const tenses = Verb.TENSES.map(([t, name], i) => {
      const g = TENSE_GUIDE.find(x => x.tense === t);
      return `<div class="vtense" style="--tc:${VerbsView.TENSE_COLORS[i]}"><div class="vthead"><span aria-hidden="true">${g ? g.icon : "•"}</span><b>${name}</b>
        <button class="linkbtn" data-action="vguide" data-v="${i + 1}">?</button></div>
        ${Verb.PRONOUNS.map(([label, key]) => `<div class="vtrow"><span class="muted">${label}</span><b>${this.esc(v.answers(t, key).join(" / "))}</b></div>`).join("")}
        ${g ? `<span class="vtrule">${this.esc(g.rule)}</span>` : ""}</div>`;
    }).join("");
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${v.irregular ? "Verbo irregular" : "Verbo regular"}</span><button class="linkbtn" data-action="vback">← Todos os verbos</button></div>
      <section class="panel ghero vdhero" style="--gc:${v.irregular ? "#8E4EC6" : "#12A594"}"><span class="ghicon" aria-hidden="true">${v.irregular ? "⚡" : "✅"}</span>
        <div class="ghtext"><div class="eyebrow">${v.irregular ? "Verbo irregular" : "Verbo regular"}</div><h1>${this.esc(v.base)}</h1><p style="margin:0;font-weight:700">${this.esc(v.pt)}</p></div></section>
      <section class="panel"><h2>🔑 As três formas</h2>
        <div class="vbig">${[["Infinitivo", v.base, "base"], ["Passado simples", v.past, "past"], ["Particípio passado", v.participle, "part"]].map(([k, f, c], i) =>
          `${i ? `<span class="varrow" aria-hidden="true">→</span>` : ""}<div class="vbform ${c}"><span class="eyebrow">${k}</span><b>${this.esc(f)}</b><span class="ipa">${this.esc(this.ipaOf(f))}</span></div>`).join("")}</div>
        <div class="vmini">${[["3.ª pessoa (he / she / it)", v.third], ["Forma -ing", v.ing]].map(([k, f]) =>
          `<div><span class="muted">${k}</span><b>${this.esc(f)}</b><span class="ipa">${this.esc(this.ipaOf(f))}</span></div>`).join("")}</div></section>
      <section class="panel"><h2>📋 Conjugação</h2><div class="vtenses">${tenses}</div></section>
      <section class="panel gcta" style="--gc:${v.irregular ? "#8E4EC6" : "#12A594"}"><div><h2 style="margin:0">Treinar “${this.esc(v.base)}”</h2>
        <p class="muted" style="margin:0">8 perguntas com este verbo em todos os tempos.</p></div>
        <button class="btn" data-action="vdrill1" data-v="${this.esc(v.base)}">✏️ Começar</button></section>`;
  }

  // Guia dos tempos, um passo de cada vez: introdução, os 5 tempos e como escolher (setas ou botões para mudar)
  static STEPS = TENSE_GUIDE.length + 2;

  tensesPage() {
    const step = this.step, last = VerbsView.STEPS - 1;
    const tenseName = t => Verb.TENSES.find(([k]) => k === t)[1];
    // Passos do guia: círculos com o ícone ligados por uma linha; o nome só aparece no passo atual
    const tabs = [["👋", "Início"], ...TENSE_GUIDE.map(g => [g.icon, tenseName(g.tense)]), ["🤔", "Como escolher"]]
      .map(([icon, name], i) => `<button class="tstep ${i < step ? "past" : ""}" data-action="vstep" data-v="${i}" aria-pressed="${i === step}" title="${this.esc(name)}" aria-label="${this.esc(name)}">
        <span class="tsdot" aria-hidden="true">${icon}</span><span class="tsname">${this.esc(name)}</span></button>`).join("");
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
    return `${GrammarView.header(this, "tenses", "Gramática", "Os tempos verbais", "Presente, passado e futuro, e como o inglês diz se a ação está a acontecer ou já aconteceu.")}
      <div class="tsteps" role="group" aria-label="Partes do guia">${tabs}</div>
      <div class="bar"><i style="width:${step / last * 100}%"></i></div>
      ${body}
      <div class="row" style="justify-content:space-between"><button class="btn ghost" data-action="vstep" data-v="${step - 1}" ${step === 0 ? "disabled" : ""}>← Anterior</button>
        <span class="muted">${step + 1} / ${VerbsView.STEPS}</span>
        <button class="btn" data-action="vstep" data-v="${step + 1}" ${step === last ? "disabled" : ""}>Seguinte →</button></div>`;
  }

  onKey(e) {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    if (this.page === "tenses") this.onAction("vstep", this.step + d);
    // Na lista de verbos, as setas mudam de página
    else if (!this.verb) {
      const pages = Math.ceil(this.verbs.length / VerbsView.PER_PAGE);
      if (this.vpage + d >= 0 && this.vpage + d < pages) this.onAction("vpage", this.vpage + d);
    }
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
      this.vpage = 0;
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
        this.vpage = 0;
        break;
      case "vpage":
        // Muda só a lista, para a pesquisa não perder o que lá está escrito
        this.vpage = Number(value);
        document.getElementById("vlist").innerHTML = this.list();
        document.getElementById("vlist").scrollIntoView({ block: "nearest" });
        return true;
      case "gsection":
        return GrammarView.openSection(this.app, value);
      case "vtenses":
        this.page = "tenses";
        this.step = 0;
        this.progress.data.tensesSeen = true;
        this.app.save();
        window.scrollTo(0, 0);
        break;
      case "vguide": {
        // "?" num tempo da conjugação: abre o guia dos tempos nesse passo
        const view = new VerbsView(this.app, null, "tenses");
        view.step = Number(value);
        this.app.show(view);
        return true;
      }
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
