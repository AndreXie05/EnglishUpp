// Todo o conteúdo do curso: temas, palavras das lições e glossário de apoio (palavras dos textos)
class Dictionary {
  constructor(rawThemes, glossary = []) {
    this.themes = rawThemes.map((t, i) => new Theme(t, i));
    this.words = new Map();
    this.lower = new Map();
    this.themes.forEach(t => t.words.forEach(w => {
      this.words.set(w.key, w);
      this.lower.set(w.en.toLowerCase(), w);
    }));
    this.entries = this.buildEntries(glossary);
    this.entryMap = new Map(this.entries.map(e => [e.en.toLowerCase(), e]));
  }

  // Uma entrada por palavra do site; se uma palavra for de uma lição, essa versão (com exemplo) fica
  buildEntries(glossary) {
    const map = new Map();
    glossary.forEach(([en, ipa, pos, pt]) => map.set(en.toLowerCase(), { en, ipa, pos, pt, lesson: false }));
    this.allWords.forEach(w => map.set(w.en.toLowerCase(), {
      en: w.en, ipa: w.ipa, pos: w.pos, pt: w.pt, exEn: w.exEn, exPt: w.exPt, themeId: w.themeId, lesson: true,
    }));
    return [...map.values()].sort((a, b) => a.en.toLowerCase().localeCompare(b.en.toLowerCase()));
  }

  theme(id) {
    return this.themes.find(t => t.id === id);
  }

  word(key) {
    return this.words.get(key);
  }

  has(key) {
    return this.words.has(key);
  }

  get allWords() {
    return [...this.words.values()];
  }

  // Sem maiúsculas nem acentos, para comparar palavras
  static plain(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  // Formas possíveis de uma palavra escrita: "studies" → study, "Mondays" → monday, "running" → run
  static baseForms(term) {
    const t = term.toLowerCase().replace(/’/g, "'").trim().replace(/'s$/, "");
    const forms = [t, t.replace(/ies$/, "y"), t.replace(/es$/, ""), t.replace(/s$/, ""), t.replace(/ed$/, ""),
      t.replace(/ed$/, "e"), t.replace(/ing$/, ""), t.replace(/ing$/, "e"), t.replace(/(.)\1ing$/, "$1"), t.replace(/(.)\1ed$/, "$1"),
      t.replace(/ly$/, ""), t.replace(/ily$/, "y"), t.replace(/er$/, ""), t.replace(/r$/, ""), t.replace(/est$/, ""), t.replace(/st$/, ""),
      t.replace(/ier$/, "y"), t.replace(/iest$/, "y"), t.replace(/(.)\1er$/, "$1"), t.replace(/(.)\1est$/, "$1"), t.replace(/ies$/, "ie"), t.replace(/ied$/, "y")];
    // formas com menos de 3 letras dariam resultados errados (his → hi), excepto goes → go e does → do
    return forms.filter((f, i) => i === 0 || f.length >= 3 || (f.length === 2 && /es$/.test(t)));
  }

  findEntry(term) {
    for (const f of Dictionary.baseForms(term)) if (this.entryMap.has(f)) return this.entryMap.get(f);
    // formas irregulares de verbos (went → go)
    const base = Verb.baseOf(term.toLowerCase().trim());
    return base ? this.entryMap.get(base) || null : null;
  }

  // A palavra existe como entrada, ou faz parte de uma expressão (alarm → alarm clock)
  knows(term) {
    if (this.findEntry(term)) return true;
    const base = Verb.baseOf(term.toLowerCase().trim());
    if (base && base !== term.toLowerCase() && this.knows(base)) return true;
    const forms = Dictionary.baseForms(term);
    return this.entries.some(e => e.en.toLowerCase().split(/[\s-]+/).some(w => forms.includes(w)));
  }

  // Procura uma palavra do site: pelo inglês (começa por, contém) ou pelo português
  search(query, limit = 60) {
    const q = Dictionary.plain(query.trim());
    if (!q) return [];
    const scored = [];
    for (const e of this.entries) {
      const en = Dictionary.plain(e.en), pt = Dictionary.plain(e.pt);
      let score = 0;
      if (en === q) score = 100;
      else if (en.startsWith(q)) score = 80;
      else if (en.includes(q)) score = 50;
      else if (pt.split(/[^a-z0-9]+/).includes(q)) score = 40;
      else if (pt.includes(q)) score = 30;
      if (score) scored.push([score, e]);
    }
    scored.sort((a, b) => b[0] - a[0] || a[1].en.localeCompare(b[1].en));
    const found = scored.map(s => s[1]);
    const exact = this.findEntry(query);
    if (exact && !found.includes(exact)) found.unshift(exact);
    return found.slice(0, limit);
  }

  byLetter(letter) {
    return this.entries.filter(e => e.en[0].toLowerCase() === letter.toLowerCase());
  }
}
