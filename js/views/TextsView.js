// Textos práticos: diálogos, emails, cartas, avisos... com perguntas de compreensão
class TextsView extends View {
  constructor(app, level = null, text = null) {
    super(app);
    this.level = level;
    this.text = text;
    this.kind = null;     // filtro por tipo
    this.answers = {};
    this.recorded = false;
    this.qi = 0;
  }

  get tab() { return "textos"; }

  get dictOk() { return !!this.text; }

  get texts() { return this.app.texts; }

  get currentLevel() {
    return this.level || this.text?.level || "A1";
  }

  render() {
    return this.text ? this.textPage(this.text) : this.listPage();
  }

  listPage() {
    const level = this.currentLevel;
    const inLevel = this.texts.filter(t => t.level === level);
    const kinds = [...new Set(inLevel.map(t => t.kind))];
    const items = inLevel.filter(t => !this.kind || t.kind === this.kind);
    return `<div><div class="eyebrow">${this.texts.length} textos</div><h1>Textos</h1></div>
      <p class="muted" style="margin:0">Diálogos, emails, mensagens, avisos e cartas como os que vais encontrar na vida real. Lê e responde às perguntas.</p>
      <div class="tabs" role="group" aria-label="Nível">${ProgressView.LEVELS.map(([code]) => {
        const n = this.texts.filter(t => t.level === code).length;
        return `<button data-action="tlevel" data-v="${code}" aria-pressed="${code === level}">${code}<span class="tabcount">${n || "em breve"}</span></button>`;
      }).join("")}</div>
      ${kinds.length > 1 ? `<div class="tabs" role="group" aria-label="Tipo"><button data-action="tkind" data-v="" aria-pressed="${!this.kind}">Todos</button>${kinds.map(k =>
        `<button data-action="tkind" data-v="${k}" aria-pressed="${this.kind === k}">${PracticalText.KINDS[k]}</button>`).join("")}</div>` : ""}
      ${items.length ? `<div class="themes">${items.map(t => this.card(t)).join("")}</div>`
        : `<section class="panel"><p style="margin:0">Ainda não há textos deste tipo no nível ${level}.</p></section>`}`;
  }

  static ICONS = { dialogue: "💬", email: "✉️", message: "📱", letter: "💌", notice: "📌", ad: "📢", review: "⭐", blog: "📝", news: "📰", report: "📊", speech: "🎤", essay: "📚", interview: "🎙️" };

  card(t) {
    const best = this.progress.data.texts[t.id];
    const band = Progress.band(this.progress.textScore(t.id, t.questions.length));
    const pill = best == null ? `<span class="pill">Novo</span>` : `<span class="schip ${band}">${best}/${t.questions.length}</span>`;
    return `<button class="theme tcard ${band}" style="--lc:${ThemesView.LEVEL_COLORS[t.level] || "var(--accent)"}" data-action="topen" data-v="${t.id}">
      ${best != null ? `<span class="ribbon" aria-hidden="true">Feito</span>` : ""}
      <div class="row" style="justify-content:space-between;width:100%"><span class="ticon" aria-hidden="true">${TextsView.ICONS[t.kind] || "📄"}</span>${pill}</div>
      <span class="eyebrow tnum">${this.esc(t.kindLabel)} · ${t.level}</span>
      <span class="t">${this.esc(t.title)}</span><span class="muted" style="font-size:.9rem">${t.wordCount} palavras · ${t.questions.length} perguntas</span></button>`;
  }

  textPage(t) {
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${this.esc(t.kindLabel)} · ${t.level}</span><button class="linkbtn" data-action="tback">← Todos os textos</button></div>
      <div class="vhero tview" style="--vc:${ThemesView.LEVEL_COLORS[t.level] || "var(--accent)"}"><span class="vheroicon" aria-hidden="true">${TextsView.ICONS[t.kind] || "📄"}</span><h1>${this.esc(t.title)}</h1></div>
      <div class="panel reading ptext-${t.kind}">${this.body(t)}</div>
      <p class="muted" style="margin:0;font-size:.9rem">Se não souberes uma palavra, procura-a no <button class="linkbtn" data-action="nav" data-v="dicionario">Dicionário</button>. Depois responde às perguntas.</p>
      ${this.stepper(t.questions, this.answers, this.qi, "tpick", "tagain")}`;
  }

  body(t) {
    return t.lines.map(line => {
      if (!line) return `<div style="height:6px"></div>`;
      const sp = t.kind === "dialogue" || t.kind === "message" || t.kind === "interview" ? PracticalText.speech(line) : null;
      if (sp) return `<p class="dl"><b>${this.esc(sp.who)}</b> ${this.esc(sp.say)}</p>`;
      if (PracticalText.isHeader(line)) return `<p class="muted dh">${this.esc(line)}</p>`;
      return `<p class="sentence">${this.esc(line)}</p>`;
    }).join("");
  }

  pick(index, option) {
    if (this.answers[index] !== undefined) return;
    const t = this.text, q = t.questions[index];
    this.answers[index] = option;
    this.progress.recordError({ kind: "r", ref: `${t.id}:${index}` }, option === q.answer);
    if (!this.recorded && Object.keys(this.answers).length === t.questions.length) {
      const score = t.questions.filter((x, i) => this.answers[i] === x.answer).length;
      this.progress.addText(t.id, score, t.questions.length);
      this.recorded = true;
    }
    this.app.save();
  }

  onKey(e) {
    if (!this.text) return;
    const n = Number(e.key), qs = this.text.questions;
    if (e.key === "ArrowRight") this.onAction("qnext");
    else if (e.key === "ArrowLeft") this.onAction("qprev");
    else if (n >= 1 && n <= 4 && this.qi < qs.length && this.answers[this.qi] === undefined && qs[this.qi].options[n - 1] !== undefined) {
      this.onAction("tpick", String(n - 1), { dataset: { q: String(this.qi) } });
    }
  }

  onAction(action, value, el) {
    switch (action) {
      case "tlevel":
        this.level = value;
        this.kind = null;
        break;
      case "tkind":
        this.kind = value || null;
        break;
      case "topen":
        this.text = this.texts.find(t => t.id === value);
        this.answers = {};
        this.recorded = false;
        this.qi = 0;
        window.scrollTo(0, 0);
        break;
      case "tback":
        this.level = this.text.level;
        this.text = null;
        break;
      case "tpick":
        this.pick(Number(el.dataset.q), Number(value));
        break;
      case "tagain":
        this.answers = {};
        this.recorded = false;
        this.qi = 0;
        break;
      case "qprev":
      case "qnext": {
        const n = this.stepIndex(this.qi, action === "qnext" ? 1 : -1, this.text.questions.length, this.answers[this.qi] !== undefined);
        if (n === null) return true;
        this.qi = n;
        break;
      }
      default:
        return false;
    }
    this.app.render();
    return true;
  }
}
