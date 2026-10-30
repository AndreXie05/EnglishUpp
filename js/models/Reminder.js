// Lembrete diário: uma notificação do browser se ainda não cumpriste a meta. Só dispara com a app aberta
class Reminder {
  static HOURS = [12, 18, 20, 21, 22];

  static get supported() {
    return typeof Notification !== "undefined";
  }

  static get allowed() {
    return Reminder.supported && Notification.permission === "granted";
  }

  static settings(p) {
    return p.data.reminder?.on && Reminder.allowed ? p.data.reminder : null;
  }

  static async enable(p, hour = 20) {
    if (!Reminder.supported) return false;
    const perm = await Notification.requestPermission();
    if (perm !== "granted") return false;
    p.data.reminder = { on: true, hour, last: null };
    return true;
  }

  static disable(p) {
    p.data.reminder = null;
  }

  static message(p) {
    if (!p.spun) return "Ainda não rodaste a roleta de hoje. Vamos ao inglês?";
    const left = p.goal - p.todayCount;
    return `Faltam ${left} exercício${left === 1 ? "" : "s"} para a sequência${p.streak() ? ` de ${p.streak()} dia${p.streak() === 1 ? "" : "s"}` : ""} subir hoje.`;
  }

  // Chamada ao abrir a app e de minuto a minuto
  static check(app) {
    const p = app.progress, r = Reminder.settings(p);
    if (!r || r.last === DateUtils.today() || p.goalMet || new Date().getHours() < r.hour) return;
    try {
      new Notification("EnglishUpp", { body: Reminder.message(p) });
    } catch (e) {
      return;
    }
    r.last = DateUtils.today();
    app.save();
  }
}
