// Frase embaralhada: ordenar as palavras de uma frase (exemplos das lições e frases inventadas)
class ScrambleView extends View {
  static ROUNDS = 5;

  constructor(app) {
    super(app);
    const themes = GameView.themes(this.app);
    const ok = s => { const n = s.en.split(" ").length; return n >= 4 && n <= 9; };
    this.items = Utils.shuffle([...themes.flatMap(t => this.app.sentences.sentences(t.id)), ...GameView.freeSentences(app), ...GameView.freeSentences(app)].filter(ok)).slice(0, ScrambleView.ROUNDS);
    this.index = 0;
    this.score = 0;
    this.xp = 0;
    this.setup();
  }

  get tab() { return "jogo"; }

  setup() {
    this.checked = null;
    this.built = [];
    const target = this.items[this.index]?.en.split(" ") || [];
    this.chips = Utils.shuffle(target.map((w, i) => ({ w, i })));
    // Garante que a ordem baralhada não é já a certa
    if (target.length > 1 && this.chips.every((c, k) => c.i === k)) this.chips.reverse();
  }

  get finished() { return this.index >= this.items.length; }

  render() {
    if (this.items.length < ScrambleView.ROUNDS) return GameView.needWords("Frases");
    if (this.finished) {
      return `<div><div class="eyebrow">Frases</div><h1>${this.score} de ${this.items.length}</h1></div>
        <section class="panel"><p style="margin:0">Ganhaste ${this.xp} XP.</p>
        <div class="row"><button class="btn" data-action="sagain">Jogar outra vez</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    }
    const it = this.items[this.index], used = new Set(this.built.map(c => c.i));
    const chip = (c, action, extra = "") => `<button class="chip ${extra}" data-action="${action}" data-v="${c.i}" ${this.checked ? "disabled" : ""}>${this.esc(c.w)}</button>`;
    const done = this.checked ? `<div class="fb ${this.checked.ok ? "ok" : "no"}">${this.checked.ok ? "Certo!" : "Quase. A frase certa é:"}</div>
      ${this.checked.ok ? "" : `<div class="q" style="font-size:1.2rem">${this.esc(it.en)}</div>`}
      <div class="row"><button class="btn" data-action="snext">${this.index + 1 < this.items.length ? "Seguinte" : "Ver resultado"}</button></div>`
      : `<div class="row"><button class="btn" data-action="scheck" ${this.built.length === this.chips.length ? "" : "disabled"}>Verificar</button><button class="btn ghost" data-action="sclear" ${this.built.length ? "" : "disabled"}>Limpar</button></div>`;
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Frases · ${this.index + 1} de ${this.items.length}</span><button class="linkbtn" data-action="nav" data-v="jogo">Sair</button></div>
      <section class="panel" style="gap:16px"><div class="eyebrow">Põe as palavras na ordem certa</div>
        <div class="q" style="font-size:1.3rem">${this.esc(it.pt)}</div>
        <div class="build">${this.built.map(c => chip(c, "sunput")).join("") || `<span class="muted">Toca nas palavras abaixo</span>`}</div>
        <div class="build">${this.chips.filter(c => !used.has(c.i)).map(c => chip(c, "sput", "pool")).join("")}</div>${done}</section>`;
  }

  onAction(action, value) {
    const chipOf = list => list.find(c => c.i === Number(value));
    switch (action) {
      case "sput":
        this.built.push(chipOf(this.chips));
        break;
      case "sunput":
        this.built = this.built.filter(c => c.i !== Number(value));
        break;
      case "sclear":
        this.built = [];
        break;
      case "scheck": {
        const ok = this.built.map(c => c.w).join(" ").toLowerCase() === this.items[this.index].en.toLowerCase();
        this.checked = { ok };
        if (ok) { this.score++; this.xp += 1; }
        break;
      }
      case "snext":
        this.index++;
        if (this.finished) {
          if (this.score === this.items.length) this.xp += 3;
          this.progress.addGame(this.xp, "scramble");
          this.app.save();
        } else this.setup();
        break;
      case "sagain":
        this.app.show(new ScrambleView(this.app));
        return true;
      default:
        return false;
    }
    this.app.render();
    return true;
  }
}
