// Frases: úteis por situação (com treino de escolha) ou soltas, uma a uma, para vocabulário e pronúncia
class PhrasesView extends View {
  constructor(app, level = null) {
    super(app);
    this.level = level;
    this.open = null;
    this.mode = "situations"; // ou "loose"
    this.looseLevel = null;
    this.shuffleLoose();
  }

  get tab() { return "frases"; }

  // Frases soltas: as de looseSentences.js e as de freeSentences.js, sem repetidas: [{ en, pt, level }]
  static loose() {
    if (!PhrasesView._loose) {
      const seen = new Set();
      PhrasesView._loose = [...LOOSE_SENTENCES, ...FREE_SENTENCES].filter(([en]) => !seen.has(en) && seen.add(en)).map(([en, pt, level]) => ({ en, pt, level }));
    }
    return PhrasesView._loose;
  }

  shuffleLoose() {
    this.looseList = Utils.shuffle(PhrasesView.loose().filter(x => !this.looseLevel || x.level === this.looseLevel));
    this.pos = 0;
    this.reveal = false;
    this.wordInfo = null;
  }

  modeSwitch() {
    return `<div class="tabs" role="group" aria-label="Tipo de frases">${[["situations", "💬", "Por situação"], ["loose", "🎲", "Frases soltas"]].map(([k, icon, name]) =>
      `<button data-action="pmode" data-v="${k}" aria-pressed="${this.mode === k}"><span aria-hidden="true">${icon}</span> ${name}</button>`).join("")}</div>`;
  }

  render() {
    if (this.mode === "loose") return this.looseScreen();
    const levels = ["A1", "A2", "B1", "B2", "C1", "C2"].filter(l => PHRASES.some(p => p.level === l));
    const list = this.level ? PHRASES.filter(p => p.level === this.level) : PHRASES;
    return `<div><div class="eyebrow">${PHRASES.length} situações · ${PHRASES.reduce((n, p) => n + p.lines.length, 0)} frases</div><h1>Frases úteis</h1></div>
      ${this.modeSwitch()}
      <div class="tabs" role="group" aria-label="Nível"><button data-action="plevel" data-v="" aria-pressed="${!this.level}">Todas</button>${levels.map(l =>
        `<button data-action="plevel" data-v="${l}" aria-pressed="${this.level === l}">${l}</button>`).join("")}</div>
      ${this.open ? this.openPanel(PHRASES.find(p => p.id === this.open)) : ""}
      <div class="themes">${list.map(p => this.card(p)).join("")}</div>`;
  }

