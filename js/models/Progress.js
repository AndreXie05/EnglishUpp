// O progresso do aluno: lições feitas, nível de cada palavra (revisão espaçada), dias ativos, testes e textos
class Progress {
  // Dias até ao próximo teste, por nível (caixa) da palavra
  static INTERVALS = [1, 2, 4, 7, 15, 30];
  static MASTERED_BOX = 3;
  // Meta diária: nº de exercícios (2 a 10) que é preciso fazer num dia para a sequência subir
  static GOAL_MIN = 2;
  static GOAL_MAX = 10;

  static blank() {
    return { lessons: {}, words: {}, days: [], tests: [], rounds: [], grammar: {}, texts: {}, errs: { g: {}, r: {} }, goal: null, goalDate: null, counts: {}, done: {}, gsr: {}, exams: {}, badges: {}, reminder: null, diary: [], xp: 0, lvl: 1, mis: {}, claimed: {}, best: {}, cases: {}, stats: {}, adv: {}, deck: {}, res: {}, storyAns: {}, gameScope: "all", challengeBest: 0 };
  }

  constructor(data) {
    this.data = Object.assign(Progress.blank(), data || {});
    this.data.errs = Object.assign({ g: {}, r: {} }, this.data.errs);
    this.data.texts = this.data.texts || {};
    this.data.counts = this.data.counts || {};
    this.data.best = this.data.best || {};
    this.data.res = this.data.res || {};
    this.data.adv = this.data.adv || {};
    this.data.stats = this.data.stats || {};
    this.data.cases = this.data.cases || {};
    this.data.deck = this.data.deck || {};
    this.data.storyAns = this.data.storyAns || {};
    this.data.done = this.data.done || {};
    this.data.gsr = this.data.gsr || {};
    this.data.exams = this.data.exams || {};
    this.data.badges = this.data.badges || {};
    this.data.mis = this.data.mis || {};
    this.data.diary = this.data.diary || [];
    this.purgeCounts();
    this.purgeRounds();
  }

  get wordCount() {
    return Object.keys(this.data.words).length;
  }

  get studiedKeys() {
    return Object.keys(this.data.words);
  }

  get masteredCount() {
    return Object.values(this.data.words).filter(w => w.box >= Progress.MASTERED_BOX).length;
  }

  wordState(key) {
    return this.data.words[key];
  }

  lesson(themeId) {
    return this.data.lessons[themeId];
  }

  // Melhor resultado (%) numa lição de gramática, ou undefined se ainda não a fez
  grammarScore(id) {
    return this.data.grammar[id];
  }

  // Revisão espaçada da gramática: 80% ou mais sobe de caixa, menos volta ao início
  addGrammar(id, percent) {
    this.data.grammar[id] = Math.max(percent, this.data.grammar[id] || 0);
    this.addXp(percent >= 80 ? 15 : 5);
    this.bump("grammar");
    this.exerciseDone(`grammar:${id}`);
    const g = this.data.gsr[id] || { box: 0 };
    g.box = percent >= 80 ? Math.min(g.box + 1, Progress.INTERVALS.length - 1) : 0;
    g.due = DateUtils.addDays(DateUtils.today(), Progress.INTERVALS[g.box]);
    this.data.gsr[id] = g;
  }

  // Ids das lições de gramática que já é hora de repetir (as feitas antes desta função só entram se tiveram menos de 80%)
  grammarDue(lessons) {
    const t = DateUtils.today();
    return lessons.filter(l => {
      const g = this.data.gsr[l.id], best = this.data.grammar[l.id];
      if (best == null) return false;
      return g ? g.due <= t : best < 80;
    }).map(l => l.id);
  }

  // Cor dos quadrados: verde a partir de 85%, amarelo até 84%, vermelho até 49%; sem treino não tem cor
  static band(pct) {
    return pct == null ? "" : pct >= 85 ? "good" : pct >= 50 ? "mid" : "bad";
  }

