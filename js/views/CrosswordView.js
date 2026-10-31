// Palavras cruzadas: as pistas estão em inglês; toca numa casa e escreve; o cursor segue a direção da palavra
class CrosswordView extends View {
  static TARGET = 8; // palavras por grelha, sempre as mesmas

  constructor(app) {
    super(app);
    const build = list => {
      const seen = new Set();
      return list.filter(w => /^[a-z]{3,8}$/.test(w.en) && !seen.has(w.en) && seen.add(w.en))
        .map(word => ({ w: word.en, word, clues: this.clueVariants(word) })).filter(e => e.clues.length);
    };
    this.pool = build(GameView.words(app));
    // Se os temas escolhidos têm poucas palavras, usa palavras de todos os temas
    this.fallback = this.pool.length < 12;
    if (this.fallback) this.pool = build(app.dict.themes.flatMap(t => t.words));
    if (this.pool.length >= CrosswordView.TARGET) this.newGrid();
  }

  get tab() { return "jogo"; }

  // Até 3 pistas diferentes para a mesma palavra: definição, frase do exemplo e frase de um texto, com a palavra tapada
  clueVariants(word) {
    const out = [], re = new RegExp(`\\b${word.en}\\b`, "i");
    if (CROSS[word.en]) out.push(CROSS[word.en]);
    const theme = this.app.dict.theme(word.themeId);
    [word.exEn, ...Quiz.altSentences(theme, word).slice(0, 4)].forEach(sen => {
      if (!sen || out.length >= 3 || !re.test(sen) || sen.split(/\s+/).length > 22) return;
      out.push(`Complete: “${sen.replace(re, "_____")}”`);
    });
    return out;
  }

  // Escolhe uma das pistas, diferente da última vez que a palavra saiu
  pickClue(e) {
    const seen = (this.progress.data.crossVar ||= {}), last = seen[e.word.key];
    const idx = Utils.pick(e.clues.map((_, i) => i).filter(i => i !== last || e.clues.length === 1));
    seen[e.word.key] = idx;
    return e.clues[idx];
  }
  get dictOk() { return true; }

  // ---- geração da grelha ----
  static layout(entries) {
    const cells = new Map(), words = [], key = (r, c) => r + "," + c;
    const D = { A: [0, 1], D: [1, 0] };
    const fits = (w, r, c, d) => {
      const [dr, dc] = D[d], [pr, pc] = D[d === "A" ? "D" : "A"];
      if (cells.has(key(r - dr, c - dc)) || cells.has(key(r + dr * w.length, c + dc * w.length))) return false;
      let cross = 0;
      for (let i = 0; i < w.length; i++) {
        const rr = r + dr * i, cc = c + dc * i, cur = cells.get(key(rr, cc));
        if (cur) {
          if (cur.ch !== w[i] || cur.dirs.includes(d)) return false;
          cross++;
        } else if (cells.has(key(rr + pr, cc + pc)) || cells.has(key(rr - pr, cc - pc))) return false;
      }
      return cross;
    };
    const put = (e, r, c, d) => {
      const [dr, dc] = D[d], list = [];
      for (let i = 0; i < e.w.length; i++) {
        const k = key(r + dr * i, c + dc * i), cur = cells.get(k);
        if (cur) cur.dirs.push(d); else cells.set(k, { r: r + dr * i, c: c + dc * i, ch: e.w[i], dirs: [d] });
        list.push(k);
      }
      words.push({ ...e, r, c, dir: d, cells: list });
    };
    const order = Utils.shuffle(entries.filter(e => e.w.length <= 7)).slice(0, 30).sort((a, b) => b.w.length - a.w.length);
    put(order[0], 0, 0, "A");
    for (const e of order.slice(1)) {
      if (words.length >= CrosswordView.TARGET) break;
      const opts = [];
      const all = [...cells.values()];
      const r0 = Math.min(...all.map(x => x.r)), r1 = Math.max(...all.map(x => x.r)), c0 = Math.min(...all.map(x => x.c)), c1 = Math.max(...all.map(x => x.c));
      for (const cell of all) {
        for (let i = 0; i < e.w.length; i++) {
          if (e.w[i] !== cell.ch || cell.dirs.length > 1) continue;
          const d = cell.dirs[0] === "A" ? "D" : "A", [dr, dc] = D[d];
          const r = cell.r - dr * i, c = cell.c - dc * i;
          if (!fits(e.w, r, c, d)) continue;
          // grelha compacta: prefere a posição que aumenta menos a área
          const h = Math.max(r1, r + dr * (e.w.length - 1)) - Math.min(r0, r) + 1, w = Math.max(c1, c + dc * (e.w.length - 1)) - Math.min(c0, c) + 1;
          opts.push({ at: [r, c, d], area: h * w + Math.abs(h - w) * 2 - fits(e.w, r, c, d) * 3 });
        }
      }
      if (opts.length) {
        const min = Math.min(...opts.map(o => o.area)), top = opts.filter(o => o.area <= min + 2);
        put(e, ...Utils.pick(top).at);
      }
    }
    return { words, cells };
  }

