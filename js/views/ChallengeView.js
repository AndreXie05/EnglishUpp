// Desafio de 60 segundos: acertar o máximo de palavras dos temas escolhidos no Jogo
class ChallengeView extends View {
  static SECONDS = 60;
  static MIN_WORDS = 10;

  constructor(app) {
    super(app);
    this.state = "intro";
  }

  get tab() { return "jogo"; }

  render() {
    if (this.state === "play") return this.playScreen();
    if (this.state === "result") return this.resultScreen();
    return this.introScreen();
  }

  get rule() { return "o máximo de palavras dos temas escolhidos"; }
  get heading() { return `${ChallengeView.SECONDS} segundos`; }

  introScreen() {
    const keys = this.keys();
    const best = this.progress.data[this.bestKey] || 0;
    const body = keys.length < ChallengeView.MIN_WORDS
      ? `<p style="margin:0">Escolhe temas com pelo menos ${ChallengeView.MIN_WORDS} palavras para jogares o desafio.</p>`
      : `<p style="margin:0">Tens ${ChallengeView.SECONDS} segundos para acertar ${this.rule}. Cada certa vale 1 XP. Errar não tira nada, mas passa à frente.</p>
         <p class="muted" style="margin:0">Recorde: ${best} certas</p>
         <div class="row"><button class="btn" data-action="cstart">Começar</button></div>`;
    return `<div><div class="eyebrow">Desafio</div><h1>${this.heading}</h1></div>
      <section class="panel">${body}</section>
      <div class="row"><button class="linkbtn" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div>`;
  }

  keys() {
    return GameView.words(this.app).map(w => w.key);
  }

  // Como varia de um desafio para outro (palavras ou verbos)
  get bestKey() { return "challengeBest"; }

  makeQuiz() {
    const T = Question.TYPES;
    return new Quiz(this.keys(), { dict: this.dict, progress: this.progress, practice: true, types: [T.EN_PT, T.PT_EN, T.IPA, T.IPA_EN], max: 150 });
  }

  // Pergunta no ecrã: texto de topo, enunciado e opções { key, label }
  question(q) {
    const T = Question.TYPES, w = q.word;
    const [eyebrow, text] = {
      [T.EN_PT]: ["O que significa?", w.en], [T.PT_EN]: ["Como se diz em inglês?", w.pt],
      [T.IPA]: ["Qual é a pronúncia certa?", w.en], [T.IPA_EN]: ["Que palavra tem esta pronúncia?", `/${w.ipa}/`],
    }[q.type];
    return { eyebrow, text, options: q.options.map(o => ({ key: o.key, label: GameView.label(q, o) })) };
  }

  start() {
    this.quiz = this.makeQuiz();
    this.state = "play";
    this.started = Date.now();
    this.combo = 0;
    this.bestCombo = 0;
    this.timer = setInterval(() => this.tick(), 200);
    this.app.render();
  }

  left() {
    return Math.max(0, ChallengeView.SECONDS - (Date.now() - this.started) / 1000);
  }

  // Atualiza só o relógio, sem refazer o ecrã
  tick() {
    if (this.app.view !== this || this.state !== "play") return clearInterval(this.timer);
    const left = this.left();
    const t = document.getElementById("ctime"), b = document.getElementById("cbar");
    if (t) t.textContent = `${Math.ceil(left)} s`;
    if (b) b.style.width = `${left / ChallengeView.SECONDS * 100}%`;
    if (left <= 0) this.end();
  }

  playScreen() {
    const q = this.quiz.current, a = this.quiz.answered, v = this.question(q);
    const opts = v.options.map(o => {
      const state = a ? (q.isCorrect(o.key) ? "ok" : o.key === a.given ? "no" : "") : "";
      return `<button class="opt ${state}" data-action="cpick" data-v="${this.esc(o.key)}" ${a ? "disabled" : ""}>${this.esc(o.label)}</button>`;
    }).join("");
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${this.quiz.score} certas${this.combo >= 3 ? ` · combo ×${this.combo}` : ""}</span><strong id="ctime">${Math.ceil(this.left())} s</strong></div>
      <div class="bar"><i id="cbar" style="width:${this.left() / ChallengeView.SECONDS * 100}%"></i></div>
      <section class="panel" style="gap:16px"><div class="eyebrow">${this.esc(v.eyebrow)}</div><div class="q">${this.esc(v.text)}</div><div class="opts">${opts}</div></section>`;
  }

  pick(value) {
    if (this.quiz.answered || this.state !== "play") return;
    this.quiz.answer(value);
    this.combo = this.quiz.answered.ok ? this.combo + 1 : 0;
    this.bestCombo = Math.max(this.bestCombo, this.combo);
    this.app.render();
    setTimeout(() => this.advance(), this.quiz.answered.ok ? 350 : 800);
  }

  // Passa à pergunta seguinte, sem repetir as que são "nova tentativa"
  advance() {
    if (this.state !== "play") return;
    do { this.quiz.index++; } while (!this.quiz.finished && this.quiz.current.retry);
    this.quiz.answered = null;
    if (this.quiz.finished || this.left() <= 0) return this.end();
    if (this.app.view === this) this.app.render();
  }

  end() {
    if (this.state !== "play") return;
    clearInterval(this.timer);
    this.state = "result";
    this.right = this.quiz.score;
    this.wrong = this.quiz.wrong.length;
    this.record = this.right > (this.progress.data[this.bestKey] || 0);
    this.xp = this.progress.addChallenge(this.right, this.bestKey);
    this.app.save();
    if (this.app.view === this) this.app.render();
  }

  resultScreen() {
    return `<div><div class="eyebrow">Tempo!</div><h1>${this.record && this.right ? "Novo recorde!" : "Desafio terminado"}</h1></div>
      <div class="stats"><div class="stat"><b>${this.right}</b><span>certas</span></div><div class="stat"><b>${this.wrong}</b><span>erradas</span></div><div class="stat"><b>×${this.bestCombo}</b><span>melhor combo</span></div><div class="stat"><b>+${this.xp}</b><span>XP</span></div></div>
      <div class="row"><button class="btn" data-action="cagain">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div>`;
  }

  onAction(action, value) {
    switch (action) {
      case "cstart":
      case "cagain":
        this.start();
        return true;
      case "cpick":
        this.pick(value);
        return true;
    }
    if (action === "nav") clearInterval(this.timer);
    return false;
  }
}
