// IPA (britânico) das palavras das frases que não estão no dicionário nem se tiram de lá com as regras de SentenceIpa:
// formas irregulares, palavras funcionais (em forma fraca quando é assim que se dizem na frase) e nomes próprios.
// Usado para mostrar a pronúncia das frases e por tools/build-phrase-ipa.js.
const WORD_IPA = {
  // palavras funcionais
  to: "tə", of: "əv", for: "fə", you: "juː", me: "miː", up: "ʌp", off: "ɒf", along: "əˈlɒŋ", around: "əˈraʊnd",
  once: "wʌns", front: "frʌnt", next: "nekst", later: "ˈleɪtə", lately: "ˈleɪtli", earlier: "ˈɜːliə", two: "tuː",
  // nomes próprios
  ana: "ˈɑːnə", rui: "ˈruːi", silva: "ˈsɪlvə", walker: "ˈwɔːkə", oxford: "ˈɒksfəd",
  // formas de verbos e nomes
  agreed: "əˈɡriːd", allowed: "əˈlaʊd", announced: "əˈnaʊnst", arrived: "əˈraɪvd", attached: "əˈtætʃt", beat: "biːt",
  booked: "bʊkt", bother: "ˈbɒðə", brings: "brɪŋz", called: "kɔːld", calling: "ˈkɔːlɪŋ", changes: "ˈtʃeɪndʒɪz",
  check: "tʃek", closing: "ˈkləʊzɪŋ", comes: "kʌmz", coming: "ˈkʌmɪŋ", conditioning: "kənˈdɪʃənɪŋ", convinced: "kənˈvɪnst",
  cooking: "ˈkʊkɪŋ", costs: "kɒsts", crossed: "krɒst", depends: "dɪˈpendz", does: "dʌz", doubled: "ˈdʌbld",
  drawing: "ˈdrɔːɪŋ", ended: "ˈendɪd", ending: "ˈendɪŋ", enjoyed: "ɪnˈdʒɔɪd", enjoys: "ɪnˈdʒɔɪz", excuse: "ɪkˈskjuːz",
  filled: "fɪld", finished: "ˈfɪnɪʃt", fitting: "ˈfɪtɪŋ", get: "ɡet", getting: "ˈɡetɪŋ", happened: "ˈhæpənd",
  hearing: "ˈhɪərɪŋ", hurts: "hɜːts", included: "ɪnˈkluːdɪd", increased: "ɪnˈkriːst", inviting: "ɪnˈvaɪtɪŋ",
  knows: "nəʊz", leaking: "ˈliːkɪŋ", learning: "ˈlɜːnɪŋ", looking: "ˈlʊkɪŋ", loves: "lʌvz", makes: "meɪks",
  meets: "miːts", moving: "ˈmuːvɪŋ", opens: "ˈəʊpənz", ordered: "ˈɔːdəd", passed: "pɑːst", pick: "pɪk",
  provided: "prəˈvaɪdɪd", raining: "ˈreɪnɪŋ", rented: "ˈrentɪd", rising: "ˈraɪzɪŋ", running: "ˈrʌnɪŋ", saves: "seɪvz",
  see: "siː", seems: "siːmz", smoking: "ˈsməʊkɪŋ", sounds: "saʊndz", speaking: "ˈspiːkɪŋ", started: "ˈstɑːtɪd",
  stayed: "steɪd", staying: "ˈsteɪɪŋ", stop: "stɒp", suits: "suːts", takes: "teɪks", thank: "θæŋk", thanks: "θæŋks",
  time: "taɪm", times: "taɪmz", travelling: "ˈtrævəlɪŋ", waiting: "ˈweɪtɪŋ", wake: "weɪk", walking: "ˈwɔːkɪŋ",
  washing: "ˈwɒʃɪŋ", willing: "ˈwɪlɪŋ", wondering: "ˈwʌndərɪŋ", working: "ˈwɜːkɪŋ", works: "wɜːks", writing: "ˈraɪtɪŋ",
  // plurais e outras palavras
  allergies: "ˈælədʒiz", apologies: "əˈpɒlədʒiz", apples: "ˈæplz", approval: "əˈpruːvl", bags: "bæɡz", bigger: "ˈbɪɡə",
  bills: "bɪlz", bless: "bles", brothers: "ˈbrʌðəz", bush: "bʊʃ", carefully: "ˈkeəfəli", cards: "kɑːdz", cats: "kæts",
  centre: "ˈsentə", cheaper: "ˈtʃiːpə", colleagues: "ˈkɒliːɡz", completely: "kəmˈpliːtli", credit: "ˈkredɪt",
  differently: "ˈdɪfrəntli", dishes: "ˈdɪʃɪz", dogs: "dɒɡz", ears: "ɪəz", easier: "ˈiːziə", effects: "ɪˈfekts",
  entirely: "ɪnˈtaɪəli", fingers: "ˈfɪŋɡəz", fire: "ˈfaɪə", friends: "frendz", goals: "ɡəʊlz", greatest: "ˈɡreɪtɪst",
  hours: "ˈaʊəz", information: "ˌɪnfəˈmeɪʃn", keys: "kiːz", kilos: "ˈkiːləʊz", larger: "ˈlɑːdʒə", lights: "laɪts",
  lining: "ˈlaɪnɪŋ", main: "meɪn", meals: "miːlz", measures: "ˈmeʒəz", mountains: "ˈmaʊntɪnz", nearest: "ˈnɪərɪst",
  newspapers: "ˈnjuːzpeɪpəz", nice: "naɪs", nuts: "nʌts", personally: "ˈpɜːsənəli", pets: "pets", plans: "plænz",
  pool: "puːl", presents: "ˈpreznts", prices: "ˈpraɪsɪz", public: "ˈpʌblɪk", questions: "ˈkwestʃənz", rate: "reɪt",
  really: "ˈrɪəli", regards: "rɪˈɡɑːdz", results: "rɪˈzʌlts", rocket: "ˈrɒkɪt", role: "rəʊl", rooms: "ruːmz",
  sharply: "ˈʃɑːpli", shoes: "ʃuːz", slide: "slaɪd", stamps: "stæmps", steps: "steps", sundays: "ˈsʌndeɪz",
  thirsty: "ˈθɜːsti", tickets: "ˈtɪkɪts", trains: "treɪnz", understanding: "ˌʌndəˈstændɪŋ", urgently: "ˈɜːdʒəntli",
  weeks: "wiːks", years: "jɪəz",
  // formas irregulares (e as que as regras não acertam)
  says: "sez", houses: "ˈhaʊzɪz", heard: "hɜːd", shook: "ʃʊk", forgave: "fəˈɡeɪv", threw: "θruː", hid: "hɪd", rang: "ræŋ",
  sang: "sæŋ", trumpet: "ˈtrʌmpɪt", snores: "snɔːz", blown: "bləʊn", fought: "fɔːt", fetched: "fetʃt", flops: "flɒps", strings: "strɪŋz", intents: "ɪnˈtents",
  buyers: "ˈbaɪəz", spots: "spɒts", containers: "kənˈteɪnəz", twisters: "ˈtwɪstəz", weeds: "wiːdz", fobbed: "fɒbd",
  pros: "prəʊz", cons: "kɒnz", against: "əˈɡenst", grandma: "ˈɡrænmɑː", madam: "ˈmædəm", thou: "ðaʊ",
  // contracções
  "doesn't": "ˈdʌznt", "didn't": "ˈdɪdnt", "haven't": "ˈhævnt", "couldn't": "ˈkʊdnt", "won't": "wəʊnt",
  "i'm": "aɪm", "i'll": "aɪl", "we'll": "wiːl",
  // letras e siglas
  b: "biː", c: "siː", d: "diː", s: "es", x: "eks", id: "ˌaɪˈdiː", cv: "ˌsiːˈviː", usb: "ˌjuːesˈbiː", usa: "ˌjuːesˈeɪ",
  eu: "ˌiːˈjuː", ceo: "ˌsiːiːˈəʊ", kpis: "ˌkeɪpiːˈaɪz", nasa: "ˈnæsə", sim: "sɪm", nav: "næv",
  com: "kɒm", mail: "meɪl", eco: "ˈiːkəʊ", meta: "ˈmetə", ness: "nəs", fob: "fɒb", jumbo: "ˈdʒʌmbəʊ", den: "den",
  null: "nʌl", coup: "kuː",
  // expressões latinas e francesas
  per: "pɜː", se: "seɪ", capita: "ˈkæpɪtə", ipso: "ˈɪpsəʊ", facto: "ˈfæktəʊ", inter: "ˈɪntə", alia: "ˈeɪliə",
  medias: "ˈmiːdiæs", res: "reɪs", lingua: "ˈlɪŋɡwə", franca: "ˈfræŋkə", entendre: "ɒnˈtɒndrə", lieu: "ljuː",
  vis: "viːz", "à": "ɑː", "d'état": "deɪˈtɑː", pursuant: "pəˈsjuːənt", inasmuch: "ˌɪnəzˈmʌtʃ", insofar: "ˌɪnsəˈfɑː",
  // lugares, povos e línguas
  york: "jɔːk", cardiff: "ˈkɑːdɪf", frankfurt: "ˈfræŋkfɜːt", tokyo: "ˈtəʊkiəʊ", holland: "ˈhɒlənd",
  highlands: "ˈhaɪləndz", ukraine: "juːˈkreɪn", chile: "ˈtʃɪli", siberia: "saɪˈbɪəriə", mars: "mɑːz",
  "brasília": "brəˈzɪliə", rua: "ˈruːə", azul: "əˈzuːl", mar: "mɑː", asian: "ˈeɪʒn", japanese: "ˌdʒæpəˈniːz",
  scottish: "ˈskɒtɪʃ", roman: "ˈrəʊmən", germanic: "dʒɜːˈmænɪk", instagram: "ˈɪnstəɡræm",
  // nomes próprios
  tom: "tɒm", pedro: "ˈpedrəʊ", sofia: "səˈfiːə", maria: "məˈriːə", rita: "ˈriːtə", marta: "ˈmɑːtə", clara: "ˈklɑːrə",
  costa: "ˈkɒstə", paulo: "ˈpaʊləʊ", carlos: "ˈkɑːlɒs", sam: "sæm", emma: "ˈemə", elena: "ˈelənə", paula: "ˈpɔːlə",
  mario: "ˈmæriəʊ", daniel: "ˈdænjəl", helena: "ˈhelənə", tiago: "tiˈɑːɡəʊ", joana: "ʒuˈɑːnə", "inês": "iˈneʃ",
  dias: "ˈdiːəʃ", teresa: "təˈriːzə", marco: "ˈmɑːkəʊ", luis: "luˈiːʃ", "luís": "luˈiːʃ", leo: "ˈliːəʊ",
  tomas: "tuˈmaʃ", "tomás": "tuˈmaʃ", laura: "ˈlɔːrə", sara: "ˈsɑːrə", jorge: "ˈʒɔːʒə", nuno: "ˈnuːnəʊ",
  lara: "ˈlɑːrə", miguel: "mɪˈɡel", eva: "ˈiːvə", max: "mæks", luna: "ˈluːnə", carla: "ˈkɑːlə", jonas: "ˈdʒəʊnəs",
  mia: "ˈmiːə", anna: "ˈænə", santos: "ˈsæntɒs", rocha: "ˈrɒʃə", "joão": "ʒuˈaʊ", lucia: "ˈluːsiə",
  fernando: "fəˈnændəʊ", pessoa: "pəˈsəʊə", daniela: "ˌdæniˈelə", fatima: "ˈfætɪmə", ricardo: "rɪˈkɑːdəʊ",
  amara: "əˈmɑːrə", julia: "ˈdʒuːliə", juliet: "ˈdʒuːliət", mona: "ˈməʊnə", lisa: "ˈliːsə",
  mozart: "ˈməʊtsɑːt", einstein: "ˈaɪnstaɪn", socrates: "ˈsɒkrətiːz", sartre: "ˈsɑːtrə", aesop: "ˈiːsɒp",
  picasso: "pɪˈkæsəʊ", beethoven: "ˈbeɪtəʊvn",
};
