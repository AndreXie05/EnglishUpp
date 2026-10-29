// Um verbo com as suas formas e conjugações (presente, passado, futuro, present perfect, presente contínuo)
class Verb {
  static PRONOUNS = [["I", "I"], ["you", "you"], ["he / she / it", "he"], ["we", "we"], ["they", "they"]];
  static TENSES = [["present", "Presente simples"], ["past", "Passado simples"], ["future", "Futuro (will)"],
    ["perfect", "Present perfect"], ["continuous", "Presente contínuo"]];

  static #all = null;
  static #irregular = null;

  static all() {
    return Verb.#all ||= VERBS.map(line => new Verb(line));
  }

  // Formas irregulares → infinitivo (went → go), para o dicionário
  static baseOf(form) {
    if (!Verb.#irregular) {
      Verb.#irregular = new Map();
      Verb.all().filter(v => v.irregular).forEach(v => v.forms.forEach(f => f !== v.base && Verb.#irregular.set(f, v.base)));
    }
    return Verb.#irregular.get(form.toLowerCase());
  }

  constructor(line) {
    const [base, pt, past, pp, third, ing] = line.split("|");
    this.base = base;
    this.pt = pt;
    this.pasts = past.split("/");
    this.participles = pp.split("/");
    this.third = third || (/(s|sh|ch|x|z|o)$/.test(base) ? base + "es" : /[^aeiou]y$/.test(base) ? base.slice(0, -1) + "ies" : base + "s");
    this.ing = ing || (/ie$/.test(base) ? base.slice(0, -2) + "ying" : /(ee|ye|oe)$/.test(base) ? base + "ing" : /e$/.test(base) ? base.slice(0, -1) + "ing" : base + "ing");
  }

  get past() { return this.pasts.join(" / "); }
  get participle() { return this.participles.join(" / "); }

  // Regular: passado e particípio iguais, a acabar em -ed a partir do infinitivo (fed e led são irregulares)
  get irregular() {
    const p = this.pasts[0];
    return !(this.pasts.length === 1 && this.participles[0] === p && p.endsWith("ed") && p.startsWith(this.base.slice(0, -1)));
  }

  get forms() {
    return [this.base, this.third, this.ing, ...this.pasts, ...this.participles];
  }

  // Formas aceites para um tempo e uma pessoa (pron: I, you, he, we, they)
  answers(tense, pron) {
    const he = pron === "he";
    const be = this.base === "be";
    const aux = pron === "I" ? "am" : he ? "is" : "are";
    switch (tense) {
      case "present":
        return [be ? aux : he ? this.third : this.base];
      case "past":
        return be ? [pron === "I" || he ? "was" : "were"] : this.pasts;
      case "future":
        return ["will " + this.base];
      case "perfect":
        return this.participles.map(p => (he ? "has " : "have ") + p);
      default:
        return [aux + " " + this.ing];
    }
  }

  form(tense, pron) {
    return this.answers(tense, pron)[0];
  }

  matches(query) {
    const q = Dictionary.plain(query.trim());
    return !q || this.forms.some(f => f.startsWith(q)) || Dictionary.plain(this.pt).includes(q);
  }
}
