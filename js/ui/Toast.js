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

  static streak(days) {
    document.getElementById("streakfx")?.remove();
    const colors = ["#F5A524", "#E5484D", "#2F6FED", "#12A594", "#8E4EC6", "#D6409F"];
    const bits = Array.from({ length: 36 }, (_, i) =>
      `<i style="left:${Math.round(Math.random() * 100)}%;background:${colors[i % colors.length]};animation-delay:${(Math.random() * 0.6).toFixed(2)}s;animation-duration:${(1.8 + Math.random() * 1.4).toFixed(2)}s;--dx:${Math.round(Math.random() * 120 - 60)}px"></i>`).join("");
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
}
