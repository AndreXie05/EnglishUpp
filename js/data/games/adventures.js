// Conversas e histórias com escolhas.
// Cenário: { id, level, kind: "dialogue" | "story", icon, title, intro, start, scenes }
// Cena: { who, say, pt, choices: [[inglês, português, certo?, próxima cena, comentário]] } ou { end: true, who, say, pt, title }
// "certo" quer dizer inglês correto e adequado; nas histórias pode haver várias opções certas com caminhos diferentes.
const ADVENTURES = [
  { id: "restaurant", level: "A1", kind: "dialogue", icon: "🍽️", title: "No restaurante", intro: "Chegas a um restaurante em Londres. Fala com o empregado.", start: "a", scenes: {
    a: { who: "Waiter", say: "Good evening! How many people?", pt: "Boa noite! Quantas pessoas?", choices: [
      ["A table for two, please.", "Uma mesa para dois, por favor.", true, "b", "Perfeito: educado e claro."],
      ["I am two table.", "", false, "b", "Diz-se “a table for two”. “I am” não serve para pedir uma mesa."],
      ["Two people table.", "", false, "b", "A frase natural é “A table for two, please.”"]] },
    b: { who: "Waiter", say: "Here is the menu. What would you like to drink?", pt: "Aqui está o menu. O que quer beber?", choices: [
      ["I would like some water, please.", "Queria água, por favor.", true, "c", "Muito bem: “I would like” é educado."],
      ["I want water now.", "", false, "c", "Percebe-se, mas “I want… now” soa mal-educado. Melhor: “I would like…”."],
      ["Water I like.", "", false, "c", "A ordem está errada: “I would like some water.”"]] },
    c: { who: "Waiter", say: "Are you ready to order?", pt: "Já quer pedir?", choices: [
      ["Yes, I'll have the chicken and chips.", "Sim, vou comer o frango com batatas fritas.", true, "d", "Boa! “I'll have…” é a forma normal de pedir."],
      ["Yes, I eat chicken.", "", false, "d", "Para pedir, diz-se “I'll have the chicken.”"],
      ["No, I am a chicken.", "", false, "d", "Haha! Isso quer dizer que és uma galinha. Diz “I'll have the chicken”."]] },
    d: { who: "Waiter", say: "Here you are. Enjoy your meal!", pt: "Aqui tem. Bom apetite!", choices: [
      ["Thank you very much!", "Muito obrigado!", true, "e", "Simpático e correto."],
      ["You are welcome.", "", false, "e", "“You are welcome” responde a um obrigado; aqui és tu quem agradece."],
      ["Goodbye!", "", false, "e", "Ainda vais comer! Diz “Thank you”."]] },
    e: { who: "Waiter", say: "Would you like anything else?", pt: "Deseja mais alguma coisa?", choices: [
      ["Just the bill, please.", "Só a conta, por favor.", true, "end", "Exato: “the bill” é a conta."],
      ["The money, please.", "", false, "end", "Em inglês pede-se “the bill” (a conta)."],
      ["Give me paper.", "", false, "end", "Soa estranho. Diz “The bill, please.”"]] },
    end: { end: true, who: "Waiter", title: "Jantar terminado!", say: "Of course. Have a nice evening!", pt: "Claro. Tenha uma boa noite!" } } },

  { id: "airport", level: "A2", kind: "dialogue", icon: "✈️", title: "No aeroporto", intro: "Estás no balcão de check-in. Tens um voo para Lisboa.", start: "a", scenes: {
    a: { who: "Agent", say: "Hello. Can I see your passport, please?", pt: "Olá. Posso ver o seu passaporte, por favor?", choices: [
      ["Here you are.", "Aqui tem.", true, "b", "É a resposta normal quando entregas algo."],
      ["I have it not.", "", false, "b", "A negação certa seria “I don't have it”. Mas aqui basta “Here you are.”"],
      ["Passport is mine.", "", false, "b", "Diz simplesmente “Here you are.”"]] },
    b: { who: "Agent", say: "Do you have any bags to check in?", pt: "Tem malas para despachar?", choices: [
      ["Yes, I have one suitcase.", "Sim, tenho uma mala.", true, "c", "Correto: “one suitcase” e o verbo “have”."],
      ["Yes, I has one suitcase.", "", false, "c", "Com “I” usa-se “have”, não “has”."],
      ["Yes, I have one suitcases.", "", false, "c", "Com “one” o nome fica no singular: “one suitcase”."]] },
    c: { who: "Agent", say: "Would you like a window seat or an aisle seat?", pt: "Prefere um lugar à janela ou no corredor?", choices: [
      ["A window seat, please.", "À janela, por favor.", true, "d", "Boa escolha para ver as nuvens!"],
      ["I prefer window seat of.", "", false, "d", "Diz “I'd prefer a window seat.”"],
      ["Seat window.", "", false, "d", "Em inglês a ordem é “window seat”, com “a” antes."]] },
    d: { who: "Agent", say: "Your flight leaves from gate 12 at ten fifteen. Boarding starts at nine forty-five.", pt: "O seu voo parte da porta 12 às dez e quinze. O embarque começa às nove e quarenta e cinco.", choices: [
      ["Sorry, which gate is it?", "Desculpe, qual é a porta?", true, "e", "Boa: pedir para repetir é normal."],
      ["What you said?", "", false, "e", "Diz “Sorry, could you repeat that?”"],
      ["I no understand.", "", false, "e", "Diz “I don't understand.”"]] },
    e: { who: "Agent", say: "Gate twelve. Here is your boarding pass. Have a nice flight!", pt: "Porta doze. Aqui está o seu cartão de embarque. Boa viagem!", choices: [
      ["Thank you. Goodbye!", "Obrigado. Adeus!", true, "end", "Despedida simpática."],
      ["Thanks you, bye bye.", "", false, "end", "É “Thank you” ou “Thanks”, não “thanks you”."],
      ["I am go now.", "", false, "end", "Diz “I'm going now” ou apenas “Goodbye!”."]] },
    end: { end: true, who: "Agent", title: "Já tens o cartão de embarque!", say: "Next, please!", pt: "O seguinte, por favor!" } } },

  { id: "interview", level: "B1", kind: "dialogue", icon: "💼", title: "Entrevista de emprego", intro: "Tens uma entrevista numa empresa em Manchester. Responde com confiança.", start: "a", scenes: {
    a: { who: "Interviewer", say: "Thank you for coming. Could you tell me a little about yourself?", pt: "Obrigada por ter vindo. Pode falar-me um pouco de si?", choices: [
      ["I'm a hard-working person, and I've studied marketing for three years.", "Sou uma pessoa trabalhadora e estudei marketing durante três anos.", true, "b", "Boa resposta: presente + present perfect."],
      ["I am work hard and I study marketing since three years.", "", false, "b", "Melhor: “I work hard” e “I've studied… for three years” (com “for”, não “since”)."],
      ["Me is a student.", "", false, "b", "Diz “I'm a student.” (“Me” não é sujeito)."]] },
    b: { who: "Interviewer", say: "Why do you want to work for our company?", pt: "Porque quer trabalhar na nossa empresa?", choices: [
      ["I admire your projects, and I'd like to learn from your team.", "Admiro os vossos projetos e gostava de aprender com a vossa equipa.", true, "c", "Educada e profissional."],
      ["Because I need money.", "", false, "c", "É verdade para muitos, mas numa entrevista soa pouco motivado."],
      ["I want that job because it is good.", "", false, "c", "Melhor: “I want this job because…” e explicar o motivo."]] },
    c: { who: "Interviewer", say: "What is your biggest strength?", pt: "Qual é o seu maior ponto forte?", choices: [
      ["I'm very organised, and I always meet deadlines.", "Sou muito organizado e cumpro sempre os prazos.", true, "d", "“Meet deadlines” é a expressão certa."],
      ["I am organise and I meeting deadlines.", "", false, "d", "Diz “organised” e “I meet deadlines”."],
      ["My strength is strong.", "", false, "d", "Evita repetir a palavra; dá um exemplo, como “I'm very organised.”"]] },
    d: { who: "Interviewer", say: "Can you tell me about a time you solved a problem at work or school?", pt: "Pode contar-me uma vez em que resolveu um problema no trabalho ou na escola?", choices: [
      ["Last year, our group project was late, so I made a new plan and we finished on time.", "No ano passado o nosso trabalho de grupo estava atrasado, por isso fiz um novo plano e acabámos a tempo.", true, "e", "Passado simples bem usado."],
      ["Last year I make a plan and we finish.", "", false, "e", "Para o passado: “I made a plan and we finished”."],
      ["I never have problems.", "", false, "e", "Pouco credível. Melhor mostrar como resolves problemas."]] },
    e: { who: "Interviewer", say: "Do you have any questions for us?", pt: "Tem alguma pergunta para nós?", choices: [
      ["Yes. What would my first month look like?", "Sim. Como seria o meu primeiro mês?", true, "end", "Mostra interesse."],
      ["No, I know nothing and I don't care.", "", false, "end", "Dá má impressão: mostra desinteresse."],
      ["How much money I will win?", "", false, "end", "É melhor falar de salário mais tarde, e a frase certa seria “How much will I earn?”"]] },
    end: { end: true, who: "Interviewer", title: "Entrevista concluída!", say: "Thank you. We'll contact you by the end of the week.", pt: "Obrigada. Contactamos até ao fim da semana." } } },

  { id: "lostwallet", level: "A2", kind: "story", icon: "👛", title: "A carteira perdida", intro: "Encontras uma carteira na rua. O que vais fazer? As tuas escolhas mudam o final.", start: "a", scenes: {
    a: { who: "Narrator", say: "You are walking home when you see a brown wallet on the pavement.", pt: "Ias a andar para casa quando vês uma carteira castanha no passeio.", choices: [
      ["I pick it up and look inside.", "Apanho-a e espreito lá dentro.", true, "b", "Boa decisão: assim podes descobrir de quem é."],
      ["I leave it and walk away.", "Deixo-a e vou-me embora.", true, "c", "Podes escolher assim, mas alguém perdeu a carteira…"],
      ["I picks it up.", "", false, "b", "Com “I” usa-se “pick”, sem -s: “I pick it up”."]] },
    b: { who: "Narrator", say: "Inside there is some money and an ID card. The woman on the card is called Emma.", pt: "Lá dentro há dinheiro e um cartão de identificação. A mulher do cartão chama-se Emma.", choices: [
      ["I take it to the police station.", "Levo-a à esquadra.", true, "d", "Seguro e correto."],
      ["I look for Emma's address on the card.", "Procuro a morada da Emma no cartão.", true, "e", "Pode ser rápido, mas é preciso ter cuidado."],
      ["I keep the money.", "Fico com o dinheiro.", true, "f", "Esta escolha tem consequências…"]] },
    c: { who: "Narrator", say: "Ten minutes later, you hear a woman shouting: “My wallet! Has anyone seen my wallet?”", pt: "Dez minutos depois ouves uma mulher a gritar: «A minha carteira! Alguém viu a minha carteira?»", choices: [
      ["I go back and give it to her.", "Volto atrás e dou-lha.", true, "g", "Nunca é tarde para fazer o certo."],
      ["I pretend I didn't see anything.", "Finjo que não vi nada.", true, "f", "A consciência pesa…"]] },
    d: { who: "Police officer", say: "Thank you for bringing this in. What is your name?", pt: "Obrigado por trazer isto. Como se chama?", choices: [
      ["My name is Ana, and I found it on Park Street.", "Chamo-me Ana e encontrei-a na Park Street.", true, "g", "Boa frase completa."],
      ["Ana is my name and I finded it in Park Street.", "", false, "g", "O passado de “find” é “found”. E diz-se “on Park Street”."]] },
    e: { who: "Narrator", say: "You arrive at Emma's door. She opens it, surprised.", pt: "Chegas à porta da Emma. Ela abre, surpreendida.", choices: [
      ["Hello! I think this is yours.", "Olá! Acho que isto é seu.", true, "g", "Simples e simpático."],
      ["Hello! This is you wallet.", "", false, "g", "Diz “your wallet” (de ti), não “you”."]] },
    f: { who: "Narrator", say: "All week you feel guilty. You can't sleep, and you can't enjoy the money.", pt: "Durante toda a semana sentes-te culpado. Não consegues dormir nem aproveitar o dinheiro.", choices: [
      ["I decide to find Emma and return it.", "Decido encontrar a Emma e devolver tudo.", true, "g", "Nunca é tarde para corrigir."],
      ["I give the money to a charity.", "Dou o dinheiro a uma associação.", true, "h", "Uma saída possível, mas a Emma continua sem a carteira."]] },
    g: { end: true, who: "Emma", title: "Final feliz!", say: "Oh, thank you so much! You are very kind. Let me buy you a coffee!", pt: "Oh, muito obrigada! É muito simpático. Deixe-me pagar-lhe um café!" },
    h: { end: true, who: "Narrator", title: "Final agridoce", say: "You feel a little better, but you still think about Emma and her wallet.", pt: "Sentes-te um pouco melhor, mas continuas a pensar na Emma e na carteira." } } },

  { id: "invitation", level: "B1", kind: "story", icon: "💌", title: "O convite misterioso", intro: "Recebes um convite estranho. Vais ou não? Escolhe com atenção.", start: "a", scenes: {
    a: { who: "Narrator", say: "An envelope arrives with no stamp. Inside, a card says: “Come to the old library at midnight. Tell no one.”", pt: "Chega um envelope sem selo. Lá dentro um cartão diz: «Venha à biblioteca antiga à meia-noite. Não diga a ninguém.»", choices: [
      ["I decide to go, but I tell my best friend first.", "Decido ir, mas primeiro conto à minha melhor amiga.", true, "b", "Prudente e bem escrito."],
      ["I throw the card away and forget about it.", "Deito o cartão fora e esqueço o assunto.", true, "c", "Também é uma opção segura."],
      ["I will to go to the library.", "", false, "b", "Diz “I will go” ou “I'm going to go”."]] },
    b: { who: "Narrator", say: "At midnight you and your friend, Leo, reach the library. The door is open and a light is on upstairs.", pt: "À meia-noite tu e o teu amigo Leo chegam à biblioteca. A porta está aberta e há uma luz acesa no andar de cima.", choices: [
      ["We walk upstairs slowly and quietly.", "Subimos devagar e em silêncio.", true, "d", "Os advérbios fazem a frase soar natural."],
      ["We call out: “Is anybody there?”", "Chamamos: «Está alguém aí?»", true, "e", "Direto e corajoso!"],
      ["We walks upstairs.", "", false, "d", "Com “we” usa-se “walk”, sem -s."]] },
    c: { who: "Narrator", say: "The next morning, a friend tells you about a surprise party at the old library. Everyone was there except you.", pt: "Na manhã seguinte, uma amiga conta-te que houve uma festa surpresa na biblioteca antiga. Estavam todos lá menos tu.", choices: [
      ["I laugh and say: “Next time, I'll go!”", "Rio-me e digo: «Da próxima vez, eu vou!»", true, "end2", "Bom humor e bom uso do futuro."],
      ["I feel angry and say nothing.", "Fico zangado e não digo nada.", true, "end2", "Compreensível, mas perdeste uma festa…"]] },
    d: { who: "Narrator", say: "In the room there is a table with a cake and a sign: “Happy birthday!” Your family comes out from behind the door.", pt: "Na sala há uma mesa com um bolo e um cartaz: «Feliz aniversário!» A tua família sai de detrás da porta.", choices: [
      ["I say: “You surprised me! Thank you so much!”", "Digo: «Surpreenderam-me! Muito obrigado!»", true, "end1", "Passado simples correto."],
      ["I say: “You surprise me! Thanks you!”", "", false, "end1", "Já aconteceu, por isso: “You surprised me! Thank you!”"]] },
    e: { who: "Voice", say: "Surprise! Happy birthday! Did you think we forgot?", pt: "Surpresa! Feliz aniversário! Pensaste que nos tínhamos esquecido?", choices: [
      ["Yes, I really thought you had forgotten!", "Sim, pensei mesmo que se tinham esquecido!", true, "end1", "Passado perfeito usado com naturalidade."],
      ["Yes, I think you forgot me.", "", false, "end1", "Era um pensamento no passado: “I thought you had forgotten.”"]] },
    end1: { end: true, who: "Narrator", title: "Uma festa de sonho!", say: "It was the best birthday ever. Everyone sang, and you made a wish.", pt: "Foi o melhor aniversário de sempre. Todos cantaram e fizeste um desejo." },
    end2: { end: true, who: "Narrator", title: "Perdeste a festa", say: "At least you learned something: sometimes a mystery is just a surprise.", pt: "Pelo menos aprendeste algo: às vezes um mistério é só uma surpresa." } } },

  { id: "lostcity", level: "A1", kind: "story", icon: "🧭", title: "Perdido na cidade", intro: "Estás perdido numa cidade nova e tens de chegar à estação.", start: "a", scenes: {
    a: { who: "Narrator", say: "You are in a new city. You want to go to the train station, but you don't know where it is.", pt: "Estás numa cidade nova. Queres ir à estação de comboios, mas não sabes onde fica.", choices: [
      ["Excuse me, where is the train station?", "Com licença, onde fica a estação de comboios?", true, "b", "Educado e claro."],
      ["Where train station is?", "", false, "b", "A ordem certa é “Where is the train station?”"],
      ["I look at the map on my phone.", "Olho para o mapa no telemóvel.", true, "c", "Também funciona!"]] },
    b: { who: "Woman", say: "Go straight on, then turn left at the bank.", pt: "Siga em frente e depois vire à esquerda no banco.", choices: [
      ["Thank you! Is it far?", "Obrigado! É longe?", true, "d", "Boa pergunta de seguimento."],
      ["Thank you! It is far?", "", false, "d", "Nas perguntas, o verbo vem primeiro: “Is it far?”"]] },
    c: { who: "Narrator", say: "Your phone battery is dead. You look around and see a small café.", pt: "O telemóvel ficou sem bateria. Olhas à volta e vês um café pequeno.", choices: [
      ["I go into the café and ask for help.", "Entro no café e peço ajuda.", true, "b", "Boa ideia."],
      ["I keep walking and hope for the best.", "Continuo a andar e espero que corra bem.", true, "e", "Arriscado…"]] },
    d: { who: "Woman", say: "No, it's about five minutes on foot.", pt: "Não, são cerca de cinco minutos a pé.", choices: [
      ["Great! Thanks for your help.", "Ótimo! Obrigado pela ajuda.", true, "end1", "“Thanks for your help” é uma frase muito útil."],
      ["Great! Thanks to your helps.", "", false, "end1", "“Help” aqui não leva -s: “Thanks for your help.”"]] },
    e: { who: "Narrator", say: "After twenty minutes you are tired and hungry. You pass the same bank for the third time.", pt: "Passados vinte minutos estás cansado e com fome. Passas pelo mesmo banco pela terceira vez.", choices: [
      ["I stop and ask a policeman: “Excuse me, can you help me?”", "Paro e pergunto a um polícia: «Com licença, pode ajudar-me?»", true, "end2", "Finalmente a decisão certa!"],
      ["I sit down and eat a sandwich.", "Sento-me e como uma sanduíche.", true, "end2", "Uma pausa também ajuda."]] },
    end1: { end: true, who: "Narrator", title: "Chegaste a tempo!", say: "You arrive at the station and catch your train. Well done!", pt: "Chegas à estação e apanhas o comboio. Muito bem!" },
    end2: { end: true, who: "Narrator", title: "Chegaste… mas atrasado", say: "You find the station, but your train just left. The next one is in an hour.", pt: "Encontras a estação, mas o teu comboio acabou de partir. O próximo é daqui a uma hora." } } },
];