  best(pool, max = 10) {
    let best = null;
    for (let n = 0; n < 400 && !(best && best.words.length >= CrosswordView.TARGET && n > 60); n++) {
      const g = CrosswordView.layout(pool);
      const rs = [...g.cells.values()].map(x => x.r), cs = [...g.cells.values()].map(x => x.c);
      const h = Math.max(...rs) - Math.min(...rs) + 1, w = Math.max(...cs) - Math.min(...cs) + 1;
      if (h > max || w > max) continue;
      const score = Math.min(g.words.length, CrosswordView.TARGET) * 1000 - h * w - Math.abs(h - w) * 3;
      if (!best || score > best.score) best = { ...g, score, h, w };
    }
    return best;
  }

  newGrid() {
    let best = this.best(this.pool) || this.best(this.pool, 13);
    this.mixed = false;
    // Poucas palavras nos temas escolhidos: completa a grelha com palavras de todos os temas
    if (!best || best.words.length < CrosswordView.TARGET) {
      this.wide ||= this.pool.concat(this.app.dict.themes.flatMap(t => t.words).filter(w => /^[a-z]{3,8}$/.test(w.en) && !this.pool.some(e => e.w === w.en))
        .filter((w, i, a) => a.findIndex(x => x.en === w.en) === i).map(word => ({ w: word.en, word, clues: this.clueVariants(word) })).filter(e => e.clues.length));
      const wide = this.best(this.wide);
      if (wide && (!best || wide.words.length > best.words.length)) { best = wide; this.mixed = true; }
    }
    const g = best || CrosswordView.layout(this.pool);
    const cells = [...g.cells.values()];
    const r0 = Math.min(...cells.map(x => x.r)), c0 = Math.min(...cells.map(x => x.c));
    this.rows = Math.max(...cells.map(x => x.r)) - r0 + 1;
    this.cols = Math.max(...cells.map(x => x.c)) - c0 + 1;
    this.cell = new Map(cells.map(x => [(x.r - r0) + "," + (x.c - c0), { r: x.r - r0, c: x.c - c0, ch: x.ch, dirs: x.dirs, words: [] }]));
    this.words = g.words.map(w => ({ ...w, r: w.r - r0, c: w.c - c0, clue: this.pickClue(w) }));
    this.words.forEach(w => {
      const [dr, dc] = w.dir === "A" ? [0, 1] : [1, 0];
      w.cells = [...w.w].map((_, i) => (w.r + dr * i) + "," + (w.c + dc * i));
      w.cells.forEach(k => this.cell.get(k).words.push(w));
    });
    // números: nas casas onde começa uma palavra, por ordem de leitura
    let n = 0;
    [...this.cell.values()].sort((a, b) => a.r - b.r || a.c - b.c).forEach(x => {
      const starts = this.words.filter(w => w.r === x.r && w.c === x.c);
      if (starts.length) { n++; starts.forEach(w => (w.num = n)); x.num = n; }
    });
    this.words.sort((a, b) => a.num - b.num);
    this.fill = {};
    this.wrong = new Set();
    this.revealed = new Set();
    this.reveals = 0;
    this.done = false;
    this.xp = 0;
    this.showPt = false;
    this.msg = "";
    const first = this.words.find(w => w.dir === "A") || this.words[0];
    this.sel = first.cells[0];
    this.dir = first.dir;
  }

