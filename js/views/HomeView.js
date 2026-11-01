// Ecrã inicial: teste pendente + lição do dia
class HomeView extends View {
  get tab() { return "hoje"; }

  render() {
    const today = DateUtils.today();
    return `<div><div class="eyebrow">${this.esc(DateUtils.format(today))}</div><h1>Bom dia! Vamos ao inglês.</h1></div>
      ${this.stats()}
      ${this.mascotCard()}
      ${this.gameCard()}
      ${this.goalCard()}
      ${this.wordsOfMomentCard()}
      ${this.storyCard()}
      ${this.dailyChallengeCard()}
      ${this.planCard()}
      ${this.errorsBanner()}
      ${this.testCard()}
      ${this.lessonCard()}
      ${this.writingCard()}
      ${this.weekCard()}
      ${this.backupReminder()}
      <p class="muted" style="margin:0;font-size:.9rem">Como funciona: todos os dias estudas uma lição nova. No dia seguinte, fazes um teste. Se acertas, a palavra volta daqui a 2, 4, 7, 15 e 30 dias. Se erras, volta amanhã.</p>
      <div class="sync">${this.esc(this.app.storage.label)}</div>`;
  }

  // Modo história: aviso quando há um capítulo aberto por ler
  storyCard() {
    const n = StoryView.nextUnread(this.app);
    if (!n) return "";
    return `<section class="panel"><div class="eyebrow">📖 Modo história · ${n.city.flag} ${this.esc(n.city.city)}</div>
      <h2>Capítulo ${n.n}: ${this.esc(n.chapter.title)} ${n.chapter.icon}</h2>
      <p class="muted" style="margin:0">${n.n === 1 && n.city.id === STORY[0].id ? "Conhece o Leo e começa a viagem dele pelo mundo de língua inglesa." : "Há um capítulo novo da viagem do Leo à tua espera."}</p>
      <div class="row"><button class="btn small" data-action="storyopen" data-v="${n.chapter.id}">Ler agora</button></div></section>`;
  }

  // Lembrete discreto: sem cópia de segurança há 7 dias (ou nunca, depois de começares a estudar)
  backupReminder() {
    const p = this.progress, last = p.data.backupAt;
    if (!p.wordCount || (last && DateUtils.addDays(last, 7) > DateUtils.today())) return "";
    return `<section class="panel"><div class="eyebrow">Cópia de segurança</div>
      <p class="muted" style="margin:0">${last ? `A última cópia foi a ${this.esc(DateUtils.format(last))}.` : "Ainda não guardaste nenhuma cópia."} Guarda o progresso num ficheiro, para não o perderes se o navegador limpar os dados.</p>
      <div class="row"><button class="btn small" data-action="nav" data-v="progresso">Fazer cópia agora</button></div></section>`;
  }

  // Nível, com atalho para o Jogo
  gameCard() {
    return `<section class="panel">${GameView.playerCard(this.progress)}
      <div class="row" style="justify-content:flex-end"><button class="btn small" data-action="nav" data-v="jogo">Abrir o Jogo</button></div></section>`;
  }

