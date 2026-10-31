// Palavra misteriosa: adivinha uma palavra que já estudaste em 6 tentativas (como o Wordle)
class MysteryView extends View {
  static TRIES = 6;
  static ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  constructor(app) {
    super(app);
    this.start();
  }

  get tab() { return "jogo"; }

  // Palavras possíveis: as dos temas escolhidos no Jogo ou só as dos temas que já praticaste pelo menos uma vez
  wordPool() {
    const practiced = this.progress.data.mysteryScope === "practiced";
    const themes = practiced ? this.dict.themes.filter(t => this.progress.lesson(t.id) || this.progress.partsDone(t.id)) : GameView.themes(this.app);
    const seen = new Set();
    return themes.flatMap(t => t.words).filter(w => /^[a-z]{5,6}$/.test(w.en) && !seen.has(w.key) && seen.add(w.key));
  }

  start() {
    const pool = this.wordPool();
    this.poolKeys = pool.map(w => w.key);
    // Cada palavra só volta depois de teres passado por todas as outras
    const key = this.progress.drawFromDeck("mystery", this.poolKeys);
    this.word = key ? this.dict.word(key) : null;
    this.app.save?.();
    this.guesses = [];
    this.current = "";
    this.msg = "";
    this.xp = 0;
  }

  get len() { return this.word.en.length; }
  get won() { return this.guesses.at(-1)?.guess === this.word.en; }
  get lost() { return !this.won && this.guesses.length >= MysteryView.TRIES; }
  get over() { return this.won || this.lost; }

  // Cada letra: "ok" (lugar certo), "near" (existe noutro lugar) ou "no"; trata letras repetidas
  static score(guess, answer) {
    const res = Array(guess.length).fill("no"), left = {};
    [...answer].forEach((c, i) => { if (guess[i] === c) res[i] = "ok"; else left[c] = (left[c] || 0) + 1; });
    [...guess].forEach((c, i) => { if (res[i] === "no" && left[c] > 0) { res[i] = "near"; left[c]--; } });
    return res;
  }

  keyState() {
    const rank = { no: 1, near: 2, ok: 3 }, st = {};
    this.guesses.forEach(({ guess, res }) => [...guess].forEach((c, i) => { if (!st[c] || rank[res[i]] > rank[st[c]]) st[c] = res[i]; }));
    return st;
  }

  render() {
    if (!this.word) {
      const practiced = this.progress.data.mysteryScope === "practiced";
      return `<div><div class="eyebrow">Palavra misteriosa</div><h1>Ainda não dá</h1></div>
        <section class="panel"><p style="margin:0">${practiced ? "Ainda não há palavras de 5 ou 6 letras nos temas que já praticaste. Pratica mais lições ou usa os temas do Jogo." : "Não há palavras de 5 ou 6 letras nos temas escolhidos."}</p>
        <div class="row">${practiced ? `<button class="btn" data-action="mscope" data-v="game">Usar os temas do Jogo</button>` : ""}<button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div></section>`;
    }
    const rows = Array.from({ length: MysteryView.TRIES }, (_, r) => {
      const g = this.guesses[r], typing = r === this.guesses.length && !this.over;
      const letters = g ? g.guess : typing ? this.current : "";
      return `<div class="mystrow">${Array.from({ length: this.len }, (_, i) =>
        `<span class="mycell ${g ? g.res[i] : letters[i] ? "typed" : ""}">${this.esc(letters[i] || "")}</span>`).join("")}</div>`;
    }).join("");
    const st = this.keyState();
    const key = c => `<button class="opt key ${st[c] || ""}" data-action="mkey" data-v="${c}" ${this.over ? "disabled" : ""}>${c}</button>`;
    const kb = MysteryView.ROWS.map((r, i) => `<div class="krow">${i === 2 ? `<button class="opt key wide" data-action="menter" ${this.over ? "disabled" : ""}>Enter</button>` : ""}${[...r].map(key).join("")}${i === 2 ? `<button class="opt key wide" data-action="mback" aria-label="Apagar" ${this.over ? "disabled" : ""}>⌫</button>` : ""}</div>`).join("");
    const end = this.over ? `<div class="fb ${this.won ? "ok" : "no"}">${this.won ? `Boa! Era “${this.esc(this.word.en)}” /${this.esc(this.word.ipa)}/. +${this.xp} XP` : `Era “${this.esc(this.word.en)}” /${this.esc(this.word.ipa)}/ (${this.esc(this.word.pt)}).`}</div>
      <div class="row" style="justify-content:center"><button class="btn" data-action="magain2">Outra palavra</button><button class="btn ghost" data-action="nav" data-v="jogo">Voltar ao Jogo</button></div>` : "";
    const practiced = this.progress.data.mysteryScope === "practiced";
    return `<div class="row" style="justify-content:space-between"><span class="eyebrow">Palavra misteriosa</span><span class="muted">${this.guesses.length} de ${MysteryView.TRIES}</span></div>
      <div class="tabs" role="group" aria-label="Palavras"><button data-action="mscope" data-v="game" aria-pressed="${!practiced}">Temas do Jogo</button><button data-action="mscope" data-v="practiced" aria-pressed="${practiced}">Só temas já praticados</button></div>
      <section class="panel mystpanel">
        <p class="muted" style="margin:0 0 10px;text-align:center">Palavra de ${this.len} letras: ${this.esc(this.word.pt)}</p>
        <div class="mgrid" style="margin-bottom:12px">${rows}</div>
        <div class="muted" style="min-height:1.4em;text-align:center">${this.esc(this.msg)}</div>
        ${this.over ? "" : `<div class="mkb">${kb}</div>`}
        ${end}
      </section>`;
  }

  type(c) {
    if (this.over || this.current.length >= this.len) return;
    this.current += c;
    this.msg = "";
  }

  submit() {
    if (this.over) return;
    if (this.current.length < this.len) { this.msg = `Faltam letras: a palavra tem ${this.len}.`; return; }
    const guess = this.current;
    this.guesses.push({ guess, res: MysteryView.score(guess, this.word.en) });
    this.current = "";
    this.msg = "";
    if (this.won) {
      this.xp = 2 + (MysteryView.TRIES - this.guesses.length);
      this.progress.addGame(this.xp, "mystery");
      this.app.save();
    } else if (this.lost) {
      this.progress.bump("games");
      this.progress.exerciseDone("game:mystery");
      this.app.save();
    }
  }

  onKey(e) {
    const c = e.key.toLowerCase();
    if (/^[a-z]$/.test(c)) this.type(c);
    else if (e.key === "Backspace") this.current = this.current.slice(0, -1);
    else if (e.key === "Enter" && e.target.tagName !== "BUTTON") this.submit();
    else return;
    this.app.render();
  }

  onAction(action, value) {
    switch (action) {
      case "mkey": this.type(value); break;
      case "mback": this.current = this.current.slice(0, -1); break;
      case "menter": this.submit(); break;
      case "magain2": this.start(); break;
      case "mscope": this.progress.data.mysteryScope = value; this.app.save(); this.start(); break;
      default: return false;
    }
    this.app.render();
    return true;
  }
}
