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
      return `<section class="panel tcardx" style="--tc:#E5484D"><div class="tchead"><span class="tcicon" aria-hidden="true">🎯</span><h2>Treino dos teus erros</h2></div>
        <p class="muted" style="margin:0">Ainda não tens erros por rever. Quando falhares uma palavra, um exercício de gramática ou uma pergunta de um texto, aparece aqui.</p></section>`;
    }
    const c = er.counts(this.scope);
    const levels = ProgressView.LEVELS.map(([code]) => [code, er.levelCount(code)]).filter(([, n]) => n);
    const tab = (code, label, n) => `<button data-action="elevel" data-v="${code}" aria-pressed="${(this.level || "") === code}">${label}<span class="tabcount">${n}</span></button>`;
    const groups = er.groups(this.level);
    // Temas com erros neste nível: uma grelha de cartõezinhos (o nome longo corta-se em duas linhas), sem ter de arrastar
    const total = groups.reduce((n, g) => n + g.n, 0);
    const icon = g => g.id.startsWith("g:") ? "📐" : g.label.startsWith("Texto:") ? "📄" : ThemesView.icon(this.dict.theme(g.id) || { en: "" });
    const chips = this.level ? `<div class="egroups" role="group" aria-label="Tema">${[
      `<button class="egroup all" data-action="egroup" data-v="" aria-pressed="${!this.group}"><span class="egicon" aria-hidden="true">🎯</span><span class="egname">Todos os temas</span><span class="egn">${total}</span></button>`,
      ...groups.map(g => `<button class="egroup" data-action="egroup" data-v="${this.esc(g.id)}" aria-pressed="${this.group === g.id}" title="${this.esc(g.label)}">
        <span class="egicon" aria-hidden="true">${icon(g)}</span><span class="egname">${this.esc(g.label.replace(/^(Gramática|Texto): /, ""))}</span><span class="egn">${g.n}</span></button>`)].join("")}</div>` : "";
    const buttons = [];
    if (c.w) buttons.push(`<button class="btn" data-action="trainWords">Palavras (${c.w})</button>`);
    if (c.g + c.r) buttons.push(`<button class="btn ${c.w ? "ghost" : ""}" data-action="trainGrammar">Gramática e textos (${c.g + c.r})</button>`);
    return `<section class="panel tcardx" style="--tc:#E5484D"><div class="tchead"><span class="tcicon" aria-hidden="true">🎯</span><h2>Treino dos teus erros</h2><span class="tcbig">${er.levelCount(null)}</span></div>
      <div class="ecounts"><span>📚 ${c.w} palavra${c.w === 1 ? "" : "s"}</span><span>📐 ${c.g} de gramática</span><span>📄 ${c.r} de textos</span></div>
      <p class="muted" style="margin:0">Cada treino é novo: escolho ao acaso entre as perguntas que ainda falhas. Cada erro só sai da lista quando acertas ${Progress.ERROR_CLEAR} vezes seguidas; se voltares a falhar, a contagem recomeça.</p>
      <div class="tabs lvtabs" role="group" aria-label="Nível">${tab("", "Todos", er.levelCount(null))}${levels.map(([code, n]) => tab(code, code, n)).join("")}</div>
      ${chips}
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
      ? `<div class="weakgrid">${list.map(s => {
          const pct = Math.round(s.rate * 100);
          return `<div class="weakrow"><div class="wkring" style="--p:${pct}"><b>${pct}%</b></div>
            <div class="wktext"><span class="eyebrow">${kinds[s.kind]}</span><b>${this.esc(s.label)}</b><span class="muted" style="font-size:.8rem">erras em ${s.n} respostas</span></div>
            <button class="btn ghost small" data-action="weakdrill" data-v="${s.kind}:${this.esc(s.id)}">Treinar</button></div>`;
        }).join("")}</div>`
      : `<p class="muted" style="margin:0">Ainda não há dados suficientes. Faz alguns exercícios e testes; quando houver um padrão de erros, aparece aqui.</p>`;
    return `<section class="panel tcardx" style="--tc:#F5A524"><div class="tchead"><span class="tcicon" aria-hidden="true">🔍</span><div><div class="eyebrow">Análise</div><h2>Os teus pontos fracos</h2></div></div>${body}</section>`;
  }

  render() {
    const due = this.progress.dueKeys(this.dict).length;
    const learned = this.progress.wordCount;
    let card;
    if (due) {
      card = `<section class="panel lead hero thero"><span class="heroicon" aria-hidden="true">✅</span><div class="tbig">${due}</div>
        <h2>palavra${due > 1 ? "s" : ""} para testar hoje</h2>
        <p class="muted" style="margin:0">Escolher a tradução, ouvir e escolher, e escrever a palavra em inglês. Cada acerto empurra a palavra para mais longe.</p>
        <div class="row"><button class="btn" data-action="startTest">Começar o teste ▶</button></div></section>`;
    } else if (learned) {
      card = `<section class="panel hero thero done"><span class="heroicon" aria-hidden="true">🎉</span><h2>Nada para testar hoje</h2>
        <p class="muted" style="margin:0">Já fizeste a revisão de hoje. Podes praticar todas as palavras na mesma.</p>
        <div class="row"><button class="btn ghost" data-action="practiceAll">Praticar todas (${learned})</button></div></section>`;
    } else {
      card = `<section class="panel"><h2>Nada para testar hoje</h2>
        <p class="muted" style="margin:0">Estuda uma lição primeiro. O teste aparece no dia seguinte.</p>
        <div class="row"><button class="btn" data-action="nav" data-v="hoje">Ir para a lição</button></div></section>`;
    }
    const next = learned && !due ? this.progress.nextDueDate() : null;
    return `<div><div class="eyebrow">Revisão espaçada</div><h1>Teste</h1></div>${card}
      ${learned ? `<div class="stats tstats"><div class="stat st2"><b>📚 ${learned}</b><span>palavras no teste</span></div><div class="stat st4"><b>⭐ ${this.progress.masteredCount}</b><span>já dominadas</span></div>
        <div class="stat st3"><b>📅 ${next ? this.esc(DateUtils.format(next)) : due}</b><span>${next ? "próximo teste" : "para hoje"}</span></div></div>` : ""}
      ${this.errorsCard()}${this.weakCard()}`;
  }
}
