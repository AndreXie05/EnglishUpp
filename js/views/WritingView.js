// Escrita: treinos de tradução em forma de jogo, com o registo da semana
class WritingView extends View {
  constructor(app, level = null) {
    super(app);
    this.level = level;
  }

  get tab() { return "escrita"; }

  get currentLevel() {
    return this.level || this.progress.nextTheme(this.dict)?.level || "A1";
  }

  render() {
    return `<div><div class="eyebrow">Traduzir do português para o inglês</div><h1>Escrita</h1></div>
      <p class="muted" style="margin:0">Cada treino tem 10 frases em português para escreveres em inglês. Ganhas pontos por cada frase certa e um bónus por acertos seguidos (combo). Há ${this.app.sentences.total} frases, distribuídas pelos temas.</p>
      ${this.quickStart()}
      ${this.produceCard()}
      ${this.scoreboard()}
      ${this.themePicker()}`;
  }

  studiedThemes() {
    return this.dict.themes.filter(t => this.progress.lesson(t.id));
  }

  quickStart() {
    const studied = this.studiedThemes();
    if (!studied.length) {
      return `<section class="panel"><p style="margin:0">Estuda a primeira lição e volta aqui. Podes também treinar já qualquer tema da lista.</p>
        <div class="row"><button class="btn" data-action="translateMix" data-v="A1">Treino misto de A1</button></div></section>`;
    }
    return `<section class="panel lead hero"><span class="heroicon" aria-hidden="true">🚀</span><div class="eyebrow">Jogar agora</div>
      <h2>Treino misto das lições que já estudaste</h2>
      <p class="muted" style="margin:0">${studied.length} tema${studied.length > 1 ? "s" : ""} · 10 frases sorteadas de todos eles.</p>
      <div class="row"><button class="btn" data-action="translateMix" data-v="studied">Começar</button></div></section>`;
  }

  // Exercícios de escrita em cartões coloridos: diário, ordenar frases, escrever frases, completar textos
  produceCard() {
    const studied = this.studiedThemes().length > 0;
    const scope = studied ? "studied" : this.currentLevel;
    const label = studied ? "das lições que já estudaste" : `de ${this.currentLevel}`;
    const card = (act, v, icon, name, text, c) => `<button class="gcard g${c}" data-action="${act}"${v ? ` data-v="${v}"` : ""}>
      <span class="gicon" aria-hidden="true">${icon}</span><span class="gname">${name}</span><span class="gdesc">${text}</span></button>`;
    return `<section class="panel"><h2>Mais exercícios de escrita</h2>
      <p class="muted" style="margin:0">Material ${label}. Cada treino fica no registo da semana.</p>
      <div class="gamegrid">
        ${card("diary", "", "📓", "Diário de escrita", "Escreve 3 a 5 frases livres e vê os erros", 7)}
        ${card("produce", `order:${scope}`, "🧩", "Ordenar frases", "Junta as palavras pela ordem certa (8 frases)", 3)}
        ${card("produce", `write:${scope}`, "✍️", "Escrever frases", "Uma frase tua com uma palavra da lição (6 palavras)", 4)}
        ${card("produce", `cloze:${scope}`, "📝", "Completar o texto", "Preenche os espaços de um texto de leitura", 5)}
      </div></section>`;
  }

  // O registo da semana: cada treino é uma partida guardada, que desaparece ao fim de 7 dias
  scoreboard() {
    this.progress.purgeRounds();
    const rounds = this.progress.weekRounds();
    const best = rounds.length ? Math.max(...rounds.map(r => r.points)) : 0;
    const body = rounds.length
      ? `<div class="stats">
          <div class="stat"><b>${rounds.length}</b><span>treinos</span></div>
          <div class="stat"><b>${this.progress.weekPoints()}</b><span>pontos</span></div>
          <div class="stat"><b>${best}</b><span>melhor treino</span></div>
        </div>
        <div style="overflow-x:auto"><table><thead><tr><th>Dia</th><th>Treino</th><th>Pontos</th><th>Certas</th><th>Apaga em</th></tr></thead><tbody>
        ${rounds.map(r => { const d = this.progress.daysLeft(r); return `<tr><td>${this.esc(r.date)}</td><td>${this.esc(r.title)}</td><td>${r.points}</td><td>${r.correct}/${r.total}</td><td>${d} dia${d > 1 ? "s" : ""}</td></tr>`; }).join("")}</tbody></table></div>`
      : `<p class="muted" style="margin:0">Ainda não jogaste esta semana. O teu primeiro treino aparece aqui.</p>`;
    return `<section class="panel"><h2>Registo da semana</h2>
      <p class="muted" style="margin:0;font-size:.9rem">Cada treino fica guardado como uma partida e desaparece sozinho ao fim de 7 dias.</p>${body}</section>`;
  }

  themePicker() {
    const level = this.currentLevel;
    const themes = this.dict.themes.filter(t => t.level === level);
    return `<section class="panel"><h2>Escolhe um tema</h2>
      <div class="tabs" role="group" aria-label="Nível">${ProgressView.LEVELS.map(([code]) =>
        `<button data-action="wlevel" data-v="${code}" aria-pressed="${code === level}">${code}</button>`).join("")}</div>
      <div class="row"><button class="btn ghost small" data-action="translateMix" data-v="${level}">Treino misto de ${level}</button></div>
      <div class="themes">${themes.map(t => `<button class="theme tcard" style="--lc:${ThemesView.LEVEL_COLORS[t.level] || "var(--accent)"}" data-action="translate" data-v="${t.id}">
        <div class="row" style="justify-content:space-between;width:100%"><span class="ticon" aria-hidden="true">${ThemesView.icon(t)}</span><span class="pill">Treinar</span></div>
        <span class="eyebrow tnum">Lição ${t.number} · ${t.level}</span><span class="t">${this.esc(t.pt)}</span>
        <span class="muted" style="font-size:.85rem">${this.app.sentences.count(t.id)} frases</span></button>`).join("")}</div>
    </section>`;
  }

  onAction(action, value) {
    if (action === "wlevel") {
      this.level = value;
      this.app.render();
      return true;
    }
    if (action === "produce") {
      const [mode, scope] = value.split(":");
      const themes = scope === "studied" ? this.studiedThemes() : this.dict.themes.filter(t => t.level === scope);
      this.app.show(new ProductionView(this.app, mode, themes, scope === "studied" ? "estudadas" : scope));
      return true;
    }
    if (action === "translateMix") {
      const themes = value === "studied" ? this.studiedThemes() : this.dict.themes.filter(t => t.level === value);
      this.app.show(new TranslationView(this.app, themes, value === "studied" ? "Misto (estudadas)" : `Misto ${value}`));
      return true;
    }
    return false;
  }
}