  // As 9 partes de uma lição: 8 exercícios e as perguntas do texto (ids usados em addTest)
  static LESSON_PARTS = ["fill", "fill-write", "match-pt", "match-ipa", "en-pt+pt-en", "ipa", "write", "all", "story"];

  // Quantas das 9 partes já fizeste (a lição só está "estudada" com 9/9)
  partsDone(themeId) {
    return Progress.LESSON_PARTS.filter(p => this.data.best[`${themeId}:${p}`] != null).length;
  }

  // Progresso da lição (0 a 100): média do melhor resultado de cada uma das 9 partes (as não feitas contam 0).
  // Sobe quando acertas; se erras, o melhor resultado anterior mantém-se
  lessonProgress(themeId) {
    const sum = Progress.LESSON_PARTS.reduce((n, p) => n + (this.data.best[`${themeId}:${p}`] || 0), 0);
    return Math.round(sum / Progress.LESSON_PARTS.length);
  }

  lessonComplete(themeId) {
    return this.partsDone(themeId) === Progress.LESSON_PARTS.length;
  }

  // Último resultado gravado de uma parte da lição ({score, total}) ou undefined
  partResult(themeId, part) {
    return this.data.res[`${themeId}:${part}`];
  }

  // Média dos melhores resultados dos exercícios e das perguntas do texto de uma lição (null se ainda não praticou)
  themeScore(themeId) {
    const v = Object.entries(this.data.best).filter(([k]) => k.startsWith(themeId + ":")).map(e => e[1]);
    return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null;
  }

  // Melhor percentagem num texto prático (null se ainda não o fez)
  textScore(id, total) {
    const b = this.data.best["text:" + id];
    if (b != null) return b;
    const n = this.data.texts[id];
    return n == null ? null : Math.round(n / total * 100);
  }

  // Melhor resultado (certas) num texto prático
  addText(id, score, total) {
    this.data.texts[id] = Math.max(score, this.data.texts[id] || 0);
    if (this.addTest(score, total, true, `text:${id}`)) this.bump("texts");
  }

  // A meta de hoje sai da roleta (2 a 10) e só se roda uma vez por dia; antes disso não há meta
  get goal() {
    return this.data.goalDate === DateUtils.today() ? this.data.goal : null;
  }

  get spun() {
    return this.goal != null;
  }

  spin() {
    if (this.spun) return this.goal;
    this.data.goal = Progress.GOAL_MIN + Math.floor(Math.random() * (Progress.GOAL_MAX - Progress.GOAL_MIN + 1));
    this.data.goalDate = DateUtils.today();
    if (this.goalMet) this.markActive();
    return this.data.goal;
  }

  // Exercícios feitos hoje
  get todayCount() {
    return this.data.counts[DateUtils.today()] || 0;
  }

  get goalMet() {
    return this.spun && this.todayCount >= this.goal;
  }

  // Cada exercício terminado conta um. O dia só entra na sequência quando se atinge a meta
  // Cada exercício (lição + tipo, ou texto) só conta uma vez por dia
  exerciseDone(id) {
    const t = DateUtils.today();
    const done = this.data.done[t] = this.data.done[t] || [];
    if (done.includes(id)) return false;
    done.push(id);
    this.data.counts[t] = (this.data.counts[t] || 0) + 1;
    if (this.goalMet) this.markActive();
    return true;
  }

  // Guarda só os últimos 60 dias de contagens
  purgeCounts() {
    const limit = DateUtils.addDays(DateUtils.today(), -60);
    Object.keys(this.data.counts).forEach(d => { if (d < limit) delete this.data.counts[d]; });
    Object.keys(this.data.done).forEach(d => { if (d < limit) delete this.data.done[d]; });
    Object.keys(this.data.mis).forEach(d => { if (d < limit) delete this.data.mis[d]; });
  }

  markActive() {
    const t = DateUtils.today();
    if (!this.data.days.includes(t)) this.data.days.push(t);
  }

