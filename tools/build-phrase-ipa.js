// Gera js/data/phrases/phraseIpa.js: a pronúncia (IPA) de cada frase de PHRASES, palavra a palavra.
// Usa o IPA do dicionário; as palavras que não estão lá (palavras funcionais, formas flexionadas,
// contracções) vêm de tools/phrase-ipa-words.js. Se faltar alguma, lista-as e não escreve nada.
// Uso: node tools/build-phrase-ipa.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scripts = [...html.matchAll(/src="(js\/[^"]+)"/g)].map(m => m[1]).filter(s => s !== "js/main.js" && s !== "js/data/phrases/phraseIpa.js");
const ctx = vm.createContext({ console });
scripts.forEach(s => vm.runInContext(fs.readFileSync(path.join(root, s), "utf8"), ctx, { filename: s }));
const extra = require("./phrase-ipa-words.js");

const { sentences, dict } = vm.runInContext(`(() => {
  const d = new Dictionary(THEMES, GLOSSARY);
  return { sentences: PHRASES.flatMap(p => p.lines.map(l => l[0])), dict: Object.fromEntries(d.entries.map(e => [e.en.toLowerCase(), e.ipa])) };
})()`, ctx);

const words = s => s.toLowerCase().replace(/’/g, "'").match(/[a-z]+(?:'[a-z]+)*/g) || [];
const ipaOf = w => extra[w] ?? dict[w];
const missing = new Set(), out = {};
sentences.forEach(s => {
  const parts = words(s).map(w => { const i = ipaOf(w); if (i === undefined) missing.add(w); return i; });
  if (!parts.includes(undefined)) out[s] = parts.join(" ");
});
if (missing.size) {
  console.log(`Faltam ${missing.size} palavras em tools/phrase-ipa-words.js:\n  ${[...missing].sort().join(" ")}`);
  process.exitCode = 1;
} else {
  const body = Object.entries(out).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`).join("\n");
  fs.writeFileSync(path.join(root, "js/data/phrases/phraseIpa.js"),
    `// Pronúncia (IPA) de cada frase de PHRASES, palavra a palavra. Gerado por tools/build-phrase-ipa.js: não editar à mão.\nconst PHRASE_IPA = {\n${body}\n};\n`);
  console.log(`${Object.keys(out).length} frases com pronúncia.`);
}
