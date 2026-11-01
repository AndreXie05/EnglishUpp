// Verifica a app sem browser: carrega todos os scripts, confere os dados e põe um "robô" a carregar ao acaso
// nos botões de cada separador (jogos, lições, exercícios…), à procura de erros ou de "undefined"/"NaN" no ecrã.
// Uso: node tools/check.js [cliques por separador, por defeito 400]
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const CLICKS = Number(process.argv[2]) || 400;
const problems = [];
const fail = (where, msg) => problems.push(`${where}: ${msg}`);

/* ----- 1. CSS: chavetas equilibradas (ignorando comentários e textos entre aspas) ----- */
{
  const css = fs.readFileSync(path.join(root, "css/style.css"), "utf8");
  const open = [];
  let line = 1, str = null, comment = false;
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (c === "\n") line++;
    if (comment) { if (c === "*" && css[i + 1] === "/") { comment = false; i++; } continue; }
    if (str) { if (c === str && css[i - 1] !== "\\") str = null; continue; }
    if (c === "/" && css[i + 1] === "*") { comment = true; continue; }
    if (c === "\"" || c === "'") { str = c; continue; }
    if (c === "{") open.push(line);
    else if (c === "}" && !open.pop()) fail("CSS", `"}" a mais na linha ${line}`);
  }
  open.forEach(l => fail("CSS", `"{" por fechar na linha ${l} (o CSS a seguir fica preso dentro desse bloco)`));
}

/* ----- 2. Carregar os scripts pela ordem do index.html, com um navegador a fingir ----- */
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scripts = [...html.matchAll(/src="(js\/[^"]+)"/g)].map(m => m[1]);
scripts.forEach(s => fs.existsSync(path.join(root, s)) || fail("index.html", `falta o ficheiro ${s}`));
const fake = () => new Proxy(function () {}, {
  get: (t, k) => k === Symbol.toPrimitive ? () => "" : k === "value" ? "" : fake(),
  apply: () => fake(), set: () => true,
});
// Aleatório com semente, para os erros se poderem repetir
let seed = 12345;
const random = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const math = Object.create(Math);
math.random = random;
const ctx = vm.createContext({
  console, Math: math, window: fake(), document: fake(), navigator: {}, Notification: { permission: "default" },
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  setTimeout: () => 0, clearTimeout() {}, setInterval: () => 0, clearInterval() {}, requestAnimationFrame: () => 0,
});
for (const s of scripts) {
  if (s === "js/main.js") continue;
  try { vm.runInContext(fs.readFileSync(path.join(root, s), "utf8"), ctx, { filename: s }); }
  catch (e) { fail(s, `erro ao carregar: ${e.message}`); }
}

/* ----- 3. Dados ----- */
vm.runInContext(`globalThis.__data = (() => {
  const out = [], bad = (w, m) => out.push(w + ": " + m);
  const dup = (what, ids) => { const seen = new Set(); ids.forEach(id => seen.has(id) ? bad(what, "id repetido " + id) : seen.add(id)); };
  dup("Temas", THEMES.map(t => t.id));
  dup("Gramática", GRAMMAR.map(l => l.id));
  dup("Textos", TEXTS.map(t => t.id));
  dup("Frases", PHRASES.map(p => p.id));
  dup("Modo história", STORY.flatMap(c => c.chapters.map(ch => ch.id)));
  // Exercícios de gramática: resposta preenchida; nas de escolher, a certa não pode estar nas erradas
  GRAMMAR.forEach(l => l.ex.forEach((x, i) => {
    const [t, q, a, wrong] = x;
    if (!q || !a) bad("Gramática " + l.id, "exercício " + (i + 1) + " sem frase ou resposta");
    if (t === "c" && (!wrong || wrong.split("|").includes(a))) bad("Gramática " + l.id, "exercício " + (i + 1) + ": opções erradas em falta ou com a resposta certa");
  }));
  // Modo história: tradução para cada parágrafo e perguntas com opções diferentes
  STORY.forEach(city => city.chapters.forEach(c => {
    if (c.en.length !== c.pt.length) bad("História " + c.id, "parágrafos em inglês e português não batem certo");
    c.q.forEach(([en, pt, o], i) => { if (!en || !pt || o.length < 3 || new Set(o).size !== o.length) bad("História " + c.id, "pergunta " + (i + 1) + " mal formada"); });
  }));
  // Corrige o erro: as palavras erradas têm de existir na frase
  FIXES.forEach((f, i) => f.bad.forEach(b => f.wrong.split(" ").map(t => t.replace(/[.,!?]+$/, "")).includes(b) || bad("Corrige o erro", "frase " + (i + 1) + ': "' + b + '" não está na frase')));
  // Guia dos tempos: cada tempo existe nos verbos
  TENSE_GUIDE.forEach(g => Verb.TENSES.some(([t]) => t === g.tense) || bad("Tempos verbais", "tempo desconhecido " + g.tense));
  // Pronúncia das frases soltas e das frases dos jogos
  const d = new Dictionary(THEMES, GLOSSARY), ipa = new SentenceIpa(d);
  [...LOOSE_SENTENCES, ...FREE_SENTENCES].forEach(([en]) => ipa.of(en) || bad("Frases soltas", "sem pronúncia: " + en));
  PHRASES.forEach(p => p.lines.forEach(([en]) => PHRASE_IPA[en] || bad("Frases " + p.id, "sem pronúncia: " + en)));
  return out;
})()`, ctx);
ctx.__data.forEach(p => problems.push(p));

