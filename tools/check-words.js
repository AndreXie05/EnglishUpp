// Verifica se todas as palavras usadas no site (textos, perguntas, frases de exemplo e leituras)
// existem no dicionário. Se aparecerem palavras em falta, acrescenta-as a js/data/glossary.js
// (ou a uma lição) com IPA, classe e tradução.
// Uso: node tools/check-words.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scripts = [...html.matchAll(/src="(js\/[^"]+)"/g)].map(m => m[1]).filter(s => s !== "js/main.js");
// Nomes de personagens dos textos: não precisam de entrada no dicionário (acrescenta aqui os novos)
const PERSON_NAMES = new Set("ana clara emma joana lucia luis maria mario mark marta max paulo pedro rita rui sam sofia tom tomas tomás amara das rua re carolina nuno ricardo sara alberto beatriz carla margarida copenhagen traditore traduttore wi fi ben ing anna aesop eva jorge julia marco sartre joaquim jonas leo mia sines teresa nasa ness état tiago ines luna helena jo carlos elena einstein fernando miguel mozart daniela laura daniel mara paula paul john luís silva ines inês margaret bobby".split(" "));
const ctx = vm.createContext({ console, PERSON_NAMES });
scripts.forEach(s => vm.runInContext(fs.readFileSync(path.join(root, s), "utf8"), ctx, { filename: s }));

const missing = vm.runInContext(`(() => {
  const dict = new Dictionary(THEMES, GLOSSARY);
  const texts = [];
  dict.themes.forEach(t => {
    t.story.paragraphs.forEach(x => texts.push(x));
    t.story.questions.forEach(q => { texts.push(q.q); q.options.forEach(o => texts.push(o)); });
    t.text.forEach(s => texts.push(s.en));
    t.words.forEach(w => texts.push(w.exEn));
  });
  Object.values(CLOZE).forEach(list => list.forEach(x => texts.push(x)));
  Object.values(CROSS).forEach(c => texts.push(c));
  FIXES.forEach(f => texts.push(f.wrong, f.right));
  PHRASES.forEach(p => { p.lines.forEach(l => texts.push(l[0])); });
  TEXTS.forEach(t => { t.lines.forEach(l => texts.push(l.replace(/^[A-Z][A-Za-z .'-]{0,20}: /, ""))); texts.push(t.title); t.q.forEach(q => q.forEach(x => texts.push(x))); });
  // gramática: só o inglês (exemplos, frases e respostas), não as explicações em português
  GRAMMAR.forEach(g => {
    g.examples.forEach(e => texts.push(e[0]));
    g.ex.forEach(e => { texts.push(e[1].replace(/^[A-Za-z ]+: /, "")); e[2].split("/").forEach(x => texts.push(x)); e[3].split("|").forEach(x => texts.push(x)); });
  });
  // verbos: todas as formas de cada verbo
  Verb.all().forEach(v => v.forms.forEach(f => texts.push(f)));
  // palavras escritas com maiúscula a meio da frase são nomes próprios (cidades, pessoas) e não precisam de entrada
  const names = new Set(), words = new Set();
  texts.forEach(tx => {
    tx = tx.replace(/\\bwon't\\b/gi, "will not").replace(/\\bcan't\\b/gi, "can not").replace(/n't\\b/gi, " not").replace(/'(?:ll|m|re|ve|d)\\b/gi, "");
    for (const m of tx.matchAll(/(^|[.!?"]\\s+)?([A-Za-zÀ-ÿ]+(?:'[a-z]+)?)/g)) {
      const w = m[2], start = !!m[1] || m.index === 0;
      if (/^[A-Z]/.test(w) && !start && w.length > 1) names.add(w.toLowerCase());
      else words.add(w.toLowerCase());
    }
  });
  return [...words, ...names].filter((w, i, a) => a.indexOf(w) === i)
    .filter(w => w.length > 1 && !PERSON_NAMES.has(w.replace(/'s$/, "")) && !dict.knows(w)
      && !(names.has(w) && !words.has(w)))
    .sort();
})()`, ctx);

const total = vm.runInContext("new Dictionary(THEMES, GLOSSARY).entries.length", ctx);
console.log(`Dicionário: ${total} palavras.`);
if (missing.length) {
  console.log(`\nFaltam ${missing.length} palavras no dicionário:\n  ${missing.join(", ")}`);
  process.exitCode = 1;
} else {
  console.log("Todas as palavras usadas no site estão no dicionário.");
}
