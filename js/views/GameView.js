// Jogo: desafio de 60 segundos, jogos e mapa de aventura (o nível e o XP estão no Hoje e no topo)
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
    return `<div><div class="eyebrow">Aprende a jogar</div><h1>Jogo</h1></div>
      <section class="panel gsuggest" id="gsuggest">${this.suggestHtml()}</section>
      ${this.gamesPanel()}
      ${this.mapPanel()}
      ${this.reminderPanel()}`;
  }

  // Temas dos jogos: todos (por defeito), só os estudados ou os de um nível
  static themes(app) {
    const scope = app.progress.data.gameScope || "all", all = app.dict.themes;
    if (scope === "all") return all;
    if (scope === "studied") return all.filter(t => app.progress.studiedTheme(t.id));
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
      <p class="muted" style="margin:0">Jogam com as palavras de ${this.scopeLabel()}. Cada jogo dá XP e conta para a meta diária.</p>
      <div class="tabs lvtabs" role="group" aria-label="Temas dos jogos">${[["all", "Todos os temas"], ["studied", "Só estudados"], ...ProgressView.LEVELS.map(([c]) => [c, c])].map(([v, l]) =>
        `<button data-action="gscope" data-v="${v}" aria-pressed="${(this.progress.data.gameScope || "all") === v}">${l}</button>`).join("")}</div>
      <div class="gamegrid">
        ${GameView.GAMES.map(g => {
          const [act, v, icon, name, desc, c] = g, rec = this.record(v || act);
          // O jogo que está na sugestão lá em cima fica no mesmo sítio, mas esbatido
          return `<button class="gtile ${g === GameView.suggested() ? "insuggest" : ""}" style="--gc:${GameView.COLORS[c]}" data-game="${act}:${v}" data-action="${act}"${v ? ` data-v="${v}"` : ""}>
            <span class="gt-top"><span class="gt-icon" aria-hidden="true">${icon}</span>${rec ? `<span class="gt-rec">${rec}</span>` : ""}</span>
            <span class="gt-body"><span class="gt-name">${name}</span><span class="gt-desc">${desc}</span></span>
            <span class="gt-play">Jogar ▶</span></button>`;
        }).join("")}
      </div></section>`;
  }

  // Jogo sugerido: muda a cada 30 segundos (igual para toda a gente no mesmo intervalo), por uma ordem baralhada do dia
  static SUGGEST_MS = 30000;

  static suggested() {
    const slot = Math.floor(Date.now() / GameView.SUGGEST_MS), n = GameView.GAMES.length;
    const order = DailyFun.shuffle(GameView.GAMES.map((_, i) => i), DailyFun.rng(DateUtils.dayNumber()));
    return GameView.GAMES[order[slot % n]];
  }

  suggestHtml() {
    const [act, v, icon, name, desc, c] = GameView.suggested(), rec = this.record(v || act);
    const left = GameView.SUGGEST_MS - Date.now() % GameView.SUGGEST_MS;
    return `<div class="gsg" style="--gc:${GameView.COLORS[c]}">
      <span class="gsgicon" aria-hidden="true">${icon}</span>
      <div class="gsgtext"><div class="eyebrow">🎲 Jogo sugerido</div><h2>${name}</h2><p style="margin:0">${desc}</p>
        <div class="gsgrow"><button class="btn gsggo" data-action="${act}"${v ? ` data-v="${v}"` : ""}>▶ Jogar</button>${rec ? `<span class="gsgrec">${rec}</span>` : ""}</div></div>
      <span class="gsgbar" aria-hidden="true"><i style="animation-duration:${left}ms"></i></span></div>`;
  }

  // Troca o jogo sugerido quando o intervalo de 30 segundos muda, sem refazer o ecrã
  afterRender() {
    clearInterval(this.suggestTimer);
    let slot = Math.floor(Date.now() / GameView.SUGGEST_MS);
    this.suggestTimer = setInterval(() => {
      const box = document.getElementById("gsuggest");
      if (!box || this.app.view !== this) return clearInterval(this.suggestTimer); // o utilizador mudou de ecrã
      const now = Math.floor(Date.now() / GameView.SUGGEST_MS);
      if (now === slot) return;
      slot = now;
      box.innerHTML = this.suggestHtml();
      const [act, v] = GameView.suggested();
      document.querySelectorAll(".gtile[data-game]").forEach(t => t.classList.toggle("insuggest", t.dataset.game === `${act}:${v}`));
      box.classList.remove("fresh");
      void box.offsetWidth; // recomeça a animação
      box.classList.add("fresh");
    }, 1000);
  }

  // Todos os jogos: [ação, valor, ícone, nome, descrição, cor]
  static GAMES = [
    ["challenge", "", "⏱️", "Desafio de 60 s", "Acerta o máximo de palavras contra o relógio", 4],
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
  ];

  static COLORS = { 1: "#E5484D", 2: "#8E4EC6", 3: "#12A594", 4: "#F5A524", 5: "#2F6FED", 6: "#D6409F", 7: "#30A46C", 8: "#5B5BD6" };

  // Recorde ou progresso de um jogo, para mostrar no cartão (null se ainda não jogaste)
  record(game) {
    const d = this.progress.data;
    if (game === "story") {
      const total = STORY.reduce((n, c) => n + c.chapters.length, 0), read = Object.keys(d.story || {}).length;
      return read ? `📖 ${read}/${total}` : null;
    }
    if (game === "escape") {
      const n = Object.keys(d.escape || {}).length;
      return n ? `🔓 ${n} sala${n > 1 ? "s" : ""}` : null;
    }
    if (game === "quizshow") return d.quizShowBest ? `🏆 ${d.quizShowBest.toLocaleString("pt-PT")} €` : null;
    const key = { challenge: "challengeBest", bomb: "bombBest", tower: "towerBest", rain: "rainBest", anagram: "anagramBest", vchallenge: "verbBest" }[game];
    return key && d[key] ? `🏆 ${d[key]}` : null;
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

  // Caminho com uma etapa por lição e o exame final como chefe
  // Mapa de aventura: um trilho aos ziguezagues com uma etapa por lição e o exame final como chefe
  static MAP_ROW = 84;
  static MAP_X = [6, 26, 44, 56, 44, 26];

  mapPanel() {
    const level = this.currentLevel;
    const themes = this.dict.themes.filter(t => t.level === level);
    const next = this.progress.nextTheme(this.dict);
    const color = ThemesView.LEVEL_COLORS[level] || "var(--accent)";
    const tabs = ProgressView.LEVELS.map(([code]) =>
      `<button data-action="glevel" data-v="${code}" aria-pressed="${code === level}">${code}</button>`).join("");
    if (!themes.length) return `<section class="panel"><div class="eyebrow">Aventura</div><div class="tabs lvtabs" role="group" aria-label="Nível">${tabs}</div>
      <p class="muted" style="margin:0">Ainda não há lições neste nível.</p></section>`;
    const H = GameView.MAP_ROW, X = i => GameView.MAP_X[i % GameView.MAP_X.length];
    // Etapas do lado direito põem o nome à esquerda do círculo, para não saírem do mapa
    const place = (i, top) => X(i) >= 44 ? `top:${top}px;right:calc(${100 - X(i)}% - 56px)` : `top:${top}px;left:${X(i)}%`;
    let done = 0, stars = 0;
    const nodes = themes.map((t, i) => {
      const studied = this.progress.lessonComplete(t.id);
      const full = studied && this.progress.masteredInTheme(t) === t.size;
      const here = !studied && (t === next || this.progress.partsDone(t.id) > 0);
      done += studied ? 1 : 0;
      stars += full ? 1 : 0;
      const cls = full ? "gold" : studied ? "done" : here ? "now" : "todo";
      const status = full ? "★ Dominada" : studied ? "✓ Concluída" : here ? "📍 Estás aqui" : `Lição ${t.number}`;
      return `<button class="mstop ${cls} ${X(i) >= 44 ? "flip" : ""}" style="${place(i, i * H)}" data-action="open" data-v="${t.id}">
        <span class="mnode"><span aria-hidden="true">${ThemesView.icon(t)}</span><b>${full ? "★" : studied ? "✓" : t.number}</b></span>
        <span class="mlabel"><span class="mtitle">${this.esc(t.pt)}</span><span class="msub">${status}</span></span></button>`;
    }).join("");
    // Exame final (chefe) no fim do trilho
    const exam = new LevelExam(level, this.app.examContext());
    const passed = this.progress.examPassed(level), n = themes.length;
    const boss = `<button class="mstop boss ${passed ? "gold" : ""} ${X(n) >= 44 ? "flip" : ""}" style="${place(n, n * H)}" data-action="gexam" data-v="${level}" ${exam.ready ? "" : "disabled"}>
      <span class="mnode"><span aria-hidden="true">${passed ? "🏆" : "🐉"}</span></span>
      <span class="mlabel"><span class="mtitle">Chefe: exame ${level}</span><span class="msub">${passed ? `Vencido · melhor ${this.progress.data.exams[level]}%` : exam.ready ? "⚔️ Pronto para o desafio" : "🔒 Estuda mais lições deste nível"}</span></span></button>`;
    // Caminho que liga as etapas (coordenadas: x em % da largura, y em px)
    const pts = Array.from({ length: n + 1 }, (_, i) => `${X(i)},${i * H + 28}`).join(" ");
    const height = (n + 1) * H;
    return `<section class="panel amap" style="--lc:${color}">
      <div class="row" style="justify-content:space-between"><div><div class="eyebrow">🗺️ Aventura</div><h2 style="margin:0">Nível ${level}</h2></div>
        <div class="amstats"><span>✓ ${done}/${n}</span><span>★ ${stars}</span><span>${passed ? "🏆" : "🐉"}</span></div></div>
      <div class="tabs lvtabs" role="group" aria-label="Nível">${tabs}</div>
      <div class="mtrail" style="height:${height}px">
        <svg class="mpath" viewBox="0 0 100 ${height}" preserveAspectRatio="none" aria-hidden="true"><polyline points="${pts}" vector-effect="non-scaling-stroke"/></svg>
        ${nodes}${boss}</div></section>`;
  }

  onAction(action, value) {
    switch (action) {
      case "gscope":
        this.progress.data.gameScope = value;
        this.app.save();
        this.app.render();
        return true;
      case "challenge": {
        // O desafio começa logo, sem ecrã de apresentação
        const view = new ChallengeView(this.app);
        this.app.show(view);
        view.begin();
        return true;
      }
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
