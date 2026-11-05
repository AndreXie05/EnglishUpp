// IPA (americano, Cambridge US) das palavras das frases que não estão no dicionário nem se tiram de lá com as regras de SentenceIpa:
// formas irregulares, palavras funcionais (em forma fraca quando é assim que se dizem na frase) e nomes próprios.
// Usado para mostrar a pronúncia das frases e por tools/build-phrase-ipa.js.
const WORD_IPA = {
  // palavras funcionais
  to: "tə", of: "əv", for: "fɚ", you: "juː", me: "miː", up: "ʌp", off: "ɑːf", along: "əˈlɑːŋ", around: "əˈraʊnd",
  once: "wʌns", front: "frʌnt", next: "nekst", later: "ˈleɪt̬ɚ", lately: "ˈleɪtli", earlier: "ˈɝːliɚ", two: "tuː",
  // nomes próprios
  ana: "ˈɑːnə", rui: "ˈruːi", silva: "ˈsɪlvə", walker: "ˈwɑːkɚ", oxford: "ˈɑːksfɚd",
  // formas de verbos e nomes
  agreed: "əˈɡriːd", allowed: "əˈlaʊd", announced: "əˈnaʊnst", arrived: "əˈraɪvd", attached: "əˈtætʃt", beat: "biːt",
  booked: "bʊkt", bother: "ˈbɑːðɚ", brings: "brɪŋz", called: "kɑːld", calling: "ˈkɑːlɪŋ", changes: "ˈtʃeɪndʒɪz",
  check: "tʃek", closing: "ˈkloʊzɪŋ", comes: "kʌmz", coming: "ˈkʌmɪŋ", conditioning: "kənˈdɪʃənɪŋ", convinced: "kənˈvɪnst",
  cooking: "ˈkʊkɪŋ", costs: "kɑːsts", crossed: "krɑːst", depends: "dɪˈpendz", does: "dʌz", doubled: "ˈdʌbəld",
  drawing: "ˈdrɑːɪŋ", ended: "ˈendɪd", ending: "ˈendɪŋ", enjoyed: "ɪnˈdʒɔɪd", enjoys: "ɪnˈdʒɔɪz", excuse: "ɪkˈskjuːz",
  filled: "fɪld", finished: "ˈfɪnɪʃt", fitting: "ˈfɪt̬ɪŋ", get: "ɡet", getting: "ˈɡet̬ɪŋ", happened: "ˈhæpənd",
  hearing: "ˈhɪrɪŋ", hurts: "hɝːts", included: "ɪnˈkluːdɪd", increased: "ɪnˈkriːst", inviting: "ɪnˈvaɪt̬ɪŋ",
  knows: "noʊz", leaking: "ˈliːkɪŋ", learning: "ˈlɝːnɪŋ", looking: "ˈlʊkɪŋ", loves: "lʌvz", makes: "meɪks",
  meets: "miːts", moving: "ˈmuːvɪŋ", opens: "ˈoʊpənz", ordered: "ˈɔːrdɚd", passed: "pæst", pick: "pɪk",
  provided: "prəˈvaɪdɪd", raining: "ˈreɪnɪŋ", rented: "ˈrentɪd", rising: "ˈraɪzɪŋ", running: "ˈrʌnɪŋ", saves: "seɪvz",
  see: "siː", seems: "siːmz", smoking: "ˈsmoʊkɪŋ", sounds: "saʊndz", speaking: "ˈspiːkɪŋ", started: "ˈstɑːrt̬ɪd",
  stayed: "steɪd", staying: "ˈsteɪɪŋ", stop: "stɑːp", suits: "suːts", takes: "teɪks", thank: "θæŋk", thanks: "θæŋks",
  time: "taɪm", times: "taɪmz", travelling: "ˈtrævəlɪŋ", waiting: "ˈweɪt̬ɪŋ", wake: "weɪk", walking: "ˈwɑːkɪŋ",
  washing: "ˈwɑːʃɪŋ", willing: "ˈwɪlɪŋ", wondering: "ˈwʌndɚɪŋ", working: "ˈwɝːkɪŋ", works: "wɝːks", writing: "ˈraɪt̬ɪŋ",
  // plurais e outras palavras
  allergies: "ˈælɚdʒiz", apologies: "əˈpɑːlədʒiz", apples: "ˈæpəlz", approval: "əˈpruːvəl", bags: "bæɡz", bigger: "ˈbɪɡɚ",
  bills: "bɪlz", bless: "bles", brothers: "ˈbrʌðɚz", bush: "bʊʃ", carefully: "ˈkerfəli", cards: "kɑːrdz", cats: "kæts",
  centre: "ˈsent̬ɚ", cheaper: "ˈtʃiːpɚ", colleagues: "ˈkɑːliːɡz", completely: "kəmˈpliːtli", credit: "ˈkredɪt",
  differently: "ˈdɪfɚəntli", dishes: "ˈdɪʃɪz", dogs: "dɑːɡz", ears: "ɪrz", easier: "ˈiːziɚ", effects: "əˈfekts",
  entirely: "ɪnˈtaɪrli", fingers: "ˈfɪŋɡɚz", fire: "faɪr", friends: "frendz", goals: "ɡoʊlz", greatest: "ˈɡreɪt̬ɪst",
  hours: "aʊrz", information: "ˌɪnfɚˈmeɪʃən", keys: "kiːz", kilos: "ˈkiːloʊz", larger: "ˈlɑːrdʒɚ", lights: "laɪts",
  lining: "ˈlaɪnɪŋ", main: "meɪn", meals: "miːlz", measures: "ˈmeʒɚz", mountains: "ˈmaʊntənz", nearest: "ˈnɪrɪst",
  newspapers: "ˈnuːzˌpeɪpɚz", nice: "naɪs", nuts: "nʌts", personally: "ˈpɝːsənəli", pets: "pets", plans: "plænz",
  pool: "puːl", presents: "ˈprezənts", prices: "ˈpraɪsɪz", public: "ˈpʌblɪk", questions: "ˈkwestʃənz", rate: "reɪt",
  really: "ˈriːəli", regards: "rɪˈɡɑːrdz", results: "rɪˈzʌlts", rocket: "ˈrɑːkɪt", role: "roʊl", rooms: "ruːmz",
  sharply: "ˈʃɑːrpli", shoes: "ʃuːz", slide: "slaɪd", stamps: "stæmps", steps: "steps", sundays: "ˈsʌndeɪz",
  thirsty: "ˈθɝːsti", tickets: "ˈtɪkɪts", trains: "treɪnz", understanding: "ˌʌndɚˈstændɪŋ", urgently: "ˈɝːdʒəntli",
  weeks: "wiːks", years: "jɪrz",
  // formas irregulares (e as que as regras não acertam)
  says: "seɪz", houses: "ˈhaʊzɪz", heard: "hɝːd", shook: "ʃʊk", forgave: "fɚˈɡeɪv", threw: "θruː", hid: "hɪd", rang: "ræŋ",
  sang: "sæŋ", trumpet: "ˈtrʌmpət", snores: "snɔːrz", blown: "bloʊn", fought: "fɑːt", fetched: "fetʃt", flops: "flɑːps", strings: "strɪŋz", intents: "ɪnˈtents",
  buyers: "ˈbaɪɚz", spots: "spɑːts", containers: "kənˈteɪnɚz", twisters: "ˈtwɪstɚz", weeds: "wiːdz", fobbed: "fɑːbd",
  pros: "proʊz", cons: "kɑːnz", against: "əˈɡenst", grandma: "ˈɡrænmɑː", madam: "ˈmædəm", thou: "ðaʊ",
  // contracções
  "doesn't": "ˈdʌzənt", "didn't": "ˈdɪdənt", "haven't": "ˈhævənt", "couldn't": "ˈkʊdənt", "won't": "woʊnt",
  "i'm": "aɪm", "i'll": "aɪl", "we'll": "wiːl", "i'd": "aɪd", "i've": "aɪv", "you'd": "juːd", "you'll": "juːl",
  // letras e siglas
  b: "biː", c: "siː", d: "diː", s: "es", x: "eks", id: "ˌaɪˈdiː", cv: "ˌsiːˈviː", usb: "ˌjuːesˈbiː", usa: "ˌjuːesˈeɪ",
  eu: "ˌiːˈjuː", ceo: "ˌsiːiːˈoʊ", kpis: "ˌkeɪpiːˈaɪz", nasa: "ˈnæsə", sim: "sɪm", nav: "næv",
  com: "kɑːm", mail: "meɪl", eco: "ˈiːkoʊ", meta: "ˈmet̬ə", ness: "nəs", fob: "fɑːb", jumbo: "ˈdʒʌmboʊ", den: "den",
  null: "nʌl", coup: "kuː",
  // expressões latinas e francesas
  per: "pɝː", se: "seɪ", capita: "ˈkæpɪt̬ə", ipso: "ˈɪpsoʊ", facto: "ˈfæktoʊ", inter: "ˈɪnt̬ɚ", alia: "ˈeɪliə",
  medias: "ˈmiːdiæs", res: "reɪs", lingua: "ˈlɪŋɡwə", franca: "ˈfræŋkə", entendre: "ɑːnˈtɑːndrə", lieu: "ljuː",
  vis: "viːz", "à": "ɑː", "d'état": "deɪˈtɑː", pursuant: "pɚˈsuːənt", inasmuch: "ˌɪnəzˈmʌtʃ", insofar: "ˌɪnsəˈfɑːr",
  // lugares, povos e línguas
  york: "jɔːrk", cardiff: "ˈkɑːrdɪf", frankfurt: "ˈfræŋkfɝːt", tokyo: "ˈtoʊkioʊ", holland: "ˈhɑːlənd",
  highlands: "ˈhaɪləndz", ukraine: "juːˈkreɪn", chile: "ˈtʃɪli", siberia: "saɪˈbɪriə", mars: "mɑːrz",
  "brasília": "brəˈzɪliə", rua: "ˈruːə", azul: "əˈzuːl", mar: "mɑːr", asian: "ˈeɪʒən", japanese: "ˌdʒæpənˈiːz",
  scottish: "ˈskɑːt̬ɪʃ", roman: "ˈroʊmən", germanic: "dʒɚˈmænɪk", instagram: "ˈɪnstəɡræm",
  // nomes próprios
  tom: "tɑːm", pedro: "ˈpedroʊ", sofia: "səˈfiːə", maria: "məˈriːə", rita: "ˈriːt̬ə", marta: "ˈmɑːrt̬ə", clara: "ˈklɑːrə",
  costa: "ˈkɑːstə", paulo: "ˈpaʊloʊ", carlos: "ˈkɑːrloʊs", sam: "sæm", emma: "ˈemə", elena: "ˈelənə", paula: "ˈpɔːlə",
  mario: "ˈmɑːrioʊ", daniel: "ˈdænjəl", helena: "ˈhelənə", tiago: "tiˈɑːɡoʊ", joana: "ʒuˈɑːnə", "inês": "iˈneʃ",
  dias: "ˈdiːəʃ", teresa: "təˈriːzə", marco: "ˈmɑːrkoʊ", luis: "luˈiːʃ", "luís": "luˈiːʃ", leo: "ˈliːoʊ",
  tomas: "tuˈmaʃ", "tomás": "tuˈmaʃ", laura: "ˈlɔːrə", sara: "ˈsɑːrə", jorge: "ˈʒɔːrʒə", nuno: "ˈnuːnoʊ",
  lara: "ˈlɑːrə", miguel: "mɪˈɡel", eva: "ˈiːvə", max: "mæks", luna: "ˈluːnə", carla: "ˈkɑːrlə", jonas: "ˈdʒoʊnəs",
  mia: "ˈmiːə", anna: "ˈænə", santos: "ˈsæntoʊs", rocha: "ˈrɑːʃə", "joão": "ʒuˈaʊ", lucia: "ˈluːsiə",
  fernando: "fɚˈnændoʊ", pessoa: "pəˈsoʊə", daniela: "ˌdæniˈelə", fatima: "ˈfæt̬ɪmə", ricardo: "rɪˈkɑːrdoʊ",
  amara: "əˈmɑːrə", julia: "ˈdʒuːliə", juliet: "ˈdʒuːliət", mona: "ˈmoʊnə", lisa: "ˈliːsə",
  mozart: "ˈmoʊtsɑːrt", einstein: "ˈaɪnstaɪn", socrates: "ˈsɑːkrət̬iːz", sartre: "ˈsɑːrtrə", aesop: "ˈiːsɑːp",
  picasso: "pɪˈkæsoʊ", beethoven: "ˈbeɪt̬oʊvən",
  // palavras das frases soltas (looseSentences.js) que não estão no dicionário
  ability: "əˈbɪlət̬i", acclaim: "əˈkleɪm", aware: "əˈwer", bound: "baʊnd", deadlock: "ˈdedlɑːk", fascinated: "ˈfæsəneɪtɪd",
  instrumental: "ˌɪnstrəˈment̬əl", leisure: "ˈliːʒɚ", paves: "peɪvz", renew: "rɪˈnuː", tendency: "ˈtendənsi",
  uncanny: "ʌnˈkæni", verge: "vɝːdʒ", widespread: "ˌwaɪdˈspred",
};