/* ----- 4. O robô: carrega em botões ao acaso em cada separador ----- */
vm.runInContext(`globalThis.__robot = (clicks, random) => {
  const out = [], seen = new Set();
  const app = new App();
  app.save = () => {};
  app.toast = { show() {} };
  app.render = () => {};
  const show = app.show.bind(app);
  app.show = v => { try { show(v); } catch (e) { app.view = v; } };
  const tabs = NavBar.ITEMS.map(i => i[0]);
  // Botões que mexem em ficheiros, notificações ou apagam dados: o robô não lhes toca
  const skip = new Set(["reset", "confirmReset", "import", "export", "restore", "remon", "remoff", "dclear", "bkexport", "bkimport", "bkrestore"]);
  // Pontos de partida: cada separador e cada jogo da página do Jogo
  const go = start => {
    if (!start.action) return app.go(start.tab);
    app.go("jogo");
    app.handleClick({ target: { dataset: { action: start.action, v: start.v }, closest() { return this; } }, preventDefault() {} });
  };
  app.go("jogo");
  const games = [...app.view.render().matchAll(/<button class="gtile[^"]*"[^>]*data-action="([^"]+)"(?: data-v="([^"]*)")?/g)].map(m => ({ action: m[1], v: m[2], tab: "jogo" }));
  games.push({ action: "challenge", tab: "jogo" });
  const starts = [...tabs.map(tab => ({ tab })), ...games];
  for (const start of starts) {
    const tab = start.tab;
    const restart = () => go(start);
    restart();
    const trail = [start.v || start.action || tab];
    const clicksHere = start.action ? Math.ceil(clicks / 3) : clicks;
    for (let n = 0; n < clicksHere; n++) {
      let h;
      const name = app.view.constructor.name;
      seen.add(name);
      try { h = app.view.render(); app.view.afterRender(); }
      catch (e) { out.push(name + " (" + trail.slice(-6).join(" → ") + "): erro ao desenhar: " + e.message); restart(); continue; }
      const m = h.match(/>[^<]*(\\bundefined\\b|\\bNaN\\b|\\[object Object\\])[^<]*</);
      if (m) { out.push(name + " (" + trail.slice(-6).join(" → ") + "): aparece no ecrã: " + m[0].slice(1, 90)); restart(); continue; }
      // botões que se podem carregar (não desativados)
      const btns = [...h.matchAll(/<button[^>]*?data-action="([^"]+)"[^>]*>/g)]
        .filter(b => !/\\sdisabled[\\s>]/.test(b[0]) && !skip.has(b[1]))
        .map(b => ({ action: b[1], v: (b[0].match(/data-v="([^"]*)"/) || [])[1], q: (b[0].match(/data-q="([^"]*)"/) || [])[1], section: (b[0].match(/data-section="([^"]*)"/) || [])[1] }));
      // de vez em quando, envia um formulário (respostas escritas)
      if (/<form id="(\\w+)"/.test(h) && random() < 0.3) {
        const id = h.match(/<form id="(\\w+)"/)[1];
        try { app.view.onSubmit({ id }); } catch (e) { out.push(name + ": erro ao responder no formulário " + id + ": " + e.message); }
        trail.push("form:" + id);
        continue;
      }
      if (!btns.length) { restart(); trail.push("(sem botões)"); continue; }
      const b = btns[Math.floor(random() * btns.length)];
      const unesc = s => s == null ? s : s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      const el = { dataset: { action: b.action, v: unesc(b.v), q: b.q, section: b.section }, closest: () => el };
      trail.push(b.action + (b.v ? "=" + b.v : ""));
      try { app.handleClick({ target: el, preventDefault() {} }); }
      catch (e) { out.push(name + " (" + trail.slice(-6).join(" → ") + "): erro ao carregar: " + e.message); restart(); }
    }
  }
  globalThis.__seen = [...seen].sort();
  return out;
}`, ctx);
const robot = ctx.__robot(CLICKS, random);
console.log(`O robô passou por ${ctx.__seen.length} ecrãs: ${ctx.__seen.join(", ")}`);
[...new Set(robot)].forEach(p => problems.push(p));

if (problems.length) {
  console.log(`${problems.length} problema(s):`);
  problems.forEach(p => console.log("  • " + p));
  process.exitCode = 1;
} else {
  console.log(`Tudo certo: ${scripts.length} scripts, os dados e ${CLICKS} cliques em cada separador e em cada jogo, sem erros.`);
  const all = fs.readdirSync(path.join(root, "js/views")).map(f => f.replace(".js", "")).filter(v => v !== "View" && !ctx.__seen.includes(v));
  if (all.length) console.log(`Ecrãs onde o robô não chegou desta vez: ${all.join(", ")} (aumenta os cliques para cobrir mais)`);
}
