// Pronúncias erradas mas credíveis, em IPA, para o Escape room (fine /faɪn/ → /fine/, /fɪn/, /faɪnɪ/).
// São os enganos típicos de quem fala português: ler à letra, trocar a vogal, acrescentar um "i" no fim,
// ler letras mudas (knife → /knaɪf/) ou trocar sons que não existem em português (θ → t).
class IpaTrap {
  static SYMBOLS = ["tʃ", "dʒ", "aɪ", "eɪ", "ɔɪ", "aʊ", "oʊ", "iː", "ɑː", "ɔː", "uː", "ɝː"];

  static VOWELS = {
    aɪ: ["ɪ", "eɪ", "iː"], eɪ: ["e", "aɪ", "æ"], ɔɪ: ["ɑː", "oʊ"], aʊ: ["oʊ", "ɑː", "uː"], oʊ: ["ɑː", "aʊ", "uː"],
    iː: ["ɪ", "aɪ", "e"], ɑː: ["æ", "eɪ", "ʌ"], ɔː: ["oʊ", "ɑː", "aʊ"], uː: ["ʊ", "ʌ", "aʊ"], ɝː: ["er", "ɔːr", "ʊr"], ɚ: ["ɑːr", "er", "ɔːr"],
    ə: ["æ", "e", "ɑː"], ɪ: ["iː", "aɪ", "e"], i: ["aɪ", "e"], e: ["iː", "eɪ", "ɪ"],
    æ: ["e", "eɪ", "ɑː"], ʌ: ["ɑː", "uː", "æ"], ʊ: ["uː", "ʌ", "oʊ"], u: ["ʊ", "ʌ"],
  };

  static CONSONANTS = { θ: ["t", "f"], ð: ["d", "z"], ʃ: ["s", "tʃ"], tʃ: ["ʃ", "k"], dʒ: ["ʒ", "ɡ"], ʒ: ["dʒ", "z"], z: ["s"], v: ["b"], w: ["v"], ŋ: ["n", "ŋɡ"], h: [""] };

  static tokens(ipa) {
    const out = [];
    for (let i = 0; i < ipa.length;) {
      const m = IpaTrap.SYMBOLS.find(k => ipa.startsWith(k, i)) || ipa[i];
      out.push(m);
      i += m.length;
    }
    return out;
  }

  // A palavra lida "à letra", como se fosse português: fine → /fine/, thursday → /tursdai/
  static byLetters(word) {
    return word.toLowerCase()
      .replace(/sh/g, "ʃ").replace(/ch/g, "tʃ").replace(/th/g, "t").replace(/ph/g, "f").replace(/ck/g, "k").replace(/qu/g, "kw")
      .replace(/c(?=[eiy])/g, "s").replace(/c/g, "k").replace(/g(?=[eiy])/g, "ʒ").replace(/g/g, "ɡ").replace(/j/g, "ʒ")
      .replace(/x/g, "ks").replace(/y/g, "i").replace(/h/g, "").replace(/([^aeiou])\1/g, "$1");
  }

  // Três pronúncias erradas diferentes da certa
  static wrong(word, ipa) {
    const tokens = IpaTrap.tokens(ipa), variants = map => {
      const out = [];
      tokens.forEach((t, i) => (map[t] || []).forEach(alt => out.push(tokens.map((x, j) => j === i ? alt : x).join(""))));
      return Utils.shuffle(out);
    };
    const vowels = variants(IpaTrap.VOWELS), consonants = variants(IpaTrap.CONSONANTS);
    const spelled = word.toLowerCase();
    const extraVowel = /[aeiouəɪʊʌæːɚr]$/.test(ipa) ? null : ipa + "ɪ";
    const silent = /^kn/.test(spelled) ? "k" + ipa : /^wr/.test(spelled) ? "w" + ipa : /mb$/.test(spelled) ? ipa + "b" : null;
    const pool = [IpaTrap.byLetters(word), vowels[0], silent, extraVowel, consonants[0], ...vowels.slice(1), ...consonants.slice(1)];
    // só o acento tónico de diferença não conta como opção diferente
    const plain = x => x.replace(/[ˈˌ]/g, "");
    const out = [];
    for (const p of pool) if (p && plain(p) !== plain(ipa) && !out.some(o => plain(o) === plain(p))) out.push(p);
    return out.slice(0, 3);
  }
}
