// Compara a tradução do aluno com a frase certa, palavra a palavra.
// Há várias formas de traduzir a mesma frase, por isso aceita: contrações (I'm = I am), sinónimos comuns
// (big = large, film = movie, start = begin…), inglês britânico e americano, "have got" = "have",
// "going to" = "will", números em algarismos e palavras soltas como "please" ou "also / too" noutro sítio da frase.
class TextDiff {
  static CONTRACTIONS = {
    "i'm": "i am", "you're": "you are", "we're": "we are", "they're": "they are", "he's": "he is", "she's": "she is",
    "it's": "it is", "that's": "that is", "what's": "what is", "where's": "where is", "there's": "there is",
    "let's": "let us", "don't": "do not", "doesn't": "does not", "didn't": "did not", "can't": "can not",
    "cannot": "can not", "won't": "will not", "isn't": "is not", "aren't": "are not", "i've": "i have", "i'll": "i will",
    "you've": "you have", "we've": "we have", "they've": "they have", "you'll": "you will", "he'll": "he will",
    "she'll": "she will", "it'll": "it will", "we'll": "we will", "they'll": "they will", "i'd": "i would",
    "you'd": "you would", "he'd": "he would", "she'd": "she would", "we'd": "we would", "they'd": "they would",
    "wasn't": "was not", "weren't": "were not", "haven't": "have not", "hasn't": "has not", "hadn't": "had not",
    "wouldn't": "would not", "couldn't": "could not", "shouldn't": "should not", "mustn't": "must not",
    "needn't": "need not", "who's": "who is", "here's": "here is", "how's": "how is",
  };

  // Palavras que querem dizer o mesmo numa tradução (cada linha: formas equivalentes; a primeira é a de referência)
  static SYNONYMS = [
    ["big", "large"], ["bigger", "larger"], ["biggest", "largest"], ["small", "little"],
    ["start", "begin"], ["starts", "begins"], ["started", "began", "begun"], ["starting", "beginning"],
    ["finish", "end"], ["finishes", "ends"], ["finished", "ended"],
    ["fast", "quick", "quickly"], ["beautiful", "pretty", "lovely"], ["happy", "glad"],
    ["speak", "talk"], ["speaks", "talks"], ["spoke", "talked"], ["speaking", "talking"],
    ["difficult", "hard"], ["maybe", "perhaps"],
    ["film", "movie"], ["films", "movies"], ["flat", "apartment"], ["flats", "apartments"], ["shop", "store"], ["shops", "stores"],
    ["phone", "mobile", "cellphone"], ["holiday", "holidays", "vacation"], ["sofa", "couch"], ["rubbish", "garbage", "trash"],
    ["lift", "elevator"], ["underground", "subway", "metro", "tube"], ["biscuit", "cookie"], ["biscuits", "cookies"],
    ["football", "soccer"], ["autumn", "fall"], ["favourite", "favorite"], ["colour", "color"], ["colours", "colors"],
    ["centre", "center"], ["theatre", "theater"], ["grey", "gray"], ["mum", "mom", "mother"], ["dad", "father"],
    ["kids", "children"], ["kid", "child"], ["close", "shut"], ["photo", "picture", "photograph"],
    ["photos", "pictures", "photographs"], ["street", "road"], ["gift", "present"],
    ["ill", "sick"], ["pupils", "students"], ["pupil", "student"], ["often", "frequently"],
  ];

  static NUMBERS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

  static #canon = null;

  static canon(w) {
    if (!TextDiff.#canon) {
      TextDiff.#canon = new Map();
      TextDiff.SYNONYMS.forEach(group => group.forEach(x => TextDiff.#canon.has(x) || TextDiff.#canon.set(x, group[0])));
    }
    return TextDiff.#canon.get(w) || w;
  }

  static tokens(s) {
    return s.toLowerCase().replace(/’/g, "'").replace(/[^a-z0-9' ]/g, " ")
      .split(/\s+/).filter(Boolean)
      .flatMap(t => (TextDiff.CONTRACTIONS[t] || t).split(" "));
  }

  // Formas equivalentes de dizer o mesmo, trocadas pela forma de referência (só para comparar)
  static normalize(tokens) {
    const out = [];
    tokens.forEach((t, i) => {
      if (/^\d+$/.test(t) && TextDiff.NUMBERS[+t]) t = TextDiff.NUMBERS[+t];
      // have got = have
      if (t === "got" && /^(have|has|had)$/.test(tokens[i - 1])) return;
      // am / is / are going to + verbo = will + verbo
      if (/^(am|is|are)$/.test(t) && tokens[i + 1] === "going" && tokens[i + 2] === "to" && tokens[i + 3] && !/^(the|a|an)$/.test(tokens[i + 3])) return;
      if (t === "going" && tokens[i + 1] === "to" && /^(am|is|are)$/.test(tokens[i - 1]) && tokens[i + 2] && !/^(the|a|an)$/.test(tokens[i + 2])) { out.push("will"); return; }
      if (t === "to" && tokens[i - 1] === "going" && out[out.length - 1] === "will") return;
      // too / as well no fim da frase = also
      if (t === "too" && i === tokens.length - 1) t = "also";
      if (t === "as" && tokens[i + 1] === "well" && i === tokens.length - 2) { out.push("also"); return; }
      if (t === "well" && tokens[i - 1] === "as" && i === tokens.length - 1) return;
      out.push(TextDiff.canon(t));
    });
    return out;
  }

  // Palavras que podem ir em vários sítios da frase (please; also / too no fim): se as duas frases as têm, não contam
  static dropFloating(a, b) {
    const floating = new Set(["please", "also"]);
    for (const w of floating) {
      if (a.includes(w) && b.includes(w)) { a = a.filter(x => x !== w); b = b.filter(x => x !== w); }
    }
    return [a, b];
  }

  static diff(a, b, same) {
    const lcs = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = a.length - 1; i >= 0; i--)
      for (let j = b.length - 1; j >= 0; j--)
        lcs[i][j] = same(a[i], b[j]) ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);

    const ops = [];
    let i = 0, j = 0;
    while (i < a.length && j < b.length) {
      if (same(a[i], b[j])) { ops.push({ type: "same", word: a[i], expected: b[j] }); i++; j++; }
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

  // Devolve a lista de operações (same, extra, missing) para mostrar, o número de erros e se a frase é igual à de referência
  static compare(given, expected) {
    const a = TextDiff.tokens(given), b = TextDiff.tokens(expected);
    // Para mostrar: palavra a palavra, com os sinónimos a contar como iguais
    const shown = TextDiff.diff(a, b, (x, y) => x === y || TextDiff.canon(x) === TextDiff.canon(y));
    // Para decidir: com todas as formas equivalentes
    const [na, nb] = TextDiff.dropFloating(TextDiff.normalize(a), TextDiff.normalize(b));
    const loose = TextDiff.diff(na, nb, (x, y) => x === y);
    return { ops: shown.ops, errors: Math.min(shown.errors, loose.errors), exact: a.join(" ") === b.join(" ") };
  }
}
