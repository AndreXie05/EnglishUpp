// Escape room (dentro do Jogo): escolhes uma sala com uma história e abres 10 cadeados antes de o tempo acabar.
// Cada cadeado só abre com a resposta certa; um erro tira 30 segundos e o cadeado pede outra pergunta.
class EscapeView extends View {
  static LOCKS = 10;
  static TIME = 8 * 60;      // segundos
  static PENALTY = 30;
  // Ordem dos tipos de pergunta: a pronúncia é a principal
  static PLAN = ["pron", "mean", "pron", "blank", "pron", "write", "pron", "mean", "pron", "write"];

  constructor(app) {
    super(app);
    this.state = "rooms";
  }

  // sem o botão do dicionário: na sala é tudo de memória
  get tab() { return "jogo"; }
  get best() { return (this.progress.data.escape ||= {}); }

  // Palavras da sala com a pronúncia e a tradução do Dicionário
  static words(app, room) {
    return room.words.map(([en, ex]) => {
      const e = app.dict.entryMap.get(en.toLowerCase());
      return e && e.ipa ? { en, ex, ipa: e.ipa, pt: e.pt } : null;
    }).filter(Boolean);
  }

  newGame(id) {
    this.room = ESCAPE_ROOMS.find(r => r.id === id) || Utils.pick(ESCAPE_ROOMS);
    this.state = "play";
    this.lock = 0;
    this.wrongs = 0;
    this.deadline = Date.now() + EscapeView.TIME * 1000;
    this.words = Utils.shuffle(EscapeView.words(this.app, this.room));
    this.next = 0;
    this.load();
  }

  get left() { return Math.max(0, Math.round((this.deadline - Date.now()) / 1000)); }
  static clock(s) { return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; }

  // Pergunta nova para o cadeado atual (depois de um erro, também)
  load() {
    const type = EscapeView.PLAN[this.lock];
    const w = this.words[this.next++ % this.words.length];
    // outras palavras da sala para as opções erradas (sem traduções ou palavras repetidas)
    const others = (n, field) => {
      const seen = new Set([w[field]]);
      return Utils.shuffle(this.words.filter(x => x !== w)).filter(x => !seen.has(x[field]) && seen.add(x[field])).slice(0, n);
    };
    this.q = { type, w, answered: null, given: "" };
    if (type === "pron") {
      this.q.right = `/${w.ipa}/`;
      this.q.options = Utils.shuffle([w.ipa, ...IpaTrap.wrong(w.en, w.ipa)].map(x => `/${x}/`));
    } else if (type === "mean") {
      this.q.options = Utils.shuffle([w, ...others(3, "pt")]).map(x => x.pt);
      this.q.right = w.pt;
    } else if (type === "blank") {
      this.q.options = Utils.shuffle([w, ...others(3, "en")]).map(x => x.en);
      this.q.right = w.en;
    } else this.q.right = w.en;
  }

  // A frase da sala com a palavra destacada (ou escondida, no "que palavra falta")
  sentence(hide) {
    const w = this.q.w, stem = w.en.length >= 4 ? `${w.en.replace(/e$/, "")}[a-z]*` : `${w.en}s?`;
    return this.esc(w.ex).replace(new RegExp(`\\b(${stem})\\b`, "i"), hide ? "_____" : "<b class=\"esc-word\">$1</b>");
  }

  render() {
    if (this.state === "rooms") return this.roomsScreen();
    if (this.state === "won" || this.state === "lost") return this.endScreen();
    const locks = Array.from({ length: EscapeView.LOCKS }, (_, i) => `<span style="font-size:1.3rem;opacity:${i <= this.lock ? 1 : .35}">${i < this.lock ? "🔓" : "🔒"}</span>`).join("");
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${this.room.icon} ${this.esc(this.room.name)}</span><span class="pill now" id="esctime">⏱️ ${EscapeView.clock(this.left)}</span></div>
      <section class="panel" style="gap:6px;text-align:center"><div>${locks}</div><div class="muted">Cadeado ${this.lock + 1} de ${EscapeView.LOCKS}</div></section>
      <section class="panel" style="gap:14px">${this.question()}</section>`;
  }

  roomsScreen() {
    const card = r => {
      const b = this.best[r.id];
      return `<button class="gcard g7" data-action="escstart" data-v="${r.id}"><span class="gicon" aria-hidden="true">${r.icon}</span><span class="gname">${this.esc(r.name)}</span>
        <span class="gdesc">${b != null ? `✅ Escapaste · melhor: ${EscapeView.clock(b)} de sobra` : "Ainda não escapaste"}</span></button>`;
    };
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Escape room</span><button class="linkbtn" data-action="nav" data-v="jogo">← Voltar ao Jogo</button></div><h1>Escolhe a sala 🔐</h1>
      <p class="muted" style="margin:0">Cada sala tem ${EscapeView.LOCKS} cadeados e ${EscapeView.TIME / 60} minutos. Os cadeados só abrem com a resposta certa: como se pronuncia uma palavra, o que significa, que palavra falta numa frase ou como se escreve. Cada erro tira ${EscapeView.PENALTY} segundos.</p>
      <div class="gamegrid">${ESCAPE_ROOMS.map(card).join("")}
        <button class="gcard g3" data-action="escstart" data-v=""><span class="gicon" aria-hidden="true">🎲</span><span class="gname">Sala surpresa</span><span class="gdesc">Uma sala à sorte</span></button></div>`;
  }

