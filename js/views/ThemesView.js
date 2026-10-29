// Lista de lições. Escolhes um nível (A1 a C2) e vês os temas desse nível
class ThemesView extends View {
  constructor(app, level = null) {
    super(app);
    this.level = level;
  }

  get tab() { return "temas"; }

  // Sem nível escolhido, abre o nível da próxima lição por estudar
  get currentLevel() {
    return this.level || this.progress.nextTheme(this.dict)?.level || "A1";
  }

  render() {
    const level = this.currentLevel;
    return `<div><div class="eyebrow">${this.dict.themes.length} lições · ${this.dict.allWords.length} palavras</div><h1>Temas</h1></div>
      <div class="tabs" role="group" aria-label="Nível">${ProgressView.LEVELS.map(([code]) => {
        const n = this.dict.themes.filter(t => t.level === code).length;
        return `<button data-action="level" data-v="${code}" aria-pressed="${code === level}">${code}<span class="tabcount">${n ? n : "em breve"}</span></button>`;
      }).join("")}</div>
      ${this.levelBody(level)}`;
  }

  levelBody(level) {
    const info = ProgressView.LEVELS.find(l => l[0] === level);
    const themes = this.dict.themes.filter(t => t.level === level);
    const head = `<div><h2>Nível ${level} · ${this.esc(info[1])}</h2>
      <p class="muted" style="margin:4px 0 0">${this.esc(info[2])} (${this.esc(info[3])})</p></div>`;
    if (!themes.length) {
      return `${head}<section class="panel"><p style="margin:0">Ainda não há lições de nível ${level} na app. Para lá chegares, termina primeiro os níveis anteriores. Quando as lições deste nível existirem, aparecem aqui.</p></section>`;
    }
    const next = this.progress.nextTheme(this.dict);
    const studied = themes.filter(t => this.progress.lessonComplete(t.id)).length;
    const words = themes.reduce((n, t) => n + t.size, 0);
    return `${head}<p class="muted" style="margin:0">${studied} de ${themes.length} lições estudadas · ${words} palavras</p>
      <div class="themes">${themes.map(t => this.card(t, t === next)).join("")}</div>`;
  }

  // Cor de cada nível (sem verde, amarelo nem vermelho, que ficam para o resultado dos exercícios)
  static LEVEL_COLORS = { A1: "#2F6FED", A2: "#0EA5C6", B1: "#8E4EC6", B2: "#D6409F", C1: "#5B5BD6", C2: "#C2410C" };

  // Ícone do tema: procura palavras-chave no nome em inglês (a primeira regra que bater ganha)
  static ICONS = [
    [/greeting/, "👋"], [/family|relationship|neighbour/, "👨‍👩‍👧"], [/food|fruit|nutrition|cooking|flavour|restaurant/, "🍽️"],
    [/home|house|housing|furniture|appliance|housework|repair/, "🏠"], [/routine|habit|lifestyle/, "⏰"], [/time|calendar|month|season|schedule/, "📅"],
    [/weather|nature|wildlife|countryside|environment|sustain|energy/, "🌿"], [/city|urban|place|building|direction|transport|driving|travel|holiday|mishap/, "🧭"],
    [/feeling|emotion|psycholog|mind|attitude/, "💭"], [/work|career|job|employment|business|management|service/, "💼"], [/school|study|education|universit|academic|student/, "🎓"],
    [/colour|color/, "🎨"], [/number|money|bank|financ|econom|trade|payment/, "💶"], [/body|health|medic|fitness|wellbeing/, "🩺"],
    [/cloth|fashion|accessor/, "👕"], [/animal/, "🐾"], [/personal|people|personality|describing/, "🧑"], [/shop/, "🛍️"],
    [/hobb|sport|leisure|competition|club|entertain|film|music|media|culture/, "🎬"], [/technolog|phone|communication|social media|internet|innovation/, "💻"],
    [/countr|language|linguist/, "🌍"], [/\bart|literar|narrative|rhetoric|poetic/, "📚"], [/law|crime|justice|govern|politic|power|ethic/, "⚖️"],
    [/scien|research|statistic|discover/, "🔬"], [/news|journal/, "📰"], [/opinion|argu|debat|reasoning|thought|philosoph|abstract|discourse|formal|hedging|nuance|speech|trend|cause/, "💬"],
    [/idiom|phrasal|colloc/, "🧩"], [/opposite|verb/, "🔁"], [/society|community|manner|behaviour/, "🤝"],
  ];

  static icon(t) {
    const rule = ThemesView.ICONS.find(([re]) => re.test(t.en.replace(/·.*$/, "").toLowerCase()));
    return rule ? rule[1] : "📖";
  }

  card(t, isNext) {
    const n = this.progress.partsDone(t.id), total = Progress.LESSON_PARTS.length;
    const prog = this.progress.lessonProgress(t.id), done = this.progress.lessonComplete(t.id);
    const pill = done ? `<span class="pill done">Concluído</span>`
      : n || this.progress.lesson(t.id) ? `<span class="pill now">Em progresso ${n}/${total}</span>`
      : isNext ? `<span class="pill now">Próxima</span>` : `<span class="pill">Nova</span>`;
    const score = this.progress.themeScore(t.id), band = Progress.band(score);
    const chip = score == null ? "" : `<span class="schip ${band}">${score}%</span>`;
    return `<button class="theme tcard ${band} ${isNext ? "next" : ""} ${done ? "doneLesson" : ""}" style="--lc:${ThemesView.LEVEL_COLORS[t.level] || "var(--accent)"}" data-action="open" data-v="${t.id}">
      ${done ? `<span class="ribbon" aria-hidden="true">Concluído</span>` : ""}
      <div class="row" style="justify-content:space-between;width:100%"><span class="ticon" aria-hidden="true">${ThemesView.icon(t)}</span>
        <span class="row" style="gap:6px">${chip}${pill}</span></div>
      <span class="eyebrow tnum">Lição ${t.number} · ${t.level}</span>
      <span class="t">${this.esc(t.pt)}</span><span class="muted" style="font-size:.9rem">${this.esc(t.en)} · ${t.size} palavras</span>
      <div class="meter" style="width:100%" role="progressbar" aria-valuenow="${prog}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso da lição"><i style="width:${prog}%"></i></div>
      <span class="muted" style="font-size:.8rem">Progresso ${prog}% · ${n} de ${total} partes feitas</span></button>`;
  }

  onAction(action, value) {
    if (action !== "level") return false;
    this.level = value;
    this.app.render();
    return true;
  }
}
