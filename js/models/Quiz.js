// Uma pergunta do teste
class Question {
  static TYPES = {
    EN_PT: "en-pt",           // palavra inglesa → escolher a tradução
    PT_EN: "pt-en",           // tradução → escolher a palavra inglesa
    FILL: "fill",             // frase com espaço → escolher a palavra
    FILL_WRITE: "fill-write", // frase com espaço → escrever a palavra
    IPA: "ipa",               // palavra → escolher a pronúncia certa
    WRITE: "write",           // tradução → escrever a palavra
    CTX: "ctx",               // palavra dentro de uma frase → o que significa aí
    SENT_PT: "sent-pt",       // frase inglesa → escolher a tradução da frase
    SENT_EN: "sent-en",       // frase portuguesa → escolher a frase inglesa
    FILL_PT: "fill-pt",       // frase com espaço e a tradução da frase → escolher a palavra
    FILL_WRITE_PT: "fill-write-pt", // frase com espaço e tradução → escrever a palavra
    IPA_EN: "ipa-en",         // pronúncia /…/ → escolher a palavra
    WRITE_IPA: "write-ipa",   // pronúncia /…/ → escrever a palavra
  };

  // Variações de cada tipo, para os exercícios não parecerem sempre iguais (as chaves de progresso não mudam)
  static EXTRAS = {
    "en-pt+pt-en": ["ctx", "sent-pt", "sent-en"],
    fill: ["fill-pt"],
    "fill-write": ["fill-write-pt"],
    ipa: ["ipa-en"],
    write: ["write-ipa"],
  };

  static expand(types) {
    if (!types) return types;
    const extra = Question.EXTRAS[types.join("+")] || (types.length === 1 ? Question.EXTRAS[types[0]] : null) || [];
    return [...types, ...extra];
  }

  static WRITTEN = [Question.TYPES.WRITE, Question.TYPES.FILL_WRITE, Question.TYPES.WRITE_IPA, Question.TYPES.FILL_WRITE_PT];

  constructor(word, type, options, retry = false) {
    this.word = word;
    this.type = type;
    this.options = options; // palavras (Word) para escolha múltipla
    this.retry = retry;
  }

  get written() {
    return Question.WRITTEN.includes(this.type);
  }

  isCorrect(given) {
    if (this.written) return Utils.normalize(given) === Utils.normalize(this.word.en);
    return given === this.word.key;
  }
}

// Uma sessão de teste ou de treino
class Quiz {
  static ALTS = new Map(); // id do tema → { chave da palavra: [frases] }

