// Diário de escrita: escreves 3 a 5 frases em inglês e a app aponta os erros mais comuns
class DiaryView extends View {
  static PROMPTS = [
    "Describe your day.", "What did you do last weekend?", "Talk about your family.", "What is your favourite food and why?",
    "Describe your house or your room.", "What are your plans for next week?", "Talk about your best friend.", "What is your job or your studies?",
    "Describe the weather today.", "What did you eat today?", "Talk about a place you want to visit.", "What do you like to do in your free time?",
  ];

  constructor(app) {
    super(app);
    this.prompt = DiaryView.PROMPTS[DateUtils.dayNumber() % DiaryView.PROMPTS.length];
    this.text = "";
    this.result = null;
  }

  get tab() { return "escrita"; }

  render() {
    return `<div><div class="eyebrow">Escrita</div><h1>Diário</h1></div>
      <section class="panel"><div class="eyebrow">Tema de hoje</div><h2>${this.esc(this.prompt)}</h2>
        <p class="muted" style="margin:0">Escreve de ${DiaryChecker.MIN_SENTENCES} a 5 frases em inglês (pelo menos ${DiaryChecker.MIN_WORDS} palavras). Procuro os erros mais comuns, mas não substituo um professor. A primeira entrada do dia dá 5 XP.</p>
        <textarea id="dtext" class="search" rows="6" placeholder="Write here…" spellcheck="false" autocapitalize="sentences" aria-label="Texto">${this.esc(this.text)}</textarea>
        <div class="row"><button class="btn" data-action="dcheck">Verificar</button><button class="linkbtn" data-action="nav" data-v="escrita">Voltar à Escrita</button></div></section>
      ${this.result ? this.resultPanel() : ""}
      ${this.history()}`;
  }

  resultPanel() {
    const r = this.result;
    if (r.short) return `<section class="panel"><div class="fb no">Escreve um pouco mais</div><p style="margin:0">Faltam frases ou palavras: preciso de pelo menos ${DiaryChecker.MIN_SENTENCES} frases e ${DiaryChecker.MIN_WORDS} palavras.</p></section>`;
    const list = r.issues.length
      ? r.issues.map(i => `<div class="hard"><div class="muted" style="font-size:.9rem">${this.esc(i.sentence)}</div><div>${this.esc(i.msg)}</div></div>`).join("")
      : `<p style="margin:0">Não encontrei erros comuns. Bom trabalho!</p>`;
    return `<section class="panel"><div class="fb ${r.issues.length ? "no" : "ok"}">${r.issues.length ? `${r.issues.length} ponto${r.issues.length === 1 ? "" : "s"} a rever` : "Tudo certo"}${r.xp ? ` · +${r.xp} XP` : ""}</div>${list}</section>`;
  }

  history() {
    const d = [...this.progress.data.diary].reverse().slice(0, 3);
    if (!d.length) return "";
    return `<section class="panel"><h2>As tuas últimas entradas</h2>${d.map(e =>
      `<div class="hard"><div class="eyebrow">${this.esc(e.date)} · ${e.issues} ponto${e.issues === 1 ? "" : "s"} a rever</div><div class="muted">${this.esc(e.text)}</div></div>`).join("")}</section>`;
  }

  onAction(action) {
    if (action !== "dcheck") return false;
    const text = document.getElementById("dtext").value.trim();
    this.text = text;
    const sentences = DiaryChecker.sentences(text);
    if (sentences.length < DiaryChecker.MIN_SENTENCES || Utils.countWords(text) < DiaryChecker.MIN_WORDS) {
      this.result = { short: true };
    } else {
      const issues = new DiaryChecker(this.dict).check(text);
      this.result = { issues, xp: this.progress.addDiary(text, issues.length) };
      this.app.save();
    }
    this.app.render();
    return true;
  }
}
