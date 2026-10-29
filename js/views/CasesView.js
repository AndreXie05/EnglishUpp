// Mistérios: salas de fuga e casos de detetive (separado dos temas)
class CasesView extends View {
  constructor(app) {
    super(app);
    this.c = null;
  }

  get tab() { return "misterios"; }
  get dictOk() { return !!this.c; }

  open(c) {
    this.c = c;
    this.read = null;       // objeto ou pista aberta
    this.solved = new Set(); // fechaduras abertas (sala de fuga)
    this.attempts = 0;
    this.msg = null;
    this.showPt = false;
    this.tabName = "evidence";
    this.accused = null;
    this.done = false;
    this.xp = 0;
  }

  render() {
    return this.c ? this.playPage() : this.listPage();
  }

  /* ----- lista ----- */

  listPage() {
    const group = (kind, title, text) => `<section class="panel"><h2>${title}</h2><p class="muted" style="margin:0">${text}</p>
      <div class="themes">${CASES.filter(c => c.kind === kind).map(c => this.card(c)).join("")}</div></section>`;
    return `<div><div class="eyebrow">Fora dos temas</div><h1>Mistérios 🕵️</h1></div>
      <p class="muted" style="margin:0">Lê pistas em inglês e resolve. Usa o botão do dicionário se não souberes uma palavra. Não dependem das lições que fizeste.</p>
      ${group("escape", "Salas de fuga 🔐", "Estás fechado numa sala. Lê as pistas e abre as fechaduras para sair.")}
      ${group("detective", "Casos de detetive 🔎", "Lê as provas, ouve os suspeitos e descobre quem é o culpado.")}`;
  }

  card(c) {
    const r = this.progress.data.cases?.[c.id];
    const pill = r?.done ? `<span class="pill done">Resolvido ✓</span>` : `<span class="pill">Novo</span>`;
    return `<button class="theme tcard ${r?.done ? "doneLesson" : ""}" style="--lc:${ThemesView.LEVEL_COLORS[c.level] || "var(--accent)"}" data-action="caseopen" data-v="${c.id}">
      <div class="row" style="justify-content:space-between;width:100%"><span class="ticon" aria-hidden="true">${c.icon}</span>${pill}</div>
      <span class="eyebrow tnum">${c.kind === "escape" ? "Sala de fuga" : "Detetive"} · ${c.level}</span><span class="t">${this.esc(c.title)}</span></button>`;
  }

  /* ----- jogo ----- */

  playPage() {
    const c = this.c;
    const top = `<div class="row" style="justify-content:space-between"><span class="eyebrow">${c.icon} ${c.kind === "escape" ? "Sala de fuga" : "Caso de detetive"} · ${c.level}</span><button class="linkbtn" data-action="caseexit">Sair</button></div>
      <h1>${this.esc(c.title)}</h1>
      <section class="panel casebrief"><p style="margin:0">${this.esc(c.intro)}</p>${this.showPt ? `<p class="muted" style="margin:0">${this.esc(c.introPt)}</p>` : ""}
        <div class="row"><button class="btn ghost small" data-action="casept">${this.showPt ? "Esconder" : "Mostrar"} tradução</button></div></section>`;
    return top + (c.kind === "escape" ? this.escapeBody() : this.detectiveBody());
  }

  items(list) {
    return `<div class="caseitems">${list.map(o => `<button class="caseitem ${this.read === o.id ? "on" : ""}" data-action="caseread" data-v="${o.id}"><span class="ci">${o.emoji}</span><span>${this.esc(o.name)}</span></button>`).join("")}</div>`;
  }

  readPanel(list) {
    const o = list.find(x => x.id === this.read);
    return `<div class="caseread">${o ? `<b>${o.emoji} ${this.esc(o.name)}</b><p style="margin:6px 0 0">${this.esc(o.text)}</p>` : `<span class="muted">Clica num objeto para ler a pista.</span>`}</div>`;
  }

  /* sala de fuga */

  escapeBody() {
    const c = this.c;
    const locks = c.locks.map((l, i) => {
      const open = this.solved.has(i);
      const opts = l.options.map((o, k) => `<button class="opt" data-action="caselock" data-v="${i}:${k}" ${open ? "disabled" : ""}>${this.esc(o)}</button>`).join("");
      return `<div class="caselock ${open ? "open" : ""}"><div class="row" style="justify-content:space-between"><b>${open ? "🔓" : "🔒"} ${this.esc(l.q)}</b></div>
        ${open ? `<div class="fb ok">✓ ${this.esc(l.explain)}</div>` : `<div class="opts stacked">${opts}</div>`}</div>`;
    }).join("");
    const win = this.done ? `<section class="panel endbox"><h2>🎉 Fugiste!</h2><p style="margin:0">Abriste as ${c.locks.length} fechaduras com ${this.attempts} erro${this.attempts === 1 ? "" : "s"}. ${this.xp ? `+${this.xp} XP.` : ""}</p>
      <div class="row"><button class="btn" data-action="caseagain">Jogar outra vez</button><button class="btn ghost" data-action="caseexit">Escolher outro</button></div></section>` : "";
    return `<section class="panel"><h2>Procura pistas</h2>${this.items(c.objects)}${this.readPanel(c.objects)}</section>
      <section class="panel"><h2>Fechaduras · ${this.solved.size}/${c.locks.length}</h2>${locks}${this.msg ? `<div class="fb no">${this.esc(this.msg)}</div>` : ""}</section>${win}`;
  }

