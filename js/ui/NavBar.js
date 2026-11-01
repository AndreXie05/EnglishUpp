// Separadores do topo
class NavBar {
  static ITEMS = [["hoje", "Hoje", "🏠"], ["jogo", "Jogo", "🎮"], ["temas", "Temas", "🗂️"], ["teste", "Teste", "✅"], ["textos", "Textos", "📄"], ["frases", "Frases", "💬"], ["gramatica", "Gramática", "📐"], ["dicionario", "Dicionário", "📖"], ["progresso", "Progresso", "📈"]];

  constructor(app) {
    this.app = app;
    this.el = document.getElementById("nav");
  }

  render() {
    const due = this.app.progress.dueKeys(this.app.dict).length;
    const current = this.app.view.tab;
    this.el.innerHTML = NavBar.ITEMS.map(([k, label, icon]) =>
      `<button data-action="nav" data-v="${k}" ${current === k ? 'aria-current="page"' : ""}><span class="navicon" aria-hidden="true">${icon}</span>${label}${
        k === "teste" && due ? `<span class="badge">${due}</span>` : ""}</button>`).join("");
  }
}
