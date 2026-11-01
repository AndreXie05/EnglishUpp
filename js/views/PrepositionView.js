// Preposições (parte da Gramática): um guia com cada preposição de lugar desenhada e o jogo "onde está o objeto?"
class PrepositionView extends View {
  static ROUNDS = 8;

  // [preposição, português, posição do objeto em relação ao outro]
  static PREPS = [
    ["on", "em cima de", "on", "ɒn"], ["under", "debaixo de", "under", "ˈʌndə"], ["in", "dentro de", "in", "ɪn"], ["behind", "atrás de", "behind", "bɪˈhaɪnd"],
    ["in front of", "à frente de", "front", "ɪn frʌnt əv"], ["next to", "ao lado de", "next", "nekst tuː"], ["above", "acima de", "above", "əˈbʌv"], ["between", "entre", "between", "bɪˈtwiːn"],
  ];

  // [emoji do objeto, nome, emoji de referência, nome]
  static PAIRS = [
    ["🐱", "cat", "📦", "box"], ["⚽", "ball", "🪑", "chair"], ["🐦", "bird", "🌳", "tree"], ["📘", "book", "🎒", "bag"],
    ["🐶", "dog", "🏠", "house"], ["🍎", "apple", "🧺", "basket"], ["🔑", "key", "👟", "shoe"], ["🐭", "mouse", "🛏️", "bed"],
  ];

  // Exemplo do guia para cada preposição: [par de PAIRS, frase em inglês, tradução]
  static EXAMPLES = {
    on: [0, "The cat is on the box.", "O gato está em cima da caixa."],
    under: [1, "The ball is under the chair.", "A bola está debaixo da cadeira."],
    in: [5, "The apple is in the basket.", "A maçã está dentro do cesto."],
    behind: [4, "The dog is behind the house.", "O cão está atrás da casa."],
    "in front of": [0, "The cat is in front of the box.", "O gato está à frente da caixa."],
    "next to": [7, "The mouse is next to the bed.", "O rato está ao lado da cama."],
    above: [2, "The bird is above the tree.", "O pássaro está acima da árvore."],
    between: [1, "The ball is between the two chairs.", "A bola está entre as duas cadeiras."],
  };

  // playing = false mostra o guia; true começa logo o jogo
  constructor(app, playing = false) {
    super(app);
    this.playing = playing;
    const preps = Utils.shuffle(PrepositionView.PREPS);
    this.rounds = Array.from({ length: PrepositionView.ROUNDS }, (_, i) => ({
      prep: preps[i % preps.length], pair: Utils.pick(PrepositionView.PAIRS),
    }));
    this.index = 0;
    this.score = 0;
    this.picked = null;
    this.xp = 0;
  }

  get tab() { return "gramatica"; }
  get finished() { return this.index >= this.rounds.length; }

  // A cena em emojis, posicionada para cada preposição
  scene(r) {
    const [obj, , ref] = r.pair, kind = r.prep[2];
    const at = (e, size, left, top, z = 1, op = 1) => `<span class="pe${e === obj ? " obj" : ""}" style="font-size:${size}rem;left:${left}%;top:${top}px;z-index:${z};opacity:${op}">${e}</span>`;
    const parts = {
      on: at(ref, 4, 50, 70) + at(obj, 2.4, 50, 24, 2),
      above: at(ref, 4, 50, 100) + at(obj, 2.4, 50, 0, 2),
      under: at(ref, 4, 50, 40) + at(obj, 2.4, 50, 130, 2),
      in: at(ref, 4.6, 50, 56, 1, .38) + at(obj, 2, 50, 76, 2),
      behind: at(obj, 2.6, 42, 84, 1) + at(ref, 4, 50, 70, 2),
      front: at(ref, 4, 46, 60, 1) + at(obj, 2.6, 56, 98, 2),
      next: at(ref, 4, 36, 70) + at(obj, 2.4, 66, 82),
      between: at(ref, 3.4, 22, 74) + at(ref, 3.4, 78, 74) + at(obj, 2.4, 50, 86),
    };
    return `<div class="pscene" role="img" aria-label="Cena: o objeto está ${this.esc(r.prep[1])} o outro">${parts[kind]}</div>`;
  }

  options(r) {
    const others = Utils.shuffle(PrepositionView.PREPS.filter(p => p[0] !== r.prep[0])).slice(0, 3);
    r.opts = r.opts || Utils.shuffle([r.prep, ...others]);
    return r.opts;
  }

