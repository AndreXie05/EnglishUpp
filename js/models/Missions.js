// Missões: 3 diárias e 2 semanais, escolhidas pela data. Ao cumprir, dão XP extra
class Missions {
  // [id, texto, objetivo, contador, XP]
  static DAILY = [
    ["right15", "Acerta 15 respostas", 15, "right", 8],
    ["tests2", "Faz 2 testes ou exercícios", 2, "tests", 8],
    ["grammar1", "Faz 1 lição de gramática", 1, "grammar", 8],
    ["texts1", "Lê e responde a 1 texto", 1, "texts", 8],
    ["lessons1", "Termina 1 lição nova", 1, "lessons", 6],
    ["timed1", "Joga o desafio de 60 segundos", 1, "timed", 6],
    ["xp100", "Ganha 25 XP", 25, "xp", 10],
    ["review1", "Faz uma revisão dos teus erros", 1, "review", 8],
    ["cards15", "Revê 15 cartões", 15, "cards", 6],
    ["diary1", "Escreve no diário", 1, "diary", 8],
    ["game1", "Joga um jogo (forca, memória ou frases)", 1, "games", 6],
  ];

  static WEEKLY = [
    ["right80", "Acerta 80 respostas", 80, "right", 25],
    ["grammar4", "Faz 4 lições de gramática", 4, "grammar", 25],
    ["texts4", "Lê 4 textos", 4, "texts", 25],
    ["lessons5", "Termina 5 lições novas", 5, "lessons", 25],
    ["goal4", "Cumpre a meta diária em 4 dias", 4, "goaldays", 30],
    ["xp600", "Ganha 120 XP", 120, "xp", 30],
    ["timed5", "Joga 5 desafios de 60 segundos", 5, "timed", 25],
    ["review3", "Faz 3 revisões dos teus erros", 3, "review", 30],
    ["diary3", "Escreve no diário em 3 dias", 3, "diary", 25],
    ["games5", "Joga 5 jogos", 5, "games", 25],
  ];

  static DAILY_COUNT = 3;
  static WEEKLY_COUNT = 2;

  // Segunda-feira da semana de uma data
  static weekStart(date) {
    const [y, m, d] = date.split("-").map(Number);
    return DateUtils.addDays(date, -((new Date(y, m - 1, d).getDay() + 6) % 7));
  }

  // Escolha estável: ordena por um hash do id e da data
  static pick(list, count, seed) {
    const hash = s => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
    return [...list].sort((a, b) => hash(a[0] + seed) - hash(b[0] + seed)).slice(0, count);
  }

  static value(p, metric, from, to) {
    if (metric === "goaldays") return p.data.days.filter(d => d >= from && d <= to).length;
    let n = 0;
    for (let d = from; d <= to; d = DateUtils.addDays(d, 1)) n += p.data.mis[d]?.[metric] || 0;
    return n;
  }

  // Missões de hoje e da semana, com o progresso de cada uma
  static active(p) {
    const today = DateUtils.today(), week = Missions.weekStart(today);
    // Sem erros por rever, a missão de revisão não faz sentido (mas fica se já a começaste hoje)
    const usable = list => p.hasErrors() || p.day().review ? list : list.filter(m => m[3] !== "review");
    const build = (list, scope, seed, from) => list.map(([id, title, target, metric, reward]) => {
      const key = `${scope}:${seed}:${id}`;
      const value = Math.min(target, Missions.value(p, metric, from, today));
      return { key, title, target, reward, value, scope, done: value >= target, claimed: !!p.data.claimed[key] };
    });
    return {
      daily: build(Missions.pick(usable(Missions.DAILY), Missions.DAILY_COUNT, today), "d", today, today),
      weekly: build(Missions.pick(usable(Missions.WEEKLY), Missions.WEEKLY_COUNT, week), "w", week, week),
    };
  }

  // Dá o XP das missões acabadas de cumprir e devolve os títulos
  static update(p) {
    const { daily, weekly } = Missions.active(p);
    const fresh = [...daily, ...weekly].filter(m => m.done && !m.claimed);
    fresh.forEach(m => {
      p.data.claimed[m.key] = true;
      p.addXp(m.reward);
    });
    return fresh.map(m => `${m.title} (+${m.reward} XP)`);
  }
}
