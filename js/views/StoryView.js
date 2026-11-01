// Modo história: a viagem do Leo, uma cidade por nível. Os capítulos abrem à medida que acabas lições desse nível
class StoryView extends View {
  static XP = 5; // bónus por acertar todas as perguntas de um capítulo

  constructor(app, chapterId = null) {
    super(app);
    this.city = null;
    this.chapter = null;
    if (chapterId) this.openChapter(chapterId);
  }

  get tab() { return "jogo"; }

  // Botão do dicionário rápido enquanto se lê um capítulo
  get dictOk() { return !!this.chapter; }

  static levelColor(level) { return ThemesView.LEVEL_COLORS[level] || "var(--accent)"; }

  // Lições acabadas de um nível e quantas são precisas para abrir o capítulo i (0 = sempre aberto)
  static studied(app, level) {
    return app.dict.themes.filter(t => t.level === level && app.progress.lesson(t.id)).length;
  }

  static needed(app, city, i) {
    const total = app.dict.themes.filter(t => t.level === city.level).length;
    return Math.round(i * total / city.chapters.length);
  }

  static isOpen(app, city, i) {
    return StoryView.studied(app, city.level) >= StoryView.needed(app, city, i);
  }

  static read(app, chapterId) {
    return !!app.progress.data.story?.[chapterId];
  }

  // Primeiro capítulo aberto e ainda por ler (para o aviso no Hoje)
  static nextUnread(app) {
    for (const city of STORY) {
      const i = city.chapters.findIndex((c, k) => StoryView.isOpen(app, city, k) && !StoryView.read(app, c.id));
      if (i >= 0) return { city, chapter: city.chapters[i], n: i + 1 };
    }
    return null;
  }

  openChapter(id) {
    this.city = STORY.find(c => c.chapters.some(ch => ch.id === id));
    this.chapter = this.city.chapters.find(ch => ch.id === id);
    this.showPt = false;
    this.resetQuestions();
  }

  // Perguntas no formato do stepper ({ q, options, answer }), com as opções baralhadas
  resetQuestions() {
    this.qs = this.chapter.q.map(([en, pt, opts]) => {
      const options = Utils.shuffle(opts);
      return { q: `${en} · ${pt}`, options, answer: options.indexOf(opts[0]) };
    });
    this.answers = {};
    this.qi = 0;
    this.gained = null;
  }

  render() {
    if (this.chapter) return this.chapterPage();
    if (this.city) return this.cityPage();
    return this.mapPage();
  }

  // As cidades da viagem, por nível
  mapPage() {
    const cards = STORY.map(city => {
      const done = city.chapters.filter(c => StoryView.read(this.app, c.id)).length;
      const soon = !city.chapters.length;
      return `<button class="theme tcard storycity ${soon ? "soon" : ""}" style="--lc:${StoryView.levelColor(city.level)}" data-action="stcity" data-v="${city.id}" ${soon ? "disabled" : ""}>
        <div class="row" style="justify-content:space-between;width:100%"><span class="ticon" aria-hidden="true">${city.flag}</span>
          <span class="pill ${done === city.chapters.length && !soon ? "done" : ""}">${soon ? "Em breve" : `${done}/${city.chapters.length} capítulos`}</span></div>
        <span class="eyebrow tnum">${city.level}</span><span class="t">${this.esc(city.city)}</span>
        <span class="muted" style="font-size:.9rem">${this.esc(city.about)}</span></button>`;
    }).join("");
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Modo história</span><button class="linkbtn" data-action="nav" data-v="jogo">← Voltar ao Jogo</button></div>
      <h1>A viagem do Leo 🗺️</h1>
      <section class="panel lead hero"><span class="heroicon" aria-hidden="true">🧳</span>
        <p style="margin:0">O Leo é do Porto e parte à aventura pelo mundo de língua inglesa. Cada cidade é um nível. O primeiro capítulo de cada cidade está aberto; os outros abrem à medida que acabas lições desse nível.</p></section>
      <div class="themes">${cards}</div>`;
  }

  // Os capítulos de uma cidade, num caminho
  cityPage() {
    const city = this.city, have = StoryView.studied(this.app, city.level);
    const steps = city.chapters.map((c, i) => {
      const open = StoryView.isOpen(this.app, city, i), read = StoryView.read(this.app, c.id);
      const left = StoryView.needed(this.app, city, i) - have;
      return `<button class="stchap ${read ? "read" : open ? "open" : "locked"}" data-action="stopen" data-v="${c.id}" ${open ? "" : "disabled"}>
        <span class="stnum">${read ? "✓" : open ? i + 1 : "🔒"}</span>
        <span class="sticon" aria-hidden="true">${open ? c.icon : "❔"}</span>
        <span class="stbody"><b>Capítulo ${i + 1}${open ? `: ${this.esc(c.title)}` : ""}</b>
          <span class="muted">${read ? "Lido" : open ? "Por ler" : `Acaba mais ${left} liç${left === 1 ? "ão" : "ões"} de ${city.level} para abrir`}</span></span></button>`;
    }).join("");
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${city.flag} ${city.level}</span><button class="linkbtn" data-action="stmap">← Todas as cidades</button></div>
      <h1>${this.esc(city.city)}</h1>
      <p class="muted" style="margin:0">${this.esc(city.about)}</p>
      <div class="stpath" style="--lc:${StoryView.levelColor(city.level)}">${steps}</div>`;
  }

