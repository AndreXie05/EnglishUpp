// Guarda o progresso no navegador (localStorage).
// Quando o site corre como Artifact do claude.ai, também sincroniza com a conta.
class Storage {
  constructor(key) {
    this.key = key;
    this.remote = null;
    this.timer = null;
    this.saving = false;
    this.pending = null;
    this.label = "Progresso guardado neste navegador";
  }

  loadLocal() {
    try {
      const s = localStorage.getItem(this.key);
      return s ? JSON.parse(s) : null;
    } catch (e) {
      return null;
    }
  }

  save(data) {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
    } catch (e) {}
    if (!this.remote) return;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.flush(data), 700);
  }

  async flush(data) {
    if (this.saving) {
      this.pending = data;
      return;
    }
    this.saving = true;
    try {
      await this.remote.set(JSON.parse(JSON.stringify(data)));
    } catch (e) {}
    this.saving = false;
    if (this.pending) {
      const next = this.pending;
      this.pending = null;
      this.flush(next);
    }
  }

  // Devolve os dados da conta se forem mais completos que os locais, senão null
  async connectRemote(local) {
    try {
      if (!window.claude?.use) return null;
      const [db, user] = await Promise.all([claude.use("db"), claude.use("user")]);
      if (!db || !user) return null;
      const id = await user.id();
      if (!id) return null;
      this.remote = db.collection("data/users/" + id).doc("progress");
      this.label = "Progresso guardado na tua conta";
      const snap = await this.remote.get();
      const size = d => Object.keys(d?.words || {}).length + (d?.tests || []).length + (d?.rounds || []).length;
      if (snap.exists && size(snap.data()) >= size(local)) return snap.data();
      if (size(local)) this.flush(local);
      return null;
    } catch (e) {
      return null;
    }
  }
}
