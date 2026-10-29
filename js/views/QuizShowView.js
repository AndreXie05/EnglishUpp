// Quem quer ser milionário: 15 perguntas de dificuldade crescente, com 3 ajudas e dois patamares seguros
class QuizShowView extends View {
  static PRIZES = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
  static SAFE = [4, 9]; // depois destas perguntas, o prémio fica garantido
  static LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

  constructor(app) {
    super(app);
    this.state = "intro";
    const T = Question.TYPES;
    const studied = this.dict.themes.filter(t => this.progress.lesson(t.id));
    const idx = studied.length ? Math.max(...studied.map(t => QuizShowView.LEVELS.indexOf(t.level))) : 1;
    this.maxLevel = Math.max(1, idx);
    this.factory = new Quiz([this.dict.themes[0].words[0].key], { dict: this.dict, progress: this.progress, practice: true, types: [T.EN_PT, T.PT_EN, T.FILL], max: 1 });
  }

  get tab() { return "jogo"; }
  get dictOk() { return this.state === "play"; }

  newGame() {
    this.state = "play";
    this.i = 0;
    this.lifelines = { fifty: true, swap: true, dict: true };
    this.used = new Set();
    this.hidden = new Set();
    this.chosen = null;
    this.xp = 0;
    this.loadQuestion();
  }

  levelFor(i) {
    return QuizShowView.LEVELS[Math.min(this.maxLevel, Math.floor(i * (this.maxLevel + 1) / QuizShowView.PRIZES.length))];
  }

  loadQuestion() {
    const level = this.levelFor(this.i);
    const themes = this.dict.themes.filter(t => t.level === level);
    let q = null;
    for (let tries = 0; tries < 20 && !q; tries++) {
      const w = Utils.pick(themes.flatMap(t => t.words).filter(x => !this.used.has(x.key)));
      if (!w) break;
      const cand = this.factory.makeQuestion(w);
      if (cand.options.length === 4) q = cand;
    }
    this.q = q;
    if (q) this.used.add(q.word.key);
    this.hidden = new Set();
    this.chosen = null;
  }

  get prize() { return this.i > 0 ? QuizShowView.PRIZES[this.i - 1] : 0; }

  get safePrize() {
    const done = this.i - 1; // índice da última pergunta acertada
    const s = [...QuizShowView.SAFE].reverse().find(x => x <= done);
    return s === undefined ? 0 : QuizShowView.PRIZES[s];
  }

  euro(n) { return n.toLocaleString("pt-PT") + " €"; }