  render() {
    if (!this.playing) return this.guide();
    if (this.finished) return this.result();
    const r = this.rounds[this.index], [, n1, , n2] = r.pair, a = this.picked;
    const between = r.prep[2] === "between";
    const sentence = `The ${n1} is <b class="blank">${a ? this.esc(r.prep[0]) : "&nbsp;"}</b> ${between ? `the two ${n2}s` : `the ${n2}`}.`;
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Preposições · ${this.index + 1} de ${this.rounds.length}</span><button class="linkbtn" data-action="pguide">Sair</button></div>
      <div class="bar"><i style="width:${Math.round(this.index / this.rounds.length * 100)}%"></i></div>
      <section class="panel" style="text-align:center">${this.scene(r)}
        <p class="q" style="font-size:clamp(1.3rem,5vw,1.8rem)">${sentence}</p>
        <div class="opts">${this.options(r).map(p => `<button class="opt ${a ? (p[0] === r.prep[0] ? "ok" : p[0] === a ? "no" : "") : ""}" data-action="ppick" data-v="${this.esc(p[0])}" ${a ? "disabled" : ""}>${this.esc(p[0])}<small class="ipa" style="display:block">/${this.esc(p[3])}/</small></button>`).join("")}</div>
        ${a ? `<div class="fb ${a === r.prep[0] ? "ok" : "no"}">${a === r.prep[0] ? "Certo!" : `Não. É “${this.esc(r.prep[0])}”.`} <span class="muted">${this.esc(r.prep[0])} /${this.esc(r.prep[3])}/ = ${this.esc(r.prep[1])}</span></div>
          <div class="row" style="justify-content:center"><button class="btn" data-action="pnext">${this.index === this.rounds.length - 1 ? "Ver resultado" : "Seguinte →"}</button></div>` : ""}
      </section>`;
  }

  // Guia: cada preposição com a cena, a pronúncia, o significado e um exemplo; depois o jogo e as lições
  guide() {
    const cards = PrepositionView.PREPS.map(prep => {
      const [pair, en, pt] = PrepositionView.EXAMPLES[prep[0]];
      return `<article class="pcard">${this.scene({ prep, pair: PrepositionView.PAIRS[pair] })}
        <div class="hw"><h2>${this.esc(prep[0])}</h2><span class="ipa">/${this.esc(prep[3])}/</span></div>
        <div class="pt" style="font-weight:700">${this.esc(prep[1])}</div>
        <div class="ex">${this.esc(en).replace(this.esc(prep[0]), `<b>${this.esc(prep[0])}</b>`)}<br><i class="muted">${this.esc(pt)}</i></div></article>`;
    }).join("");
    const lessons = ["g-prepplace", "g-adjprep"].map(id => this.app.grammar.find(l => l.id === id)).filter(Boolean);
    return `<div><div class="eyebrow">Gramática</div><h1>Preposições</h1></div>
      ${GrammarView.sections(this, "preps")}
      <section class="panel lead hero"><span class="heroicon" aria-hidden="true">📍</span>
        <div class="eyebrow">Onde está?</div><h2>As preposições de lugar dizem onde uma coisa está em relação a outra.</h2>
        <p style="margin:0">Vê as ${PrepositionView.PREPS.length} mais usadas e depois testa-te no jogo.</p>
        <div class="row"><button class="btn" data-action="pplay">🎮 Jogar: onde está o objeto?</button></div></section>
      <div class="pgrid">${cards}</div>
      ${lessons.length ? `<section class="panel"><h2>📚 Para saber mais</h2><p class="muted" style="margin:0">As preposições também servem para o tempo (<b>at</b> 5 o'clock, <b>on</b> Monday, <b>in</b> July) e há palavras que pedem sempre a mesma (good <b>at</b>, afraid <b>of</b>).</p>
        <div class="row">${lessons.map(l => `<button class="btn ghost small" data-action="plesson" data-v="${l.id}">${GrammarView.icon(l)} ${this.esc(l.pt)}</button>`).join("")}</div></section>` : ""}`;
  }

  result() {
    return `<div class="eyebrow">Preposições</div><h1>${this.score} de ${this.rounds.length}</h1>
      <section class="panel"><p style="margin:0">${this.score === this.rounds.length ? "Perfeito!" : this.score >= 6 ? "Muito bem!" : "Vai treinando: repete e vais ver."} Ganhaste ${this.xp} XP.</p>
        <div class="row"><button class="btn" data-action="pagain">Jogar outra vez</button><button class="btn ghost" data-action="pguide">Voltar às preposições</button></div></section>`;
  }

  pick(p) {
    if (this.picked || this.finished) return;
    this.picked = p;
    if (p === this.rounds[this.index].prep[0]) this.score++;
  }

  next() {
    if (!this.picked) return;
    this.index++;
    this.picked = null;
    if (this.finished) {
      this.xp = this.score + (this.score === this.rounds.length ? 3 : 0);
      this.progress.addGame(this.xp, "preposition");
      this.app.save();
    }
  }

  onKey(e) {
    const n = Number(e.key);
    if (!this.playing || this.finished) return;
    if (n >= 1 && n <= 4 && !this.picked) this.pick(this.options(this.rounds[this.index])[n - 1][0]);
    else if ((e.key === "ArrowRight" || e.key === "Enter" && e.target.tagName !== "BUTTON") && this.picked) this.next();
    else return;
    this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "ppick": this.pick(value); break;
      case "pnext": this.next(); break;
      case "pagain":
      case "pplay": this.app.show(new PrepositionView(this.app, true)); return true;
      case "pguide": this.app.show(new PrepositionView(this.app)); return true;
      case "plesson": this.app.show(new GrammarView(this.app, null, this.app.grammar.find(l => l.id === value))); return true;
      case "gsection": return GrammarView.openSection(this.app, value);
      default: return false;
    }
    this.app.render();
    return true;
  }
}
