// Uma lição: palavras, leitura curta, texto longo com perguntas, exercícios e escrita
class LessonView extends View {
  static TABS = [
    ["palavras", "1. Palavras"], ["leitura", "2. Leitura"], ["texto", "3. Texto"],
    ["exercicios", "4. Exercícios"], ["escrita", "5. Traduzir"],
  ];

  // [ação, título, descrição, tipos de pergunta (null = todos)]
  static EXERCISES = [
    ["fill", "Frases: escolhe a palavra", "Uma frase com um espaço em branco. Escolhe a palavra certa; às vezes vês também a tradução da frase.", [Question.TYPES.FILL]],
    ["fillWrite", "Frases: escreve a palavra", "A mesma ideia, mas és tu que escreves a palavra que falta; às vezes com a tradução da frase como ajuda.", [Question.TYPES.FILL_WRITE]],
    ["match", "Ligar palavra e tradução", "Junta palavras e traduções, em inglês→português, ao contrário, ou palavra→frase.", null],
    ["matchIpa", "Ligar palavra e pronúncia", "Junta cada palavra à transcrição /…/ que mostra como se diz, ou ao contrário.", null],
    ["translation", "Escolher a tradução", "Perguntas variadas: o que significa, a palavra numa frase e a tradução de frases inteiras.", [Question.TYPES.EN_PT, Question.TYPES.PT_EN]],
    ["ipa", "Pronúncia certa", "Liga a palavra à pronúncia /…/, e também ao contrário: vês a pronúncia e escolhes a palavra.", [Question.TYPES.IPA]],
    ["write", "Escrever a palavra", "Escreves a palavra em inglês a partir da tradução ou da pronúncia /…/.", [Question.TYPES.WRITE]],
    ["mixed", "Teste misto", "Um pouco de tudo, como no teste diário.", null],
  ];

  constructor(app, theme, section) {
    super(app);
    this.theme = theme;
    this.section = section || "palavras";
    this.showTranslation = false;
    this.wordIndex = 0; // palavra mostrada no separador Palavras
    this.wordList = false; // ver todas as palavras numa lista
    // respostas às perguntas do texto: índice da pergunta → índice da opção (guardadas, para voltares a vê-las)
    this.answers = { ...(this.progress.data.storyAns[theme.id] || {}) };
    this.qi = 0; // pergunta do texto mostrada (igual ao total = resultado)
    this.storyRecorded = !!theme.story && Object.keys(this.answers).length === theme.story.questions.length;
    if (theme.story) this.qi = this.storyRecorded ? theme.story.questions.length : Math.max(0, theme.story.questions.findIndex((q, i) => this.answers[i] === undefined));
  }

  get tab() { return "temas"; }

  get dictOk() { return true; }

  render() {
    const t = this.theme;
    const body = {
      palavras: () => this.wordsSection(),
      leitura: () => this.readingSection(),
      texto: () => this.storySection(),
      exercicios: () => this.exercisesSection(),
      escrita: () => this.writingSection(),
    }[this.section]();
    return `<div><button class="linkbtn" data-action="nav" data-v="temas">← Temas</button></div>
      <div><div class="eyebrow">Lição ${t.number} · Nível ${t.level} · ${this.esc(t.en)}</div><h1>${this.esc(t.pt)}</h1></div>
      ${this.progressBanner()}
      <div class="tabs">${this.tabs().map(([k, label]) =>
        `<button data-action="section" data-v="${k}" aria-pressed="${this.section === k}">${label}</button>`).join("")}</div>
      ${body}
      ${this.finishSection()}`;
  }