  // Meta diária: a roleta decide quantos exercícios são precisos para a sequência subir hoje
  goalCard() {
    const p = this.progress;
    const rules = `<span class="muted" style="font-size:.85rem">Contam os exercícios de cada lição (frases, ligar, escolher a tradução, pronúncia, escrever e teste misto), as perguntas de um texto, cada jogo que acabas, as lições de gramática, o desafio do dia, os desafios de 60 segundos, os cartões, as conversas, a revisão dos erros e as traduções. Ler as palavras e o mini-texto não conta. Cada um só conta uma vez por dia.</span>`;
    if (!p.spun) {
      return `<section class="panel"><div class="eyebrow">Meta de hoje</div>
        <h2>Roda a roleta!</h2>
        <p class="muted" style="margin:0">A sorte decide quantos exercícios tens de fazer hoje (de 2 a 10) para a sequência subir.${p.todayCount ? ` Os ${p.todayCount} que já fizeste hoje contam.` : ""}</p>
        ${this.wheel()}
        <div class="row" style="justify-content:center"><button class="btn" data-action="spin">Rodar</button></div>${rules}</section>`;
    }
    const pct = Math.min(100, Math.round(p.todayCount / p.goal * 100));
    const left = p.goal - p.todayCount;
    const msg = p.goalMet
      ? `Meta cumprida! Hoje a tua sequência subiu para ${p.streak()} dia${p.streak() === 1 ? "" : "s"}.`
      : `Faltam ${left} exercício${left === 1 ? "" : "s"} para a sequência subir hoje.`;
    return `<section class="panel"><div class="eyebrow">Meta de hoje · calhou ${p.goal}</div>
      <h2>${Math.min(p.todayCount, p.goal)} de ${p.goal} exercícios</h2>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <p class="muted" style="margin:0">${msg}</p>${rules}</section>`;
  }

  // Roleta com os números de 2 a 10; o ponteiro está no topo
  wheel() {
    const n = Progress.GOAL_MAX - Progress.GOAL_MIN + 1, seg = 360 / n;
    const colors = ["var(--wheel1)", "var(--wheel2)"];
    const stops = Array.from({ length: n }, (_, i) => `${colors[i % 2]} ${i * seg}deg ${(i + 1) * seg}deg`).join(",");
    const labels = Array.from({ length: n }, (_, i) =>
      `<span class="wl" style="transform:rotate(${(i + 0.5) * seg}deg) translateY(-92px)">${Progress.GOAL_MIN + i}</span>`).join("");
    return `<div class="wheelbox"><div class="wpointer"></div><div class="wheel" id="wheel" style="background:conic-gradient(${stops})">${labels}</div></div>`;
  }

  spinWheel() {
    if (this.spinning) return;
    this.spinning = true;
    const goal = this.progress.spin();
    this.app.save();
    const seg = 360 / (Progress.GOAL_MAX - Progress.GOAL_MIN + 1);
    const turn = 360 * 5 - (goal - Progress.GOAL_MIN + 0.5) * seg;
    const el = document.getElementById("wheel");
    if (!el) { this.spinning = false; return this.app.render(); }
    el.style.transform = `rotate(${turn}deg)`;
    setTimeout(() => {
      this.spinning = false;
      if (this.app.view === this) this.app.render();
    }, 4200);
  }

  // Sugestões para hoje: o que está atrasado e o que vem a seguir
  planCard() {
    const p = this.progress, items = [];
    const due = p.dueKeys(this.dict).length;
    if (due) items.push([`Teste de ${due} palavra${due > 1 ? "s" : ""} em atraso`, "startTest", ""]);
    const next = p.nextTheme(this.dict);
    if (next && !p.studiedToday(this.dict).length) items.push([`Lição nova: ${next.pt}`, "open", next.id]);
    this.dueGrammar().slice(0, 2).forEach(l => items.push([`Rever gramática: ${l.pt}`, "planGrammar", l.id]));
    const exam = this.dict.themes.map(t => t.level).filter((l, i, a) => a.indexOf(l) === i)
      .find(l => { const e = new LevelExam(l, this.app.examContext()); return e.ready && !this.progress.examPassed(l); });
    if (exam) items.push([`Exame final ${exam}`, "planExam", exam]);
    const text = this.suggestedText();
    if (text) items.push([`Ler e responder: ${text.title} (${text.level})`, "planText", text.id]);
    if (!items.length) return "";
    return `<section class="panel"><div class="eyebrow">Plano para hoje</div>
      <div class="plan">${items.map(([label, action, v]) =>
        `<button class="theme" data-action="${action}" data-v="${v}"><span class="t">${this.esc(label)}</span></button>`).join("")}</div></section>`;
  }

