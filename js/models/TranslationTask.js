// Uma frase em português para traduzir para inglês
class TranslationTask {
  constructor(pair, dict) {
    this.pt = pair.pt;
    this.en = pair.en;
    this.themeId = pair.themeId;
    this.word = pair.key ? dict.word(pair.key) : null; // palavra-chave da frase, para a ajuda
  }

  check(text) {
    const diff = TextDiff.compare(text, this.en);
    return { correct: diff.errors === 0, almost: diff.errors === 1, diff };
  }
}