  // Progresso da lição: sobe quando acertas, mantém-se quando erras; ao concluir aparece a faixa “Concluído”
  progressBanner() {
    const p = this.progress, id = this.theme.id, prog = p.lessonProgress(id), n = p.partsDone(id), total = Progress.LESSON_PARTS.length;
    if (p.lessonComplete(id)) {
      return `<div class="fb ok lessondone">✓ <b>Concluído</b> · ${prog}% · Podes repetir qualquer exercício quando quiseres.</div>`;
    }
    return `<div class="lessonprog"><div class="row" style="justify-content:space-between"><span class="muted">Progresso da lição</span><b>${prog}%</b></div>
      <div class="meter" role="progressbar" aria-valuenow="${prog}" aria-valuemin="0" aria-valuemax="100"><i style="width:${prog}%"></i></div>
      <span class="muted" style="font-size:.85rem">${n} de ${total} partes feitas</span></div>`;
  }

  // Sem leitura curta (níveis B1 a C2), o separador "Leitura" não aparece
  tabs() {
    return LessonView.TABS.filter(([k]) => k !== "leitura" || this.theme.text.length);
  }

  wordEntry(w, i) {
    return `<article class="entry"><span class="num">${i + 1}</span><div class="body">
        <div class="hw"><h3>${this.esc(w.en)}</h3><span class="ipa">/${this.esc(w.ipa)}/</span><span class="pos">${this.esc(w.pos)}</span></div>
        <div class="pt">${this.esc(w.pt)}</div>
        <div class="ex">${this.esc(w.exEn)}<br><i>${this.esc(w.exPt)}</i></div>
        ${this.cambridgeLink(w)}
      </div></article>`;
  }

  // Uma palavra de cada vez: setas do ecrã ou do teclado (← →) para passar à anterior ou à seguinte
  wordsSection() {
    const words = this.theme.words, n = words.length;
    const intro = `<p class="muted" style="margin:0">Lê cada palavra em voz alta duas ou três vezes. A transcrição /…/ mostra como se diz. Para ouvir a pronúncia, abre o link do Cambridge.</p>`;
    const toggle = `<div class="row"><button class="linkbtn" data-action="wordlist">${this.wordList ? "Ver uma palavra de cada vez" : "Ver todas em lista"}</button></div>`;
    if (this.wordList) return `${intro}${toggle}<div class="entries">${words.map((w, i) => this.wordEntry(w, i)).join("")}</div>`;
    const i = Math.min(this.wordIndex, n - 1);
    return `${intro}
      <div class="wordnav"><button class="btn ghost" data-action="wprev" aria-label="Palavra anterior" ${i === 0 ? "disabled" : ""}>←</button>
        <span class="muted">${i + 1} de ${n}</span>
        <button class="btn" data-action="wnext" aria-label="Palavra seguinte" ${i === n - 1 ? "disabled" : ""}>→</button></div>
      <div class="bar"><i style="width:${Math.round((i + 1) / n * 100)}%"></i></div>
      <div class="entries wordone">${this.wordEntry(words[i], i)}</div>
      <p class="muted" style="margin:0;font-size:.85rem">Podes usar as setas ← → do teclado.</p>${toggle}`;
  }

  moveWord(d) {
    const i = Math.max(0, Math.min(this.theme.words.length - 1, this.wordIndex + d));
    if (i === this.wordIndex) return;
    this.wordIndex = i;
    this.app.render();
  }

  onKey(e) {
    if (this.section === "texto" && this.theme.story) {
      const k = e.key, n = Number(k), qs = this.theme.story.questions;
      if (k === "ArrowRight" || (k === "Enter" && e.target.tagName !== "BUTTON" && this.answers[this.qi] !== undefined)) this.onAction("qnext");
      else if (k === "ArrowLeft") this.onAction("qprev");
      else if (n >= 1 && n <= 4 && this.qi < qs.length && this.answers[this.qi] === undefined && qs[this.qi].options[n - 1] !== undefined) {
        this.onAction("storyPick", String(n - 1), { dataset: { q: String(this.qi) } });
      }
      return;
    }
    if (this.section !== "palavras" || this.wordList) return;
    if (e.key === "ArrowRight") { this.moveWord(1); e.preventDefault(); }
    else if (e.key === "ArrowLeft") { this.moveWord(-1); e.preventDefault(); }
  }