  // Dias seguidos até hoje (ou até ontem, se hoje ainda não estudou)
  streak() {
    const days = new Set(this.data.days);
    let d = DateUtils.today();
    if (!days.has(d)) d = DateUtils.addDays(d, -1);
    let n = 0;
    while (days.has(d)) {
      n++;
      d = DateUtils.addDays(d, -1);
    }
    return n;
  }

  // Maior sequência de dias seguidos de sempre
  longestStreak() {
    const days = [...new Set(this.data.days)].sort();
    let best = 0, run = 0, prev = null;
    days.forEach(d => {
      run = prev && DateUtils.addDays(prev, 1) === d ? run + 1 : 1;
      best = Math.max(best, run);
      prev = d;
    });
    return best;
  }

  // Melhor resultado (%) no exame final de um nível
  addExam(level, percent) {
    this.exerciseDone(`exam:${level}`);
    this.addXp(!this.examPassed(level) && percent >= LevelExam.PASS ? 30 : 3);
    this.data.exams[level] = Math.max(percent, this.data.exams[level] || 0);
  }

  examPassed(level) {
    return (this.data.exams[level] || 0) >= LevelExam.PASS;
  }

  dueKeys(dict) {
    const today = DateUtils.today();
    return Object.entries(this.data.words)
      .filter(([k, w]) => w.due <= today && dict.has(k))
      .map(([k]) => k);
  }

  nextDueDate() {
    return Object.values(this.data.words).map(w => w.due).sort()[0];
  }

  studiedToday(dict) {
    return dict.themes.filter(t => this.lesson(t.id)?.studied === DateUtils.today());
  }

  nextTheme(dict) {
    return dict.themes.find(t => !this.lesson(t.id));
  }

  masteredInTheme(theme) {
    return theme.words.filter(w => (this.wordState(w.key)?.box || 0) >= Progress.MASTERED_BOX).length;
  }

  finishLesson(theme) {
    const tomorrow = DateUtils.addDays(DateUtils.today(), 1);
    if (!this.data.lessons[theme.id]) {
      this.addXp(20);
      this.bump("lessons");
    }
    this.data.lessons[theme.id] = { studied: DateUtils.today() };
    theme.words.forEach(w => {
      if (!this.data.words[w.key]) this.data.words[w.key] = { box: 0, due: tomorrow, right: 0, wrong: 0 };
    });
  }

  // No treino de erros, acertar à primeira tira a palavra da lista (não mexe no calendário do teste diário)
  resolveWord(key) {
    const w = this.data.words[key];
    if (w) w.rv = true;
  }

  // Acertar nos exercícios da lição não muda o calendário do teste diário, mas ao fim de 3 acertos
  // a palavra passa de “nova” a “a aprender”; a caixa fica igual, para o teste diário não saltar o intervalo de 2 dias
  practiceCredit(key) {
    const w = this.data.words[key];
    if (!w || w.box >= 1) return;
    w.pc = (w.pc || 0) + 1;
  }

  // Acerto: sobe de caixa e volta mais tarde. Erro: volta à caixa 0 e aparece amanhã
  recordAnswer(key, correct) {
    const w = this.data.words[key];
    if (!w) return;
    if (correct) {
      w.box = Math.min(w.box + 1, Progress.INTERVALS.length - 1);
      w.right = (w.right || 0) + 1;
    } else {
      w.box = 0;
      w.pc = 0;
      w.wrong = (w.wrong || 0) + 1;
      w.rv = false; // voltou a falhar: volta à lista de erros
    }
    w.due = DateUtils.addDays(DateUtils.today(), Progress.INTERVALS[w.box]);
  }

  // Erros de gramática (kind "g") e de perguntas dos textos (kind "r"): ref = "lição:número".
  // Uma pergunta errada fica na lista e sai depois de acertares ERROR_CLEAR vezes seguidas
  static ERROR_CLEAR = 2;