  render() {
    if (this.state === "intro") return this.intro();
    if (this.state === "over") return this.overScreen();
    const q = this.q, w = q.word, T = Question.TYPES, a = this.chosen !== null;
    let prompt;
    if (q.type === T.EN_PT) prompt = `<div class="eyebrow">O que significa?</div><div class="q">${this.esc(w.en)}</div><div class="ipa">/${this.esc(w.ipa)}/</div>`;
    else if (q.type === T.PT_EN) prompt = `<div class="eyebrow">Como se diz em inglês?</div><div class="q">${this.esc(w.pt)}</div>`;
    else prompt = `<div class="eyebrow">Escolhe a palavra que falta</div><p class="sentence">${Sentence.render(q.sentence.en, this.dict.theme(w.themeId), a ? null : w.key)}</p>`;
    const label = o => q.type === T.EN_PT ? o.pt : `${o.en}`;
    const opts = q.options.map((o, k) => {
      const gone = this.hidden.has(o.key);
      const state = a ? (o.key === w.key ? "ok" : o.key === this.chosen ? "no" : "") : "";
      return `<button class="opt qsopt ${state}" data-action="qspick" data-v="${this.esc(o.key)}" ${a || gone ? "disabled" : ""} style="${gone ? "visibility:hidden" : ""}"><b>${"ABCD"[k]}</b> ${this.esc(label(o))}</button>`;
    }).join("");
    const ladder = QuizShowView.PRIZES.map((p, k) => `<li class="${k === this.i ? "cur" : ""} ${k < this.i ? "past" : ""} ${QuizShowView.SAFE.includes(k) ? "safe" : ""}"><span>${k + 1}</span>${this.euro(p)}</li>`).reverse().join("");
    const help = `<div class="row" style="justify-content:center">
      <button class="btn ghost small" data-action="qsfifty" ${this.lifelines.fifty && !a ? "" : "disabled"}>50/50</button>
      <button class="btn ghost small" data-action="qsswap" ${this.lifelines.swap && !a ? "" : "disabled"}>Trocar pergunta</button>
      <button class="btn ghost small" data-action="qsdict" ${this.lifelines.dict && !a ? "" : "disabled"}>📖 Dicionário</button></div>`;
    const after = a ? (this.chosen === w.key
      ? `<div class="fb ok">Certo! Ganhaste ${this.euro(QuizShowView.PRIZES[this.i])}.</div><div class="row" style="justify-content:center"><button class="btn" data-action="qsnext">${this.i === QuizShowView.PRIZES.length - 1 ? "Ver resultado" : "Próxima pergunta →"}</button></div>`
      : `<div class="fb no">Errado. Era “${this.esc(label(w))}”.</div><div class="row" style="justify-content:center"><button class="btn" data-action="qsend">Ver resultado</button></div>`)
      : `<div class="row" style="justify-content:center"><button class="linkbtn" data-action="qswalk">Levantar ${this.euro(this.prize)}</button></div>`;
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Quem quer ser milionário · nível ${this.levelFor(this.i)}</span><span class="pill now">Pergunta ${this.i + 1} de 15</span></div>
      <div class="qsgrid"><section class="panel" style="gap:14px">${prompt}<div class="qsopts">${opts}</div>${help}${after}</section>
      <ol class="qsladder" aria-label="Escada de prémios">${ladder}</ol></div>`;
  }

  intro() {
    const best = this.progress.data.quizShowBest || 0;
    return `<div><div class="eyebrow">Jogo</div><h1>Quem quer ser milionário? 💶</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">15 perguntas, cada uma mais difícil. Tens 3 ajudas: <b>50/50</b>, <b>trocar a pergunta</b> e <b>dicionário</b>. Nas perguntas 5 e 10 o prémio fica garantido. As perguntas vão até ao nível ${QuizShowView.LEVELS[this.maxLevel]}, o mais alto que já estudaste.</p>
        <p class="muted" style="margin:0">Melhor prémio: ${this.euro(best)} (jogo a fingir)</p>
        <div class="row" style="justify-content:center"><button class="btn" data-action="qsstart">Começar</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  overScreen() {
    return `<div><div class="eyebrow">Fim do jogo</div><h1>${this.euro(this.final)}</h1></div>
      <section class="panel"><p style="margin:0">${this.won ? "🎉 És milionário! Acertaste as 15." : this.final ? "Bom jogo!" : "Desta vez não ficaste com prémio."} Respondeste bem a ${this.correct} pergunta${this.correct === 1 ? "" : "s"}. Ganhaste ${this.xp} XP.</p>
        <div class="row"><button class="btn" data-action="qsstart">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  finish(final, correct, won = false) {
    this.state = "over";
    this.final = final;
    this.correct = correct;
    this.won = won;
    this.xp = correct + (won ? 10 : 0);
    this.progress.data.quizShowBest = Math.max(final, this.progress.data.quizShowBest || 0);
    this.progress.addGame(this.xp);
    this.app.save();
  }

  onKey(e) {
    if (this.state !== "play" || this.chosen !== null) return;
    const k = "abcd".indexOf(e.key.toLowerCase());
    if (k >= 0 && this.q.options[k] && !this.hidden.has(this.q.options[k].key)) { this.onAction("qspick", this.q.options[k].key); }
  }

  onAction(action, value) {
    switch (action) {
      case "qsstart": this.newGame(); break;
      case "qspick": this.chosen = value; break;
      case "qsnext":
        if (this.i === QuizShowView.PRIZES.length - 1) return this.finish(QuizShowView.PRIZES[this.i], this.i + 1, true), this.app.render(), true;
        this.i++;
        this.loadQuestion();
        break;
      case "qsend": this.finish(this.safePrize, this.i); break;
      case "qswalk": this.finish(this.prize, this.i); break;
      case "qsfifty": {
        this.lifelines.fifty = false;
        const wrong = Utils.shuffle(this.q.options.filter(o => o.key !== this.q.word.key)).slice(0, 2);
        wrong.forEach(o => this.hidden.add(o.key));
        break;
      }
      case "qsswap": this.lifelines.swap = false; this.loadQuestion(); break;
      case "qsdict": this.lifelines.dict = false; this.app.dictDrawer.show(); return true;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
