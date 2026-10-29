// Duelo: 10 perguntas em corrida contra um adversário simulado; cada resposta certa vale 10 pontos e o mais rápido a acertar ganha +3
class DuelView extends View {
  static ROUNDS = 10;
  static LIMIT = 12; // segundos por pergunta
  static BOTS = {
    calm: { name: "Rita", icon: "🐢", label: "calma", acc: 0.55, time: [6, 11] },
    normal: { name: "Tomás", icon: "🦊", label: "normal", acc: 0.75, time: [4, 8] },
    fast: { name: "Max", icon: "🚀", label: "rápido", acc: 0.9, time: [2, 5] },
  };

  constructor(app) {
    super(app);
    this.state = "intro";
    this.words = GameView.words(app);
    const T = Question.TYPES;
    this.factory = new Quiz([this.dict.themes[0].words[0].key], { dict: this.dict, progress: this.progress, practice: true, types: [T.EN_PT, T.PT_EN, T.FILL], max: 1 });
  }

  get tab() { return "jogo"; }
  get duel() { return (this.progress.data.duel ||= { streak: 0, best: 0, wins: 0, played: 0 }); }

  newGame(level) {
    this.bot = DuelView.BOTS[level];
    this.state = "play";
    this.i = 0;
    this.me = 0;
    this.them = 0;
    this.right = 0;
    this.used = new Set();
    this.xp = 0;
    this.loadQuestion();
  }

  loadQuestion() {
    let q = null;
    for (let n = 0; n < 30 && !q; n++) {
      const free = this.words.filter(w => !this.used.has(w.key));
      const w = Utils.pick(free.length ? free : this.words);
      const cand = this.factory.makeQuestion(w);
      if (cand.options.length === 4) q = cand;
    }
    this.q = q;
    this.used.add(q.word.key);
    this.chosen = null;
    this.t0 = Date.now();
    const [a, b] = this.bot.time;
    this.botAt = a + Math.random() * (b - a);
    this.botOk = Math.random() < this.bot.acc;
    this.result = null;
  }

  get over() { return this.state === "over"; }
  elapsed() { return (Date.now() - this.t0) / 1000; }

