// Frases úteis por situação, com treino de escolha
class PhrasesView extends View {
  constructor(app, level = null) {
    super(app);
    this.level = level;
    this.open = null;
  }

  get tab() { return "frases"; }

  render() {
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"].filter(l => PHRASES.some(p => p.level === l));
    const list = this.level ? PHRASES.filter(p => p.level === this.level) : PHRASES;
    return `<div><div class="eyebrow">${PHRASES.length} situações · ${PHRASES.reduce((n, p) => n + p.lines.length, 0)} frases</div><h1>Frases úteis</h1></div>
      <div class="tabs" role="group" aria-label="Nível"><button data-action="plevel" data-v="" aria-pressed="${!this.level}">Todas</button>${levels.map(l =>
        `<button data-action="plevel" data-v="${l}" aria-pressed="${this.level === l}">${l}</button>`).join("")}</div>
      ${this.open ? this.openPanel(PHRASES.find(p => p.id === this.open)) : ""}
      <div class="themes">${list.map(p => this.card(p)).join("")}</div>`;
  }

  static ICONS = { airport: "✈️", hotel: "🏨", restaurant: "🍽️", doctor: "🩺", shopping: "🛍️", directions: "🧭", phone: "📞", interview: "💼", meeting: "📊", friends: "🧑‍🤝‍🧑", transport: "🚌", bank: "🏦", introductions: "👋", weather: "⛅", post: "📮", cafe: "☕" };

  card(p) {
    const open = this.open === p.id, color = ThemesView.LEVEL_COLORS[p.level] || "var(--accent)";
    return `<button class="theme tcard ${open ? "next" : ""}" style="--lc:${color}" data-action="ptoggle" data-v="${p.id}" aria-pressed="${open}">
      <div class="row" style="justify-content:space-between;width:100%"><span class="ticon" aria-hidden="true">${PhrasesView.ICONS[p.id] || "💬"}</span><span class="pill ${open ? "now" : ""}">${open ? "Aberta" : "Ver frases"}</span></div>
      <span class="eyebrow tnum">${p.level}</span><span class="t">${this.esc(p.pt)}</span>
      <span class="muted" style="font-size:.85rem">${p.lines.length} frases</span></button>`;
  }

  // Frases da situação aberta, por cima da grelha
  openPanel(p) {
    const color = ThemesView.LEVEL_COLORS[p.level] || "var(--accent)";
    return `<section class="panel openphr" style="--lc:${color}"><div class="row" style="justify-content:space-between"><div><span class="eyebrow tnum">${p.level}</span><h2>${PhrasesView.ICONS[p.id] || "💬"} ${this.esc(p.pt)}</h2></div>
      <button class="btn ghost small" data-action="ptoggle" data-v="${p.id}">Fechar</button></div>
      ${p.lines.map(([en, pt]) => `<div class="ex">${this.esc(en)}<br><i>${this.esc(pt)}</i></div>`).join("")}
      <div class="row"><button class="btn" data-action="ptrain" data-v="${p.id}">Treinar estas frases</button></div></section>`;
  }

  // Treino: dada a frase em português, escolher a frase em inglês
  lesson(p) {
    const exercises = p.lines.map(([en, pt]) => {
      const wrong = Utils.shuffle(p.lines.filter(l => l[0] !== en)).slice(0, 2).map(l => l[0]);
      return new GrammarExercise(["c", `Como se diz: «${pt}»?`, en, wrong.join("|"), "", en]);
    });
    return { id: `frases-${p.id}`, review: true, pt: `Frases: ${p.pt}`, exercises, size: exercises.length, backLabel: "Voltar às frases", back: app => app.go("frases"), fresh: () => this.lesson(p) };
  }

  onAction(action, value) {
    switch (action) {
      case "plevel": this.level = value || null; break;
      case "ptoggle": this.open = this.open === value ? null : value; break;
      case "ptrain":
        this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(this.lesson(PHRASES.find(p => p.id === value)))));
        return true;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
