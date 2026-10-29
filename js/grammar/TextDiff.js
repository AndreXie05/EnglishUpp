// Compara a tradução do aluno com a frase certa, palavra a palavra
class TextDiff {
  static CONTRACTIONS = {
    "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are", "he's": "he is", "she's": "she is",
    "it's": "it is", "that's": "that is", "what's": "what is", "where's": "where is", "there's": "there is",
    "let's": "let us", "don't": "do not", "doesn't": "does not", "didn't": "did not", "can't": "can not",
    "cannot": "can not", "won't": "will not", "isn't": "is not", "aren't": "are not", "i've": "i have", "i'll": "i will",
  };

  static tokens(s) {
    return s.toLowerCase().replace(/’/g, "'").replace(/[^a-z0-9' ]/g, " ")
      .split(/\s+/).filter(Boolean)
      .flatMap(t => (TextDiff.CONTRACTIONS[t] || t).split(" "));
  }

  // Devolve a lista de operações: same (igual), extra (só na resposta), missing (falta na resposta)
  static compare(given, expected) {
    const a = TextDiff.tokens(given), b = TextDiff.tokens(expected);
    const lcs = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = a.length - 1; i >= 0; i--)
      for (let j = b.length - 1; j >= 0; j--)
        lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);

    const ops = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { ops.push({ type: "same", word: a[i] }); i++; j++; }
      else if (lcs[i + 1][j] >= lcs[i][j + 1]) ops.push({ type: "extra", word: a[i++] });
      else ops.push({ type: "missing", word: b[j++] });
    }
    while (i < a.length) ops.push({ type: "extra", word: a[i++] });
    while (j < b.length) ops.push({ type: "missing", word: b[j++] });

    const extra = ops.filter(o => o.type === "extra").length;
    const missing = ops.filter(o => o.type === "missing").length;
    // Uma palavra trocada conta como um só erro
    return { ops, errors: Math.max(extra, missing) };
  }
}
