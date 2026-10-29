// Um texto prático (diálogo, email, carta, aviso...) com perguntas de compreensão.
// Dados em TEXTS: { id, level, kind, title, lines: [...], q: [[pergunta, certa, errada, errada], ...] }
// Nos diálogos cada linha é "Nome: fala". Nos emails e cartas as linhas "From:", "To:", "Subject:" e "Date:" são o cabeçalho
// e uma linha vazia separa os parágrafos.
class PracticalText {
  static KINDS = {
    dialogue: "Diálogo", email: "Email", message: "Mensagens", letter: "Carta", notice: "Aviso", ad: "Anúncio",
    review: "Opinião", blog: "Blogue", news: "Notícia", report: "Relatório", speech: "Discurso", essay: "Ensaio", interview: "Entrevista",
  };

  constructor(raw) {
    Object.assign(this, { id: raw.id, level: raw.level, kind: raw.kind, title: raw.title, lines: raw.lines });
    this.questions = raw.q.map(([q, right, ...wrong]) => {
      const options = Utils.shuffle([right, ...wrong]);
      return { q, options, answer: options.indexOf(right) };
    });
  }

  get kindLabel() {
    return PracticalText.KINDS[this.kind] || "Texto";
  }

  get wordCount() {
    return this.lines.join(" ").split(/\s+/).filter(Boolean).length;
  }

  // Linha de diálogo: { who, say } ou null
  static speech(line) {
    const m = line.match(/^([A-Z][A-Za-z .'-]{0,20}): (.+)$/);
    return m ? { who: m[1], say: m[2] } : null;
  }

  static isHeader(line) {
    return /^(From|To|Subject|Date|Cc|Posted by|Reviewed by|Dear|Re):/.test(line);
  }
}