  // Frases alternativas de cada palavra, tiradas do texto da lição e dos textos de "Completar o texto"
  static altSentences(theme, word) {
    if (!Quiz.ALTS.has(theme.id)) {
      const texts = [...(theme.story ? theme.story.paragraphs : []), ...((typeof CLOZE !== "undefined" && CLOZE[theme.id]) || [])];
      const map = {};
      texts.flatMap(t => t.match(/[^.!?]+[.!?”"]*\s*/g) || [t]).map(s => s.trim()).forEach(s => {
        const n = s.split(/\s+/).length;
        if (n < 6 || n > 28) return;
        // “What is your ___?” serve para quase qualquer palavra: não dá contexto para escolher
        if (/\bwhat(?: is|'s) your\b[^.!?]{0,40}\?/i.test(s)) return;
        theme.wordRanges(s).forEach(r => { (map[r.key] = map[r.key] || []).includes(s) || map[r.key].push(s); });
      });
      Quiz.ALTS.set(theme.id, map);
    }
    return (Quiz.ALTS.get(theme.id)[word.key] || []).filter(s => s.toLowerCase() !== word.exEn.toLowerCase());
  }

  // Tradução de uma frase dos textos (vazia se ainda não houver)
  static ptOf(en) {
    return (typeof SENTENCE_PT !== "undefined" && SENTENCE_PT[en]) || "";
  }

  // Frases dos textos com a palavra que já têm tradução (as outras não entram nos exercícios: depois de responder
  // mostra-se sempre a frase com a pronúncia e a tradução)
  static translatedAlts(theme, word) {
    return Quiz.altSentences(theme, word).map(en => ({ en, pt: Quiz.ptOf(en) })).filter(s => s.pt);
  }

  // Frase de uma pergunta com espaço. “Escolher” e “escrever” usam frases diferentes da mesma palavra:
  // o exemplo e as frases de posição par num; as outras noutro. Sem alternativas, usa o exemplo
  pickSentence(word, theme, type) {
    const all = [{ en: word.exEn, pt: word.exPt }, ...Quiz.translatedAlts(theme, word)];
    const writing = type === Question.TYPES.FILL_WRITE || type === Question.TYPES.FILL_WRITE_PT;
    const mine = all.filter((_, i) => writing === (i % 2 === 1));
    let pool = mine.length ? mine : all;
    // Evita frases em que a palavra está numa lista (“red, blue, ___ and green”): aí qualquer cor serve
    const clear = pool.filter(s => !Quiz.inList(s.en, word, theme));
    if (clear.length) pool = clear;
    else { const any = all.filter(s => !Quiz.inList(s.en, word, theme)); if (any.length) pool = any; }
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // A palavra está numa lista com outras palavras da lição da mesma classe (“red, ___ and green”, “blue and ___”)
  static inList(sentence, word, theme) {
    const ranges = theme.wordRanges(sentence);
    const r = ranges.find(x => x.key === word.key);
    if (!r) return false;
    const pos = k => theme.words.find(w => w.key === k)?.pos;
    const others = ranges.filter(x => x.key !== word.key && pos(x.key) === word.pos);
    const before = sentence.slice(0, r.start).match(/(?:,|\b(?:and|or))\s*$/i);
    const after = sentence.slice(r.end).match(/^\s*(?:,|(?:and|or)\b)\s*/i);
    const end = before ? sentence.slice(0, r.start - before[0].length).trimEnd().length : -1;
    const start = after ? r.end + after[0].length : -1;
    return others.some(x => x.end === end || x.start === start);
  }

  // Frases com tradução em que a palavra aparece: o exemplo e as frases da leitura curta do tema
  static pairs(theme, word) {
    const extra = theme.text.filter(s => s.pt && s.en.toLowerCase() !== word.exEn.toLowerCase() && theme.wordRanges(s.en).some(r => r.key === word.key));
    return [{ en: word.exEn, pt: word.exPt }, ...extra.map(s => ({ en: s.en, pt: s.pt }))];
  }

  // Uma frase com tradução, sorteada entre as que existem (para não ser sempre o mesmo exemplo)
  // Nas frases com espaço (fill) evita, se puder, as frases em que a palavra está numa lista
  pickPair(word, theme, fill = false) {
    let all = Quiz.pairs(theme, word);
    if (fill) {
      const clear = all.filter(s => !Quiz.inList(s.en, word, theme));
      if (clear.length) all = clear;
      else {
        // Só há frases com listas: tenta as dos textos que têm tradução
        const alts = Quiz.translatedAlts(theme, word).filter(s => !Quiz.inList(s.en, word, theme));
        if (alts.length) all = alts;
      }
    }
    return all[Math.floor(Math.random() * all.length)];
  }

  // Frase para “o que significa nesta frase”: não precisa de tradução, por isso há muito por onde escolher
  pickAny(word, theme) {
    const alts = Quiz.translatedAlts(theme, word);
    const all = alts.length && Math.random() < 0.75 ? [...alts, ...Quiz.pairs(theme, word).slice(1)] : Quiz.pairs(theme, word).concat(alts);
    return all[Math.floor(Math.random() * all.length)];
  }

  // A frase com a palavra trocada por outra (e a/an acertado), ou null se a palavra não aparece na forma base
  static swapWord(sentence, word, other, theme) {
    const r = theme.wordRanges(sentence).find(x => x.key === word.key);
    if (!r || sentence.slice(r.start, r.end).toLowerCase() !== word.en.toLowerCase()) return null;
    if (new RegExp(`\\b${Utils.escapeRegExp(other.en)}\\b`, "i").test(sentence)) return null;
    const rep = /[A-Z]/.test(sentence[r.start]) ? other.en[0].toUpperCase() + other.en.slice(1) : other.en;
    const vowel = /^(?:hour|honest|honou?r|heir)/i.test(rep) || (/^[aeiou]/i.test(rep) && !/^(?:uni|use|usu|eu|one)/i.test(rep));
    const before = sentence.slice(0, r.start).replace(/\b(a|an)(\s+)$/i, (m, art, sp) => (art[0] === "A" ? (vowel ? "An" : "A") : vowel ? "an" : "a") + sp);
    return before + rep + sentence.slice(r.end);
  }

  // Opções de “escolhe a frase”: a certa e, quando dá, a mesma frase com uma palavra trocada (muito parecidas)
  sentenceOptions(word, theme, sent, distractors, type, pool) {
    const T = Question.TYPES;
    const right = Object.assign(Object.create(word), { exEn: sent.en, exPt: sent.pt });
    const wrong = [];
    if (type === T.SENT_EN) {
      const syn = Quiz.synonymsOf(word.en);
      const near = Utils.shuffle(pool.filter(w => w.key !== word.key && w.pos === word.pos && !syn.includes(w.en.toLowerCase()) && !Quiz.similarPt(w.pt, word.pt)))
        .sort((x, y) => (y.themeId === word.themeId) - (x.themeId === word.themeId));
      for (const d of near) {
        if (wrong.length >= 3) break;
        if (wrong.some(o => Quiz.similarPt(o.pt, d.pt))) continue;
        const s = Quiz.swapWord(sent.en, word, d, theme);
        if (s) wrong.push(Object.assign(Object.create(d), { exEn: s }));
      }
    }
    return Utils.shuffle([right, ...wrong, ...distractors.slice(wrong.length)]);
  }

  // Palavras com o mesmo sentido: se uma é a resposta, as outras nunca entram como opção errada
  static SYNONYMS = [["hello", "hi"], ["goodbye", "bye", "see you later"], ["thank you", "thanks"], ["sorry", "excuse me", "pardon"], ["yes", "yeah"], ["no", "nope"]];

  static synonymsOf(en) {
    const e = en.toLowerCase();
    return Quiz.SYNONYMS.filter(g => g.includes(e)).flatMap(g => g).filter(x => x !== e);
  }

  constructor(keys, { dict, progress, practice, max, types, counts = null, review = false }) {
    this.dict = dict;
    this.progress = progress;
    this.practice = practice;
    this.review = review; // treino dos erros: conta para as missões
    this.counts = counts; // conta para a meta diária (exercícios das lições)
    this.types = types || Object.values(Question.TYPES);
    const chosen = this.pickKeys(keys, max);
    this.queue = [];
    chosen.forEach(k => this.queue.push(this.makeQuestion(dict.word(k), false, this.queue[this.queue.length - 1]?.type)));
    this.total = chosen.length;
    this.index = 0;
    this.score = 0;
    this.answered = null;
    this.wrong = [];
    this.level = 0; // dificuldade adaptativa: -1 fácil, 0 normal, 1 difícil (só nos treinos)
    this.adaptive = !!practice && !review;
    this.recent = []; // últimas respostas à primeira tentativa (true/false)
    this.log = []; // respostas da primeira tentativa: [pergunta, a tua resposta, a certa, acertaste?]
  }

  // Sorteio com peso: as palavras em que erras mais têm mais hipóteses de entrar quando há mais palavras do que perguntas
  pickKeys(keys, max) {
    if (keys.length <= max) return Utils.shuffle(keys);
    const weight = k => {
      const st = this.progress.wordState?.(k);
      if (!st) return 1;
      return 1 + Math.min(3, st.wrong || 0) * (st.box >= Progress.MASTERED_BOX ? 0.5 : 1);
    };
    return keys.map(k => [Math.random() ** (1 / weight(k)), k]).sort((a, b) => b[0] - a[0]).slice(0, max).map(x => x[1]);
  }

  static STOP = new Set("the a an is are am it its this that these those my your his her our their i you he she we they to of in on at and or be was were do does did for with from by".split(" "));

  // Frase com no máximo 2 palavras de contexto fora da palavra em branco (e das palavras de função)
  static vague(sentence, word, theme) {
    const r = theme.wordRanges(sentence).find(x => x.key === word.key);
    const rest = r ? sentence.slice(0, r.start) + " " + sentence.slice(r.end) : sentence;
    return rest.split(/[^A-Za-z']+/).filter(t => t && !Quiz.STOP.has(t.toLowerCase())).length <= 2;
  }

  // Palavras de pt muito parecidas (uma contém a outra, ou partilham uma palavra de 4+ letras) confundem em vez de testar
  static ptTokens(s) {
    return Utils.normalize(s).split(/[^a-zà-ú]+/).filter(t => t.length >= 4);
  }

  static similarPt(a, b) {
    const x = Utils.normalize(a), y = Utils.normalize(b);
    if (!x || !y) return false;
    if (x === y) return true;
    if (Math.min(x.length, y.length) >= 4 && (x.includes(y) || y.includes(x))) return true;
    const ty = new Set(Quiz.ptTokens(b));
    return Quiz.ptTokens(a).some(t => ty.has(t));
  }

  makeQuestion(word, retry = false, avoid = null) {
    const T = Question.TYPES;
    const theme = this.dict.theme(word.themeId);
    // As frases com espaço só servem se a palavra aparecer no exemplo
    const sentOk = !!(word.exEn && word.exPt);
    let types = this.types.filter(t => ((t !== T.FILL && t !== T.FILL_WRITE && t !== T.CTX && t !== T.FILL_PT && t !== T.FILL_WRITE_PT) || theme.hasInExample(word))
      && ((t !== T.FILL_PT && t !== T.FILL_WRITE_PT) || word.exPt)
      && ((t !== T.SENT_PT && t !== T.SENT_EN) || sentOk) && ((t !== T.IPA_EN && t !== T.WRITE_IPA) || word.ipa));
    if (!types.length) types = [this.types.some(t => Question.WRITTEN.includes(t)) ? T.WRITE : T.PT_EN];
    const others = types.filter(t => t !== avoid);
    if (others.length) types = others;
    let type = types[Math.floor(Math.random() * types.length)];

    const sentTypes = [T.FILL, T.FILL_WRITE, T.FILL_PT, T.FILL_WRITE_PT];
    let sent = [T.FILL_PT, T.FILL_WRITE_PT, T.SENT_PT, T.SENT_EN].includes(type) ? this.pickPair(word, theme, type === T.FILL_PT || type === T.FILL_WRITE_PT)
      : type === T.CTX ? this.pickAny(word, theme) : sentTypes.includes(type) ? this.pickSentence(word, theme, type) : null;
    // Frase com pouco contexto (“The car is ___.”) serve para várias palavras: mostra a tradução da frase
    if (type === T.FILL && word.exPt && Quiz.vague(sent.en, word, theme)) {
      type = T.FILL_PT;
      sent = this.pickPair(word, theme, true);
    }
    // Palavra no meio de uma lista e não há outra frase: mostra a tradução para se saber qual é
    if ((type === T.FILL || type === T.FILL_WRITE) && sent.pt && Quiz.inList(sent.en, word, theme)) {
      type = type === T.FILL ? T.FILL_PT : T.FILL_WRITE_PT;
    }
    const isFill = type === T.FILL || type === T.FILL_PT;

    // Distratores: nunca de lições à frente da palavra. Na 1.ª lição só do próprio tema; na 3.ª, das lições 1, 2 e 3
    const upto = theme.index;
    const syn = Quiz.synonymsOf(word.en);
    const sentType = type === T.SENT_PT || type === T.SENT_EN;
    const all = this.dict.allWords.filter(w => w.key !== word.key && w.pt !== word.pt && w.ipa !== word.ipa && !syn.includes(w.en.toLowerCase())
      && (!sentType || (w.exEn && w.exPt && w.exEn !== word.exEn && w.exPt !== word.exPt)));
    const pool = all.filter(w => this.dict.theme(w.themeId).index <= upto);
    let distractors;
    if (isFill) {
      // Opções: só do mesmo tema na 1.ª lição; a partir da 2.ª, também de lições anteriores.
      // Quase sempre da mesma classe de palavra; uma vez ou outra pode entrar outra para variar.
      // Fora ficam as que já estão na frase ou cuja tradução repete palavras da frase (sinónimos)
      const norm = s => Utils.normalize(s).split(/[^a-zà-ú]+/).filter(t => t.length >= 4);
      const pt = new Set(norm(sent.pt + " " + word.pt));
      const sentence = sent.en.toLowerCase();
      const ok = w => w.key !== word.key && !sentence.includes(w.en.toLowerCase())
        && !w.en.toLowerCase().split(" ").some(t => t.length > 3 && word.en.toLowerCase().includes(t))
        && !norm(w.pt).some(t => pt.has(t));
      const pool = all.filter(w => this.dict.theme(w.themeId).index <= upto && ok(w));
      const same = Utils.shuffle(pool.filter(w => w.pos === word.pos));
      const other = Utils.shuffle(pool.filter(w => w.pos !== word.pos));
      const byLen = list => [...list].sort((x, y) => Math.abs(x.en.length - word.en.length) - Math.abs(y.en.length - word.en.length));
      distractors = this.level > 0 ? byLen(same).slice(0, 3) : same.slice(0, 3);
      if (this.level < 0 && other.length >= 3) distractors = other.slice(0, 3);
      else if (other.length && (same.length < 3 || (this.level === 0 && Math.random() < 0.12))) distractors = same.slice(0, 2).concat(other.slice(0, 1));
      distractors = [...new Set(distractors.concat(same, other))].slice(0, 3);
    } else {
      let same = Utils.shuffle(pool.filter(w => w.themeId === word.themeId));
      let others = Utils.shuffle(pool.filter(w => w.themeId !== word.themeId));
      if (this.level > 0) {
        // Difícil: parecidas (mesmo tema e classe de palavra)
        same = same.sort((x, y) => (y.pos === word.pos) - (x.pos === word.pos));
        distractors = same.slice(0, 3).concat(others).slice(0, 3);
      } else if (this.level < 0) {
        // Fácil: de outros temas e outra classe
        others = others.sort((x, y) => (x.pos === word.pos) - (y.pos === word.pos));
        distractors = others.slice(0, 3).concat(same).slice(0, 3);
      } else {
        distractors = same.slice(0, 2).concat(others, same.slice(2)).slice(0, 3);
      }
    }
    // Só se uma lição tiver muito poucas palavras é que se vai buscar o que falta às seguintes (quase nunca)
    if (distractors.length < 3) {
      const extra = Utils.shuffle(all.filter(w => !distractors.includes(w) && (type !== T.IPA || w.ipa !== word.ipa)));
      distractors = distractors.concat(extra).slice(0, 3);
    }
    if (!isFill) distractors = this.cleanDistractors(distractors, word, type, all);
    const options = type === T.SENT_EN || type === T.SENT_PT ? this.sentenceOptions(word, theme, sent, distractors, type, pool) : Utils.shuffle([word, ...distractors]);
    const q = new Question(word, type, options, retry);
    q.sentence = sent;
    return q;
  }

  // Tira opções que se confundem com a certa ou entre si (mesmo texto, traduções parecidas), mantendo a ordem de preferência.
  // Os lugares que ficam vagos vêm de outras palavras (só de lições até à da palavra). Sem alternativas, mantém o que havia
  cleanDistractors(chosen, word, type, all) {
    const T = Question.TYPES;
    const shown = { [T.EN_PT]: w => w.pt, [T.CTX]: w => w.pt, [T.IPA]: w => w.ipa, [T.SENT_PT]: w => w.exPt, [T.SENT_EN]: w => w.exEn }[type] || (w => w.en);
    const byPt = [T.EN_PT, T.CTX, T.PT_EN, T.WRITE, T.SENT_PT, T.SENT_EN].includes(type);
    const clash = (a, b) => Utils.normalize(shown(a)) === Utils.normalize(shown(b)) || (byPt && Quiz.similarPt(a.pt, b.pt));
    const upto = this.dict.theme(word.themeId).index;
    const spare = Utils.shuffle(all.filter(w => !chosen.includes(w) && this.dict.theme(w.themeId).index <= upto));
    const out = [];
    for (const w of [...chosen, ...spare]) {
      if (out.length >= 3) break;
      if (!clash(w, word) && !out.some(o => clash(w, o))) out.push(w);
    }
    return out.length === 3 ? out : chosen;
  }

  // 3 certas seguidas sobem a dificuldade; 2 erradas nas últimas 3 descem. As perguntas que faltam são refeitas
  adapt(ok) {
    if (!this.adaptive) return;
    this.recent.push(ok);
    const last = this.recent.slice(-3);
    let change = 0;
    if (last.length === 3 && last.every(Boolean) && this.level < 1) change = 1;
    else if (last.filter(x => !x).length >= 2 && this.level > -1) change = -1;
    if (!change) return;
    this.level += change;
    this.recent = [];
    for (let j = this.index + 1; j < this.queue.length; j++) {
      if (!this.queue[j].retry) this.queue[j] = this.makeQuestion(this.queue[j].word, false, this.queue[j - 1]?.type);
    }
  }

  get levelLabel() {
    return this.level > 0 ? "difícil" : this.level < 0 ? "fácil" : "normal";
  }

  // Linha compacta para o registo do exercício (textos curtos, para ocupar pouco espaço)
  entry(q, given, ok) {
    const T = Question.TYPES, w = q.word, cut = s => String(s).slice(0, 70);
    const opt = k => q.options.find(o => o.key === k) || this.dict.word(k), s = q.sentence;
    const text = o => ({ [T.EN_PT]: o.pt, [T.CTX]: o.pt, [T.IPA]: `/${o.ipa}/`, [T.SENT_PT]: o.exPt, [T.SENT_EN]: o.exEn })[q.type] ?? o.en;
    const asked = { [T.EN_PT]: w.en, [T.IPA]: w.en, [T.PT_EN]: w.pt, [T.WRITE]: w.pt, [T.CTX]: s?.en || w.exEn, [T.SENT_PT]: s?.en || w.exEn, [T.SENT_EN]: s?.pt || w.exPt, [T.IPA_EN]: `/${w.ipa}/`, [T.WRITE_IPA]: `/${w.ipa}/` }[q.type]
      || (q.sentence?.en || w.exEn).replace(new RegExp(w.en.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), "___");
    const mine = q.written ? given : text(opt(given));
    return [cut(asked), cut(mine || "—"), cut([T.FILL, T.FILL_WRITE, T.WRITE_IPA, T.FILL_PT, T.FILL_WRITE_PT].includes(q.type) ? w.en : text(opt(w.key))), ok];
  }

  get current() {
    return this.queue[this.index];
  }

  get finished() {
    return this.index >= this.queue.length;
  }

  get percent() {
    return this.total ? Math.round(this.score / this.total * 100) : 0;
  }

  get progressPercent() {
    return Math.round(this.index / this.queue.length * 100);
  }

  answer(given) {
    if (this.answered) return;
    const q = this.current;
    const ok = q.isCorrect(given);
    this.answered = { ok, given };
    if (!q.retry) { this.log.push(this.entry(q, given, ok)); this.progress.recordStat?.(q.word, q.type, ok); this.adapt(ok); }
    // Só a primeira tentativa conta; as erradas voltam no fim da sessão
    if (q.retry) return;
    if (ok) this.score++;
    else {
      if (!q.written) this.progress.recordConfusion(q.word.key, given);
      this.wrong.push(q.word);
      // a pergunta repetida volta daqui a umas perguntas (ou no fim), e com outro tipo
      this.queue.splice(Math.min(this.index + 4, this.queue.length), 0, this.makeQuestion(q.word, true, q.type));
    }
    if (!this.practice) this.progress.recordAnswer(q.word.key, ok);
    else if (ok && this.counts) this.progress.practiceCredit(q.word.key);
    if (this.review && ok) this.progress.resolveWord(q.word.key);
  }

  next() {
    this.index++;
    this.answered = null;
    if (this.finished) {
      this.progress.addTest(this.score, this.total, this.practice, this.counts, this.log);
      if (this.review) this.progress.addReview(this.percent);
    }
  }
}
