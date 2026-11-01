// Controlador principal: guarda o estado, troca de ecrã e distribui os cliques
class App {
  static STORAGE_KEY = "ingles-diario-v1";

  constructor() {
    this.storage = new Storage(App.STORAGE_KEY);
    this.dict = new Dictionary(THEMES, GLOSSARY);
    this.sentences = new SentenceBank(this.dict);
    this.ipa = new SentenceIpa(this.dict);
    this.grammar = GRAMMAR.map(g => new GrammarLesson(g));
    this.texts = TEXTS.map(t => new PracticalText(t));
    this.progress = new Progress(this.storage.loadLocal());
    this.toast = new Toast(document.getElementById("toast"));
    this.nav = new NavBar(this);
    this.dictDrawer = new DictDrawer(this);
    this.main = document.getElementById("app");
    this.view = new HomeView(this);
    this.seenCount = this.progress.todayCount; // exercícios de hoje já mostrados no contador
    this.seenDay = DateUtils.today();
    this.doneLessons = new Set(this.completedLessons());
  }

  // Lições com as 9 partes feitas; a festa só aparece para as que passam a concluídas agora
  completedLessons() {
    return this.dict.themes.filter(t => this.progress.lessonComplete(t.id)).map(t => t.id);
  }

  start() {
    document.addEventListener("click", e => this.handleClick(e));
    document.addEventListener("submit", e => this.handleSubmit(e));
    document.addEventListener("keydown", e => {
      if (e.ctrlKey || e.metaKey || e.altKey || /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      this.view.onKey(e);
    });
    this.render();
    Reminder.check(this);
    setInterval(() => Reminder.check(this), 60000);
    this.storage.connectRemote(this.progress.toJSON()).then(remote => {
      if (remote) {
        this.progress = new Progress(remote);
        this.doneLessons = new Set(this.completedLessons());
      }
      this.render();
    });
  }

  render() {
    this.nav.render();
    this.main.innerHTML = this.view.render();
    this.view.afterRender();
    this.dictDrawer?.sync(this.view);
  }

  show(view) {
    this.view = view;
    this.render();
    window.scrollTo(0, 0);
  }

  go(name) {
    const views = {
      hoje: () => new HomeView(this),
      jogo: () => new GameView(this),
      escape: () => new EscapeView(this),
      temas: () => new ThemesView(this),
      teste: () => new TestView(this),
      textos: () => new TextsView(this),
      frases: () => new PhrasesView(this),
      gramatica: () => new GrammarView(this),
      verbos: () => new VerbsView(this),
      dicionario: () => new DictionaryView(this),
      progresso: () => new ProgressView(this),
    };
    this.show((views[name] || views.hoje)());
  }

  examContext() {
    return { dict: this.dict, progress: this.progress, grammar: this.grammar, texts: this.texts };
  }

  save() {
    const won = Achievements.update(this.progress);
    const done = Missions.update(this.progress);
    // Sequência: festa na primeira vez que a meta de hoje fica cumprida
    const today = DateUtils.today();
    if (this.progress.data.days.includes(today) && this.progress.data.streakShown !== today) {
      this.progress.data.streakShown = today;
      Celebration.streak(this.progress.streak());
    }
    this.tickCount();
    const finished = this.completedLessons().filter(id => !this.doneLessons.has(id));
    finished.forEach(id => this.doneLessons.add(id));
    if (finished.length) Celebration.lesson(this.dict.theme(finished[0]));
    const lv = this.progress.level;
    const msgs = [];
    if (won.length) msgs.push(`Conquista: ${won.join(", ")}`);
    if (done.length) Celebration.missions(done);
    if (lv > (this.progress.data.lvl || 1)) msgs.push(`Subiste ao nível ${lv}: ${Rank.title(lv)}!`);
    this.progress.data.lvl = lv;
    if (msgs.length) this.toast.show(msgs.join(" · "));
    this.storage.save(this.progress.toJSON());
  }

  // Depois de cada exercício novo: mostra um contador discreto (3/9) até a meta de hoje ser cumprida
  tickCount() {
    const p = this.progress, today = DateUtils.today(), n = p.todayCount;
    if (this.seenDay !== today) { this.seenDay = today; this.seenCount = 0; }
    if (n > this.seenCount && p.spun && n < p.goal) Celebration.tick(n, p.goal);
    this.seenCount = n;
  }

  // Palavras de um exercício da lição: 20 no total, sorteadas de novo de cada vez.
  // Lição 1: 20 do tema. Lição 2: 17 do tema + 3 da lição 1. Da 3.ª em diante: 15 do tema + 5 de lições anteriores
  // (de preferência palavras que já erraste). Nunca de lições à frente
  lessonKeys(theme) {
    const total = 20, own = theme.index === 0 ? total : theme.index === 1 ? 17 : 15;
    const mine = Utils.shuffle(theme.words.map(w => w.key)).slice(0, own);
    const past = this.dict.themes.filter(t => t.index < theme.index).flatMap(t => t.words.map(w => w.key));
    const wrong = k => (this.progress.wordState(k)?.wrong || 0) > 0;
    const ordered = [...Utils.shuffle(past.filter(wrong)), ...Utils.shuffle(past.filter(k => !wrong(k)))];
    // Se o tema tiver poucas palavras, as que faltam também vêm das anteriores
    return mine.concat(ordered.slice(0, total - mine.length));
  }

  // types: tipos de pergunta (null = todos); backTheme: lição para onde voltar no fim
  startQuiz(keys, practice, types = null, backTheme = null, review = false) {
    if (backTheme && practice && !review) keys = this.lessonKeys(backTheme);
    if (!keys.length) return;
    const quiz = new Quiz(keys, { dict: this.dict, progress: this.progress, practice, types: backTheme && practice ? Question.expand(types) : types, max: practice ? 20 : 25, review, counts: backTheme ? `${backTheme.id}:${types ? types.join("+") : "all"}` : null });
    this.show(new QuizView(this, quiz, backTheme));
  }

  handleClick(e) {
    const el = e.target.closest("[data-action]");
    if (!el) return;
    const action = el.dataset.action;
    const value = el.dataset.v;
    if (this.view.onAction(action, value, el)) return;

    switch (action) {
      case "nav":
        this.go(value);
        break;
      case "level":
        this.show(new ThemesView(this, value));
        break;
      case "open":
        this.show(new LessonView(this, this.dict.theme(value), el.dataset.section));
        break;
      case "translate":
        this.show(new TranslationView(this, [this.dict.theme(value)], this.dict.theme(value).pt));
        break;
      case "flash":
        this.show(new FlashView(this));
        break;
      case "hardwords":
        this.show(new HardWordsView(this));
        break;
      case "adventures":
        this.show(new AdventureView(this));
        break;
      case "vchallenge":
        this.show(new VerbChallengeView(this));
        break;
      case "startTest":
        this.startQuiz(this.progress.dueKeys(this.dict), false);
        break;
      case "practiceAll":
        this.startQuiz(this.progress.studiedKeys.filter(k => this.dict.has(k)), true);
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.view.onSubmit(e.target);
  }
}
