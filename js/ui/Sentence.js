// Mostra uma frase como texto simples.
// blankKey troca a primeira ocorrência dessa palavra da lição por um espaço em branco (exercícios de frases).
class Sentence {
  static render(text, theme, blankKey = null) {
    if (!blankKey) return Utils.esc(text);
    const range = theme.wordRanges(text).find(r => r.key === blankKey);
    if (!range) return Utils.esc(text);
    return Utils.esc(text.slice(0, range.start)) + `<span class="blank" aria-label="palavra em falta"></span>` + Utils.esc(text.slice(range.end));
  }
}
