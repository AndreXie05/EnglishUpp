// As palavras que mais erras, com o exemplo e as palavras com que as trocaste
class HardWordsView extends View {
  static MAX = 30;

  get tab() { return "jogo"; }

  words() {
    return this.progress.hardestWords(this.dict, HardWordsView.MAX);
  }

  render() {
    const list = this.words();
    const body = list.length
      ? list.map(({ word: w, wrong }) => {
        const mix = this.progress.confusions(w.key).filter(k => this.dict.has(k)).map(k => this.dict.word(k));
        return `<div class="hard"><div class="row" style="justify-content:space-between"><span><strong>${this.esc(w.en)}</strong> <span class="ipa">/${this.esc(w.ipa)}/</span></span><span class="pill">${wrong} erro${wrong > 1 ? "s" : ""}</span></div>
          <div>${this.esc(w.pt)}</div>
          <div class="muted" style="font-size:.9rem">${this.esc(w.exEn)}<br><i>${this.esc(w.exPt)}</i></div>
          ${mix.length ? `<div class="muted" style="font-size:.9rem">Costumas trocar por: ${mix.map(m => `<b>${this.esc(m.en)}</b> (${this.esc(m.pt)})`).join(", ")}</div>` : ""}
          ${this.cambridgeLink(w)}</div>`;
      }).join("")
      : `<p class="muted" style="margin:0">Ainda sem erros registados. Quando falhares palavras nos testes, aparecem aqui.</p>`;
    return `<div><div class="eyebrow">${list.length} palavra${list.length === 1 ? "" : "s"}</div><h1>Palavras difíceis</h1></div>
      ${list.length ? `<div class="row"><button class="btn" data-action="hardtrain">Treinar estas palavras</button></div>` : ""}
      <section class="panel">${body}</section>`;
  }

  onAction(action) {
    if (action !== "hardtrain") return false;
    this.app.startQuiz(this.words().map(x => x.word.key), false, null, null, true);
    return true;
  }
}
