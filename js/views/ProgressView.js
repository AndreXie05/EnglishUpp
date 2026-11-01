// Estatísticas, histórico de testes e palavras difíceis
class ProgressView extends View {
  static BOX_LABELS = ["Amanhã", "2 dias", "4 dias", "7 dias", "15 dias", "30 dias"];

  constructor(app) {
    super(app);
    this.confirmReset = false;
  }

  get tab() { return "progresso"; }

  render() {
    return `${this.heroPanel()}
      ${this.stats()}
      ${this.levelBars()}
      ${this.badgesPanel()}
      ${this.examsPanel()}
      ${this.writingStats()}
      ${this.boxesChart()}
      ${this.testsTable()}
      ${this.hardWords()}
      ${this.levels()}
      ${this.backupPanel()}
      ${this.resetPanel()}
      <div class="sync">${this.esc(this.app.storage.label)}</div>`;
  }

  // Níveis do Quadro Europeu Comum de Referência (descrições e equivalências indicadas pelo utilizador). Vocabulário: estimativas de Milton (2009) citadas por Paul Nation; variam entre autores
  static LEVELS = [
    ["A1", "Iniciante (Beginner)", "Utilizador elementar. Compreende e usa expressões quotidianas muito simples e frases básicas para satisfazer necessidades imediatas: apresentar-se, cumprimentar, fazer perguntas simples.", "menos de 1500 palavras"],
    ["A2", "Básico (Elementary)", "Utilizador elementar. Comunica em tarefas simples e rotineiras, trocando informação direta sobre assuntos familiares e do dia a dia: compras, direções, dados pessoais.", "1500 a 2500 palavras"],
    ["B1", "Intermédio (Intermediate)", "Utilizador independente. Lida com a maioria das situações em viagens, descreve experiências, acontecimentos e sonhos, e dá breves justificações para opiniões ou planos. Equivale a IELTS 4.0–5.0 / PET.", "2500 a 3250 palavras"],
    ["B2", "Intermédio superior (Upper-Intermediate)", "Utilizador independente. Compreende as ideias principais de textos complexos e interage com falantes nativos com espontaneidade e fluidez, sem esforço tenso. Equivale a IELTS 5.5–6.5 / FCE.", "mais de 3250 palavras"],
    ["C1", "Avançado (Advanced)", "Utilizador proficiente. Compreende textos longos e exigentes, reconhece sentidos implícitos e usa a língua com flexibilidade e eficácia para fins sociais, académicos e profissionais. Equivale a IELTS 7.0–8.0 / CAE.", "muito mais de 3250 palavras"],
    ["C2", "Domínio pleno (Proficiency)", "Utilizador proficiente. Compreende praticamente tudo o que ouve ou lê e resume informação de várias fontes orais e escritas com precisão e espontaneidade. Equivale a IELTS 8.5–9.0 / CPE.", "vocabulário muito vasto"],
  ];

  // Cabeçalho: nível com um anel de XP, e o total de lições, palavras e exames
  heroPanel() {
    const p = this.progress, lv = p.level, from = Progress.xpFor(lv), to = Progress.xpFor(lv + 1);
    const pct = Math.round((p.xp - from) / (to - from) * 100);
    const lessons = this.dict.themes.filter(t => p.lessonComplete(t.id)).length;
    const exams = ProgressView.LEVELS.filter(([c]) => p.examPassed(c)).length;
    return `<section class="panel phero"><div class="pring" style="--p:${pct}"><b>${lv}</b><span>nível</span></div>
      <div class="phtext"><div class="eyebrow">O teu caminho</div><h1>Progresso</h1>
        <p style="margin:0"><b>${this.esc(Rank.title(lv))}</b> · ${p.xp} XP · faltam ${to - p.xp} para o nível ${lv + 1}</p>
        <div class="phchips"><span>📘 ${lessons}/${this.dict.themes.length} lições</span><span>🏆 ${exams} exame${exams === 1 ? "" : "s"}</span><span>🔥 ${p.streak()} dias</span></div></div></section>`;
  }

  // Uma barra por nível com as lições acabadas, na cor do nível
  levelBars() {
    const rows = ProgressView.LEVELS.map(([code, name]) => {
      const themes = this.dict.themes.filter(t => t.level === code);
      if (!themes.length) return "";
      const done = themes.filter(t => this.progress.lessonComplete(t.id)).length, pct = Math.round(done / themes.length * 100);
      return `<button class="plevel" style="--lc:${ThemesView.LEVEL_COLORS[code]}" data-action="level" data-v="${code}">
        <b>${code}</b><span class="plname">${this.esc(name.replace(/ \(.*\)$/, ""))}</span><span class="plbar"><i style="width:${pct}%"></i></span><span class="plnum">${done}/${themes.length}</span></button>`;
    }).join("");
    return `<section class="panel"><h2>📊 Lições por nível</h2><div class="plevels">${rows}</div></section>`;
  }