  question() {
    const q = this.q, w = q.w, a = q.answered !== null;
    let prompt;
    if (q.type === "pron") prompt = `<div class="eyebrow">Como se pronuncia a palavra destacada?</div><p class="sentence">${this.sentence(false)}</p>`;
    else if (q.type === "mean") prompt = `<div class="eyebrow">O que significa?</div><div class="q">${this.esc(w.en)}</div><p class="sentence muted">${this.sentence(false)}</p>`;
    else if (q.type === "blank") prompt = `<div class="eyebrow">Que palavra falta?</div><p class="sentence">${this.sentence(true)}</p>`;
    else prompt = `<div class="eyebrow">Escreve em inglês</div><div class="q q-sm">${this.esc(w.pt)}</div><div class="muted">${w.en.length} letras, começa por “${this.esc(w.en[0])}”</div>`;
    const body = q.type === "write"
      ? `<form id="escform" class="row" style="flex-wrap:nowrap"><input type="text" id="esc-input" autocomplete="off" autocapitalize="off" spellcheck="false" ${a ? "disabled" : ""} value="${this.esc(q.given)}" aria-label="Resposta"><button class="btn" ${a ? "disabled" : ""}>Abrir</button></form>`
      : `<div class="qsopts">${q.options.map((o, k) => `<button class="opt qsopt ${q.type === "pron" ? "ipa-opt" : ""} ${a ? (o === q.right ? "ok" : o === q.answered ? "no" : "") : ""}" data-action="escpick" data-v="${k}" ${a ? "disabled" : ""}><b>${k + 1}</b> ${this.esc(o)}</button>`).join("")}</div>`;
    const ok = a && q.answered === q.right;
    const after = !a ? "" : `<div class="fb ${ok ? "ok" : "no"}">${ok ? "🔓 Cadeado aberto!" : `🚨 Errado! −${EscapeView.PENALTY} s. Era “${this.esc(q.right)}”.`}
        <br><b>${this.esc(w.en)}</b> <span class="ipa">/${this.esc(w.ipa)}/</span> · ${this.esc(w.pt)}</div>
      <div class="row" style="justify-content:center"><button class="btn" id="nextbtn" data-action="escnext">${ok ? (this.lock + 1 >= EscapeView.LOCKS ? "Abrir a porta 🚪" : "Próximo cadeado →") : "Tentar outra pergunta"}</button></div>`;
    return prompt + body + after;
  }

  endScreen() {
    const won = this.state === "won";
    return `<div><div class="eyebrow">${this.room.icon} ${this.esc(this.room.name)}</div><h1>${won ? "🎉 Escapaste!" : "⏰ Ficaste fechado…"}</h1></div>
      <section class="panel"><p style="margin:0">${won ? `Abriste os ${EscapeView.LOCKS} cadeados com ${EscapeView.clock(this.left)} de sobra e ${this.wrongs} erro${this.wrongs === 1 ? "" : "s"}.${this.record ? " 🏆 Novo recorde nesta sala!" : ""}` : `O tempo acabou no cadeado ${this.lock + 1} de ${EscapeView.LOCKS}.`} Ganhaste ${this.xp} XP.</p>
        <div class="row"><button class="btn" data-action="escstart" data-v="${this.room.id}">Tentar outra vez</button><button class="btn ghost" data-action="escrooms">Escolher outra sala</button></div></section>`;
  }

  answer(given) {
    const q = this.q;
    if (q.answered !== null || this.state !== "play") return;
    q.answered = given;
    if (given !== q.right) { this.wrongs++; this.deadline -= EscapeView.PENALTY * 1000; }
    if (this.left <= 0) this.finish(false);
  }

  advance() {
    if (this.q.answered === this.q.right) {
      this.lock++;
      if (this.lock >= EscapeView.LOCKS) return this.finish(true);
    }
    this.load();
  }

  finish(won) {
    const left = this.left;
    this.state = won ? "won" : "lost";
    this.deadline = Date.now() + left * 1000;   // o relógio fica parado no ecrã final
    clearInterval(this.timer);
    this.record = won && (this.best[this.room.id] == null || left > this.best[this.room.id]);
    if (this.record) this.best[this.room.id] = left;
    // a sair: 5 XP + 1 por cada 30 s que sobraram; sem sair: 1 XP por cadeado aberto
    this.xp = won ? 5 + Math.floor(left / 30) : this.lock;
    if (this.xp) this.progress.addGame(this.xp, "escape");
    else this.progress.bump("games");
    this.app.save();
  }

  afterRender() {
    clearInterval(this.timer);
    if (this.state !== "play") return;
    this.timer = setInterval(() => {
      if (this.app.view !== this || this.state !== "play") return clearInterval(this.timer);
      const el = document.getElementById("esctime");
      if (el) el.textContent = `⏱️ ${EscapeView.clock(this.left)}`;
      if (this.left <= 0) { this.finish(false); this.app.render(); }
    }, 500);
  }

  onSubmit(form) {
    if (form.id !== "escform" || this.q.answered !== null) return false;
    const value = document.getElementById("esc-input").value.trim().toLowerCase();
    if (!value) return true;
    this.q.given = value;
    this.answer(value === this.q.right.toLowerCase() ? this.q.right : value);
    this.app.render();
    return true;
  }

  onKey(e) {
    if (this.state !== "play" || this.q.type === "write") return;
    const k = Number(e.key);
    if (this.q.answered === null && k >= 1 && k <= 4 && this.q.options[k - 1] !== undefined) this.answer(this.q.options[k - 1]);
    else if (e.key === "Enter" && this.q.answered !== null && e.target.tagName !== "BUTTON") this.advance();
    else return;
    this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "escstart": this.newGame(value); break;
      case "escrooms": this.state = "rooms"; break;
      case "escpick": this.answer(this.q.options[Number(value)]); break;
      case "escnext": this.advance(); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
