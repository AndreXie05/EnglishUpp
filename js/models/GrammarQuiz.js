// Uma ronda de exercícios de uma lição de gramática
class GrammarQuiz {
  constructor(lesson) {
    this.lesson = lesson;
    this.items = lesson.ordered ? lesson.exercises.slice() : Utils.shuffle(lesson.exercises);
    this.index = 0;
    this.answered = null; // { given, ok }
    this.wrong = [];
    this.score = 0;
  }

  get current() {
    return this.items[this.index];
  }

  get finished() {
    return this.index >= this.items.length;
  }

  get percent() {
    return Math.round(this.score / this.items.length * 100);
  }

  get progressPercent() {
    return Math.round(this.index / this.items.length * 100);
  }

  answer(given) {
    if (this.answered) return;
    const ok = this.current.check(given);
    this.answered = { given, ok };
    if (ok) this.score++;
    else this.wrong.push(this.current);
  }

  next() {
    this.answered = null;
    this.index++;
  }
}
