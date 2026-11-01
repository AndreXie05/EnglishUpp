// Gera um único ficheiro EnglishUpp.html, com o CSS e todo o JavaScript lá dentro e comprimidos (minificados),
// para mandar a alguém: abre-se com duplo clique, sem pastas nem servidor. O código fica difícil de ler, mas não escondido.
// Usa o esbuild (descarregado pelo npx da primeira vez). O ficheiro fica fora do projeto, para não ir para o git.
// Uso: node tools/build-single.js [caminho/de/saida.html]
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.join(__dirname, "..");
const out = path.resolve(process.argv[2] || path.join(root, "..", "EnglishUpp.html"));
const year = new Date().getFullYear();
const notice = `© ${year} EnglishUpp. Todos os direitos reservados. Não é permitido copiar, modificar ou distribuir sem autorização.`;

// Comprime um texto com o esbuild (loader: js ou css)
function minify(code, loader) {
  return execFileSync("npx", ["--yes", "esbuild@0.24.2", `--loader=${loader}`, "--minify", "--legal-comments=none"],
    { input: code, maxBuffer: 64 * 1024 * 1024 }).toString();
}

let html = fs.readFileSync(path.join(root, "index.html"), "utf8");

// Os scripts, pela ordem do index.html, num só bloco (partilham o mesmo âmbito global, como antes)
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
const js = scripts.map(src => fs.readFileSync(path.join(root, src), "utf8")).join("\n;\n");
const jsMin = minify(js, "js").replace(/<\/script/gi, "<\\/script");

const css = fs.readFileSync(path.join(root, "css/style.css"), "utf8");
const cssMin = minify(css, "css");

// Tira os comentários do HTML e troca as ligações aos ficheiros pelo conteúdo comprimido
html = html.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<link rel="stylesheet" href="css\/style.css">/, () => `<style>${cssMin}</style>`);
let first = true;
html = html.replace(/\s*<script src="[^"]+"><\/script>/g, () => {
  if (!first) return "";
  first = false;
  return `\n<script>/* ${notice} */\n${jsMin}</script>`;
});
html = html.replace(/<html([^>]*)>/, `<!-- ${notice} -->\n<html$1>`).replace(/\n\s*\n/g, "\n");

fs.writeFileSync(out, html);
const kb = n => `${Math.round(n / 1024)} KB`;
console.log(`${scripts.length} scripts e o CSS juntos em ${out}`);
console.log(`JavaScript: ${kb(js.length)} → ${kb(jsMin.length)} · CSS: ${kb(css.length)} → ${kb(cssMin.length)} · ficheiro final: ${kb(html.length)}`);
