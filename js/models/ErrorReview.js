// O que o aluno ainda falha, por nível ou por tema: palavras, exercícios de gramática e perguntas dos textos.
// Cada treino é novo: escolhe ao acaso entre os erros que ainda estão por rever.
class ErrorReview {
  static GRAMMAR_MAX = 15;

  constructor(progress, dict, grammar, texts = []) {
    this.progress = progress;
    this.dict = dict;
    this.grammar = grammar;
    this.texts = texts;
    this.items = this.collect();
  }

  // Cada erro: { kind: "w" palavra | "g" gramática | "r" texto, ref, level, group }
  collect() {
    const p = this.progress, out = [];
    Object.entries(p.data.words).forEach(([key, w]) => {
      if (!(w.wrong > 0) || w.rv || w.box >= Progress.MASTERED_BOX || !this.dict.has(key)) return;
      const th = this.dict.theme(this.dict.word(key).themeId);
      out.push({ kind: "w", ref: key, level: th.level, group: th.id, label: th.pt });
    });
    Object.keys(p.data.errs.g).forEach(ref => {
      const lesson = this.grammarLesson(ref);
      if (lesson) out.push({ kind: "g", ref, level: lesson.level, group: "g:" + lesson.id, label: "Gramática: " + lesson.pt });
    });
    Object.keys(p.data.errs.r).forEach(ref => {
      const id = ref.split(":")[0];
      const th = this.dict.theme(id), tx = this.texts.find(t => t.id === id);
      if (th?.story) out.push({ kind: "r", ref, level: th.level, group: th.id, label: th.pt });
      else if (tx) out.push({ kind: "r", ref, level: tx.level, group: tx.id, label: "Texto: " + tx.title });
    });
    return out;
  }

  grammarLesson(ref) {
    const id = ref.slice(0, ref.lastIndexOf(":"));
    return this.grammar.find(l => l.id === id);
  }

  inScope(item, scope) {
    return (!scope.level || item.level === scope.level) && (!scope.group || item.group === scope.group);
  }

  select(scope) {
    return this.items.filter(i => this.inScope(i, scope));
  }

  counts(scope) {
    const sel = this.select(scope);
    const n = kind => sel.filter(i => i.kind === kind).length;
    return { w: n("w"), g: n("g"), r: n("r"), total: sel.length };
  }

  levelCount(level) {
    return this.items.filter(i => !level || i.level === level).length;
  }

  // Temas e lições de gramática de um nível que têm erros por rever
  groups(level) {
    const map = new Map();
    this.items.filter(i => !level || i.level === level).forEach(i => {
      const g = map.get(i.group) || { id: i.group, label: i.label, n: 0 };
      g.n++;
      map.set(i.group, g);
    });
    return [...map.values()];
  }

  // Até 25 palavras ao acaso, para um teste normal (as respostas atualizam a revisão espaçada)
  wordKeys(scope) {
    return Utils.shuffle(this.select(scope).filter(i => i.kind === "w").map(i => i.ref)).slice(0, 25);
  }

  // Lição de gramática "virtual" com exercícios de gramática e perguntas dos textos que ainda falhas
  reviewLesson(scope) {
    const picked = Utils.shuffle(this.select(scope).filter(i => i.kind !== "w")).slice(0, ErrorReview.GRAMMAR_MAX);
    const exercises = picked.map(i => i.kind === "g" ? this.grammarExercise(i.ref) : this.readingExercise(i.ref)).filter(Boolean);
    if (!exercises.length) return null;
    return {
      id: "revisao", review: true, level: scope.level || "", pt: "Revisão dos teus erros", exercises, size: exercises.length,
      backLabel: "Voltar ao teste",
      back: app => app.go("teste"),
      fresh: () => new ErrorReview(this.progress, this.dict, this.grammar, this.texts).reviewLesson(scope),
    };
  }

  grammarExercise(ref) {
    const lesson = this.grammarLesson(ref);
    return lesson?.exercises[Number(ref.slice(ref.lastIndexOf(":") + 1))];
  }

  // Pergunta de compreensão de um texto, no formato de um exercício de escolha
  readingExercise(ref) {
    const [themeId, idx] = ref.split(":");
    const story = this.dict.theme(themeId)?.story || this.texts.find(t => t.id === themeId);
    const q = story?.questions[Number(idx)];
    if (!q) return null;
    const x = new GrammarExercise(["c", q.q, q.options[q.answer], q.options.filter((_, j) => j !== q.answer).join("|"), "", "Texto: " + story.title]);
    x.src = { kind: "r", ref };
    return x;
  }
}
