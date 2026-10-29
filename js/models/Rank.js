// Títulos do jogador: mudam de dois em dois níveis
class Rank {
  static TITLES = ["Principiante", "Curioso", "Aprendiz", "Explorador", "Falante", "Viajante", "Comunicador", "Fluente", "Mestre das palavras", "Sábio", "Lenda"];

  static title(level) {
    return Rank.TITLES[Math.min(Math.floor((level - 1) / 2), Rank.TITLES.length - 1)];
  }
}
