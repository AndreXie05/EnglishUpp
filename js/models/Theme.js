// Um tema = uma lição: lista de palavras + texto de leitura
class Theme {
  constructor(raw, index) {
    this.id = raw.id;
    this.index = index;
    this.level = raw.level;
    this.pt = raw.pt;
    this.en = raw.en;
    this.words = raw.words.map(w => new Word(raw.id, w));
    this.text = (raw.text || []).map(([en, pt]) => ({ en, pt }));
    this.story = STORIES[raw.id] || null; // texto de 200-300 palavras com perguntas
  }

  get number() {
    return this.index + 1;
  }

  get size() {
    return this.words.length;
  }

  findWord(text) {
    return this.words.find(w => w.en.toLowerCase() === text.toLowerCase());
  }

  // Expressão regular de uma palavra da lição. Aceita a primeira palavra flexionada:
  // study → studies/studied, bring up → brings up, make → makes/making
  static pattern(word) {
    const esc = Utils.escapeRegExp;
    const [first, ...rest] = word.split(" ");
    let head;
    if (/[^aeiou]y$/i.test(first)) head = `${esc(first.slice(0, -1))}(?:y|ies|ied|ying)`;
    else if (/e$/i.test(first)) head = `${esc(first.slice(0, -1))}(?:e|es|ed|ing)`;
    else head = `${esc(first)}(?:s|es|ed|d|ing)?`;
    const tail = rest.map((t, i) => (i === rest.length - 1 && /^[a-z]+$/i.test(t) ? `${esc(t)}(?:s|es)?` : esc(t)));
    return new RegExp(`\\b${[head, ...tail].join(" ")}\\b`, "gi");
  }

  // Posições das palavras da lição dentro de uma frase (as expressões mais compridas têm prioridade)
  wordRanges(sentence) {
    const found = [];
    for (const w of this.words) {
      for (const m of sentence.matchAll(Theme.pattern(w.en))) {
        found.push({ start: m.index, end: m.index + m[0].length, key: w.key, exact: m[0].toLowerCase() === w.en.toLowerCase() });
      }
    }
    found.sort((x, y) => x.start - y.start || (y.end - y.start) - (x.end - x.start) || y.exact - x.exact);
    const ranges = [];
    let last = -1;
    for (const r of found) {
      if (r.start < last) continue;
      ranges.push({ start: r.start, end: r.end, key: r.key });
      last = r.end;
    }
    return ranges;
  }

  // Uma palavra só dá para "frase com espaço" se aparecer no seu exemplo
  hasInExample(word) {
    return this.wordRanges(word.exEn).some(r => r.key === word.key);
  }
}
