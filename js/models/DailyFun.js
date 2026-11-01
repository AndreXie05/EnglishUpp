// Coisas do dia: palavra do dia, desafio do dia, resumo da semana e a mascote
class DailyFun {
  /* ----- ajudas ----- */

  // Gerador de números ao acaso que dá sempre o mesmo resultado para a mesma semente (a data)
  static rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  static shuffle(list, rnd) {
    const a = [...list];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Palavras das lições que já estudaste; se ainda não estudaste nenhuma, as de A1
  static pool(app) {
    const studied = app.progress.studiedKeys.filter(k => app.dict.has(k)).map(k => app.dict.word(k));
    if (studied.length >= 12) return studied;
    return app.dict.themes.filter(t => t.level === "A1").flatMap(t => t.words);
  }

  /* ----- palavra do dia ----- */

  // Três palavras soltas de qualquer lição, estudada ou não: uma de A1–A2, uma de B1–B2 e uma de C1–C2, fixas durante o dia
  static wordsOfDay(app) {
    const all = app.dict.allWords.filter(w => !w.en.includes(" ")).sort((a, b) => a.key.localeCompare(b.key));
    const level = w => app.dict.theme(w.themeId).level;
    return [["A1", "A2"], ["B1", "B2"], ["C1", "C2"]].map((levels, i) => {
      const list = all.filter(w => levels.includes(level(w)));
      return list.length ? list[DailyFun.dayHash(11 + i) % list.length] : null;
    }).filter(Boolean);
  }

  static dayHash(salt) {
    return (DateUtils.dayNumber() * 2654435761 + salt * 40503) >>> 0;
  }

  // Frases de apoio para os exemplos: [{ en, pt }] com tradução (frases das lições) e [{ en }] sem ela (histórias e textos)
  static sentenceBank(app) {
    if (DailyFun._bank) return DailyFun._bank;
    const split = t => (t.match(/[^.!?]+[.!?]+["”]?/g) || []).map(x => x.trim()).filter(x => { const n = x.split(/\s+/).length; return n >= 5 && n <= 16; });
    const withPt = app.dict.themes.flatMap(t => [...t.text, ...t.words.map(w => ({ en: w.exEn, pt: w.exPt }))]);
    const plain = [
      ...Object.values(STORIES).flatMap(s => (s.paragraphs || []).flatMap(split)),
      ...TEXTS.flatMap(t => t.lines.filter(l => !PracticalText.isHeader(l)).flatMap(split)),
    ].map(en => ({ en }));
    return (DailyFun._bank = { withPt, plain });
  }

  // Dois exemplos da palavra do dia: frases novas de WORD_EXAMPLES; se a palavra não tiver, o da própria lição e outro, fixo para o dia (com tradução se houver)
  static examples(app, word) {
    const own = typeof WORD_EXAMPLES !== "undefined" && WORD_EXAMPLES[word.en];
    if (own) return own.map(([en, pt]) => ({ en, pt }));
    const stem = word.en.toLowerCase().replace(/e$/, "");
    const has = s => (s.en.toLowerCase().match(/[a-z']+/g) || []).some(t => t.startsWith(stem));
    const bank = DailyFun.sentenceBank(app);
    const first = { en: word.exEn, pt: word.exPt };
    for (const list of [bank.withPt, bank.plain]) {
      const found = list.filter(s => s.en !== word.exEn && has(s));
      if (found.length) return [first, found[DailyFun.dayHash(2) % found.length]];
    }
    return [first];
  }

  /* ----- desafio do dia ----- */

  static CHALLENGES = [
    ["odd", "Encontra o intruso", "🕵️", "Em cada grupo há uma palavra que não pertence."],
    ["tf", "Verdadeiro ou falso", "⚖️", "A tradução está certa ou trocada?"],
    ["mix", "Mistura do dia", "🎲", "Intrusos e verdadeiro ou falso à vez."],
  ];

  static todaysChallenge() {
    return DailyFun.CHALLENGES[DailyFun.dayHash(2) % DailyFun.CHALLENGES.length];
  }

  // Palavras "centrais" de um tema: as primeiras 45% (cores, números, animais...). As últimas costumam ser
  // palavras de apoio (favourite, paint, mix) que não definem o tema e deixariam o intruso ambíguo
  static core(theme) {
    const single = theme.words.filter(w => !w.en.includes(" "));
    return single.slice(0, Math.max(4, Math.ceil(single.length * 0.45)));
  }

  static oddOne(app, rnd, size = 4) {
    // Só temas que já estudaste (ou os de A1, se ainda poucos)
    const studied = app.dict.themes.filter(t => app.progress.lesson(t.id));
    const base = studied.length >= 2 ? studied : app.dict.themes.filter(t => t.level === "A1");
    const themes = base.filter(t => DailyFun.core(t).length >= 4);
    const [a, b] = DailyFun.shuffle(themes, rnd);
    // O grupo é da mesma classe de palavra (como as cores, todas adjetivos) e o intruso vem de outro tema
    const coreA = DailyFun.core(a), pos = coreA[0].pos;
    const group = DailyFun.shuffle(coreA.filter(w => w.pos === pos), rnd).slice(0, size - 1);
    const pool = group.length === size - 1 ? group : DailyFun.shuffle(coreA, rnd).slice(0, size - 1);
    const odd = DailyFun.shuffle(DailyFun.core(b), rnd)[0];
    return ["c", `Qual palavra NÃO pertence ao grupo «${a.pt}»?`, odd.en, pool.map(w => w.en).join("|"), "", `«${odd.en}» (${odd.pt}) é do tema «${b.pt}».`];
  }

  static trueFalse(app, rnd) {
    const pool = DailyFun.shuffle(DailyFun.pool(app), rnd);
    const w = pool[0], other = pool.find(x => x.pt !== w.pt);
    const truth = rnd() < 0.5;
    return ["c", `«${w.en}» significa «${truth ? w.pt : other.pt}»?`, truth ? "Verdadeiro" : "Falso", truth ? "Falso" : "Verdadeiro", "", `«${w.en}» significa «${w.pt}».`];
  }

  static challengeLesson(app) {
    const [kind, title] = DailyFun.todaysChallenge();
    const rnd = DailyFun.rng(DateUtils.dayNumber() * 7 + 3);
    const make = i => kind === "odd" || (kind === "mix" && i % 2 === 0) ? DailyFun.oddOne(app, rnd) : DailyFun.trueFalse(app, rnd);
    const exercises = Array.from({ length: 6 }, (_, i) => new GrammarExercise(make(i)));
    return { id: `desafio-${DateUtils.today()}`, review: true, daily: true, pt: `Desafio do dia: ${title}`, exercises, size: exercises.length,
      backLabel: "Voltar ao início", back: a => a.go("hoje"), fresh: () => DailyFun.challengeLesson(app) };
  }

  /* ----- resumo da semana ----- */

  // Soma de um contador diário nos 7 dias que acabam em `end` (inclusive)
  static sum(p, key, end) {
    let n = 0;
    for (let i = 0; i < 7; i++) n += p.data.mis[DateUtils.addDays(end, -i)]?.[key] || 0;
    return n;
  }

  static week(p) {
    const today = DateUtils.today(), before = DateUtils.addDays(today, -7);
    const days = p.data.days.filter(d => d > before && d <= today).length;
    const prevDays = p.data.days.filter(d => d > DateUtils.addDays(before, -7) && d <= before).length;
    const lessons = Object.values(p.data.lessons).filter(l => l.studied > before).length;
    const per = [...Array(7)].map((_, i) => ({ d: DateUtils.addDays(today, i - 6), xp: p.data.mis[DateUtils.addDays(today, i - 6)]?.xp || 0 }));
    const best = per.reduce((a, b) => (b.xp > a.xp ? b : a), per[0]);
    return { days, prevDays, lessons, right: DailyFun.sum(p, "right", today), xp: DailyFun.sum(p, "xp", today), prevXp: DailyFun.sum(p, "xp", before), per, best };
  }

  /* ----- mascote ----- */

  static STAGES = [[1, "🥚", "ovo"], [3, "🐣", "pintainho"], [6, "🐥", "pinto"], [10, "🦆", "pato"], [15, "🦉", "coruja"], [22, "🦅", "águia"]];

  static stage(level) {
    return [...DailyFun.STAGES].reverse().find(s => level >= s[0]) || DailyFun.STAGES[0];
  }

  // Estado de espírito: celebra se a meta de hoje está feita, espera se há sequência, tem saudades se a perdeste
  static mood(p) {
    const today = DateUtils.today();
    if (p.data.days.includes(today)) return ["happy", "Meta feita! Estou orgulhoso de ti."];
    const streak = p.streak();
    if (streak > 0) return ["wait", `Contigo há ${streak} dia${streak > 1 ? "s" : ""} seguido${streak > 1 ? "s" : ""}. Falta só a meta de hoje!`];
    if (p.data.days.length) return ["sad", "Tive saudades! Faz hoje um exercício e voltamos ao ritmo."];
    return ["wait", "Olá! Faz o teu primeiro exercício e eu cresço contigo."];
  }
}
