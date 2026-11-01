// Cartões de revisão rápida: vês a palavra, tentas lembrar-te e dizes se sabias
class FlashView extends View {
  static SIZE = 15;

  constructor(app) {
    super(app);
    const p = this.progress, due = new Set(p.dueKeys(this.dict));
    const studied = p.studiedKeys.filter(k => this.dict.has(k));
    // Primeiro as que estão em atraso, depois as outras, ao acaso
    this.keys = Utils.shuffle(studied.filter(k => due.has(k))).concat(Utils.shuffle(studied.filter(k => !due.has(k)))).slice(0, FlashView.SIZE);
    this.due = due;
    this.flip = this.keys.map(() => Math.random() < 0.5);
    this.index = 0;
    this.shown = false;
    this.known = 0;
    this.xp = 0;
  }

  get tab() { return "jogo"; }
  get finished() { return this.index >= this.keys.length; }

  render() {
    if (!this.keys.length) return GameView.needWords("Cartões");
    if (this.finished) {
      return `<div><div class="eyebrow">Cartões</div><h1>${this.known} de ${this.keys.length}</h1></div>
        <section class="panel"><p style="margin:0">Sabias ${this.known}. Ganhaste ${this.xp} XP. As que falhaste voltam amanhã.</p>
        <div class="row"><button class="btn" data-action="flash">Mais cartões</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    }
    const w = this.dict.word(this.keys[this.index]), back = this.flip[this.index];
    const front = back ? `<div class="q">${this.esc(w.pt)}</div>` : `<div class="q">${this.esc(w.en)}</div><div class="ipa">/${this.esc(w.ipa)}/</div>`;
    const answer = this.shown ? `<div class="answer">${back ? `<div class="hw"><h3>${this.esc(w.en)}</h3><span class="ipa">/${this.esc(w.ipa)}/</span></div>` : `<div class="pt">${this.esc(w.pt)}</div>`}
        ${this.example(w.exEn, w.exPt)}</div>
      <div class="row"><button class="btn" data-action="fknew">Sabia</button><button class="btn ghost" data-action="fnot">Não sabia</button></div>`
      : `<div class="row"><button class="btn" data-action="fshow">Mostrar</button></div>`;
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Cartões · ${this.index + 1} de ${this.keys.length}${this.due.has(w.key) ? " · em atraso" : ""}</span><button class="linkbtn" data-action="nav" data-v="jogo">Sair</button></div>
      <div class="bar"><i style="width:${Math.round(this.index / this.keys.length * 100)}%"></i></div>
      <section class="panel" style="gap:16px"><div class="eyebrow">${back ? "Como se diz em inglês?" : "O que significa?"}</div>${front}${answer}</section>`;
  }

  // Só as palavras em atraso mudam a revisão espaçada quando sabes; falhar põe sempre a palavra para amanhã
  rate(knew) {
    const key = this.keys[this.index];
    if (knew) this.known++;
    if (!knew || this.due.has(key)) this.progress.recordAnswer(key, knew);
    this.index++;
    this.shown = false;
    if (this.finished) this.xp = this.progress.addFlash(this.keys.length);
    this.app.save();
    this.app.render();
  }

  onAction(action) {
    switch (action) {
      case "fshow":
        this.shown = true;
        this.app.render();
        return true;
      case "fknew":
        this.rate(true);
        return true;
      case "fnot":
        this.rate(false);
        return true;
    }
    return false;
  }
}