  /* detetive */

  detectiveBody() {
    const c = this.c;
    const tabs = [["evidence", "🔎 Provas"], ["suspects", "🧑 Suspeitos"], ["accuse", "⚖️ Acusar"]]
      .map(([k, l]) => `<button data-action="casetab" data-v="${k}" aria-pressed="${this.tabName === k}">${l}</button>`).join("");
    let body;
    if (this.tabName === "evidence") body = `<section class="panel"><h2>Provas</h2>${this.items(c.evidence)}${this.readPanel(c.evidence)}</section>`;
    else if (this.tabName === "suspects") body = `<section class="panel"><h2>Suspeitos</h2>${c.suspects.map(s => `<div class="suspect"><span class="ci">${s.emoji}</span><div><b>${this.esc(s.name)}</b><p style="margin:2px 0 0">“${this.esc(s.statement)}”</p></div></div>`).join("")}</section>`;
    else body = this.accuseBody();
    return `<div class="tabs" role="group" aria-label="Caso">${tabs}</div>${body}`;
  }

  accuseBody() {
    const c = this.c;
    if (this.done) {
      const culprit = c.suspects.find(s => s.id === c.culprit);
      return `<section class="panel endbox"><h2>🎉 Caso resolvido!</h2><p style="margin:0">O culpado é <b>${culprit.emoji} ${this.esc(culprit.name)}</b>.</p>
        <p style="margin:0">${this.esc(c.explain)}</p><p class="muted" style="margin:0">${this.esc(c.explainPt)}</p>
        <p style="margin:0">${this.attempts} tentativa${this.attempts === 1 ? "" : "s"} errada${this.attempts === 1 ? "" : "s"}. ${this.xp ? `+${this.xp} XP.` : ""}</p>
        <div class="row"><button class="btn" data-action="caseagain">Jogar outra vez</button><button class="btn ghost" data-action="caseexit">Escolher outro</button></div></section>`;
    }
    const wrong = this.attempts >= 2 ? `<div class="fb no">Dica: ${this.esc(c.hint)}</div>` : "";
    return `<section class="panel"><h2>Quem é o culpado?</h2><p class="muted" style="margin:0">Lê as provas e o que cada um diz. Quando tiveres a certeza, acusa.</p>
      <div class="opts stacked">${c.suspects.map(s => `<button class="opt ${this.accused === s.id ? "no" : ""}" data-action="caseaccuse" data-v="${s.id}" ${this.accused === s.id ? "disabled" : ""}>${s.emoji} ${this.esc(s.name)}</button>`).join("")}</div>
      ${this.msg ? `<div class="fb no">${this.esc(this.msg)}</div>` : ""}${wrong}</section>`;
  }

  /* ações */

  finish(xpBase, penalty) {
    this.done = true;
    const cases = this.progress.data.cases = this.progress.data.cases || {};
    const first = !cases[this.c.id]?.done;
    cases[this.c.id] = { done: true, best: Math.min(this.attempts, cases[this.c.id]?.best ?? 99) };
    this.xp = first ? Math.max(6, xpBase - this.attempts * penalty) : 0;
    if (this.xp) this.progress.addGame(this.xp); else this.progress.bump("games");
    this.app.save();
  }

  onAction(action, value) {
    switch (action) {
      case "caseopen": this.open(CASES.find(c => c.id === value)); break;
      case "caseexit": this.c = null; break;
      case "caseagain": this.open(this.c); break;
      case "casept": this.showPt = !this.showPt; break;
      case "caseread": this.read = value; break;
      case "casetab": this.tabName = value; this.msg = null; break;
      case "caselock": {
        const [i, k] = value.split(":").map(Number), l = this.c.locks[i];
        if (k === l.answer) {
          this.solved.add(i);
          this.msg = null;
          if (this.solved.size === this.c.locks.length) this.finish(16, 2);
        } else {
          this.attempts++;
          this.msg = this.attempts >= 2 ? `Não é isso. Dica: ${l.hint}` : "Não é isso. Lê outra vez as pistas.";
        }
        break;
      }
      case "caseaccuse":
        if (value === this.c.culprit) { this.accused = null; this.msg = null; this.finish(18, 4); }
        else { this.attempts++; this.accused = value; this.msg = "Ainda não: esse suspeito tem um álibi ou não encaixa nas provas."; }
        break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