  readingSection() {
    return `<div class="row"><button class="btn ghost small" data-action="toggleTranslation">${this.showTranslation ? "Esconder" : "Mostrar"} tradução</button></div>
      <p class="muted" style="margin:0;font-size:.9rem">Lê primeiro sem tradução. Se não souberes uma palavra, procura-a no <button class="linkbtn" data-action="nav" data-v="dicionario">Dicionário</button>.</p>
      <div class="panel reading">${this.theme.text.map(s => `<p class="sentence">${Sentence.render(s.en, this.theme)}${
        this.showTranslation ? `<span class="tr">${this.esc(s.pt)}</span>` : ""}</p>`).join("")}</div>`;
  }

  // Texto longo (200-300 palavras) e perguntas de escolha múltipla
  storySection() {
    const s = this.theme.story;
    const total = s.questions.length;
    const words = s.paragraphs.join(" ").split(/\s+/).length;
    return `<div class="panel reading"><div class="eyebrow">Texto · ${words} palavras</div><h2>${this.esc(s.title)}</h2>
        ${s.paragraphs.map(p => `<p class="sentence">${Sentence.render(p, this.theme)}</p>`).join("")}</div>
      <p class="muted" style="margin:0;font-size:.9rem">Lê o texto com calma. Se não souberes uma palavra, procura-a no <button class="linkbtn" data-action="nav" data-v="dicionario">Dicionário</button>. Depois responde às perguntas.</p>
      ${this.stepper(s.questions, this.answers, this.qi, "storyPick", "storyAgain")}`;
  }

  // Id da parte de cada exercício (o mesmo que usa addTest)
  static PART = { fill: "fill", fillWrite: "fill-write", match: "match-pt", matchIpa: "match-ipa", translation: "en-pt+pt-en", ipa: "ipa", write: "write", mixed: "all" };

  exercisesSection() {
    const item = ([k, title, desc]) => {
      const r = this.progress.partResult(this.theme.id, LessonView.PART[k]);
      if (!r) return `<button class="exitem" data-action="exercise" data-v="${k}"><strong>${title}</strong><span class="muted">${desc}</span></button>`;
      const pct = Math.round(r.score / r.total * 100);
      const ask = this.confirming === k
        ? `<div class="fb no">Tens a certeza? Vais fazer só este exercício de novo e o resultado guardado será substituído.</div>
           <div class="row"><button class="btn small" data-action="exercise" data-v="${k}">Sim, repetir</button><button class="btn ghost small" data-action="redoNo">Cancelar</button></div>`
        : `<div class="row"><button class="btn ghost small" data-action="redoAsk" data-v="${k}">Tentar de novo</button></div>`;
      const mine = r.log?.length
        ? `<details style="width:100%"><summary>Ver as minhas respostas</summary>${r.log.map(([q, given, right, ok]) =>
            `<div class="ans ${ok ? "ok" : "no"}"><span>${ok ? "✓" : "✗"} ${this.esc(q)}</span><span class="muted">${ok ? this.esc(given) : `${this.esc(given)} → <strong>${this.esc(right)}</strong>`}</span></div>`).join("")}</details>`
        : r.log === null && r.total ? `<span class="muted" style="font-size:.9rem">${r.total - r.score} erro${r.total - r.score === 1 ? "" : "s"} nas ligações.</span>` : "";
      // Faixa diagonal “Feito” só com 85% ou mais; a percentagem aparece sempre no canto
      return `<div class="exitem done ${Progress.band(pct)} ${pct >= 85 ? "gold" : ""}">${pct >= 85 ? `<span class="ribbon" aria-hidden="true">Feito</span>` : ""}
        <span class="exscore" aria-label="${pct}%">${pct}%</span><strong>${title}</strong>
        <span class="muted">${r.score} de ${r.total} respostas certas${pct >= 85 ? " · feito!" : ""}</span>${mine}${ask}</div>`;
    };
    return `<p class="muted" style="margin:0">Faz os exercícios pela ordem ou escolhe um. Contam como treino, não mexem no teste de amanhã. O resultado de cada um fica guardado até carregares em “Tentar de novo”.</p>
      <div class="exlist">${LessonView.EXERCISES.map(item).join("")}</div>`;
  }

