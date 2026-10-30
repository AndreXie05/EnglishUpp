// Ecrã de perguntas de um teste ou treino
class QuizView extends View {
  constructor(app, quiz, backTheme = null) {
    super(app);
    this.quiz = quiz;
    this.backTheme = backTheme; // se veio de uma lição, o botão final volta para lá
  }

  get tab() { return this.backTheme ? "temas" : "teste"; }

  // Nos testes diários não há dicionário (daria as respostas); nos treinos há
  get dictOk() { return this.quiz.practice; }

  get label() {
    return this.quiz.practice ? "Treino" : "Teste";
  }

  render() {
    return this.quiz.finished ? this.resultScreen() : this.questionScreen();
  }

  afterRender() {
    if (this.quiz.answered) document.getElementById("nextbtn")?.focus();
    else document.getElementById("wr")?.focus();
  }

  // 1 a 4 escolhem a opção; Enter continua (se o botão "Continuar" já tem o foco, é ele que trata do Enter)
  onKey(e) {
    const qz = this.quiz;
    if (qz.finished) return;
    if (qz.answered) {
      if (e.key === "Enter" && document.activeElement?.id !== "nextbtn") this.onAction("next");
      return;
    }
    const q = qz.current, n = Number(e.key);
    if (!q.written && n >= 1 && n <= q.options.length) this.submit(q.options[n - 1].key);
  }

