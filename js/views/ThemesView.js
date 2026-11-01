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
      <div class="tabs lvtabs" role="group" aria-label="Nível">${ProgressView.LEVELS.map(([code]) => {
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

  // Cartão de uma lição: faixa com o ícone e o estado, título, e uma barra com uma casa por cada parte da lição
  // Espreitar: ao passar o rato por cima de um cartão, mostra as palavras da lição uma a uma (muda a cada 3 segundos)
  static PEEK_MS = 3000;

  peekWord(t, i) {
    const w = t.words[i % t.size];
    return `<b>${this.esc(w.en)}</b><span class="ipa">/${this.esc(w.ipa)}/</span><span class="lp-pt">${this.esc(w.pt)}</span><span class="lp-n">${i % t.size + 1} / ${t.size}</span>`;
  }

  afterRender() {
    document.querySelectorAll(".lcard[data-action=open]").forEach(card => {
      const t = this.dict.theme(card.dataset.v), box = card.querySelector(".lp-word");
      if (!t || !box) return;
      let i = 0, timer = null;
      const stop = () => { clearInterval(timer); timer = null; i = 0; box.innerHTML = this.peekWord(t, 0); };
      const start = () => {
        if (timer) return;
        timer = setInterval(() => {
          if (!card.isConnected) return clearInterval(timer); // o ecrã mudou
          box.classList.remove("fresh");
          void box.offsetWidth; // recomeça a animação
          box.innerHTML = this.peekWord(t, ++i);
          box.classList.add("fresh");
        }, ThemesView.PEEK_MS);
      };
      card.addEventListener("mouseenter", start);
      card.addEventListener("mouseleave", stop);
      card.addEventListener("focus", start);
      card.addEventListener("blur", stop);
    });
  }

  card(t, isNext) {
    const parts = Progress.LESSON_PARTS, done = this.progress.lessonComplete(t.id);
    const n = this.progress.partsDone(t.id), started = n || this.progress.lesson(t.id);
    const score = this.progress.themeScore(t.id), band = Progress.band(score);
    const state = done ? "done" : started ? "doing" : isNext ? "next" : "new";
    const badge = { done: "✓ Concluída", doing: "Em curso", next: "▶ Próxima", new: "Nova" }[state];
    const segs = parts.map(id => `<i class="${this.progress.data.best[`${t.id}:${id}`] != null ? "on" : ""}"></i>`).join("");
    return `<button class="lcard ${state}" style="--lc:${ThemesView.LEVEL_COLORS[t.level] || "var(--accent)"}" data-action="open" data-v="${t.id}">
      <span class="lc-top"><span class="lc-icon" aria-hidden="true">${ThemesView.icon(t)}</span>
        <span class="lc-num">Lição ${t.number}</span><span class="lc-badge">${badge}</span></span>
      <span class="lc-body"><span class="lc-title">${this.esc(t.pt)}</span>
        <span class="lc-sub">${this.esc(t.en)} · ${t.size} palavras</span></span>
      <span class="lc-foot"><span class="lc-parts" role="img" aria-label="${n} de ${parts.length} partes feitas">${segs}</span>
        <span class="lc-meta">${n}/${parts.length}${score == null ? "" : ` <span class="schip ${band}">${score}%</span>`}</span></span>
      <span class="lc-peek" aria-hidden="true"><span class="lp-head">👀 ${this.esc(t.pt)}</span><span class="lp-word">${this.peekWord(t, 0)}</span>
        <span class="lp-more">${t.size} palavras · clica para abrir</span></span></button>`;
  }

  onAction(action, value) {
    if (action !== "level") return false;
    this.level = value;
    this.app.render();
    return true;
  }
}
