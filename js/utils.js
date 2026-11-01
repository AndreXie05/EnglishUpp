// Funções auxiliares sem estado

class DateUtils {
  static toStr(d) {
    const pad = n => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  static today() {
    return DateUtils.toStr(new Date());
  }

  static addDays(s, n) {
    const [y, m, d] = s.split("-").map(Number);
    return DateUtils.toStr(new Date(y, m - 1, d + n));
  }

  static format(s) {
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("pt-PT", { weekday: "long", day: "numeric", month: "long" });
  }

  // Número do dia (muda uma vez por dia), útil para escolhas "aleatórias" estáveis
  static dayNumber() {
    const [y, m, d] = DateUtils.today().split("-").map(Number);
    return Math.floor(Date.UTC(y, m - 1, d) / 86400000);
  }
}

class Utils {
  static esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  static escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  static pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  static shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Normaliza uma resposta escrita: minúsculas, sem pontuação, espaços simples
  static normalize(s) {
    return s.toLowerCase().replace(/[^a-z' ]/g, " ").replace(/\s+/g, " ").trim();
  }

  static cambridgeUrl(word) {
    return "https://dictionary.cambridge.org/dictionary/english-portuguese/" +
      encodeURIComponent(word.toLowerCase().replace(/ /g, "-"));
  }
}