  badgesPanel() {
    const got = Achievements.LIST.filter(([id]) => this.progress.data.badges[id]).length;
    return `<section class="panel"><h2>🏅 Conquistas · ${got} de ${Achievements.LIST.length}</h2>
      <div class="badges">${Achievements.LIST.map(([id, title, desc]) => {
        const date = this.progress.data.badges[id];
        const [icon, tier] = Achievements.art(id);
        return `<div class="bdg ${date ? "on" : ""}" title="${this.esc(desc)}"><span class="medal t${tier}" aria-hidden="true"><span class="micon">${icon}</span>${date ? "" : `<span class="lock">🔒</span>`}</span><b>${this.esc(title)}</b><span class="muted">${date ? this.esc(DateUtils.format(date)) : this.esc(desc)}</span></div>`;
      }).join("")}</div></section>`;
  }

  examsPanel() {
    const levels = [...new Set(this.dict.themes.map(t => t.level))];
    const rows = levels.map(level => {
      const ex = new LevelExam(level, this.app.examContext());
      const best = this.progress.data.exams[level];
      const status = best == null ? "" : ` · melhor ${best}%${this.progress.examPassed(level) ? " ✓" : ""}`;
      const action = ex.ready ? `<button class="btn small" data-action="exam" data-v="${level}">${best == null ? "Fazer o exame" : "Repetir"}</button>`
        : `<span class="muted">Faz pelo menos ${Math.ceil(ex.themes.length * LevelExam.READY)} lições (tens ${ex.lessonsDone})</span>`;
      const passed = this.progress.examPassed(level);
      return `<div class="pexam ${passed ? "passed" : ""}" style="--lc:${ThemesView.LEVEL_COLORS[level]}"><span class="pexicon" aria-hidden="true">${passed ? "🏆" : ex.ready ? "⚔️" : "🔒"}</span>
        <span class="pextext"><b>Exame ${level}</b><span class="muted">${best == null ? (ex.ready ? "Pronto para fazer" : "Ainda fechado") : `Melhor ${best}%${passed ? " · passaste" : ""}`}</span></span>${action}</div>`;
    }).join("");
    return `<section class="panel"><h2>🎓 Exames finais</h2>
      <p class="muted" style="margin:0;font-size:.9rem">Cerca de 60 perguntas por nível: pronúncia, significado, escrever palavras, frases com espaço, gramática e perguntas sobre textos. Passas com ${LevelExam.PASS}%.</p>${rows}</section>`;
  }

  writingStats() {
    this.progress.purgeRounds();
    const rounds = this.progress.weekRounds();
    const best = rounds.length ? Math.max(...rounds.map(r => r.points)) : 0;
    return `<section class="panel"><h2>✍️ Treinos de tradução (últimos 7 dias)</h2><div class="stats">
      <div class="stat"><b>${rounds.length}</b><span>treinos esta semana</span></div>
      <div class="stat"><b>${this.progress.weekPoints()}</b><span>pontos esta semana</span></div>
      <div class="stat"><b>${best}</b><span>melhor treino</span></div>
    </div></section>`;
  }

  levels() {
    const codes = ProgressView.LEVELS.map(l => l[0]);
    const studied = this.dict.themes.filter(t => this.progress.lesson(t.id)).map(t => codes.indexOf(t.level));
    const current = studied.length ? Math.max(...studied) : 0;
    const levels = [...new Set(this.dict.themes.map(t => t.level))];
    const byLevel = levels.map(l => `${l}: ${this.dict.themes.filter(t => t.level === l).length}`).join(" · ");
    return `<section class="panel"><h2>🧭 Caminho até ao C1/C2</h2>
      <p class="muted" style="margin:0;font-size:.9rem">A app tem ${this.dict.themes.length} lições (${byLevel}) e ${this.dict.allWords.length} palavras. Os níveis A1 e A2 seguem a lista oficial da Cambridge; os níveis mais altos são um ponto de partida e não chegam sozinhos para o C1 ou C2: precisas também de muita leitura, de ouvir inglês e de escrever e falar com pessoas. As estimativas de vocabulário variam entre autores.</p>
      <ol class="levels">${ProgressView.LEVELS.map(([code, name, desc, vocab], i) =>
        `<li class="${i === current ? "now" : ""}"><b>${code}</b><div><button class="linkbtn" data-action="level" data-v="${code}">${name}</button>${i === current ? ` <span class="pill now">Estás aqui</span>` : ""}<br><span class="muted">${desc} (${vocab})</span></div></li>`).join("")}</ol>
    </section>`;
  }