  recordError(src, ok) {
    if (!src) return;
    const map = this.data.errs[src.kind];
    const e = map[src.ref];
    if (!ok) map[src.ref] = { n: (e?.n || 0) + 1, ok: 0 };
    else if (e && ++e.ok >= Progress.ERROR_CLEAR) delete map[src.ref];
  }

  // counts: id do exercício que conta para a meta diária (só os 8 exercícios das lições e as perguntas dos textos)
  // Devolve true se o exercício é novo hoje; só esses dão XP e contam para as missões
  addTest(score, total, practice, counts = null, log = null) {
    const fresh = counts ? this.exerciseDone(counts) : true;
    if (counts && total) this.data.res[counts] = { score, total, log };
    if (counts && total) this.data.best[counts] = Math.max(Math.round(score / total * 100), this.data.best[counts] || 0);
    this.data.tests.push({ date: DateUtils.today(), score, total, practice });
    if (fresh) {
      // Testar o que estava em atraso vale o dobro de um treino livre; 100% dá bónus
      this.addXp(score * (practice ? 1 : 2) + (total >= 5 && score === total ? 3 : 0));
      this.bump("tests");
      this.bump("right", score);
    }
    return fresh;
  }

  recentTests(n) {
    return this.data.tests.slice(-n).reverse();
  }

  boxCounts() {
    return Progress.INTERVALS.map((_, b) =>
      Object.values(this.data.words).filter(w => Math.min(w.box, Progress.INTERVALS.length - 1) === b).length);
  }

  hardestWords(dict, n) {
    return Object.entries(this.data.words)
      .filter(([k, w]) => (w.wrong || 0) > 0 && dict.has(k))
      .sort((a, b) => b[1].wrong - a[1].wrong)
      .slice(0, n)
      .map(([k, w]) => ({ word: dict.word(k), wrong: w.wrong }));
  }

  /* ----- treinos de tradução: partidas que desaparecem ao fim de 7 dias ----- */

  static ROUND_LIFETIME_DAYS = 7;

  purgeRounds() {
    const limit = Date.now() - Progress.ROUND_LIFETIME_DAYS * 86400000;
    this.data.rounds = (this.data.rounds || []).filter(r => r.at >= limit);
  }

  addRound(round) {
    this.purgeRounds();
    this.data.rounds.push({ at: Date.now(), date: DateUtils.today(), ...round });
    this.addXp(round.correct || 0);
    this.exerciseDone("translate");
  }

  weekRounds() {
    return [...(this.data.rounds || [])].sort((a, b) => b.at - a.at);
  }

  weekPoints() {
    return (this.data.rounds || []).reduce((n, r) => n + r.points, 0);
  }

  /* ----- jogo: XP, níveis, desafio e contadores diários ----- */

  // XP necessário para chegar ao nível n (cada nível custa mais 100 XP que o anterior)
  static xpFor(n) {
    return 50 * n * (n - 1);
  }

  get xp() {
    return this.data.xp || 0;
  }

  get level() {
    let n = 1;
    while (this.xp >= Progress.xpFor(n + 1)) n++;
    return n;
  }

  // Contadores de hoje (certas, testes, gramática, textos, lições, desafios, xp)
  day() {
    const t = DateUtils.today();
    return this.data.mis[t] = this.data.mis[t] || {};
  }

  bump(key, n = 1) {
    if (n > 0) this.day()[key] = (this.day()[key] || 0) + n;
  }

  addXp(n) {
    if (n <= 0) return;
    this.data.xp = this.xp + n;
    this.bump("xp", n);
  }

  // Jogos pequenos (forca, memória, frases): contam para as missões
  // id: o jogo, que conta para a meta diária (uma vez por dia)
  addGame(xp, id = null) {
    this.addXp(xp);
    this.bump("games");
    if (id) this.exerciseDone(`game:${id}`);
  }

