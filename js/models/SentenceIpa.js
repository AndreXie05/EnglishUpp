// Pronúncia (IPA) de uma frase, palavra a palavra: WORD_IPA, depois o dicionário, depois formas regulares
// (-s, -ed, -ing, -er, -est, -ly) tiradas da palavra base. Se faltar uma palavra, não há pronúncia (null)
class SentenceIpa {
  constructor(dict) {
    this.dict = new Map(dict.entries.filter(e => e.ipa).map(e => [e.en.toLowerCase(), e.ipa]));
    this.cache = new Map();
  }

  static words(s) {
    return s.toLowerCase().replace(/[’‘]/g, "'").match(/[a-zà-öø-ÿ]+(?:'[a-zà-öø-ÿ]+)*/g) || [];
  }

  of(sentence) {
    if (!this.cache.has(sentence)) {
      const parts = SentenceIpa.words(sentence).map(w => this.word(w));
      this.cache.set(sentence, parts.length && !parts.includes(null) ? parts.join(" ") : null);
    }
    return this.cache.get(sentence);
  }

  base(w) {
    return (typeof WORD_IPA !== "undefined" && WORD_IPA[w]) ?? this.dict.get(w) ?? null;
  }

  word(w) {
    const known = this.base(w);
    if (known !== null) return known;
    if (w.endsWith("'s")) return this.suffix(w.slice(0, -2), "s");
    for (const [end, kind, bases] of SentenceIpa.RULES) {
      if (!w.endsWith(end) || w.length - end.length < 2) continue;
      const stem = w.slice(0, -end.length);
      for (const b of bases(stem)) {
        const ipa = this.base(b);
        if (ipa !== null && !ipa.includes(" ")) return SentenceIpa.add(ipa, kind, b);
      }
    }
    return null;
  }

  suffix(w, kind) {
    const ipa = this.word(w);
    return ipa === null ? null : SentenceIpa.add(ipa, kind, w);
  }

  // terminação escrita → tipo de som e as palavras base possíveis
  static RULES = [
    ["ies", "s", s => [s + "y"]],
    ["ied", "d", s => [s + "y"]],
    ["ier", "er", s => [s + "y"]],
    ["iest", "est", s => [s + "y"]],
    ["ily", "ly", s => [s + "y"]],
    ["s", "s", s => [s]], // antes de "es": uses → use, não us
    ["es", "s", s => [s]],
    ["ed", "d", s => [s + "e", s, SentenceIpa.undouble(s)]],
    ["ing", "ing", s => [s + "e", s, SentenceIpa.undouble(s)]],
    ["er", "er", s => [s + "e", s, SentenceIpa.undouble(s)]],
    ["est", "est", s => [s + "e", s, SentenceIpa.undouble(s)]],
    ["ly", "ly", s => [s, s + "le"]],
  ];

  static undouble(s) {
    return /([bdgklmnprt])\1$/.test(s) ? s.slice(0, -1) : s;
  }

  static VOICELESS = /(p|t|k|f|θ)$/;
  static SIBILANT = /(s|z|ʃ|ʒ)$/;

  // Junta o som do sufixo ao IPA da palavra base (com acento se passa a ter duas sílabas)
  // O IPA segue o Cambridge (US): o r diz-se sempre (car /kɑːr/) e t̬ = t entre vogais, parecido com um r rápido (water /ˈwɑːt̬ɚ/)
  static add(ipa, kind, spelled) {
    if (kind === "ly" && /l$/.test(ipa)) {
      if (spelled.endsWith("le")) return SentenceIpa.stress(ipa.replace(/ə?l$/, "li")); // simple → simply
      return SentenceIpa.stress(/[əːɪʊ]l$|[aeɔ]ɪl$/.test(ipa) ? ipa + "i" : ipa.slice(0, -1) + "əli"); // final → finally /ˈfaɪnəli/
    }
    let end;
    if (kind === "s") end = SentenceIpa.SIBILANT.test(ipa) ? "ɪz" : SentenceIpa.VOICELESS.test(ipa) ? "s" : "z";
    else if (kind === "d") end = /[td]$/.test(ipa) ? "ɪd" : /(p|k|f|θ|s|ʃ)$/.test(ipa) ? "t" : "d";
    else end = { ing: "ɪŋ", er: "ɚ", est: "ɪst", ly: "li" }[kind];
    if (kind === "ly" && /i$/.test(ipa)) ipa = ipa.slice(0, -1) + "ɪ"; // happy → happily
    // t entre vogais: get /ɡet/ → getting /ˈɡet̬ɪŋ/
    if (/^[ɪɚ]/.test(end)) ipa = ipa.replace(/([aeiouɑɔəɝɚɪʊʌæːr])t$/, "$1t̬");
    const out = ipa + end;
    return /^[ɪɚ]/.test(end) || end === "li" ? SentenceIpa.stress(out) : out;
  }

  // Palavra que ganhou uma sílaba: se não tinha acento, leva-o no início
  static stress(ipa) {
    return /[ˈˌ]/.test(ipa) ? ipa : "ˈ" + ipa;
  }
}