  boxesChart() {
    const boxes = this.progress.boxCounts();
    const max = Math.max(1, ...boxes);
    return `<section class="panel"><h2>🔁 Quando voltam as palavras</h2>
      <p class="muted" style="margin:0;font-size:.9rem">Cada acerto empurra a palavra para mais longe. As da direita já estão bem fixadas.</p>
      <div class="pboxes">${boxes.map((n, i) => `<div class="pbox ${i >= Progress.MASTERED_BOX ? "fixed" : ""}" style="--i:${i}">
          <span class="pbn">${n}</span><div class="pbcol" style="height:${Math.max(4, n / max * 100)}%"></div>
          <span class="pbl">${ProgressView.BOX_LABELS[i]}</span></div>`).join("")}</div></section>`;
  }

  testsTable() {
    const tests = this.progress.recentTests(10);
    const body = tests.length
      ? `<div class="ptests">${tests.map(x => {
          const pct = Math.round(x.score / x.total * 100);
          return `<div class="ptest"><span class="ptdate">${this.esc(DateUtils.format(x.date))}</span><span class="pill">${x.practice ? "Treino" : "Teste"}</span>
            <span class="ptbar"><i class="${Progress.band(pct)}" style="width:${pct}%"></i></span><span class="schip ${Progress.band(pct)}">${x.score}/${x.total}</span></div>`;
        }).join("")}</div>`
      : `<p class="muted" style="margin:0">Ainda não fizeste nenhum teste.</p>`;
    return `<section class="panel"><h2>📝 Últimos testes</h2>${body}</section>`;
  }

  hardWords() {
    const hard = this.progress.hardestWords(this.dict, 10);
    const body = hard.length
      ? `<div class="phard">${hard.map(({ word, wrong }) => `<div class="phw"><b>${this.esc(word.en)}</b><span class="muted">${this.esc(word.pt)}</span><span class="phx">${wrong}✗</span></div>`).join("")}</div>`
      : `<p class="muted" style="margin:0">Ainda sem erros registados.</p>`;
    return `<section class="panel"><h2>🎯 Palavras difíceis</h2>${body}${hard.length ? `<div class="row"><button class="btn ghost small" data-action="hardwords">Ver todas e treinar</button></div>` : ""}</section>`;
  }

  /* ----- cópia de segurança: exportar e importar o progresso ----- */

  static BACKUP_APP = "EnglishUpp";

  backupText() {
    return JSON.stringify({ app: ProgressView.BACKUP_APP, version: 1, exportedAt: new Date().toISOString(), data: this.progress.toJSON() });
  }

  // Lê o texto de uma cópia e devolve { data } ou { error }
  static parseBackup(text) {
    try {
      const obj = JSON.parse(text);
      // aceita também as cópias antigas, feitas quando a app ainda se chamava EnglishUp
      const data = [ProgressView.BACKUP_APP, "EnglishUp"].includes(obj?.app) ? obj.data : null;
      if (!data || typeof data !== "object" || typeof data.words !== "object" || typeof data.lessons !== "object") {
        return { error: "Este ficheiro não parece uma cópia do EnglishUpp." };
      }
      return { data, exportedAt: obj.exportedAt };
    } catch (e) {
      return { error: "Não consegui ler este ficheiro (não é uma cópia válida)." };
    }
  }

