// Ditado de memória: compara o que a pessoa escreveu com a frase, palavra a palavra.
// Um erro de escrita pequeno (bank → banc) conta como certo, mas mostra a grafia correta.
// Se o que escreveu for outra palavra que existe (band em vez de bank), é erro a sério.
class Dictation {
  constructor(en, pt, known = () => false) {
    this.en = en;
    this.pt = pt;
    this.known = known;
  }

  static words(s) {
    return s.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9'\s-]/g, " ").split(/\s+/).filter(Boolean);
  }

  // Distância de edição, com troca de duas letras seguidas a contar como um erro só
  static distance(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
    return d[a.length][b.length];
  }

  // "same" | "typo" | "wrong" para uma palavra escrita contra a esperada
  judge(given, want) {
    if (given === want) return "same";
    const near = want.length >= 4 && Dictation.distance(given, want) <= (want.length >= 8 ? 2 : 1);
    return near && !this.known(given) ? "typo" : "wrong";
  }

  // Alinha as palavras (ordem importa); devolve uma lista de { type, want, given }
  check(text) {
    const want = Dictation.words(this.en), got = Dictation.words(text);
    const n = want.length, m = got.length;
    const cost = { same: 0, typo: 0.2, wrong: 1 };
    const d = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    for (let i = 1; i <= n; i++) d[i][0] = i;
    for (let j = 1; j <= m; j++) d[0][j] = j;
    for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost[this.judge(got[j - 1], want[i - 1])]);
    }
    const ops = [];
    let i = n, j = m;
    while (i > 0 || j > 0) {
      if (i > 0 && j > 0) {
        const t = this.judge(got[j - 1], want[i - 1]);
        if (Math.abs(d[i][j] - (d[i - 1][j - 1] + cost[t])) < 1e-9) { ops.unshift({ type: t, want: want[i - 1], given: got[j - 1] }); i--; j--; continue; }
      }
      if (i > 0 && Math.abs(d[i][j] - (d[i - 1][j] + 1)) < 1e-9) { ops.unshift({ type: "missing", want: want[i - 1] }); i--; }
      else { ops.unshift({ type: "extra", given: got[j - 1] }); j--; }
    }
    const wrong = ops.filter(o => o.type === "wrong" || o.type === "missing" || o.type === "extra").length;
    const typos = ops.filter(o => o.type === "typo").length;
    return { ops, wrong, typos, correct: wrong === 0 };
  }
}
