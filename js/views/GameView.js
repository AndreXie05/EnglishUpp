// Jogo: nível e XP, desafio de 60 segundos, jogos e mapa de aventura
class GameView extends View {
  constructor(app, level = null) {
    super(app);
    this.level = level;
  }

  get tab() { return "jogo"; }

  get currentLevel() {
    return this.level || this.progress.nextTheme(this.dict)?.level || "A1";
  }

  render() {
    return `<div><div class="eyebrow">Jogo</div><h1>Nível ${this.progress.level}</h1></div>
      ${GameView.playerCard(this.progress)}
      <section class="panel"><div class="eyebrow">Desafio</div><h2>60 segundos</h2>
        <p class="muted" style="margin:0">Acerta o máximo de palavras antes de o tempo acabar. Recorde: ${this.progress.data.challengeBest || 0}.</p>
        <div class="row"><button class="btn" data-action="challenge">Jogar</button></div></section>
      ${this.gamesPanel()}
      ${this.mapPanel()}
      ${this.reminderPanel()}`;
  }

  // Temas dos jogos: todos (por defeito), só os estudados ou os de um nível
  static themes(app) {
    const scope = app.progress.data.gameScope || "all", all = app.dict.themes;
    if (scope === "all") return all;
    if (scope === "studied") return all.filter(t => app.progress.lesson(t.id));
    return all.filter(t => t.level === scope);
  }

  // Frases inventadas (fora das lições) para os jogos de frases: as dos jogos e as frases soltas; seguem o nível escolhido, ou todas
  static freeSentences(app) {
    const scope = app.progress.data.gameScope || "all";
    return PhrasesView.loose().filter(x => !/^[ABC][12]$/.test(scope) || x.level === scope).map(({ en, pt }) => ({ en, pt }));
  }

  static words(app) {
    return GameView.themes(app).flatMap(t => t.words);
  }

  // Gerador de perguntas para os jogos de perguntas e respostas (bomba, torre)
  static factory(app) {
    const T = Question.TYPES;
    return new Quiz([app.dict.themes[0].words[0].key], { dict: app.dict, progress: app.progress, practice: true, types: GameView.TYPES(), max: 1 });
  }

  // Tipos de pergunta dos jogos de perguntas: palavras, pronúncia, palavra numa frase e frases inteiras
  static TYPES() {
    const T = Question.TYPES;
    return [T.EN_PT, T.PT_EN, T.FILL, T.FILL_PT, T.IPA, T.IPA_EN, T.CTX, T.SENT_PT, T.SENT_EN];
  }

  // Enunciado de uma pergunta de escolha (depois de responder, a frase aparece completa)
  static prompt(view, q, answered) {
    const w = q.word, T = Question.TYPES, theme = view.dict.theme(w.themeId), s = q.sentence || { en: w.exEn, pt: w.exPt };
    switch (q.type) {
      case T.EN_PT: return `<div class="eyebrow">O que significa?</div><div class="q">${view.esc(w.en)}</div><div class="ipa">/${view.esc(w.ipa)}/</div>`;
      case T.PT_EN: return `<div class="eyebrow">Como se diz em inglês?</div><div class="q">${view.esc(w.pt)}</div>`;
      case T.IPA: return `<div class="eyebrow">Qual é a pronúncia certa?</div><div class="q">${view.esc(w.en)}</div><div class="muted">${view.esc(w.pt)}</div>`;
      case T.IPA_EN: return `<div class="eyebrow">Que palavra tem esta pronúncia?</div><div class="q ipa-big">/${view.esc(w.ipa)}/</div>`;
      case T.CTX: return `<div class="eyebrow">O que significa “${view.esc(w.en)}” nesta frase?</div><p class="sentence">${Sentence.render(s.en, theme, null)}</p>`;
      case T.SENT_PT: return `<div class="eyebrow">Escolhe a tradução da frase</div><p class="sentence">${Sentence.render(s.en, theme, null)}</p>`;
      case T.SENT_EN: return `<div class="eyebrow">Como se diz em inglês?</div><div class="q" style="font-size:1.25rem">${view.esc(s.pt)}</div>`;
      case T.FILL_PT: return `<div class="eyebrow">Escolhe a palavra que falta</div><p class="sentence">${Sentence.render(s.en, theme, answered ? null : w.key)}</p>${answered ? "" : `<div class="muted">${view.esc(s.pt)}</div>`}`;
      default: return `<div class="eyebrow">Escolhe a palavra que falta</div><p class="sentence">${Sentence.render(s.en, theme, answered ? null : w.key)}</p>`;
    }
  }

  // Texto de uma opção (sem HTML)
  static label(q, o) {
    const T = Question.TYPES;
    return { [T.EN_PT]: o.pt, [T.CTX]: o.pt, [T.IPA]: `/${o.ipa}/`, [T.SENT_PT]: o.exPt, [T.SENT_EN]: o.exEn }[q.type] ?? o.en;
  }

  static draw(factory, words, used) {
    for (let n = 0; n < 30; n++) {
      const free = words.filter(w => !used.has(w.key));
      const w = Utils.pick(free.length ? free : words);
      const q = factory.makeQuestion(w);
      if (q.options.length === 4) { used.add(w.key); return q; }
    }
    return null;
  }

