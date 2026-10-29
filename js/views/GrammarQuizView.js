// Exercícios de uma lição de gramática, um de cada vez
class GrammarQuizView extends View {
  constructor(app, quiz) {
    super(app);
    this.quiz = quiz;
  }

  get tab() { return "gramatica"; }

  get dictOk() { return !this.quiz.lesson.exam; }

  render() {
    return this.quiz.finished ? this.resultScreen() : this.questionScreen();
  }

  afterRender() {
    if (this.quiz.answered) document.getElementById("nextbtn")?.focus();
    else document.getElementById("gw")?.focus();
  }

  // Frase com o espaço "___" desenhado como linha
  sentence(q) {
    return this.esc(q).replace(/_{3,}/g, `<span class="blank"></span>`);
  }

  questionScreen() {
    const qz = this.quiz, x = qz.current, a = qz.answered;
    const hint = x.t === "f" ? `<div class="muted">Palavra de base: <b>${this.esc(x.h)}</b></div>`
      : x.t === "r" && x.h ? `<div class="muted">Começa com: <b>${this.esc(x.h)}</b></div>`
      : x.t === "w" && x.h ? `<div class="muted">${this.esc(x.h)}</div>` : "";
    const area = x.t === "c" ? this.options(x) : this.writeForm(a, x.t === "r");
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${this.esc(qz.lesson.pt)} · ${qz.index + 1} de ${qz.items.length}</span><button class="linkbtn" data-action="gexit">Sair</button></div>
      <div class="bar"><i style="width:${qz.progressPercent}%"></i></div>
      ${x.passage ? `<section class="panel reading"><h2>${this.esc(x.passage.title)}</h2>${x.passage.paragraphs.map(p => `<p style="margin:0">${this.esc(p)}</p>`).join("")}</section>` : ""}
      <section class="panel quizcard" style="gap:16px"><div class="eyebrow">${GrammarExercise.KINDS[x.t]}</div>
        <p class="sentence">${this.sentence(x.q)}</p>${hint}${area}${a ? this.feedback(x, a) : ""}</section>`;
  }

  options(x) {
    const a = this.quiz.answered;
    if (!x.shown) x.shown = x.options;
    return `<div class="opts">${x.shown.map(o => {
      const state = a ? (o === x.a ? "ok" : o === a.given ? "no" : "") : "";
      return `<button class="opt ${state}" data-action="gpick" data-v="${this.esc(o)}" ${a ? "disabled" : ""}>${this.esc(o)}</button>`;
    }).join("")}</div>`;
  }

  writeForm(a, long) {
    return `<form id="gform" class="row" style="flex-wrap:nowrap"><input type="text" id="gw" autocomplete="off" autocapitalize="off" spellcheck="false" ${a ? "disabled" : ""} value="${a ? this.esc(a.given) : ""}" aria-label="Resposta"${long ? ' style="flex:1"' : ""}><button class="btn" ${a ? "disabled" : ""}>OK</button></form>`;
  }

  feedback(x, a) {
    return `<div class="fb ${a.ok ? "ok" : "no"}">${a.ok ? "Certo!" : "Errado."}</div>
      <div class="answer">${a.ok ? "" : `<div><span class="eyebrow">Resposta certa</span> <span class="pt">${this.esc(x.answers[0])}</span></div>`}
        ${x.why ? `<div class="muted">${this.esc(x.why)}</div>` : ""}</div>
      <div class="row"><button class="btn" id="nextbtn" data-action="gnext">Continuar</button></div>`;
  }

  resultScreen() {
    const qz = this.quiz, pct = qz.percent;
    const exam = qz.lesson.exam;
    const msg = exam ? (pct >= LevelExam.PASS ? `Passaste no exame ${qz.lesson.level}!` : `Ainda não: precisas de ${LevelExam.PASS}% para passar.`) : pct >= 90 ? "Excelente!" : pct >= 70 ? "Muito bem!" : pct >= 50 ? "Bom esforço!" : "Relê a explicação e tenta outra vez.";
    const review = qz.wrong.length ? `<section class="panel"><h2>Para rever</h2>${qz.wrong.map(x =>
      `<div class="ex">${this.sentence(x.q)}<br><b>${this.esc(x.answers[0])}</b>${x.why ? `<br><i>${this.esc(x.why)}</i>` : ""}</div>`).join("")}</section>` : "";
    return `<div><div class="eyebrow">${this.esc(qz.lesson.pt)}</div><h1>${msg}</h1></div>
      <div class="stats"><div class="stat"><b>${qz.score}/${qz.items.length}</b><span>certas</span></div><div class="stat"><b>${pct}%</b><span>acerto</span></div><div class="stat"><b>${this.progress.streak()}</b><span>dias seguidos</span></div></div>
      ${review}
      <div class="row"><button class="btn" data-action="gagain">Repetir</button><button class="btn ghost" data-action="gexit">${this.esc(qz.lesson.backLabel || "Voltar à lição")}</button></div>`;
  }

  submit(value) {
    if (this.quiz.answered || !String(value).trim()) return;
    const x = this.quiz.current;
    this.quiz.answer(value);
    this.progress.recordError(x.src, this.quiz.answered.ok);
    this.app.save();
    this.app.render();
  }

  onSubmit(form) {
    if (form.id !== "gform") return false;
    this.submit(document.getElementById("gw").value);
    return true;
  }

  finish() {
    const l = this.quiz.lesson;
    if (l.daily) this.progress.addDaily(this.quiz.percent);
    else if (l.exam) this.progress.addExam(l.level, this.quiz.percent);
    else if (l.review) this.progress.addReview(this.quiz.percent);
    else this.progress.addGrammar(l.id, this.quiz.percent);
    this.app.save();
  }

  onAction(action, value) {
    switch (action) {
      case "gpick":
        this.submit(value);
        return true;
      case "gnext":
        this.quiz.next();
        if (this.quiz.finished) this.finish();
        this.app.render();
        return true;
      case "gagain":
        {
          const lesson = this.quiz.lesson.fresh ? this.quiz.lesson.fresh() : this.quiz.lesson;
          if (lesson) this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(lesson)));
          else this.app.go("teste");
        }
        return true;
      case "gexit":
        if (this.quiz.lesson.back) this.quiz.lesson.back(this.app);
        else this.app.show(new GrammarView(this.app, null, this.quiz.lesson));
        return true;
    }
    return false;
  }
}