  questionScreen() {
    const q = this.quiz.current;
    const w = q.word;
    const a = this.quiz.answered;
    const theme = this.dict.theme(w.themeId);
    const T = Question.TYPES;
    let prompt, area;

    switch (q.type) {
      case T.EN_PT:
        prompt = `<div class="eyebrow">O que significa?</div><div class="q">${this.esc(w.en)}</div><div class="ipa">/${this.esc(w.ipa)}/</div>`;
        area = this.options(q, o => o.pt);
        break;
      case T.PT_EN:
        prompt = `<div class="eyebrow">Como se diz em inglês?</div><div class="q">${this.esc(w.pt)}</div>`;
        area = this.options(q, o => this.enRich(o), "", true);
        break;
      case T.FILL:
        prompt = `<div class="eyebrow">Escolhe a palavra que falta</div>${this.sentence(q, theme, a)}`;
        area = this.options(q, o => this.enRich(o), "", true);
        break;
      case T.FILL_WRITE:
        prompt = `<div class="eyebrow">Escreve a palavra que falta</div>${this.sentence(q, theme, a)}
          ${a ? "" : `<div class="muted">Dica: significa “${this.esc(w.pt)}” e tem ${w.en.length} letras</div>`}`;
        area = this.writeForm(a);
        break;
      case T.IPA:
        prompt = `<div class="eyebrow">Qual é a pronúncia certa?</div><div class="q">${this.esc(w.en)}</div><div class="muted">${this.esc(w.pt)}</div>`;
        area = this.options(q, o => `/${o.ipa}/`, "ipa-opt");
        break;
      case T.FILL_PT:
        prompt = `<div class="eyebrow">Escolhe a palavra que falta</div>${this.sentence(q, theme, a)}
          ${a ? "" : `<div class="muted">${this.esc(q.sentence.pt)}</div>`}`;
        area = this.options(q, o => this.enRich(o), "", true);
        break;
      case T.FILL_WRITE_PT:
        prompt = `<div class="eyebrow">Escreve a palavra que falta</div>${this.sentence(q, theme, a)}
          ${a ? "" : `<div class="muted">${this.esc(q.sentence.pt)}</div>`}<div class="muted">A palavra tem ${w.en.length} letras</div>`;
        area = this.writeForm(a);
        break;
      case T.CTX:
        prompt = `<div class="eyebrow">O que significa “${this.esc(w.en)}” nesta frase?</div><p class="sentence">${Sentence.render(w.exEn, theme, null)}</p>`;
        area = this.options(q, o => o.pt);
        break;
      case T.SENT_PT:
        prompt = `<div class="eyebrow">Escolhe a tradução da frase</div><p class="sentence">${Sentence.render(w.exEn, theme, null)}</p>`;
        area = this.options(q, o => o.exPt);
        break;
      case T.SENT_EN:
        prompt = `<div class="eyebrow">Como se diz em inglês?</div><div class="q" style="font-size:1.25rem">${this.esc(w.exPt)}</div>`;
        area = this.options(q, o => o.exEn);
        break;
      case T.IPA_EN:
        prompt = `<div class="eyebrow">Que palavra tem esta pronúncia?</div><div class="q ipa-big">/${this.esc(w.ipa)}/</div>`;
        area = this.options(q, o => this.esc(o.en), "", true);
        break;
      case T.WRITE_IPA:
        prompt = `<div class="eyebrow">Escreve a palavra com esta pronúncia</div><div class="q ipa-big">/${this.esc(w.ipa)}/</div><div class="muted">Significa “${this.esc(w.pt)}” e tem ${w.en.length} letras</div>`;
        area = this.writeForm(a);
        break;
      default:
        prompt = `<div class="eyebrow">Escreve em inglês</div><div class="q">${this.esc(w.pt)}</div><div class="muted">Dica: começa por “${this.esc(w.en[0])}” e tem ${w.en.length} letras</div>`;
        area = this.writeForm(a);
    }

    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${this.label} · ${this.quiz.index + 1} de ${this.quiz.queue.length}${q.retry ? " · nova tentativa" : ""}${this.quiz.adaptive ? ` · dificuldade ${this.quiz.levelLabel}` : ""}</span><button class="linkbtn" data-section="exercicios" data-action="${this.backTheme ? "open" : "nav"}" data-v="${this.backTheme ? this.backTheme.id : "hoje"}">Sair</button></div>
      <div class="bar"><i style="width:${this.quiz.progressPercent}%"></i></div>
      <section class="panel quizcard" style="gap:16px">${prompt}${area}${a ? this.feedback(w, a) : ""}</section>
      <p class="muted" style="margin:0;font-size:.85rem">${q.written ? "Escreve e carrega em Enter" : `Teclas 1 a ${q.options.length} para responder`} · Enter para continuar.</p>`;
  }

  // Frase do exemplo com um espaço no lugar da palavra (depois de responder, mostra-a completa)
  sentence(q, theme, answered) {
    const w = q.word, s = q.sentence || { en: w.exEn, pt: w.exPt };
    return `<p class="sentence">${Sentence.render(s.en, theme, answered ? null : w.key)}</p>`;
  }

  writeForm(a) {
    return `<form id="wform" class="row" style="flex-wrap:nowrap"><input type="text" id="wr" autocomplete="off" autocapitalize="off" spellcheck="false" ${a ? "disabled" : ""} value="${a ? this.esc(a.given) : ""}" aria-label="Resposta"><button class="btn" ${a ? "disabled" : ""}>OK</button></form>`;
  }

  // Certo: pronúncia e tradução. Errado: a palavra certa, a tradução e a pronúncia
  feedback(w, a) {
    return `<div class="fb ${a.ok ? "ok" : "no"}">${a.ok ? "Certo!" : "Errado."}</div>
      <div class="answer">
        <div class="hw"><h3>${this.esc(w.en)}</h3><span class="ipa">/${this.esc(w.ipa)}/</span><span class="pos">${this.esc(w.pos)}</span></div>
        <div><span class="eyebrow">Tradução</span> <span class="pt">${this.esc(w.pt)}</span></div>
        <div class="ex">${this.esc(w.exEn)}<br><i>${this.esc(w.exPt)}</i></div>
      </div>
      <div class="row"><button class="btn" id="nextbtn" data-action="next">Continuar</button>${this.cambridgeLink(w)}</div>`;
  }

  // Palavra inglesa com a pronúncia à frente (já com HTML escapado)
  enRich(o) {
    return `${this.esc(o.en)} <span class="ipa">/${this.esc(o.ipa)}/</span>`;
  }

  options(q, labelOf, cls = "", rich = false) {
    const a = this.quiz.answered;
    return `<div class="opts">${q.options.map(o => {
      let state = "";
      if (a) state = o.key === q.word.key ? "ok" : o.key === a.given ? "no" : "";
      return `<button class="opt ${cls} ${state}" data-action="pick" data-v="${this.esc(o.key)}" ${a ? "disabled" : ""}>${rich ? labelOf(o) : this.esc(labelOf(o))}</button>`;
    }).join("")}</div>`;
  }

  resultScreen() {
    const qz = this.quiz;
    const pct = qz.percent;
    const msg = pct >= 90 ? "Excelente!" : pct >= 70 ? "Muito bem!" : pct >= 50 ? "Bom esforço!" : "Continua, vais lá chegar!";
    const review = qz.wrong.length ? `<section class="panel"><h2>Revê estas palavras</h2>
        ${qz.wrong.map(w => `<div class="row"><strong>${this.esc(w.en)}</strong><span class="ipa">/${this.esc(w.ipa)}/</span><span class="muted">${this.esc(w.pt)}</span></div>`).join("")}
        ${qz.practice ? "" : `<span class="muted" style="font-size:.9rem">Estas voltam no teste de amanhã.</span>`}</section>` : "";
    const back = this.backTheme
      ? `<button class="btn" data-action="open" data-section="exercicios" data-v="${this.backTheme.id}">Voltar à lição</button>`
      : `<button class="btn" data-action="nav" data-v="hoje">Voltar ao início</button>`;
    return `<div><div class="eyebrow">${this.label} terminado</div><h1>${msg}</h1></div>
      <div class="stats"><div class="stat"><b>${qz.score}/${qz.total}</b><span>certas à primeira</span></div><div class="stat"><b>${pct}%</b><span>acerto</span></div><div class="stat"><b>${this.progress.streak()}</b><span>dias seguidos</span></div></div>
      ${review}
      <div class="row">${back}</div>`;
  }

  submit(value) {
    if (this.quiz.answered) return;
    this.quiz.answer(value);
    this.app.save();
    this.app.render();
  }

  onSubmit(form) {
    if (form.id !== "wform") return false;
    const value = document.getElementById("wr").value;
    if (value.trim()) this.submit(value);
    return true;
  }

  onAction(action, value) {
    if (action === "pick") {
      this.submit(value);
      return true;
    }
    if (action === "next") {
      this.quiz.next();
      this.app.save();
      this.app.render();
      return true;
    }
    return false;
  }
}