  // Conversa ou história acabada: 2 XP por resposta certa (+5 se acertaste tudo); só dá XP uma vez por dia e por cenário
  addAdventure(id, score, total) {
    const pct = total ? Math.round(score / total * 100) : 0;
    const r = this.data.adv[id] = this.data.adv[id] || { best: 0, plays: 0, day: null };
    r.best = Math.max(r.best, pct);
    r.plays++;
    this.bump("games");
    this.exerciseDone(`adv:${id}`);
    if (r.day === DateUtils.today()) return 0;
    r.day = DateUtils.today();
    const xp = score * 2 + (total && score === total ? 5 : 0);
    this.addXp(xp);
    return xp;
  }

  // Baralho de um jogo: devolve uma chave que ainda não saiu e só repete depois de teres passado por todas
  drawFromDeck(name, keys) {
    if (!keys.length) return null;
    const order = this.data.deck[name] || [], seen = new Set(order);
    let left = keys.filter(k => !seen.has(k));
    if (!left.length) {
      // Acabou a volta: começa outra, mas a última palavra não sai logo outra vez
      const last = order[order.length - 1];
      keys.forEach(k => seen.delete(k));
      left = keys.length > 1 ? keys.filter(k => k !== last) : keys;
    }
    const key = left[Math.floor(Math.random() * left.length)];
    seen.delete(key);
    this.data.deck[name] = [...seen, key];
    return key;
  }

  // Resposta à primeira tentativa: guarda acertos e erros por classe de palavra, tema e tipo de exercício
  recordStat(word, type, ok) {
    const st = this.data.stats;
    const bump = (group, key) => {
      const m = st[group] = st[group] || {};
      const v = m[key] = m[key] || [0, 0];
      v[ok ? 0 : 1]++;
    };
    bump("pos", word.pos);
    bump("theme", word.themeId);
    bump("type", type);
  }

  // Desafio do dia: 8 XP à primeira vez que o acabas hoje (com 60% ou mais)
  addDaily(percent) {
    const today = DateUtils.today();
    this.exerciseDone("daily");
    if (this.data.daily?.date !== today) {
      this.data.daily = { date: today, best: percent };
      if (percent >= 60) this.addXp(8);
      this.bump("games");
    } else this.data.daily.best = Math.max(this.data.daily.best, percent);
  }

  // Revisão dos erros (palavras, gramática ou textos) acabada
  addReview(percent) {
    this.exerciseDone("review");
    if (percent >= 60) this.addXp(3);
    this.bump("review");
  }

  // Desafio de 60 segundos (palavras ou verbos): devolve o XP ganho
  addChallenge(correct, bestKey = "challengeBest") {
    const xp = correct;
    this.addXp(xp);
    this.bump("timed");
    this.exerciseDone(`challenge:${bestKey}`);
    this.data[bestKey] = Math.max(correct, this.data[bestKey] || 0);
    return xp;
  }

  // Cartões de revisão: 1 XP por cartão, com um máximo de 10 XP por dia
  addFlash(cards) {
    const room = Math.max(0, 10 - (this.day().cardxp || 0));
    const xp = Math.min(room, cards);
    this.addXp(xp);
    this.bump("cardxp", xp);
    this.bump("cards", cards);
    if (cards > 0) this.exerciseDone("flash");
    return xp;
  }

  // Quando erras numa escolha múltipla, guarda com que palavra a trocaste
  recordConfusion(key, given) {
    const w = this.data.words[key];
    if (!w || given === key) return;
    w.mix = w.mix || {};
    w.mix[given] = (w.mix[given] || 0) + 1;
  }

  // As palavras com que mais trocaste esta
  confusions(key, n = 2) {
    return Object.entries(this.data.words[key]?.mix || {}).sort((a, b) => b[1] - a[1]).slice(0, n).map(e => e[0]);
  }

  reset() {
    this.data = Progress.blank();
  }

  toJSON() {
    return this.data;
  }
}
