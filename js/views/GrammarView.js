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

  listPage() {
    const level = this.currentLevel;
    const info = ProgressView.LEVELS.find(l => l[0] === level);
    const items = this.lessons.filter(l => l.level === level);
    return `<div><div class="eyebrow">${this.lessons.length} lições de gramática</div><h1>Gramática</h1></div>
      <div class="tabs" role="group" aria-label="Nível">${ProgressView.LEVELS.map(([code]) => {
        const n = this.lessons.filter(l => l.level === code).length;
        return `<button data-action="glevel" data-v="${code}" aria-pressed="${code === level}">${code}<span class="tabcount">${n || "em breve"}</span></button>`;
      }).join("")}</div>
      <div class="gamegrid"><button class="gcard g5" data-action="gpreps"><span class="gicon" aria-hidden="true">📍</span><span class="gname">Preposições de lugar</span><span class="gdesc">Onde está o objeto? in, on, under…</span></button></div>
      <div><h2>Nível ${level} · ${this.esc(info[1])}</h2></div>
      ${items.length ? `<div class="themes">${items.map(l => this.card(l)).join("")}</div>`
        : `<section class="panel"><p style="margin:0">Ainda não há lições de gramática de nível ${level}.</p></section>`}`;
  }

  card(l) {
    const score = this.progress.grammarScore(l.id);
    const due = this.progress.grammarDue([l]).length;
    const pill = score == null ? `<span class="pill">Nova</span>`
      : due ? `<span class="pill">Rever · melhor ${score}%</span>` : `<span class="pill done">Melhor: ${score}%</span>`;
    return `<button class="theme tcard" style="--lc:${ThemesView.LEVEL_COLORS[l.level] || "var(--accent)"}" data-action="gopen" data-v="${l.id}">
      <div class="row" style="justify-content:space-between;width:100%"><span class="ticon" aria-hidden="true">📐</span>${pill}</div>
      <span class="eyebrow tnum">Gramática · ${l.level}</span>
      <span class="t">${this.esc(l.pt)}</span><span class="muted" style="font-size:.9rem">${l.size} exercícios</span></button>`;
  }

  lessonPage(l) {
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Gramática ${l.level}</span><button class="linkbtn" data-action="gback">← Todas as lições</button></div>
      <h1>${this.esc(l.pt)}</h1>
      <section class="panel">${l.intro.map(p => `<p style="margin:0">${this.rich(p)}</p>`).join("")}</section>
      ${l.rules.length ? `<section class="panel"><h2>Como se forma</h2>${l.rules.map(([form, note]) =>
        `<div class="rule"><span class="ex"><b>${this.esc(form)}</b></span><span class="muted">${this.rich(note)}</span></div>`).join("")}</section>` : ""}
      <section class="panel"><h2>Exemplos</h2>${l.examples.map(([en, pt]) =>
        `<div class="ex">${this.esc(en)}<br><i>${this.esc(pt)}</i></div>`).join("")}</section>
      <div class="row"><button class="btn" data-action="gstart" data-v="${l.id}">Fazer os ${l.size} exercícios</button></div>`;
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
      case "gpreps":
        this.app.show(new PrepositionView(this.app));
        return true;
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
