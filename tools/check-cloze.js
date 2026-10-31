// Verifica os textos de "Completar o texto" (js/data/texts/clozetexts.js):
// 1) as palavras que ficam em branco são sempre da própria lição ou de anteriores (o resto do texto pode ter palavras
//    de lições à frente, que se procuram no dicionário; só avisa se forem mais de MAX_AHEAD do texto);
// 2) tem pelo menos MIN palavras da lição para ficarem em branco;
// 3) quantos textos há por lição (lição 1: 3-5, 2: 5-8, 3: 7-10, 4 em diante: pelo menos 10).
// Uso: node tools/check-cloze.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scripts = [...html.matchAll(/src="(js\/[^"]+)"/g)].map(m => m[1]).filter(s => /^js\/(utils|data\/|models\/(Word|Theme|Dictionary|Verb)|grammar)/.test(s));
const ctx = vm.createContext({ console });
scripts.forEach(s => vm.runInContext(fs.readFileSync(path.join(root, s), "utf8"), ctx, { filename: s }));

const MIN_OWN = 4;
const MAX_AHEAD = 0.45;
const out = vm.runInContext(`(() => {
  const dict = new Dictionary(THEMES, GLOSSARY);
  const gloss = new Set(GLOSSARY.map(g => g[0].toLowerCase()));
  // índice da lição em que cada palavra de lição aparece primeiro
  const first = new Map();
  dict.themes.forEach((t, i) => t.words.forEach(w => { const k = w.en.toLowerCase(); if (!first.has(k)) first.set(k, i); }));
  const res = [];
  const expected = n => n === 1 ? [3, 5] : n === 2 ? [5, 8] : n === 3 ? [7, 10] : [10, 99];
  dict.themes.forEach((t, i) => {
    const list = (typeof CLOZE !== "undefined" && CLOZE[t.id]) || [];
    if (!list.length) return;
    const [lo, hi] = expected(i + 1);
    const ownList = [...first.entries()].filter(([, v]) => v === i).map(([k]) => k);
    const info = { id: t.id, lesson: i + 1, count: list.length, lo, hi, problems: [] };
    if (list.length < lo || list.length > hi) info.problems.push("tem " + list.length + " textos (esperado " + lo + (hi < 99 ? "-" + hi : "+") + ")");
    list.forEach((text, n) => {
      const tokens = [...text.matchAll(/[A-Za-z]+(?:'[a-z]+)?/g)].map(m => m[0].toLowerCase());
      const bad = new Set(), own = new Set();
      // palavras e expressões da lição que o exercício consegue encontrar no texto (usa o mesmo detetor que a app)
      t.wordRanges(text).forEach(r => own.add(r.key));
      tokens.forEach(tok => {
        const forms = Dictionary.baseForms(tok).concat(tok);
        const idx = forms.map(f => first.get(f)).filter(x => x !== undefined);
        if (!idx.length) return;
        const min = Math.min(...idx);
        if (min > i && !forms.some(f => gloss.has(f))) bad.add(tok + " (lição " + (min + 1) + ")");
      });
      const words = text.split(/\\s+/).length;
      const ahead = tokens.filter(tok => { const f = Dictionary.baseForms(tok).concat(tok); const idx = f.map(x => first.get(x)).filter(x => x !== undefined); return idx.length && Math.min(...idx) > i && !f.some(x => gloss.has(x)); }).length;
      if (ahead / tokens.length > ${MAX_AHEAD}) info.problems.push("texto " + (n + 1) + ": " + Math.round(ahead / tokens.length * 100) + "% das palavras são de lições à frente (" + [...bad].join(", ") + ")");
      if (own.size < ${MIN_OWN}) info.problems.push("texto " + (n + 1) + " só tem " + own.size + " palavras da lição (mínimo ${MIN_OWN})");
      if (words < 28 || words > 90) info.problems.push("texto " + (n + 1) + " tem " + words + " palavras (ideal 28-90)");
    });
    res.push(info);
  });
  return res;
})()`, ctx);

let bad = 0;
out.forEach(r => {
  console.log(`Lição ${r.lesson} (${r.id}): ${r.count} textos`);
  r.problems.forEach(p => { console.log("   ✗ " + p); bad++; });
});
if (!out.length) console.log("Ainda não há textos em js/data/texts/clozetexts.js.");
console.log(bad ? `\n${bad} problema(s).` : "\nTudo certo.");
process.exitCode = bad ? 1 : 0;
