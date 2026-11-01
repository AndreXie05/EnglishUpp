// Gramática: lista de lições por nível e página de cada lição (explicação + exemplos)
class GrammarView extends View {
  constructor(app, level = null, lesson = null) {
    super(app);
    this.level = level;
    this.lesson = lesson;
  }

  get tab() { return "gramatica"; }

  get lessons() { return this.app.grammar; }

  get currentLevel() {
    return this.level || this.lesson?.level || this.lessons.find(l => !this.progress.grammarScore(l.id))?.level || "A1";
  }

  // **negrito** nos textos
  rich(s) {
    return this.esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  }

  render() {
    return this.lesson ? this.lessonPage(this.lesson) : this.listPage();
  }

  // Gramática tem quatro partes (lições, verbos, o guia dos tempos e as preposições), com o mesmo seletor no topo de cada uma
  static SECTIONS = [["lessons", "📐", "Lições"], ["verbs", "🔁", "Verbos"], ["tenses", "📘", "Tempos verbais"], ["preps", "📍", "Preposições"]];

  // Cabeçalho de cada parte: título simples e o seletor das partes por baixo
  static header(view, active, eyebrow, title, desc = "") {
    return `<div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${desc ? `<p class="muted" style="margin:4px 0 0">${desc}</p>` : ""}</div>
      ${GrammarView.sections(view, active)}`;
  }

  // Seletor das partes: 4 mosaicos a ocupar a largura toda, cada um com a sua cor, ícone e quantos itens tem
  static SECTION_COLORS = { lessons: "#5B5BD6", verbs: "#D6409F", tenses: "#2F6FED", preps: "#12A594" };

  static sections(view, active) {
    const count = {
      lessons: `${view.app.grammar.length} lições`, verbs: `${Verb.all().length} verbos`,
      tenses: `${TENSE_GUIDE.length} tempos`, preps: `${PrepositionView.PREPS.length} preposições`,
    };
    return `<div class="gsecs" role="group" aria-label="Partes da gramática">${GrammarView.SECTIONS.map(([k, icon, name]) =>
      `<button class="gsec" style="--sc:${GrammarView.SECTION_COLORS[k]}" data-action="gsection" data-v="${k}" aria-pressed="${k === active}">
        <span class="gsicon" aria-hidden="true">${icon}</span><span class="gstext"><b>${name}</b><small>${count[k]}</small></span></button>`).join("")}</div>`;
  }

  static openSection(app, section) {
    if (section === "lessons") app.show(new GrammarView(app));
    else if (section === "verbs") app.show(new VerbsView(app));
    else if (section === "preps") app.show(new PrepositionView(app));
    else {
      app.progress.data.tensesSeen = true;
      app.save();
      app.show(new VerbsView(app, null, "tenses"));
    }
    window.scrollTo(0, 0);
    return true;
  }

  // Ícone de cada lição pelo tema (a primeira regra que bate com o id ganha)
  static ICONS = [[/modal|can$|deduction/, "🧩"], [/pass|causative/, "🔄"], [/reported/, "💬"], [/tobe|thereis/, "🟰"],
    [/simple|continuous|perf|future|past|usedto/, "⏳"], [/article|someany|muchmany|demonstr|plural/, "🔤"], [/possess|reflexive|subst/, "👤"],
    [/prep/, "📍"], [/question|tags/, "❓"], [/compar|asas|sotoo/, "⚖️"], [/cond|wish|mixed/, "🔀"], [/relative|defining|participle|cleft/, "🔗"],
    [/gerund/, "➰"], [/linker|concession|ellipsis/, "🧵"], [/advfreq/, "📊"], [/./, "🎩"]];

  static icon(l) {
    return GrammarView.ICONS.find(([re]) => re.test(l.id.slice(2)))[1];
  }

  // Lição sugerida: a primeira por rever; senão, a primeira ainda por fazer
  get suggested() {
    const due = this.progress.grammarDue(this.lessons);
    return this.lessons.find(l => due.includes(l.id)) || this.lessons.find(l => this.progress.grammarScore(l.id) == null);
  }

