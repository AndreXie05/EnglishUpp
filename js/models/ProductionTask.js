// Exercícios de produção escrita feitos a partir das lições: ordenar uma frase, escrever uma frase própria
// com uma palavra e completar um texto de leitura. Não precisam de conteúdo novo, usam as lições já feitas.

// Ordenar as palavras de uma frase (com a tradução portuguesa como pista)
class OrderTask {
  static MIN_WORDS = 4;
  static MAX_WORDS = 12;

  constructor(pair) {
    this.pt = pair.pt;
    this.en = pair.en;
    this.themeId = pair.themeId;
    this.key = pair.key;
    this.words = pair.en.split(" ");
    this.pool = OrderTask.scramble(this.words);
  }

  // Frases com um tamanho razoável para ordenar
  static fits(pair) {
    const n = pair.en.split(" ").length;
    return n >= OrderTask.MIN_WORDS && n <= OrderTask.MAX_WORDS;
  }

  // Mistura as palavras, garantindo que a ordem sai diferente da original
  static scramble(words) {
    let mixed = Utils.shuffle(words);
    for (let i = 0; i < 6 && mixed.join(" ") === words.join(" "); i++) mixed = Utils.shuffle(words);
    return mixed;
  }

  check(given) {
    const ok = Utils.normalize(given.join(" ")) === Utils.normalize(this.en);
    return { ok };
  }
}

// Escrever uma frase própria com uma palavra da lição. Só se verifica a forma (a palavra aparece, tamanho,
// maiúscula e pontuação); a gramática compara-se com a frase modelo
class WriteTask {
  static MIN_WORDS = 3;

  // Só entram palavras cujo exemplo já tem o tamanho pedido
  static fits(word) {
    return word.exEn.split(/\s+/).length >= WriteTask.MIN_WORDS;
  }

  constructor(word) {
    this.word = word;
  }

  check(text) {
    const t = text.trim();
    const problems = [];
    if (!new RegExp(Theme.pattern(this.word.en).source, "i").test(t)) problems.push(`Usa a palavra “${this.word.en}” (podes mudar a forma, por exemplo no plural ou no passado).`);
    if (t.split(/\s+/).filter(Boolean).length < WriteTask.MIN_WORDS) problems.push(`Escreve uma frase com pelo menos ${WriteTask.MIN_WORDS} palavras.`);
    if (!/^[A-Z]/.test(t)) problems.push("Começa a frase com maiúscula.");
    if (!/[.!?]$/.test(t)) problems.push("Acaba a frase com um ponto final, ponto de exclamação ou de interrogação.");
    return { ok: problems.length === 0, problems };
  }
}

// Completar um parágrafo do texto de leitura de uma lição com as palavras dessa lição
class ClozeTask {
  static BLANKS = 6;

  constructor(theme, segments) {
    this.theme = theme;
    this.segments = segments; // { text } ou { blank: n, answer, key, base, pt }
    this.blanks = segments.filter(s => s.blank !== undefined);
  }

  // Texto à parte da lição (CLOZE): os espaços podem ser palavras da lição (de preferência) e de lições anteriores
  static fromText(theme, text, dict) {
    const found = new Map();
    dict.themes.filter(t => t.index <= theme.index).forEach(t => t.wordRanges(text).forEach(r => {
      if (!found.has(r.key)) found.set(r.key, { ...r, own: t === theme });
    }));
    // Sem sobreposições (ex.: “thank you” e “you”): fica a primeira
    const all = [...found.values()].sort((x, y) => x.start - y.start || y.end - x.end);
    const free = all.filter((r, i) => !all.slice(0, i).some(p => p.end > r.start && p.start < r.end));
    if (free.length < 3) return null;
    const own = Utils.shuffle(free.filter(r => r.own)).slice(0, 4);
    const rest = Utils.shuffle(free.filter(r => !own.includes(r))).slice(0, ClozeTask.BLANKS - own.length);
    const chosen = own.concat(rest).sort((x, y) => x.start - y.start);
    const segments = [];
    let at = 0;
    chosen.forEach((r, n) => {
      if (r.start > at) segments.push({ text: text.slice(at, r.start) });
      const w = dict.word(r.key);
      segments.push({ blank: n, answer: text.slice(r.start, r.end), key: r.key, base: w.en, pt: w.pt });
      at = r.end;
    });
    if (at < text.length) segments.push({ text: text.slice(at) });
    return new ClozeTask(theme, segments);
  }

  // Cria o exercício a partir de um tema; null se o texto não tiver palavras suficientes da lição
  static build(theme, dict) {
    const texts = typeof CLOZE !== "undefined" ? CLOZE[theme.id] || [] : [];
    for (const text of Utils.shuffle(texts)) {
      const task = ClozeTask.fromText(theme, text, dict);
      if (task) return task;
    }
    const story = theme.story;
    if (!story) return null;
    const order = Utils.shuffle(story.paragraphs.map((_, i) => i));
    for (const i of order) {
      const text = story.paragraphs[i];
      const seen = new Set();
      const ranges = theme.wordRanges(text).filter(r => !seen.has(r.key) && seen.add(r.key));
      if (ranges.length < 3) continue;
      const chosen = Utils.shuffle(ranges).slice(0, ClozeTask.BLANKS).sort((a, b) => a.start - b.start);
      const segments = [];
      let at = 0;
      chosen.forEach((r, n) => {
        if (r.start > at) segments.push({ text: text.slice(at, r.start) });
        const w = dict.word(r.key);
        segments.push({ blank: n, answer: text.slice(r.start, r.end), key: r.key, base: w.en, pt: w.pt });
        at = r.end;
      });
      if (at < text.length) segments.push({ text: text.slice(at) });
      return new ClozeTask(theme, segments);
    }
    return null;
  }

  // "ok" se igual ao que está no texto; "almost" se deu a palavra da lição noutra forma
  checkBlank(blank, given) {
    const g = Utils.normalize(given);
    if (g && g === Utils.normalize(blank.answer)) return "ok";
    if (g && g === Utils.normalize(blank.base)) return "almost";
    return "no";
  }
}
