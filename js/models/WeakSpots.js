// Pontos fracos: onde erras mais (classe de palavra, tema, tipo de exercício), a partir das respostas à primeira tentativa
class WeakSpots {
  static MIN = 6;      // respostas mínimas para uma categoria contar
  static THRESHOLD = 0.2; // taxa de erro a partir da qual é “fraco”

  static POS = { "subst.": "Nomes", verbo: "Verbos", "adj.": "Adjetivos", "adv.": "Advérbios", "expr.": "Expressões", "prep.": "Preposições", "conj.": "Conjunções", "num.": "Números" };
  static TYPES = {
    "en-pt": "Escolher a tradução", "pt-en": "Dizer em inglês", fill: "Escolher a palavra que falta", "fill-write": "Escrever a palavra que falta",
    ipa: "Pronúncia", write: "Escrever a palavra", ctx: "Palavra numa frase", "sent-pt": "Traduzir frases", "sent-en": "Frases em inglês", "ipa-en": "Palavra pela pronúncia", "write-ipa": "Escrever pela pronúncia",
  };

  constructor(progress, dict) {
    this.progress = progress;
    this.dict = dict;
  }

  // [{ kind, id, label, n, rate }] por ordem de taxa de erro (as piores primeiro)
  list(limit = 5) {
    const st = this.progress.data.stats || {};
    const out = [];
    const add = (kind, map, labelOf) => Object.entries(map || {}).forEach(([id, [right, wrong]]) => {
      const n = right + wrong, rate = n ? wrong / n : 0;
      const label = labelOf(id);
      if (label && n >= WeakSpots.MIN && rate >= WeakSpots.THRESHOLD) out.push({ kind, id, label, n, rate });
    });
    add("pos", st.pos, id => WeakSpots.POS[id] && `${WeakSpots.POS[id]}`);
    add("theme", st.theme, id => this.dict.theme(id)?.pt);
    add("type", st.type, id => WeakSpots.TYPES[id]);
    return out.sort((a, b) => b.rate - a.rate || b.n - a.n).slice(0, limit);
  }

  // Palavras para treinar uma categoria: primeiro as que já falhaste, depois as outras já estudadas
  keys(spot) {
    const words = this.progress.data.words;
    // Palavras já estudadas, ou de temas onde já fizeste exercícios
    const fromThemes = this.dict.themes.filter(t => this.progress.lesson(t.id) || this.progress.partsDone(t.id)).flatMap(t => t.words.map(w => w.key));
    const studied = [...new Set([...Object.keys(words), ...fromThemes])].filter(k => this.dict.has(k));
    const inCat = k => {
      const w = this.dict.word(k);
      return spot.kind === "pos" ? w.pos === spot.id : spot.kind === "theme" ? w.themeId === spot.id : true;
    };
    const pool = (spot.kind === "theme" ? this.dict.theme(spot.id).words.map(w => w.key) : studied).filter(inCat);
    const bad = pool.filter(k => (words[k]?.wrong || 0) > 0);
    return Utils.shuffle(bad).concat(Utils.shuffle(pool.filter(k => !bad.includes(k)))).slice(0, 25);
  }
}
