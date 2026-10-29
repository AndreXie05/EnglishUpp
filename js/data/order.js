// Ordem das lições: do mais simples ao mais difícil dentro de cada nível (temas da lista A2 Key da Cambridge)
const THEME_ORDER = [
  // A1
  "greetings", "personal", "numbers", "colors", "family", "body", "body2", "clothes", "clothes2", "food", "food2", "fruitveg", "restaurant", "house", "house2", "routine", "time", "calendar", "weather", "weather2", "animals", "animals2", "city", "city2", "places", "directions", "transport", "school", "work", "feelings", "verbs",
  // A2
  "health", "health2", "shopping", "shopping2", "hobbies", "sports", "travel", "travel2", "technology", "technology2", "appliances", "professions", "countries", "people", "opposites", "services", "countryside", "entertainment", "holidays", "cooking", "housework", "banking",
  // B1
  "fashion", "fashion2", "home", "home2", "healthfit", "healthfit2", "environment", "environment2", "nature", "nature2", "media", "media2", "tech", "tech2", "career", "career2", "travelb1", "travelb1b", "foodb1", "foodb12", "leisureb1", "leisureb12", "sportb1", "sportb12", "educationb1", "educationb12", "feelingsb1", "feelingsb12", "personality", "driving", "neighbours", "phone", "opinions", "repairs", "money", "plans",
  // B2
  "society", "society2", "science", "science2", "crime", "crime2", "business", "business2", "arts", "arts2", "global", "global2", "newsb2", "newsb22", "studyb2", "studyb22", "mind", "mind2", "medicineb2", "medicine2", "cityb2", "cityb22", "familyb2", "family2", "employment", "employment2", "culture", "culture2", "social", "social2", "energy", "energy2", "trends", "causes", "housing", "nutrition", "lifestyle", "service", "mishaps", "manners",
  // C1
  "academic", "academic2", "argument", "argument2", "finance", "finance2", "law", "law2", "abstract", "abstract2", "discourse", "discourse2", "power", "power2", "sustain", "sustain2", "innovation", "innovation2", "management", "management2", "awl2", "awl2b", "research", "research2", "linguistics", "linguistics2", "ethics", "ethics2", "trade", "trade2",
  // C2
  "idioms", "idioms2", "phrasal", "phrasal2", "speech", "speech2", "literary", "literary2", "rhetoric", "rhetoric2", "colloc", "colloc2", "formal", "formal2", "nuance", "nuance2", "thought", "thought2", "animalidioms", "animalidioms2", "phrasal3", "phrasal3b", "narrative", "narrative2", "reasoning", "reasoning2", "hedging", "hedging2",
];
THEMES.sort((a, b) => THEME_ORDER.indexOf(a.id) - THEME_ORDER.indexOf(b.id));
