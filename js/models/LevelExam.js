// Exame final de um nível: pronúncia, significado, escrita, frases com espaço, gramática e perguntas sobre textos.
// Devolve uma "lição virtual" que o GrammarQuizView sabe fazer (as perguntas ficam pela ordem das secções).
class LevelExam {
  static PASS = 70;
  static READY = 0.8; // fração das lições do nível que é preciso ter feito
  static COUNTS = { pron: 10, mean: 10, write: 8, fill: 6, grammar: 12, storyQs: 6, stories: 2 };

  constructor(level, { dict, progress, grammar, texts }) {
    Object.assign(this, { level, dict, progress, grammar, texts });
    this.themes = dict.themes.filter(t => t.level === level);
  }

  get lessonsDone() {
    return this.themes.filter(t => this.progress.lesson(t.id)).length;
  }

  get ready() {
    return this.themes.length > 0 && this.lessonsDone >= Math.ceil(this.themes.length * LevelExam.READY);
  }

  // Parte de uma tradução antes de " / " (as exercícios usam "/" para separar respostas)
  static clean(s) {
    return s.split(" / ")[0].trim();
  }

  static ok(s) {
    return s && !/[\/|]/.test(s);
  }

  pick(list, n) {
    return Utils.shuffle(list).slice(0, n);
  }

  choice(q, right, wrong, why = "") {
    return new GrammarExercise(["c", q, right, wrong.join("|"), "", why]);
  }

  words() {
    const known = this.themes.flatMap(t => t.words.map(w => ({ w, t }))).filter(({ w }) => this.progress.lesson(w.themeId));
    return known.length >= 12 ? known : this.themes.flatMap(t => t.words.map(w => ({ w, t })));
  }

  pronunciation(pool) {
    const all = pool.map(x => x.w);
    return this.pick(all.filter(w => LevelExam.ok(w.ipa)), LevelExam.COUNTS.pron).map(w => {
      const wrong = this.pick(all.filter(o => o.ipa !== w.ipa && LevelExam.ok(o.ipa)), 2).map(o => `[${o.ipa}]`);
      return this.choice(`Como se pronuncia «${w.en}»?`, `[${w.ipa}]`, wrong, `${w.en} = [${w.ipa}]`);
    });
  }

  meaning(pool) {
    const all = pool.map(x => x.w);
    return this.pick(all, LevelExam.COUNTS.mean * 2).map(w => ({ w, pt: LevelExam.clean(w.pt) })).filter(x => LevelExam.ok(x.pt)).slice(0, LevelExam.COUNTS.mean).map(({ w, pt }) => {
      const wrong = this.pick(all.filter(o => o.pos === w.pos && LevelExam.clean(o.pt) !== pt && LevelExam.ok(LevelExam.clean(o.pt))), 2).map(o => LevelExam.clean(o.pt));
      if (wrong.length < 2) return null;
      return this.choice(`O que significa «${w.en}»?`, pt, wrong);
    }).filter(Boolean);
  }

  writing(pool) {
    const count = new Map();
    this.dict.allWords.forEach(w => { const k = LevelExam.clean(w.pt).toLowerCase(); count.set(k, (count.get(k) || 0) + 1); });
    const ok = pool.map(x => x.w).filter(w => LevelExam.ok(w.en) && LevelExam.ok(LevelExam.clean(w.pt)) && count.get(LevelExam.clean(w.pt).toLowerCase()) === 1);
    return this.pick(ok, LevelExam.COUNTS.write).map(w => new GrammarExercise(["w", `Escreve em inglês: «${LevelExam.clean(w.pt)}»`, w.en, "", "", `${w.en} = ${w.pt}`]));
  }

  fill(pool) {
    const out = [];
    for (const { w, t } of Utils.shuffle(pool)) {
      if (out.length >= LevelExam.COUNTS.fill) break;
      const r = t.wordRanges(w.exEn).find(x => x.key === w.key);
      if (!r) continue;
      const answer = w.exEn.slice(r.start, r.end);
      if (!LevelExam.ok(answer)) continue;
      out.push(new GrammarExercise(["w", w.exEn.slice(0, r.start) + "___" + w.exEn.slice(r.end), answer, "", `Palavra: ${LevelExam.clean(w.pt)}`, w.exPt]));
    }
    return out;
  }

  grammarPart() {
    const ex = this.grammar.filter(l => l.level === this.level).flatMap(l => l.exercises);
    return this.pick(ex, LevelExam.COUNTS.grammar);
  }

  // Perguntas sobre um texto, com o texto à frente (x.passage)
  reading(title, paragraphs, questions, refPrefix, n) {
    const qs = questions.map((q, i) => ({ q, i }));
    return this.pick(qs, n).sort((a, b) => a.i - b.i).map(({ q, i }) => {
      const x = new GrammarExercise(["c", q.q, q.options[q.answer], q.options.filter((_, j) => j !== q.answer).join("|"), "", "Texto: " + title]);
      x.src = { kind: "r", ref: `${refPrefix}:${i}` };
      x.passage = { title, paragraphs };
      return x;
    });
  }

  readingPart() {
    const out = [];
    this.pick(this.themes.filter(t => t.story), LevelExam.COUNTS.stories).forEach(t =>
      out.push(...this.reading(t.story.title, t.story.paragraphs, t.story.questions, t.id, LevelExam.COUNTS.storyQs)));
    const tx = this.pick(this.texts.filter(t => t.level === this.level), 1)[0];
    if (tx) out.push(...this.reading(tx.title, tx.lines.filter(Boolean), tx.questions, tx.id, tx.questions.length));
    return out;
  }

  lesson() {
    const pool = this.words();
    const exercises = [...this.pronunciation(pool), ...this.meaning(pool), ...this.writing(pool), ...this.fill(pool), ...this.grammarPart(), ...this.readingPart()];
    return {
      id: `exame-${this.level}`, exam: true, ordered: true, level: this.level, pt: `Exame final ${this.level}`, exercises, size: exercises.length,
      backLabel: "Voltar ao progresso",
      back: app => app.go("progresso"),
      fresh: () => new LevelExam(this.level, this).lesson(),
    };
  }
}
