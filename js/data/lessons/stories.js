// Textos de leitura (200-300 palavras) com perguntas de escolha múltipla, um por lição.
const STORIES = {
 "greetings": {
  "title": "A new friend",
  "paragraphs": [
   "Hello! My name is Rui and I am from Lisbon. This morning I go to a new English class. The classroom is big and there are many students. I say, \"Good morning!\" A girl says, \"Hi! Nice to meet you. My name is Ana.\" She is from Brazil, but now she lives in Portugal. I say, \"Nice to meet you, Ana. How are you?\" She says, \"I am fine, thank you. And you?\" I say, \"I am fine, thanks. Welcome to the class!\"",
   "The teacher is a kind man. He says, \"Please sit down. Today we learn greetings.\" I do not understand one word and I say, \"Pardon? Can you say it again, please?\" The teacher is happy and he says it again, slowly. Then he asks, \"Excuse me, what is your name?\" I say, \"My name is Rui.\" Everybody smiles.",
   "After the class, Ana and I have a coffee. We talk about our families and our jobs. She says, \"See you later, Rui! Good luck with your homework!\" I say, \"Thank you, Ana. Goodbye!\" In the evening I say, \"Good night!\" to my mother. It is a good day, and I have a new friend. Tomorrow we have another class, and I want to learn more words with my new friend."
  ],
  "questions": [
   {
    "q": "Where is Rui from?",
    "options": [
     "Lisbon",
     "Porto",
     "Brazil"
    ],
    "answer": 0
   },
   {
    "q": "Where is Ana from?",
    "options": [
     "Lisbon",
     "England",
     "Brazil"
    ],
    "answer": 2
   },
   {
    "q": "What does Rui say when he does not understand a word?",
    "options": [
     "Pardon?",
     "Sorry!",
     "Goodbye!"
    ],
    "answer": 0
   },
   {
    "q": "What do Rui and Ana have after the class?",
    "options": [
     "A coffee",
     "A cake",
     "Lunch"
    ],
    "answer": 0
   },
   {
    "q": "What does Rui say to his mother in the evening?",
    "options": [
     "Good morning",
     "Good night",
     "See you later"
    ],
    "answer": 1
   },
   {
    "q": "What does Rui do this morning?",
    "options": [
     "Goes to work",
     "Goes to a new English class",
     "Goes to the beach"
    ],
    "answer": 1
   },
   {
    "q": "How is the classroom?",
    "options": [
     "Dark and cold",
     "Big, with many students",
     "Small and empty"
    ],
    "answer": 1
   },
   {
    "q": "What does Ana say when they meet?",
    "options": [
     "Goodbye",
     "Sorry",
     "Hi! Nice to meet you"
    ],
    "answer": 2
   },
   {
    "q": "What does Ana say about how she feels?",
    "options": [
     "I am fine, thank you",
     "I am ill",
     "I am tired"
    ],
    "answer": 0
   },
   {
    "q": "What is the teacher like?",
    "options": [
     "A kind man",
     "A young student",
     "A strict woman"
    ],
    "answer": 0
   },
   {
    "q": "What do they learn today?",
    "options": [
     "Greetings",
     "Numbers",
     "Colours"
    ],
    "answer": 0
   },
   {
    "q": "How does the teacher say the word again?",
    "options": [
     "Quickly",
     "Loudly",
     "Slowly"
    ],
    "answer": 2
   },
   {
    "q": "What do Rui and Ana talk about?",
    "options": [
     "The weather",
     "Their families and their jobs",
     "Football"
    ],
    "answer": 1
   },
   {
    "q": "What does Ana wish Rui?",
    "options": [
     "A good journey",
     "Good luck with his homework",
     "A happy birthday"
    ],
    "answer": 1
   },
   {
    "q": "What do they have tomorrow?",
    "options": [
     "Another class",
     "A holiday",
     "An exam"
    ],
    "answer": 0
   }
  ]
 },
 "personal": {
  "title": "At the sports centre",
  "paragraphs": [
   "Today Mrs Silva wants to join a sports centre. At the reception, a young man says, \"Hello! Please complete this form.\" The first question is: \"What is your first name?\" She writes Helena. The second question is about her surname, so she writes Silva. Then the form asks for her address. She lives in a flat in Porto, so she writes the street, the number and the postcode.",
   "The young man asks, \"What is your date of birth?\" She says, \"I was born on the fifth of May, nineteen eighty.\" Then he asks for her phone number and her email address. She says them slowly, and he asks, \"Can you spell your surname, please?\" She says, \"S, I, L, V, A.\" Next to the word \"occupation\" she writes \"teacher\". She is a teacher at a school in Porto, and she is a woman of forty-five years.",
   "At the end, the young man says, \"Please sign here.\" She writes her signature and shows her ID card. Her hometown is Braga, but now she lives in Porto. The young man says, \"Thank you, Mrs Silva. Welcome to our sports centre!\" She is very happy. Tomorrow she starts swimming, and on Saturday she wants to play tennis with her friend Ms Brown."
  ],
  "questions": [
   {
    "q": "What does Mrs Silva want to join?",
    "options": [
     "A sports centre",
     "A school",
     "A bank"
    ],
    "answer": 0
   },
   {
    "q": "What is her surname?",
    "options": [
     "Silva",
     "Braga",
     "Helena"
    ],
    "answer": 0
   },
   {
    "q": "When was she born?",
    "options": [
     "In Porto",
     "On the fifth of May",
     "In December"
    ],
    "answer": 1
   },
   {
    "q": "What is her occupation?",
    "options": [
     "Doctor",
     "Student",
     "Teacher"
    ],
    "answer": 2
   },
   {
    "q": "What does she show at the end?",
    "options": [
     "Her ID card",
     "Her passport",
     "Her phone"
    ],
    "answer": 0
   },
   {
    "q": "Who gives her the form?",
    "options": [
     "Her friend Ms Brown",
     "A teacher",
     "A young man at the reception"
    ],
    "answer": 2
   },
   {
    "q": "What is her first name?",
    "options": [
     "Brown",
     "Helena",
     "Silva"
    ],
    "answer": 1
   },
   {
    "q": "Where does she live?",
    "options": [
     "In a flat in Porto",
     "In a house in Braga",
     "In a hotel"
    ],
    "answer": 0
   },
   {
    "q": "What does she write about her address?",
    "options": [
     "The street, the number and the postcode",
     "Only the city",
     "Only the street"
    ],
    "answer": 0
   },
   {
    "q": "What does the young man ask her to spell?",
    "options": [
     "Her surname",
     "Her first name",
     "Her address"
    ],
    "answer": 0
   },
   {
    "q": "Where is she a teacher?",
    "options": [
     "At a university",
     "At a school in Porto",
     "At a sports centre"
    ],
    "answer": 1
   },
   {
    "q": "How old is she?",
    "options": [
     "Forty-five",
     "Thirty",
     "Sixty"
    ],
    "answer": 0
   },
   {
    "q": "Where is her hometown?",
    "options": [
     "Faro",
     "Lisbon",
     "Braga"
    ],
    "answer": 2
   },
   {
    "q": "What does she start tomorrow?",
    "options": [
     "Tennis",
     "Football",
     "Swimming"
    ],
    "answer": 2
   },
   {
    "q": "Who does she want to play tennis with on Saturday?",
    "options": [
     "Her friend Ms Brown",
     "Her husband",
     "The young man"
    ],
    "answer": 0
   }
  ]
 },
 "numbers": {
  "title": "A day at the shops",
  "paragraphs": [
   "On Saturday Mario goes shopping with a hundred euros. He wants a new coat. The first shop is expensive: a coat costs one hundred and twenty euros. That is too much! The second shop has a sale, and the price of a coat is only fifty euros. Mario thinks it is cheap, so he says, \"I want this one.\" The cashier says, \"The price is forty-five euros with the discount.\"",
   "Mario pays with his card because he has no cash. The cashier gives him the bill and a bag. Then he counts his money: he still has fifty-five euros. In the third shop he sees a nice hat for ten euros. The hat is not free, but it is a good price. He buys it and gets his change. Now he has forty-five euros, and he wants to spend half of it on a gift for his mother.",
   "At the end of the day Mario is happy. He saves the other half of his money. He says to himself, \"My dream is to have a thousand euros one day, or maybe a million!\" He laughs. The last bus is at eleven, so he goes home. It is his first big shopping day, and the number of things he buys is small, but they are good. His mother loves the gift."
  ],
  "questions": [
   {
    "q": "How much money does Mario have at the start?",
    "options": [
     "A thousand euros",
     "Fifty euros",
     "A hundred euros"
    ],
    "answer": 2
   },
   {
    "q": "What is the price of the coat with the discount?",
    "options": [
     "Forty-five euros",
     "Forty euros",
     "Fifty euros"
    ],
    "answer": 0
   },
   {
    "q": "How does Mario pay for the coat?",
    "options": [
     "With cash",
     "He does not pay",
     "With his card"
    ],
    "answer": 2
   },
   {
    "q": "How much does the hat cost?",
    "options": [
     "Ten euros",
     "It is free",
     "Fifteen euros"
    ],
    "answer": 0
   },
   {
    "q": "What is Mario's dream?",
    "options": [
     "To have a thousand euros or a million",
     "To buy a shop",
     "To buy a car"
    ],
    "answer": 0
   },
   {
    "q": "What does Mario want to buy first?",
    "options": [
     "A new phone",
     "A new coat",
     "A new hat"
    ],
    "answer": 1
   },
   {
    "q": "How much does a coat cost in the first shop?",
    "options": [
     "One hundred and twenty euros",
     "Fifty euros",
     "Ten euros"
    ],
    "answer": 0
   },
   {
    "q": "What does the second shop have?",
    "options": [
     "A free gift",
     "A long queue",
     "A sale"
    ],
    "answer": 2
   },
   {
    "q": "Why does Mario pay with his card?",
    "options": [
     "He likes cards",
     "He has no cash",
     "The shop does not take cash"
    ],
    "answer": 1
   },
   {
    "q": "What does the cashier give him?",
    "options": [
     "A gift",
     "A hat",
     "The bill and a bag"
    ],
    "answer": 2
   },
   {
    "q": "How much money does Mario have after buying the coat?",
    "options": [
     "Fifty-five euros",
     "One hundred euros",
     "Forty-five euros"
    ],
    "answer": 0
   },
   {
    "q": "What does he see in the third shop?",
    "options": [
     "A red coat",
     "A nice hat",
     "A cheap bag"
    ],
    "answer": 1
   },
   {
    "q": "What does he want to buy for his mother?",
    "options": [
     "A coat",
     "A gift",
     "Some flowers"
    ],
    "answer": 1
   },
   {
    "q": "When is the last bus?",
    "options": [
     "At nine",
     "At six",
     "At eleven"
    ],
    "answer": 2
   },
   {
    "q": "Who loves the gift?",
    "options": [
     "His mother",
     "His friend",
     "His father"
    ],
    "answer": 0
   }
  ]
 },
 "colors": {
  "title": "My colourful room",
  "paragraphs": [
   "Clara has a new bedroom, and she wants to paint it. Her favourite colour is blue, but her sister likes pink and her mother likes yellow. Clara says, \"A blue room is cool, but my wall is dark. I want a bright colour.\" Her father says, \"Mix blue and white and you get a pale blue.\" So Clara goes to the shop and buys two tins of paint: one white and one blue.",
   "On Saturday Clara and her father paint the walls pale blue. The door is brown, and they paint it red. It is a bright, colourful room now! Her sister brings a purple lamp and a pink bag. Her mother brings a yellow flower for the desk. Clara has a grey cat, and the cat sleeps on a black chair near the window. The light in the room is warm and nice.",
   "In the evening they look at the room. The colours are lovely. Clara says, \"It is like a rainbow! I can see red, blue, yellow, orange, green and purple.\" Her mother laughs and says, \"We also have gold and silver on the photo frames!\" Clara is very happy. It is her favourite room in the world, and she invites her best friend to see the new colour of her room."
  ],
  "questions": [
   {
    "q": "What is Clara's favourite colour?",
    "options": [
     "Blue",
     "Yellow",
     "Pink"
    ],
    "answer": 0
   },
   {
    "q": "What colour are the walls after they paint them?",
    "options": [
     "Pale blue",
     "Dark grey",
     "Red"
    ],
    "answer": 0
   },
   {
    "q": "What colour is the door after they paint it?",
    "options": [
     "Brown",
     "White",
     "Red"
    ],
    "answer": 2
   },
   {
    "q": "What colour is Clara's cat?",
    "options": [
     "Brown",
     "Grey",
     "Black"
    ],
    "answer": 1
   },
   {
    "q": "What does Clara say the room is like?",
    "options": [
     "A castle",
     "A garden",
     "A rainbow"
    ],
    "answer": 2
   },
   {
    "q": "What does Clara want to paint?",
    "options": [
     "A picture",
     "The kitchen",
     "Her new bedroom"
    ],
    "answer": 2
   },
   {
    "q": "Which colour does Clara's sister like?",
    "options": [
     "Pink",
     "Yellow",
     "Green"
    ],
    "answer": 0
   },
   {
    "q": "Which colour does Clara's mother like?",
    "options": [
     "Purple",
     "Yellow",
     "Blue"
    ],
    "answer": 1
   },
   {
    "q": "Who tells Clara to mix blue and white?",
    "options": [
     "Her sister",
     "Her father",
     "Her mother"
    ],
    "answer": 1
   },
   {
    "q": "How many tins of paint does Clara buy?",
    "options": [
     "Five",
     "Two",
     "Three"
    ],
    "answer": 1
   },
   {
    "q": "When do they paint the walls?",
    "options": [
     "On Saturday",
     "On Monday",
     "On Sunday"
    ],
    "answer": 0
   },
   {
    "q": "What does Clara's sister bring?",
    "options": [
     "A yellow flower",
     "A purple lamp and a pink bag",
     "A grey cat"
    ],
    "answer": 1
   },
   {
    "q": "Where does the cat sleep?",
    "options": [
     "On a black chair near the window",
     "On the bed",
     "On the floor"
    ],
    "answer": 0
   },
   {
    "q": "What does the mother bring for the desk?",
    "options": [
     "A yellow flower",
     "A lamp",
     "A pink bag"
    ],
    "answer": 0
   },
   {
    "q": "What colours are on the photo frames?",
    "options": [
     "Black and white",
     "Gold and silver",
     "Red and blue"
    ],
    "answer": 1
   }
  ]
 },
 "family": {
  "title": "My family",
  "paragraphs": [
   "My name is Sofia and I am twelve years old. I live in a small house in Porto with my family. My mother is Clara and my father is Paulo. My mother is a nurse and my father is a driver. I have one brother and one sister. My brother is Tiago, and he is sixteen. My sister is Marta, and she is five. She is the baby of the family.",
   "My grandmother and my grandfather live near our house. My grandmother cooks very well, and my grandfather reads the newspaper every morning. On Sunday, all the family has lunch at their house. My uncle and my aunt come too, with my cousin Rui. Rui is my best friend. He is a child like me, and we play in the garden. My aunt has a twin sister, so I have two aunts, and they are very funny.",
   "My brother Tiago has a girlfriend. Her name is Ines, and she is very kind. My parents are married for eighteen years, and they are very happy. My mother says, \"A family is the most important thing in the world.\" I agree. After lunch we talk, we laugh and we take photos of everybody. I love my family very much, and I want to have a big family one day too."
  ],
  "questions": [
   {
    "q": "How old is Sofia?",
    "options": [
     "Five",
     "Sixteen",
     "Twelve"
    ],
    "answer": 2
   },
   {
    "q": "What is her mother's job?",
    "options": [
     "Nurse",
     "Teacher",
     "Driver"
    ],
    "answer": 0
   },
   {
    "q": "Who is Rui?",
    "options": [
     "Her brother",
     "Her uncle",
     "Her cousin"
    ],
    "answer": 2
   },
   {
    "q": "What does the family do on Sunday?",
    "options": [
     "They watch a film",
     "They go to the beach",
     "They have lunch at the grandparents' house"
    ],
    "answer": 2
   },
   {
    "q": "Who is Ines?",
    "options": [
     "Sofia's aunt",
     "Sofia's sister",
     "Tiago's girlfriend"
    ],
    "answer": 2
   },
   {
    "q": "Where does Sofia live?",
    "options": [
     "In a small house in Porto",
     "In a big house in Braga",
     "In a flat in Lisbon"
    ],
    "answer": 0
   },
   {
    "q": "What is Sofia's father's job?",
    "options": [
     "He is a teacher",
     "He is a driver",
     "He is a nurse"
    ],
    "answer": 1
   },
   {
    "q": "How old is Tiago?",
    "options": [
     "Sixteen",
     "Twelve",
     "Five"
    ],
    "answer": 0
   },
   {
    "q": "Who is Marta?",
    "options": [
     "Sofia's little sister",
     "Sofia's cousin",
     "Sofia's aunt"
    ],
    "answer": 0
   },
   {
    "q": "What does the grandmother do very well?",
    "options": [
     "Sings",
     "Drives",
     "Cooks"
    ],
    "answer": 2
   },
   {
    "q": "What does the grandfather read every morning?",
    "options": [
     "The newspaper",
     "A magazine",
     "A book"
    ],
    "answer": 0
   },
   {
    "q": "Who is Sofia's best friend?",
    "options": [
     "Her sister Marta",
     "Ines",
     "Her cousin Rui"
    ],
    "answer": 2
   },
   {
    "q": "Why does Sofia have two aunts?",
    "options": [
     "Her aunt has a twin sister",
     "Her mother has two sisters",
     "Her father has two sisters"
    ],
    "answer": 0
   },
   {
    "q": "How long are Sofia's parents married?",
    "options": [
     "Twelve years",
     "Five years",
     "Eighteen years"
    ],
    "answer": 2
   },
   {
    "q": "What does Sofia's mother say?",
    "options": [
     "Money is important",
     "Work is important",
     "A family is the most important thing in the world"
    ],
    "answer": 2
   }
  ]
 },
 "body": {
  "title": "My best friend",
  "paragraphs": [
   "This is my best friend Pedro. He is tall and he has short black hair. His eyes are brown and his nose is small. He has a big mouth and a beautiful smile. When he laughs, you can see his white teeth. He does not have a beard, but his father has a long grey beard. We are friends for ten years, and I know his face better than my own face.",
   "Pedro is very strong. He has big arms and strong legs. He plays football on Sunday and he runs every morning. His hands are big, and his fingers are long, so he plays the guitar very well. His feet are big too, and it is difficult to find shoes for him! After football his knee and his back sometimes hurt, but he says, \"It is OK. I am fine.\"",
   "Pedro has a good heart, and he is very clever. His brain is full of ideas. He does exercise and he eats healthy food, so his skin is good. His neck and his shoulders are strong after swimming. He always says, \"The body needs water, food and sleep.\" I think he is right. He is not only my friend, he is also my teacher, because he helps me to learn English every day."
  ],
  "questions": [
   {
    "q": "What colour is Pedro's hair?",
    "options": [
     "Brown",
     "Short and black",
     "Long and grey"
    ],
    "answer": 1
   },
   {
    "q": "Who has a beard?",
    "options": [
     "Pedro",
     "Pedro's friend",
     "Pedro's father"
    ],
    "answer": 2
   },
   {
    "q": "What does Pedro play with his long fingers?",
    "options": [
     "The guitar",
     "The piano",
     "Football"
    ],
    "answer": 0
   },
   {
    "q": "What hurts after football?",
    "options": [
     "His knee and back",
     "His teeth",
     "His head"
    ],
    "answer": 0
   },
   {
    "q": "What does the body need, says Pedro?",
    "options": [
     "Only exercise",
     "Water, food and sleep",
     "Only water"
    ],
    "answer": 1
   },
   {
    "q": "What colour are Pedro's eyes?",
    "options": [
     "Green",
     "Blue",
     "Brown"
    ],
    "answer": 2
   },
   {
    "q": "How long have the friends known each other?",
    "options": [
     "Ten years",
     "One year",
     "Two years"
    ],
    "answer": 0
   },
   {
    "q": "When does Pedro play football?",
    "options": [
     "Every day",
     "On Sunday",
     "On Friday"
    ],
    "answer": 1
   },
   {
    "q": "When does Pedro run?",
    "options": [
     "Every night",
     "Every morning",
     "On Saturday"
    ],
    "answer": 1
   },
   {
    "q": "Why is it difficult to find shoes for Pedro?",
    "options": [
     "His feet are big",
     "He never wears shoes",
     "His feet are very small"
    ],
    "answer": 0
   },
   {
    "q": "What does Pedro eat?",
    "options": [
     "Only sweets",
     "Healthy food",
     "Only meat"
    ],
    "answer": 1
   },
   {
    "q": "What is strong after swimming?",
    "options": [
     "His eyes",
     "His teeth",
     "His neck and his shoulders"
    ],
    "answer": 2
   },
   {
    "q": "What does Pedro help the narrator to learn?",
    "options": [
     "English",
     "Maths",
     "Football"
    ],
    "answer": 0
   },
   {
    "q": "What kind of beard does Pedro's father have?",
    "options": [
     "No beard",
     "A short black beard",
     "A long grey beard"
    ],
    "answer": 2
   },
   {
    "q": "What is Pedro's brain full of?",
    "options": [
     "Sleep",
     "Water",
     "Ideas"
    ],
    "answer": 2
   }
  ]
 },
 "clothes": {
  "title": "Shopping for a party",
  "paragraphs": [
   "Maria has a party on Saturday, and she needs new clothes. She goes to a shop with her friend Joana. Maria wants a dress, but she is not sure about the colour. She tries on a red dress, but it is too small. The size is wrong. Then she tries on a green dress. It fits very well! She says, \"I love it!\" Joana says, \"Green is your colour.\"",
   "Now she needs shoes. She sees black boots and white shoes. She chooses the white shoes because the weather is warm. Joana buys blue jeans, a white shirt and a jacket. \"It is cold in the evening,\" she says. They also look at hats, caps, scarves and rings. Maria buys a gold ring for her mother. She puts the ring in her pocket, and the dress in her bag.",
   "On Saturday evening Maria wears her new dress and her white shoes. She puts a jumper in her bag and a coat for the way home. Everybody says, \"What a beautiful dress!\" Joana wears her jeans and her shirt, and she looks very nice too. A man asks Maria, \"Are those your glasses on the table?\" She says yes, and she takes them. It is a great party, and the clothes are perfect."
  ],
  "questions": [
   {
    "q": "Why does Maria need new clothes?",
    "options": [
     "She has a trip",
     "She has a new job",
     "She has a party"
    ],
    "answer": 2
   },
   {
    "q": "What is wrong with the red dress?",
    "options": [
     "It is too small",
     "It is expensive",
     "It is dirty"
    ],
    "answer": 0
   },
   {
    "q": "What colour is the dress she buys?",
    "options": [
     "Green",
     "Red",
     "Blue"
    ],
    "answer": 0
   },
   {
    "q": "What does Joana buy?",
    "options": [
     "Jeans, a shirt and a jacket",
     "A dress",
     "Boots"
    ],
    "answer": 0
   },
   {
    "q": "What does Maria buy for her mother?",
    "options": [
     "A hat",
     "A scarf",
     "A gold ring"
    ],
    "answer": 2
   },
   {
    "q": "Who goes shopping with Maria?",
    "options": [
     "Her friend Joana",
     "Her mother",
     "Her sister"
    ],
    "answer": 0
   },
   {
    "q": "What does Maria want first?",
    "options": [
     "A jumper",
     "Jeans",
     "A dress"
    ],
    "answer": 2
   },
   {
    "q": "Which dress fits very well?",
    "options": [
     "The green dress",
     "The red dress",
     "The blue dress"
    ],
    "answer": 0
   },
   {
    "q": "Which shoes does Maria choose?",
    "options": [
     "The red shoes",
     "The black boots",
     "The white shoes"
    ],
    "answer": 2
   },
   {
    "q": "Why does she choose the white shoes?",
    "options": [
     "Joana likes them",
     "The weather is warm",
     "They are cheaper"
    ],
    "answer": 1
   },
   {
    "q": "Why does Joana buy a jacket?",
    "options": [
     "It is cold in the evening",
     "It is red",
     "It is on sale"
    ],
    "answer": 0
   },
   {
    "q": "What does Maria put in her bag for the way home?",
    "options": [
     "Her shoes",
     "A hat",
     "A jumper and a coat"
    ],
    "answer": 2
   },
   {
    "q": "Where does she put the ring?",
    "options": [
     "On her finger",
     "In her pocket",
     "In her bag"
    ],
    "answer": 1
   },
   {
    "q": "What does a man ask her about?",
    "options": [
     "Her dress",
     "Her ring",
     "Her glasses on the table"
    ],
    "answer": 2
   },
   {
    "q": "What does everybody say at the party?",
    "options": [
     "What a cold night",
     "What a nice hat",
     "What a beautiful dress"
    ],
    "answer": 2
   }
  ]
 },
 "food": {
  "title": "Breakfast, lunch and dinner",
  "paragraphs": [
   "Mark is a student and he is always hungry. Every morning he has breakfast at home. He eats bread with cheese and an egg, and he drinks coffee with milk. His mother makes tea for herself. Mark does not like meat in the morning, but he likes an apple at ten o'clock. He says, \"A good breakfast is important for the day.\"",
   "For lunch, Mark goes to a small restaurant near his school. He eats soup first, and then chicken with potatoes and a salad. The salad has lettuce and tomato. He drinks water or juice. On Friday he eats fish with rice because it is his favourite. For dessert he has a piece of cake. The waiter knows him and says, \"Hello, Mark! The same lunch as always?\"",
   "At dinner, the family eats together. His father cooks meat with vegetables, and his mother makes a big soup. They drink water, and sometimes his father drinks tea. After dinner Mark helps with the plates. He says, \"The food is delicious!\" At night he is not hungry, but he eats a little bread with butter. His mother laughs and says, \"You are a boy who loves food!\" Mark smiles and goes to sleep."
  ],
  "questions": [
   {
    "q": "What does Mark eat for breakfast?",
    "options": [
     "Bread with cheese and an egg",
     "Fish and rice",
     "Soup"
    ],
    "answer": 0
   },
   {
    "q": "Where does he have lunch?",
    "options": [
     "At a small restaurant",
     "At home",
     "At school"
    ],
    "answer": 0
   },
   {
    "q": "What does he eat on Friday?",
    "options": [
     "Chicken",
     "Fish with rice",
     "Meat"
    ],
    "answer": 1
   },
   {
    "q": "What does he have for dessert?",
    "options": [
     "Cake",
     "An apple",
     "Ice cream"
    ],
    "answer": 0
   },
   {
    "q": "Who cooks meat at dinner?",
    "options": [
     "His sister",
     "His father",
     "His mother"
    ],
    "answer": 1
   },
   {
    "q": "What does Mark drink at breakfast?",
    "options": [
     "Tea",
     "Juice",
     "Coffee with milk"
    ],
    "answer": 2
   },
   {
    "q": "What does his mother drink?",
    "options": [
     "Tea",
     "Milk",
     "Coffee"
    ],
    "answer": 0
   },
   {
    "q": "What does Mark eat at ten o'clock?",
    "options": [
     "A cake",
     "An apple",
     "A sandwich"
    ],
    "answer": 1
   },
   {
    "q": "What does he eat first at lunch?",
    "options": [
     "Soup",
     "Salad",
     "Fish"
    ],
    "answer": 0
   },
   {
    "q": "What does the salad have?",
    "options": [
     "Cheese and bread",
     "Lettuce and tomato",
     "Rice and fish"
    ],
    "answer": 1
   },
   {
    "q": "What does he drink at lunch?",
    "options": [
     "Wine",
     "Coffee",
     "Water or juice"
    ],
    "answer": 2
   },
   {
    "q": "What does the family do at dinner?",
    "options": [
     "They eat in front of the TV",
     "They eat together",
     "They eat in a restaurant"
    ],
    "answer": 1
   },
   {
    "q": "What does Mark do after dinner?",
    "options": [
     "Helps with the plates",
     "Goes out",
     "Watches TV"
    ],
    "answer": 0
   },
   {
    "q": "What does Mark say about the food?",
    "options": [
     "It is delicious",
     "It is bad",
     "It is cold"
    ],
    "answer": 0
   },
   {
    "q": "What does he eat at night?",
    "options": [
     "A big soup",
     "A little bread with butter",
     "Some fish"
    ],
    "answer": 1
   }
  ]
 },
 "fruitveg": {
  "title": "At the market",
  "paragraphs": [
   "Every Saturday, Lucia goes to the market in her village. She likes to buy fresh fruit and vegetables. Today she wants fruit for the week. She buys a big melon, six peaches and a bag of strawberries. The melon is ripe and sweet. The seller says, \"These grapes are very good. Try one!\" The grapes are small and sweet, so she buys a kilo. She also asks for two pears and a banana.",
   "For the soup she needs vegetables: carrots, onions, garlic, corn and some beans. She also buys a lettuce, a cucumber and a few peas for the salad. She does not buy mushrooms today. At the next stall she sees lemons. A lemon is sour, but she puts one in her tea and in her fish. The pepper is very red and fresh, so she buys one for the salad too.",
   "Lucia puts everything in her basket. It is heavy, but she is happy. At home she makes a big salad with lettuce, cucumber and pepper. Her family eats fruit every day, and the vegetables in the soup are always fresh. \"Fruit and vegetables are healthy,\" Lucia says. \"And a ripe melon is the best dessert!\" Her son eats a strawberry and says, \"I agree with you, Mum.\""
  ],
  "questions": [
   {
    "q": "Where does Lucia go every Saturday?",
    "options": [
     "To the market",
     "To the beach",
     "To a restaurant"
    ],
    "answer": 0
   },
   {
    "q": "What does she buy for the week?",
    "options": [
     "Meat and fish",
     "Melon, peaches and strawberries",
     "Bread and cheese"
    ],
    "answer": 1
   },
   {
    "q": "What does she put in her tea and in her fish?",
    "options": [
     "A lemon",
     "A banana",
     "An onion"
    ],
    "answer": 0
   },
   {
    "q": "What does Lucia make at home?",
    "options": [
     "A pizza",
     "A cake",
     "A big salad"
    ],
    "answer": 2
   },
   {
    "q": "What does Lucia say is the best dessert?",
    "options": [
     "A strawberry cake",
     "A ripe melon",
     "A peach"
    ],
    "answer": 1
   },
   {
    "q": "Where is the market?",
    "options": [
     "In her village",
     "At the beach",
     "In the city"
    ],
    "answer": 0
   },
   {
    "q": "How many peaches does Lucia buy?",
    "options": [
     "Ten",
     "Two",
     "Six"
    ],
    "answer": 2
   },
   {
    "q": "How is the melon?",
    "options": [
     "Ripe and sweet",
     "Sour and green",
     "Small and cold"
    ],
    "answer": 0
   },
   {
    "q": "How many grapes does she buy?",
    "options": [
     "A kilo",
     "Two kilos",
     "A small bag"
    ],
    "answer": 0
   },
   {
    "q": "What does she buy for the soup?",
    "options": [
     "Fruit only",
     "Mushrooms and lettuce",
     "Carrots, onions, garlic, corn and beans"
    ],
    "answer": 2
   },
   {
    "q": "What does she not buy today?",
    "options": [
     "Carrots",
     "Mushrooms",
     "Garlic"
    ],
    "answer": 1
   },
   {
    "q": "What does she see at the next stall?",
    "options": [
     "Lemons",
     "Bananas",
     "Melons"
    ],
    "answer": 0
   },
   {
    "q": "What does she put in her fish?",
    "options": [
     "A pepper",
     "A pear",
     "A lemon"
    ],
    "answer": 2
   },
   {
    "q": "Why does she buy a red pepper?",
    "options": [
     "It is cheap",
     "It is for the soup",
     "It is fresh and she wants it for the salad"
    ],
    "answer": 2
   },
   {
    "q": "Who eats a strawberry at home?",
    "options": [
     "Lucia",
     "Her son",
     "Her husband"
    ],
    "answer": 1
   }
  ]
 },
 "restaurant": {
  "title": "Dinner at a restaurant",
  "paragraphs": [
   "On Friday night, Sam and his wife have a reservation at a small restaurant. The waiter says, \"Good evening! A table for two?\" Sam says, \"Yes, please. We have a reservation.\" The waiter brings them to a table near the window and gives them the menu. Sam's wife is vegetarian, so she looks at the starters and the salads. Sam looks at the main courses.",
   "The waiter comes and asks, \"Are you ready to order?\" Sam's wife orders soup as a starter and vegetable pasta as a main course. Sam orders fish with rice. They also order a bottle of water and a glass of wine for Sam. The food is very tasty. The soup is hot, and the fish is not spicy. They use a fork and a knife, and Sam's wife eats the soup with a spoon. Sam asks for a napkin.",
   "For dessert, they have chocolate cake and two cups of tea. Sam asks, \"Can I have the bill, please?\" The waiter brings it. The meal costs thirty-six euros. Sam leaves a tip for the waiter. The waiter smiles and says, \"Thank you, and enjoy the rest of your evening!\" Sam and his wife are happy. It is a perfect dinner, and they want to come back to this restaurant next month."
  ],
  "questions": [
   {
    "q": "What do Sam and his wife have at the restaurant?",
    "options": [
     "A party",
     "A job",
     "A reservation"
    ],
    "answer": 2
   },
   {
    "q": "Why does his wife look at the salads?",
    "options": [
     "She does not like fish",
     "She is hungry",
     "She is vegetarian"
    ],
    "answer": 2
   },
   {
    "q": "What does Sam order as a main course?",
    "options": [
     "Fish with rice",
     "Chicken",
     "Pasta"
    ],
    "answer": 0
   },
   {
    "q": "What do they have for dessert?",
    "options": [
     "Fruit",
     "Chocolate cake and tea",
     "Ice cream"
    ],
    "answer": 1
   },
   {
    "q": "What does Sam leave for the waiter?",
    "options": [
     "A tip",
     "A bottle",
     "A napkin"
    ],
    "answer": 0
   },
   {
    "q": "When do Sam and his wife go to the restaurant?",
    "options": [
     "On Friday night",
     "On Saturday morning",
     "On Sunday"
    ],
    "answer": 0
   },
   {
    "q": "Where is their table?",
    "options": [
     "Near the window",
     "Near the door",
     "In the garden"
    ],
    "answer": 0
   },
   {
    "q": "What does the waiter give them?",
    "options": [
     "A napkin",
     "The bill",
     "The menu"
    ],
    "answer": 2
   },
   {
    "q": "What does Sam's wife order as a starter?",
    "options": [
     "Fish",
     "Soup",
     "A salad"
    ],
    "answer": 1
   },
   {
    "q": "What does she order as a main course?",
    "options": [
     "Fish with rice",
     "Vegetable pasta",
     "Chicken"
    ],
    "answer": 1
   },
   {
    "q": "What does Sam drink?",
    "options": [
     "A cup of tea",
     "A cola",
     "A glass of wine"
    ],
    "answer": 2
   },
   {
    "q": "What is the fish like?",
    "options": [
     "Very spicy",
     "Cold",
     "Not spicy"
    ],
    "answer": 2
   },
   {
    "q": "What does Sam's wife use to eat the soup?",
    "options": [
     "A fork",
     "A spoon",
     "A knife"
    ],
    "answer": 1
   },
   {
    "q": "How much is the meal?",
    "options": [
     "Twenty euros",
     "Thirty-six euros",
     "Sixty euros"
    ],
    "answer": 1
   },
   {
    "q": "What do they want to do next month?",
    "options": [
     "Come back to the restaurant",
     "Cook at home",
     "Go to another country"
    ],
    "answer": 0
   }
  ]
 },
 "house": {
  "title": "My new home",
  "paragraphs": [
   "Last month Ana and her husband move into a new house. It is not big, but it is very nice. The house has two floors. Downstairs there is a living room, a kitchen and a small bathroom. Upstairs there are two bedrooms and a second bathroom. The stairs are old, but the roof is new. Behind the house there is a garden with a table and four chairs. Ana loves to sit there in the afternoon.",
   "In the living room there is a sofa, a table and a lamp. The window is big, so the room is bright. On the wall there is a mirror and a photo of the family. In the kitchen there is a fridge and a cooker, and a small table for breakfast. Every morning Ana takes a shower and makes coffee. The door of the kitchen is blue, and her keys are always on the table.",
   "Their old apartment was small, and the neighbours were very noisy. In the new house everything is quiet. At night Ana sits on the sofa and reads a book. Her husband watches TV in the living room, and the cat sleeps on the bed. Ana says, \"This is a home, not only a house.\" They are very happy and they invite their friends for dinner on Saturday. The friends bring flowers."
  ],
  "questions": [
   {
    "q": "How many floors does the house have?",
    "options": [
     "Three",
     "One",
     "Two"
    ],
    "answer": 2
   },
   {
    "q": "What is new in the house?",
    "options": [
     "The roof",
     "The sofa",
     "The stairs"
    ],
    "answer": 0
   },
   {
    "q": "Where is the mirror?",
    "options": [
     "On the wall",
     "In the kitchen",
     "In the garden"
    ],
    "answer": 0
   },
   {
    "q": "What does Ana do every morning?",
    "options": [
     "Goes to work by bus",
     "Cleans the garden",
     "Takes a shower and makes coffee"
    ],
    "answer": 2
   },
   {
    "q": "How were the neighbours in the old apartment?",
    "options": [
     "Kind",
     "Quiet",
     "Noisy"
    ],
    "answer": 2
   },
   {
    "q": "When did Ana and her husband move?",
    "options": [
     "Last week",
     "Last month",
     "Last year"
    ],
    "answer": 1
   },
   {
    "q": "What is downstairs?",
    "options": [
     "Only the garden",
     "A living room, a kitchen and a small bathroom",
     "Two bedrooms"
    ],
    "answer": 1
   },
   {
    "q": "How many bedrooms are upstairs?",
    "options": [
     "One",
     "Four",
     "Two"
    ],
    "answer": 2
   },
   {
    "q": "What is behind the house?",
    "options": [
     "A garage",
     "A river",
     "A garden with a table and four chairs"
    ],
    "answer": 2
   },
   {
    "q": "Why is the living room bright?",
    "options": [
     "The window is big",
     "There are many lamps",
     "The walls are white"
    ],
    "answer": 0
   },
   {
    "q": "What colour is the kitchen door?",
    "options": [
     "Red",
     "Green",
     "Blue"
    ],
    "answer": 2
   },
   {
    "q": "Where are her keys always?",
    "options": [
     "In the garden",
     "On the sofa",
     "On the table"
    ],
    "answer": 2
   },
   {
    "q": "What does Ana do at night?",
    "options": [
     "Sits on the sofa and reads a book",
     "Cooks",
     "Watches TV"
    ],
    "answer": 0
   },
   {
    "q": "Where does the cat sleep?",
    "options": [
     "On the sofa",
     "On the bed",
     "In the garden"
    ],
    "answer": 1
   },
   {
    "q": "What do the friends bring on Saturday?",
    "options": [
     "A cake",
     "Wine",
     "Flowers"
    ],
    "answer": 2
   }
  ]
 },
 "routine": {
  "title": "A normal day",
  "paragraphs": [
   "Paulo gets up at six thirty every morning. First he washes his face and brushes his teeth. Then he takes a shower and has breakfast: bread, an egg and a cup of coffee. At seven thirty he leaves home and walks to the bus stop. The bus arrives at seven forty and he arrives at work at eight fifteen. He listens to music on the bus, and sometimes he reads the news.",
   "Paulo works in an office. He starts work at nine and he finishes work at five. At lunch he buys a sandwich and he reads a book in the park. In the afternoon he has a meeting with his boss, and he writes emails. He is always busy, but he likes his job. His colleagues are nice, and they play a game of cards at the break.",
   "After work Paulo goes to the gym or he walks home. In the evening he cooks dinner and he watches a film. He studies English for thirty minutes because he wants to speak English with his friends. At eleven he goes to sleep. On Saturday and Sunday his routine is different: he wakes up late, plays football and visits his parents. He says, \"A good routine is the secret of a happy life.\""
  ],
  "questions": [
   {
    "q": "What time does Paulo get up?",
    "options": [
     "Six thirty",
     "Eight",
     "Seven thirty"
    ],
    "answer": 0
   },
   {
    "q": "How does Paulo go to work?",
    "options": [
     "By train",
     "By car",
     "By bus"
    ],
    "answer": 2
   },
   {
    "q": "When does he finish work?",
    "options": [
     "At six",
     "At nine",
     "At five"
    ],
    "answer": 2
   },
   {
    "q": "Where does he read a book at lunch?",
    "options": [
     "At home",
     "At the office",
     "In the park"
    ],
    "answer": 2
   },
   {
    "q": "What does he do at the weekend?",
    "options": [
     "Wakes up late and plays football",
     "Goes to work",
     "Studies all day"
    ],
    "answer": 0
   },
   {
    "q": "What does Paulo do first in the morning?",
    "options": [
     "Has breakfast",
     "Washes his face and brushes his teeth",
     "Takes the bus"
    ],
    "answer": 1
   },
   {
    "q": "What does he eat for breakfast?",
    "options": [
     "Bread, an egg and coffee",
     "Fruit",
     "Cereal"
    ],
    "answer": 0
   },
   {
    "q": "When does he leave home?",
    "options": [
     "At seven thirty",
     "At six thirty",
     "At nine"
    ],
    "answer": 0
   },
   {
    "q": "What does he do on the bus?",
    "options": [
     "Listens to music",
     "Sleeps",
     "Studies English"
    ],
    "answer": 0
   },
   {
    "q": "When does he start work?",
    "options": [
     "At ten",
     "At nine",
     "At eight"
    ],
    "answer": 1
   },
   {
    "q": "What does he buy at lunch?",
    "options": [
     "A salad",
     "Soup",
     "A sandwich"
    ],
    "answer": 2
   },
   {
    "q": "What does he do in the afternoon?",
    "options": [
     "Plays football",
     "Goes to the gym",
     "Has a meeting with his boss"
    ],
    "answer": 2
   },
   {
    "q": "What does he do in the evening?",
    "options": [
     "Works",
     "Goes to the cinema",
     "Cooks dinner and watches a film"
    ],
    "answer": 2
   },
   {
    "q": "How long does he study English?",
    "options": [
     "Ten minutes",
     "Thirty minutes",
     "One hour"
    ],
    "answer": 1
   },
   {
    "q": "What does he say about a good routine?",
    "options": [
     "It is boring",
     "It is the secret of a happy life",
     "It is difficult"
    ],
    "answer": 1
   }
  ]
 },
 "time": {
  "title": "A busy week",
  "paragraphs": [
   "Today is Monday, and my week starts now. I always wake up early on Monday, at six o'clock, but I am never happy about it! Yesterday was Sunday, the last day of the weekend. It was a nice day. Now I have a meeting with my boss at nine o'clock. It is not long: it is only fifteen minutes. After the meeting I have a coffee with my colleagues and we talk about the week.",
   "In the afternoon I study English for one hour. Tomorrow I have a class at six o'clock in the evening. On Friday I come home late, because I go out with my friends. I never work on Friday evening! The weekend is my favourite time. On Saturday I sleep until ten, and on Sunday I visit my mother. She always makes a big lunch for the family, and we stay at the table for two hours.",
   "This month is special because it is my birthday. It is on the fifteenth, and my friends want a party. In the summer we have a holiday of two weeks at the beach. I always count the days. This year I want to learn English and travel to London. Now it is ten minutes to six, so I go home. See you tomorrow! Every day of the week is different, but I love my routine, and I love my life."
  ],
  "questions": [
   {
    "q": "What time is the meeting with the boss?",
    "options": [
     "At nine o'clock",
     "At ten o'clock",
     "At six o'clock"
    ],
    "answer": 0
   },
   {
    "q": "How long is the meeting?",
    "options": [
     "Fifteen minutes",
     "One hour",
     "Two hours"
    ],
    "answer": 0
   },
   {
    "q": "When does the narrator study English?",
    "options": [
     "At night",
     "In the afternoon",
     "In the morning"
    ],
    "answer": 1
   },
   {
    "q": "Why is this month special?",
    "options": [
     "It is the narrator's birthday",
     "It is the holiday month",
     "It is the first month"
    ],
    "answer": 0
   },
   {
    "q": "What does the narrator want to do this year?",
    "options": [
     "Learn English and travel to London",
     "Move to a new house",
     "Change job"
    ],
    "answer": 0
   },
   {
    "q": "What day is it today?",
    "options": [
     "Sunday",
     "Monday",
     "Friday"
    ],
    "answer": 1
   },
   {
    "q": "What time does the narrator wake up on Monday?",
    "options": [
     "At nine o'clock",
     "At six o'clock",
     "At ten o'clock"
    ],
    "answer": 1
   },
   {
    "q": "How does the narrator feel about waking up early?",
    "options": [
     "Never happy about it",
     "Excited",
     "Very happy"
    ],
    "answer": 0
   },
   {
    "q": "What was yesterday?",
    "options": [
     "Sunday",
     "Saturday",
     "Friday"
    ],
    "answer": 0
   },
   {
    "q": "What does the narrator do after the meeting?",
    "options": [
     "Goes home",
     "Has a coffee with colleagues",
     "Studies English"
    ],
    "answer": 1
   },
   {
    "q": "When does the narrator come home late?",
    "options": [
     "On Friday",
     "On Tuesday",
     "On Monday"
    ],
    "answer": 0
   },
   {
    "q": "Until what time does the narrator sleep on Saturday?",
    "options": [
     "Until six",
     "Until noon",
     "Until ten"
    ],
    "answer": 2
   },
   {
    "q": "Who makes a big lunch on Sunday?",
    "options": [
     "A friend",
     "The narrator",
     "The narrator's mother"
    ],
    "answer": 2
   },
   {
    "q": "On which day of the month is the birthday?",
    "options": [
     "The thirtieth",
     "The first",
     "The fifteenth"
    ],
    "answer": 2
   },
   {
    "q": "How long is the summer holiday?",
    "options": [
     "One month",
     "One week",
     "Two weeks"
    ],
    "answer": 2
   }
  ]
 },
 "calendar": {
  "title": "The year of Sofia",
  "paragraphs": [
   "Sofia has a big calendar on her wall and a small diary in her bag. She writes the date of every important day. In January she has an exam at the university. February is the shortest month, but it is also the month of Carnival. In March spring starts, and in April it rains a lot, so she stays at home and reads. She says, \"April is the best month for a good book.\"",
   "Her birthday is in May, on the tenth. In June she goes to the beach with her friends. July and August are very hot, and she works in a cafe on weekdays. On Saturday she goes swimming. In September school starts again, and in October the days are shorter and cool. In November she visits her grandmother in the village. They cook together on Tuesday and Thursday, and on Wednesday they watch a film.",
   "December is her favourite month because of Christmas. The whole family has a long holiday, and everybody comes home. Sofia writes in her diary every day, and she studies English daily. She says, \"A year is long, but a good calendar helps me.\" On the last day of December, she looks at the calendar again and she writes the date for next year: the first of January, the start of a new adventure."
  ],
  "questions": [
   {
    "q": "When is Sofia's exam?",
    "options": [
     "In June",
     "In March",
     "In January"
    ],
    "answer": 2
   },
   {
    "q": "When is her birthday?",
    "options": [
     "In December",
     "On the tenth of June",
     "On the tenth of May"
    ],
    "answer": 2
   },
   {
    "q": "What does she do in July and August?",
    "options": [
     "Works in a cafe on weekdays",
     "Goes to school",
     "Goes skiing"
    ],
    "answer": 0
   },
   {
    "q": "Which month is her favourite?",
    "options": [
     "May",
     "September",
     "December"
    ],
    "answer": 2
   },
   {
    "q": "What does she do daily?",
    "options": [
     "Writes in her diary and studies English",
     "Visits her grandmother",
     "Goes to the beach"
    ],
    "answer": 0
   },
   {
    "q": "Where does Sofia keep her small diary?",
    "options": [
     "In her bag",
     "In the kitchen",
     "On the wall"
    ],
    "answer": 0
   },
   {
    "q": "What is special about February?",
    "options": [
     "It is the shortest month",
     "It is the coldest month",
     "It is the hottest month"
    ],
    "answer": 0
   },
   {
    "q": "What happens in March?",
    "options": [
     "Spring starts",
     "School starts",
     "It snows"
    ],
    "answer": 0
   },
   {
    "q": "What does Sofia do in April when it rains?",
    "options": [
     "She works",
     "She stays at home and reads",
     "She goes to the beach"
    ],
    "answer": 1
   },
   {
    "q": "What does she do in June?",
    "options": [
     "She visits her grandmother",
     "She goes to the beach with friends",
     "She studies for exams"
    ],
    "answer": 1
   },
   {
    "q": "What happens in September?",
    "options": [
     "The holiday starts",
     "It is Carnival",
     "School starts again"
    ],
    "answer": 2
   },
   {
    "q": "What does Sofia do in November?",
    "options": [
     "Visits her grandmother in the village",
     "Goes skiing",
     "Goes to the beach"
    ],
    "answer": 0
   },
   {
    "q": "On which days do they cook together?",
    "options": [
     "Saturday and Sunday",
     "Monday and Friday",
     "Tuesday and Thursday"
    ],
    "answer": 2
   },
   {
    "q": "Why is December her favourite month?",
    "options": [
     "Because of the beach",
     "Because of Christmas",
     "Because of her birthday"
    ],
    "answer": 1
   },
   {
    "q": "What does she write on the last day of December?",
    "options": [
     "A story",
     "A letter",
     "The date for next year"
    ],
    "answer": 2
   }
  ]
 },
 "weather": {
  "title": "A year in Portugal",
  "paragraphs": [
   "In Portugal the weather is good for most of the year. In spring the weather is warm and sunny, and there are many flowers. Sometimes there is rain, so people take an umbrella. In summer it is hot and the sky is blue. People go to the beach and swim in the sea. The sun is very strong, so they wear a hat. In the evening there is a little wind, and it is nice to sit outside with friends.",
   "In autumn the weather changes. The days are shorter, and it is cooler. There is more wind and there are more clouds. Sometimes there is a big storm with a lot of rain. The river is full and the mountain is green. In the north, the weather is colder than in the south. In the south it is sunny for many days, and the sea is still warm in October. Many tourists come in this season.",
   "In winter it is cold, especially at night. There is rain and wind, and in the mountains there is snow. People wear a coat and a scarf. My favourite season is summer because I love the sun and the sea, but my sister likes spring because the weather is warm and not too hot. She says, \"Spring is the best season of the year.\" What is your favourite season? Is it hot or cold where you live?"
  ],
  "questions": [
   {
    "q": "What is the weather like in spring?",
    "options": [
     "Cold and rainy",
     "Warm and sunny",
     "Very hot"
    ],
    "answer": 1
   },
   {
    "q": "What do people do at the beach?",
    "options": [
     "Walk in the snow",
     "Ski",
     "Swim in the sea"
    ],
    "answer": 2
   },
   {
    "q": "Where is there snow in winter?",
    "options": [
     "In the mountains",
     "In the city",
     "On the beach"
    ],
    "answer": 0
   },
   {
    "q": "Where is the weather colder?",
    "options": [
     "At the beach",
     "In the south",
     "In the north"
    ],
    "answer": 2
   },
   {
    "q": "What is the narrator's favourite season?",
    "options": [
     "Winter",
     "Autumn",
     "Summer"
    ],
    "answer": 2
   },
   {
    "q": "What do people take when there is rain in spring?",
    "options": [
     "An umbrella",
     "A hat",
     "A coat"
    ],
    "answer": 0
   },
   {
    "q": "What colour is the sky in summer?",
    "options": [
     "Grey",
     "White",
     "Blue"
    ],
    "answer": 2
   },
   {
    "q": "Why do people wear a hat in summer?",
    "options": [
     "It is cold",
     "It is raining",
     "The sun is very strong"
    ],
    "answer": 2
   },
   {
    "q": "What do people like to do in the evening in summer?",
    "options": [
     "Go to work",
     "Stay at home",
     "Sit outside with friends"
    ],
    "answer": 2
   },
   {
    "q": "What changes in autumn?",
    "options": [
     "The days are hotter",
     "The sea freezes",
     "The days are shorter and cooler"
    ],
    "answer": 2
   },
   {
    "q": "What can happen sometimes in autumn?",
    "options": [
     "A blizzard",
     "A heatwave",
     "A big storm with a lot of rain"
    ],
    "answer": 2
   },
   {
    "q": "How is the sea in the south in October?",
    "options": [
     "Very cold",
     "Still warm",
     "Frozen"
    ],
    "answer": 1
   },
   {
    "q": "When do many tourists come?",
    "options": [
     "In autumn",
     "In spring only",
     "In winter only"
    ],
    "answer": 0
   },
   {
    "q": "What do people wear in winter?",
    "options": [
     "Shorts",
     "A coat and a scarf",
     "A hat only"
    ],
    "answer": 1
   },
   {
    "q": "Which season does the narrator's sister like?",
    "options": [
     "Winter",
     "Spring",
     "Summer"
    ],
    "answer": 1
   }
  ]
 },
 "animals": {
  "title": "My animals",
  "paragraphs": [
   "I love animals! At home I have two pets: a dog and a cat. My dog is brown, and his name is Max. He is very friendly and he loves to run in the garden. My cat is grey, and her name is Luna. She sleeps on the sofa all day. Max and Luna are friends now, but at the beginning the cat is afraid of the dog. Now they eat and sleep together, and it is a beautiful thing to see.",
   "My uncle has a farm in the countryside. On the farm there is a cow, two horses, a pig and many sheep. The cow gives milk every morning. In the field there are also ducks and a small rabbit. A bee sits on a flower, and a butterfly flies near the water. I love the farm in summer. My uncle says, \"Animals are my family,\" and he is right. They are very good friends of people.",
   "Every year I go to the zoo with my family. We see a lion, a tiger and a big elephant. The monkey is very funny: it eats a banana and jumps on the tree. A wolf and a bear are wild animals, but in the zoo they are safe. I am afraid of snakes and spiders, so I do not look at them. A mouse, a frog and a bird are small, but they are also interesting. Animals are great!"
  ],
  "questions": [
   {
    "q": "What colour is Max?",
    "options": [
     "White",
     "Brown",
     "Grey"
    ],
    "answer": 1
   },
   {
    "q": "What is Luna?",
    "options": [
     "A rabbit",
     "A cat",
     "A dog"
    ],
    "answer": 1
   },
   {
    "q": "What does the cow give?",
    "options": [
     "Milk",
     "Bread",
     "Eggs"
    ],
    "answer": 0
   },
   {
    "q": "What is the monkey doing at the zoo?",
    "options": [
     "Sleeping",
     "Eating a banana",
     "Running"
    ],
    "answer": 1
   },
   {
    "q": "What animals is the narrator afraid of?",
    "options": [
     "Snakes and spiders",
     "Dogs and cats",
     "Lions and tigers"
    ],
    "answer": 0
   },
   {
    "q": "What does Max love to do?",
    "options": [
     "Run in the garden",
     "Sleep on the sofa",
     "Eat bananas"
    ],
    "answer": 0
   },
   {
    "q": "Where does Luna sleep?",
    "options": [
     "In the garden",
     "In a basket",
     "On the sofa"
    ],
    "answer": 2
   },
   {
    "q": "Who was afraid at the beginning?",
    "options": [
     "The cat",
     "The narrator",
     "The dog"
    ],
    "answer": 0
   },
   {
    "q": "Who has a farm?",
    "options": [
     "The narrator's uncle",
     "The narrator's grandmother",
     "The narrator's teacher"
    ],
    "answer": 0
   },
   {
    "q": "How many horses are on the farm?",
    "options": [
     "Five",
     "Two",
     "One"
    ],
    "answer": 1
   },
   {
    "q": "Which small animal is in the field?",
    "options": [
     "A frog",
     "A rabbit",
     "A snake"
    ],
    "answer": 1
   },
   {
    "q": "When does the narrator love the farm?",
    "options": [
     "In winter",
     "In summer",
     "In autumn"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator's uncle say?",
    "options": [
     "Animals are noisy",
     "Animals are expensive",
     "Animals are my family"
    ],
    "answer": 2
   },
   {
    "q": "Which animals does the narrator see at the zoo?",
    "options": [
     "A cow and a pig",
     "A cat and a dog",
     "A lion, a tiger and an elephant"
    ],
    "answer": 2
   },
   {
    "q": "What does the monkey jump on?",
    "options": [
     "The lion",
     "The wall",
     "The tree"
    ],
    "answer": 2
   }
  ]
 },
 "city": {
  "title": "A day in the city",
  "paragraphs": [
   "Emma lives in a big city. Her street is near the park, and the station is not far. Every morning she walks to the station and takes a train to work. There is a lot of traffic, so she does not use her car. The city has a bridge over the river, a big square, an old church and a museum. Emma loves the park, and she often walks there with her friend Clara on Sunday morning.",
   "On Saturday a tourist asks Emma, \"Excuse me, where is the museum?\" Emma says, \"Go straight on, then turn left at the corner. The museum is not far.\" The tourist says, \"Thank you!\" Emma also tells him, \"The bank is on the right, and there is a good shop in the square.\" She helps because she knows the city very well. The tourist is happy and he gives her a small gift.",
   "In the afternoon Emma goes to the shop to buy a map. It is not expensive. She also needs a ticket for the bus, and some money for the hotel for her aunt. The hotel is near the station, on a quiet street. In the evening Emma walks to the bridge and looks at the river. She says, \"The city is beautiful at night.\" The airport is far, but she loves her city. She never wants to live in another place."
  ],
  "questions": [
   {
    "q": "How does Emma go to work?",
    "options": [
     "By car",
     "By bicycle",
     "By train"
    ],
    "answer": 2
   },
   {
    "q": "Why does she not use her car?",
    "options": [
     "It is old",
     "It is expensive",
     "There is a lot of traffic"
    ],
    "answer": 2
   },
   {
    "q": "What does the tourist ask?",
    "options": [
     "Where the airport is",
     "Where the hotel is",
     "Where the museum is"
    ],
    "answer": 2
   },
   {
    "q": "Where is the hotel for Emma's aunt?",
    "options": [
     "Near the station",
     "Near the bridge",
     "In the park"
    ],
    "answer": 0
   },
   {
    "q": "What does Emma do in the evening?",
    "options": [
     "Goes to the airport",
     "Walks to the bridge",
     "Buys a car"
    ],
    "answer": 1
   },
   {
    "q": "Where is Emma's street?",
    "options": [
     "Near the park",
     "Near the airport",
     "Near the river"
    ],
    "answer": 0
   },
   {
    "q": "What does the city have?",
    "options": [
     "A bridge, a square, a church and a museum",
     "Only a park",
     "A beach"
    ],
    "answer": 0
   },
   {
    "q": "Who does Emma walk with on Sunday morning?",
    "options": [
     "The tourist",
     "Her friend Clara",
     "Her aunt"
    ],
    "answer": 1
   },
   {
    "q": "What does Emma tell the tourist to do?",
    "options": [
     "Go to the airport",
     "Go straight on and turn left at the corner",
     "Take a bus"
    ],
    "answer": 1
   },
   {
    "q": "Where is the bank?",
    "options": [
     "On the left",
     "On the right",
     "Near the museum"
    ],
    "answer": 1
   },
   {
    "q": "What does the tourist give Emma?",
    "options": [
     "A map",
     "A small gift",
     "Some money"
    ],
    "answer": 1
   },
   {
    "q": "What does Emma buy in the afternoon?",
    "options": [
     "A ticket",
     "A map",
     "A hat"
    ],
    "answer": 1
   },
   {
    "q": "Why does Emma need money?",
    "options": [
     "For a car",
     "For a flight",
     "For the hotel for her aunt"
    ],
    "answer": 2
   },
   {
    "q": "What does Emma say about the city at night?",
    "options": [
     "It is beautiful",
     "It is dangerous",
     "It is noisy"
    ],
    "answer": 0
   },
   {
    "q": "Where is the airport?",
    "options": [
     "In the square",
     "Far from the city",
     "Next to her house"
    ],
    "answer": 1
   }
  ]
 },
 "places": {
  "title": "My town",
  "paragraphs": [
   "I live in a small town near the sea. In the centre there is a square with the town hall and an old church. Next to the church there is a bank and a post office. The police station is on the same street. Across the square there is a bakery that sells fresh bread every morning. I go there every day before work, and the baker always says hello to me and gives me a small cake.",
   "My flat is in a block on the third floor, and there is a lift. Near my flat there is a library, a bookshop and a small cafe. On Saturday I go to the sports centre to play tennis, and sometimes we swim in the swimming pool. The stadium is big, and on Sunday there is a football match. There is a disco too, but I do not go there. It is for young people, and it is very noisy.",
   "There is a castle on a hill near the town. In summer many tourists visit the castle and stay in a guesthouse or at the campsite near the beach. My uncle works in a factory outside the town. When I want new clothes, I go to the department store in the next town. There is a garage near my house, where my father repairs his car. I love my town: it is small, but it has everything I need."
  ],
  "questions": [
   {
    "q": "What is next to the church?",
    "options": [
     "A school",
     "A bank and a post office",
     "A cinema"
    ],
    "answer": 1
   },
   {
    "q": "Where does the narrator buy bread?",
    "options": [
     "At the supermarket",
     "At the cafe",
     "At the bakery"
    ],
    "answer": 2
   },
   {
    "q": "Where is the narrator's flat?",
    "options": [
     "On the third floor",
     "In a house",
     "On the first floor"
    ],
    "answer": 0
   },
   {
    "q": "Where do tourists stay near the beach?",
    "options": [
     "In a big hotel",
     "At a school",
     "In a guesthouse or at the campsite"
    ],
    "answer": 2
   },
   {
    "q": "Where does the uncle work?",
    "options": [
     "In a bank",
     "In a factory",
     "In a shop"
    ],
    "answer": 1
   },
   {
    "q": "Where is the town?",
    "options": [
     "In the mountains",
     "Near the sea",
     "Near a lake"
    ],
    "answer": 1
   },
   {
    "q": "What is in the centre of the town?",
    "options": [
     "A square with the town hall and an old church",
     "A factory",
     "A castle"
    ],
    "answer": 0
   },
   {
    "q": "Where is the police station?",
    "options": [
     "On the same street",
     "In the next town",
     "Far away"
    ],
    "answer": 0
   },
   {
    "q": "What does the baker give the narrator?",
    "options": [
     "A newspaper",
     "Free bread",
     "A small cake"
    ],
    "answer": 2
   },
   {
    "q": "What is near the narrator's flat?",
    "options": [
     "A factory",
     "A library, a bookshop and a cafe",
     "A stadium"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator do on Saturday?",
    "options": [
     "Plays tennis at the sports centre",
     "Goes to the castle",
     "Goes to the disco"
    ],
    "answer": 0
   },
   {
    "q": "Why does the narrator not go to the disco?",
    "options": [
     "It is expensive",
     "It is for young people and very noisy",
     "It is closed"
    ],
    "answer": 1
   },
   {
    "q": "Where is the castle?",
    "options": [
     "On a hill",
     "In the square",
     "At the beach"
    ],
    "answer": 0
   },
   {
    "q": "Where does the narrator go for new clothes?",
    "options": [
     "To the department store in the next town",
     "To the market",
     "To the bookshop"
    ],
    "answer": 0
   },
   {
    "q": "What does the narrator's father do at the garage?",
    "options": [
     "Works",
     "Buys bread",
     "Repairs his car"
    ],
    "answer": 2
   }
  ]
 },
 "directions": {
  "title": "Where is the bank?",
  "paragraphs": [
   "Tom is a tourist and he is lost in a new city. He sees a woman in the street and says, \"Excuse me, where is the bank?\" The woman says, \"It is not far. Go along this street and cross the bridge. Then you turn left at the corner.\" Tom says, \"Thank you!\" and he walks. But at the corner there are two streets, and Tom is not sure which one is the right one. He is in front of a big building and he looks at it.",
   "He asks a man at the crossroads. The man says, \"The bank is next to the church, opposite the station. Go to the roundabout and turn right.\" Tom goes to the roundabout, but he cannot see a church. He looks at his map. The map shows the north, the south, the east and the west. The bank is in the south of the city, so Tom walks to the south. Behind him there is a park, and in front of him there is a big square.",
   "Tom is happy now. The bank is here, between the church and a cafe! There is a cashpoint outside, and inside there is a small desk. Tom takes some money and then he sits in the cafe next to the bank. He says to the waiter, \"I am a tourist and I love this city. The people are very kind, and they always help me.\" The waiter smiles and says, \"Welcome! Your coffee is on the house.\""
  ],
  "questions": [
   {
    "q": "What does Tom ask the woman?",
    "options": [
     "Where the station is",
     "Where the bank is",
     "Where the hotel is"
    ],
    "answer": 1
   },
   {
    "q": "What does the woman say to cross?",
    "options": [
     "The river",
     "The park",
     "The bridge"
    ],
    "answer": 2
   },
   {
    "q": "Where is the bank, according to the man?",
    "options": [
     "In the park",
     "Next to the church, opposite the station",
     "Behind the school"
    ],
    "answer": 1
   },
   {
    "q": "Where is the bank in the city on the map?",
    "options": [
     "In the east",
     "In the south",
     "In the north"
    ],
    "answer": 1
   },
   {
    "q": "Where does Tom sit at the end?",
    "options": [
     "In the cafe next to the bank",
     "On the bridge",
     "In the park"
    ],
    "answer": 0
   },
   {
    "q": "How does Tom feel at the start?",
    "options": [
     "Lost",
     "Tired",
     "Happy"
    ],
    "answer": 0
   },
   {
    "q": "Who does he ask first?",
    "options": [
     "A waiter",
     "A woman in the street",
     "A policeman"
    ],
    "answer": 1
   },
   {
    "q": "What is at the corner?",
    "options": [
     "A bank",
     "A park",
     "Two streets"
    ],
    "answer": 2
   },
   {
    "q": "Where does he ask the second time?",
    "options": [
     "At the station",
     "At the crossroads",
     "At the cafe"
    ],
    "answer": 1
   },
   {
    "q": "Who does he ask the second time?",
    "options": [
     "A woman",
     "A child",
     "A man"
    ],
    "answer": 2
   },
   {
    "q": "Where does the man tell him to turn right?",
    "options": [
     "At the church",
     "At the bridge",
     "At the roundabout"
    ],
    "answer": 2
   },
   {
    "q": "What does Tom look at?",
    "options": [
     "A book",
     "His phone",
     "His map"
    ],
    "answer": 2
   },
   {
    "q": "What is outside the bank?",
    "options": [
     "A cashpoint",
     "A statue",
     "A fountain"
    ],
    "answer": 0
   },
   {
    "q": "What does the waiter say?",
    "options": [
     "The bank is closed",
     "Your coffee is on the house",
     "The cafe is full"
    ],
    "answer": 1
   },
   {
    "q": "What does Tom say about the people?",
    "options": [
     "They are rude",
     "They are very kind",
     "They are busy"
    ],
    "answer": 1
   }
  ]
 },
 "transport": {
  "title": "How we travel",
  "paragraphs": [
   "In my family everybody uses a different transport. My father goes to work by car, and he drives for forty minutes on the motorway. He needs petrol every week, and he leaves the car in a big car park. My mother takes the underground because the traffic in the city is terrible. She buys a ticket at the ticket office and waits on the platform. The train is fast, and she arrives at work in twenty minutes.",
   "My brother is a student and he goes to university by bicycle. He rides fast, but he always stops at the traffic light. He has a small motorbike too, but it is for the weekend. My sister is a pilot, so she flies a plane every day. In my city there is also a tram, and a bus stop near my house. I sometimes take a taxi when it rains, but a taxi is expensive, so I prefer the bus.",
   "At the weekend we go to the island by ferry. The ferry is big, with many passengers and some cars. A small boat takes us to the beach. On the road there is a lorry in front of us, and the driver is slow. Everybody wears a seat belt, because it is safe. In the port there is a very big ship. I love our transport, but my favourite way to travel is walking."
  ],
  "questions": [
   {
    "q": "How does the narrator's father go to work?",
    "options": [
     "By car",
     "By bicycle",
     "By bus"
    ],
    "answer": 0
   },
   {
    "q": "Where does the mother wait for the train?",
    "options": [
     "In the car park",
     "On the platform",
     "At the bus stop"
    ],
    "answer": 1
   },
   {
    "q": "How does the brother go to university?",
    "options": [
     "By car",
     "By tram",
     "By bicycle"
    ],
    "answer": 2
   },
   {
    "q": "What is the sister's job?",
    "options": [
     "She is a pilot",
     "She is a teacher",
     "She is a driver"
    ],
    "answer": 0
   },
   {
    "q": "How does the family go to the island?",
    "options": [
     "By ferry",
     "By train",
     "By plane"
    ],
    "answer": 0
   },
   {
    "q": "How long does the father drive?",
    "options": [
     "Forty minutes",
     "Ten minutes",
     "Two hours"
    ],
    "answer": 0
   },
   {
    "q": "What does the father need every week?",
    "options": [
     "A ticket",
     "Petrol",
     "A new car"
    ],
    "answer": 1
   },
   {
    "q": "Where does the father leave the car?",
    "options": [
     "At the station",
     "In a big car park",
     "At home"
    ],
    "answer": 1
   },
   {
    "q": "Why does the mother take the underground?",
    "options": [
     "The traffic in the city is terrible",
     "It is cheaper",
     "She likes trains"
    ],
    "answer": 0
   },
   {
    "q": "Where does the mother buy her ticket?",
    "options": [
     "At the bank",
     "At the ticket office",
     "On the train"
    ],
    "answer": 1
   },
   {
    "q": "How long is her journey?",
    "options": [
     "Five minutes",
     "Twenty minutes",
     "One hour"
    ],
    "answer": 1
   },
   {
    "q": "What does the brother do at the traffic light?",
    "options": [
     "He always stops",
     "He never stops",
     "He goes fast"
    ],
    "answer": 0
   },
   {
    "q": "What does the brother use at the weekend?",
    "options": [
     "A car",
     "A small motorbike",
     "A bicycle"
    ],
    "answer": 1
   },
   {
    "q": "Why does the narrator not like taxis?",
    "options": [
     "They are dirty",
     "They are slow",
     "They are expensive"
    ],
    "answer": 2
   },
   {
    "q": "What is the narrator's favourite way to travel?",
    "options": [
     "By ship",
     "Flying",
     "Walking"
    ],
    "answer": 2
   }
  ]
 },
 "school": {
  "title": "A day at school",
  "paragraphs": [
   "Tomas is a pupil at a big school. His classroom is on the first floor, and his desk is near the window. In the classroom there is a board, and the teacher writes on it. Tomas has a pen, a pencil, a rubber and a ruler in his bag. He also has a calculator for maths, and a heavy textbook. He puts everything on his desk before the lesson starts, and he is always ready.",
   "Today Tomas has a busy timetable. First he has maths, and then science. His favourite subject is history, but he also likes art and geography. At eleven o'clock there is a break, and the pupils play in the playground. After the break there is PE. They play football and Tomas scores a goal. He is very proud, and his friends say, \"Good job!\" The teacher is happy with the whole class.",
   "In the afternoon Tomas writes in his notebook and does his homework. He wants a good grade in the exam. His sister is at university and she studies science. She says, \"School is not easy, but it is important.\" Tomas thinks about the future. He wants to go to university too, and he wants to be an engineer. Every night he reads a little in his textbook, and then he goes to sleep."
  ],
  "questions": [
   {
    "q": "Where is Tomas's desk?",
    "options": [
     "Near the door",
     "Near the window",
     "At the back"
    ],
    "answer": 1
   },
   {
    "q": "What does Tomas have for maths?",
    "options": [
     "A ball",
     "A calculator",
     "A guitar"
    ],
    "answer": 1
   },
   {
    "q": "What is Tomas's favourite subject?",
    "options": [
     "History",
     "Maths",
     "Art"
    ],
    "answer": 0
   },
   {
    "q": "What does Tomas do at eleven o'clock?",
    "options": [
     "He has PE",
     "He goes home",
     "He has a break"
    ],
    "answer": 2
   },
   {
    "q": "What does Tomas want to be?",
    "options": [
     "A teacher",
     "An engineer",
     "A doctor"
    ],
    "answer": 1
   },
   {
    "q": "Where is Tomas's classroom?",
    "options": [
     "On the second floor",
     "On the first floor",
     "In the basement"
    ],
    "answer": 1
   },
   {
    "q": "What does the teacher write on?",
    "options": [
     "The desk",
     "The board",
     "The wall"
    ],
    "answer": 1
   },
   {
    "q": "What does Tomas have in his bag?",
    "options": [
     "A calculator only",
     "A pen, a pencil, a rubber and a ruler",
     "A football"
    ],
    "answer": 1
   },
   {
    "q": "What is heavy?",
    "options": [
     "His desk",
     "His pen",
     "His textbook"
    ],
    "answer": 2
   },
   {
    "q": "What subject does he have first today?",
    "options": [
     "Maths",
     "PE",
     "History"
    ],
    "answer": 0
   },
   {
    "q": "What do the pupils do at the break?",
    "options": [
     "They play in the playground",
     "They go home",
     "They study"
    ],
    "answer": 0
   },
   {
    "q": "What does Tomas do in PE?",
    "options": [
     "Reads a book",
     "Falls",
     "Scores a goal"
    ],
    "answer": 2
   },
   {
    "q": "What does Tomas do in the afternoon?",
    "options": [
     "Plays football",
     "Writes in his notebook and does homework",
     "Goes to the cinema"
    ],
    "answer": 1
   },
   {
    "q": "What does Tomas's sister study?",
    "options": [
     "Art",
     "Science",
     "History"
    ],
    "answer": 1
   },
   {
    "q": "What does Tomas do every night?",
    "options": [
     "Reads a little in his textbook",
     "Watches TV",
     "Plays games"
    ],
    "answer": 0
   }
  ]
 },
 "work": {
  "title": "A day at the office",
  "paragraphs": [
   "Marta has a good job in a big company. She works in an office in the city centre. Her boss is a nice man, and her colleagues are friendly. Every morning she turns on her computer and reads her emails. At ten o'clock she has a meeting with the customers. She is very busy, but she likes her work. Her office is on the second floor, and she has a big window and a small plant on her desk.",
   "Marta's salary is good, but the work is not easy. She has many questions every day, and she asks her colleague for help. Her colleague gives her the answer. At lunch they eat in a small restaurant. In the afternoon Marta answers the phone and writes a long email to a customer. At five o'clock she finishes work, and she is very tired. She says goodbye to her boss and goes home by bus.",
   "In the evening Marta is a student, too. She goes to school to learn English. Her teacher is from Ireland. In the lesson there is a big exam on Friday, and she has a lot of homework. She uses a dictionary and learns new words. Marta says, \"I am tired, but I am happy. I learn every day.\" Her boss knows that she studies English, and he says, \"That is a great idea. English is very important for our company.\""
  ],
  "questions": [
   {
    "q": "Where does Marta work?",
    "options": [
     "In an office",
     "In a shop",
     "In a school"
    ],
    "answer": 0
   },
   {
    "q": "When does she have the meeting?",
    "options": [
     "At nine o'clock",
     "At ten o'clock",
     "At lunch"
    ],
    "answer": 1
   },
   {
    "q": "Who helps her with the questions?",
    "options": [
     "Her teacher",
     "Her colleague",
     "Her boss"
    ],
    "answer": 1
   },
   {
    "q": "Where is her teacher from?",
    "options": [
     "Brazil",
     "Spain",
     "Ireland"
    ],
    "answer": 2
   },
   {
    "q": "When is the exam?",
    "options": [
     "On Friday",
     "On Monday",
     "Tomorrow"
    ],
    "answer": 0
   },
   {
    "q": "Where is Marta's office?",
    "options": [
     "At the airport",
     "In a village",
     "In the city centre"
    ],
    "answer": 2
   },
   {
    "q": "What is her boss like?",
    "options": [
     "Strict",
     "A nice man",
     "Angry"
    ],
    "answer": 1
   },
   {
    "q": "What does she do every morning?",
    "options": [
     "Turns on her computer and reads her emails",
     "Goes to school",
     "Has a meeting"
    ],
    "answer": 0
   },
   {
    "q": "What does she have on her desk?",
    "options": [
     "A big photo",
     "A clock",
     "A small plant"
    ],
    "answer": 2
   },
   {
    "q": "What floor is her office on?",
    "options": [
     "The second floor",
     "The first floor",
     "The tenth floor"
    ],
    "answer": 0
   },
   {
    "q": "Where do Marta and her colleague eat lunch?",
    "options": [
     "At the office",
     "At home",
     "In a small restaurant"
    ],
    "answer": 2
   },
   {
    "q": "How does Marta go home?",
    "options": [
     "By car",
     "On foot",
     "By bus"
    ],
    "answer": 2
   },
   {
    "q": "What does Marta do in the evening?",
    "options": [
     "Goes to school to learn English",
     "Goes to the gym",
     "Cooks"
    ],
    "answer": 0
   },
   {
    "q": "What does she use to learn new words?",
    "options": [
     "A dictionary",
     "A game",
     "A phone"
    ],
    "answer": 0
   },
   {
    "q": "What does her boss say about English?",
    "options": [
     "It is boring",
     "It is very important for the company",
     "It is useless"
    ],
    "answer": 1
   }
  ]
 },
 "feelings": {
  "title": "One day, many feelings",
  "paragraphs": [
   "Today is a strange day for Pedro. In the morning he is happy because the weather is beautiful and it is his first day of holidays. But then his phone rings, and it is his boss. Pedro is angry because he has a problem at work. He is also tired because he does not sleep well. He says, \"This is a bad start for a good day.\" He drinks a coffee and tries to be calm.",
   "At lunch Pedro meets his friend Ana. She is worried about her exam, and she is very nervous. Pedro says, \"Do not be afraid. English is difficult, but you are clever!\" Ana is surprised, because Pedro is usually bored and quiet. She says, \"You are kind today.\" Pedro smiles. He is proud of his friend, and she is excited about the end of the exam. They eat together and they talk for a long time.",
   "In the afternoon Pedro feels sad because his old friend lives far away and he is lonely sometimes. He calls his friend, and they talk for an hour. At the end of the day he feels better. The day is not bad, and he is happy again. \"A balanced life is good,\" he says. \"Old habits are bad, new ideas are beautiful!\" He goes to bed and sleeps well. Tomorrow is a new day, and it is an easy one."
  ],
  "questions": [
   {
    "q": "Why is Pedro happy in the morning?",
    "options": [
     "He has a new phone",
     "The weather is beautiful and it is his first day of holidays",
     "He has a new job"
    ],
    "answer": 1
   },
   {
    "q": "Who calls Pedro?",
    "options": [
     "His boss",
     "Ana",
     "His mother"
    ],
    "answer": 0
   },
   {
    "q": "Why is Ana nervous?",
    "options": [
     "She has a trip",
     "She has a party",
     "She has an exam"
    ],
    "answer": 2
   },
   {
    "q": "Why is Ana surprised?",
    "options": [
     "Pedro is late",
     "Pedro is usually bored and quiet",
     "Pedro is angry"
    ],
    "answer": 1
   },
   {
    "q": "How does Pedro feel at the end of the day?",
    "options": [
     "Afraid",
     "Angry",
     "Happy again"
    ],
    "answer": 2
   },
   {
    "q": "What is the weather like in the morning?",
    "options": [
     "Cold",
     "Rainy",
     "Beautiful"
    ],
    "answer": 2
   },
   {
    "q": "Why is Pedro angry?",
    "options": [
     "He has a problem at work",
     "He is hungry",
     "He lost his phone"
    ],
    "answer": 0
   },
   {
    "q": "Why is Pedro tired?",
    "options": [
     "He ran",
     "He worked all night",
     "He did not sleep well"
    ],
    "answer": 2
   },
   {
    "q": "What does Pedro drink?",
    "options": [
     "Water",
     "A coffee",
     "Tea"
    ],
    "answer": 1
   },
   {
    "q": "Who does Pedro meet at lunch?",
    "options": [
     "His friend Ana",
     "His boss",
     "His mother"
    ],
    "answer": 0
   },
   {
    "q": "What does Pedro say about English?",
    "options": [
     "It is difficult but Ana is clever",
     "It is boring",
     "It is easy"
    ],
    "answer": 0
   },
   {
    "q": "Why does Pedro feel sad in the afternoon?",
    "options": [
     "He is ill",
     "He lost his job",
     "His old friend lives far away"
    ],
    "answer": 2
   },
   {
    "q": "How long do Pedro and his friend talk?",
    "options": [
     "An hour",
     "All night",
     "Ten minutes"
    ],
    "answer": 0
   },
   {
    "q": "What does Pedro say about old habits?",
    "options": [
     "They are bad",
     "They are good",
     "They are beautiful"
    ],
    "answer": 0
   },
   {
    "q": "How does Pedro sleep at night?",
    "options": [
     "Very little",
     "Badly",
     "Well"
    ],
    "answer": 2
   }
  ]
 },
 "verbs": {
  "title": "A busy morning",
  "paragraphs": [
   "Every morning Rita makes breakfast for her family. She takes the bread, the milk and the cheese from the fridge and puts them on the table. She asks her children, \"What do you want?\" Her son says, \"I need a cup of milk, please.\" Her daughter says, \"I like bread with cheese.\" Rita gives them the food and says, \"Do not forget your bags!\" She loves her children very much, and she wants them to be happy at school.",
   "At school the teacher says, \"Look at the board. Open your books.\" Rita's son listens, but he does not understand one word. He asks, \"Can you say it again, please?\" The teacher is kind and she tells the word slowly. Then she shows a picture, and he finds the answer. He thinks, \"I know this word now. I remember it!\" The teacher says, \"Very good. Use the word in a sentence.\" He is proud.",
   "After school the children meet their friends. They wait for the bus together. Rita uses her phone to call her husband: \"Bring some fruit, please.\" In the evening the family has dinner. They love to be together, and they use the time to talk. Rita does the homework with her children, and then she makes a cake. \"I do this every day,\" she says, \"because I love my family.\" It is a simple life, but it is a happy one."
  ],
  "questions": [
   {
    "q": "What does Rita put on the table?",
    "options": [
     "A cake",
     "Bread, milk and cheese",
     "Fruit"
    ],
    "answer": 1
   },
   {
    "q": "What does her son need?",
    "options": [
     "A pen",
     "A cup of milk",
     "A book"
    ],
    "answer": 1
   },
   {
    "q": "What does the teacher show the son?",
    "options": [
     "A film",
     "A picture",
     "A map"
    ],
    "answer": 1
   },
   {
    "q": "What does Rita ask her husband to bring?",
    "options": [
     "Some fruit",
     "Bread",
     "Milk"
    ],
    "answer": 0
   },
   {
    "q": "What does Rita make in the evening?",
    "options": [
     "Soup",
     "A cake",
     "A salad"
    ],
    "answer": 1
   },
   {
    "q": "Who makes breakfast?",
    "options": [
     "The children",
     "Rita",
     "Her husband"
    ],
    "answer": 1
   },
   {
    "q": "What does the daughter like?",
    "options": [
     "Bread with cheese",
     "A cup of milk",
     "Fruit"
    ],
    "answer": 0
   },
   {
    "q": "What does Rita tell the children not to forget?",
    "options": [
     "Their books",
     "Their bags",
     "Their phones"
    ],
    "answer": 1
   },
   {
    "q": "What does the teacher tell the pupils to open?",
    "options": [
     "Their books",
     "The windows",
     "The door"
    ],
    "answer": 0
   },
   {
    "q": "What does the son not understand?",
    "options": [
     "The whole lesson",
     "The teacher's name",
     "One word"
    ],
    "answer": 2
   },
   {
    "q": "How does the teacher say the word?",
    "options": [
     "Loudly",
     "Quickly",
     "Slowly"
    ],
    "answer": 2
   },
   {
    "q": "What does the son find with the picture?",
    "options": [
     "His friend",
     "The door",
     "The answer"
    ],
    "answer": 2
   },
   {
    "q": "What does the teacher ask him to do?",
    "options": [
     "Write his name",
     "Read a book",
     "Use the word in a sentence"
    ],
    "answer": 2
   },
   {
    "q": "Who does Rita call after school?",
    "options": [
     "The teacher",
     "Her mother",
     "Her husband"
    ],
    "answer": 2
   },
   {
    "q": "What does Rita do with the children in the evening?",
    "options": [
     "Sports",
     "Their homework",
     "Shopping"
    ],
    "answer": 1
   }
  ]
 },
 "awl2": {
  "title": "A policy in transition",
  "paragraphs": [
   "When a government changes an economic policy, the transition rarely happens without conflict. Imagine that a country decides to alter its system of social welfare. The stability of the budget depends on a small number of external factors, such as the price of energy and the growth of the economy, and a minor adjustment can have a major effect on the revenue. Before approving the new law, the parliament starts a public consultation, so that citizens and experts can give their opinions on the first draft.",
   "The text of the law includes a series of clauses. One of them enables families on low incomes to receive support during the first months of unemployment, while another facilitates access to training programmes. Opponents claim that the capacity of the state to pay for these benefits is limited. They also argue that the logic of the plan is weak, because it replaces one form of support with an equivalent one, and that the substitution does not solve the real problem, which is the lack of jobs.",
   "Supporters, who are mostly liberal, answer that the expansion of the programme is necessary. They say that the evolution of the labour market, with more temporary contracts and less security, requires a different approach. In their view, the discretion of local authorities should be reduced, because a unified system produces a better ratio between costs and benefits. After months of debate, a compromise is reached. The law enters into force with a clause that allows a review after three years. Whether this is a success will depend on the economic situation, but the process shows that a democratic society can alter its rules without losing its stability."
  ],
  "questions": [
   {
    "q": "What does the parliament start before approving the law?",
    "options": [
     "An election",
     "A strike",
     "A public consultation"
    ],
    "answer": 2
   },
   {
    "q": "What does one clause enable?",
    "options": [
     "A new school",
     "Support for families in the first months of unemployment",
     "A tax rise"
    ],
    "answer": 1
   },
   {
    "q": "What do opponents argue about the logic of the plan?",
    "options": [
     "It is too expensive only",
     "It is weak because it replaces one support with an equivalent one",
     "It is too simple"
    ],
    "answer": 1
   },
   {
    "q": "What do supporters say is necessary?",
    "options": [
     "Higher taxes",
     "Fewer jobs",
     "Expansion of the programme"
    ],
    "answer": 2
   },
   {
    "q": "What does the final compromise include?",
    "options": [
     "No changes",
     "A new election",
     "A clause allowing a review after three years"
    ],
    "answer": 2
   },
   {
    "q": "What does a government decide to alter?",
    "options": [
     "The constitution",
     "Its system of social welfare",
     "The flag"
    ],
    "answer": 1
   },
   {
    "q": "What does the stability of the budget depend on?",
    "options": [
     "Only luck",
     "Only taxes",
     "External factors like the price of energy and growth"
    ],
    "answer": 2
   },
   {
    "q": "What can a minor adjustment affect?",
    "options": [
     "The age of retirement",
     "The weather",
     "The revenue"
    ],
    "answer": 2
   },
   {
    "q": "What do citizens and experts give opinions on?",
    "options": [
     "The final law",
     "The budget of last year",
     "The first draft"
    ],
    "answer": 2
   },
   {
    "q": "What does another clause facilitate?",
    "options": [
     "Access to loans",
     "Access to housing",
     "Access to training programmes"
    ],
    "answer": 2
   },
   {
    "q": "What do opponents say about the state's capacity?",
    "options": [
     "It is growing",
     "It is limited",
     "It is unlimited"
    ],
    "answer": 1
   },
   {
    "q": "What do supporters call for?",
    "options": [
     "A new election",
     "The end of the programme",
     "The expansion of the programme"
    ],
    "answer": 2
   },
   {
    "q": "How are the supporters described?",
    "options": [
     "Mostly conservative",
     "Neutral",
     "Mostly liberal"
    ],
    "answer": 2
   },
   {
    "q": "What should be reduced, in their view?",
    "options": [
     "The budget",
     "The discretion of local authorities",
     "The programmes"
    ],
    "answer": 1
   },
   {
    "q": "What can a democratic society do?",
    "options": [
     "Change everything quickly",
     "Alter its rules without losing stability",
     "Never change"
    ],
    "answer": 1
   }
  ]
 },
 "research": {
  "title": "Do students sleep enough?",
  "paragraphs": [
   "A group of researchers wanted to find out whether secondary school students sleep enough. First they chose a sample of two thousand students from different schools, and they sent a questionnaire to every respondent. The questions were about the time they went to bed, the number of hours they slept and their marks. This was a quantitative study, because it was based on numbers, and the researchers also did a qualitative study with twenty interviews, in order to understand the reasons behind the data.",
   "When the results arrived, they analysed the data set carefully. The average was seven hours of sleep per night, but the median was only six and a half, which means that a large percentage of students slept much less than the recommended amount. The team looked for an outlier, a student who slept twelve hours, and decided to exclude this case. A small proportion of the respondents also gave answers that seemed to be an anomaly, so the researchers checked the validity of the questionnaire. They calculated a margin of error of three per cent.",
   "The study showed a correlation between sleep and marks: students who slept less had lower marks. But the authors warned that correlation does not prove causation, because other variables, such as family income, could also play a role. To avoid bias, a control group followed a normal routine, while another group went to bed earlier for a month. The reliability of the research was increased by this longitudinal design, and the article passed peer review. Other teams now want to replicate the experiment. As the lead researcher says, \"A single study never settles a question, but it shows us where to look next.\""
  ],
  "questions": [
   {
    "q": "How many students were in the sample?",
    "options": [
     "Twenty",
     "Two hundred",
     "Two thousand"
    ],
    "answer": 2
   },
   {
    "q": "What was the median amount of sleep?",
    "options": [
     "Seven hours",
     "Twelve hours",
     "Six and a half hours"
    ],
    "answer": 2
   },
   {
    "q": "What did the researchers do with the outlier?",
    "options": [
     "Added more cases",
     "Ignored the questionnaire",
     "Excluded the case"
    ],
    "answer": 2
   },
   {
    "q": "What does the text say correlation does not prove?",
    "options": [
     "Validity",
     "Reliability",
     "Causation"
    ],
    "answer": 2
   },
   {
    "q": "What did a control group do?",
    "options": [
     "Left the study",
     "Followed a normal routine",
     "Went to bed earlier"
    ],
    "answer": 1
   },
   {
    "q": "What did the researchers want to find out?",
    "options": [
     "Whether homework is useful",
     "Whether students like school",
     "Whether secondary school students sleep enough"
    ],
    "answer": 2
   },
   {
    "q": "What did every respondent receive?",
    "options": [
     "A book",
     "A questionnaire",
     "A phone"
    ],
    "answer": 1
   },
   {
    "q": "What were the questions about?",
    "options": [
     "Bedtime, hours of sleep and marks",
     "Food and sport",
     "Family and money"
    ],
    "answer": 0
   },
   {
    "q": "What does a quantitative study use?",
    "options": [
     "Photos",
     "Numbers",
     "Interviews"
    ],
    "answer": 1
   },
   {
    "q": "How many interviews did the qualitative study have?",
    "options": [
     "Two hundred",
     "Twenty",
     "Two"
    ],
    "answer": 1
   },
   {
    "q": "What was the average sleep per night?",
    "options": [
     "Five hours",
     "Nine hours",
     "Seven hours"
    ],
    "answer": 2
   },
   {
    "q": "How long did the outlier student sleep?",
    "options": [
     "Ten hours",
     "Three hours",
     "Twelve hours"
    ],
    "answer": 2
   },
   {
    "q": "What margin of error did they calculate?",
    "options": [
     "Three per cent",
     "One per cent",
     "Thirty per cent"
    ],
    "answer": 0
   },
   {
    "q": "What was another variable that could play a role?",
    "options": [
     "Weather",
     "Family income",
     "Age"
    ],
    "answer": 1
   },
   {
    "q": "What did the second group do?",
    "options": [
     "Stopped studying",
     "Slept in school",
     "Went to bed earlier for a month"
    ],
    "answer": 2
   }
  ]
 },
 "linguistics": {
  "title": "Learning a language",
  "paragraphs": [
   "Language is much more than a list of words. Linguists study vocabulary, spelling, syntax and punctuation, but also the way people use all of them in practice. A child who grows up with one language learns its mother tongue naturally, and a bilingual child often moves from one to the other without effort. For an adult, the process is slower. Pronunciation and accent are particularly hard, and many learners mispronounce certain sounds even after years of study.",
   "Another challenge is the difference between written and spoken language. Spoken English is full of slang, idiomatic expressions and proverbs that never appear in a textbook, and a native speaker may use a dialect that changes from one region to another. A pun, a tongue-twister or a loanword can also confuse a foreigner. The etymology of a word often explains its meaning, because many English words come from Latin, French or Germanic roots. Learning common collocations, such as \"make a decision\", is more useful than memorising isolated words.",
   "Today English is a lingua franca, used by speakers from every continent, and many of them have a language barrier of their own. Interpreters help in meetings and conferences, but most people have to manage by themselves. The best advice from teachers is to read and listen a lot, to speak without fear of mistakes and to pay attention to the subtext of a conversation: what is implied, not only what is said. Fluency does not mean perfection, it means communicating with confidence. A language is a living thing, and every speaker, whether native or not, contributes a little to its evolution."
  ],
  "questions": [
   {
    "q": "What do linguists study besides words?",
    "options": [
     "Spelling, syntax and punctuation",
     "Only literature",
     "Only grammar"
    ],
    "answer": 0
   },
   {
    "q": "What is a difficulty for adult learners?",
    "options": [
     "Pronunciation and accent",
     "Counting",
     "Reading"
    ],
    "answer": 0
   },
   {
    "q": "What explains the meaning of a word?",
    "options": [
     "Its etymology",
     "Its length",
     "Its spelling"
    ],
    "answer": 0
   },
   {
    "q": "What is more useful than isolated words?",
    "options": [
     "Learning only slang",
     "Reading dictionaries",
     "Learning common collocations"
    ],
    "answer": 2
   },
   {
    "q": "What does fluency mean?",
    "options": [
     "Being perfect",
     "Speaking fast",
     "Communicating with confidence"
    ],
    "answer": 2
   },
   {
    "q": "How does a child with one language learn it?",
    "options": [
     "Only at school",
     "Naturally",
     "With great difficulty"
    ],
    "answer": 1
   },
   {
    "q": "What does a bilingual child often do?",
    "options": [
     "Moves from one language to the other without effort",
     "Forgets a language",
     "Mixes them badly"
    ],
    "answer": 0
   },
   {
    "q": "What are particularly hard for an adult?",
    "options": [
     "Reading",
     "Counting",
     "Pronunciation and accent"
    ],
    "answer": 2
   },
   {
    "q": "What is spoken English full of?",
    "options": [
     "Only formal words",
     "Slang, idiomatic expressions and proverbs",
     "Long sentences"
    ],
    "answer": 1
   },
   {
    "q": "What can change from one region to another?",
    "options": [
     "A native speaker's dialect",
     "The alphabet",
     "The grammar completely"
    ],
    "answer": 0
   },
   {
    "q": "What can confuse a foreigner?",
    "options": [
     "Colours",
     "A pun, a tongue-twister or a loanword",
     "Numbers"
    ],
    "answer": 1
   },
   {
    "q": "Where do many English words come from?",
    "options": [
     "Arabic only",
     "Chinese",
     "Latin, French or Germanic roots"
    ],
    "answer": 2
   },
   {
    "q": "What is English today?",
    "options": [
     "A lingua franca",
     "A secret code",
     "A dead language"
    ],
    "answer": 0
   },
   {
    "q": "Who helps in meetings and conferences?",
    "options": [
     "Teachers",
     "Friends",
     "Interpreters"
    ],
    "answer": 2
   },
   {
    "q": "What is a language, according to the end?",
    "options": [
     "A fixed system",
     "A list of words",
     "A living thing"
    ],
    "answer": 2
   }
  ]
 },
 "ethics": {
  "title": "The whistleblower",
  "paragraphs": [
   "Mara works as an accountant in a large company. One day she discovers that her bosses have been paying large amounts of money to officials in order to win public contracts. She knows that this is corruption, and she faces a serious moral dilemma. If she speaks, she may lose her job and her reputation, and she knows that other employees will not support her. If she keeps silent, she will have to live with a guilty conscience.",
   "After weeks of doubt, Mara decides to act. She sends the documents to a journalist and to a charity that defends civil rights. She becomes a whistleblower. The company responds with threats, and some colleagues call her a traitor. But an organisation that promotes transparency offers her legal advice, and thousands of citizens write messages of support. The investigation shows that she was right, and several managers are brought to court. A new law now protects whistleblowers and empowers them to report abuses without fear.",
   "Her case raises broader questions about justice and fairness. Why do some people have the privilege of avoiding punishment, while the most vulnerable are often exploited or marginalised? How can a society reduce inequality and increase social mobility? Activists argue that tolerance and equity are not abstract ideals, but practical principles that need a strict code of conduct and strong institutions. Others warn against conformity and say that dissent is the engine of progress. Mara does not consider herself a hero. \"I only did what I could not avoid doing,\" she says. \"A conscience is not something you can switch off.\""
  ],
  "questions": [
   {
    "q": "What does Mara discover?",
    "options": [
     "Her bosses pay money to officials for contracts",
     "Her colleagues are lazy",
     "Her company is losing money"
    ],
    "answer": 0
   },
   {
    "q": "What does she do after weeks of doubt?",
    "options": [
     "She sends the documents to a journalist and a charity",
     "She says nothing",
     "She resigns"
    ],
    "answer": 0
   },
   {
    "q": "What does a new law do?",
    "options": [
     "Closes the company",
     "Protects whistleblowers",
     "Increases salaries"
    ],
    "answer": 1
   },
   {
    "q": "What do activists say about tolerance and equity?",
    "options": [
     "They are practical principles",
     "They are not important",
     "They are old ideas"
    ],
    "answer": 0
   },
   {
    "q": "What does Mara say a conscience is?",
    "options": [
     "A secret",
     "Not something you can switch off",
     "A weakness"
    ],
    "answer": 1
   },
   {
    "q": "What is Mara's profession?",
    "options": [
     "Accountant",
     "Lawyer",
     "Journalist"
    ],
    "answer": 0
   },
   {
    "q": "What is happening in the company?",
    "options": [
     "The company is losing money",
     "Money is paid to officials to win public contracts",
     "There is a strike"
    ],
    "answer": 1
   },
   {
    "q": "What will happen if she keeps silent?",
    "options": [
     "She will lose her job",
     "She will be promoted",
     "She will have a guilty conscience"
    ],
    "answer": 2
   },
   {
    "q": "What do some colleagues call her?",
    "options": [
     "A traitor",
     "A friend",
     "A hero"
    ],
    "answer": 0
   },
   {
    "q": "What does an organisation offer her?",
    "options": [
     "Money",
     "Legal advice",
     "A new job"
    ],
    "answer": 1
   },
   {
    "q": "How do citizens react?",
    "options": [
     "They protest against her",
     "They ignore her",
     "Thousands send messages of support"
    ],
    "answer": 2
   },
   {
    "q": "What happens to several managers?",
    "options": [
     "They resign immediately",
     "They are promoted",
     "They are brought to court"
    ],
    "answer": 2
   },
   {
    "q": "What do some people warn against?",
    "options": [
     "Equality",
     "Dissent",
     "Conformity"
    ],
    "answer": 2
   },
   {
    "q": "Who does Mara not consider herself?",
    "options": [
     "A worker",
     "A hero",
     "A citizen"
    ],
    "answer": 1
   },
   {
    "q": "What does Mara send to a journalist and to a charity?",
    "options": [
     "A letter",
     "The documents",
     "Her CV"
    ],
    "answer": 1
   }
  ]
 },
 "trade": {
  "title": "A pair of shoes",
  "paragraphs": [
   "Take a pair of sports shoes. The design was made in the United States, the leather comes from South America, the rubber from Asia, and the shoes are assembled in a factory in Vietnam. A multinational company coordinates the whole supply chain, and the finished product is shipped to Europe, where it is sold at a high price. This simple example shows how global trade works: each country specialises in what it does best, and the exchange of goods makes many products cheaper.",
   "Supporters of free trade say that it increases growth and helps emerging markets to develop. They point out that the GDP per capita of many Asian countries has risen sharply thanks to exports. But there are also serious criticisms. In some factories, workers earn very little and work in conditions similar to those of a sweatshop. A country with a large trade deficit may lose jobs when its industry cannot compete with imports. That is why some governments introduce tariffs and customs duty to protect local producers, a policy known as protectionism.",
   "Sometimes the situation escalates. When two big economies impose tariffs on each other, a trade war begins, and the consequences affect everybody: prices rise, the exchange rate becomes unstable and shipping costs increase. An embargo, which stops all trade with a country, can have even more dramatic effects. Bilateral agreements and fair trade labels try to create a more balanced system, and many consumers now pay more for products that guarantee decent wages. Outsourcing continues to move production to cheaper places, but experts say that the future will depend on a delicate balance between low prices, fair working conditions and the protection of the environment."
  ],
  "questions": [
   {
    "q": "Where are the shoes assembled?",
    "options": [
     "In the United States",
     "In Europe",
     "In a factory in Vietnam"
    ],
    "answer": 2
   },
   {
    "q": "What do supporters of free trade say?",
    "options": [
     "It destroys all jobs",
     "It raises all prices",
     "It increases growth and helps emerging markets"
    ],
    "answer": 2
   },
   {
    "q": "Why do some governments introduce tariffs?",
    "options": [
     "To end trade",
     "To protect local producers",
     "To increase imports"
    ],
    "answer": 1
   },
   {
    "q": "What happens in a trade war?",
    "options": [
     "Prices fall",
     "Trade becomes fair",
     "Prices rise and the exchange rate becomes unstable"
    ],
    "answer": 2
   },
   {
    "q": "What do many consumers now pay more for?",
    "options": [
     "Imported shoes only",
     "Products that guarantee decent wages",
     "Cheaper goods"
    ],
    "answer": 1
   },
   {
    "q": "Where is the design of the shoes made?",
    "options": [
     "In Vietnam",
     "In Asia",
     "In the United States"
    ],
    "answer": 2
   },
   {
    "q": "Where does the leather come from?",
    "options": [
     "Europe",
     "Asia",
     "South America"
    ],
    "answer": 2
   },
   {
    "q": "Who coordinates the whole supply chain?",
    "options": [
     "A small shop",
     "The government",
     "A multinational company"
    ],
    "answer": 2
   },
   {
    "q": "What does each country do?",
    "options": [
     "Makes everything",
     "Specialises in what it does best",
     "Buys everything"
    ],
    "answer": 1
   },
   {
    "q": "What has risen sharply in many Asian countries?",
    "options": [
     "The prices",
     "The unemployment",
     "The GDP per capita"
    ],
    "answer": 2
   },
   {
    "q": "What are the working conditions in some factories like?",
    "options": [
     "Luxurious",
     "Similar to those of a sweatshop",
     "Excellent"
    ],
    "answer": 1
   },
   {
    "q": "What may a country with a large trade deficit lose?",
    "options": [
     "Jobs",
     "Land",
     "Customers"
    ],
    "answer": 0
   },
   {
    "q": "What is protectionism?",
    "options": [
     "Free trade",
     "Introducing tariffs to protect local producers",
     "Closing all factories"
    ],
    "answer": 1
   },
   {
    "q": "What does an embargo do?",
    "options": [
     "Stops all trade with a country",
     "Lowers prices",
     "Increases exports"
    ],
    "answer": 0
   },
   {
    "q": "What do bilateral agreements and fair trade labels try to create?",
    "options": [
     "A more balanced system",
     "More conflicts",
     "Higher prices"
    ],
    "answer": 0
   }
  ]
 },
 "animalidioms": {
  "title": "A family meeting",
  "paragraphs": [
   "Last Sunday my family had a meeting about the house that my grandfather left us. For weeks nobody wanted to talk about it, and money was the elephant in the room. My uncle thought that the oldest son should get the lion's share, and my aunt, who is the black sheep of the family, said that this was unfair. I felt like a fish out of water, because I do not usually take part in these arguments, and I had butterflies in my stomach.",
   "At the beginning, my cousin tried to take the bull by the horns and suggested a simple plan: sell the house and divide the money equally. My uncle, however, said that it was a wild goose chase, because the house was worth much less than we thought. Somebody accused my aunt of crying wolf, and she answered that his accusation was barking up the wrong tree. In the middle of the discussion, my mother told us to hold our horses and listen to each other before saying anything else.",
   "It was raining cats and dogs outside, so nobody could leave the house. After two hours, we realised that the real problem was only the tip of the iceberg: for years there had been resentment, and the house was just an excuse. I decided to let sleeping dogs lie at first, but in the end I spoke. I said that a family is not a bank, and that the early bird does not always catch the worm. Everyone laughed, and the tension disappeared. A bird's-eye view of the situation helped us to see that we could kill two birds with one stone: sell the house and organise a trip together with the money."
  ],
  "questions": [
   {
    "q": "What was the elephant in the room?",
    "options": [
     "The food",
     "The weather",
     "Money"
    ],
    "answer": 2
   },
   {
    "q": "Who thought that the oldest son should get the lion's share?",
    "options": [
     "The uncle",
     "The aunt",
     "The mother"
    ],
    "answer": 0
   },
   {
    "q": "What did the cousin suggest?",
    "options": [
     "Buying a new house",
     "Selling the house and dividing the money equally",
     "Keeping the house"
    ],
    "answer": 1
   },
   {
    "q": "What was the real problem?",
    "options": [
     "Resentment built up over years",
     "The weather",
     "A lost key"
    ],
    "answer": 0
   },
   {
    "q": "What was the final solution?",
    "options": [
     "Divide the house",
     "Rent the house",
     "Sell the house and organise a trip together"
    ],
    "answer": 2
   },
   {
    "q": "What did the family have a meeting about?",
    "options": [
     "The house that the grandfather left",
     "A wedding",
     "A holiday"
    ],
    "answer": 0
   },
   {
    "q": "Who is the black sheep of the family?",
    "options": [
     "The aunt",
     "The uncle",
     "The narrator"
    ],
    "answer": 0
   },
   {
    "q": "How did the narrator feel at the meeting?",
    "options": [
     "Like a fish out of water",
     "Very happy",
     "Very angry"
    ],
    "answer": 0
   },
   {
    "q": "Who suggested a simple plan?",
    "options": [
     "The cousin",
     "The mother",
     "The uncle"
    ],
    "answer": 0
   },
   {
    "q": "What did the uncle say about the house?",
    "options": [
     "It was worth a lot",
     "It was worth much less than they thought",
     "It was a gift"
    ],
    "answer": 1
   },
   {
    "q": "What was the weather like outside?",
    "options": [
     "It was snowing",
     "It was sunny",
     "It was raining cats and dogs"
    ],
    "answer": 2
   },
   {
    "q": "Who told everybody to hold their horses?",
    "options": [
     "The cousin",
     "The mother",
     "The aunt"
    ],
    "answer": 1
   },
   {
    "q": "How long did it take to realise the real problem?",
    "options": [
     "Two minutes",
     "Two hours",
     "Two days"
    ],
    "answer": 1
   },
   {
    "q": "What did the narrator say a family is not?",
    "options": [
     "A school",
     "A bank",
     "A team"
    ],
    "answer": 1
   },
   {
    "q": "What did the narrator say about the early bird?",
    "options": [
     "It always catches the worm",
     "It sleeps late",
     "It does not always catch the worm"
    ],
    "answer": 2
   }
  ]
 },
 "phrasal3": {
  "title": "A difficult year",
  "paragraphs": [
   "Last year my company almost broke down. In January we came down with a series of problems: the main client called off a large order, and our best engineer fell for an offer from a rival firm. The plan that we had prepared for months started to fall apart. My boss told me that she could not keep up with the work any more and asked me to sort out the situation as soon as possible. I had to fill in many documents, hand in a report to the bank and show the managers a new plan.",
   "At first I tried to put off the difficult decisions, but my team, who had never let me down, helped me to move on. We decided that we would not give away our best ideas to the competitors, and we looked at every cost. Some machines had worn out, and the old software had started to break down every week. When a colleague tried to show off in front of the director with an incomplete project, I made out that he was trying to hide a mistake, and I told the boss.",
   "In the spring things started to turn out better. A new client backed up our proposal, a storm that cut off the road to our factory did not last long, and slowly we got over the worst. My father, who always says that \"what stands for hard work is also what gets you through\", was proud of me. He told me that I take after my grandmother, who never gave up. Now I know that every crisis, if you get through it, teaches you something important about your strength and about the people around you."
  ],
  "questions": [
   {
    "q": "What did the main client do in January?",
    "options": [
     "Called off a large order",
     "Bought more",
     "Moved to another country"
    ],
    "answer": 0
   },
   {
    "q": "What did the narrator's team do?",
    "options": [
     "Left the company",
     "Helped her to move on",
     "Went on strike"
    ],
    "answer": 1
   },
   {
    "q": "What happened to some machines?",
    "options": [
     "They were stolen",
     "They had worn out",
     "They were new"
    ],
    "answer": 1
   },
   {
    "q": "What happened in the spring?",
    "options": [
     "Things began to turn out better",
     "The boss resigned",
     "The company closed"
    ],
    "answer": 0
   },
   {
    "q": "Who does the narrator take after?",
    "options": [
     "Her grandmother",
     "Her father",
     "Her boss"
    ],
    "answer": 0
   },
   {
    "q": "What did the best engineer do?",
    "options": [
     "Retired",
     "Fell for an offer from a rival firm",
     "Called off a large order"
    ],
    "answer": 1
   },
   {
    "q": "What happened to the plan prepared for months?",
    "options": [
     "It was sold",
     "It started to fall apart",
     "It was a success"
    ],
    "answer": 1
   },
   {
    "q": "What did the boss ask the narrator to do?",
    "options": [
     "Sort out the situation as soon as possible",
     "Go on holiday",
     "Resign"
    ],
    "answer": 0
   },
   {
    "q": "What did the narrator have to hand in?",
    "options": [
     "A letter to the client",
     "A new car",
     "A report to the bank"
    ],
    "answer": 2
   },
   {
    "q": "What did the narrator try to do at first?",
    "options": [
     "Ask for help",
     "Take all the decisions",
     "Put off the difficult decisions"
    ],
    "answer": 2
   },
   {
    "q": "What did the team decide not to give away?",
    "options": [
     "Their money",
     "Their jobs",
     "Their best ideas to the competitors"
    ],
    "answer": 2
   },
   {
    "q": "What happened to the old software?",
    "options": [
     "It was stolen",
     "It started to break down every week",
     "It was replaced"
    ],
    "answer": 1
   },
   {
    "q": "What did the colleague try to do in front of the director?",
    "options": [
     "Leave the room",
     "Make a speech",
     "Show off with an incomplete project"
    ],
    "answer": 2
   },
   {
    "q": "What did a new client do?",
    "options": [
     "Called off the order",
     "Left the company",
     "Backed up the proposal"
    ],
    "answer": 2
   },
   {
    "q": "What did the storm do?",
    "options": [
     "Closed the bank",
     "Destroyed the factory",
     "Cut off the road to the factory for a short time"
    ],
    "answer": 2
   }
  ]
 },
 "narrative": {
  "title": "The structure of a story",
  "paragraphs": [
   "Every story has a structure, and understanding it helps us to read, and to write, better. The narrator, who may be the main character or an outside voice, tells events in a certain order. At the centre of the plot is the protagonist, a person who wants something and faces obstacles to get it, often because of an antagonist, whose goals are opposed. In many novels, a flashback takes us back in time and explains why a character behaves in a certain way, while foreshadowing gives small signs of what is going to happen later.",
   "The plot usually moves towards a climax, the moment of greatest tension, and then towards a denouement, in which the conflicts are resolved. A good writer may surprise us with a plot twist that changes how we see the whole story. Besides the structure, writers use a variety of devices. Imagery creates pictures in the reader's mind, and symbolism gives an object a deeper meaning, such as a dove that stands for peace. A motif is an idea that returns throughout the work, and personification gives human qualities to things, as in \"the wind whispered\".",
   "Different genres use these tools in different ways. A tragedy ends with a disaster, a satire criticises society with humour, and a memoir tells the real life of the author. In poetry, each stanza may have a rhyme, and a sonnet, with its fourteen lines, follows strict rules. Prose, on the other hand, is freer. An anthology brings together texts by different authors, so that the reader can compare styles. Alliteration and onomatopoeia add music to the language. Understanding all these terms does not make a work less beautiful: it allows us to see how it was built, and to admire the craft that hides behind every well-told story."
  ],
  "questions": [
   {
    "q": "What is a protagonist?",
    "options": [
     "The author",
     "An opponent only",
     "The person who wants something and faces obstacles"
    ],
    "answer": 2
   },
   {
    "q": "What does a flashback do?",
    "options": [
     "Introduces a villain",
     "Ends the story",
     "Takes us back in time"
    ],
    "answer": 2
   },
   {
    "q": "What is the climax?",
    "options": [
     "The moment of greatest tension",
     "The final sentence",
     "The first scene"
    ],
    "answer": 0
   },
   {
    "q": "What does a sonnet have?",
    "options": [
     "No rules",
     "Four stanzas",
     "Fourteen lines"
    ],
    "answer": 2
   },
   {
    "q": "What does an anthology do?",
    "options": [
     "Criticises society",
     "Tells the life of one author",
     "Brings together texts by different authors"
    ],
    "answer": 2
   },
   {
    "q": "Who may the narrator be?",
    "options": [
     "Only a child",
     "Only the author",
     "The main character or an outside voice"
    ],
    "answer": 2
   },
   {
    "q": "Who has goals that are opposed to those of the protagonist?",
    "options": [
     "The reader",
     "The narrator",
     "The antagonist"
    ],
    "answer": 2
   },
   {
    "q": "What does foreshadowing give?",
    "options": [
     "Small signs of what will happen later",
     "A happy ending",
     "A summary"
    ],
    "answer": 0
   },
   {
    "q": "What follows the climax?",
    "options": [
     "The denouement",
     "The beginning",
     "The twist"
    ],
    "answer": 0
   },
   {
    "q": "What can a plot twist do?",
    "options": [
     "End the story",
     "Change how we see the whole story",
     "Make it shorter"
    ],
    "answer": 1
   },
   {
    "q": "What does imagery create?",
    "options": [
     "Pictures in the reader's mind",
     "Songs",
     "Rhymes"
    ],
    "answer": 0
   },
   {
    "q": "What can a dove stand for?",
    "options": [
     "Hunger",
     "Peace",
     "War"
    ],
    "answer": 1
   },
   {
    "q": "What is a motif?",
    "options": [
     "A sonnet",
     "An idea that returns throughout the work",
     "A title"
    ],
    "answer": 1
   },
   {
    "q": "What does a tragedy end with?",
    "options": [
     "A joke",
     "A wedding",
     "A disaster"
    ],
    "answer": 2
   },
   {
    "q": "What does a satire do?",
    "options": [
     "Describes nature",
     "Criticises society with humour",
     "Tells the author's real life"
    ],
    "answer": 1
   }
  ]
 },
 "reasoning": {
  "title": "Why do people believe?",
  "paragraphs": [
   "Why do some opinions spread so quickly, while others disappear? Psychologists have studied this question for decades. When we try to infer the truth from a piece of news, we usually do it quickly, and we speculate about missing details. It is hard to discern what is true when we are exposed to thousands of messages every day. Some people allege that the media have a bias, and others say that the social networks exacerbate this problem because their algorithms foster the spread of extreme opinions.",
   "A rational discussion requires a different attitude. A good thinker deliberates before concluding, and tries to reconcile different points of view. If he finds an error in his own reasoning, he rectifies it, instead of defending it. Evidence that bolsters an argument is welcome, but evidence that undermines it must be considered too. Experts often warn that a bad habit, such as using only sources that confirm what we already believe, can hamper our understanding and impede progress.",
   "How can we improve the quality of public debate? First, schools can foster critical thinking and teach students to glean useful information from reliable sources. Second, institutions should be transparent, to avoid doubts that undermine trust. Third, laws should not curtail freedom of expression, but they can mitigate the effects of deliberate lies. Finally, each of us can try to alleviate tension by explaining our views instead of attacking others. Of course, some people will try to circumvent the rules, and no solution is perfect. Yet a society that ameliorates the way it argues is better prepared to elucidate its problems, and to underpin its decisions with facts rather than fear."
  ],
  "questions": [
   {
    "q": "What do we usually do when we infer the truth from news?",
    "options": [
     "We ignore it",
     "We do it quickly and speculate about details",
     "We check ten sources"
    ],
    "answer": 1
   },
   {
    "q": "What does a good thinker do before concluding?",
    "options": [
     "Copies others",
     "Shouts",
     "Deliberates"
    ],
    "answer": 2
   },
   {
    "q": "What can a bad habit like using only confirming sources do?",
    "options": [
     "Improve debate",
     "Hamper understanding and impede progress",
     "Help to learn"
    ],
    "answer": 1
   },
   {
    "q": "What can schools do?",
    "options": [
     "Ban the internet",
     "Foster critical thinking",
     "Close libraries"
    ],
    "answer": 1
   },
   {
    "q": "What does the text say about some people and the rules?",
    "options": [
     "Nobody needs them",
     "Everyone respects them",
     "Some will try to circumvent them"
    ],
    "answer": 2
   },
   {
    "q": "What have psychologists studied for decades?",
    "options": [
     "Why people travel",
     "Why some opinions spread quickly",
     "Why people sleep"
    ],
    "answer": 1
   },
   {
    "q": "What is hard to do with thousands of messages every day?",
    "options": [
     "Delete them",
     "Discern what is true",
     "Read them"
    ],
    "answer": 1
   },
   {
    "q": "What do some people allege about the media?",
    "options": [
     "That it is too slow",
     "That it has a bias",
     "That it is expensive"
    ],
    "answer": 1
   },
   {
    "q": "What do social networks' algorithms foster?",
    "options": [
     "Calm debate",
     "Reading",
     "The spread of extreme opinions"
    ],
    "answer": 2
   },
   {
    "q": "What does a good thinker do if he finds an error in his own reasoning?",
    "options": [
     "Rectifies it",
     "Defends it",
     "Hides it"
    ],
    "answer": 0
   },
   {
    "q": "What kind of evidence is welcome?",
    "options": [
     "Evidence that bolsters an argument",
     "Evidence that is old",
     "No evidence"
    ],
    "answer": 0
   },
   {
    "q": "What should institutions be?",
    "options": [
     "Secret",
     "Transparent",
     "Rich"
    ],
    "answer": 1
   },
   {
    "q": "What should laws not do?",
    "options": [
     "Curtail freedom of expression",
     "Mitigate lies",
     "Protect people"
    ],
    "answer": 0
   },
   {
    "q": "What can each of us do to alleviate tension?",
    "options": [
     "Explain our views instead of attacking others",
     "Stay silent",
     "Leave the discussion"
    ],
    "answer": 0
   },
   {
    "q": "What can a society that improves the way it argues underpin its decisions with?",
    "options": [
     "Facts rather than fear",
     "Tradition",
     "Money"
    ],
    "answer": 0
   }
  ]
 },
 "hedging": {
  "title": "A careful opinion",
  "paragraphs": [
   "Arguably, the most difficult skill in a language is not grammar, but nuance. A fluent speaker rarely says that something is simply true or false. Instead, he softens his statements with expressions such as \"broadly speaking\", \"by and large\" or \"to a large extent\". When he reports something that he has not verified, he says that a painting is \"purportedly\" a masterpiece, or that a restaurant is \"supposedly\" the best in town. And if he disagrees with someone, he may say that the plan is good \"inasmuch as\" it saves money, but not in every respect.",
   "This careful style is not a sign of weakness, but of precision. Ostensibly, a company may offer a free service, but a clever customer asks who really pays. Undeniably, the new technology has benefits, and conversely, it has costs that are often ignored. Scientists, who must be exact, almost always use qualifiers. They write that results are \"notably\" better, \"predominantly\" positive or \"inevitably\" limited by the size of the sample. Politicians, on the other hand, use similar expressions to avoid commitments, and journalists use them to protect themselves from accusations.",
   "For the learner, mastering these expressions takes time, because it requires understanding not only the words but also the situation. A native speaker says \"needless to say\" when he wants to introduce something obvious, and \"to put it mildly\" when he is being ironic. After a long discussion, he may close with \"all things considered\" or \"at any rate\", and, looking back, may say that, \"in retrospect\", he would have decided differently. Such phrases make a person sound thoughtful, as it were, and they allow us, so to speak, to say what we mean without being rude. In the end, hedging is the language of diplomacy."
  ],
  "questions": [
   {
    "q": "What is arguably the most difficult skill in a language?",
    "options": [
     "Counting",
     "Spelling",
     "Nuance"
    ],
    "answer": 2
   },
   {
    "q": "Why does a fluent speaker use expressions such as \"broadly speaking\"?",
    "options": [
     "To soften his statements",
     "To speak faster",
     "To be rude"
    ],
    "answer": 0
   },
   {
    "q": "What do scientists almost always use?",
    "options": [
     "Slang",
     "Qualifiers",
     "Jokes"
    ],
    "answer": 1
   },
   {
    "q": "What does a native speaker say when he wants to introduce something obvious?",
    "options": [
     "Needless to say",
     "In retrospect",
     "At any rate"
    ],
    "answer": 0
   },
   {
    "q": "What is hedging, in the end?",
    "options": [
     "The language of numbers",
     "The language of children",
     "The language of diplomacy"
    ],
    "answer": 2
   },
   {
    "q": "What does a fluent speaker rarely say about something?",
    "options": [
     "That it is simply true or false",
     "That it is good",
     "That it is new"
    ],
    "answer": 0
   },
   {
    "q": "Which expression is used when something has not been verified?",
    "options": [
     "Inevitably",
     "Undeniably",
     "Purportedly"
    ],
    "answer": 2
   },
   {
    "q": "What does the speaker say about the restaurant?",
    "options": [
     "It is supposedly the best in town",
     "It is expensive",
     "It is closed"
    ],
    "answer": 0
   },
   {
    "q": "What does \"inasmuch as\" help to say?",
    "options": [
     "That a plan is perfect",
     "That a plan is good only in one respect",
     "That a plan is bad"
    ],
    "answer": 1
   },
   {
    "q": "What does the text say about a careful style?",
    "options": [
     "It is a sign of weakness",
     "It is a sign of laziness",
     "It is a sign of precision"
    ],
    "answer": 2
   },
   {
    "q": "What does a clever customer ask about a free service?",
    "options": [
     "How long it lasts",
     "Who really pays",
     "When it ends"
    ],
    "answer": 1
   },
   {
    "q": "Who must be exact and use qualifiers?",
    "options": [
     "Politicians only",
     "Scientists",
     "Children"
    ],
    "answer": 1
   },
   {
    "q": "Why do politicians use similar expressions?",
    "options": [
     "To save time",
     "To be clear",
     "To avoid commitments"
    ],
    "answer": 2
   },
   {
    "q": "What does a native speaker say to be ironic?",
    "options": [
     "Needless to say",
     "At any rate",
     "To put it mildly"
    ],
    "answer": 2
   },
   {
    "q": "What can a person say when looking back?",
    "options": [
     "By and large",
     "So to speak",
     "In retrospect"
    ],
    "answer": 2
   }
  ]
 },
 "house2": {
  "title": "Our house in the morning",
  "paragraphs": [
   "Our house is not big, but it has many rooms and every room has a story. In the morning I wake up in the bunk bed that I share with my brother. His bed is the one at the top, and he always puts his feet on the shelf. Next to the bed there is a bedside table with a small lamp and my glasses. I open the wardrobe, take my clothes from a hanger and go to the bathroom.",
   "In the bathroom I turn on the tap and wash my hands. I take my toothbrush, put a little toothpaste on it and brush my teeth for two minutes. My father uses a razor, and my mother has a comb and a bottle of shampoo that smells of flowers. We only have one toilet, so in the morning there is always a queue. Sometimes I have a bath, but only on Sunday, because there is no time during the week.",
   "Downstairs the dog is sleeping on the rug near the front door. Someone rings the doorbell, and it is the postman. I clean my shoes on the doormat before I go out. On the terrace there is a table and four chairs, and behind the house there is a small lawn with a white fence. My father keeps his tools in a shed, and in the basement we keep wine and old toys. In winter smoke comes out of the chimney, and the house smells of wood and bread. I love my home because it is full of small things that remind me of my family. When I come back from school, I always say hello to the dog, and then I go to my bunk bed to read a book."
  ],
  "questions": [
   {
    "q": "Where does the narrator sleep?",
    "options": [
     "In a tent",
     "In a bunk bed",
     "On a sofa"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator's brother put on the shelf?",
    "options": [
     "His glasses",
     "His books",
     "His feet"
    ],
    "answer": 2
   },
   {
    "q": "Why is there a queue in the morning?",
    "options": [
     "There is only one toilet",
     "There is no water",
     "The bath is broken"
    ],
    "answer": 0
   },
   {
    "q": "Where does the father keep his tools?",
    "options": [
     "In the basement",
     "In the wardrobe",
     "In a shed"
    ],
    "answer": 2
   },
   {
    "q": "Who rings the doorbell?",
    "options": [
     "The narrator's friend",
     "The neighbour",
     "The postman"
    ],
    "answer": 2
   },
   {
    "q": "What is on the bedside table?",
    "options": [
     "A small lamp and the narrator's glasses",
     "A phone",
     "A book"
    ],
    "answer": 0
   },
   {
    "q": "Where does the narrator take his clothes from?",
    "options": [
     "The shelf",
     "The wardrobe",
     "The floor"
    ],
    "answer": 1
   },
   {
    "q": "How long does the narrator brush his teeth?",
    "options": [
     "Ten seconds",
     "Ten minutes",
     "Two minutes"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator's father use?",
    "options": [
     "Shampoo",
     "A comb",
     "A razor"
    ],
    "answer": 2
   },
   {
    "q": "What does the shampoo smell of?",
    "options": [
     "Apples",
     "Lemons",
     "Flowers"
    ],
    "answer": 2
   },
   {
    "q": "When does the narrator have a bath?",
    "options": [
     "Only on Sunday",
     "Never",
     "Every day"
    ],
    "answer": 0
   },
   {
    "q": "Where is the dog sleeping?",
    "options": [
     "In the garden",
     "On the rug near the front door",
     "On the sofa"
    ],
    "answer": 1
   },
   {
    "q": "Where does the narrator clean his shoes?",
    "options": [
     "On the doormat",
     "At the door of the shed",
     "On the rug"
    ],
    "answer": 0
   },
   {
    "q": "What is behind the house?",
    "options": [
     "A garage",
     "A river",
     "A small lawn with a white fence"
    ],
    "answer": 2
   },
   {
    "q": "What do they keep in the basement?",
    "options": [
     "Wine and old toys",
     "Tools",
     "Clothes"
    ],
    "answer": 0
   }
  ]
 },
 "food2": {
  "title": "Lunch with my grandmother",
  "paragraphs": [
   "Every Sunday I have lunch at my grandmother's house, and the table is always full. For breakfast I usually eat a yoghurt, but at my grandmother's I always want a big meal. She starts with olives and a small plate of ham. Then she brings a bowl of spaghetti with tomato sauce, and a salad with tuna and a little vinegar. My cousin does not like fish, so he eats the turkey and the potatoes.",
   "My grandmother also cooks sardines on the grill, because they are my grandfather's favourite food. On the table there is always ketchup, mustard and mayonnaise, because the children want sauces for everything. For dessert there is a chocolate pudding and pancakes with jam. My brother only wants ice cream, and my sister eats a lot of sweets, so my mother says that she cannot have more.",
   "In the afternoon we drink cola and eat a few nuts while we play cards. My uncle is on a diet, so he only eats salmon and a bit of bacon. My grandfather makes jokes: \"Noodles are for the Chinese and spaghetti is for us.\" Everybody laughs. At five o'clock we eat crisps and the last biscuits, and then we help to wash the plates. I am always very full when I go home, but I never refuse my grandmother's food. She says that a person who does not eat is a person who does not live. I think she is right, and next Sunday I will be there again, with the same appetite."
  ],
  "questions": [
   {
    "q": "What does the grandmother start with?",
    "options": [
     "Olives and a small plate of ham",
     "Soup",
     "Cake"
    ],
    "answer": 0
   },
   {
    "q": "Why does the cousin eat turkey?",
    "options": [
     "He is on a diet",
     "He does not like fish",
     "He is vegan"
    ],
    "answer": 1
   },
   {
    "q": "What is the grandfather's favourite food?",
    "options": [
     "Grilled sardines",
     "Pancakes",
     "Noodles"
    ],
    "answer": 0
   },
   {
    "q": "What does the uncle eat?",
    "options": [
     "Only crisps",
     "Salmon and a bit of bacon",
     "Only ice cream"
    ],
    "answer": 1
   },
   {
    "q": "What does the grandmother say about a person who does not eat?",
    "options": [
     "He is happy",
     "He is ill",
     "He does not live"
    ],
    "answer": 2
   },
   {
    "q": "How often does the narrator have lunch at the grandmother's?",
    "options": [
     "Every day",
     "Every Sunday",
     "Once a year"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator usually eat for breakfast?",
    "options": [
     "A yoghurt",
     "Bacon",
     "Pancakes"
    ],
    "answer": 0
   },
   {
    "q": "What does the grandmother bring in a bowl?",
    "options": [
     "Soup",
     "Rice",
     "Spaghetti with tomato sauce"
    ],
    "answer": 2
   },
   {
    "q": "What does the salad have?",
    "options": [
     "Ham",
     "Tuna and a little vinegar",
     "Eggs"
    ],
    "answer": 1
   },
   {
    "q": "What does the grandmother cook on the grill?",
    "options": [
     "Turkey",
     "Salmon",
     "Sardines"
    ],
    "answer": 2
   },
   {
    "q": "Which sauces are always on the table?",
    "options": [
     "Only ketchup",
     "Soy sauce",
     "Ketchup, mustard and mayonnaise"
    ],
    "answer": 2
   },
   {
    "q": "What is for dessert?",
    "options": [
     "Fruit",
     "A chocolate pudding and pancakes with jam",
     "Ice cream only"
    ],
    "answer": 1
   },
   {
    "q": "What does the brother only want?",
    "options": [
     "Jam",
     "Ice cream",
     "Pudding"
    ],
    "answer": 1
   },
   {
    "q": "What do they drink in the afternoon?",
    "options": [
     "Wine",
     "Cola",
     "Tea"
    ],
    "answer": 1
   },
   {
    "q": "What do they eat at five o'clock?",
    "options": [
     "Sweets",
     "Crisps and the last biscuits",
     "Nuts"
    ],
    "answer": 1
   }
  ]
 },
 "body2": {
  "title": "At the doctor with my son",
  "paragraphs": [
   "Yesterday I took my son Pedro to the doctor because he fell from his bicycle. The doctor was a young woman with long eyelashes and a kind face. She asked him to sit on the bed and look at her. First she touched his forehead and his cheeks, and then she looked at his chin, where there was a small cut. Pedro was afraid, but she smiled and said, \"Open your mouth and show me your tongue.\"",
   "Then she checked his throat and his ears. She listened to his lungs with a stethoscope and asked him to breathe slowly. After that she examined his arms. His left elbow was red, and his wrist hurt when he moved his thumb. She pressed gently on his palm and on every nail. \"Does it hurt here?\" she asked. \"No,\" said Pedro, \"but my heel hurts a bit.\" The doctor looked at his toe and saw a bruise.",
   "At the end, the doctor said that nothing was broken. \"The muscles are only a little tired,\" she explained, \"and the skin will recover in a week.\" She also looked at his hip and his thigh, because he had fallen on that side. Pedro was very proud, because the doctor said that he had a strong body and a good jaw. She gave him a plaster for the cut on his chin, and she told him to wear a helmet on his bike. On the way home he asked for an ice cream, and I said yes. A visit to the doctor is never fun, but a good doctor can make a child feel safe, and Pedro was already planning to ride his bike again."
  ],
  "questions": [
   {
    "q": "Why did the narrator take Pedro to the doctor?",
    "options": [
     "He had a toothache",
     "He fell from his bicycle",
     "He had a fever"
    ],
    "answer": 1
   },
   {
    "q": "Where did Pedro have a small cut?",
    "options": [
     "On his chin",
     "On his thumb",
     "On his forehead"
    ],
    "answer": 0
   },
   {
    "q": "What did the doctor listen to with a stethoscope?",
    "options": [
     "His heart only",
     "His lungs",
     "His knees"
    ],
    "answer": 1
   },
   {
    "q": "What did the doctor say about his muscles?",
    "options": [
     "They were very strong",
     "They were only a little tired",
     "They were broken"
    ],
    "answer": 1
   },
   {
    "q": "What did the doctor tell him to wear on his bike?",
    "options": [
     "A helmet",
     "A belt",
     "A vest"
    ],
    "answer": 0
   },
   {
    "q": "What did the doctor look like?",
    "options": [
     "An old man",
     "A tall nurse",
     "A young woman with long eyelashes"
    ],
    "answer": 2
   },
   {
    "q": "What did the doctor ask Pedro to do first?",
    "options": [
     "Run",
     "Lie down",
     "Sit on the bed and look at her"
    ],
    "answer": 2
   },
   {
    "q": "What did she ask him to show her?",
    "options": [
     "His hands",
     "His shoes",
     "His tongue"
    ],
    "answer": 2
   },
   {
    "q": "What did she ask him to do while listening to his lungs?",
    "options": [
     "Breathe slowly",
     "Sing",
     "Cough"
    ],
    "answer": 0
   },
   {
    "q": "Which elbow was red?",
    "options": [
     "The right one",
     "Both",
     "The left one"
    ],
    "answer": 2
   },
   {
    "q": "What hurt when he moved his thumb?",
    "options": [
     "His wrist",
     "His knee",
     "His shoulder"
    ],
    "answer": 0
   },
   {
    "q": "What did the doctor see on his toe?",
    "options": [
     "A bruise",
     "A cut",
     "A nail"
    ],
    "answer": 0
   },
   {
    "q": "Which parts did she also look at because he had fallen on that side?",
    "options": [
     "His neck",
     "His back",
     "His hip and his thigh"
    ],
    "answer": 2
   },
   {
    "q": "What did the doctor give him for the cut?",
    "options": [
     "A crutch",
     "A bandage",
     "A plaster"
    ],
    "answer": 2
   },
   {
    "q": "What did Pedro ask for on the way home?",
    "options": [
     "A toy",
     "A drink",
     "An ice cream"
    ],
    "answer": 2
   }
  ]
 },
 "animals2": {
  "title": "A day at the nature park",
  "paragraphs": [
   "Last Saturday we went to a nature park near the coast. It was a sunny day, and the children were very excited. At the entrance there was a pond with a white swan and some geese. A little further, a squirrel ran up a tree, and a hedgehog was hiding under a bush. My daughter wanted to touch it, but the guide said that it was better to look from a distance.",
   "In the farm area there was a goat, a donkey and a hen with her chicks. The donkey was very friendly, and my son gave him some carrots. Near the lake there were many pigeons, a few ducks and two crows who were fighting for a piece of bread. A seagull sat on a rock and watched us. In the afternoon the guide showed us an owl that sleeps during the day, and an eagle with huge wings. It flew high above the trees and then disappeared.",
   "After lunch we visited the aquarium, which was my favourite part. There was a big whale made of plastic, a real octopus with eight arms, and a turtle that swam slowly in the water. We also saw a seal that played with a ball, and a crab that walked sideways on the sand. On the way out, my daughter found a snail on the path and asked if she could take it home. I said no, and she put it back on the grass. On a leaf there was also a worm and an ant. We were tired but happy. It was a perfect day, and my children say that they want to be vets when they grow up."
  ],
  "questions": [
   {
    "q": "What was at the entrance of the park?",
    "options": [
     "A pond with a swan and some geese",
     "A hotel",
     "A shop"
    ],
    "answer": 0
   },
   {
    "q": "What did the narrator's son give to the donkey?",
    "options": [
     "Apples",
     "Bread",
     "Carrots"
    ],
    "answer": 2
   },
   {
    "q": "What do owls do during the day?",
    "options": [
     "They sleep",
     "They swim",
     "They fly"
    ],
    "answer": 0
   },
   {
    "q": "What did the seal play with?",
    "options": [
     "A fish",
     "A leaf",
     "A ball"
    ],
    "answer": 2
   },
   {
    "q": "What did the daughter find on the path?",
    "options": [
     "A snail",
     "A crab",
     "A hedgehog"
    ],
    "answer": 0
   },
   {
    "q": "When did the family go to the nature park?",
    "options": [
     "Yesterday",
     "Last Sunday",
     "Last Saturday"
    ],
    "answer": 2
   },
   {
    "q": "What was the weather like?",
    "options": [
     "Foggy",
     "Rainy",
     "Sunny"
    ],
    "answer": 2
   },
   {
    "q": "What was hiding under a bush?",
    "options": [
     "A squirrel",
     "A hedgehog",
     "A goat"
    ],
    "answer": 1
   },
   {
    "q": "Why did the guide not want the daughter to touch the hedgehog?",
    "options": [
     "It was sleeping",
     "It was better to look from a distance",
     "It was dangerous"
    ],
    "answer": 1
   },
   {
    "q": "What animals were in the farm area?",
    "options": [
     "A horse and sheep",
     "A cow and a pig",
     "A goat, a donkey and a hen with her chicks"
    ],
    "answer": 2
   },
   {
    "q": "What were the two crows fighting for?",
    "options": [
     "A piece of bread",
     "A fish",
     "A nut"
    ],
    "answer": 0
   },
   {
    "q": "Where did the seagull sit?",
    "options": [
     "On a boat",
     "On a rock",
     "In a tree"
    ],
    "answer": 1
   },
   {
    "q": "What was the whale in the aquarium made of?",
    "options": [
     "Glass",
     "Plastic",
     "Wood"
    ],
    "answer": 1
   },
   {
    "q": "How many arms does the octopus have?",
    "options": [
     "Eight",
     "Six",
     "Ten"
    ],
    "answer": 0
   },
   {
    "q": "What do the children want to be when they grow up?",
    "options": [
     "Teachers",
     "Pilots",
     "Vets"
    ],
    "answer": 2
   }
  ]
 },
 "clothes2": {
  "title": "The weekend bag",
  "paragraphs": [
   "On Friday evening Marta packs a bag for a weekend in the mountains. She starts with the pyjamas and the underwear, and she adds a pair of warm socks. Then she takes her tracksuit for the morning walk, and a sweatshirt with a hood in case of rain. She remembers her shorts, because the hotel has a swimming pool, and her swimming trunks, which are really for her brother. Her cardigan is in the wardrobe, and she takes it because the nights are cold.",
   "Her father is going to a wedding on Saturday, so he needs a suit. He chooses a dark suit with a waistcoat and a red tie, but her mother says that a bow tie is more elegant. He looks for a belt, a clean handkerchief and a pair of black shoes with new laces. He does not find the belt, and everybody laughs, because it is on the chair next to him. In the end he puts everything on a hanger and in a bag.",
   "The weather forecast says that it will be warm during the day and chilly at night. Marta puts a pair of slippers and flip-flops in the bag. Her mother takes her apron, because she wants to cook in the hotel's kitchen. The zip of the bag does not close, so they take out two sweatshirts. A neighbour, who is a mechanic, comes to say goodbye in his blue overalls. He looks at the luggage and says, \"You are taking half your house!\" At last the family closes the bag and the car leaves. The weekend is going to be wonderful, and Marta is sure that she has all that she needs, even the stockings she wanted for the party on Sunday."
  ],
  "questions": [
   {
    "q": "What does Marta pack first?",
    "options": [
     "The pyjamas and the underwear",
     "The shoes",
     "The cardigan"
    ],
    "answer": 0
   },
   {
    "q": "What does Marta's father choose for the wedding?",
    "options": [
     "A dark suit, a waistcoat and a red tie",
     "A tracksuit",
     "Shorts"
    ],
    "answer": 0
   },
   {
    "q": "Why does everybody laugh?",
    "options": [
     "The tie is green",
     "The belt is on the chair next to him",
     "The suit is too small"
    ],
    "answer": 1
   },
   {
    "q": "Why do they take out two sweatshirts?",
    "options": [
     "The zip does not close",
     "They are dirty",
     "They are too big"
    ],
    "answer": 0
   },
   {
    "q": "Who comes to say goodbye?",
    "options": [
     "A friend of Marta",
     "A neighbour who is a mechanic",
     "The teacher"
    ],
    "answer": 1
   },
   {
    "q": "Where is Marta going for the weekend?",
    "options": [
     "To the beach",
     "To the mountains",
     "To the city"
    ],
    "answer": 1
   },
   {
    "q": "What does she take for the morning walk?",
    "options": [
     "A suit",
     "A tracksuit",
     "A dress"
    ],
    "answer": 1
   },
   {
    "q": "Why does she take a sweatshirt with a hood?",
    "options": [
     "In case of rain",
     "For the pool",
     "For the wedding"
    ],
    "answer": 0
   },
   {
    "q": "Why does she take shorts?",
    "options": [
     "It is a rule",
     "The hotel has a swimming pool",
     "It is very hot"
    ],
    "answer": 1
   },
   {
    "q": "Where is the cardigan?",
    "options": [
     "In the wardrobe",
     "In the car",
     "On the bed"
    ],
    "answer": 0
   },
   {
    "q": "What is the father going to on Saturday?",
    "options": [
     "A concert",
     "A wedding",
     "A football match"
    ],
    "answer": 1
   },
   {
    "q": "What does the mother say is more elegant?",
    "options": [
     "A red tie",
     "A waistcoat",
     "A bow tie"
    ],
    "answer": 2
   },
   {
    "q": "What does the father not find?",
    "options": [
     "His shoes",
     "His belt",
     "His suit"
    ],
    "answer": 1
   },
   {
    "q": "What does the weather forecast say?",
    "options": [
     "Cold all day",
     "Warm during the day and chilly at night",
     "Rain all weekend"
    ],
    "answer": 1
   },
   {
    "q": "What does the neighbour say?",
    "options": [
     "You are taking half your house",
     "Have a good trip",
     "Do not forget your keys"
    ],
    "answer": 0
   }
  ]
 },
 "city2": {
  "title": "A walk in the old town",
  "paragraphs": [
   "Pedro and Lara spend a day in the old town of a small city. They begin in a big square with a fountain and a statue of an old king. Next to the statue there is a kiosk where they buy a map and two bottles of water. In front of them there is a monument that remembers a famous battle. They sit on a bench to look at the map and decide where to go.",
   "They walk along a narrow alley full of shops. There is a florist with a beautiful display of roses, a butcher with fresh meat and a greengrocer who sells oranges and lemons. At the corner there is a newsagent where Lara buys a postcard. Pedro stops at a barber because he needs a haircut, and Lara waits outside. A billboard shows an advert for a new film, and on a wall nearby there is some colourful graffiti. At the crossing, a bus is waiting at the bus shelter, and a woman is putting a letter in a post box.",
   "In the afternoon they visit the street market, which is open on Sunday. Ducks swim in a little pond behind the market, and children play near the lamp post. Pedro finds an old red phone box, and Lara takes a photo of him. At six o'clock they pass a launderette and a car wash on the way back to the car. The zebra crossing is full of people, and they wait for the green light. They are tired, but they love the city. \"Next time,\" says Lara, \"we will explore the other side of the river.\" Pedro agrees, and they drive home with a bag of fruit and a small statue as a souvenir."
  ],
  "questions": [
   {
    "q": "Where do Pedro and Lara buy a map?",
    "options": [
     "At a barber",
     "At a florist",
     "At a kiosk"
    ],
    "answer": 2
   },
   {
    "q": "What does the florist have?",
    "options": [
     "Oranges",
     "A beautiful display of roses",
     "Fresh meat"
    ],
    "answer": 1
   },
   {
    "q": "Where does Pedro go for a haircut?",
    "options": [
     "To a barber",
     "To a butcher",
     "To a newsagent"
    ],
    "answer": 0
   },
   {
    "q": "What do ducks do behind the market?",
    "options": [
     "They swim in a pond",
     "They sleep",
     "They fly"
    ],
    "answer": 0
   },
   {
    "q": "What do they take home?",
    "options": [
     "A map only",
     "A phone box",
     "A bag of fruit and a small statue"
    ],
    "answer": 2
   },
   {
    "q": "What do Pedro and Lara visit?",
    "options": [
     "The old town of a small city",
     "A beach",
     "A farm"
    ],
    "answer": 0
   },
   {
    "q": "What is in the big square?",
    "options": [
     "A fountain and a statue of an old king",
     "A market",
     "A school"
    ],
    "answer": 0
   },
   {
    "q": "What do they buy at the kiosk?",
    "options": [
     "A map and two bottles of water",
     "A newspaper",
     "A ticket"
    ],
    "answer": 0
   },
   {
    "q": "What does the monument remember?",
    "options": [
     "A fire",
     "A famous battle",
     "A king's birthday"
    ],
    "answer": 1
   },
   {
    "q": "Where do they sit to look at the map?",
    "options": [
     "In a cafe",
     "On a bench",
     "On the grass"
    ],
    "answer": 1
   },
   {
    "q": "What does Lara buy at the newsagent?",
    "options": [
     "A postcard",
     "A newspaper",
     "A pen"
    ],
    "answer": 0
   },
   {
    "q": "What does the billboard show?",
    "options": [
     "A concert",
     "An advert for a new film",
     "A map"
    ],
    "answer": 1
   },
   {
    "q": "What is on a wall nearby?",
    "options": [
     "A clock",
     "A poster of the market",
     "Colourful graffiti"
    ],
    "answer": 2
   },
   {
    "q": "When is the street market open?",
    "options": [
     "On Monday",
     "On Friday",
     "On Sunday"
    ],
    "answer": 2
   },
   {
    "q": "What does Lara photograph?",
    "options": [
     "Pedro in front of an old red phone box",
     "The statue",
     "The pond"
    ],
    "answer": 0
   }
  ]
 },
 "weather2": {
  "title": "A stormy weekend",
  "paragraphs": [
   "On Friday the weather forecast said that a storm was coming. In the morning the sky was overcast, and there was a light mist over the river. By lunchtime the temperature had fallen, and it was chilly. A cold breeze blew from the sea, and the first drops of drizzle began to fall. We closed the windows and brought the plants inside.",
   "In the afternoon there was thunder, and we saw lightning behind the hills. A gale blew down two trees in the street, and for an hour there was hail on the roofs. My little brother was afraid, but my mother told him that a storm does not last for ever. The lights went out, and we lit candles and played cards. Outside there were big puddles everywhere, and the garden was full of mud.",
   "On Saturday morning the sun came out. There was frost on the grass, because the night had been very cold, and an icicle hung from the shed. The air was clean and fresh, and the sunrise was beautiful. After the storm the weather turned damp, and the radio announced a blizzard in the mountains, with snowflakes the size of coins. In summer, by contrast, we have a scorching heatwave, and everyone looks for shade. I like each season for a different reason, but I confess that I prefer the days after a storm, when the world seems new and washed. On Sunday afternoon the whole family went for a walk, wearing boots and raincoats, to see the damage and to enjoy the silence."
  ],
  "questions": [
   {
    "q": "What did the forecast say on Friday?",
    "options": [
     "That it would snow",
     "That a storm was coming",
     "That it would be hot"
    ],
    "answer": 1
   },
   {
    "q": "What did the gale do?",
    "options": [
     "Broke the windows",
     "Blew down two trees",
     "Closed the school"
    ],
    "answer": 1
   },
   {
    "q": "What did the family do when the lights went out?",
    "options": [
     "Went to bed",
     "Went out",
     "Lit candles and played cards"
    ],
    "answer": 2
   },
   {
    "q": "What was on the grass on Saturday morning?",
    "options": [
     "Snow",
     "Mud only",
     "Frost"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator prefer?",
    "options": [
     "The days after a storm",
     "The heatwave",
     "Winter only"
    ],
    "answer": 0
   },
   {
    "q": "What was the sky like on Friday morning?",
    "options": [
     "Red",
     "Overcast",
     "Clear"
    ],
    "answer": 1
   },
   {
    "q": "What was over the river?",
    "options": [
     "A rainbow",
     "A light mist",
     "Fog"
    ],
    "answer": 1
   },
   {
    "q": "What blew from the sea?",
    "options": [
     "A cold breeze",
     "A hot wind",
     "A storm"
    ],
    "answer": 0
   },
   {
    "q": "What did they do with the plants?",
    "options": [
     "Watered them",
     "Cut them",
     "Brought them inside"
    ],
    "answer": 2
   },
   {
    "q": "Where did they see lightning?",
    "options": [
     "Over the sea",
     "In the city",
     "Behind the hills"
    ],
    "answer": 2
   },
   {
    "q": "How long was there hail on the roofs?",
    "options": [
     "For a minute",
     "For a day",
     "For an hour"
    ],
    "answer": 2
   },
   {
    "q": "How did the narrator's little brother feel?",
    "options": [
     "Happy",
     "Afraid",
     "Bored"
    ],
    "answer": 1
   },
   {
    "q": "What did the family use when the lights went out?",
    "options": [
     "A fire",
     "Torches",
     "Candles"
    ],
    "answer": 2
   },
   {
    "q": "What hung from the shed on Saturday morning?",
    "options": [
     "A flag",
     "A lamp",
     "An icicle"
    ],
    "answer": 2
   },
   {
    "q": "What did the radio announce for the mountains?",
    "options": [
     "A blizzard",
     "A storm of rain",
     "A heatwave"
    ],
    "answer": 0
   }
  ]
 },
 "shopping2": {
  "title": "A busy day at the shopping centre",
  "paragraphs": [
   "Last Saturday I went to the shopping centre with my sister. We wanted to buy a gift for our mother, and we also had a voucher for a clothes shop. Our first stop was a department store with a beautiful window display. A sign on the door said that there was a clearance sale, so we went in. The shop assistant showed us the fitting room, and my sister tried on three jackets. One of them was out of stock in her size, but the assistant said that they had another one in stock.",
   "We looked at the price tag of a pair of shoes, and we saw that it was too expensive. In another shop, a second-hand bookshop, I found a book that was on my wishlist. At the cash desk, I showed my loyalty card, and the cashier gave me a small discount. The till did not work at first, and the cashier scanned the barcode again. He put the book in a carrier bag, and he said that the shop did not give guarantees for second-hand products.",
   "For our mother we chose a scarf and a gift card for her favourite shop. We asked the assistant to put them in a package with wrapping paper. Our shopping bags were heavy, and we were tired. In the electronics shop my sister wanted to see a smartwatch, but it had a warranty of only one year, so she did not buy it. People in the retail industry work very hard on Saturdays, and I felt sorry for the staff. At the end of the day we had a coffee, and we counted what we had spent. It was a lot, but our mother was delighted with the gift."
  ],
  "questions": [
   {
    "q": "What did the narrator and her sister want to buy?",
    "options": [
     "A phone",
     "A bicycle",
     "A gift for their mother"
    ],
    "answer": 2
   },
   {
    "q": "Why did one jacket cause a problem?",
    "options": [
     "It was dirty",
     "It was too big",
     "It was out of stock in her size"
    ],
    "answer": 2
   },
   {
    "q": "What did the narrator find in the second-hand bookshop?",
    "options": [
     "A smartwatch",
     "A voucher",
     "A book from her wishlist"
    ],
    "answer": 2
   },
   {
    "q": "What did they ask the assistant to do?",
    "options": [
     "Put the gifts in a package with wrapping paper",
     "Return the scarf",
     "Give a discount"
    ],
    "answer": 0
   },
   {
    "q": "Why did the sister not buy the smartwatch?",
    "options": [
     "It was too big",
     "It had a warranty of only one year",
     "It was out of stock"
    ],
    "answer": 1
   },
   {
    "q": "Who goes shopping with the narrator?",
    "options": [
     "A friend",
     "Her sister",
     "Her mother"
    ],
    "answer": 1
   },
   {
    "q": "What do they have for a clothes shop?",
    "options": [
     "A bag",
     "A card",
     "A voucher"
    ],
    "answer": 2
   },
   {
    "q": "What does a sign on the door say?",
    "options": [
     "Everything is free",
     "The shop is closed",
     "There is a clearance sale"
    ],
    "answer": 2
   },
   {
    "q": "Where does the assistant show them?",
    "options": [
     "The cash desk",
     "The exit",
     "The fitting room"
    ],
    "answer": 2
   },
   {
    "q": "How many jackets does the sister try on?",
    "options": [
     "Three",
     "Five",
     "One"
    ],
    "answer": 0
   },
   {
    "q": "What do they see on the price tag of the shoes?",
    "options": [
     "They are too expensive",
     "They are cheap",
     "They are on sale"
    ],
    "answer": 0
   },
   {
    "q": "What does the narrator show at the cash desk?",
    "options": [
     "Her phone",
     "Her passport",
     "Her loyalty card"
    ],
    "answer": 2
   },
   {
    "q": "What does the cashier scan again?",
    "options": [
     "The card",
     "The barcode",
     "The receipt"
    ],
    "answer": 1
   },
   {
    "q": "What do they choose for their mother?",
    "options": [
     "A book",
     "Shoes",
     "A scarf and a gift card"
    ],
    "answer": 2
   },
   {
    "q": "How did the narrator feel about the staff of the retail industry?",
    "options": [
     "Sorry for them",
     "Angry",
     "Bored"
    ],
    "answer": 0
   }
  ]
 },
 "travel2": {
  "title": "At the airport",
  "paragraphs": [
   "Paula and her family arrive at the airport three hours before the flight. First they go to the check-in desk, where an employee weighs their suitcases and asks for their passports. They only take hand luggage on the flight, but the bag is too heavy, and they have to pay a small fee. Then they go through the security check, where they take off their belts and put their phones in a tray. After that they pass the passport control, and an officer asks about the reason for the trip.",
   "In the duty-free shop Paula buys perfume and some chocolate. On the departures board she sees that their gate is number twenty-two. They wait for boarding in a large hall, and her son wants to see the planes. When the plane takes off, her daughter holds her hand. Their seats are good: Paula has a window seat, and her husband sits in the aisle. The flight attendant explains the rules about the life jacket, and the cabin crew serves a light lunch. There is a little turbulence in the middle of the trip, but nobody is afraid.",
   "They have a stopover in Frankfurt, and they walk through a long corridor to the next gate. When they land at their destination, they go to the baggage claim, where the suitcases arrive on the conveyor belt. One bag is missing, so Paula goes to the lost property office, where a woman writes down the details. In the arrivals hall, her sister is waiting with a big smile. Paula puts her hand luggage in the overhead locker of the car and says, \"Next time we will travel with only one small bag.\" Everybody laughs, because they have said the same thing for years."
  ],
  "questions": [
   {
    "q": "When do they arrive at the airport?",
    "options": [
     "One hour before",
     "The night before",
     "Three hours before the flight"
    ],
    "answer": 2
   },
   {
    "q": "Why do they pay a small fee?",
    "options": [
     "The hand luggage is too heavy",
     "They are late",
     "They lost a passport"
    ],
    "answer": 0
   },
   {
    "q": "Where does Paula sit on the plane?",
    "options": [
     "In the aisle",
     "By the window",
     "At the back"
    ],
    "answer": 1
   },
   {
    "q": "Where do they have a stopover?",
    "options": [
     "In Paris",
     "In Madrid",
     "In Frankfurt"
    ],
    "answer": 2
   },
   {
    "q": "What happens at the baggage claim?",
    "options": [
     "They lose their passports",
     "They meet the pilot",
     "One bag is missing"
    ],
    "answer": 2
   },
   {
    "q": "Who weighs the suitcases at the check-in desk?",
    "options": [
     "An employee",
     "A policeman",
     "The pilot"
    ],
    "answer": 0
   },
   {
    "q": "What do they take off at security?",
    "options": [
     "Their hats",
     "Their belts",
     "Their shoes"
    ],
    "answer": 1
   },
   {
    "q": "What does the officer at passport control ask about?",
    "options": [
     "The size of the bags",
     "The price of the tickets",
     "The reason for the trip"
    ],
    "answer": 2
   },
   {
    "q": "What does Paula buy in the duty-free shop?",
    "options": [
     "A phone",
     "A suitcase",
     "Perfume and some chocolate"
    ],
    "answer": 2
   },
   {
    "q": "What is the number of their gate?",
    "options": [
     "Ten",
     "Twelve",
     "Twenty-two"
    ],
    "answer": 2
   },
   {
    "q": "What does the son want to see while they wait?",
    "options": [
     "The planes",
     "The pilots",
     "The shops"
    ],
    "answer": 0
   },
   {
    "q": "Who sits in the aisle?",
    "options": [
     "Her husband",
     "Her son",
     "Her daughter"
    ],
    "answer": 0
   },
   {
    "q": "What does the flight attendant explain?",
    "options": [
     "The weather",
     "The rules about the life jacket",
     "The menu"
    ],
    "answer": 1
   },
   {
    "q": "What comes on the conveyor belt?",
    "options": [
     "The suitcases",
     "The pilots",
     "The passengers"
    ],
    "answer": 0
   },
   {
    "q": "Who waits in the arrivals hall?",
    "options": [
     "Her sister",
     "A friend",
     "Her mother"
    ],
    "answer": 0
   }
  ]
 },
 "health2": {
  "title": "A bad cold",
  "paragraphs": [
   "On Monday morning Rita woke up with a sore throat and a terrible headache. She had a high fever, and she could not stop sneezing. Her mother took her temperature with a thermometer: it was thirty-eight and a half degrees. Rita also felt dizzy and had a little nausea. She stayed in bed, and her mother brought her tea with honey and a cold plaster for her forehead.",
   "The next day the doctor came to see her. He checked her blood pressure and listened to her chest, and then he looked at her throat with a small light. He said that it was only a strong cold, but he also saw a red rash on her arm, so he asked her about her allergies. Rita said that she had a stomachache and an earache too. The doctor gave her an injection against the fever and advised her to rest and drink water.",
   "During the week Rita recovered slowly. She had a bruise on her knee, because she had fallen the week before, and a small scratch on her hand. Her cousin, who sprained his ankle and had a fracture in his foot, walked with a crutch. He told her that a toothache is the worst of all pains. Her mother learned first aid in a course at the school, and she knew how to treat a burn or a cut. By Friday, Rita was much better. Her ankle was no longer swollen, she did not have cramp in her legs, and she could go to school again. She promised herself that she would eat more fruit and wear warmer clothes in winter, because being ill is not fun."
  ],
  "questions": [
   {
    "q": "What temperature did Rita have?",
    "options": [
     "Thirty-six degrees",
     "Forty degrees",
     "Thirty-eight and a half degrees"
    ],
    "answer": 2
   },
   {
    "q": "What did the doctor give her?",
    "options": [
     "A crutch",
     "An injection against the fever",
     "A plaster"
    ],
    "answer": 1
   },
   {
    "q": "Who sprained his ankle?",
    "options": [
     "Her father",
     "Her cousin",
     "Her brother"
    ],
    "answer": 1
   },
   {
    "q": "What did Rita's mother learn at school?",
    "options": [
     "First aid",
     "Cooking",
     "Dancing"
    ],
    "answer": 0
   },
   {
    "q": "What did Rita promise herself?",
    "options": [
     "To eat more fruit and wear warmer clothes",
     "To stay in bed",
     "To never go out"
    ],
    "answer": 0
   },
   {
    "q": "When did Rita wake up with a sore throat?",
    "options": [
     "On Sunday",
     "On Monday morning",
     "On Friday"
    ],
    "answer": 1
   },
   {
    "q": "What could Rita not stop doing?",
    "options": [
     "Sneezing",
     "Eating",
     "Laughing"
    ],
    "answer": 0
   },
   {
    "q": "What did her mother use to take her temperature?",
    "options": [
     "A plaster",
     "A thermometer",
     "A watch"
    ],
    "answer": 1
   },
   {
    "q": "What did her mother bring her?",
    "options": [
     "A cake",
     "Soup",
     "Tea with honey"
    ],
    "answer": 2
   },
   {
    "q": "What did the doctor check?",
    "options": [
     "Her blood pressure and her chest",
     "Her teeth",
     "Her eyes"
    ],
    "answer": 0
   },
   {
    "q": "What did the doctor see on her arm?",
    "options": [
     "A burn",
     "A bruise",
     "A red rash"
    ],
    "answer": 2
   },
   {
    "q": "What did Rita have on her knee?",
    "options": [
     "A plaster",
     "A bruise",
     "A cut"
    ],
    "answer": 1
   },
   {
    "q": "What did her cousin walk with?",
    "options": [
     "A crutch",
     "A wheelchair",
     "A stick"
    ],
    "answer": 0
   },
   {
    "q": "What did her cousin say is the worst of all pains?",
    "options": [
     "A headache",
     "A toothache",
     "A stomachache"
    ],
    "answer": 1
   },
   {
    "q": "What could Rita do again by Friday?",
    "options": [
     "Play football",
     "Travel",
     "Go to school"
    ],
    "answer": 2
   }
  ]
 },
 "technology2": {
  "title": "A new phone",
  "paragraphs": [
   "Last month I bought a new phone with a large touchscreen. In the box there was the phone, a charger, a cable and a pair of earphones. At first I did not know how to use it, so I read the instructions. The memory is very large, and I can save thousands of photos. Each photo has twelve million pixels, and I send them to my computer by Bluetooth or by a wireless connection.",
   "In my folder I keep important documents, and in my inbox there are always too many emails. Most of them are spam, but sometimes I receive an attachment from my teacher. I use my browser to search for information and to click on a link. When I need to print something, I use a scanner and a hard drive that I keep on my desk. For a school project I saved a file on a USB stick, but I forgot it at home. My brother has a smartwatch that counts his steps, and my sister uses a speaker to listen to music in her room.",
   "Technology makes life easier, but it can be a problem. A few days ago my charger stopped working, and I could not call my parents. The icon of the battery turned red, and the screen went black. In the afternoon, a friend who owns a drone filmed our football match. He used a microphone to record our voices. I think that in the future everything will be wireless. My grandfather, however, says that nothing is as good as a letter. He does not trust any device, and he does not like Bluetooth or any kind of cable. I understand him, but I cannot live without my phone."
  ],
  "questions": [
   {
    "q": "What was in the box of the new phone?",
    "options": [
     "A speaker",
     "A computer",
     "A charger, a cable and earphones"
    ],
    "answer": 2
   },
   {
    "q": "How does the narrator send photos to the computer?",
    "options": [
     "By cable only",
     "By post",
     "By Bluetooth or a wireless connection"
    ],
    "answer": 2
   },
   {
    "q": "What happened to the narrator's charger?",
    "options": [
     "It was lost",
     "It was new",
     "It stopped working"
    ],
    "answer": 2
   },
   {
    "q": "Who filmed the football match?",
    "options": [
     "The narrator",
     "A friend with a drone",
     "A teacher"
    ],
    "answer": 1
   },
   {
    "q": "What does the grandfather think about technology?",
    "options": [
     "Nothing is as good as a letter",
     "It is wonderful",
     "It is cheap"
    ],
    "answer": 0
   },
   {
    "q": "What kind of screen does the new phone have?",
    "options": [
     "A large touchscreen",
     "A small screen",
     "A broken screen"
    ],
    "answer": 0
   },
   {
    "q": "What did the narrator do at first because he did not know how to use the phone?",
    "options": [
     "He returned it",
     "He read the instructions",
     "He asked his friend"
    ],
    "answer": 1
   },
   {
    "q": "How many pixels does each photo have?",
    "options": [
     "One thousand",
     "Two million",
     "Twelve million"
    ],
    "answer": 2
   },
   {
    "q": "What is in the narrator's inbox?",
    "options": [
     "Photos",
     "Too many emails, mostly spam",
     "Nothing"
    ],
    "answer": 1
   },
   {
    "q": "What does the teacher sometimes send?",
    "options": [
     "A cable",
     "An attachment",
     "A phone"
    ],
    "answer": 1
   },
   {
    "q": "Where did the narrator save a file for a school project?",
    "options": [
     "On a hard drive",
     "On a USB stick",
     "In a folder"
    ],
    "answer": 1
   },
   {
    "q": "What does the brother's smartwatch do?",
    "options": [
     "Plays music",
     "Counts his steps",
     "Takes photos"
    ],
    "answer": 1
   },
   {
    "q": "What does the sister use to listen to music?",
    "options": [
     "A radio",
     "A speaker",
     "Earphones"
    ],
    "answer": 1
   },
   {
    "q": "What turned red when the charger stopped working?",
    "options": [
     "The screen",
     "The cable",
     "The icon of the battery"
    ],
    "answer": 2
   },
   {
    "q": "What did the friend use to record voices?",
    "options": [
     "A phone",
     "A camera",
     "A microphone"
    ],
    "answer": 2
   }
  ]
 },
 "fashion2": {
  "title": "The costume party",
  "paragraphs": [
   "Marta was invited to a costume party on Saturday, and she wanted a perfect outfit. She decided to be a film star from the nineteen twenties. First she went to a second-hand shop, where she found a long black dress with a lace collar and a velvet belt with a silver buckle. The hem was too long, so she took it to a tailor, who fixed it in one afternoon. Then she bought a brooch, a pair of long gloves and a short wig with a straight fringe.",
   "On Saturday morning she tried everything on. The dress was a little tight, but she liked the way she looked. She put on bright red lipstick and black mascara, and she drew a small mole next to her mouth. Her brother laughed and said that she looked like a person from an old photograph. \"That is exactly the idea,\" she answered.",
   "At the party everybody had a different style. One boy came as a pirate with a fake moustache and a tattoo that he had drawn with a pen. A girl wore a huge ponytail and sandals made of gold paper. There was even a small catwalk, and the guests walked down it while the others clapped. Marta won the prize for the best costume, and she was very happy. On the way home she said that she was never going to throw away that dress, because it had given her the best night of the year."
  ],
  "questions": [
   {
    "q": "What kind of collar did the black dress have?",
    "options": [
     "A fur collar",
     "A lace collar",
     "A silk collar"
    ],
    "answer": 1
   },
   {
    "q": "What did the velvet belt have?",
    "options": [
     "A gold chain",
     "A silver buckle",
     "A red flower"
    ],
    "answer": 1
   },
   {
    "q": "What did Marta draw next to her mouth?",
    "options": [
     "A moustache",
     "A small mole",
     "A heart"
    ],
    "answer": 1
   },
   {
    "q": "What did the girl with the huge ponytail wear on her feet?",
    "options": [
     "Red shoes",
     "Sandals made of gold paper",
     "Black boots"
    ],
    "answer": 1
   },
   {
    "q": "What decade did Marta's character come from?",
    "options": [
     "The nineteen twenties",
     "The nineteen eighties",
     "The nineteen sixties"
    ],
    "answer": 0
   },
   {
    "q": "What was Marta invited to?",
    "options": [
     "A wedding",
     "A concert",
     "A costume party"
    ],
    "answer": 2
   },
   {
    "q": "Where did she find the black dress?",
    "options": [
     "In a second-hand shop",
     "In a market",
     "In a big shop"
    ],
    "answer": 0
   },
   {
    "q": "What was wrong with the dress at first?",
    "options": [
     "It was dirty",
     "The hem was too long",
     "It had no buttons"
    ],
    "answer": 1
   },
   {
    "q": "Who fixed the dress?",
    "options": [
     "A tailor",
     "A friend",
     "Her mother"
    ],
    "answer": 0
   },
   {
    "q": "What did she put on her lips?",
    "options": [
     "Bright red lipstick",
     "Nothing",
     "Pink lipstick"
    ],
    "answer": 0
   },
   {
    "q": "What did her brother say she looked like?",
    "options": [
     "A pirate",
     "A person from an old photograph",
     "A teacher"
    ],
    "answer": 1
   },
   {
    "q": "What did the boy dressed as a pirate have?",
    "options": [
     "A fake moustache and a tattoo",
     "A long plait",
     "A wig"
    ],
    "answer": 0
   },
   {
    "q": "What did the guests walk down?",
    "options": [
     "The street",
     "A staircase",
     "A small catwalk"
    ],
    "answer": 2
   },
   {
    "q": "What did Marta win?",
    "options": [
     "A trip",
     "The prize for the best costume",
     "A dress"
    ],
    "answer": 1
   },
   {
    "q": "What did Marta decide to do with the dress?",
    "options": [
     "Never throw it away",
     "Give it to her brother",
     "Sell it"
    ],
    "answer": 0
   }
  ]
 },
 "home2": {
  "title": "The old house",
  "paragraphs": [
   "When Ana and Paulo bought an old house near the river, they knew that it needed a lot of work. The hallway was dark, the staircase was in bad condition and there was mould on the walls of the cellar. In the attic they found boxes of old photographs, and under the roof there was a small leak. \"We have to renovate everything,\" said Paulo, \"but I love this fireplace.\"",
   "They started with the kitchen. A plumber came to repair the pipes and to fix the leak, and a friend helped them to put white tiles on the walls. Then they decorated the bedroom with blue wallpaper and changed the bulbs in all the rooms. The boiler was very old, so they bought a new one with a good thermostat. Ana painted the shutters green and planted flowers on the porch.",
   "The work took five months. Finally, on a sunny Sunday, they stood in the driveway and looked at the house. The bricks were clean, the windows were shining, and there was a light in the landing window. \"It is not a studio apartment in the city,\" said Ana, \"but it is ours.\" That evening they lit the fire, sat down with a cup of tea and listened to the rain on the roof. Paulo said that he had never been so tired or so happy. They had a home, and nothing could be better than that."
  ],
  "questions": [
   {
    "q": "What was the staircase like?",
    "options": [
     "Brand new",
     "In bad condition",
     "Very short"
    ],
    "answer": 1
   },
   {
    "q": "What did Paulo love in the house?",
    "options": [
     "The garage",
     "The cellar",
     "The fireplace"
    ],
    "answer": 2
   },
   {
    "q": "Who helped them put tiles on the kitchen walls?",
    "options": [
     "A neighbour",
     "A friend",
     "A plumber"
    ],
    "answer": 1
   },
   {
    "q": "What did they buy because the boiler was old?",
    "options": [
     "A new boiler with a good thermostat",
     "A new roof",
     "A new fireplace"
    ],
    "answer": 0
   },
   {
    "q": "What did Ana plant on the porch?",
    "options": [
     "Vegetables",
     "Flowers",
     "Trees"
    ],
    "answer": 1
   },
   {
    "q": "Where did Ana and Paulo buy the house?",
    "options": [
     "In the mountains",
     "Near the river",
     "By the sea"
    ],
    "answer": 1
   },
   {
    "q": "What was wrong in the cellar?",
    "options": [
     "It was full of water",
     "The roof was missing",
     "There was mould on the walls"
    ],
    "answer": 2
   },
   {
    "q": "What did they find in the attic?",
    "options": [
     "Boxes of old photographs",
     "Old furniture",
     "Money"
    ],
    "answer": 0
   },
   {
    "q": "Who repaired the pipes?",
    "options": [
     "A plumber",
     "Ana's father",
     "Paulo"
    ],
    "answer": 0
   },
   {
    "q": "What did they put on the kitchen walls?",
    "options": [
     "Wallpaper",
     "Paint",
     "White tiles"
    ],
    "answer": 2
   },
   {
    "q": "What colour was the wallpaper in the bedroom?",
    "options": [
     "Green",
     "Blue",
     "White"
    ],
    "answer": 1
   },
   {
    "q": "What did Ana paint green?",
    "options": [
     "The fence",
     "The door",
     "The shutters"
    ],
    "answer": 2
   },
   {
    "q": "How long did the work take?",
    "options": [
     "Five months",
     "Five weeks",
     "Five years"
    ],
    "answer": 0
   },
   {
    "q": "Where did they stand to look at the house?",
    "options": [
     "In the garden",
     "In the driveway",
     "On the porch"
    ],
    "answer": 1
   },
   {
    "q": "What did they do on the last evening?",
    "options": [
     "Watched a film",
     "Went out for dinner",
     "Lit the fire and drank tea"
    ],
    "answer": 2
   }
  ]
 },
 "healthfit2": {
  "title": "A bad week",
  "paragraphs": [
   "Sofia is usually a healthy person who does yoga twice a week and goes jogging at the weekend. But last week everything went wrong. On Monday she ran in new shoes and got a blister on her foot. On Wednesday she slipped on the stairs, hurt her ankle and went to the hospital. The paramedic who helped her was kind and told her to keep her foot up. At the hospital the doctor said that it was a sprain, not a break, and that she did not need stitches. She left with crutches, a painkiller for the pain and an ointment for the swelling.",
   "The worst day was Friday, when she woke up with a sore throat and a high fever. She took the cough syrup that her mother had bought and stayed in bed. Her doctor checked her pulse and explained that she needed antibiotics because of an infection. \"You are exhausted,\" he said, \"and your posture is bad because you spend all day at a desk.\"",
   "Sofia learned something from that week. She now stretches every morning, tries meditation for ten minutes before sleeping and has a long walk after lunch. She also asked a friend to check her cholesterol, and the result was good. Soon she was jogging again, slowly and with better shoes. \"Health is not only about big things,\" she says, \"it is about small habits that you repeat every day.\""
  ],
  "questions": [
   {
    "q": "What did Sofia wear on Monday when she got a blister?",
    "options": [
     "Slippers",
     "New shoes",
     "Old sandals"
    ],
    "answer": 1
   },
   {
    "q": "What did the paramedic tell her to do?",
    "options": [
     "Walk home",
     "Run",
     "Keep her foot up"
    ],
    "answer": 2
   },
   {
    "q": "What did she not need at the hospital?",
    "options": [
     "Stitches",
     "Crutches",
     "An ointment"
    ],
    "answer": 0
   },
   {
    "q": "Who bought the cough syrup?",
    "options": [
     "Her doctor",
     "Her friend",
     "Her mother"
    ],
    "answer": 2
   },
   {
    "q": "What did the friend check for her?",
    "options": [
     "Her weight",
     "Her pulse",
     "Her cholesterol"
    ],
    "answer": 2
   },
   {
    "q": "What does Sofia usually do twice a week?",
    "options": [
     "Swimming",
     "Tennis",
     "Yoga"
    ],
    "answer": 2
   },
   {
    "q": "What gave her a blister?",
    "options": [
     "New shoes",
     "A bag",
     "A long walk"
    ],
    "answer": 0
   },
   {
    "q": "What happened on Wednesday?",
    "options": [
     "She hurt her ankle on the stairs",
     "She had a fever",
     "She fainted"
    ],
    "answer": 0
   },
   {
    "q": "What did the doctor say about her foot?",
    "options": [
     "It was fine",
     "It was a sprain and not a break",
     "It was broken"
    ],
    "answer": 1
   },
   {
    "q": "What did she take for the pain?",
    "options": [
     "A painkiller",
     "Antibiotics",
     "Syrup"
    ],
    "answer": 0
   },
   {
    "q": "What did she have on Friday?",
    "options": [
     "A cavity",
     "A sore throat and a fever",
     "A backache"
    ],
    "answer": 1
   },
   {
    "q": "What did the doctor give her for the infection?",
    "options": [
     "Antibiotics",
     "Vitamins",
     "A bandage"
    ],
    "answer": 0
   },
   {
    "q": "What did the doctor say about her posture?",
    "options": [
     "It was perfect",
     "It was getting better",
     "It was bad because she sits at a desk"
    ],
    "answer": 2
   },
   {
    "q": "What does she do before sleeping now?",
    "options": [
     "Yoga",
     "Meditation for ten minutes",
     "A hot bath"
    ],
    "answer": 1
   },
   {
    "q": "What does she say health is about?",
    "options": [
     "Small habits repeated every day",
     "Big things",
     "Expensive doctors"
    ],
    "answer": 0
   }
  ]
 },
 "tech2": {
  "title": "A day without internet",
  "paragraphs": [
   "On Saturday morning the router stopped working, and Tom discovered how much he depended on the internet. First he tried to reboot the router, then he tried to restart his laptop, but nothing happened. There was no signal, and the screen of his phone showed a small red cross. He wanted to browse the news, to check his voicemail and to send an emoji to his sister, but he could not do any of it.",
   "His younger brother, who loves games, was even more upset. His console was not compatible with the mobile hotspot, and the resolution of the video was too low for streaming. \"My whole life is online,\" he complained, and he sat on the sofa with his headset on, looking at a frozen screen. Their mother laughed. She told them that a hacker was not to blame: the problem was only a broken cable.",
   "In the end they decided to do something different. Tom took a book from the shelf, his brother played cards with their mother, and in the afternoon the whole family went for a walk by the river. When the technician arrived on Monday and fixed the connection in five minutes, Tom was almost sorry. He had to admit that the quiet Saturday had been one of the best days of the month. \"Perhaps,\" he said, \"we should switch off the router once a week.\""
  ],
  "questions": [
   {
    "q": "What did Tom want to send to his sister?",
    "options": [
     "A video",
     "A photo",
     "An emoji"
    ],
    "answer": 2
   },
   {
    "q": "What was too low for streaming?",
    "options": [
     "The battery",
     "The resolution of the video",
     "The volume"
    ],
    "answer": 1
   },
   {
    "q": "What did Tom's brother wear on his head?",
    "options": [
     "A scarf",
     "A headset",
     "A hat"
    ],
    "answer": 1
   },
   {
    "q": "What did Tom take from the shelf?",
    "options": [
     "A book",
     "A phone",
     "A game"
    ],
    "answer": 0
   },
   {
    "q": "What did Tom say they should do once a week?",
    "options": [
     "Buy a new console",
     "Switch off the router",
     "Call the technician"
    ],
    "answer": 1
   },
   {
    "q": "What stopped working on Saturday morning?",
    "options": [
     "The television",
     "The printer",
     "The router"
    ],
    "answer": 2
   },
   {
    "q": "What did Tom try first?",
    "options": [
     "To reboot the router",
     "To buy a new one",
     "To call the technician"
    ],
    "answer": 0
   },
   {
    "q": "What did the phone screen show?",
    "options": [
     "A black screen",
     "A small red cross",
     "An error message"
    ],
    "answer": 1
   },
   {
    "q": "Who loves games?",
    "options": [
     "Tom's younger brother",
     "Tom's mother",
     "Tom's sister"
    ],
    "answer": 0
   },
   {
    "q": "What was wrong with the console?",
    "options": [
     "It was not compatible with the hotspot",
     "It was old",
     "It was broken"
    ],
    "answer": 0
   },
   {
    "q": "Who was not to blame?",
    "options": [
     "The mother",
     "The neighbour",
     "A hacker"
    ],
    "answer": 2
   },
   {
    "q": "What was the real problem?",
    "options": [
     "A broken cable",
     "A virus",
     "A bad password"
    ],
    "answer": 0
   },
   {
    "q": "What did Tom's brother do while the internet was off?",
    "options": [
     "He studied",
     "He played cards with their mother",
     "He slept"
    ],
    "answer": 1
   },
   {
    "q": "Where did the family go in the afternoon?",
    "options": [
     "For a walk by the river",
     "To a café",
     "To the cinema"
    ],
    "answer": 0
   },
   {
    "q": "When did the technician fix the connection?",
    "options": [
     "On Monday",
     "On Sunday",
     "On Saturday"
    ],
    "answer": 0
   }
  ]
 },
 "career2": {
  "title": "My first month at the office",
  "paragraphs": [
   "Rita started her first real job last month, in the sales department of a company that sells furniture. On the first day the manager showed her the workplace, introduced the staff and gave her a schedule for the week. She was a trainee, which meant that she would learn from an experienced colleague. \"Do not worry,\" said the manager, \"everybody was an intern or an apprentice once.\"",
   "Her tasks were simple at first. She prepared an invoice for a client, answered the phone and took notes at a meeting. The agenda was long, and she did not understand all the words, but she wrote them down. In the second week she had to give a short presentation about a new proposal to a supplier. She was very nervous, but the team smiled and asked friendly questions.",
   "In the evenings she read about her rights. She learned that the union could help her with problems, that a payslip must show every payment and that a person who is made redundant has the right to some money. Some of her friends had perks like a company phone or a gym card, and others received a commission on every sale. Rita had none of that yet, but she had a target: to be a good salesperson by the end of the year. The recruiter who had found her the job called to ask how it was going. \"Tired,\" she said, \"but happy.\" The headquarters were in another city, and next month she was going to visit them for the first time."
  ],
  "questions": [
   {
    "q": "In which department did Rita start?",
    "options": [
     "Accounting",
     "Sales",
     "Cleaning"
    ],
    "answer": 1
   },
   {
    "q": "What did the manager say everybody had been once?",
    "options": [
     "A manager",
     "A client",
     "An intern or an apprentice"
    ],
    "answer": 2
   },
   {
    "q": "What did she do at the meeting?",
    "options": [
     "Gave a speech",
     "Made coffee",
     "Took notes"
    ],
    "answer": 2
   },
   {
    "q": "Who was the presentation for?",
    "options": [
     "A teacher",
     "A bank",
     "A supplier"
    ],
    "answer": 2
   },
   {
    "q": "Who had found her the job?",
    "options": [
     "A friend",
     "Her father",
     "A recruiter"
    ],
    "answer": 2
   },
   {
    "q": "What kind of company does Rita work for?",
    "options": [
     "One that sells furniture",
     "A bank",
     "A school"
    ],
    "answer": 0
   },
   {
    "q": "What was Rita?",
    "options": [
     "A client",
     "The manager",
     "A trainee"
    ],
    "answer": 2
   },
   {
    "q": "What did the manager give her on the first day?",
    "options": [
     "A phone",
     "A schedule for the week",
     "A car"
    ],
    "answer": 1
   },
   {
    "q": "What did she prepare for a client?",
    "options": [
     "An invoice",
     "A contract",
     "A presentation"
    ],
    "answer": 0
   },
   {
    "q": "What did she have to give in the second week?",
    "options": [
     "A short presentation",
     "A speech",
     "A report"
    ],
    "answer": 0
   },
   {
    "q": "How did the team react to her presentation?",
    "options": [
     "They left",
     "They smiled and asked friendly questions",
     "They laughed"
    ],
    "answer": 1
   },
   {
    "q": "What did she learn the union could do?",
    "options": [
     "Help her with problems",
     "Hire her",
     "Pay her"
    ],
    "answer": 0
   },
   {
    "q": "What must a payslip show?",
    "options": [
     "Her address",
     "Her age",
     "Every payment"
    ],
    "answer": 2
   },
   {
    "q": "What is Rita's target?",
    "options": [
     "To change job",
     "To be a good salesperson by the end of the year",
     "To get a promotion"
    ],
    "answer": 1
   },
   {
    "q": "Where are the headquarters?",
    "options": [
     "In another city",
     "In the same building",
     "Abroad"
    ],
    "answer": 0
   }
  ]
 },
 "travelb1b": {
  "title": "A road trip to the coast",
  "paragraphs": [
   "Last summer Luís and his wife rented a caravan and drove from Lisbon to the north of Spain. They had a map, a compass that belonged to his grandfather and good travel insurance, because the journey was long. On the first day they stopped at a toll on the motorway, and Luís complained about the price. Then they took the wrong junction and had to make a detour through a small village, where they found a perfect café and decided that the mistake was a gift.",
   "After three days they arrived at a harbour full of white yachts and small fishing boats. They spent a night in a hostel to meet other travellers and to wash their clothes. In the morning they rented a canoe and a kayak and paddled along the coast. A man on the shore told them about a shortcut to a hidden beach, and they followed the signposts for an hour. At a crossing a helicopter flew over their heads, and the children in a nearby carriage of the little train waved at it.",
   "On the way home they took a cable-car up a mountain, and Luís's wife took a hundred photographs. \"I prefer this to a plane,\" he said, \"because the road teaches you things that the runway never will.\" They returned to Lisbon tired and sunburnt. Their friends asked if they would go again next year, and the answer was yes, but this time they would bring a scooter in the back of the caravan, just in case."
  ],
  "questions": [
   {
    "q": "Where did the journey start?",
    "options": [
     "In Paris",
     "In Lisbon",
     "In Madrid"
    ],
    "answer": 1
   },
   {
    "q": "What belonged to Luís's grandfather?",
    "options": [
     "A map",
     "A caravan",
     "A compass"
    ],
    "answer": 2
   },
   {
    "q": "What did they do after taking the wrong junction?",
    "options": [
     "Stopped the trip",
     "A detour through a small village",
     "Went back home"
    ],
    "answer": 1
   },
   {
    "q": "What flew over their heads at a crossing?",
    "options": [
     "A bird",
     "A plane",
     "A helicopter"
    ],
    "answer": 2
   },
   {
    "q": "How did they return to Lisbon?",
    "options": [
     "Angry and cold",
     "Tired and sunburnt",
     "Rich and happy"
    ],
    "answer": 1
   },
   {
    "q": "What did Luís and his wife rent?",
    "options": [
     "A boat",
     "A caravan",
     "A car"
    ],
    "answer": 1
   },
   {
    "q": "What did Luís complain about on the motorway?",
    "options": [
     "The weather",
     "The price of the toll",
     "The traffic"
    ],
    "answer": 1
   },
   {
    "q": "What did they find in the small village?",
    "options": [
     "A perfect café",
     "A garage",
     "A hotel"
    ],
    "answer": 0
   },
   {
    "q": "What was in the harbour?",
    "options": [
     "Large ships",
     "Nothing",
     "White yachts and small fishing boats"
    ],
    "answer": 2
   },
   {
    "q": "Where did they sleep one night?",
    "options": [
     "In a tent",
     "In a hostel",
     "In a hotel"
    ],
    "answer": 1
   },
   {
    "q": "What did they rent to go along the coast?",
    "options": [
     "A motorboat",
     "A canoe and a kayak",
     "A bicycle"
    ],
    "answer": 1
   },
   {
    "q": "What did a man tell them about?",
    "options": [
     "A good restaurant",
     "A shortcut to a hidden beach",
     "A museum"
    ],
    "answer": 1
   },
   {
    "q": "What did they take up the mountain?",
    "options": [
     "A bus",
     "A cable-car",
     "A train"
    ],
    "answer": 1
   },
   {
    "q": "Who took a hundred photographs?",
    "options": [
     "Luís",
     "The children",
     "Luís's wife"
    ],
    "answer": 2
   },
   {
    "q": "What would they bring next time?",
    "options": [
     "A scooter",
     "A boat",
     "A bicycle"
    ],
    "answer": 0
   }
  ]
 },
 "environment2": {
  "title": "After the storm",
  "paragraphs": [
   "Last autumn a hurricane hit the coast of our country, and the whole region suffered. The wind destroyed roofs, a landslide closed the main road and the rain caused a flood in the lower part of the town. A few weeks earlier there had been a wildfire in the hills, and the experts said that both events were connected with the changing climate. Scientists have shown that greenhouse gases and carbon emissions are making the planet warmer. Glaciers are melting, and some icebergs are now so small that they disappear before they reach the sea.",
   "After the storm, the mayor organised a meeting. A young teacher spoke about her carbon footprint and asked everybody to do something small. She said that people could use reusable bags, reduce plastic packaging and make compost from vegetable waste. A farmer explained that he had stopped using chemical fertiliser, because it was toxic for the river. An old man complained about the smog in the city and about the erosion on the beach, but he promised to leave his car at home on Sundays.",
   "It is easy to feel that these problems are too big for ordinary people. However, in the following months the town planted a hundred trees and opened a recycling centre. The children made posters about the ozone layer, and a local company began to produce biodegradable boxes. \"We cannot stop an earthquake or a tornado,\" said the mayor at the end of the year, \"but we can decide what kind of world we leave behind.\""
  ],
  "questions": [
   {
    "q": "What did the wind destroy?",
    "options": [
     "Bridges",
     "Boats",
     "Roofs"
    ],
    "answer": 2
   },
   {
    "q": "What caused a flood in the lower part of the town?",
    "options": [
     "The rain",
     "A river dam",
     "A broken pipe"
    ],
    "answer": 0
   },
   {
    "q": "What did the old man complain about?",
    "options": [
     "The price of petrol",
     "The mayor",
     "The smog in the city and erosion on the beach"
    ],
    "answer": 2
   },
   {
    "q": "What was the farmer's chemical fertiliser toxic for?",
    "options": [
     "The cows",
     "The house",
     "The river"
    ],
    "answer": 2
   },
   {
    "q": "What did the children make posters about?",
    "options": [
     "Plastic bags",
     "The ozone layer",
     "Trains"
    ],
    "answer": 1
   },
   {
    "q": "What hit the coast last autumn?",
    "options": [
     "A hurricane",
     "An earthquake",
     "A tornado"
    ],
    "answer": 0
   },
   {
    "q": "What closed the main road?",
    "options": [
     "A landslide",
     "A flood",
     "A wildfire"
    ],
    "answer": 0
   },
   {
    "q": "Where had there been a wildfire?",
    "options": [
     "In the town",
     "On the beach",
     "In the hills"
    ],
    "answer": 2
   },
   {
    "q": "What are greenhouse gases making the planet?",
    "options": [
     "Colder",
     "Warmer",
     "Drier"
    ],
    "answer": 1
   },
   {
    "q": "What did the young teacher talk about?",
    "options": [
     "Her job",
     "Her family",
     "Her carbon footprint"
    ],
    "answer": 2
   },
   {
    "q": "What had the farmer stopped using?",
    "options": [
     "Chemical fertiliser",
     "Water",
     "His tractor"
    ],
    "answer": 0
   },
   {
    "q": "What did the old man promise?",
    "options": [
     "To plant a tree",
     "To leave his car at home on Sundays",
     "To sell his house"
    ],
    "answer": 1
   },
   {
    "q": "What did the town open?",
    "options": [
     "A recycling centre",
     "A school",
     "A hospital"
    ],
    "answer": 0
   },
   {
    "q": "What did a local company begin to produce?",
    "options": [
     "Biodegradable boxes",
     "Plastic bags",
     "Paper"
    ],
    "answer": 0
   },
   {
    "q": "What does the mayor say we can decide?",
    "options": [
     "When the next storm comes",
     "What kind of world we leave behind",
     "Nothing"
    ],
    "answer": 1
   }
  ]
 },
 "nature2": {
  "title": "A walk in the woods",
  "paragraphs": [
   "On Sunday morning Clara and her grandfather went for a walk in the woods behind their village. The path started in a green meadow full of daisies and red poppies, and then it went up between tall oaks and dark pine trees. The bark of the oldest oak was covered with moss and ivy, and a few acorns lay on the ground. \"Do you see that trunk?\" asked her grandfather. \"It is older than my grandmother.\"",
   "They walked slowly and kept quiet. In a few minutes they saw a deer at the edge of the trees, and a little later a fox crossed the path in front of them. Clara noticed a lizard on a warm boulder and an insect with bright blue wings. Her grandfather showed her a fern, a small orchid and a place where bats sleep during the day. Near the river they found a swamp, and she took a pebble from the water to keep as a souvenir.",
   "At the top of the hill there was a view over a deep canyon. They sat down to eat their sandwiches, and her grandfather talked about the tulips that his mother had grown and about the winters of his childhood. \"Nature is a book,\" he said, \"but you have to learn to read it.\" On the way home Clara asked if they could repeat the walk in spring. He smiled and said that the woods would be different, as every season has its own colours and its own animals."
  ],
  "questions": [
   {
    "q": "What flowers were in the meadow?",
    "options": [
     "Daisies and red poppies",
     "Orchids and ferns",
     "Roses and tulips"
    ],
    "answer": 0
   },
   {
    "q": "What did they see crossing the path?",
    "options": [
     "A bear",
     "A fox",
     "A wolf"
    ],
    "answer": 1
   },
   {
    "q": "What did the insect have?",
    "options": [
     "Yellow spots",
     "Red legs",
     "Bright blue wings"
    ],
    "answer": 2
   },
   {
    "q": "What did they find near the river?",
    "options": [
     "A swamp",
     "A waterfall",
     "A bridge"
    ],
    "answer": 0
   },
   {
    "q": "What did they eat at the top of the hill?",
    "options": [
     "Sandwiches",
     "Fruit",
     "Soup"
    ],
    "answer": 0
   },
   {
    "q": "Who went for a walk in the woods?",
    "options": [
     "Two friends",
     "Clara and her mother",
     "Clara and her grandfather"
    ],
    "answer": 2
   },
   {
    "q": "What did the path start in?",
    "options": [
     "A green meadow",
     "A garden",
     "A forest"
    ],
    "answer": 0
   },
   {
    "q": "What covered the bark of the oldest oak?",
    "options": [
     "Moss and ivy",
     "Paint",
     "Snow"
    ],
    "answer": 0
   },
   {
    "q": "What did they see at the edge of the trees?",
    "options": [
     "A fox",
     "A deer",
     "A bat"
    ],
    "answer": 1
   },
   {
    "q": "What was on the warm boulder?",
    "options": [
     "A frog",
     "A lizard",
     "A snake"
    ],
    "answer": 1
   },
   {
    "q": "Where do bats sleep?",
    "options": [
     "At night",
     "In the river",
     "During the day"
    ],
    "answer": 2
   },
   {
    "q": "What did Clara take from the water?",
    "options": [
     "A fish",
     "A flower",
     "A pebble"
    ],
    "answer": 2
   },
   {
    "q": "What was at the top of the hill?",
    "options": [
     "A view over a deep canyon",
     "A house",
     "A lake"
    ],
    "answer": 0
   },
   {
    "q": "What did the grandfather say nature is?",
    "options": [
     "A book",
     "A game",
     "A school"
    ],
    "answer": 0
   },
   {
    "q": "Why would the woods be different in spring?",
    "options": [
     "There would be more people",
     "Every season has its own colours and animals",
     "It would rain"
    ],
    "answer": 1
   }
  ]
 },
 "media2": {
  "title": "The film night",
  "paragraphs": [
   "Every Friday Daniel and his sister Laura have a film night at home. First they choose a film from the list, and the choice is never easy. Daniel likes a good thriller or a blockbuster with famous actors, while Laura prefers a quiet story with a great screenplay. Last Friday they watched the trailer of a new film and discovered that it was a remake of an old classic. \"I prefer the original,\" said Daniel, \"but let us give the director a chance.\"",
   "The film had a large cast and a long list of names in the crew. The actress who played the main character was very good, and the music, with beautiful lyrics, came from a new album that Laura already knew. However, the end was a cliffhanger, and the sequel will not come out until next year. \"That is not fair,\" Daniel complained, \"I want to know what happens now.\"",
   "After the film they talked about it for an hour. Laura said that she was thinking of reading the biography of the director, and Daniel promised to look for a paperback of the novel that the screenplay was based on. In the library the librarian told them that the novelist had written six other books, and that her fiction was very popular. They read one chapter every evening, with the subtitles of the film still in their heads. When the premiere of the sequel finally came, the two of them were the first in the queue. They agreed that the book was better, but the film was a close second."
  ],
  "questions": [
   {
    "q": "Who prefers a quiet story with a great screenplay?",
    "options": [
     "Laura",
     "The director",
     "Daniel"
    ],
    "answer": 0
   },
   {
    "q": "What did Daniel say about the original?",
    "options": [
     "He had never seen it",
     "He hated it",
     "He preferred it"
    ],
    "answer": 2
   },
   {
    "q": "What did the film have?",
    "options": [
     "A large cast and a long list of names in the crew",
     "A small cast",
     "No music"
    ],
    "answer": 0
   },
   {
    "q": "How many other books had the novelist written?",
    "options": [
     "Two",
     "Twelve",
     "Six"
    ],
    "answer": 2
   },
   {
    "q": "Where were Daniel and Laura at the premiere of the sequel?",
    "options": [
     "At the back",
     "At home",
     "First in the queue"
    ],
    "answer": 2
   },
   {
    "q": "When do Daniel and Laura have a film night?",
    "options": [
     "Every Monday",
     "Every Friday",
     "Every Sunday"
    ],
    "answer": 1
   },
   {
    "q": "What does Daniel like?",
    "options": [
     "A quiet story",
     "A thriller or a blockbuster",
     "A cartoon"
    ],
    "answer": 1
   },
   {
    "q": "What was the new film?",
    "options": [
     "A documentary",
     "A remake of an old classic",
     "A sequel"
    ],
    "answer": 1
   },
   {
    "q": "Where did Laura know the music from?",
    "options": [
     "A new album",
     "A concert",
     "The radio"
    ],
    "answer": 0
   },
   {
    "q": "How did the film end?",
    "options": [
     "With a wedding",
     "With a joke",
     "With a cliffhanger"
    ],
    "answer": 2
   },
   {
    "q": "When will the sequel come out?",
    "options": [
     "Next month",
     "Next week",
     "Next year"
    ],
    "answer": 2
   },
   {
    "q": "What did Laura want to read?",
    "options": [
     "A poem",
     "The biography of the director",
     "A magazine"
    ],
    "answer": 1
   },
   {
    "q": "What did Daniel want to find?",
    "options": [
     "A DVD",
     "A poster",
     "A paperback of the novel"
    ],
    "answer": 2
   },
   {
    "q": "Who told them about the novelist?",
    "options": [
     "The librarian",
     "The director",
     "A friend"
    ],
    "answer": 0
   },
   {
    "q": "Which did they think was better, the book or the film?",
    "options": [
     "Both the same",
     "The film",
     "The book"
    ],
    "answer": 2
   }
  ]
 },
 "foodb12": {
  "title": "Sunday lunch",
  "paragraphs": [
   "Every Sunday the whole family comes to my grandmother's house for lunch, and the kitchen smells wonderful from early morning. She starts by making the dough for the pastry, adds a pinch of salt and a spoonful of sugar and leaves it to rest. Then she prepares the stew in a big casserole: onions, carrots and spinach, with fresh herbs from the garden. My grandfather grates the cheese and whisks the eggs, and I help to put the sauce into a small saucepan.",
   "On the table there is always a pasta dish with a rich sauce, because my cousins love it. My aunt, who is a vegetarian, brings a salad with her own dressing, and my uncle roasts a chicken with butter and garlic. The potatoes are crunchy on the outside, and the meat is soft and juicy. We drink water and a little wine, and everybody talks at the same time.",
   "For dessert there are waffles with ice cream, or toast with jam for those who do not like sweet things. My grandmother says that cooking is a way of saying \"I love you\" without words. Sometimes she steams a few vegetables for the children and adds a noodle soup in winter. When we finish, my father washes the plates and the rest of us sit in the sun with a cup of coffee. I think that this is the best time of the week."
  ],
  "questions": [
   {
    "q": "Where does the family have lunch?",
    "options": [
     "At the grandmother's house",
     "At the beach",
     "At a restaurant"
    ],
    "answer": 0
   },
   {
    "q": "What does the grandmother leave to rest?",
    "options": [
     "The chicken",
     "The soup",
     "The dough"
    ],
    "answer": 2
   },
   {
    "q": "What herbs does the stew have?",
    "options": [
     "Dry herbs from a shop",
     "Fresh herbs from the garden",
     "None"
    ],
    "answer": 1
   },
   {
    "q": "What is the aunt?",
    "options": [
     "A vegetarian",
     "A teacher",
     "A cook"
    ],
    "answer": 0
   },
   {
    "q": "Who washes the plates?",
    "options": [
     "The aunt",
     "The grandmother",
     "The father"
    ],
    "answer": 2
   },
   {
    "q": "When does the family come for lunch?",
    "options": [
     "Every day",
     "Every Sunday",
     "Every Friday"
    ],
    "answer": 1
   },
   {
    "q": "What does the grandmother add to the dough?",
    "options": [
     "Milk",
     "Eggs",
     "A pinch of salt and a spoonful of sugar"
    ],
    "answer": 2
   },
   {
    "q": "What is in the stew?",
    "options": [
     "Only meat",
     "Onions, carrots and spinach",
     "Fish and rice"
    ],
    "answer": 1
   },
   {
    "q": "What does the grandfather do?",
    "options": [
     "Washes the plates",
     "Grates the cheese and whisks the eggs",
     "Cooks the chicken"
    ],
    "answer": 1
   },
   {
    "q": "Why is there a pasta dish?",
    "options": [
     "It is cheap",
     "It is quick",
     "The cousins love it"
    ],
    "answer": 2
   },
   {
    "q": "What does the aunt bring?",
    "options": [
     "A cake",
     "A chicken",
     "A salad with her own dressing"
    ],
    "answer": 2
   },
   {
    "q": "What does the uncle roast?",
    "options": [
     "A chicken",
     "A turkey",
     "A fish"
    ],
    "answer": 0
   },
   {
    "q": "What are the potatoes like?",
    "options": [
     "Very soft",
     "Crunchy on the outside",
     "Cold"
    ],
    "answer": 1
   },
   {
    "q": "What is for dessert?",
    "options": [
     "Chocolate cake",
     "Fruit",
     "Waffles with ice cream"
    ],
    "answer": 2
   },
   {
    "q": "What does the grandmother say cooking is?",
    "options": [
     "A waste of time",
     "A hard job",
     "A way of saying I love you without words"
    ],
    "answer": 2
   }
  ]
 },
 "leisureb12": {
  "title": "The hobby club",
  "paragraphs": [
   "When Pedro retired, his wife told him that he needed a hobby. At first he laughed, because he had never had one. Then he saw a poster at the library: \"Come and try something new at the hobby club on Thursdays.\" He went to the first meeting out of curiosity and found about thirty people of all ages. Some were doing a puzzle, others were reading, and a woman was teaching origami to a small group.",
   "During the first weeks Pedro tried many things. He did a crossword and a sudoku, but he was not very good at them. He went hiking with a group on Saturday, and he enjoyed it, although his legs hurt the next day. A friend took him fishing and showed him photography, and he even tried archery, which needed more patience than he had. He did not like the drums, but he loved listening to the school choir and to a young man who played the violin.",
   "His favourite activity was judo, which he had learned as a boy. He was only an amateur, but the teacher said that he still had good balance. Soon he was going twice a week, and his wife said that he was a different person. \"You have a younger face,\" she said. Pedro laughed and said that the secret was to have something to look forward to every day. His granddaughter asked if he could teach her too, and now they go together to the club every Thursday afternoon."
  ],
  "questions": [
   {
    "q": "What did Pedro do on Saturday?",
    "options": [
     "Went hiking with a group",
     "Played judo",
     "Stayed at home"
    ],
    "answer": 0
   },
   {
    "q": "About how many people did Pedro find at the first meeting?",
    "options": [
     "About ten",
     "About thirty",
     "About two hundred"
    ],
    "answer": 1
   },
   {
    "q": "What did Pedro need more patience for?",
    "options": [
     "Judo",
     "Fishing",
     "Archery"
    ],
    "answer": 2
   },
   {
    "q": "What did he like listening to?",
    "options": [
     "Rock music",
     "The radio",
     "The school choir and a young man playing the violin"
    ],
    "answer": 2
   },
   {
    "q": "How often does Pedro go to judo?",
    "options": [
     "Every day",
     "Once a month",
     "Twice a week"
    ],
    "answer": 2
   },
   {
    "q": "Why did Pedro need a hobby?",
    "options": [
     "He was lonely",
     "He was ill",
     "He had retired"
    ],
    "answer": 2
   },
   {
    "q": "Where did he see the poster?",
    "options": [
     "On the bus",
     "At the supermarket",
     "At the library"
    ],
    "answer": 2
   },
   {
    "q": "When is the hobby club?",
    "options": [
     "On Thursdays",
     "On Fridays",
     "On Sundays"
    ],
    "answer": 0
   },
   {
    "q": "What was a woman teaching?",
    "options": [
     "Chess",
     "Origami",
     "Sewing"
    ],
    "answer": 1
   },
   {
    "q": "Which two puzzles did he try first?",
    "options": [
     "A jigsaw and cards",
     "A crossword and a sudoku",
     "Chess and darts"
    ],
    "answer": 1
   },
   {
    "q": "What happened after hiking?",
    "options": [
     "It rained",
     "His legs hurt",
     "He got lost"
    ],
    "answer": 1
   },
   {
    "q": "What did he not like?",
    "options": [
     "The choir",
     "The drums",
     "Fishing"
    ],
    "answer": 1
   },
   {
    "q": "Which sport had he learned as a boy?",
    "options": [
     "Karate",
     "Fencing",
     "Judo"
    ],
    "answer": 2
   },
   {
    "q": "What did his wife say?",
    "options": [
     "That he was a different person",
     "That he was old",
     "That he was tired"
    ],
    "answer": 0
   },
   {
    "q": "Who wanted to learn too?",
    "options": [
     "His son",
     "His granddaughter",
     "His neighbour"
    ],
    "answer": 1
   }
  ]
 },
 "sportb12": {
  "title": "The big match",
  "paragraphs": [
   "It was the day of the final, and the stadium was full. There were more than fifty thousand spectators, and the noise was incredible. The captain of the home team did his warm-up on the track beside the pitch while the fans sang. The semi-final had been difficult, and everybody remembered the defeat in the same competition the year before. This time they wanted the trophy.",
   "In the first half there was a foul on the best player, and the referee gave a penalty, but the goalkeeper stopped it. A few minutes later a player dribbled past three men and scored with a wonderful volley. Then the other team scored from a corner, and a goal in the second half was cancelled because the striker was offside. The game was 1–1 when it went to extra time.",
   "In the last minute the captain received the ball, ran down the left side and shot. It was a goal! The whole stadium shouted, and the players jumped on each other. The victory was theirs, and the captain lifted the trophy over his head. In the evening, on television, a journalist asked him what the secret of the team was. \"Training, patience and friendship,\" he said. \"We started the year as a group of strangers, and we finished as a family.\" The next day the newspapers called the match the best final of the decade. At the same time, in another city, young athletes were practising the marathon, the relay and the hurdles, and dreaming of their own victory."
  ],
  "questions": [
   {
    "q": "Where was the captain's warm-up?",
    "options": [
     "In the dressing room",
     "In the car park",
     "On the track beside the pitch"
    ],
    "answer": 2
   },
   {
    "q": "What had happened in the same competition the year before?",
    "options": [
     "A victory",
     "Nothing",
     "A defeat"
    ],
    "answer": 2
   },
   {
    "q": "Who scored from a corner?",
    "options": [
     "The home team",
     "The other team",
     "The captain"
    ],
    "answer": 1
   },
   {
    "q": "Which side of the pitch did the captain run down?",
    "options": [
     "The right side",
     "The left side",
     "The middle"
    ],
    "answer": 1
   },
   {
    "q": "What did the newspapers call the match?",
    "options": [
     "A disaster",
     "A boring game",
     "The best final of the decade"
    ],
    "answer": 2
   },
   {
    "q": "What was the day?",
    "options": [
     "The first match",
     "The day of the semi-final",
     "The day of the final"
    ],
    "answer": 2
   },
   {
    "q": "How many spectators were there?",
    "options": [
     "Two hundred",
     "More than fifty thousand",
     "About five thousand"
    ],
    "answer": 1
   },
   {
    "q": "What did the goalkeeper do?",
    "options": [
     "Stopped a penalty",
     "Scored a goal",
     "Left the pitch"
    ],
    "answer": 0
   },
   {
    "q": "How did a player score the first goal?",
    "options": [
     "With his head",
     "With a penalty",
     "With a volley"
    ],
    "answer": 2
   },
   {
    "q": "Why was a goal cancelled?",
    "options": [
     "The ball was out",
     "There was a foul",
     "The striker was offside"
    ],
    "answer": 2
   },
   {
    "q": "What was the score at the end of normal time?",
    "options": [
     "2–0",
     "1–1",
     "0–0"
    ],
    "answer": 1
   },
   {
    "q": "Who scored in the last minute?",
    "options": [
     "The goalkeeper",
     "The captain",
     "A new player"
    ],
    "answer": 1
   },
   {
    "q": "What did the captain lift?",
    "options": [
     "A flag",
     "The trophy",
     "A medal"
    ],
    "answer": 1
   },
   {
    "q": "What did the captain say was the secret?",
    "options": [
     "Money",
     "Luck",
     "Training, patience and friendship"
    ],
    "answer": 2
   },
   {
    "q": "What were the young athletes practising?",
    "options": [
     "The marathon, the relay and the hurdles",
     "Football",
     "Judo"
    ],
    "answer": 0
   }
  ]
 },
 "educationb12": {
  "title": "First year at university",
  "paragraphs": [
   "When Inês arrived at the university, she felt lost. The campus was huge, and the first lecture was in a hall with five hundred students. She lived in a dormitory with three other girls, and the tuition was a worry for her parents because the fee for the first semester was high. \"Do not worry,\" said her father, \"this is an investment.\"",
   "She chose a degree in biology, and her first module was about the cell. The professor gave a lecture twice a week, and every Friday there was a seminar in a small room. In the first month she had to write an essay, and she discovered that every citation needed a source and that the bibliography had to be at the end. The first assignment was a disaster, and she got a low mark. A tutor explained the mistakes, and the second one was much better.",
   "It was not all work. In October there was a welcome ceremony, and in the evening the older students organised a party. She made friends with a girl who had been a dropout in another course and who was starting again. They remembered their schools: Inês had studied at a secondary school in a small town, and her friend at a big primary school with a famous playground. They laughed about the days at the kindergarten and about the detention they had received when they were children. At the end of the first year Inês went to the graduation ceremony of the older students. She watched them in their black gowns and decided that in three years she would be there too. The principal of the faculty gave a short speech, and everybody clapped."
  ],
  "questions": [
   {
    "q": "How many students were in the first lecture hall?",
    "options": [
     "Fifty",
     "Five thousand",
     "Five hundred"
    ],
    "answer": 2
   },
   {
    "q": "Who did Inês live with?",
    "options": [
     "Three other girls",
     "Her brother",
     "Her parents"
    ],
    "answer": 0
   },
   {
    "q": "What was her first module about?",
    "options": [
     "The stars",
     "The cell",
     "The sea"
    ],
    "answer": 1
   },
   {
    "q": "When was there a welcome ceremony?",
    "options": [
     "In October",
     "In June",
     "In January"
    ],
    "answer": 0
   },
   {
    "q": "What did the principal of the faculty do?",
    "options": [
     "Gave a short speech",
     "Left early",
     "Sang a song"
    ],
    "answer": 0
   },
   {
    "q": "How did Inês feel at first?",
    "options": [
     "Happy",
     "Lost",
     "Angry"
    ],
    "answer": 1
   },
   {
    "q": "Where did she live?",
    "options": [
     "In a flat",
     "With her parents",
     "In a dormitory"
    ],
    "answer": 2
   },
   {
    "q": "What was a worry for her parents?",
    "options": [
     "The tuition fee",
     "Her health",
     "The distance"
    ],
    "answer": 0
   },
   {
    "q": "What degree did she choose?",
    "options": [
     "History",
     "Biology",
     "Law"
    ],
    "answer": 1
   },
   {
    "q": "What did she discover about citations?",
    "options": [
     "They were not necessary",
     "They were short",
     "Each needed a source"
    ],
    "answer": 2
   },
   {
    "q": "How was her first assignment?",
    "options": [
     "A disaster",
     "Perfect",
     "Average"
    ],
    "answer": 0
   },
   {
    "q": "Who explained her mistakes?",
    "options": [
     "A friend",
     "Her father",
     "A tutor"
    ],
    "answer": 2
   },
   {
    "q": "What did her friend used to be?",
    "options": [
     "A principal",
     "A teacher",
     "A dropout in another course"
    ],
    "answer": 2
   },
   {
    "q": "What did the older students wear at the graduation?",
    "options": [
     "Uniforms",
     "Suits",
     "Black gowns"
    ],
    "answer": 2
   },
   {
    "q": "What did Inês decide?",
    "options": [
     "To change degree",
     "To leave",
     "That in three years she would be there too"
    ],
    "answer": 2
   }
  ]
 },
 "feelingsb12": {
  "title": "The surprise",
  "paragraphs": [
   "Rita was waiting for an email, and she was very nervous. For three weeks she had been hopeful, but her doubt grew every day. She had applied for a job in another country, and the interview had gone well, but she had not heard anything since. Her friend said that she was envious of her courage, but Rita felt only anxiety. \"I regret that I did not ask when they would answer,\" she said.",
   "On Friday morning she opened the email and read the first line three times. She had the job! She felt a mixture of joy and relief, and she was so thrilled that she called her mother at once. Her mother cried with pride, and her father, who was usually grumpy, said that he was delighted. Even her brother, who is never emotional, showed his gratitude and gave her a hug.",
   "That evening, however, Rita felt a strange sadness. She would leave her friends, her family and the city that she loved. She thought about the loneliness of a new place and about the boredom of a small flat on her own. Her best friend said that this was normal and that curiosity would soon win. \"Nobody wants to see you miserable,\" she said, \"and nobody is jealous of you any more. They are only proud.\" Rita laughed. She understood that a big step always brings two feelings at the same time, and that it is not shameful to be afraid. When the day came to leave, she was a little puzzled and a little suspicious about her own happiness, but she got on the plane with a big smile."
  ],
  "questions": [
   {
    "q": "What did Rita read three times?",
    "options": [
     "The first line of the email",
     "A book",
     "Her letter"
    ],
    "answer": 0
   },
   {
    "q": "Who said that he was delighted?",
    "options": [
     "Her brother",
     "Her father",
     "Her friend"
    ],
    "answer": 1
   },
   {
    "q": "How did Rita's brother show gratitude?",
    "options": [
     "He gave her money",
     "He gave her a hug",
     "He wrote a letter"
    ],
    "answer": 1
   },
   {
    "q": "What did she think about in the new place?",
    "options": [
     "Food",
     "Loneliness and boredom",
     "Money"
    ],
    "answer": 1
   },
   {
    "q": "How did Rita get on the plane?",
    "options": [
     "Running",
     "With a big smile",
     "Crying"
    ],
    "answer": 1
   },
   {
    "q": "What was Rita waiting for?",
    "options": [
     "A phone call",
     "A letter",
     "An email"
    ],
    "answer": 2
   },
   {
    "q": "How long had she waited?",
    "options": [
     "Three months",
     "Three days",
     "Three weeks"
    ],
    "answer": 2
   },
   {
    "q": "What had she applied for?",
    "options": [
     "A university place",
     "A job in another country",
     "A flat"
    ],
    "answer": 1
   },
   {
    "q": "How did she feel when she read the email?",
    "options": [
     "Joy and relief",
     "Anger",
     "Boredom"
    ],
    "answer": 0
   },
   {
    "q": "Who cried with pride?",
    "options": [
     "Her mother",
     "Her father",
     "Her brother"
    ],
    "answer": 0
   },
   {
    "q": "Who is usually grumpy?",
    "options": [
     "Her mother",
     "Her brother",
     "Her father"
    ],
    "answer": 2
   },
   {
    "q": "What did her brother give her?",
    "options": [
     "A hug",
     "A gift",
     "A letter"
    ],
    "answer": 0
   },
   {
    "q": "What did she feel that evening?",
    "options": [
     "A strange sadness",
     "Anger",
     "Pure joy"
    ],
    "answer": 0
   },
   {
    "q": "What did her friend say would soon win?",
    "options": [
     "Curiosity",
     "Fear",
     "Sadness"
    ],
    "answer": 0
   },
   {
    "q": "What did Rita understand?",
    "options": [
     "A big step brings two feelings at the same time",
     "She was wrong",
     "She should not go"
    ],
    "answer": 0
   }
  ]
 },
 "society2": {
  "title": "A town that changed",
  "paragraphs": [
   "When Marta moved to the town, she heard many stereotypes about the neighbourhood. People said that it was dangerous and that the residents were poor and unfriendly. She soon found that this was only prejudice. The town had great ethnic and cultural diversity, and neighbours from many countries shared the same streets. Some families came from rural areas after a long migration, and others came because of work. Marta saw that racism existed, but she also saw a lot of solidarity.",
   "A local activist called Tomás started a campaign to help the homeless. He asked every family to make a small donation, and dozens of volunteers cooked meals at the shelter every evening. A social worker explained that stigma and bullying hurt people badly, especially children and disabled people. The ageing population also needed help, because many old people lived on a small pension and felt lonely. Tomás said that inequality was growing, and that the welfare system alone could not solve it.",
   "The town council listened. It built a new centre for integration with language classes, and it raised awareness of harassment at work. Taxpayers did not complain, because they saw the results. Marta joined the volunteers and she learned that tolerance is a habit, not a gift. A year later she wrote to her friend: \"Education should not be a privilege. When people meet each other, the stereotypes disappear, and a stranger becomes a good neighbour.\""
  ],
  "questions": [
   {
    "q": "What did people say about the neighbourhood?",
    "options": [
     "That it was dangerous",
     "That it was expensive",
     "That it was boring"
    ],
    "answer": 0
   },
   {
    "q": "What did Marta find out?",
    "options": [
     "The town was very rich",
     "The stereotypes were only prejudice",
     "The town was empty"
    ],
    "answer": 1
   },
   {
    "q": "Where did some families come from?",
    "options": [
     "Another planet",
     "Rural areas",
     "The sea"
    ],
    "answer": 1
   },
   {
    "q": "Who started a campaign?",
    "options": [
     "Tomás",
     "Marta",
     "A teacher"
    ],
    "answer": 0
   },
   {
    "q": "Who did the campaign help?",
    "options": [
     "The tourists",
     "The students",
     "The homeless"
    ],
    "answer": 2
   },
   {
    "q": "What did dozens of volunteers do every evening?",
    "options": [
     "Sold tickets",
     "Painted the school",
     "Cooked meals at the shelter"
    ],
    "answer": 2
   },
   {
    "q": "Who explained that bullying hurts people?",
    "options": [
     "A doctor",
     "A lawyer",
     "A social worker"
    ],
    "answer": 2
   },
   {
    "q": "Why did many old people feel lonely?",
    "options": [
     "They lived abroad",
     "They had no phones",
     "They lived on a small pension"
    ],
    "answer": 2
   },
   {
    "q": "What did Tomás say was growing?",
    "options": [
     "The town",
     "Inequality",
     "The population of tourists"
    ],
    "answer": 1
   },
   {
    "q": "What could the welfare system not do alone?",
    "options": [
     "Pay the council",
     "Solve the problem",
     "Build houses"
    ],
    "answer": 1
   },
   {
    "q": "What did the council build?",
    "options": [
     "A new road",
     "A centre for integration",
     "A hospital"
    ],
    "answer": 1
   },
   {
    "q": "What did the council raise awareness of?",
    "options": [
     "Tax",
     "Traffic",
     "Harassment at work"
    ],
    "answer": 2
   },
   {
    "q": "How did taxpayers react?",
    "options": [
     "They did not complain",
     "They protested",
     "They left the town"
    ],
    "answer": 0
   },
   {
    "q": "What did Marta learn?",
    "options": [
     "That tolerance is a habit",
     "That life is simple",
     "That people are selfish"
    ],
    "answer": 0
   },
   {
    "q": "What did a stranger become?",
    "options": [
     "A teacher",
     "A good neighbour",
     "A volunteer"
    ],
    "answer": 1
   }
  ]
 },
 "science2": {
  "title": "The night on the mountain",
  "paragraphs": [
   "Ines is an astronomer and she works at an observatory on a high mountain. Every night she uses a powerful telescope to watch the sky. Last winter she studied a distant galaxy and measured how fast it moved. Her team believed that a small asteroid was in orbit near it, so they collected a lot of data and checked every variable. Ines said that gravity explains most things in space, but not everything. She wanted accurate results, because only reliable information can change a theory.",
   "Her brother Paulo is a biologist. He studies cells, bacteria and the genetic mutation of plants. He says that evolution is slow, but extinction can be fast when the climate changes. In his laboratory, he takes a sample from a lake every week, and he looks for a new antibiotic. \"The most important discoveries,\" he says, \"start with a simple question and a very careful experiment.\"",
   "One evening, the whole family watched the satellite pictures on television. A new spacecraft was travelling to Mars, and it carried a prototype of an engine. The invention of such machines amazed Ines. At the same time, an engineer warned the audience about radiation in space, because astronauts need strong protection. Ines wrote an equation on the board for her niece and explained each particle and molecule in it. The girl smiled and said that she wanted to be a scientist too."
  ],
  "questions": [
   {
    "q": "Where does Ines work?",
    "options": [
     "At an observatory",
     "In a school",
     "In a hospital"
    ],
    "answer": 0
   },
   {
    "q": "What does she use every night?",
    "options": [
     "A microscope",
     "A powerful telescope",
     "A camera"
    ],
    "answer": 1
   },
   {
    "q": "What did she study last winter?",
    "options": [
     "A volcano",
     "A distant galaxy",
     "A lake"
    ],
    "answer": 1
   },
   {
    "q": "What did her team believe was near the galaxy?",
    "options": [
     "A new planet",
     "A spacecraft",
     "A small asteroid"
    ],
    "answer": 2
   },
   {
    "q": "What did they check?",
    "options": [
     "The weather",
     "Every variable",
     "Her phone"
    ],
    "answer": 1
   },
   {
    "q": "What does Ines say gravity does?",
    "options": [
     "It explains most things in space",
     "It explains everything",
     "It explains nothing"
    ],
    "answer": 0
   },
   {
    "q": "Why did she want accurate results?",
    "options": [
     "She was in a hurry",
     "Only reliable information can change a theory",
     "She wanted a prize"
    ],
    "answer": 1
   },
   {
    "q": "What is her brother Paulo?",
    "options": [
     "A biologist",
     "An engineer",
     "A pilot"
    ],
    "answer": 0
   },
   {
    "q": "What can happen fast when the climate changes?",
    "options": [
     "Migration",
     "Extinction",
     "Evolution"
    ],
    "answer": 1
   },
   {
    "q": "What does Paulo take from a lake every week?",
    "options": [
     "A sample",
     "A boat",
     "A fish"
    ],
    "answer": 0
   },
   {
    "q": "What is he looking for?",
    "options": [
     "An old map",
     "A new antibiotic",
     "A new lake"
    ],
    "answer": 1
   },
   {
    "q": "Where was the new spacecraft travelling?",
    "options": [
     "To Mars",
     "To the sun",
     "To the moon"
    ],
    "answer": 0
   },
   {
    "q": "What did the spacecraft carry?",
    "options": [
     "A prototype of an engine",
     "A telescope",
     "A satellite"
    ],
    "answer": 0
   },
   {
    "q": "What did an engineer warn about?",
    "options": [
     "Money",
     "Food",
     "Radiation in space"
    ],
    "answer": 2
   },
   {
    "q": "What did Ines write on the board?",
    "options": [
     "A poem",
     "A name",
     "An equation"
    ],
    "answer": 2
   }
  ]
 },
 "crime2": {
  "title": "The missing painting",
  "paragraphs": [
   "On Monday morning, a detective arrived at the museum. During the night someone had taken a famous painting, and the police suspected a case of forgery and fraud. The director said that the alarm had not rung. The detective found a fingerprint on the window, and soon he also found an old pickpocket who lived near the museum. At first, the man refused to speak, but he had no alibi.",
   "In the following days, the story became bigger. The police discovered a network of smuggling and drug trafficking, and a politician was accused of bribery. A newspaper wrote about corruption in the city, and a witness told the court about a case of blackmail. The prosecutor worked hard and presented the evidence. The defendant's lawyer argued that his client was innocent, and he promised to lodge an appeal if the verdict was bad.",
   "After a long trial, the jury reached a verdict. The defendant was convicted of fraud and received a sentence of three years, and he also had to pay a large fine. Another man, accused of arson and vandalism, was acquitted because there was not enough proof. A third man was released on bail. The painting was found in a warehouse by the sea. \"A mugging or a kidnapping is terrible,\" said the detective, \"but this was a crime against everybody, because art belongs to the whole city.\""
  ],
  "questions": [
   {
    "q": "Who arrived at the museum on Monday?",
    "options": [
     "A lawyer",
     "A detective",
     "A judge"
    ],
    "answer": 1
   },
   {
    "q": "What had someone taken?",
    "options": [
     "A famous painting",
     "A statue",
     "A book"
    ],
    "answer": 0
   },
   {
    "q": "What did the director say about the alarm?",
    "options": [
     "It had not rung",
     "It rang all night",
     "It was broken by the police"
    ],
    "answer": 0
   },
   {
    "q": "What did the detective find on the window?",
    "options": [
     "A key",
     "A fingerprint",
     "A letter"
    ],
    "answer": 1
   },
   {
    "q": "Who lived near the museum?",
    "options": [
     "A minister",
     "A thief of cars",
     "An old pickpocket"
    ],
    "answer": 2
   },
   {
    "q": "What did the pickpocket not have?",
    "options": [
     "An alibi",
     "A lawyer",
     "A job"
    ],
    "answer": 0
   },
   {
    "q": "What did the police discover?",
    "options": [
     "A secret door",
     "A bank",
     "A network of smuggling and drug trafficking"
    ],
    "answer": 2
   },
   {
    "q": "What was a politician accused of?",
    "options": [
     "Murder",
     "Arson",
     "Bribery"
    ],
    "answer": 2
   },
   {
    "q": "What did the lawyer promise to do if the verdict was bad?",
    "options": [
     "Change his job",
     "Go on holiday",
     "Lodge an appeal"
    ],
    "answer": 2
   },
   {
    "q": "Who reached a verdict?",
    "options": [
     "The detective",
     "The director",
     "The jury"
    ],
    "answer": 2
   },
   {
    "q": "What sentence did the defendant receive?",
    "options": [
     "Ten years",
     "One month",
     "Three years"
    ],
    "answer": 2
   },
   {
    "q": "What else did he have to pay?",
    "options": [
     "A new window",
     "The museum",
     "A large fine"
    ],
    "answer": 2
   },
   {
    "q": "Why was another man acquitted?",
    "options": [
     "Not enough proof",
     "He ran away",
     "He was rich"
    ],
    "answer": 0
   },
   {
    "q": "Where was the painting found?",
    "options": [
     "In a church",
     "In a warehouse by the sea",
     "In a house"
    ],
    "answer": 1
   },
   {
    "q": "What did the detective say about art?",
    "options": [
     "It is not important",
     "It belongs to the whole city",
     "It belongs to the rich"
    ],
    "answer": 1
   }
  ]
 },
 "business2": {
  "title": "A family shop",
  "paragraphs": [
   "Rita's family has a small shop in the centre of the city. Her grandfather started it as a merchant, and he sold only to wholesale customers. Today, the shop is a retailer with its own brand, and the turnover has doubled in the last two years. Rita is the manager. She talks to the accountant every month, because she must understand the cash flow, the expenses and the payroll. Last year the shop made a good profit, but the overheads were high, and a shortage of goods in the warehouse made things difficult.",
   "Then a big chain tried a takeover. It offered a loan and a good price, but Rita refused. \"A merger would only make us a small part of a monopoly,\" she said. Instead, she looked for a better supplier and she asked the bank for a mortgage on the building. The government introduced a new tariff on imports, and the shop felt it immediately. Exports of its products to other countries increased, however, and the market share grew.",
   "By the end of the year, the economy was in a recession, and many businesses went into liquidation. Rita's shop survived. She paid every invoice on time, she gave each worker a bonus and she paid the shareholders a small dividend. She even opened a franchise in another town. When people ask for her secret, she answers: \"Respect the customer, watch the inflation rate, and never forget that a bargain only works if everybody wins.\""
  ],
  "questions": [
   {
    "q": "Who started the shop?",
    "options": [
     "Rita's grandfather",
     "Rita's mother",
     "Rita's friend"
    ],
    "answer": 0
   },
   {
    "q": "What did the grandfather sell?",
    "options": [
     "Only cars",
     "Wholesale goods",
     "Houses"
    ],
    "answer": 1
   },
   {
    "q": "What has doubled in two years?",
    "options": [
     "The turnover",
     "The rent",
     "The staff"
    ],
    "answer": 0
   },
   {
    "q": "Who does Rita talk to every month?",
    "options": [
     "The accountant",
     "A lawyer",
     "The mayor"
    ],
    "answer": 0
   },
   {
    "q": "What did a shortage of goods cause?",
    "options": [
     "Difficulties",
     "A party",
     "A merger"
    ],
    "answer": 0
   },
   {
    "q": "What did the big chain try to do?",
    "options": [
     "A sale",
     "A takeover",
     "A robbery"
    ],
    "answer": 1
   },
   {
    "q": "What did Rita do instead of accepting?",
    "options": [
     "Looked for a better supplier",
     "Sold the brand",
     "Closed the shop"
    ],
    "answer": 0
   },
   {
    "q": "What did she ask the bank for?",
    "options": [
     "A mortgage",
     "A prize",
     "A job"
    ],
    "answer": 0
   },
   {
    "q": "What did the government introduce?",
    "options": [
     "A holiday",
     "A tariff on imports",
     "A bank"
    ],
    "answer": 1
   },
   {
    "q": "What increased?",
    "options": [
     "Complaints",
     "Exports",
     "Debts"
    ],
    "answer": 1
   },
   {
    "q": "What happened to many businesses at the end of the year?",
    "options": [
     "They opened branches",
     "They went into liquidation",
     "They moved abroad"
    ],
    "answer": 1
   },
   {
    "q": "What did she give each worker?",
    "options": [
     "A car",
     "A holiday",
     "A bonus"
    ],
    "answer": 2
   },
   {
    "q": "What did she pay shareholders?",
    "options": [
     "A house",
     "Nothing",
     "A small dividend"
    ],
    "answer": 2
   },
   {
    "q": "What did she open in another town?",
    "options": [
     "A school",
     "A franchise",
     "A hospital"
    ],
    "answer": 1
   },
   {
    "q": "What is her secret?",
    "options": [
     "Luck",
     "Cheap prices",
     "Respect the customer"
    ],
    "answer": 2
   }
  ]
 },
 "arts2": {
  "title": "The exhibition",
  "paragraphs": [
   "The exhibition opened on a rainy Saturday in October. The curator, a tall woman with a loud laugh, had chosen the best pieces from many private collections. In the first room there was a large mural by a young sculptor, and in the second there were small sketches and watercolours with a soft palette. A famous painter's abstract canvas hung next to an engraving of the city and a piece of old pottery. At the end of the corridor, people stopped in front of a cartoon that made every visitor smile.",
   "There was also a literary corner. A novelist read a sonnet and a short passage from her new bestseller, a satire with a clever plot and an unusual narrator. A biography of a poet lay on a table, and a student talked about verse and rhyme. A man said that poetry and fiction are not so different from painting.",
   "In the evening, an orchestra and its conductor played in the main hall. A soloist sang an opera aria with a beautiful melody, and then the dancers performed a ballet with modern choreography. The rhythm of the music filled the building. Later, an auction raised money for a children's hospital. The easel of a dead artist was sold for a large sum, and the chorus of the local school sang a final song. \"Every masterpiece,\" said the curator, \"needs somebody to look at it.\""
  ],
  "questions": [
   {
    "q": "When did the exhibition open?",
    "options": [
     "On New Year's Day",
     "On a sunny Monday",
     "On a rainy Saturday"
    ],
    "answer": 2
   },
   {
    "q": "Who chose the pieces?",
    "options": [
     "A student",
     "The mayor",
     "The curator"
    ],
    "answer": 2
   },
   {
    "q": "Who made the large mural?",
    "options": [
     "A famous painter",
     "A child",
     "A young sculptor"
    ],
    "answer": 2
   },
   {
    "q": "What was in the second room?",
    "options": [
     "Cars",
     "Sketches and watercolours",
     "Furniture"
    ],
    "answer": 1
   },
   {
    "q": "What made every visitor smile?",
    "options": [
     "An engraving",
     "A cartoon",
     "A palette"
    ],
    "answer": 1
   },
   {
    "q": "What did a novelist read?",
    "options": [
     "A menu",
     "A newspaper",
     "A sonnet and a passage from her bestseller"
    ],
    "answer": 2
   },
   {
    "q": "What kind of book was her new bestseller?",
    "options": [
     "A satire",
     "A biography",
     "A cookbook"
    ],
    "answer": 0
   },
   {
    "q": "Who talked about verse and rhyme?",
    "options": [
     "A man",
     "A student",
     "The conductor"
    ],
    "answer": 1
   },
   {
    "q": "What did a man say about poetry and fiction?",
    "options": [
     "They are old",
     "They are boring",
     "They are not so different from painting"
    ],
    "answer": 2
   },
   {
    "q": "Who played in the main hall in the evening?",
    "options": [
     "A rock band",
     "An orchestra and its conductor",
     "A choir of children"
    ],
    "answer": 1
   },
   {
    "q": "What did the soloist sing?",
    "options": [
     "A chorus",
     "An opera aria",
     "A nursery rhyme"
    ],
    "answer": 1
   },
   {
    "q": "What did the dancers perform?",
    "options": [
     "A play",
     "A film",
     "A ballet"
    ],
    "answer": 2
   },
   {
    "q": "What did the auction raise money for?",
    "options": [
     "A school",
     "A museum",
     "A children's hospital"
    ],
    "answer": 2
   },
   {
    "q": "What was sold for a large sum?",
    "options": [
     "A watercolour",
     "The easel of a dead artist",
     "A mural"
    ],
    "answer": 1
   },
   {
    "q": "What does every masterpiece need, says the curator?",
    "options": [
     "A lot of money",
     "Somebody to look at it",
     "A frame"
    ],
    "answer": 1
   }
  ]
 },
 "global2": {
  "title": "The summit",
  "paragraphs": [
   "The summit began on a cold Monday in the capital. Diplomats from forty countries arrived, and the ambassador of each nation gave a short speech. The conflict in the region had started with an invasion, and a ceasefire was now three months old. A special envoy said that tension remained high. The military of both sides stayed near the border, and the humanitarian situation was terrible.",
   "Outside the embassy, protesters held signs against the regime and the dictator. Some of them lived in exile and wanted independence for their old colony. Inside, the negotiation was slow. The great powers had formed a bilateral alliance, but a superpower threatened sanctions and an embargo. Another country feared that it would lose its sovereignty, and a minister reminded everyone that the constitution gave the people the right to decide in a referendum.",
   "At home, the opposition criticised the government, and each candidate promised a reform of legislation on terrorism and nuclear arms. A coalition of small parties had a majority in parliament, so it could vote a new law. In the end the leaders agreed that UN peacekeepers would intervene, and that humanitarian aid would enter the region. The summit finished late on Friday. \"Nothing is perfect,\" said one diplomat, \"but a bad agreement is better than a good war.\""
  ],
  "questions": [
   {
    "q": "Where did the summit begin?",
    "options": [
     "In a port",
     "In a village",
     "In the capital"
    ],
    "answer": 2
   },
   {
    "q": "Who arrived from forty countries?",
    "options": [
     "Students",
     "Tourists",
     "Diplomats"
    ],
    "answer": 2
   },
   {
    "q": "What had the conflict started with?",
    "options": [
     "A game",
     "A storm",
     "An invasion"
    ],
    "answer": 2
   },
   {
    "q": "How old was the ceasefire?",
    "options": [
     "One week",
     "Three months",
     "Two years"
    ],
    "answer": 1
   },
   {
    "q": "What stayed near the border?",
    "options": [
     "The refugees",
     "The journalists",
     "The military of both sides"
    ],
    "answer": 2
   },
   {
    "q": "What did protesters hold outside?",
    "options": [
     "Flags of peace",
     "Signs against the regime",
     "Flowers"
    ],
    "answer": 1
   },
   {
    "q": "What did some exiles want?",
    "options": [
     "Independence for their old colony",
     "A job",
     "A new passport"
    ],
    "answer": 0
   },
   {
    "q": "What did a superpower threaten?",
    "options": [
     "Sanctions and an embargo",
     "A trip",
     "A party"
    ],
    "answer": 0
   },
   {
    "q": "What did another country fear losing?",
    "options": [
     "Its money",
     "Its football team",
     "Its sovereignty"
    ],
    "answer": 2
   },
   {
    "q": "What gave people the right to decide?",
    "options": [
     "The ambassador",
     "The army",
     "The constitution"
    ],
    "answer": 2
   },
   {
    "q": "Who criticised the government at home?",
    "options": [
     "The envoy",
     "The dictator",
     "The opposition"
    ],
    "answer": 2
   },
   {
    "q": "What did the coalition have in parliament?",
    "options": [
     "Nothing",
     "Only two seats",
     "A majority"
    ],
    "answer": 2
   },
   {
    "q": "Who would intervene?",
    "options": [
     "UN peacekeepers",
     "Reporters",
     "Students"
    ],
    "answer": 0
   },
   {
    "q": "What would enter the region?",
    "options": [
     "Toys",
     "Tourists",
     "Humanitarian aid"
    ],
    "answer": 2
   },
   {
    "q": "What did the diplomat say about a bad agreement?",
    "options": [
     "It is better than a good war",
     "It is impossible",
     "It is the worst thing"
    ],
    "answer": 0
   }
  ]
 },
 "newsb22": {
  "title": "A day in the newsroom",
  "paragraphs": [
   "The newsroom wakes up early. At six o'clock, the news anchor reads the first bulletin, and the reporters check every source. A young freelance journalist writes an article about a leak in the ministry. Her editor asks her to verify each fact, because a false story, a hoax or any misinformation could destroy the reputation of the newspaper. She makes a phone call to a spokesperson, and she reads the press release twice.",
   "At midday, an exclusive arrives from a whistleblower, and the team decides to investigate. The headline must be clear and objective, not sensational. Clickbait is easy, but readers notice bias very quickly. A photographer sends a picture, and the caption needs a careful correction because a name is wrong. Meanwhile, a colleague works on a documentary, and another prepares a podcast for the evening. The newspaper's byline is a sign of trust.",
   "In the afternoon, a broadcaster calls for an interview. Paparazzi wait outside a hotel for a famous singer, and some people prefer gossip to serious news. The editor sighs and says that sensationalism sells, but it does not last. The government wants to censor one story, but the team refuses. The article appears live on the website at night. \"Journalism,\" says the editor, \"is a long argument with the truth, and nobody wins it in one day.\""
  ],
  "questions": [
   {
    "q": "When does the newsroom wake up?",
    "options": [
     "Late",
     "Early",
     "At midday"
    ],
    "answer": 1
   },
   {
    "q": "Who reads the first bulletin?",
    "options": [
     "The news anchor",
     "The editor",
     "The photographer"
    ],
    "answer": 0
   },
   {
    "q": "What does the freelance journalist write?",
    "options": [
     "An article about a leak",
     "A cookbook",
     "A poem"
    ],
    "answer": 0
   },
   {
    "q": "What does the editor ask her to do?",
    "options": [
     "Write faster",
     "Leave the office",
     "Verify each fact"
    ],
    "answer": 2
   },
   {
    "q": "Who does she call?",
    "options": [
     "A spokesperson",
     "A doctor",
     "A singer"
    ],
    "answer": 0
   },
   {
    "q": "Who sends an exclusive?",
    "options": [
     "A whistleblower",
     "A photographer",
     "A minister"
    ],
    "answer": 0
   },
   {
    "q": "How must the headline be?",
    "options": [
     "Very long",
     "Clear and objective",
     "Sensational"
    ],
    "answer": 1
   },
   {
    "q": "What do readers notice quickly?",
    "options": [
     "Colours",
     "Prices",
     "Bias"
    ],
    "answer": 2
   },
   {
    "q": "What is wrong with the caption?",
    "options": [
     "The picture",
     "The date",
     "A name"
    ],
    "answer": 2
   },
   {
    "q": "What is a colleague working on?",
    "options": [
     "A recipe",
     "A documentary",
     "A cartoon"
    ],
    "answer": 1
   },
   {
    "q": "What is the other colleague preparing?",
    "options": [
     "A concert",
     "A podcast",
     "A trip"
    ],
    "answer": 1
   },
   {
    "q": "What is a byline?",
    "options": [
     "A kind of tax",
     "A sign of trust",
     "A photo"
    ],
    "answer": 1
   },
   {
    "q": "Who waits outside a hotel?",
    "options": [
     "Paparazzi",
     "Police",
     "Teachers"
    ],
    "answer": 0
   },
   {
    "q": "What does the government want to do?",
    "options": [
     "Close the website",
     "Censor one story",
     "Buy the newspaper"
    ],
    "answer": 1
   },
   {
    "q": "When does the article appear live?",
    "options": [
     "At dawn",
     "At night",
     "At lunch"
    ],
    "answer": 1
   }
  ]
 },
 "studyb22": {
  "title": "My first year at university",
  "paragraphs": [
   "Last September I enrolled at the faculty of history. My enrolment was easy, but I felt nervous at the first lecture in the huge lecture hall. The lecturer explained the curriculum, and then she gave us a module with a long bibliography. My tutor told me to revise every week and to proofread every assignment. Some students had a scholarship, and others had to pay high tuition fees. I live in a dormitory on the campus, and campus life is full of surprises.",
   "I made friends with a mature student and a girl who studies law, and we often prepare for the oral exam together. The dean spoke to all the first-year students and warned us about plagiarism: a citation without a reference is a serious problem. One of my peers tried to plagiarise a book and he was expelled. I prefer to write my own research paper, even if it is not perfect. I also joined an extracurricular club that visits museums. Our professor of art went on a sabbatical, but an excellent fellow took his classes.",
   "In June, the examiner gave me a good mark, and the transcript showed a distinction. I also did an internship at a magazine, and I met alumni who told me how they found work after graduation. The literacy rate is high in my country, but a diploma is still a great achievement. I know that a degree is not everything, however it opens many doors. My major is history, and my minor is French. I cannot wait for my graduation, and I will not need a resit."
  ],
  "questions": [
   {
    "q": "Where did the writer enrol?",
    "options": [
     "At the faculty of law",
     "At a language school",
     "At the faculty of history"
    ],
    "answer": 2
   },
   {
    "q": "Where was the first lecture?",
    "options": [
     "In a dormitory",
     "In a garden",
     "In a huge lecture hall"
    ],
    "answer": 2
   },
   {
    "q": "What did the tutor tell the writer to do?",
    "options": [
     "Revise every week",
     "Stop working",
     "Change course"
    ],
    "answer": 0
   },
   {
    "q": "What did some students have?",
    "options": [
     "A house",
     "A scholarship",
     "A boat"
    ],
    "answer": 1
   },
   {
    "q": "Where does the writer live?",
    "options": [
     "In a hotel",
     "In a dormitory on the campus",
     "In a flat in town"
    ],
    "answer": 1
   },
   {
    "q": "Who is the writer's friend that studies law?",
    "options": [
     "A girl",
     "A teacher",
     "A boy"
    ],
    "answer": 0
   },
   {
    "q": "What do they prepare together?",
    "options": [
     "A trip",
     "A party",
     "The oral exam"
    ],
    "answer": 2
   },
   {
    "q": "Who warned the students about plagiarism?",
    "options": [
     "A student",
     "The dean",
     "A tutor"
    ],
    "answer": 1
   },
   {
    "q": "What happened to the student who tried to plagiarise?",
    "options": [
     "He was expelled",
     "He got a prize",
     "He moved"
    ],
    "answer": 0
   },
   {
    "q": "What did the writer join?",
    "options": [
     "A choir",
     "An extracurricular club",
     "A football team"
    ],
    "answer": 1
   },
   {
    "q": "Why did the professor of art leave?",
    "options": [
     "He retired",
     "He was ill",
     "He went on a sabbatical"
    ],
    "answer": 2
   },
   {
    "q": "What did the transcript show?",
    "options": [
     "A fail",
     "A resit",
     "A distinction"
    ],
    "answer": 2
   },
   {
    "q": "What did the writer do at a magazine?",
    "options": [
     "An internship",
     "A holiday",
     "A lecture"
    ],
    "answer": 0
   },
   {
    "q": "Who told the writer how they found work?",
    "options": [
     "Neighbours",
     "Parents",
     "Alumni"
    ],
    "answer": 2
   },
   {
    "q": "What is the writer's minor?",
    "options": [
     "Maths",
     "French",
     "Law"
    ],
    "answer": 1
   }
  ]
 },
 "mind2": {
  "title": "A difficult year",
  "paragraphs": [
   "Daniel was always a stubborn boy with a strong personality. After his father died, he felt grief and loneliness for the first time. He lost his motivation at school and he stopped seeing his friends. Sometimes he felt envy when he saw other families together, and then he felt shame about that feeling. A school counsellor asked him to talk, but Daniel was afraid and embarrassed. He said that he had no ambition left.",
   "Slowly, things changed. The counsellor taught him meditation and some mindfulness exercises, and Daniel practised ten minutes every morning. He learned that a positive mindset is not the same as pure optimism, and that resilience grows with time. When panic came at night, he breathed slowly and said to himself: \"This is only a feeling, and it will pass.\" He also learned to control his frustration and to be honest about his insecure moments.",
   "A year later, he looked at the old photographs with nostalgia and no longer with pain. His curiosity came back, and he started to read about perception and the subconscious. He talked to a younger boy who felt like him, because an introvert can still be a good friend. \"I have no regrets about asking for help,\" Daniel said. \"It gave me back confidence, and it taught me that sadness does not make me weak. It only means that I loved someone.\""
  ],
  "questions": [
   {
    "q": "What kind of boy was Daniel?",
    "options": [
     "Stubborn",
     "Shy",
     "Lazy"
    ],
    "answer": 0
   },
   {
    "q": "What happened to his father?",
    "options": [
     "He moved abroad",
     "He died",
     "He lost his job"
    ],
    "answer": 1
   },
   {
    "q": "What did Daniel stop doing at school?",
    "options": [
     "He joined a club",
     "He changed class",
     "He lost his motivation"
    ],
    "answer": 2
   },
   {
    "q": "What feeling did he have when he saw other families?",
    "options": [
     "Pride",
     "Envy",
     "Joy"
    ],
    "answer": 1
   },
   {
    "q": "Who asked him to talk?",
    "options": [
     "A school counsellor",
     "A teacher of music",
     "His uncle"
    ],
    "answer": 0
   },
   {
    "q": "What did the counsellor teach him?",
    "options": [
     "Football",
     "Meditation and mindfulness",
     "Chess"
    ],
    "answer": 1
   },
   {
    "q": "How long did he practise every morning?",
    "options": [
     "Two minutes",
     "Ten minutes",
     "One hour"
    ],
    "answer": 1
   },
   {
    "q": "What grows with time?",
    "options": [
     "Resilience",
     "Pain",
     "Money"
    ],
    "answer": 0
   },
   {
    "q": "What did Daniel say to himself when panic came?",
    "options": [
     "I am alone",
     "I must run away",
     "It is only a feeling and will pass"
    ],
    "answer": 2
   },
   {
    "q": "What did he learn to control?",
    "options": [
     "His dreams",
     "His height",
     "His frustration"
    ],
    "answer": 2
   },
   {
    "q": "How did he look at old photographs a year later?",
    "options": [
     "With anger",
     "With fear",
     "With nostalgia"
    ],
    "answer": 2
   },
   {
    "q": "What came back to him?",
    "options": [
     "His old school",
     "His curiosity",
     "His father"
    ],
    "answer": 1
   },
   {
    "q": "What did he start to read about?",
    "options": [
     "Cooking",
     "Cars",
     "Perception and the subconscious"
    ],
    "answer": 2
   },
   {
    "q": "Who did he talk to?",
    "options": [
     "A police officer",
     "A doctor",
     "A younger boy"
    ],
    "answer": 2
   },
   {
    "q": "What did asking for help give him?",
    "options": [
     "A new house",
     "Money",
     "Confidence"
    ],
    "answer": 2
   }
  ]
 },
 "medicine2": {
  "title": "A night at the hospital",
  "paragraphs": [
   "At two in the morning, an ambulance brought Mr Silva to the hospital. He had a high fever, a bad cough and a strong pain in his chest. A paramedic explained that he had a heart attack or perhaps a stroke, and a nurse quickly measured his blood pressure and pulse. The doctors took a blood test, an X-ray and a scan. They put him on a stretcher, connected a drip to his arm and sent him to intensive care.",
   "The next day, the doctor told the family that the tests showed an infection and a problem with cholesterol. Mr Silva also had diabetes, and he took a painkiller for the pain. The patient was calm, but his daughter was worried. She asked if he needed a transplant, and the doctor said no. Physiotherapy would help him walk again, because one of his legs was weak after the attack. He would use crutches for a month.",
   "After a week, Mr Silva left the hospital. A nurse gave him an ointment, a bandage and a list of medicine. The doctor warned him about a possible relapse and told him to avoid stress. \"I was lucky,\" said Mr Silva, \"because the ambulance came quickly.\" He thanked the donor who had given blood that night, and he promised his family to take better care of his health and never miss a check-up."
  ],
  "questions": [
   {
    "q": "When did the ambulance bring Mr Silva?",
    "options": [
     "At noon",
     "At six in the evening",
     "At two in the morning"
    ],
    "answer": 2
   },
   {
    "q": "What symptoms did he have?",
    "options": [
     "A headache only",
     "A broken arm",
     "Fever, cough and chest pain"
    ],
    "answer": 2
   },
   {
    "q": "What did a paramedic think he had?",
    "options": [
     "A cold",
     "A heart attack or a stroke",
     "An allergy"
    ],
    "answer": 1
   },
   {
    "q": "Which tests did the doctors take?",
    "options": [
     "Only a scan",
     "A blood test, an X-ray and a scan",
     "A hearing test"
    ],
    "answer": 1
   },
   {
    "q": "Where did they send him?",
    "options": [
     "Home",
     "To a school",
     "To intensive care"
    ],
    "answer": 2
   },
   {
    "q": "What did the tests show?",
    "options": [
     "An infection and a cholesterol problem",
     "A broken leg",
     "Nothing"
    ],
    "answer": 0
   },
   {
    "q": "What other disease did he have?",
    "options": [
     "Asthma",
     "Cancer",
     "Diabetes"
    ],
    "answer": 2
   },
   {
    "q": "What did he take for the pain?",
    "options": [
     "A tea",
     "A vitamin",
     "A painkiller"
    ],
    "answer": 2
   },
   {
    "q": "Did he need a transplant?",
    "options": [
     "Yes, of a heart",
     "Yes, of a kidney",
     "No"
    ],
    "answer": 2
   },
   {
    "q": "What would help him walk again?",
    "options": [
     "Swimming",
     "Sleeping",
     "Physiotherapy"
    ],
    "answer": 2
   },
   {
    "q": "What would he use for a month?",
    "options": [
     "A chair",
     "A car",
     "Crutches"
    ],
    "answer": 2
   },
   {
    "q": "What did the nurse give him?",
    "options": [
     "A phone",
     "An ointment, a bandage and a list of medicine",
     "Flowers"
    ],
    "answer": 1
   },
   {
    "q": "What did the doctor warn him about?",
    "options": [
     "Bad food",
     "A possible relapse",
     "Cold weather"
    ],
    "answer": 1
   },
   {
    "q": "Who did Mr Silva thank?",
    "options": [
     "The neighbours",
     "The donor",
     "The mayor"
    ],
    "answer": 1
   },
   {
    "q": "What did he promise?",
    "options": [
     "To change his job",
     "To move to the country",
     "To take better care of his health"
    ],
    "answer": 2
   }
  ]
 },
 "cityb22": {
  "title": "Moving downtown",
  "paragraphs": [
   "When Elena moved to the city centre, she found a small flat in an old tower block. The landlord asked for a high rent and a one-year lease, but the tenant before her had paid even more. From her window she could see a busy junction, a roundabout and a flyover. The noise was strong, but she loved the bustling life. At night, neon signs and streetlights changed the skyline.",
   "Every morning she took the tram to the high street, passed a fountain and a statue and bought coffee in the main square. On the way, there was a dark alley with a lot of litter, and the council promised to clean it. She learned that the pollution in the centre was high, and that a new bypass and a ring road would reduce the traffic. Pedestrians waited at the zebra crossing, and drivers searched for a parking meter with no luck.",
   "At the harbour, an old factory was part of a big regeneration project. Her neighbours worried about eviction, because every new project made the rent go up. Elena joined a group of tenants who talked to the council, and together they won a better lease. \"The city is not only buildings,\" she said. \"It is the people who live in them.\" At the weekend she took the tram to a quiet suburban area, but on Monday she was glad to return downtown."
  ],
  "questions": [
   {
    "q": "Where did Elena move?",
    "options": [
     "To the sea",
     "To the city centre",
     "To a village"
    ],
    "answer": 1
   },
   {
    "q": "What kind of building did she live in?",
    "options": [
     "A castle",
     "An old tower block",
     "A farm"
    ],
    "answer": 1
   },
   {
    "q": "What did the landlord ask for?",
    "options": [
     "A pet",
     "Nothing",
     "A high rent and a one-year lease"
    ],
    "answer": 2
   },
   {
    "q": "What could she see from the window?",
    "options": [
     "A junction, a roundabout and a flyover",
     "A garden",
     "A lake"
    ],
    "answer": 0
   },
   {
    "q": "What did she love about the area?",
    "options": [
     "The bustling life",
     "The cold",
     "The silence"
    ],
    "answer": 0
   },
   {
    "q": "How did she go to the high street?",
    "options": [
     "On horseback",
     "By tram",
     "By plane"
    ],
    "answer": 1
   },
   {
    "q": "Where did she buy coffee?",
    "options": [
     "In a farm",
     "In the main square",
     "At home"
    ],
    "answer": 1
   },
   {
    "q": "What was in the dark alley?",
    "options": [
     "A fountain",
     "A school",
     "A lot of litter"
    ],
    "answer": 2
   },
   {
    "q": "What would reduce the traffic?",
    "options": [
     "A new bypass and a ring road",
     "More cars",
     "A new school"
    ],
    "answer": 0
   },
   {
    "q": "What was high in the centre?",
    "options": [
     "The temperature",
     "The population of cats",
     "The pollution"
    ],
    "answer": 2
   },
   {
    "q": "What was part of a regeneration project?",
    "options": [
     "A hospital",
     "A park",
     "An old factory"
    ],
    "answer": 2
   },
   {
    "q": "What did the neighbours worry about?",
    "options": [
     "Eviction",
     "Winter",
     "Exams"
    ],
    "answer": 0
   },
   {
    "q": "Who did Elena join?",
    "options": [
     "A football club",
     "A choir",
     "A group of tenants"
    ],
    "answer": 2
   },
   {
    "q": "What did they win?",
    "options": [
     "A holiday",
     "A prize",
     "A better lease"
    ],
    "answer": 2
   },
   {
    "q": "What does Elena say the city is?",
    "options": [
     "A big machine",
     "Only buildings",
     "The people who live in it"
    ],
    "answer": 2
   }
  ]
 },
 "family2": {
  "title": "The wedding",
  "paragraphs": [
   "My cousin's wedding was in August, and the whole family came to the reunion. The bride wore a long white dress, and the groom was very nervous. The newlyweds were surrounded by relatives from three countries. My godfather gave a speech, and my godmother cried. Even the toddler of the family, who had just taken her first steps, walked to the front of the church.",
   "My cousin's story is special. As a child, she was an orphan, and a family decided to adopt her. Her stepmother was strict about discipline, but she also loved her very much. Her stepfather taught her to drive, and her nanny told her old stories. Today, she is a teacher and a friend to everybody. Parenting, she says, is hard work, and it is not easy to spoil a child without causing problems.",
   "After the ceremony, we talked about inheritance and funeral customs, because an old uncle had left the family farm to a young heir. Some relatives were surprised, but the heir promised to keep the farm in the family. In the evening, there was a dance. I babysat the small cousins for an hour, and then I joined the party. My grandmother said that a family is a chain, and each wedding is a new link. I think she is right, and I will remember this day for a long time."
  ],
  "questions": [
   {
    "q": "When was the wedding?",
    "options": [
     "In August",
     "In May",
     "In January"
    ],
    "answer": 0
   },
   {
    "q": "Who came to the reunion?",
    "options": [
     "Nobody",
     "The whole family",
     "Only the bride"
    ],
    "answer": 1
   },
   {
    "q": "What did the bride wear?",
    "options": [
     "A red hat",
     "A long white dress",
     "A blue coat"
    ],
    "answer": 1
   },
   {
    "q": "How was the groom?",
    "options": [
     "Very angry",
     "Very sleepy",
     "Very nervous"
    ],
    "answer": 2
   },
   {
    "q": "Who gave a speech?",
    "options": [
     "The godfather",
     "The nanny",
     "The groom's boss"
    ],
    "answer": 0
   },
   {
    "q": "What did the toddler do?",
    "options": [
     "Walked to the front of the church",
     "Slept",
     "Cried"
    ],
    "answer": 0
   },
   {
    "q": "What was the cousin as a child?",
    "options": [
     "An orphan",
     "A dancer",
     "A teacher"
    ],
    "answer": 0
   },
   {
    "q": "Who decided to adopt her?",
    "options": [
     "The church",
     "A family",
     "The school"
    ],
    "answer": 1
   },
   {
    "q": "What did her stepmother do?",
    "options": [
     "Was strict about discipline",
     "Lived abroad",
     "Taught her to cook"
    ],
    "answer": 0
   },
   {
    "q": "What did her stepfather teach her?",
    "options": [
     "To sing",
     "To swim",
     "To drive"
    ],
    "answer": 2
   },
   {
    "q": "What is hard work, she says?",
    "options": [
     "Dancing",
     "Parenting",
     "Cooking"
    ],
    "answer": 1
   },
   {
    "q": "What did the old uncle leave to a young heir?",
    "options": [
     "The family farm",
     "A car",
     "A boat"
    ],
    "answer": 0
   },
   {
    "q": "What did the heir promise?",
    "options": [
     "To keep the farm in the family",
     "To sell it",
     "To destroy it"
    ],
    "answer": 0
   },
   {
    "q": "What did the narrator do for an hour?",
    "options": [
     "Drove home",
     "Babysat the small cousins",
     "Cooked"
    ],
    "answer": 1
   },
   {
    "q": "What does the grandmother say a family is?",
    "options": [
     "A chain",
     "A tree",
     "A river"
    ],
    "answer": 0
   }
  ]
 },
 "employment2": {
  "title": "Looking for a better job",
  "paragraphs": [
   "Carlos has worked as a trainee in a small firm for two years. He signs a new contract every year, and he has no promotion or pay rise. Last week, his supervisor told him that the company would lay off ten employees, and Carlos felt afraid. The workload is heavy, and he often works overtime. The salary arrives on payday, but the benefits are poor. He began to look at the job market in his free time.",
   "He sent his CV to several employers and wrote a short cover letter. A headhunter called him about a job in logistics, and Carlos was on the shortlist. The applicant before him was overqualified, so the manager chose Carlos. At the interview, the manager asked about his mentor and about his appraisal. Carlos explained that he was a good colleague and that he could telework two days a week. The company offered a full-time contract and flexitime.",
   "He resigned from his old job and told his supervisor honestly. The supervisor said, \"I will miss you, but this is a good decision.\" Carlos checked the new payslip carefully. His new employer is not perfect, and the glass ceiling for some workers is still there, but he feels respected. He tells his friends that employability depends on learning every day. \"A workaholic is not a good worker,\" he says, \"and a good job is one where you can still have a life.\""
  ],
  "questions": [
   {
    "q": "Where has Carlos worked for two years?",
    "options": [
     "In a small firm",
     "In a bank",
     "In a school"
    ],
    "answer": 0
   },
   {
    "q": "What is Carlos's position?",
    "options": [
     "A trainee",
     "A manager",
     "A pilot"
    ],
    "answer": 0
   },
   {
    "q": "What did his supervisor say?",
    "options": [
     "The company would lay off ten employees",
     "Everybody had a pay rise",
     "The firm would close"
    ],
    "answer": 0
   },
   {
    "q": "What does he often do?",
    "options": [
     "Sports",
     "Nothing",
     "Overtime"
    ],
    "answer": 2
   },
   {
    "q": "Who called him about a job?",
    "options": [
     "A journalist",
     "A neighbour",
     "A headhunter"
    ],
    "answer": 2
   },
   {
    "q": "In what field was the job?",
    "options": [
     "Law",
     "Medicine",
     "Logistics"
    ],
    "answer": 2
   },
   {
    "q": "Why did the manager choose Carlos?",
    "options": [
     "The other applicant was overqualified",
     "He was rich",
     "He was the oldest"
    ],
    "answer": 0
   },
   {
    "q": "What did the manager ask about?",
    "options": [
     "His house",
     "His holidays",
     "His mentor and his appraisal"
    ],
    "answer": 2
   },
   {
    "q": "What can he do two days a week?",
    "options": [
     "Travel",
     "Sleep",
     "Telework"
    ],
    "answer": 2
   },
   {
    "q": "What did the company offer?",
    "options": [
     "A car",
     "A house",
     "A full-time contract and flexitime"
    ],
    "answer": 2
   },
   {
    "q": "What did he do at his old job?",
    "options": [
     "Retired",
     "Was sacked",
     "Resigned"
    ],
    "answer": 2
   },
   {
    "q": "What did the old supervisor say?",
    "options": [
     "You must stay",
     "Go away",
     "I will miss you, but it is a good decision"
    ],
    "answer": 2
   },
   {
    "q": "What did Carlos check carefully?",
    "options": [
     "The weather",
     "The map",
     "The new payslip"
    ],
    "answer": 2
   },
   {
    "q": "What does he say employability depends on?",
    "options": [
     "Learning every day",
     "Age",
     "Luck"
    ],
    "answer": 0
   },
   {
    "q": "What is a good job, he says?",
    "options": [
     "One where you can still have a life",
     "One with a high salary only",
     "One far from home"
    ],
    "answer": 0
   }
  ]
 },
 "culture2": {
  "title": "The village festival",
  "paragraphs": [
   "Every year in July, the village celebrates its festival. The carnival parade passes through the main street, and people wear traditional costumes. Pilgrims arrive from nearby towns and walk to the shrine, which has stood there since the Middle Ages. Old women tell myths and legends, and a proverb is repeated on every corner. There is a ritual at the church, and a long ceremony with music and candles.",
   "The festival is also a time for beliefs and superstition. Some people say that it is bad luck to leave the village before the last day. Young people dance a folk dance and sing songs in two languages, because the area is bilingual. An interpreter helps visitors, and a translator is writing a book of local stories. A group of archaeology students explains the Roman ruins and shows some ancient artefacts. A monument in the square remembers the old colonial times.",
   "There is also a dress code for the dinner, and there are a few taboos that visitors should respect. For example, nobody speaks about politics at the table. A nomad who comes every year with his animals brings stories from distant places. A teacher said that indigenous people and tribes also have similar festivals, and that every culture needs its rituals. \"A festival,\" she said, \"is the way a community remembers who it is.\" At night, fireworks fill the sky, and nobody wants to go home."
  ],
  "questions": [
   {
    "q": "When does the village celebrate its festival?",
    "options": [
     "In December",
     "In March",
     "In July"
    ],
    "answer": 2
   },
   {
    "q": "What passes through the main street?",
    "options": [
     "A train",
     "A bus",
     "The carnival parade"
    ],
    "answer": 2
   },
   {
    "q": "Who arrives from nearby towns?",
    "options": [
     "Soldiers",
     "Doctors",
     "Pilgrims"
    ],
    "answer": 2
   },
   {
    "q": "What do old women tell?",
    "options": [
     "News",
     "Jokes about football",
     "Myths and legends"
    ],
    "answer": 2
   },
   {
    "q": "Where is there a ritual?",
    "options": [
     "At the school",
     "At the market",
     "At the church"
    ],
    "answer": 2
   },
   {
    "q": "What do some people say about leaving the village?",
    "options": [
     "It is a good idea",
     "It is bad luck before the last day",
     "It is forbidden by law"
    ],
    "answer": 1
   },
   {
    "q": "Why is an interpreter needed?",
    "options": [
     "Nobody speaks",
     "There is a war",
     "The area is bilingual"
    ],
    "answer": 2
   },
   {
    "q": "What is a translator writing?",
    "options": [
     "A letter",
     "A song",
     "A book of local stories"
    ],
    "answer": 2
   },
   {
    "q": "What do archaeology students explain?",
    "options": [
     "The weather",
     "The Roman ruins",
     "The menu"
    ],
    "answer": 1
   },
   {
    "q": "What does the monument in the square remember?",
    "options": [
     "Old colonial times",
     "A wedding",
     "A football match"
    ],
    "answer": 0
   },
   {
    "q": "What is there for the dinner?",
    "options": [
     "A free bar",
     "A film",
     "A dress code"
    ],
    "answer": 2
   },
   {
    "q": "What does nobody talk about at the table?",
    "options": [
     "Food",
     "Music",
     "Politics"
    ],
    "answer": 2
   },
   {
    "q": "Who comes every year with his animals?",
    "options": [
     "A teacher",
     "A king",
     "A nomad"
    ],
    "answer": 2
   },
   {
    "q": "What does the teacher say every culture needs?",
    "options": [
     "A flag",
     "A king",
     "Its rituals"
    ],
    "answer": 2
   },
   {
    "q": "What fills the sky at night?",
    "options": [
     "Fireworks",
     "Clouds",
     "Birds"
    ],
    "answer": 0
   }
  ]
 },
 "social2": {
  "title": "One week offline",
  "paragraphs": [
   "Rita is a content creator. She writes a blog, makes a weekly vlog and posts a selfie almost every day. Her followers leave a comment under each post, and she tries to reply. The algorithm shows her videos to thousands of people, and the engagement is high. Some posts are sponsored, and she earns money with every subscription. But last month, a hacker used a fake account and sent her a phishing email. She lost her password and part of her privacy.",
   "After that, Rita felt tired of her timeline and the endless thread of messages. She decided to spend one week offline. She deleted the apps, she did not download new files and she did not upload any picture. At first, she missed the emoji, the meme and every direct message. After two days, she felt calmer. She walked in the park, called her mother and read a paper book. She also learned that her echo chamber was not the whole world.",
   "When she returned online, she changed her habits. She chose a strong password, installed a firewall and blocked spam and malware. She decided to unfollow some accounts and to read different opinions instead of staying in a filter bubble. The platform asked her to accept cookies and solve a captcha, and she smiled. \"The internet is a wonderful tool,\" she wrote in her next post, \"but I want to use it, and not let it use me.\""
  ],
  "questions": [
   {
    "q": "What is Rita?",
    "options": [
     "A pilot",
     "A content creator",
     "A nurse"
    ],
    "answer": 1
   },
   {
    "q": "What does she make every week?",
    "options": [
     "A vlog",
     "A film",
     "A cake"
    ],
    "answer": 0
   },
   {
    "q": "What shows her videos to thousands of people?",
    "options": [
     "A bus",
     "The algorithm",
     "A newspaper"
    ],
    "answer": 1
   },
   {
    "q": "How is the engagement?",
    "options": [
     "Zero",
     "Very low",
     "High"
    ],
    "answer": 2
   },
   {
    "q": "What did a hacker send her?",
    "options": [
     "A parcel",
     "A phishing email",
     "A letter"
    ],
    "answer": 1
   },
   {
    "q": "What did she lose?",
    "options": [
     "Her phone",
     "Her job",
     "Her password and part of her privacy"
    ],
    "answer": 2
   },
   {
    "q": "How long did she stay offline?",
    "options": [
     "One week",
     "One year",
     "One hour"
    ],
    "answer": 0
   },
   {
    "q": "What did she delete?",
    "options": [
     "The apps",
     "Her friends",
     "Her house"
    ],
    "answer": 0
   },
   {
    "q": "What did she miss at first?",
    "options": [
     "Her car",
     "The emoji, the meme and every direct message",
     "Her bed"
    ],
    "answer": 1
   },
   {
    "q": "What did she do after two days?",
    "options": [
     "Bought a computer",
     "Walked in the park and called her mother",
     "Went to work"
    ],
    "answer": 1
   },
   {
    "q": "What did she learn about her echo chamber?",
    "options": [
     "It was dangerous only for kids",
     "It was not the whole world",
     "It was perfect"
    ],
    "answer": 1
   },
   {
    "q": "What did she install?",
    "options": [
     "A new bed",
     "A swimming pool",
     "A firewall"
    ],
    "answer": 2
   },
   {
    "q": "What did she decide to do to some accounts?",
    "options": [
     "Buy them",
     "Call them",
     "Unfollow them"
    ],
    "answer": 2
   },
   {
    "q": "What did the platform ask her to solve?",
    "options": [
     "A puzzle with cards",
     "An equation",
     "A captcha"
    ],
    "answer": 2
   },
   {
    "q": "What does she want to do with the internet?",
    "options": [
     "Sell it",
     "Use it, not let it use her",
     "Stop using it"
    ],
    "answer": 1
   }
  ]
 },
 "energy2": {
  "title": "The wind and the coast",
  "paragraphs": [
   "The village of Mar lives from fishing, but today it also lives from wind. Ten years ago, the council decided to stop using diesel and petrol for the village boats and cars. It built a wind farm on the hill, and a small wave power station in the harbour. Renewable energy now supplies most of the electricity. A smart meter in every house shows the consumption, and each family has a thermostat. People say that the power cut of the old days is only a bad memory.",
   "Not everybody agreed. Some old miners worked in a nearby coal mine, and they feared losing their jobs. A man who had worked on an oil rig explained that fossil fuel was a part of his life. After an oil spill on the coast many years ago, however, people understood the damage. The council paid for new courses. Some of the miners learned to repair batteries, chargers and electric circuits, and others now work with hydrogen and fuel cells.",
   "Today, the village has a hybrid bus and a station for the electric car. The landfill is almost empty because people recycle, and conservation is part of every school lesson. A pipeline and a refinery still exist in the region, but nobody in Mar wants more drilling or mining. The mayor says that a sustainable solution needs patience, and that the voltage of an idea can be higher than any machine. \"Our children,\" she says, \"will live on clean energy and a clean coast.\""
  ],
  "questions": [
   {
    "q": "What does the village of Mar live from?",
    "options": [
     "Fishing and wind",
     "Gold",
     "Tourism only"
    ],
    "answer": 0
   },
   {
    "q": "What did the council decide to stop using?",
    "options": [
     "Diesel and petrol",
     "Wood",
     "Water"
    ],
    "answer": 0
   },
   {
    "q": "Where is the wind farm?",
    "options": [
     "At sea",
     "In the village square",
     "On the hill"
    ],
    "answer": 2
   },
   {
    "q": "What is in the harbour?",
    "options": [
     "A small wave power station",
     "A refinery",
     "A big factory"
    ],
    "answer": 0
   },
   {
    "q": "What supplies most of the electricity?",
    "options": [
     "Renewable energy",
     "Gas",
     "Coal"
    ],
    "answer": 0
   },
   {
    "q": "What shows the consumption in every house?",
    "options": [
     "A clock",
     "A letter",
     "A smart meter"
    ],
    "answer": 2
   },
   {
    "q": "Who feared losing their jobs?",
    "options": [
     "Old miners",
     "Fishermen",
     "Doctors"
    ],
    "answer": 0
   },
   {
    "q": "What did the man who worked on an oil rig explain?",
    "options": [
     "Fossil fuel was a part of his life",
     "He loved wind",
     "He hated oil"
    ],
    "answer": 0
   },
   {
    "q": "What happened on the coast many years ago?",
    "options": [
     "A wedding",
     "An oil spill",
     "A storm"
    ],
    "answer": 1
   },
   {
    "q": "What did some miners learn to repair?",
    "options": [
     "Cars of gas",
     "Boats",
     "Batteries, chargers and circuits"
    ],
    "answer": 2
   },
   {
    "q": "What do others now work with?",
    "options": [
     "Sheep",
     "Gold",
     "Hydrogen and fuel cells"
    ],
    "answer": 2
   },
   {
    "q": "What does the village have now?",
    "options": [
     "A tram",
     "A hybrid bus",
     "An airport"
    ],
    "answer": 1
   },
   {
    "q": "Why is the landfill almost empty?",
    "options": [
     "People recycle",
     "Nobody lives there",
     "It is closed"
    ],
    "answer": 0
   },
   {
    "q": "What is part of every school lesson?",
    "options": [
     "Dance",
     "Conservation",
     "Football"
    ],
    "answer": 1
   },
   {
    "q": "What will the children live on, says the mayor?",
    "options": [
     "Clean energy and a clean coast",
     "Big cities",
     "Gas and oil"
    ],
    "answer": 0
   }
  ]
 },
 "academic2": {
  "title": "The thesis",
  "paragraphs": [
   "Helena began her thesis with a simple notion: that students learn better when they hypothesise before they read. The rationale seemed clear, but her supervisor asked for empirical evidence. She wrote a comprehensive plan, explained the underlying causes of the problem and used a rigorous method. She also chose a preliminary study with two groups, because she wanted tentative conclusions before the main experiment.",
   "When the data arrived, there was a discrepancy between the two groups that she did not expect. A substantial difference appeared in one test, but not in the other. Helena tried to infer a pattern, and she decided not to extrapolate from such a small sample. She delineated the limits of her study and juxtaposed her results with earlier papers. Some of them corroborated her view, and others implied the opposite. Her argument became more nuanced and more coherent.",
   "Her supervisor reminded her that every paradigm has its inherent weaknesses. A student must substantiate every claim and must reiterate the main contention in the conclusion. Helena postulated a new model, ostensibly simple, but with deep corollaries for teaching. After a year, she defended her thesis with insight. \"A good researcher,\" she said to the committee, \"is a person who prefers a careful doubt to a quick certainty.\" The committee smiled and gave her the highest mark."
  ],
  "questions": [
   {
    "q": "What was Helena's simple notion?",
    "options": [
     "Students learn better if they hypothesise before reading",
     "Students should read less",
     "Teachers should talk more"
    ],
    "answer": 0
   },
   {
    "q": "What did her supervisor ask for?",
    "options": [
     "A longer title",
     "A prize",
     "Empirical evidence"
    ],
    "answer": 2
   },
   {
    "q": "Why did she choose a preliminary study?",
    "options": [
     "She wanted tentative conclusions first",
     "She disliked the main experiment",
     "She had no time"
    ],
    "answer": 0
   },
   {
    "q": "What did she find in the data?",
    "options": [
     "A discrepancy between the two groups",
     "Perfect results",
     "No data"
    ],
    "answer": 0
   },
   {
    "q": "What did she decide not to do?",
    "options": [
     "Ask for help",
     "Write a thesis",
     "Extrapolate from a small sample"
    ],
    "answer": 2
   },
   {
    "q": "What did she juxtapose her results with?",
    "options": [
     "A film",
     "Earlier papers",
     "A diary"
    ],
    "answer": 1
   },
   {
    "q": "What did some papers do?",
    "options": [
     "Insulted her",
     "Ignored her",
     "Corroborated her view"
    ],
    "answer": 2
   },
   {
    "q": "How did her argument become?",
    "options": [
     "More nuanced and coherent",
     "Angrier",
     "Shorter"
    ],
    "answer": 0
   },
   {
    "q": "What does every paradigm have?",
    "options": [
     "No ideas",
     "Great prizes",
     "Inherent weaknesses"
    ],
    "answer": 2
   },
   {
    "q": "What must a student do with every claim?",
    "options": [
     "Substantiate it",
     "Delete it",
     "Hide it"
    ],
    "answer": 0
   },
   {
    "q": "What did Helena postulate?",
    "options": [
     "A new school",
     "A new law",
     "A new model"
    ],
    "answer": 2
   },
   {
    "q": "What did the model have?",
    "options": [
     "Cost problems",
     "No effect",
     "Deep corollaries for teaching"
    ],
    "answer": 2
   },
   {
    "q": "How did she defend her thesis?",
    "options": [
     "Without notes",
     "With insight",
     "In silence"
    ],
    "answer": 1
   },
   {
    "q": "What kind of researcher prefers a careful doubt?",
    "options": [
     "A good researcher",
     "A fast researcher",
     "A lazy researcher"
    ],
    "answer": 0
   },
   {
    "q": "What did the committee give her?",
    "options": [
     "A warning",
     "Nothing",
     "The highest mark"
    ],
    "answer": 2
   }
  ]
 },
 "argument2": {
  "title": "The great debate",
  "paragraphs": [
   "The school debate was a heated one. The topic was whether homework should be abolished. The first speaker, Mia, presented a compelling case: she said that homework undermines family time and reinforces inequality. Her opponent, Jonas, tried to rebut each point. He called her main idea far-fetched, but the audience found it plausible. A teacher, who was impartial, took notes and watched the clock.",
   "Jonas used rhetoric well. He made a concession and then offered a strong counterargument. Homework, he said, is tenable as a tool, but only if it is short. Mia replied that a fallacy sat in his logic: the usefulness of an idea does not prove that it is necessary. Several students endorsed her view, and others dismissed it at once. The room became vehement. A moot point about exams came up, and the result seemed to hinge on one question.",
   "In the end, the judges ruled out any easy answer. They said that an untenable position can still make you think, and that a rebuttal must back up its claims with facts. Jonas and Mia, once adversaries, shook hands. One student swayed the room with a joke, and everybody laughed. \"A debate,\" said the teacher, \"is not a fight. It is a way to find out why we believe what we believe, and to change our minds if the reason is weak.\""
  ],
  "questions": [
   {
    "q": "What was the topic of the debate?",
    "options": [
     "Whether to close the library",
     "Whether homework should be abolished",
     "Whether to build a school"
    ],
    "answer": 1
   },
   {
    "q": "Who was the first speaker?",
    "options": [
     "Jonas",
     "Mia",
     "The teacher"
    ],
    "answer": 1
   },
   {
    "q": "What did Mia say homework does?",
    "options": [
     "Improves sleep",
     "Undermines family time and reinforces inequality",
     "Costs nothing"
    ],
    "answer": 1
   },
   {
    "q": "What did Jonas try to do?",
    "options": [
     "Support her",
     "Leave the room",
     "Rebut each point"
    ],
    "answer": 2
   },
   {
    "q": "How did the audience find Mia's main idea?",
    "options": [
     "Plausible",
     "Illegal",
     "Boring"
    ],
    "answer": 0
   },
   {
    "q": "What did the impartial teacher do?",
    "options": [
     "Voted",
     "Took notes and watched the clock",
     "Sang"
    ],
    "answer": 1
   },
   {
    "q": "What did Jonas make before his counterargument?",
    "options": [
     "A joke",
     "A phone call",
     "A concession"
    ],
    "answer": 2
   },
   {
    "q": "According to Jonas, when is homework tenable?",
    "options": [
     "Never",
     "If it is short",
     "If it is long"
    ],
    "answer": 1
   },
   {
    "q": "What did Mia say sat in his logic?",
    "options": [
     "A rule",
     "A song",
     "A fallacy"
    ],
    "answer": 2
   },
   {
    "q": "What came up that the result seemed to hinge on?",
    "options": [
     "A birthday",
     "A holiday",
     "A moot point about exams"
    ],
    "answer": 2
   },
   {
    "q": "What did the judges rule out?",
    "options": [
     "Any easy answer",
     "The speakers",
     "The topic"
    ],
    "answer": 0
   },
   {
    "q": "What must a rebuttal do?",
    "options": [
     "Back up its claims with facts",
     "Be short",
     "Be loud"
    ],
    "answer": 0
   },
   {
    "q": "What did Jonas and Mia do at the end?",
    "options": [
     "Left angry",
     "Shook hands",
     "Cried"
    ],
    "answer": 1
   },
   {
    "q": "What swayed the room?",
    "options": [
     "The bell",
     "A phone",
     "A joke from a student"
    ],
    "answer": 2
   },
   {
    "q": "What is a debate according to the teacher?",
    "options": [
     "A game of luck",
     "A way to find out why we believe what we believe",
     "A fight"
    ],
    "answer": 1
   }
  ]
 },
 "finance2": {
  "title": "The bubble",
  "paragraphs": [
   "In 2006, a young investor named Pedro believed that house prices would never fall. His portfolio had equity and bonds, but most of his money was in a speculation on property. Banks lent money with a high leverage, and few asked if clients were creditworthy. Everyone talked about the yield of new houses, and the bubble grew bigger every month.",
   "Then, the crisis began. Some banks became insolvent, because their liquidity was too low. Assets lost value and a house could depreciate by thirty per cent. Companies tried to hedge their risk, but many were unable to do so, and some countries began to default on their debt. The government announced a bailout, and later a stimulus package. An audit showed embezzlement in one firm, and a scandal about a tax haven shocked the public.",
   "Pedro lost his savings, but he learned. He read about stagnation and about the solvency of banks. He understood that a windfall is not a plan, and that a house can also appreciate again after years. During the next fiscal year, the economy slowly recovered. Pedro opened a small business and kept a careful budget. \"Money,\" he says, \"is a tool. When people treat it as magic, the bubble always bursts, and the bill arrives.\""
  ],
  "questions": [
   {
    "q": "What did Pedro believe in 2006?",
    "options": [
     "Prices would fall fast",
     "Banks would close",
     "House prices would never fall"
    ],
    "answer": 2
   },
   {
    "q": "Where was most of his money?",
    "options": [
     "In a bank",
     "In speculation on property",
     "In gold"
    ],
    "answer": 1
   },
   {
    "q": "What did banks lend with?",
    "options": [
     "No money",
     "A lot of care",
     "High leverage"
    ],
    "answer": 2
   },
   {
    "q": "What kept growing every month?",
    "options": [
     "The river",
     "The population",
     "The bubble"
    ],
    "answer": 2
   },
   {
    "q": "Why did some banks become insolvent?",
    "options": [
     "They had no clients",
     "Their liquidity was too low",
     "They were too small"
    ],
    "answer": 1
   },
   {
    "q": "By how much could a house depreciate?",
    "options": [
     "One per cent",
     "Thirty per cent",
     "Ninety per cent"
    ],
    "answer": 1
   },
   {
    "q": "What did companies try to do?",
    "options": [
     "Buy houses",
     "Hedge their risk",
     "Hide their money"
    ],
    "answer": 1
   },
   {
    "q": "What did some countries begin to do?",
    "options": [
     "Lend money",
     "Pay more tax",
     "Default on their debt"
    ],
    "answer": 2
   },
   {
    "q": "What did the government announce?",
    "options": [
     "A new bank",
     "A holiday",
     "A bailout and a stimulus package"
    ],
    "answer": 2
   },
   {
    "q": "What did an audit show?",
    "options": [
     "A new house",
     "Embezzlement in one firm",
     "Perfect accounts"
    ],
    "answer": 1
   },
   {
    "q": "What shocked the public?",
    "options": [
     "A football match",
     "A scandal about a tax haven",
     "A new film"
    ],
    "answer": 1
   },
   {
    "q": "What did Pedro lose?",
    "options": [
     "His family",
     "His house only",
     "His savings"
    ],
    "answer": 2
   },
   {
    "q": "What did he read about?",
    "options": [
     "Stagnation and solvency of banks",
     "Football",
     "Cooking"
    ],
    "answer": 0
   },
   {
    "q": "What did he open?",
    "options": [
     "A small business",
     "A big bank",
     "A school"
    ],
    "answer": 0
   },
   {
    "q": "What does he say about money?",
    "options": [
     "It is evil",
     "It is a tool, not magic",
     "It is free"
    ],
    "answer": 1
   }
  ]
 },
 "law2": {
  "title": "The case of the factory",
  "paragraphs": [
   "The case began when a worker was hurt in a factory. His lawyer said that the company had been guilty of negligence. The litigation lasted three years. First, the court issued a subpoena, and the manager had to appear. He entered a plea of not guilty. The indictment described several faults, and a witness spoke about a loophole in the safety statute. Later, the manager was accused of perjury because of a false statement.",
   "The case set an important precedent. The judge studied jurisprudence from other courts and granted an injunction to stop production until the machines were safe. The company tried arbitration and a settlement, but the worker refused because he wanted a conviction. Meanwhile, the newspaper wrote about the case, and the manager threatened to sue for defamation.",
   "In the end, the court upheld the main charge, although it overturned a second one. The judge noted that every firm must abide by the rules, and that Parliament should repeal an old law. Weeks later, the acquittal of a second manager surprised no one. The worker received a payment and a new job. \"A court,\" he said, \"does not give back what you lost. But it can protect those who come after you.\" His story appeared in a book about copyright, patent and trademark law, because the factory had also lost a long dispute about its brand."
  ],
  "questions": [
   {
    "q": "How did the case begin?",
    "options": [
     "A bank closed",
     "A car was stolen",
     "A worker was hurt in a factory"
    ],
    "answer": 2
   },
   {
    "q": "Of what did the lawyer say the company was guilty?",
    "options": [
     "Negligence",
     "Arson",
     "Fraud"
    ],
    "answer": 0
   },
   {
    "q": "How long did the litigation last?",
    "options": [
     "Three years",
     "Ten years",
     "One week"
    ],
    "answer": 0
   },
   {
    "q": "What did the court issue?",
    "options": [
     "A holiday",
     "A subpoena",
     "A prize"
    ],
    "answer": 1
   },
   {
    "q": "What did the manager enter?",
    "options": [
     "A plea of not guilty",
     "A race",
     "A shop"
    ],
    "answer": 0
   },
   {
    "q": "What did a witness speak about?",
    "options": [
     "A loophole in the safety statute",
     "A fire",
     "A theft"
    ],
    "answer": 0
   },
   {
    "q": "What was the manager accused of later?",
    "options": [
     "Perjury",
     "Smuggling",
     "Murder"
    ],
    "answer": 0
   },
   {
    "q": "What did the case set?",
    "options": [
     "An important precedent",
     "A record",
     "A date"
    ],
    "answer": 0
   },
   {
    "q": "What did the judge grant?",
    "options": [
     "A divorce",
     "An injunction",
     "A medal"
    ],
    "answer": 1
   },
   {
    "q": "Why did the worker refuse the settlement?",
    "options": [
     "He liked the factory",
     "He was rich",
     "He wanted a conviction"
    ],
    "answer": 2
   },
   {
    "q": "What might the manager sue the newspaper for?",
    "options": [
     "Copyright",
     "Fraud",
     "Defamation"
    ],
    "answer": 2
   },
   {
    "q": "What did the court do to the second charge?",
    "options": [
     "Upheld it",
     "Forgot it",
     "Overturned it"
    ],
    "answer": 2
   },
   {
    "q": "What should Parliament do, said the judge?",
    "options": [
     "Build a factory",
     "Close the court",
     "Repeal an old law"
    ],
    "answer": 2
   },
   {
    "q": "What did the worker receive?",
    "options": [
     "A holiday",
     "A prize",
     "A payment and a new job"
    ],
    "answer": 2
   },
   {
    "q": "What did the factory lose?",
    "options": [
     "A long dispute about its brand",
     "Its machines",
     "Its workers"
    ],
    "answer": 0
   }
  ]
 },
 "abstract2": {
  "title": "A strange conundrum",
  "paragraphs": [
   "Maria found herself in a strange predicament. She had to choose between a safe job and an uncertain dream. It was a real conundrum, and she tried to use logic. But the question was subjective, and her intuition told her something different every day. A friend said that fortune is ephemeral and that nobody can predict a path. Maria thought that success was elusive and fame transient.",
   "One evening on a train, she had an epiphany. She saw an old man read a book, and he looked happy in a perpetual way. She understood that the value of a life is intrinsic and not tangible. The things she feared were trivial in comparison. She also saw that the dichotomy between reason and feeling was arbitrary. Pragmatic people can be idealistic, and idealistic people can be pragmatic. Cynicism, she decided, was only a form of fear.",
   "At this juncture she stopped asking what was inevitable and she asked what was fundamental. The answer was profound but simple: she wanted to teach. The oblivion of her old plans did not hurt. She met a professor by serendipity, and he offered her a place. Some feelings are ineffable, she wrote to her sister, but this one was clear. In an age when phones are ubiquitous and intangible assets rule the world, she decided to give her time to real people. She was the quintessential traveller who finally found a home, and she would transcend her doubts."
  ],
  "questions": [
   {
    "q": "What predicament was Maria in?",
    "options": [
     "Losing her keys",
     "Going to jail",
     "Choosing between a safe job and an uncertain dream"
    ],
    "answer": 2
   },
   {
    "q": "What did she call the problem?",
    "options": [
     "A meal",
     "A joke",
     "A conundrum"
    ],
    "answer": 2
   },
   {
    "q": "What did her intuition do?",
    "options": [
     "Told her nothing",
     "Told her something different every day",
     "Never changed"
    ],
    "answer": 1
   },
   {
    "q": "What did her friend say about fortune?",
    "options": [
     "It is ephemeral",
     "It is eternal",
     "It is cheap"
    ],
    "answer": 0
   },
   {
    "q": "Where did she have an epiphany?",
    "options": [
     "On a train",
     "In a shop",
     "At school"
    ],
    "answer": 0
   },
   {
    "q": "Whom did she see?",
    "options": [
     "A dog",
     "A child",
     "An old man reading a book"
    ],
    "answer": 2
   },
   {
    "q": "How did he look?",
    "options": [
     "Happy",
     "Angry",
     "Tired"
    ],
    "answer": 0
   },
   {
    "q": "What is the value of a life, she understood?",
    "options": [
     "Trivial",
     "Tangible",
     "Intrinsic"
    ],
    "answer": 2
   },
   {
    "q": "What was the dichotomy between reason and feeling?",
    "options": [
     "Arbitrary",
     "Painful",
     "Perfect"
    ],
    "answer": 0
   },
   {
    "q": "What was cynicism, she decided?",
    "options": [
     "A form of art",
     "A form of fear",
     "A form of money"
    ],
    "answer": 1
   },
   {
    "q": "What was the answer she found?",
    "options": [
     "She wanted to sing",
     "She wanted to travel",
     "She wanted to teach"
    ],
    "answer": 2
   },
   {
    "q": "How did she meet the professor?",
    "options": [
     "By serendipity",
     "At school",
     "By email"
    ],
    "answer": 0
   },
   {
    "q": "What did he offer her?",
    "options": [
     "A car",
     "A place",
     "A book"
    ],
    "answer": 1
   },
   {
    "q": "What did she decide to give real people?",
    "options": [
     "Her house",
     "Her money",
     "Her time"
    ],
    "answer": 2
   },
   {
    "q": "What did she wish to do with her doubts?",
    "options": [
     "Hide them",
     "Transcend them",
     "Sell them"
    ],
    "answer": 1
   }
  ]
 },
 "discourse2": {
  "title": "A formal letter",
  "paragraphs": [
   "Dear Sir or Madam, I am writing to complain about the service at your hotel. I hereby declare that I will not use your company again, unless the problem is resolved. Whilst I understand that the season was busy, I must say that the staff acted badly. Prior to our arrival, we signed a contract whereby the hotel promised a quiet room. Nevertheless, the room faced a noisy street, and the air conditioning did not work.",
   "In accordance with your policy, I called the front desk. Subsequent to my call, nobody visited the room. The manager said, on the grounds that the hotel was full, that he could not change it. In lieu of a refund, he offered a free breakfast. I find this unacceptable, inasmuch as we paid for a service that we did not receive. Insofar as the law protects customers, I expect a clear answer.",
   "Presumably, you will want to keep your reputation. Several guests, notably a couple from Germany, had the same problem, namely noise and heat. Conversely, the beds were comfortable and the location was excellent, but these facts are not enough. Pursuant to the contract, I ask for a partial refund. Provided that you reply within two weeks, I will not take the matter further. By virtue of my loyalty as a client, I hope for a fair solution. Ultimately, a hotel lives from the trust of its guests. Henceforth, we will choose another hotel, lest the same thing happens again. Yours faithfully, Ana Lopes."
  ],
  "questions": [
   {
    "q": "What is the writer complaining about?",
    "options": [
     "The service at a hotel",
     "A shop",
     "A school"
    ],
    "answer": 0
   },
   {
    "q": "What did the contract promise?",
    "options": [
     "A free car",
     "A pool",
     "A quiet room"
    ],
    "answer": 2
   },
   {
    "q": "What did the room face?",
    "options": [
     "A garden",
     "A noisy street",
     "The sea"
    ],
    "answer": 1
   },
   {
    "q": "What did not work?",
    "options": [
     "The bed",
     "The air conditioning",
     "The door"
    ],
    "answer": 1
   },
   {
    "q": "What did the writer do in accordance with the policy?",
    "options": [
     "Called the front desk",
     "Left the hotel",
     "Wrote to the police"
    ],
    "answer": 0
   },
   {
    "q": "What did nobody do after the call?",
    "options": [
     "Send a bill",
     "Pick up the phone",
     "Visit the room"
    ],
    "answer": 2
   },
   {
    "q": "Why did the manager say he could not change the room?",
    "options": [
     "It was too late",
     "The writer was rude",
     "The hotel was full"
    ],
    "answer": 2
   },
   {
    "q": "What did he offer in lieu of a refund?",
    "options": [
     "A taxi",
     "A free breakfast",
     "A map"
    ],
    "answer": 1
   },
   {
    "q": "Which guests had the same problem?",
    "options": [
     "A group of students",
     "A couple from Germany",
     "A family from Italy"
    ],
    "answer": 1
   },
   {
    "q": "What were the problems?",
    "options": [
     "Food and water",
     "Money and time",
     "Noise and heat"
    ],
    "answer": 2
   },
   {
    "q": "What was good about the hotel?",
    "options": [
     "The beds and the location",
     "The price",
     "The service"
    ],
    "answer": 0
   },
   {
    "q": "What does the writer ask for?",
    "options": [
     "A partial refund",
     "A new room",
     "A free holiday"
    ],
    "answer": 0
   },
   {
    "q": "Within how long should the hotel reply?",
    "options": [
     "Two days",
     "Two years",
     "Two weeks"
    ],
    "answer": 2
   },
   {
    "q": "What does a hotel live from?",
    "options": [
     "Its size",
     "The trust of its guests",
     "Its prices"
    ],
    "answer": 1
   },
   {
    "q": "Who signs the letter?",
    "options": [
     "A lawyer",
     "The manager",
     "Ana Lopes"
    ],
    "answer": 2
   }
  ]
 },
 "power2": {
  "title": "The election",
  "paragraphs": [
   "The incumbent president was confident. He had won a landslide four years earlier, and he believed he had a clear mandate. But a new candidate arrived with a populist speech. Critics called him a demagogue, while supporters said that he was a voice for the grassroots. The regime's newspapers used propaganda, and a dissident who criticised the government was arrested.",
   "The election was close. Swing voters decided the result in several regions, and opponents accused the government of gerrymandering. A lobbyist met ministers in secret, and a law that most people disliked passed with bipartisan support. In parliament, a senator began a filibuster, and a long stalemate followed. The debate was so partisan that the country seemed split in two.",
   "After the vote, the incumbent lost by a small margin. In some countries, an oligarchy or an autocracy would have used force, perhaps with a coup d'état or an assassination. Here, the republic survived. The ousted leader accepted the result and helped the succession of power. A professor said that democracy is a fragile thing, and that even a monarchy must respect the laws. \"The vote,\" she said, \"is not only the right to choose. It is a promise to accept a result you do not like.\" The new president took office on a sunny morning, and the crowd applauded."
  ],
  "questions": [
   {
    "q": "What did the incumbent president win four years earlier?",
    "options": [
     "A landslide",
     "A prize",
     "A game"
    ],
    "answer": 0
   },
   {
    "q": "What kind of speech did the new candidate make?",
    "options": [
     "A populist speech",
     "A quiet speech",
     "A short speech"
    ],
    "answer": 0
   },
   {
    "q": "What did critics call him?",
    "options": [
     "A teacher",
     "A demagogue",
     "A hero"
    ],
    "answer": 1
   },
   {
    "q": "What did the regime's newspapers use?",
    "options": [
     "Poems",
     "Recipes",
     "Propaganda"
    ],
    "answer": 2
   },
   {
    "q": "Who was arrested?",
    "options": [
     "A lobbyist",
     "A dissident",
     "A senator"
    ],
    "answer": 1
   },
   {
    "q": "Who decided the result in several regions?",
    "options": [
     "Swing voters",
     "Tourists",
     "The army"
    ],
    "answer": 0
   },
   {
    "q": "What did opponents accuse the government of?",
    "options": [
     "Smuggling",
     "Gerrymandering",
     "Football"
    ],
    "answer": 1
   },
   {
    "q": "Who met ministers in secret?",
    "options": [
     "A journalist",
     "A student",
     "A lobbyist"
    ],
    "answer": 2
   },
   {
    "q": "What did a senator begin?",
    "options": [
     "A trip",
     "A filibuster",
     "A war"
    ],
    "answer": 1
   },
   {
    "q": "What followed in parliament?",
    "options": [
     "A holiday",
     "A long stalemate",
     "A party"
    ],
    "answer": 1
   },
   {
    "q": "How did the incumbent lose?",
    "options": [
     "He did not lose",
     "By a small margin",
     "By a landslide"
    ],
    "answer": 1
   },
   {
    "q": "What might have happened in some countries?",
    "options": [
     "A wedding",
     "A coup d'état",
     "A football match"
    ],
    "answer": 1
   },
   {
    "q": "What did the ousted leader do?",
    "options": [
     "Accepted the result",
     "Started a war",
     "Fled the country"
    ],
    "answer": 0
   },
   {
    "q": "What did the professor say about democracy?",
    "options": [
     "It is a fragile thing",
     "It is easy",
     "It is boring"
    ],
    "answer": 0
   },
   {
    "q": "When did the new president take office?",
    "options": [
     "On a sunny morning",
     "In winter",
     "At night"
    ],
    "answer": 0
   }
  ]
 },
 "sustain2": {
  "title": "The dry year",
  "paragraphs": [
   "The drought lasted for three years, and the people of the valley feared famine. The river was almost empty, erosion damaged the hills and a heatwave burned the fields. Farm runoff and pesticide had already harmed the soil, and monoculture made things worse. An old farmer, Joaquim, said that the land was tired. \"We took too much,\" he said, \"and gave back too little.\"",
   "A young group decided to act. They planted trees in a project of afforestation and reforestation, and they protected a wetland that helped to control floods. They tried permaculture and began to practise upcycling and a circular economy. They also fought food waste at the local market. A nearby town announced that it wanted to be carbon neutral and to reach net zero by 2040, but a journalist called its plan greenwashing.",
   "Scientists warned about glacier melt, a rising sea level and coral reefs in danger. Endangered animals needed a reserve, and poaching had to stop. Joaquim listened and changed his mind. He learned that stewardship of the land was a duty. Forests sequester carbon, and a healthy soil keeps water. After two years, the rains returned. The river filled, and the young farmers sold their first organic crop. \"A good harvest,\" said Joaquim, \"is a gift. A good land is a promise.\""
  ],
  "questions": [
   {
    "q": "How long did the drought last?",
    "options": [
     "Ten years",
     "Three years",
     "One month"
    ],
    "answer": 1
   },
   {
    "q": "What did the people of the valley fear?",
    "options": [
     "Famine",
     "War",
     "Floods"
    ],
    "answer": 0
   },
   {
    "q": "What damaged the hills?",
    "options": [
     "Erosion",
     "Snow",
     "Tourists"
    ],
    "answer": 0
   },
   {
    "q": "What burned the fields?",
    "options": [
     "A heatwave",
     "A war",
     "A flood"
    ],
    "answer": 0
   },
   {
    "q": "What had harmed the soil?",
    "options": [
     "Rain",
     "Animals",
     "Farm runoff and pesticide"
    ],
    "answer": 2
   },
   {
    "q": "Who said the land was tired?",
    "options": [
     "Joaquim",
     "A doctor",
     "A journalist"
    ],
    "answer": 0
   },
   {
    "q": "What did the young group plant?",
    "options": [
     "Rice",
     "Trees",
     "Flowers only"
    ],
    "answer": 1
   },
   {
    "q": "What did the wetland help to control?",
    "options": [
     "Noise",
     "Floods",
     "Fire"
    ],
    "answer": 1
   },
   {
    "q": "What did the nearby town announce it wanted?",
    "options": [
     "To be carbon neutral",
     "To build a road",
     "To close the river"
    ],
    "answer": 0
   },
   {
    "q": "What did a journalist call its plan?",
    "options": [
     "A joke",
     "Greenwashing",
     "A success"
    ],
    "answer": 1
   },
   {
    "q": "What did scientists warn about?",
    "options": [
     "Stars",
     "Glacier melt and rising sea level",
     "New cars"
    ],
    "answer": 1
   },
   {
    "q": "What needed a reserve?",
    "options": [
     "Endangered animals",
     "Farmers",
     "Children"
    ],
    "answer": 0
   },
   {
    "q": "What did Joaquim learn stewardship was?",
    "options": [
     "A joke",
     "A duty",
     "A job for others"
    ],
    "answer": 1
   },
   {
    "q": "What do forests sequester?",
    "options": [
     "Gold",
     "Water only",
     "Carbon"
    ],
    "answer": 2
   },
   {
    "q": "What did the young farmers sell?",
    "options": [
     "A house",
     "A river",
     "Their first organic crop"
    ],
    "answer": 2
   }
  ]
 },
 "innovation2": {
  "title": "The start-up",
  "paragraphs": [
   "Leo and Sara founded a start-up in a university incubator. Their idea was disruptive: a drone that delivers medicine to remote villages. They used open source software and cutting-edge sensors. The first prototype failed, but a venture capital fund believed in them. The system had to be scalable, and the team included experts in robotics, nanotechnology and biotechnology.",
   "The market reacted with curiosity. Some people compared the idea to self-driving cars or 3D printing, and others feared facial recognition and a data breach. A deepfake video of Leo even circulated online, saying that the company was a fraud. They explained that a chatbot answered customers' questions, and that the data was safe. A supercomputer helped them plan the routes. They also explored the use of blockchain and cryptocurrency for payments, but only in a small test.",
   "After two years, their state-of-the-art system worked in ten countries. A smart home company asked them to develop a similar service. Meanwhile, quantum computers and gene editing opened new fields in the lab next door. \"Innovation,\" said Sara, \"is not a single idea. It is a long series of failures that we survive.\" Leo agreed, and added that ethics must travel with every new machine. The start-up won a prize, and the two founders returned to the incubator to help the next team."
  ],
  "questions": [
   {
    "q": "Where did Leo and Sara found their start-up?",
    "options": [
     "In a university incubator",
     "In a garage",
     "In a bank"
    ],
    "answer": 0
   },
   {
    "q": "What was their idea?",
    "options": [
     "A car",
     "A new phone",
     "A drone that delivers medicine"
    ],
    "answer": 2
   },
   {
    "q": "What kind of software did they use?",
    "options": [
     "Secret",
     "Old",
     "Open source"
    ],
    "answer": 2
   },
   {
    "q": "What believed in them?",
    "options": [
     "A bank",
     "A venture capital fund",
     "A school"
    ],
    "answer": 1
   },
   {
    "q": "What must the system be?",
    "options": [
     "Scalable",
     "Cheap",
     "Small"
    ],
    "answer": 0
   },
   {
    "q": "What was published online about Leo?",
    "options": [
     "A book",
     "A deepfake video",
     "A song"
    ],
    "answer": 1
   },
   {
    "q": "What did the video say?",
    "options": [
     "That Leo had won",
     "That Sara left",
     "That the company was a fraud"
    ],
    "answer": 2
   },
   {
    "q": "What answered customers' questions?",
    "options": [
     "A student",
     "A drone",
     "A chatbot"
    ],
    "answer": 2
   },
   {
    "q": "What helped plan the routes?",
    "options": [
     "A supercomputer",
     "A guess",
     "A map"
    ],
    "answer": 0
   },
   {
    "q": "What did they explore in a small test?",
    "options": [
     "Painting",
     "Blockchain and cryptocurrency",
     "Ice cream"
    ],
    "answer": 1
   },
   {
    "q": "In how many countries did their system work after two years?",
    "options": [
     "Two",
     "One hundred",
     "Ten"
    ],
    "answer": 2
   },
   {
    "q": "Who asked them to develop a similar service?",
    "options": [
     "A bank",
     "A school",
     "A smart home company"
    ],
    "answer": 2
   },
   {
    "q": "What opened new fields next door?",
    "options": [
     "Quantum computers and gene editing",
     "A farm",
     "A shop"
    ],
    "answer": 0
   },
   {
    "q": "What is innovation, says Sara?",
    "options": [
     "A single idea",
     "A long series of failures that we survive",
     "A secret"
    ],
    "answer": 1
   },
   {
    "q": "What did Leo add?",
    "options": [
     "Ethics must travel with every new machine",
     "Drones must fly faster",
     "Prices must fall"
    ],
    "answer": 0
   }
  ]
 },
 "management2": {
  "title": "A new manager",
  "paragraphs": [
   "When Clara became the head of the department, she wanted to avoid the mistake of a boss who tries to micromanage. She read the mission statement and asked each member for a benchmark. The team had a bottleneck in its process, and she decided to streamline it. She asked for good delegation, and she set one KPI for each person.",
   "At the first meeting, she prepared an agenda and asked a colleague to take the minutes. They used brainstorming to find ideas, and networking events to meet clients. Onboarding for new staff took two weeks, with mentoring from an older colleague. Clara worried about staff retention, so she invited workers to upskill. The salary was negotiable for the best.",
   "But not everything was easy. The company needed to restructure, and the board asked for a turnaround in six months. Accountability was now the key word. Clara had a succession plan in case she left, and she talked openly with the corporate office about each step. Some people resisted the change, but after a month the results improved. \"A manager,\" she said, \"is not a person who gives orders. A manager is someone who makes it easier for others to do good work.\" The team agreed, and the board approved a bonus for everybody."
  ],
  "questions": [
   {
    "q": "What did Clara want to avoid?",
    "options": [
     "The team",
     "Her job",
     "The mistake of a boss who micromanages"
    ],
    "answer": 2
   },
   {
    "q": "What did she read?",
    "options": [
     "The mission statement",
     "A novel",
     "A newspaper"
    ],
    "answer": 0
   },
   {
    "q": "What did the team have in its process?",
    "options": [
     "A garden",
     "A bottleneck",
     "A prize"
    ],
    "answer": 1
   },
   {
    "q": "What did she decide to do about it?",
    "options": [
     "Ignore it",
     "Close it",
     "Streamline it"
    ],
    "answer": 2
   },
   {
    "q": "What did she set for each person?",
    "options": [
     "A car",
     "A KPI",
     "A holiday"
    ],
    "answer": 1
   },
   {
    "q": "What did she prepare for the first meeting?",
    "options": [
     "An agenda",
     "A speech",
     "A cake"
    ],
    "answer": 0
   },
   {
    "q": "What did they use to find ideas?",
    "options": [
     "Silence",
     "Brainstorming",
     "Lottery"
    ],
    "answer": 1
   },
   {
    "q": "How long did onboarding take?",
    "options": [
     "Two weeks",
     "Two days",
     "Two years"
    ],
    "answer": 0
   },
   {
    "q": "Why did she invite workers to upskill?",
    "options": [
     "She wanted to close the firm",
     "She was bored",
     "She worried about staff retention"
    ],
    "answer": 2
   },
   {
    "q": "What was negotiable for the best?",
    "options": [
     "The salary",
     "The holiday",
     "The office"
    ],
    "answer": 0
   },
   {
    "q": "What did the company need to do?",
    "options": [
     "Move abroad",
     "Restructure",
     "Close"
    ],
    "answer": 1
   },
   {
    "q": "What did the board ask for?",
    "options": [
     "A turnaround in six months",
     "A new logo",
     "A party"
    ],
    "answer": 0
   },
   {
    "q": "What was the key word now?",
    "options": [
     "Holiday",
     "Accountability",
     "Silence"
    ],
    "answer": 1
   },
   {
    "q": "What does Clara say a manager is?",
    "options": [
     "A person who gives orders",
     "A rich person",
     "Someone who makes it easier for others to work"
    ],
    "answer": 2
   },
   {
    "q": "What did the board approve?",
    "options": [
     "A closure",
     "A bonus for everybody",
     "A new boss"
    ],
    "answer": 1
   }
  ]
 },
 "awl2b": {
  "title": "A scientific report",
  "paragraphs": [
   "The scientific report began with a simple purpose: to monitor and detect changes in the temperature of a lake. The team had to compile a list of observations that exceeded the normal range. The data fluctuated daily, and some measures began to diminish. A new species emerged near the shore, and it seemed to inhibit the growth of other plants.",
   "The researchers were careful. They did not want to distort the results, so they decided to exclude measures taken during a storm. They also had to modify their tools, because the sensors did not work in the cold. The report comprises three parts, and the last one should enhance the understanding of the problem. Albeit incomplete, the study constitutes an important step.",
   "A group of experts will commence a second study in spring. They want to incorporate new data, mediate between two opposing theories and, if possible, neutralise a harmful chemical in the water. The war on the shore displaced some animals, but the park authorities will dispose of the waste. Funding will cease at the end of the year unless the results are published. \"It would be a pity,\" said the director, \"to deviate from our plan when the first results are so promising.\""
  ],
  "questions": [
   {
    "q": "What was the purpose of the report?",
    "options": [
     "To monitor changes in the temperature of a lake",
     "To sell fish",
     "To build a boat"
    ],
    "answer": 0
   },
   {
    "q": "What did the team compile?",
    "options": [
     "A cookbook",
     "A list of observations",
     "A map"
    ],
    "answer": 1
   },
   {
    "q": "What did the data do daily?",
    "options": [
     "Fluctuate",
     "Disappear",
     "Sing"
    ],
    "answer": 0
   },
   {
    "q": "What emerged near the shore?",
    "options": [
     "A new species",
     "A new road",
     "A new house"
    ],
    "answer": 0
   },
   {
    "q": "What did it seem to inhibit?",
    "options": [
     "The growth of other plants",
     "The wind",
     "The rain"
    ],
    "answer": 0
   },
   {
    "q": "What did the researchers exclude?",
    "options": [
     "All the data",
     "Measures taken during a storm",
     "The team"
    ],
    "answer": 1
   },
   {
    "q": "Why did they modify their tools?",
    "options": [
     "They were broken",
     "They were old",
     "The sensors did not work in the cold"
    ],
    "answer": 2
   },
   {
    "q": "How many parts does the report comprise?",
    "options": [
     "Ten",
     "Three",
     "One"
    ],
    "answer": 1
   },
   {
    "q": "What is the study?",
    "options": [
     "An important step, albeit incomplete",
     "A failure",
     "A secret"
    ],
    "answer": 0
   },
   {
    "q": "When will a second study commence?",
    "options": [
     "In spring",
     "In winter",
     "Next night"
    ],
    "answer": 0
   },
   {
    "q": "What do they want to incorporate?",
    "options": [
     "New data",
     "New boats",
     "New roads"
    ],
    "answer": 0
   },
   {
    "q": "What did they want to neutralise?",
    "options": [
     "A harmful chemical in the water",
     "The sun",
     "The wind"
    ],
    "answer": 0
   },
   {
    "q": "What displaced some animals?",
    "options": [
     "The rain",
     "The war on the shore",
     "A storm"
    ],
    "answer": 1
   },
   {
    "q": "When will funding cease?",
    "options": [
     "Never",
     "At the end of the year unless the results are published",
     "Tomorrow"
    ],
    "answer": 1
   },
   {
    "q": "What would be a pity, said the director?",
    "options": [
     "To deviate from the plan",
     "To go home",
     "To eat"
    ],
    "answer": 0
   }
  ]
 },
 "research2": {
  "title": "The survey",
  "paragraphs": [
   "Teresa ran a survey for her final year project. She wanted to know if there was a correlation between sleep and school marks. Her cohort included three hundred students, and she asked each interviewee about their habits. She did fieldwork in four schools and used a double-blind method to avoid bias. She also tried a randomised trial in which half of the students received a placebo drink.",
   "When the findings arrived, she studied the mean, the mode and the range. The variance was small, and the standard deviation was low. A coefficient of 0.7 showed a strong link. She tested the null hypothesis and found a statistically significant difference. However, the data were skewed, and she knew that other factors could confound the results.",
   "In her conclusion, Teresa listed some limitations. The sample was small, and she could not generalise to all the students. She suggested a meta-analysis and a new literature review. A professor praised her case study and an ethnography on school life that she added. \"Numbers,\" she wrote, \"do not speak by themselves. We must ask them the right question, and we must be honest when the answer is weak.\" Her extrapolation to the whole country was left out, a wise decision."
  ],
  "questions": [
   {
    "q": "What did Teresa run for her project?",
    "options": [
     "A race",
     "A shop",
     "A survey"
    ],
    "answer": 2
   },
   {
    "q": "What did she want to know?",
    "options": [
     "If students eat well",
     "If teachers are tired",
     "If there was a correlation between sleep and marks"
    ],
    "answer": 2
   },
   {
    "q": "How many students were in her cohort?",
    "options": [
     "Thirty",
     "Three thousand",
     "Three hundred"
    ],
    "answer": 2
   },
   {
    "q": "What method did she use to avoid bias?",
    "options": [
     "Double-blind",
     "Open",
     "Single"
    ],
    "answer": 0
   },
   {
    "q": "What did half the students receive?",
    "options": [
     "A placebo drink",
     "A book",
     "A prize"
    ],
    "answer": 0
   },
   {
    "q": "What did she study in the findings?",
    "options": [
     "The colours",
     "Only the names",
     "The mean, the mode and the range"
    ],
    "answer": 2
   },
   {
    "q": "How was the variance?",
    "options": [
     "Small",
     "Zero",
     "Huge"
    ],
    "answer": 0
   },
   {
    "q": "What coefficient did she find?",
    "options": [
     "70",
     "7",
     "0.7"
    ],
    "answer": 2
   },
   {
    "q": "What did she test?",
    "options": [
     "The null hypothesis",
     "A new car",
     "A robot"
    ],
    "answer": 0
   },
   {
    "q": "How were the data?",
    "options": [
     "Skewed",
     "Lost",
     "Perfect"
    ],
    "answer": 0
   },
   {
    "q": "What could confound the results?",
    "options": [
     "Nothing",
     "Other factors",
     "The weather only"
    ],
    "answer": 1
   },
   {
    "q": "What did she list in her conclusion?",
    "options": [
     "Some limitations",
     "Prizes",
     "Friends"
    ],
    "answer": 0
   },
   {
    "q": "What did she suggest?",
    "options": [
     "A holiday",
     "A meta-analysis and a new literature review",
     "A new school"
    ],
    "answer": 1
   },
   {
    "q": "Who praised her case study?",
    "options": [
     "A mother",
     "A professor",
     "A student"
    ],
    "answer": 1
   },
   {
    "q": "What did she leave out?",
    "options": [
     "The title",
     "An extrapolation to the whole country",
     "The names"
    ],
    "answer": 1
   }
  ]
 },
 "linguistics2": {
  "title": "Words and meanings",
  "paragraphs": [
   "My uncle is a linguist, and every family dinner turns into a lesson. This week he explained that each region has a dialect, and each person has an idiolect. He said that in formal letters we should use a serious register, but with friends we use colloquial words. Legal jargon, he added, is hard for ordinary people. He gave an example of a euphemism: \"passed away\" instead of \"died\".",
   "Then he talked about meaning. A word has a denotation, which is its dictionary meaning, and a connotation, which is the feeling it carries. A homonym looks like another word, but its meaning is different. A synonym is a similar word, and an antonym is its opposite. He spoke about the prefix \"un-\" and the suffix \"-ness\", and he said that morphology studies how words are built. Phonetics, he explained, studies the sounds, and intonation shows whether we ask a question.",
   "After dinner, he told us that the lexicon grows all the time because people coin new words. A neologism like \"selfie\" becomes normal in a few years, while an archaic word disappears. An acronym such as NASA is easier to remember than a long name. Semantics and pragmatics, he said, study meaning and use. \"To paraphrase a text,\" he said, \"you must understand it. And that is the beginning of grammar, and also of wisdom.\" His verbosity made us smile."
  ],
  "questions": [
   {
    "q": "What is the narrator's uncle?",
    "options": [
     "A farmer",
     "A linguist",
     "A doctor"
    ],
    "answer": 1
   },
   {
    "q": "What does each person have?",
    "options": [
     "A phone",
     "An idiolect",
     "A passport"
    ],
    "answer": 1
   },
   {
    "q": "What register is used in formal letters?",
    "options": [
     "A funny register",
     "A serious register",
     "A colloquial register"
    ],
    "answer": 1
   },
   {
    "q": "What is hard for ordinary people?",
    "options": [
     "Cooking",
     "Football",
     "Legal jargon"
    ],
    "answer": 2
   },
   {
    "q": "What is an example of a euphemism?",
    "options": [
     "Died",
     "Passed away",
     "Ran"
    ],
    "answer": 1
   },
   {
    "q": "What is a denotation?",
    "options": [
     "The feeling a word carries",
     "A kind of song",
     "The dictionary meaning"
    ],
    "answer": 2
   },
   {
    "q": "What is a connotation?",
    "options": [
     "A kind of letter",
     "The feeling a word carries",
     "The dictionary meaning"
    ],
    "answer": 1
   },
   {
    "q": "What is an antonym?",
    "options": [
     "A similar word",
     "An opposite word",
     "A sound"
    ],
    "answer": 1
   },
   {
    "q": "What does morphology study?",
    "options": [
     "How words are built",
     "Sounds",
     "Meaning in context"
    ],
    "answer": 0
   },
   {
    "q": "What does phonetics study?",
    "options": [
     "Songs",
     "Sounds",
     "Words"
    ],
    "answer": 1
   },
   {
    "q": "What does intonation show?",
    "options": [
     "The weather",
     "Whether we ask a question",
     "The time"
    ],
    "answer": 1
   },
   {
    "q": "Why does the lexicon grow?",
    "options": [
     "Dictionaries are large",
     "Words die",
     "People coin new words"
    ],
    "answer": 2
   },
   {
    "q": "What is an example of a neologism?",
    "options": [
     "Selfie",
     "Table",
     "House"
    ],
    "answer": 0
   },
   {
    "q": "What is an acronym?",
    "options": [
     "NASA",
     "Table",
     "Hello"
    ],
    "answer": 0
   },
   {
    "q": "What does the uncle say begins grammar and wisdom?",
    "options": [
     "To read slowly",
     "To speak fast",
     "To paraphrase a text, you must understand it"
    ],
    "answer": 2
   }
  ]
 },
 "ethics2": {
  "title": "A voice for others",
  "paragraphs": [
   "Amara arrived as an asylum seeker, fleeing persecution in her country. She spent months in a refugee camp before reaching Europe. Her case showed her how much dignity, impartiality and humanity matter. Today she works for an NGO that fights xenophobia, sexism, ageism and homophobia. The organisation also helps to raise funds, and a philanthropy fund pays for classes.",
   "She often explains that a utilitarian view seeks the greatest good, while deontology speaks of duty. Altruism, she says, is the daily work of people who help strangers. She also explains the disparity between rich and poor, and how segregation has left deep wounds. Some countries pay reparations, but redress is slow. In her opinion, meritocracy is a beautiful idea that does not exist where opportunity is unequal. Affirmative action can correct a part of that injustice.",
   "Her organisation also submits a grievance to the authorities when a person is treated unfairly. The staff helps with famine relief and teaches that humanitarianism is a practice, not a speech. Amara tells her story in schools. \"I do not want pity,\" she says. \"I want people to see that every person has a story, and that justice begins when we listen.\" Many students write to her afterwards, and some ask to volunteer. She answers every letter by hand, because for her it is a small way to say thank you."
  ],
  "questions": [
   {
    "q": "Why did Amara leave her country?",
    "options": [
     "She wanted a holiday",
     "She fled persecution",
     "She lost her job"
    ],
    "answer": 1
   },
   {
    "q": "Where did she spend months?",
    "options": [
     "In a school",
     "In a refugee camp",
     "In a hotel"
    ],
    "answer": 1
   },
   {
    "q": "What does her NGO fight?",
    "options": [
     "Hunger only",
     "Traffic",
     "Xenophobia, sexism, ageism and homophobia"
    ],
    "answer": 2
   },
   {
    "q": "What pays for classes?",
    "options": [
     "The police",
     "The church",
     "A philanthropy fund"
    ],
    "answer": 2
   },
   {
    "q": "What does a utilitarian view seek?",
    "options": [
     "Duty",
     "The greatest good",
     "Money"
    ],
    "answer": 1
   },
   {
    "q": "What does deontology speak of?",
    "options": [
     "Duty",
     "Wealth",
     "Pleasure"
    ],
    "answer": 0
   },
   {
    "q": "What is altruism, she says?",
    "options": [
     "A rare virtue",
     "Money",
     "The daily work of people who help strangers"
    ],
    "answer": 2
   },
   {
    "q": "What has segregation left?",
    "options": [
     "Great houses",
     "Deep wounds",
     "Good schools"
    ],
    "answer": 1
   },
   {
    "q": "Why do some countries pay reparations?",
    "options": [
     "To redress injustice",
     "To gain votes",
     "To build roads"
    ],
    "answer": 0
   },
   {
    "q": "What does meritocracy not do where opportunity is unequal?",
    "options": [
     "Exist",
     "Pay",
     "Win"
    ],
    "answer": 0
   },
   {
    "q": "What can correct a part of that injustice?",
    "options": [
     "Wars",
     "Affirmative action",
     "Taxes"
    ],
    "answer": 1
   },
   {
    "q": "What does the organisation submit?",
    "options": [
     "A grievance",
     "A menu",
     "A song"
    ],
    "answer": 0
   },
   {
    "q": "What does Amara say humanitarianism is?",
    "options": [
     "A job",
     "A practice, not a speech",
     "A joke"
    ],
    "answer": 1
   },
   {
    "q": "Where does she tell her story?",
    "options": [
     "On TV only",
     "In schools",
     "In banks"
    ],
    "answer": 1
   },
   {
    "q": "What does she answer by hand?",
    "options": [
     "Phone calls",
     "Emails",
     "Every letter"
    ],
    "answer": 2
   }
  ]
 },
 "trade2": {
  "title": "The port",
  "paragraphs": [
   "The port of Sines receives ships from all over the world. A container ship docked this morning, and its cargo included raw materials and cars. Customs officers checked the freight, because smugglers sometimes hide counterfeit goods. Not far from the quay, some old traders still barter fish for vegetables, and a few sell on the black market.",
   "The port is also the symbol of globalisation. The country is an exporter of wine, cork and shoes, and an importer of oil. When the government sets a quota or a levy, the effects are felt quickly. A devaluation of the currency makes imports more expensive, and the balance of payments changes. Deregulation helped some firms, but offshoring also cost local jobs. A manufacturer closed a factory, and workers asked for help.",
   "The single market has removed many barriers, and a trade union of states offers free movement of goods. Even so, the tonnage handled in the port depends on the world economy. The director explained that the key is diversity: different partners, different products and a flexible plan. \"A port,\" she said, \"is a door. We must keep it open, but we must also know who enters.\" In the evening, the cranes were still working, and the lights of the ships shone on the water."
  ],
  "questions": [
   {
    "q": "Which port is described?",
    "options": [
     "Lisbon",
     "Porto",
     "Sines"
    ],
    "answer": 2
   },
   {
    "q": "What docked this morning?",
    "options": [
     "A container ship",
     "A plane",
     "A train"
    ],
    "answer": 0
   },
   {
    "q": "Who checked the freight?",
    "options": [
     "Customs officers",
     "Teachers",
     "Doctors"
    ],
    "answer": 0
   },
   {
    "q": "What do smugglers hide?",
    "options": [
     "Bread",
     "Counterfeit goods",
     "Fish"
    ],
    "answer": 1
   },
   {
    "q": "What do some old traders barter?",
    "options": [
     "Gold for books",
     "Fish for vegetables",
     "Cars for houses"
    ],
    "answer": 1
   },
   {
    "q": "What is the country an exporter of?",
    "options": [
     "Oil",
     "Cars only",
     "Wine, cork and shoes"
    ],
    "answer": 2
   },
   {
    "q": "What does it import?",
    "options": [
     "Shoes",
     "Wine",
     "Oil"
    ],
    "answer": 2
   },
   {
    "q": "What makes imports more expensive?",
    "options": [
     "A new road",
     "A devaluation of the currency",
     "A quota on fish"
    ],
    "answer": 1
   },
   {
    "q": "What did offshoring cost?",
    "options": [
     "A war",
     "Local jobs",
     "A bridge"
    ],
    "answer": 1
   },
   {
    "q": "What did a manufacturer do?",
    "options": [
     "Moved house",
     "Opened a school",
     "Closed a factory"
    ],
    "answer": 2
   },
   {
    "q": "What has the single market removed?",
    "options": [
     "Customs",
     "Many barriers",
     "All ships"
    ],
    "answer": 1
   },
   {
    "q": "What does the tonnage depend on?",
    "options": [
     "The size of the quay",
     "The weather",
     "The world economy"
    ],
    "answer": 2
   },
   {
    "q": "What is the key, says the director?",
    "options": [
     "Speed",
     "Silence",
     "Diversity"
    ],
    "answer": 2
   },
   {
    "q": "What is a port, she says?",
    "options": [
     "A door",
     "A shop",
     "A wall"
    ],
    "answer": 0
   },
   {
    "q": "What were still working in the evening?",
    "options": [
     "The cranes",
     "The trains",
     "The planes"
    ],
    "answer": 0
   }
  ]
 },
 "idioms2": {
  "title": "A bad day at the office",
  "paragraphs": [
   "Marco woke up late, and the day was a storm in a teacup from the start. His boss called him out of the blue and asked for the report. \"Let's cut to the chase,\" she said. \"Is it ready?\" Marco had burned the midnight oil the night before, but the file was missing. He escaped from the meeting by the skin of his teeth, with a quick excuse.",
   "At lunch, his colleague Sofia said that she was over the moon about her promotion. Marco tried to keep his chin up, but he felt in hot water. A client had hit the roof when the delivery arrived late, and the situation was starting to get out of hand. Someone had even tried to jump on the bandwagon and criticise the whole team. Marco decided not to rock the boat. He preferred to sit on the fence and wait.",
   "Late in the afternoon, the plan fell apart, and they were back to square one. \"Take what the client says with a pinch of salt,\" Sofia advised, \"and read between the lines.\" She told him they should play it by ear, and she offered to pull strings with a friend in the logistics team. The name of the friend was on the tip of her tongue. After a walk in the park to let off steam, Marco returned to the office. He did not throw in the towel. He would face the music the next morning, he decided, with a clear head and a new idea."
  ],
  "questions": [
   {
    "q": "Who called Marco out of the blue?",
    "options": [
     "His mother",
     "His boss",
     "A client"
    ],
    "answer": 1
   },
   {
    "q": "What did the boss want to know?",
    "options": [
     "If the report was ready",
     "If he was hungry",
     "If he was ill"
    ],
    "answer": 0
   },
   {
    "q": "What had Marco done the night before?",
    "options": [
     "Gone dancing",
     "Burned the midnight oil",
     "Slept early"
    ],
    "answer": 1
   },
   {
    "q": "How did Marco escape the meeting?",
    "options": [
     "With a quick excuse",
     "By shouting",
     "By running"
    ],
    "answer": 0
   },
   {
    "q": "Why was Sofia over the moon?",
    "options": [
     "She got a promotion",
     "She won the lottery",
     "She bought a car"
    ],
    "answer": 0
   },
   {
    "q": "Who hit the roof?",
    "options": [
     "Marco",
     "A client",
     "The boss"
    ],
    "answer": 1
   },
   {
    "q": "Why did the client hit the roof?",
    "options": [
     "The price was high",
     "The report was long",
     "The delivery arrived late"
    ],
    "answer": 2
   },
   {
    "q": "What did Marco prefer to do?",
    "options": [
     "Argue",
     "Sit on the fence and wait",
     "Leave"
    ],
    "answer": 1
   },
   {
    "q": "What happened to the plan?",
    "options": [
     "It worked",
     "It fell apart",
     "It was changed by the boss"
    ],
    "answer": 1
   },
   {
    "q": "Where were they after the plan failed?",
    "options": [
     "At the top",
     "In Paris",
     "Back to square one"
    ],
    "answer": 2
   },
   {
    "q": "What advice did Sofia give about the client?",
    "options": [
     "Believe all he says",
     "Ignore him",
     "Take what he says with a pinch of salt"
    ],
    "answer": 2
   },
   {
    "q": "What did she offer to do?",
    "options": [
     "Write the report",
     "Pull strings with a friend in logistics",
     "Pay the client"
    ],
    "answer": 1
   },
   {
    "q": "Where did Marco go to let off steam?",
    "options": [
     "To a park",
     "To a bar",
     "To a gym"
    ],
    "answer": 0
   },
   {
    "q": "Did Marco throw in the towel?",
    "options": [
     "No",
     "He left his job",
     "Yes"
    ],
    "answer": 0
   },
   {
    "q": "How did he plan to face the music?",
    "options": [
     "By hiding",
     "By lying",
     "With a clear head and a new idea"
    ],
    "answer": 2
   }
  ]
 },
 "phrasal2": {
  "title": "Learning to study",
  "paragraphs": [
   "Eva needed to brush up on her French before the exam, so she decided to buckle down. She jotted down a plan on a piece of paper, and she mulled over each step. In the library she leafed through several books, but she could not pin down the best method. Her friends chipped in to buy a good dictionary, which made her happy.",
   "Her teacher advised her to flesh out her notes and to iron out the details. \"Don't gloss over difficult grammar,\" she said, \"and never shy away from questions.\" The school wanted to clamp down on cheating, so the exam would weed out weak students, and a new rule would phase out the old system. Eva tried not to dwell on her fears. She fended off her nerves with long walks.",
   "One day, the group project fell through, because two students dropped the course. Eva hammered out a new plan with the others and smoothed over the quarrel. They decided to scale back the project and to rein in their ambition. Her problem, she understood, stemmed from the lack of a routine, not from the language. By the end of the month she was ready to wrap up her studies. \"Success,\" she told her mother, \"is simply a habit of small and steady efforts.\""
  ],
  "questions": [
   {
    "q": "What did Eva need to brush up on?",
    "options": [
     "Her singing",
     "Her French",
     "Her maths"
    ],
    "answer": 1
   },
   {
    "q": "Where did she jot down a plan?",
    "options": [
     "On her phone",
     "On a wall",
     "On a piece of paper"
    ],
    "answer": 2
   },
   {
    "q": "What did her friends do?",
    "options": [
     "Left her",
     "Chipped in to buy a dictionary",
     "Did her homework"
    ],
    "answer": 1
   },
   {
    "q": "What did the teacher advise her to flesh out?",
    "options": [
     "Her room",
     "Her notes",
     "Her bag"
    ],
    "answer": 1
   },
   {
    "q": "What should she not gloss over?",
    "options": [
     "Difficult grammar",
     "Lunch",
     "Her friends"
    ],
    "answer": 0
   },
   {
    "q": "What did the school want to clamp down on?",
    "options": [
     "Noise",
     "Late arrivals",
     "Cheating"
    ],
    "answer": 2
   },
   {
    "q": "What would the exam weed out?",
    "options": [
     "Weak students",
     "Teachers",
     "Strong students"
    ],
    "answer": 0
   },
   {
    "q": "What did she try not to dwell on?",
    "options": [
     "Her friends",
     "Her fears",
     "Her notes"
    ],
    "answer": 1
   },
   {
    "q": "What did she fend off with long walks?",
    "options": [
     "Her nerves",
     "The cold",
     "The rain"
    ],
    "answer": 0
   },
   {
    "q": "Why did the group project fall through?",
    "options": [
     "The teacher left",
     "It rained",
     "Two students dropped the course"
    ],
    "answer": 2
   },
   {
    "q": "What did Eva hammer out with the others?",
    "options": [
     "A song",
     "A table",
     "A new plan"
    ],
    "answer": 2
   },
   {
    "q": "What did they decide to scale back?",
    "options": [
     "Their holidays",
     "Their friends",
     "The project"
    ],
    "answer": 2
   },
   {
    "q": "What did they rein in?",
    "options": [
     "The school",
     "Their ambition",
     "The dog"
    ],
    "answer": 1
   },
   {
    "q": "What did her problem stem from?",
    "options": [
     "The language",
     "The lack of a routine",
     "The teacher"
    ],
    "answer": 1
   },
   {
    "q": "What is success, Eva tells her mother?",
    "options": [
     "A habit of small and steady efforts",
     "A matter of luck",
     "Hard to explain"
    ],
    "answer": 0
   }
  ]
 },
 "speech2": {
  "title": "The quiet restaurant",
  "paragraphs": [
   "In the quiet restaurant, an old man read a menu and mused about his past. A young couple argued at the next table. The woman blurted out a secret, and the man retorted with a sneer. \"Don't snap at me!\" she said. He glared at her, and then he squinted at the bill. A waiter, who wanted to peek at the problem, pretended to clean the glasses.",
   "At another table, a student rambled about his exams. He ranted about the teachers and lamented the lack of time. His friend chuckled and skimmed a magazine. A little girl babbled happily to her toy. A man who stuttered tried to order a coffee, and the waiter listened patiently. A few people gaped at a tall woman in a long red coat, but she did not mind.",
   "The old man reflected on the scene. He could not fathom why people spoke so loudly, but he did surmise that everybody was lonely. He suspected that the waiter was tired and presumed that the couple would soon reconcile. When he left, he did not brood over his own past. He took his hat and smiled. \"A restaurant,\" he thought, \"is a small theatre, and I am glad to have a ticket.\" Outside, the street was empty, and the lights shone on the pavement as the old man walked home slowly."
  ],
  "questions": [
   {
    "q": "Who read a menu?",
    "options": [
     "A child",
     "An old man",
     "A waiter"
    ],
    "answer": 1
   },
   {
    "q": "Who argued at the next table?",
    "options": [
     "Two women",
     "A young couple",
     "Three men"
    ],
    "answer": 1
   },
   {
    "q": "Who blurted out a secret?",
    "options": [
     "The man",
     "The woman",
     "The waiter"
    ],
    "answer": 1
   },
   {
    "q": "What did the man do when she spoke?",
    "options": [
     "Retorted with a sneer",
     "Left",
     "Cried"
    ],
    "answer": 0
   },
   {
    "q": "Who pretended to clean the glasses?",
    "options": [
     "A waiter",
     "The old man",
     "The woman"
    ],
    "answer": 0
   },
   {
    "q": "What did the student do about his exams?",
    "options": [
     "Slept",
     "Rambled and ranted",
     "Sang"
    ],
    "answer": 1
   },
   {
    "q": "What did his friend do?",
    "options": [
     "Cried",
     "Chuckled and skimmed a magazine",
     "Went home"
    ],
    "answer": 1
   },
   {
    "q": "Who babbled happily?",
    "options": [
     "The waiter",
     "A baby",
     "A little girl"
    ],
    "answer": 2
   },
   {
    "q": "Who stuttered?",
    "options": [
     "The waiter",
     "A man who tried to order coffee",
     "The student"
    ],
    "answer": 1
   },
   {
    "q": "Who did a few people gape at?",
    "options": [
     "A tall woman in a red coat",
     "A boy",
     "The waiter"
    ],
    "answer": 0
   },
   {
    "q": "What could the old man not fathom?",
    "options": [
     "Why people spoke so loudly",
     "Why he was old",
     "Why it rained"
    ],
    "answer": 0
   },
   {
    "q": "What did he surmise?",
    "options": [
     "That the food was bad",
     "That it was late",
     "That everybody was lonely"
    ],
    "answer": 2
   },
   {
    "q": "What did he presume about the couple?",
    "options": [
     "They would soon reconcile",
     "They would marry",
     "They would leave"
    ],
    "answer": 0
   },
   {
    "q": "What did he think a restaurant was?",
    "options": [
     "A small theatre",
     "A school",
     "A shop"
    ],
    "answer": 0
   },
   {
    "q": "How did he walk home?",
    "options": [
     "By taxi",
     "Running",
     "Slowly"
    ],
    "answer": 2
   }
  ]
 },
 "literary2": {
  "title": "The abandoned house",
  "paragraphs": [
   "The house stood on a desolate hill, and its sombre windows looked toward a lush, green valley. An ethereal light filled the garden at dawn, and a luminous moon rose at night. In the past it had been an opulent place, with a languid garden and a fountain. Now the owner, a frail and gaunt man, lived a nearly austere life.",
   "Visitors found the place eerie. One said that a grotesque statue stood at the door and that the corridors were macabre. A pensive girl, who loved old books, walked in with her grandmother. They found a forlorn dog and a sullen cat. A haughty neighbour told them that the tragedy of the family had been turbulent. The old man, however, was a jovial host, and he offered tea in a tranquil room.",
   "He told them a whimsical story about his childhood and a solemn promise to his father. The girl listened. The barren fields outside seemed less sad now. The old man said that the sublime is often next to the ugly, and that beauty lives in the tiniest things. When they left, the sun had set. The girl looked back and saw the light in one window. \"It is not an abandoned house,\" she whispered. \"It is a house that waits.\" Her grandmother nodded and held her hand tightly on the way down the hill."
  ],
  "questions": [
   {
    "q": "Where did the house stand?",
    "options": [
     "By the sea",
     "In a city",
     "On a desolate hill"
    ],
    "answer": 2
   },
   {
    "q": "What did the windows look toward?",
    "options": [
     "A big city",
     "A road",
     "A lush, green valley"
    ],
    "answer": 2
   },
   {
    "q": "What filled the garden at dawn?",
    "options": [
     "Rain",
     "An ethereal light",
     "Smoke"
    ],
    "answer": 1
   },
   {
    "q": "What had the house been in the past?",
    "options": [
     "A shop",
     "An opulent place",
     "A school"
    ],
    "answer": 1
   },
   {
    "q": "How was the owner?",
    "options": [
     "Frail and gaunt",
     "Young and rich",
     "Fat and loud"
    ],
    "answer": 0
   },
   {
    "q": "What did one visitor say stood at the door?",
    "options": [
     "A tree",
     "A grotesque statue",
     "A dog"
    ],
    "answer": 1
   },
   {
    "q": "Who walked in with her grandmother?",
    "options": [
     "A neighbour",
     "A pensive girl",
     "A young man"
    ],
    "answer": 1
   },
   {
    "q": "What did they find?",
    "options": [
     "A ghost",
     "A forlorn dog and a sullen cat",
     "A treasure"
    ],
    "answer": 1
   },
   {
    "q": "How was the neighbour?",
    "options": [
     "Funny",
     "Kind",
     "Haughty"
    ],
    "answer": 2
   },
   {
    "q": "How was the old man as a host?",
    "options": [
     "Silent",
     "Rude",
     "Jovial"
    ],
    "answer": 2
   },
   {
    "q": "What did he offer?",
    "options": [
     "Dinner",
     "A guided tour",
     "Tea in a tranquil room"
    ],
    "answer": 2
   },
   {
    "q": "What did the story he told concern?",
    "options": [
     "The war",
     "His job",
     "His childhood and a promise to his father"
    ],
    "answer": 2
   },
   {
    "q": "What did he say lives in the tiniest things?",
    "options": [
     "Money",
     "Beauty",
     "Fear"
    ],
    "answer": 1
   },
   {
    "q": "What did the girl see when she looked back?",
    "options": [
     "Nothing",
     "A light in one window",
     "A fire"
    ],
    "answer": 1
   },
   {
    "q": "What did the girl whisper?",
    "options": [
     "It is a ruin",
     "It is a school",
     "It is a house that waits"
    ],
    "answer": 2
   }
  ]
 },
 "rhetoric2": {
  "title": "The speech",
  "paragraphs": [
   "The mayor gave a bombastic speech at the town hall. He used anaphora and antithesis, and he asked a rhetorical question: \"Who will build our future, if not us?\" The crowd was moved by the pathos, but the journalist at the back was less impressed. She wrote in her notebook that the speech was full of digressions and innuendo.",
   "Later, a professor explained to her students that every text has its logos, ethos and pathos. A pithy sentence can do more than a long one. He gave examples of an oxymoron, \"deafening silence,\" and a tautology, \"free gift.\" Some phrases, he said, are pleonasms, and others are simply a clever turn of phrase or a double entendre. Students laughed at the wordplay and at the idiom he chose.",
   "In the evening, an inflammatory comment appeared online, and the mayor answered with sarcasm. The reply was terse, and the irony was clear. A friend told him that circumlocution would not help him. \"Say what you mean,\" she said, \"and say it simply.\" The next day, the mayor gave a new speech, short and calm. He did not use grand words. People applauded. The journalist wrote a short note: \"Less rhetoric, more truth. It works.\" She underlined the last word twice and sent the article to her editor before lunch."
  ],
  "questions": [
   {
    "q": "Where did the mayor give his speech?",
    "options": [
     "At a school",
     "At the town hall",
     "On TV"
    ],
    "answer": 1
   },
   {
    "q": "How was the speech?",
    "options": [
     "Quiet",
     "Short",
     "Bombastic"
    ],
    "answer": 2
   },
   {
    "q": "What did he ask?",
    "options": [
     "A rhetorical question",
     "A favour",
     "A riddle"
    ],
    "answer": 0
   },
   {
    "q": "Who was less impressed?",
    "options": [
     "The journalist",
     "The mayor",
     "The crowd"
    ],
    "answer": 0
   },
   {
    "q": "What did she write about the speech?",
    "options": [
     "It was perfect",
     "It was full of digressions and innuendo",
     "It was short"
    ],
    "answer": 1
   },
   {
    "q": "What three appeals did the professor name?",
    "options": [
     "Fire, water and air",
     "Past, present and future",
     "Logos, ethos and pathos"
    ],
    "answer": 2
   },
   {
    "q": "What is an example of an oxymoron he gave?",
    "options": [
     "Deafening silence",
     "Free gift",
     "Climb up"
    ],
    "answer": 0
   },
   {
    "q": "What is an example of a tautology?",
    "options": [
     "Deafening silence",
     "Free gift",
     "Rise up"
    ],
    "answer": 1
   },
   {
    "q": "What did the students laugh at?",
    "options": [
     "The wordplay",
     "The exam",
     "The professor's hat"
    ],
    "answer": 0
   },
   {
    "q": "What appeared online in the evening?",
    "options": [
     "A song",
     "A film",
     "An inflammatory comment"
    ],
    "answer": 2
   },
   {
    "q": "How did the mayor answer?",
    "options": [
     "With sarcasm",
     "With a song",
     "With silence"
    ],
    "answer": 0
   },
   {
    "q": "Was the reply long?",
    "options": [
     "Yes, very long",
     "It was a poem",
     "No, it was terse"
    ],
    "answer": 2
   },
   {
    "q": "What did a friend say would not help him?",
    "options": [
     "Sleep",
     "Circumlocution",
     "Money"
    ],
    "answer": 1
   },
   {
    "q": "What was the next speech like?",
    "options": [
     "Angry",
     "Short and calm",
     "Long and loud"
    ],
    "answer": 1
   },
   {
    "q": "What did the journalist write?",
    "options": [
     "More words",
     "Less rhetoric, more truth",
     "Nothing"
    ],
    "answer": 1
   }
  ]
 },
 "colloc2": {
  "title": "The new policy",
  "paragraphs": [
   "The government proposed a new policy, and a heated debate began. The minister argued that the plan would exert a positive influence on the economy. He launched an investigation into costs and promised to impose a ban on harmful products. Critics, however, said that the plan posed a threat to small firms and raised concerns about the new taxes. Fierce competition in the market would be a big problem, they added.",
   "A widely acknowledged expert cast doubt on the figures. He observed a sharp increase in prices and a steady decline in sales. The disappointment of the workers was bitter, and the idea was deeply rooted in the minds of many that things would not improve. Some strongly advised the minister to wait. The weather was bitterly cold, and thousands marched in the streets. A trade union lodged a complaint.",
   "After many weeks, both sides reached a compromise. Safety took precedence over profit, and the minister tried to make amends. The campaign gained momentum when young people joined. The minister came under fire again, but he showed that the plan could withstand pressure. In the end, the long years of work bore fruit. \"Politics,\" he said, \"is the art of the possible.\" The newspaper called the result a modest success. A year later, prices fell and the firms recovered, and even the harshest critics admitted the change."
  ],
  "questions": [
   {
    "q": "What did the government propose?",
    "options": [
     "A new policy",
     "A holiday",
     "A new bank"
    ],
    "answer": 0
   },
   {
    "q": "What would the plan exert, said the minister?",
    "options": [
     "A tax",
     "A threat",
     "A positive influence"
    ],
    "answer": 2
   },
   {
    "q": "What did he launch?",
    "options": [
     "A war",
     "An investigation into costs",
     "A film"
    ],
    "answer": 1
   },
   {
    "q": "What did critics say about small firms?",
    "options": [
     "The plan helped them",
     "The plan ignored them",
     "The plan posed a threat to them"
    ],
    "answer": 2
   },
   {
    "q": "What did a widely acknowledged expert do?",
    "options": [
     "Support the figures",
     "Cast doubt on the figures",
     "Cook"
    ],
    "answer": 1
   },
   {
    "q": "What did he observe?",
    "options": [
     "A new law",
     "A sharp increase in prices",
     "A drop in taxes"
    ],
    "answer": 1
   },
   {
    "q": "What was the weather like?",
    "options": [
     "Rainy",
     "Hot",
     "Bitterly cold"
    ],
    "answer": 2
   },
   {
    "q": "What did thousands do?",
    "options": [
     "Go on holiday",
     "Stay at home",
     "March in the streets"
    ],
    "answer": 2
   },
   {
    "q": "What did a trade union do?",
    "options": [
     "Buy a bank",
     "Lodge a complaint",
     "Close a shop"
    ],
    "answer": 1
   },
   {
    "q": "What did the sides reach?",
    "options": [
     "A war",
     "A fight",
     "A compromise"
    ],
    "answer": 2
   },
   {
    "q": "What took precedence over profit?",
    "options": [
     "Fun",
     "Safety",
     "Speed"
    ],
    "answer": 1
   },
   {
    "q": "What did the minister try to make?",
    "options": [
     "A cake",
     "Amends",
     "A bridge"
    ],
    "answer": 1
   },
   {
    "q": "Who joined the campaign?",
    "options": [
     "Young people",
     "The army",
     "Tourists"
    ],
    "answer": 0
   },
   {
    "q": "What did long years of work do?",
    "options": [
     "Fail",
     "Bore fruit",
     "Stop"
    ],
    "answer": 1
   },
   {
    "q": "What did the minister say politics is?",
    "options": [
     "A game",
     "The art of the possible",
     "A job for the rich"
    ],
    "answer": 1
   }
  ]
 },
 "formal2": {
  "title": "A letter of application",
  "paragraphs": [
   "Dear Sir or Madam, I wish to enquire about the vacant post in your department. I would like to tender my application and furnish the documents that you require. I have acquired skills in management and I can facilitate the work of a team. In my current job I allocate resources and I authorise small payments. I cite three references and I append my CV.",
   "I concur with your view that experience is essential. My director deems me a reliable colleague, and my work has rendered great service to the firm. If necessary, I can peruse your documents and amend any text. I would convene a first meeting with the staff to discuss goals. I am obliged to disclose that I will vacate my current post in June, and I cannot withhold this information.",
   "I do not wish to forfeit this opportunity, and I am ready to impart my knowledge. As a student I solicited advice from experts in the field, and I learned to discharge my duties with care. Should the post require travel, I am happy to comply. Please enquire if you need further documents. I would be grateful if you could reply within two weeks. Thank you for your time and consideration. Yours faithfully, Teresa Matos. The letter was short, polite and clear, and the manager invited Teresa to an interview the following week."
  ],
  "questions": [
   {
    "q": "What does the writer wish to do?",
    "options": [
     "Enquire about a vacant post",
     "Sell something",
     "Complain"
    ],
    "answer": 0
   },
   {
    "q": "What will she furnish?",
    "options": [
     "Food",
     "The documents required",
     "Money"
    ],
    "answer": 1
   },
   {
    "q": "What has she acquired?",
    "options": [
     "A house",
     "A degree in art",
     "Skills in management"
    ],
    "answer": 2
   },
   {
    "q": "What does she do in her current job?",
    "options": [
     "Cleans",
     "Drives",
     "Allocates resources and authorises small payments"
    ],
    "answer": 2
   },
   {
    "q": "How many references does she cite?",
    "options": [
     "One",
     "Three",
     "Ten"
    ],
    "answer": 1
   },
   {
    "q": "What does she append?",
    "options": [
     "A photo",
     "A cheque",
     "Her CV"
    ],
    "answer": 2
   },
   {
    "q": "What does her director deem her?",
    "options": [
     "A student",
     "A reliable colleague",
     "A new boss"
    ],
    "answer": 1
   },
   {
    "q": "What would she convene?",
    "options": [
     "A first meeting with the staff",
     "A party",
     "A war"
    ],
    "answer": 0
   },
   {
    "q": "When will she vacate her current post?",
    "options": [
     "In January",
     "In June",
     "Next week"
    ],
    "answer": 1
   },
   {
    "q": "What does she not wish to forfeit?",
    "options": [
     "Her salary",
     "This opportunity",
     "Her holiday"
    ],
    "answer": 1
   },
   {
    "q": "From whom did she solicit advice as a student?",
    "options": [
     "Her mother",
     "Experts in the field",
     "Her friends"
    ],
    "answer": 1
   },
   {
    "q": "What is she happy to do if the post requires travel?",
    "options": [
     "Refuse",
     "Complain",
     "Comply"
    ],
    "answer": 2
   },
   {
    "q": "Within how long does she hope for a reply?",
    "options": [
     "Two days",
     "Two weeks",
     "Two months"
    ],
    "answer": 1
   },
   {
    "q": "What is the writer's name?",
    "options": [
     "Teresa Matos",
     "Maria Silva",
     "Ana Lopes"
    ],
    "answer": 0
   },
   {
    "q": "What did the manager do?",
    "options": [
     "Invited her to an interview",
     "Never replied",
     "Rejected her"
    ],
    "answer": 0
   }
  ]
 },
 "nuance2": {
  "title": "The reunion",
  "paragraphs": [
   "Last summer, Rui met his old friends at a school reunion. He entered with trepidation, because he had felt dread about the idea for weeks. The first person to greet him was Paula, who was jubilant and did not hide her elation. Another friend, Jorge, looked smug and spoke only about his car. Rui stayed wary. A third, Ana, was sheepish and aloof, and she stayed alone.",
   "Over dinner, there was consternation when someone mentioned a failed business. Jorge showed no humility, and Ana's face revealed disillusionment. A former teacher spoke with magnanimity and forgave an old quarrel. A disgruntled classmate shared his bitterness about the past, but there was no rancour in the room. Some people felt vanity, others complacency, others only exasperation. Rui, who had come with bemusement, understood that every person carries a story.",
   "At the end of the evening, Paula hugged him. \"We were all dismayed by life in some way,\" she said. Rui, who had been nonchalant, felt his spite disappear. He decided to write to Ana. On the way home, he thought about time and friendship. Some memories hurt, and some warm you. He did not regret having gone. \"We cannot choose what we feel,\" he wrote in his diary, \"but we can choose what we do with it.\" He smiled in the dark and fell asleep quickly, because the evening had been worth it."
  ],
  "questions": [
   {
    "q": "Where did Rui meet his old friends?",
    "options": [
     "At a school reunion",
     "At a wedding",
     "At a funeral"
    ],
    "answer": 0
   },
   {
    "q": "How did Rui enter?",
    "options": [
     "With a gift",
     "With trepidation",
     "With joy"
    ],
    "answer": 1
   },
   {
    "q": "Who was jubilant?",
    "options": [
     "Paula",
     "Ana",
     "Jorge"
    ],
    "answer": 0
   },
   {
    "q": "Who looked smug?",
    "options": [
     "Paula",
     "Jorge",
     "Rui"
    ],
    "answer": 1
   },
   {
    "q": "What did Jorge talk about?",
    "options": [
     "His mother",
     "His job",
     "His car"
    ],
    "answer": 2
   },
   {
    "q": "Who was sheepish and aloof?",
    "options": [
     "Jorge",
     "Ana",
     "Paula"
    ],
    "answer": 1
   },
   {
    "q": "What caused consternation at dinner?",
    "options": [
     "A failed business",
     "A song",
     "A broken glass"
    ],
    "answer": 0
   },
   {
    "q": "How did the former teacher speak?",
    "options": [
     "With fear",
     "With magnanimity",
     "With anger"
    ],
    "answer": 1
   },
   {
    "q": "Who shared his bitterness?",
    "options": [
     "A disgruntled classmate",
     "Paula",
     "The waiter"
    ],
    "answer": 0
   },
   {
    "q": "Was there rancour in the room?",
    "options": [
     "Only a little",
     "No",
     "Yes, a lot"
    ],
    "answer": 1
   },
   {
    "q": "How had Rui come?",
    "options": [
     "With a girlfriend",
     "With a camera",
     "With bemusement"
    ],
    "answer": 2
   },
   {
    "q": "What did Paula say?",
    "options": [
     "We are rich",
     "We are old",
     "We were all dismayed by life in some way"
    ],
    "answer": 2
   },
   {
    "q": "What did Rui feel disappear?",
    "options": [
     "His spite",
     "His money",
     "His shoes"
    ],
    "answer": 0
   },
   {
    "q": "Who did he decide to write to?",
    "options": [
     "Paula",
     "Jorge",
     "Ana"
    ],
    "answer": 2
   },
   {
    "q": "What did he write in his diary?",
    "options": [
     "We can choose what we do with our feelings",
     "Friends are bad",
     "We should never go out"
    ],
    "answer": 0
   }
  ]
 },
 "thought2": {
  "title": "A philosophy class",
  "paragraphs": [
   "The philosophy class began with a simple question: do we have free will? The professor wrote on the board the words ontology, metaphysics and consciousness. She explained that ontology asks what exists, and that metaphysics studies reality. A thought experiment about a train made the students laugh. Then she spoke about existentialism and nihilism, and about Stoicism, which teaches calm in hardship.",
   "A student argued for hedonism, saying that pleasure is the aim of life. Another defended idealism, and a third said that materialism explained everything. The professor smiled. She said that a syllogism has two premises and a conclusion, and she asked them to find a contradiction in terms. A dogmatic classmate refused to listen. \"Scepticism,\" she said, \"is a healthy habit, but dogma is not.\"",
   "Later, the class discussed mortality and transcendence. The professor explained that the Enlightenment valued reason and that deduction can fail when a theory is only speculative. She quoted solipsism as an extreme case: if only my mind exists, who is writing this? The students laughed. At the end, she gave them a homework: write a page about their moral compass. \"Do not look for the answer in a book,\" she said. \"Abstraction is easy. Life is the real laboratory.\" The students left, still arguing in the corridor about who was right."
  ],
  "questions": [
   {
    "q": "What was the first question?",
    "options": [
     "Is time money?",
     "Is God real?",
     "Do we have free will?"
    ],
    "answer": 2
   },
   {
    "q": "What does ontology ask?",
    "options": [
     "What exists",
     "How to live",
     "Who is right"
    ],
    "answer": 0
   },
   {
    "q": "What made the students laugh?",
    "options": [
     "A joke by the teacher",
     "A film",
     "A thought experiment about a train"
    ],
    "answer": 2
   },
   {
    "q": "What does Stoicism teach?",
    "options": [
     "Pleasure",
     "Calm in hardship",
     "Fear"
    ],
    "answer": 1
   },
   {
    "q": "What did a student argue for?",
    "options": [
     "Nihilism",
     "Hedonism",
     "Stoicism"
    ],
    "answer": 1
   },
   {
    "q": "What is the aim of life for a hedonist?",
    "options": [
     "Pleasure",
     "Reason",
     "Duty"
    ],
    "answer": 0
   },
   {
    "q": "What has a syllogism?",
    "options": [
     "Two names",
     "Two premises and a conclusion",
     "Three poems"
    ],
    "answer": 1
   },
   {
    "q": "What did the professor ask them to find?",
    "options": [
     "A contradiction in terms",
     "A word",
     "A book"
    ],
    "answer": 0
   },
   {
    "q": "Who refused to listen?",
    "options": [
     "A shy student",
     "A dogmatic classmate",
     "The professor"
    ],
    "answer": 1
   },
   {
    "q": "What does the professor call a healthy habit?",
    "options": [
     "Scepticism",
     "Anger",
     "Dogma"
    ],
    "answer": 0
   },
   {
    "q": "What did the class discuss later?",
    "options": [
     "Food",
     "Mortality and transcendence",
     "Football"
    ],
    "answer": 1
   },
   {
    "q": "What did the Enlightenment value?",
    "options": [
     "Money",
     "Reason",
     "War"
    ],
    "answer": 1
   },
   {
    "q": "What extreme case did she quote?",
    "options": [
     "Stoicism",
     "Solipsism",
     "Materialism"
    ],
    "answer": 1
   },
   {
    "q": "What homework did she give?",
    "options": [
     "Read a book",
     "Write a page about their moral compass",
     "Draw a map"
    ],
    "answer": 1
   },
   {
    "q": "What did she call life?",
    "options": [
     "The real laboratory",
     "A game",
     "A mystery"
    ],
    "answer": 0
   }
  ]
 },
 "animalidioms2": {
  "title": "The office zoo",
  "paragraphs": [
   "The office of the small firm was a real zoo. The manager, Ms Dias, was a busy bee who ruled the roost. Her assistant was a lone wolf who worked alone and rarely talked. The new intern, a dark horse, surprised everyone with his ideas. An older colleague was a cold fish, and a young designer was a copycat who imitated everything. The old product, a cash cow, paid for all.",
   "One day, a rumour put the cat among the pigeons. Someone said that the firm would close, and everybody had ants in their pants. A snake in the grass sent an email to the clients. The manager explained that the small shop was a sitting duck, and that students were only guinea pigs for a new test. The firm walked into the lion's den, because a big rival wanted to buy it.",
   "For weeks, the work moved at a snail's pace, and the staff ate like horses at lunch. Some members had a bee in their bonnet about the future. But after many arguments, the worm had turned: the staff decided to act. They found a new client, and the firm survived. \"A leopard cannot change its spots,\" said the manager, \"but a team can learn.\" The children of the staff, as quiet as mice, came to a party. Everybody laughed, and the old zoo was now a happy family."
  ],
  "questions": [
   {
    "q": "What was the office like?",
    "options": [
     "A real zoo",
     "A school",
     "A palace"
    ],
    "answer": 0
   },
   {
    "q": "Who was a busy bee?",
    "options": [
     "The intern",
     "The designer",
     "Ms Dias"
    ],
    "answer": 2
   },
   {
    "q": "Who was a lone wolf?",
    "options": [
     "The cat",
     "The manager",
     "The assistant"
    ],
    "answer": 2
   },
   {
    "q": "Who was a dark horse?",
    "options": [
     "The new intern",
     "The manager",
     "An old colleague"
    ],
    "answer": 0
   },
   {
    "q": "Who was a cold fish?",
    "options": [
     "The intern",
     "Ms Dias",
     "An older colleague"
    ],
    "answer": 2
   },
   {
    "q": "What imitated everything?",
    "options": [
     "The manager",
     "The intern",
     "A young designer"
    ],
    "answer": 2
   },
   {
    "q": "What paid for all?",
    "options": [
     "The old product, a cash cow",
     "The bank",
     "The new product"
    ],
    "answer": 0
   },
   {
    "q": "What did the rumour say?",
    "options": [
     "That everyone got a raise",
     "That the firm would close",
     "That the manager left"
    ],
    "answer": 1
   },
   {
    "q": "What did everybody have?",
    "options": [
     "A new desk",
     "Ants in their pants",
     "A day off"
    ],
    "answer": 1
   },
   {
    "q": "Who sent an email to the clients?",
    "options": [
     "A snake in the grass",
     "The assistant",
     "The manager"
    ],
    "answer": 0
   },
   {
    "q": "What did a big rival want to do?",
    "options": [
     "Close the firm",
     "Visit the firm",
     "Buy the firm"
    ],
    "answer": 2
   },
   {
    "q": "How did the work move?",
    "options": [
     "In silence",
     "At a snail's pace",
     "Quickly"
    ],
    "answer": 1
   },
   {
    "q": "What did some members have?",
    "options": [
     "A car",
     "A prize",
     "A bee in their bonnet"
    ],
    "answer": 2
   },
   {
    "q": "What did the staff do after the worm turned?",
    "options": [
     "They slept",
     "They decided to act",
     "They left"
    ],
    "answer": 1
   },
   {
    "q": "What did the manager say about a team?",
    "options": [
     "It cannot change",
     "It is lazy",
     "It can learn"
    ],
    "answer": 2
   }
  ]
 },
 "phrasal3b": {
  "title": "The comeback",
  "paragraphs": [
   "After the crisis, the economy had to bounce back. The state decided to bail out the bank, and some firms branched out into new fields. At first, a few investors backed out and others tried to cash in on the situation. The government cracked down on fraud, and the protests soon fizzled out. A minister tried to fob off the critics with excuses, but a journalist lashed out and asked for real answers.",
   "At the factory, Julia was tired. Sometimes she dozed off at her desk, and her boss warned her not to mess up the orders. When her colleagues clammed up, she chimed in with a joke. It dawned on her that the company would not survive without change. She said that they should knuckle down and hold out until spring. A new plan slowly started to pan out.",
   "The workers opted out of the old system and brushed off the doubt. Julia did not act up when things got hard. \"We will recover,\" she said. By the summer, orders had risen and the debts had started to dwindle away. A year later, the factory had a new shift and a new name. Julia, who had once nodded off at her desk, became a team leader. \"A crisis,\" she says today, \"is a door that opens only if you push.\" She smiled and went back to work."
  ],
  "questions": [
   {
    "q": "What did the economy have to do?",
    "options": [
     "Stop",
     "Close",
     "Bounce back"
    ],
    "answer": 2
   },
   {
    "q": "What did the state do for the bank?",
    "options": [
     "Close it",
     "Rob it",
     "Bail it out"
    ],
    "answer": 2
   },
   {
    "q": "What did some firms do?",
    "options": [
     "Branch out into new fields",
     "Move",
     "Close"
    ],
    "answer": 0
   },
   {
    "q": "What did the government crack down on?",
    "options": [
     "Music",
     "Fraud",
     "Football"
    ],
    "answer": 1
   },
   {
    "q": "What happened to the protests?",
    "options": [
     "They grew",
     "They became violent",
     "They fizzled out"
    ],
    "answer": 2
   },
   {
    "q": "What did the minister try to do with the critics?",
    "options": [
     "Thank them",
     "Fob them off with excuses",
     "Pay them"
    ],
    "answer": 1
   },
   {
    "q": "Who lashed out?",
    "options": [
     "A journalist",
     "The minister",
     "Julia"
    ],
    "answer": 0
   },
   {
    "q": "What did Julia sometimes do at her desk?",
    "options": [
     "Dance",
     "Sing",
     "Doze off"
    ],
    "answer": 2
   },
   {
    "q": "What did her boss warn her not to mess up?",
    "options": [
     "The coffee",
     "The party",
     "The orders"
    ],
    "answer": 2
   },
   {
    "q": "When her colleagues clammed up, what did Julia do?",
    "options": [
     "Cried",
     "Chimed in with a joke",
     "Left"
    ],
    "answer": 1
   },
   {
    "q": "What dawned on her?",
    "options": [
     "She was late",
     "The company would not survive without change",
     "It was lunch"
    ],
    "answer": 1
   },
   {
    "q": "What should they do until spring?",
    "options": [
     "Knuckle down and hold out",
     "Sell the firm",
     "Go on holiday"
    ],
    "answer": 0
   },
   {
    "q": "What started to pan out?",
    "options": [
     "A holiday",
     "The old plan",
     "A new plan"
    ],
    "answer": 2
   },
   {
    "q": "What did the debts start to do?",
    "options": [
     "Dwindle away",
     "Increase",
     "Double"
    ],
    "answer": 0
   },
   {
    "q": "What did Julia become?",
    "options": [
     "A team leader",
     "A cleaner",
     "A manager of the bank"
    ],
    "answer": 0
   }
  ]
 },
 "narrative2": {
  "title": "A good book",
  "paragraphs": [
   "I have just finished a novel with an omniscient narrator and a complex plot. The book begins in medias res, with a storm at sea, and the prologue introduces the main characters. The point of view changes in each chapter, and there is a subplot about a lost letter. At one point, an unreliable narrator tells a version of events that is not true, and the reader must decide whom to trust. A red herring makes the reader suspect the wrong person.",
   "The author uses stream of consciousness in some pages, and the language is rich in allegory. The book is a kind of fable about power, and each character embodies an idea. The exposition is slow, but the resolution is surprising. The end of Part One is a cliffhanger. The epilogue, set ten years later, is moving and brief, with a couplet that closes the story.",
   "My teacher said the book is like an epic in prose, and she compared it to a ballad and to an elegy. She also said that a vignette in chapter six is the best passage. The irony of fate that ruins the hero is a classic one. Reading it taught me something about meter, about rhythm and about patience. I would read it again, because every time I notice another detail, and every page rewards the reader."
  ],
  "questions": [
   {
    "q": "What kind of narrator does the novel have?",
    "options": [
     "A child",
     "An omniscient narrator",
     "A dog"
    ],
    "answer": 1
   },
   {
    "q": "How does the book begin?",
    "options": [
     "In medias res, with a storm",
     "With a wedding",
     "With a letter"
    ],
    "answer": 0
   },
   {
    "q": "What changes in each chapter?",
    "options": [
     "The point of view",
     "The language",
     "The title"
    ],
    "answer": 0
   },
   {
    "q": "What is the subplot about?",
    "options": [
     "A war",
     "A lost letter",
     "A love triangle"
    ],
    "answer": 1
   },
   {
    "q": "What does the unreliable narrator do?",
    "options": [
     "Tells the truth",
     "Does not speak",
     "Tells a version of events that is not true"
    ],
    "answer": 2
   },
   {
    "q": "What does the red herring make the reader do?",
    "options": [
     "Fall asleep",
     "Suspect the wrong person",
     "Stop reading"
    ],
    "answer": 1
   },
   {
    "q": "What technique appears in some pages?",
    "options": [
     "Dialogue only",
     "Stream of consciousness",
     "Rhyme"
    ],
    "answer": 1
   },
   {
    "q": "What is the book a kind of?",
    "options": [
     "Diary",
     "Fable about power",
     "Cookbook"
    ],
    "answer": 1
   },
   {
    "q": "How is the exposition?",
    "options": [
     "Slow",
     "Fast",
     "Missing"
    ],
    "answer": 0
   },
   {
    "q": "How does Part One end?",
    "options": [
     "With a death",
     "With a cliffhanger",
     "With a wedding"
    ],
    "answer": 1
   },
   {
    "q": "When is the epilogue set?",
    "options": [
     "One year earlier",
     "Tomorrow",
     "Ten years later"
    ],
    "answer": 2
   },
   {
    "q": "What closes the story?",
    "options": [
     "A chapter",
     "A song",
     "A couplet"
    ],
    "answer": 2
   },
   {
    "q": "To what did the teacher compare the book?",
    "options": [
     "An epic, a ballad and an elegy",
     "A film",
     "A game"
    ],
    "answer": 0
   },
   {
    "q": "Which passage was the best?",
    "options": [
     "A vignette in chapter six",
     "The prologue",
     "The epilogue"
    ],
    "answer": 0
   },
   {
    "q": "What does the writer say about the book?",
    "options": [
     "Every time I notice another detail",
     "It is boring",
     "It is too long"
    ],
    "answer": 0
   }
  ]
 },
 "reasoning2": {
  "title": "The detective's logic",
  "paragraphs": [
   "The detective had to ascertain the facts of the case. He did not want to rationalise his first idea, so he tried to distil the clues into a short list. A witness adduced new evidence, and the detective construed it as an important sign. Another witness alluded to an old quarrel and intimated that the victim had enemies. The detective cogitated for hours, and then he began to gauge each suspect.",
   "A journalist contended that the culprit was the neighbour. The detective tried to disprove this idea, and he debunked a rumour that had spread through the town. He harboured a doubt about the owner of the shop. A friend urged him to expound his theory, and he did so with care. The theory was premised on the time of the crime, and it attributed the fire to a careless accident.",
   "In the end, an expert adjudicated a dispute between two theories. The detective refuted every charge against the neighbour, and the true culprit emerged. The crowd extolled his work. Time vindicated his patience, and nothing warranted another investigation. \"Logic,\" he explained, \"is not magic. It posits a possibility, tests it and, if necessary, throws it away.\" He galvanised the town with his calm and left on the next train. Poverty, he reminded us, engenders crime, but patience engenders justice. He closed his notebook and smiled."
  ],
  "questions": [
   {
    "q": "What did the detective have to ascertain?",
    "options": [
     "The weather",
     "The price",
     "The facts of the case"
    ],
    "answer": 2
   },
   {
    "q": "What did he try to do with the clues?",
    "options": [
     "Distil them into a short list",
     "Lose them",
     "Burn them"
    ],
    "answer": 0
   },
   {
    "q": "Who adduced new evidence?",
    "options": [
     "A journalist",
     "The detective",
     "A witness"
    ],
    "answer": 2
   },
   {
    "q": "What did another witness allude to?",
    "options": [
     "A song",
     "An old quarrel",
     "A holiday"
    ],
    "answer": 1
   },
   {
    "q": "What did the detective do for hours?",
    "options": [
     "Cogitate",
     "Sleep",
     "Eat"
    ],
    "answer": 0
   },
   {
    "q": "Who contended that the culprit was the neighbour?",
    "options": [
     "A journalist",
     "A judge",
     "A witness"
    ],
    "answer": 0
   },
   {
    "q": "What did the detective debunk?",
    "options": [
     "A car",
     "A book",
     "A rumour"
    ],
    "answer": 2
   },
   {
    "q": "Whom did he have a doubt about?",
    "options": [
     "The mayor",
     "The owner of the shop",
     "His friend"
    ],
    "answer": 1
   },
   {
    "q": "What was his theory premised on?",
    "options": [
     "A letter",
     "The time of the crime",
     "The weather"
    ],
    "answer": 1
   },
   {
    "q": "What did it attribute the fire to?",
    "options": [
     "A thief",
     "A storm",
     "A careless accident"
    ],
    "answer": 2
   },
   {
    "q": "Who adjudicated between two theories?",
    "options": [
     "A child",
     "The police",
     "An expert"
    ],
    "answer": 2
   },
   {
    "q": "What did he refute?",
    "options": [
     "A letter",
     "Every charge against the neighbour",
     "The weather"
    ],
    "answer": 1
   },
   {
    "q": "What did time vindicate?",
    "options": [
     "His patience",
     "His car",
     "His money"
    ],
    "answer": 0
   },
   {
    "q": "What did he say logic is?",
    "options": [
     "A gift",
     "A secret",
     "Not magic"
    ],
    "answer": 2
   },
   {
    "q": "What does patience engender?",
    "options": [
     "Justice",
     "Crime",
     "Poverty"
    ],
    "answer": 0
   }
  ]
 },
 "hedging2": {
  "title": "A cautious report",
  "paragraphs": [
   "The report began cautiously: \"It would seem that sales are rising, but apparently the data are incomplete.\" The author, an economist, wrote that to some degree the market is stable. In all likelihood, she said, prices will rise in the long run. The figures are more or less correct, give or take a few euros, and the profit is seemingly high. Conceivably, the firm could double its income, but this is only a possibility.",
   "She explained that, strictly speaking, the information was provisional. For all intents and purposes, however, the trend was clear. On balance, the plan was good, to a certain extent at least. As far as she could tell, no one had hidden the truth. To the best of her knowledge, the accounts had been audited. It goes without saying that further tests would be needed, and suffice it to say that the team had worked hard.",
   "The conclusion was tentative: in the main, the results were positive. At the end of the day, the decision would depend on the board. In a nutshell, she wrote, invest with care. The director read the report twice and thanked the author for being honest. \"A good economist,\" he said, \"never says always and never says never.\" The report was published in the newspaper the next day, and readers praised its honest tone and careful language."
  ],
  "questions": [
   {
    "q": "How did the report begin?",
    "options": [
     "Angrily",
     "Loudly",
     "Cautiously"
    ],
    "answer": 2
   },
   {
    "q": "Who wrote the report?",
    "options": [
     "An economist",
     "A judge",
     "A teacher"
    ],
    "answer": 0
   },
   {
    "q": "What will happen to prices in the long run?",
    "options": [
     "They will rise, in all likelihood",
     "They will fall",
     "They will stay still"
    ],
    "answer": 0
   },
   {
    "q": "How are the figures?",
    "options": [
     "Missing",
     "More or less correct",
     "Wrong"
    ],
    "answer": 1
   },
   {
    "q": "What could the firm conceivably do?",
    "options": [
     "Move",
     "Close",
     "Double its income"
    ],
    "answer": 2
   },
   {
    "q": "What was provisional, strictly speaking?",
    "options": [
     "The information",
     "The title",
     "The firm"
    ],
    "answer": 0
   },
   {
    "q": "What was clear for all intents and purposes?",
    "options": [
     "The trend",
     "The price",
     "The date"
    ],
    "answer": 0
   },
   {
    "q": "How was the plan on balance?",
    "options": [
     "Bad",
     "Unclear",
     "Good"
    ],
    "answer": 2
   },
   {
    "q": "What had been audited, to the best of her knowledge?",
    "options": [
     "The car",
     "The accounts",
     "The staff"
    ],
    "answer": 1
   },
   {
    "q": "What would be needed?",
    "options": [
     "A new team",
     "A holiday",
     "Further tests"
    ],
    "answer": 2
   },
   {
    "q": "What would depend on the board?",
    "options": [
     "The weather",
     "The decision",
     "The title"
    ],
    "answer": 1
   },
   {
    "q": "What was her advice in a nutshell?",
    "options": [
     "Invest with care",
     "Do nothing",
     "Sell everything"
    ],
    "answer": 0
   },
   {
    "q": "What did the director do?",
    "options": [
     "Burn it",
     "Read the report twice",
     "Throw it away"
    ],
    "answer": 1
   },
   {
    "q": "What does a good economist never say?",
    "options": [
     "Goodbye",
     "Hello",
     "Always and never"
    ],
    "answer": 2
   },
   {
    "q": "What did readers praise?",
    "options": [
     "Its pictures",
     "Its honest tone",
     "Its length"
    ],
    "answer": 1
   }
  ]
 },
 "personality": {
  "title": "Two very different brothers",
  "paragraphs": [
   "Rui and Paulo are brothers, but they are very different. Rui is cheerful and outgoing. He is tall and slim, with curly hair and a few freckles on his nose. He is also generous: when his friends have no money, he always pays for the coffee. Paulo, on the other hand, is quiet and a little moody. He is shorter, with a short beard, and he is going bald. He is not rude, but he is not very talkative either.",
   "At home, their parents say that Rui is lazy about housework, but very reliable when you need help. Paulo is hardworking and tidy, but he can be stubborn. When he has an idea, nothing can change his mind. Rui is more easygoing. He never gets angry for long, and he always finds something funny to say. Sometimes Paulo thinks that his brother is selfish because he leaves his things everywhere, but Rui is just forgetful.",
   "Last week a middle-aged man visited the house. He looked at the two brothers and said that they could not be more different. Their mother laughed. \"That is true,\" she said. \"But they are both polite and honest, and they love each other.\" Paulo smiled, and Rui gave him a hug. \"We are a good team,\" Rui said. \"I bring the jokes, and he brings the common sense.\" Everybody laughed, even the grumpy neighbour, who was passing by in front of the house."
  ],
  "questions": [
   {
    "q": "Which brother is outgoing and cheerful?",
    "options": [
     "Rui",
     "Their father",
     "Paulo"
    ],
    "answer": 0
   },
   {
    "q": "What does Rui have on his nose?",
    "options": [
     "Freckles",
     "A scar",
     "Glasses"
    ],
    "answer": 0
   },
   {
    "q": "What does Rui do when his friends have no money?",
    "options": [
     "Pays for the coffee",
     "Lends them his car",
     "Leaves"
    ],
    "answer": 0
   },
   {
    "q": "What is Paulo going to be?",
    "options": [
     "Bald",
     "Taller than Rui",
     "A doctor"
    ],
    "answer": 0
   },
   {
    "q": "What does Paulo have?",
    "options": [
     "Freckles",
     "A short beard",
     "Curly hair"
    ],
    "answer": 1
   },
   {
    "q": "According to their parents, Rui is lazy about what?",
    "options": [
     "Sport",
     "Housework",
     "Homework"
    ],
    "answer": 1
   },
   {
    "q": "How is Paulo with his ideas?",
    "options": [
     "Forgetful",
     "Easygoing",
     "Stubborn"
    ],
    "answer": 2
   },
   {
    "q": "What does Paulo sometimes think of his brother?",
    "options": [
     "That he is rude",
     "That he is selfish",
     "That he is clever"
    ],
    "answer": 1
   },
   {
    "q": "Why does Rui leave his things everywhere?",
    "options": [
     "He is angry",
     "He is lazy",
     "He is forgetful"
    ],
    "answer": 2
   },
   {
    "q": "Who visited the house?",
    "options": [
     "A doctor",
     "A policeman",
     "A middle-aged man"
    ],
    "answer": 2
   },
   {
    "q": "What did he say about the brothers?",
    "options": [
     "They could not be more different",
     "They are twins",
     "They look the same"
    ],
    "answer": 0
   },
   {
    "q": "What are both brothers, according to their mother?",
    "options": [
     "Polite and honest",
     "Tall and slim",
     "Rich and famous"
    ],
    "answer": 0
   },
   {
    "q": "What does Rui bring to the team?",
    "options": [
     "The food",
     "The jokes",
     "The money"
    ],
    "answer": 1
   },
   {
    "q": "What does Paulo bring to the team?",
    "options": [
     "Jokes",
     "Common sense",
     "Music"
    ],
    "answer": 1
   },
   {
    "q": "Who was passing in front of the house?",
    "options": [
     "The grumpy neighbour",
     "A teacher",
     "A postman"
    ],
    "answer": 0
   }
  ]
 },
 "driving": {
  "title": "The driving lesson",
  "paragraphs": [
   "Carla is learning to drive. This morning she had her third lesson with Mr Dias, an instructor who is always calm. Before starting, he asked her to fasten her seat belt and to check the mirrors. Carla put her hands on the steering wheel and pressed the clutch. Then she changed gear and the car moved slowly along the road.",
   "At the first traffic light she stopped too late and Mr Dias had to press his own brake. \"Do not worry,\" he said. \"Everybody makes mistakes.\" Then they drove on the motorway for the first time. Carla was nervous at the beginning, but soon she relaxed. She pressed the accelerator gently, used the indicator and managed to overtake a slow lorry. The speed limit was one hundred and twenty, and she kept below it.",
   "On the way back they stopped at a petrol station because the car was almost out of fuel. Mr Dias showed her how to open the bonnet and check the tyre pressure. After that they went to a car park, where Carla practised reversing between two cars. She hit a cone once, but the second time was perfect. At the end of the lesson she was tired and happy. \"In two months you will take your driving licence test,\" said Mr Dias. \"A good driver is not fast. A good driver is careful. If a pedestrian is crossing, you stop. If a road sign says slow, you slow down.\" Carla promised to remember."
  ],
  "questions": [
   {
    "q": "Who is Carla learning to drive with?",
    "options": [
     "Her friend",
     "Her father",
     "Mr Dias"
    ],
    "answer": 2
   },
   {
    "q": "What did Mr Dias ask her to fasten?",
    "options": [
     "Her jacket",
     "Her seat belt",
     "Her shoes"
    ],
    "answer": 1
   },
   {
    "q": "What did she press before changing gear?",
    "options": [
     "The clutch",
     "The brake only",
     "The horn"
    ],
    "answer": 0
   },
   {
    "q": "What happened at the first traffic light?",
    "options": [
     "She stalled",
     "She went through red",
     "She stopped too late"
    ],
    "answer": 2
   },
   {
    "q": "What did she manage to overtake?",
    "options": [
     "A bus",
     "A slow lorry",
     "A bicycle"
    ],
    "answer": 1
   },
   {
    "q": "What was the speed limit on the motorway?",
    "options": [
     "Fifty",
     "One hundred and twenty",
     "Ninety"
    ],
    "answer": 1
   },
   {
    "q": "Why did they stop at a petrol station?",
    "options": [
     "The tyre was flat",
     "They were hungry",
     "The car was almost out of fuel"
    ],
    "answer": 2
   },
   {
    "q": "What did Mr Dias show her?",
    "options": [
     "How to use the sat nav",
     "How to wash the car",
     "How to open the bonnet and check the tyres"
    ],
    "answer": 2
   },
   {
    "q": "Where did Carla practise reversing?",
    "options": [
     "On the motorway",
     "In a car park",
     "In a field"
    ],
    "answer": 1
   },
   {
    "q": "What did she hit?",
    "options": [
     "A tree",
     "A cone",
     "A wall"
    ],
    "answer": 1
   },
   {
    "q": "When will she take her driving test?",
    "options": [
     "In two months",
     "Next year",
     "Tomorrow"
    ],
    "answer": 0
   },
   {
    "q": "What is a good driver, according to Mr Dias?",
    "options": [
     "Careful",
     "Fast",
     "Brave"
    ],
    "answer": 0
   },
   {
    "q": "What should you do for a pedestrian who is crossing?",
    "options": [
     "Speed up",
     "Stop",
     "Sound the horn"
    ],
    "answer": 1
   },
   {
    "q": "How did Carla feel at the end?",
    "options": [
     "Tired and happy",
     "Angry",
     "Frightened"
    ],
    "answer": 0
   },
   {
    "q": "What did Carla promise?",
    "options": [
     "To buy a car",
     "To drive faster",
     "To remember his advice"
    ],
    "answer": 2
   }
  ]
 },
 "neighbours": {
  "title": "A good neighbour",
  "paragraphs": [
   "When Elena and her husband moved into the block of flats, they did not know anyone. The neighbourhood was quiet, and the residents seemed polite but distant. On the first day, the landlady, Mrs Silva, rang the doorbell and brought a cake. \"Welcome,\" she said. \"If you need a favour, just ask.\" Elena was very grateful.",
   "A week later there was a problem. The flat above was noisy at night, and they could not sleep. Elena did not want to complain, so she went upstairs to introduce herself. A young man opened the door. He apologised and explained that he was practising the drums for a concert. They agreed on a compromise: he would play only in the afternoon, and Elena would lend him a rug to reduce the sound.",
   "After a few months, the neighbours organised a street party in the garden. Everybody brought something to eat, and the children played near the hedge and the fence. The old man from the ground floor told stories about the neighbourhood, and the young drummer even played a short song. Elena realised that a good neighbour is not a stranger who lives close, but somebody who is ready to talk and to help. She volunteered to organise the next party, and the residents' meeting accepted her idea with a big round of applause. When she went home that night, she carried a parcel of leftover cake for the landlady, to say thank you."
  ],
  "questions": [
   {
    "q": "What kind of building did Elena move into?",
    "options": [
     "A detached house",
     "A cottage",
     "A block of flats"
    ],
    "answer": 2
   },
   {
    "q": "Who brought a cake on the first day?",
    "options": [
     "The landlady",
     "The mayor",
     "A child"
    ],
    "answer": 0
   },
   {
    "q": "What was the problem a week later?",
    "options": [
     "The heating broke",
     "The flat above was noisy",
     "The lift was broken"
    ],
    "answer": 1
   },
   {
    "q": "What did Elena decide to do about the noise?",
    "options": [
     "Call the police",
     "Go upstairs to introduce herself",
     "Move out"
    ],
    "answer": 1
   },
   {
    "q": "What was the young man practising?",
    "options": [
     "The piano",
     "The violin",
     "The drums"
    ],
    "answer": 2
   },
   {
    "q": "What was the compromise?",
    "options": [
     "He moves house",
     "He plays only in the afternoon",
     "He stops playing"
    ],
    "answer": 1
   },
   {
    "q": "What did Elena lend him?",
    "options": [
     "A drum",
     "A rug",
     "A book"
    ],
    "answer": 1
   },
   {
    "q": "Where did the neighbours organise a party?",
    "options": [
     "In the street",
     "In the garden",
     "At a restaurant"
    ],
    "answer": 1
   },
   {
    "q": "Where did the children play?",
    "options": [
     "On the roof",
     "Near the hedge and the fence",
     "In the lift"
    ],
    "answer": 1
   },
   {
    "q": "Who told stories about the neighbourhood?",
    "options": [
     "The drummer",
     "The old man from the ground floor",
     "The landlady"
    ],
    "answer": 1
   },
   {
    "q": "What did the young drummer do at the party?",
    "options": [
     "Cooked",
     "Played a short song",
     "Left early"
    ],
    "answer": 1
   },
   {
    "q": "What did Elena realise about a good neighbour?",
    "options": [
     "He is ready to talk and to help",
     "He is quiet",
     "He lives close"
    ],
    "answer": 0
   },
   {
    "q": "What did Elena volunteer to do?",
    "options": [
     "Paint the hall",
     "Cook every day",
     "Organise the next party"
    ],
    "answer": 2
   },
   {
    "q": "Who accepted her idea?",
    "options": [
     "Her husband",
     "The landlady",
     "The residents' meeting"
    ],
    "answer": 2
   },
   {
    "q": "What did she bring the landlady?",
    "options": [
     "A letter",
     "A parcel of leftover cake",
     "Flowers"
    ],
    "answer": 1
   }
  ]
 },
 "phone": {
  "title": "A bad day without a phone",
  "paragraphs": [
   "Miguel woke up late. His alarm did not ring because the battery of his mobile was dead. He looked for the charger, but he could not find it. When he finally plugged the phone in, he saw a text message from his boss: \"Call me back as soon as possible.\" Miguel dialled the number, but the line was engaged. He tried again twice, and then he left a message on the voicemail.",
   "On the bus there was no signal, so he could not read his emails. He wanted to forward an important attachment to a client, but his inbox was full of old messages, and he had to delete some. When he got to the office, the switchboard put him through to his boss, who was not happy. \"I called you ten times,\" she said. \"I know,\" Miguel replied. \"I ran out of battery.\"",
   "At lunch, his phone rang with an unknown number. It was a wrong number, and the person hung up quickly. In the afternoon he had to top up his phone, because he had no data left. Miguel decided to buy a new charger and a power bank. He also asked the shop to explain his contract, because he wanted cheaper roaming for his holiday. When he got home, he made a video call to his sister, who laughed at the whole story. \"You depend too much on your phone,\" she said. \"Maybe,\" said Miguel. \"But tomorrow I will wake up on time, with a real alarm clock.\""
  ],
  "questions": [
   {
    "q": "Why did Miguel wake up late?",
    "options": [
     "The battery of his mobile was dead",
     "He was ill",
     "The bus was late"
    ],
    "answer": 0
   },
   {
    "q": "What did he find on his phone?",
    "options": [
     "A bill",
     "A text message from his boss",
     "A missed call from home"
    ],
    "answer": 1
   },
   {
    "q": "Why couldn't he reach his boss at first?",
    "options": [
     "He was asleep",
     "The line was engaged",
     "He had no number"
    ],
    "answer": 1
   },
   {
    "q": "What did he leave?",
    "options": [
     "A letter",
     "A note",
     "A message on the voicemail"
    ],
    "answer": 2
   },
   {
    "q": "Why couldn't he read his emails on the bus?",
    "options": [
     "His eyes hurt",
     "He had no phone",
     "There was no signal"
    ],
    "answer": 2
   },
   {
    "q": "What was full of old messages?",
    "options": [
     "His wallet",
     "His car",
     "His inbox"
    ],
    "answer": 2
   },
   {
    "q": "Who put him through to his boss?",
    "options": [
     "The switchboard",
     "A friend",
     "A client"
    ],
    "answer": 0
   },
   {
    "q": "How many times did his boss call?",
    "options": [
     "Two",
     "Ten",
     "Twenty"
    ],
    "answer": 1
   },
   {
    "q": "What happened at lunch?",
    "options": [
     "He lost his phone",
     "He had a meeting",
     "He got a wrong number"
    ],
    "answer": 2
   },
   {
    "q": "Why did he need to top up his phone?",
    "options": [
     "He had no data left",
     "He had no money",
     "The phone was broken"
    ],
    "answer": 0
   },
   {
    "q": "What did he decide to buy?",
    "options": [
     "A radio",
     "A new phone",
     "A new charger and a power bank"
    ],
    "answer": 2
   },
   {
    "q": "What did he ask the shop about?",
    "options": [
     "His contract and roaming",
     "A cheaper battery",
     "His bill"
    ],
    "answer": 0
   },
   {
    "q": "Who did he call in the evening?",
    "options": [
     "His mother",
     "His boss",
     "His sister"
    ],
    "answer": 2
   },
   {
    "q": "What did his sister say?",
    "options": [
     "He was lucky",
     "He should buy a new phone",
     "He depends too much on his phone"
    ],
    "answer": 2
   },
   {
    "q": "What will he use tomorrow?",
    "options": [
     "A real alarm clock",
     "His watch",
     "His phone"
    ],
    "answer": 0
   }
  ]
 },
 "opinions": {
  "title": "The big discussion",
  "paragraphs": [
   "Last night my friends and I had a long discussion about moving to the countryside. Teresa suggested that life there is cheaper and calmer. In her opinion, the city is stressful, and she would love to have a garden. Jorge disagreed. As far as he is concerned, the city offers better jobs and more activities. He said that the countryside is boring and that the pros do not outweigh the cons.",
   "I tried to see both points of view. I told them that it depends on the person. A young family may prefer a quiet place, but a student needs libraries and cinemas. Teresa insisted that she was right, and Jorge denied that he was being stubborn. Then Sara arrived and proposed a compromise: live in a small town, close to the city. \"On the other hand,\" she said, \"we could keep a flat in the city and have a weekend house in the country.\"",
   "That idea convinced everybody. We agreed that it was reasonable, though a bit expensive. Jorge admitted that he had been unfair to the countryside, and Teresa admitted that city life has some advantages. To be honest, I was not sure myself. I have no doubt that nature is good for people, but I also love the noise of the streets. In the end, we decided to visit a village next weekend. I see what Teresa means, but I want to see it with my own eyes. If we like it, we will persuade our families to join us. If not, at least we will have an interesting day."
  ],
  "questions": [
   {
    "q": "What did the friends discuss?",
    "options": [
     "A holiday abroad",
     "Moving to the countryside",
     "Buying a car"
    ],
    "answer": 1
   },
   {
    "q": "Who thinks the countryside is cheaper and calmer?",
    "options": [
     "Teresa",
     "Sara",
     "Jorge"
    ],
    "answer": 0
   },
   {
    "q": "Who disagreed?",
    "options": [
     "Teresa",
     "Jorge",
     "The narrator"
    ],
    "answer": 1
   },
   {
    "q": "What does Jorge think of the countryside?",
    "options": [
     "It is dangerous",
     "It is boring",
     "It is perfect"
    ],
    "answer": 1
   },
   {
    "q": "What did the narrator try to do?",
    "options": [
     "Leave the discussion",
     "See both points of view",
     "Take sides"
    ],
    "answer": 1
   },
   {
    "q": "Who proposed a compromise?",
    "options": [
     "Teresa",
     "The narrator",
     "Sara"
    ],
    "answer": 2
   },
   {
    "q": "What was the compromise?",
    "options": [
     "Staying where they are",
     "A flat in the city and a weekend house",
     "Moving abroad"
    ],
    "answer": 1
   },
   {
    "q": "What did everybody think of the idea?",
    "options": [
     "It was reasonable",
     "It was impossible",
     "It was ridiculous"
    ],
    "answer": 0
   },
   {
    "q": "What did Jorge admit?",
    "options": [
     "That he was moving",
     "That he had been unfair",
     "That he was wrong about money"
    ],
    "answer": 1
   },
   {
    "q": "What did Teresa admit?",
    "options": [
     "She hates cities",
     "She wants a car",
     "City life has some advantages"
    ],
    "answer": 2
   },
   {
    "q": "What is the narrator's own feeling?",
    "options": [
     "Angry",
     "Certain",
     "Not sure"
    ],
    "answer": 2
   },
   {
    "q": "What will they do next weekend?",
    "options": [
     "Go to the beach",
     "Visit a village",
     "Buy a house"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator love?",
    "options": [
     "The cold",
     "The silence",
     "The noise of the streets"
    ],
    "answer": 2
   },
   {
    "q": "What will they do if they like the village?",
    "options": [
     "Buy a boat",
     "Leave the city at once",
     "Persuade their families to join"
    ],
    "answer": 2
   },
   {
    "q": "What if they don't like it?",
    "options": [
     "They will argue",
     "They will have had an interesting day",
     "They will stay there"
    ],
    "answer": 1
   }
  ]
 },
 "repairs": {
  "title": "A weekend of repairs",
  "paragraphs": [
   "Last weekend, Nuno and his wife decided to fix their old house. First, they noticed a leak under the kitchen sink. Water was dripping slowly and the cupboard was damp. Nuno opened the toolbox, took a spanner and a screwdriver, and tried to tighten the pipe. It did not work, so they called a plumber, who arrived within an hour. He replaced a broken part and gave them a quote for the work.",
   "After lunch, they painted the living room. Nuno climbed a ladder, and his wife handed him the brush. The wall had a crack, so they covered it with filler and sandpaper before painting. Then a fuse blew and all the lights went out. Nuno found the fuse box in the hall and changed the fuse. A socket near the window was loose, so he called an electrician for the next day.",
   "On Sunday they hung some pictures. Nuno used a drill and a hammer, but he hit his thumb with the hammer and shouted. His wife laughed and brought a bandage. In the afternoon they went to the shop to buy glue, nails and a new radiator, because the old one was cold. The assistant explained that the radiator had a five-year guarantee. By the evening, the house looked much better. \"I never knew how many things can break in a house,\" said Nuno. \"Next time, we hire a handyman.\" His wife smiled, but she knew that he would try to do it himself again."
  ],
  "questions": [
   {
    "q": "What did Nuno notice first?",
    "options": [
     "A leak under the sink",
     "A broken window",
     "A hole in the roof"
    ],
    "answer": 0
   },
   {
    "q": "Which tools did he take?",
    "options": [
     "A spanner and a screwdriver",
     "A hammer and nails",
     "A drill and a ladder"
    ],
    "answer": 0
   },
   {
    "q": "Who arrived within an hour?",
    "options": [
     "A plumber",
     "An electrician",
     "A neighbour"
    ],
    "answer": 0
   },
   {
    "q": "What did the plumber give them?",
    "options": [
     "A gift",
     "A quote for the work",
     "A bill"
    ],
    "answer": 1
   },
   {
    "q": "What did they do after lunch?",
    "options": [
     "Slept",
     "Painted the living room",
     "Cooked dinner"
    ],
    "answer": 1
   },
   {
    "q": "What did they use to cover the crack?",
    "options": [
     "Wallpaper",
     "Paint only",
     "Filler and sandpaper"
    ],
    "answer": 2
   },
   {
    "q": "What happened next?",
    "options": [
     "The door broke",
     "A fuse blew",
     "The roof fell"
    ],
    "answer": 1
   },
   {
    "q": "What was loose?",
    "options": [
     "A window",
     "A socket",
     "A chair"
    ],
    "answer": 1
   },
   {
    "q": "Who will repair the socket?",
    "options": [
     "His wife",
     "An electrician",
     "Nuno"
    ],
    "answer": 1
   },
   {
    "q": "What did Nuno use to hang the pictures?",
    "options": [
     "A drill and a hammer",
     "Glue",
     "Tape"
    ],
    "answer": 0
   },
   {
    "q": "What did Nuno hit?",
    "options": [
     "His thumb",
     "A window",
     "The wall"
    ],
    "answer": 0
   },
   {
    "q": "What did his wife bring?",
    "options": [
     "A bandage",
     "Ice",
     "Water"
    ],
    "answer": 0
   },
   {
    "q": "Why did they go to the shop?",
    "options": [
     "To buy glue, nails and a radiator",
     "To buy furniture",
     "To buy paint"
    ],
    "answer": 0
   },
   {
    "q": "What guarantee did the radiator have?",
    "options": [
     "One year",
     "None",
     "Five years"
    ],
    "answer": 2
   },
   {
    "q": "What did Nuno say about hiring someone?",
    "options": [
     "He loves doing it",
     "It is cheap",
     "Next time, we hire a handyman"
    ],
    "answer": 2
   }
  ]
 },
 "money": {
  "title": "Learning about money",
  "paragraphs": [
   "When Beatriz was fifteen, her father gave her pocket money every Friday. At first, she spent everything on sweets and magazines. After a month, she was always broke. \"I can't afford to buy the shoes I want,\" she complained. Her father smiled and said that she had to make a budget.",
   "So Beatriz opened a bank account. She learned to read her balance and to withdraw cash from the cash machine, using her PIN. The bank paid a small interest on her savings. She also learned that a debit card is different from a credit card: with the first you spend your own money, but with the second you owe money to the bank. She always kept every receipt, because her mother taught her that it is useful if something is faulty.",
   "At the market, she discovered how to haggle. She asked the seller for a discount on a jacket, and he lowered the price by five euros. She also found that cheap does not always mean good, and that an expensive thing is not always worth it. Her cousin, who was a spendthrift, borrowed money from her and did not pay it back for months. From that experience she learned never to lend more than she could lose. By the end of the year, Beatriz had saved enough for the shoes. \"The best thing I learned,\" she said, \"is not how to save money. It is how to decide what is really important.\" Her father was very proud."
  ],
  "questions": [
   {
    "q": "What did Beatriz's father give her every Friday?",
    "options": [
     "A gift",
     "A book",
     "Pocket money"
    ],
    "answer": 2
   },
   {
    "q": "What did she do with the money at first?",
    "options": [
     "Lent it",
     "Saved it",
     "Spent it on sweets and magazines"
    ],
    "answer": 2
   },
   {
    "q": "What was she after a month?",
    "options": [
     "Rich",
     "Happy",
     "Broke"
    ],
    "answer": 2
   },
   {
    "q": "What did her father tell her to make?",
    "options": [
     "A list",
     "A cake",
     "A budget"
    ],
    "answer": 2
   },
   {
    "q": "What did she open?",
    "options": [
     "A shop",
     "A bank account",
     "A school"
    ],
    "answer": 1
   },
   {
    "q": "How did she get cash?",
    "options": [
     "From her father",
     "From the cash machine, with her PIN",
     "From a friend"
    ],
    "answer": 1
   },
   {
    "q": "What does the bank pay on savings?",
    "options": [
     "A small interest",
     "Nothing",
     "A lot of money"
    ],
    "answer": 0
   },
   {
    "q": "What is the difference between debit and credit cards?",
    "options": [
     "With debit you owe the bank",
     "With credit you owe the bank",
     "There is none"
    ],
    "answer": 1
   },
   {
    "q": "Why did she keep every receipt?",
    "options": [
     "She liked them",
     "They were free",
     "It is useful if something is faulty"
    ],
    "answer": 2
   },
   {
    "q": "What did she learn at the market?",
    "options": [
     "How to count",
     "How to haggle",
     "How to cook"
    ],
    "answer": 1
   },
   {
    "q": "How much did the seller lower the price?",
    "options": [
     "Fifty euros",
     "Nothing",
     "Five euros"
    ],
    "answer": 2
   },
   {
    "q": "What did she learn about cheap things?",
    "options": [
     "They are always bad",
     "They are always good",
     "Cheap does not always mean good"
    ],
    "answer": 2
   },
   {
    "q": "Who was a spendthrift?",
    "options": [
     "Her cousin",
     "Her mother",
     "Her father"
    ],
    "answer": 0
   },
   {
    "q": "What did she learn from lending money?",
    "options": [
     "Never lend more than you can lose",
     "Never save",
     "Always lend money"
    ],
    "answer": 0
   },
   {
    "q": "What did she save enough for?",
    "options": [
     "The shoes",
     "A trip",
     "A phone"
    ],
    "answer": 0
   }
  ]
 },
 "plans": {
  "title": "A busy week",
  "paragraphs": [
   "Sofia's week is very busy. On Monday she has an appointment at the dentist's at nine. On Tuesday she has a deadline at work, so she must send a report as soon as possible. She wrote everything in her agenda and set a reminder on her phone. She is punctual, so she never wants to be late. Last month, however, she overslept because her alarm clock did not ring, and she was an hour late for a meeting.",
   "On Wednesday she was going to have lunch with her friend Inês, but Inês had to postpone it because of an urgent problem. They rescheduled for Friday. Sofia was disappointed but understood. She does not like to waste time, so she used the free hour to organise her desk. On Thursday, there is a train strike, so she has to leave home early. She checked the timetable and booked a taxi in advance.",
   "Saturday is her day off. She does not want to plan anything. She wants to stay in bed, read a magazine and watch a film. \"I am too busy in the week,\" she says. \"In my spare time I like to do nothing.\" On Sunday she will call her parents and arrange a family lunch. She will also check her itinerary for next month's trip, because she hates last-minute surprises. If she is available, she will join a hiking group. If not, she will relax. Sofia knows that a good schedule is a mixture of work, friends and rest. It is not easy, but she is learning to arrange her time well."
  ],
  "questions": [
   {
    "q": "What does Sofia have on Monday?",
    "options": [
     "A job interview",
     "An appointment at the dentist's",
     "A trip"
    ],
    "answer": 1
   },
   {
    "q": "What is on Tuesday?",
    "options": [
     "A deadline at work",
     "A party",
     "A holiday"
    ],
    "answer": 0
   },
   {
    "q": "Where did she write everything?",
    "options": [
     "In a book",
     "In her agenda",
     "On the wall"
    ],
    "answer": 1
   },
   {
    "q": "Why was she late last month?",
    "options": [
     "She was ill",
     "The train was late",
     "She overslept"
    ],
    "answer": 2
   },
   {
    "q": "Who postponed lunch on Wednesday?",
    "options": [
     "Inês",
     "Her boss",
     "Sofia"
    ],
    "answer": 0
   },
   {
    "q": "When did they reschedule?",
    "options": [
     "Sunday",
     "Friday",
     "Monday"
    ],
    "answer": 1
   },
   {
    "q": "What did Sofia do with the free hour?",
    "options": [
     "Slept",
     "Organised her desk",
     "Went shopping"
    ],
    "answer": 1
   },
   {
    "q": "Why must she leave home early on Thursday?",
    "options": [
     "There is a train strike",
     "It is her birthday",
     "She has a meeting"
    ],
    "answer": 0
   },
   {
    "q": "What did she do for the strike?",
    "options": [
     "Booked a taxi in advance",
     "Walked",
     "Stayed home"
    ],
    "answer": 0
   },
   {
    "q": "What is Saturday for Sofia?",
    "options": [
     "A working day",
     "Her day off",
     "A party day"
    ],
    "answer": 1
   },
   {
    "q": "What does she want to do on Saturday?",
    "options": [
     "Nothing special",
     "Work",
     "Travel"
    ],
    "answer": 0
   },
   {
    "q": "Who will she call on Sunday?",
    "options": [
     "Her boss",
     "Her friend Inês",
     "Her parents"
    ],
    "answer": 2
   },
   {
    "q": "What will she check on Sunday?",
    "options": [
     "Her bank",
     "Her timetable",
     "Her itinerary"
    ],
    "answer": 2
   },
   {
    "q": "What does she hate?",
    "options": [
     "Early mornings",
     "Rain",
     "Last-minute surprises"
    ],
    "answer": 2
   },
   {
    "q": "What is a good schedule, she says?",
    "options": [
     "Only rest",
     "Only work",
     "A mixture of work, friends and rest"
    ],
    "answer": 2
   }
  ]
 },
 "health": {
  "title": "At the doctor",
  "paragraphs": [
   "Last Monday, Luis does not feel well. He has a terrible headache, a cough and a fever. He thinks it is the flu, so he calls the hospital and makes an appointment. At ten o'clock he goes to see the doctor. The doctor is a young woman. She says, \"Hello, Luis. What is the problem?\" Luis sits down and says, \"I feel sick, and I have a pain in my back.\" He is a little afraid, because he never goes to the doctor.",
   "The doctor checks his temperature and listens to his heart. She also asks, \"Do you have any other symptoms?\" He says, \"My leg hurts when I walk.\" She says, \"You have the flu. You need to rest and drink a lot of water. Take this medicine three times a day and one tablet after lunch. Do not go to work this week.\" She also takes a little blood for a test, because Luis is very tired.",
   "Luis goes to the pharmacy and buys the medicine. He stays in bed for three days. His wife brings him soup and tea. On Thursday he feels better. The doctor calls and says, \"The test is fine. A healthy life is important: eat fruit, do exercise and visit the dentist twice a year.\" Luis promises to change. In an emergency, he knows that he can call an ambulance: the number is 112. After one week he is a happy and healthy man again."
  ],
  "questions": [
   {
    "q": "What is Luis's problem?",
    "options": [
     "He is only tired",
     "He has a broken leg",
     "He has the flu"
    ],
    "answer": 2
   },
   {
    "q": "What does Luis do first?",
    "options": [
     "He goes to the pharmacy",
     "He makes an appointment",
     "He calls the dentist"
    ],
    "answer": 1
   },
   {
    "q": "What does the doctor say Luis needs to do?",
    "options": [
     "Go to work",
     "Rest and drink water",
     "Run every day"
    ],
    "answer": 1
   },
   {
    "q": "Where does Luis buy the medicine?",
    "options": [
     "At the market",
     "At the hospital",
     "At the pharmacy"
    ],
    "answer": 2
   },
   {
    "q": "What is the emergency number in the story?",
    "options": [
     "911",
     "999",
     "112"
    ],
    "answer": 2
   },
   {
    "q": "When does the story start?",
    "options": [
     "Last Friday",
     "Last Monday",
     "Yesterday"
    ],
    "answer": 1
   },
   {
    "q": "What symptoms does Luis have?",
    "options": [
     "A broken leg",
     "A toothache",
     "A headache, a cough and a fever"
    ],
    "answer": 2
   },
   {
    "q": "What time is the appointment?",
    "options": [
     "Noon",
     "Ten o'clock",
     "Nine o'clock"
    ],
    "answer": 1
   },
   {
    "q": "What is the doctor like?",
    "options": [
     "A young woman",
     "An old man",
     "A nurse"
    ],
    "answer": 0
   },
   {
    "q": "Why is Luis a little afraid?",
    "options": [
     "He is alone",
     "He hates medicine",
     "He never goes to the doctor"
    ],
    "answer": 2
   },
   {
    "q": "What hurts when he walks?",
    "options": [
     "His arm",
     "His leg",
     "His head"
    ],
    "answer": 1
   },
   {
    "q": "Why does the doctor take a little blood?",
    "options": [
     "Luis is very tired",
     "He has a rash",
     "It is a rule"
    ],
    "answer": 0
   },
   {
    "q": "How long does Luis stay in bed?",
    "options": [
     "One week",
     "One day",
     "Three days"
    ],
    "answer": 2
   },
   {
    "q": "Who brings him soup and tea?",
    "options": [
     "His wife",
     "His mother",
     "The nurse"
    ],
    "answer": 0
   },
   {
    "q": "What advice does the doctor give about the dentist?",
    "options": [
     "Go every week",
     "Never go",
     "Visit the dentist twice a year"
    ],
    "answer": 2
   }
  ]
 },
 "shopping": {
  "title": "Saturday shopping",
  "paragraphs": [
   "On Saturday morning Rita goes shopping at the supermarket. First she makes a list: bread, fruit, milk, fish and rice. She takes a basket and a trolley. The supermarket is big and it is very busy. There is a long queue at the checkout, but the cashier is fast. Rita buys everything on her list, and she also buys a cake because there is a special offer. She is careful with money, so she always looks at the price.",
   "After the supermarket she goes to the market, which is open until two o'clock. She wants fresh fish and vegetables. The man says, \"These vegetables are very fresh, and I sell them at a good price.\" Rita chooses carrots, onions and a lettuce. Her bags are heavy, so she asks for delivery. The delivery is free, and the driver comes at four o'clock in the afternoon.",
   "In the afternoon Rita goes to a department store because there is a sale. A famous brand of shoes has a big discount. She buys a pair, and she pays online with her card. At home the shoes are too small, so on Monday she wants to return them and ask for a refund. The shop is closed on Sunday, so she waits. \"Shopping is fun,\" says Rita, \"but I never have enough time!\" She keeps the receipt in her bag."
  ],
  "questions": [
   {
    "q": "What does Rita write before the supermarket?",
    "options": [
     "A letter",
     "An email",
     "A list"
    ],
    "answer": 2
   },
   {
    "q": "Why does she buy a cake?",
    "options": [
     "There is a special offer",
     "It is her birthday",
     "It is cheap"
    ],
    "answer": 0
   },
   {
    "q": "Why does she ask for delivery?",
    "options": [
     "Her bags are heavy",
     "She is tired",
     "She does not have a car"
    ],
    "answer": 0
   },
   {
    "q": "Why does she want to return the shoes?",
    "options": [
     "They are too small",
     "They are dirty",
     "They are expensive"
    ],
    "answer": 0
   },
   {
    "q": "When is the shop closed?",
    "options": [
     "On Friday",
     "On Sunday",
     "On Monday"
    ],
    "answer": 1
   },
   {
    "q": "What is on Rita's list?",
    "options": [
     "Bread, fruit, milk, fish and rice",
     "Clothes",
     "Meat and vegetables"
    ],
    "answer": 0
   },
   {
    "q": "What does she take in the supermarket?",
    "options": [
     "A bag only",
     "A basket and a trolley",
     "A list only"
    ],
    "answer": 1
   },
   {
    "q": "How is the supermarket?",
    "options": [
     "Big and very busy",
     "Small and quiet",
     "Closed"
    ],
    "answer": 0
   },
   {
    "q": "What is the cashier like?",
    "options": [
     "Rude",
     "Slow",
     "Fast"
    ],
    "answer": 2
   },
   {
    "q": "Until what time is the market open?",
    "options": [
     "Four o'clock",
     "Six o'clock",
     "Two o'clock"
    ],
    "answer": 2
   },
   {
    "q": "What does Rita want at the market?",
    "options": [
     "Cake",
     "Shoes",
     "Fresh fish and vegetables"
    ],
    "answer": 2
   },
   {
    "q": "What does she choose at the market?",
    "options": [
     "Carrots, onions and a lettuce",
     "Bread and milk",
     "Fish and rice"
    ],
    "answer": 0
   },
   {
    "q": "When does the delivery driver come?",
    "options": [
     "At four o'clock",
     "At two o'clock",
     "At noon"
    ],
    "answer": 0
   },
   {
    "q": "What does she buy in the afternoon?",
    "options": [
     "A pair of shoes",
     "A bag",
     "A coat"
    ],
    "answer": 0
   },
   {
    "q": "What does she say about shopping?",
    "options": [
     "It is boring",
     "It is expensive",
     "It is fun but she never has enough time"
    ],
    "answer": 2
   }
  ]
 },
 "hobbies": {
  "title": "My free time",
  "paragraphs": [
   "In my free time I have many hobbies. My favourite is sport. I play football with my team every Sunday. We have a match at ten o'clock, and sometimes we win and sometimes we lose. During the week I go to the gym three times and I run in the park. I also like tennis and basketball, but I am not very good. My friends say that I am a funny player, because I always laugh when I lose the ball.",
   "I love music too. I play the guitar, and my sister plays the piano. We sing together on Saturday night. I also draw: I draw animals and flowers. My brother collects old coins, and my father plays chess. My mother takes photos of everything. In the summer we swim in the sea and we cycle on the beach. It is a very good way to be together, and we always have fun.",
   "At home, we play games on the computer. I do not play all day, because I think it is better to do sport. Sport is fun, and it is good for the body. When I have free time, I want to learn to dance, because my girlfriend loves it. Hobbies make life interesting and they help me to relax after a long week at school. What are your hobbies? Do you play any sport?"
  ],
  "questions": [
   {
    "q": "When does the narrator play football?",
    "options": [
     "Every Sunday",
     "Every Friday",
     "Every day"
    ],
    "answer": 0
   },
   {
    "q": "What instrument does the narrator play?",
    "options": [
     "The guitar",
     "The piano",
     "The violin"
    ],
    "answer": 0
   },
   {
    "q": "What does the brother collect?",
    "options": [
     "Games",
     "Old coins",
     "Photos"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator do in summer?",
    "options": [
     "Plays chess",
     "Only draws",
     "Swims in the sea and cycles"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator want to learn?",
    "options": [
     "To play golf",
     "To dance",
     "To sing"
    ],
    "answer": 1
   },
   {
    "q": "What is the narrator's favourite hobby?",
    "options": [
     "Music",
     "Drawing",
     "Sport"
    ],
    "answer": 2
   },
   {
    "q": "At what time is the Sunday match?",
    "options": [
     "Ten o'clock",
     "Nine o'clock",
     "Two o'clock"
    ],
    "answer": 0
   },
   {
    "q": "How many times a week does the narrator go to the gym?",
    "options": [
     "One",
     "Three",
     "Five"
    ],
    "answer": 1
   },
   {
    "q": "Where does the narrator run?",
    "options": [
     "On the beach",
     "At home",
     "In the park"
    ],
    "answer": 2
   },
   {
    "q": "Why do friends say he is a funny player?",
    "options": [
     "He shouts",
     "He laughs when he loses the ball",
     "He falls a lot"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator's sister play?",
    "options": [
     "The violin",
     "The guitar",
     "The piano"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator draw?",
    "options": [
     "Animals and flowers",
     "Houses",
     "Cars"
    ],
    "answer": 0
   },
   {
    "q": "What does the father play?",
    "options": [
     "Tennis",
     "Cards",
     "Chess"
    ],
    "answer": 2
   },
   {
    "q": "What does the mother take photos of?",
    "options": [
     "Everything",
     "Only the family",
     "Only animals"
    ],
    "answer": 0
   },
   {
    "q": "Why does the narrator want to learn to dance?",
    "options": [
     "It is easy",
     "His girlfriend loves it",
     "It is cheap"
    ],
    "answer": 1
   }
  ]
 },
 "sports": {
  "title": "Sports day",
  "paragraphs": [
   "Today is sports day at the school, and everybody is excited. The coach says, \"We have training at nine and the races start at ten.\" There are many sports: volleyball, rugby, tennis, golf on the grass and swimming in the pool. The pupils wear colourful shirts. The supporters, parents and friends, come with flags and big smiles. The sun is shining, and it is the perfect day for sport.",
   "In the volleyball match, the team in blue plays the team in red. The ball is fast. Pedro throws the ball, Marta jumps and hits it, and Ana catches it. The referee shouts, \"Point!\" The score is two to one for the blue team. In the football match a boy kicks the ball very hard, and it is a great goal! Everybody cheers. In the pool the swimming race is close, and the winner is only one second faster.",
   "In the afternoon there is a big race of one hundred metres. The champion is Tiago. He wins the gold medal, and the coach is very proud. His mother says, \"He has training every day.\" In winter this school also goes skiing, and in summer there is a day for sailing and for surfing. Some pupils skate in the park after school, and others want to climb the mountain on Saturday. Sport is a great way to make friends, and everybody goes home happy and tired."
  ],
  "questions": [
   {
    "q": "Who says \"We have training at nine\"?",
    "options": [
     "The referee",
     "The coach",
     "The champion"
    ],
    "answer": 1
   },
   {
    "q": "What is the score in the volleyball match?",
    "options": [
     "Zero to zero",
     "Three to one",
     "Two to one"
    ],
    "answer": 2
   },
   {
    "q": "Who wins the gold medal?",
    "options": [
     "Pedro",
     "Ana",
     "Tiago"
    ],
    "answer": 2
   },
   {
    "q": "What does a boy do in the football match?",
    "options": [
     "He hits a racket",
     "He catches the ball",
     "He kicks the ball and scores a great goal"
    ],
    "answer": 2
   },
   {
    "q": "What do some pupils want to do on Saturday?",
    "options": [
     "Go sailing",
     "Climb the mountain",
     "Play golf"
    ],
    "answer": 1
   },
   {
    "q": "What time do the races start?",
    "options": [
     "Nine o'clock",
     "Noon",
     "Ten o'clock"
    ],
    "answer": 2
   },
   {
    "q": "What do the pupils wear?",
    "options": [
     "Uniforms",
     "Suits",
     "Colourful shirts"
    ],
    "answer": 2
   },
   {
    "q": "Who comes with flags?",
    "options": [
     "The coach",
     "The supporters",
     "The referee"
    ],
    "answer": 1
   },
   {
    "q": "Which team plays the blue team?",
    "options": [
     "The red team",
     "The white team",
     "The green team"
    ],
    "answer": 0
   },
   {
    "q": "What does the referee shout?",
    "options": [
     "Goal!",
     "Stop!",
     "Point!"
    ],
    "answer": 2
   },
   {
    "q": "What happens in the swimming race?",
    "options": [
     "It is cancelled",
     "Nobody wins",
     "The winner is one second faster"
    ],
    "answer": 2
   },
   {
    "q": "How long is the big race?",
    "options": [
     "Ten kilometres",
     "One hundred metres",
     "Fifty metres"
    ],
    "answer": 1
   },
   {
    "q": "What does Tiago's mother say?",
    "options": [
     "He is tired",
     "He is lucky",
     "He has training every day"
    ],
    "answer": 2
   },
   {
    "q": "What does the school do in winter?",
    "options": [
     "Goes surfing",
     "Goes skiing",
     "Goes sailing"
    ],
    "answer": 1
   },
   {
    "q": "What does the school do in summer?",
    "options": [
     "Goes skiing",
     "Has a day for sailing and surfing",
     "Plays only football"
    ],
    "answer": 1
   }
  ]
 },
 "travel": {
  "title": "A trip to London",
  "paragraphs": [
   "Maria loves to travel, and next month she has a trip to London. First she books a flight online and a room in a hotel near the centre. Then she checks her passport, because it is old. She does not need a visa, but she needs a good map and a guide. She makes a list of things for the trip: clothes, an umbrella and a small camera. The night before, she packs everything into a suitcase, but the luggage is too heavy.",
   "At the airport she shows her passport and her boarding pass. The woman at the desk says, \"Your gate is number twelve.\" But there is a delay, and the plane leaves one hour late. Maria waits and reads a book. During the flight she looks at the clouds, and she is happy. When she arrives in London, she goes to customs, and then she takes the underground to the hotel. The reception is very nice, and she gets her key.",
   "In London she goes sightseeing with a guide, and she meets tourists from many countries. She visits a museum, a big bridge and a castle. In a small shop she buys a souvenir for her mother. She also speaks English with foreign people, and she is proud of her English. After one week she goes back home. Maria says, \"A journey is not only a trip. It is also a lesson.\" She wants to travel abroad again next year."
  ],
  "questions": [
   {
    "q": "How does Maria book the flight and the hotel?",
    "options": [
     "Online",
     "By post",
     "At the airport"
    ],
    "answer": 0
   },
   {
    "q": "Why is her luggage a problem?",
    "options": [
     "It is lost",
     "It is open",
     "It is too heavy"
    ],
    "answer": 2
   },
   {
    "q": "What happens at the airport?",
    "options": [
     "She loses her passport",
     "The flight is cancelled",
     "There is a delay"
    ],
    "answer": 2
   },
   {
    "q": "Who goes with Maria sightseeing?",
    "options": [
     "Her mother",
     "A guide",
     "A friend"
    ],
    "answer": 1
   },
   {
    "q": "What does Maria buy for her mother?",
    "options": [
     "A hat",
     "A souvenir",
     "A book"
    ],
    "answer": 1
   },
   {
    "q": "Where does Maria want to go?",
    "options": [
     "To Paris",
     "To Madrid",
     "To London"
    ],
    "answer": 2
   },
   {
    "q": "Where is her hotel?",
    "options": [
     "Near the centre",
     "Near the sea",
     "Near the airport"
    ],
    "answer": 0
   },
   {
    "q": "Why does she check her passport?",
    "options": [
     "It is old",
     "She lost it",
     "It is new"
    ],
    "answer": 0
   },
   {
    "q": "What does Maria not need?",
    "options": [
     "A map",
     "A passport",
     "A visa"
    ],
    "answer": 2
   },
   {
    "q": "What does she put on her list?",
    "options": [
     "A tent",
     "Clothes, an umbrella and a small camera",
     "A bicycle"
    ],
    "answer": 1
   },
   {
    "q": "What is the gate number?",
    "options": [
     "Twenty",
     "Five",
     "Twelve"
    ],
    "answer": 2
   },
   {
    "q": "How late does the plane leave?",
    "options": [
     "Two hours",
     "One hour",
     "Ten minutes"
    ],
    "answer": 1
   },
   {
    "q": "What does she do while she waits?",
    "options": [
     "Reads a book",
     "Sleeps",
     "Calls her mother"
    ],
    "answer": 0
   },
   {
    "q": "What does Maria visit in London?",
    "options": [
     "A farm",
     "A museum, a big bridge and a castle",
     "A beach"
    ],
    "answer": 1
   },
   {
    "q": "What does Maria say a journey is?",
    "options": [
     "Also a lesson",
     "A problem",
     "Only a holiday"
    ],
    "answer": 0
   }
  ]
 },
 "technology": {
  "title": "A day with technology",
  "paragraphs": [
   "Rui uses technology every day. In the morning his phone is his alarm clock, and it has a good battery. He looks at his messages and at the news on a website. Then he sends a message to his friends and to his mother. At the office he turns on his laptop. He has a big screen and a new keyboard. He needs a password to enter, and it is a long one because he does not want problems with his files.",
   "At lunch he searches for a restaurant on the internet, and he downloads an app to see the menu. There is free wifi, so he uses his phone and watches a video about English. After lunch he calls a customer and sends a long email. The printer is old and slow, but it works. Rui clicks on the file and prints a page. He says, \"Technology helps me, but it is not always easy.\"",
   "In the evening his battery is low, so he charges his phone. He uses social media to talk to his friends, and he puts a photo online. His camera is very good. Before he goes to sleep, he updates his phone, and he turns off the screen. He listens to music with his headphones. Rui says, \"I love technology, but I also need time without a screen. At night I read a book, and it is a real book, with paper.\""
  ],
  "questions": [
   {
    "q": "What does Rui use as an alarm clock?",
    "options": [
     "A radio",
     "A clock",
     "His phone"
    ],
    "answer": 2
   },
   {
    "q": "Why is his password long?",
    "options": [
     "His boss asks for it",
     "He wants no problems with his files",
     "It is easy"
    ],
    "answer": 1
   },
   {
    "q": "What does Rui download at lunch?",
    "options": [
     "A film",
     "A song",
     "An app"
    ],
    "answer": 2
   },
   {
    "q": "What is old and slow?",
    "options": [
     "The printer",
     "The laptop",
     "The phone"
    ],
    "answer": 0
   },
   {
    "q": "What does Rui do at night?",
    "options": [
     "He reads a real book",
     "He plays games",
     "He uses social media all night"
    ],
    "answer": 0
   },
   {
    "q": "What does Rui check on his phone in the morning?",
    "options": [
     "His photos",
     "His emails only",
     "His messages and the news"
    ],
    "answer": 2
   },
   {
    "q": "Who does he send a message to?",
    "options": [
     "His boss",
     "His friends and his mother",
     "A customer"
    ],
    "answer": 1
   },
   {
    "q": "What does Rui turn on at the office?",
    "options": [
     "His laptop",
     "His phone",
     "The printer"
    ],
    "answer": 0
   },
   {
    "q": "What does the laptop have?",
    "options": [
     "A broken keyboard",
     "A small screen",
     "A big screen and a new keyboard"
    ],
    "answer": 2
   },
   {
    "q": "What does Rui search for at lunch?",
    "options": [
     "A restaurant",
     "A film",
     "A book"
    ],
    "answer": 0
   },
   {
    "q": "What does he watch on his phone?",
    "options": [
     "A video about English",
     "A football match",
     "A film"
    ],
    "answer": 0
   },
   {
    "q": "Why does Rui say technology is not always easy?",
    "options": [
     "It is expensive",
     "Sometimes there are problems",
     "It is old"
    ],
    "answer": 1
   },
   {
    "q": "What does Rui do in the evening because the battery is low?",
    "options": [
     "Charges his phone",
     "Buys a new phone",
     "Turns it off"
    ],
    "answer": 0
   },
   {
    "q": "What does he listen to with his headphones?",
    "options": [
     "Music",
     "The news",
     "A lesson"
    ],
    "answer": 0
   },
   {
    "q": "What does Rui read at night?",
    "options": [
     "A real book with paper",
     "A tablet",
     "A magazine"
    ],
    "answer": 0
   }
  ]
 },
 "appliances": {
  "title": "Life in our kitchen",
  "paragraphs": [
   "In the kitchen of the Costa family there are many appliances. There is a cooker with an oven, a big fridge and a microwave. In the morning Mrs Costa turns on the kettle, and she makes tea. Her husband puts bread in the toaster. The children want some warm milk, so they use the microwave. Mr Costa says, \"I love my toaster, but I hate it when the bread is black.\"",
   "After breakfast Mrs Costa puts the plates in the dishwasher and the clothes in the washing machine. She also uses the vacuum cleaner and the iron on Saturday. The hairdryer is in the bathroom, and the television is in the living room. In winter they turn on the heating, and in summer they use a fan or the air conditioning. The clock on the wall is old, but it works. Every morning the alarm clock rings at seven.",
   "One evening there is no electricity. The light bulb in the kitchen is off, and the television is off too. Mr Costa looks for the switch, but nothing happens. He takes a plug and puts it in a different socket. Still nothing! They call a man, and he repairs the problem in ten minutes. Then everybody laughs. Mrs Costa says, \"We have many appliances, but we also need to talk, and the best moment is dinner time without the television!\" The remote control is on the sofa."
  ],
  "questions": [
   {
    "q": "What does Mrs Costa turn on in the morning?",
    "options": [
     "The kettle",
     "The oven",
     "The fan"
    ],
    "answer": 0
   },
   {
    "q": "What do the children use for warm milk?",
    "options": [
     "The cooker",
     "The kettle",
     "The microwave"
    ],
    "answer": 2
   },
   {
    "q": "What appliance rings at seven?",
    "options": [
     "The telephone",
     "The alarm clock",
     "The television"
    ],
    "answer": 1
   },
   {
    "q": "What happens one evening?",
    "options": [
     "There is no electricity",
     "The washing machine breaks",
     "The fridge is full"
    ],
    "answer": 0
   },
   {
    "q": "Who repairs the problem?",
    "options": [
     "Mr Costa",
     "Mrs Costa",
     "A man"
    ],
    "answer": 2
   },
   {
    "q": "What is in the Costa kitchen?",
    "options": [
     "A television",
     "A cooker, an oven, a fridge and a microwave",
     "A washing machine only"
    ],
    "answer": 1
   },
   {
    "q": "Who puts bread in the toaster?",
    "options": [
     "Mrs Costa",
     "The children",
     "Mr Costa"
    ],
    "answer": 2
   },
   {
    "q": "What does Mr Costa hate?",
    "options": [
     "The microwave",
     "The kettle",
     "When the bread is black"
    ],
    "answer": 2
   },
   {
    "q": "What does Mrs Costa put in the washing machine?",
    "options": [
     "The plates",
     "The bread",
     "The clothes"
    ],
    "answer": 2
   },
   {
    "q": "What does she use on Saturday?",
    "options": [
     "The vacuum cleaner and the iron",
     "The fan",
     "The hairdryer"
    ],
    "answer": 0
   },
   {
    "q": "Where is the hairdryer?",
    "options": [
     "In the bathroom",
     "In the living room",
     "In the kitchen"
    ],
    "answer": 0
   },
   {
    "q": "What do they use in summer?",
    "options": [
     "The oven",
     "The heating",
     "A fan or the air conditioning"
    ],
    "answer": 2
   },
   {
    "q": "What does Mr Costa look for when there is no electricity?",
    "options": [
     "The remote control",
     "The plug",
     "The switch"
    ],
    "answer": 2
   },
   {
    "q": "How long does the man take to repair the problem?",
    "options": [
     "One day",
     "One hour",
     "Ten minutes"
    ],
    "answer": 2
   },
   {
    "q": "Where is the remote control at the end?",
    "options": [
     "On the sofa",
     "On the table",
     "In the kitchen"
    ],
    "answer": 0
   }
  ]
 },
 "professions": {
  "title": "Jobs in my family",
  "paragraphs": [
   "My family has many different jobs. My father is a driver, and he drives a big lorry from Porto to Madrid. He is a quiet and honest man. My mother is a hairdresser, and she has a small shop in our street. Her customers are very friendly, and everybody says that she is the best in town. My brother is a programmer. He works at home on a computer and he never wears a tie.",
   "My sister is an engineer in a big factory. She is clever and she wants to be a manager one day. My uncle is a farmer, and he has many sheep. My aunt is a baker, and she makes fresh bread every morning at five. My cousin is a mechanic, and he fixes cars in a garage. My grandfather is retired, and he is also a good singer. At parties he always sings a song.",
   "I am still a student, but I have a dream. I want to be a pilot, an artist or a writer. My teacher says, \"A good journalist, an actor or a lawyer needs a good education too.\" I think she is right. My friend wants to be a firefighter and my other friend wants to be a police officer. Which job do you want? In my family, every job is important, and every person is happy with their work."
  ],
  "questions": [
   {
    "q": "What does the narrator's father drive?",
    "options": [
     "A lorry",
     "A bus",
     "A taxi"
    ],
    "answer": 0
   },
   {
    "q": "What is the mother's job?",
    "options": [
     "Hairdresser",
     "Baker",
     "Engineer"
    ],
    "answer": 0
   },
   {
    "q": "Who works at home on a computer?",
    "options": [
     "The father",
     "The brother",
     "The uncle"
    ],
    "answer": 1
   },
   {
    "q": "What does the aunt do at five every morning?",
    "options": [
     "She goes to the farm",
     "She makes fresh bread",
     "She drives a lorry"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator want to be?",
    "options": [
     "A mechanic",
     "A pilot, an artist or a writer",
     "A farmer"
    ],
    "answer": 1
   },
   {
    "q": "Where does the father drive his lorry?",
    "options": [
     "From Faro to Porto",
     "From Porto to Madrid",
     "From Lisbon to Paris"
    ],
    "answer": 1
   },
   {
    "q": "What is the father like?",
    "options": [
     "Quiet and honest",
     "Strict and angry",
     "Loud and funny"
    ],
    "answer": 0
   },
   {
    "q": "Where is the mother's shop?",
    "options": [
     "At the airport",
     "In the city centre",
     "In their street"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator's brother never wear?",
    "options": [
     "A tie",
     "A hat",
     "Shoes"
    ],
    "answer": 0
   },
   {
    "q": "What is the sister?",
    "options": [
     "An engineer in a big factory",
     "A teacher",
     "A nurse"
    ],
    "answer": 0
   },
   {
    "q": "What does the sister want to be one day?",
    "options": [
     "A manager",
     "A singer",
     "A pilot"
    ],
    "answer": 0
   },
   {
    "q": "What does the uncle have?",
    "options": [
     "Many sheep",
     "A garage",
     "A bakery"
    ],
    "answer": 0
   },
   {
    "q": "What does the cousin do?",
    "options": [
     "Bakes bread",
     "Fixes cars in a garage",
     "Draws"
    ],
    "answer": 1
   },
   {
    "q": "What is the grandfather good at?",
    "options": [
     "Cooking",
     "Singing",
     "Driving"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator's friend want to be?",
    "options": [
     "A pilot",
     "A firefighter",
     "A lawyer"
    ],
    "answer": 1
   }
  ]
 },
 "countries": {
  "title": "Around the world",
  "paragraphs": [
   "I am Portuguese and I live in Portugal. Lisbon is the capital of my country, and Portugal is a small country in Europe. My nationality is Portuguese, and my flag is green and red. My language is Portuguese too, but I also speak English. My neighbour is Spanish, and he speaks Spanish with his family. Spain is near, so we often go to Madrid for the weekend. We take the car and the journey is only six hours.",
   "My teacher is Brazilian, and she knows my language very well. She tells us about Brazil, a big country with a beautiful beach in every state. Her husband is from Ireland, and he speaks English. They have a friend from France who speaks French, and one from Germany. In England people speak English, and the capital is London, a very big city. My cousin lives in America, and he sends me photos of the places he visits.",
   "One day I want to see the world. I want to go to Japan to see the mountain and eat sushi. I want to go to China to see a big wall, and to Africa to see wild animals. I know that a language is the key to a country, so I study every day. When I speak another language, I can make friends in many places. What is your nationality? And which country do you want to visit?"
  ],
  "questions": [
   {
    "q": "What is the capital of Portugal?",
    "options": [
     "London",
     "Lisbon",
     "Madrid"
    ],
    "answer": 1
   },
   {
    "q": "What nationality is the narrator's neighbour?",
    "options": [
     "Spanish",
     "French",
     "Brazilian"
    ],
    "answer": 0
   },
   {
    "q": "Where does the narrator's cousin live?",
    "options": [
     "In Ireland",
     "In Japan",
     "In America"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator want to eat in Japan?",
    "options": [
     "Rice",
     "Pizza",
     "Sushi"
    ],
    "answer": 2
   },
   {
    "q": "What is the key to a country, according to the narrator?",
    "options": [
     "A flag",
     "A map",
     "A language"
    ],
    "answer": 2
   },
   {
    "q": "What colours is the Portuguese flag in the story?",
    "options": [
     "Blue and white",
     "Green and red",
     "Red and yellow"
    ],
    "answer": 1
   },
   {
    "q": "Which languages does the narrator speak?",
    "options": [
     "Portuguese only",
     "French and German",
     "Portuguese and English"
    ],
    "answer": 2
   },
   {
    "q": "Where do they often go for the weekend?",
    "options": [
     "To London",
     "To Paris",
     "To Madrid"
    ],
    "answer": 2
   },
   {
    "q": "How long is the car journey?",
    "options": [
     "One hour",
     "Two days",
     "Six hours"
    ],
    "answer": 2
   },
   {
    "q": "What nationality is the narrator's teacher?",
    "options": [
     "Spanish",
     "Irish",
     "Brazilian"
    ],
    "answer": 2
   },
   {
    "q": "Where is the teacher's husband from?",
    "options": [
     "Germany",
     "Ireland",
     "France"
    ],
    "answer": 1
   },
   {
    "q": "What language does the friend from France speak?",
    "options": [
     "French",
     "German",
     "Spanish"
    ],
    "answer": 0
   },
   {
    "q": "What is the capital of England?",
    "options": [
     "Paris",
     "Dublin",
     "London"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator want to see in China?",
    "options": [
     "A mountain",
     "Wild animals",
     "A big wall"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator want to see in Africa?",
    "options": [
     "Sushi",
     "A big wall",
     "Wild animals"
    ],
    "answer": 2
   }
  ]
 },
 "people": {
  "title": "My friends",
  "paragraphs": [
   "This is my friend Ana. She is a nice person. She is tall and slim, with long blond hair. Her hair is curly, and she is very pretty. She is about thirty years old. She is kind, friendly and funny, and she is never rude. Everybody says that she is a very polite and generous woman. When she speaks, she always smiles. She looks like her mother, but her personality is different, because her mother is more quiet.",
   "Her brother is Rui. He is short and strong, but he is very shy. He is young and handsome, and he has dark brown hair. He is clever, but a little lazy on Sunday. He is honest, and he always tells the truth. He does not like noisy places, so he does not go to parties. He prefers to stay at home and to play chess. Rui does not speak a lot, but when he does, everybody listens.",
   "I think the best friends are different from you, because they teach you new things. Ana is more social than me. I am quiet like Rui. Ana is a good friend because she is very patient and she listens when I have a problem. Rui helps me with my homework. What is your age? What is your personality? Are you tall or short? Do you look like your father or your mother? Describe your best friend in three sentences!"
  ],
  "questions": [
   {
    "q": "What colour is Ana's hair?",
    "options": [
     "Black",
     "Blond",
     "Grey"
    ],
    "answer": 1
   },
   {
    "q": "What is Rui like?",
    "options": [
     "Funny and loud",
     "Tall and slim",
     "Short, strong and shy"
    ],
    "answer": 2
   },
   {
    "q": "What does Rui prefer to do at home?",
    "options": [
     "Play chess",
     "Watch television",
     "Cook"
    ],
    "answer": 0
   },
   {
    "q": "Why is Ana a good friend?",
    "options": [
     "She is rich",
     "She is tall",
     "She listens to the narrator"
    ],
    "answer": 2
   },
   {
    "q": "What is the narrator like?",
    "options": [
     "Quiet",
     "Rude",
     "Noisy"
    ],
    "answer": 0
   },
   {
    "q": "How old is Ana?",
    "options": [
     "About fifty",
     "About twenty",
     "About thirty"
    ],
    "answer": 2
   },
   {
    "q": "Is Ana tall or short?",
    "options": [
     "Short",
     "Very short",
     "Tall"
    ],
    "answer": 2
   },
   {
    "q": "What is Ana's hair like?",
    "options": [
     "Dark and short",
     "Long and curly",
     "Short and straight"
    ],
    "answer": 1
   },
   {
    "q": "What is Ana never?",
    "options": [
     "Rude",
     "Quiet",
     "Shy"
    ],
    "answer": 0
   },
   {
    "q": "Who does Ana look like?",
    "options": [
     "Her father",
     "Her brother",
     "Her mother"
    ],
    "answer": 2
   },
   {
    "q": "What is Rui's hair colour?",
    "options": [
     "Dark brown",
     "Blond",
     "Grey"
    ],
    "answer": 0
   },
   {
    "q": "What does Rui always do?",
    "options": [
     "Shouts",
     "Tells the truth",
     "Goes to parties"
    ],
    "answer": 1
   },
   {
    "q": "What is Rui like on Sunday?",
    "options": [
     "A little lazy",
     "Very busy",
     "Angry"
    ],
    "answer": 0
   },
   {
    "q": "What does Rui help the narrator with?",
    "options": [
     "His job",
     "His car",
     "His homework"
    ],
    "answer": 2
   },
   {
    "q": "What is Ana more than the narrator?",
    "options": [
     "More social",
     "More shy",
     "More quiet"
    ],
    "answer": 0
   }
  ]
 },
 "opposites": {
  "title": "City and village",
  "paragraphs": [
   "My city is big, but my village is small and quiet. In the city the streets are narrow, the traffic is slow and the air is dirty. The buildings are high, and the people are always in a hurry. It is noisy day and night, and my bedroom window is on a busy road. But the city is also full of life: there are cinemas, shops and restaurants. It is the right place for a young person.",
   "In the village the road is wide and safe, and the river is long and clean. In the morning the air is fresh and dry, and the only noise is a bird. People are poor, but they are generous. My grandmother has a small house with a full garden and an empty room that she wants to rent. The village is slow, but I like it. Nobody is in a hurry, and everybody says hello to you in the street.",
   "My room in the city is clean and dry, but my shoes are dirty and wet after the rain. At the weekend I take a fast train to the village and I feel better. Some people think the village is boring, but I think it is true that quiet places are good for the head. A friend says that a village life is dangerous for a young person, because there is no work. That is false! There are many jobs, and it is not wrong to choose a calm life."
  ],
  "questions": [
   {
    "q": "How is the traffic in the city?",
    "options": [
     "Slow",
     "Fast",
     "Empty"
    ],
    "answer": 0
   },
   {
    "q": "How is the village road?",
    "options": [
     "Narrow and dangerous",
     "Wide and safe",
     "Dirty"
    ],
    "answer": 1
   },
   {
    "q": "What does the grandmother have?",
    "options": [
     "A small house with a garden",
     "A big flat",
     "A shop"
    ],
    "answer": 0
   },
   {
    "q": "How does the narrator go to the village?",
    "options": [
     "By car",
     "By fast train",
     "By bicycle"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator say about a village life?",
    "options": [
     "It is boring",
     "It is dangerous",
     "It is not wrong to choose a calm life"
    ],
    "answer": 2
   },
   {
    "q": "What are the city streets like?",
    "options": [
     "Empty",
     "Narrow",
     "Wide"
    ],
    "answer": 1
   },
   {
    "q": "How is the air in the city?",
    "options": [
     "Dirty",
     "Dry",
     "Fresh"
    ],
    "answer": 0
   },
   {
    "q": "What is the city like at night?",
    "options": [
     "Quiet",
     "Empty",
     "Noisy"
    ],
    "answer": 2
   },
   {
    "q": "What does the city have that is good?",
    "options": [
     "Cinemas, shops and restaurants",
     "Fields",
     "Fresh air"
    ],
    "answer": 0
   },
   {
    "q": "What is the river in the village like?",
    "options": [
     "Dry",
     "Long and clean",
     "Short and dirty"
    ],
    "answer": 1
   },
   {
    "q": "What is the only noise in the village morning?",
    "options": [
     "A train",
     "A car",
     "A bird"
    ],
    "answer": 2
   },
   {
    "q": "How are the people in the village?",
    "options": [
     "Rich and cold",
     "Busy and rude",
     "Poor but generous"
    ],
    "answer": 2
   },
   {
    "q": "What does the grandmother want to do with the empty room?",
    "options": [
     "Sell it",
     "Rent it",
     "Paint it"
    ],
    "answer": 1
   },
   {
    "q": "What does everybody do in the village street?",
    "options": [
     "Shout",
     "Say hello",
     "Run"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator's friend say about village life?",
    "options": [
     "It is dangerous because there is no work",
     "It is cheap",
     "It is easy"
    ],
    "answer": 0
   }
  ]
 },
 "services": {
  "title": "A day of errands",
  "paragraphs": [
   "Today I have many things to do. First I go to the post office. I write a letter to my aunt and I put it in an envelope. I buy a stamp and I send the letter by post. I also have a parcel for my sister. The woman at the desk says, \"The postman delivers it on Friday.\" She is very kind and fast. The service is good, and there is no queue. In the post office there is also a small counter for the police.",
   "Then I go to the bank. I open an account and I take money from the cashpoint. The man says, \"Do you want a credit card?\" I say, \"Not today, thanks.\" At the petrol station near the bank, I buy petrol and a coffee. My car needs a repair, so I take it to the garage. The mechanic says that it is ready on Tuesday. I ask about the opening hours, and he says, \"We open at eight and close at six.\"",
   "In the afternoon I have a haircut and I take my clothes to the laundry. On my way home I visit my aunt, and I take her flowers. On the way I see a fire brigade lorry, and I remember the numbers of the emergency: the police and the fire brigade. I am tired, but I am happy because everything is done. In the evening I go to the library and I show my library card. The librarian gives me a new book. What a day!"
  ],
  "questions": [
   {
    "q": "What does the narrator send to the aunt?",
    "options": [
     "A parcel",
     "A letter",
     "A card"
    ],
    "answer": 1
   },
   {
    "q": "When does the postman deliver the parcel?",
    "options": [
     "On Tuesday",
     "On Monday",
     "On Friday"
    ],
    "answer": 2
   },
   {
    "q": "When is the car ready?",
    "options": [
     "On Tuesday",
     "On Friday",
     "Today"
    ],
    "answer": 0
   },
   {
    "q": "What does the narrator do in the afternoon?",
    "options": [
     "Goes to the bank",
     "Has a haircut and goes to the laundry",
     "Goes to the cinema"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator show at the library?",
    "options": [
     "A passport",
     "A library card",
     "A bank card"
    ],
    "answer": 1
   },
   {
    "q": "Where does the narrator go first?",
    "options": [
     "To the post office",
     "To the library",
     "To the bank"
    ],
    "answer": 0
   },
   {
    "q": "What does the narrator put the letter in?",
    "options": [
     "An envelope",
     "A box",
     "A bag"
    ],
    "answer": 0
   },
   {
    "q": "Who is the parcel for?",
    "options": [
     "His aunt",
     "His sister",
     "His mother"
    ],
    "answer": 1
   },
   {
    "q": "Is there a queue at the post office?",
    "options": [
     "Yes, a short one",
     "No",
     "Yes, a long one"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator do at the bank?",
    "options": [
     "Opens an account",
     "Buys a car",
     "Sends a parcel"
    ],
    "answer": 0
   },
   {
    "q": "What does the narrator buy at the petrol station?",
    "options": [
     "A newspaper",
     "A map",
     "Petrol and a coffee"
    ],
    "answer": 2
   },
   {
    "q": "When do the mechanic's opening hours start?",
    "options": [
     "At eight",
     "At ten",
     "At nine"
    ],
    "answer": 0
   },
   {
    "q": "What does the narrator take to his aunt?",
    "options": [
     "Flowers",
     "A book",
     "A parcel"
    ],
    "answer": 0
   },
   {
    "q": "What does he see on the way?",
    "options": [
     "A fire brigade lorry",
     "A taxi",
     "An ambulance"
    ],
    "answer": 0
   },
   {
    "q": "What does the librarian give him?",
    "options": [
     "A card",
     "A map",
     "A new book"
    ],
    "answer": 2
   }
  ]
 },
 "countryside": {
  "title": "A weekend in the countryside",
  "paragraphs": [
   "I live in a small village in the countryside. It is a beautiful place, with green hills and a long valley. My uncle has a farm with a big field, and we grow tomatoes and corn. Behind the farm there is a wood and a path to the lake. In the lake there are fish, and in the summer we swim there. Near the village there is also a river, and a small island in the middle of it, where many birds sleep.",
   "On Saturday my cousins come from the city. They love the countryside, because the air is clean and the grass is soft. We walk on the path and look at the flowers and the plants. In the forest there are trees that are very old, and sometimes we see a rabbit or a deer. In the evening my uncle cooks on the fire, and we sit outside. We look at the moon and the stars. In the city there are no stars, only lights.",
   "I love nature, and I want to protect it. One day I want to see the ocean, a desert and a rainforest. My cousins say that I am lucky, because I live in a quiet place. I know that it is true, but sometimes I want to be in the city, too. Maybe a good life is a balance: the countryside for the weekend and the city for the week. What do you think? Do you prefer the village or the city?"
  ],
  "questions": [
   {
    "q": "What does the uncle grow on his farm?",
    "options": [
     "Apples",
     "Rice",
     "Tomatoes and corn"
    ],
    "answer": 2
   },
   {
    "q": "What is in the middle of the river?",
    "options": [
     "An island",
     "A farm",
     "A bridge"
    ],
    "answer": 0
   },
   {
    "q": "What do the cousins like in the countryside?",
    "options": [
     "The clean air and the soft grass",
     "The noise",
     "The shops"
    ],
    "answer": 0
   },
   {
    "q": "What do they look at in the evening?",
    "options": [
     "The television",
     "The moon and the stars",
     "A film"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator want to see one day?",
    "options": [
     "Another village",
     "The ocean, a desert and a rainforest",
     "The city"
    ],
    "answer": 1
   },
   {
    "q": "Where does the narrator live?",
    "options": [
     "In a big city",
     "In a small village in the countryside",
     "On an island"
    ],
    "answer": 1
   },
   {
    "q": "What is behind the farm?",
    "options": [
     "A river",
     "A beach",
     "A wood and a path to the lake"
    ],
    "answer": 2
   },
   {
    "q": "What is in the lake?",
    "options": [
     "Boats",
     "Ducks only",
     "Fish"
    ],
    "answer": 2
   },
   {
    "q": "When do they swim in the lake?",
    "options": [
     "In spring",
     "In winter",
     "In summer"
    ],
    "answer": 2
   },
   {
    "q": "Who comes on Saturday?",
    "options": [
     "The teacher",
     "The grandparents",
     "The cousins from the city"
    ],
    "answer": 2
   },
   {
    "q": "What do they sometimes see in the forest?",
    "options": [
     "A bear",
     "A wolf",
     "A rabbit or a deer"
    ],
    "answer": 2
   },
   {
    "q": "What does the uncle do in the evening?",
    "options": [
     "Cooks on the fire",
     "Goes to the city",
     "Reads a book"
    ],
    "answer": 0
   },
   {
    "q": "What is in the city sky?",
    "options": [
     "The moon only",
     "Only lights",
     "Many stars"
    ],
    "answer": 1
   },
   {
    "q": "What do the cousins say about the narrator?",
    "options": [
     "He is lucky because he lives in a quiet place",
     "He is poor",
     "He is bored"
    ],
    "answer": 0
   },
   {
    "q": "What would be a good balance?",
    "options": [
     "Only the city",
     "Only the village",
     "The countryside at the weekend and the city during the week"
    ],
    "answer": 2
   }
  ]
 },
 "entertainment": {
  "title": "A good weekend",
  "paragraphs": [
   "On Friday night I go to the cinema with my friends. We watch a new film. It is a comedy, and it is very funny. I do not like horror films because they are scary, and my friend likes them because they are exciting. We buy popcorn and a drink, and we sit in the middle. The story is good, and the actors are famous. After the film we talk about the best scenes. I give it four stars.",
   "On Saturday I stay at home. I watch a series with English subtitles. Every episode has a new story. I also listen to music, and my favourite band is in the news today, because they have a concert in my city next month. I buy two tickets online. I want to go with my sister. She loves the band too, and she knows all the songs. We sing them in the car, on the radio, and in the shower!",
   "On Sunday I read the newspaper, and sometimes a magazine or a novel. My grandfather is a big reader, and he reads the news every morning. In the afternoon we go to the theatre to see a play. It is a little boring, but the people on the stage are very good. At night I change the channel on the television, and I find a good programme about animals. It is a very good weekend, full of stories, songs and films."
  ],
  "questions": [
   {
    "q": "What kind of film do they watch on Friday?",
    "options": [
     "A comedy",
     "A horror film",
     "A drama"
    ],
    "answer": 0
   },
   {
    "q": "Why does the narrator not like horror films?",
    "options": [
     "They are short",
     "They are scary",
     "They are boring"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator watch with English subtitles?",
    "options": [
     "The news",
     "A series",
     "A film"
    ],
    "answer": 1
   },
   {
    "q": "Who does the narrator want to take to the concert?",
    "options": [
     "His friend",
     "His sister",
     "His grandfather"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator find on the television on Sunday night?",
    "options": [
     "A concert",
     "A comedy",
     "A programme about animals"
    ],
    "answer": 2
   },
   {
    "q": "On what day does the narrator go to the cinema?",
    "options": [
     "Friday",
     "Sunday",
     "Saturday"
    ],
    "answer": 0
   },
   {
    "q": "Who goes to the cinema with him?",
    "options": [
     "His sister",
     "His grandfather",
     "His friends"
    ],
    "answer": 2
   },
   {
    "q": "What do they buy at the cinema?",
    "options": [
     "Popcorn and a drink",
     "Tickets for a concert",
     "A newspaper"
    ],
    "answer": 0
   },
   {
    "q": "How many stars does the narrator give the film?",
    "options": [
     "Five",
     "Two",
     "Four"
    ],
    "answer": 2
   },
   {
    "q": "What does he do on Saturday?",
    "options": [
     "Goes to a concert",
     "Goes to the theatre",
     "Stays at home and watches a series"
    ],
    "answer": 2
   },
   {
    "q": "When is the band concert?",
    "options": [
     "Next month",
     "Next week",
     "Tomorrow"
    ],
    "answer": 0
   },
   {
    "q": "How does he buy the tickets?",
    "options": [
     "By post",
     "Online",
     "At the theatre"
    ],
    "answer": 1
   },
   {
    "q": "Who reads the news every morning?",
    "options": [
     "His mother",
     "His grandfather",
     "His sister"
    ],
    "answer": 1
   },
   {
    "q": "What do they see on Sunday afternoon?",
    "options": [
     "A film",
     "A concert",
     "A play at the theatre"
    ],
    "answer": 2
   },
   {
    "q": "What does he find on television at night?",
    "options": [
     "A concert",
     "A programme about animals",
     "A comedy"
    ],
    "answer": 1
   }
  ]
 },
 "trends": {
  "title": "The town in numbers",
  "paragraphs": [
   "The report on the town of Vila Nova shows a clear picture of change over the last twenty years. The population increased steadily until 2005, when it peaked at about twelve thousand people. Since then, the figures have fluctuated, and in the last decade there has been a slight decrease. Experts say that the trend is linked to young people leaving for bigger cities.",
   "House prices tell a different story. After a gradual rise in the early years, they soared in 2015, when tourism began to grow. The price of a flat doubled in only five years, and many local families could not afford to stay. By 2020, the market had levelled off, and prices remained high. Rents, on the other hand, tripled over the decade, which shocked many residents.",
   "The economy also changed dramatically. The number of jobs in the factory halved, while hotels and restaurants created several hundred new positions. Unemployment fell sharply at first, but then it rose again during the crisis. Approximately forty per cent of workers now have temporary contracts. The council hopes to attract new companies and improve public transport. A significant proportion of the population, overall, say they like living in the town. The mayor said that the figures are not just numbers: \"Behind every number there is a family, and our job is to make sure that the trend works for them.\""
  ],
  "questions": [
   {
    "q": "What does the report show?",
    "options": [
     "Change in the town over twenty years",
     "A new bridge",
     "A new school"
    ],
    "answer": 0
   },
   {
    "q": "When did the population peak?",
    "options": [
     "In 2020",
     "In 2005",
     "In 1990"
    ],
    "answer": 1
   },
   {
    "q": "How many people were there at the peak?",
    "options": [
     "About twelve thousand",
     "About a million",
     "About two thousand"
    ],
    "answer": 0
   },
   {
    "q": "What has happened in the last decade?",
    "options": [
     "No change",
     "A big increase",
     "A slight decrease"
    ],
    "answer": 2
   },
   {
    "q": "Why do young people leave?",
    "options": [
     "For bigger cities",
     "Because of the weather",
     "Because of war"
    ],
    "answer": 0
   },
   {
    "q": "What happened to prices in 2015?",
    "options": [
     "They fell",
     "They soared",
     "They did not change"
    ],
    "answer": 1
   },
   {
    "q": "Why did they soar?",
    "options": [
     "A factory opened",
     "There was a war",
     "Tourism began to grow"
    ],
    "answer": 2
   },
   {
    "q": "What happened to the price of a flat?",
    "options": [
     "It halved",
     "It tripled",
     "It doubled in five years"
    ],
    "answer": 2
   },
   {
    "q": "What happened to rents over the decade?",
    "options": [
     "They fell",
     "They tripled",
     "They halved"
    ],
    "answer": 1
   },
   {
    "q": "What happened to jobs in the factory?",
    "options": [
     "They halved",
     "They tripled",
     "They doubled"
    ],
    "answer": 0
   },
   {
    "q": "What created several hundred new jobs?",
    "options": [
     "The hospital",
     "The school",
     "Hotels and restaurants"
    ],
    "answer": 2
   },
   {
    "q": "How many workers have temporary contracts?",
    "options": [
     "About ninety per cent",
     "About forty per cent",
     "About ten per cent"
    ],
    "answer": 1
   },
   {
    "q": "What does the council hope to do?",
    "options": [
     "Attract companies and improve transport",
     "Close the factory",
     "Build a mall"
    ],
    "answer": 0
   },
   {
    "q": "What do most residents say?",
    "options": [
     "They hate it",
     "They want to leave",
     "They like living in the town"
    ],
    "answer": 2
   },
   {
    "q": "What did the mayor say about numbers?",
    "options": [
     "Numbers are boring",
     "Behind every number there is a family",
     "Numbers are wrong"
    ],
    "answer": 1
   }
  ]
 },
 "causes": {
  "title": "Why the river flooded",
  "paragraphs": [
   "Last month the river in our region overflowed, and the water flooded several villages. The main cause was the heavy rain, which fell for six days without stopping. However, experts say that it was not the only reason. Many other factors contributed to the disaster.",
   "First, in recent years the area around the river has been filled with houses and roads. As a result, the soil can no longer absorb water as it used to. Second, a number of trees were cut down on the hills, and this led to erosion. Without roots, the earth slid into the river, which reduced its capacity. Finally, the old dam was not repaired, owing to a lack of funds.",
   "The consequences were serious. Hundreds of families lost their homes, and the local economy suffered. A knock-on effect was a rise in food prices, because the harvest was destroyed. The disaster also triggered a debate about climate change. Scientists explain that warmer air holds more moisture, which can result in more intense storms. The government has promised to invest in new defences and to plant trees. Residents, however, remain sceptical. \"We hear many promises after a tragedy,\" said one farmer. \"But nothing changes until the next flood. We need to deal with the root cause, not only with the result.\" He hopes that the lessons will not be forgotten."
  ],
  "questions": [
   {
    "q": "What happened to the river last month?",
    "options": [
     "It froze",
     "It overflowed",
     "It dried up"
    ],
    "answer": 1
   },
   {
    "q": "What was the main cause?",
    "options": [
     "Heavy rain for six days",
     "A storm at sea",
     "An earthquake"
    ],
    "answer": 0
   },
   {
    "q": "What has the area around the river been filled with?",
    "options": [
     "Houses and roads",
     "Farms",
     "Trees"
    ],
    "answer": 0
   },
   {
    "q": "Why can the soil no longer absorb water?",
    "options": [
     "Because of the building",
     "Because of the animals",
     "Because of the sun"
    ],
    "answer": 0
   },
   {
    "q": "What led to erosion?",
    "options": [
     "A dam burst",
     "Strong winds",
     "Trees were cut down on the hills"
    ],
    "answer": 2
   },
   {
    "q": "Why was the old dam not repaired?",
    "options": [
     "It was new",
     "A lack of funds",
     "Nobody cared"
    ],
    "answer": 1
   },
   {
    "q": "What was one consequence?",
    "options": [
     "More tourists",
     "Hundreds of families lost their homes",
     "A new road"
    ],
    "answer": 1
   },
   {
    "q": "What was the knock-on effect?",
    "options": [
     "A fall in prices",
     "More jobs",
     "A rise in food prices"
    ],
    "answer": 2
   },
   {
    "q": "What debate did the disaster trigger?",
    "options": [
     "About climate change",
     "About the budget",
     "About sport"
    ],
    "answer": 0
   },
   {
    "q": "What can warmer air hold?",
    "options": [
     "More moisture",
     "Nothing",
     "Less moisture"
    ],
    "answer": 0
   },
   {
    "q": "What has the government promised?",
    "options": [
     "New defences and trees",
     "Nothing",
     "Money for farmers only"
    ],
    "answer": 0
   },
   {
    "q": "How do residents feel?",
    "options": [
     "Sceptical",
     "Delighted",
     "Angry at nature"
    ],
    "answer": 0
   },
   {
    "q": "What did the farmer say we need to deal with?",
    "options": [
     "The root cause",
     "The rain",
     "The mayor"
    ],
    "answer": 0
   },
   {
    "q": "What does the farmer say about promises?",
    "options": [
     "They are too expensive",
     "Nothing changes until the next flood",
     "They are always kept"
    ],
    "answer": 1
   },
   {
    "q": "What does the farmer hope?",
    "options": [
     "The dam will break",
     "It will rain more",
     "The lessons will not be forgotten"
    ],
    "answer": 2
   }
  ]
 },
 "housing": {
  "title": "Looking for a flat",
  "paragraphs": [
   "Marta and Ricardo are looking for a flat to rent. They went to an estate agent, who showed them several properties. The first one was a furnished studio flat in the city centre. It was small but modern, and the landlord asked for a month's deposit and a lease of one year. The rent was higher than they expected, so they continued their search.",
   "The second property was a semi-detached house in the suburbs. It had a garden and a garage, but it was far from work. The third was a penthouse with a roof terrace and a wonderful view. Unfortunately, it was far too expensive. Ricardo joked that they should look for a fixer-upper and repair it themselves.",
   "In the end, they chose a terraced house in a quiet street. It was unfurnished, but the landlord agreed to include a few pieces of furniture. They signed the lease and paid the deposit. The estate agent explained that the housing market was slow, so they were lucky. \"In a year,\" said Marta, \"we will try to get a mortgage and become first-time buyers.\" Ricardo was not so sure. Prices were rising, and it was difficult to get on the property ladder. But for now they were happy. They moved in on a Saturday, with the help of friends. By the evening, the boxes were in every room, and they had pizza on the floor, laughing about their first night together in their new home."
  ],
  "questions": [
   {
    "q": "What are Marta and Ricardo looking for?",
    "options": [
     "A hotel",
     "A flat to rent",
     "A house to buy"
    ],
    "answer": 1
   },
   {
    "q": "Who showed them properties?",
    "options": [
     "An estate agent",
     "The landlord",
     "A friend"
    ],
    "answer": 0
   },
   {
    "q": "What was the first one?",
    "options": [
     "A penthouse",
     "A furnished studio flat",
     "A cottage"
    ],
    "answer": 1
   },
   {
    "q": "What did the landlord ask for?",
    "options": [
     "A month's deposit and a one-year lease",
     "Nothing",
     "Two months' rent"
    ],
    "answer": 0
   },
   {
    "q": "What was the second property?",
    "options": [
     "A bungalow",
     "A penthouse",
     "A semi-detached house in the suburbs"
    ],
    "answer": 2
   },
   {
    "q": "What was wrong with the second property?",
    "options": [
     "It was far from work",
     "It was dark",
     "It had no garden"
    ],
    "answer": 0
   },
   {
    "q": "What did the penthouse have?",
    "options": [
     "A roof terrace",
     "A swimming pool",
     "A garage"
    ],
    "answer": 0
   },
   {
    "q": "Why didn't they take the penthouse?",
    "options": [
     "It was far too expensive",
     "It was dirty",
     "It was small"
    ],
    "answer": 0
   },
   {
    "q": "What did Ricardo joke about?",
    "options": [
     "Looking for a fixer-upper",
     "Moving abroad",
     "Buying a boat"
    ],
    "answer": 0
   },
   {
    "q": "What did they choose in the end?",
    "options": [
     "A terraced house",
     "A studio",
     "A penthouse"
    ],
    "answer": 0
   },
   {
    "q": "Was it furnished?",
    "options": [
     "No, it was unfurnished",
     "Yes, completely",
     "Yes, partly"
    ],
    "answer": 0
   },
   {
    "q": "What did the landlord agree to include?",
    "options": [
     "A few pieces of furniture",
     "Nothing",
     "The garden"
    ],
    "answer": 0
   },
   {
    "q": "What will they try to get in a year?",
    "options": [
     "A new flat",
     "A mortgage",
     "A pet"
    ],
    "answer": 1
   },
   {
    "q": "Why was it hard to get on the property ladder?",
    "options": [
     "Prices were rising",
     "Banks were closed",
     "Nobody sold"
    ],
    "answer": 0
   },
   {
    "q": "What did they eat on the first night?",
    "options": [
     "Nothing",
     "A big dinner",
     "Pizza on the floor"
    ],
    "answer": 2
   }
  ]
 },
 "nutrition": {
  "title": "What we eat",
  "paragraphs": [
   "Nutrition is one of the most discussed topics today. Doctors say that a balanced diet should contain enough protein, carbohydrates and fibre, as well as vitamins and minerals. Foods such as vegetables, fruit, fish and dairy products give us these nutrients. However, many people eat too much processed food, which often contains additives and preservatives, and too many calories.",
   "Carolina, a nutritionist, explains that a healthy plate should be colourful. \"Half of it should be vegetables,\" she says. \"A quarter should be protein, and a quarter carbohydrates.\" She also recommends reducing sugar and salt intake, because they raise the risk of obesity and heart disease. She is not against snacks, but she says they should be fresh fruit or nuts, not junk food.",
   "More and more people are changing their diet. Some choose to be vegetarian or vegan for ethical reasons, while others avoid gluten or lactose because they are allergic or intolerant. Organic food has become popular, although it is more expensive. Carolina advises caution: \"A diet that suits one person may not suit another.\" She also warns against extreme fasting. \"The best diet,\" she concludes, \"is a varied cuisine with sensible portions, eaten slowly and with company. Digestion and mood are better when you enjoy the meal, and your appetite tells you when to stop.\" Her patients, many of them tired of strict plans, find her advice reassuring."
  ],
  "questions": [
   {
    "q": "What should a balanced diet contain?",
    "options": [
     "Protein, carbohydrates, fibre, vitamins",
     "Only meat",
     "Only fruit"
    ],
    "answer": 0
   },
   {
    "q": "What do many people eat too much of?",
    "options": [
     "Processed food",
     "Vegetables",
     "Fish"
    ],
    "answer": 0
   },
   {
    "q": "What do processed foods often contain?",
    "options": [
     "Fibre",
     "Vitamins",
     "Additives and preservatives"
    ],
    "answer": 2
   },
   {
    "q": "Who is Carolina?",
    "options": [
     "A doctor",
     "A nutritionist",
     "A cook"
    ],
    "answer": 1
   },
   {
    "q": "How much of a healthy plate should be vegetables?",
    "options": [
     "All",
     "A quarter",
     "Half"
    ],
    "answer": 2
   },
   {
    "q": "What should we reduce?",
    "options": [
     "Water",
     "Sugar and salt",
     "Vegetables"
    ],
    "answer": 1
   },
   {
    "q": "What are good snacks?",
    "options": [
     "Chips",
     "Chocolate",
     "Fresh fruit or nuts"
    ],
    "answer": 2
   },
   {
    "q": "Why do some people avoid gluten or lactose?",
    "options": [
     "They have no money",
     "They are allergic or intolerant",
     "They like it"
    ],
    "answer": 1
   },
   {
    "q": "What is true of organic food?",
    "options": [
     "It is more expensive",
     "It is unhealthy",
     "It is cheaper"
    ],
    "answer": 0
   },
   {
    "q": "What does Carolina advise caution about?",
    "options": [
     "Water",
     "Diets that do not suit everyone",
     "Fruit"
    ],
    "answer": 1
   },
   {
    "q": "What does she warn against?",
    "options": [
     "Exercise",
     "Eating fruit",
     "Extreme fasting"
    ],
    "answer": 2
   },
   {
    "q": "What is the best diet, she says?",
    "options": [
     "Only vegetables",
     "A strict plan",
     "A varied cuisine with sensible portions"
    ],
    "answer": 2
   },
   {
    "q": "How should we eat?",
    "options": [
     "Alone",
     "Fast",
     "Slowly and with company"
    ],
    "answer": 2
   },
   {
    "q": "What tells you when to stop?",
    "options": [
     "Your friends",
     "The clock",
     "Your appetite"
    ],
    "answer": 2
   },
   {
    "q": "How do her patients find her advice?",
    "options": [
     "Boring",
     "Reassuring",
     "Hard"
    ],
    "answer": 1
   }
  ]
 },
 "lifestyle": {
  "title": "Changing my habits",
  "paragraphs": [
   "Last year I was exhausted all the time. I worked long hours, slept badly and I suffered from insomnia. I was addicted to my phone, and my lifestyle was very sedentary. One day, my doctor told me that I was close to burnout, and that I needed to change my habits.",
   "I started with small steps. First, I tried to cut down on coffee and to quit watching series in bed. I also took up running: three mornings a week, I do a workout of thirty minutes. At first I hated it, and I often wanted to give up, but my fitness improved quickly. In the evenings I do some stretching to unwind, and I limit my screen time to one hour. A short nap after lunch also helps me to recharge.",
   "Slowly, I became a different person. I am no longer a night owl; I have become an early bird. My well-being has improved, and my work-life balance is better. I am not saying that it was easy. There were weeks when I felt stressed and overworked, and old habits returned. What helped me was to be mindful: to notice when I was falling into a bad routine and to change it. I also found a new hobby, painting, which is very relaxing. If you feel exhausted, my advice is simple: do not try to change everything at once. Choose one habit and start tomorrow. Your future self will thank you."
  ],
  "questions": [
   {
    "q": "How did the writer feel last year?",
    "options": [
     "Fine",
     "Exhausted",
     "Bored"
    ],
    "answer": 1
   },
   {
    "q": "What problem did he or she have at night?",
    "options": [
     "Insomnia",
     "Noise",
     "Nightmares"
    ],
    "answer": 0
   },
   {
    "q": "What was he or she addicted to?",
    "options": [
     "The phone",
     "Sport",
     "Coffee"
    ],
    "answer": 0
   },
   {
    "q": "What did the doctor say?",
    "options": [
     "He or she was close to burnout",
     "Rest for a year",
     "It was nothing"
    ],
    "answer": 0
   },
   {
    "q": "What did he or she take up?",
    "options": [
     "Cooking",
     "Running",
     "Swimming"
    ],
    "answer": 1
   },
   {
    "q": "How often does he or she run?",
    "options": [
     "Three mornings a week",
     "Once a month",
     "Every day"
    ],
    "answer": 0
   },
   {
    "q": "How long is the workout?",
    "options": [
     "Ten minutes",
     "Thirty minutes",
     "One hour"
    ],
    "answer": 1
   },
   {
    "q": "What does he or she do to unwind in the evening?",
    "options": [
     "Watch TV",
     "Stretching",
     "Drink coffee"
    ],
    "answer": 1
   },
   {
    "q": "What does a nap after lunch help to do?",
    "options": [
     "Recharge",
     "Sleep all day",
     "Forget"
    ],
    "answer": 0
   },
   {
    "q": "What is the writer now?",
    "options": [
     "An early bird",
     "A couch potato",
     "A night owl"
    ],
    "answer": 0
   },
   {
    "q": "What has improved?",
    "options": [
     "The house",
     "Well-being and work-life balance",
     "The salary"
    ],
    "answer": 1
   },
   {
    "q": "What helped the writer to avoid bad routines?",
    "options": [
     "Being mindful",
     "A friend",
     "A new job"
    ],
    "answer": 0
   },
   {
    "q": "What new hobby did he or she find?",
    "options": [
     "Writing",
     "Dancing",
     "Painting"
    ],
    "answer": 2
   },
   {
    "q": "What advice is given to those who feel exhausted?",
    "options": [
     "Change everything at once",
     "Quit work",
     "Choose one habit and start tomorrow"
    ],
    "answer": 2
   },
   {
    "q": "Who will thank you in the future?",
    "options": [
     "Your boss",
     "Your friends",
     "Your future self"
    ],
    "answer": 2
   }
  ]
 },
 "service": {
  "title": "A complaint that worked",
  "paragraphs": [
   "When Ana bought a new laptop online, she was very excited. The delivery took a week, and when the parcel arrived, she saw that the box was damaged. She opened it carefully and found that the screen was cracked. She was disappointed, but she remained calm. She read the terms and conditions, and saw that she could return the product within fourteen days.",
   "First, she called customer service. She was put on hold for ten minutes, and then a representative put her through to another department. After two more transfers, she finally spoke to someone who was helpful. The representative apologised for the inconvenience and said that the company would send a replacement. Ana, however, wanted a refund, because she had already bought another one in a shop.",
   "The next day she sent a written complaint and attached photos of the damage. She also mentioned the warranty, and explained that the product was faulty. Two days later, she received an email: the company agreed to a full refund and offered a voucher as compensation. Ana was surprised that it worked so well. \"The key,\" she said, \"is to be polite but firm, and to keep all the evidence.\" She also learned to check the tracking number and to read the returns policy before buying. She posted a review online to help other customers. Her friends were impressed, and one of them asked for advice for a different problem with a broken washing machine that was still under guarantee."
  ],
  "questions": [
   {
    "q": "What did Ana buy?",
    "options": [
     "A phone",
     "A laptop online",
     "A TV"
    ],
    "answer": 1
   },
   {
    "q": "How long did the delivery take?",
    "options": [
     "A week",
     "A day",
     "A month"
    ],
    "answer": 0
   },
   {
    "q": "What was wrong with the box?",
    "options": [
     "It was empty",
     "It was damaged",
     "It was wet"
    ],
    "answer": 1
   },
   {
    "q": "What was wrong with the laptop?",
    "options": [
     "The battery was dead",
     "It was the wrong colour",
     "The screen was cracked"
    ],
    "answer": 2
   },
   {
    "q": "How many days could she return it in?",
    "options": [
     "Seven",
     "Thirty",
     "Fourteen"
    ],
    "answer": 2
   },
   {
    "q": "How long was she put on hold?",
    "options": [
     "One hour",
     "Two minutes",
     "Ten minutes"
    ],
    "answer": 2
   },
   {
    "q": "How many more transfers were there?",
    "options": [
     "Two",
     "Five",
     "None"
    ],
    "answer": 0
   },
   {
    "q": "What did the representative offer?",
    "options": [
     "A gift",
     "A discount",
     "A replacement"
    ],
    "answer": 2
   },
   {
    "q": "What did Ana want?",
    "options": [
     "A replacement",
     "A refund",
     "A voucher"
    ],
    "answer": 1
   },
   {
    "q": "Why did she want a refund?",
    "options": [
     "She had already bought another one",
     "She disliked the colour",
     "It was too heavy"
    ],
    "answer": 0
   },
   {
    "q": "What did she send the next day?",
    "options": [
     "A phone call",
     "An email to a friend",
     "A written complaint with photos"
    ],
    "answer": 2
   },
   {
    "q": "What did she mention?",
    "options": [
     "Her job",
     "The price",
     "The warranty"
    ],
    "answer": 2
   },
   {
    "q": "What did the company offer?",
    "options": [
     "Only a replacement",
     "A full refund and a voucher",
     "Only a voucher"
    ],
    "answer": 1
   },
   {
    "q": "What is the key, according to Ana?",
    "options": [
     "Shout",
     "Say nothing",
     "Be polite but firm and keep evidence"
    ],
    "answer": 2
   },
   {
    "q": "What did she post online?",
    "options": [
     "A song",
     "A photo",
     "A review"
    ],
    "answer": 2
   }
  ]
 },
 "mishaps": {
  "title": "A trip full of surprises",
  "paragraphs": [
   "Our holiday in Italy began badly. Our flight was delayed by three hours, and when we arrived, we missed our connection. We had to wait at the airport for six hours, stranded without much information. The airline gave us a voucher for a sandwich, which was not much help.",
   "To make matters worse, our luggage did not arrive. At the baggage claim, an employee told us that it was lost, and we had to fill in a form. We had only our hand luggage, with a change of clothes and a toothbrush. The next day we took a shuttle to the hotel, only to find that it was overbooked. Fortunately, the manager found us a room in another hotel nearby.",
   "Things improved later. We did a lot of sightseeing, and we discovered a village off the beaten track, where an old man invited us to try the local wine. We also fell for a tourist scam in Rome, when a man charged us too much for a photo, but we laughed about it afterwards. Our suitcases finally arrived after four days. On the last day, I got sunburn and a pickpocket stole my wallet, but my wife said that these were part of the story. \"Nobody remembers a perfect holiday,\" she said. \"Everybody remembers the mishaps.\" Back at home, we told our friends about the trip. They laughed and asked when we would be going back. Honestly, we plan to go again next year, with better travel insurance."
  ],
  "questions": [
   {
    "q": "How long was their flight delayed?",
    "options": [
     "Three hours",
     "One hour",
     "Six hours"
    ],
    "answer": 0
   },
   {
    "q": "What did they miss?",
    "options": [
     "A concert",
     "The hotel",
     "Their connection"
    ],
    "answer": 2
   },
   {
    "q": "How long did they wait at the airport?",
    "options": [
     "A day",
     "Six hours",
     "One hour"
    ],
    "answer": 1
   },
   {
    "q": "What did the airline give them?",
    "options": [
     "A hotel room",
     "A free flight",
     "A voucher for a sandwich"
    ],
    "answer": 2
   },
   {
    "q": "What did not arrive?",
    "options": [
     "Their tickets",
     "Their luggage",
     "Their passport"
    ],
    "answer": 1
   },
   {
    "q": "What did they have only?",
    "options": [
     "A map",
     "Their hand luggage",
     "Nothing"
    ],
    "answer": 1
   },
   {
    "q": "What was wrong with the hotel?",
    "options": [
     "It was overbooked",
     "It was dirty",
     "It was closed"
    ],
    "answer": 0
   },
   {
    "q": "Who found them a room?",
    "options": [
     "A friend",
     "The manager",
     "The airline"
    ],
    "answer": 1
   },
   {
    "q": "What did they discover off the beaten track?",
    "options": [
     "A museum",
     "A beach",
     "A village"
    ],
    "answer": 2
   },
   {
    "q": "What did an old man invite them to do?",
    "options": [
     "Dance",
     "Try the local wine",
     "Sleep in his house"
    ],
    "answer": 1
   },
   {
    "q": "Where did they fall for a scam?",
    "options": [
     "At the airport",
     "In Paris",
     "In Rome"
    ],
    "answer": 2
   },
   {
    "q": "When did their suitcases arrive?",
    "options": [
     "After a week",
     "The same day",
     "After four days"
    ],
    "answer": 2
   },
   {
    "q": "What got stolen on the last day?",
    "options": [
     "The passport",
     "The writer's wallet",
     "The suitcase"
    ],
    "answer": 1
   },
   {
    "q": "What does his wife say about a holiday?",
    "options": [
     "It must be perfect",
     "Everybody remembers the mishaps",
     "It is a waste"
    ],
    "answer": 1
   },
   {
    "q": "What do they plan for next year?",
    "options": [
     "To go again with better travel insurance",
     "To go by train",
     "To stay home"
    ],
    "answer": 0
   }
  ]
 },
 "manners": {
  "title": "Good manners around the world",
  "paragraphs": [
   "Good manners change from one country to another. In Japan, it is polite to bow when you meet someone, and it is considered rude to blow your nose in public. In the Middle East, accepting a drink offered by a host is a sign of respect, and refusing may be awkward. In Portugal, people usually greet each other with two kisses, while in Britain a handshake is more common.",
   "Etiquette also changes in the workplace. In some countries punctuality is very important, and arriving late is seen as inconsiderate. In others, meetings may begin after a polite round of small talk. It is wise to be tactful and to avoid blunt comments. A compliment can open doors, but excessive flattery may sound false. Showing off or boasting about your success will not impress anyone.",
   "Whatever the culture, some rules are universal. It is rude to interrupt, to eavesdrop or to mock others. You should apologise if you make a mistake, and show gratitude when someone helps you. Queue-jumping is almost always unacceptable. Travellers who respect local customs are usually welcomed warmly. \"Be curious and be courteous,\" advises Helena, a travel writer. \"If you are not sure what to do, watch the people around you, or ask politely.\" She adds that most people forgive small errors if they see good intentions. She keeps a notebook with tips from every country she visits, and says it is her most precious possession."
  ],
  "questions": [
   {
    "q": "What is polite in Japan?",
    "options": [
     "To hug",
     "To shake hands",
     "To bow when you meet someone"
    ],
    "answer": 2
   },
   {
    "q": "What is considered rude in Japan?",
    "options": [
     "Smiling",
     "Bowing",
     "Blowing your nose in public"
    ],
    "answer": 2
   },
   {
    "q": "What is a sign of respect in the Middle East?",
    "options": [
     "Arriving early",
     "Refusing",
     "Accepting a drink from a host"
    ],
    "answer": 2
   },
   {
    "q": "How do Portuguese people usually greet each other?",
    "options": [
     "With two kisses",
     "With a bow",
     "With a wave"
    ],
    "answer": 0
   },
   {
    "q": "What is more common in Britain?",
    "options": [
     "A hug",
     "A handshake",
     "A kiss"
    ],
    "answer": 1
   },
   {
    "q": "How is arriving late seen in some countries?",
    "options": [
     "As normal",
     "As inconsiderate",
     "As polite"
    ],
    "answer": 1
   },
   {
    "q": "What may begin meetings in other countries?",
    "options": [
     "A speech",
     "A meal",
     "A polite round of small talk"
    ],
    "answer": 2
   },
   {
    "q": "What is it wise to avoid?",
    "options": [
     "Smiles",
     "Blunt comments",
     "Compliments"
    ],
    "answer": 1
   },
   {
    "q": "What may excessive flattery sound?",
    "options": [
     "Sincere",
     "Funny",
     "False"
    ],
    "answer": 2
   },
   {
    "q": "What will not impress anyone?",
    "options": [
     "Being polite",
     "Being modest",
     "Boasting about your success"
    ],
    "answer": 2
   },
   {
    "q": "Which things are rude everywhere?",
    "options": [
     "To smile",
     "To eat",
     "To interrupt, to eavesdrop, to mock"
    ],
    "answer": 2
   },
   {
    "q": "What should you show when someone helps you?",
    "options": [
     "Anger",
     "Surprise",
     "Gratitude"
    ],
    "answer": 2
   },
   {
    "q": "What is almost always unacceptable?",
    "options": [
     "Queue-jumping",
     "Waiting",
     "Queueing"
    ],
    "answer": 0
   },
   {
    "q": "Who is Helena?",
    "options": [
     "A doctor",
     "A teacher",
     "A travel writer"
    ],
    "answer": 2
   },
   {
    "q": "What does she advise if you are not sure what to do?",
    "options": [
     "Do nothing",
     "Watch the people around you or ask politely",
     "Leave"
    ],
    "answer": 1
   }
  ]
 },
 "holidays": {
  "title": "A week at the seaside",
  "paragraphs": [
   "Every summer Ana and her family go to a small resort at the seaside. This year they book a double room with a balcony and a beautiful view of the sea. On the first day they check in at three o'clock, and the receptionist gives them the keys. Ana's brother wants a single room, but it is too expensive, so he sleeps in the same room, on a sofa bed. The room is clean and bright, and the balcony is perfect for breakfast.",
   "In the morning Ana likes to sunbathe on the beach, but she never forgets her suncream, because the sun is very strong. Her father hikes in the hills behind the resort, with a small backpack and a bottle of water. In the afternoon they have a picnic in a park, or they take a short excursion to the old castle. The beach is crowded in August, so they usually go early, before ten.",
   "In the evening the sunset is beautiful, and everybody sits on the balcony. Ana writes a postcard to her grandmother, and her mother reads a book. It is a very relaxing holiday. Her cousins prefer camping and sleeping in a tent, but Ana loves the comfort of a resort. They want to go on a cruise next year. On the last day they check out before noon, and Ana is a little sad, because she wants to stay longer."
  ],
  "questions": [
   {
    "q": "What kind of room do they book?",
    "options": [
     "A double room with a balcony",
     "A single room",
     "A tent"
    ],
    "answer": 0
   },
   {
    "q": "Where does Ana's brother sleep?",
    "options": [
     "In a tent",
     "On a sofa bed in the same room",
     "In a single room"
    ],
    "answer": 1
   },
   {
    "q": "What does Ana's father do in the hills?",
    "options": [
     "He sleeps",
     "He sunbathes",
     "He hikes"
    ],
    "answer": 2
   },
   {
    "q": "Why do they go to the beach early?",
    "options": [
     "It is very cold",
     "It is crowded in August",
     "They want to hike"
    ],
    "answer": 1
   },
   {
    "q": "Who writes a postcard?",
    "options": [
     "Ana's brother",
     "Ana writes to her grandmother",
     "Ana's mother"
    ],
    "answer": 1
   },
   {
    "q": "How often do they go to the resort?",
    "options": [
     "Every month",
     "Every winter",
     "Every summer"
    ],
    "answer": 2
   },
   {
    "q": "What does the room have?",
    "options": [
     "A kitchen",
     "A garden",
     "A balcony with a view of the sea"
    ],
    "answer": 2
   },
   {
    "q": "When do they check in?",
    "options": [
     "At three o'clock",
     "At noon",
     "At nine"
    ],
    "answer": 0
   },
   {
    "q": "Why does the brother sleep on a sofa bed?",
    "options": [
     "The room is dirty",
     "He likes it",
     "A single room is too expensive"
    ],
    "answer": 2
   },
   {
    "q": "What is the balcony perfect for?",
    "options": [
     "Reading",
     "Breakfast",
     "Sleeping"
    ],
    "answer": 1
   },
   {
    "q": "What does Ana never forget on the beach?",
    "options": [
     "Her hat",
     "Her suncream",
     "Her phone"
    ],
    "answer": 1
   },
   {
    "q": "What does the father take on the hike?",
    "options": [
     "A camera",
     "A tent",
     "A small backpack and a bottle of water"
    ],
    "answer": 2
   },
   {
    "q": "Where do they go in the afternoon?",
    "options": [
     "To a picnic or an excursion to the old castle",
     "To the cinema",
     "To the market"
    ],
    "answer": 0
   },
   {
    "q": "What does Ana's mother do in the evening?",
    "options": [
     "Cooks",
     "Reads a book",
     "Writes a postcard"
    ],
    "answer": 1
   },
   {
    "q": "What do they want to do next year?",
    "options": [
     "Stay at home",
     "Go on a cruise",
     "Go camping"
    ],
    "answer": 1
   }
  ]
 },
 "cooking": {
  "title": "Mum's soup recipe",
  "paragraphs": [
   "My mother's soup is famous in our family, and this is her recipe. First you need the ingredients: three potatoes, two carrots, one onion, a little garlic, olive oil and salt. You also need a big pot, a knife and a bowl. My mother always says that a good soup is simple, and that you must never use a lot of salt.",
   "First you peel the potatoes and the carrots, and then you chop everything into small pieces. You slice the onion very thin. Put a little oil in the pot and fry the onion and the garlic for five minutes. Stir them slowly, because they must not burn. Then you add the potatoes and the carrots, and you pour water into the pot. You must boil the soup for thirty minutes, until the vegetables are soft.",
   "When the soup is ready, my mother puts it in a bowl and adds a little salt. Some people prefer to add cream, but she says it is not necessary. For dessert she bakes a cake with flour, sugar and honey. She never eats raw vegetables, but she loves a grilled fish on Sunday. When I cook this recipe in my own kitchen, it is never as good as hers, but I am learning. Cooking is a way to remember my family."
  ],
  "questions": [
   {
    "q": "How long does the soup boil?",
    "options": [
     "One hour",
     "Five minutes",
     "Thirty minutes"
    ],
    "answer": 2
   },
   {
    "q": "What does mother use to fry the onion and garlic?",
    "options": [
     "A little oil",
     "Butter",
     "Cream"
    ],
    "answer": 0
   },
   {
    "q": "What does she say about salt?",
    "options": [
     "You must never use a lot",
     "You need a lot",
     "It is not necessary"
    ],
    "answer": 0
   },
   {
    "q": "What does she bake for dessert?",
    "options": [
     "Bread",
     "A pie",
     "A cake with flour, sugar and honey"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator say about his own soup?",
    "options": [
     "It is better than hers",
     "It is exactly the same",
     "It is never as good as hers"
    ],
    "answer": 2
   },
   {
    "q": "How many potatoes does the recipe need?",
    "options": [
     "Three",
     "Six",
     "Two"
    ],
    "answer": 0
   },
   {
    "q": "How many carrots does it need?",
    "options": [
     "Two",
     "One",
     "Four"
    ],
    "answer": 0
   },
   {
    "q": "What kind of pot do you need?",
    "options": [
     "A small pan",
     "A big pot",
     "A frying pan"
    ],
    "answer": 1
   },
   {
    "q": "What do you do with the onion?",
    "options": [
     "Slice it very thin",
     "Grill it",
     "Boil it"
    ],
    "answer": 0
   },
   {
    "q": "How long do you fry the onion and garlic?",
    "options": [
     "Five minutes",
     "One hour",
     "Thirty minutes"
    ],
    "answer": 0
   },
   {
    "q": "Why must you stir slowly?",
    "options": [
     "The pot is hot",
     "They must not burn",
     "It is a rule"
    ],
    "answer": 1
   },
   {
    "q": "What do you pour into the pot?",
    "options": [
     "Oil",
     "Milk",
     "Water"
    ],
    "answer": 2
   },
   {
    "q": "When is the soup ready?",
    "options": [
     "When the vegetables are soft",
     "After five minutes",
     "When it is cold"
    ],
    "answer": 0
   },
   {
    "q": "What does the mother say about cream?",
    "options": [
     "It is expensive",
     "It is the best part",
     "It is not necessary"
    ],
    "answer": 2
   },
   {
    "q": "What does the mother love on Sunday?",
    "options": [
     "Pancakes",
     "Raw vegetables",
     "Grilled fish"
    ],
    "answer": 2
   }
  ]
 },
 "housework": {
  "title": "Who does what?",
  "paragraphs": [
   "In our house everybody does some housework. My mother says that a clean house is a happy house, so we have a list of chores on the kitchen wall. Every morning I make the bed and I tidy my room. My sister opens the curtains and puts the pillow and the blanket in the right place. We do not have much time on weekdays, so the big jobs are for the weekend.",
   "On Saturday my father sweeps the floor, and then I mop it with a bucket of warm water. My mother dusts the furniture and cleans the bathroom with a sponge. She puts a clean towel and a new bar of soap next to the sink. My brother does the washing-up after dinner and takes the rubbish out to the bin. He does not like this chore, but he never forgets it.",
   "After lunch we change the sheets and wash them in the washing machine. We hang the clothes in the garden, and when they are dry, we fold them. The broom and the bucket are in the cupboard behind the kitchen door. Of course, nobody loves housework, but we do it together, and the house is ready for Sunday. My mother always says: \"Many hands make light work.\" On Sunday we rest, and the house is clean and tidy."
  ],
  "questions": [
   {
    "q": "What does the narrator do every morning?",
    "options": [
     "Makes the bed and tidies the room",
     "Sweeps the floor",
     "Does the washing-up"
    ],
    "answer": 0
   },
   {
    "q": "Who mops the floor?",
    "options": [
     "The father",
     "The brother",
     "The narrator"
    ],
    "answer": 2
   },
   {
    "q": "What does the brother do after dinner?",
    "options": [
     "The mopping",
     "The dusting",
     "The washing-up"
    ],
    "answer": 2
   },
   {
    "q": "Where are the broom and the bucket?",
    "options": [
     "In the garden",
     "In the bathroom",
     "In the cupboard behind the kitchen door"
    ],
    "answer": 2
   },
   {
    "q": "What do they do on Sunday?",
    "options": [
     "They clean the house",
     "They rest",
     "They wash the sheets"
    ],
    "answer": 1
   },
   {
    "q": "Where is the list of chores?",
    "options": [
     "On the fridge",
     "On the kitchen wall",
     "In the bathroom"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator's sister do in the morning?",
    "options": [
     "Mops",
     "Cooks",
     "Opens the curtains"
    ],
    "answer": 2
   },
   {
    "q": "When do they do the big jobs?",
    "options": [
     "On weekdays",
     "At the weekend",
     "Every night"
    ],
    "answer": 1
   },
   {
    "q": "Who sweeps the floor on Saturday?",
    "options": [
     "The brother",
     "The mother",
     "The father"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator use to mop?",
    "options": [
     "A bucket of warm water",
     "A broom",
     "A sponge"
    ],
    "answer": 0
   },
   {
    "q": "What does the mother clean with a sponge?",
    "options": [
     "The bathroom",
     "The windows",
     "The floor"
    ],
    "answer": 0
   },
   {
    "q": "What does the brother take out?",
    "options": [
     "The sheets",
     "The rubbish",
     "The clothes"
    ],
    "answer": 1
   },
   {
    "q": "What do they do after lunch?",
    "options": [
     "Sleep",
     "Go out",
     "Change the sheets and wash them"
    ],
    "answer": 2
   },
   {
    "q": "Where do they hang the clothes?",
    "options": [
     "In the garden",
     "In the bathroom",
     "In the kitchen"
    ],
    "answer": 0
   },
   {
    "q": "What does the mother say?",
    "options": [
     "Rest is important",
     "Housework is fun",
     "Many hands make light work"
    ],
    "answer": 2
   }
  ]
 },
 "banking": {
  "title": "My first bank account",
  "paragraphs": [
   "When I am eighteen, I decide to open my first bank account. Until now I only have a wallet with some coins and a few notes, and a small purse for my pocket money. My father goes with me to the bank on Monday. The man at the desk explains that I need to deposit a little money, and that the account is free for young people. He asks me for my ID card and my address.",
   "Now I have a card, and I can withdraw money from the cashpoint. I check the balance every week, because I want to save a little. At the start I borrow some money from my brother, but I owe him only twenty euros, and I pay it back at the end of the month. My friend lends me a book about money, and I learn many new words: tax, interest, loan and currency.",
   "I cannot afford a car, but I want to rent a small flat when I finish university. The rent is high, so I must find a job. Last month I find a bargain in a second-hand shop and I buy a jacket worth sixty euros for only twenty. When I travel abroad, I exchange my euros for the local currency, and I never pay by cheque. My father says that a good habit is simple: do not spend more than you earn. I think he is right."
  ],
  "questions": [
   {
    "q": "Why does the narrator open a bank account?",
    "options": [
     "He is eighteen",
     "He wants to buy a car",
     "He wants a loan"
    ],
    "answer": 0
   },
   {
    "q": "What does the narrator owe his brother?",
    "options": [
     "Fifty euros",
     "Twenty euros",
     "A book"
    ],
    "answer": 1
   },
   {
    "q": "What does he buy in the second-hand shop?",
    "options": [
     "A wallet",
     "A book",
     "A jacket"
    ],
    "answer": 2
   },
   {
    "q": "What can the narrator not afford?",
    "options": [
     "A flat",
     "A car",
     "A jacket"
    ],
    "answer": 1
   },
   {
    "q": "What does his father say?",
    "options": [
     "Save everything",
     "Always borrow money",
     "Do not spend more than you earn"
    ],
    "answer": 2
   },
   {
    "q": "How old is the narrator?",
    "options": [
     "Twenty-five",
     "Sixteen",
     "Eighteen"
    ],
    "answer": 2
   },
   {
    "q": "Who goes with him to the bank?",
    "options": [
     "His friend",
     "His brother",
     "His father"
    ],
    "answer": 2
   },
   {
    "q": "When do they go to the bank?",
    "options": [
     "On Saturday",
     "On Monday",
     "On Friday"
    ],
    "answer": 1
   },
   {
    "q": "What does the man ask for?",
    "options": [
     "His ID card and address",
     "His salary",
     "His passport"
    ],
    "answer": 0
   },
   {
    "q": "Is the account free for young people?",
    "options": [
     "No",
     "Only for students",
     "Yes"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator check every week?",
    "options": [
     "The tax",
     "The loan",
     "The balance"
    ],
    "answer": 2
   },
   {
    "q": "When does he pay back his brother?",
    "options": [
     "Next year",
     "At the end of the month",
     "Never"
    ],
    "answer": 1
   },
   {
    "q": "What does his friend lend him?",
    "options": [
     "A book about money",
     "Some money",
     "A card"
    ],
    "answer": 0
   },
   {
    "q": "What does he want to rent when he finishes university?",
    "options": [
     "A shop",
     "A car",
     "A small flat"
    ],
    "answer": 2
   },
   {
    "q": "What does he do when he travels?",
    "options": [
     "Exchanges euros for local currency",
     "Takes no money",
     "Pays by cheque"
    ],
    "answer": 0
   }
  ]
 },
 "fashion": {
  "title": "A new wardrobe",
  "paragraphs": [
   "Marta is interested in fashion, and today she wants to buy a new wardrobe for the autumn. She starts in a small shop in the city centre. The assistant shows her a white cotton blouse with a beautiful pattern and long sleeves. The collar is perfect, but one button is loose, so she asks for another one. Marta also tries on a wool sweater, a leather jacket and a pair of warm gloves.",
   "In the next shop she looks at shoes. She does not like the old-fashioned model, so she chooses a pair of comfortable trainers and a pair of brown sandals for the weekend. A silk scarf catches her eye, but it is too expensive. Instead she buys a handbag, made of leather, and a silver bracelet. The woman at the counter shows her a necklace and a pair of earrings, but Marta says that she has enough.",
   "At the end of the day she walks past a perfume shop and decides to buy a small bottle for her mother. At work Marta has to wear a uniform, so these new clothes are for her free time. Her friend Joana thinks she buys too many things, but Marta says that fashion is her passion. She puts on her sunglasses, even if the sun is not strong, and she goes home with five big bags and a very happy smile."
  ],
  "questions": [
   {
    "q": "What season does Marta shop for?",
    "options": [
     "Summer",
     "Autumn",
     "Spring"
    ],
    "answer": 1
   },
   {
    "q": "What is wrong with the blouse?",
    "options": [
     "It is too big",
     "A button is loose",
     "It has a stain"
    ],
    "answer": 1
   },
   {
    "q": "Why does Marta not buy the silk scarf?",
    "options": [
     "It is old-fashioned",
     "She does not like silk",
     "It is too expensive"
    ],
    "answer": 2
   },
   {
    "q": "What does Marta buy for her mother?",
    "options": [
     "A scarf",
     "A necklace",
     "Perfume"
    ],
    "answer": 2
   },
   {
    "q": "Why are the new clothes for her free time?",
    "options": [
     "She wears a uniform at work",
     "She does not work",
     "She works at home"
    ],
    "answer": 0
   },
   {
    "q": "Where does Marta start shopping?",
    "options": [
     "At a shopping centre",
     "In a small shop in the city centre",
     "At a market"
    ],
    "answer": 1
   },
   {
    "q": "What does the white blouse have?",
    "options": [
     "A big collar",
     "Short sleeves",
     "A beautiful pattern and long sleeves"
    ],
    "answer": 2
   },
   {
    "q": "What does Marta ask for?",
    "options": [
     "A different colour",
     "Another button",
     "A smaller size"
    ],
    "answer": 1
   },
   {
    "q": "Which clothes does she try on?",
    "options": [
     "A raincoat",
     "A wool sweater, a leather jacket and warm gloves",
     "A silk dress"
    ],
    "answer": 1
   },
   {
    "q": "What does she think about the old-fashioned model?",
    "options": [
     "She buys it",
     "She loves it",
     "She does not like it"
    ],
    "answer": 2
   },
   {
    "q": "What shoes does she buy?",
    "options": [
     "High heels",
     "Black boots",
     "Comfortable trainers and brown sandals"
    ],
    "answer": 2
   },
   {
    "q": "What does she buy instead of the scarf?",
    "options": [
     "Earrings",
     "A necklace",
     "A leather handbag and a silver bracelet"
    ],
    "answer": 2
   },
   {
    "q": "What does she say about the necklace and the earrings?",
    "options": [
     "She buys them",
     "She has enough",
     "They are too big"
    ],
    "answer": 1
   },
   {
    "q": "Who thinks Marta buys too many things?",
    "options": [
     "Her mother",
     "Her boss",
     "Her friend Joana"
    ],
    "answer": 2
   },
   {
    "q": "What does Marta put on at the end?",
    "options": [
     "Her new jacket",
     "Her gloves",
     "Her sunglasses"
    ],
    "answer": 2
   }
  ]
 },
 "home": {
  "title": "The cottage in the hills",
  "paragraphs": [
   "Last year my parents buy a small cottage in the hills, and now it is our weekend house. The cottage is old, but it has everything we need. On the ground floor there is a big hall, a dining room and a kitchen with a lot of cupboards. In the kitchen there is a freezer where we keep the vegetables and the fish. The ceiling is low, with old wooden beams, and in the corner there is a ladder that leads to the attic.",
   "In the living room there is an armchair, where my grandfather sleeps after lunch, a bookcase full of old novels and a soft carpet. We have many cushions, and in the evening my mother lights a candle. In winter the house is cold, so my father installs a heater and buys a thick duvet for every bed. He says that central heating is too expensive for a house that we use only at the weekend. The furniture is simple and comes from a second-hand shop.",
   "Upstairs there are two bedrooms and a bathroom with a basin and a small window. My brother, who has a flatmate in the city, loves to come here at the weekend because it is quiet. Every morning I drink coffee from a big mug in the garden. Before we leave on Sunday, my father locks the door and checks every drawer. It is not a perfect house, but we love it, and we want to spend our holidays here next summer."
  ],
  "questions": [
   {
    "q": "Where is the cottage?",
    "options": [
     "In the city",
     "At the beach",
     "In the hills"
    ],
    "answer": 2
   },
   {
    "q": "Where does grandfather sleep after lunch?",
    "options": [
     "On the sofa",
     "In the garden",
     "In the armchair"
    ],
    "answer": 2
   },
   {
    "q": "Why does the father not install central heating?",
    "options": [
     "The house is too old",
     "It is too expensive for a weekend house",
     "He does not like it"
    ],
    "answer": 1
   },
   {
    "q": "Who has a flatmate?",
    "options": [
     "The narrator's brother",
     "The narrator",
     "The father"
    ],
    "answer": 0
   },
   {
    "q": "What does the father do before they leave?",
    "options": [
     "He cleans the kitchen",
     "He lights a candle",
     "He locks the door and checks the drawers"
    ],
    "answer": 2
   },
   {
    "q": "When did the parents buy the cottage?",
    "options": [
     "Ten years ago",
     "Last year",
     "Last month"
    ],
    "answer": 1
   },
   {
    "q": "What is on the ground floor?",
    "options": [
     "The attic",
     "Two bedrooms",
     "A hall, a dining room and a kitchen"
    ],
    "answer": 2
   },
   {
    "q": "What is in the kitchen freezer?",
    "options": [
     "Ice cream",
     "Bread",
     "Vegetables and fish"
    ],
    "answer": 2
   },
   {
    "q": "What is the ceiling like?",
    "options": [
     "High",
     "Low with wooden beams",
     "Very new"
    ],
    "answer": 1
   },
   {
    "q": "What leads to the attic?",
    "options": [
     "A ladder",
     "Stairs",
     "A lift"
    ],
    "answer": 0
   },
   {
    "q": "What does the bookcase have?",
    "options": [
     "Photos",
     "Old novels",
     "Toys"
    ],
    "answer": 1
   },
   {
    "q": "What does the mother do in the evening?",
    "options": [
     "Cooks",
     "Reads",
     "Lights a candle"
    ],
    "answer": 2
   },
   {
    "q": "What does the father buy for the winter?",
    "options": [
     "A heater and thick duvets",
     "A carpet",
     "A fridge"
    ],
    "answer": 0
   },
   {
    "q": "Where does the furniture come from?",
    "options": [
     "A second-hand shop",
     "The family",
     "A big store"
    ],
    "answer": 0
   },
   {
    "q": "Where does the narrator drink coffee?",
    "options": [
     "In the garden from a big mug",
     "In bed",
     "In the kitchen"
    ],
    "answer": 0
   }
  ]
 },
 "healthfit": {
  "title": "Back to health",
  "paragraphs": [
   "Two months ago, Rui injures his ankle in a football match. At first the pain is strong, and the doctor says that he has a small broken bone. The nurse puts a bandage on his foot, and Rui must lie down and rest for two weeks. He takes an aspirin when the ankle aches, and he buys the other medicine at the chemist. The treatment is slow, but the doctor says that he will recover completely.",
   "During this time Rui thinks a lot about his lifestyle. He works long hours, he has a lot of stress and he does not eat well. His diet is poor: he drinks too much coffee, and he eats a lot of sugar and very little fruit. The doctor tells him that vitamins are important and that a healthy diet is the best medicine. He also advises him to keep fit with easy exercise, like swimming, which does not hurt the ankle.",
   "Now Rui feels better. He is not ill any more, and the wound on his leg is nearly gone. He learns to breathe slowly when he is nervous, and he avoids big infections by washing his hands. He still has an allergy to cats, but that is not a big problem. Last week he starts to swim twice a week. He says that an injury is bad luck, but it also teaches you to take care of your body. His family is proud of him."
  ],
  "questions": [
   {
    "q": "How does Rui injure his ankle?",
    "options": [
     "On the stairs",
     "At work",
     "In a football match"
    ],
    "answer": 2
   },
   {
    "q": "What does the doctor say about the bone?",
    "options": [
     "It is fine",
     "It is very serious",
     "It is slightly broken"
    ],
    "answer": 2
   },
   {
    "q": "What is wrong with Rui's diet?",
    "options": [
     "He drinks too much coffee and eats little fruit",
     "He does not eat at all",
     "He eats too much fruit"
    ],
    "answer": 0
   },
   {
    "q": "Which exercise does the doctor advise?",
    "options": [
     "Football",
     "Swimming",
     "Running"
    ],
    "answer": 1
   },
   {
    "q": "What allergy does Rui have?",
    "options": [
     "An allergy to cats",
     "An allergy to dogs",
     "An allergy to fish"
    ],
    "answer": 0
   },
   {
    "q": "When did Rui injure his ankle?",
    "options": [
     "Last year",
     "Last week",
     "Two months ago"
    ],
    "answer": 2
   },
   {
    "q": "What does the nurse put on his foot?",
    "options": [
     "A bandage",
     "A shoe",
     "A plaster"
    ],
    "answer": 0
   },
   {
    "q": "How long must he lie down and rest?",
    "options": [
     "Two days",
     "Two weeks",
     "Two months"
    ],
    "answer": 1
   },
   {
    "q": "What does he take when the ankle aches?",
    "options": [
     "Vitamins",
     "An aspirin",
     "Tea"
    ],
    "answer": 1
   },
   {
    "q": "Where does he buy the medicine?",
    "options": [
     "At the chemist",
     "At the supermarket",
     "At the hospital"
    ],
    "answer": 0
   },
   {
    "q": "What is Rui's lifestyle like?",
    "options": [
     "Calm and relaxed",
     "Long hours and a lot of stress",
     "Very active"
    ],
    "answer": 1
   },
   {
    "q": "What does the doctor say is the best medicine?",
    "options": [
     "Sleep",
     "A healthy diet",
     "Rest"
    ],
    "answer": 1
   },
   {
    "q": "What does Rui learn to do when he is nervous?",
    "options": [
     "Breathe slowly",
     "Run",
     "Eat sugar"
    ],
    "answer": 0
   },
   {
    "q": "How often does he swim now?",
    "options": [
     "Once a month",
     "Twice a week",
     "Every day"
    ],
    "answer": 1
   },
   {
    "q": "What does the injury teach him?",
    "options": [
     "To take care of his body",
     "To avoid football",
     "To work more"
    ],
    "answer": 0
   }
  ]
 },
 "environment": {
  "title": "A greener town",
  "paragraphs": [
   "Our town has a big pollution problem, and last year the mayor decides to make it greener. The first thing is waste. In every street there is now a bottle bank and three different bins for paper, plastic and glass. Before, many people left litter on the beach, but now volunteers clean it every Saturday. Children learn at school that recycling is important, and they teach their parents.",
   "The second change is transport. The town builds new bus lines, and public transport is cheaper than before, so fewer people use their cars. This reduces the pollution and the use of fuel. The council also installs solar panels on the roof of the school. They say that renewable energy is a good resource for the future, because the town has about three hundred days of sun every year. The electricity bill is already lower.",
   "Of course, not everybody agrees with the changes. Some shop owners think that the new rules damage their business, and some old people do not like to separate the rubbish. But the results are clear: there is less plastic in the sea, and the river is cleaner. Last winter there was a flood in a nearby town, and everybody understands that climate change is real. A drought or a flood can destroy a whole region. Our town is small, but we want to fight global warming and protect the species that are endangered."
  ],
  "questions": [
   {
    "q": "What is the first thing the town changes?",
    "options": [
     "Transport",
     "Waste",
     "Energy"
    ],
    "answer": 1
   },
   {
    "q": "Who cleans the beach on Saturdays?",
    "options": [
     "The mayor",
     "Volunteers",
     "Children"
    ],
    "answer": 1
   },
   {
    "q": "Where does the town install solar panels?",
    "options": [
     "At the beach",
     "On the roof of the school",
     "At the bank"
    ],
    "answer": 1
   },
   {
    "q": "Why do some people disagree?",
    "options": [
     "They like pollution",
     "They think the rules damage business",
     "They do not know about it"
    ],
    "answer": 1
   },
   {
    "q": "What happened last winter in a nearby town?",
    "options": [
     "A fire",
     "A drought",
     "A flood"
    ],
    "answer": 2
   },
   {
    "q": "Who decides to make the town greener?",
    "options": [
     "A company",
     "The mayor",
     "The students"
    ],
    "answer": 1
   },
   {
    "q": "What are the three different bins for?",
    "options": [
     "Clothes, paper and glass",
     "Paper, plastic and glass",
     "Food, metal and wood"
    ],
    "answer": 1
   },
   {
    "q": "How often do volunteers clean the beach?",
    "options": [
     "Every day",
     "Once a year",
     "Every Saturday"
    ],
    "answer": 2
   },
   {
    "q": "Who teaches their parents about recycling?",
    "options": [
     "The children",
     "The mayor",
     "The teachers"
    ],
    "answer": 0
   },
   {
    "q": "What does cheaper public transport reduce?",
    "options": [
     "Pollution and the use of fuel",
     "Taxes",
     "Noise only"
    ],
    "answer": 0
   },
   {
    "q": "How many days of sun does the town have?",
    "options": [
     "About a hundred",
     "About fifty",
     "About three hundred"
    ],
    "answer": 2
   },
   {
    "q": "What is lower thanks to the solar panels?",
    "options": [
     "The rent",
     "The taxes",
     "The electricity bill"
    ],
    "answer": 2
   },
   {
    "q": "What do some old people not like?",
    "options": [
     "Buses",
     "Solar panels",
     "Separating the rubbish"
    ],
    "answer": 2
   },
   {
    "q": "What is the river like now?",
    "options": [
     "Dry",
     "Cleaner",
     "Dirtier"
    ],
    "answer": 1
   },
   {
    "q": "What do the people want to protect?",
    "options": [
     "Endangered species",
     "Old buildings",
     "New roads"
    ],
    "answer": 0
   }
  ]
 },
 "nature": {
  "title": "A trip to the jungle",
  "paragraphs": [
   "Carlos loves wildlife, and last summer he finally explores the jungle with a small group of tourists. The journey starts on the coast, where a boat takes them up a long river. In the first hour they see a dolphin, and a guide says that this species is very rare. When they reach the jungle, the air is hot and humid, and the mosquitoes are a real problem. Everybody wears long clothes and uses a good spray.",
   "The guide explains that thousands of species live here, from the tiny insect on a leaf to the large animals that hide in the cave behind the waterfall. On a branch above their heads there is a colourful parrot, and in the distance they hear a monkey. Carlos takes many photos of the fur of a wild cat, but from a safe distance. They do not see a shark or a penguin, of course, because these animals live in the sea and in the cold south.",
   "At night they sleep in a small camp near a big rock. In the morning they walk to the waterfall, and the water is cold and clear. Carlos sits on the sand of a small beach and thinks about his planet. He remembers that a jungle is a precious place, and that people must protect it. On the way home he sees the coast again, and he wants to explore another continent, maybe Australia, where there are kangaroos, or Africa, to see a zebra. It is a trip that he never forgets."
  ],
  "questions": [
   {
    "q": "Where does Carlos start his journey?",
    "options": [
     "In the city",
     "On the coast",
     "In the mountains"
    ],
    "answer": 1
   },
   {
    "q": "What do they see in the first hour?",
    "options": [
     "A parrot",
     "A shark",
     "A dolphin"
    ],
    "answer": 2
   },
   {
    "q": "What is a real problem in the jungle?",
    "options": [
     "Cold weather",
     "Dolphins",
     "Mosquitoes"
    ],
    "answer": 2
   },
   {
    "q": "Where do they sleep?",
    "options": [
     "In a hotel",
     "In a cave",
     "In a small camp near a big rock"
    ],
    "answer": 2
   },
   {
    "q": "Which continent does Carlos want to explore next?",
    "options": [
     "Europe",
     "Australia or Africa",
     "Asia only"
    ],
    "answer": 1
   },
   {
    "q": "What does Carlos love?",
    "options": [
     "Cities",
     "Cars",
     "Wildlife"
    ],
    "answer": 2
   },
   {
    "q": "Who goes on the trip with him?",
    "options": [
     "A small group of tourists",
     "His family",
     "A school"
    ],
    "answer": 0
   },
   {
    "q": "How do they travel up the river?",
    "options": [
     "On foot",
     "By boat",
     "By car"
    ],
    "answer": 1
   },
   {
    "q": "What is the air like in the jungle?",
    "options": [
     "Cold and dry",
     "Hot and humid",
     "Windy"
    ],
    "answer": 1
   },
   {
    "q": "What do they wear because of the mosquitoes?",
    "options": [
     "Raincoats",
     "Shorts",
     "Long clothes"
    ],
    "answer": 2
   },
   {
    "q": "What does Carlos see on a branch?",
    "options": [
     "A cat",
     "A colourful parrot",
     "A monkey"
    ],
    "answer": 1
   },
   {
    "q": "What does Carlos photograph?",
    "options": [
     "A waterfall",
     "A shark",
     "The fur of a wild cat"
    ],
    "answer": 2
   },
   {
    "q": "Why do they not see a shark or a penguin?",
    "options": [
     "They sleep",
     "They are afraid",
     "They live in the sea and the cold south"
    ],
    "answer": 2
   },
   {
    "q": "What is the water of the waterfall like?",
    "options": [
     "Warm",
     "Dirty",
     "Cold and clear"
    ],
    "answer": 2
   },
   {
    "q": "What does Carlos think about on the sand?",
    "options": [
     "His job",
     "His planet",
     "His family"
    ],
    "answer": 1
   }
  ]
 },
 "media": {
  "title": "The festival",
  "paragraphs": [
   "Every August our town has a music and film festival, and this year I decide to go with my friends. The festival is famous, and every year thousands of people come to see the performances. On the first night a young orchestra plays a symphony in the square, and the audience listens in silence. After the concert the presenter, who is funny and very popular, interviews the best musician of the night.",
   "The next morning I read an article in the newspaper about the festival. The headline says \"A night to remember\", and the review is excellent. A friend recommends a documentary about wild animals, and in the evening we go to see it. The plot is simple, but the scenes are beautiful. After the film there is a long discussion with the director. Another friend prefers cartoons, so we watch one for the children on Sunday morning.",
   "During the festival there is also an exhibition of old posters, with some adverts from the sixties. They are funny, and they show the humour of that time. We meet a celebrity, a famous poet who reads a poem on the stage, and we take a selfie with him. I also buy a bestseller in the bookshop, a book about a young hero who saves his village. It is a great weekend, and I already want to go back next year. I tell everybody that culture is the best holiday."
  ],
  "questions": [
   {
    "q": "When is the festival?",
    "options": [
     "In May",
     "In December",
     "In August"
    ],
    "answer": 2
   },
   {
    "q": "What does the orchestra play?",
    "options": [
     "A cartoon",
     "A song",
     "A symphony"
    ],
    "answer": 2
   },
   {
    "q": "What does the newspaper headline say?",
    "options": [
     "A night to remember",
     "Free tickets",
     "Big storm tomorrow"
    ],
    "answer": 0
   },
   {
    "q": "What does the documentary show?",
    "options": [
     "Wild animals",
     "A young hero",
     "Old posters"
    ],
    "answer": 0
   },
   {
    "q": "Who reads a poem on the stage?",
    "options": [
     "The presenter",
     "A famous poet",
     "The narrator"
    ],
    "answer": 1
   },
   {
    "q": "What kind of festival is it?",
    "options": [
     "Food and wine",
     "Sports",
     "Music and film"
    ],
    "answer": 2
   },
   {
    "q": "Who does the narrator go with?",
    "options": [
     "His friends",
     "His family",
     "His teacher"
    ],
    "answer": 0
   },
   {
    "q": "Where does the orchestra play?",
    "options": [
     "In the square",
     "In a theatre",
     "In a church"
    ],
    "answer": 0
   },
   {
    "q": "What is the presenter like?",
    "options": [
     "Shy",
     "Funny and very popular",
     "Serious"
    ],
    "answer": 1
   },
   {
    "q": "What does the newspaper review say?",
    "options": [
     "It is excellent",
     "It is short",
     "It is bad"
    ],
    "answer": 0
   },
   {
    "q": "Who recommends the documentary?",
    "options": [
     "The director",
     "A friend",
     "The presenter"
    ],
    "answer": 1
   },
   {
    "q": "What is the plot of the documentary like?",
    "options": [
     "Simple",
     "Very complex",
     "Boring"
    ],
    "answer": 0
   },
   {
    "q": "What is in the exhibition?",
    "options": [
     "Modern paintings",
     "Old posters with adverts from the sixties",
     "Photos of animals"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator do with the poet?",
    "options": [
     "Takes a selfie",
     "Asks for a poem",
     "Buys his book"
    ],
    "answer": 0
   },
   {
    "q": "What does the bestseller tell?",
    "options": [
     "A crime",
     "A story about a young hero who saves his village",
     "A love story"
    ],
    "answer": 1
   }
  ]
 },
 "tech": {
  "title": "My digital life",
  "paragraphs": [
   "I am a student, and I use technology all day. In the morning my smartphone wakes me up. I check my text messages, I reply to my friends and I listen to a podcast on the bus. At university I use my laptop to write my essays, and I upload my work to the website of the school. The connection is usually good, but sometimes the server is down, and I cannot send my file before the deadline.",
   "I also have a blog, where I write about films and music. Readers leave a comment under my articles, and I always reply. To keep the blog secure, I install new software every month and I delete the old data that I do not need. My brother thinks that technology is a great invention, because he uses a webcam to talk to his girlfriend, who lives in another country. He says that without it he could not connect with her.",
   "However, I think we depend too much on machines. Yesterday I forgot my smartphone at home, and I felt lost. In some houses a robot cleans the floor, and the equipment in the kitchen talks to you. It is amazing, but also a little scary. Last week I decide to sign up for a course about digital safety, because I want to protect my personal data. My plan for the year is simple: use technology, but do not let it use me. I want some time without a screen every day."
  ],
  "questions": [
   {
    "q": "What does the narrator do on the bus?",
    "options": [
     "Calls a friend",
     "Writes an essay",
     "Listens to a podcast"
    ],
    "answer": 2
   },
   {
    "q": "What problem happens sometimes at university?",
    "options": [
     "The laptop is slow",
     "The webcam is broken",
     "The server is down"
    ],
    "answer": 2
   },
   {
    "q": "What does the brother use to talk to his girlfriend?",
    "options": [
     "A blog",
     "A robot",
     "A webcam"
    ],
    "answer": 2
   },
   {
    "q": "What happens when the narrator forgets his smartphone?",
    "options": [
     "He is happy",
     "He buys a new one",
     "He feels lost"
    ],
    "answer": 2
   },
   {
    "q": "What is the narrator's plan for the year?",
    "options": [
     "Stop using technology",
     "Use technology but not depend on it",
     "Buy new equipment"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator use at university?",
    "options": [
     "A laptop",
     "A typewriter",
     "A tablet only"
    ],
    "answer": 0
   },
   {
    "q": "Where does he upload his work?",
    "options": [
     "To the website of the school",
     "To a blog",
     "To his phone"
    ],
    "answer": 0
   },
   {
    "q": "What is the connection usually like?",
    "options": [
     "Non-existent",
     "Good",
     "Terrible"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator write about on his blog?",
    "options": [
     "Films and music",
     "Football",
     "Cooking"
    ],
    "answer": 0
   },
   {
    "q": "How often does he install new software?",
    "options": [
     "Every year",
     "Every day",
     "Every month"
    ],
    "answer": 2
   },
   {
    "q": "What does he delete?",
    "options": [
     "Photos",
     "Old data",
     "Emails"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator's brother think of technology?",
    "options": [
     "It is dangerous",
     "It is a great invention",
     "It is boring"
    ],
    "answer": 1
   },
   {
    "q": "What does a robot do in some houses?",
    "options": [
     "Drives",
     "Cooks",
     "Cleans the floor"
    ],
    "answer": 2
   },
   {
    "q": "What did the narrator sign up for last week?",
    "options": [
     "A blog",
     "A course about digital safety",
     "A football club"
    ],
    "answer": 1
   },
   {
    "q": "What does he want every day?",
    "options": [
     "More screen time",
     "A new phone",
     "Some time without a screen"
    ],
    "answer": 2
   }
  ]
 },
 "career": {
  "title": "Looking for a new job",
  "paragraphs": [
   "Sofia is a designer and she works full time in a small company, but she wants a new career. Her employer is nice, but the salary is low, and she does not earn enough to pay her rent. One morning she sees an advert for an architect's office and decides to apply. She prepares her application carefully: a short letter, a good CV and a list of her qualifications. She is a professional person, and she knows that the first impression is important.",
   "A week later the company calls her for an interview. There are ten candidates, and the owner of the company, a very serious man, asks a lot of questions. He wants to know about her experience, her projects and her ideas. Sofia is nervous, but she speaks calmly. At the end he says that he will send her a contract if she is the right person. She leaves the office with a smile, but she cannot be sure.",
   "In the meantime she goes to a conference about design, where she meets a lecturer from the university and a photographer who needs a designer for a book. They give her their cards. A week later the architect calls her and offers a part time job, with the possibility of a full time contract after six months. She is not out of work, so she can take her time. In the end she accepts the offer, because the profession is her passion, and she wants to learn from the best."
  ],
  "questions": [
   {
    "q": "What is Sofia's profession?",
    "options": [
     "Architect",
     "Designer",
     "Lecturer"
    ],
    "answer": 1
   },
   {
    "q": "Why does she want a new job?",
    "options": [
     "She is out of work",
     "She hates her boss",
     "The salary is low"
    ],
    "answer": 2
   },
   {
    "q": "How many candidates are there?",
    "options": [
     "Twenty",
     "Five",
     "Ten"
    ],
    "answer": 2
   },
   {
    "q": "Where does she meet a lecturer and a photographer?",
    "options": [
     "At the interview",
     "At a conference",
     "At the office"
    ],
    "answer": 1
   },
   {
    "q": "What does the architect offer her?",
    "options": [
     "A full time contract",
     "A part time job with a possible full time contract",
     "A short course"
    ],
    "answer": 1
   },
   {
    "q": "Where does Sofia work now?",
    "options": [
     "In a school",
     "In a big bank",
     "In a small company"
    ],
    "answer": 2
   },
   {
    "q": "Why does she not earn enough?",
    "options": [
     "She works part time",
     "She has no job",
     "Her salary is low"
    ],
    "answer": 2
   },
   {
    "q": "Where does she see an advert?",
    "options": [
     "For an architect's office",
     "On television",
     "In a shop window"
    ],
    "answer": 0
   },
   {
    "q": "What does she prepare for the application?",
    "options": [
     "A short letter, a CV and a list of qualifications",
     "A photo",
     "Only a CV"
    ],
    "answer": 0
   },
   {
    "q": "Who interviews her?",
    "options": [
     "A secretary",
     "The owner of the company",
     "A friend"
    ],
    "answer": 1
   },
   {
    "q": "What is the owner like?",
    "options": [
     "Very young",
     "A very serious man",
     "A funny woman"
    ],
    "answer": 1
   },
   {
    "q": "How does Sofia feel at the interview?",
    "options": [
     "Nervous but calm",
     "Bored",
     "Angry"
    ],
    "answer": 0
   },
   {
    "q": "Who needs a designer for a book?",
    "options": [
     "A journalist",
     "A lecturer",
     "A photographer"
    ],
    "answer": 2
   },
   {
    "q": "When can the part time job become full time?",
    "options": [
     "After a week",
     "After six months",
     "After ten years"
    ],
    "answer": 1
   },
   {
    "q": "Why does she accept the offer?",
    "options": [
     "The profession is her passion",
     "The salary is high",
     "She has no other offer"
    ],
    "answer": 0
   }
  ]
 },
 "society": {
  "title": "A neighbourhood that cares",
  "paragraphs": [
   "Our neighbourhood is a small community of about two thousand people, and people from many different backgrounds live here. There are young families, elderly people, students and several immigrants who arrived a few years ago from Brazil and Ukraine. At first the relationship between the groups was not easy, because each generation had its own customs and traditions. Some people felt that the minority groups did not want to join the community, and a few cases of discrimination appeared in the local school.",
   "The change started with a simple idea. A group of citizens organised a weekly dinner in the square, where everybody could bring a dish from their own culture. Slowly the attitude of the neighbours changed. The elderly, who often felt alone, finally had company, and the children learned that a different lifestyle is not a threat. The local charity also began to help homeless people in winter, with blankets, hot food and a place to sleep.",
   "Of course, many problems remain. Unemployment among young people is still high, and poverty affects several families. The pressure on teenagers to find a good job is enormous, and the influence of social media makes their behaviour more difficult to understand. But the population of the neighbourhood is learning that equality is not only a word. The mayor says that the secret is respect and dialogue. As one resident says, \"A good community is not a place where everybody is the same. It is a place where everybody has a place.\""
  ],
  "questions": [
   {
    "q": "What was the first problem between the groups?",
    "options": [
     "There was no work",
     "Each generation had different customs and some people felt excluded",
     "There was no school"
    ],
    "answer": 1
   },
   {
    "q": "What did the citizens organise in the square?",
    "options": [
     "A weekly dinner with dishes from different cultures",
     "A concert",
     "A protest"
    ],
    "answer": 0
   },
   {
    "q": "Who does the charity help in winter?",
    "options": [
     "Homeless people",
     "Students",
     "Immigrants"
    ],
    "answer": 0
   },
   {
    "q": "What problems remain?",
    "options": [
     "Noise",
     "Youth unemployment and poverty",
     "Pollution"
    ],
    "answer": 1
   },
   {
    "q": "What does the resident say about a good community?",
    "options": [
     "Nobody changes",
     "Everybody is the same",
     "Everybody has a place in it"
    ],
    "answer": 2
   },
   {
    "q": "About how many people live in the neighbourhood?",
    "options": [
     "Twenty thousand",
     "Two thousand",
     "Two hundred"
    ],
    "answer": 1
   },
   {
    "q": "Where did some immigrants come from?",
    "options": [
     "Spain and France",
     "Italy and Greece",
     "Brazil and Ukraine"
    ],
    "answer": 2
   },
   {
    "q": "What did some people feel about the minority groups?",
    "options": [
     "They did not want to join the community",
     "They were dangerous",
     "They were rich"
    ],
    "answer": 0
   },
   {
    "q": "Where did cases of discrimination appear?",
    "options": [
     "In the local school",
     "In the market",
     "At work"
    ],
    "answer": 0
   },
   {
    "q": "Where was the weekly dinner organised?",
    "options": [
     "In a school",
     "At the church",
     "In the square"
    ],
    "answer": 2
   },
   {
    "q": "What did the children learn?",
    "options": [
     "To cook",
     "To speak Ukrainian",
     "A different lifestyle is not a threat"
    ],
    "answer": 2
   },
   {
    "q": "What did the charity give homeless people?",
    "options": [
     "Money",
     "Blankets, hot food and a place to sleep",
     "Jobs"
    ],
    "answer": 1
   },
   {
    "q": "What is still high among young people?",
    "options": [
     "Taxes",
     "Prices",
     "Unemployment"
    ],
    "answer": 2
   },
   {
    "q": "What makes teenagers' behaviour harder to understand?",
    "options": [
     "The school",
     "The influence of social media",
     "Their parents"
    ],
    "answer": 1
   },
   {
    "q": "What does the mayor say is the secret?",
    "options": [
     "Respect and dialogue",
     "Money",
     "Rules"
    ],
    "answer": 0
   }
  ]
 },
 "science": {
  "title": "The laboratory at night",
  "paragraphs": [
   "Dr Helena Costa is a scientist who works at a research laboratory in Lisbon. For five years she and her team have been studying a rare gene that may cause a serious illness. Every day they do the same routine: they prepare an experiment, observe the cells under the microscope and measure every small change. Dr Costa says that research is a slow job, because one single discovery needs thousands of hours of work, and sometimes the result is just a new question.",
   "Last winter the team had a breakthrough. After analysing the data of two hundred patients, they found a chemical that seemed to protect the cells. The evidence was not complete, so they had to repeat the experiment many times. Their first hypothesis was wrong, but the second one was right. The theory is still new, and other scientists doubt it, but a famous journal published the results, and now several laboratories in Europe want to work with them.",
   "Dr Costa knows that science is also about patience and honesty. She often tells young students that the formula for success is simple: ask good questions, never stop doubting and share the results. She remembers that the first vaccine against many diseases was born from small experiments by people who nobody knew. Biology, chemistry and physics are not only school subjects, she says, but ways of understanding an atom or a whole planet. \"Every discovery begins with curiosity,\" she says, \"and with a lot of coffee.\""
  ],
  "questions": [
   {
    "q": "What does Dr Costa study?",
    "options": [
     "A vaccine",
     "A rare gene that may cause an illness",
     "The weather"
    ],
    "answer": 1
   },
   {
    "q": "What did the team find after analysing the data?",
    "options": [
     "A new machine",
     "A chemical that seemed to protect the cells",
     "A new planet"
    ],
    "answer": 1
   },
   {
    "q": "What happened to the first hypothesis?",
    "options": [
     "It was never tested",
     "It was right",
     "It was wrong"
    ],
    "answer": 2
   },
   {
    "q": "What does Dr Costa say about the formula for success?",
    "options": [
     "Work alone",
     "Ask questions, keep doubting and share the results",
     "Never repeat an experiment"
    ],
    "answer": 1
   },
   {
    "q": "What does she say begins every discovery?",
    "options": [
     "Curiosity",
     "Money",
     "Luck"
    ],
    "answer": 0
   },
   {
    "q": "Where does Dr Costa work?",
    "options": [
     "At a hospital",
     "At a research laboratory in Lisbon",
     "At a school"
    ],
    "answer": 1
   },
   {
    "q": "How long has the team been studying the gene?",
    "options": [
     "Twenty years",
     "Five months",
     "Five years"
    ],
    "answer": 2
   },
   {
    "q": "What do they observe under the microscope?",
    "options": [
     "Atoms",
     "Plants",
     "Cells"
    ],
    "answer": 2
   },
   {
    "q": "How many patients' data did they analyse?",
    "options": [
     "Two hundred",
     "Twenty",
     "Two thousand"
    ],
    "answer": 0
   },
   {
    "q": "Why did they repeat the experiment many times?",
    "options": [
     "The evidence was not complete",
     "It was boring",
     "It was cheap"
    ],
    "answer": 0
   },
   {
    "q": "Which hypothesis was right?",
    "options": [
     "The first one",
     "The second one",
     "Neither"
    ],
    "answer": 1
   },
   {
    "q": "Who doubts the theory?",
    "options": [
     "Patients",
     "Students",
     "Other scientists"
    ],
    "answer": 2
   },
   {
    "q": "What did a famous journal do?",
    "options": [
     "Asked for money",
     "Rejected the paper",
     "Published the results"
    ],
    "answer": 2
   },
   {
    "q": "What do several laboratories in Europe want?",
    "options": [
     "To work with them",
     "To copy the formula",
     "To close the lab"
    ],
    "answer": 0
   },
   {
    "q": "What does Dr Costa tell young students?",
    "options": [
     "Never repeat experiments",
     "Ask good questions, never stop doubting and share the results",
     "Work alone"
    ],
    "answer": 1
   }
  ]
 },
 "crime": {
  "title": "The missing painting",
  "paragraphs": [
   "On a Tuesday morning the gallery in the old town opened as usual, but a guard soon noticed that one of the most valuable paintings, a portrait from the eighteenth century, had disappeared. There was no sign of a break-in, and the alarm had not worked. The police arrived within minutes and closed the building. Detective Silva, an experienced woman, began to investigate the theft. The victim was not a person but the whole city, because the painting was part of its heritage.",
   "The detective spoke to every witness. The only person who had seen something strange was a cleaner, who said that a man with a large bag had left the gallery at six o'clock. The camera showed the suspect clearly, and a day later the police arrested a well-known burglar who already had a long criminal record. The man said that he was innocent and that he had only visited the gallery as a tourist. However, the evidence was very strong: the police found small pieces of the frame in his car.",
   "Two months later the trial began. The judge listened carefully to the lawyers, and after three days the jury decided that the man was guilty. He went to prison for six years. The painting was found, but the case raised an important question about security. The mayor announced that the gallery would have better alarms and more guards. \"Crime is never a victory,\" the detective said to the journalists, \"but this time the law won.\" Many people thought the punishment was fair, although some said it was too light."
  ],
  "questions": [
   {
    "q": "What disappeared from the gallery?",
    "options": [
     "A sculpture",
     "A portrait from the eighteenth century",
     "Money"
    ],
    "answer": 1
   },
   {
    "q": "Who gave the police important information?",
    "options": [
     "A tourist",
     "A guard",
     "A cleaner"
    ],
    "answer": 2
   },
   {
    "q": "How did the police prove he was guilty?",
    "options": [
     "He confessed",
     "They found pieces of the frame in his car",
     "They found the painting at his house"
    ],
    "answer": 1
   },
   {
    "q": "How long did he go to prison for?",
    "options": [
     "Three days",
     "Two months",
     "Six years"
    ],
    "answer": 2
   },
   {
    "q": "What did the mayor announce?",
    "options": [
     "Better alarms and more guards",
     "A new gallery",
     "A new law"
    ],
    "answer": 0
   },
   {
    "q": "When did the guard notice the theft?",
    "options": [
     "On a Tuesday morning",
     "On a Saturday night",
     "On a Sunday"
    ],
    "answer": 0
   },
   {
    "q": "Was there a sign of a break-in?",
    "options": [
     "Yes, a broken door",
     "Yes, a broken window",
     "No"
    ],
    "answer": 2
   },
   {
    "q": "What had not worked?",
    "options": [
     "The camera",
     "The door",
     "The alarm"
    ],
    "answer": 2
   },
   {
    "q": "Who investigated the theft?",
    "options": [
     "The mayor",
     "A guard",
     "Detective Silva"
    ],
    "answer": 2
   },
   {
    "q": "What did the cleaner see?",
    "options": [
     "A woman with a painting",
     "A taxi",
     "A man with a large bag"
    ],
    "answer": 2
   },
   {
    "q": "What did the burglar say?",
    "options": [
     "That he did not know the gallery",
     "That he was guilty",
     "That he was innocent and had only visited as a tourist"
    ],
    "answer": 2
   },
   {
    "q": "When did the trial begin?",
    "options": [
     "A year later",
     "The next day",
     "Two months later"
    ],
    "answer": 2
   },
   {
    "q": "How long before the jury decided?",
    "options": [
     "After three days",
     "After one day",
     "After three weeks"
    ],
    "answer": 0
   },
   {
    "q": "What happened to the painting?",
    "options": [
     "It was sold",
     "It was found",
     "It disappeared forever"
    ],
    "answer": 1
   },
   {
    "q": "What did some people say about the punishment?",
    "options": [
     "It was unfair to the victim",
     "It was too light",
     "It was too hard"
    ],
    "answer": 1
   }
  ]
 },
 "business": {
  "title": "From garage to market",
  "paragraphs": [
   "Miguel is an entrepreneur, and his startup began in his parents' garage three years ago. He and his partner Inês had a simple idea: a small machine that could make fresh juice at home. At the start their budget was tiny, so they built the first product by hand and sold it to friends. Sales were slow, and in the first year the company made a loss of almost twenty thousand euros. Many people told them to stop, but they negotiated a loan with the bank and continued.",
   "The turning point was advertising. A famous blogger published a review of the machine, and suddenly the demand became enormous. The company had to invest in a factory, and the supply of fruit became a real problem. They hired fifteen employees, and Miguel learned that a good manager must deal with wages, deadlines and shareholders at the same time. One competitor tried to copy the product, but the new design was much better and the brand was already strong.",
   "Today the company exports to eight countries, and the trade with Germany is growing every month. Last year the profit was close to a million euros. However, Miguel knows that the industry is changing fast, and that a bankrupt company can appear from nowhere. He keeps his income low and reinvests everything. \"An entrepreneur must be ready to lose everything,\" he says, \"and to start again the next day.\" His partner adds a more practical piece of advice: never forget a deadline, and never trust a contract without reading it."
  ],
  "questions": [
   {
    "q": "Where did the startup begin?",
    "options": [
     "In a factory",
     "In a garage",
     "In an office"
    ],
    "answer": 1
   },
   {
    "q": "What was the result of the first year?",
    "options": [
     "No sales",
     "A big profit",
     "A loss of almost twenty thousand euros"
    ],
    "answer": 2
   },
   {
    "q": "What changed the situation?",
    "options": [
     "A new partner",
     "A review by a famous blogger",
     "A new loan"
    ],
    "answer": 1
   },
   {
    "q": "What is growing every month?",
    "options": [
     "The competitor",
     "Production costs",
     "Trade with Germany"
    ],
    "answer": 2
   },
   {
    "q": "What does Miguel say an entrepreneur must be ready for?",
    "options": [
     "To retire early",
     "To lose everything and start again",
     "To avoid risks"
    ],
    "answer": 1
   },
   {
    "q": "Who is Miguel's partner?",
    "options": [
     "His father",
     "Inês",
     "Daniel"
    ],
    "answer": 1
   },
   {
    "q": "What was the idea?",
    "options": [
     "A mobile app",
     "A machine that makes fresh juice at home",
     "A new car"
    ],
    "answer": 1
   },
   {
    "q": "How did they build the first product?",
    "options": [
     "By hand",
     "With a big budget",
     "In a factory"
    ],
    "answer": 0
   },
   {
    "q": "Who bought the first products?",
    "options": [
     "Supermarkets",
     "Schools",
     "Friends"
    ],
    "answer": 2
   },
   {
    "q": "What did they negotiate with the bank?",
    "options": [
     "A tax",
     "A loan",
     "A new office"
    ],
    "answer": 1
   },
   {
    "q": "How many employees did they hire?",
    "options": [
     "Fifteen",
     "Five",
     "Fifty"
    ],
    "answer": 0
   },
   {
    "q": "What became a real problem after demand grew?",
    "options": [
     "The supply of fruit",
     "The brand",
     "The price"
    ],
    "answer": 0
   },
   {
    "q": "To how many countries does the company export?",
    "options": [
     "Two",
     "Twenty",
     "Eight"
    ],
    "answer": 2
   },
   {
    "q": "How big was last year's profit?",
    "options": [
     "Close to a million euros",
     "Nothing",
     "Twenty thousand euros"
    ],
    "answer": 0
   },
   {
    "q": "What does Miguel do with his income?",
    "options": [
     "Saves it in a bank",
     "Spends it",
     "Keeps it low and reinvests everything"
    ],
    "answer": 2
   }
  ]
 },
 "arts": {
  "title": "A poet in the gallery",
  "paragraphs": [
   "Last month I visited an exhibition about the life and work of a great poet in a small gallery in the old town. I am not an expert on literature, but I wanted to understand why so many people consider him a genius. The first room contained a portrait of the poet, painted by one of his friends, and a few pages of his handwriting. The style of the drawing was simple, but the eyes seemed to follow you across the room.",
   "In the second room there was a series of paintings and sculptures inspired by his poems. A landscape of the sea at sunset hung next to a verse about loneliness, and a small sculpture of a woman carried a line about hope. The curator explained that the poet had a rare talent for turning everyday emotions into images. A critic had once called one of his poems a masterpiece, and a symphony written by a young composer in his honour played softly in the background.",
   "What impressed me most was the room about folklore. The poet had collected old stories and songs from the villages in the north, and he said that culture is a heritage that every generation must protect. Before leaving, I took a moment to look at an empty canvas on the wall. The note beside it said: \"Every reader paints his own picture.\" I think this is the real lesson of art: a creative work does not belong only to the artist, but also to everyone who looks at it, reads it or listens to it with an open mind."
  ],
  "questions": [
   {
    "q": "Where was the exhibition?",
    "options": [
     "In a museum in Lisbon",
     "In a small gallery in the old town",
     "In a school"
    ],
    "answer": 1
   },
   {
    "q": "What did the first room contain?",
    "options": [
     "A sculpture",
     "A portrait and pages of handwriting",
     "A symphony"
    ],
    "answer": 1
   },
   {
    "q": "What inspired the paintings and sculptures?",
    "options": [
     "The poet's poems",
     "A film",
     "A play"
    ],
    "answer": 0
   },
   {
    "q": "What did the poet collect in the north?",
    "options": [
     "Photos",
     "Old stories and songs",
     "Paintings"
    ],
    "answer": 1
   },
   {
    "q": "What did the note by the empty canvas say?",
    "options": [
     "Do not touch",
     "Every reader paints his own picture",
     "Art is only for experts"
    ],
    "answer": 1
   },
   {
    "q": "Who painted the poet's portrait?",
    "options": [
     "One of his friends",
     "A famous painter",
     "The curator"
    ],
    "answer": 0
   },
   {
    "q": "What seemed to follow you across the room?",
    "options": [
     "A sculpture",
     "The eyes in the portrait",
     "The poems"
    ],
    "answer": 1
   },
   {
    "q": "What hung next to the verse about loneliness?",
    "options": [
     "A portrait",
     "A landscape of the sea at sunset",
     "A canvas"
    ],
    "answer": 1
   },
   {
    "q": "What did the small sculpture carry?",
    "options": [
     "A song",
     "A line about hope",
     "A poem about love"
    ],
    "answer": 1
   },
   {
    "q": "Who spoke about the poet's talent?",
    "options": [
     "A friend",
     "The curator",
     "A critic"
    ],
    "answer": 1
   },
   {
    "q": "What did a critic call one poem?",
    "options": [
     "Too long",
     "A failure",
     "A masterpiece"
    ],
    "answer": 2
   },
   {
    "q": "What played softly in the background?",
    "options": [
     "A folk song",
     "A symphony by a young composer",
     "The poet's voice"
    ],
    "answer": 1
   },
   {
    "q": "What did the poet say about culture?",
    "options": [
     "It is expensive",
     "It is only for experts",
     "It is a heritage every generation must protect"
    ],
    "answer": 2
   },
   {
    "q": "What was on the wall before the narrator left?",
    "options": [
     "A portrait",
     "A poem",
     "An empty canvas"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator think about a creative work?",
    "options": [
     "It belongs to everyone who looks at it",
     "It has no meaning",
     "It belongs to the artist only"
    ],
    "answer": 0
   }
  ]
 },
 "global": {
  "title": "Elections and crises",
  "paragraphs": [
   "In the last ten years the world has seen a number of serious crises, and in every one of them the government of each country had to make difficult decisions. In one country an economic crisis led to high inflation and unemployment. People protested in the streets, and the trade unions called a strike that stopped the trains for a week. The new minister announced a different policy: lower taxes for small businesses and more help for families.",
   "In another region a long war forced thousands of refugees to leave their homes and cross the border. Neighbouring countries received them with different attitudes. Some opened their doors and offered food and shelter, while others closed the border. International organisations asked governments to respect human rights, but the answer was slow. After months of negotiations, the countries signed a treaty that created a common plan for the refugees, and the parliament of each country had to approve it.",
   "Many experts say that globalisation makes these problems more complex, because a crisis in one country quickly affects the economy of all the others. At the same time, it creates new opportunities for peace and for development. In a democracy, citizens have a power that is simple but important: they can vote in the next election and choose another policy. Even so, many young people feel that the political system does not listen to them. A recent survey shows that more than half of them do not trust any party, and the strongest demand is for more peace, more equality and a real solution to the climate crisis."
  ],
  "questions": [
   {
    "q": "What did the trade unions do?",
    "options": [
     "They called a strike that stopped the trains",
     "They signed a treaty",
     "They closed the border"
    ],
    "answer": 0
   },
   {
    "q": "What forced thousands of people to leave their homes?",
    "options": [
     "A long war",
     "A strike",
     "An election"
    ],
    "answer": 0
   },
   {
    "q": "What did the countries sign?",
    "options": [
     "A trade agreement",
     "A treaty with a common plan for refugees",
     "A peace agreement with a minister"
    ],
    "answer": 1
   },
   {
    "q": "What can citizens do in a democracy?",
    "options": [
     "Change the constitution",
     "Vote in the next election",
     "Close the border"
    ],
    "answer": 1
   },
   {
    "q": "What does the survey show about young people?",
    "options": [
     "They do not care",
     "They all trust the parliament",
     "More than half do not trust any party"
    ],
    "answer": 2
   },
   {
    "q": "What did the economic crisis cause?",
    "options": [
     "High inflation and unemployment",
     "Peace",
     "High wages"
    ],
    "answer": 0
   },
   {
    "q": "What did people do in the streets?",
    "options": [
     "They protested",
     "They worked",
     "They celebrated"
    ],
    "answer": 0
   },
   {
    "q": "How long did the strike stop the trains?",
    "options": [
     "For a year",
     "For a day",
     "For a week"
    ],
    "answer": 2
   },
   {
    "q": "What did the new minister announce?",
    "options": [
     "Lower taxes for small businesses and more help for families",
     "A war",
     "Higher taxes"
    ],
    "answer": 0
   },
   {
    "q": "What did some neighbouring countries do with refugees?",
    "options": [
     "Gave them jobs",
     "Sent them home immediately",
     "Offered food and shelter"
    ],
    "answer": 2
   },
   {
    "q": "What did other countries do?",
    "options": [
     "Built schools",
     "Closed the border",
     "Gave them houses"
    ],
    "answer": 1
   },
   {
    "q": "What did international organisations ask governments to do?",
    "options": [
     "Raise taxes",
     "Respect human rights",
     "Close borders"
    ],
    "answer": 1
   },
   {
    "q": "Who had to approve the treaty?",
    "options": [
     "The president",
     "The army",
     "The parliament of each country"
    ],
    "answer": 2
   },
   {
    "q": "What does globalisation make crises?",
    "options": [
     "More complex",
     "Less important",
     "Shorter"
    ],
    "answer": 0
   },
   {
    "q": "What is the strongest demand of young people?",
    "options": [
     "More money",
     "More peace, more equality and a solution to the climate crisis",
     "Less school"
    ],
    "answer": 1
   }
  ]
 },
 "academic": {
  "title": "Studying a phenomenon",
  "paragraphs": [
   "Every research project begins with a simple question, but a good academic approach demands much more than curiosity. Imagine that a university wants to understand why some students abandon their studies in the first year. The team must first define the concept clearly, because \"abandon\" can mean different things depending on the context. They also have to decide which factors to analyse: money, motivation, family problems or the quality of teaching.",
   "The next stage is the methodology. A sufficient number of students must be interviewed, and the researchers must control every variable that could change the results. If the framework is weak, the conclusions will not be consistent. The team then has to evaluate the data and interpret the results with great care. A significant correlation does not always prove a cause, and it is easy to assume something that the evidence does not support.",
   "When the study is finished, the implications are discussed from several perspectives. One group may argue that the outcome shows a lack of financial support, while another sees a problem with the criterion used to select students. A careful researcher knows that the scope of any study is limited, and that a new project will probably derive from the findings of the first one. Finally, whoever undertakes this kind of work must accept that a phenomenon rarely has a single explanation. As a lecturer once said, \"Good research does not give final answers. It gives better questions.\""
  ],
  "questions": [
   {
    "q": "What does the team need to define clearly first?",
    "options": [
     "The deadline",
     "The budget",
     "The concept"
    ],
    "answer": 2
   },
   {
    "q": "What happens if the framework is weak?",
    "options": [
     "The results improve",
     "The conclusions will not be consistent",
     "The study becomes cheaper"
    ],
    "answer": 1
   },
   {
    "q": "What is true about a significant correlation?",
    "options": [
     "It does not always prove a cause",
     "It is never useful",
     "It always proves a cause"
    ],
    "answer": 0
   },
   {
    "q": "What can the researchers discuss when the study ends?",
    "options": [
     "The implications from different perspectives",
     "Only the methodology",
     "Only the budget"
    ],
    "answer": 0
   },
   {
    "q": "What does the lecturer say good research gives?",
    "options": [
     "Large profits",
     "Final answers",
     "Better questions"
    ],
    "answer": 2
   },
   {
    "q": "What question does the university want to answer?",
    "options": [
     "Why students study hard",
     "Why fees are high",
     "Why some students abandon their studies in the first year"
    ],
    "answer": 2
   },
   {
    "q": "Which factors may be analysed?",
    "options": [
     "Only food",
     "Money, motivation, family problems and quality of teaching",
     "Only weather"
    ],
    "answer": 1
   },
   {
    "q": "Who must be interviewed in a sufficient number?",
    "options": [
     "Teachers",
     "Students",
     "Parents"
    ],
    "answer": 1
   },
   {
    "q": "What must the researchers control?",
    "options": [
     "The results only",
     "Every variable",
     "The weather"
    ],
    "answer": 1
   },
   {
    "q": "What must they do with the data?",
    "options": [
     "Hide it",
     "Evaluate and interpret it with care",
     "Delete it"
    ],
    "answer": 1
   },
   {
    "q": "What is easy to do, according to the text?",
    "options": [
     "Prove a cause",
     "Avoid errors",
     "Assume something that the evidence does not support"
    ],
    "answer": 2
   },
   {
    "q": "What may one group argue about the outcome?",
    "options": [
     "It shows a good system",
     "It shows laziness",
     "It shows a lack of financial support"
    ],
    "answer": 2
   },
   {
    "q": "What may another group see?",
    "options": [
     "A problem with the criterion used to select students",
     "No problem",
     "A problem with money"
    ],
    "answer": 0
   },
   {
    "q": "What is true of the scope of any study?",
    "options": [
     "It is limited",
     "It is not important",
     "It is infinite"
    ],
    "answer": 0
   },
   {
    "q": "What does a phenomenon rarely have?",
    "options": [
     "A single explanation",
     "A long history",
     "A simple name"
    ],
    "answer": 0
   }
  ]
 },
 "argument": {
  "title": "Should we work four days a week?",
  "paragraphs": [
   "Few ideas are as controversial as the shorter working week. Advocates claim that four days are enough to produce the same amount of work, and they point to several experiments in which companies reduced working hours without losing profit. According to them, employees are happier, they take fewer sick days and their reasoning is sharper. Therefore, the argument concludes, the economy would actually benefit.",
   "Critics, however, oppose the change. They contend that many jobs, such as those in hospitals or in shops, cannot be done in fewer days. They also stress that the experiments involved only a small number of companies, so the results may contain a bias. Some economists go further and refute the whole idea on the grounds that competition between countries would make shorter hours impossible. This objection is not without merit, and honest supporters of the reform concede that it needs a serious answer.",
   "A balanced reader might ask which viewpoint is more valid. Perhaps the debate itself contains a flaw: it assumes that one rule can fit every industry. A more convincing position could be to let each sector negotiate its own stance. A clever speaker would not try to persuade the audience that one side is simply right. He would justify his own opinion with evidence, deduce the limits of the argument, and accept that a good premise does not guarantee a good conclusion."
  ],
  "questions": [
   {
    "q": "What do advocates claim?",
    "options": [
     "Work is not important",
     "Four days are enough to produce the same work",
     "Five days are necessary"
    ],
    "answer": 1
   },
   {
    "q": "Why do critics oppose the change?",
    "options": [
     "It is too popular",
     "It is too cheap",
     "Some jobs cannot be done in fewer days"
    ],
    "answer": 2
   },
   {
    "q": "What might be a flaw in the debate?",
    "options": [
     "It assumes one rule fits every industry",
     "It is too old",
     "It is too short"
    ],
    "answer": 0
   },
   {
    "q": "What do honest supporters concede?",
    "options": [
     "The idea is useless",
     "The objection about competition needs an answer",
     "They are always right"
    ],
    "answer": 1
   },
   {
    "q": "What would a clever speaker do?",
    "options": [
     "Justify his opinion with evidence and accept limits",
     "Attack the other side",
     "Refuse to speak"
    ],
    "answer": 0
   },
   {
    "q": "What have some companies done in experiments?",
    "options": [
     "Reduced working hours without losing profit",
     "Raised wages",
     "Closed down"
    ],
    "answer": 0
   },
   {
    "q": "What do advocates say about employees?",
    "options": [
     "They are lazier",
     "They earn less",
     "They are happier and take fewer sick days"
    ],
    "answer": 2
   },
   {
    "q": "Which jobs cannot be done in fewer days?",
    "options": [
     "Those in hospitals or in shops",
     "Teaching only",
     "Office jobs"
    ],
    "answer": 0
   },
   {
    "q": "What do critics say about the experiments?",
    "options": [
     "They were too long",
     "They involved only a small number of companies",
     "They were illegal"
    ],
    "answer": 1
   },
   {
    "q": "Who goes further and refutes the whole idea?",
    "options": [
     "The advocates",
     "The workers",
     "Some economists"
    ],
    "answer": 2
   },
   {
    "q": "What would competition between countries do, according to them?",
    "options": [
     "Increase wages",
     "Create more jobs",
     "Make shorter hours impossible"
    ],
    "answer": 2
   },
   {
    "q": "What might be a better position?",
    "options": [
     "One rule for all",
     "Let each sector negotiate its own stance",
     "Ban the reform"
    ],
    "answer": 1
   },
   {
    "q": "What does a good premise not guarantee?",
    "options": [
     "A good job",
     "A salary",
     "A good conclusion"
    ],
    "answer": 2
   },
   {
    "q": "How does the text describe the objection about competition?",
    "options": [
     "Weak",
     "False",
     "Not without merit"
    ],
    "answer": 2
   },
   {
    "q": "What kind of idea is the shorter working week?",
    "options": [
     "Popular with everyone",
     "Already approved",
     "Controversial"
    ],
    "answer": 2
   }
  ]
 },
 "finance": {
  "title": "The anatomy of a recession",
  "paragraphs": [
   "A recession is not simply a bad year for the economy. It usually begins with a downturn in confidence. Consumers spend less, companies stop investing and the stock market becomes volatile. When many firms declare bankruptcy, unemployment rises, and the government's tax income falls. At the same time the state must spend more on subsidies and benefits, so the deficit grows rapidly. This was the situation in many countries after the financial crisis of 2008.",
   "Governments have two main instruments. Fiscal policy involves taxes and public spending, while monetary policy is controlled by the central bank, which can lower the interest rate to make loans cheaper. Many families with a mortgage benefit when the rate falls, but savers receive almost nothing. Some governments chose austerity, cutting spending to reduce the deficit, but critics argued that this made the recession deeper and increased inequality.",
   "Economists also disagree about regulation. A merger between two big banks can create a monopoly that is dangerous for consumers, but it can also give stability to the market. After every boom, there is a risk of a new bubble. The distribution of wealth is another source of tension, because cheap labour in some countries attracts industry from richer ones. In the long term, the surplus of one region may be the deficit of another. As an old professor once said, \"In economics there are two types of experts: those who were wrong and those who have not been wrong yet.\""
  ],
  "questions": [
   {
    "q": "How does a recession usually begin?",
    "options": [
     "With a new law",
     "With a downturn in confidence",
     "With a surplus"
    ],
    "answer": 1
   },
   {
    "q": "What happens to a government's deficit during a recession?",
    "options": [
     "It disappears",
     "It stays the same",
     "It grows rapidly"
    ],
    "answer": 2
   },
   {
    "q": "What does a lower interest rate do?",
    "options": [
     "It makes loans cheaper",
     "It makes loans more expensive",
     "It stops the stock market"
    ],
    "answer": 0
   },
   {
    "q": "What was the criticism of austerity?",
    "options": [
     "It lowered taxes",
     "It made the recession deeper",
     "It was too generous"
    ],
    "answer": 1
   },
   {
    "q": "What can a merger between big banks create?",
    "options": [
     "A subsidy",
     "A boom",
     "A monopoly"
    ],
    "answer": 2
   },
   {
    "q": "What do consumers do at the start of a recession?",
    "options": [
     "They spend less",
     "They spend more",
     "They save nothing"
    ],
    "answer": 0
   },
   {
    "q": "What happens to the stock market?",
    "options": [
     "It closes",
     "It becomes volatile",
     "It grows"
    ],
    "answer": 1
   },
   {
    "q": "What happens when many firms go bankrupt?",
    "options": [
     "Taxes rise",
     "Prices fall",
     "Unemployment rises"
    ],
    "answer": 2
   },
   {
    "q": "What happens to the government's tax income?",
    "options": [
     "It rises",
     "It falls",
     "It stays the same"
    ],
    "answer": 1
   },
   {
    "q": "What do the two main instruments include?",
    "options": [
     "Only loans",
     "Only taxes",
     "Fiscal policy and monetary policy"
    ],
    "answer": 2
   },
   {
    "q": "Who controls monetary policy?",
    "options": [
     "The parliament",
     "The banks",
     "The central bank"
    ],
    "answer": 2
   },
   {
    "q": "Who benefits when the rate falls?",
    "options": [
     "Families with a mortgage",
     "Savers",
     "Nobody"
    ],
    "answer": 0
   },
   {
    "q": "What risk exists after every boom?",
    "options": [
     "A recession",
     "A surplus",
     "A new bubble"
    ],
    "answer": 2
   },
   {
    "q": "What attracts industry from richer countries?",
    "options": [
     "High wages",
     "Low taxes",
     "Cheap labour in some countries"
    ],
    "answer": 2
   },
   {
    "q": "What did the old professor say about experts?",
    "options": [
     "They are always right",
     "They are expensive",
     "There are those who were wrong and those who have not been wrong yet"
    ],
    "answer": 2
   }
  ]
 },
 "law": {
  "title": "How a law is born",
  "paragraphs": [
   "A new law begins as an idea, and often as a demand from citizens or from an organisation that decides to lobby the government. A minister prepares a proposal, and the text is sent to Parliament. There the deputies discuss it for weeks, and each party may suggest an amendment. In many countries the constitution requires that the law respect fundamental rights, so a special court can later check whether the legislation is valid.",
   "Once approved, the law has to be enforced. This is not always simple: too much bureaucracy can slow down the process, and the police and the courts need clear instructions. A person who thinks the law was broken may become a plaintiff and take the case to court, where the defendant has the right to a lawyer. The prosecutor presents the evidence, a witness gives his testimony, and the judge or the jury announces the verdict. If the defendant disagrees, he can appeal, and sometimes a higher tribunal changes the ruling.",
   "There are also questions of jurisdiction and of sovereignty. A national court cannot judge everything: international cases may belong to a tribunal in another country, and a treaty can limit the power of a government. On very important subjects, such as joining a union of countries, the people may be asked to vote in a referendum. And when no party has a majority, a coalition must be formed, with compromises that are not always popular. Democracy, in the end, is a slow system, but its slowness protects the citizen from sudden and unfair decisions."
  ],
  "questions": [
   {
    "q": "Who can suggest an amendment?",
    "options": [
     "Only the judge",
     "Each party in Parliament",
     "Only the minister"
    ],
    "answer": 1
   },
   {
    "q": "What can slow down enforcement of a law?",
    "options": [
     "Too much bureaucracy",
     "The constitution",
     "Too many judges"
    ],
    "answer": 0
   },
   {
    "q": "What can a defendant do if he disagrees with the verdict?",
    "options": [
     "Pay bail only",
     "Ignore it",
     "Appeal"
    ],
    "answer": 2
   },
   {
    "q": "When may the people be asked to vote directly?",
    "options": [
     "In a referendum",
     "In a coalition",
     "In a trial"
    ],
    "answer": 0
   },
   {
    "q": "According to the text, what does the slowness of democracy do?",
    "options": [
     "It increases bureaucracy",
     "It makes the law useless",
     "It protects citizens from sudden decisions"
    ],
    "answer": 2
   },
   {
    "q": "Who may lobby the government?",
    "options": [
     "Only the minister",
     "An organisation",
     "The judges"
    ],
    "answer": 1
   },
   {
    "q": "Who prepares the proposal?",
    "options": [
     "A citizen",
     "A minister",
     "The police"
    ],
    "answer": 1
   },
   {
    "q": "Where is the text sent?",
    "options": [
     "To the court",
     "To Parliament",
     "To the army"
    ],
    "answer": 1
   },
   {
    "q": "How long do the deputies discuss the law?",
    "options": [
     "For one hour",
     "For weeks",
     "For years"
    ],
    "answer": 1
   },
   {
    "q": "What does the constitution require?",
    "options": [
     "That the law be secret",
     "That the law respect fundamental rights",
     "That the law be short"
    ],
    "answer": 1
   },
   {
    "q": "What may a special court check?",
    "options": [
     "The price of the law",
     "Whether the law is valid",
     "The minister's age"
    ],
    "answer": 1
   },
   {
    "q": "What does a person who thinks the law was broken become?",
    "options": [
     "A defendant",
     "A judge",
     "A plaintiff"
    ],
    "answer": 2
   },
   {
    "q": "What right does the defendant have?",
    "options": [
     "The right to a lawyer",
     "The right to vote",
     "The right to a pension"
    ],
    "answer": 0
   },
   {
    "q": "What can limit the power of a government?",
    "options": [
     "A treaty",
     "A strike",
     "A holiday"
    ],
    "answer": 0
   },
   {
    "q": "When must a coalition be formed?",
    "options": [
     "When there is a referendum",
     "When there is a trial",
     "When no party has a majority"
    ],
    "answer": 2
   }
  ]
 },
 "abstract": {
  "title": "The dilemma of honesty",
  "paragraphs": [
   "Imagine a young manager who discovers that her company is hiding the true results from its customers. She has a promising career and a great ambition, but she also has integrity. The situation creates a classic dilemma: should she remain silent in order to protect her position, or should she speak and take the risk? There is an obvious contradiction between what is profitable and what is right, and no simple rule can solve it.",
   "Philosophers have discussed this kind of problem for centuries. Ethics is not just a list of rules; it is a way of looking at the complexity of human behaviour. Some people argue that morality depends on the consequences, while others say that certain acts are wrong in themselves. What is clear is that a consensus is difficult to reach, because every person's identity and background influence the way he or she sees the problem. The paradox is that the same act may seem honest to one person and arrogant to another.",
   "Whatever she decides, the manager will need resilience. Prejudice and scepticism will probably follow her, as many colleagues will not understand her decision. Yet there is also solidarity: in this kind of case, people who share her values often appear from nowhere. Wisdom, in the end, is not knowing the right answer in advance but having enough awareness to understand the nuance of each situation, and enough courage to accept its irony: that doing the right thing often looks like the most dangerous choice."
  ],
  "questions": [
   {
    "q": "What does the manager discover?",
    "options": [
     "Her company is hiding the true results",
     "Her colleagues are lying about her",
     "She is going to be fired"
    ],
    "answer": 0
   },
   {
    "q": "What is the contradiction in the dilemma?",
    "options": [
     "Between what is profitable and what is right",
     "Between money and time",
     "Between two companies"
    ],
    "answer": 0
   },
   {
    "q": "Why is it hard to reach a consensus?",
    "options": [
     "The law is unclear",
     "Everyone's identity and background influence their view",
     "Nobody cares"
    ],
    "answer": 1
   },
   {
    "q": "What will the manager need?",
    "options": [
     "Resilience",
     "More money",
     "A new job"
    ],
    "answer": 0
   },
   {
    "q": "What does the text say wisdom is?",
    "options": [
     "Always knowing the right answer",
     "Understanding the nuance of each situation",
     "Following every rule"
    ],
    "answer": 1
   },
   {
    "q": "What is the young woman's job?",
    "options": [
     "A doctor",
     "A manager",
     "A teacher"
    ],
    "answer": 1
   },
   {
    "q": "What does she have besides ambition?",
    "options": [
     "Time",
     "Integrity",
     "Money"
    ],
    "answer": 1
   },
   {
    "q": "What choice does she face?",
    "options": [
     "Remain silent or speak and take the risk",
     "Move or stay",
     "Work or study"
    ],
    "answer": 0
   },
   {
    "q": "Who has discussed this kind of problem for centuries?",
    "options": [
     "Philosophers",
     "Doctors",
     "Politicians"
    ],
    "answer": 0
   },
   {
    "q": "What is ethics, according to the text?",
    "options": [
     "A law",
     "A way of looking at the complexity of human behaviour",
     "A list of rules only"
    ],
    "answer": 1
   },
   {
    "q": "What do some people say morality depends on?",
    "options": [
     "The consequences",
     "Luck",
     "Money"
    ],
    "answer": 0
   },
   {
    "q": "What influences the way each person sees the problem?",
    "options": [
     "The news",
     "Identity and background",
     "The weather"
    ],
    "answer": 1
   },
   {
    "q": "What is the paradox?",
    "options": [
     "The same act may seem honest to one person and arrogant to another",
     "Rules are clear",
     "Honesty is easy"
    ],
    "answer": 0
   },
   {
    "q": "What may follow her?",
    "options": [
     "Fame",
     "Prejudice and scepticism",
     "Money"
    ],
    "answer": 1
   },
   {
    "q": "What is the irony at the end?",
    "options": [
     "Nobody cares",
     "Doing wrong is easy",
     "Doing the right thing often looks like the most dangerous choice"
    ],
    "answer": 2
   }
  ]
 },
 "idioms": {
  "title": "A day full of idioms",
  "paragraphs": [
   "My friend Tom is a man full of idioms, and spending a day with him is a lesson in English. When I met him yesterday morning, he said he was a little under the weather, but a cup of coffee made him feel better. I wanted to break the ice with his new girlfriend, so I told a joke, and she laughed. Tom said that it was a piece of cake to make friends with her, because she was a very open person.",
   "During lunch we talked about holidays. Tom said that a trip to Japan would cost an arm and a leg, so he only travels once in a blue moon. I told him that he should save some money, because if he waited any longer, he would miss the boat and the prices would go up. He said that I had hit the nail on the head, and that the ball was in his court now. I also told him not to beat around the bush when he talks to his boss about a raise.",
   "In the evening he nearly spilled the beans about a surprise party for his sister, but I stopped him before he let the cat out of the bag. When the waiter dropped a tray, the whole restaurant stopped talking. That was the last straw for a man at the next table, who began to shout. We decided to call it a day. As we left, Tom said that he was only pulling my leg about the surprise party, and that he did not get cold feet about anything. I think that day taught me more than any book."
  ],
  "questions": [
   {
    "q": "How did Tom feel in the morning?",
    "options": [
     "Angry",
     "A little under the weather",
     "Very happy"
    ],
    "answer": 1
   },
   {
    "q": "What did Tom say about a trip to Japan?",
    "options": [
     "It was cheap",
     "It would cost an arm and a leg",
     "It was a piece of cake"
    ],
    "answer": 1
   },
   {
    "q": "What did the narrator advise?",
    "options": [
     "Save money so he does not miss the boat",
     "Never travel",
     "Ask his boss for a loan"
    ],
    "answer": 0
   },
   {
    "q": "What nearly happened in the evening?",
    "options": [
     "Tom nearly spilled the beans about a party",
     "The waiter fell",
     "Tom lost his bag"
    ],
    "answer": 0
   },
   {
    "q": "What did Tom say at the end?",
    "options": [
     "He was only pulling the narrator's leg",
     "He was sick",
     "He was lost"
    ],
    "answer": 0
   },
   {
    "q": "Who is full of idioms?",
    "options": [
     "The waiter",
     "The narrator",
     "The narrator's friend Tom"
    ],
    "answer": 2
   },
   {
    "q": "What did the narrator do to break the ice?",
    "options": [
     "Gave a gift",
     "Told a joke",
     "Paid for lunch"
    ],
    "answer": 1
   },
   {
    "q": "What did Tom say about making friends with her?",
    "options": [
     "It was a piece of cake",
     "It was very difficult",
     "It was impossible"
    ],
    "answer": 0
   },
   {
    "q": "How often does Tom travel?",
    "options": [
     "Every month",
     "Every week",
     "Once in a blue moon"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator say will happen if Tom waits longer?",
    "options": [
     "He will miss the boat and prices will go up",
     "He will lose his job",
     "He will win"
    ],
    "answer": 0
   },
   {
    "q": "What should Tom not do with his boss?",
    "options": [
     "Beat around the bush",
     "Ask for a raise",
     "Be polite"
    ],
    "answer": 0
   },
   {
    "q": "When did Tom and the narrator talk about holidays?",
    "options": [
     "During breakfast",
     "At the cinema",
     "During lunch"
    ],
    "answer": 2
   },
   {
    "q": "What did the waiter drop?",
    "options": [
     "A tray",
     "A glass",
     "A bottle"
    ],
    "answer": 0
   },
   {
    "q": "What was the last straw for a man at the next table?",
    "options": [
     "The bill",
     "The waiter dropping the tray",
     "The music"
    ],
    "answer": 1
   },
   {
    "q": "What did they decide to do at the end of the day?",
    "options": [
     "Call it a day",
     "Go to the cinema",
     "Go dancing"
    ],
    "answer": 0
   }
  ]
 },
 "phrasal": {
  "title": "A company in trouble",
  "paragraphs": [
   "When Elena took over the family business, nobody thought that she would be able to carry it out for more than a year. The company was in trouble, and the bank had already turned down her first request for a loan. She had to bring up the subject with her father, who did not want to hear about the problem. \"We run out of money every month,\" she said, \"and we cannot put up with this situation any longer.\"",
   "Elena began to look into every expense. She found that many bills had never been checked, and that an employee had been making up false invoices. She did not know how he had got away with it for so long. She pointed out the problem to her father, who finally gave in and allowed her to make changes. The team went through the accounts together and cut down on every unnecessary cost. At first some workers dropped out of the new plan, but others came up with useful ideas.",
   "After six months, the situation began to work out. Elena set up a new department for online sales, and she managed to pick up some important clients. She had to hold back her excitement, because she knew that success could disappear quickly. Last month her father passed away, and in his will he said that he was proud of her. She still cannot figure out how she did it. \"I did not know that I could,\" she says, \"but sometimes you only find out when you have no other choice.\""
  ],
  "questions": [
   {
    "q": "What did the bank do at the start?",
    "options": [
     "It took over the company",
     "It lent her money",
     "It turned down her request for a loan"
    ],
    "answer": 2
   },
   {
    "q": "What did Elena find?",
    "options": [
     "A new client",
     "A hidden treasure",
     "An employee made up false invoices"
    ],
    "answer": 2
   },
   {
    "q": "What did the team do with unnecessary costs?",
    "options": [
     "They increased them",
     "They cut down on them",
     "They ignored them"
    ],
    "answer": 1
   },
   {
    "q": "What did Elena set up?",
    "options": [
     "A school",
     "A new factory",
     "A new department for online sales"
    ],
    "answer": 2
   },
   {
    "q": "What does Elena say about success?",
    "options": [
     "Sometimes you only find out what you can do when you have no choice",
     "It never comes",
     "It is easy"
    ],
    "answer": 0
   },
   {
    "q": "What did Elena take over?",
    "options": [
     "A farm",
     "The family business",
     "A school"
    ],
    "answer": 1
   },
   {
    "q": "Did people think she would last more than a year?",
    "options": [
     "No",
     "Nobody cared",
     "Yes"
    ],
    "answer": 0
   },
   {
    "q": "What did the bank turn down?",
    "options": [
     "Her first request for a loan",
     "Her passport",
     "Her plan to sell"
    ],
    "answer": 0
   },
   {
    "q": "Who did not want to hear about the problem?",
    "options": [
     "The team",
     "The bank",
     "Her father"
    ],
    "answer": 2
   },
   {
    "q": "What did Elena find about the bills?",
    "options": [
     "Many had never been checked",
     "They were all correct",
     "They were missing"
    ],
    "answer": 0
   },
   {
    "q": "What was an employee making up?",
    "options": [
     "Songs",
     "Excuses",
     "False invoices"
    ],
    "answer": 2
   },
   {
    "q": "Who finally gave in?",
    "options": [
     "The bank",
     "Elena's father",
     "The employee"
    ],
    "answer": 1
   },
   {
    "q": "What did some workers do?",
    "options": [
     "Went to the bank",
     "Dropped out of the new plan",
     "Got a raise"
    ],
    "answer": 1
   },
   {
    "q": "What did she do to pick up important clients?",
    "options": [
     "Set up a new online sales department",
     "Cut prices",
     "Moved the factory"
    ],
    "answer": 0
   },
   {
    "q": "What did her father say in his will?",
    "options": [
     "That he was proud of her",
     "That she should sell",
     "That he was angry"
    ],
    "answer": 0
   }
  ]
 },
 "speech": {
  "title": "The silent room",
  "paragraphs": [
   "The meeting was about to begin, and nobody in the room wanted to speak first. Maria glanced at her watch and then stared at the table. Her colleague, a nervous man, stammered a few words and then fell silent. At the end of the room, someone began to murmur, and a second person started to grumble about the late hour. The manager, who usually exclaimed his opinion with energy, only whispered a few words to his assistant.",
   "Finally, a young woman stood up. She hesitated for a moment, then she insisted that the team could not postpone the decision any longer. She hinted that some people were hiding the truth, but she did not boast about her own work. The manager pondered her words and contemplated the faces around the table. A man mumbled that she was exaggerating, and she pleaded with him to listen. Another colleague urged everybody to remain calm and to scrutinise the report before judging.",
   "When the silence returned, Maria peered at the page in front of her and noticed something she had never seen. She gazed at a line of numbers and began to realise the mistake. She glimpsed an explanation, and everything became clear. \"I think I can figure it out,\" she said slowly. The room, which had been so tense, began to wander through a new set of possibilities. A good meeting, she thought, is not one where people shout; it is one where they finally begin to look and listen with care."
  ],
  "questions": [
   {
    "q": "Who whispered a few words to his assistant?",
    "options": [
     "The young woman",
     "The manager",
     "Maria"
    ],
    "answer": 1
   },
   {
    "q": "What did the young woman do?",
    "options": [
     "She refused to speak",
     "She left the room",
     "She insisted the team could not postpone the decision"
    ],
    "answer": 2
   },
   {
    "q": "What did a man mumble?",
    "options": [
     "That she was exaggerating",
     "That the meeting was over",
     "That he agreed"
    ],
    "answer": 0
   },
   {
    "q": "What did Maria notice?",
    "options": [
     "A mistake in a line of numbers",
     "A window",
     "A new client"
    ],
    "answer": 0
   },
   {
    "q": "What does Maria think a good meeting is?",
    "options": [
     "One that ends quickly",
     "One where people shout",
     "One where people look and listen with care"
    ],
    "answer": 2
   },
   {
    "q": "What did Maria do first?",
    "options": [
     "Glanced at her watch",
     "Spoke",
     "Left"
    ],
    "answer": 0
   },
   {
    "q": "What did the nervous colleague do?",
    "options": [
     "Stammered a few words and fell silent",
     "Shouted",
     "Gave a speech"
    ],
    "answer": 0
   },
   {
    "q": "What did someone at the end of the room do?",
    "options": [
     "Began to sing",
     "Left",
     "Began to murmur"
    ],
    "answer": 2
   },
   {
    "q": "What did the second person grumble about?",
    "options": [
     "The late hour",
     "The manager",
     "The food"
    ],
    "answer": 0
   },
   {
    "q": "Who stood up?",
    "options": [
     "A young woman",
     "The manager",
     "Maria"
    ],
    "answer": 0
   },
   {
    "q": "What did the young woman insist?",
    "options": [
     "That the team could not postpone the decision any longer",
     "That they take a break",
     "That she would resign"
    ],
    "answer": 0
   },
   {
    "q": "What did the manager do with her words?",
    "options": [
     "Pondered them",
     "Ignored them",
     "Laughed"
    ],
    "answer": 0
   },
   {
    "q": "What did a colleague urge everybody to do?",
    "options": [
     "Remain calm and scrutinise the report",
     "Vote",
     "Leave"
    ],
    "answer": 0
   },
   {
    "q": "What did Maria gaze at?",
    "options": [
     "The window",
     "A line of numbers",
     "The manager"
    ],
    "answer": 1
   },
   {
    "q": "What did Maria say at the end?",
    "options": [
     "I do not know",
     "I think I can figure it out",
     "I resign"
    ],
    "answer": 1
   }
  ]
 },
 "literary": {
  "title": "An evening by the lake",
  "paragraphs": [
   "The evening was gloomy, and the rain was relentless, but the lake was strangely serene. Clara stood by the window of the old house and watched the water. The memory of that summer was vivid, and a little melancholy. Her grandfather, a humble man, used to sit on the same chair for hours, writing poems that nobody read. His handwriting was meticulous, as if every word were a precious stone.",
   "She remembered his eloquent voice and the subtle way in which he spoke about ordinary things. For him, nothing was mundane. A dry leaf, a cup of tea, a train in the distance could become a profound image. \"Success is elusive,\" he often said, \"and fame is ephemeral. Only attention is lavish.\" Clara had been reluctant to accept that idea when she was young, but now she saw it differently. Some questions had an ambiguous answer, and she no longer wished to solve them.",
   "In the evening she opened a fragile old notebook and found a poem written in pencil. The words were tedious at first, filled with small details about the weather, but the last verse made her smile. It spoke about a radiant morning in which the whole world seemed new. The poet was gone, but his work remained, ubiquitous in the house, like a quiet resilient presence. Clara closed the notebook, and for the first time that day she felt calm. Outside, the rain had stopped, and a pale light was appearing over the lake."
  ],
  "questions": [
   {
    "q": "What was the weather like in the evening?",
    "options": [
     "Windy and dry",
     "Gloomy with relentless rain",
     "Sunny"
    ],
    "answer": 1
   },
   {
    "q": "What did the grandfather do on the chair?",
    "options": [
     "He slept",
     "He wrote poems that nobody read",
     "He read the newspaper"
    ],
    "answer": 1
   },
   {
    "q": "What did the grandfather say about success?",
    "options": [
     "It is boring",
     "It is easy",
     "It is elusive"
    ],
    "answer": 2
   },
   {
    "q": "What did Clara find in the evening?",
    "options": [
     "A photograph",
     "A letter",
     "A fragile notebook with a poem in pencil"
    ],
    "answer": 2
   },
   {
    "q": "How did Clara feel at the end?",
    "options": [
     "Afraid",
     "Calm",
     "Angry"
    ],
    "answer": 1
   },
   {
    "q": "Where did Clara stand?",
    "options": [
     "In the garden",
     "On the beach",
     "By the window of the old house"
    ],
    "answer": 2
   },
   {
    "q": "What did the narrator say about the memory of that summer?",
    "options": [
     "It was happy only",
     "It was vivid and a little melancholy",
     "It was boring"
    ],
    "answer": 1
   },
   {
    "q": "What was her grandfather like?",
    "options": [
     "A famous man",
     "A rich man",
     "A humble man"
    ],
    "answer": 2
   },
   {
    "q": "How did he write?",
    "options": [
     "Very fast",
     "With meticulous handwriting",
     "With a computer"
    ],
    "answer": 1
   },
   {
    "q": "What could become a profound image for him?",
    "options": [
     "A big city",
     "A famous painting",
     "A dry leaf, a cup of tea or a train in the distance"
    ],
    "answer": 2
   },
   {
    "q": "What did he say fame is?",
    "options": [
     "Ephemeral",
     "Easy",
     "Eternal"
    ],
    "answer": 0
   },
   {
    "q": "What did he say is lavish?",
    "options": [
     "Attention",
     "Time",
     "Money"
    ],
    "answer": 0
   },
   {
    "q": "How was Clara about his idea when she was young?",
    "options": [
     "Eager to accept it",
     "Angry",
     "Reluctant to accept it"
    ],
    "answer": 2
   },
   {
    "q": "What did the last verse of the poem speak about?",
    "options": [
     "A sad farewell",
     "A storm",
     "A radiant morning"
    ],
    "answer": 2
   },
   {
    "q": "What was appearing over the lake at the end?",
    "options": [
     "The moon",
     "A pale light",
     "A storm"
    ],
    "answer": 1
   }
  ]
 },
 "rhetoric": {
  "title": "Reading a great speech",
  "paragraphs": [
   "When a speech is remembered for decades, it is rarely by accident. A great speaker knows that rhetoric is not just the art of persuasion; it is also the art of choosing the right tone and register for each audience. A formal register may be suitable for a parliament, but a more intimate tone is better for a crowd in a square. The most articulate orators move easily between the two, using eloquence without falling into the trap of being verbose.",
   "The best speeches also use language with precision. A metaphor can turn an abstract idea into an image, while a simile makes a comparison clear. An allusion to a well-known story gives the audience a shared memory, and a skilful understatement can have more impact than a long hyperbole. Jargon, on the other hand, tends to divide listeners into those who understand and those who do not. A cliché is the opposite danger: it is so familiar that it loses all its force and signals laziness.",
   "To analyse a speech, a student should try to paraphrase it in his own words and then summarise it in a few lines. This exercise shows whether the argument is coherent and whether it stays concise from beginning to end. It also reveals the connotation of certain words: a politician who speaks of a \"reform\" instead of a \"cut\" is using a euphemism to soften the message. Anyone who wishes to become fluent in a language must therefore learn to elaborate on these details. A good listener, like a good writer, hears the difference between what is said and how it is said."
  ],
  "questions": [
   {
    "q": "What do the most articulate orators do?",
    "options": [
     "Always use long sentences",
     "Move easily between formal and intimate tones",
     "Always use jargon"
    ],
    "answer": 1
   },
   {
    "q": "What can a metaphor do?",
    "options": [
     "Divide listeners",
     "Turn an abstract idea into an image",
     "Replace the argument"
    ],
    "answer": 1
   },
   {
    "q": "What is the danger of a cliché?",
    "options": [
     "It loses all its force",
     "It is too short",
     "It is too complicated"
    ],
    "answer": 0
   },
   {
    "q": "What does paraphrasing a speech show?",
    "options": [
     "How long it is",
     "Who wrote it",
     "Whether the argument is coherent and concise"
    ],
    "answer": 2
   },
   {
    "q": "What is an example of a euphemism in the text?",
    "options": [
     "Speaking of a metaphor",
     "Speaking of a cliché",
     "Speaking of a reform instead of a cut"
    ],
    "answer": 2
   },
   {
    "q": "For how long is a great speech remembered?",
    "options": [
     "For a day",
     "For decades",
     "For a week"
    ],
    "answer": 1
   },
   {
    "q": "What does a great speaker choose for each audience?",
    "options": [
     "The shortest speech",
     "The right tone and register",
     "The longest words"
    ],
    "answer": 1
   },
   {
    "q": "What register may be suitable for a parliament?",
    "options": [
     "An intimate tone",
     "A formal register",
     "Slang"
    ],
    "answer": 1
   },
   {
    "q": "What is better for a crowd in a square?",
    "options": [
     "A more intimate tone",
     "A formal register",
     "Jargon"
    ],
    "answer": 0
   },
   {
    "q": "What makes a comparison clear?",
    "options": [
     "A cliché",
     "Jargon",
     "A simile"
    ],
    "answer": 2
   },
   {
    "q": "What gives the audience a shared memory?",
    "options": [
     "An allusion",
     "A hyperbole",
     "Jargon"
    ],
    "answer": 0
   },
   {
    "q": "What can have more impact than a long hyperbole?",
    "options": [
     "A skilful understatement",
     "A cliché",
     "A long explanation"
    ],
    "answer": 0
   },
   {
    "q": "What does jargon do to listeners?",
    "options": [
     "Unites them",
     "Entertains them",
     "Divides them into those who understand and those who do not"
    ],
    "answer": 2
   },
   {
    "q": "What does a student do first to analyse a speech?",
    "options": [
     "Memorise it",
     "Translate it",
     "Paraphrase it in his own words"
    ],
    "answer": 2
   },
   {
    "q": "What difference does a good listener hear?",
    "options": [
     "Between two languages",
     "Between two speakers",
     "Between what is said and how it is said"
    ],
    "answer": 2
   }
  ]
 },
 "travelb1": {
  "title": "Planning a trip to Scotland",
  "paragraphs": [
   "Last spring Laura decided to plan a trip to Scotland. She started by buying a guidebook and reading a few brochures about the Highlands. The destination was popular, so she had to book early. She looked for accommodation in a small hotel near the lake and compared the fares of three different airlines. There was no direct flight from Lisbon, so she chose a flight with a transfer in London. She bought a return ticket, because it was cheaper than two single tickets.",
   "On the day of departure she arrived at the terminal two hours early. An announcement said that the flight was delayed, and Laura felt a little anxious, but she had a book to read. After the flight, her baggage was the last to arrive, and she was already tired. She always had jet lag after long journeys. Fortunately, the hotel gave her a free upgrade to a bigger room with a view of the water, and the receptionist offered her a map and a detailed itinerary.",
   "During the week she hired a car and explored the coast, the castles and the small villages. She even tried to hitchhike for a few kilometres, but a kind farmer told her it was not safe. When she lost her passport at the end of the trip, she went to the embassy, where an official helped her in less than an hour. Laura says that tourism can be stressful, but that every problem becomes a good story. She wants to return to Scotland next year, and next time she will reserve everything even earlier."
  ],
  "questions": [
   {
    "q": "Why did Laura have a transfer in London?",
    "options": [
     "The fare was free",
     "She wanted to visit London",
     "There was no direct flight from Lisbon"
    ],
    "answer": 2
   },
   {
    "q": "What did she buy because it was cheaper?",
    "options": [
     "A return ticket",
     "A guidebook",
     "An upgrade"
    ],
    "answer": 0
   },
   {
    "q": "What happened at the hotel?",
    "options": [
     "She had no view",
     "She lost her room",
     "She got a free upgrade"
    ],
    "answer": 2
   },
   {
    "q": "Where did Laura go when she lost her passport?",
    "options": [
     "To the hotel",
     "To the airport",
     "To the embassy"
    ],
    "answer": 2
   },
   {
    "q": "What does Laura want to do next year?",
    "options": [
     "Return to Scotland and reserve everything earlier",
     "Stay at home",
     "Go to London"
    ],
    "answer": 0
   },
   {
    "q": "Where does Laura plan to travel?",
    "options": [
     "To Scotland",
     "To England",
     "To Ireland"
    ],
    "answer": 0
   },
   {
    "q": "What does she buy and read before the trip?",
    "options": [
     "A map only",
     "A guidebook and brochures",
     "A novel"
    ],
    "answer": 1
   },
   {
    "q": "Where does she look for accommodation?",
    "options": [
     "In a camping site",
     "In a small hotel near the lake",
     "In a hostel"
    ],
    "answer": 1
   },
   {
    "q": "What does she compare?",
    "options": [
     "The fares of three airlines",
     "Three hotels",
     "Three cars"
    ],
    "answer": 0
   },
   {
    "q": "How early does she arrive at the terminal?",
    "options": [
     "The day before",
     "Ten minutes early",
     "Two hours early"
    ],
    "answer": 2
   },
   {
    "q": "What does the announcement say?",
    "options": [
     "The gate changed",
     "The flight is delayed",
     "The flight is cancelled"
    ],
    "answer": 1
   },
   {
    "q": "What arrives last?",
    "options": [
     "Her baggage",
     "Her passport",
     "Her friend"
    ],
    "answer": 0
   },
   {
    "q": "What does the receptionist give her?",
    "options": [
     "A free dinner",
     "A key",
     "A map and a detailed itinerary"
    ],
    "answer": 2
   },
   {
    "q": "What does the farmer tell her about hitchhiking?",
    "options": [
     "It is not safe",
     "It is fun",
     "It is cheap"
    ],
    "answer": 0
   },
   {
    "q": "How long does the embassy take to help?",
    "options": [
     "A week",
     "A whole day",
     "Less than an hour"
    ],
    "answer": 2
   }
  ]
 },
 "foodb1": {
  "title": "A family barbecue",
  "paragraphs": [
   "Every summer my family has a big barbecue in the garden, and this year I was responsible for the food. My sister is vegan, my father cannot stand cabbage and my little cousins refuse to eat broccoli, so the menu was not easy. I went to the market and bought pork sausages, lamb and prawns for the meat eaters, and a large bag of vegetables for my sister. I also bought spices, a chilli sauce and a few coconuts for the dessert.",
   "In the afternoon the whole family arrived. First we served some snacks with a cold lemonade: biscuits, olives and small pieces of bread. The prawns were fresh and tasty, and the lamb had a wonderful flavour. My cousins ignored the vegetables, but they loved the sausage. My aunt made a curry with rice, which was a little bitter, because she used too much spice, but nobody complained. The portions were big, so nobody left the table hungry.",
   "By the evening we still had a lot of leftovers. My mother suggested that we should not waste the food, so we packed it in boxes and everybody took some home. For breakfast the next day, I had cereal with milk, because I did not want to see any more meat for a while! My appetite was small, but the memory of the day was wonderful. We decided to repeat the barbecue next year, maybe with a takeaway pizza for emergencies, in case the cooking goes wrong."
  ],
  "questions": [
   {
    "q": "Why was the menu not easy?",
    "options": [
     "People had different food preferences",
     "The market was closed",
     "There was no meat"
    ],
    "answer": 0
   },
   {
    "q": "What did the narrator buy for the meat eaters?",
    "options": [
     "Fish",
     "Pork sausages, lamb and prawns",
     "Chicken"
    ],
    "answer": 1
   },
   {
    "q": "What was wrong with the curry?",
    "options": [
     "It was a little bitter because of too much spice",
     "It was too sweet",
     "It was cold"
    ],
    "answer": 0
   },
   {
    "q": "What happened to the leftovers?",
    "options": [
     "The dog ate them",
     "The family took them home in boxes",
     "They were thrown away"
    ],
    "answer": 1
   },
   {
    "q": "What does the family plan for next year?",
    "options": [
     "No more barbecues",
     "A restaurant dinner",
     "Another barbecue, maybe with a takeaway pizza"
    ],
    "answer": 2
   },
   {
    "q": "Who was responsible for the food?",
    "options": [
     "The aunt",
     "The narrator",
     "The mother"
    ],
    "answer": 1
   },
   {
    "q": "Who is vegan?",
    "options": [
     "The narrator's sister",
     "The narrator's father",
     "The cousins"
    ],
    "answer": 0
   },
   {
    "q": "What can the narrator's father not stand?",
    "options": [
     "Pork",
     "Broccoli",
     "Cabbage"
    ],
    "answer": 2
   },
   {
    "q": "What do the little cousins refuse to eat?",
    "options": [
     "Broccoli",
     "Prawns",
     "Sausage"
    ],
    "answer": 0
   },
   {
    "q": "What did the narrator buy for the dessert?",
    "options": [
     "Ice cream",
     "A few coconuts",
     "Biscuits"
    ],
    "answer": 1
   },
   {
    "q": "What did they drink with the snacks?",
    "options": [
     "Cold lemonade",
     "Water",
     "Wine"
    ],
    "answer": 0
   },
   {
    "q": "What did the cousins love?",
    "options": [
     "The vegetables",
     "The curry",
     "The sausage"
    ],
    "answer": 2
   },
   {
    "q": "Who made the curry?",
    "options": [
     "The mother",
     "The aunt",
     "The narrator"
    ],
    "answer": 1
   },
   {
    "q": "What did the narrator have for breakfast the next day?",
    "options": [
     "Cereal with milk",
     "Meat",
     "Curry"
    ],
    "answer": 0
   },
   {
    "q": "What might they order for emergencies?",
    "options": [
     "A takeaway pizza",
     "A cake",
     "A salad"
    ],
    "answer": 0
   }
  ]
 },
 "leisureb1": {
  "title": "My spare time",
  "paragraphs": [
   "In my spare time I like to try new activities. Last year I joined a pottery club in my neighbourhood. The membership was cheap, and the club had very good facilities: a large workshop, a small shop and a garden where members could have a barbecue. Every Wednesday I went to the class, and at the end of the course I made my first plate. It was not beautiful, but my mother put it in the living room and said that it was a masterpiece.",
   "My grandmother, who is a member of a different club, is very keen on knitting. She has a big collection of jumpers and scarves, and she says that knitting helps her to relax. When we get together at the weekend, she teaches me a few basic stitches, and my brother and I help her with the wool. In the evening we sometimes play a board game or do a jigsaw with a thousand pieces. It takes us a week to finish one.",
   "My friends prefer to go out and enjoy the nightlife. They often hang out in the square or go to a quiz at the local pub on Fridays. I join in sometimes, but I do not like crowded places. Now I would like to take up gardening, because the apartment where I live has a balcony, and I hire a small tool to take care of the plants. For a trip to the mountains, I always take a torch, a map and a bottle of water. I think hobbies make life interesting, and they keep us away from the screen."
  ],
  "questions": [
   {
    "q": "What did the narrator join last year?",
    "options": [
     "A pottery club",
     "A football club",
     "A knitting club"
    ],
    "answer": 0
   },
   {
    "q": "What does the grandmother have a big collection of?",
    "options": [
     "Plates",
     "Jumpers and scarves",
     "Photographs"
    ],
    "answer": 1
   },
   {
    "q": "What do they do in the evening at the weekend?",
    "options": [
     "Watch television",
     "Go out",
     "Play a board game or do a jigsaw"
    ],
    "answer": 2
   },
   {
    "q": "What do the narrator's friends enjoy?",
    "options": [
     "Nightlife and a pub quiz",
     "Gardening",
     "Pottery"
    ],
    "answer": 0
   },
   {
    "q": "What would the narrator like to take up?",
    "options": [
     "Knitting",
     "Gardening",
     "Boxing"
    ],
    "answer": 1
   },
   {
    "q": "When is the pottery class?",
    "options": [
     "Every Wednesday",
     "Every Friday",
     "Every day"
    ],
    "answer": 0
   },
   {
    "q": "Is the membership expensive?",
    "options": [
     "It is free",
     "Yes, very",
     "No, it is cheap"
    ],
    "answer": 2
   },
   {
    "q": "What did the narrator make at the end of the course?",
    "options": [
     "A vase",
     "A plate",
     "A cup"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator's mother say about the plate?",
    "options": [
     "It is broken",
     "It is ugly",
     "It is a masterpiece"
    ],
    "answer": 2
   },
   {
    "q": "What is the grandmother keen on?",
    "options": [
     "Pottery",
     "Knitting",
     "Gardening"
    ],
    "answer": 1
   },
   {
    "q": "What does knitting do for her?",
    "options": [
     "Helps her relax",
     "Keeps her warm",
     "Makes money"
    ],
    "answer": 0
   },
   {
    "q": "What do the narrator and her brother help with?",
    "options": [
     "The cooking",
     "The jigsaw",
     "The wool"
    ],
    "answer": 2
   },
   {
    "q": "How many pieces does the jigsaw have?",
    "options": [
     "A hundred",
     "Ten thousand",
     "A thousand"
    ],
    "answer": 2
   },
   {
    "q": "Where do the friends hang out?",
    "options": [
     "At the beach",
     "At the cinema",
     "In the square"
    ],
    "answer": 2
   },
   {
    "q": "What does the narrator take to the mountains?",
    "options": [
     "A torch, a map and a bottle of water",
     "A radio",
     "A tent"
    ],
    "answer": 0
   }
  ]
 },
 "sportb1": {
  "title": "The final of the championship",
  "paragraphs": [
   "It was a cold Saturday afternoon, and the whole town was at the stadium for the final of the hockey championship. Our team, the Eagles, was first in the league, and the opponent was a strong team from the north. In the changing room, the coach told the players to warm up for twenty minutes and to put on their helmets, because the pitch was wet after the rain. The goalkeeper, who was only seventeen, was nervous, but he smiled.",
   "The match was very exciting. In the first half our opponent scored twice, and the supporters went quiet. The Eagles needed a miracle. Then the captain, an experienced athlete, ran across the pitch and passed the ball to a young player, who scored a beautiful goal. Just before the interval our team equalised. In the second half the goalkeeper saved two penalties, and the crowd began to sing. Everybody could feel that something special was happening.",
   "With two minutes left, the Eagles scored the winning goal. The final result was three to two. The players hugged each other, and the president of the club gave the captain a big prize. A journalist asked him how he felt. \"We did not compete only for ourselves,\" he answered, \"but for the whole town.\" The next day the local newspaper published a photo of the team in front of the tournament cup. A few of the younger players decided to take up gymnastics and athletics as well, to be ready for next season."
  ],
  "questions": [
   {
    "q": "Why did the players put on helmets?",
    "options": [
     "It was a rule of the club",
     "The pitch was wet after the rain",
     "It was cold"
    ],
    "answer": 1
   },
   {
    "q": "How old was the goalkeeper?",
    "options": [
     "Twenty",
     "Thirty",
     "Seventeen"
    ],
    "answer": 2
   },
   {
    "q": "What happened just before the interval?",
    "options": [
     "The opponent scored",
     "The match ended",
     "The Eagles equalised"
    ],
    "answer": 2
   },
   {
    "q": "What was the final result?",
    "options": [
     "Zero to zero",
     "Two to one",
     "Three to two"
    ],
    "answer": 2
   },
   {
    "q": "What did the captain say?",
    "options": [
     "They competed for the whole town",
     "He was tired",
     "They competed for money"
    ],
    "answer": 0
   },
   {
    "q": "What sport do they play?",
    "options": [
     "Hockey",
     "Football",
     "Rugby"
    ],
    "answer": 0
   },
   {
    "q": "What day is the final?",
    "options": [
     "Friday",
     "Sunday",
     "Saturday"
    ],
    "answer": 2
   },
   {
    "q": "What is the weather like?",
    "options": [
     "Snowy",
     "Hot",
     "Cold"
    ],
    "answer": 2
   },
   {
    "q": "Who is the opponent?",
    "options": [
     "A team from the south",
     "A strong team from the north",
     "A school team"
    ],
    "answer": 1
   },
   {
    "q": "How long must the players warm up?",
    "options": [
     "One hour",
     "Ten minutes",
     "Twenty minutes"
    ],
    "answer": 2
   },
   {
    "q": "How many goals does the opponent score in the first half?",
    "options": [
     "One",
     "Three",
     "Two"
    ],
    "answer": 2
   },
   {
    "q": "Who passes the ball to the young player?",
    "options": [
     "The goalkeeper",
     "The coach",
     "The captain"
    ],
    "answer": 2
   },
   {
    "q": "What does the goalkeeper save in the second half?",
    "options": [
     "One goal",
     "Two penalties",
     "Three shots"
    ],
    "answer": 1
   },
   {
    "q": "Who gives the captain a big prize?",
    "options": [
     "The mayor",
     "A journalist",
     "The president of the club"
    ],
    "answer": 2
   },
   {
    "q": "What do some young players decide to take up?",
    "options": [
     "Football",
     "Boxing",
     "Gymnastics and athletics"
    ],
    "answer": 2
   }
  ]
 },
 "educationb1": {
  "title": "A late beginner",
  "paragraphs": [
   "At thirty-two, Pedro decided to go back to school. He had a diploma in design from secondary school, but he never went to university, and now he wanted a certificate in English. He enrolled in an evening course at a language school near his house. In the first class the teacher asked everyone for their level. Pedro was a beginner in speaking, but his reading was intermediate, so he was placed in a group for advanced students by mistake. He felt embarrassed, but he stayed.",
   "The course was difficult at first. He had to write a composition every week, and the teacher checked his marks with great care. Pedro revised every night and practised with a tutor on Saturdays. Some students were absent for weeks, but he never missed a lecture. When he failed his first test, he almost gave up. The teacher, however, told him that mistakes are part of the curriculum, and that the important thing is to try again.",
   "After six months Pedro passed the exam with a good mark. He received his certificate and applied for a scholarship to study in Dublin. The second term was easier, because he understood the grammar better. His wife, a graduate in history, helped him to prepare for the interview. Pedro says that the education system gives many opportunities, but that adults need patience and a lot of motivation. He knows that learning a language is like a long race: the primary objective is not to be fast, but to keep going until the end."
  ],
  "questions": [
   {
    "q": "Why was Pedro placed in the advanced group?",
    "options": [
     "He asked for it",
     "He was a graduate",
     "By mistake"
    ],
    "answer": 2
   },
   {
    "q": "What did Pedro do every night?",
    "options": [
     "He worked",
     "He revised",
     "He watched television"
    ],
    "answer": 1
   },
   {
    "q": "What did the teacher tell him after the failed test?",
    "options": [
     "He should give up",
     "He should change school",
     "Mistakes are part of learning"
    ],
    "answer": 2
   },
   {
    "q": "What did Pedro apply for after the exam?",
    "options": [
     "A new job",
     "A scholarship to study in Dublin",
     "A diploma in design"
    ],
    "answer": 1
   },
   {
    "q": "What does Pedro compare learning a language to?",
    "options": [
     "A long race",
     "A short walk",
     "A game"
    ],
    "answer": 0
   },
   {
    "q": "How old is Pedro?",
    "options": [
     "Twenty",
     "Thirty-two",
     "Fifty"
    ],
    "answer": 1
   },
   {
    "q": "What diploma does he have?",
    "options": [
     "A degree in English",
     "A diploma in design",
     "A diploma in history"
    ],
    "answer": 1
   },
   {
    "q": "What does he want?",
    "options": [
     "A degree",
     "A new job",
     "A certificate in English"
    ],
    "answer": 2
   },
   {
    "q": "When is the English course?",
    "options": [
     "In the evenings",
     "At weekends",
     "In the mornings"
    ],
    "answer": 0
   },
   {
    "q": "What does he have to write every week?",
    "options": [
     "A composition",
     "A report",
     "A letter"
    ],
    "answer": 0
   },
   {
    "q": "Who does he practise with on Saturdays?",
    "options": [
     "A friend",
     "A tutor",
     "His wife"
    ],
    "answer": 1
   },
   {
    "q": "What does he almost do after failing his first test?",
    "options": [
     "Change school",
     "Give up",
     "Move to Dublin"
    ],
    "answer": 1
   },
   {
    "q": "When does he pass the exam?",
    "options": [
     "After six months",
     "After a week",
     "After one year"
    ],
    "answer": 0
   },
   {
    "q": "What is Pedro's wife?",
    "options": [
     "A teacher of English",
     "A designer",
     "A graduate in history"
    ],
    "answer": 2
   },
   {
    "q": "What does Pedro say adults need?",
    "options": [
     "Money",
     "A good teacher",
     "Patience and a lot of motivation"
    ],
    "answer": 2
   }
  ]
 },
 "feelingsb1": {
  "title": "The interview",
  "paragraphs": [
   "Marta felt anxious when she woke up on the day of her job interview. She was confident about her skills, but she was also afraid that she would forget everything. On the bus she noticed that her hands were cold, and she felt a little embarrassed because a man was looking at her. She breathed slowly and tried to be cheerful. When she arrived at the office, the receptionist was charming and offered her a glass of water.",
   "The interviewer was a gentle woman who spoke slowly and smiled often. At the beginning Marta was confused by a difficult question about her last project. She felt ashamed of her first answer, which was not very good, and she was disappointed with herself. But then the interviewer asked about her hobbies, and Marta relaxed. She told a funny story about a trip to Italy, and the interviewer laughed. For the first time that day, Marta felt glad to be there.",
   "When the interview ended, Marta was exhausted, but she was also relieved. She called her best friend, who was curious about every detail. Her friend was jealous because she was still looking for a job, but she tried to hide it. Two days later Marta received an email. She was delighted to hear that she got the job. Her mother cried with joy, and her father, who is usually quite cruel with his jokes, hugged her. Marta is grateful for the support of everyone, and she says that she learned something important: it is normal to feel frightened, but it is not a reason to stop."
  ],
  "questions": [
   {
    "q": "How did Marta feel when she woke up?",
    "options": [
     "Anxious",
     "Delighted",
     "Jealous"
    ],
    "answer": 0
   },
   {
    "q": "What was the interviewer like?",
    "options": [
     "Cruel",
     "Bossy",
     "Gentle and often smiling"
    ],
    "answer": 2
   },
   {
    "q": "What made Marta relax?",
    "options": [
     "The glass of water",
     "A question about her hobbies",
     "A phone call"
    ],
    "answer": 1
   },
   {
    "q": "Why was her friend a little jealous?",
    "options": [
     "Marta was rich",
     "She did not like Marta",
     "She was still looking for a job"
    ],
    "answer": 2
   },
   {
    "q": "What did Marta learn?",
    "options": [
     "Never apply for jobs",
     "Always be late",
     "It is normal to feel frightened but it is not a reason to stop"
    ],
    "answer": 2
   },
   {
    "q": "What is the day?",
    "options": [
     "Her wedding",
     "The day of Marta's job interview",
     "Her birthday"
    ],
    "answer": 1
   },
   {
    "q": "What is she afraid of?",
    "options": [
     "That she will forget everything",
     "That nobody will come",
     "That she will be late"
    ],
    "answer": 0
   },
   {
    "q": "What does she notice on the bus?",
    "options": [
     "The bus is late",
     "Nobody is there",
     "Her hands are cold"
    ],
    "answer": 2
   },
   {
    "q": "What does the receptionist offer her?",
    "options": [
     "A glass of water",
     "A chair",
     "A coffee"
    ],
    "answer": 0
   },
   {
    "q": "Which question confuses Marta?",
    "options": [
     "A question about her age",
     "A difficult question about her last project",
     "A question about money"
    ],
    "answer": 1
   },
   {
    "q": "How does she feel about her first answer?",
    "options": [
     "Ashamed",
     "Proud",
     "Indifferent"
    ],
    "answer": 0
   },
   {
    "q": "What story does she tell?",
    "options": [
     "A funny story about a trip to Italy",
     "A sad story about her job",
     "A story about her family"
    ],
    "answer": 0
   },
   {
    "q": "How does she feel when the interview ends?",
    "options": [
     "Exhausted but relieved",
     "Sad",
     "Angry"
    ],
    "answer": 0
   },
   {
    "q": "How does she find out about the job?",
    "options": [
     "By email two days later",
     "In a letter",
     "By phone the same day"
    ],
    "answer": 0
   },
   {
    "q": "Who hugs Marta?",
    "options": [
     "Her father",
     "The interviewer",
     "Her best friend"
    ],
    "answer": 0
   }
  ]
 },
 "newsb2": {
  "title": "Who can we trust?",
  "paragraphs": [
   "Twenty years ago, most people got their news from the press or from the television. Today, millions of viewers read the headlines on their phones, and a rumour can reach a whole country in a few minutes. This change has transformed journalism. A young reporter can now publish a scoop in seconds, but a tabloid can also spread fake news just as quickly. The editor of a newspaper, who once decided what went on the front page, now competes with thousands of anonymous voices.",
   "The consequences for society are serious. In some countries the government uses censorship and propaganda to control the information that citizens receive. In others, the problem is the opposite: there is so much information that nobody knows which source is reliable. Correspondents risk their lives to report from war zones, but their coverage is often challenged by people who have never left their homes. A columnist who is critical of a government may face threats, and a publisher may lose its readers.",
   "What can we do? Experts advise us to read more than one source, to check the author, and to be suspicious of misleading titles. Schools are beginning to teach media literacy, and some newspapers offer a subscription that finances serious investigations. The circulation of printed papers is falling, but the demand for quality journalism is not. As one editor said in an interview, \"People do not stop wanting the truth. They only stop knowing where to find it.\" In the era of breaking news, the most important skill may be to wait a little before we believe, and to share only what we can verify."
  ],
  "questions": [
   {
    "q": "What can reach a whole country in a few minutes?",
    "options": [
     "A tabloid",
     "A rumour",
     "A scoop"
    ],
    "answer": 1
   },
   {
    "q": "What do some governments use to control information?",
    "options": [
     "Censorship and propaganda",
     "Free media",
     "More journalists"
    ],
    "answer": 0
   },
   {
    "q": "What is a problem in other countries?",
    "options": [
     "There is no news",
     "There is so much information that nobody knows what to trust",
     "There are no newspapers"
    ],
    "answer": 1
   },
   {
    "q": "What do experts advise?",
    "options": [
     "Share every rumour",
     "Read more than one source and check the author",
     "Believe the first headline"
    ],
    "answer": 1
   },
   {
    "q": "What does the editor say people stop doing?",
    "options": [
     "Wanting the truth",
     "Reading newspapers",
     "Knowing where to find the truth"
    ],
    "answer": 2
   },
   {
    "q": "Where did most people get their news twenty years ago?",
    "options": [
     "From friends",
     "From social media",
     "From the press and television"
    ],
    "answer": 2
   },
   {
    "q": "What do millions of viewers read today?",
    "options": [
     "Headlines on their phones",
     "Printed papers only",
     "Books"
    ],
    "answer": 0
   },
   {
    "q": "What can a young reporter do in seconds?",
    "options": [
     "Win a prize",
     "Close a newspaper",
     "Publish a scoop"
    ],
    "answer": 2
   },
   {
    "q": "What can a tabloid spread quickly?",
    "options": [
     "Advertising only",
     "Fake news",
     "Real scoops"
    ],
    "answer": 1
   },
   {
    "q": "Who now competes with thousands of anonymous voices?",
    "options": [
     "The editor of a newspaper",
     "The government",
     "The reader"
    ],
    "answer": 0
   },
   {
    "q": "What do correspondents risk?",
    "options": [
     "Their lives",
     "Their readers",
     "Their salary"
    ],
    "answer": 0
   },
   {
    "q": "What are schools beginning to teach?",
    "options": [
     "Politics",
     "Journalism only",
     "Media literacy"
    ],
    "answer": 2
   },
   {
    "q": "What does a subscription finance?",
    "options": [
     "Advertising",
     "Serious investigations",
     "New phones"
    ],
    "answer": 1
   },
   {
    "q": "What is falling?",
    "options": [
     "The demand for quality journalism",
     "The circulation of printed papers",
     "The number of readers online"
    ],
    "answer": 1
   },
   {
    "q": "What should we share, according to the end of the text?",
    "options": [
     "Every rumour",
     "Nothing",
     "Only what we can verify"
    ],
    "answer": 2
   }
  ]
 },
 "studyb2": {
  "title": "The first year at university",
  "paragraphs": [
   "When Rita enrolled at the university, she was excited and a little afraid. The campus was huge, and the first week was full of lectures, seminars and tutorials. She was an undergraduate in biology, and her syllabus included chemistry, statistics and a long list of books. In the first tutorial, her supervisor explained that attendance was compulsory and that the final assessment included a written exam and a piece of coursework worth forty per cent of the mark.",
   "The hardest part was learning to organise her time. At school there was a timetable for everything, but at university she had to decide when to study. Her first essay was returned with a low mark and one comment: \"Be careful with plagiarism.\" She had used a sentence from a website without a reference, and she had to learn to cite sources properly. After a long conversation with the supervisor, she understood that the aim of the discipline was not to repeat what others said, but to think critically.",
   "In the second term she found her rhythm. She began to enjoy the library and the discussions in class. She received a small grant for books, and she worked part time in the cafeteria. A friend of hers preferred distance learning because she had a job, and she said that it was more flexible but also lonelier. Rita, in contrast, loved the life on campus. At the end of the year, she passed all her subjects and began to dream about a postgraduate course. She knew that the road to a thesis was long, but she was ready for the next step."
  ],
  "questions": [
   {
    "q": "What was the assessment made of?",
    "options": [
     "Only an essay",
     "A written exam and coursework",
     "Only an exam"
    ],
    "answer": 1
   },
   {
    "q": "Why did her first essay get a low mark?",
    "options": [
     "She used a sentence without a reference",
     "She did not write it",
     "It was too long"
    ],
    "answer": 0
   },
   {
    "q": "What did Rita receive for books?",
    "options": [
     "A small grant",
     "A loan",
     "A scholarship"
    ],
    "answer": 0
   },
   {
    "q": "Why did her friend choose distance learning?",
    "options": [
     "It was cheaper only",
     "She had a job",
     "She hated the campus"
    ],
    "answer": 1
   },
   {
    "q": "What did Rita begin to dream about?",
    "options": [
     "Changing subject",
     "Leaving university",
     "A postgraduate course"
    ],
    "answer": 2
   },
   {
    "q": "What did Rita study?",
    "options": [
     "History",
     "Law",
     "Biology"
    ],
    "answer": 2
   },
   {
    "q": "What is huge?",
    "options": [
     "The classroom",
     "The campus",
     "The library"
    ],
    "answer": 1
   },
   {
    "q": "What is compulsory?",
    "options": [
     "Attendance",
     "The exam only",
     "The coursework only"
    ],
    "answer": 0
   },
   {
    "q": "How much is the coursework worth?",
    "options": [
     "Ten per cent",
     "Ninety per cent",
     "Forty per cent"
    ],
    "answer": 2
   },
   {
    "q": "What was the comment on her first essay?",
    "options": [
     "Too short",
     "Excellent work",
     "Be careful with plagiarism"
    ],
    "answer": 2
   },
   {
    "q": "What was the aim of the discipline?",
    "options": [
     "To learn by heart",
     "To think critically",
     "To repeat what others said"
    ],
    "answer": 1
   },
   {
    "q": "What did Rita do in the second term?",
    "options": [
     "Left the university",
     "Found her rhythm",
     "Failed"
    ],
    "answer": 1
   },
   {
    "q": "Where did she work part time?",
    "options": [
     "In the cafeteria",
     "In the library",
     "In a bank"
    ],
    "answer": 0
   },
   {
    "q": "What did her friend think of distance learning?",
    "options": [
     "Cheaper only",
     "More flexible but lonelier",
     "Easier"
    ],
    "answer": 1
   },
   {
    "q": "What did Rita do at the end of the year?",
    "options": [
     "Passed all her subjects",
     "Moved to another city",
     "Failed a subject"
    ],
    "answer": 0
   }
  ]
 },
 "mind": {
  "title": "The pressure of exams",
  "paragraphs": [
   "For many teenagers, the exam period is a time of great pressure. Tiago, who is seventeen, used to feel a strong anxiety every time a test was announced. He could not sleep, he lost his appetite, and his mood changed several times in a day. His mother noticed that he was often in a bad temper, and that he had no patience with his younger sister. At first she thought it was only a phase, but as time passed, she started to worry about an early signal of depression.",
   "She suggested that he talk to a therapist. At first Tiago was reluctant, because he thought that therapy was only for people with a real trauma. However, in the first session the psychologist explained that stress, guilt and a feeling of being overwhelmed are normal reactions, and that nobody should cope with them alone. Together they worked on his self-esteem and on simple techniques, such as a regular routine and a walk after studying. Tiago learned that a perfectionist's obsession with high marks is often the cause of burnout.",
   "After three months he was much calmer. He still had mood swings sometimes, but he knew how to cheer up and calm down. He also discovered that his instinct, when he felt that something was wrong, was usually right. He decided to share his experience at school, because he believed that empathy and open conversations could help other students who had a phobia of exams. His teacher was delighted. \"Having a problem is not a weakness,\" Tiago says now. \"The weakness is pretending that you do not have one.\""
  ],
  "questions": [
   {
    "q": "How did Tiago feel when a test was announced?",
    "options": [
     "Great joy",
     "A strong anxiety",
     "Indifference"
    ],
    "answer": 1
   },
   {
    "q": "Why was he reluctant to see a therapist?",
    "options": [
     "It was too expensive",
     "He did not like psychologists",
     "He thought it was only for people with trauma"
    ],
    "answer": 2
   },
   {
    "q": "What did he work on in therapy?",
    "options": [
     "His memory only",
     "His self-esteem and simple techniques",
     "His handwriting"
    ],
    "answer": 1
   },
   {
    "q": "What does Tiago say about having a problem?",
    "options": [
     "It is not a weakness",
     "It is a secret",
     "It is a failure"
    ],
    "answer": 0
   },
   {
    "q": "What did he decide to do at school?",
    "options": [
     "Stop studying",
     "Change school",
     "Share his experience"
    ],
    "answer": 2
   },
   {
    "q": "How old is Tiago?",
    "options": [
     "Twenty-five",
     "Twelve",
     "Seventeen"
    ],
    "answer": 2
   },
   {
    "q": "What happens to Tiago's sleep and appetite?",
    "options": [
     "He sleeps a lot",
     "He cannot sleep and loses his appetite",
     "He eats more"
    ],
    "answer": 1
   },
   {
    "q": "How does his mother notice his problem?",
    "options": [
     "He is very happy",
     "He studies all night",
     "He is often in a bad temper"
    ],
    "answer": 2
   },
   {
    "q": "What does she suggest?",
    "options": [
     "Changing school",
     "Taking a holiday",
     "Talking to a therapist"
    ],
    "answer": 2
   },
   {
    "q": "What does the psychologist say about stress and guilt?",
    "options": [
     "They are normal reactions",
     "They are rare",
     "They are illnesses"
    ],
    "answer": 0
   },
   {
    "q": "What techniques do they use?",
    "options": [
     "Sleeping pills",
     "A regular routine and a walk after studying",
     "Medicine"
    ],
    "answer": 1
   },
   {
    "q": "What is often the cause of burnout?",
    "options": [
     "A perfectionist's obsession with high marks",
     "Lack of sleep",
     "Bad teachers"
    ],
    "answer": 0
   },
   {
    "q": "How is Tiago after three months?",
    "options": [
     "The same",
     "Worse",
     "Much calmer"
    ],
    "answer": 2
   },
   {
    "q": "What does Tiago learn about his instinct?",
    "options": [
     "It is always wrong",
     "It is not important",
     "It is usually right"
    ],
    "answer": 2
   },
   {
    "q": "Who is delighted with his decision to share his experience?",
    "options": [
     "His teacher",
     "His mother",
     "His sister"
    ],
    "answer": 0
   }
  ]
 },
 "medicineb2": {
  "title": "A week in the hospital",
  "paragraphs": [
   "Last winter my uncle Carlos went to the hospital with a pain in his chest. The doctor on duty did a check-up and asked a specialist to examine him. After several tests, the diagnosis was clear: a problem with his heart that needed surgery. My uncle was afraid, because he had never been in a hospital before, but the surgeon explained every step. The operation would take about five hours, and the anaesthetic would be general.",
   "The operation was a complete success. When Carlos woke up, he was in a ward with five other patients, and a nurse was checking his blood pressure. The first days of recovery were difficult. He could not walk without help, and for a while he used a wheelchair. He received a prescription for a daily dose of medicine, and the doctor warned him about possible side effects. Fortunately, he had only a little dizziness. He was impressed by the kindness of the staff, who worked day and night.",
   "Before he left the hospital, the doctor gave him some advice. He had a chronic illness that was partly related to his lifestyle. He needed to lose weight, because obesity was a risk, and he had to avoid tobacco, because addiction was hard to break. The doctor also recommended a vaccination against the flu, since the winter epidemic was already beginning. Now Carlos walks every morning, and he goes for a check-up every six months. He says that being a patient was the hardest experience of his life, but it taught him to respect his body."
  ],
  "questions": [
   {
    "q": "Why did Carlos go to the hospital?",
    "options": [
     "He had an accident",
     "He had a pain in his chest",
     "He had the flu"
    ],
    "answer": 1
   },
   {
    "q": "How long would the operation take?",
    "options": [
     "Two days",
     "One hour",
     "About five hours"
    ],
    "answer": 2
   },
   {
    "q": "What did Carlos use for a while after the operation?",
    "options": [
     "A walking stick",
     "A wheelchair",
     "A bed only"
    ],
    "answer": 1
   },
   {
    "q": "What did the doctor advise him to avoid?",
    "options": [
     "Tobacco",
     "Exercise",
     "Fruit"
    ],
    "answer": 0
   },
   {
    "q": "What does Carlos do now?",
    "options": [
     "Takes no medicine",
     "Walks every morning and has a check-up every six months",
     "Stays in bed"
    ],
    "answer": 1
   },
   {
    "q": "When did Carlos go to the hospital?",
    "options": [
     "Last summer",
     "Last week",
     "Last winter"
    ],
    "answer": 2
   },
   {
    "q": "What was the problem?",
    "options": [
     "A toothache",
     "A problem with his heart",
     "A broken leg"
    ],
    "answer": 1
   },
   {
    "q": "Who explained every step of the operation?",
    "options": [
     "The nurse",
     "The surgeon",
     "The specialist"
    ],
    "answer": 1
   },
   {
    "q": "What type of anaesthetic would he have?",
    "options": [
     "None",
     "General",
     "Local"
    ],
    "answer": 1
   },
   {
    "q": "How many other patients were in the ward?",
    "options": [
     "Ten",
     "One",
     "Five"
    ],
    "answer": 2
   },
   {
    "q": "What was the nurse checking?",
    "options": [
     "His weight",
     "His temperature",
     "His blood pressure"
    ],
    "answer": 2
   },
   {
    "q": "What side effect did he have?",
    "options": [
     "Nausea",
     "A rash",
     "A little dizziness"
    ],
    "answer": 2
   },
   {
    "q": "What did he admire about the staff?",
    "options": [
     "Their speed",
     "Their uniforms",
     "Their kindness"
    ],
    "answer": 2
   },
   {
    "q": "What vaccination did the doctor recommend?",
    "options": [
     "Against measles",
     "Against cancer",
     "Against the flu"
    ],
    "answer": 2
   },
   {
    "q": "What does Carlos say about being a patient?",
    "options": [
     "It was easy",
     "It was fun",
     "It taught him to respect his body"
    ],
    "answer": 2
   }
  ]
 },
 "cityb2": {
  "title": "Two ways of living",
  "paragraphs": [
   "Daniela lives in the centre of a big city, in a small flat on the ninth floor of a skyscraper. Every morning she goes down to the street, where the pavement is full of pedestrians, and she takes the underground. She says that the commute is the worst part of her day: during rush hour the carriages are overcrowded and the congestion on the roads makes buses almost useless. The air quality is poor, and the cost of living is so high that she can hardly afford the rent.",
   "Her brother Miguel prefers the countryside. He moved to a rural village, where there is only one shop and a small café. He has a large garden, a view of the hills and almost no noise. But rural life has disadvantages too. The infrastructure is weak: the bus comes twice a day, and the nearest hospital is forty minutes away. Young people leave the village to find work in the city, so the population is getting older. In the evening there is nothing to do, and Miguel sometimes feels lonely.",
   "Many people choose a compromise. They live in a quiet residential suburb, where the housing estates have parks and a cycle lane, and they take a train to the centre. The municipality of Daniela's city is trying to improve life in the old districts. It has built new bike paths, and it limits the traffic near the main landmark. At the same time, gentrification is a problem: when a district becomes fashionable, prices rise, and the original residents often have to leave. Perhaps the ideal place does not exist, but the discussion about how to build better cities is one of the most important of our time."
  ],
  "questions": [
   {
    "q": "Where does Daniela live?",
    "options": [
     "In a flat in a skyscraper",
     "In a cottage",
     "In a village"
    ],
    "answer": 0
   },
   {
    "q": "What is the worst part of her day?",
    "options": [
     "Her job",
     "The commute during rush hour",
     "The weather"
    ],
    "answer": 1
   },
   {
    "q": "What is a disadvantage of rural life?",
    "options": [
     "High prices",
     "Weak infrastructure and few services",
     "Too much noise"
    ],
    "answer": 1
   },
   {
    "q": "What have many people chosen?",
    "options": [
     "A slum",
     "A residential suburb as a compromise",
     "The countryside"
    ],
    "answer": 1
   },
   {
    "q": "What problem does gentrification cause?",
    "options": [
     "Prices rise and residents have to leave",
     "More parks",
     "Fewer cars"
    ],
    "answer": 0
   },
   {
    "q": "On which floor is Daniela's flat?",
    "options": [
     "The first",
     "The ninth",
     "The twentieth"
    ],
    "answer": 1
   },
   {
    "q": "How does she go to work?",
    "options": [
     "By car",
     "By bicycle",
     "By underground"
    ],
    "answer": 2
   },
   {
    "q": "What is the commute like during rush hour?",
    "options": [
     "The trains are empty",
     "The carriages are overcrowded",
     "It is fast"
    ],
    "answer": 1
   },
   {
    "q": "What is the cost of living like?",
    "options": [
     "Normal",
     "So high that she can hardly afford the rent",
     "Very low"
    ],
    "answer": 1
   },
   {
    "q": "Who prefers the countryside?",
    "options": [
     "Her brother Miguel",
     "Her mother",
     "Her friend"
    ],
    "answer": 0
   },
   {
    "q": "What does Miguel have in the village?",
    "options": [
     "A car park",
     "A large garden and a view of the hills",
     "A skyscraper"
    ],
    "answer": 1
   },
   {
    "q": "How often does the bus come?",
    "options": [
     "Twice a day",
     "Every ten minutes",
     "Never"
    ],
    "answer": 0
   },
   {
    "q": "How far is the nearest hospital?",
    "options": [
     "Next door",
     "Two hours away",
     "Forty minutes away"
    ],
    "answer": 2
   },
   {
    "q": "What is happening to the population of the village?",
    "options": [
     "It is getting older",
     "It is growing",
     "It is the same"
    ],
    "answer": 0
   },
   {
    "q": "What has the municipality built?",
    "options": [
     "A skyscraper",
     "A new airport",
     "New bike paths"
    ],
    "answer": 2
   }
  ]
 },
 "discourse": {
  "title": "Two solutions, one problem",
  "paragraphs": [
   "Every city faces the problem of traffic, and there are usually two possible solutions. The first is to build more roads. This is cheap; furthermore, it is fast, and many voters like it because it gives an immediate result. Nevertheless, experience shows that new roads attract more cars, and the congestion returns within a few years. Consequently, the problem is not solved but only postponed, and the budget is spent in vain.",
   "The second solution is to invest in public transport. It is more expensive, albeit more effective in the long term. With regard to the cost, a modern underground or a good tram network can carry thousands of people per hour, whereas a motorway can carry only a fraction of that number. Moreover, there are benefits for health and for the environment. As a result, the air becomes cleaner, and the streets become quieter. By contrast, a city that depends on cars must deal with noise, accidents and pollution.",
   "Critics argue that public transport does not suit everyone. To some extent, they are right: in remote areas, a bus is not enough. Notwithstanding these difficulties, the evidence points in one direction. In spite of the high initial price, cities that invest in trains and trams are generally more productive and more pleasant. Owing to this, many governments are changing their policy. On the contrary, a few still believe that the car is the future. In conclusion, the choice is not only technical but also political, and a good decision requires both courage and patience."
  ],
  "questions": [
   {
    "q": "What is the first solution to traffic?",
    "options": [
     "Building more roads",
     "Banning cars",
     "Building a tram"
    ],
    "answer": 0
   },
   {
    "q": "What happens after a few years with new roads?",
    "options": [
     "The congestion returns",
     "Prices fall",
     "Traffic disappears"
    ],
    "answer": 0
   },
   {
    "q": "Why is public transport better in the long term?",
    "options": [
     "It carries many more people and has health benefits",
     "It is cheaper to build",
     "It is faster to build"
    ],
    "answer": 0
   },
   {
    "q": "What do critics say?",
    "options": [
     "Trams are too fast",
     "Roads are better for health",
     "Public transport does not suit everyone"
    ],
    "answer": 2
   },
   {
    "q": "What does the conclusion say about the choice?",
    "options": [
     "It is only financial",
     "It is only technical",
     "It is technical and political"
    ],
    "answer": 2
   },
   {
    "q": "Why do many voters like new roads?",
    "options": [
     "They are beautiful",
     "They give an immediate result",
     "They last forever"
    ],
    "answer": 1
   },
   {
    "q": "What happens to the budget with new roads?",
    "options": [
     "It increases",
     "It is spent in vain",
     "It is saved"
    ],
    "answer": 1
   },
   {
    "q": "Which solution is more expensive?",
    "options": [
     "Neither",
     "New roads",
     "Public transport"
    ],
    "answer": 2
   },
   {
    "q": "What can a modern underground carry?",
    "options": [
     "Only cars",
     "Ten people",
     "Thousands of people per hour"
    ],
    "answer": 2
   },
   {
    "q": "What happens to the air with public transport?",
    "options": [
     "It becomes dirtier",
     "It becomes cleaner",
     "Nothing"
    ],
    "answer": 1
   },
   {
    "q": "What happens to the streets?",
    "options": [
     "They close",
     "They become quieter",
     "They become louder"
    ],
    "answer": 1
   },
   {
    "q": "Where is a bus not enough?",
    "options": [
     "In the centre",
     "In remote areas",
     "In big cities"
    ],
    "answer": 1
   },
   {
    "q": "What are cities that invest in trains and trams?",
    "options": [
     "Poorer",
     "Noisier",
     "More productive and more pleasant"
    ],
    "answer": 2
   },
   {
    "q": "What do a few governments still believe?",
    "options": [
     "That trams are the future",
     "That the car is the future",
     "That nothing changes"
    ],
    "answer": 1
   },
   {
    "q": "What does a good decision require?",
    "options": [
     "Courage and patience",
     "Luck",
     "Money only"
    ],
    "answer": 0
   }
  ]
 },
 "power": {
  "title": "Power and its limits",
  "paragraphs": [
   "In a democracy, power does not belong to one person. A president or a prime minister may lead the cabinet, but the authority of the government comes from the electorate. Every few years a campaign takes place, and the parties publish their manifestos. Citizens go to the polls and cast a secret ballot. The turnout, that is, the number of people who vote, is a good indicator of the health of the system. When it is low, it can mean that many people are tired of politics or do not trust it.",
   "Of course, elected leaders need limits. In a healthy system, the opposition has the right to criticise, and the press can investigate without fear. A president may veto a law, but Parliament can reject the veto. A court can declare that a rule is not legitimate. By contrast, a dictatorship concentrates all power in one hierarchy and does not allow a free vote. After a revolution, the new regime may promise freedom, but history shows that the promise is not always kept.",
   "Two problems threaten many democracies today: corruption and a lack of transparency. When citizens do not know how public money is spent, trust declines. That is why many organisations demand that politicians be accountable and that the budget be published. International delegates and diplomats also play a role, because they can impose sanctions on regimes that violate human rights. A tension remains between sovereignty and global cooperation. In the end, a society that wants to protect its freedom must be vigilant: power is safe only when it is shared, observed and, if necessary, removed."
  ],
  "questions": [
   {
    "q": "Where does the authority of the government come from?",
    "options": [
     "The electorate",
     "The army",
     "The press"
    ],
    "answer": 0
   },
   {
    "q": "What does low turnout may mean?",
    "options": [
     "Many people do not trust politics",
     "Everyone is happy",
     "The system is perfect"
    ],
    "answer": 0
   },
   {
    "q": "What can a court do?",
    "options": [
     "Make laws",
     "Declare that a rule is not legitimate",
     "Choose the president"
    ],
    "answer": 1
   },
   {
    "q": "What two problems threaten democracies?",
    "options": [
     "Corruption and lack of transparency",
     "Taxes and prices",
     "War and poverty"
    ],
    "answer": 0
   },
   {
    "q": "When is power safe, according to the text?",
    "options": [
     "When it is secret",
     "When it is concentrated",
     "When it is shared, observed and, if necessary, removed"
    ],
    "answer": 2
   },
   {
    "q": "Who leads the cabinet?",
    "options": [
     "A judge",
     "A journalist",
     "A president or a prime minister"
    ],
    "answer": 2
   },
   {
    "q": "What do parties publish during a campaign?",
    "options": [
     "Budgets",
     "Laws",
     "Manifestos"
    ],
    "answer": 2
   },
   {
    "q": "What kind of ballot do citizens cast?",
    "options": [
     "A secret ballot",
     "No ballot",
     "A public ballot"
    ],
    "answer": 0
   },
   {
    "q": "What is turnout?",
    "options": [
     "The number of people who vote",
     "The number of candidates",
     "The number of laws"
    ],
    "answer": 0
   },
   {
    "q": "What does the opposition have the right to do?",
    "options": [
     "Make laws alone",
     "Change the constitution",
     "Criticise the government"
    ],
    "answer": 2
   },
   {
    "q": "Who can reject a veto?",
    "options": [
     "The press",
     "The court",
     "Parliament"
    ],
    "answer": 2
   },
   {
    "q": "What does a dictatorship concentrate?",
    "options": [
     "Power in the people",
     "Power in the courts",
     "All power in one hierarchy"
    ],
    "answer": 2
   },
   {
    "q": "What may a new regime promise after a revolution?",
    "options": [
     "War",
     "Freedom",
     "More taxes"
    ],
    "answer": 1
   },
   {
    "q": "What do many organisations demand from politicians?",
    "options": [
     "That they be accountable",
     "That they be rich",
     "That they be silent"
    ],
    "answer": 0
   },
   {
    "q": "What can diplomats impose on regimes that violate human rights?",
    "options": [
     "Sanctions",
     "Elections",
     "Taxes"
    ],
    "answer": 0
   }
  ]
 },
 "sustain": {
  "title": "A greener future",
  "paragraphs": [
   "Climate change is the greatest environmental challenge of our time. Scientists agree that the burning of fossil fuels releases greenhouse gases that heat the planet, and that urgent action is necessary. The carbon footprint of a single person, a family or a company can be measured, and this makes it easier to define goals. Many governments now promise to reduce emissions, but critics ask whether the promises will be kept.",
   "The impact of human activity on nature is dramatic. Deforestation destroys the habitat of thousands of species, and biodiversity is falling faster than at any time in history. Overfishing threatens the ecosystem of the oceans, and pollutants from factories and farms contaminate rivers. The ozone layer, which was seriously damaged in the past, is slowly recovering, which shows that international cooperation can work. Meanwhile, desertification and urbanisation are changing the landscape of entire regions.",
   "What can we do? Experts recommend a combination of measures. Cities can promote sustainable transport and build eco-friendly buildings, farmers can adopt organic methods, and citizens can conserve energy and water and avoid sending waste to landfill. Companies can offset part of their emissions by planting trees, although this is not enough on its own. The conservation of natural areas is essential, and it needs both money and political will. Individual choices matter, but the main responsibility belongs to governments and industry. The question is no longer whether we should tackle the problem, but how fast we can do it before the damage becomes irreversible."
  ],
  "questions": [
   {
    "q": "What do fossil fuels release?",
    "options": [
     "Oxygen",
     "Water",
     "Greenhouse gases"
    ],
    "answer": 2
   },
   {
    "q": "What does deforestation destroy?",
    "options": [
     "Oceans",
     "Cities",
     "The habitat of thousands of species"
    ],
    "answer": 2
   },
   {
    "q": "What shows that international cooperation can work?",
    "options": [
     "Overfishing",
     "The loss of forests",
     "The recovery of the ozone layer"
    ],
    "answer": 2
   },
   {
    "q": "What is not enough on its own?",
    "options": [
     "Conserving water",
     "Using public transport",
     "Offsetting emissions by planting trees"
    ],
    "answer": 2
   },
   {
    "q": "According to the text, who has the main responsibility?",
    "options": [
     "Governments and industry",
     "Only individuals",
     "Only scientists"
    ],
    "answer": 0
   },
   {
    "q": "What is the greatest environmental challenge?",
    "options": [
     "Climate change",
     "Noise",
     "Traffic"
    ],
    "answer": 0
   },
   {
    "q": "What can be measured to make goals easier to define?",
    "options": [
     "The carbon footprint",
     "The rainfall",
     "The population"
    ],
    "answer": 0
   },
   {
    "q": "What do critics ask about the governments' promises?",
    "options": [
     "Whether they will be kept",
     "Whether they are expensive",
     "Whether they are new"
    ],
    "answer": 0
   },
   {
    "q": "What is falling faster than ever?",
    "options": [
     "The temperature",
     "Pollution",
     "Biodiversity"
    ],
    "answer": 2
   },
   {
    "q": "What does overfishing threaten?",
    "options": [
     "Mountains",
     "Forests",
     "The ecosystem of the oceans"
    ],
    "answer": 2
   },
   {
    "q": "What contaminates rivers?",
    "options": [
     "Pollutants from factories and farms",
     "Fish",
     "Rain"
    ],
    "answer": 0
   },
   {
    "q": "What is the ozone layer doing?",
    "options": [
     "Slowly recovering",
     "Growing fast",
     "Disappearing"
    ],
    "answer": 0
   },
   {
    "q": "What can farmers adopt?",
    "options": [
     "Organic methods",
     "Bigger fields",
     "New machines only"
    ],
    "answer": 0
   },
   {
    "q": "What do conservation of natural areas need?",
    "options": [
     "Only volunteers",
     "Money and political will",
     "Only rules"
    ],
    "answer": 1
   },
   {
    "q": "What is the question now?",
    "options": [
     "How fast we can tackle the problem",
     "Who will pay",
     "Whether we should tackle it"
    ],
    "answer": 0
   }
  ]
 },
 "innovation": {
  "title": "Intelligent machines",
  "paragraphs": [
   "Artificial intelligence is no longer science fiction. Every time we watch a video, an algorithm chooses what we see, and every time we use a translator, machine learning improves the result. Companies analyse huge databases to predict what customers will buy, and hospitals use software to help doctors make a diagnosis. Innovation is happening so fast that a device which seems modern today may be obsolete in two years.",
   "These developments bring great opportunities but also serious risks. Automation can increase productivity, but it may replace workers in factories and offices. Surveillance cameras and apps collect data about our movements, and many people worry about their privacy. A cyberattack can paralyse a bank or a hospital in minutes, and a small bug in a program can have enormous consequences. For this reason, encryption and a good firewall have become essential, and many experts say that the laws have not kept pace with the technology.",
   "There is also the problem of inequality. The digital divide separates those who have a fast connection and good equipment from those who do not. In some countries, entire villages lack the bandwidth to take part in modern life. At the same time, engineers are building a prototype of new technologies, such as virtual reality for education and wearable devices that monitor our health. Whether these inventions help or harm us depends on how society decides to use them. As one researcher says, \"The question is never what technology can do, but what we want it to do.\""
  ],
  "questions": [
   {
    "q": "What does an algorithm do when we watch a video?",
    "options": [
     "It chooses what we see",
     "It deletes the video",
     "It pays for it"
    ],
    "answer": 0
   },
   {
    "q": "What is one risk of automation?",
    "options": [
     "It improves privacy",
     "It increases bandwidth",
     "It may replace workers"
    ],
    "answer": 2
   },
   {
    "q": "What can a cyberattack do?",
    "options": [
     "Improve security",
     "Paralyse a bank or a hospital",
     "Increase bandwidth"
    ],
    "answer": 1
   },
   {
    "q": "What does the digital divide separate?",
    "options": [
     "People with good connections from those without",
     "Men from women",
     "Young from old only"
    ],
    "answer": 0
   },
   {
    "q": "What does the researcher say the question is?",
    "options": [
     "How much it costs",
     "What technology can do",
     "What we want technology to do"
    ],
    "answer": 2
   },
   {
    "q": "What does machine learning do when we use a translator?",
    "options": [
     "It makes it slower",
     "It deletes the text",
     "It improves the result"
    ],
    "answer": 2
   },
   {
    "q": "What do companies analyse?",
    "options": [
     "Old books",
     "Huge databases",
     "Weather maps"
    ],
    "answer": 1
   },
   {
    "q": "What do hospitals use software for?",
    "options": [
     "To clean rooms",
     "To pay staff",
     "To help doctors make a diagnosis"
    ],
    "answer": 2
   },
   {
    "q": "How fast can a modern device become obsolete?",
    "options": [
     "In one day",
     "In two years",
     "In twenty years"
    ],
    "answer": 1
   },
   {
    "q": "What can automation increase?",
    "options": [
     "Productivity",
     "Prisons",
     "Prices only"
    ],
    "answer": 0
   },
   {
    "q": "What do surveillance cameras and apps collect?",
    "options": [
     "Data about our movements",
     "Money",
     "Food"
    ],
    "answer": 0
   },
   {
    "q": "What small thing can have enormous consequences?",
    "options": [
     "A bug in a program",
     "A new cable",
     "A new phone"
    ],
    "answer": 0
   },
   {
    "q": "What have become essential?",
    "options": [
     "More cables",
     "More workers",
     "Encryption and a good firewall"
    ],
    "answer": 2
   },
   {
    "q": "What do some villages lack?",
    "options": [
     "Roads",
     "Schools",
     "Bandwidth"
    ],
    "answer": 2
   },
   {
    "q": "What are engineers building?",
    "options": [
     "A bridge",
     "A prototype of new technologies",
     "A school"
    ],
    "answer": 1
   }
  ]
 },
 "management": {
  "title": "The new manager",
  "paragraphs": [
   "When Helena became the manager of a team of twenty people, she knew that the first months would be difficult. Her predecessor had left after a period of burnout, and the morale of the staff was low. She started by listening. In individual meetings, she asked each employee about their workload, their ambitions and their ideas for improvement. Many people said that they were tired of overtime and that there was no incentive to do their best.",
   "Helena presented a new strategy. First, she decided to supervise the projects more closely but to give more freedom to the team. She introduced a bonus for good results and promised that every employee would have an annual appraisal and a real chance of a promotion. She also tried to protect the work-life balance: overtime would be paid, and a freelance specialist would help during the busiest weeks. At the same time, the company wanted to downsize, and the management proposed a redundancy plan. Helena argued strongly against it, because she believed that firing people would reduce productivity.",
   "After a year, the results were encouraging. The team worked better, and teamwork improved. The company decided not to lay off anyone, and a rival firm even tried to headhunt two of Helena's best employees. She knew that this could be a problem, but she also saw it as proof that her people were valuable. When a journalist asked for the secret of her success, Helena answered with a smile: \"A manager does not win alone. A manager creates conditions in which other people can succeed.\" Many stakeholders agreed that this was the best lesson of the whole year."
  ],
  "questions": [
   {
    "q": "How did Helena begin?",
    "options": [
     "By firing people",
     "By listening to each employee",
     "By changing the office"
    ],
    "answer": 1
   },
   {
    "q": "What did she introduce?",
    "options": [
     "A bonus and annual appraisals",
     "Higher prices",
     "Longer hours"
    ],
    "answer": 0
   },
   {
    "q": "What did the management propose?",
    "options": [
     "A merger",
     "A redundancy plan",
     "A new product"
    ],
    "answer": 1
   },
   {
    "q": "What did a rival firm try to do?",
    "options": [
     "Close the factory",
     "Buy the company",
     "Headhunt two of her employees"
    ],
    "answer": 2
   },
   {
    "q": "What does Helena say a manager does?",
    "options": [
     "Controls everything",
     "Wins alone",
     "Creates conditions in which others can succeed"
    ],
    "answer": 2
   },
   {
    "q": "How many people are in Helena's team?",
    "options": [
     "Fifty",
     "Ten",
     "Twenty"
    ],
    "answer": 2
   },
   {
    "q": "Why did her predecessor leave?",
    "options": [
     "He retired",
     "He was fired",
     "After a period of burnout"
    ],
    "answer": 2
   },
   {
    "q": "What was the morale of the staff?",
    "options": [
     "Perfect",
     "Low",
     "High"
    ],
    "answer": 1
   },
   {
    "q": "What were many people tired of?",
    "options": [
     "Coffee",
     "Overtime",
     "Meetings"
    ],
    "answer": 1
   },
   {
    "q": "What did Helena decide to do with projects?",
    "options": [
     "Close them",
     "Supervise them more closely but give the team more freedom",
     "Sell them"
    ],
    "answer": 1
   },
   {
    "q": "What would every employee have?",
    "options": [
     "A longer holiday",
     "A free car",
     "An annual appraisal and a chance of promotion"
    ],
    "answer": 2
   },
   {
    "q": "What would be paid?",
    "options": [
     "Holidays only",
     "Training",
     "Overtime"
    ],
    "answer": 2
   },
   {
    "q": "What did Helena think firing people would do?",
    "options": [
     "Increase profit",
     "Reduce productivity",
     "Improve morale"
    ],
    "answer": 1
   },
   {
    "q": "What happened to teamwork after a year?",
    "options": [
     "It improved",
     "It stayed the same",
     "It disappeared"
    ],
    "answer": 0
   },
   {
    "q": "What did Helena see the rival firm's attempt as?",
    "options": [
     "A problem to ignore",
     "An insult",
     "Proof that her people were valuable"
    ],
    "answer": 2
   }
  ]
 },
 "colloc": {
  "title": "Making a difficult decision",
  "paragraphs": [
   "Every important decision requires time, information and a clear head. Before we make a decision, we must take into account all the opinions, and we should never jump to conclusions. A good leader knows how to strike a balance between speed and care. In a company, for example, a manager who takes a risk without checking the facts may fall short of the expected results. At the same time, one who waits too long may miss a chance.",
   "The same principle applies to politics. A government that wants to reform education must lay the foundations first: it needs money, trained teachers and the support of parents. A campaign can raise awareness of the problem, but the real challenge is to meet deadlines and to show results. Sometimes a study sheds light on an issue that nobody had noticed, and this can give rise to a new policy. A court decision may also set a precedent that changes the law for years.",
   "On a personal level, many people find it hard to come to terms with a change. Perhaps they hold a grudge against someone who made a decision that affected them, or they run a risk by ignoring a problem. The best approach is to bear in mind that every decision has a cost. We must play a role in our own life, pay attention to the signals and, whenever we can, draw a conclusion only after thinking calmly. When a jury cannot reach a verdict, the process stops. In life, however, we cannot stop; we only learn to decide a little better each time."
  ],
  "questions": [
   {
    "q": "What must we do before we make a decision?",
    "options": [
     "Wait forever",
     "Jump to conclusions",
     "Take into account all the opinions"
    ],
    "answer": 2
   },
   {
    "q": "What must a government that wants to reform education do first?",
    "options": [
     "Close schools",
     "Lay the foundations",
     "Raise taxes"
    ],
    "answer": 1
   },
   {
    "q": "What can a court decision do?",
    "options": [
     "Set a precedent",
     "Change the weather",
     "Choose a leader"
    ],
    "answer": 0
   },
   {
    "q": "What does the text say about decisions in life?",
    "options": [
     "Every decision has a cost",
     "Decisions are easy",
     "Nobody should decide"
    ],
    "answer": 0
   },
   {
    "q": "What happens when a jury cannot reach a verdict?",
    "options": [
     "The case ends in prison",
     "The process stops",
     "The judge decides alone"
    ],
    "answer": 1
   },
   {
    "q": "What does every important decision need?",
    "options": [
     "Time, information and a clear head",
     "Only luck",
     "Only money"
    ],
    "answer": 0
   },
   {
    "q": "What should a good leader strike?",
    "options": [
     "A deal",
     "A match",
     "A balance between speed and care"
    ],
    "answer": 2
   },
   {
    "q": "What may a manager who takes a risk without checking the facts do?",
    "options": [
     "Win a prize",
     "Lose his job at once",
     "Fall short of the expected results"
    ],
    "answer": 2
   },
   {
    "q": "What must a government that wants to reform education have?",
    "options": [
     "Money, trained teachers and support of parents",
     "Only money",
     "Only a campaign"
    ],
    "answer": 0
   },
   {
    "q": "What can a campaign raise?",
    "options": [
     "Awareness of the problem",
     "Money",
     "Taxes"
    ],
    "answer": 0
   },
   {
    "q": "What can a study shed light on?",
    "options": [
     "A mistake of the court",
     "An issue that nobody had noticed",
     "A new road"
    ],
    "answer": 1
   },
   {
    "q": "What can a study give rise to?",
    "options": [
     "A strike",
     "A new policy",
     "A new war"
    ],
    "answer": 1
   },
   {
    "q": "What do some people find hard to do on a personal level?",
    "options": [
     "Make a decision",
     "Take a risk",
     "Come to terms with a change"
    ],
    "answer": 2
   },
   {
    "q": "What do some people hold?",
    "options": [
     "A job",
     "A ticket",
     "A grudge"
    ],
    "answer": 2
   },
   {
    "q": "What should we bear in mind?",
    "options": [
     "That every decision has a cost",
     "That decisions are easy",
     "That nobody decides"
    ],
    "answer": 0
   }
  ]
 },
 "formal": {
  "title": "A letter of inquiry",
  "paragraphs": [
   "Dear Sir or Madam,",
   "I am writing to inquire about the postgraduate course that will commence in September. I reside in Portugal, and I wish to ascertain whether the university can accommodate students who live abroad and whether remote classes are available. Prior to my arrival, I must procure a visa, and I will, of course, comply with every regulation and abide by the rules of the institution.",
   "My qualifications are as follows: I hold a degree in economics, and for three years I have worked for a company that endeavours to promote sustainable development. I believe that this experience will assist me in attaining a high level in the course. I would also like to demonstrate my interest by sending you a short research proposal, which stipulates the questions that I intend to study. As far as the cost is concerned, I understand that the fee is fixed, but I should be grateful if you could notify me of any scholarship that might be available.",
   "I refrain from asking too many questions in this letter, but I hope that you will inform me of the next steps. If the conditions necessitate a personal interview, I can travel at short notice. Nothing in my situation should preclude me from taking part, and a speedy reply would allow me to organise my plans. Please remunerate me with your attention, in the sense that I would appreciate a prompt answer. Should any problem ensue, I will be happy to terminate the application and to apply again next year.",
   "Yours faithfully,"
  ],
  "questions": [
   {
    "q": "What is the writer asking about?",
    "options": [
     "A visa only",
     "A job",
     "A postgraduate course that begins in September"
    ],
    "answer": 2
   },
   {
    "q": "What must the writer get before arriving?",
    "options": [
     "A job",
     "A visa",
     "A house"
    ],
    "answer": 1
   },
   {
    "q": "What does the writer offer to send?",
    "options": [
     "A bank statement",
     "A photograph",
     "A short research proposal"
    ],
    "answer": 2
   },
   {
    "q": "What does the writer hope to attain?",
    "options": [
     "A free flat",
     "A job at the university",
     "A high level in the course"
    ],
    "answer": 2
   },
   {
    "q": "What would the writer do if problems ensue?",
    "options": [
     "Ask for money",
     "Travel anyway",
     "Terminate the application and apply again next year"
    ],
    "answer": 2
   },
   {
    "q": "When will the course commence?",
    "options": [
     "In January",
     "In September",
     "Next week"
    ],
    "answer": 1
   },
   {
    "q": "Where does the writer reside?",
    "options": [
     "In Spain",
     "In Portugal",
     "In Brazil"
    ],
    "answer": 1
   },
   {
    "q": "What does the writer wish to ascertain?",
    "options": [
     "Whether there are jobs",
     "Whether the university can accommodate students who live abroad",
     "Whether the course is free"
    ],
    "answer": 1
   },
   {
    "q": "What will the writer comply with?",
    "options": [
     "Every regulation",
     "No rules",
     "Only some rules"
    ],
    "answer": 0
   },
   {
    "q": "What degree does the writer hold?",
    "options": [
     "A degree in biology",
     "A degree in economics",
     "A degree in law"
    ],
    "answer": 1
   },
   {
    "q": "For how long has the writer worked for a company?",
    "options": [
     "Three years",
     "Ten years",
     "One year"
    ],
    "answer": 0
   },
   {
    "q": "What does the company endeavour to promote?",
    "options": [
     "Sport",
     "Sustainable development",
     "Tourism"
    ],
    "answer": 1
   },
   {
    "q": "What does the research proposal stipulate?",
    "options": [
     "The dates",
     "The questions that the writer intends to study",
     "The cost"
    ],
    "answer": 1
   },
   {
    "q": "What would the writer be grateful to be notified about?",
    "options": [
     "The visa",
     "The exam",
     "Any scholarship that might be available"
    ],
    "answer": 2
   },
   {
    "q": "How does the writer close the letter?",
    "options": [
     "See you soon",
     "Yours faithfully",
     "Best wishes"
    ],
    "answer": 1
   }
  ]
 },
 "nuance": {
  "title": "Leaving home",
  "paragraphs": [
   "When Sara left her hometown at the age of twenty-five, she felt a mixture of nostalgia and apprehension. She was going to live in another country, and she did not know whether she would see her family again soon. At the airport her mother tried to smile, but her eyes were wet. It was a bittersweet farewell: Sara was ecstatic about the future, but she could not ignore a deep longing that was already growing inside her.",
   "During the first months, she tried not to feel despair. The language was difficult, the weather was grey, and nobody knew her. In the evenings she felt a wistful sadness, and she found solace in the songs of her childhood. She sometimes felt envy of her friends, who stayed at home and met every weekend. At the same time, she felt zeal for her new job, and she worked harder than she had ever worked. She had no remorse about her decision, but she was ambivalent about its price.",
   "After a year, things began to change. She made new friends, and the city started to feel familiar. She no longer yearned for the past, and her compassion for other newcomers increased, because she knew how hard it was. Her apprehension was replaced by a sense of serenity. When she visited her hometown, she noticed something strange: she felt indifferent to the streets that she once loved. \"Home is not a place,\" she told her mother, \"it is a feeling, and it has moved with me.\" Her mother, with a wistful smile, understood that her daughter had grown up."
  ],
  "questions": [
   {
    "q": "How did Sara feel when she left?",
    "options": [
     "Only happiness",
     "Only fear",
     "A mixture of nostalgia and apprehension"
    ],
    "answer": 2
   },
   {
    "q": "What did Sara find solace in?",
    "options": [
     "The weather",
     "The songs of her childhood",
     "Her new job"
    ],
    "answer": 1
   },
   {
    "q": "What was she ambivalent about?",
    "options": [
     "The price of her decision",
     "Her job",
     "Her friends"
    ],
    "answer": 0
   },
   {
    "q": "What did she feel when she visited her hometown?",
    "options": [
     "Indifferent to the streets",
     "Very sad",
     "Angry"
    ],
    "answer": 0
   },
   {
    "q": "What does Sara say home is?",
    "options": [
     "A feeling that moves with her",
     "A place",
     "A house"
    ],
    "answer": 0
   },
   {
    "q": "How old was Sara when she left her hometown?",
    "options": [
     "Forty",
     "Twenty-five",
     "Fifteen"
    ],
    "answer": 1
   },
   {
    "q": "Where was Sara going to live?",
    "options": [
     "In another city of Portugal",
     "On a farm",
     "In another country"
    ],
    "answer": 2
   },
   {
    "q": "What did her mother try to do at the airport?",
    "options": [
     "Shout",
     "Smile",
     "Run"
    ],
    "answer": 1
   },
   {
    "q": "How was the weather in her new country?",
    "options": [
     "Windy",
     "Hot",
     "Grey"
    ],
    "answer": 2
   },
   {
    "q": "What did she feel about her friends who stayed at home?",
    "options": [
     "Nothing",
     "Envy",
     "Anger"
    ],
    "answer": 1
   },
   {
    "q": "How did she work at her new job?",
    "options": [
     "Part time",
     "Lazily",
     "With zeal, harder than ever"
    ],
    "answer": 2
   },
   {
    "q": "Did she feel remorse about her decision?",
    "options": [
     "No",
     "Yes, a lot",
     "Sometimes"
    ],
    "answer": 0
   },
   {
    "q": "What was apprehension replaced by after a year?",
    "options": [
     "A sense of serenity",
     "Boredom",
     "Despair"
    ],
    "answer": 0
   },
   {
    "q": "What did she feel for other newcomers?",
    "options": [
     "Envy",
     "Compassion",
     "Contempt"
    ],
    "answer": 1
   },
   {
    "q": "What did her mother understand?",
    "options": [
     "That she was ill",
     "That her daughter had grown up",
     "That she must return"
    ],
    "answer": 1
   }
  ]
 },
 "thought": {
  "title": "Is knowledge objective?",
  "paragraphs": [
   "Since ancient times, philosophers have asked whether human knowledge reflects reality or only our way of seeing it. Epistemology, the branch of philosophy that studies the nature of knowledge, has produced two great traditions. The empirical approach says that all knowledge begins with experience, and that we form general rules by induction. The rational approach, on the contrary, argues that some truths, such as an axiom of mathematics, can be known by pure reason. This apparent dichotomy has shaped centuries of debate.",
   "In the twentieth century, thinkers began to question the idea of a single, final truth. According to the notion of a paradigm, science works within a set of assumptions, and when the assumptions change, a revolution takes place. Relativism goes further and claims that no point of view is better than another. Critics reply that this position is a fallacy, because it contradicts itself: if everything is relative, then relativism itself is relative. A more pragmatic view says that a theory is good when it works and when it can be tested.",
   "Cognitive scientists add another layer. They show that our perception is subjective: we do not see the world exactly as it is, but as our brain interprets it. Introspection, by itself, is not a reliable guide. Yet this does not mean that objective knowledge is impossible. The ethos of honest enquiry, with its tenets of evidence, doubt and criticism, allows us to correct our mistakes. Neither a utopia of perfect certainty nor a dystopia of total scepticism is a realistic option. As one thinker put it, \"We do not need absolute truth. We need a method that tells us when we are wrong.\""
  ],
  "questions": [
   {
    "q": "What does epistemology study?",
    "options": [
     "The nature of art",
     "The nature of knowledge",
     "The nature of money"
    ],
    "answer": 1
   },
   {
    "q": "What does the empirical approach say?",
    "options": [
     "Truth is only in the mind",
     "All knowledge begins with experience",
     "Nothing can be known"
    ],
    "answer": 1
   },
   {
    "q": "Why do critics call relativism a fallacy?",
    "options": [
     "It is too old",
     "It contradicts itself",
     "It is too simple"
    ],
    "answer": 1
   },
   {
    "q": "What do cognitive scientists show?",
    "options": [
     "We see the world exactly as it is",
     "Our perception is subjective",
     "Perception is perfect"
    ],
    "answer": 1
   },
   {
    "q": "What do we need, according to the thinker?",
    "options": [
     "Absolute truth",
     "A method that tells us when we are wrong",
     "More dogma"
    ],
    "answer": 1
   },
   {
    "q": "Since when have philosophers asked these questions?",
    "options": [
     "Since last year",
     "Since ancient times",
     "Since the twentieth century"
    ],
    "answer": 1
   },
   {
    "q": "How many great traditions has epistemology produced?",
    "options": [
     "Five",
     "One",
     "Two"
    ],
    "answer": 2
   },
   {
    "q": "What do we form by induction, according to the empirical approach?",
    "options": [
     "General rules",
     "Mathematical axioms",
     "Opinions"
    ],
    "answer": 0
   },
   {
    "q": "What can be known by pure reason, according to the rational approach?",
    "options": [
     "Nothing",
     "Some truths, such as an axiom of mathematics",
     "Only experience"
    ],
    "answer": 1
   },
   {
    "q": "What does the notion of paradigm say about science?",
    "options": [
     "It is not useful",
     "It never changes",
     "It works within a set of assumptions"
    ],
    "answer": 2
   },
   {
    "q": "What happens when the assumptions change?",
    "options": [
     "A revolution takes place",
     "Nothing",
     "Science stops"
    ],
    "answer": 0
   },
   {
    "q": "What does relativism claim?",
    "options": [
     "That nothing exists",
     "That no point of view is better than another",
     "That one point of view is best"
    ],
    "answer": 1
   },
   {
    "q": "What does a more pragmatic view say a good theory is?",
    "options": [
     "One that works and can be tested",
     "One that is old",
     "One that is simple"
    ],
    "answer": 0
   },
   {
    "q": "What does introspection, by itself, not give us?",
    "options": [
     "Our feelings",
     "A reliable guide",
     "Any ideas"
    ],
    "answer": 1
   },
   {
    "q": "Which two options are not realistic?",
    "options": [
     "Two kinds of evidence",
     "Two kinds of method",
     "A utopia of certainty and a dystopia of scepticism"
    ],
    "answer": 2
   }
  ]
 },
 "familyb2": {
  "title": "Three generations",
  "paragraphs": [
   "My grandmother grew up in a very strict household. Her upbringing was based on obedience, and a child who answered back was punished. She married at nineteen and had four children. When she talks about her life, she says that affection was shown by actions, not by words. Her husband never said \"I love you\", but he worked two jobs to give his family a home. Today she is the centre of an extended family of twenty-three people.",
   "My mother's generation was different. She and her siblings had more freedom, but the generation gap with their parents was large. There were arguments about school, about friends and about clothes, and my mother sometimes fell out with her father for weeks. Years later, after her divorce, she realised how much she had learned from his loyalty. She got custody of me and my sister, and she looked after us alone, which was hard but gave us a strong bond.",
   "My own generation is the first to grow up with a screen in every pocket. I get along with my parents quite well, but we argue about my phone and the time I spend online. I look up to my grandmother because she survived difficult times without complaining, and my friends say that I take after her in my stubborn character. Last year my cousin got engaged, and the whole family met for the first time in years. My in-laws-to-be were nervous, but my grandmother, as always, made everybody feel at ease. In the end, trust and humour are the real glue of every household, and every generation finds its own way to show affection."
  ],
  "questions": [
   {
    "q": "How did the grandmother's household show affection?",
    "options": [
     "By gifts",
     "By long speeches",
     "By actions and not by words"
    ],
    "answer": 2
   },
   {
    "q": "What did the mother get after her divorce?",
    "options": [
     "A new job",
     "A new house",
     "Custody of the children"
    ],
    "answer": 2
   },
   {
    "q": "What do the narrator and the parents argue about?",
    "options": [
     "The phone and the time online",
     "School",
     "Money"
    ],
    "answer": 0
   },
   {
    "q": "What happened last year?",
    "options": [
     "There was a divorce",
     "The narrator's cousin got engaged",
     "The grandmother moved"
    ],
    "answer": 1
   },
   {
    "q": "What is the real glue of every household, according to the text?",
    "options": [
     "Rules",
     "Money",
     "Trust and humour"
    ],
    "answer": 2
   },
   {
    "q": "How was the grandmother's upbringing?",
    "options": [
     "Very strict",
     "Very rich",
     "Very free"
    ],
    "answer": 0
   },
   {
    "q": "At what age did the grandmother marry?",
    "options": [
     "Nineteen",
     "Twenty-five",
     "Sixteen"
    ],
    "answer": 0
   },
   {
    "q": "How many children did she have?",
    "options": [
     "Two",
     "Four",
     "Ten"
    ],
    "answer": 1
   },
   {
    "q": "What did her husband never say?",
    "options": [
     "Goodbye",
     "Thank you",
     "I love you"
    ],
    "answer": 2
   },
   {
    "q": "How many people are in the extended family?",
    "options": [
     "Twenty-three",
     "Ten",
     "A hundred"
    ],
    "answer": 0
   },
   {
    "q": "How long did the mother sometimes fall out with her father?",
    "options": [
     "For weeks",
     "For a day",
     "For years"
    ],
    "answer": 0
   },
   {
    "q": "What did the mother do after her divorce?",
    "options": [
     "Moved abroad",
     "Looked after the children alone",
     "Married again"
    ],
    "answer": 1
   },
   {
    "q": "What does the narrator's generation have in every pocket?",
    "options": [
     "A screen",
     "A watch",
     "A book"
    ],
    "answer": 0
   },
   {
    "q": "Why does the narrator look up to her grandmother?",
    "options": [
     "She is rich",
     "She survived difficult times without complaining",
     "She is famous"
    ],
    "answer": 1
   },
   {
    "q": "Who got engaged last year?",
    "options": [
     "Her sister",
     "The narrator's cousin",
     "The narrator"
    ],
    "answer": 1
   }
  ]
 },
 "employment": {
  "title": "Looking for work",
  "paragraphs": [
   "Daniel graduated in engineering two years ago, but he is still looking for a permanent job. When he finished university, there was a vacancy in a large company, and he sent his resume the same day. He did three interviews and a long test, but in the end the company chose another candidate. After that he did a six-month internship, with a very small allowance, and a temporary contract in a factory, where he worked the night shift. The job was manual and tiring, and he felt that his skills were not used.",
   "His situation is common. In his country, the rate of unemployed young people is high, and many employers prefer to offer short contracts instead of a permanent one. The workforce is getting older, because the new generation emigrates or accepts badly paid jobs. Trade unions say that this situation damages job satisfaction and makes it harder for young people to plan their lives. A person with a temporary contract often cannot rent a flat or ask the bank for a loan.",
   "Daniel does not give up. In the evenings he follows an online course to become more qualified, and at weekends he has a side job as a cycle repairer. He believes that skilled workers will always find work. Last month he was on probation in a small firm, and the manager told him that the notice period would be only two weeks if the experience was not satisfactory. Fortunately, he passed. Now he commutes for an hour each way, but he finally has a salary, and in the future he wants to be self-employed. \"The career ladder is long,\" he says, \"but at least I have found the first step.\""
  ],
  "questions": [
   {
    "q": "What was Daniel's first problem?",
    "options": [
     "He did not get the job after three interviews",
     "He had no qualification",
     "He did not send a resume"
    ],
    "answer": 0
   },
   {
    "q": "What did he do after the internship?",
    "options": [
     "He had a temporary contract at night in a factory",
     "He emigrated",
     "He retired"
    ],
    "answer": 0
   },
   {
    "q": "What often cannot a person with a temporary contract do?",
    "options": [
     "Take a holiday",
     "Study at night",
     "Rent a flat or ask the bank for a loan"
    ],
    "answer": 2
   },
   {
    "q": "What does Daniel do at the weekend?",
    "options": [
     "He goes to a trade union",
     "He works as a cycle repairer",
     "He studies law"
    ],
    "answer": 1
   },
   {
    "q": "What does he want to be in the future?",
    "options": [
     "A manager",
     "A teacher",
     "Self-employed"
    ],
    "answer": 2
   },
   {
    "q": "What did Daniel study?",
    "options": [
     "Law",
     "Biology",
     "Engineering"
    ],
    "answer": 2
   },
   {
    "q": "How long ago did he graduate?",
    "options": [
     "Last month",
     "Ten years ago",
     "Two years ago"
    ],
    "answer": 2
   },
   {
    "q": "How many interviews did he do for the first vacancy?",
    "options": [
     "Five",
     "One",
     "Three"
    ],
    "answer": 2
   },
   {
    "q": "How long was his internship?",
    "options": [
     "Six months",
     "One year",
     "Two weeks"
    ],
    "answer": 0
   },
   {
    "q": "When did he work in the factory?",
    "options": [
     "At night",
     "In the morning",
     "At weekends"
    ],
    "answer": 0
   },
   {
    "q": "What is the rate of unemployed young people?",
    "options": [
     "High",
     "Low",
     "Zero"
    ],
    "answer": 0
   },
   {
    "q": "What do many employers prefer to offer?",
    "options": [
     "Higher wages",
     "Permanent contracts",
     "Short contracts"
    ],
    "answer": 2
   },
   {
    "q": "What does Daniel study in the evenings?",
    "options": [
     "An online course",
     "Law",
     "Nothing"
    ],
    "answer": 0
   },
   {
    "q": "How long is the notice period in the small firm?",
    "options": [
     "Two months",
     "Two weeks",
     "One year"
    ],
    "answer": 1
   },
   {
    "q": "How long is his commute now?",
    "options": [
     "An hour each way",
     "Two hours each way",
     "Ten minutes"
    ],
    "answer": 0
   }
  ]
 },
 "culture": {
  "title": "A year in another country",
  "paragraphs": [
   "When Joana moved to London for a year, she was excited, but nothing prepared her for the culture shock. In the first weeks she often felt homesick, and she missed the food, the sun and her family. The etiquette at the table was different, and she did not understand the sense of humour. In shops people said \"sorry\" even when it was not their fault, and she wondered whether this politeness was authentic or only a habit.",
   "Gradually she began to integrate. She lived with flatmates from four different countries, and the neighbourhood was very multicultural. She tried exotic dishes, learned some words of a local dialect and went to a folk festival in a village. A colleague, a native of Scotland, invited her for dinner and explained the customs of his family. Joana realised that many of her stereotypes were wrong: the English were not cold, and the Scottish were not as hard to understand as she had thought.",
   "At the end of the year she was a different person. She had met many expats who, like her, were far from their roots, and they had formed a small community with its own traditions. Her cultural exchange had made her more open-minded and more tolerant. She also appreciated the hospitality of her own country more than before. \"I did not need to assimilate,\" she says, \"I only had to learn to listen.\" On the plane home she felt the same mixture of joy and sadness she had felt a year before, but this time she knew that a part of her would always stay in London. She is already thinking about her next trip."
  ],
  "questions": [
   {
    "q": "How did Joana feel in the first weeks?",
    "options": [
     "Very happy",
     "Homesick",
     "Angry"
    ],
    "answer": 1
   },
   {
    "q": "What did she notice about people in shops?",
    "options": [
     "They said sorry even when it was not their fault",
     "They were rude",
     "They were silent"
    ],
    "answer": 0
   },
   {
    "q": "What helped her to integrate?",
    "options": [
     "Learning only English",
     "Living with flatmates from different countries",
     "Staying at home"
    ],
    "answer": 1
   },
   {
    "q": "What did she realise about her stereotypes?",
    "options": [
     "She had none",
     "They were all true",
     "Many were wrong"
    ],
    "answer": 2
   },
   {
    "q": "What does she say she needed to do?",
    "options": [
     "Assimilate completely",
     "Change her name",
     "Learn to listen"
    ],
    "answer": 2
   },
   {
    "q": "Where did Joana move?",
    "options": [
     "To London",
     "To Paris",
     "To Dublin"
    ],
    "answer": 0
   },
   {
    "q": "How long did she stay?",
    "options": [
     "Six months",
     "A year",
     "Five years"
    ],
    "answer": 1
   },
   {
    "q": "What did she miss in the first weeks?",
    "options": [
     "Her job",
     "The food, the sun and her family",
     "Her car"
    ],
    "answer": 1
   },
   {
    "q": "What was different at the table?",
    "options": [
     "The chairs",
     "The etiquette",
     "The food"
    ],
    "answer": 1
   },
   {
    "q": "Where were her flatmates from?",
    "options": [
     "Four different countries",
     "Scotland only",
     "Her own country"
    ],
    "answer": 0
   },
   {
    "q": "What did she try?",
    "options": [
     "Nothing new",
     "Only English food",
     "Exotic dishes"
    ],
    "answer": 2
   },
   {
    "q": "Where did she go to a folk festival?",
    "options": [
     "In the capital",
     "In a village",
     "In a theatre"
    ],
    "answer": 1
   },
   {
    "q": "Who invited her for dinner?",
    "options": [
     "Her teacher",
     "Her flatmate",
     "A colleague from Scotland"
    ],
    "answer": 2
   },
   {
    "q": "What did the cultural exchange make her?",
    "options": [
     "Angrier",
     "More shy",
     "More open-minded and more tolerant"
    ],
    "answer": 2
   },
   {
    "q": "What does she feel on the plane home?",
    "options": [
     "Only fear",
     "A mixture of joy and sadness",
     "Only joy"
    ],
    "answer": 1
   }
  ]
 },
 "social": {
  "title": "Life on a screen",
  "paragraphs": [
   "Sofia is sixteen and has twelve thousand followers. Every morning she wakes up and checks her notifications before she even gets out of bed. She scrolls through her feed, shares a photo of her breakfast and answers the comments under yesterday's video. Her online identity is cheerful and perfect, but in real life she sometimes feels anxious and tired. She spends more than six hours a day on her phone, and her parents are worried about her screen time.",
   "Last year she was a victim of cyberbullying. A classmate created a fake profile and posted insulting comments under her photos. At first she tried to ignore the trolling, but it made her depressed, and she stopped sleeping well. Her teacher helped her to report the profile, to mute the people who wrote hurtful messages and to talk to a psychologist. Sofia learned that everything she shares leaves a digital footprint, and that a joke can go viral in a few hours, for good or for bad.",
   "Today she uses social media in a more conscious way. She does not follow accounts that make her feel worse, and she avoids clickbait and fake news. She also set a limit for her screen time, and she goes out with friends without taking photos. She says that she still enjoys streaming films with her friends and chatting online, but she does not want to depend on likes. Many influencers talk about the same problem, and some schools now have classes on digital education. \"The internet is not good or bad,\" Sofia says. \"It depends on how we use it, and whether we are able to log out.\""
  ],
  "questions": [
   {
    "q": "What does Sofia do every morning?",
    "options": [
     "Goes for a run",
     "Reads the news",
     "Checks her notifications before she gets out of bed"
    ],
    "answer": 2
   },
   {
    "q": "What happened to Sofia last year?",
    "options": [
     "She won a prize",
     "She lost her phone",
     "She was a victim of cyberbullying"
    ],
    "answer": 2
   },
   {
    "q": "What helped her?",
    "options": [
     "Her followers",
     "A new phone",
     "Her teacher, reporting the profile and a psychologist"
    ],
    "answer": 2
   },
   {
    "q": "What does she do today?",
    "options": [
     "She uses social media in a more conscious way",
     "She quit the internet",
     "She gained more followers"
    ],
    "answer": 0
   },
   {
    "q": "What does Sofia say about the internet?",
    "options": [
     "It is always good",
     "It depends on how we use it",
     "It is always bad"
    ],
    "answer": 1
   },
   {
    "q": "How old is Sofia?",
    "options": [
     "Twenty",
     "Twelve",
     "Sixteen"
    ],
    "answer": 2
   },
   {
    "q": "How many followers does she have?",
    "options": [
     "A million",
     "Two thousand",
     "Twelve thousand"
    ],
    "answer": 2
   },
   {
    "q": "What does she share every morning?",
    "options": [
     "A song",
     "Her homework",
     "A photo of her breakfast"
    ],
    "answer": 2
   },
   {
    "q": "How many hours a day does she spend on her phone?",
    "options": [
     "Three",
     "More than six",
     "About one"
    ],
    "answer": 1
   },
   {
    "q": "What did a classmate create?",
    "options": [
     "A fake profile",
     "A game",
     "A blog"
    ],
    "answer": 0
   },
   {
    "q": "How did the cyberbullying affect Sofia?",
    "options": [
     "She became depressed and stopped sleeping well",
     "She felt proud",
     "She did not care"
    ],
    "answer": 0
   },
   {
    "q": "Who did she talk to?",
    "options": [
     "A journalist",
     "A psychologist",
     "A policeman"
    ],
    "answer": 1
   },
   {
    "q": "What does she avoid today?",
    "options": [
     "Her friends",
     "Her parents",
     "Clickbait and fake news"
    ],
    "answer": 2
   },
   {
    "q": "What does she do with friends?",
    "options": [
     "Plays games online",
     "Goes out without taking photos",
     "Studies"
    ],
    "answer": 1
   },
   {
    "q": "What does she not want to depend on?",
    "options": [
     "Likes",
     "Her friends",
     "Her parents"
    ],
    "answer": 0
   }
  ]
 },
 "energy": {
  "title": "The energy of tomorrow",
  "paragraphs": [
   "For more than a century, coal, crude oil and natural gas have been the main sources of the world's energy. They are efficient, but they have two serious disadvantages: they cause pollution, and they are not unlimited. Many countries depend on imports, and every time the price of oil goes up, families and companies feel the effect. This dependence is dangerous in a world with political conflicts and a growing shortage of some resources.",
   "Alternatives exist. Wind turbines produce power in the north of Europe, while solar panels cover the roofs of houses in the south. In mountain regions, a hydroelectric dam supplies electricity to entire cities, and in some coastal areas tidal energy is being tested. Nuclear power plants do not produce carbon dioxide, but they raise questions about safety and about waste. A few buses already run on biofuel, and some governments are introducing a carbon tax to discourage the use of fossil fuels.",
   "The main challenge is storage and the grid. The sun does not shine at night, and the wind does not always blow, so the system needs batteries and a flexible network. A big storm can also cause a blackout and show how fragile the system is. Experts say that consumption can be reduced with better insulation and more efficient machines. Some families even choose to live off the grid, producing their own electricity and collecting rainwater. Scientists agree that the transition will take decades and will need a great deal of investment. The question is not whether we will change, but whether we will do it fast enough to avoid the worst consequences of the climate crisis."
  ],
  "questions": [
   {
    "q": "What are two disadvantages of coal, oil and gas?",
    "options": [
     "They are too clean",
     "They cause pollution and are not unlimited",
     "They are too cheap"
    ],
    "answer": 1
   },
   {
    "q": "What does a hydroelectric dam supply?",
    "options": [
     "Water to farms only",
     "Gas",
     "Electricity to entire cities"
    ],
    "answer": 2
   },
   {
    "q": "What is the main challenge, according to the text?",
    "options": [
     "Storage and the grid",
     "Lack of sun",
     "The price of wood"
    ],
    "answer": 0
   },
   {
    "q": "What can reduce consumption?",
    "options": [
     "More cars",
     "Better insulation and more efficient machines",
     "Bigger houses"
    ],
    "answer": 1
   },
   {
    "q": "What do scientists say about the transition?",
    "options": [
     "It will take decades and need much investment",
     "It is impossible",
     "It will be quick"
    ],
    "answer": 0
   },
   {
    "q": "For how long have coal, oil and gas been the main sources?",
    "options": [
     "More than a century",
     "A year",
     "Ten years"
    ],
    "answer": 0
   },
   {
    "q": "What do many countries depend on?",
    "options": [
     "Imports",
     "Rain",
     "Wind"
    ],
    "answer": 0
   },
   {
    "q": "Where do wind turbines produce power?",
    "options": [
     "In the desert",
     "On the moon",
     "In the north of Europe"
    ],
    "answer": 2
   },
   {
    "q": "Where do solar panels cover roofs?",
    "options": [
     "In the north only",
     "In the south",
     "In the sea"
    ],
    "answer": 1
   },
   {
    "q": "Where is tidal energy being tested?",
    "options": [
     "In cities",
     "In mountains",
     "In some coastal areas"
    ],
    "answer": 2
   },
   {
    "q": "What do nuclear power plants not produce?",
    "options": [
     "Electricity",
     "Carbon dioxide",
     "Waste"
    ],
    "answer": 1
   },
   {
    "q": "What do some buses run on?",
    "options": [
     "Gas only",
     "Biofuel",
     "Coal"
    ],
    "answer": 1
   },
   {
    "q": "What does the system need because the sun does not shine at night?",
    "options": [
     "Batteries and a flexible network",
     "More oil",
     "More roads"
    ],
    "answer": 0
   },
   {
    "q": "What can a big storm cause?",
    "options": [
     "A flood only",
     "A blackout",
     "A drought"
    ],
    "answer": 1
   },
   {
    "q": "What do some families collect to live off the grid?",
    "options": [
     "Rainwater",
     "Wood only",
     "Coal"
    ],
    "answer": 0
   }
  ]
 }
};
