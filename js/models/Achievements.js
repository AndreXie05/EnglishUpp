// Conquistas: calculadas a partir do progresso; a data em que se ganham fica guardada
class Achievements {
  static LIST = [
    ["streak3", "3 dias seguidos", "Cumpre a meta 3 dias seguidos", c => c.p.longestStreak() >= 3],
    ["streak7", "Uma semana", "7 dias seguidos", c => c.p.longestStreak() >= 7],
    ["streak30", "Um mês", "30 dias seguidos", c => c.p.longestStreak() >= 30],
    ["streak100", "Cem dias", "100 dias seguidos", c => c.p.longestStreak() >= 100],
    ["days10", "Dez dias de meta", "Cumpre a meta em 10 dias", c => c.p.data.days.length >= 10],
    ["days50", "Cinquenta dias de meta", "Cumpre a meta em 50 dias", c => c.p.data.days.length >= 50],
    ["words50", "50 palavras", "Estuda 50 palavras", c => c.p.wordCount >= 50],
    ["words250", "250 palavras", "Estuda 250 palavras", c => c.p.wordCount >= 250],
    ["words500", "500 palavras", "Estuda 500 palavras", c => c.p.wordCount >= 500],
    ["words1000", "1000 palavras", "Estuda 1000 palavras", c => c.p.wordCount >= 1000],
    ["words2500", "2500 palavras", "Estuda 2500 palavras", c => c.p.wordCount >= 2500],
    ["master100", "100 dominadas", "Domina 100 palavras", c => c.p.masteredCount >= 100],
    ["master500", "500 dominadas", "Domina 500 palavras", c => c.p.masteredCount >= 500],
    ["lessons5", "5 lições", "Termina 5 lições", c => Object.keys(c.p.data.lessons).length >= 5],
    ["lessons25", "25 lições", "Termina 25 lições", c => Object.keys(c.p.data.lessons).length >= 25],
    ["lessons100", "100 lições", "Termina 100 lições", c => Object.keys(c.p.data.lessons).length >= 100],
    ["grammar5", "Gramática I", "Faz 5 lições de gramática", c => Object.keys(c.p.data.grammar).length >= 5],
    ["grammar25", "Gramática II", "Faz 25 lições de gramática", c => Object.keys(c.p.data.grammar).length >= 25],
    ["texts5", "Leitor", "Lê 5 textos práticos", c => Object.keys(c.p.data.texts).length >= 5],
    ["texts30", "Grande leitor", "Lê 30 textos práticos", c => Object.keys(c.p.data.texts).length >= 30],
    ...["A1", "A2", "B1", "B2", "C1", "C2"].map(l =>
      [`exam${l}`, `Nível ${l}`, `Passa no exame final de ${l}`, c => (c.p.data.exams[l] || 0) >= LevelExam.PASS]),
    ["examPerfect", "Exame perfeito", "100% num exame final", c => Object.values(c.p.data.exams).some(v => v >= 100)],
  ];

  // Imagem de cada conquista: [ícone, medalha 1 bronze · 2 prata · 3 ouro · 4 diamante]
  static ART = {
    streak3: ["🔥", 1], streak7: ["⚡", 2], streak30: ["🌋", 3], streak100: ["👑", 4],
    days10: ["🎯", 1], days50: ["🏅", 3],
    words50: ["🌱", 1], words250: ["🌿", 2], words500: ["🌳", 3], words1000: ["🏔️", 3], words2500: ["🚀", 4],
    master100: ["🧠", 2], master500: ["💎", 4],
    lessons5: ["📘", 1], lessons25: ["📚", 2], lessons100: ["🎓", 4],
    grammar5: ["📐", 1], grammar25: ["🏗️", 3],
    texts5: ["📖", 1], texts30: ["🦉", 3],
    examA1: ["🥉", 1], examA2: ["🥈", 1], examB1: ["🥇", 2], examB2: ["🏅", 2], examC1: ["🎖️", 3], examC2: ["🏆", 4],
    examPerfect: ["💯", 4],
  };

  static art(id) {
    return Achievements.ART[id] || ["⭐", 1];
  }

  // Marca as conquistas novas e devolve os títulos
  static update(progress) {
    const ctx = { p: progress };
    const fresh = Achievements.LIST.filter(([id, , , test]) => !progress.data.badges[id] && test(ctx));
    fresh.forEach(([id]) => { progress.data.badges[id] = DateUtils.today(); });
    return fresh.map(f => f[1]);
  }
}
