// Dicionário com todas as palavras usadas no site (lições e textos)
class DictionaryView extends View {
  static LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  constructor(app) {
    super(app);
    this.query = "";
    this.letter = "";
  }

  get tab() { return "dicionario"; }

  render() {
    return `<div><div class="eyebrow">${this.dict.entries.length} palavras</div><h1>Dicionário</h1></div>
      <p class="muted" style="margin:0">Aqui estão todas as palavras usadas no site, das lições e dos textos. Não sabes o que significa uma palavra? Escreve-a aqui, em inglês ou em português.</p>
      <input type="search" id="dsearch" class="search" placeholder="Procura uma palavra…" autocomplete="off" autocapitalize="off" spellcheck="false" value="${this.esc(this.query)}" aria-label="Procurar palavra">
      <div class="chips letters" role="group" aria-label="Letra">${DictionaryView.LETTERS.map(l =>
        `<button class="chipbtn" data-action="dletter" data-v="${l}" aria-pressed="${this.letter === l}">${l}</button>`).join("")}</div>
      <div id="dresults">${this.results()}</div>`;
  }

  results() {
    let list;
    if (this.query.trim()) list = this.dict.search(this.query);
    else if (this.letter) list = this.dict.byLetter(this.letter);
    else return `<p class="muted" style="margin:0">Escreve uma palavra ou escolhe uma letra.</p>`;
    if (!list.length) {
      const q = this.query.trim();
      return `<div class="panel"><p style="margin:0">Não encontrei “${this.esc(q)}”: esta palavra não é usada no site.
        Podes ver o significado no <a href="${Utils.cambridgeUrl(q)}" target="_blank" rel="noopener">dicionário Cambridge ↗</a>.</p></div>`;
    }
    return `<p class="muted" style="margin:0">${list.length} resultado${list.length > 1 ? "s" : ""}</p>
      <div class="entries">${list.map(e => this.entry(e)).join("")}</div>`;
  }

  entry(e) {
    const theme = e.lesson ? this.dict.theme(e.themeId) : null;
    return `<article class="entry solo"><div class="body">
      <div class="hw"><h3>${this.esc(e.en)}</h3>${e.ipa ? `<span class="ipa">/${this.esc(e.ipa)}/</span>` : ""}<span class="pos">${this.esc(e.pos)}</span></div>
      <div class="pt">${this.esc(e.pt)}</div>
      ${e.exEn ? `<div class="ex">${this.esc(e.exEn)}<br><i>${this.esc(e.exPt)}</i></div>` : ""}
      <div class="row" style="gap:4px 16px"><a class="cam" href="${Utils.cambridgeUrl(e.en)}" target="_blank" rel="noopener">Ouvir no Cambridge ↗</a>
        ${theme ? `<button class="linkbtn" data-action="open" data-v="${theme.id}">Lição: ${this.esc(theme.pt)}</button>` : ""}</div>
    </div></article>`;
  }

  // A pesquisa atualiza só os resultados, para o campo não perder o cursor
  afterRender() {
    const input = document.getElementById("dsearch");
    if (!input) return;
    input.addEventListener("input", () => {
      this.query = input.value;
      this.letter = "";
      document.getElementById("dresults").innerHTML = this.results();
      document.querySelectorAll(".letters [aria-pressed]").forEach(b => b.setAttribute("aria-pressed", "false"));
    });
  }

  onAction(action, value) {
    if (action !== "dletter") return false;
    this.letter = this.letter === value ? "" : value;
    this.query = "";
    this.app.render();
    return true;
  }
}