  // Enunciado e opções de uma pergunta; shown = chave da opção escolhida (ou null)
  static questionHtml(view, q, chosen, action) {
    const w = q.word, a = chosen !== null && chosen !== undefined;
    const opts = q.options.map((o, k) => `<button class="opt qsopt ${a ? (o.key === w.key ? "ok" : o.key === chosen ? "no" : "") : ""}" data-action="${action}" data-v="${view.esc(o.key)}" ${a ? "disabled" : ""}><b>${k + 1}</b> ${view.esc(GameView.label(q, o))}</button>`).join("");
    return `${GameView.prompt(view, q, a)}<div class="qsopts">${opts}</div>`;
  }

  static answerLabel(q) {
    return GameView.label(q, q.word);
  }

  static needWords(title) {
    return `<div><div class="eyebrow">${title}</div><h1>Ainda não dá</h1></div>
      <section class="panel"><p style="margin:0">Escolhe outros temas (em cima, no Jogo) para este jogo ter palavras e frases com que jogar.</p>
      <div class="row"><button class="btn" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  scopeLabel() {
    const s = this.progress.data.gameScope || "all";
    return s === "all" ? "todos os temas" : s === "studied" ? "só os temas que já estudaste" : `todos os temas do nível ${s}`;
  }

  gamesPanel() {
    return `<section class="panel"><div class="eyebrow">Jogos</div>
      <p class="muted" style="margin:0">Jogam com as palavras de ${this.scopeLabel()}. Cada jogo dá XP e conta para as missões.</p>
      <div class="tabs" role="group" aria-label="Temas dos jogos">${[["all", "Todos os temas"], ["studied", "Só estudados"], ...ProgressView.LEVELS.map(([c]) => [c, c])].map(([v, l]) =>
        `<button data-action="gscope" data-v="${v}" aria-pressed="${(this.progress.data.gameScope || "all") === v}">${l}</button>`).join("")}</div>
      <div class="gamegrid">
        ${[
          ["game", "story", "🗺️", "Modo história", "A viagem do Leo, capítulo a capítulo", 6],
          ["nav", "escape", "🔐", "Escape room", "Abre 10 cadeados antes do tempo acabar", 2],
          ["game", "hangman", "🪢", "Forca", "Adivinha a palavra letra a letra", 1],
          ["game", "scramble", "🧩", "Frases", "Põe as palavras na ordem certa", 3],
          ["adventures", "", "🎭", "Conversas e histórias", "Escolhe o que dizer e muda o final", 6],
          ["game", "mystery", "🔤", "Palavra misteriosa", "Adivinha a palavra em 6 tentativas", 2],
          ["game", "rain", "🌧️", "Chuva de palavras", "Toca na tradução antes de cair", 1],
          ["game", "anagram", "🔀", "Anagramas", "Ordena as letras contra o relógio", 4],
          ["game", "bingo", "🎱", "Bingo de palavras", "Faz uma linha com as traduções", 8],
          ["game", "cross", "📰", "Palavras cruzadas", "Pistas em inglês: lê e escreve", 3],
          ["game", "emoji", "🖼️", "Adivinha a imagem", "Vê o emoji e acerta a palavra", 4],
          ["game", "duel", "⚔️", "Duelo", "Corrida de perguntas contra um adversário", 8],
          ["game", "odd", "🧐", "Intruso", "Qual palavra não pertence ao grupo?", 1],
          ["game", "bomb", "💣", "Bomba-relógio", "Responde antes de ela explodir", 5],
          ["game", "tower", "🏗️", "Torre", "Sobe o mais alto que conseguires", 7],
          ["game", "chain", "🔗", "Cadeia de palavras", "A palavra seguinte começa na última letra", 6],
          ["game", "fix", "🛠️", "Corrige o erro", "Toca na palavra errada da frase", 8],
          ["game", "dictation", "✍️", "Ditado", "Lê a frase e escreve-a de memória", 2],
          ["game", "quizshow", "💶", "Quem quer ser milionário", "15 perguntas, 3 ajudas", 7],
          ["flash", "", "⚡", "Cartões", "Revisão rápida: sabias ou não?", 4],
          ["vchallenge", "", "⏱️", "Verbos em 60 s", "Irregulares em todos os tempos", 5],
          ["hardwords", "", "🎯", "Palavras difíceis", "As que mais erras, com dicas", 6],
        ].map(([act, v, icon, name, desc, c]) => `<button class="gcard g${c}" data-action="${act}"${v ? ` data-v="${v}"` : ""}>
          <span class="gicon" aria-hidden="true">${icon}</span><span class="gname">${name}</span><span class="gdesc">${desc}</span></button>`).join("")}
      </div></section>`;
  }

  reminderPanel() {
    if (!Reminder.supported) return "";
    const r = Reminder.settings(this.progress);
    const hours = Reminder.HOURS.map(h => `<button data-action="remhour" data-v="${h}" aria-pressed="${r?.hour === h}">${h}h</button>`).join("");
    const body = r
      ? `<p class="muted" style="margin:0">Aviso às ${r.hour}h se ainda não tiveres cumprido a meta.</p><div class="tabs" role="group" aria-label="Hora">${hours}</div>
         <div class="row"><button class="btn ghost small" data-action="remoff">Desligar</button></div>`
      : Notification.permission === "denied"
        ? `<p class="muted" style="margin:0">As notificações estão bloqueadas neste browser. Permite-as nas definições do site para usares o lembrete.</p>`
        : `<p class="muted" style="margin:0">Recebe uma notificação se ainda não cumpriste a meta do dia.</p><div class="row"><button class="btn small" data-action="remon">Ativar</button></div>`;
    return `<section class="panel"><div class="eyebrow">Lembrete diário</div>${body}
      <span class="muted" style="font-size:.85rem">Só avisa com a app aberta (num separador ou instalada no ecrã inicial). Não funciona com o browser fechado.</span></section>`;
  }

  // Nível, título e barra de XP (também usada no início)
  static playerCard(p) {
    const lv = p.level, from = Progress.xpFor(lv), to = Progress.xpFor(lv + 1);
    const pct = Math.round((p.xp - from) / (to - from) * 100);
    return `<section class="panel"><div class="row" style="justify-content:space-between"><h2>${Rank.title(lv)}</h2><span class="pill now">Nível ${lv}</span></div>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <span class="muted" style="font-size:.9rem">${p.xp} XP · faltam ${to - p.xp} para o nível ${lv + 1}</span></section>`;
  }

  // Caminho com uma etapa por lição e o exame final como chefe
  mapPanel() {
    const level = this.currentLevel;
    const themes = this.dict.themes.filter(t => t.level === level);
    const next = this.progress.nextTheme(this.dict);
    const tabs = ProgressView.LEVELS.map(([code]) =>
      `<button data-action="glevel" data-v="${code}" aria-pressed="${code === level}">${code}</button>`).join("");
    const offs = [0, 14, 28, 14];
    const nodes = themes.map((t, i) => {
      const studied = this.progress.lessonComplete(t.id);
      const full = studied && this.progress.masteredInTheme(t) === t.size;
      const cls = full ? "gold" : studied ? "done" : t === next || this.progress.partsDone(t.id) ? "now" : "";
      return `<button class="mrow" style="padding-left:${offs[i % 4]}%" data-action="open" data-v="${t.id}">
        <span class="node ${cls}">${full ? "★" : studied ? "✓" : t.number}</span><span>${this.esc(t.pt)}</span></button>`;
    }).join("");
    const exam = new LevelExam(level, this.app.examContext());
    const passed = this.progress.examPassed(level);
    const boss = `<button class="mrow" data-action="gexam" data-v="${level}" ${exam.ready ? "" : "disabled"}>
      <span class="node boss ${passed ? "gold" : ""}">${passed ? "★" : "⚔"}</span>
      <span><strong>Chefe: exame ${level}</strong><br><span class="muted" style="font-size:.85rem">${passed ? `Vencido · melhor ${this.progress.data.exams[level]}%` : exam.ready ? "Pronto para o desafio" : "Estuda mais lições deste nível"}</span></span></button>`;
    return `<section class="panel"><div class="eyebrow">Aventura</div>
      <div class="tabs" role="group" aria-label="Nível">${tabs}</div>
      ${themes.length ? `<div class="map">${nodes}${boss}</div>` : `<p class="muted" style="margin:0">Ainda não há lições neste nível.</p>`}</section>`;
  }

  onAction(action, value) {
    switch (action) {
      case "gscope":
        this.progress.data.gameScope = value;
        this.app.save();
        this.app.render();
        return true;
      case "challenge":
        this.app.show(new ChallengeView(this.app));
        return true;
      case "game": {
        const views = { hangman: HangmanView, scramble: ScrambleView, mystery: MysteryView, rain: RainView, anagram: AnagramView, bingo: BingoView, quizshow: QuizShowView, cross: CrosswordView, emoji: EmojiView, duel: DuelView, odd: OddView, bomb: BombView, tower: TowerView, chain: ChainView, fix: FixView, dictation: DictationView, story: StoryView };
        this.app.show(new views[value](this.app));
        return true;
      }
      case "remon":
        Reminder.enable(this.progress).then(ok => {
          this.app.toast.show(ok ? "Lembrete ativado." : "Não foi possível ativar as notificações.");
          this.app.save();
          if (this.app.view === this) this.app.render();
        });
        return true;
      case "remoff":
        Reminder.disable(this.progress);
        this.app.save();
        this.app.render();
        return true;
      case "remhour":
        this.progress.data.reminder.hour = Number(value);
        this.progress.data.reminder.last = null;
        this.app.save();
        this.app.render();
        return true;
      case "glevel":
        this.level = value;
        this.app.render();
        return true;
      case "gexam": {
        const lesson = new LevelExam(value, this.app.examContext()).lesson();
        if (lesson.exercises.length) this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(lesson)));
        return true;
      }
    }
    return false;
  }
}
