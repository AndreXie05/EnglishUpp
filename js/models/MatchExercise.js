// Ligar cada palavra inglesa à sua tradução, em rondas de até 5 pares
class MatchExercise {
  constructor(words, size = 5) {
    const shuffled = Utils.shuffle(words);
    const count = Math.ceil(shuffled.length / size);
    this.rounds = Array.from({ length: count }, () => []);
    shuffled.forEach((w, i) => this.rounds[i % count].push(w));
    this.total = words.length;
    this.round = 0;
    this.errors = 0;
    this.startRound();
  }

  startRound() {
    this.left = Utils.shuffle(this.current);
    this.right = Utils.shuffle(this.current);
    this.matched = new Set();
    this.selected = null;
    this.wrongPair = null;
  }

  get current() {
    return this.rounds[this.round];
  }

  get roundDone() {
    return this.matched.size === this.current.length;
  }

  get finished() {
    return this.round >= this.rounds.length;
  }

  get score() {
    return Math.max(0, this.total - this.errors);
  }

  // side é "en" ou "pt"; escolhe-se um de cada lado
  select(side, key) {
    this.wrongPair = null;
    if (this.matched.has(key)) return;
    if (!this.selected || this.selected.side === side) {
      this.selected = { side, key };
      return;
    }
    if (this.selected.key === key) this.matched.add(key);
    else {
      this.errors++;
      this.wrongPair = side === "en" ? { en: key, pt: this.selected.key } : { en: this.selected.key, pt: key };
    }
    this.selected = null;
  }

  nextRound() {
    this.round++;
    if (!this.finished) this.startRound();
  }
}