  dueGrammar() {
    const ids = this.progress.grammarDue(this.app.grammar);
    return this.app.grammar.filter(l => ids.includes(l.id));
  }

  // Primeiro texto por fazer, do nível da última lição estudada (ou do mais baixo que falte)
  suggestedText() {
    const todo = this.app.texts.filter(t => this.progress.data.texts[t.id] == null);
    if (!todo.length) return null;
    const last = this.dict.themes.filter(t => this.progress.lesson(t.id))
      .sort((a, b) => this.progress.lesson(b.id).studied.localeCompare(this.progress.lesson(a.id).studied))[0];
    return todo.find(t => t.level === last?.level) || todo[0];
  }

  /* ----- mascote, palavras do momento, desafio do dia e resumo da semana ----- */

  mascotCard() {
    const p = this.progress, [, icon, name] = DailyFun.stage(p.level), [mood, msg] = DailyFun.mood(p);
    const crown = p.streak() >= 30 ? "👑" : p.streak() >= 7 ? "🎀" : "";
    return `<section class="panel mascot ${mood}"><div class="mpet" aria-hidden="true"><span class="mcrown">${crown}</span><span class="mface">${mood === "sad" ? "😢" : icon}</span>${mood === "happy" ? `<span class="mspark">✨</span>` : ""}</div>
      <div class="mtext"><div class="eyebrow">O teu ${name} · nível ${p.level}</div><p style="margin:0;font-weight:700">${this.esc(msg)}</p></div></section>`;
  }

  wordsOfMomentCard() {
    const html = this.wordsOfMomentHtml();
    return html ? `<section class="panel wod" id="wod">${html}</section>` : "";
  }

  wordsOfMomentHtml() {
    const words = DailyFun.wordsOfMoment(this.app);
    if (!words.length) return "";
    const item = w => {
      const e = DailyFun.examples(this.app, w)[0];
      return `<div class="wodword"><div class="hw"><h2>${this.esc(w.en)}</h2><span class="ipa">/${this.esc(w.ipa)}/</span><span class="pos">${this.esc(w.pos)}</span></div>
        <div class="pt" style="font-weight:700">${this.esc(w.pt)}</div>
        <div class="ex">${this.esc(e.en)}${e.pt ? `<br><i>${this.esc(e.pt)}</i>` : ""}</div>${this.cambridgeLink(w)}</div>`;
    };
    return `<div class="row" style="justify-content:space-between"><div class="eyebrow">✨ Palavras do momento</div><span class="muted wodtime">⏳ novas em <b id="wodleft">${this.momentLeftText()}</b></span></div>${words.map(item).join("")}`;
  }