  static ICONS = { airport: "✈️", hotel: "🏨", restaurant: "🍽️", doctor: "🩺", shopping: "🛍️", directions: "🧭", phone: "📞", interview: "💼", meeting: "📊", friends: "🧑‍🤝‍🧑", transport: "🚌", bank: "🏦", introductions: "👋", weather: "⛅", post: "📮", cafe: "☕",
    greetings: "🙋", polite: "🙏", understand: "🤔", family: "👨‍👩‍👧", feelings: "😊", routine: "⏰", likes: "❤️", time: "🕒", athome: "🏠",
    supermarket: "🛒", clothes: "👕", taxi: "🚕", train: "🚆", cinema: "🎬", pharmacy: "💊", invitations: "🎉", past: "⏪", future: "⏩",
    homeproblems: "🔧", phonetech: "📱", holiday: "🏖️", hobbies: "⚽", workday: "💻", school: "🎓", opinions: "💭", agree: "🤝",
    complaints: "😠", advice: "💡", renting: "🔑", emergency: "🚨", health: "🏃", travelissues: "🧳", emailwork: "✉️", newsworld: "📰",
    negotiate: "💶", presenting: "🎤", debate: "⚖️", idioms: "🗣️", phrasal: "🔀", formal: "🎩", soften: "🕊️", connect: "🔗", idioms2: "🧠" };

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
      ${p.lines.map(([en, pt]) => this.line(en, pt)).join("")}
      <div class="row"><button class="btn" data-action="ptrain" data-v="${p.id}">Treinar estas frases</button></div></section>`;
  }

  // Uma frase: inglês, pronúncia /…/ por baixo, tradução
  line(en, pt) {
    const ipa = PHRASE_IPA[en];
    return `<div class="phr"><strong>${this.esc(en)}</strong>
      ${ipa ? `<div class="ipa">/${this.esc(ipa)}/</div>` : ""}<div class="muted">${this.esc(pt)}</div></div>`;
  }

  // Uma frase solta de cada vez: cada palavra pode ser tocada para ver o significado e a pronúncia
  looseScreen() {
    const list = this.looseList, x = list[this.pos], total = PhrasesView.loose().length;
    const levels = ["A1", "A2", "B1", "B2", "C1"];
    const tabs = `<div class="tabs" role="group" aria-label="Nível"><button data-action="plooselevel" data-v="" aria-pressed="${!this.looseLevel}">Todas</button>${levels.map(l =>
      `<button data-action="plooselevel" data-v="${l}" aria-pressed="${this.looseLevel === l}">${l}</button>`).join("")}</div>`;
    const color = ThemesView.LEVEL_COLORS[x.level] || "var(--accent)";
    const words = this.tappable(x.en, this.wordInfo, "pword");
    const ipa = this.app.ipa.of(x.en);
    return `<div><div class="eyebrow">${total} frases para vocabulário e pronúncia</div><h1>Frases úteis</h1></div>
      ${this.modeSwitch()}
      ${tabs}
      <section class="panel loosecard" style="--lc:${color}">
        <div class="row" style="justify-content:space-between"><span class="pill" style="color:var(--lc);border-color:var(--lc)">${x.level}</span><span class="muted">${this.pos + 1} / ${list.length}</span></div>
        <p class="loose-en">${words}</p>
        ${ipa ? `<div class="ipa loose-ipa">/${this.esc(ipa)}/</div>` : ""}
        ${this.wordInfo ? this.wordBox(this.wordInfo) : `<p class="muted" style="margin:0;font-size:.9rem">Toca numa palavra para ver o que significa.</p>`}
        ${this.reveal ? `<div class="loose-pt">${this.esc(x.pt)}</div>`
          : `<button class="btn ghost" data-action="preveal">👁 Ver tradução</button>`}
      </section>
      <div class="row" style="justify-content:space-between"><button class="btn ghost" data-action="pstep" data-v="-1" ${this.pos === 0 ? "disabled" : ""}>← Anterior</button>
        <button class="linkbtn" data-action="pshuffle">🔀 Baralhar</button>
        <button class="btn" data-action="pstep" data-v="1">Seguinte →</button></div>
      <p class="muted" style="margin:0;font-size:.85rem;text-align:center">Teclas: ← → para mudar · Enter para ver a tradução</p>`;
  }

  onKey(e) {
    if (this.mode !== "loose") return;
    if (e.key === "ArrowRight") this.onAction("pstep", 1);
    else if (e.key === "ArrowLeft") this.onAction("pstep", -1);
    else if (e.key === "Enter" && e.target.tagName !== "BUTTON") this.onAction("preveal");
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
      case "pmode": this.mode = value; break;
      case "plooselevel": this.looseLevel = value || null; this.shuffleLoose(); break;
      case "pshuffle": this.shuffleLoose(); break;
      case "preveal": this.reveal = true; break;
      case "pword": this.wordInfo = this.wordInfo === value ? null : value; break;
      case "pstep": {
        const pos = this.pos + Number(value);
        if (pos < 0) return true;
        // Ao chegar ao fim, baralha outra vez e recomeça
        if (pos >= this.looseList.length) this.shuffleLoose();
        else { this.pos = pos; this.reveal = false; this.wordInfo = null; }
        break;
      }
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