  render() {
    if (this.words.length < 20) return GameView.needWords("Duelo");
    if (this.state === "intro") return this.intro();
    if (this.over) return this.overScreen();
    const q = this.q, w = q.word, T = Question.TYPES, a = this.chosen !== null;
    let prompt;
    if (q.type === T.EN_PT) prompt = `<div class="eyebrow">O que significa?</div><div class="q">${this.esc(w.en)}</div><div class="ipa">/${this.esc(w.ipa)}/</div>`;
    else if (q.type === T.PT_EN) prompt = `<div class="eyebrow">Como se diz em inglês?</div><div class="q">${this.esc(w.pt)}</div>`;
    else prompt = `<div class="eyebrow">Escolhe a palavra que falta</div><p class="sentence">${Sentence.render(q.sentence.en, this.dict.theme(w.themeId), a ? null : w.key)}</p>`;
    const label = o => q.type === T.EN_PT ? o.pt : o.en;
    const opts = q.options.map((o, k) => `<button class="opt qsopt ${a ? (o.key === w.key ? "ok" : o.key === this.chosen ? "no" : "") : ""}" data-action="dpick" data-v="${this.esc(o.key)}" ${a ? "disabled" : ""}><b>${k + 1}</b> ${this.esc(label(o))}</button>`).join("");
    const max = DuelView.ROUNDS * 13;
    const bar = (icon, name, pts, cls) => `<div class="duelrow"><span>${icon} ${this.esc(name)}</span><div class="duelbar"><i class="${cls}" style="width:${Math.min(100, pts / max * 100)}%"></i></div><b>${pts}</b></div>`;
    const r = this.result;
    const after = a ? `<div class="fb ${r.meOk ? "ok" : "no"}">${r.meOk ? "Certo!" : this.chosen === "" ? "Tempo esgotado." : "Errado."} Era “${this.esc(label(w))}”.
        ${this.bot.icon} ${this.esc(this.bot.name)} ${r.botOk ? "acertou" : "falhou"}${r.fasterMe ? " · tu foste mais rápido (+3)" : r.fasterBot ? ` · ${this.esc(this.bot.name)} foi mais rápido (+3)` : ""}.</div>
      <div class="row" style="justify-content:center"><button class="btn" data-action="dnext">${this.i === DuelView.ROUNDS - 1 ? "Ver resultado" : "Seguinte →"}</button></div>`
      : `<div class="duelbar timer"><i id="dtime" style="width:100%"></i></div><div class="muted" id="dbot" style="text-align:center">${this.bot.icon} ${this.esc(this.bot.name)} está a pensar…</div>`;
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Duelo contra ${this.esc(this.bot.name)} (${this.bot.label})</span><span class="pill now">${this.i + 1} de ${DuelView.ROUNDS}</span></div>
      <section class="panel" style="gap:10px">${bar("🧑", "Tu", this.me, "me")}${bar(this.bot.icon, this.bot.name, this.them, "bot")}</section>
      <section class="panel" style="gap:14px">${prompt}<div class="qsopts">${opts}</div>${after}</section>`;
  }

  intro() {
    const d = this.duel;
    return `<div><div class="eyebrow">Jogo</div><h1>Duelo ⚔️</h1></div>
      <section class="panel" style="text-align:center"><p style="margin:0">${DuelView.ROUNDS} perguntas em corrida contra um adversário. Cada resposta certa vale 10 pontos e quem acertar mais depressa ganha +3. Tens ${DuelView.LIMIT} segundos por pergunta.</p>
        <p class="muted" style="margin:0">Vitórias: ${d.wins} · Série atual: ${d.streak} · Melhor série: ${d.best}</p>
        <div class="eyebrow">Escolhe o adversário</div>
        <div class="row" style="justify-content:center">${Object.entries(DuelView.BOTS).map(([k, b]) => `<button class="btn" data-action="dstart" data-v="${k}">${b.icon} ${b.name} · ${b.label}</button>`).join("")}</div>
        <div class="row" style="justify-content:center"><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  overScreen() {
    const win = this.me > this.them, draw = this.me === this.them, d = this.duel;
    return `<div><div class="eyebrow">Resultado</div><h1>${win ? "Ganhaste! 🏆" : draw ? "Empate 🤝" : "Desta vez perdeste"}</h1></div>
      <section class="panel"><p style="margin:0">Tu: <b>${this.me}</b> pontos (${this.right} certas) · ${this.esc(this.bot.name)}: <b>${this.them}</b>. Ganhaste ${this.xp} XP.</p>
        <p class="muted" style="margin:0">${win ? `Série de vitórias: ${d.streak}` : "A série de vitórias volta a zero, mas podes tentar de novo."}</p>
        <div class="row"><button class="btn" data-action="dagain">Revanche</button><button class="btn ghost" data-action="dmenu">Mudar de adversário</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
  }

  // chosen: chave da opção, ou "" se o tempo acabou
  answer(chosen) {
    if (this.chosen !== null || this.over) return;
    const t = chosen === "" ? DuelView.LIMIT : this.elapsed();
    this.chosen = chosen;
    const meOk = chosen === this.q.word.key, botOk = this.botOk && this.botAt < DuelView.LIMIT;
    let fasterMe = false, fasterBot = false;
    if (meOk && botOk) { fasterMe = t < this.botAt; fasterBot = !fasterMe; }
    else if (meOk) fasterMe = true;
    else if (botOk) fasterBot = true;
    if (meOk) { this.me += 10 + (fasterMe ? 3 : 0); this.right++; }
    if (botOk) this.them += 10 + (fasterBot ? 3 : 0);
    this.result = { meOk, botOk, fasterMe, fasterBot };
    this.progress.recordStat?.(this.q.word, this.q.type, meOk);
  }

  next() {
    if (this.i >= DuelView.ROUNDS - 1) return this.finish();
    this.i++;
    this.loadQuestion();
  }

  finish() {
    this.state = "over";
    const win = this.me > this.them, draw = this.me === this.them, d = this.duel;
    d.played++;
    if (win) { d.wins++; d.streak++; d.best = Math.max(d.best, d.streak); } else if (!draw) d.streak = 0;
    this.xp = Math.max(2, this.right + (win ? 8 : draw ? 4 : 0));
    this.progress.addGame(this.xp);
    this.app.save();
  }

  afterRender() {
    clearInterval(this.timer);
    if (this.state !== "play" || this.chosen !== null) return;
    this.timer = setInterval(() => {
      if (this.app.view !== this || this.state !== "play" || this.chosen !== null) return clearInterval(this.timer);
      const t = this.elapsed(), bar = document.getElementById("dtime"), bot = document.getElementById("dbot");
      if (bar) bar.style.width = `${Math.max(0, 100 - t / DuelView.LIMIT * 100)}%`;
      if (bot && t >= this.botAt && this.botAt < DuelView.LIMIT) bot.textContent = `${this.bot.icon} ${this.bot.name} já respondeu!`;
      if (t >= DuelView.LIMIT) { clearInterval(this.timer); this.answer(""); this.app.render(); }
    }, 200);
  }

  onKey(e) {
    if (this.state !== "play") return;
    const k = Number(e.key);
    if (this.chosen === null && k >= 1 && k <= 4 && this.q.options[k - 1]) this.answer(this.q.options[k - 1].key);
    else if (e.key === "Enter" && this.chosen !== null && e.target.tagName !== "BUTTON") this.next();
    else return;
    this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "dstart": this.newGame(value); break;
      case "dagain": this.newGame(Object.keys(DuelView.BOTS).find(k => DuelView.BOTS[k] === this.bot)); break;
      case "dmenu": this.state = "intro"; break;
      case "dpick": this.answer(value); break;
      case "dnext": this.next(); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
