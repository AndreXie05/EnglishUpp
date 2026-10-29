// Ecrã do teste diário (antes de começar)
class TestView extends View {
  constructor(app) {
    super(app);
    this.level = null; // nível escolhido no treino de erros
    this.group = null; // tema ou lição de gramática escolhido
  }

  get tab() { return "teste"; }

  get scope() {
    return { level: this.level, group: this.group };
  }

  get review() {
    return new ErrorReview(this.progress, this.dict, this.app.grammar, this.app.texts);
  }

  // Treino dos erros: palavras, gramática e perguntas dos textos que ainda falhas, por nível ou por tema
  errorsCard() {
    const er = this.review;
    if (!er.items.length) {
      return `<section class="panel"><h2>Treino dos teus erros</h2>
        <p class="muted" style="margin:0">Ainda não tens erros por rever. Quando falhares uma palavra, um exercício de gramática ou uma pergunta de um texto, aparece aqui.</p></section>`;
    }
    const c = er.counts(this.scope);
    const levels = ProgressView.LEVELS.map(([code]) => [code, er.levelCount(code)]).filter(([, n]) => n);
    const tab = (code, label, n) => `<button data-action="elevel" data-v="${code}" aria-pressed="${(this.level || "") === code}">${label}<span class="tabcount">${n}</span></button>`;
    const groups = er.groups(this.level);
    const chips = this.level ? `<div class="tabs" role="group" aria-label="Tema">${[`<button data-action="egroup" data-v="" aria-pressed="${!this.group}">Todos os temas</button>`,
      ...groups.map(g => `<button data-action="egroup" data-v="${this.esc(g.id)}" aria-pressed="${this.group === g.id}">${this.esc(g.label)}<span class="tabcount">${g.n}</span></button>`)].join("")}</div>` : "";
    const buttons = [];
    if (c.w) buttons.push(`<button class="btn" data-action="trainWords">Palavras (${c.w})</button>`);
    if (c.g + c.r) buttons.push(`<button class="btn ${c.w ? "ghost" : ""}" data-action="trainGrammar">Gramática e textos (${c.g + c.r})</button>`);
    return `<section class="panel"><h2>Treino dos teus erros</h2>
      <p class="muted" style="margin:0">Cada treino é novo: escolho ao acaso entre as perguntas que ainda falhas. Uma pergunta sai da lista quando acertas algumas vezes seguidas.</p>
      <div class="tabs" role="group" aria-label="Nível">${tab("", "Todos", er.levelCount(null))}${levels.map(([code, n]) => tab(code, code, n)).join("")}</div>
      ${chips}
      <div class="muted">${c.w} palavra${c.w === 1 ? "" : "s"} · ${c.g} de gramática · ${c.r} de textos</div>
      <div class="row">${buttons.join("")}</div></section>`;
  }

  onAction(action, value) {
    switch (action) {
      case "elevel":
        this.level = value || null;
        this.group = null;
        break;
      case "egroup":
        this.group = value || null;
        break;
      case "trainWords":
        this.app.startQuiz(this.review.wordKeys(this.scope), false, null, null, true);
        return true;
      case "weakdrill": {
        const [kind, id] = value.split(/:(.*)/s);
        const ws = new WeakSpots(this.progress, this.dict);
        const spot = ws.list(50).find(s => s.kind === kind && s.id === id);
        if (spot) this.app.startQuiz(ws.keys(spot), true, spot.kind === "type" ? [spot.id] : null);
        return true;
      }
      case "trainGrammar": {
        const lesson = this.review.reviewLesson(this.scope);
        if (lesson) this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(lesson)));
        return true;
      }
      default:
        return false;
    }
    this.app.render();
    return true;
  }

  // Os teus pontos fracos: o que mais falhas, com um treino à medida
  weakCard() {
    const ws = new WeakSpots(this.progress, this.dict), list = ws.list();
    const kinds = { pos: "Classe de palavra", theme: "Tema", type: "Tipo de exercício" };
    const body = list.length
      ? list.map(s => `<div class="weakrow"><div class="row" style="justify-content:space-between;width:100%"><span><span class="eyebrow">${kinds[s.kind]}</span><br><b>${this.esc(s.label)}</b></span>
          <button class="btn ghost small" data-action="weakdrill" data-v="${s.kind}:${this.esc(s.id)}">Treinar</button></div>
          <div class="meter weakbar"><i style="width:${Math.round(s.rate * 100)}%"></i></div>
          <span class="muted" style="font-size:.85rem">Erras ${Math.round(s.rate * 100)}% (em ${s.n} respostas)</span></div>`).join("")
      : `<p class="muted" style="margin:0">Ainda não há dados suficientes. Faz alguns exercícios e testes; quando houver um padrão de erros, aparece aqui.</p>`;
    return `<section class="panel"><div class="eyebrow">Análise</div><h2>Os teus pontos fracos</h2>${body}</section>`;
  }

  render() {
    const due = this.progress.dueKeys(this.dict).length;
    const learned = this.progress.wordCount;
    let card;
    if (due) {
      card = `<section class="panel lead quizcard"><h2>${due} palavra${due > 1 ? "s" : ""} para hoje</h2>
        <p class="muted" style="margin:0">Escolher a tradução, ouvir e escolher, e escrever a palavra em inglês.</p>
        <div class="row"><button class="btn" data-action="startTest">Começar</button></div></section>`;
    } else if (learned) {
      card = `<section class="panel"><h2>Nada para testar hoje</h2>
        <p class="muted" style="margin:0">Já fizeste a revisão de hoje. Podes praticar todas as palavras na mesma.</p>
        <div class="row"><button class="btn ghost" data-action="practiceAll">Praticar todas (${learned})</button></div></section>`;
    } else {
      card = `<section class="panel"><h2>Nada para testar hoje</h2>
        <p class="muted" style="margin:0">Estuda uma lição primeiro. O teste aparece no dia seguinte.</p>
        <div class="row"><button class="btn" data-action="nav" data-v="hoje">Ir para a lição</button></div></section>`;
    }
    return `<div><div class="eyebrow">Revisão espaçada</div><h1>Teste</h1></div>${card}${this.weakCard()}${this.errorsCard()}`;
  }
}