  backupPanel() {
    const last = this.progress.data.backupAt;
    const pending = this.pendingBackup;
    const d = pending?.data;
    const confirm = pending ? `<div class="fb no">Esta cópia tem ${Object.keys(d.words || {}).length} palavras, ${Object.keys(d.lessons || {}).length} lições e ${d.xp || 0} XP${pending.exportedAt ? ` (guardada a ${this.esc(DateUtils.format(pending.exportedAt.slice(0, 10)))})` : ""}. Vai <b>substituir</b> o progresso atual. Tens a certeza?</div>
      <div class="row"><button class="btn" data-action="bkconfirm">Sim, substituir</button><button class="btn ghost" data-action="bkcancel">Cancelar</button></div>` : "";
    return `<section class="panel"><h2>Cópia de segurança</h2>
      <p class="muted" style="margin:0">Guarda o teu progresso num ficheiro. Se o navegador limpar os dados ou mudares de computador, carregas o ficheiro e recuperas tudo. ${last ? `Última cópia: ${this.esc(DateUtils.format(last))}.` : "Ainda não guardaste nenhuma cópia."}</p>
      <div class="row"><button class="btn" data-action="bkexport">Guardar cópia</button>
        <button class="btn ghost" data-action="bkcopy">Copiar como texto</button>
        <label class="btn ghost" for="bkfile" style="cursor:pointer">Carregar cópia…</label>
        <input type="file" id="bkfile" accept=".json,application/json" hidden></div>
      <details><summary>Colar uma cópia em texto</summary>
        <textarea id="bkpaste" rows="3" style="width:100%;margin-top:8px" placeholder="Cola aqui o texto da cópia" aria-label="Texto da cópia"></textarea>
        <div class="row"><button class="btn ghost small" data-action="bkpaste">Usar este texto</button></div></details>
      ${this.backupMsg ? `<div class="fb ${this.backupMsg.ok ? "ok" : "no"}">${this.esc(this.backupMsg.text)}</div>` : ""}${confirm}</section>`;
  }

  afterRender() {
    document.getElementById("bkfile")?.addEventListener("change", e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => this.offerBackup(String(reader.result));
      reader.onerror = () => { this.backupMsg = { ok: false, text: "Não consegui abrir o ficheiro." }; this.app.render(); };
      reader.readAsText(file);
    });
  }

  offerBackup(text) {
    const r = ProgressView.parseBackup(text);
    this.backupMsg = r.error ? { ok: false, text: r.error } : null;
    this.pendingBackup = r.error ? null : r;
    this.app.render();
  }

  noteBackup() {
    this.progress.data.backupAt = DateUtils.today();
    this.app.save();
  }

  resetPanel() {
    const inner = this.confirmReset
      ? `<p style="margin:0">Isto apaga todo o progresso. Tens a certeza?</p><div class="row"><button class="btn" style="background:var(--bad)" data-action="reset">Sim, apagar tudo</button><button class="btn ghost" data-action="cancelReset">Cancelar</button></div>`
      : `<div class="row"><button class="btn ghost small" data-action="askReset">Apagar progresso</button></div>`;
    return `<section class="panel"><h2>Recomeçar</h2>${inner}</section>`;
  }

  onAction(action, value) {
    if (action === "exam") {
      const lesson = new LevelExam(value, this.app.examContext()).lesson();
      if (lesson.exercises.length) this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(lesson)));
      return true;
    }
    if (action === "bkexport") {
      const blob = new Blob([this.backupText()], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `englishupp-progresso-${DateUtils.today()}.json`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      this.noteBackup();
      this.backupMsg = { ok: true, text: "Cópia guardada. Procura o ficheiro nas transferências do navegador." };
      this.app.render();
      return true;
    }
    if (action === "bkcopy") {
      const done = ok => { this.backupMsg = { ok, text: ok ? "Texto copiado. Cola-o num sítio seguro (por exemplo, uma nota)." : "Não consegui copiar. Usa “Guardar cópia”." }; if (ok) this.noteBackup(); this.app.render(); };
      (navigator.clipboard?.writeText(this.backupText()) || Promise.reject()).then(() => done(true), () => done(false));
      return true;
    }
    if (action === "bkpaste") {
      this.offerBackup(document.getElementById("bkpaste")?.value || "");
      return true;
    }
    if (action === "bkcancel") {
      this.pendingBackup = null;
      this.app.render();
      return true;
    }
    if (action === "bkconfirm" && this.pendingBackup) {
      this.app.progress = new Progress(this.pendingBackup.data);
      this.app.doneLessons = new Set(this.app.completedLessons()); // sem festa para as lições que já vinham concluídas
      this.pendingBackup = null;
      this.backupMsg = { ok: true, text: "Progresso recuperado!" };
      this.app.save();
      this.app.render();
      return true;
    }
    if (action === "askReset" || action === "cancelReset") {
      this.confirmReset = action === "askReset";
      this.app.render();
      return true;
    }
    if (action === "reset") {
      this.progress.reset();
      this.app.save();
      this.app.toast.show("Progresso apagado.");
      this.app.go("hoje");
      return true;
    }
    return false;
  }
}