  // ---- estado ----
  get active() {
    const x = this.cell.get(this.sel);
    return x.words.find(w => w.dir === this.dir) || x.words[0];
  }

  isCross(k) { return this.cell.get(k).words.length > 1; }

  check() {
    this.done = [...this.cell.entries()].every(([k, x]) => this.fill[k] === x.ch);
    if (this.done) {
      this.xp = Math.max(3, 4 + this.words.length - this.reveals * 2);
      this.progress.addGame(this.xp, "crossword");
      this.app.save();
    }
  }

  // ---- ecrã ----
  render() {
    if (!this.cell) return GameView.needWords("Palavras cruzadas");
    const act = this.active, inAct = new Set(act.cells);
    let grid = "";
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) {
      const k = r + "," + c, x = this.cell.get(k);
      if (!x) { grid += `<span class="xblock"></span>`; continue; }
      const cls = ["xcell", k === this.sel ? "sel" : inAct.has(k) ? "inword" : "", this.wrong.has(k) ? "wrong" : "", this.revealed.has(k) ? "rev" : ""].join(" ");
      grid += `<button class="${cls}" data-action="xsel" data-v="${k}" aria-label="Casa ${r + 1}, ${c + 1}">${x.num ? `<i>${x.num}</i>` : ""}${this.esc((this.fill[k] || "").toUpperCase())}</button>`;
    }
    const clue = w => `<li><button class="xclue ${w === act ? "on" : ""} ${w.cells.every(k => this.fill[k] === this.cell.get(k).ch) ? "done" : ""}" data-action="xclue" data-v="${this.words.indexOf(w)}"><b>${w.num}</b> ${this.esc(w.clue)} <span class="muted">(${w.w.length})</span></button></li>`;
    const across = this.words.filter(w => w.dir === "A").map(clue).join(""), down = this.words.filter(w => w.dir === "D").map(clue).join("");
    const kb = MysteryView.ROWS.map((r, i) => `<div class="krow">${[...r].map(c => `<button class="opt key" data-action="xkey" data-v="${c}" ${this.done ? "disabled" : ""}>${c}</button>`).join("")}${i === 2 ? `<button class="opt key wide" data-action="xback" aria-label="Apagar">⌫</button>` : ""}</div>`).join("");
    const end = this.done ? `<div class="fb ok">🎉 Completaste a grelha! +${this.xp} XP</div>` : "";
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Palavras cruzadas</span><span class="muted">${this.words.length} palavras</span></div>
      ${this.fallback || this.mixed ? `<p class="muted" style="margin:0">Os temas escolhidos têm poucas palavras para uma grelha de ${CrosswordView.TARGET}, por isso esta junta palavras de outros temas.</p>` : ""}
      <div class="xlayout">
        <section class="panel xside xleft"><div class="eyebrow">→ Na horizontal</div><ul class="xlist">${across}</ul></section>
        <section class="panel xmid" style="gap:12px">
          <div class="xnow"><span class="eyebrow">${act.num} ${act.dir === "A" ? "→ na horizontal" : "↓ na vertical"} · ${act.w.length} letras</span>
            <div class="q" style="font-size:1.05rem">${this.esc(act.clue)}</div>
            ${this.showPt ? `<div class="muted">${this.esc(act.word.pt)}</div>` : ""}</div>
          <div class="xgrid" style="--xc:${this.cols};grid-template-columns:repeat(${this.cols},var(--xs))">${grid}</div>
          <div class="muted" style="min-height:1.3em;text-align:center">${this.esc(this.msg)}</div>
          ${end}
          <div class="row" style="justify-content:center">
            <button class="btn ghost small" data-action="xcheck" ${this.done ? "disabled" : ""}>Verificar</button>
            <button class="btn ghost small" data-action="xreveal" ${this.done ? "disabled" : ""}>Revelar letra</button>
            <button class="btn ghost small" data-action="xpt" aria-pressed="${this.showPt}">${this.showPt ? "Esconder tradução" : "Ver tradução"}</button>
            <button class="btn small" data-action="xnew">${this.done ? "Nova grelha" : "Outra grelha"}</button>
            <button class="btn ghost small" data-action="nav" data-v="jogo">Voltar</button></div>
          ${this.done ? "" : `<div class="mkb">${kb}</div>`}
          <p class="muted" style="margin:0;font-size:.85rem;text-align:center">Não percebes uma palavra da pista? Usa o botão do dicionário.</p>
        </section>
        <section class="panel xside xright"><div class="eyebrow">↓ Na vertical</div><ul class="xlist">${down}</ul></section>
      </div>`;
  }

  // ---- escrever ----
  select(k) {
    const x = this.cell.get(k);
    if (k === this.sel && x.words.length > 1) this.dir = this.dir === "A" ? "D" : "A";
    else {
      this.sel = k;
      if (!x.words.some(w => w.dir === this.dir)) this.dir = x.words[0].dir;
    }
  }

  type(c) {
    if (this.done) return;
    const k = this.sel;
    this.fill[k] = c;
    this.wrong.delete(k);
    this.msg = "";
    this.check();
    // avança na direção da palavra; numa interseção fica na mesma casa
    if (!this.isCross(k) && !this.done) {
      const cells = this.active.cells, i = cells.indexOf(k);
      if (i < cells.length - 1) this.sel = cells[i + 1];
    }
  }

  back() {
    if (this.done) return;
    const cells = this.active.cells, i = cells.indexOf(this.sel);
    if (this.fill[this.sel] && !this.revealed.has(this.sel)) { delete this.fill[this.sel]; this.wrong.delete(this.sel); }
    else if (i > 0) {
      this.sel = cells[i - 1];
      if (!this.revealed.has(this.sel)) { delete this.fill[this.sel]; this.wrong.delete(this.sel); }
    }
  }

  arrow(key) {
    const [dr, dc] = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0] }[key];
    const x = this.cell.get(this.sel), nk = (x.r + dr) + "," + (x.c + dc), n = this.cell.get(nk);
    if (!n) return;
    this.sel = nk;
    const want = dr ? "D" : "A";
    if (n.words.some(w => w.dir === want)) this.dir = want; else this.dir = n.words[0].dir;
  }

  onKey(e) {
    if (!this.cell || e.ctrlKey || e.metaKey || e.altKey) return;
    const c = e.key.toLowerCase();
    if (/^[a-z]$/.test(c)) this.type(c);
    else if (e.key === "Backspace") this.back();
    else if (e.key.startsWith("Arrow")) { e.preventDefault(); this.arrow(e.key); }
    else return;
    this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "xsel": this.select(value); break;
      case "xkey": this.type(value); break;
      case "xback": this.back(); break;
      case "xclue": {
        const w = this.words[Number(value)];
        this.dir = w.dir;
        this.sel = w.cells.find(k => this.fill[k] !== this.cell.get(k).ch) || w.cells[0];
        break;
      }
      case "xpt": this.showPt = !this.showPt; break;
      case "xcheck": {
        this.wrong = new Set(Object.keys(this.fill).filter(k => this.fill[k] !== this.cell.get(k).ch));
        this.msg = this.wrong.size ? `${this.wrong.size} letra${this.wrong.size === 1 ? "" : "s"} por corrigir (a vermelho).` : "Até agora está tudo certo!";
        break;
      }
      case "xreveal":
        if (this.fill[this.sel] !== this.cell.get(this.sel).ch) {
          this.fill[this.sel] = this.cell.get(this.sel).ch;
          this.revealed.add(this.sel);
          this.wrong.delete(this.sel);
          this.reveals++;
          this.check();
        }
        break;
      case "xnew": this.newGrid(); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
