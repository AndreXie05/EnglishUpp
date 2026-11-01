// Treino de verbos: cada vez que se pede os exercícios saem perguntas novas e diferentes.
// Tem a mesma forma de uma lição de gramática, por isso usa o GrammarQuiz e o GrammarQuizView.
class VerbDrill {
  // tense: treina só um tempo (present, past…); sem ele, todos misturados
  constructor(verbs, count = 15, tense = null) {
    this.id = tense ? `verbs-${tense}` : "verbs";
    this.pt = tense ? `Treino: ${Verb.TENSES.find(([t]) => t === tense)[1]}` : verbs.length === 1 ? `Verbo ${verbs[0].base}` : "Treino de verbos";
    this.verbs = verbs;
    this.count = count;
    this.tense = tense;
    this.backLabel = "Voltar aos verbos";
  }

  back(app) {
    const view = new VerbsView(app, this.verbs.length === 1 ? this.verbs[0] : null, this.tense ? "tenses" : null);
    // Volta à página do tempo que se treinou
    if (this.tense) view.step = TENSE_GUIDE.findIndex(g => g.tense === this.tense) + 1;
    app.show(view);
  }

  get exercises() {
    const seen = new Set(), out = [];
    for (let tries = 0; out.length < this.count && tries < 200; tries++) {
      const v = Utils.pick(this.verbs), x = this.question(v);
      if (!seen.has(x[1])) { seen.add(x[1]); out.push(new GrammarExercise(x)); }
    }
    return out;
  }

  // [tipo, frase, resposta, opções erradas, dica, explicação]
  // Todos os tempos (presente, passado, futuro, present perfect, contínuo) e o particípio saem com a mesma frequência
  question(v) {
    const forms = `${v.base} · ${v.third} · ${v.ing} · ${v.past} · ${v.participle}`;
    const written = Utils.pick([true, false]);
    if (!this.tense && Utils.pick(Verb.TENSES.concat([["pp"]]))[0] === "pp") {
      const valid = v.participles;
      const wrong = [...new Set(v.forms)].filter(f => !valid.includes(f));
      return written
        ? ["w", `Particípio passado de "${v.base}": ___`, valid.join("/"), "", v.pt, forms]
        : ["c", `Particípio passado de "${v.base}": ___`, valid[0], Utils.shuffle(wrong).slice(0, 3).join("|"), v.pt, forms];
    }
    const [label, pron] = Utils.pick(Verb.PRONOUNS);
    const [tense, tenseName] = this.tense ? Verb.TENSES.find(([t]) => t === this.tense) : Utils.pick(Verb.TENSES);
    const valid = v.answers(tense, pron);
    // Depois de responder, lembra a regra do tempo e as formas do verbo
    const rule = TENSE_GUIDE.find(g => g.tense === tense).rule;
    const why = `${tenseName} = ${rule}. Formas: ${forms}`;
    if (written) return ["w", `${label} ___ (${v.base})`, valid.join("/"), "", `${tenseName} · ${v.pt}`, why];
    // Opções erradas: o mesmo verbo e a mesma pessoa noutros tempos (went, will go, has gone…)
    const wrong = [...new Set(Verb.TENSES.map(([t]) => v.form(t, pron)))].filter(f => !valid.includes(f));
    return ["c", `${label} ___ (${v.base}) · ${tenseName}`, valid[0], Utils.shuffle(wrong).slice(0, 3).join("|"), v.pt, why];
  }
}
