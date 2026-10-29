// Uma lição de gramática: explicação em português, exemplos e exercícios.
// Exercício: [tipo, frase, resposta, opções erradas, dica, explicação]
// tipo: "c" escolher | "w" escrever | "f" formar palavra | "r" reescrever
// resposta: alternativas separadas por "/"; opções erradas (só em "c"): separadas por "|"
// dica: a palavra de base em "f", o início da frase em "r"
class GrammarLesson {
  constructor(raw) {
    Object.assign(this, { level: raw.level, id: raw.id, pt: raw.pt, rules: raw.rules || [], examples: raw.examples || [] });
    this.intro = raw.intro;
    this.exercises = raw.ex.map(x => new GrammarExercise(x));
    this.exercises.forEach((x, i) => { x.src = { kind: "g", ref: `${this.id}:${i}` }; });
  }

  get size() {
    return this.exercises.length;
  }
}

class GrammarExercise {
  static KINDS = { c: "Escolhe a opção certa", w: "Escreve a palavra que falta", f: "Forma a palavra certa", r: "Reescreve a frase" };

  constructor([t, q, a, o, h, why]) {
    Object.assign(this, { t, q, a, o, h, why });
  }

  get answers() {
    return this.a.split("/");
  }

  get options() {
    return Utils.shuffle([this.a, ...(this.o || "").split("|").filter(Boolean)]);
  }

  static normalize(s) {
    return String(s).toLowerCase().replace(/[’‘]/g, "'").replace(/,/g, "").trim().replace(/[.!?]+$/, "").replace(/\s+/g, " ").trim();
  }

  check(given) {
    const g = GrammarExercise.normalize(given);
    return this.answers.some(a => GrammarExercise.normalize(a) === g);
  }
}