  listPage() {
    const level = this.currentLevel;
    const info = ProgressView.LEVELS.find(l => l[0] === level);
    const items = this.lessons.filter(l => l.level === level);
    const doneIn = ls => ls.filter(l => this.progress.grammarScore(l.id) != null).length;
    const due = this.progress.grammarDue(this.lessons).length;
    const next = this.suggested;
    const hero = next ? `<section class="panel lead hero"><span class="heroicon" aria-hidden="true">${GrammarView.icon(next)}</span>
        <div class="eyebrow">${this.progress.grammarScore(next.id) == null ? "Próxima lição" : `Está na hora de rever${due > 1 ? ` (${due} lições à espera)` : ""}`} · ${next.level}</div>
        <h2>${this.esc(next.pt)}</h2>
        <div class="row"><button class="btn" data-action="gopen" data-v="${next.id}">Abrir lição</button></div></section>` : "";
    return `${GrammarView.header(this, "lessons", `${doneIn(this.lessons)} de ${this.lessons.length} lições feitas`, "Gramática", "As regras do inglês explicadas em português, com exemplos e exercícios.")}
      ${hero}
      <div class="tabs lvtabs" role="group" aria-label="Nível">${ProgressView.LEVELS.map(([code]) => {
        const ls = this.lessons.filter(l => l.level === code);
        return `<button data-action="glevel" data-v="${code}" aria-pressed="${code === level}">${code}<span class="tabcount">${ls.length ? `${doneIn(ls)}/${ls.length}` : "em breve"}</span></button>`;
      }).join("")}</div>
      <div class="row" style="justify-content:space-between"><h2 style="margin:0">Nível ${level} · ${this.esc(info[1])}</h2>${items.length ? `<span class="muted">${doneIn(items)} de ${items.length} feitas</span>` : ""}</div>
      ${items.length ? `<div class="meter"><i style="width:${doneIn(items) / items.length * 100}%"></i></div>
        <div class="themes">${items.map(l => this.card(l, l === next)).join("")}</div>`
        : `<section class="panel"><p style="margin:0">Ainda não há lições de gramática de nível ${level}.</p></section>`}`;
  }

  // Cartão de uma lição de gramática, no estilo das lições dos Temas: uma casa por exercício, cheias conforme o melhor resultado
  card(l, isNext) {
    const score = this.progress.grammarScore(l.id);
    const due = this.progress.grammarDue([l]).length;
    const n = this.lessons.filter(x => x.level === l.level).indexOf(l) + 1;
    const state = score == null ? (isNext ? "next" : "new") : due ? "review" : "done";
    const badge = { new: "Nova", next: "▶ Próxima", review: "🔁 Rever", done: `✓ ${score}%` }[state];
    const filled = score == null ? 0 : Math.round(score / 100 * l.size);
    const segs = Array.from({ length: l.size }, (_, k) => `<i class="${k < filled ? "on" : ""}"></i>`).join("");
    return `<button class="lcard ${state} ${isNext && state !== "next" ? "next" : ""}" style="--lc:${ThemesView.LEVEL_COLORS[l.level] || "var(--accent)"}" data-action="gopen" data-v="${l.id}">
      <span class="lc-top"><span class="lc-icon" aria-hidden="true">${GrammarView.icon(l)}</span>
        <span class="lc-num">Lição ${n}</span><span class="lc-badge">${badge}</span></span>
      <span class="lc-body"><span class="lc-title">${this.esc(l.pt)}</span>
        <span class="lc-sub">${l.size} exercícios</span></span>
      <span class="lc-foot"><span class="lc-parts" style="grid-template-columns:repeat(${l.size},1fr)" role="img" aria-label="${score == null ? "Ainda não feita" : `Melhor resultado ${score}%`}">${segs}</span>
        <span class="lc-meta">${score == null ? "—" : `${score}%`}</span></span></button>`;
  }

