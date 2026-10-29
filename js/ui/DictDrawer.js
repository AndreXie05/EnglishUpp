// Dicionário rápido: gaveta por cima do exercício, para procurar uma palavra sem sair do ecrã
class DictDrawer {
  constructor(app) {
    this.app = app;
    this.open = false;
    this.fab = document.createElement("button");
    this.fab.className = "dictfab";
    this.fab.type = "button";
    this.fab.hidden = true;
    this.fab.setAttribute("aria-label", "Abrir o dicionário");
    this.fab.innerHTML = `<span aria-hidden="true">📖</span><b>Dicionário</b>`;
    this.fab.addEventListener("click", () => this.show());
    this.box = document.createElement("div");
    this.box.className = "dictdrawer";
    this.box.hidden = true;
    this.box.setAttribute("role", "dialog");
    this.box.setAttribute("aria-label", "Dicionário");
    this.box.innerHTML = `<div class="dd-back" data-dd="close"></div>
      <div class="dd-sheet"><div class="dd-head"><b>📖 Dicionário</b><button type="button" class="dd-x" data-dd="close" aria-label="Fechar">✕</button></div>
        <input type="search" class="search" id="ddq" placeholder="Procura uma palavra (house, casa, went…)" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Procurar palavra">
        <div class="dd-list" id="ddl"></div></div>`;
    this.box.addEventListener("click", e => { if (e.target.dataset.dd === "close") this.hide(); });
    this.box.querySelector("#ddq").addEventListener("input", e => this.search(e.target.value));
    document.addEventListener("keydown", e => { if (e.key === "Escape" && this.open) this.hide(); });
    document.body.append(this.fab, this.box);
  }

  // Mostra o botão só nos ecrãs de exercício
  sync(view) {
    const ok = !!view.dictOk;
    this.fab.hidden = !ok || this.open;
    if (!ok && this.open) this.hide();
  }

  show() {
    this.open = true;
    this.box.hidden = false;
    this.fab.hidden = true;
    const input = this.box.querySelector("#ddq");
    const sel = String(window.getSelection?.() || "").trim();
    // Se tinhas uma palavra do texto selecionada, procura-a logo
    if (sel && sel.length < 30) { input.value = sel; this.search(sel); }
    input.focus();
  }

  hide() {
    this.open = false;
    this.box.hidden = true;
    this.fab.hidden = !this.app.view.dictOk;
  }

  search(q) {
    const list = this.box.querySelector("#ddl");
    q = q.trim();
    if (!q) { list.innerHTML = `<p class="muted" style="margin:0">Escreve em inglês ou em português.</p>`; return; }
    const dict = this.app.dict;
    // Uma tradução exatamente igual ao que escreveste vem primeiro (casa → house, antes de casa de banho)
    const exact = e => e.pt.split(/\s*[\/,;]\s*/).some(p => Dictionary.plain(p) === Dictionary.plain(q)) ? 0 : 1;
    let found = dict.search(q, 12).sort((x, y) => exact(x) - exact(y)).slice(0, 8);
    if (!found.length) { const e = dict.findEntry(q); if (e) found = [e]; }
    const esc = Utils.esc || (s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])));
    list.innerHTML = found.length ? found.map(e => `<article class="dd-item"><div class="hw"><h3>${esc(e.en)}</h3>${e.ipa ? `<span class="ipa">/${esc(e.ipa)}/</span>` : ""}<span class="pos">${esc(e.pos)}</span></div>
      <div class="pt">${esc(e.pt)}</div>${e.exEn ? `<div class="ex">${esc(e.exEn)}<br><i>${esc(e.exPt)}</i></div>` : ""}
      <a class="cam" href="${Utils.cambridgeUrl(e.en)}" target="_blank" rel="noopener">Ouvir no Cambridge ↗</a></article>`).join("")
      : `<p class="muted" style="margin:0">Não encontrei “${esc(q)}”.</p>`;
  }
}
