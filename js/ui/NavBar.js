// Separadores do topo, com ícones desenhados (SVG) e uma cor por secção
class NavBar {
  static ITEMS = [["hoje", "Hoje", "home", "#F5A524"], ["jogo", "Jogo", "game", "#E5484D"], ["temas", "Temas", "layers", "#2F6FED"],
    ["teste", "Teste", "check", "#30A46C"], ["textos", "Textos", "file", "#12A594"], ["frases", "Frases", "chat", "#8E4EC6"],
    ["gramatica", "Gramática", "pen", "#5B5BD6"], ["dicionario", "Dicionário", "book", "#D6409F"], ["progresso", "Progresso", "chart", "#0EA5C6"]];

  // Traços dos ícones (grelha 24×24)
  static ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
    game: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4"/><circle cx="15.5" cy="11.5" r=".6" fill="currentColor"/><circle cx="18" cy="14" r=".6" fill="currentColor"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12.5 9 5 9-5"/><path d="m3 16.5 9 5 9-5"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.8 2.8L16.5 9"/>',
    file: '<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8Z"/><path d="M14 3v5h5"/><path d="M8.5 13h7M8.5 16.5h5"/>',
    chat: '<path d="M20.5 12a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1-4.4A8.5 8.5 0 1 1 20.5 12Z"/><path d="M8.5 10.5h7M8.5 14h4.5"/>',
    pen: '<path d="M4 20l1-4.5L16 4.5a2.1 2.1 0 0 1 3 3L8 18.5Z"/><path d="m14 6.5 3 3"/><path d="M13 20h7"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v14H6.5A2.5 2.5 0 0 0 4 19.5Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/><circle cx="12" cy="9.5" r="3"/><path d="m14.2 11.7 2 2"/>',
    chart: '<path d="M3.5 3.5v17h17"/><path d="m7.5 15 4-4.5 3 3 5.5-6"/><path d="M15.5 7.5H20V12"/>',
  };

  static icon(name) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${NavBar.ICONS[name]}</svg>`;
  }

  constructor(app) {
    this.app = app;
    this.el = document.getElementById("nav");
    this.info = document.getElementById("topinfo");
  }

  // Ao lado do nome da app: a sequência de dias e o nível
  renderInfo() {
    if (!this.info) return;
    const p = this.app.progress, lit = p.data.days.includes(DateUtils.today());
    this.info.innerHTML = `<span class="ti ${lit ? "lit" : ""}"><span aria-hidden="true">🔥</span>${p.streak()}</span><span class="ti"><span aria-hidden="true">⭐</span>Nv ${p.level}</span>`;
  }

  render() {
    this.renderInfo();
    const due = this.app.progress.dueKeys(this.app.dict).length;
    const current = this.app.view.tab;
    this.el.innerHTML = NavBar.ITEMS.map(([k, label, icon, color]) =>
      `<button data-action="nav" data-v="${k}" style="--nc:${color}" ${current === k ? 'aria-current="page"' : ""}><span class="navicon">${NavBar.icon(icon)}</span><span class="navlabel">${label}</span>${
        k === "teste" && due ? `<span class="badge">${due}</span>` : ""}</button>`).join("");
    // Em ecrãs estreitos a barra desliza: mostra sempre o separador ativo
    this.el.querySelector("[aria-current]")?.scrollIntoView?.({ inline: "center", block: "nearest" });
  }
}
