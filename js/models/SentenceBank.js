// Banco de frases para traduzir: os exemplos das palavras e as frases das leituras curtas, organizados por tema
class SentenceBank {
  constructor(dict) {
    this.byTheme = new Map(dict.themes.map(t => [t.id, SentenceBank.collect(t)]));
  }

  static collect(theme) {
    const seen = new Set();
    const out = [];
    const add = (en, pt, key = null) => {
      const id = en.toLowerCase();
      if (seen.has(id)) return;
      seen.add(id);
      out.push({ en, pt, key, themeId: theme.id });
    };
    theme.words.forEach(w => add(w.exEn, w.exPt, w.key));
    theme.text.forEach(s => add(s.en, s.pt));
    return out;
  }

  sentences(themeId) {
    return this.byTheme.get(themeId) || [];
  }

  count(themeId) {
    return this.sentences(themeId).length;
  }

  get total() {
    return [...this.byTheme.values()].reduce((n, list) => n + list.length, 0);
  }

  // n frases sorteadas de um ou de vários temas
  pick(themes, n) {
    return Utils.shuffle(themes.flatMap(t => this.sentences(t.id))).slice(0, n);
  }
}
