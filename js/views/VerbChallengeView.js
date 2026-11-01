// Desafio de 60 segundos com os verbos irregulares: formas e tempos
class VerbChallengeView extends ChallengeView {
  get bestKey() { return "verbBest"; }
  get rule() { return "o máximo de perguntas sobre verbos irregulares (passado, particípio, presente, futuro…)"; }
  get heading() { return "Verbos em 60 segundos"; }

  keys() {
    return Verb.all().filter(v => v.irregular);
  }

  makeQuiz() {
    return new VerbQuiz(this.keys());
  }

  question(q) {
    return { eyebrow: "Escolhe a forma certa", text: q.title, options: q.options };
  }
}
