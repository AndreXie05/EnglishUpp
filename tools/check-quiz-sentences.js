// Verifica as frases que aparecem nos exercícios das lições (frases com espaço, “o que significa nesta frase”, escolher a frase):
// todas têm de ter tradução (exemplo da palavra, leitura do tema ou SENTENCE_PT) e pronúncia (SentenceIpa).
// As frases dos textos sem tradução em SENTENCE_PT não entram nos exercícios; aparecem como “à espera de tradução”.
// Uso: node tools/check-quiz-sentences.js [--json ficheiro]  (com --json escreve as que estão à espera de tradução)
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scripts = [...html.matchAll(/src="(js\/[^"]+)"/g)].map(m => m[1]).filter(s => s !== "js/main.js");
const ctx = vm.createContext({ console, window: {}, document: { addEventListener() {} }, localStorage: { getItem: () => null, setItem() {} } });
scripts.forEach(s => vm.runInContext(fs.readFileSync(path.join(root, s), "utf8"), ctx, { filename: s }));

const out = vm.runInContext(`(() => {
  const dict = new Dictionary(THEMES, GLOSSARY);
  const ipa = new SentenceIpa(dict);
  const seen = new Map(), waiting = new Map();
  dict.themes.forEach(theme => theme.words.forEach(word => {
    if (!word.exEn) return;
    const list = [{ en: word.exEn, pt: word.exPt }, ...Quiz.pairs(theme, word), ...Quiz.translatedAlts(theme, word)];
    list.forEach(s => { if (!seen.has(s.en)) seen.set(s.en, { en: s.en, pt: s.pt, theme: theme.id }); else if (s.pt) seen.get(s.en).pt = s.pt; });
    Quiz.altSentences(theme, word).forEach(en => { if (!Quiz.ptOf(en) && !waiting.has(en)) waiting.set(en, theme.id); });
  }));
  const all = [...seen.values()];
  const noPt = all.filter(s => !s.pt);
  const todo = [...waiting].filter(([en]) => !seen.has(en)).map(([en, theme]) => ({ en, theme }));
  const noIpa = all.filter(s => !ipa.of(s.en));
  const missingWords = {};
  noIpa.forEach(s => SentenceIpa.words(s.en).forEach(w => { if (ipa.word(w) === null) missingWords[w] = (missingWords[w] || 0) + 1; }));
  return JSON.stringify({ total: all.length, noPt, todo, noIpa: noIpa.map(s => s.en), missingWords });
})()`, ctx);
const r = JSON.parse(out);
console.log(`${r.total} frases nos exercícios · sem tradução: ${r.noPt.length} · sem pronúncia: ${r.noIpa.length} · frases dos textos à espera de tradução (não entram): ${r.todo.length}`);
const mw = Object.keys(r.missingWords);
if (mw.length) console.log(`Palavras sem pronúncia (${mw.length}): ${mw.sort().join(", ")}`);
const i = process.argv.indexOf("--json");
if (i > 0) fs.writeFileSync(process.argv[i + 1], JSON.stringify(r.todo, null, 1));
r.noPt.slice(0, 20).forEach(s => console.log(`  [${s.theme}] ${s.en}`));
process.exit(r.noPt.length || r.noIpa.length ? 1 : 0);
