// Desafio de 60 segundos com o passado e o particípio dos verbos irregulares
class VerbChallengeView extends ChallengeView {
  get bestKey() { return "verbBest"; }
  get rule() { return "o máximo de passados e particípios de verbos irregulares"; }
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