  writingSection() {
    return `<div class="panel"><h2>Traduzir frases</h2>
      <p class="muted" style="margin:0">Treino de 10 frases em português para escreveres em inglês. Este tema tem ${this.app.sentences.count(this.theme.id)} frases. Ganhas pontos, e o treino fica no registo da semana.</p>
      <div class="row"><button class="btn" data-action="translate" data-v="${this.theme.id}">Treinar este tema</button></div></div>`;
  }

  finishSection() {
    const st = this.progress.lesson(this.theme.id);
    const n = this.progress.partsDone(this.theme.id), total = Progress.LESSON_PARTS.length;
    if (st) return `<p class="muted" style="margin:0">${n === total ? "Concluída." : `Em progresso (${n}/${total}): faz os exercícios e as perguntas do texto para ficar estudada.`} Palavras guardadas a ${this.esc(DateUtils.format(st.studied))}.</p>`;
    return `<div class="panel"><strong>Já estudaste as palavras e leste o texto?</strong>
      <div class="row"><button class="btn" data-action="finish">Terminei a lição</button></div>
      <span class="muted" style="font-size:.9rem">As ${this.theme.size} palavras entram no teste de amanhã.</span></div>`;
  }

  pickAnswer(index, option) {
    if (this.answers[index] !== undefined) return;
    this.answers[index] = option;
    this.progress.data.storyAns[this.theme.id] = { ...this.answers };
    const story = this.theme.story;
    this.progress.recordError({ kind: "r", ref: `${this.theme.id}:${index}` }, option === story.questions[index].answer);
    this.app.save();
    if (!this.storyRecorded && Object.keys(this.answers).length === story.questions.length) {
      const score = story.questions.filter((q, i) => this.answers[i] === q.answer).length;
      this.progress.addTest(score, story.questions.length, true, `${this.theme.id}:story`);
      this.app.save();
      this.storyRecorded = true;
    }
  }

  onAction(action, value, el) {
    switch (action) {
      case "section":
        this.section = value;
        this.app.render();
        return true;
      case "wprev":
        this.moveWord(-1);
        return true;
      case "wnext":
        this.moveWord(1);
        return true;
      case "wordlist":
        this.wordList = !this.wordList;
        this.app.render();
        return true;
      case "toggleTranslation":
        this.showTranslation = !this.showTranslation;
        this.app.render();
        return true;
      case "storyPick":
        this.pickAnswer(Number(el.dataset.q), Number(value));
        this.app.render();
        return true;
      case "qprev":
      case "qnext": {
        const qs = this.theme.story.questions;
        const n = this.stepIndex(this.qi, action === "qnext" ? 1 : -1, qs.length, this.answers[this.qi] !== undefined);
        if (n !== null) { this.qi = n; this.app.render(); }
        return true;
      }
      case "storyAgain":
        this.answers = {};
        this.qi = 0;
        delete this.progress.data.storyAns[this.theme.id];
        this.app.save();
        this.storyRecorded = false;
        this.app.render();
        window.scrollTo(0, 0);
        return true;
      case "redoAsk":
        this.confirming = value;
        this.app.render();
        return true;
      case "redoNo":
        this.confirming = null;
        this.app.render();
        return true;
      case "exercise": {
        this.confirming = null;
        if (value === "match" || value === "matchIpa") {
          this.app.show(new MatchView(this.app, this.theme, value === "matchIpa" ? "ipa" : "pt"));
          return true;
        }
        const ex = LessonView.EXERCISES.find(e => e[0] === value);
        this.app.startQuiz(this.theme.words.map(w => w.key), true, ex[3], this.theme);
        return true;
      }
      case "finish":
        this.progress.finishLesson(this.theme);
        this.app.save();
        this.app.toast.show("Lição concluída! O teste é amanhã.");
        this.app.go("hoje");
        return true;
    }
    return false;
  }
}
