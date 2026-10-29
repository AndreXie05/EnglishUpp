// Palavra → emoji, para o jogo "Adivinha a imagem". Só entram nomes concretos com um emoji claro.
const EMOJI = {
  cat: "🐱", dog: "🐶", horse: "🐴", cow: "🐮", pig: "🐷", sheep: "🐑", duck: "🦆", chicken: "🐔", rabbit: "🐰", mouse: "🐭",
  bird: "🐦", fish: "🐟", whale: "🐳", shark: "🦈", snake: "🐍", frog: "🐸", bear: "🐻", lion: "🦁", tiger: "🐯", monkey: "🐵",
  elephant: "🐘", giraffe: "🦒", zebra: "🦓", wolf: "🐺", fox: "🦊", owl: "🦉", butterfly: "🦋", bee: "🐝", spider: "🕷️", ant: "🐜",
  turtle: "🐢", crab: "🦀", octopus: "🐙", dolphin: "🐬", penguin: "🐧", camel: "🐪", deer: "🦌", goat: "🐐",
  apple: "🍎", banana: "🍌", lemon: "🍋", grape: "🍇", strawberry: "🍓", pear: "🍐", peach: "🍑", cherry: "🍒",
  watermelon: "🍉", pineapple: "🍍", coconut: "🥥", tomato: "🍅", potato: "🥔", carrot: "🥕", corn: "🌽", onion: "🧅", garlic: "🧄",
  mushroom: "🍄", bread: "🍞", cheese: "🧀", egg: "🥚", milk: "🥛", pizza: "🍕", hamburger: "🍔", sandwich: "🥪", cake: "🍰",
  cookie: "🍪", chocolate: "🍫", candy: "🍬", coffee: "☕", tea: "🍵", beer: "🍺", wine: "🍷", rice: "🍚", soup: "🍲", salad: "🥗",
  meat: "🥩", bacon: "🥓", honey: "🍯", salt: "🧂",
  house: "🏠", school: "🏫", hospital: "🏥", bank: "🏦", hotel: "🏨", church: "⛪", castle: "🏰", tent: "⛺", bridge: "🌉", factory: "🏭",
  car: "🚗", bus: "🚌", train: "🚆", plane: "✈️", ship: "🚢", boat: "⛵", bicycle: "🚲", taxi: "🚕", truck: "🚚", motorcycle: "🏍️",
  helicopter: "🚁", rocket: "🚀",
  sun: "☀️", moon: "🌙", star: "⭐", rain: "🌧️", snow: "❄️", rainbow: "🌈", fire: "🔥", tree: "🌳", flower: "🌷", rose: "🌹",
  mountain: "⛰️", volcano: "🌋", beach: "🏖️", island: "🏝️", earth: "🌍", wave: "🌊", leaf: "🍃", cactus: "🌵",
  book: "📖", pen: "🖊️", pencil: "✏️", scissors: "✂️", key: "🔑", lock: "🔒", clock: "🕐", phone: "📱", computer: "💻", camera: "📷",
  television: "📺", radio: "📻", umbrella: "☂️", bag: "👜", suitcase: "🧳", glasses: "👓", hat: "👒", shoe: "👟", boot: "🥾", sock: "🧦",
  dress: "👗", shirt: "👕", jeans: "👖", coat: "🧥", scarf: "🧣", gloves: "🧤", ring: "💍", crown: "👑",
  money: "💰", gift: "🎁", balloon: "🎈", candle: "🕯️", bell: "🔔", flag: "🚩", medal: "🏅", trophy: "🏆", football: "⚽", basketball: "🏀",
  tennis: "🎾", guitar: "🎸", piano: "🎹", drum: "🥁", violin: "🎻", trumpet: "🎺", microphone: "🎤", headphones: "🎧",
  bed: "🛏️", chair: "🪑", door: "🚪", toilet: "🚽", shower: "🚿", bath: "🛁",
  hammer: "🔨", knife: "🔪", spoon: "🥄", tooth: "🦷", eye: "👁️", ear: "👂", nose: "👃", mouth: "👄", hand: "✋", foot: "🦶",
  leg: "🦵", brain: "🧠", heart: "❤️", bone: "🦴", baby: "👶", king: "🤴", queen: "👸", police: "👮", ghost: "👻", robot: "🤖",
  alien: "👽", angel: "👼", envelope: "✉️", battery: "🔋", magnet: "🧲", bomb: "💣", map: "🗺️", ladder: "🪜", ticket: "🎫",
  medicine: "💊", thermometer: "🌡️", microscope: "🔬", telescope: "🔭", calendar: "📅", newspaper: "📰", dice: "🎲", puzzle: "🧩",
};

// Palavras que não podem aparecer juntas nas opções, porque o mesmo emoji podia ser qualquer uma delas
const EMOJI_CLASH = [
  ["ship", "boat"], ["car", "taxi", "truck", "bus"], ["bicycle", "motorcycle"], ["plane", "helicopter", "rocket"],
  ["coffee", "tea", "milk"], ["beer", "wine"], ["flower", "rose", "leaf", "tree"], ["moon", "star", "sun"], ["house", "castle", "hotel"],
  ["bread", "sandwich", "hamburger", "pizza"], ["cake", "cookie", "chocolate", "candy"], ["bank", "money"], ["cat", "tiger", "lion"],
  ["dog", "wolf", "fox"], ["fish", "whale", "shark", "dolphin"], ["phone", "computer", "television", "radio"], ["glasses", "eye"],
  ["king", "queen", "crown"], ["hat", "crown"], ["rain", "umbrella"], ["pen", "pencil"], ["bone", "brain", "tooth"],
  ["boot", "shoe", "sock"], ["gift", "balloon"], ["bell", "candle"], ["soup", "rice", "salad", "meat"], ["watermelon", "apple", "pear", "peach", "cherry"],
  ["horse", "deer", "goat", "camel", "cow", "sheep"], ["mouse", "rabbit"], ["duck", "chicken", "bird", "owl", "penguin"], ["snake", "turtle", "frog"],
  ["bee", "ant", "spider", "butterfly"], ["hand", "foot", "leg"], ["door", "lock", "key"], ["ghost", "alien", "robot", "angel"],
];
