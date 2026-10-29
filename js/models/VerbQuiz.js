// Perguntas rápidas sobre verbos irregulares (passado e particípio), com a mesma forma do Quiz do desafio
class VerbQuiz {
  constructor(verbs, count = 150) {
    this.verbs = verbs;
    this.queue = Utils.shuffle(verbs).concat(Utils.shuffle(verbs)).slice(0, count).map(v => this.makeQuestion(v));
    this.index = 0;
    this.score = 0;
    this.answered = null;
    this.wrong = [];
  }

  makeQuestion(v) {
    const pp = Utils.pick([true, false]);
    const valid = pp ? v.participles : v.pasts;
    const form = x => pp ? x.participles : x.pasts;
    const pool = Utils.shuffle(this.verbs.filter(x => x !== v).flatMap(x => form(x)).filter(f => !valid.includes(f)));
    const wrong = [...new Set([v.base + "ed", ...pool])].filter(f => !valid.includes(f)).slice(0, 3);
    const options = Utils.shuffle([valid[0], ...wrong]).map(f => ({ key: f, label: f }));
    return {
      retry: false, written: false, word: { key: valid[0], pt: v.pt },
      title: `${pp ? "Particípio passado" : "Passado simples"} de “${v.base}” (${v.pt})`,
      options, isCorrect: given => valid.includes(given),
    };
  }

  get current() { return this.queue[this.index]; }
  get finished() { return this.index >= this.queue.length; }

  answer(given) {
    if (this.answered) return;
    const ok = this.current.isCorrect(given);
    this.answered = { ok, given };
    if (ok) this.score++;
    else this.wrong.push(this.current.word);
  }
}
