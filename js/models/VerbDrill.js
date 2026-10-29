// Treino de verbos: cada vez que se pede os exercícios saem perguntas novas e diferentes.
// Tem a mesma forma de uma lição de gramática, por isso usa o GrammarQuiz e o GrammarQuizView.
class VerbDrill {
  constructor(verbs, count = 15) {
    this.id = "verbs";
    this.pt = verbs.length === 1 ? `Verbo ${verbs[0].base}` : "Treino de verbos";
    this.verbs = verbs;
    this.count = count;
    this.backLabel = "Voltar aos verbos";
  }

  back(app) {
    app.show(new VerbsView(app, this.verbs.length === 1 ? this.verbs[0] : null));
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
  question(v) {
    const why = `${v.base} · ${v.third} · ${v.ing} · ${v.past} · ${v.participle}`;
    const kind = Utils.pick(["past", "pp", "tense", "tense", "choose"]);
    const [label, pron] = Utils.pick(Verb.PRONOUNS);
    const [tense, tenseName] = Utils.pick(Verb.TENSES);
    if (kind === "past") return ["w", `Passado simples de "${v.base}": ___`, v.pasts.join("/"), "", v.pt, why];
    if (kind === "pp") return ["w", `Particípio passado de "${v.base}": ___`, v.participles.join("/"), "", v.pt, why];
    if (kind === "tense") {
      return ["w", `${label} ___ (${v.base})`, v.answers(tense, pron).join("/"), "", `${tenseName} · ${v.pt}`, why];
    }
    const isPast = Utils.pick([true, false]);
    const valid = isPast ? v.pasts : v.participles;
    const wrong = [...new Set(v.forms)].filter(f => !valid.includes(f));
    return ["c", `${isPast ? "Passado simples" : "Particípio passado"} de "${v.base}": ___`, valid[0], Utils.shuffle(wrong).slice(0, 3).join("|"), v.pt, why];
  }
}
