// Mensagem curta no fundo do ecrã
class Toast {
  constructor(el) {
    this.el = el;
    this.timer = null;
  }

  show(msg) {
    this.el.textContent = msg;
    this.el.hidden = false;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => (this.el.hidden = true), 2600);
  }
}

// Animação de festa quando a sequência de dias seguidos sobe
class Celebration {
  static MILESTONES = { 3: "Três dias seguidos!", 7: "Uma semana inteira!", 14: "Duas semanas!", 30: "Um mês sem falhar!", 100: "Cem dias! Lendário!" };

  // Papelinhos a cair (usados na festa da sequência e na da lição concluída)
  static confetti() {
    const colors = ["#F5A524", "#E5484D", "#2F6FED", "#12A594", "#8E4EC6", "#D6409F"];
    return Array.from({ length: 36 }, (_, i) =>
      `<i style="left:${Math.round(Math.random() * 100)}%;background:${colors[i % colors.length]};animation-delay:${(Math.random() * 0.6).toFixed(2)}s;animation-duration:${(1.8 + Math.random() * 1.4).toFixed(2)}s;--dx:${Math.round(Math.random() * 120 - 60)}px"></i>`).join("");
  }

  static streak(days) {
    document.getElementById("streakfx")?.remove();
    const bits = Celebration.confetti();
    const el = document.createElement("div");
    el.id = "streakfx";
    el.className = "streakfx";
    el.setAttribute("role", "status");
    el.innerHTML = `${bits}<div class="sbox"><div class="sflame" aria-hidden="true">🔥</div>
      <div class="snum">${days}</div><div class="slabel">${days === 1 ? "dia seguido" : "dias seguidos"}</div>
      <div class="smsg">${Celebration.MILESTONES[days] || "Meta de hoje cumprida! Continua assim."}</div></div>`;
    el.addEventListener("click", () => el.remove());
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3800);
  }

  // Lição concluída (9/9): festa com o número e o tema em grande. Espera que a festa da sequência acabe
  static lesson(theme) {
    if (document.getElementById("streakfx")) return void setTimeout(() => Celebration.lesson(theme), 1000);
    document.getElementById("lessonfx")?.remove();
    const el = document.createElement("div");
    el.id = "lessonfx";
    el.className = "streakfx";
    el.setAttribute("role", "status");
    el.innerHTML = `${Celebration.confetti()}<div class="sbox"><div class="sflame" aria-hidden="true">🏆</div>
      <div class="slabel">Parabéns!</div>
      <div class="smsg">Completaste a lição ${theme.number}</div>
      <div class="snum ltitle">${Utils.esc(theme.pt)}</div></div>`;
    el.addEventListener("click", () => el.remove());
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4500);
  }

  // Missão cumprida: cartão ao meio do ecrã, mais discreto que a festa da sequência.
  // Se a festa da sequência estiver a decorrer, espera que acabe para não se taparem
  static missions(list) {
    if (document.getElementById("streakfx")) return void setTimeout(() => Celebration.missions(list), 1000);
    document.getElementById("missionfx")?.remove();
    const el = document.createElement("div");
    el.id = "missionfx";
    el.className = "missionfx";
    el.setAttribute("role", "status");
    el.innerHTML = `<div class="mbox"><div class="mico" aria-hidden="true">🎯</div>
      <div class="mtitle">${list.length === 1 ? "Missão cumprida!" : `${list.length} missões cumpridas!`}</div>
      ${list.map(m => `<div class="mline">${Utils.esc(m)}</div>`).join("")}</div>`;
    el.addEventListener("click", () => el.remove());
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }

  // Contador (3/9) ao meio do ecrã, sem tapar cliques, que aparece um instante depois de cada exercício
  static tick(done, goal) {
    document.getElementById("tickfx")?.remove();
    const el = document.createElement("div");
    el.id = "tickfx";
    el.className = "tickfx";
    el.setAttribute("role", "status");
    el.innerHTML = `<span aria-hidden="true">🔥</span> <b>${done}/${goal}</b>`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }
}