  lessonPage(l) {
    const i = this.lessons.indexOf(l), prev = this.lessons[i - 1], next = this.lessons[i + 1];
    const score = this.progress.grammarScore(l.id);
    const color = ThemesView.LEVEL_COLORS[l.level] || "var(--accent)";
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Gramática ${l.level}</span><button class="linkbtn" data-action="gback">← Todas as lições</button></div>
      <section class="panel ghero" style="--gc:${color}"><span class="ghicon" aria-hidden="true">${GrammarView.icon(l)}</span>
        <div class="ghtext"><div class="eyebrow">Lição de gramática · ${l.level}</div><h1>${this.esc(l.pt)}</h1>
        <div class="phchips"><span>✏️ ${l.size} exercícios</span><span>${score == null ? "🆕 Ainda não feita" : `🏅 Melhor ${score}%`}</span></div></div></section>
      ${this.introHtml(l)}
      ${l.rules.length ? `<section class="panel"><h2>🛠️ Como se forma</h2><div class="grules">${l.rules.map(([form, note]) =>
        `<div class="grule" style="--lc:${color}"><b>${this.esc(form)}</b><span class="muted">${this.rich(note)}</span></div>`).join("")}</div></section>` : ""}
      <section class="panel"><h2>💬 Exemplos</h2><div class="gexs">${l.examples.map(([en, pt]) =>
        `<div class="gex" style="--lc:${color}"><span class="ex">${this.esc(en)}</span><i class="muted">${this.esc(pt)}</i></div>`).join("")}</div></section>
      <section class="panel gcta" style="--gc:${color}"><div><h2 style="margin:0">Pronto para praticar?</h2>
        <p class="muted" style="margin:0">${l.size} exercícios de escolher, escrever e reescrever.${score == null ? "" : ` O teu melhor: ${score}%.`}</p></div>
        <button class="btn" data-action="gstart" data-v="${l.id}">✏️ Fazer os exercícios</button></section>
      <div class="gnav">
        ${prev ? `<button class="gnavbtn" data-action="gopen" data-v="${prev.id}"><span class="muted">← Anterior</span><b>${GrammarView.icon(prev)} ${this.esc(prev.pt)}</b></button>` : "<span></span>"}
        ${next ? `<button class="gnavbtn next" data-action="gopen" data-v="${next.id}"><span class="muted">Seguinte →</span><b>${GrammarView.icon(next)} ${this.esc(next.pt)}</b></button>` : ""}</div>`;
  }

  // Parte um texto em pedaços pelo separador, sem cortar um **negrito** nem uns parênteses a meio
  static split(text, re) {
    const out = [], count = (s, re) => (s.match(re) || []).length;
    for (const piece of text.split(re)) {
      const last = out[out.length - 1] || "";
      const open = count(last, /\*\*/g) % 2 || count(last, /\(/g) > count(last, /\)/g);
      if (open) out[out.length - 1] += piece.startsWith(" ") ? piece : " " + piece;
      else out.push(piece);
    }
    return out.map(x => x.trim()).filter(Boolean);
  }

  // A explicação em pontos: a primeira frase em destaque, as outras em lista; "Título: a; b; c" vira uma sublista
  introHtml(l) {
    const sentences = l.intro.flatMap(p => GrammarView.split(p, /(?<=[.!?](?:\*\*)?)\s+(?=[A-Z*"«(])/));
    const point = s => {
      const m = s.match(/^([^:;]{3,60}):\s+(.+)$/);
      const items = m ? GrammarView.split(m[2], /;\s+/) : [];
      if (items.length < 2) return `<li>${this.rich(s)}</li>`;
      return `<li>${this.rich(m[1])}:<ul>${items.map(x => `<li>${this.rich(x.replace(/\.$/, ""))}</li>`).join("")}</ul></li>`;
    };
    const [lead, ...rest] = sentences;
    return `<section class="panel"><h2>💡 A ideia</h2><p class="glead">${this.rich(lead)}</p>
      ${rest.length ? `<ul class="gpoints">${rest.map(point).join("")}</ul>` : ""}</section>`;
  }

  // Na página de uma lição, as setas passam para a lição anterior ou seguinte
  onKey(e) {
    if (!this.lesson) return;
    const l = this.lessons[this.lessons.indexOf(this.lesson) + (e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : NaN)];
    if (l) this.onAction("gopen", l.id);
  }

  onAction(action, value) {
    switch (action) {
      case "glevel":
        this.level = value;
        this.lesson = null;
        break;
      case "gopen":
        this.lesson = this.lessons.find(l => l.id === value);
        window.scrollTo(0, 0);
        break;
      case "gback":
        this.level = this.lesson.level;
        this.lesson = null;
        break;
      case "gsection":
        return GrammarView.openSection(this.app, value);
      case "gstart":
        this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(this.lessons.find(l => l.id === value))));
        return true;
      default:
        return false;
    }
    this.app.render();
    return true;
  }
}
