// Conversas e histórias com escolhas: lês o que dizem, escolhes a resposta em inglês e o final muda
class AdventureView extends View {
  constructor(app, adv = null) {
    super(app);
    this.showPt = false;
    this.begin(adv);
  }

  get tab() { return "jogo"; }

  get dictOk() { return !!this.adv; }

  begin(adv) {
    this.adv = adv;
    this.scene = adv ? adv.scenes[adv.start] : null;
    this.history = []; // cenas já passadas: { scene, choice }
    this.picked = null; // índice da opção escolhida na cena atual
    this.score = 0;
    this.total = 0;
    this.xp = 0;
    this.saved = false;
  }

  render() {
    return this.adv ? this.playPage() : this.listPage();
  }

  /* ----- lista ----- */

  listPage() {
    const group = (kind, title, text) => `<section class="panel"><h2>${title}</h2><p class="muted" style="margin:0">${text}</p>
      <div class="themes">${ADVENTURES.filter(a => a.kind === kind).map(a => this.card(a)).join("")}</div></section>`;
    return `<div><div class="eyebrow">${ADVENTURES.length} cenários</div><h1>Conversas e histórias</h1></div>
      <p class="muted" style="margin:0">Lês o que dizem, escolhes o que responder em inglês e a conversa (ou a história) continua. Cada resposta certa vale pontos.</p>
      ${group("dialogue", "Conversas", "Situações reais: pedir comida, fazer o check-in, uma entrevista.")}
      ${group("story", "Histórias", "As tuas escolhas mudam o final.")}
      <div class="row"><button class="linkbtn" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div>`;
  }

  card(a) {
    const r = this.progress.data.adv?.[a.id];
    const pill = r ? `<span class="schip ${Progress.band(r.best)}">${r.best}%</span>` : `<span class="pill">Novo</span>`;
    return `<button class="theme tcard" style="--lc:${ThemesView.LEVEL_COLORS[a.level] || "var(--accent)"}" data-action="advopen" data-v="${a.id}">
      <div class="row" style="justify-content:space-between;width:100%"><span class="ticon" aria-hidden="true">${a.icon}</span>${pill}</div>
      <span class="eyebrow tnum">${a.level}</span><span class="t">${this.esc(a.title)}</span>
      <span class="muted" style="font-size:.9rem">${this.esc(a.intro)}</span></button>`;
  }

  /* ----- jogo ----- */

  bubble(who, en, pt, mine = false) {
    return `<div class="chat ${mine ? "me" : "npc"}"><span class="cwho">${this.esc(mine ? "Tu" : who)}</span><div class="cb"><span>${this.esc(en)}</span>${this.showPt && pt ? `<small>${this.esc(pt)}</small>` : ""}</div></div>`;
  }

  playPage() {
    const a = this.adv, s = this.scene;
    const past = this.history.map(h => this.bubble(h.scene.who, h.scene.say, h.scene.pt) + this.bubble("", h.choice[0], h.choice[1], true)).join("");
    let body = this.bubble(s.who, s.say, s.pt);
    if (s.end) body += this.endBox();
    else if (this.picked === null) {
      body += `<div class="opts stacked">${s.choices.map((c, i) => `<button class="opt" data-action="advpick" data-v="${i}"><span>${i + 1}. ${this.esc(c[0])}</span>${this.showPt && c[1] ? `<small class="muted" style="display:block;font-weight:400">${this.esc(c[1])}</small>` : ""}</button>`).join("")}</div>
        <span class="muted" style="font-size:.85rem">Também podes carregar nas teclas 1 a ${s.choices.length}.</span>`;
    } else {
      const c = s.choices[this.picked];
      body += this.bubble("", c[0], c[1], true) + `<div class="fb ${c[2] ? "ok" : "no"}">${c[2] ? "✓ " : "✗ "}${this.esc(c[4])}</div>
        <div class="row"><button class="btn" data-action="advnext">Continuar →</button></div>`;
    }
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">${a.icon} ${this.esc(a.title)} · ${a.level}</span>
        <button class="linkbtn" data-action="advexit">Sair</button></div>
      <div class="row" style="justify-content:space-between"><span class="muted">${this.score} certas de ${this.total}</span>
        <button class="btn ghost small" data-action="advpt">${this.showPt ? "Esconder" : "Mostrar"} tradução</button></div>
      <section class="panel chatbox">${past}${body}</section>`;
  }

  endBox() {
    const pct = this.total ? Math.round(this.score / this.total * 100) : 0;
    return `<div class="panel endbox"><h2>${this.esc(this.scene.title)}</h2>
      <p style="margin:0">${this.score} de ${this.total} respostas certas (${pct}%)${this.xp ? ` · +${this.xp} XP` : ""}.</p>
      <div class="row"><button class="btn" data-action="advagain">Jogar outra vez</button><button class="btn ghost" data-action="advexit">Escolher outro</button></div></div>`;
  }

  pick(i) {
    if (this.picked !== null || this.scene.end || !this.scene.choices[i]) return;
    this.picked = i;
    this.total++;
    if (this.scene.choices[i][2]) this.score++;
  }

  next() {
    if (this.picked === null) return;
    const choice = this.scene.choices[this.picked];
    this.history.push({ scene: this.scene, choice });
    this.scene = this.adv.scenes[choice[3]];
    this.picked = null;
    if (this.scene.end && !this.saved) {
      this.saved = true;
      this.xp = this.progress.addAdventure(this.adv.id, this.score, this.total);
      this.app.save();
    }
  }

  onKey(e) {
    if (!this.adv) return;
    const n = Number(e.key);
    if (n >= 1 && n <= 4) { this.pick(n - 1); this.app.render(); }
    else if (e.key === "ArrowRight" && this.picked !== null) { this.next(); this.app.render(); }
  }

  afterRender() {
    // Leva a conversa para o fim, onde está a última fala
    if (this.adv) document.querySelector(".chatbox")?.lastElementChild?.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  onAction(action, value) {
    switch (action) {
      case "advopen": this.begin(ADVENTURES.find(a => a.id === value)); break;
      case "advpick": this.pick(Number(value)); break;
      case "advnext": this.next(); break;
      case "advpt": this.showPt = !this.showPt; break;
      case "advagain": this.begin(this.adv); break;
      case "advexit": this.begin(null); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
