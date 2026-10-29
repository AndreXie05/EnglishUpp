// Classe base de todos os ecrãs
class View {
  constructor(app) {
    this.app = app;
  }

  get dict() { return this.app.dict; }
  get progress() { return this.app.progress; }

  // Mostra o botão do dicionário rápido neste ecrã? (ecrãs de exercício)
  get dictOk() { return false; }

  // Separador da barra de navegação que fica ativo neste ecrã
  get tab() { return null; }

  // Cada ecrã devolve o seu HTML
  render() {
    return "";
  }

  // Chamado depois de o HTML estar na página (foco, eventos de escrita, etc.)
  afterRender() {}

  // Trata ações próprias do ecrã; devolve true se tratou
  onAction(action, value, el) {
    return false;
  }

  // Perguntas sobre um texto, uma de cada vez: Anterior / Seguinte e, no fim, o resultado.
  // qi = pergunta atual (qi >= total mostra o resultado); pick/again = nomes das ações do ecrã
  stepper(qs, answers, qi, pick, again) {
    const total = qs.length;
    const score = qs.filter((q, i) => answers[i] === q.answer).length;
    if (qi >= total) {
      const pct = score / total;
      return `<section class="panel"><h2>Resultado</h2>
        <div class="fb ${pct >= 0.7 ? "ok" : "no"}">${score} de ${total} certas. ${score === total ? "Perfeito!" : pct >= 0.7 ? "Muito bem!" : "Lê o texto outra vez e tenta de novo."}</div>
        ${qs.map((q, i) => `<div class="ans ${answers[i] === q.answer ? "ok" : "no"}"><span>${answers[i] === q.answer ? "✓" : "✗"} ${i + 1}. ${this.esc(q.q)}</span><span class="muted">${answers[i] === undefined ? "—" : this.esc(q.options[answers[i]])}${answers[i] === q.answer ? "" : ` → <strong>${this.esc(q.options[q.answer])}</strong>`}</span></div>`).join("")}
        <div class="row"><button class="btn ghost small" data-action="qprev">← Rever perguntas</button><button class="btn small" data-action="${again}">Tentar outra vez</button></div></section>`;
    }
    const q = qs[qi], given = answers[qi], answered = given !== undefined;
    return `<section class="panel"><div class="row" style="justify-content:space-between"><h2>Perguntas sobre o texto</h2><span class="muted">${qi + 1} de ${total}</span></div>
      <div class="bar"><i style="width:${Math.round((qi + (answered ? 1 : 0)) / total * 100)}%"></i></div>
      <div class="question"><strong>${this.esc(q.q)}</strong>
        <div class="opts stacked">${q.options.map((o, k) => {
          const state = answered ? (k === q.answer ? "ok" : k === given ? "no" : "") : "";
          return `<button class="opt ${state}" data-action="${pick}" data-q="${qi}" data-v="${k}" ${answered ? "disabled" : ""}>${this.esc(o)}</button>`;
        }).join("")}</div></div>
      <div class="wordnav"><button class="btn ghost" data-action="qprev" aria-label="Pergunta anterior" ${qi === 0 ? "disabled" : ""}>←</button>
        <button class="btn" data-action="qnext" ${answered ? "" : "disabled"}>${qi === total - 1 ? "Ver resultado" : "Seguinte →"}</button></div>
      <span class="muted" style="font-size:.85rem">Também podes usar as teclas 1 a ${q.options.length} para responder e as setas ← → para andar.</span></section>`;
  }

  // Passos do stepper; devolve o novo índice ou null se não se mexe
  stepIndex(qi, d, total, answered) {
    const n = Math.max(0, Math.min(total, qi + d));
    return n === qi || (d > 0 && !answered) ? null : n;
  }

  // Trata teclas premidas fora dos campos de texto
  onKey(e) {}

  // Trata o envio de formulários do ecrã
  onSubmit(form) {
    return false;
  }

  esc(s) {
    return Utils.esc(s);
  }

  cambridgeLink(word) {
    return `<a class="cam" href="${Utils.cambridgeUrl(word.en)}" target="_blank" rel="noopener">Ouvir no Cambridge ↗</a>`;
  }

  stats() {
    const p = this.progress;
    return `<div class="stats">
      <div class="stat streakstat ${p.data.days.includes(DateUtils.today()) ? "lit" : ""}"><b><span class="flame" aria-hidden="true">🔥</span> ${p.streak()}</b><span>dias seguidos</span></div>
      <div class="stat"><b>${p.spun ? `${Math.min(p.todayCount, p.goal)}/${p.goal}` : p.todayCount}</b><span>exercícios hoje</span></div>
      <div class="stat"><b>${p.wordCount}</b><span>palavras estudadas</span></div>
      <div class="stat"><b>${p.masteredCount}</b><span>palavras dominadas</span></div>
    </div>`;
  }
}
