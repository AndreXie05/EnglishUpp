// Verificações simples de um texto curto em inglês. Não é um professor: apanha só os erros mais comuns
class DiaryChecker {
  static MIN_SENTENCES = 3;
  static MIN_WORDS = 15;

  // [expressão, mensagem]
  static RULES = [
    [/\b(dont|doesnt|didnt|cant|wont|isnt|arent|wasnt|im|ive)\b/i, "Falta o apóstrofo (don't, can't, I'm…)."],
    [/\bI am agree\b/i, "Diz-se “I agree”, sem “am”."],
    [/\b(he|she|it) (don't|do not)\b/i, "Com he/she/it usa-se “doesn't”."],
    [/\b(I|you|we|they) (doesn't|does not)\b/i, "Com I/you/we/they usa-se “don't”."],
    [/\b(I|you|we|they) (has)\b/i, "Com I/you/we/they usa-se “have”."],
    [/\b(he|she|it) (go|like|have|play|work|study|live|eat|want|need|love|read|write|speak|watch|do|make|take|get)\b/i, "Com he/she/it o verbo leva -s (goes, likes, has…)."],
    [/\bI have \d+ years?\b/i, "A idade diz-se “I am 20 years old”."],
    [/\bmore (better|worse|bigger|smaller|easier|faster|older|younger|taller|cheaper)\b/i, "Já é comparativo: não leva “more”."],
    [/\b(informations|advices|furnitures|homeworks|knowledges)\b/i, "Esta palavra não tem plural."],
    [/\b(peoples|childs|mans|womans|foots)\b/i, "Plural irregular: people, children, men, women, feet."],
    [/\bgo to home\b/i, "Diz-se “go home”, sem “to”."],
    [/\bexplain me\b/i, "Diz-se “explain to me”."],
    [/\bdepends? of\b/i, "Diz-se “depend on”."],
    [/\bI very like\b/i, "Diz-se “I like … very much” ou “I really like”."],
    [/\bmake (a )?sports?\b/i, "Diz-se “do sport” ou “play a sport”."],
    [/\b(didn't|did not|don't|doesn't|do not|does not|can't|cannot|will not|won't) (went|saw|ate|had|was|were|did|came|took|made|goes|has)\b/i, "Depois de didn't, don't, can't ou won't o verbo fica no infinitivo."],
    [/\b(am|is|are) (go|eat|play|work|study|like|read|write|watch)\b/i, "Depois de am/is/are, o verbo leva -ing (going, eating…)."],
    [/\b(I|we|they|you) (live|work|study) [^.!?]*\b(since|for \d+ (years|months|weeks))\b/i, "Com since/for usa-se o present perfect (“I have lived…”)."],
    [/\ba (?!(?:university|useful|user|european|one|unit|unique|uniform)\b)([aeiou]\w*)/i, "Antes de som de vogal usa-se “an”."],
    [/\ban (?!(?:hour|honest|honour|heir)\b)([bcdfgjklmnpqrstvwxz]\w*)/i, "Antes de som de consoante usa-se “a”."],
  ];

  constructor(dict) {
    this.dict = dict;
    this.entries = dict.entries.map(e => e.en.toLowerCase()).filter(e => /^[a-z]+$/.test(e));
  }

  static sentences(text) {
    return (text.replace(/\s+/g, " ").trim().match(/[^.!?]+[.!?]*/g) || []).map(s => s.trim()).filter(Boolean);
  }

  // Devolve [{ sentence, msg }]
  check(text) {
    const issues = [];
    DiaryChecker.sentences(text).forEach(s => {
      const add = msg => issues.push({ sentence: s, msg });
      if (/^[a-z]/.test(s)) add("A frase começa com letra maiúscula.");
      if (!/[.!?]$/.test(s)) add("Falta o ponto final (ou ! ou ?).");
      if (/(^|\s)i(\s|'|$)/.test(s)) add("O pronome “I” escreve-se sempre com maiúscula.");
      DiaryChecker.RULES.forEach(([re, msg]) => { if (re.test(s)) add(msg); });
      (s.match(/[A-Za-z']+/g) || []).forEach((w, i) => {
        if (/^(dont|doesnt|didnt|cant|wont|isnt|arent|wasnt|im|ive)$/i.test(w)) return;
        const lower = w.toLowerCase();
        // nomes próprios a meio da frase não se verificam
        if ((i > 0 && /^[A-Z]/.test(w)) || lower.length < 2 || this.dict.knows(lower)) return;
        const near = this.suggest(lower);
        add(near ? `“${w}” não existe no dicionário. Querias dizer “${near}”?` : `“${w}” não existe no dicionário. Confirma a escrita.`);
      });
    });
    return issues;
  }

  // A palavra conhecida mais parecida (até 2 letras diferentes)
  suggest(word) {
    // letras trocadas (freind → friend)
    for (let i = 0; i < word.length - 1; i++) {
      const swapped = word.slice(0, i) + word[i + 1] + word[i] + word.slice(i + 2);
      if (this.entries.includes(swapped)) return swapped;
    }
    let best = null, bestD = 3;
    for (const e of this.entries) {
      if (Math.abs(e.length - word.length) > 2) continue;
      const d = Utils.levenshtein(word, e);
      if (d < bestD) { best = e; bestD = d; if (d === 1) break; }
    }
    return best;
  }
}