  // Um capítulo: texto corrido com tradução por parágrafo e as perguntas no fim, uma de cada vez
  chapterPage() {
    const city = this.city, c = this.chapter, i = city.chapters.indexOf(c), next = city.chapters[i + 1];
    const paras = c.en.map((en, k) => `<p class="sentence">${this.esc(en)}${this.showPt ? `<span class="tr">${this.esc(c.pt[k])}</span>` : ""}</p>`).join("");
    const words = c.en.join(" ").split(/\s+/).length;
    let after = "";
    if (this.qi >= this.qs.length) {
      const nextOpen = next && StoryView.isOpen(this.app, city, i + 1);
      const left = next ? StoryView.needed(this.app, city, i + 1) - StoryView.studied(this.app, city.level) : 0;
      after = `<section class="panel">${this.gained ? `<div class="fb ok">+${this.gained} XP</div>` : ""}
        <div class="row">${nextOpen ? `<button class="btn" data-action="stopen" data-v="${next.id}">Capítulo seguinte →</button>`
          : next ? `<span class="muted">O capítulo ${i + 2} abre quando acabares mais ${left} liç${left === 1 ? "ão" : "ões"} de ${city.level}.</span>`
          : `<span class="muted">Fim de ${this.esc(city.city)}! A história continua no nível seguinte.</span>`}
          <button class="btn ghost" data-action="stcity" data-v="${city.id}">Voltar a ${this.esc(city.city)}</button></div></section>`;
    }
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${city.flag} ${this.esc(city.city)} · capítulo ${i + 1} de ${city.chapters.length}</span><button class="linkbtn" data-action="stcity" data-v="${city.id}">← Capítulos</button></div>
      <div class="sthead"><span class="sticon big" aria-hidden="true">${c.icon}</span><h1>${this.esc(c.title)}</h1></div>
      <div class="row"><button class="btn ghost small" data-action="stpt">${this.showPt ? "Esconder" : "Mostrar"} tradução</button></div>
      <p class="muted" style="margin:0;font-size:.9rem">Lê primeiro sem tradução. Se não souberes uma palavra, procura-a no dicionário (botão 📖 em baixo). Depois responde às ${this.qs.length} perguntas.</p>
      <section class="panel reading"><div class="eyebrow">Texto · ${words} palavras</div>${paras}</section>
      ${this.stepper(this.qs, this.answers, this.qi, "stpick", "stagain")}
      ${after}`;
  }

  // Ao acabar as perguntas pela primeira vez, o capítulo fica lido e conta para a meta diária:
  // 2 XP por resposta certa, mais 5 se acertares todas
  finish() {
    const c = this.chapter;
    if (StoryView.read(this.app, c.id)) return;
    const right = this.qs.filter((q, k) => this.answers[k] === q.answer).length;
    this.gained = right * 2 + (right === this.qs.length ? StoryView.XP : 0);
    this.progress.data.story = this.progress.data.story || {};
    this.progress.data.story[c.id] = true;
    this.progress.addGame(this.gained, `story:${c.id}`);
    this.app.save();
  }

  onKey(e) {
    if (!this.chapter) return;
    const k = e.key, n = Number(k);
    if (k === "ArrowRight") this.onAction("qnext");
    else if (k === "ArrowLeft") this.onAction("qprev");
    else if (n >= 1 && n <= 4 && this.qi < this.qs.length && this.answers[this.qi] === undefined && this.qs[this.qi].options[n - 1] !== undefined) {
      this.onAction("stpick", String(n - 1), { dataset: { q: String(this.qi) } });
    }
  }

  onAction(action, value, el) {
    switch (action) {
      case "stmap": this.city = null; this.chapter = null; break;
      case "stcity": this.city = STORY.find(c => c.id === value); this.chapter = null; break;
      case "stopen": this.openChapter(value); break;
      case "stpt": this.showPt = !this.showPt; this.app.render(); return true;
      case "stpick": this.answers[Number(el.dataset.q)] = Number(value); this.app.render(); return true;
      case "qprev":
      case "qnext": {
        const n = this.stepIndex(this.qi, action === "qnext" ? 1 : -1, this.qs.length, this.answers[this.qi] !== undefined);
        if (n === null) return true;
        this.qi = n;
        if (n >= this.qs.length) this.finish();
        this.app.render();
        return true;
      }
      case "stagain": this.resetQuestions(); this.app.render(); return true;
      default: return false;
    }
    window.scrollTo(0, 0);
    this.app.render();
    return true;
  }
}
