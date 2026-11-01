// Dicionário com todas as palavras usadas no site (lições e textos), com as últimas pesquisas e uma palavra ao acaso
class DictionaryView extends View {
  static LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  static RECENT = 5;

  constructor(app) {
    super(app);
    this.query = "";
    this.letter = "";
  }

  get tab() { return "dicionario"; }

  get recent() { return this.progress.data.dictRecent || []; }

  render() {
    return `<section class="panel dhero"><div class="eyebrow">${this.dict.entries.length} palavras</div><h1>Dicionário 📖</h1>
        <p style="margin:0">Todas as palavras das lições e dos textos. Escreve em inglês ou em português.</p>
        <div class="dsearch"><span aria-hidden="true">🔍</span><input type="search" id="dsearch" placeholder="Procura uma palavra…" autocomplete="off" autocapitalize="off" spellcheck="false" value="${this.esc(this.query)}" aria-label="Procurar palavra"></div>
        <div id="drecent">${this.recentHtml()}</div></section>
      <div class="dletters" role="group" aria-label="Letra">${DictionaryView.LETTERS.map(l =>
        `<button data-action="dletter" data-v="${l}" aria-pressed="${this.letter === l}">${l}</button>`).join("")}</div>
      <div id="dresults">${this.results()}</div>`;
  }

  // As últimas pesquisas, em botões para repetir; e uma palavra ao acaso
  recentHtml() {
    const r = this.recent;
    return `<div class="drecent">${r.length ? `<span class="muted">🕘 Recentes:</span>${r.map(q =>
      `<button class="dchip" data-action="drecent" data-v="${this.esc(q)}">${this.esc(q)}</button>`).join("")}
      <button class="linkbtn" data-action="dclear">Limpar</button>` : ""}
      <button class="dchip dice" data-action="drandom">🎲 Palavra ao acaso</button></div>`;
  }

  results() {
    let list;
    if (this.query.trim()) list = this.dict.search(this.query);
    else if (this.letter) list = this.dict.byLetter(this.letter);
    else return `<div class="dempty"><span aria-hidden="true">🔤</span><p style="margin:0">Escreve uma palavra, escolhe uma letra ou experimenta uma palavra ao acaso.</p></div>`;
    if (!list.length) {
      const q = this.query.trim();
      return `<div class="dempty"><span aria-hidden="true">🤔</span><p style="margin:0">Não encontrei “${this.esc(q)}”: esta palavra não é usada no site.
        Podes ver o significado no <a href="${Utils.cambridgeUrl(q)}" target="_blank" rel="noopener">dicionário Cambridge ↗</a>.</p></div>`;
    }
    return `<p class="muted" style="margin:0">${list.length} resultado${list.length > 1 ? "s" : ""}</p>
      <div class="dentries">${list.map(e => this.entry(e)).join("")}</div>`;
  }

  entry(e) {
    const theme = e.lesson ? this.dict.theme(e.themeId) : null;
    const color = theme ? ThemesView.LEVEL_COLORS[theme.level] : "var(--accent)";
    return `<article class="dentry" style="--lc:${color}">
      <div class="dhead"><h3>${this.esc(e.en)}</h3>${e.pos ? `<span class="dpos">${this.esc(e.pos)}</span>` : ""}${theme ? `<span class="dlevel">${theme.level}</span>` : ""}</div>
      ${e.ipa ? `<span class="ipa">/${this.esc(e.ipa)}/</span>` : ""}
      <div class="dpt">${this.esc(e.pt)}</div>
      ${e.exEn ? `<div class="dex">${this.esc(e.exEn)}<i>${this.esc(e.exPt)}</i></div>` : ""}
      <div class="dlinks"><a class="cam" href="${Utils.cambridgeUrl(e.en)}" target="_blank" rel="noopener">🔊 Ouvir no Cambridge ↗</a>
        ${theme ? `<button class="linkbtn" data-action="open" data-v="${theme.id}">📘 Lição: ${this.esc(theme.pt)}</button>` : ""}</div></article>`;
  }

  // Guarda uma pesquisa nas recentes (sem repetidas, a mais nova primeiro)
  remember(q) {
    q = q.trim();
    if (q.length < 2 || !this.dict.search(q).length) return;
    const list = this.recent.filter(x => x.toLowerCase() !== q.toLowerCase());
    this.progress.data.dictRecent = [q, ...list].slice(0, DictionaryView.RECENT);
    this.app.save();
    const box = document.getElementById("drecent");
    if (box) box.innerHTML = this.recentHtml();
  }

  search(q) {
    this.query = q;
    this.letter = "";
    this.app.render();
  }

  // A pesquisa atualiza só os resultados, para o campo não perder o cursor; guarda-se quando se para de escrever
  afterRender() {
    const input = document.getElementById("dsearch");
    if (!input) return;
    input.addEventListener("input", () => {
      this.query = input.value;
      this.letter = "";
      document.getElementById("dresults").innerHTML = this.results();
      document.querySelectorAll(".dletters [aria-pressed]").forEach(b => b.setAttribute("aria-pressed", "false"));
      clearTimeout(this.saveTimer);
      this.saveTimer = setTimeout(() => this.remember(input.value), 1200);
    });
  }

  onAction(action, value) {
    switch (action) {
      case "dletter":
        this.letter = this.letter === value ? "" : value;
        this.query = "";
        break;
      case "drecent":
        this.search(value);
        this.remember(value);
        return true;
      case "dclear":
        this.progress.data.dictRecent = [];
        this.app.save();
        break;
      case "drandom": {
        const e = Utils.pick(this.dict.entries.filter(x => x.lesson));
        this.search(e.en);
        return true;
      }
      default:
        return false;
    }
    this.app.render();
    return true;
  }
}