  momentLeftText() {
    const s = Math.ceil(DailyFun.momentLeft() / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }

  dailyChallengeCard() {
    const [, title, icon, desc] = DailyFun.todaysChallenge();
    const best = this.progress.data.daily?.date === DateUtils.today() ? this.progress.data.daily.best : null;
    return `<button class="gcard g3 dchal" data-action="dchallenge"><span class="gicon" aria-hidden="true">${icon}</span>
      <span class="gname">Desafio do dia: ${title}</span><span class="gdesc">${desc} ${best != null ? `Hoje: ${best}%. Podes repetir.` : "6 perguntas · +8 XP"}</span></button>`;
  }

  weekCard() {
    const w = DailyFun.week(this.progress);
    if (!w.days && !w.xp) return "";
    const max = Math.max(1, ...w.per.map(d => d.xp));
    const bars = w.per.map(d => `<div class="wbar" title="${this.esc(d.d)}: ${d.xp} XP"><i style="height:${Math.round(d.xp / max * 100)}%"></i><span>${["D", "S", "T", "Q", "Q", "S", "S"][new Date(d.d + "T12:00").getDay()]}</span></div>`).join("");
    const diff = w.days - w.prevDays;
    const trend = diff > 0 ? `Mais ${diff} dia${diff > 1 ? "s" : ""} do que na semana passada.` : diff < 0 ? `Menos ${-diff} dia${diff < -1 ? "s" : ""} do que na semana passada. Vamos recuperar!` : "Igual à semana passada.";
    return `<section class="panel"><div class="eyebrow">A tua semana</div>
      <div class="stats"><div class="stat"><b>${w.days}/7</b><span>dias de meta</span></div><div class="stat"><b>${w.right}</b><span>respostas certas</span></div><div class="stat"><b>${w.lessons}</b><span>lições novas</span></div><div class="stat"><b>${w.xp}</b><span>XP</span></div></div>
      <div class="wbars" aria-hidden="true">${bars}</div>
      <p class="muted" style="margin:0">${trend}${w.xp ? ` Melhor dia: ${this.esc(DateUtils.format(w.best.d))} (${w.best.xp} XP).` : ""}</p></section>`;
  }

  onAction(action, value) {
    switch (action) {
      case "storyopen":
        this.app.show(new StoryView(this.app, value));
        return true;
      case "dchallenge":
        this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(DailyFun.challengeLesson(this.app))));
        return true;
      case "spin":
        this.spinWheel();
        return true;
      case "planGrammar":
        this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(this.app.grammar.find(l => l.id === value))));
        return true;
      case "planExam":
        this.app.show(new GrammarQuizView(this.app, new GrammarQuiz(new LevelExam(value, this.app.examContext()).lesson())));
        return true;
      case "planText":
        this.app.show(new TextsView(this.app, null, this.app.texts.find(t => t.id === value)));
        return true;
    }
    return false;
  }

  testCard() {
    const due = this.progress.dueKeys(this.dict).length;
    if (due) {
      return `<section class="panel lead"><div class="eyebrow">Teste de hoje</div>
        <h2>Tens ${due} palavra${due > 1 ? "s" : ""} para testar</h2>
        <p class="muted" style="margin:0">São palavras que estudaste nos dias anteriores. Faz o teste antes da lição nova.</p>
        <div class="row"><button class="btn" data-action="startTest">Fazer o teste</button></div></section>`;
    }
    if (!this.progress.wordCount) {
      return `<section class="panel"><div class="eyebrow">Teste de hoje</div>
        <p style="margin:0">Ainda não há nada para testar. Estuda a primeira lição hoje e amanhã o teste aparece aqui.</p></section>`;
    }
    return `<section class="panel"><div class="eyebrow">Teste de hoje</div>
      <p style="margin:0"><strong>Sem testes pendentes.</strong> Próximo teste: ${this.esc(DateUtils.format(this.progress.nextDueDate()))}.</p>
      <div class="row"><button class="btn ghost small" data-action="practiceAll">Praticar na mesma</button></div></section>`;
  }

  // Aviso grande no início quando há erros por rever
  errorsBanner() {
    const er = new ErrorReview(this.progress, this.dict, this.app.grammar, this.app.texts);
    if (!er.items.length) return "";
    const n = er.items.length;
    return `<section class="panel hero errbanner"><span class="heroicon" aria-hidden="true">🎯</span><div class="eyebrow">Para rever</div>
      <h2>${n} erro${n > 1 ? "s" : ""} à espera de ti</h2>
      <p class="muted" style="margin:0">Palavras, gramática e perguntas de textos que ainda falhas. Treinar isto é o que mais ajuda.</p>
      <div class="row"><button class="btn" data-action="nav" data-v="teste">Rever agora</button></div></section>`;
  }

  writingCard() {
    const studied = this.dict.themes.filter(t => this.progress.lesson(t.id))
      .sort((a, b) => this.progress.lesson(b.id).studied.localeCompare(this.progress.lesson(a.id).studied));
    if (!studied.length) return "";
    const last = studied[0];
    return `<section class="panel"><div class="eyebrow">Treino de hoje</div>
      <h2>Traduz 10 frases do tema ${this.esc(last.pt)}</h2>
      <p class="muted" style="margin:0">Ganhas pontos, e o treino fica no registo da semana.</p>
      <div class="row"><button class="btn ghost" data-action="translate" data-v="${last.id}">Treinar</button></div></section>`;
  }

  // Uma palavra da lição de cada vez, com pronúncia e tradução; muda a cada 5 segundos
  wordCycle(theme) {
    this.cycleTheme = theme;
    this.cycleIndex = 0;
    return `<div class="wordcycle" id="wordcycle">${this.cycleHtml()}</div>`;
  }

  cycleHtml() {
    const w = this.cycleTheme.words[this.cycleIndex];
    return `<span class="cw-en">${this.esc(w.en)}</span><span class="ipa">/${this.esc(w.ipa)}/</span><span class="cw-pt">${this.esc(w.pt)}</span>`;
  }

  afterRender() {
    this.watchMoment();
    clearInterval(this.cycleTimer);
    if (!document.getElementById("wordcycle")) return;
    this.cycleTimer = setInterval(() => {
      const box = document.getElementById("wordcycle");
      if (!box || this.app.view !== this) return clearInterval(this.cycleTimer); // o utilizador mudou de ecrã
      this.cycleIndex = (this.cycleIndex + 1) % this.cycleTheme.words.length;
      box.innerHTML = this.cycleHtml();
    }, 5000);
  }

  // Contagem decrescente das palavras do momento; quando chega a zero, troca as palavras sem refazer o ecrã
  watchMoment() {
    clearInterval(this.momentTimer);
    if (!document.getElementById("wod")) return;
    let moment = DailyFun.moment();
    this.momentTimer = setInterval(() => {
      const box = document.getElementById("wod");
      if (!box || this.app.view !== this) return clearInterval(this.momentTimer); // o utilizador mudou de ecrã
      if (DailyFun.moment() !== moment) {
        moment = DailyFun.moment();
        box.innerHTML = this.wordsOfMomentHtml();
        box.classList.remove("fresh");
        void box.offsetWidth; // recomeça a animação
        box.classList.add("fresh");
      } else document.getElementById("wodleft").textContent = this.momentLeftText();
    }, 1000);
  }

  lessonCard() {
    const done = this.progress.studiedToday(this.dict);
    const next = this.progress.nextTheme(this.dict);
    if (done.length) {
      const t = done[done.length - 1];
      return `<section class="panel"><div class="eyebrow">Lição de hoje <span class="pill done">Concluída</span></div>
        <h2>${this.esc(t.pt)} <span class="muted">· ${this.esc(t.en)}</span></h2>
        <p class="muted" style="margin:0">Amanhã estas ${t.size} palavras entram no teste. Revê-as antes de dormir para te lembrares melhor.</p>
        ${this.wordCycle(t)}
        <div class="row"><button class="btn ghost small" data-action="open" data-v="${t.id}">Rever a lição</button>
        ${next ? `<button class="linkbtn" data-action="open" data-v="${next.id}">Adiantar: ${this.esc(next.pt)}</button>` : ""}</div></section>`;
    }
    if (next) {
      return `<section class="panel"><div class="eyebrow">Lição ${next.number} de ${this.dict.themes.length}</div>
        <h2>${this.esc(next.pt)} <span class="muted">· ${this.esc(next.en)}</span></h2>
        <p class="muted" style="margin:0">${next.size} palavras novas e um texto curto para ler e ouvir.</p>
        ${this.wordCycle(next)}
        <div class="row"><button class="btn" data-action="open" data-v="${next.id}">Começar lição</button></div></section>`;
    }
    return `<section class="panel"><h2>Terminaste todas as lições</h2><p class="muted" style="margin:0">Continua a fazer os testes diários para fixar as palavras.</p></section>`;
  }
}
