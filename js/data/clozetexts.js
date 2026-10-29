// Textos para "Completar o texto" (separador Escrita). Cada lição tem vários textos curtos.
// Regras: lição 1 → 3 a 5 textos; lição 2 → 5 a 8; lição 3 → 7 a 10; da lição 4 em diante → pelo menos 10.
// Cada texto só pode usar palavras da própria lição e das anteriores (verifica com: node tools/check-cloze.js)
// e deve ter palavras da lição para ficarem em branco. Chave: id do tema.
const CLOZE = {};

CLOZE.greetings = [
  "It is the morning. Rita sees her friend Tom. “Hello, Tom! How are you?” she says. “Hi, Rita! I am fine, thank you,” says Tom. “And you?” “I am fine too.” They are happy. At night Rita says: “Bye, see you later!” “Goodbye, Rita!” says Tom.",
  "Sam is a new friend. “Hello, my name is Sam,” he says. “Nice to meet you, Sam,” says Ana. “Welcome! Please sit with us.” “Thank you very much,” says Sam. “Excuse me, what is your name?” he asks. “My name is Ana,” she says. “Pardon? I am sorry, I do not understand.” “Ana,” she says again. “Yes! Hi, Ana!”",
  "Tomorrow is a big day for Mario. His friend says: “Good luck!” Mario says: “Thank you. See you later!” The next morning, Mario sees his friend again. “Congratulations!” says the friend. “Yes! I am very happy,” says Mario. “Thank you, my friend. Good night!”",
  "Paula is late. “Excuse me,” she says. “Sorry, I am late.” “No, no, please come in,” says Mrs Silva. “Welcome! What is your name?” “My name is Paula.” “Nice to meet you, Paula. How are you?” “I am fine, thank you,” says Paula. Mrs Silva smiles. “Good morning, Paula!”",
];

CLOZE.family = [
  "This is my family. My mother is Ana and my father is Luis. I have one brother and one sister. My brother is single, but my sister is married. Her husband is Pedro. They have a baby, so I am an uncle! My grandmother says: “Welcome to the family, little baby!”",
  "Hello! My name is Clara. I have a cousin, Rita. Rita has a twin sister, Marta. The twins are very good friends. Their parents are my aunt and my uncle. My aunt is a doctor and my uncle is a teacher. Rita says: “Hi, Clara! How are you?” “I am fine, thank you,” I say.",
  "Tom has a girlfriend. Her name is Sofia. Sofia has a big family: a mother, a father, a grandfather and two brothers. Tom says: “Nice to meet you!” Her grandfather says: “Welcome, Tom! Please sit with us.” Tom is happy. Sofia is his girlfriend, and her family is now his friend too.",
  "Maria is a mother with two children. Her son is Paulo and her daughter is Ana. Paulo is a child of six years. Ana is a baby. Maria says: “Good night, my son! Good night, my daughter!” Her husband says: “Good night, my wife!” The family sleeps.",
  "My niece and my nephew are twins. The niece is Ana and the nephew is Leo. Their mother is my sister and their father is my brother. I love my nephew and my niece very much. At night I say: “Goodbye, see you later!” They say: “Bye, uncle!”",
  "Today is a family day. My grandmother and my grandfather are married for fifty years. The whole family is here: my father, my mother, my aunt, my uncle and my cousins. We say: “Congratulations!” My grandmother says: “Thank you, my children and my friends!”",
  "Pedro is married to Marta. They have a son and a daughter. Their son is a baby and their daughter is a child of four. Pedro's mother is the grandmother and Pedro's father is the grandfather. Marta's brother is the uncle. Everybody loves the children.",
  "My cousin Leo is single. He has a girlfriend, but he is not married. His parents say: “When is the party?” Leo laughs. “Not yet!” His aunt, my mother, says: “Congratulations, Leo, you are a good son!”",
  "Family photo: in the front there are the grandmother, the grandfather and the baby. In the middle there are the mother, the father, the aunt and the uncle. At the back there are the sons, the daughters and the cousins. “Smile, family!” says the father. Click!",
  "My twin brother and I are twenty today. Our mother makes a cake and our father buys a present. Our sister sings. Our grandmother says: “Happy birthday, my twins!” The cousins arrive at night. We say: “Welcome, family!”",
];

CLOZE.food = [
  "It is the morning and I am hungry. For breakfast I eat bread and cheese. I drink coffee with milk. My mother drinks tea. My father eats an egg. My brother does not like coffee, he drinks juice. Good morning, family!",
  "At lunch my sister eats chicken with rice. I eat fish with potatoes and a salad. My father drinks water. “Is the food good?” asks my mother. “Yes, thank you,” we say. For dessert we have an apple and a cake.",
  "Dinner is at eight. My grandmother makes soup. It is a good soup with tomato, potato and meat. My grandfather eats bread with cheese. The baby drinks milk. My uncle says: “Please, more soup!” Everyone is happy.",
  "Excuse me, can I have a coffee, please? Yes, of course. Do you want milk? No, thank you. Just water, please. And a cake? Yes, an apple cake. The waiter says: “Here you are! Welcome.” I say: “Thank you very much!” The cake and the coffee are very good.",
  "My sister is not married, but she is a very good cook. For her friends she makes chicken with rice, a tomato salad and an apple cake. Her friend Tom brings bread and cheese. Everyone eats and drinks. “Congratulations, sister!” says Tom. “The dinner is great!”",
  "Rita is hungry. It is lunch time. She says: “Mother, what is for lunch?” “Fish and potatoes,” says her mother. “And soup?” “Yes, soup and a salad.” Rita eats everything. “Thank you, mother! Is there any juice?” “Yes, there is water and juice.”",
  "In the morning Pedro eats an egg and bread for breakfast. He drinks a glass of milk. His brother prefers tea and a cake. At night they have dinner with their parents: meat with rice and a tomato. After dinner Pedro says: “Good night, father! Good night, mother!”",
  "My friend has a small shop with food. There is bread, milk, cheese, eggs, apples, tomatoes and potatoes. A woman says: “Excuse me, I want some water and rice, please.” My friend says: “Of course! Here you are.” The woman says: “Thank you, goodbye!” and my friend says: “Bye, see you later!”",
  "Sunday lunch is big. Mother makes chicken with potatoes, rice and a salad. Father makes soup. Grandmother brings bread and a cake. We drink water and juice. After lunch we have coffee and tea. Everyone is happy and not hungry.",
  "At the restaurant Mario is hungry. He says: “I want fish, rice and a salad, please.” The waiter says: “And to drink?” “Water, please.” After the meal: “Dessert?” “Yes, an apple cake and a coffee.” “Thank you, sir.” Mario says: “The food is great!”",
];

CLOZE.house = [
  "This is my house. It has a kitchen, a living room, two bedrooms and a bathroom. In the kitchen there is a table, four chairs and a fridge. My mother makes breakfast there. In the living room there is a big sofa and a lamp.",
  "My bedroom is small. There is a bed, a window and a lamp. On the wall there is a mirror. The floor is white. In the morning the sun comes through the window. At night I turn off the lamp and say: “Good night, room!”",
  "Tom and Sofia live in an apartment. It has stairs, a door with a key, a bathroom with a shower and a small kitchen. Tom says: “Welcome to our apartment!” Sofia says: “Please come in. The sofa is for you.” Their friend says: “Thank you! It is a nice apartment.”",
  "Grandmother's house has a garden. In the garden there is a table and four chairs. We have lunch there on Sundays. Grandfather makes the salad and grandmother makes the chicken. The roof is red and the door is blue. I love the house, the garden and the family.",
  "Excuse me, where is the key? It is on the table in the kitchen. And my coffee? It is on the sofa in the living room. Where is the baby? She is in the bedroom, in the bed. Thank you, mother! The house is clean, the floor is clean and the window is open.",
  "Our house has two floors. Downstairs there is a kitchen, a living room and a bathroom. Upstairs there are three bedrooms. The stairs are in the living room. My room is on the second floor. It has a bed, a table, a chair and a window. My brother's room is next to my room.",
  "I have a new apartment! It is small, but it is nice. In the kitchen there is a fridge with milk, cheese and apples. In the bathroom there is a shower and a mirror. I have a sofa, a table and two chairs. My friend says: “Congratulations! It is a very good apartment.”",
  "My cousin has a big garden with a small house for the baby. There is a door, a window and a roof. Inside there is a little table and a lamp. The baby loves this small house. My aunt says: “Look at the roof! It is blue.”",
  "It is night. Ana is in the bedroom. She turns on the lamp and sits on the bed. The window is open. She looks in the mirror and says: “Good night, Ana!” Then she goes to the bathroom, takes a shower and goes back to bed. “Good night, family!” she says.",
  "Welcome to my house! Please, come in. The door is open. This is the living room with the sofa and the lamp. That is the kitchen with the table and the chairs. Upstairs there are the bedrooms and the bathroom. The garden is behind the house. I hope you like it, my friend!",
];

CLOZE.personal = [
  "Hello! Please fill in this form. What is your first name? My first name is Ana. What is your surname? My surname is Silva. Please spell it: S-I-L-V-A. What is your address? I live at twelve Park Road. Thank you very much, Mrs Silva. Please sign here.",
  "Excuse me, Mr Brown. What is your phone number? It is five five five, zero one nine eight. And your email address? It is on this form. Thank you. Where do you live? I live in Porto. What is your date of birth? I was born on the fifth of May. Welcome, Mr Brown! Nice to meet you.",
  "At the airport the officer says: “Good morning. Your ID card, please.” The woman says: “Here you are.” “Thank you, Miss Rita. What is your hometown?” “My hometown is Porto, but I live in Lisbon now.” “Is your address the same?” “Yes.” “Please sign here. Your signature, please.” “Of course.”",
  "Ms Clara is a doctor. This is her occupation. Her hometown is Coimbra. Her first name is Clara and her surname is Santos. Her postcode is three thousand. Her friend Mr Paulo is a teacher. That is his occupation. They are both born in Portugal, but they live in Lisbon.",
  "Form for new students. Please write your first name and your surname. Are you male or female? What is your date of birth? What is your address and your postcode? What is your phone number and your email address? Please sign at the end. Thank you!",
  "Sam is new at the hotel. The woman says: “Welcome! Please, your ID card.” “Here you are, Miss.” “What is your occupation, Mr Sam?” “I am an engineer.” “Where do you live?” “I live in London, but my hometown is Cardiff. I was born there.” “Please spell your surname.” “W-I-L-L-S.” “Sign here, please.”",
];

CLOZE.numbers = [
  "Excuse me, what is the price of this coat? It costs one hundred euros. That is expensive! Is there a cheap coat? Yes, this one costs fifty euros. It is half the price. I pay with my card. Thank you!",
  "Tom counts his money. He has two hundred euros in cash. He spends fifty euros on food and saves one hundred euros. The last fifty euros are for his friend Maria. “Thank you, Tom!” says Maria. “It is free,” says Tom, “it is a present.”",
  "A thousand, a million! What is your favourite number? Mine is zero. Zero is easy to count. First, second, third. Who is the first? Tom is the first, Ana is the second and Sofia is the third. The last is Pedro. Congratulations to all!",
  "At the café: “Can I have the bill, please?” “Of course. It is eight euros.” “Can I pay with my card?” “Sorry, only cash.” “No problem. Here is ten euros.” “Your change is two euros. Thank you!” “Thank you. Bye!”",
  "My new phone costs a lot. The price is nine hundred euros. That is a lot of money! My sister says: “It is too expensive.” But my friend says: “It is not expensive, it is a good price.” I save my money for a month and then I pay. At last, the phone is mine!",
  "In my town one coffee costs one euro. A coffee in the city costs three euros. The city is more expensive. Bread in the shop is cheap. Half of the people live in the city, and half live in the town. Many people say: “The town is a good place. It is cheap and it is free of noise.”",
  "Today is my birthday. I am the first at the table, my brother is the second and my sister is the third. My grandmother gives me a card and money: one hundred euros in cash! I count the money two times. Then I spend half and save half. What a good day!",
  "One, two, three, four, five, six, seven, eight, nine, ten. Zero is not a big number, but it is important. A hundred is bigger than ten. A thousand is bigger than a hundred. A million is very big! How much does a million cost? Nobody can pay it.",
];

CLOZE.colors = [
  "The rainbow has seven colours: red, orange, yellow, green, blue and purple. It is bright and very colourful. My favourite colour is blue. Ana's favourite colour is pink. What is your favourite colour? Tell me, my friend!",
  "In my room the wall is white and the door is brown. The bed is blue and the lamp is yellow. I have a pink mirror and a grey chair. It is a colourful room! My mother says: “I love the colours, but the green sofa is very dark.”",
  "Pedro likes to paint. He has red, blue, yellow and white paint. To make green he mixes blue and yellow. To make orange he mixes red and yellow. To make pink he mixes red and white. “Look at my picture,” he says. “It is bright and colourful!”",
  "The sky is blue in the morning. At night it is dark, and the moon is silver. The sun is yellow and the stars are gold. The grass is green, the snow is white, the coal is black. What is your favourite colour of the sky?",
  "At the shop: “Excuse me, do you have this dress in a light colour?” “Yes, we have pale pink, light blue and white.” “And in a dark colour?” “Black, brown or dark green.” “I take the pale pink, please.” “Thank you. Goodbye!”",
  "My favourite team has a red and white shirt. The other team has a blue shirt. The ball is orange. Tom is in the red team and Sofia is in the blue team. Who wins? Tom says: “Red!” Sofia says: “Blue!” Their friend says: “Good luck to both!”",
  "Grandmother has a gold ring and a silver watch. Grandfather has a grey coat, a black hat and brown shoes. The baby has a bright yellow toy. Everyone in the family has something with a colour they like.",
  "Is it a pale colour or a bright colour? Look at this flower. The middle is yellow and the edges are pale pink. The leaf is dark green. A purple flower is in the garden, and a white flower is on the table. What a colourful house!",
  "My friend Rita is happy today. She wears a bright red dress, a gold belt and pink shoes. “What a colourful day!” she says. “Do you like my colours?” “Yes, I like them,” I say. “They are bright. My favourite is the red.”",
  "How to mix colours: red and blue make purple. Blue and yellow make green. Red and white make pink. Black and white make grey. If you mix all colours, the result is dark brown. Try it with paint! It is easy and free.",
];

CLOZE.body = [
  "My body has many parts. I have a head, two eyes, two ears, one nose and one mouth. My face is round and my hair is brown. I have two arms and two hands, and ten fingers. I have two legs and two feet. This is my body, and I love it!",
  "At the doctor: “What is the problem?” asks the doctor. “My head hurts and my stomach hurts too,” says Tom. “Open your mouth, please.” The doctor looks at his eyes and his ears. “You are tired,” he says. “Drink water and sleep. Your heart is good!”",
  "Pedro has short black hair and brown eyes. He has a big nose and a small mouth. His face is kind. He has a beard. His hands are big and his feet are big too. His wife says: “I love your smile and your heart.”",
  "In the morning I wash my face and brush my teeth. I wash my hands, my neck and my arms. Then I brush my hair. My skin is clean and my mouth is fresh. I am ready for the day! My mother says: “Good morning, my child!”",
  "The baby has a small head and a round face. She has big eyes and tiny hands. She puts her finger in her mouth. She has no teeth yet. Her father kisses her nose and her head. “My little baby!” he says.",
  "Exercise is good for your body. Walk, run and jump! Strong legs, strong arms and a strong back help you every day. Move your shoulders and your knees. Move your neck. After ten minutes you feel good, and your heart is happy.",
  "Sofia has a pain in her back and her shoulder. Her knee also hurts. “I am tired,” she says. The doctor says: “Your body needs rest. Do not carry heavy bags. Sleep eight hours and drink water.” Sofia says: “Thank you, doctor!”",
  "Look at the picture. The man has a hat on his head. He has a beard and a happy face. One hand is in his pocket and the other hand holds a bag. His shoes are on his feet. A dog is near his leg, and a bird is on his shoulder.",
  "The brain is in your head. The heart is in your body, near the stomach. The skin covers your body. Teeth are in your mouth. Eyes see, ears hear, the nose smells and the mouth tastes. Your body is an amazing machine!",
  "Grandfather is old. His hair is white and his skin is soft. His eyes are tired, but his heart is young. His knees hurt when he walks. His hands are small but strong. He says: “I am old, but I feel fine. Thank you, my family!”",
];

CLOZE.body2 = [
  "Look in the mirror. You see your forehead, your eyebrows and your eyelashes. You see your cheeks, your chin and your jaw. Smile and show your tongue. Your face has many small parts, and every part is special.",
  "Pedro plays the guitar. He uses his thumb and his fingers. His wrist and his elbow are strong. After the concert his hand and his palm are red. “My muscles are tired,” he says. “I need to rest my arm.”",
  "At the gym, Sofia runs on the machine, then trains her thighs and her hips. Her heels hurt and her toes are red. Her waist is strong and her muscles are tired. “I am hungry,” she says. “Let us go and eat!”",
  "I have a sore throat. My tongue is dry. The doctor listens to my lungs and checks my throat. He looks at my tongue and my nails. “You are fine,” he says. “Drink water and sleep. Your lungs are good.”",
  "My nails are long. I need to cut them. I cut the nails on my hands first, then the nails on my toes. My heels are dry, so I use cream. My wrists, my elbows and my thumbs are clean. I feel fresh and happy.",
  "The painter looks at the model's face. “Your eyebrows are thick, your cheeks are round and your jaw is strong,” he says. “Your forehead is high and your chin is small.” The model smiles. “Do I look good?” “You look beautiful!”",
  "Inside the body there are many things. The skull protects the brain. The lungs help you breathe. Veins carry blood to the heart. Muscles move your arms and legs. The throat is behind your mouth, and the tongue is inside your mouth.",
  "Tom falls from his bike. He hurts his elbow, his wrist and his thumb. His thigh is red too, and a toe hurts. He goes to the hospital. The doctor says: “Nothing is broken. Rest and drink water.” Tom says: “Thank you, doctor!”",
  "A mother looks at her baby. The baby has soft cheeks, a tiny chin and long eyelashes. Her palm is small and her thumb is in her mouth. Her toes are tiny. The mother kisses her forehead and says: “My little heart!”",
  "To be healthy, take care of your body. Brush your teeth, wash your hands and cut your nails. Use cream on your heels and your elbows. Do exercise for your muscles, your hips and your waist. Your lungs and your heart need clean air.",
];

CLOZE.clothes = [
  "It is cold today, so I wear warm clothes. I wear jeans, a jumper and a coat. I wear a scarf and a hat too. On my feet I wear socks and boots. In my pocket there is a small key. I am ready for winter!",
  "At the shop: “Excuse me, can I try on this dress?” “Of course. What size are you?” “I am a medium.” “Here you are.” “It fits well! How much does it cost?” “Fifty euros.” “That is expensive. Do you have a cheap dress?” “Yes, a blue dress and a grey skirt for twenty euros.”",
  "Tom wears a white shirt, black trousers and a grey jacket for work. He wears black shoes. His glasses are on his nose. His bag is brown. His wife says: “You look great!” “Thank you, I like my clothes,” says Tom.",
  "Maria has a red skirt, a yellow shirt and a pink cap. She wears a ring on her finger and a scarf on her neck. “What a colourful day!” says her friend. Maria laughs. “These are my favourite clothes,” she says.",
  "Where are my glasses? They are in my bag. And my keys? They are in my pocket. My hat is on the chair and my jacket is on the sofa. My socks are on the floor! Mother says: “Please put your clothes in the bedroom.”",
  "It is summer and it is hot. Ana wears a light dress and a hat. Her brother wears a shirt and a cap. Her father wears a white shirt and light trousers. Nobody wears a coat, a jumper or a scarf today.",
  "Joana buys a new jacket. The size is too big, so she tries a smaller size. It fits well! She also buys boots and a pair of jeans. She pays with her card. “Thank you!” says the woman at the shop. “Goodbye!”",
  "Winter clothes: a thick coat, a warm jumper, a long scarf and boots. Summer clothes: a light dress, a shirt and a cap. Which clothes do you wear today? I wear jeans, a shirt and shoes. In my bag I have a hat.",
  "A man loses his hat. He looks in his coat, in his pockets and in his bag. “Where is my hat?” he asks. A woman says: “It is on your head!” The man laughs and says: “Thank you, I am very tired today.”",
  "On Sunday we go to a party. I wear a black dress and a gold ring. My brother wears a clean shirt and trousers. My father wears a jacket. My mother wears a pink skirt and a blue jumper. We all look nice.",
];

CLOZE.clothes2 = [
  "At night I wear pyjamas and warm slippers. In the morning I put on a tracksuit and a sweatshirt with a hood. I tie my laces and go for a walk. When it is hot, I wear shorts and flip-flops.",
  "My father works in an office. He wears a suit, a white shirt, a tie and a belt. In his pocket he has a handkerchief. His shoes are black. At home he takes off the suit and wears shorts and a vest.",
  "The cook wears an apron. The mechanic wears overalls. The waiter wears a waistcoat and a bow tie. The doctor wears a white coat. The baby wears pyjamas. What do you wear for your work?",
  "It is a hot day at the beach. Tom wears swimming trunks and flip-flops. Maria wears a hat and shorts. Their friend wears a sweatshirt with a hood and a vest: she is cold! They all laugh. “It is summer, but the wind is cold,” she says.",
  "Grandmother likes warm clothes. She wears a grey cardigan, thick stockings and slippers. In her bag there is a clean handkerchief and a warm hood for the rain. “I am old, but I like to look nice,” says grandmother. She smiles at her family.",
  "Sofia packs a bag for the weekend. She puts in pyjamas, underwear, a tracksuit, a cardigan and a sweatshirt. She also takes flip-flops and shorts. The zip of the bag is broken, so she asks her brother for help.",
  "Wedding day: the man wears a suit, a waistcoat and a bow tie. His shoes have clean laces. His father wears a tie and a belt. The mother has a dress and stockings. Everyone looks nice. “Congratulations!” says the family.",
  "In winter I wear a vest under my shirt, a thick sweatshirt and a coat with a hood. My belt is brown and my tracksuit is warm. At night I wear pyjamas and slippers. I do not feel cold in my house.",
  "Pedro cannot find his clothes. His tie is in the bedroom. His belt is on the floor. His handkerchief is in the kitchen! His suit is in the wardrobe, but the zip is broken. “Oh no!” he says. “I am late for work.”",
  "A man has old overalls and a cap. He works in a garden. He wears an apron when he cooks, and a vest when it is hot. For the party he wears a clean suit and a bow tie. “I have clothes for every day,” he says.",
];

CLOZE.food2 = [
  "For breakfast I eat bread with jam and a yoghurt. My brother likes ham and cheese. My father eats bacon and an egg. My mother drinks tea with milk. We all like breakfast on Sunday morning, when the whole family is at the table.",
  "At the party there are many things to eat. There are crisps, nuts and olives. There is a cake and ice cream for dessert. The children drink cola and juice. Everyone is happy, and Sofia says: “Thank you for the sweets!”",
  "Pedro makes lunch. First he cooks spaghetti with tomato. Then he makes a salad with tuna and olives. For dessert there is a pudding. His friends say: “Congratulations, Pedro! The food is great!” Pedro smiles and says: “Thank you, friends.”",
  "At the shop I buy noodles, ketchup, mustard and mayonnaise. I also buy ham, tuna and a bottle of vinegar. The woman at the shop says: “That is twenty euros.” I pay with my card and say: “Thank you, goodbye!”",
  "Grandmother makes pancakes on Sunday. She mixes milk, eggs and flour. We eat the pancakes with jam, with ice cream or with sweets. The baby eats a small pancake with yoghurt. “Delicious!” says everyone. “More, please!”",
  "My favourite food is fish. I like salmon with rice, and I like sardines with bread. My brother prefers turkey with potatoes. My sister is hungry for spaghetti. Our mother says: “Everyone eats a different dinner!”",
  "A salad has lettuce, tomato and olives. Add tuna or ham to make it a meal. Use a little vinegar and oil. Some people like mustard or mayonnaise. Eat it with bread. It is easy, cheap and very good.",
  "Tom is hungry at night. He opens the fridge. He sees ham, cheese, a yoghurt, a bottle of cola and ice cream. He takes a yoghurt and some nuts and eats them with a spoon. “Good night, fridge!” he says and goes to bed.",
  "At the cinema Rita buys crisps and a cola. Her friend buys sweets and nuts. They sit in the dark and watch the film. After the film they are hungry, so they eat pancakes at a small café. It is a great night.",
  "The shop sells many things: jam, ketchup, vinegar, mustard, noodles and spaghetti. There are olives, nuts and sweets. In the fridge there are yoghurts, ham, bacon and salmon. A woman says: “Excuse me, where are the pudding and the ice cream?”",
];

CLOZE.fruitveg = [
  "Fruit and vegetables are good for you. I eat an apple, a banana and a pear every day. My sister likes strawberries and grapes. My father eats a peach or a melon. My mother makes a salad with lettuce, cucumber and tomato.",
  "At the market: “Excuse me, how much are the strawberries?” “Three euros.” “They look ripe.” “Yes, they are sweet and very good.” “I take the strawberry box, a lemon and a melon, please.” “Here you are. Thank you!”",
  "Rita makes soup. She cuts an onion, two carrots and a potato. She adds garlic and a little pepper. The soup is hot and tasty. Her brother says: “I do not like vegetables, but I like this soup!”",
  "A lemon is sour. A strawberry is sweet. A banana is sweet when it is ripe. A grape can be sweet or sour. The garlic and the onion are strong. What is your favourite fruit? Mine is melon, because it is sweet.",
  "In the garden grandfather has many vegetables: carrots, onions, lettuce, peas and beans. He also has corn and cucumbers. Grandmother has a tree with pears and peaches. “Look at the fruit!” she says. “It is ripe.”",
  "For lunch Tom makes a pizza with tomato, mushrooms, onion and pepper. He puts it in the oven. Then he makes a salad with lettuce and cucumber. For dessert there is fruit: a melon and some grapes. “Lunch is ready!” he says.",
  "The baby eats a banana and a pear. She does not like lemon, because it is sour. She likes peaches and strawberries, because they are sweet. Her mother says: “Good girl! Fruit is good for you.”",
  "Vegetables: carrot, onion, lettuce, cucumber, pepper, garlic, peas, beans, mushroom and corn. Fruit: banana, lemon, strawberry, grape, pear, peach and melon. In my house there is always fruit and some vegetables on the table, and we eat them every day.",
  "Pedro goes to the shop. He buys a bag of onions, a kilo of carrots, some garlic and a lettuce. He buys peas and beans too. At home he says: “Mother, I have the vegetables!” “Thank you, my son!” she says.",
  "Is this fruit ripe? Look at the colour. A ripe banana is yellow. A ripe strawberry is red. A ripe peach is soft. A ripe lemon is yellow and sour. Sweet fruit is good for dessert, but eat vegetables every day too.",
];

CLOZE.restaurant = [
  "Maria and Tom go to a restaurant. “Good evening. A table for two, please.” “Do you have a reservation?” “Yes, my name is Silva.” “Welcome! This is your table.” The waiter brings the menu. “Thank you,” says Tom. “We are hungry!”",
  "The waiter says: “Are you ready to order?” Maria says: “For the starter I want soup, please. For the main course, fish with rice.” Tom says: “I want chicken with potatoes and a glass of water.” “And for dessert?” “We see later.”",
  "On the table there is a plate, a fork, a knife, a spoon and a napkin. There is a glass for water and a bottle of wine. The waiter puts a cup of coffee next to the dessert. “Enjoy your meal!” he says.",
  "Sofia is a vegetarian. She does not eat meat or fish. At the restaurant she asks: “Is there a vegetarian menu?” The waiter says: “Yes, we have a vegetarian main course with rice and vegetables.” “Thank you! It sounds tasty.”",
  "The food is tasty but a little spicy. Pedro drinks a lot of water. “Excuse me, waiter, a bottle of water, please.” “Of course.” Pedro says: “The meal is great, but this pepper is very spicy!” His friend laughs.",
  "After the meal the waiter brings the bill. Tom says: “The meal was great, thank you.” He pays with his card and leaves a tip on the table. The waiter says: “Thank you very much. Enjoy your night!” The restaurant is now quiet.",
  "At the restaurant there are two starters: soup and salad. There are three main courses: fish, chicken and pasta. For dessert there is cake, ice cream and fruit. To drink you can have water, wine or beer.",
  "Ana makes a reservation for a restaurant. “Hello, I want a table for four on Saturday at eight, please.” “Of course. Do you want a vegetarian menu?” “Yes, one, please.” “Thank you, Mrs Costa. Enjoy your meal on Saturday!” “Thank you, goodbye!” The waiter writes the reservation.",
  "My father drinks beer, my mother drinks wine and I drink water. We eat a starter, a main course and a dessert. The waiter brings a napkin, a spoon and a fork for the baby. The family has a great meal at the restaurant.",
  "A good restaurant has a nice menu, a kind waiter and tasty food. The plates are clean, the glasses are clean and the napkins are white. You enjoy the meal, you pay the bill and you leave a tip. Everybody is happy.",
];

CLOZE.house2 = [
  "In my bedroom there is a wardrobe, a bedside table and a bunk bed for my brothers. On the shelf there are books. On the rug there is a toy. In the bathroom there is a tap and a toothbrush. The lamp is on the bedside table. I love my bedroom!",
  "In the bathroom there is a bath, a toilet and a tap. On the shelf there is a toothbrush, toothpaste, a comb and shampoo. My father has a razor. My mother says: “Please close the tap and put the shampoo on the shelf.”",
  "Our house has a basement and a terrace. In the basement there is a washing machine and many boxes. On the terrace there are a table and four chairs. In summer we have lunch on the terrace. In the garden there is a lawn and a fence.",
  "Someone rings the doorbell. Tom opens the door. “Hello, welcome!” he says. The friend cleans his shoes on the doormat. “Thank you,” he says. Tom puts the friend's coat on a hanger in the wardrobe.",
  "Grandfather has a small shed in the garden. In the shed there are tools, a bike and a lamp. On the roof there is a chimney. The lawn is green and the fence is white. “This is my favourite place,” he says.",
  "Every morning I wash my face at the tap, I brush my teeth with a toothbrush and toothpaste, and I comb my hair. On Sunday I take a bath. I use shampoo and I dry my hair. Then I put my clothes in the wardrobe.",
  "Pedro buys things for the new house: a rug, a hanger, a doormat and a shelf. He puts the rug in the living room and the doormat at the door. He puts the shelf on the wall in the kitchen. “Now it is a home,” he says.",
  "The house has a toilet downstairs and a bath upstairs. In the bedroom there is a bunk bed and a bedside table. In the garden there is a shed and a lawn. On the terrace there is a table. The house is small but nice.",
  "Excuse me, where is the toothbrush? It is next to the tap, in the bathroom. And the toothpaste? It is on the shelf. And my comb? It is on the bedside table. Thank you, mother! Now I am ready for school.",
  "Look at the picture of the house. There is a chimney on the roof. There is a fence around the lawn. The doorbell is next to the door and the doormat is in front of it. The terrace is behind the house and the shed is in the garden.",
];

CLOZE.routine = [
  "Every day I wake up at seven. I get up, wash my face and brush my teeth. Then I make breakfast. I leave the house at eight and walk to work. I start work at nine. I always listen to music on the way.",
  "Ana works in an office. She arrives at nine and starts to write emails. At twelve she goes to lunch. In the afternoon she speaks with customers. She finishes work at six, and then she walks home and reads a book.",
  "Tom likes to cook. In the evening he buys vegetables, comes home and cooks dinner for the family. After dinner he watches television with his wife. Then he reads a little and goes to sleep.",
  "My brother wants to study every day. He wakes up early, gets up, and studies English for one hour. He writes new words in his notebook and listens to a song. Then he goes to school.",
  "On Saturday I do not work. I wake up late and I sleep a lot. I go to the market and buy fruit. In the afternoon I play football with friends. In the evening I cook dinner and watch a film.",
  "What do you do every day? I get up, brush my teeth, wash and leave. I walk to the bus. I arrive at work and start. I finish at five. At home I cook, read and sleep. It is my routine.",
  "The baby wakes up at six, but the mother is still asleep. The father gets up and walks with her. Then the baby plays, and he cooks breakfast. At nine she sleeps again. “She is a good baby,” says the father, “but she wants to play at night!”",
  "Pedro wants to buy a new bike. He walks to the shop, looks at the bikes and speaks with the man. The bike is blue and not expensive. He pays, leaves the shop and rides home. He is very happy.",
  "Sofia is a student. She gets up at seven, leaves home at eight and arrives at school at nine. She listens to the teacher, writes in her notebook and reads the book. She finishes at four and comes home to study.",
  "Grandfather wakes up early, walks in the garden, and watches the birds. He reads the newspaper and drinks his coffee. He cooks lunch for the family. In the afternoon he sleeps a little. “Every day is the same,” he says, “and I like it.”",
];

CLOZE.time = [
  "Today is Monday. It is eight o'clock in the morning. I always get up early. Tomorrow is Tuesday and I start work late. Yesterday was Sunday, and I slept a lot. I like my week, but I love the weekend.",
  "What time is it now? It is half past four in the afternoon. The class finishes in ten minutes. Then Tom goes home and studies for one hour. In the evening he plays with his friends until nine o'clock.",
  "My birthday is on Friday. Tomorrow is Thursday, so I have one day to buy a cake. Next week is the holiday. Every year my family goes to the beach in summer, and it is always a great month.",
  "Maria is always early. She arrives at work at eight o'clock and is never late. Her friend Pedro is always late. He arrives at ten past nine and says: “Sorry, I am late!” Maria says: “Pedro, you are never on time! Tomorrow, please be early.”",
  "A week has seven days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday. A day has twenty-four hours. An hour has sixty minutes. A year has twelve months. How many weeks are in a year?",
  "Yesterday was a very long day. I got up early, worked all morning and had lunch at one o'clock. In the afternoon I studied for two hours. In the evening I cooked dinner and watched a film. I slept at eleven.",
  "On Sunday we have a family lunch at one o'clock. The whole family comes: the grandmother, the grandfather, the uncles and the cousins. In the afternoon we play games. In the evening everyone goes home. It is my favourite day.",
  "The holiday starts tomorrow! We leave at six o'clock in the morning. The journey is two hours. We arrive at the beach in the afternoon. We stay for one week. Next year we want to go in the winter.",
  "What do you do at the weekend? On Saturday afternoon I play football. On Saturday evening I go out with friends. On Sunday I get up late, have lunch with the family and read a book. And you?",
  "Excuse me, what time does the film start? It starts at eight o'clock. And when does it finish? In two hours. Is it possible to go now? Not yet, only in a minute. Thank you very much!",
];

CLOZE.calendar = [
  "The year has twelve months: January, February, March, April, May, June, July, August, September, October, November and December. My birthday is in May. Winter starts in December and summer starts in June. What is your favourite month?",
  "Look at the calendar! Today is Tuesday. The date is the fifth of March. Tomorrow is Wednesday and then Thursday. On Saturday there is a party. On Sunday we rest. Write the dates in your diary.",
  "I write in my diary every day. Today is Thursday, the tenth of October. I got up early, went to work and came home at six. Tomorrow is Friday, so I am happy. I always write the date at the top.",
  "Pedro looks at the calendar. January is cold, February is short and March is the start of spring. In April there is rain, in May there are flowers and in June school finishes. July and August are hot.",
  "On weekdays I work from Monday to Friday. On Saturday and Sunday I rest. My daily routine is easy: I get up, work, come home and sleep. I always check the calendar for important dates in my diary.",
  "Rita has a busy calendar. On Wednesday there is a meeting. On Thursday there is a class. On Saturday she has a party. In October she has an exam, and in December she goes on holiday. “My diary is full!” she says.",
  "What is the date today? It is the third of September. The summer holiday finishes now and school starts. In October there is a new class. In November it starts to get cold, and in December there is Christmas.",
  "Sofia is born on the first of April. Her brother is born in July and her mother in January. Her father is born in November. Her grandmother is born in August. Sofia writes all the dates in the family calendar.",
  "The seasons: spring is March, April and May. Summer is June, July and August. Autumn is September, October and November. Winter is December, January and February. My favourite month is July, because it is hot.",
  "Tom has a diary and a calendar. In the diary he writes his daily plans. On the calendar he marks the important dates: his birthday on Tuesday, a holiday on Saturday and the weekend with his friends. “I never forget a date,” he says.",
];

CLOZE.weather = [
  "What is the weather like today? It is sunny and warm. The sky is blue and there is no cloud. In summer the sun is hot and we go to the beach. In winter it is cold and we wear a coat.",
  "It is raining! Take your umbrella. There are dark clouds in the sky and a cold wind. Tomorrow there is a storm. Stay at home and read a book. When the rain stops, the sun comes out.",
  "Winter in the mountain is beautiful. There is snow on the trees and the river is cold. The wind is strong, so we wear a hat and a scarf. In the evening we drink a hot tea near the window.",
  "Summer is my favourite season. It is hot and sunny. We go to the sea, swim and play on the beach. At night the weather is warm. There is no rain and no cold wind. I love summer holidays!",
  "The four seasons: spring is warm and the trees have flowers. Summer is hot. Autumn is cool and there is rain and wind. Winter is cold and sometimes there is snow. What is your favourite season?",
  "Tom looks at the sky. “There are many clouds,” he says. “I think it is going to rain.” His wife says: “Take an umbrella, please.” At lunch the rain starts and the wind is cold. Tom opens his umbrella and says: “Thank you, my wife!”",
  "The weather is very bad today. There is a big storm with strong wind and heavy rain. The trees move and the river is high. Nobody walks in the street. Everyone stays at home and waits for the sun.",
  "Spring is here. The sun is warm, the sky is blue and the trees are green. There is a light wind. The weather is perfect for a walk in the mountain. We take sandwiches and water and walk along the river.",
  "In autumn the weather is cool and the trees are red, orange and yellow. There are many clouds in the sky and sometimes rain. We wear a jacket and walk in the park. The sea is cold but beautiful.",
  "Maria calls her friend. “How is the weather there?” “It is sunny and hot. Today I am at the beach. And there?” “Here it is cold and it is raining. I am at home with a hot tea.” “Good luck with the winter!”",
];

CLOZE.weather2 = [
  "The weather forecast says there is fog in the morning, with a cold temperature. Later there is a breeze and the sun comes out. At night there is frost. Wear a warm coat and drive slowly. Tomorrow the weather is better.",
  "Last night there was a big storm with thunder and lightning. The rain was heavy and there was hail on the roof. This morning the street is full of puddles and mud. The sky is overcast, but the sunrise is beautiful.",
  "It is a heatwave! The temperature is thirty-eight degrees and the sun is scorching. Nobody walks in the street at noon. The children stay at home with the window open. In the evening there is a light breeze.",
  "In winter the weather is chilly and damp. In the mountain there is a blizzard with snow and strong wind. The snowflakes are big and the icicles hang from the roof. Tom drinks a hot tea near the window.",
  "There is a mist over the river this morning. The air is damp and the temperature is low. The farmer looks at the forecast on his phone. “Drizzle at noon,” he says. “I need my coat, and my boots for the mud.”",
  "A gale blows in the night. The trees move and the windows shake. In the morning there are leaves and puddles in the street. The weather forecast says the wind stops at noon, the temperature is low and the sky clears up.",
  "Maria loves the sunrise. She gets up early and looks at the sea. In the morning there is a light mist and a cool breeze. Then the sun comes out and the temperature goes up. “What a beautiful day!” she says.",
  "Winter morning: frost on the lawn, fog on the road and icicles on the roof. The temperature is below zero. The weather is chilly and damp. Pedro wears a hat and scarf and says: “Today I stay at home with a hot soup.”",
  "Summer thunder: first there is lightning, then thunder. Then a drizzle and finally a heavy rain with hail. After ten minutes the sun is back. The puddles shine, and the children play in the mud.",
  "What is the forecast for tomorrow? Overcast in the morning with a light drizzle. In the afternoon, the sun and a warm breeze. The temperature is twenty degrees. At night there is mist near the river. Good weather for a walk!",
];

CLOZE.animals = [
  "I love animals. At my house I have a dog and a cat. The dog is brown and the cat is grey. My friend has a rabbit and a bird. My brother has a mouse. They are all my pets, and we love them very much.",
  "On the farm there are many animals: cows, pigs, sheep, horses and ducks. The cow gives milk. The hens give eggs. The sheep give wool. The farmer says: “Good morning, my animals!” and gives them food.",
  "At the zoo we see a lion, a tiger, an elephant and a monkey. The elephant is big and the monkey is funny. The lion is wild and very strong. The children love the bear. “Look at the snake!” says Tom.",
  "A frog lives near the river. A spider lives in the garden. A butterfly sits on a flower, and a bee flies near it. The bird sings in the tree. The cat watches everything from the window.",
  "Pets are good friends. A dog is a good pet because it is kind and plays with you. A cat is a quiet pet. A rabbit is a small and soft pet. What pet do you want? I want a dog, because I love to walk.",
  "My little sister loves a toy elephant. She also loves a toy lion and a toy bear. At night she puts them on her bed. She says: “Good night, animals!” and sleeps. Her mother smiles and turns off the lamp.",
  "In the wild there are many animals: wolf, bear, tiger, snake and lion. They live in the mountain or near the river. Some animals are dangerous, but they are beautiful. We have to protect them.",
  "The cat watches the mouse. The mouse runs to the kitchen. The dog sees the cat and runs after it. The bird in the tree sings. Grandmother says: “Please, animals, stop! This is not a zoo, it is a house!”",
  "Pedro has a horse and a pet duck. Every morning he gives the animals water and food. Then he rides in the field. The horse is brown with a white face. “He is my best friend,” says Pedro. “He is a wild animal, but he understands me.”",
  "A duck swims on the river. A frog jumps near it. A butterfly flies above the water. A snake is under a tree. A rabbit is in the grass and a monkey sits on a branch. What a beautiful place for animals!",
];

CLOZE.animals2 = [
  "At the beach there are seagulls, crabs and turtles. A seal swims near the boat. In the sea there is a whale, far from the coast. Sofia says: “Look at the crab! It is very small.” Tom says: “And look at the seagull in the sky!”",
  "In the garden there are many small animals. A snail goes slowly on the leaf. An ant carries food to the garden. A worm lives in the ground. A wasp flies near the flowers, and a hedgehog sleeps under a tree.",
  "On the farm there are goats, donkeys, geese and hens. The goose makes a lot of noise. The donkey carries bags. The goat eats grass. The hen gives eggs. The farmer says: “They are all my friends.”",
  "An owl sits in the tree at night. A squirrel runs on the branch. An eagle flies high above the mountain. A crow sits on the fence, and a pigeon looks for food in the square. A swan swims on the river.",
  "A camel lives in the desert. It drinks a lot of water and then walks for days. A turtle lives near the sea. A whale lives in the ocean, and an octopus lives deep in the sea. Animals live in many different places.",
  "At the park, Rita gives bread to the swans and the pigeons. A squirrel comes and takes a nut. A crow watches from a tree. Her brother says: “Look at the ant! It carries a very big piece of bread!”",
  "The museum of nature has many animals. There is a big whale, an eagle with open wings, an owl, a camel and an octopus. Children look at everything and ask questions. “Is the turtle real?” asks one. “No,” says the teacher, “it is a model.”",
  "The hedgehog sleeps in the winter. The squirrel keeps nuts in a tree. The snail goes inside its house when it rains. The goat, the donkey and the hen live in the farm. Which animal is your favourite?",
  "In the evening the owl wakes up. The pigeon and the crow go to sleep. The seagull flies to the sea. The ant and the worm are in the ground. A wasp sits on the wall. The whole garden is quiet.",
  "Tom has a pet turtle. Her name is Rita. She is slow and quiet. In summer she lives in the garden with an ant, a snail and a worm. A squirrel visits her. In winter she sleeps in a box. “She is my favourite animal,” says Tom.",
];

CLOZE.city = [
  "This is my city. It has big streets, a train station, an airport, a park and a museum. There are many shops, hotels and a church. The city is busy and there is a lot of traffic. I love it!",
  "Excuse me, where is the station? Go straight, then turn left. The station is near the church, on the right. You can take the train or the bus. Buy a ticket at the shop in the square. Thank you very much!",
  "Tom arrives at the airport. He takes a bus to the city. The ticket costs five euros. In the city he looks at a map. He walks to the hotel, near the bridge. The hotel is not far from the square.",
  "Ana lives in a big city. Every morning she takes the train to work. The train station is near her house. She buys a ticket and waits. The traffic in the streets is heavy, so the train is faster than the car.",
  "In the city there is a museum, a church, a park and a bridge. In the square there are many shops. Money is important in the city: a hotel, a ticket for the train and a coffee all cost money.",
  "Look at the map. The hotel is on the left, the station is on the right. The park is far from the airport. The bridge is near the museum. The street goes straight to the square. The city is not difficult.",
  "Pedro drives his car in the city. The traffic is terrible! The streets are full of cars and buses. He turns left at the church, goes straight and turns right at the bridge. At last he arrives at the hotel.",
  "On Sunday we go to the park. We take the bus in the square. The ticket costs one euro. At the park we see people, dogs and children. We have a coffee near the church and return in the evening by train.",
  "A small town and a big city are different. The town has a few shops, a church and a park. The city has an airport, many hotels, a museum and a lot of traffic. I like both. The town is quiet, the city is exciting.",
  "Maria asks a man in the street: “Excuse me, is the museum far?” “No, it is near. Go straight, turn right at the bridge, and it is on the left.” “Thank you!” “You are welcome. Do you have a map?” “Yes, I have one.”",
];

CLOZE.city2 = [
  "In the square there is a fountain and a statue. There are benches near the fountain. People sit and read the newspaper. A kiosk sells newspapers and sweets. The street market is open on Saturday, and the florist has beautiful flowers.",
  "Pedro walks in the old part of the city. He sees a monument, a statue and a pond. There is a bench near the pond. He goes along an alley, and sees graffiti on the wall. A post box is on the corner.",
  "On my street there are many small shops. The butcher sells meat and the greengrocer sells fruit and vegetables. The florist sells flowers. The newsagent sells papers. The barber cuts hair. Everyone knows everyone, and the street is quiet in the morning.",
  "Excuse me, where is the kiosk? It is near the fountain, next to the bench. And the newsagent? It is behind the statue. Thank you! The street is busy, with a billboard above the florist and a monument in the square.",
  "Maria crosses the street at the zebra crossing. She goes to the florist and buys flowers. Then she goes to the butcher and the greengrocer. She waits on a bench near the fountain. A billboard shows an advert for the street market on Saturday.",
  "At the street market there are fruit, vegetables, flowers and clothes. People talk and laugh. The greengrocer shouts: “Fresh fruit!” The florist makes beautiful flowers into a gift. Near the fountain, a man sells newspapers from a kiosk.",
  "My grandfather has a barber's shop near the monument. He opens at nine. The shop has a mirror and two chairs. Outside there is a bench, a kiosk and a statue. On the street there is a lamp post and a post box. “It is a small shop,” he says, “but a good one.”",
  "Tom goes to the launderette with his clothes. Next to the launderette there is a car wash. He waits on a bench and reads the paper from the newsagent. A little girl feeds the ducks in the pond. “Nice day,” says Tom.",
  "In the small park there is a pond with ducks. There are benches, a fountain and a statue. A man sells newspapers at the kiosk. There is graffiti on the wall of the alley. A lamp post lights the street at night.",
  "The city is full of surprises: a statue in the square, a fountain in the park, graffiti in an alley, a phone box near a bench. A street market on Sunday and a billboard above the bus shelter. I love walking in the city.",
];

CLOZE.places = [
  "In my town there is a bank, a post office, a library and a bookshop. There is a cafe near the town hall. There is a bakery on the corner. The police station is next to the bank. Everything is near.",
  "On Saturday we go to the sports centre. There is a swimming pool and a stadium. After sport we eat at a cafe and buy bread at the bakery. In the evening we go to a disco with friends.",
  "Tom works in a factory. His wife works at the department store. They live in a flat near the town hall. There is a lift in the building. At the entrance there is a post box. At the exit there is a garage.",
  "Excuse me, where is the post office? It is next to the bank, opposite the library. The entrance is on the left. Where is the bakery? It is near the cafe. Thank you very much!",
  "The castle is a big old building. Tourists go through the entrance and see the old rooms. They take photos. At the exit there is a cafe and a small bookshop. “It is a beautiful place,” says Maria.",
  "On holiday we stay at a guesthouse near the sea. My friends prefer a campsite. There is a swimming pool at the guesthouse, but at the campsite there is a lake. In the evening we meet at a cafe or a disco.",
  "The library is a quiet place. Pedro goes there every afternoon. He takes the lift to the second floor and reads at a table. At the exit he says goodbye to the librarian and goes to the bakery to buy bread.",
  "The department store has five floors. Take the lift to the third floor for clothes. On the first floor there is a cafe. At the entrance there is a bank machine. The exit is at the back, near the garage.",
  "In the evening Ana walks past the stadium and the factory. She stops at a bakery and buys a cake. Then she goes to the bank, the library and the post office to send a letter. Finally she goes home to her flat and takes the lift.",
  "A small town and a big city are different. The town has a bank, a bakery, a library and a post office. The city has a stadium, factories, disco clubs and department stores. I live in a small town, but I like to visit the city.",
];

CLOZE.directions = [
  "Excuse me, where is the bank? Go along this street. Turn left at the corner, then cross at the crossroads. The bank is on the right, opposite the post office. It is not far. Thank you very much! You are welcome.",
  "The keys are on the table. The cat is under the chair. The lamp is next to the sofa. The picture is above the sofa. The dog is behind the door. Where is your bag? It is in front of the door.",
  "The hotel is in the north of the city. The station is in the south. The airport is in the east and the port is in the west. The museum is in the middle, between the church and the bank.",
  "Turn right at the roundabout. Go straight along the road. At the crossroads, turn left. Cross the bridge. The hospital is on the corner, opposite the park, in the north of the town. You cannot miss it!",
  "Tom is outside the house. His friend is inside. The key is in the lock. The door is closed. “Open the door, please,” says Tom. “I am here!” His friend opens and says: “Welcome! Come in!”",
  "The café is between the bank and the library. The bookshop is opposite the café. Behind the library there is a small garden. Above the bank there is a flat. Under the bridge there is a river.",
  "Where is the supermarket? It is here, on this street, next to the bank. And the park? It is there, behind the church. How do I cross the street? At the crossing, in front of the shop. Thank you very much!",
  "Pedro is lost in the city. He looks at a map. “I am here,” he says. “The hotel is there, between the museum and the church.” He goes along the street, crosses the bridge and turns left at the corner.",
  "Sofia asks a woman: “Excuse me, is the station near?” “Yes. Go along this road, turn right at the roundabout and cross the square. The station is in front of the church.” “Thank you!” “You are welcome.”",
  "In the garden the tree is behind the house and the lamp is next to the door. The flowers are under the window. The bird is above the roof, the dog is outside and the cat is inside. The key is on the table.",
];

CLOZE.transport = [
  "In the city I take the bus, the tram or the underground. The tram is slow but nice. The underground is fast. A taxi is expensive. At the bus stop I wait for the bus. I buy a ticket at the ticket office and sit on a seat. The passengers are quiet.",
  "Tom drives a car. He puts on his seat belt, drives along the road and stops at the traffic light. He fills the car with petrol and then goes to the motorway. At the end he leaves the car in the car park.",
  "At the train station, the passengers wait on the platform. The train arrives and they get on. Some passengers read, some sleep. A taxi waits outside, and a tram goes along the road. At the ticket office, a woman buys two tickets for her children.",
  "Sofia goes to work by bicycle. Her brother prefers a motorbike. Her father drives a lorry. Her mother takes the tram. Her grandfather takes a taxi. They all go along the same road, but they arrive at different times.",
  "We go on holiday by ship. The ship is big and has a swimming pool. We also take a ferry to a small island. A boat takes us to the beach. The passengers are happy. “What a great journey!” says Maria.",
  "A taxi, a bus and a tram stop at the square. A lorry stops at the traffic light. A motorbike goes along the road. A bicycle goes on the street. The passengers wait at the bus stop. The city is full of transport.",
  "Pedro wants to fly to London. He goes to the airport by taxi. At the ticket office he buys a ticket. The plane flies over the sea, and a ship goes below it. He puts on his seat belt. “I love to fly,” he says. “Travelling is great!”",
  "In my town there is a bus stop near my house. The bus comes every ten minutes. The tram stops in the square. A taxi is always at the station. The ticket for the bus is cheap, the ticket for the tram is a little more expensive. I never drive in the city; I ride my bicycle.",
  "The passengers get off the ferry. They walk to the platform, take a train and then a bus. The journey is long but nice. At the car park, a taxi waits. The driver asks: “Where are you going?”",
  "To go to the beach we can drive, ride a bicycle or take the train. If we drive, we need petrol and a car park. If we ride, we need a bicycle and a road. If we go by train, we buy a ticket at the ticket office.",
];

CLOZE.school = [
  "This is my classroom. There are twenty desks, a board and a big timetable on the wall. Every pupil has a notebook, a pen, a pencil, a rubber and a ruler. The teacher uses the board for maths. I love my class!",
  "My timetable: on Monday I have maths and history. On Tuesday I have geography and art. On Wednesday I have science and PE. At ten o'clock there is a break. My favourite subject is art, and I always get a good grade.",
  "The pupil opens his textbook and takes his notebook. He writes the date with a pen. The teacher asks a question about history. A girl answers. The teacher says: “Good! Now take your calculator for maths.”",
  "Sofia wants to go to university. She studies hard in all subjects. She uses a textbook, a notebook and a calculator. She gets a good grade in science and a very good grade in maths. “One day I want to be a doctor,” she says.",
  "At break all the pupils go out of the classroom. Some play football, some talk and some eat a sandwich. Tom takes his pen and writes in his notebook. The teacher says: “Break finishes in ten minutes. Please come back.”",
  "In my bag there is a notebook, a textbook, a pen, a pencil, a ruler and a rubber. In maths I use the ruler and the calculator. In art I use pencils. The teacher says: “Do not forget your textbook tomorrow!”",
  "The geography class is about the world. The teacher shows a map on the board. The pupils write the names of countries in their notebooks. “Where is Portugal?” asks the teacher. “In the west of Europe,” says a pupil.",
  "In science, the pupils learn about the sun, water and animals. They use a textbook and a notebook. The teacher does an experiment on the desk. Everybody watches. At the end the pupils write their answers in the notebook.",
  "My brother is at university. He studies history and geography. He has a lot of books and a small desk in his room. He goes to class in the morning and studies in the afternoon. “It is difficult,” he says, “but I love it.”",
  "Exam day! The classroom is quiet. Every pupil has a pen, a pencil, a rubber and a ruler on the desk. The teacher gives the exam. The grade depends on the answers. At the end, the pupils say: “Maths was easy, but history was difficult.”",
];

CLOZE.work = [
  "My name is Ana and I have a job in an office. I work with a computer and a phone. I write emails and answer questions. My boss is kind. My colleagues are friendly. I like my company and my job.",
  "Tom is a teacher in a school. He teaches English to students. He prepares lessons and corrects homework. Every Monday there is a meeting with the other teachers. His salary is not high, but he loves his job.",
  "In the office the phone rings. A customer asks a question. Ana answers and helps him. Then she writes an email. At eleven there is a meeting with the boss. She is very busy today, but she is happy.",
  "Pedro is a student. He wants to learn English. He uses a dictionary and does his homework every day. Next week there is an exam. His teacher says: “Study the lesson and ask questions if you need help.”",
  "Maria works in a big company. Her boss is a nice woman. Her colleagues help her every day. She has a computer, a phone and a desk. Her salary is good, but she is always busy. “I like my job,” she says.",
  "A good student does homework every day, listens to the teacher, asks questions and learns new words. He uses a dictionary and a computer. Before an exam, he studies the lesson and asks colleagues for help.",
  "The customer calls the company. “Hello, I have a problem with my computer.” The colleague says: “I can help you. Please send me an email.” The customer says: “Thank you!” and writes the email. The colleague answers it in five minutes.",
  "My father is the boss of a small company. He has an office with a computer and a phone. He has meetings every day. His salary is high, but he works a lot. “It is a difficult job,” he says, “but I like it.”",
  "In the lesson the teacher asks a question. The students think and answer. One student does not know the answer. He opens his dictionary. “Thank you for your help,” he says to his colleague. The teacher smiles and the lesson goes on.",
  "I have two jobs: in the morning I am a student at university, and in the afternoon I work in a shop. I am always busy. My boss is kind, my colleagues are great and the customers are friendly. My salary helps with my studies.",
];

CLOZE.feelings = [
  "Today I am happy. The weather is good, my exam was easy and my friends are here. I feel excited, because tomorrow is my birthday. Nothing is difficult today. I smile all day, and my mother says: “You look so happy!”",
  "Tom is sad. His dog is old and sick. He is worried and afraid. He is also tired because he did not sleep. His mother says: “Do not be sad, the doctor is good.” Tom says: “Thank you, I feel a little better.”",
  "Ana is nervous. Today is her first day at a new school. Everything is big and new. She is afraid, but also excited. In the classroom, a girl smiles and says hello. Ana is surprised and happy. Her new school is good!",
  "My little brother is bored. It is raining and he cannot play outside. He is angry because the game is broken and he is tired of the television. My mother says: “Take a book!” He reads a good story and feels better. Soon he is happy again.",
  "Sofia is proud. Her son has a good grade in the exam. He is also proud and a little surprised, because the exam was difficult. His father hugs him and says: “I am so happy and proud of you!”",
  "Grandmother is lonely. Her house is big and quiet. She is old and her children live far away. But today her family comes. She is surprised and excited. Everyone is here, and she is no longer sad.",
  "The test is difficult. Pedro is worried and nervous. He is afraid of a bad grade. But then he sees an easy question and feels better. At the end he is proud of his work and surprised by the result.",
  "How do you feel today? I feel tired because I work a lot. My friend feels balanced because she does yoga. My brother feels bored. My sister feels excited because she wants to travel. We all feel different.",
  "Rita is angry. Her new phone is broken. She is also sad, because it was expensive. Her friend says: “Do not worry, it is easy to fix.” Rita feels better. In the end the problem is small, and she is happy again.",
  "It is a beautiful day. The sky is big and blue. The old man is happy, the child is excited, the woman is proud of her garden and the dog is tired after the walk. Nobody is sad or bored. It is a good day for all.",
];

CLOZE.verbs = [
  "I give a present to my mother. I take a bag and bring it home. I put the present on the table. My mother looks at it and says: “Thank you!” She likes the present and loves me. I am happy.",
  "At school the teacher says: “Open your books and look at page ten.” She shows a picture and tells a story. Then she asks questions: “Do you understand? Do you know the answer?” The students think and say yes.",
  "Tom needs a new phone. He goes to the shop and looks at many phones. He asks the man: “Can you show me this one?” The man says: “Of course. Do you need help?” Tom thinks, then makes a decision and buys it.",
  "I always forget my keys. Yesterday I could not find them. I looked in my bag, in my pockets and on the table. Then I remembered: they were in the door! I need to put them in the same place every day.",
  "Maria meets a friend at the station. They wait for the bus. The friend says: “Do you remember our teacher?” Maria says: “Yes, I do. I like him a lot.” They use their phones to take a photo and wait for the bus.",
  "What do you do every day? I take a shower, make breakfast, say goodbye to my family and go to work. I meet my colleagues, use my computer, and understand my tasks. In the evening I bring food home and cook.",
  "My brother says he loves music. He uses his phone to listen to songs all day. I tell him: “You need to close the door!” He says: “Sorry, I forget.” Then he puts his phone on the table and comes to dinner.",
  "Pedro finds a wallet in the street. He looks inside and sees a name. He takes the wallet to the police station and gives it to a woman. She says: “Thank you!” Pedro says: “You are welcome.”",
  "A good student asks questions, listens, thinks, remembers new words and uses a dictionary. He does not forget his homework. He makes notes and brings his books to class. His teacher shows him how to learn.",
  "I wait for my friends at the square. I look at my watch. They arrive late. I say: “Why are you late?” They say: “Sorry, we forget the time.” I laugh and say: “Never mind. Let us go and meet the others.”",
];

CLOZE.health = [
  "I do not feel well today. I have a headache, a cough and a fever. My mother says: “You have the flu. Rest at home.” She makes an appointment with the doctor. At the pharmacy she buys medicine and a tablet for the pain.",
  "Tom is sick. His symptoms are fever, cough and pain in the body. He goes to the hospital. The nurse takes his blood and the doctor looks at him. “It is the flu,” says the doctor. “Rest and drink water. You will be better soon.”",
  "To be healthy, do exercise every day. Eat fruit and vegetables and drink water. Rest enough at night. Go to the dentist twice a year. A healthy body is a happy body, and the doctor is happy too.",
  "There is an emergency! A man falls in the street and his leg hurts a lot. Someone calls an ambulance. Two nurses arrive and take him to the hospital. The doctor sees him and says: “Do not worry, it is not serious.”",
  "Ana has an appointment with the dentist at ten. She has a pain in her tooth. The dentist looks and says: “You need a small treatment.” After the visit she feels better. “Thank you, doctor,” she says. “No more pain!”",
  "At the pharmacy: “Good morning. I have a cough and a headache.” “Do you have a fever?” “No, but I feel tired.” “Take this medicine twice a day and rest. If the pain continues, see a doctor.” “Thank you!”",
  "Sofia has a fever and feels sick. Her symptoms are a cough and a sore body. Her husband calls the doctor. The doctor says: “Rest, drink water and take the tablet.” After two days she feels better and goes back to work.",
  "A nurse works in a hospital. She helps the doctor, takes blood, gives medicine and talks to patients. She works at night and in the morning. “It is a hard job,” she says, “but I love helping sick people feel better.”",
  "In an emergency, call the ambulance. Stay calm and give your address. Do not move a hurt person. The nurse and the doctor arrive in a few minutes. Remember: your health is the most important thing.",
  "Pedro plays football every weekend. It is good exercise and keeps him healthy. Yesterday he hurt his knee and now he has pain. He rests at home, takes a tablet and goes to the doctor on Monday for an appointment.",
];

CLOZE.health2 = [
  "Maria falls and gets a bruise on her arm and a scratch on her hand. Her father puts a plaster on the scratch. “It is nothing serious,” he says. Maria feels a little dizzy, so she sits and rests.",
  "At the doctor, the nurse takes my blood pressure and uses a thermometer. “Your temperature is normal,” she says. “But you have a sore throat. Take this medicine.” I also get an injection against the flu.",
  "Tom has a sprain in his foot. The doctor says it is not a fracture, but the foot is swollen. He needs a crutch to walk and some rest. “How long?” asks Tom. “Two weeks,” says the doctor.",
  "Rita has a toothache and an earache. She feels nausea and a little dizzy. Her mother takes her to the doctor. He gives her medicine and says: “Rest and drink water. A cramp or a rash is also possible, but it goes away.”",
  "First aid is important. If someone has a burn, put cold water on it. If there is a cut, clean it and use a plaster. If there is a sprain, rest the foot. In an emergency, call an ambulance.",
  "In the morning I sneeze a lot. I have a rash on my arm, a sore throat and a stomachache. I think it is the flu. I go to the pharmacy and ask for medicine. The woman at the pharmacy says: “Rest and drink hot tea.”",
  "Pedro has a bad cramp in his leg after the match. His thigh is swollen and a bruise appears. The coach calls first aid. They put ice on his leg. After an hour, Pedro can stand with a crutch.",
  "A burn in the kitchen: Ana touches a hot pot and has a burn on her hand. She puts it under cold water for ten minutes. Then she uses a plaster. She also has a small cut and a scratch. “Be careful with the oven,” she says to her children.",
  "The doctor looks at the patient. “Do you feel dizzy or sick?” “Yes, a little nausea.” “Any pain?” “I have a toothache and an earache.” “Let me check your blood pressure.” “Is it high?” “No, it is normal. You are fine.”",
  "A fracture is a broken bone. A sprain is a hurt foot or hand. A cut is a small wound, a scratch is a small mark, a bruise is a blue-black mark and a burn is from fire or heat. Know them to use first aid well.",
];

CLOZE.shopping = [
  "On Saturday we go shopping. We take a trolley at the supermarket and make a list. We buy fresh bread, milk and fruit. At the checkout the cashier gives us a receipt. “Thank you,” we say. “Goodbye!”",
  "Ana loves a good sale. This week there is a big discount in the market. She buys two shirts and a bag. The shop offers a gift for each customer. She pays with her card and takes the receipt. “What a bargain!”",
  "The queue at the checkout is long. Tom waits with a basket of food. The cashier is quick. “Do you have a loyalty card?” “Yes.” “Good, you have a discount.” Tom pays, takes his receipt and goes home.",
  "I bought a pair of shoes online. The delivery was quick, but the shoes were heavy and too big. I want to return them. The shop says: “Please keep the receipt and we give you a refund.” I choose a new size.",
  "The supermarket is closed on Sunday but open on Saturday. In the market you can buy fresh fruit. The brand is not important for Maria; the price is. At the supermarket she always looks at the offer, the sale and the discount, and chooses the cheaper one.",
  "Pedro sells his old bike on the internet. He puts a photo and a price. A man buys it and pays in cash. The delivery is the next day. “Thank you for the quick sale,” says the man. “I am very happy with the offer.” Pedro sells and puts the money in his basket.",
  "Do you have enough money? Sofia counts her cash. She has twenty euros. She wants to buy food for the week. She makes a list and chooses only fresh vegetables. At the checkout the cashier says: “That is eighteen euros.”",
  "At the market, the sellers shout: “Fresh fish! Fresh fruit!” People choose, pay and carry heavy bags. A woman asks for a discount. “Today there is a sale on tomatoes,” says the seller. “Three for two euros.”",
  "Shopping online is easy. You choose a brand, put it in the basket, pay and wait for the delivery. If you do not like it, you can return it for a refund. Keep the receipt and check the opening hours of the shop.",
  "A new supermarket is open in my street. It has a big offer this week: a discount on food, a gift for the first customers and a free basket. The queue is long, but the cashiers are quick. Everybody is happy.",
];

CLOZE.shopping2 = [
  "At the shopping centre, Ana looks at a window display and sees a dress. She goes in and finds the price tag: fifty euros. “Is it in stock?” she asks. “Yes,” says the shop assistant. “The fitting room is over there.”",
  "Tom wants a new phone. The phone is out of stock, but the shop has a gift card promotion. At the till he pays and gets a voucher for his next visit. “The warranty is two years,” says the cashier.",
  "At the cash desk, a woman shows her loyalty card. The cashier scans the barcode. “Do you want a carrier bag?” she asks. “No, thank you. I have my own shopping bag.” She pays and takes the receipt.",
  "I like second-hand shops. The clothes are cheap and often in very good condition. There is a clearance this week with big discounts. I bought a jacket and a bag. The wrapping paper for gifts is free.",
  "Sofia makes a wishlist for her birthday. She wants a book, a bag and a gift card for the shopping centre. Her mother buys the gift and uses nice wrapping paper. “Happy birthday!” she says.",
  "A package arrives at my house. It is a gift from my aunt. Inside there is a shirt with a price tag, a card and a voucher for a shop. I use the voucher in the shopping centre and buy shoes.",
  "Pedro is angry. The shop sold him a toy that does not work. He goes back with the receipt, the package and a voucher. “You have a warranty,” says the shop assistant at the till. “We can give you a refund or a new gift.” Pedro chooses a new one.",
  "In the window display there is a coat on sale. The price tag says thirty euros. The shop assistant says: “There is a clearance on all coats.” Maria goes in, tries it in the fitting room and pays at the till. The warranty is a voucher for a new coat.",
  "Online retail is big now. You make a wishlist, use a voucher and pay by card. When the package arrives, check the barcode and the price tag. If it is wrong, return it. A good retail shop always offers a warranty and a gift card.",
  "Before Christmas the shopping centre is crowded. People buy gifts and wrapping paper. The queue at the till is long. Some shops have big clearance sales. Some items are out of stock, but others are in stock.",
];

CLOZE.hobbies = [
  "My hobby is music. I play the guitar and sing. My sister plays the piano and draws. In our free time we play games and take photos. On Saturday we go to the gym. We have a lot of fun together.",
  "Tom loves sport. He plays football and basketball in a team. On Sunday there is a match. His team wins and he is very happy. Sometimes they lose, but it is fun anyway. “Sport is my best hobby,” he says.",
  "Ana likes to dance and swim. In summer she swims in the sea. In winter she goes to the gym and dances in a class. She also likes to cycle in the park. “I run and cycle every weekend,” she says.",
  "Pedro has a hobby: he collects stamps. He also plays chess with his grandfather in his free time. His grandfather is a very good player and usually wins. “One day I want to win,” says Pedro.",
  "What do you do in your free time? I play tennis, draw and take photos. My brother plays the guitar and sings. My mother dances. My father watches football and plays a game of chess with me.",
  "Rita is in a team and plays volleyball and basketball. She goes to training twice a week. Every game is fun. When her team wins, everyone is happy; when it loses, they smile and say: “Next time!”",
  "A hobby is something you do for fun. Some people sing, some draw, some play the piano or the guitar. Others cycle, run or swim. A hobby is good for your health and your mood. What is your hobby?",
  "At the gym, I run for twenty minutes and then I swim. After that I play a game of tennis with a friend. We play a match and I lose, but it is fun. I collect nothing, but I love sport.",
  "My cousin plays the piano and the guitar. He sings in a band. They play songs for friends in their free time. Sometimes they win a small prize. “Music is fun, and I love my team,” he says.",
  "We have a family game night on Friday. We play chess, cards and other games. My mother wins at chess, my father wins at cards. I lose almost every time, but I love the fun and the fun.",
];

CLOZE.sports = [
  "In summer I go surfing and sailing at the beach. My brother prefers volleyball. In winter we go skiing in the mountain. My father plays golf and my mother likes swimming. Our family loves sport.",
  "The football match is on Sunday. The referee says “start” and the game starts. The supporters sing and shout. One team scores a goal. The coach is happy. At the end the champion team receives a medal.",
  "Tom does rugby training three times a week. He runs, jumps, throws and catches the ball. The coach says: “Good work!” After the training he is tired but happy. On Saturday there is a big match.",
  "In tennis, you hit the ball with a racket. In football, you kick the ball and you try to score a goal. In basketball, you throw the ball into a basket. In swimming, you race in a pool. Which sport do you like?",
  "Ana climbs mountains. She also goes skiing and surfing. For her, sport is life. She has a medal from a race. “I want to be a champion,” she says. Her coach smiles and says: “You can do it!”",
  "The race starts at ten. Fifty people are on the line. The referee shouts: “Go!” They run fast. A young woman wins the race and receives a gold medal. Her supporters shout and cheer. She is the new champion.",
  "My brother plays rugby and golf. He wants to be a champion one day. His coach helps him with training. He throws, catches, kicks and runs. On Saturday he scores two goals in a match and wins a medal.",
  "At the sports centre there are many activities: volleyball, swimming, tennis, skating and sailing. There is a coach for each sport. You can win a medal in a race. The supporters sit and watch the match.",
  "Last weekend I went surfing for the first time. I fell many times, but I did not stop. I wanted to win a medal like a champion. At the end I stood on the board for ten seconds. The coach shouted: “Great!” and the supporters clapped.",
  "In the final match, the score is two to two. In the last minute, the player kicks the ball and scores a goal. The supporters shout. The referee says “end” and the team becomes the champion of the year.",
];

CLOZE.travel = [
  "Next month we go on a trip to London. We book the flight, take our passports and pack our suitcases. At the airport we go to gate fifteen. Our plane leaves at ten. It is a short journey.",
  "A tourist arrives at the hotel. At reception he shows his passport. “Welcome!” says the receptionist. “Here is your key.” The tourist takes his luggage and goes to his room. Tomorrow he goes sightseeing with a guide.",
  "Ana travels abroad for the first time. She packs her suitcase, takes her passport and boarding pass, and goes to the airport. At the gate there is a delay. “Our flight is late,” says the guide. “Please wait.”",
  "Last summer we visited Spain. We booked a hotel, took the plane and spent a week in the sun. We went sightseeing, bought souvenirs and ate delicious food. It was a great trip, and we want to go back.",
  "Do you need a visa? In some foreign countries you need a visa, in others you do not. Check your passport, book your flight and pack your luggage. At customs, show your passport and answer the questions.",
  "A tourist wants a souvenir. He goes to a shop near the hotel and buys a small gift for his mother. The guide says: “Do not forget your passport.” At the airport he checks in, passes the gate and boards the plane.",
  "The flight is cancelled! The tourists are angry. At reception, a man says: “We can book another flight for tomorrow.” Many tourists stay at the hotel. The next day the plane takes off, and the journey continues.",
  "Pedro packs his luggage for a trip abroad. He puts in clothes, a book and a camera. His boarding pass is in his pocket. At the gate, a woman checks his passport. “Have a good flight!” she says.",
  "A good guide knows the city and its history. He shows the tourists the old streets, the museums and the best restaurants. After sightseeing, the tourists buy souvenirs and take photos. At night they return to the hotel.",
  "When you travel, remember: book early, pack light, take your passport and boarding pass, arrive early at the airport, and keep your luggage with you. If there is a delay, wait calmly. Enjoy the journey!",
];

CLOZE.travel2 = [
  "At the airport, first go to the check-in desk. Show your passport and give your luggage. Then go through security check. Look at the departures board and find your gate. Passport control is before the plane.",
  "Maria has a window seat. Her brother has an aisle seat. The cabin crew welcomes the passengers. The plane takes off. There is some turbulence and the flight attendant asks everyone to stay in their seat.",
  "After a long flight the plane lands. The passengers go to passport control, then to the baggage claim. They wait for their luggage on the conveyor belt. “That is my bag!” says Pedro. He takes it and walks to arrivals.",
  "Tom has a stopover in Paris. He waits at the departures area for three hours. He buys a gift at the duty-free shop and checks his hand luggage. At boarding he shows his boarding pass and passport.",
  "On the plane there is a life jacket under each seat. The flight attendant shows how to use it. Hand luggage goes in the overhead locker. The cabin crew says: “Ladies and gentlemen, we take off in five minutes.”",
  "Ana loses her bag at the airport. She goes to lost property. A man writes her details and says: “We call you when we find it.” An hour later her bag is on the conveyor belt at the baggage claim. “Thank you!” says Ana. “I have a long stopover now.”",
  "A flight attendant helps a passenger. “Excuse me, where is my seat?” “It is a window seat, number ten.” “Thank you.” The passenger puts his hand luggage in the overhead locker and sits. The plane is ready for take off.",
  "Arrivals and departures: arrivals are where you meet people who land. Departures are where you check in and take off. At the baggage claim you wait for your luggage. At passport control you show your passport.",
  "Pedro is afraid of turbulence. The flight attendant smiles and says: “It is normal. Stay in your seat and fasten the seat belt.” He holds his seat. A few minutes later the plane lands safely. “I did it!” he says.",
  "Before boarding, go through security check and passport control. Find your gate and wait. When the cabin crew calls your number, give your boarding pass, take your hand luggage and find your seat. Enjoy your flight!",
];

CLOZE.technology = [
  "I use technology every day. I use my phone to send a message and make a video call. I use my laptop to search the internet and visit a website. The battery of my phone is low, so I need to charge it. The wifi at home is fast.",
  "Tom buys a new laptop. It has a big screen and a good keyboard. He turns it on, connects to the wifi and downloads an app. Then he searches the internet and updates the software. “Technology is great!” he says.",
  "Ana shares a video on social media. Her friends click on it and write a message. She also takes a photo with the camera of her phone. Then she turns off the screen, puts the phone to charge and sleeps.",
  "Your password is secret! Do not tell it to anyone. Use a long password with letters and numbers. When you visit a website, check it is safe. Always update your apps and turn off the wifi when you do not use it.",
  "My brother uses headphones to listen to music. He downloads songs from the internet and watches videos on his laptop. He has a printer at home, and he prints his files for school. He spends a lot of time on the screen.",
  "How to download an app: open the store, search the name, click the button and wait. When the file is ready, turn on the app. Put your password and start. If the battery is low, charge your phone first.",
  "Maria calls her mother on video. She turns on the camera and clicks on the call button. The wifi is slow, so the video stops. She turns off the screen, charges the battery and calls again. “Now I can see you!” says her mother.",
  "At school we use a laptop and a printer. The teacher sends a file by message. We download it, read it and print it. For homework we search the internet and visit different websites. Technology helps us to learn.",
  "I do not like my phone's battery. It dies in three hours. I charge it every night. I use social media only to send a message or look at a photo. My keyboard is small, so I make mistakes when I write fast.",
  "Update your phone! A new update has a better camera, a faster app store and more battery life. Click the button, download the file and wait. Turn the phone off and on again. Now your technology is new.",
];

CLOZE.technology2 = [
  "I have a smartwatch, a speaker and a pair of earphones. I use Bluetooth to connect them to my phone. The charger and the cable are in my bag. My drone has a camera and a small battery. I love new technology!",
  "My email inbox is full of spam. I click on a link and open an attachment from my friend. I save the file in a folder on my laptop. The browser shows an icon on the screen. Everything is wireless at home.",
  "Tom has a USB stick, a hard drive and a scanner. He scans a photo and saves it in a folder. The memory of his computer is small, so he uses the hard drive for big files. He plugs the cable and waits.",
  "The touchscreen is clean. Ana taps the icon with her finger and opens the browser. She uses the microphone to talk to her phone. She hears the answer from the speaker. “Technology listens to me!” she says.",
  "Pedro connects his earphones with Bluetooth. He plays a song on the speaker. Then he opens an attachment from his inbox, clicks on a link and downloads a file. His phone charger is wireless, so he does not need a cable.",
  "A pixel is a very small point on the screen. A screen with many pixels has a better picture. A drone has a camera with a high number of pixels and a wireless link to your phone. A scanner makes a copy of a photo or a paper, and a speaker plays the sound.",
  "Sofia gets an email with an attachment. She opens the inbox, reads the message and clicks on the link. She saves the file in a folder and sends it to the printer. There is a lot of spam too, but she deletes it.",
  "Excuse me, do you have a charger? My battery is low. I have the cable, but I do not have the charger. I want to charge my smartwatch, and I need a USB stick and a speaker too. Thank you, you are very kind!",
  "At the technology shop: smartwatches, speakers, earphones, drones, scanners, hard drives, USB sticks and wireless chargers. The shop assistant says: “All these have Bluetooth and a good memory. Which one do you want?” The customer says: “I want a smartwatch, please.”",
  "My laptop has a touchscreen and a good microphone. I use the browser to search the internet, a folder to save my files and an icon to open my favourite apps. With a wireless speaker I can listen to music anywhere.",
];

CLOZE.appliances = [
  "In my kitchen there is a cooker, an oven and a microwave. There is also a washing machine, a dishwasher, a kettle and a toaster. I use the kettle for tea and the toaster for bread. The fridge is always cold.",
  "Ana cleans the house. She uses the vacuum cleaner, the iron and the washing machine. The television is on in the living room. She turns on the fan because it is hot, then switches off the light and sits down.",
  "It is cold, so the heating is on. In summer we use air conditioning or a fan. The clock on the wall says seven. The alarm clock rings at six. I turn it off, switch on the light and get up.",
  "Pedro has no electricity. The light bulb does not work. He looks for the plug and the socket. He presses the switch, but nothing happens. He calls an electrician. “It is a problem with the electricity,” says the man.",
  "Use the remote control to change the channel on the television. Use the switch to turn on the light. Use the plug and the socket to turn on the iron. Be careful with electricity. Never touch it with wet hands.",
  "My mother uses the cooker to boil water and make soup. She puts the cake in the oven. The microwave makes the food hot in two minutes. The dishwasher cleans plates and glasses. It is a modern kitchen.",
  "In the bathroom there is a hairdryer and a heater. Sofia dries her hair with the hairdryer and then turns it off. In the bedroom there is an alarm clock and a television. The remote control is on the bed.",
  "A washing machine washes clothes. A dishwasher washes plates. An iron makes clothes flat. A vacuum cleaner cleans the floor. A kettle boils water. A toaster makes toast. A microwave heats food fast. What do you use most?",
  "The fan is broken! Tom looks at the plug and the socket. He changes the light bulb and checks the switch. Still nothing. “Let us call someone,” he says. His wife answers: “No, you need to turn on the electricity first!”",
  "At the shop: “Excuse me, I want a new kettle, a toaster and a vacuum cleaner.” “Of course. This kettle is cheap and this toaster is good.” “And the remote control for my television?” “It is over there.”",
];

CLOZE.professions = [
  "My father is an engineer and my mother is a lawyer. My brother is a driver. My sister is a chef. My uncle is a farmer and my aunt is a nurse. In my family there are many different jobs. What is your job?",
  "A police officer helps people and keeps the street safe. A firefighter puts out fires. A pilot flies planes. A singer sings songs. An actor works in films. An artist paints pictures. A writer writes books.",
  "Tom is a journalist and a writer. He writes the news for a newspaper. Every day he talks to many people. His wife is a programmer. Her brother is an engineer. In the evening they talk about their work.",
  "Ana is an accountant. She works with numbers and money. Her brother is an electrician. He repairs lights and sockets. Their father is a retired builder. He loves to build things in his garden. Their mother is a baker and works at night.",
  "The baker gets up at four. He makes bread and cakes. The hairdresser cuts hair. The mechanic repairs cars. The shop assistant helps customers. The manager has meetings. The secretary answers the phone. The farmer feeds the animals, and the driver takes the goods.",
  "Sofia is a pilot. She flies to London twice a week. Her husband is a chef in a restaurant. Her father is a retired lawyer and her brother is a journalist. They all work long hours. At the weekend they rest and cook together. “Our jobs are difficult, but we like them,” she says.",
  "What do you want to be? I want to be a chef. My friend wants to be an actor. My sister wants to be a writer. My brother wants to be an engineer. And my cousin wants to be a pilot. We all have dreams.",
  "Pedro is a driver. He drives a lorry in Spain and France. He is often away from home. His wife is a secretary. His son wants to be a mechanic. His daughter wants to be a singer. They are a happy family.",
  "Grandfather is retired. He was a farmer for forty years. His son is an engineer and his daughter is a lawyer. Now he reads the newspaper and visits his friends. “I miss my work,” he says, “but I love my rest.”",
  "A good manager is kind and organised. A good lawyer knows the law. A good accountant counts well. A good builder makes strong houses. A good chef cooks delicious food. A good hairdresser listens to the customer. A good pilot is calm and a good engineer is clever.",
];

CLOZE.countries = [
  "I am from Portugal. My nationality is Portuguese and my language is Portuguese. The capital of my country is Lisbon. My friend is from Spain, so he is Spanish and speaks Spanish. Our countries are neighbours in Europe.",
  "The world has many countries and many languages. In France they speak French. In Germany they speak German. In England and America they speak English. In Brazil they speak Portuguese. What language do you speak?",
  "Tom is from Ireland. His flag is green, white and orange. His wife is Brazilian and her flag is green and yellow. Their children speak English and Portuguese. They visit Brazil every year in summer.",
  "Look at the map of the world. Europe is a continent with many countries: Portugal, Spain, France, Germany, England and Ireland. Africa is a big continent. China and Japan are in Asia. America is far from Europe.",
  "Ana travels to many countries. Last year she visited France and Spain. This year she wants to visit Japan and China. She learns Japanese and Chinese. “The world is big,” she says, “and every country has a language and a flag.”",
  "What is your nationality? I am Portuguese. My wife is French. Our friend is Brazilian and our neighbour is Spanish. We live in England, and we speak English at work. At home we speak Portuguese and French.",
  "The capital of France is Paris. The capital of Spain is Madrid. The capital of Germany is Berlin. The capital of Brazil is Brasília. The capital of Japan is Tokyo. Do you know the capital of China?",
  "At school the world map is on the wall. The teacher points to each country: Portugal, Spain, France, Germany, England, Ireland, Brazil, America, China, Japan and Africa. “Tell me the language of each country,” she says.",
  "My neighbour is from China and she speaks Chinese. Her husband is from Japan. They live in Europe now. Their children speak English at school. They have two flags at home: one Chinese and one Japanese.",
  "Football brings the world together. Portugal, Spain, France, Germany, England and Brazil are famous football countries. During the world cup every flag is on the street, and every nationality is in the stadium. People from different countries share one language: football.",
];

CLOZE.people = [
  "My brother is tall and slim. He has curly blond hair. My sister is short and pretty. She is very kind and friendly. My father is strong and handsome. Everyone in my family has a different personality.",
  "What does your friend look like? He is young, tall and strong. He has short hair and brown eyes. He is polite and funny. He is never rude. Everyone likes him. His age is twenty-two.",
  "Ana is shy but very clever. She is honest and kind to everyone. She is not lazy: she studies every day. Her sister is the opposite: she is funny, generous and not shy. They are very different but great friends.",
  "A good friend is honest, kind and generous. He is polite and never rude. He is funny and friendly. He is not lazy and he is never mean. What qualities do you like in a person?",
  "Look at that man. He is tall and slim, with curly blond hair. He is young, handsome and strong. He looks friendly, but he is a bit shy. His personality is kind and funny. His age? About thirty.",
  "My grandmother is old, but she is not lazy. She is kind, funny and generous. She is pretty, with white curly hair. She is very polite and never rude. “Age is just a number,” she says with a smile.",
  "The new teacher is young and friendly. He is tall, with short blond hair. He is clever and polite. The students like him because he is funny and honest. “I think he is a great person,” says a girl.",
  "Tom is lazy and Pedro is not. Tom is rude and Pedro is polite. Tom is shy but Pedro is friendly and funny. They are brothers, but their personalities are very different. They still love each other.",
  "Sofia describes her best friend: “She is short, slim and pretty, with curly blond hair. She is clever, kind and generous. Her age is twenty. She is a little shy, but she is very friendly when you know her.”",
  "In my class there are different people: a tall boy, a short girl, a clever student, a shy girl, a funny boy and a lazy student. They are all friendly. I think the best thing is that every person is special.",
];

CLOZE.opposites = [
  "Opposites: fast and slow, full and empty, clean and dirty, high and low, wide and narrow, thick and thin, long and short, noisy and quiet, rich and poor, wet and dry, safe and dangerous, true and false.",
  "The car is fast but the bicycle is slow. The glass is full but the bottle is empty. The room is clean but the kitchen is dirty. The mountain is high and the valley is low. The road is wide and the path is narrow.",
  "The street is noisy at night, but the garden is quiet. The man is rich and the woman is poor. The towel is wet and the shirt is dry. The bridge is safe, but the road is dangerous. Is it true or false?",
  "Pedro says: “The lesson is long and the book is thick.” Ana says: “That is false! The book is thin and the lesson is short.” The teacher says: “You are both wrong. The book is thick but the lesson is short.”",
  "The river is wide, the bridge is long and the road is narrow. The water is dry in summer and wet in winter. The city is noisy, but the country is quiet. The beach is safe, but the mountain is dangerous.",
  "A true story is not false. A rich man is not poor. A high mountain is not low. A fast train is not slow. A full bus is not empty. A clean room is not dirty. Opposites help us to learn new words.",
  "My room is clean and quiet. My brother's room is dirty and noisy. His bag is full, but mine is empty. His desk is high and mine is low. We are very different, but we are close and we never fight.",
  "In the lesson: Is this answer true or false? It is wrong! Is the answer long or short? It is short. Is the exercise easy or difficult? It is difficult. Is the class noisy or quiet? It is quiet.",
  "The weather is wet today. The road is narrow, so it is dangerous. The car is slow and the traffic is heavy. Tomorrow the day is dry and the street is safe. The sun is high in the sky, and people are happy.",
  "Rich and poor: a rich man has a lot of money, a poor man has little. But a rich man is not always happy, and a poor man is not always sad. What is important is to feel safe, to have a clean home and a quiet life, and to be kind.",
];

CLOZE.services = [
  "I write a letter to my aunt. I put it in an envelope and add a stamp. I go to the post and give the letter to the postman. He delivers the letter the next day. My aunt is happy to receive it.",
  "At the post office: “Good morning. I want to send this parcel to Spain.” “Of course. Do you have an envelope and a stamp for the letter too?” “Yes.” “The parcel costs ten euros.” “How long does the delivery take?” “Three days.” “Thank you.” She pays and the postman takes the parcel.",
  "I need a haircut. I go to the barber at ten. He cuts my hair in thirty minutes. Then I go to the laundry to take my clothes. The opening hours are from nine to six. Then I go to the petrol station.",
  "The bank has services for its customers: an account, a credit card and a cashpoint. Tom opens an account and gets a credit card. Then he uses the cashpoint to take some money out. “Great service!” he says.",
  "Tourist information: if you visit a new city, go to the tourist information office. They give you a map and tell you the opening hours of the museums. They also help you with services like repair shops or a laundry.",
  "In an emergency call the police or the fire brigade. The police help with crime and accidents. The fire brigade puts out fires. Remember the number and give your account of the problem and your address. Stay calm and wait for help. Do not visit the place until the police say so.",
  "My bike is broken. I take it to a repair shop. The man looks at it and says: “I can repair it by tomorrow.” I leave it there and visit the post office to send a parcel. The next day I return. “How much?” “Fifteen euros.” “Thank you!”",
  "The library card is free. You show your library card at the library and borrow books. The opening hours are from nine to five. You must return the books after three weeks. It is a great service for everyone, like the post, the bank account and the laundry.",
  "Sofia visits the post office. She buys a stamp, sends a letter and a parcel, and checks her account at the cashpoint. Then she goes to the petrol station. She pays with her credit card and drives home.",
  "A postman delivers letters and parcels. A barber gives a haircut. A mechanic does repairs. A librarian helps with books. The police protect people. The fire brigade puts out fires. We use many services every day.",
];

CLOZE.countryside = [
  "I live in a village in the countryside. Near my house there are fields, a forest and a hill. In the valley there is a lake and a river. The air is clean and the nature is beautiful. I love the countryside.",
  "Grandfather has a farm. There are fields with flowers and grass. In the wood there are plants and trees. On the hill there are sheep. At night the moon and the stars are bright. The air is fresh. “Life here is good,” he says.",
  "A path goes through the forest to a lake. We walk there on Sunday. The grass is green and the flowers are red and yellow. A bird sings. The air is clean. We sit near the water and look at the hills.",
  "An island is land in the sea or in a lake. The ocean is very big. A desert is a dry place with sand. A rainforest is a wet place with many trees. Nature is full of different places.",
  "In spring the plants grow and the flowers open. The grass is green and the air is warm. The valley is full of colour. Farmers work in the fields. Children walk on the path to the lake. It is a beautiful season.",
  "Tom goes camping in the forest. He sees the moon and the stars at night. In the morning he hears birds. He walks along a path to a hill and sees a valley and a lake. “What a view!” he says. “Nature is wonderful.”",
  "The farm has many things: fields, plants, trees and a small wood. The farmer grows vegetables. His wife grows flowers. Their children play on the grass. In the evening the air is quiet and the stars come out.",
  "Look at this picture: a hill, a valley, a river, a path, a forest and a village. In the sky there is a bright moon and a star. The island is in the lake. It is a perfect place to relax and enjoy nature.",
  "Ana loves nature. She visits the countryside every month. She walks in the forest, sits on the grass and looks at the flowers and plants. She breathes the fresh air and feels happy. “I need nature,” she says.",
  "Plants need water, air and the sun to grow. A flower needs rain. A tree needs many years. A forest is full of life. Nature is beautiful, but we must take care of it. The countryside is our home too.",
];

CLOZE.entertainment = [
  "I love films. On Saturday I go to the cinema and watch a comedy or a horror film. My sister prefers music. She listens to the radio and goes to concerts with her favourite band. Her favourite song is very famous.",
  "Tom reads a novel and a magazine every week. In the evening he watches the news on television. He changes the channel to see a series. His favourite series has an exciting episode each Friday. “It is never boring,” he says.",
  "Last night we watched a scary film with subtitles. It was a horror story and it was very exciting. My sister was afraid and covered her eyes. After the film we talked about the story and the actors.",
  "The theatre is a great place to have fun. Maria goes to a comedy there every month. The story is funny and the actors are famous. The audience laughs a lot. “It is never boring,” she says.",
  "On the radio there is a song from my favourite band. The channel plays music all day. In the evening there is the news. I read a newspaper and a magazine, and I watch a series on television. Music and films are everywhere!",
  "A new film is at the cinema. It is a comedy with subtitles. The story is funny and the actors are famous. Many people watch it. The film is not boring, and it makes everyone laugh. I want to see it again.",
  "Pedro writes a novel. It is a story about a famous band. The first episode is exciting. He reads it to his friends, and they love it. “Write more!” they say. Pedro smiles and goes on writing.",
  "What do you watch on television? I watch the news, a series and a comedy. My brother watches football. My mother prefers a film. My father reads a newspaper. We change the channel many times.",
  "The concert starts at eight. The band plays famous songs, and the audience sings. The music is loud and exciting. At the end, everyone shouts for more. “Best concert ever!” says Ana. “It was not boring at all.”",
  "Subtitles help you to learn English. Watch a film or a series with English subtitles. Listen to the radio and to songs, and read a novel or a magazine. This can be fun and also a good way to study.",
];

CLOZE.holidays = [
  "This summer we go to the seaside. We stay at a resort with a balcony and a view of the sea. During the day we sunbathe and swim. We wear suncream and a swimsuit. In the evening we watch the sunset. It is very relaxing.",
  "Tom and Maria go camping. They put the tent next to a lake. They make a picnic and go on a hike. At night they look at the stars. “This is better than a hotel,” says Tom. “Nature is perfect.”",
  "At the hotel: “Good evening. I want a double room for two nights, please.” “Of course. Check in is at two and check out is at eleven. The room has a balcony with a view.” “Thank you very much!”",
  "A cruise is a holiday on a big ship. You sleep in a room with a bed, you eat on board and you visit different places. There is an excursion in every port. At night you watch the sunset from the balcony.",
  "On holiday I take a backpack, a swimsuit, suncream and a postcard to send. I always send a postcard to my grandmother. She loves to receive them. The beach is crowded, but the sunset is always beautiful.",
  "Sofia likes to hike in the mountains. She takes a backpack with water and a picnic. The view from the top is great. She sends a postcard to her family. “It is relaxing,” she says, “and I love nature.”",
  "At the resort there is an excursion every day: a hike, a trip to the village or a day on the sea. The guide says: “Take suncream and a hat.” The tourists take their backpacks and go. In the evening they relax on the balcony.",
  "Our double room has a balcony with a view of the sea. There are two beds, a table and a bathroom. We check in at three and check out at ten. The resort is not crowded, which is perfect for a relaxing holiday.",
  "The beach is crowded in August. People sunbathe, swim and have a picnic. Children build castles in the sand. Parents use suncream. A man sells ice cream. At sunset everyone goes home. It is a great summer day.",
  "A single room is for one person. A double room is for two. Check in is when you arrive and check out is when you leave. A resort has a pool and a restaurant. A tent is for camping. A cruise is a holiday on a ship.",
];

CLOZE.cooking = [
  "Today I follow a recipe for a cake. The ingredients are flour, sugar, eggs, butter and milk. I mix everything in a bowl and stir. Then I pour the mixture in a pot and bake it in the oven for one hour.",
  "To make soup: peel and chop an onion, a carrot and a potato. Fry the onion in oil in a pot. Add water, salt and the vegetables. Boil for twenty minutes. Stir and taste. Pour the soup into a bowl. Enjoy!",
  "Ana makes a salad. She slices a tomato and a cucumber and chops the lettuce. She puts everything in a bowl. She adds oil, salt and a little honey. Then she stirs. “This is easy,” she says, “and healthy.”",
  "In the kitchen: a frying pan for fried eggs, a pot for soup and a bowl for the salad. We use a grill for fish and an oven for bread. Flour, sugar, salt and oil are in the cupboard. Cream and honey are in the fridge.",
  "Pedro learns to cook. First he reads the recipe. Then he gets the ingredients: flour, sugar, cream and eggs. He mixes, stirs and bakes. The cake is not perfect, but it is tasty. “Next time it will be better,” he says.",
  "How to make pancakes: put flour, sugar and a little salt in a bowl. Add milk and an egg. Stir well. Heat a frying pan with a little oil. Pour the mix and fry it for two minutes on each side. Add honey or cream.",
  "Raw food is not cooked. Some foods are good raw, like fruit and salad. Other foods, like meat and fish, need cooking. You can boil, fry, bake or grill. What is your favourite way to cook?",
  "My grandmother is a great cook. She chops vegetables, peels potatoes and fries fish. She bakes bread and makes cakes with honey and cream. She boils soup in a big pot and grills meat. Her kitchen smells great. “Cooking is love,” she says.",
  "Check the recipe before cooking. You need: one pot, one frying pan, one bowl and a knife. Ingredients: flour, sugar, salt, oil, eggs and milk. First chop, then add, stir and bake. Enjoy your meal!",
  "Sofia makes dinner: grilled fish with boiled potatoes and a salad. She peels the potatoes, boils them in a pot and grills the fish. For dessert she bakes a cake with honey and cream. Everyone loves her cooking.",
];

CLOZE.housework = [
  "Saturday is the day of housework. I sweep the floor, mop the kitchen and dust the shelf. My brother tidies his room and makes the bed. My mother does the washing-up. My father takes out the rubbish.",
  "Ana has many chores. She hangs the clothes, folds the towels and changes the sheets and the pillow cases. She puts a blanket on the bed and closes the curtains. “Housework is never finished,” she says.",
  "In the cupboard there is a broom, a bucket, a sponge and soap. Tom takes the broom and sweeps the floor. Then he fills the bucket with water and soap and mops. He uses a sponge to clean the table and a towel to dry it.",
  "The house is dirty. Pedro takes the rubbish to the bin. He mops the floor, dusts the furniture and tidies the sofa. Then he washes the curtains, folds a towel and hangs it. “Now the house is clean,” he says.",
  "Every day we have to make the bed, do the washing-up, take out the rubbish and tidy our rooms. On Saturday we also mop the floor and change the sheets. Everybody helps and the house is always clean and tidy.",
  "Rita changes the sheets and the pillow cases. She puts a clean blanket on the bed and opens the curtains. Then she sweeps the floor and mops the bathroom. She uses soap and a sponge. “I love a clean house,” she says.",
  "The washing-up is the job nobody likes. We take the plates, use soap and a sponge, and put them on a towel. Then we dry them. If we do it together, it takes ten minutes. After that we take the rubbish to the bin.",
  "Chores in our house: Mother makes breakfast and does the washing-up. Father sweeps and takes out the rubbish. I make my bed and dust my shelf. My sister folds the towels and hangs the washing. Everyone helps.",
  "Look at the clean house: the floor is mopped, the sheets are fresh, the curtains are open, the pillow is on the bed and a blanket is folded. The bin is empty. The broom and the bucket are in the cupboard.",
  "How to tidy a room: pick up the clothes and fold them, make the bed, dust the shelf and sweep the floor. Take the rubbish to the bin. Open the curtains to let the light in. Now your room is clean and tidy!",
];

CLOZE.banking = [
  "I borrow money from my brother because I do not have enough cash. I owe him twenty euros. Next week I pay him back. In my wallet there are a few coins and two notes. I keep my pocket money in a purse.",
  "Ana goes to the bank. She wants to withdraw some money and make a deposit. She checks her balance and asks about a loan. The bank worker says: “The interest is low.” She decides to think about it.",
  "I pay rent every month for my flat. I also pay tax on my salary. After that, I save a little. Sometimes I need to borrow money, but I try not to. A bargain is something worth the price.",
  "Tom travels to England. He needs to change euros to pounds. The currency exchange office gives him a good rate. He puts the notes in his wallet and the coins in his pocket. “Now I can afford a coffee,” he says.",
  "My pocket money is ten euros a week. I save half in my purse. When I want something expensive and I cannot afford it, I ask my mother to lend me some money. I pay her back with my pocket money. I owe her five euros right now.",
  "A bank account has money you can use. You can deposit and withdraw. If you have enough money you can save. If you do not, you can ask for a loan and pay interest. Always check your balance and read the paper.",
  "Pedro finds a bargain: a good jacket for only twenty euros. It is worth much more. He can afford it, so he takes it and goes to pay. The cashier says: “Cash or card?” Pedro says: “Card, please.” He keeps his notes and coins in his wallet, because he does not want to owe anyone money.",
  "Money is made of notes and coins. A wallet is for notes; a purse is for coins. You can borrow, lend, owe, afford, deposit and withdraw. Every country has a currency, and a bank can give you a loan with interest. In Europe the currency is the euro.",
  "Sofia opens a bank account and makes a deposit. She asks for a cheque book and a card. She asks about interest and about a loan. The worker explains everything. “Thank you,” says Sofia. “That is very helpful.”",
  "Rent, tax, bills: these are costs we have to afford. Sometimes we lend money to friends; sometimes we borrow. It is important to know the balance of our account, to avoid owing too much and to look for a bargain.",
];

CLOZE.fashion = [
  "Fashion is important to Ana. She loves a silk blouse, a leather handbag and cotton trousers. She wears sunglasses and a bracelet. Her friend prefers a wool sweater and trainers. “Everyone has a different style,” says Ana.",
  "In winter I wear a wool sweater, leather gloves and a warm scarf. In summer I choose a cotton shirt, sandals and sunglasses. I like clothes with a nice pattern, but my father says they are old-fashioned.",
  "At the shop Maria looks for a necklace and a pair of earrings. She tries a silk blouse with long sleeves and a collar. The shop assistant says: “This pattern is very fashionable.” She buys a bracelet too.",
  "The school uniform has a white blouse or shirt with a collar, a sweater and dark trousers or a skirt. The buttons are blue. In winter the students wear gloves. “Uniform is practical, but it is a bit boring,” says a girl.",
  "Pedro is not interested in fashion. He wears old trainers, a cotton shirt, a wool sweater and the same jeans every day. His sister says: “Your sweater is old-fashioned!” He smiles and says: “I am comfortable.”",
  "A leather handbag is expensive but lasts for years. A cotton shirt is cheap and light. A wool sweater is warm. A silk blouse is soft. Which material do you prefer? I love leather and wool for winter.",
  "Sofia sprays perfume and puts on her earrings. She wears a silk blouse with a pattern, a leather handbag and sandals. “You look great!” says her mother. “It is the fashion this summer,” she answers.",
  "Look at the pattern of this sweater: it has small red buttons and long sleeves. The collar is wool. It is very warm. The gloves are leather and the sunglasses are black. A perfume and a bracelet complete the gift.",
  "The teacher wears a uniform at the museum. It is a blue blouse with a collar and cotton trousers. She changes her clothes after work: cotton trousers, a wool sweater, trainers and a necklace. “Fashion is fun,” she says.",
  "At the party everyone wears something special: a silk blouse, a leather jacket, earrings, a bracelet. Rita wears a necklace and sandals. Pedro wears a wool sweater and trainers. “Your pattern is lovely,” says a friend.",
];

CLOZE.fashion2 = [
  "On the catwalk the models wear silk, lace and velvet. A dress has a lace hem. A jacket has a velvet collar. The shoes have a stiletto heel. Fashion is art, and the audience loves it.",
  "Ana puts on make-up: mascara on her eyelashes, lipstick on her lips. She ties her hair in a ponytail or a plait. She wears a denim jacket and a brooch. “Simple but elegant,” says her friend.",
  "My grandfather is bald and has a moustache. He has a lot of wrinkles on his face. My brother has a tattoo on his arm and a fringe on his forehead. My sister has freckles on her nose.",
  "In winter I wear wool mittens and a hat. My boots have a thick sole. My coat has a velvet collar and a belt with a gold buckle. A brooch on my coat makes it more special. I love winter fashion.",
  "A wig is false hair. Actors on stage often wear a wig. The catwalk model has a long wig, red lipstick and black mascara. She wears a denim dress with a lace hem. It is a modern look.",
  "Sofia gets a tattoo on her wrist. She also wants a fringe and a ponytail, and a wig for the party. Her mother says: “You are young, but be careful with a tattoo. It never goes away.” Sofia smiles and says: “I know, mum.”",
  "Denim is for jeans, lace is for dresses, velvet is soft and thick. A buckle closes a belt. A sole is under a shoe. A hem is the edge of a skirt. A brooch is a small pin for a coat.",
  "Tom has a moustache but he is not bald. He has a few wrinkles and freckles. He wears a denim jacket, mittens in winter and shoes with a thick sole. “A moustache is my style,” he says.",
  "At the catwalk show the models walk. Their make-up is perfect: dark mascara and red lipstick. One wears a wig, another a ponytail, a third a plait. The dresses have lace and velvet. The audience loves it.",
  "Rita wears a velvet dress with a lace hem. She puts on mascara and lipstick and wears stiletto shoes. She fixes a brooch to her dress and her hair in a plait. “You are ready for the catwalk!” says her friend.",
];

CLOZE.home = [
  "My cottage is small. On the ground floor there is a hall, a dining room and a kitchen. There is an armchair near the fireplace and a bookcase on the wall. I put a candle on the table and a cushion on the sofa.",
  "Tom has a new flatmate. They share the furniture: a freezer, a heater and a cupboard in the kitchen. In the bathroom there is a basin and a mug for toothbrushes. They put a carpet in the hall.",
  "Look at the dining room: a table with six chairs, a candle in the middle, a carpet on the floor and a bookcase on the wall. The ceiling is high. A heater is in the corner. It is a warm, nice room.",
  "Grandmother's house has central heating, a big freezer and an old cupboard. In the bedroom there is a duvet, a cushion and a drawer full of clothes. On the ground floor there is an armchair, a carpet and a bookcase.",
  "Ana moves to a new flat with a flatmate. They buy furniture: an armchair, a bookcase, a cupboard and a carpet. They put a ladder in the hall. “Our new home is lovely,” says Ana. “Welcome!”",
  "At night I sleep under a warm duvet with a soft cushion. In the morning I take a mug of tea to the dining room. The central heating is on, and the carpet is warm under my feet. The ceiling light is bright.",
  "In the drawer there is a lock and a key. The cupboard is next to the freezer. The ladder is in the hall. The candle is on the table in the dining room. The heater is under the window. Where is the cushion?",
  "A cottage in the countryside: on the ground floor, a hall, a dining room, a kitchen with a freezer and a cupboard. Upstairs, two bedrooms with a duvet each. In the living room, an armchair, a bookcase and a carpet.",
  "Pedro shares a flat with a flatmate. They have a big freezer, a heater and central heating. Pedro keeps his mug on the shelf and his candle in the drawer. His flatmate keeps a ladder in the hall.",
  "How to make a room cosy: put a carpet on the floor, a cushion on the armchair, a candle on the table and a duvet on the bed. Check the lock on the door and the central heating. Now it is a lovely home.",
];

CLOZE.home2 = [
  "We renovate our house. A plumber fixes the leak in the bathroom. The boiler is old, so we install a new thermostat. We decorate the hallway with new wallpaper, and the staircase gets fresh paint. The attic is next.",
  "The cottage has a fireplace, a cellar and an attic. At the front there is a porch and a driveway. The roof has old brick and tile. The shutters on the windows are green. It is a lovely old house.",
  "Pedro finds mould in the cellar. There is also a leak in the roof. He calls a plumber, who says: “You need to renovate the boiler and the tiles.” Pedro decides to decorate the studio on the landing instead.",
  "The hallway is dark. We replace the bulb, put on new wallpaper and clean the staircase. At the top of the stairs, on the landing, there is a small studio. We decorate it for our guest.",
  "A plumber fixes a leak. An electrician replaces a bulb. A builder renovates a house with brick and tile. A painter decorates the hallway with wallpaper. A good home needs many people to work on the boiler, the staircase and the shutters.",
  "In winter we light the fireplace and turn on the boiler. We check the thermostat so it is not too hot. Under the stairs, in the cellar, we store food. In the attic we keep old furniture and boxes.",
  "Sofia has a studio near the landing. She painted the walls white and put new tiles on the floor. In front of the house there is a porch, and next to it a driveway for her car. “It is small but cosy,” she says.",
  "The shutters of the old house are open. There is a porch with a chair, and a driveway with a car. Inside, the fireplace is lit, the wallpaper is green and the staircase goes up to the attic. A cat sleeps in the hallway.",
  "A boiler gives hot water. A thermostat controls the temperature. A bulb gives light. A tile covers a floor or a wall. A brick builds a wall. A driveway is for a car. A porch is at the door. A cellar is under the house.",
  "Renovating a house is hard work. First, the plumber fixes the leak. Then the builders repair the brick and the tile. After that we decorate with wallpaper, replace the bulb and install a thermostat. The result is great.",
];

CLOZE.healthfit = [
  "Tom has a sore ankle after football. He cannot walk well. The chemist sells him a bandage and an aspirin. “Rest and lie down,” says the doctor. After a week he recovers. “Good health needs a good diet and exercise,” he says.",
  "To keep fit, eat a healthy diet with vitamins and exercise. Breathe well when you run. Avoid stress and sleep eight hours. If you are ill, rest. If you have an injury, see a doctor and follow the treatment.",
  "Ana has an allergy. When she eats nuts she gets a rash and her eyes itch. She always carries an aspirin and a bandage with her, and she follows her treatment. The doctor says: “Avoid nuts. If you feel ill, take the treatment and call me.” Ana says: “Thank you, doctor.”",
  "A child falls and has a wound on his knee. It bleeds a little. His mother cleans it and puts on a bandage. “Does it ache?” she asks. “A little,” he says. After two days the wound is better.",
  "Stress is bad for your health. It causes headaches, aches in the back and bad sleep. Try to rest, breathe slowly, keep fit and eat well. If the illness continues, see a doctor for treatment.",
  "A bone is hard and strong. If you injure a bone, you need treatment and rest. Pedro broke a bone in his ankle, so the doctor put on a bandage. “You will recover in six weeks,” he said. “Do not run until then.”",
  "I take vitamins every morning and an aspirin when I have a headache. I try to keep fit and have a good diet. If I feel ill I lie down and rest. If it is an infection, I see the chemist or the doctor.",
  "An illness can be an infection or an allergy. Treatment depends on the problem. The chemist helps with simple things: aspirin, a bandage, vitamins. For an injury or a serious wound, go to the doctor.",
  "Sofia has an injury: she hurts her ankle. She lies down with her foot up and puts on a bandage. The doctor says it is not serious. She takes an aspirin for the ache and drinks water. She recovers in three days.",
  "Keep fit with a good diet: fruit, vegetables, fish and vitamins. Breathe fresh air. Sleep well and avoid stress. If you have an infection or an allergy, follow the doctor's treatment. Health is the best thing we have.",
];

CLOZE.healthfit2 = [
  "I have a bad backache after the gym. My doctor says: “Your posture is wrong.” He recommends yoga and meditation. I use an ointment on my back and take a painkiller. After two weeks, I feel much better.",
  "Rita runs a lot. Jogging is her passion. But she gets a blister on her foot and a sore ankle. The paramedic says: “Rest, use an ointment and wear soft shoes.” Her pulse is normal. She keeps jogging after a week.",
  "The doctor looks at the scar on his arm. There is no swelling now. The stitches are out. He feels no itch or sore. “It is better now,” says the doctor. “No more painkillers or syrup.”",
  "Pedro faints in the street. A paramedic arrives, checks his pulse and gives him water. The doctor says: “Your cholesterol is high. You need a better diet and exercise: jogging and yoga help.” Pedro agrees.",
  "I have a cavity in my tooth. The dentist puts in stitches and a painkiller. For my cough I take syrup. For an infection the doctor gives me antibiotics. “Finish all the pills,” he says.",
  "Yoga and meditation are good for your posture and your mood. A flexible body is a healthy body. I do yoga for twenty minutes every day. I feel less backache, less stress and I sleep better.",
  "Ana has an itch and a rash. She uses an ointment, but the swelling continues. At the pharmacy she buys a syrup and a painkiller. The doctor says it is an allergy and gives her antibiotics for an infection.",
  "What to do if someone faints: lie them down, check their pulse, call a paramedic and wait. Do not give food or water. Keep the person calm. A paramedic arrives and checks the posture and the pulse.",
  "Tom has a blister on his heel, a scar on his knee and a backache. “Jogging is good, but you need good shoes,” says the doctor. He recommends an ointment for the blister and yoga for the backache. Tom is flexible now.",
  "The doctor writes: antibiotics for the infection, an ointment for the rash, syrup for the cough and a painkiller for the pain. The patient must also reduce cholesterol with diet and jogging. After a month everything is fine.",
];

CLOZE.environment = [
  "Climate change is a big problem. The planet is warmer because of pollution. We can help: we recycle, reduce waste and use public transport. Small actions are important. Our energy must be renewable, like solar power.",
  "On Saturday, Ana is a volunteer. She picks up litter at the beach. There is plastic, bottles and paper. “Pollution is terrible,” she says. They put the bottles in the bottle bank and recycle the paper.",
  "Global warming melts the ice and causes floods and drought. Many animals are endangered and some are extinct. We must reduce fuel use, plant trees and protect nature. Every resource is limited, and the damage is serious.",
  "Pedro goes to work by public transport to reduce pollution. At home he uses solar energy and recycles plastic. He does not waste water or food. “I am small,” he says, “but I can help the planet.”",
  "Recycling is easy: separate paper, glass and plastic. Use the bottle bank for glass. Reduce waste: use a bag, not plastic. Save energy: turn off the light. Every little action helps against climate change, pollution and litter.",
  "A flood destroyed the village after heavy rain. A drought destroyed the harvest last year. Scientists say these are effects of global warming. Many people volunteer to help. We need renewable energy and less pollution.",
  "The tiger is endangered, and some animals are extinct. People damage nature with pollution and waste. If we protect the forest and the ocean and reduce fuel use, we can save many species. Please recycle and be a volunteer.",
  "Solar energy is renewable. Fuel from oil is not renewable and causes pollution. Public transport reduces traffic and damage to the environment. The energy of the future is solar, wind and water, and we must reduce waste and recycle.",
  "Our school has a recycling project. Students collect plastic, paper and glass. The litter goes into different bins. The bottle bank is in the playground. A volunteer comes every week to take the waste to the factory.",
  "The planet is in danger: climate change, global warming, pollution, flood, drought. But we can act. Recycle, reduce, use public transport, save energy and volunteer. Together we can protect our resource: the Earth. It is our home and our future.",
];

CLOZE.environment2 = [
  "A volcano and a glacier change the land. A hurricane arrives and a tornado destroys a village. An earthquake shakes the city and a tsunami comes from the sea. Nature is powerful and sometimes terrible, and we must be ready.",
  "Wildfires burn the forest in summer. The smog covers the city and the emissions from cars and factories damage the air. The greenhouse effect warms the planet. We must reduce carbon dioxide and use fossil fuel less.",
  "In my garden I make compost with food waste. I use reusable bags and avoid packaging. I buy biodegradable products and use fertiliser from natural things. The ozone layer protects the Earth, and we must protect it too.",
  "The iceberg is in the sea and the glacier melts slowly. Scientists measure the erosion of the coast. After a landslide, the road is blocked. A hurricane brings heavy rain and floods. It is a hard year for nature.",
  "Toxic waste is dangerous, and factories must avoid it. Cars produce carbon dioxide, which causes smog. Fossil fuel such as oil and coal causes pollution. Reusable bottles and biodegradable packaging help the environment and the ozone.",
  "After the earthquake there was a tsunami. A volcano also erupted. Thousands of people left their homes. Volunteers brought food and water. A landslide closed a road, but a tornado did not reach the village.",
  "Tom and Ana grow vegetables with compost. They do not use toxic fertiliser. They bring reusable bags to the market and refuse plastic packaging. “Small things protect the ozone and the planet,” says Ana, with a smile.",
  "The glacier is smaller every year and the iceberg is breaking. The greenhouse effect and emissions are responsible. Erosion damages the coast. Wildfires burn in summer, and smog covers the cities. We need action now to protect the planet.",
  "A tornado is a strong wind that turns. A hurricane is a big storm on the sea. A volcano throws out hot rock. An earthquake shakes the earth. A tsunami is a huge wave. A landslide is falling earth and rock. A glacier is a river of ice, and an iceberg is a piece of it in the sea.",
  "Biodegradable packaging disappears in nature. Reusable bags last many years. Compost turns food waste into fertiliser. A good citizen avoids toxic products and plastic packaging, reduces emissions and protects the ozone layer and the planet.",
];

CLOZE.nature = [
  "In the jungle there are many species: a parrot on a branch, a monkey in the leaves, a mosquito near the water. There is a waterfall between the rocks. Scientists explore the wildlife of the planet.",
  "At the coast there is a cliff and a cave. On the beach there is sand and rocks. A dolphin swims in the sea and a shark appears far away. A seagull sits on a rock. It is a place full of wildlife.",
  "A kangaroo lives in Australia, a penguin in the cold south, a zebra in Africa. The fur of a bear is thick. A parrot has coloured leaves and a beautiful voice. Each species lives on a continent.",
  "The planet has many continents, and each has different wildlife. In the jungle there are parrots and monkeys. On the coast there are dolphins and sharks. In the cold there are penguins. Nature is rich and varied.",
  "Tom explores a cave near the coast. He walks on sand and sees a rock with a leaf. In the water there is a shark. “Nature is amazing,” he says, “but I do not want to meet a shark!”",
  "A mosquito is a small insect. It bites animals and people. The fur of a bear is thick. A leaf grows on a branch. A rock is hard. Sand is soft. A waterfall is water falling from a high place.",
  "Ana watches the wildlife documentary. She sees a kangaroo jumping, a dolphin swimming, a penguin walking and a parrot flying. “What beautiful species!” she says. “I want to explore the planet one day.” The documentary shows a jungle and a waterfall too.",
  "In the jungle the temperature is hot and the air is damp. Mosquitoes fly near the river. A waterfall falls from a cliff. A parrot sings on a branch. A tourist takes photos of the wildlife.",
  "Sharks and dolphins live in the ocean. A shark is dangerous, but a dolphin is friendly. A penguin swims too, but lives near the coast. Both are species that need protection, like the kangaroo and the parrot, and the wildlife in the jungle.",
  "We walk along the coast to a cave. The cliff is high and the rock is dark. We find a leaf and a little sand. In a pool there is a small fish. A seagull flies above. Nature gives us a perfect day.",
];

CLOZE.nature2 = [
  "On a walk in the meadow I see a fox near an oak tree. A deer runs between the pine trees. There are daisies, poppies and tulips in the grass. A lizard sits on a rock, and an insect flies near an orchid. Nature is full of life and colour.",
  "In the swamp there are many insects and a few lizards. The moss grows on the bark of the trees. Ivy climbs up the trunk of an oak. A bat sleeps in a cave. A fern grows near the water. It is a quiet, damp, green place.",
  "The canyon is deep and the boulders are huge. Small pebbles lie on the ground. A fox walks between the rocks, and a lizard sits in the sun. There are no trees, only a few ferns and moss. The view is amazing, and the silence is perfect.",
  "An acorn falls from the oak. A deer eats the grass in the meadow. The fox watches from the pine trees. The poppies are red, the daisies are white and the tulips are yellow. An orchid grows in the shade. Spring is here.",
  "Flowers and plants: a daisy is small and white, a poppy is red, a tulip has beautiful colours and an orchid is rare and elegant. Ivy is a plant that climbs, moss is soft and green, and a fern has long leaves.",
  "Tom studies the trees. An oak has acorns and strong bark. A pine has thin green leaves. The trunk of the oak is wide and the bark is rough. Ivy climbs on one trunk and moss grows on another. He takes photos of every tree.",
  "A bat flies at night and sleeps in a cave in the day. A fox hunts at night too. A deer lives in the forest and a lizard likes the sun. An insect lives in the meadow. Every animal has its place in nature.",
  "We find pebbles on the beach and boulders in the canyon. A pebble is small and a boulder is huge. In the meadow we find daisies and poppies. In the swamp we find moss and ferns. Nature has a lot to show us.",
  "Ana loves flowers. In her garden she has tulips, daisies and orchids. Near the wall there is ivy, and under the pine tree there is moss. Sometimes a fox or a deer visits the garden at night, and a bat flies around.",
  "A walk in the meadow in spring: the grass is green, the poppies are red and the daisies are white. A deer eats near the oak, and a fox hides behind a boulder. An insect lands on a tulip. What a beautiful morning!",
];

CLOZE.media = [
  "The newspaper has an article with a big headline about a famous celebrity. Ana reads the review of a new film. In the evening she watches a documentary and an interview on television. She loves to read and watch the news.",
  "There is a festival in town this weekend. A famous musician performs with an orchestra, and a presenter talks to the audience. There is an exhibition of paintings and a cartoon show for children. It is a great performance.",
  "Tom reads a bestseller. The plot is exciting and the hero is brave. Every scene is full of humour. At the end of the book there is a poem. He writes a review and shares a selfie with the book. “I loved it,” he says.",
  "The film has a good plot, a funny hero and many scenes with humour. A famous celebrity plays the main role. The critics write a good review. The audience laughs a lot. After the film there is an advert for the sequel.",
  "On the radio the presenter interviews a musician. The orchestra plays a famous song and the audience cheers. After the performance, the musician reads a poem. People take a selfie with the star, and the presenter thanks everyone for the festival.",
  "A documentary about nature is on tonight. The presenter explores the jungle, and the audience can see many animals. There is an exhibition of the same photos at the museum, and an interview with the musician who wrote the music. Both are very interesting.",
  "The headline of the article says: “Celebrity at the festival.” The article has an interview with the musician and a review of the performance. The audience was big and happy. Many people took a selfie with the star.",
  "A cartoon is for children but adults like it too. The hero is funny and the plot is simple. The humour is for all ages. After the cartoon there is an advert for a toy. The kids love it.",
  "At the festival there are many events: an orchestra, a performance of poems, an interview with a famous celebrity, an exhibition of photos, a film. The audience can choose. The festival is a big success.",
  "Writers, musicians and presenters work in the media. A writer writes a bestseller. A musician plays in an orchestra. A presenter talks on television. A good journalist writes an article with a clear headline and a good interview.",
];

CLOZE.media2 = [
  "The director films the new sitcom. The cast is famous and the actress is very funny. The crew works hard. At the premiere, the audience loves the trailer. Everyone says it is a blockbuster and that a sequel will come.",
  "I read the biography of a famous novelist. She writes fiction and has many bestsellers in paperback. Each chapter is about a different part of her life. She also writes lyrics for an album and a screenplay for a thriller.",
  "The new thriller has a great cliffhanger at the end of every chapter. The director is famous, and the cast includes a well-known actress. The crew filmed in five countries. The premiere is next week, and a sequel is planned.",
  "A blockbuster is a very popular film. A remake is a new version of an old film. A sequel continues the story. A trailer shows scenes of the film. A premiere is the first showing. A screenplay is the text of the film.",
  "Maria is a librarian. She loves fiction, biography and paperback novels. Her favourite novelist writes thrillers with a cliffhanger in every chapter. In her free time she reads the lyrics of her favourite album and goes to the premiere of every blockbuster.",
  "The band releases a new album with great lyrics. The singer wrote the lyrics, and a famous director made the video. The crew filmed it in the desert. The premiere is online, with subtitles in many languages.",
  "On the film set, the director talks to the cast and crew. The actress forgets her lines and everyone laughs. The screenplay is long, but the sitcom is funny. After the premiere, the audience wants a sequel.",
  "I do not like a remake, I prefer the original film. But I loved the sequel of that blockbuster. The cast was amazing and the screenplay was clever. The trailer was exciting, and the director is a genius.",
  "A novelist writes fiction. A librarian helps with books. A director makes films. An actress plays a role. A crew helps to make a film. A biography tells a true life story. A paperback is a cheap book.",
  "Sofia watches a thriller with subtitles. The cliffhanger at the end of the episode is exciting. She wants the sequel. She reads the biography of the director and listens to the album from the film. She loves this world.",
];

CLOZE.tech = [
  "I have a blog and a podcast. I write a comment every day and reply to the comments of my readers. I use my smartphone to upload photos. My connection is fast, and my data plan is big. Technology is part of my work.",
  "Tom installs new software on his computer. He connects the webcam and uploads a file to a server. He sends a text message to his friend and signs up for a digital course. “An invention that changed my life,” he says.",
  "A robot is a machine that does tasks. Some robots clean the house, others work in factories. The inventor of a new robot says: “Digital equipment will change the world.” Robots use software and data to work.",
  "Ana is on a video call using a webcam. The connection is bad and the picture freezes. She deletes some files and restarts the software. The connection improves. “Technology is great, but it is not perfect,” she says.",
  "My sister listens to a podcast every morning. She uses her smartphone, connects to the server and downloads the episode. Then she writes a comment and a reply to the host. She also reads a blog about technology.",
  "Digital equipment: a smartphone, a robot, a webcam, a computer. Digital tools: a podcast, a blog, a text message. An invention is a new machine. A server stores data. Software gives instructions to machines, and a connection joins them all.",
  "Pedro wants to upload a video to a server. He connects his camera, installs the software, signs up for the service and presses upload. After ten minutes the video is online. He shares the link in a text message.",
  "The inventor presents a new machine. It is a robot with a camera, digital software and a data connection. It can reply to questions. The audience writes comments on social media and many people sign up for the first test.",
  "Do you use a blog or a podcast? I read blogs and listen to podcasts to learn English. I use my smartphone to connect and I write a comment when I find something interesting. I reply to my friends.",
  "When the connection is slow, I delete old data and restart the software. When the server is down, I wait. If the equipment is broken, I install new software or ask for help. A digital life needs patience.",
];

CLOZE.tech2 = [
  "My router is old and the signal is weak. I restart it, but the connection still freezes. A hacker is not the problem. My console crashes in the middle of the game. I buy a new router and a headset. Now streaming is fast.",
  "The emoji on my phone is funny. I swipe the screen, drag a photo and send it. My ringtone is a famous song. A voicemail arrives from my mother. I reboot my phone when it is slow and use a hotspot when the wifi is weak.",
  "Streaming films needs a good signal. The resolution of my screen is high. A headset helps with sound. The software must be compatible with the hardware. If the program crashes, restart it. If it freezes, reboot.",
  "Tom is a gamer. He uses a console, a joystick and a headset. His router is fast and the resolution of his screen is great. Sometimes the game crashes and he has to restart it. “I need a better connection,” he says.",
  "A hacker enters a computer without the owner knowing. To be safe, update your software and use a strong password. Do not click on strange links. If the computer freezes or crashes, scan it and restart it.",
  "How to scan a document: connect the scanner, open the software, place the paper and click. The file goes to your computer. If the software crashes, restart it. If the hardware is not compatible, buy a new one.",
  "Ana swipes to answer a call and drags an icon to open an app. Her ringtone is quiet. A voicemail from her friend arrives. She browses the internet using a hotspot on her phone because the signal at home is weak.",
  "My console is compatible with this headset. The resolution of the game is excellent. Streaming a film on the same router works too. But when the signal is weak, the picture freezes and I restart the router.",
  "Hardware is the part of a computer you can touch. Software is the program. A router gives wifi. A hotspot shares a connection. A headset has headphones and a microphone. A joystick controls games. Streaming is watching online.",
  "Last night my computer crashed. I tried to restart it but it froze again. I rebooted it and scanned it for problems. No hacker, just old software. I installed an update, and now everything is compatible and fast.",
];

CLOZE.career = [
  "Ana sends an application for a job as an architect. She is a good candidate with a strong qualification and a long career. The employer asks her to come for an interview. If she gets the job, she will earn a good salary and work full time.",
  "Tom is a lecturer. He works part time at the university and part time as a designer. His employer is happy with his work. Tom is the owner of a small studio, and he has a few employees. “I love my profession,” he says.",
  "A detective investigates crimes. A photographer takes pictures. A politician works for the country. An architect designs buildings. A lecturer teaches at university. Every profession needs a good qualification, a lot of practice and a good candidate.",
  "Pedro is out of work. He writes a good application for a job at a new company. The employer reads it and calls him to a conference. Pedro is a professional photographer with a strong career. He hopes to get a full time contract.",
  "At the conference, a politician and an architect talk about their careers. A lecturer explains the qualification for each profession. The audience, many of them candidates, takes notes. After the talk they apply for jobs.",
  "A contract is a paper with the conditions of a job. Full time means you work forty hours a week; part time means you work less. An employee works for a company, an employer pays the employee, and an owner has the company.",
  "Sofia is a designer and wants a new career. She makes an application, sends her qualification and asks for an interview. The employer likes her. She starts the next month and signs a part time contract.",
  "What is your profession? I am a professional photographer. My brother is a detective and my sister is a lecturer. My father is a politician. We all have different careers, and we earn different salaries.",
  "Maria is a candidate for a position in a big company. The employer says: “You have a good qualification and a professional attitude.” She signs the contract and becomes an employee. She will earn more than before.",
  "A good employee is on time, works hard and learns fast. A good employer pays well and treats people with respect. A good candidate prepares the application and the interview. A good career takes time, effort and luck.",
];

CLOZE.career2 = [
  "The company headquarters has many departments. The staff work in the workplace from nine to five. A client sends a proposal and a supplier sends an invoice. At the meeting, the manager reads the agenda and sets the target.",
  "Ana is an intern in a big company. She learns from a trainee and an apprentice. Her schedule is full: a presentation on Monday, a meeting on Tuesday and a report on Friday. “I learn a lot,” she says.",
  "The union meets the manager. Some staff are redundant and the company wants to dismiss them. The union asks for a better plan. The agenda includes perks, commission and the payslip. After a long discussion, they agree.",
  "Tom works for a supplier. He sends an invoice to the client and a proposal for the next project. His target this month is high, but the commission is good. The schedule is tight, so he works long hours at his workplace.",
  "A payslip shows your salary, your tax and your commission. Perks are extra benefits, like a car or health insurance. A recruiter finds staff for a company. A good workplace gives perks and respects the union.",
  "Pedro is a recruiter. He meets candidates and shows them the headquarters. He explains the schedule, the target and the perks. Some candidates are interns and others are apprentices. After the interview, he sends a proposal.",
  "At the headquarters there is a presentation about the new target. The manager shows the schedule, the agenda and the department plans. The staff ask questions. The client is happy with the proposal. Everyone goes back to work.",
  "Maria is afraid of being dismissed: her company wants to cut costs, and several staff are redundant. The union defends them. The manager says: “We will help with a new job and a good payslip until you find one.”",
  "In the department, the trainee and the apprentice help the staff. The supplier delivers material and sends an invoice. The client calls for a meeting. The manager reads the agenda, shows the target and decides the schedule for the department.",
  "Work vocabulary: staff, workplace, headquarters, department, intern, apprentice, trainee, client, supplier, invoice, target, schedule, agenda, presentation, proposal, union, commission, perks, recruiter, payslip. Do you know all of them? Try to use five of them in a sentence about your own workplace.",
];

CLOZE.travelb1 = [
  "Next week I travel to Lisbon. I check the airline website and reserve a direct flight. I print the itinerary and my return ticket. The airport terminal has an announcement for each departure. I pack my baggage and read a guidebook.",
  "Tom looks for accommodation in London. He compares a hotel, a hostel and a flat. The fare of the flight is cheap, but the hotel is expensive. He reads a brochure about tourism and decides on a small hotel near the embassy.",
  "At the terminal there is an announcement: “Flight to Madrid, departure at ten, gate five.” Ana checks her baggage and gets her boarding pass. She asks for an upgrade to the cabin in the front, but it is full. She waits at the gate.",
  "A hitchhike trip is cheap but not always safe. Many tourists prefer a direct flight and a hotel. The itinerary shows each destination, the date of arrival and the date of departure. A good guidebook helps a lot.",
  "After a long flight, tourists suffer from jet lag. They arrive at the terminal, collect their baggage and take a transfer to the hotel. The hotel has a good brochure for the destination and accommodation for all budgets.",
  "Pedro's itinerary: arrival on Monday at the terminal, transfer to the hotel, tourism on Tuesday and Wednesday, departure on Thursday. He has a return ticket and a guidebook. The airline gave him an upgrade, so he travels in a better cabin.",
  "The embassy gives information to tourists who lose a passport. In a foreign country, keep a copy of your documents. Reserve your accommodation in advance and read the fare conditions of your airline before you buy.",
  "Sofia travels abroad. At the airport terminal she hears an announcement of a delay. She waits and reads her guidebook. Her baggage is checked in. After eight hours, she arrives at her destination with a terrible jet lag.",
  "What is a good destination for tourism? Think about the weather, the fare, the accommodation and the culture. Read a brochure and a guidebook. Reserve early to get a good price on the flight and the hotel.",
  "A return ticket is cheaper than two single tickets. A direct flight is faster than one with stops. An upgrade gives you a better seat or cabin. A transfer takes you from the airport to the hotel. A guidebook helps you to know the destination.",
];

CLOZE.travelb1b = [
  "We stay at a hostel near the harbour. In the morning we take a canoe to the island, and in the afternoon a kayak. In the evening we see a yacht. The port is full of life. Our insurance covers all the activities.",
  "Pedro drives to the coast in a caravan. At the toll he pays and goes on. On the road he sees a signpost: “Port, five kilometres.” At the junction he takes a shortcut, but then there is a detour. In the end he arrives at the harbour.",
  "At the airport the helicopter lands on the runway. A yacht is in the harbour. On the road there are a scooter, a moped and a cable-car near the mountains. Tourists use a compass and a map. Everyone has insurance.",
  "Take the carriage to the village. Cross the junction, follow the signpost and use the lane on the left. If there is a detour, use a shortcut. At the toll, pay and go on. Do not forget your insurance.",
  "Sofia rides a scooter in the city. Her brother prefers a moped. They stop at a junction, look at the signpost and take a lane to the harbour. At the port they rent a kayak and a canoe. “What a great day!” she says.",
  "A compass shows the direction. A signpost shows the road. A toll is a payment for a road. A runway is where planes land. A harbour is where boats stay. A junction is where roads meet. A detour is a longer way.",
  "Tom has insurance for his caravan. On a road trip he pays the toll, uses a compass and a map, and follows each signpost. He sleeps in a hostel when it rains. He loves travelling with a caravan.",
  "A cable-car takes tourists up the mountain. A helicopter flies over the harbour. A yacht stays in the port. A canoe goes on the river. A kayak goes on the sea. Each has its own beauty.",
  "At the junction there is a signpost with three directions. Ana chooses a lane on the right. There is a detour because of work on the road. She finds a shortcut through a small village and arrives at the harbour.",
  "The harbour of the small town is beautiful: a yacht, some canoes and a few kayaks. Near the port there is a hostel with a good price. The runway of the airport is not far, and a helicopter lands every hour.",
];

CLOZE.foodb1 = [
  "For lunch I have a burger or a curry. My brother prefers pork with cabbage and broccoli. My sister is vegan: she eats lamb-free dishes with coconut and chilli. After lunch I have a snack with a biscuit and a lemonade.",
  "At the takeaway we order a curry, prawns and sausages. The flavour is spicy and the portion is big. We have leftovers for the next day. My friend has no appetite, so she only eats a bit of cereal at home.",
  "Good flavour needs good spice: chilli, coconut and herbs make a curry bitter, sweet or hot. A vegan meal has no meat, fish or egg. A portion is how much you eat. Leftovers are food that remains after a meal.",
  "Tom has a big appetite. For breakfast he eats cereal with coconut. At lunch he has pork with cabbage and broccoli. For a snack he takes a biscuit and a lemonade. At dinner he orders a burger and a curry from a takeaway.",
  "Ana is vegan. She does not eat lamb, pork, prawns or sausages. She loves broccoli, cabbage and coconut. Her favourite dish is a spicy curry with chilli. “The flavour is great and the portion is big,” she says.",
  "A good takeaway sells burgers, sausages, prawns and curry. The portions are big and the flavour is spicy. Many people order leftovers the next day. A lemonade is perfect to drink with a spicy meal.",
  "I have no appetite today. I only want a snack: a biscuit and a lemonade. My mother makes a curry with lamb, but I eat just a small portion. The leftovers will be for tomorrow.",
  "Our menu has: pork with cabbage, lamb curry, prawns with chilli, sausages and broccoli. For vegans: coconut curry and vegetable stew. For dessert: a biscuit and cereal bar. To drink: a lemonade. A spicy flavour for everyone.",
  "Pedro tries a bitter coconut drink and a spicy chilli sausage. He does not like the flavour. Then he eats a burger with cabbage and enjoys the portion. “I have a big appetite today,” he says to the waiter.",
  "At home we always cook too much. The leftovers are for the next day: pork with cabbage, lamb curry, broccoli and a few prawns. For a snack we take a biscuit or cereal. For a drink, a lemonade.",
];

CLOZE.foodb12 = [
  "To make a stew, add a spoonful of oil and a pinch of salt to the saucepan. Roast the meat, then add herbs, spinach and sauce. Cook slowly in a casserole. The result is juicy and full of flavour.",
  "Maria bakes pastry. She mixes flour and butter into dough, then whisks eggs. She adds a pinch of salt and a spoonful of sugar. The oven makes the pastry crunchy outside and soft inside. “Delicious,” she says.",
  "For pasta with sauce, boil the pasta in water for ten minutes. In another saucepan, steam spinach and add herbs and butter. Grate cheese on top and add a spoonful of dressing. Everyone loves this simple meal.",
  "Tom likes waffles for breakfast. He mixes dough, adds butter and cooks the waffles in a pan. Then he adds toast, a spoonful of honey and a pinch of salt. “Crunchy and sweet,” he says.",
  "A juicy roast and crunchy vegetables: roast the chicken in the oven, steam the spinach and add herbs and butter. Serve with a sauce and a salad dressing, and with toast. The family enjoys it very much.",
  "Noodles and pasta are different. Noodles often come from Asia and pasta from Italy. Both need boiling water. Add a pinch of salt, a spoonful of oil and a sauce. Add grated cheese for flavour.",
  "Sofia makes a casserole with meat, spinach and herbs. She roasts the meat first, then adds sauce and cooks it slowly. At the end she adds a spoonful of butter. The casserole is juicy and tasty.",
  "In a bakery, they make bread from dough. They also bake pastry, toast and waffles. Some are crunchy, some are soft. The baker whisks eggs, adds butter and cooks everything at the right temperature in a big oven.",
  "Pedro learns to cook. The recipe says: grate cheese, roast vegetables, boil pasta, steam spinach and make a sauce. Add a pinch of salt and herbs. Serve in a saucepan or a casserole. It is easy and tasty.",
  "A stew is a juicy dish cooked slowly. Toast is crunchy bread. A saucepan is a pot with a handle. A whisk mixes eggs. A pinch is a very small amount. A spoonful is the amount in a spoon. Which one do you use more?",
];

CLOZE.leisureb1 = [
  "In my spare time I go to a club with my friends. We play board games, do a jigsaw or a quiz, and have a barbecue. My membership gives me good facilities: a pool, a gym and a nightlife near the club.",
  "Maria takes up gardening and knitting. She likes pottery too. She goes to a pottery class every Saturday and shows her collection to friends. “It is a keen hobby,” she says. “I hang out with other members.”",
  "Tom is a member of a sports club. The membership is cheap, and the facilities are good: a tennis court, a pool and a gym. He hires a torch for night walks. He goes out with friends and joins in many activities.",
  "We get together on Friday for a barbecue. Some play a board game, some do a quiz, others do a jigsaw. We hang out until late and nobody wants to go home. Spare time with friends is the best.",
  "Ana is keen on pottery. She has a collection of small pots. She also goes out with friends to the nightlife in the city. On Sunday she does gardening and knitting at home. “I am never bored,” she says.",
  "A member of a club has a membership. Clubs have facilities, like a pool or a gym. You can hire equipment, such as a torch or a racket. Many clubs organise a quiz or a barbecue for members.",
  "Pedro wants to take up a hobby. He joins a pottery class and a quiz club. He also goes out in the evening and enjoys the nightlife. “Everyone should find a hobby,” he says. “It is good for the mind.”",
  "In winter my family spends time with board games, jigsaws and a quiz. In summer we get together for a barbecue in the garden. We hang out, we play, and sometimes we join in a game with the neighbours.",
  "What do you do in your spare time? I am keen on gardening and knitting. My brother goes out with friends to a club. My sister makes pottery. My parents play a board game or do a jigsaw. We all have a hobby.",
  "To join a club, ask for the membership form. The club has facilities, a collection of games and a nightlife programme. Members can hire a room for a barbecue or a quiz night. It is a nice way to get together.",
];

CLOZE.leisureb12 = [
  "My hobbies: puzzles, crosswords and sudoku in the evening. On Sunday I go fishing or hiking. My sister plays the violin and my brother plays the drums in a band. Everyone in the family has a different amateur passion.",
  "Tom does archery, fencing and judo. He is an amateur, but he trains four times a week. His brother prefers karate. Their sister is in a choir and also plays the violin. They all love their free time.",
  "Ana loves origami. She makes paper birds and flowers. She also does a crossword every day and a sudoku on Sundays. On weekends she goes hiking or climbing with friends. “A hobby makes me calm,” she says.",
  "Pedro likes sewing and photography. He makes his own clothes and takes photos of nature. He also goes fishing, cycling and bowling. In the evening he plays darts with friends and listens to a choir at the church.",
  "A puzzle is a game to solve. A crossword uses words. A sudoku uses numbers. Origami is paper folding. Archery uses a bow, fencing uses a thin stick, and judo and karate are sports of fighting. Surfing and skating use boards.",
  "On Saturday the amateur choir sings in the church. A violin and drums play too. After the concert, they go bowling and play darts. It is a great evening for all the members of the group.",
  "Sofia goes climbing, surfing and cycling. She is amateur in all three. On the weekend she goes fishing with her father. At home she does a crossword, a puzzle or origami. She never says she is bored.",
  "My grandfather loves fishing and gardening. My grandmother does sewing and sudoku. My father plays the violin. My mother is in a choir. I do photography and judo. In my family, free time is full of hobbies.",
  "A hobby can be calm, like sewing, origami or crosswords, or active, like surfing, skating, cycling or climbing. It can be a sport, like judo, karate, fencing and archery. Being amateur means you do it for fun.",
  "At the club we play darts and bowling. Some members do fencing, judo or karate. A choir sings in the main hall and a violin plays in the corner. It is a place for all amateur hobbies, from puzzles to photography.",
];

CLOZE.sportb1 = [
  "The athlete trains for the championship. She does athletics and gymnastics every day. Before each session she does a warm up in the changing room. She wears a helmet when she cycles. Her opponent is strong, but she wants the prize.",
  "Tom is the goalkeeper of the hockey team. They play in a league and train on the pitch. After the match the players go to the changing room and put their things in a locker. The team wins and wants a prize.",
  "At the tennis court two players compete in the tournament. The winner will get a prize. Her opponent is a very good athlete. They do a warm up and start the match. After two hours, the champion lifts the trophy.",
  "Cricket, baseball, boxing and badminton are different sports. Diving and gymnastics are individual. Hockey and cricket are team sports. Every athlete has an opponent. The best athletes win a prize at a championship or a tournament.",
  "Ana does diving and gymnastics. She trains hard, competes in a tournament and wins a prize. Her opponent is very good, but Ana does a perfect warm up and a great performance. “I am a champion!” she says.",
  "In the changing room the players put on a helmet and shoes. The goalkeeper takes his gloves and the others put their bags in the locker. They enter the pitch for the warm up. The league match starts in ten minutes.",
  "A league is a group of teams that compete. A tournament is a competition with many matches. A championship decides the best. A pitch is the field. A locker keeps your things. A helmet protects your head.",
  "Pedro is an athlete in the league of athletics. He competes in the tournament and trains on the pitch. His opponent is the champion of last year. Pedro wins the prize and the audience cheers. He is very happy.",
  "Sofia plays badminton and baseball. She plays in two leagues. Before each match she does a warm up. After the game she changes clothes in the changing room and keeps her helmet in the locker. Sport is her life.",
  "The goalkeeper of the hockey team is a hero. In the last minute of the championship final, he stops a goal. The team wins the tournament and the prize. In the changing room everyone celebrates.",
];

CLOZE.sportb12 = [
  "The team captain scores a penalty in the semi-final. The opponent makes a foul and the referee gives a penalty. The goalkeeper dribbles nothing, but the captain is calm. The victory takes the team to the final and the spectators cheer.",
  "In athletics there are many events: a sprint, a marathon, a relay, the hurdle race and the javelin. Athletes train on the track every day. After a long warm-up they run, jump or throw. The champion receives a trophy.",
  "Tom plays tennis. He serves and then hits a volley. His opponent returns the ball, but Tom wins the point. After a long match he wins the final and receives a trophy. The spectators cheer and the captain thanks him.",
  "Offside, foul and penalty are football words. A player dribbles past the opponent and scores. The referee shows the rules. A defeat is hard, but a victory feels great. The team captain thanks the spectators.",
  "Sofia loves rowing and skateboard. She trains on the river and in the park. In the marathon she runs forty-two kilometres, and in the relay she runs with a team. She wins a trophy in the final and gets a big victory.",
  "The captain of the team walks to the track. The spectators are loud. The race starts with a sprint. Then a runner trips over a hurdle. In the end, the relay team wins the final, and the captain lifts the trophy.",
  "A semi-final comes before the final. A victory is when you win; a defeat is when you lose. A penalty is a free kick in football. A foul is breaking a rule. A trophy is a prize. A spectator watches the sport.",
  "Pedro plays baseball and football. In football, he dribbles and passes. He scored a penalty in the final, but his team lost. The defeat was hard, but the captain said: “We will win the trophy next year.”",
  "Marathon, sprint, relay, hurdle and javelin are athletics. Rowing and skateboard are different sports. Each has a track, a river or a park. Athletes warm up, compete and sometimes win a trophy, and the captain of the team is proud.",
  "At the final, the spectators sing and shout. The referee blows nothing and waits. The serve is perfect, the volley is strong. The captain scores the last point. Victory! The team lifts the trophy and the crowd cheers.",
];

CLOZE.educationb1 = [
  "Maria is a beginner in English. She takes a course for beginners in a language school. The tutor is kind. After the course she gets a certificate and goes to an intermediate level. “I practise every day,” she says.",
  "At school the teacher calls the roll. One student is absent. The class does a composition and the teacher gives a mark. At the end of the term, students pass or fail. Those who revise a lot usually pass.",
  "Tom graduates from university with a good diploma. He applied for a scholarship last year. Now he has a degree and wants to be a tutor. “The lecture and the course changed my life,” he says.",
  "The curriculum in primary school includes maths, reading and art. In secondary school students study more subjects. After secondary school they can go to university. Some get a scholarship and others a diploma or a certificate.",
  "Ana revises for the exam. She does a composition and practises English every day. She goes to the lecture of her tutor and gets help. She hopes to pass with a good mark and get her certificate.",
  "At the university, the lecture is in the morning. The tutor helps students who are beginners or advanced. A course lasts a term. At the end, students sit an exam, and if they pass they receive a certificate or a diploma.",
  "Pedro fails his exam. He is sad, but his tutor says: “Revise and practise, and next term you will pass.” Pedro does a new composition and studies more. At the next exam he gets a good mark.",
  "Primary school is for young children, secondary school is for teenagers. A graduate is a person with a degree. A scholarship is money for studies. A diploma and a certificate are papers that prove your studies.",
  "The course has three levels: beginner, intermediate and advanced. Students practise in class and revise at home. The tutor gives a mark for each composition. At the end of the term there is an exam.",
  "Sofia is a graduate. She has a diploma, and now she wants to be a tutor. She goes to a lecture on teaching and applies for a scholarship. “I want to help beginners and advanced students,” she says.",
];

CLOZE.educationb12 = [
  "At university Ana has a professor who teaches her about history. She writes an essay for each semester, and she needs a good assignment. The tuition fee is high, so she lives in a dormitory with other students.",
  "In kindergarten, children play in the playground. In primary school they learn to read. In secondary school they have different modules. At university there is a semester, a lecture and a degree at the end.",
  "Tom does a degree in engineering. The tuition and fees are expensive, so he works part time. In the library he writes essays and a bibliography with citations. After four years comes the graduation ceremony.",
  "The headmaster of the school is strict. If a student is rude, he gets detention. The principal of the university is more relaxed. Both of them thank the students at the graduation ceremony, and the professor shakes their hands.",
  "Graduation day: students wear a gown and a hat. The professor calls each name and the student receives a degree. The family and friends take pictures. It is a happy ceremony after years of work.",
  "Every semester Pedro takes a new module, writes an assignment and an essay and lists the bibliography. A citation shows where an idea comes from. If a student drops out, he loses the semester. Pedro does not want that.",
  "The dormitory is a place where students live. The tuition is what you pay for lessons. A semester is half of an academic year. A module is a part of a course. An assignment is homework with a mark.",
  "Sofia was a dropout, but she returned to study. The professor helped her with an assignment and an essay. She finished the degree and went to the graduation ceremony with a gown. Her family was very proud.",
  "At the playground in the kindergarten, children run and play. The headmaster watches them. A rude student gets detention in secondary school. At university, the professor gives assignments, and each semester has a new module.",
  "To write a good essay, make a plan and a bibliography. Use citations to show your sources. Write the essay in your own words. A good assignment shows that you read and understood the lecture and the module.",
];

CLOZE.feelingsb1 = [
  "Ana is anxious before the exam. She feels confused and a bit frightened. But when she sees the questions, she is relieved and confident. After the exam she is delighted. “I am so glad it is over,” she says.",
  "Tom is jealous of his brother's new car. He feels embarrassed because he is jealous. His mother says: “Do not be annoyed. You are charming and clever.” Tom feels better and is grateful for her words.",
  "My sister is cheerful and gentle. My brother is bossy and sometimes cruel. My mother is curious and my father is calm. I am sometimes depressed, but I am usually glad. Everyone in the family has different feelings.",
  "Pedro is disappointed. His team lost and he feels awful. His friends are amazed that he is so sad. “It is just a game,” they say. Pedro is a little ashamed, but he soon feels better.",
  "In the dark, Sofia is frightened. The noise makes her anxious. Her mother comes, turns on the light and says: “Do not worry.” Sofia is relieved and grateful. “Thank you, mum,” she says, glad to be safe.",
  "A charming man is pleasant. A bossy person gives orders. A cruel person hurts others. A gentle person is kind. A cheerful person is happy. A curious person asks many questions. Which one are you?",
  "Maria is embarrassed because she forgot a name. She is a bit confused and annoyed with herself. Her friend smiles and says: “It happens to everyone.” Maria is relieved and grateful, and she feels cheerful again.",
  "I was amazed when I saw the mountain. I felt delighted and glad to be there. My brother was anxious because the road was high. He was frightened, but at the top he was confident. We took a photo and felt proud.",
  "Feelings: amazed, anxious, ashamed, awful, bossy, charming, cheerful, confident, confused, cruel, curious, delighted, depressed, disappointed, embarrassed, frightened, gentle, glad, jealous, annoyed, relieved, grateful. Which ones did you feel today? Write three sentences about your day.",
  "The boy is ashamed because he broke a window. He feels awful and is afraid his parents will be angry. But his father is gentle: “Thank you for being honest.” The boy is relieved and promises to be more careful.",
];

CLOZE.feelingsb12 = [
  "Ana is furious. Her phone was stolen and she is shocked. She feels miserable and suspicious of everyone. Her friend is hopeful: “We will find it.” Ana is puzzled but grateful for the support of her friend.",
  "Tom is thrilled because he got the job. His pride is big and his gratitude is bigger. His brother is envious, and his sister is hopeful. Tom feels no regret, only delight, and he tells everyone.",
  "Pedro feels regret. He said bad words to his friend. Now he feels shame and loneliness. He is not grumpy but miserable. After he apologises, he feels relief, and the friend shows gratitude for his courage.",
  "Sofia is suspicious. Her colleague seems puzzled when she asks about the missing documents. There is some doubt and a little jealousy at work. In the end, the truth brings relief and the team feels hopeful again.",
  "Boredom, loneliness, curiosity, relief, doubt, regret, pride and shame are all feelings. Some are pleasant, others are not. Disappointment, annoyance and jealousy are hard; delight, gratitude and relief are wonderful. Which do you feel most?",
  "The old man is grumpy in the morning. But when his granddaughter arrives, he is thrilled. His loneliness disappears. She brings delight, curiosity and gratitude to his day. “You make me very proud,” he says, and she smiles.",
  "Maria is shocked by the news. At first she feels doubt, then envy, and finally relief. She is puzzled and a little suspicious, but in the end she feels hopeful. She knows that feelings change, and she feels calm.",
  "Tom feels annoyance when the bus is late and boredom while he waits. When it finally arrives, he feels relief. At work he feels pride in his project and gratitude for his team. By the evening he is tired but satisfied.",
  "It is normal to feel envious, jealous or grumpy sometimes. Do not feel shame. Talk to a friend. Talking about a feeling helps a lot. Gratitude and curiosity make life better. Try to feel hopeful, not miserable.",
  "Rita is thrilled about her trip. She has no doubt about it. Her mother is suspicious of the plan and shows some regret. Rita says: “Do not worry.” In the end, her mother feels relief and is proud of her daughter.",
];

CLOZE.personality = [
  "My brother is easygoing and talkative. He is outgoing and sociable, and he makes friends easily. My sister is more sensible and cautious. She is hardworking and determined. I am a bit shy but also witty. We are all different.",
  "Tom is middle-aged and a little plump, but he is adventurous. He is considerate with his friends and never selfish. His wife is impatient and sometimes moody, but she is sensitive and very kind. They are a perfect pair.",
  "The new neighbour is nosy: she asks many questions. Her son is naughty and scruffy, but he is witty and funny. They are a sociable family. Everyone in the street likes them, even if they are talkative.",
  "Ana is sensible and determined. She is hardworking and never impatient. Her lookalike cousin is moody and a bit selfish. People confuse them because they look the same, but their personalities are very different, and so are their friends.",
  "A good friend is considerate, sensitive and easygoing. A bad friend is selfish and impatient. A hardworking person is often determined and cautious. An adventurous person likes new things and is not afraid of anything.",
  "My grandfather was an adventurous man. He was outgoing, witty and sociable. Now he is old, but still talkative, easygoing and witty. He loves telling stories about his youth to his naughty grandchildren, who are very sociable.",
  "Pedro is scruffy but charming. His clothes are old, his hair is long, but he is witty and considerate. He is never selfish and always sensitive to the needs of others. His friends say he is the best person in the group.",
  "What are you like? I am easygoing and sociable. My friend is more cautious and sensible. My brother is impatient and moody. My sister is adventurous and outgoing. And you? Are you talkative or shy?",
  "Sofia is determined and hardworking. She studies every night and never complains. But she is also sensitive: she cries when a film is sad. Her friends are considerate and support her. They are not selfish or nosy.",
  "In a team you need different people: a sensible person who thinks, a determined person who works, a sociable person who talks, a witty person who laughs and a considerate person who listens. Together they make a great team.",
];

CLOZE.driving = [
  "Learner drivers must know the road signs. When you drive, check the speed limit, use the indicator, watch the pedestrian crossing and look in the mirror. Don't use your phone. Keep both hands on the steering wheel.",
  "Tom is a learner. His instructor says: “Press the clutch, change gear, release the clutch slowly.” Tom uses the accelerator and the brake carefully. At the junction he uses the indicator and checks for a pedestrian crossing.",
  "My car has a problem: a flat tyre, a broken windscreen wiper and dirty headlights. The bonnet is open, because the engine makes a strange noise. I call a garage. After a breakdown, nothing is more annoying than a car that won't start.",
  "The speed limit in town is fifty. On the motorway it is higher. Don't overtake near a pedestrian crossing. Use the horn only in an emergency. Follow every road sign, and use your sat nav if you are lost.",
  "A skid can be dangerous on a wet road. Brake slowly and don't use the accelerator hard. Keep control of the steering wheel. If there is a breakdown, switch on the headlights, put on the indicator and call for help.",
  "Ana passes her driving licence test. She did everything well: she checked the mirror, used the indicator, respected the speed limit and stopped at the pedestrian crossing. “Congratulations!” says the instructor. “You are a good driver.”",
  "Reverse slowly and check the mirror. Use the clutch and the gear carefully. The sat nav tells you where to go, and the road sign shows the speed limit. Never overtake in front of a bend. Safe driving is smart driving.",
  "In the car: steering wheel, brake, accelerator, clutch, gear, horn, indicator, headlights, windscreen wiper, mirror. Outside: bonnet, tyre, windscreen. On the road: speed limit, road sign, pedestrian crossing. How many do you know? Write them in your notebook.",
  "My father is a bad driver: he forgets the indicator, overtakes everyone, doesn't watch the speed limit and uses the horn all the time. My mother is a learner but drives carefully. She always reads the road sign.",
  "It rains hard. The windscreen wiper is on, the headlights are on and the speed limit is low. A pedestrian crosses at the pedestrian crossing. The driver brakes slowly, with no skid. He reaches the driveway safely and says: “Phew!”",
];

CLOZE.neighbours = [
  "I live in a block of flats. My landlady is very hospitable. She introduces new residents to the community and organises a block party every summer. In the backyard we have a street party with music and food.",
  "The newcomer in the block is a stranger to everyone. A neighbour introduces herself and offers a favour. “If you need anything, just ask,” she says. The newcomer smiles and says: “Thank you. That is very kind.”",
  "Ana complains to the landlady about the noise from another flat. The music is a nuisance every night. The landlady speaks to the resident. He apologises and is more considerate. “Courtesy is important in a community,” she says.",
  "At the community centre there is a street party. Residents mow the lawn, decorate the backyard and bring food. A neighbour brings her rubbish bin to a different place for the day. Everybody shares and has fun.",
  "A good neighbour is hospitable, courteous and watchful. He does you a favour if you ask. A bad neighbour is a nuisance. If you have a feud, speak calmly. Often it is only a misunderstanding.",
  "The old man in the block is watchful. He sees everything in the backyard. When a stranger enters, he calls the landlady. Everyone feels safe. But he is also hospitable: he invites newcomers for a cup of tea.",
  "There is a feud between two residents: one mows his lawn too early, the other plays loud music. They complain to the landlady. She organises a block party to introduce them and calm things. It works!",
  "Sofia asks a neighbour in the block of flats for a favour: to water her plants while she is away. The neighbour is hospitable and agrees to help. When Sofia returns, she brings a gift. “A good neighbour and a good community are better than a distant relative,” she says. The landlady laughs.",
  "In my community we help each other. The residents share tools, the landlady takes care of the building and the community centre organises activities. When a newcomer arrives, we introduce ourselves with courtesy, and we invite the stranger to the next block party.",
  "The block of flats has a backyard where residents hold a street party. The rubbish bin is at the back. Someone mows the lawn once a week. A newcomer is always welcome, and the landlady lives on the ground floor and the residents love her.",
];

CLOZE.phone = [
  "I dial my mother's number on my mobile. She doesn't answer, so I call back later. I try to get through, but the line is busy. I hang up and send a video call request. She finally answers: “Hello, my dear!”",
  "Tom dials a wrong number. A stranger answers: “Who are you looking for?” “Sorry, wrong number,” says Tom, and hangs up. He checks the phonebook, finds the contact and calls again. This time, he gets through.",
  "Ana's phone has no credit. She needs to top up. She goes to the shop and buys credit. Now she can make a video call and use roaming when she travels. Her SIM card works in other countries too.",
  "The landline at my grandmother's house has a cordless receiver. She likes to use the speakerphone, so everyone can hear. My mobile has a hands-free system for the car. We use the phone differently, but we all love to talk.",
  "At the company there is a switchboard. The woman picks up the receiver and says: “Hello, how can I help?” She forwards the call to the right person. If nobody answers, she takes a message and tells you to call back later, on the landline or the mobile.",
  "My phone's screen protector is broken. I go to a shop for a new one. I also buy a cordless headset. The shop assistant says: “With roaming, don't forget to check your credit.” I top up and go home.",
  "What is the area code for Lisbon? It is 21. For Porto it is 22. When you dial from another country, add the country code. Always check the number in the phonebook before you dial, to avoid a wrong number.",
  "Pedro makes a call, but he can't get through. He tries again and hears a voice: “The number you dialled is not available.” He hangs up, checks the phonebook and dials again on his mobile. Then his friend calls back: “Sorry, my phone was off.” Pedro uses the speakerphone and they talk for an hour.",
  "Mobile phones are everywhere. You can top up credit, make a video call, use roaming, forward a call or use the speakerphone. But landlines still exist, with a cordless receiver and a number in the phonebook, and a SIM card is not needed.",
  "The switchboard of the hotel gets many calls. A guest dials the area code and asks for his room. The receptionist forwards the call. If the guest doesn't answer, she says: “Please call back later.” Then she hangs up.",
];

CLOZE.opinions = [
  "What is your opinion? As far as I'm concerned, the idea is reasonable. I agree with you, but my friend disagrees. We argue a little, but we try to find a compromise. To be honest, I see what you mean.",
  "Tom suggests a trip to the mountains. Ana proposes a weekend at the beach. They discuss the pros and cons. In the end they find a compromise: one day in the mountains and one at the beach. Both are happy.",
  "The new rule is unfair, in my opinion. Many people disagree. The boss admits it is not perfect, but he denies it is unfair. On the other hand, he agrees to talk. It is an obvious problem with a reasonable solution.",
  "In a debate, you can agree or disagree. You can argue, suggest or propose. Say: “I see what you mean” or “To be honest, I disagree.” A fair discussion is polite and reasonable. Don't be ridiculous.",
  "Maria admits she was wrong. “To be honest, I made a mistake,” she says. Her friend says: “That's fair. I agree with your opinion now.” They find a compromise, laugh and continue their project together. It is a reasonable solution for both.",
  "The pros and cons of living in the city: it is exciting, but it is noisy. On the other hand, the countryside is quiet, but boring. As far as I'm concerned, both have advantages. What is your opinion?",
  "Pedro denies that he took the book. The teacher says: “It is obvious that it was you.” Pedro admits it: “Okay, to be honest, it was me.” The teacher says: “Thank you for being honest. That's fair.”",
  "Sofia proposes a new plan. Her colleague disagrees and argues that it's expensive. The manager says: “Let's find a compromise.” They agree on a cheaper version. As far as I'm concerned, it is a reasonable solution.",
  "An agreeable person is easy to talk to. He is fair, reasonable and ready to compromise. He listens to your opinion, says “I see what you mean” and suggests solutions. A ridiculous or unfair person argues all the time.",
  "In a meeting: “I suggest we start earlier.” “I disagree, it's unfair for those who live far away.” “On the other hand, it will help with the traffic.” “To be honest, I propose a compromise: start at nine.” “That's reasonable.”",
];

CLOZE.repairs = [
  "The sink is blocked and the tap is dripping. I call a handyman. He brings a toolbox with a screwdriver, a hammer and a drill. He fixes the tap and tightens a loose pipe. “Here is the quote,” he says. “And the guarantee.”",
  "There's a crack in the wall and the radiator is broken. The fuse is blown, too. The electrician replaces the fuse and checks the wire. The plumber fixes the radiator. Everything works again after two hours.",
  "The lift is out of order. A loose wire causes the problem. The handyman uses a screwdriver to tighten it and some glue for a broken piece. “It's fixed,” he says. “The quote is fifty euros, with a six-month guarantee.”",
  "Tom's car has a dent and some rust. The mechanic says: “I can repair the dent, but the rust needs a bigger job.” He gives a quote. Tom thinks and decides to fix the dent now and the rust later.",
  "In my toolbox: a hammer, a screwdriver, a drill, some glue and spare wire. I use the hammer to put a nail, the drill to make a hole and the glue to repair a broken cup. A good handyman always has a toolbox.",
  "The window is broken and the door is loose. I tighten the door and glue a small piece of the window. For the big crack I need a professional. He gives a quote and a guarantee. I accept and he replaces it.",
  "Water is dripping from the ceiling! The pipe is cracked and the wall is wet. A plumber comes at once. He fixes the pipe and replaces a part. He says: “You must also paint the wall again. Here is the quote.”",
  "How to fix a loose shelf: use a drill to make a hole, put a screw with a screwdriver and tighten it. If it still moves, use some glue. A hammer helps with small nails. With the right tools, it's easy.",
  "The washing machine is out of order. A fuse is blown and a wire is loose. Pedro calls a handyman, who replaces the fuse and tightens the wire. “It works now,” he says. “The guarantee is for one year.”",
  "A good handyman gives a quote before he starts. He brings his own toolbox and fixes things well: a tap that drips, a crack in the wall, a radiator that doesn't work. He gives a guarantee and doesn't leave rust or dents.",
];

CLOZE.money = [
  "I have some savings in the bank. Last week I used the cash machine to take out money. I paid with my debit card, but the shop didn't take it. I had only a few pennies and a banknote in my pocket.",
  "Tom is broke. He's hard up and has an overdraft. His friend is well-off but thrifty: he never spends too much. He lends money to Tom, who promises to pay back in instalments, each month a little.",
  "At the market, I haggle for a jacket. The seller says it costs fifty euros, but I think it's a rip-off. We negotiate and I pay thirty. He doesn't overcharge me. I pay in cash with a banknote and some coins.",
  "Ana is a spendthrift: she spends everything she earns. She has no savings and often is broke. Her sister is thrifty. She pays by debit card, checks her PIN and puts money in the bank every month.",
  "The cash machine asks for your PIN. If you forget it, you can't take out money. A debit card is for paying in shops. A banknote is paper money and a penny is a small coin. Savings are money you keep for later.",
  "My brother is loaded: he has a lot of money. My uncle is well-off, but my cousin is hard up. Money is not the most important thing. Some things are priceless, like health, family and friends.",
  "Pedro buys a car in instalments. He pays a part every month. He worries about an overdraft, so he checks his account often. “I don't want to be broke,” he says. “I must be thrifty and save.”",
  "The hotel overcharges tourists: a coffee costs ten euros! It's a rip-off. We complain, but they don't change the price. In the end we leave and have coffee at a normal cafe where we pay only two euros in pennies and a coin. We are not loaded, we are thrifty.",
  "To save money: don't be a spendthrift, check your account, use a debit card with a PIN, pay in instalments only when necessary and haggle at the market. If you lend money, make sure the person will pay back. Keep your savings in the bank, not in a drawer, and don't be broke.",
  "Sofia lends money to her friend. “I'll pay back next week,” says the friend. A week later, she returns the money in a banknote, plus a small gift. “You're priceless,” she says. Sofia smiles and keeps her savings in the bank, safe from a rip-off.",
];

CLOZE.plans = [
  "I have a meeting tomorrow, so I organise my day. I'm punctual: I arrive on time and don't waste time. If I'm late, I hurry. Yesterday I overslept, so I had to rush. Today I set an alarm as a reminder.",
  "Tom has a day off, so he arranges to meet his friends. They are available at five. As soon as possible, he books a table. “Let's do something last-minute,” he says. They decide to go to the cinema.",
  "I postponed the appointment because I was ill. The doctor says I can reschedule it for next week. It's urgent, he says, so I should come as soon as possible. I put a reminder on my phone and arrive in time.",
  "Ana is always punctual. She never wastes time. She arranges everything in advance and sets reminders. Her colleague is the opposite: he often oversleeps and has to rush. “Please come on time, and don't hurry at the last minute,” says Ana.",
  "It's urgent! The report is overdue. I must finish it today, as soon as possible. I don't have time to waste. My colleague is available to help. We organise the work and finish in time. What a relief!",
  "A day off is a day without work. Time-consuming tasks need more time. If you arrange things in advance, you don't need to rush. Last-minute plans are fun but stressful. A good reminder helps you to be punctual.",
  "Pedro overslept and he is late for the exam. He hurries to the school and arrives in time, just. “I should organise my time better,” he says. He puts two alarms and a reminder on his phone.",
  "Sofia postpones the party because her friends are not available. She reschedules for next week, and sends an invitation in advance. As soon as possible, she buys the food and arranges the music. Everything is organised and punctual, and nobody is late.",
  "In my diary: Monday, a meeting at nine (be punctual). Tuesday, a day off. Wednesday, a report that is overdue (urgent). Thursday, the doctor (reschedule, if possible). Friday, a party (arrange in advance). It's a full week, and I don't want to waste time!",
  "Don't waste time! Organise your day: make a list, set a reminder, be punctual, avoid last-minute stress and do time-consuming tasks first. If something is overdue, finish it as soon as possible. Then enjoy your day off.",
];

CLOZE.society = [
  "Every community has its traditions and customs. A good citizen respects the attitude and the background of others. In my neighbourhood, the elderly share their experience with the younger generation, and the population lives in peace. It is a good lifestyle.",
  "Poverty and unemployment are big problems. Many people are homeless and need help. A charity gives food and clothes. A citizen can do small things: give time, support a minority or talk to the elderly. Equality starts with simple actions.",
  "An immigrant arrives in a new country with a different background. Some people show discrimination, but others show kindness. The influence of different cultures makes the population richer. A fair society treats every citizen with equality.",
  "The behaviour of young people depends on pressure and influence. Their attitude comes from family, friends and the community. A positive lifestyle needs equality, respect and no discrimination. Every generation must learn from the last.",
  "Our neighbourhood has a mix of generations. The elderly sit in the square and tell old customs and traditions. The young listen with respect. Immigrants bring new ideas. The community works together and helps those who are homeless.",
  "Tom volunteers for a charity that helps the homeless. He sees how poverty affects people. He says: “Unemployment and discrimination are the main problems.” He tries to change the attitude of the community with his behaviour.",
  "Discrimination against a minority is wrong. Equality of rights is important for every citizen. A strong community protects the elderly, helps the unemployed and welcomes the immigrant. The population is richer for it.",
  "Ana's family is an immigrant family. Her background is different from that of her neighbours. At first, there was pressure and a little discrimination, but now she is a respected citizen. Her lifestyle and traditions help the neighbourhood.",
  "The old man tells the younger generation about the customs and traditions of the past. His attitude is positive and his behaviour is kind. The children listen and learn. The community knows how important the elderly are.",
  "A charity needs people to help. The population of the city has many homeless people who need food and shelter. Poverty and unemployment are serious. A citizen's behaviour can influence others and change attitudes in the community.",
];

CLOZE.society2 = [
  "Racism and discrimination are serious problems. An activist works for equality and diversity. A good society promotes integration. A donation to a shelter helps outcasts and the homeless. A social worker offers support and advice.",
  "Bullying and harassment hurt many people. The stigma against minorities makes things worse. A teacher or a social worker can help. The ethnic diversity of a school is a strength if everyone shows respect and integration.",
  "Migration changes the population of a country. Immigrants come for work or to escape war. The taxpayer pays for services, and the minimum wage protects workers. Integration is good for the immigrant and the community.",
  "Maria is a social worker. She helps the disabled, the elderly and the homeless. She works at a shelter that depends on donations from taxpayers and citizens. “Gender, ethnic group and age make no difference to me,” she says.",
  "The ageing population is a challenge: more elderly people need care. The minimum wage is low for many workers. A neighbourly community helps the disabled and the ageing. Small gestures of support reduce the stigma.",
  "Pedro is an activist against racism. He goes to protests, gives donations and helps immigrants in the shelter. He wants a society with diversity, gender equality and respect. “Nobody should be an outcast,” he says.",
  "Harassment and bullying often come from stigma and ignorance. Victims need support from a social worker and from friends. An ethnic or gender minority needs protection. A good community acts when it sees discrimination.",
  "Homelessness is a serious social problem. A shelter gives a bed and food. A social worker finds solutions. Donations help to pay. Taxpayers support public programmes, and the minimum wage helps people avoid poverty.",
  "A neighbourly attitude is simple: say hello, offer help, respect diversity. Immigrants and ethnic groups bring new ideas. An ageing population needs help. Integration happens when the community welcomes everyone.",
  "The activist leads a campaign for gender equality and the minimum wage. She says that racism and bullying must end. She collects donations for a shelter and invites the disabled and immigrants to speak. Her message is simple: integration, not stigma.",
];

CLOZE.science = [
  "In the laboratory, the scientist does an experiment. She forms a hypothesis, observes with a microscope and measures the result. The theory needs evidence. After months of research, she makes an important discovery.",
  "Biology, chemistry and physics are branches of science. Biology studies genes and cells, chemistry studies formulas and physics studies atoms and energy. Every scientist uses experiments to analyse results.",
  "The scientist analyses the data from the experiment. The result is a breakthrough: a new vaccine. The hypothesis was right and the evidence is strong. The discovery will help millions of people. A formula in the laboratory changes the world.",
  "A good experiment starts with a theory. You observe, measure and analyse. The result must give evidence for or against the hypothesis. Research needs patience, a laboratory and a microscope to look at small things.",
  "Tom is a student of chemistry. In the laboratory he mixes chemical products. He measures and observes the reaction. The result surprises him. “This is a discovery,” he says. His professor smiles and checks the formula.",
  "A gene is a part of a cell that carries information. An atom is a tiny particle. A scientist uses a microscope to see cells. The study of genes is part of biology; the study of atoms is physics. Research gives us new knowledge.",
  "A breakthrough in research gives hope: a new vaccine protects against a dangerous disease. The scientist tested the vaccine in the laboratory, analysed the result and published the evidence. The theory was confirmed by many experiments.",
  "Ana is a scientist. She loves chemistry and biology. Every day she does an experiment in the laboratory. She observes cells with a microscope and measures the results. She wants to discover a new formula one day.",
  "To do science well, you need a hypothesis, an experiment, data and analysis. Observe carefully, write the result and look for evidence. A theory is not a fact until many experiments support it.",
  "Physics explains atoms and energy. Chemistry explains products and formulas. Biology explains genes and cells. A scientist chooses a subject, forms a hypothesis and does research in a laboratory. Every discovery begins with a question.",
];

CLOZE.science2 = [
  "A telescope shows the galaxy. A satellite and a spacecraft orbit the Earth. Gravity keeps planets in orbit. An asteroid travels in space. At the observatory, scientists measure radiation and analyse the climate of other planets.",
  "Biologists study cells, bacteria and mutations. A genetic mutation can cause a disease or an advantage. An antibiotic kills bacteria. The study of extinction shows how species disappear. Science helps us to understand life.",
  "A molecule is a group of atoms. A particle is smaller than an atom. An equation shows a link between numbers. Gravity is the force that pulls objects. Radiation can be dangerous. Accurate data is essential.",
  "The observatory has a big telescope. Astronomers observe a distant galaxy, measure its orbit and study its radiation. A spacecraft goes near an asteroid. The data from the satellite is accurate and surprising.",
  "Tom studies genetics. He looks at a cell under a microscope and finds a mutation. He analyses bacteria and tests an antibiotic. “The result is accurate,” he says. His research could help in the future.",
  "A satellite orbits the Earth and sends data about the climate. It measures temperature, radiation and clouds. Scientists analyse the information and write an equation to predict changes. Accurate data is important for the planet.",
  "Extinction happens when a species disappears. A mutation can help a species survive or cause its end. Bacteria are very small but important. An antibiotic fights them. The study of genetics explains how life changes.",
  "The spacecraft left Earth and went into orbit. Gravity kept it on its path. It passed an asteroid and sent data about radiation. At the observatory, scientists celebrated the accurate data.",
  "Ana loves the stars. At the observatory she looks through the telescope and sees a galaxy. She learns about gravity, orbit and asteroid movement. “Space is amazing,” she says. “I want to discover new things.”",
  "Science words: telescope, galaxy, orbit, gravity, particle, molecule, cell, extinction, mutation, bacteria, antibiotic, equation, satellite, spacecraft, asteroid, radiation, accurate, climate, genetic, observatory. Choose five and write a sentence about each.",
];

CLOZE.crime = [
  "A burglar enters a house at night. He steals a TV and jewellery. A witness sees him and calls the police. The police arrest a suspect in the street. The victim is relieved. The case goes to court.",
  "In court the judge listens to the witness, the jury and the lawyers. The suspect is accused of theft. He says he is innocent. After the trial the jury says he is guilty. The judge decides the punishment: prison.",
  "A crime is an illegal act. Theft is stealing, robbery is stealing with force, and murder is killing. A criminal can be arrested, judged in court and sent to prison. The law protects the victim and punishes the guilty.",
  "Security is important. A criminal looks for an easy target. Close the door, install an alarm and don't leave valuables outside. If you are a victim of theft or robbery, call the police and be a good witness.",
  "The trial lasts three days. The suspect says he is innocent, but there is evidence against him. A witness saw him at the scene of the crime. The jury considers the facts and says guilty. The judge sends him to prison.",
  "Tom is a victim of robbery. Two criminals take his wallet and phone. He is scared but safe. He tells the police everything he remembers. The police arrest the suspects the same night. Justice works.",
  "In a trial, the judge directs the process and the jury decides if the suspect is guilty or innocent. The law says that nobody is guilty until proved. Punishment for a crime may be a fine or prison.",
  "A murder shocks the town. The police look for a suspect and ask for witnesses. A security camera helps to find a criminal. The suspect is arrested and sent to court. The jury listens and decides.",
  "Ana is a witness of a theft. She sees a man take a bag and run. She calls the police and describes the criminal. In court she tells the judge what she saw. Her words help to prove the suspect guilty.",
  "Illegal acts have punishment. A thief goes to prison, a driver without a licence pays a fine, a criminal who kills gets a long sentence. A just law protects victims and gives suspects a fair trial in court.",
];

CLOZE.crime2 = [
  "A pickpocket steals a wallet in the crowd. A mugging is more violent. The police find fingerprints on the bag. The prosecutor presents the evidence in court. The suspect has no alibi, so the judge gives a sentence.",
  "Fraud and forgery are crimes of lies. Bribery is paying someone to do something wrong. Smuggling and trafficking are illegal trade. The prosecutor works hard to convict the criminals, but the court may acquit them if there is no proof.",
  "Vandalism and arson destroy property. Shoplifting is stealing from a shop. Assault is attacking a person. Kidnapping is taking a person by force. Blackmail is threatening someone to get money. All are serious crimes.",
  "The suspect has an alibi: he was at a restaurant with friends. The police check the fingerprints and find nothing. The prosecutor has no proof. The jury decides to acquit him, and the judge sets him free.",
  "A hijack on a plane is a terrible crime. The police and the military work together. After many hours the criminals are arrested. The prosecutor asks for a long sentence, and the court convicts them.",
  "Tom is a victim of a mugging in the street. A pickpocket also stole his phone. The police find the fingerprints and arrest a suspect. In court, the prosecutor shows the evidence and the judge gives a sentence.",
  "Forgery and fraud: someone makes a false signature on a document to get money. The prosecutor shows the false papers in court. The suspect has no alibi. The court convicts him and gives him a long sentence.",
  "Shoplifting is common in big shops. Vandalism is common in empty streets. Arson is rare but dangerous. The police use fingerprints and cameras to find the criminals. Prosecutors then prepare the case for court.",
  "A smuggling group hides illegal goods in a lorry. At the border, police find the goods. The prosecutor accuses the group of trafficking, and the judge gives a heavy sentence. The leader has no alibi.",
  "The court acquits the woman: she has a strong alibi. The prosecutor made an error and the evidence was weak. The judge says: “The sentence is not guilty.” She leaves the court and hugs her family.",
];

CLOZE.business = [
  "A startup needs a good product and a budget. The entrepreneur invests money and negotiates with a partner. Sales are low at first, but the demand grows. After a year the company makes a profit.",
  "The competitor lowers its prices and sales fall. The shareholders worry about the loss. The company changes its advertising and reduces the budget. In the end, income rises and the profit returns.",
  "An entrepreneur starts a company with a big investment. The product is good, but the supply is small and the demand is high. He negotiates with a partner to produce more. The deadline is tight, but he succeeds.",
  "Industry and trade need good wages and strong sales. When demand falls, a company can go bankrupt. A partner can help with new investment. A shareholder expects profit, not loss.",
  "Tom works in advertising. His company has a client with a new product. The deadline is next week and the budget is small. He negotiates with the partner and finds a creative solution. Sales go up after the campaign.",
  "A startup has a great idea but little income. The entrepreneur looks for investment. A shareholder gives money in exchange for a part of the company. The partner develops the product, and the company grows.",
  "Supply and demand decide the price. When demand is high and supply is low, the price rises. When supply is high and demand is low, the price falls. Every entrepreneur and every partner must understand it, and every shareholder too.",
  "Ana is an entrepreneur in the food industry. Her product is organic bread. She invests her savings and negotiates with a supplier. Sales are good, but the competitor is strong. She fears loss and works hard on advertising.",
  "The company's wages are fair, but the income is falling. The shareholders ask for a plan. The manager reduces the budget and invests in a new product. He negotiates with a partner and hopes for profit next year.",
  "A bankrupt company has more loss than income. It cannot pay wages or buy products. The shareholders lose their investment. A good entrepreneur reads the market, controls the budget and meets every deadline.",
];

CLOZE.business2 = [
  "The retailer buys goods from a wholesale merchant. The turnover of the shop is high but the overheads are heavy. The debt to the creditor is large, so the manager checks the cash flow every week.",
  "A big company launches a takeover of a smaller competitor. The market share grows. The warehouse and the logistics improve. The payroll is high but the turnover is also good. The expenses are under control.",
  "A franchise lets a small owner use a famous brand. The clientele is already faithful. The owner pays a fee and follows the rules. If sales are low, the debt to the creditor grows and the liquidation is possible.",
  "In bad times, the inflation rate goes up, the budget deficit increases and the expenses rise. The retailer cuts overheads. The merchant reduces stock in the warehouse. The company survives with careful cash flow.",
  "A warehouse stores goods for a wholesale company. Logistics organises delivery to the retailer. The payroll pays the workers, and the cash flow shows if the company can pay its expenses. Good management avoids liquidation.",
  "Pedro owns a franchise of a famous restaurant. The clientele is large, the turnover is good, but the overheads are high. At the end of the year he has some debt but also a profit. “It is a good business,” he says.",
  "The creditor asks the company to pay its debt. The cash flow is weak and the expenses are high. The merchant proposes a payment plan. The creditor accepts, and the company avoids liquidation.",
  "Ana manages a warehouse. She controls the logistics, the payroll and the expenses. Her team delivers goods to retailers on time. The market share of the company is increasing thanks to good service.",
  "A takeover can be friendly or hard. After it, the turnover usually rises, but some staff may lose their jobs. The market share of the new company is bigger. The shareholders hope for profit and fewer overheads.",
  "The wholesale price is lower than the retail price. The merchant buys a lot at once, and the retailer sells to the clientele. The franchise follows the same rules. A high inflation rate can reduce profit.",
];

CLOZE.arts = [
  "At the gallery there is a sculpture and a painting. A famous portrait hangs next to a landscape. The critic says the artist is talented and creative. The masterpiece, painted on canvas, inspires many visitors.",
  "A poet writes a poem and a playwright writes a play. A composer writes a symphony. Literature is the art of words and music is the art of sounds. Each genre has its own style and its own audience.",
  "Culture and heritage are part of a country. Folklore tells old stories and sings old songs. A museum protects the heritage; a gallery shows paintings. A critic gives opinions on every new work.",
  "The painter works with a paintbrush on a canvas. He paints a portrait of his wife and a landscape of the sea. His style is simple and creative. The critic calls it a masterpiece, and the gallery buys it.",
  "A symphony by a famous composer inspires the audience. The orchestra plays with talent and emotion. Afterwards, the critic writes a review and says it was a masterpiece. A genre like old music keeps its heritage.",
  "Ana loves literature. She reads poems and plays. Her favourite poet is famous for his style. Her favourite playwright writes comedy. She says that art and culture help us understand the world.",
  "The sculpture in the square is a famous work of art. It shows a woman with a book. The artist says it was inspired by folklore. Many people take photos. The critic says the style is creative.",
  "An artist needs talent, but also creativity. Some prefer painting, others sculpture. Some write poems, others write a symphony. In every genre, the aim is to inspire people and to show an idea.",
  "A portrait shows a person, a landscape shows nature. A masterpiece is the best work of an artist. The canvas is the surface for a painting. The paintbrush is the tool. The gallery is where we see them.",
  "The play by a famous playwright has a beautiful style. The critic says it is a masterpiece of literature. The audience is inspired. The next day, a poet writes a poem about it, and a composer writes music.",
];

CLOZE.arts2 = [
  "The sculptor works with stone. The curator organises the exhibition, and at the auction, a painting by a famous artist is sold for a lot of money. A mural on the wall shows folk scenes. It is a great day for art.",
  "An abstract painter uses a palette of bright colours. He works at an easel with watercolour. First he makes a sketch, then he paints. A critic says his style is original and creative.",
  "The conductor leads the orchestra. The melody is beautiful and the rhythm is lively. The chorus sings the verse. After the opera, the audience stands and cheers. In another theatre, a ballet with famous choreography is on.",
  "Poetry has verse and rhythm. A literary work can be a poem, a novel or a play. The curator of the museum selects engravings and sketches for the exhibition. Visitors appreciate each work.",
  "At the auction, a sculpture and a mural are offered. The curator describes each work. A rich man buys an abstract watercolour for a high price. The money goes to the museum for new exhibitions.",
  "Tom takes a ballet class. The choreography is difficult, but the music has a nice rhythm and melody. His teacher is a former dancer. “Practice makes perfect,” she says. At the end of the year there is a show.",
  "A palette holds the colours of the painter. An easel supports the canvas. A sketch is a first drawing. A watercolour uses water and thin paint. A mural is a big painting on a wall. An engraving is a print.",
  "The opera has a chorus, main singers and an orchestra. The conductor controls the rhythm. The melody is famous. The verse of the song tells a love story. The audience, after the last note, stands and cheers.",
  "Ana is a curator in a gallery. She organises an exhibition of abstract art with a mural, sketches and watercolour paintings. She also arranges an auction to help a school. “Art unites people,” she says.",
  "A literary evening: a poet reads verse, a musician plays a melody, a conductor leads the chorus and a ballet group presents a choreography. It is a night of poetry, rhythm and art.",
];

CLOZE.global = [
  "In a democracy the citizens vote in an election. The government makes policy for the economy. The parliament discusses laws, and a minister is responsible for each area. Human rights protect every person.",
  "War causes a crisis. Refugees leave their country and cross the border to find peace. The government must protect human rights. A treaty can end a war. Peace is a great achievement of development.",
  "Inflation raises prices and hurts the economy. Workers go on strike and organise a protest. The government changes its policy. The minister promises reforms. The election is soon, and many citizens will vote.",
  "Globalisation connects the economy of different countries. Treaties make trade easier. But it can also create a crisis. Protests against globalisation say that human rights and development are more important than profit.",
  "Ana votes in the election. She believes in democracy and human rights. She follows the policy of the government and the debates in parliament. “Every vote counts,” she says, “for peace and development.”",
  "A border divides two countries. Refugees wait at the border for help. The minister of the government visits the camp. He promises a new policy for refugees and a treaty with the other country to end the crisis.",
  "A strike stops the transport. Workers protest against low wages. The government talks to the unions. The minister proposes a new policy for the economy. After a week, there is an agreement and the strike ends.",
  "In a democracy, parliament makes the law and the government applies it. Citizens have the right to vote, to protest and to speak. An election gives power to a new government. Peace and human rights depend on democracy.",
  "The war lasted three years. The economy of the country is weak, inflation is high and there are many refugees. A peace treaty brings hope. The government starts a new policy for development and the ministers visit the border.",
  "Tom studies politics. He learns about government, parliament, democracy and election. He wants to work for human rights. “The crisis in the world needs peace, not war,” he says. “That is my plan for development.”",
];

CLOZE.global2 = [
  "An ambassador speaks for a country abroad. At a summit, leaders form an alliance and discuss tension in the region. A ceasefire stops the fighting. The envoy negotiates with the military. Peacekeepers help to keep order.",
  "A dictator rules a country alone. The majority of citizens wants reform, but the military supports him. Some people go into exile. A humanitarian group brings help. The superpowers watch with tension.",
  "A colony fights for independence. After years of war, the country wins its freedom. The ambassador signs a treaty. The new government makes reforms. A humanitarian mission brings food, and peacekeepers keep the peace.",
  "An invasion by a superpower starts a war. The world is shocked. A summit meets, the envoy tries a negotiation and the ambassador speaks for his country. A ceasefire is agreed after many weeks.",
  "Terrorism is a danger to all. Countries form an alliance and share information. The military and the police work together. A summit discusses new measures. The majority wants peace and security.",
  "Maria is an ambassador. She meets leaders at a summit and works for an alliance between countries. She leads a negotiation about a ceasefire. “Peace needs patience,” she says. “And reform and independence need time.”",
  "The envoy arrives to negotiate. The tension is high: soldiers on both sides, the military in the streets. A ceasefire is possible. Peacekeepers wait at the border. Humanitarian help is ready for those in exile.",
  "A dictator falls after a big protest. The majority of people celebrate. The exile returns home. The new government plans reforms. The country becomes free and signs a treaty with its neighbour.",
  "Words of politics: ambassador, alliance, summit, ceasefire, invasion, terrorism, dictator, majority, reform, exile, negotiation, military, superpower, humanitarian, colony, independence, intervene, envoy, tension, peacekeeper. Write a sentence with each one.",
  "At the summit, the ambassadors form an alliance. The majority agrees on a reform. They intervene to stop the invasion. A ceasefire is signed, and peacekeepers take control. The humanitarian crisis ends slowly.",
];

CLOZE.newsb2 = [
  "The newspaper has a front page with breaking news. A reporter and a correspondent write the story, and the editor checks it. The journalism is reliable. The publisher decides the circulation. The press is free.",
  "A tabloid prints a scoop about a celebrity. It may be a rumour, and the story can be misleading. A good columnist checks facts. A reliable newspaper corrects mistakes. Fake news is a big problem in the media.",
  "Viewers watch the news on television. The broadcast starts at eight with breaking news. A correspondent reports from abroad. After the coverage, the editor decides what is important. Propaganda and censorship are dangers for journalism.",
  "Ana is a reporter. She works for a newspaper and writes articles. She tries to publish true stories, not rumours. “Fake news hurts society,” she says. Her editor agrees and checks every fact before the story appears.",
  "To subscribe to a newspaper means to pay to receive it. The circulation shows how many copies are sold. A tabloid sells many copies. A reliable press gives good coverage of news, not misleading stories.",
  "Censorship limits what the press can publish. Propaganda is information used to influence people. Free journalism is important for democracy. A good reporter shows the truth and a good editor protects it.",
  "Tom reads the front page. The headline is about a scoop: a minister resigns. The reporter has sources and the editor confirms the story. By evening the broadcast repeats the news and viewers discuss it.",
  "A rumour spreads fast. A tabloid prints it as news. A correspondent checks the facts and finds it is false. The editor publishes a correction. Reliable journalism is slow but honest.",
  "The publisher of the newspaper decides the circulation and the price. The writer writes his opinion. The reporter finds the story. The editor decides what goes on the front page. Everyone works for the reader.",
  "Misleading news is dangerous. Fake news, rumour and propaganda spread online. To be safe, check the source, subscribe to a reliable newspaper, and don't share a story before you read it. Good journalism needs good readers.",
];

CLOZE.newsb22 = [
  "The anchor reads the news bulletin. A caption shows the headline. The newsroom works fast. A spokesperson reads a press release, and a reporter asks questions. An exclusive story gives the broadcaster a big audience.",
  "Paparazzi follow a celebrity. A gossip article appears and the caption is sensational. The celebrity's spokesperson says it is a hoax. The newspaper publishes a correction. Sensationalism and misinformation are problems.",
  "A good reporter verifies the source before publishing. She investigates, checks every detail and writes her name in the byline. The editor checks it again. A hoax is false news; a correction fixes a mistake.",
  "In the newsroom, journalists investigate a story. They talk to a spokesperson, read a press release and verify the facts. The anchor presents an exclusive on the bulletin. The byline shows who wrote the article.",
  "Tom works in a newsroom. His job is to verify information and correct mistakes. Sometimes a hoax or misinformation reaches the desk. “We must censor nothing, but we must check everything,” he says.",
  "Sensational news attracts viewers but may be false. A serious broadcaster prefers verified facts. The anchor reads the bulletin calmly. A caption is added, a source is cited and the byline is clear.",
  "A press release is a text from a company or person. A spokesperson speaks for them. An exclusive is a story that only one media has. A hoax is a lie that looks like news. Misinformation spreads quickly online.",
  "The anchor says: “Here is an exclusive story.” The caption shows a famous celebrity. The paparazzi took photos, but the spokesperson denies it. The newsroom investigates and the story turns out to be a hoax.",
  "Sofia checks a sensational story. She finds the source, verifies the facts and reads the press release. The story is a hoax. She writes a correction with her byline. “Better to be correct than first,” she says.",
  "A broadcaster must be honest. It investigates, verifies, adds a caption and a byline, corrects errors and avoids sensationalism. The anchor and the reporters work together in the newsroom to give viewers real news.",
];

CLOZE.studyb2 = [
  "At university, a student writes a dissertation or a thesis. The supervisor guides the work. The syllabus shows what to study. There are seminars, tutorials and coursework. Attendance is important, and assessment is at the end.",
  "Plagiarism is copying someone else's work. It is a serious problem at university. Students must write their own text and cite their sources. A good scholar respects the rules of the discipline and learns with honesty. A good supervisor and a good syllabus help.",
  "Pedro enrols in a vocational course. It gives him a job qualification through an apprenticeship. He studies on a campus and also learns at work. He gets a grant to help with the cost.",
  "An undergraduate studies for a first degree. A postgraduate studies for a master degree. Distance learning allows study at home. The syllabus is the same, and assessment may be online.",
  "Ana is a postgraduate. She writes a thesis with the help of her supervisor. She attends seminars and tutorials. Her coursework is good and her attendance is perfect. She hopes to get a grant for the next year.",
  "Literacy is knowing how to read and write. A scholar studies a discipline very well. A dissertation is a long piece of writing. Assessment is the mark for your work. Attendance is being present in class.",
  "On campus there are lectures, seminars and tutorials. The students enrol at the start of the year. Their syllabus shows the coursework and the assessment dates. Plagiarism is not accepted.",
  "Tom studies by distance learning because he works full time. He downloads the syllabus, does the coursework and sends the dissertation online. His supervisor helps by email. He hopes the assessment goes well.",
  "A grant is money for study. An apprenticeship teaches a trade at work. A vocational course prepares for a profession. An undergraduate has a first degree to get, and a postgraduate already has one.",
  "The professor reads the thesis and asks questions. The scholar defends his ideas. The supervisor gives advice, the committee gives assessment. If he passes, he receives a postgraduate degree. He is proud of his work.",
];

CLOZE.studyb22 = [
  "In the faculty, the dean speaks to the alumni. The students write a research paper and prepare an oral exam. Those who fail may take a resit. The examiner gives a distinction to the best students. Campus life is busy.",
  "Ana chooses a major in biology. She wants a distinction in the oral exam. Her transcript shows excellent marks. She also joins an extracurricular group. A mature student in her class works with her on the research paper.",
  "A fellow is a teacher at a university. A sabbatical is a long break for study. A lecture hall is a big room for classes. Enrolment is the process to join a course. Plagiarising is copying other people's work.",
  "Tom proofreads his research paper before he sends it. He avoids plagiarising and checks his sources. The examiner will read it and give a mark. If he fails, there is a resit. He hopes for a distinction.",
  "The faculty has a lecture hall for two hundred students. The dean welcomes the new class. Enrolment is in September. Campus life includes extracurricular activities, sport and music. Alumni often visit and help.",
  "A mature student returns to university after many years. He enrols in a major, attends lectures and takes an oral exam. His transcript shows good results. He says: “It is never too late to study.”",
  "The professor goes on a sabbatical. A fellow takes his place and teaches in the lecture hall. The students write a research paper, and the examiner checks for plagiarism. Everything runs well.",
  "Words of university: proofread, resit, dean, faculty, major, alumni, lecture hall, transcript, fellow, examiner, sabbatical, distinction, mature student, plagiarise, extracurricular, enrolment, oral exam, research paper, campus life. Use some of them.",
  "Sofia's transcript has a distinction in her major. She did not plagiarise anything; she proofread her research paper twice. Her oral exam went well. The dean thanks her, and the alumni invite her to a party.",
  "After a failed exam, a student can take a resit. He studies again, proofreads his work and speaks with the examiner. If he passes, his transcript shows a good result. Many alumni say that a resit taught them to try again.",
];

CLOZE.mind = [
  "Pedro suffers from anxiety. He has a phobia of heights and finds it hard to cope with stress. His therapy helps him calm down. His therapist shows empathy and sympathy. Slowly his self-esteem grows.",
  "Her mood changes quickly. One moment she is cheerful, the next she is angry. These mood swings are hard to understand. Her temper is short. She sees a therapist to learn to cope with her reactions.",
  "Depression and anxiety are common. A person can feel overwhelmed, resentful or sad. A good friend can cheer you up and help you to calm down. Empathy and sympathy are important. Therapy can change a life.",
  "After a trauma, a person may feel guilt, fear and anger. An instinct tells the body to run or fight. A phobia is a strong fear. An obsession is a thought that does not stop. Therapy helps to understand and cope.",
  "Ana feels overwhelmed at work. She is close to burnout. Her reaction to stress is anxiety and bad sleep. Her friend says: “You need a break.” She talks to a therapist and her self-esteem and mood get better.",
  "To cope with stress, breathe slowly, calm down and talk to someone. If you feel resentful, think about the reason. Don't let guilt or obsession take over. A positive mood and good self-esteem are possible.",
  "Tom feels guilt after a fight with his brother. He has an instinct to say sorry, but his temper stops him. Finally, he calls his brother. The reaction is warm. Empathy and sympathy help the relationship.",
  "A mood swing is a sudden change of feeling. A phobia is a very strong fear. Anxiety is worry about the future. Depression is a deep sadness. Self-esteem is how you value yourself. Therapy is treatment for the mind.",
  "Sofia was resentful of her sister, but therapy helped her to calm down. She learned to cope with her anger and show empathy. Her mood is better and her family sees the change. “I feel lighter,” she says.",
  "When someone is overwhelmed, a friend can cheer them up. A walk, a talk or a laugh can calm the mind. But if the anxiety or depression stays, therapy and a doctor can help. Mental health matters.",
];

CLOZE.mind2 = [
  "Motivation and confidence help us succeed. Optimism makes us hopeful and pessimism makes us afraid. A person with a positive mindset sees problems as challenges. Frustration is normal, but mindfulness helps to stay calm.",
  "An introvert prefers quiet and few friends. An extrovert likes parties and many friends. Neither is better. A counsellor says that perception is different for each person. Insecure people need support and confidence.",
  "Tom is stubborn and a bit reckless. His friends worry about his panic when things go wrong. He feels embarrassment and frustration. With a counsellor, he learns mindfulness and gets a more positive mindset.",
  "After a loss comes grief. Anguish and sadness can last a long time. A counsellor helps to cope. Time and the support of family bring back motivation. Little by little, optimism returns.",
  "The subconscious is the part of the mind that works without you noticing. Perception is how you see things. Mindset is the attitude of your mind. A positive mindset and mindfulness reduce panic and frustration.",
  "Ana is an introvert but not insecure. She has confidence in her work and motivation to learn. Her friend is an extrovert and loves parties. They are very different but understand each other with empathy.",
  "A bewildered man stands in the street. He feels panic and embarrassment: he is lost. A stranger helps him with calm. The man is grateful and his frustration goes. Optimism returns when you are helped.",
  "Optimism and pessimism: one person sees a half-full glass, another sees a half-empty one. A person with confidence and motivation tries again. A stubborn person doesn't change his mind, even when he's wrong.",
  "Sofia has strong motivation but low confidence. She feels insecure at work and panics before meetings. A counsellor teaches her mindfulness. Her mindset changes, and her perception of herself becomes more positive.",
  "Words of the mind: frustration, motivation, confidence, insecure, optimism, pessimism, perception, subconscious, introvert, extrovert, mindset, grief, mindfulness, counsellor, panic, stubborn, reckless, bewildered, embarrassment, anguish. Which do you feel more often?",
];

CLOZE.medicineb2 = [
  "The surgeon makes a diagnosis and decides on an operation. The patient goes to the ward before surgery. After the operation, the recovery takes a few days. The doctor writes a prescription and gives the right dose of medicine.",
  "An epidemic spreads fast. Vaccination makes people immune. A contagious illness needs isolation. A chronic illness lasts a long time. Obesity and addiction are health problems that need a specialist.",
  "At a check-up, the doctor examines the patient and gives a diagnosis. He writes a prescription for a medicine with the right dose. He explains the side effect and the time of recovery. The patient thanks him.",
  "A patient in a wheelchair goes to the ward. A specialist explains the operation. The anaesthetic will let him sleep. The surgeon will remove the problem with a few stitches. Recovery will take a month.",
  "Tom has a chronic problem. He goes to a specialist every six months. The doctor changes his dose and warns him about side effects. His diagnosis is stable, and he feels good thanks to regular visits.",
  "Vaccination protects against contagious illnesses. If many people are immune, an epidemic cannot spread. A side effect, such as a fever or a sore arm, is usually small. The benefits are much bigger.",
  "Ana's father has an operation. The surgeon is calm and the anaesthetic works well. In the ward, a nurse takes care of him. His recovery is fast. After a week he can go home with a prescription.",
  "Words of the hospital: diagnosis, surgery, surgeon, prescription, patient, dose, epidemic, immune, operation, side effect, recovery, vaccination, ward, wheelchair, check-up, addiction, obesity, chronic, contagious, anaesthetic, specialist, stitch. Learn them well.",
  "Obesity can lead to chronic illness. A specialist suggests a new diet and exercise. The patient follows the dose of medicine and goes to a check-up each month. The recovery of his health takes time but works.",
  "Sofia is a surgeon. Every day she meets patients in the ward and decides on operations. She uses anaesthetic and a few stitches to repair the problem. “Recovery is the best part of my job,” she says.",
];

CLOZE.medicine2 = [
  "Antibodies fight disease. Diabetes and asthma are chronic. Cancer and a tumour need treatment. A heart attack or a stroke is an emergency. An X-ray and a blood test help the diagnosis.",
  "A patient has a heart attack. The ambulance carries him on a stretcher. In intensive care he receives treatment. He has a drip in his arm. After a few days, he moves to a normal ward and starts physiotherapy.",
  "A transplant is an operation to replace a part of the body. A donor gives that part. The patient needs medicine to avoid problems. Recovery includes physiotherapy and regular blood tests. A relapse is a return of the illness.",
  "Dementia affects memory. A migraine is a strong headache. If a person is paralysed, physiotherapy helps. An outpatient visits the hospital for treatment and goes home the same day. Many illnesses, like cancer, diabetes and asthma, need patience.",
  "Tom has asthma and diabetes. He checks his blood with a blood test every day. He takes medicine for his asthma and for his diabetes. His doctor does a regular X-ray. “With treatment I live a normal life,” he says.",
  "Ana's grandmother has dementia. Sometimes she forgets names, but she remembers old songs. The family helps her and takes her to the hospital as an outpatient. A doctor says that kind care and physiotherapy are the best treatment, and a migraine is not a problem for her.",
  "After a stroke, Pedro is paralysed on one side. In intensive care, he gets a drip and treatment. Later he begins physiotherapy. A specialist says the recovery will be slow, but he has hope. A relapse is possible, so he is careful.",
  "A donor is a person who gives blood or part of the body. A transplant saves lives. A blood test checks if the donor and the patient are compatible. Then an operation is arranged. After the transplant, physiotherapy and a drip in intensive care help. Everyone hopes that the patient will recover.",
  "A migraine can last hours. The pain is strong, the light hurts and sometimes there is nausea. A tablet or some sleep helps. If migraines come often, a doctor can check for a tumour with an X-ray and a blood test.",
  "Words of illness: antibody, asthma, diabetes, cancer, tumour, heart attack, stroke, X-ray, intensive care, transplant, donor, physiotherapy, dementia, paralysed, migraine, stretcher, outpatient, relapse, blood test, drip. Choose five words and use each in a sentence.",
];

CLOZE.cityb2 = [
  "Many people commute to the city every day. At rush hour there is congestion and a traffic jam. The infrastructure is old and the air quality is poor. Cyclists use the cycle lane. Pedestrians walk on the pavement.",
  "The city has a famous landmark and a tall skyscraper. In the suburb, there are houses. The cost of living is high in the centre, so many families live in a housing estate in a residential district. Some districts are overcrowded.",
  "Urban life is exciting but expensive. Rural life is quiet and cheaper. In the municipality, the council improves the infrastructure and builds a new cycle lane. Gentrification changes some districts and raises prices.",
  "A slum is a poor district with bad housing. Pedestrians in the city need a safe pavement. Congestion at rush hour harms the air quality. Cities must improve public transport and the cost of living.",
  "Tom lives in the suburb and commutes to the city. At rush hour the train is overcrowded and the road has a traffic jam. He decides to use a bicycle in the cycle lane. The air is cleaner and the journey is faster.",
  "A skyscraper is a very tall building. A landmark is a famous place. A district is a part of the city. The municipality is the local government. A housing estate is a group of homes. Urban life has all of them.",
  "In rural areas, the population is smaller. Life is slower and quieter. In urban areas, there is congestion, noise and a high cost of living. Many people prefer the suburb: it is a compromise between the two.",
  "Ana walks along the pavement in the centre. She sees a landmark, a skyscraper and a crowd. The air quality is bad and a traffic jam fills the road. “I prefer the residential district,” she says. “It is quiet.”",
  "Gentrification happens when a poor district becomes rich. The cost of living rises and old residents must leave. The municipality tries to protect them with new housing. The district gets new infrastructure.",
  "During rush hour, commuters fill trains and buses. There is congestion on the roads. A cycle lane helps cyclists. Good infrastructure and public transport improve life in the city and the air quality.",
];

CLOZE.cityb22 = [
  "The council wants a bypass and a ring road to reduce traffic. The flyover is already busy. In the downtown area, there are parking meters, tower blocks and bustling streets. The skyline is full of neon lights.",
  "Tom is a tenant. His landlord wants to end the lease. There is a risk of eviction. The council helps with regeneration of the area. The suburban houses are quiet, but the downtown flats are expensive.",
  "On the high street there are shops with neon signs. The street is cobbled and has a streetlight at each corner. At night it is bustling. Under the street, there are sewers and a manhole every few metres.",
  "A lease is a contract to rent a home. A tenant pays rent, and a landlord owns the property. If the tenant does not pay, there may be an eviction. The council can help people who cannot afford a flat.",
  "Regeneration changes an old area. The council removes old tower blocks and builds a new park. A bypass takes traffic out of the centre. A new high street brings shops and bustling life downtown.",
  "Ana walks in the downtown area. She sees the skyline with tall tower blocks. Neon lights shine on the high street. She pays a parking meter and goes to a cafe on a cobbled street. “I love the city at night,” she says.",
  "A ring road goes around the city. A bypass avoids the centre. A flyover crosses a road at a higher level. These roads reduce traffic. But a suburban resident may complain about the noise.",
  "The landlord increases the rent. The tenant cannot pay and receives an eviction notice. The council gives help with housing. The lease says that the landlord must give notice, so the tenant has time to look for another flat.",
  "A manhole covers the sewer. A streetlight lights the road. A parking meter takes coins. A cobbled street is made of stones. A high street is the main shopping road. These details are part of every city.",
  "Pedro lives in a suburban house. He works downtown and goes there by the ring road. In the evening he sees the skyline and the neon signs. “The city is bustling,” he says, “but I prefer my quiet suburb.”",
];

CLOZE.familyb2 = [
  "Upbringing shapes a person. Siblings can get along with each other or have a sibling rivalry. In-laws are part of the extended family. Trust, loyalty and affection create a strong bond in a household.",
  "After a divorce, custody of the children is a big question. The spouse who lives with the children has more responsibility. A guardian may be needed. The generation gap can make life difficult.",
  "Tom looks up to his older brother. He takes after his father in many ways. Sometimes they fall out, but they always get along again. Their bond is strong, their loyalty is clear, and their sibling rivalry is gentle. Their upbringing was loving.",
  "An anniversary is a special day for a couple. They remember the engagement, the wedding and the years together. The spouse gives a gift and shows affection. The in-laws come for dinner and the whole extended family celebrates.",
  "A breakup is hard. The couple may share a household, trust or loyalty, and ending it hurts. Friends and family help with affection. After some time, each person begins a new life.",
  "Ana and her sister have a sibling rivalry, but they love each other. They get along better now. Their parents were strict, but their upbringing was loving. Their bond with the extended family is strong.",
  "The generation gap exists when parents and children think differently. Respect, trust and affection reduce the problem. Grandparents often bridge the gap, because they have experience and patience with both generations, and a strong bond with the whole household.",
  "Pedro and Maria are engaged. They will get married in June. Their in-laws are friendly. They will live together in a household of their own. Trust and loyalty are the base of their life together.",
  "A guardian takes care of a child when the parents cannot. Custody decides who lives with the child after a divorce. A household is the people living in a home. A spouse is a husband or wife.",
  "I look up to my grandmother. I take after her in many ways: I am patient and calm. In my extended family there is no sibling rivalry, only affection. We get along well and never fall out for long.",
];

CLOZE.family2 = [
  "A stepmother and a stepfather join a family after a wedding. A bride and a groom are newlyweds on their wedding day. Relatives, godfather and godmother come to the party. Toddlers run and play.",
  "An orphan has no parents. Sometimes a family chooses to adopt a child, and adoption gives the child a home. A good nanny or relative can help with parenting. A widow or widower may need support from the family.",
  "At a funeral, relatives come together to say goodbye. After it, the heir receives the inheritance. A will explains who gets what. The family may have a reunion later to remember the dead person and share old stories.",
  "The newlyweds are very happy. The bride wears a white dress and the groom a suit. The godfather and the godmother give them a gift. At the party, toddlers dance and relatives take photos.",
  "Tom and Ana adopt an orphan. The adoption takes a year. The child becomes part of the family. She has a new brother and many relatives. Parenting is hard, but they are very happy.",
  "Too much attention can spoil a toddler. A babysitter or a nanny helps parents. They should not spoil the child but show love and rules. Good parenting needs patience and a lot of affection.",
  "A widow is a woman whose husband died. A widower is a man whose wife died. They often get comfort from relatives. A reunion with the family helps to feel less alone.",
  "My godfather is a funny man. My godmother is very kind. At my birthday they come with gifts. My stepmother cooks and my stepfather plays with my sister, who is still a toddler. We are a big happy family.",
  "The heir to the family farm receives the inheritance from his father. He is the only child. At the funeral, relatives from all over come. After the funeral, there is a reunion with food and memories.",
  "A babysitter takes care of a child for some hours. A nanny works every day. Good parenting is not to spoil a child but to teach. An adoption is when a family takes a child as their own.",
];

CLOZE.employment = [
  "There is a vacancy at the company. Ana sends her resume. She is skilled and qualified. If she gets the job, she will be permanent. The notice period is one month. She hopes to leave her temporary job soon.",
  "Pedro is unemployed and looks for a job. He sees a vacancy for a manual job. He sends his resume and the employer calls him for a shift on probation. After three months, he becomes a permanent member of the workforce.",
  "A self-employed person works for himself. An employee works for a company. A trade union defends workers. A pension is money you receive when you retire. Job satisfaction is how happy you are at work.",
  "Maria does an internship at a big company. The internship is temporary, but the work is useful. She hopes for a permanent job. Her colleagues say she is a skilled worker. If she is lucky, she will climb the career ladder.",
  "Commuters travel to their workplace every morning. Some have a side job in the evening. The shift starts at six. The workforce of the factory is large. The trade union asks for better conditions.",
  "Tom resigns. He gives notice, and his notice period is two weeks. The resignation is sad for his colleagues. He wants a more qualified job with better job satisfaction. His next shift is in a new company.",
  "When you retire, you receive a pension. Many people become self-employed after retirement. They enjoy a side job without the pressure of the career ladder. Experience makes them skilled and valued.",
  "A vacancy is a job that is free. A resume lists your education and experience. Probation is the test period of a new job. A shift is a work period. A temporary job ends; a permanent job continues.",
  "Sofia is a skilled and qualified worker. She applies for a vacancy and does well in probation. Her employer offers a permanent contract. She is happy: her job satisfaction is high, and the career ladder is clear.",
  "Unemployed people can get support. They can learn new skills in an internship, send a resume to a company and join the workforce again. A trade union can help to find a vacancy and protects workers' rights.",
];

CLOZE.employment2 = [
  "A headhunter finds good applicants for a company. The shortlist has three names. The best applicant gets the job and a pay rise. Benefits include flexitime and telework. The head office is in the city.",
  "Ana works part-time at the head office. Her boss offers flexitime and a pay rise. She likes telework: she can work from home. She is not a workaholic, but she has employability and a good mentor.",
  "Tom is overqualified for his job. He has a degree but works in a small office. After a dismissal of his colleague, he fears a demotion. He talks to a headhunter and hopes to find a better job in the job market.",
  "A glass ceiling stops some people from getting a top job. A mentor can help. A sack is the end of a job. Dismissal and demotion are not nice. A pay rise and benefits are rewards for good work.",
  "Payday is the day you get paid. A workaholic works too much, even on payday. A full-time job has more hours than a part-time job. Flexitime lets you choose your hours. Telework means work from home.",
  "The company needs to cut costs and plans a dismissal. The employees with less experience are afraid of the sack. The head office offers benefits for those who leave. Others get a demotion.",
  "A good headhunter knows the job market well. He looks at the resumes of applicants, makes a shortlist and sends them to interviews. The employability of a person depends on skills, experience and attitude.",
  "Sofia gets a pay rise. She is happy: her benefits are good, and she has flexitime. She has a good mentor and likes her head office. She is not a workaholic, but she is proud of her work.",
  "In the job market, employability is important. Skills, education and a good mentor help. A glass ceiling can be a problem, but flexitime, telework and part-time options offer new chances.",
  "Pedro is a workaholic. He works full-time and on payday he is still in the office. His wife says: “Take a day off!” He understands, asks for flexitime and some telework. His pay rise doesn't matter now.",
];

CLOZE.culture = [
  "When you emigrate, you can feel homesick and have culture shock. An expat lives in a multicultural country and learns new customs. Hospitality is different everywhere. Tolerance and being open-minded help with cultural exchange.",
  "A stereotype is a fixed idea about a group. It is often wrong. Native speakers of a language may have a dialect. Cuisine and etiquette are also different. An open-minded person tries to understand rather than judge.",
  "Ana emigrates to England. At first she feels homesick and has culture shock. The cuisine is exotic, the etiquette is different and the dialect is hard to understand. After some months, she integrates and makes friends.",
  "A pilgrimage is a religious journey. Folk music shows the roots of a culture. People learn about their ancestors and traditions. To assimilate means to become part of a new culture. To integrate means to take part and keep your identity.",
  "Tom is an expat in Japan. He loves the authentic food and the hospitality of the people. He studies the etiquette and talks to native friends. His open-minded attitude and tolerance help him to enjoy cultural exchange.",
  "A multicultural city has people from many backgrounds. The cuisine is varied, the languages are different and tolerance is important. There are festivals with folk music and exotic dishes. People share and learn from one another.",
  "A dialect is a form of a language in one area. Native speakers use it every day. A stereotype can make people think wrongly about a dialect or a cuisine. Open-minded people ask and listen.",
  "Sofia knows her roots. She studies the traditions of her ancestors and visits her native village. She talks to the elders and loves the authentic food. “Understanding the past helps me in the present,” she says.",
  "Hospitality is a strong tradition in many cultures. Guests receive food and a place to stay. In other cultures, etiquette is more formal. Learning these differences avoids stereotype and misunderstanding, and builds tolerance and open-minded cultural exchange.",
  "Cultural exchange programmes allow students to emigrate for a short time. They live with a family, eat the cuisine and learn the dialect. They may feel homesick, but they return with open-minded ideas.",
];

CLOZE.culture2 = [
  "A carnival has a parade with costumes and folk dance. A ritual is a ceremony. A superstition is a belief without proof. A myth or a legend is an old story. Every culture has its beliefs and taboos.",
  "Archaeology studies ruins and artefacts. A scientist of the past finds old objects and explains the life of ancient people. A translator helps to read old texts. Indigenous people and tribes keep their legends alive.",
  "Nomads move from place to place. Some tribes are indigenous to their land. Colonial powers often changed their lives. A pilgrim goes on a religious journey. A dress code says what to wear in a place.",
  "In my city, the carnival is on a Sunday. There is a parade, a folk dance and many costumes. People believe in an old legend about the carnival. It is a ritual that brings the whole community together.",
  "A taboo is something that people avoid talking about. A superstition says that a black cat brings bad luck. A myth explains something in nature. A belief is something a person thinks is true, without proof.",
  "Tom visits ruins on holiday. He sees artefacts in a museum and meets a scientist of the past. A translator explains the ancient writing. “Every artefact tells a story,” he says. He loves legends and old myths.",
  "The indigenous tribe keeps its rituals and its dress code. They perform a folk dance for visitors. The elders tell a legend. Colonial history harmed them, but now they keep their culture and teach it to young people.",
  "Pilgrims walk for days to a special place. They believe the journey brings peace. Their ritual is old. Nomads cross the desert with animals, and a tribe may follow a legend or a taboo. Both pilgrims and nomads show how people live differently.",
  "A costume parade fills the streets. People wear masks and dance. The ritual is thousands of years old. Some old superstitions say that the parade keeps away bad luck. Visitors come from all over to see it.",
  "The carnival, the parade, the ritual, the superstition, the myth, the legend, the belief, the ruins, the artefact, the taboo, the costume, the translator, the tribe, the nomad and the pilgrim: all are words of culture. Choose some and write sentences.",
];

CLOZE.social = [
  "Every day, I scroll through my feed. I get a notification when a follower shares a post or likes my photo. An influencer uses a hashtag to reach more people. Screen time is high, so I try to log in less.",
  "Cyberbullying and trolling are problems on social media. A username hides identity, but your online identity and digital footprint are never completely private. If someone is rude, you can mute or unfriend them.",
  "A video can go viral in a few hours. Some posts use clickbait to get views. A good user checks facts. A live-stream shows events as they happen. Your profile and username show who you are, and your followers see your feed.",
  "Ana is an influencer. She has many followers and shares photos with a hashtag. She also does a live-stream. Her feed is full of likes and comments. She tries to limit her screen time and block trolling.",
  "To stay safe online: protect your profile, choose a good username, don't share too much, think about your digital footprint, mute rude users and report cyberbullying. Use social media with care.",
  "Tom unfriends a person who is rude to him. He also mutes a noisy group. His notifications are fewer now. He logs in less often and scrolls less. His screen time drops and he feels calmer.",
  "A clickbait title promises something amazing but gives little. People click on it and the post goes viral. A careful reader doesn't share it before checking. Good content creates real engagement, not just clicks, and an honest influencer or follower shares it on the feed.",
  "Your online identity is how others see you on the internet. A profile photo, a username and your posts all build it. Your followers see your feed, and a like or a share is part of your digital footprint. It can stay for years.",
  "Sofia posts a photo and gets many likes. A friend shares it and the post goes viral. Followers write comments. Some are nice, but a rude person writes something bad. Sofia mutes the user and goes on.",
  "Words of social media: follower, influencer, share, hashtag, feed, notification, cyberbullying, screen time, online identity, stream, username, profile, likes, trolling, mute, go viral, clickbait, digital footprint, log in, scroll, unfriend, live-stream.",
];

CLOZE.social2 = [
  "A vlog is a video blog. A content creator posts a thread or a meme and gets engagement. A filter bubble and an echo chamber show only what you like. Phishing and malware are online dangers. A captcha proves you are human.",
  "Pedro gets a direct message with a strange link. It is phishing: a trick to steal data. He blocks the sender and deletes the message. He also removes cookies and updates his security. “Malware is a real danger,” he says.",
  "A fake account pretends to be a real person. A subscription gives access to a service. On the timeline you see posts in order. Sponsored posts are adverts. You can unfollow an account if you don't like it.",
  "Ana is a content creator. She makes a vlog every week and posts a thread on her timeline. A meme about her video goes viral. Her engagement is high. Her subscription list grows every day.",
  "In an echo chamber you only hear opinions like yours. A filter bubble is created by algorithms. To escape them, follow different accounts, read different views, and don't just retweet what you like. A fake account or a meme can make the bubble worse.",
  "Malware is a program that harms your device. Phishing tricks you into giving data. A captcha asks you to click on pictures. Cookies store your preferences. Be careful with links, sponsored posts and strange direct messages from a fake account.",
  "Tom unfollows a fake account. He blocks the sender of a suspicious direct message. He doesn't retweet a meme before checking. He knows that a filter bubble and an echo chamber can give a false idea of the world, so he follows different opinions on his timeline.",
  "Sponsored content is paid advertising. Engagement is the number of likes, comments and shares. A content creator often depends on subscription and adverts. Honesty about adverts is important.",
  "A thread is a series of connected posts. A direct message is private. A retweet shares another person's post. A timeline shows posts in order. A block stops a person from contacting you. A fake account pretends to be someone else.",
  "Sofia protects herself online: she doesn't click on strange links, she blocks fake accounts, she reads sponsored posts with care and she tries to see different opinions. She leaves the echo chamber and enjoys better engagement.",
];

CLOZE.energy = [
  "Coal, crude oil and natural gas are fossil fuels. A power plant burns them to make electricity. Nuclear energy is another source. Solar panels, wind turbines and hydroelectric dams give renewable energy. The grid carries electricity to homes.",
  "A blackout is a power failure. It happens when there is a shortage of energy or a problem on the grid. Good storage and efficient use reduce the risk. Insulation in houses also lowers consumption.",
  "Tom installs solar panels on his roof. His consumption of energy from the grid falls. The panels are efficient and the insulation of his house is good. He hopes to live off the grid one day.",
  "The country depends on crude oil from abroad. This dependence is a risk. A carbon tax makes fossil fuels more expensive. Governments invest in tidal energy, biofuel and wind turbines to reduce it.",
  "A dam on the river produces hydroelectric power. The power plant is big and efficient. In summer, there is a shortage of water and energy is scarce. Storage in batteries could help the grid.",
  "Ana wants to reduce her consumption of energy. She uses better insulation, efficient light bulbs and a solar panel. She tries to avoid a blackout and saves money. “Energy is precious,” she says.",
  "Wind turbines turn in the breeze and produce electricity. Solar panels work well in sunny areas. Tidal power uses the sea. Biofuel comes from plants. These sources are renewable and clean, different from coal and crude oil.",
  "Natural gas and coal make carbon dioxide when they burn. Nuclear power makes none, but it creates dangerous waste. A carbon tax pushes companies to use cleaner energy and reduce consumption.",
  "A village lives off the grid. It has solar panels, a small dam and a wind turbine. Storage batteries give light at night. There is no blackout, and the energy is cheap and clean. Other villages want the same.",
  "Words of energy: coal, nuclear, wind turbine, solar panel, hydroelectric, power plant, blackout, grid, crude oil, natural gas, consumption, efficient, insulation, dam, shortage, scarce, dependence, tidal, biofuel, carbon tax, storage, off the grid.",
];

CLOZE.energy2 = [
  "Fossil fuel, diesel and natural gas come from the ground. A refinery processes oil. A pipeline carries it. Drilling and mining are needed to get them. An oil rig is in the sea. An oil spill harms nature.",
  "An electric car, a hybrid or a fuel cell car pollutes less than a diesel car. Hydrogen is a clean fuel. A smart meter shows your electricity use. A power cut stops everything in the house.",
  "A miner works under the ground. Mining gives coal and metals. Drilling gives oil. After an oil spill, workers clean the sea. Geothermal and wave power use the Earth's heat and the sea instead of fossil fuel.",
  "Tom buys a hybrid car. It uses petrol and electricity. His friend has an electric car and a smart meter at home. His brother drives a diesel car and pays more for fuel. “The future is electric,” says Tom.",
  "Voltage is the force of electricity. A circuit is the path it follows. A power cut happens when the circuit is broken. Nuclear power makes a lot of electricity, but it needs strict safety.",
  "Ana visits a refinery. She sees pipelines, big containers and workers. A guide explains that the oil comes from drilling at sea, from an oil rig. “It is a big industry,” she says, “but it must be safe and clean.”",
  "Hydrogen and a fuel cell can power a car with only water as waste. Geothermal energy uses heat from the Earth. Wave power uses the movement of the sea. These sources help to reduce the use of fossil fuel.",
  "An oil spill from an oil rig kills birds and fish. Workers and volunteers clean the beaches. The company pays for the damage. Many people say we need less drilling and more electric cars.",
  "A smart meter measures how much electricity you use. It helps you save money and avoid a power cut. A good circuit and the right voltage keep the house safe. Efficient devices help the planet too.",
  "The miner goes down the mine every morning. Coal is mined and sent to a power plant. There is less demand now, because of nuclear power and renewables. The miner worries about his job. The miner and the refinery worker, with the voltage of the grid and a pipeline nearby, talk about drilling and the oil rig.",
];

CLOZE.trends = [
  "Sales increased in January, remained steady in February and rose sharply in March. In April, they peaked, then fell slightly. Overall, there was a gradual increase, with a dramatic rise at the peak.",
  "The unemployment figure decreased from ten to eight per cent. Then it levelled off. The trend is positive, but it will not fall dramatically. Approximately two thousand new jobs appeared overall.",
  "The price of petrol soared last year, then plummeted. Now it remains steady. The figure doubled in six months and halved in three. Overall, the trend was hard to know.",
  "Temperatures rise gradually in spring and peak in July. They fall in September and remain low in winter. The slight changes in October are normal. The overall trend is for each season.",
  "The population doubled in thirty years, while the number of schools tripled. Hospital beds increased sharply, then levelled off. The figures show a steady and gradual development, with a slight fall in the last year.",
  "A graph can show a rise, a fall, a peak, a level off, a sharp change or a gradual change. When the number is twice as big, we say it doubled. When it is half, it halved. When it is three times, it tripled.",
  "Tom looks at the sales figures. They rose sharply in spring, peaked in June and fell in autumn. In winter they remained steady. “Overall, the trend is positive,” he says.",
  "Prices soared after the crisis and then fell back. The overall trend was a slight decrease. Wages remained steady. The government hoped that the figure would level off soon.",
  "Ana writes a report. She says: “The number of visitors increased gradually, peaked in August and decreased slightly in September. Overall, it rose by approximately twenty per cent.”",
  "Words for graphs: increase, decrease, rise, fall, soar, plummet, peak, level off, gradual, steady, dramatic, slight, sharp, trend, figure, double, triple, halve, approximately, overall, remain. Use some of them.",
];

CLOZE.causes = [
  "Bad weather was the cause of the delay. The consequence was a long queue at the airport. Because of the storm, flights were cancelled. As a result, many passengers had to stay in a hotel. The cause of the delay was the effect of bad weather, and the consequence was a trigger for more problems.",
  "A small spark can trigger a big fire. The fire led to damage in the forest. The impact on wildlife was serious. A chain reaction affected the whole area, and the repercussions lasted for years.",
  "Smoking can lead to illness. The effect on health is serious. It contributes to heart problems and cancer. Therefore, many countries try to reduce it. The root cause is often habit.",
  "The reason for the traffic jam was an accident. The consequence was a delay of two hours. Because of this, many people were late. Due to the problem, the police closed the road.",
  "Poverty can result in poor education, and poor education can lead to poor jobs. This chain reaction affects whole families. To break it, we must find the root cause and act.",
  "The new tax backfired: instead of more money, the government got less, because companies moved abroad. The knock-on effect was more unemployment, and the repercussions affected many workers. The root cause was a bad policy that did not account for companies.",
  "Tom studied hard, so he passed the exam. Because of that, he got a scholarship. The result of his work brought good consequences. It accounts for his success: effort and discipline. It was the effect of his work, the reason for his success and the cause of a result that led to a scholarship.",
  "A cause makes something happen. An effect is the result. A consequence is what follows. A trigger starts a process. To account for something means to explain it. A knock-on effect is an result that is not direct.",
  "The economic crisis originated in the banking system. It affected many countries. Unemployment increased and trade fell. The impact was strong and the repercussions were felt for years.",
  "Climate change has many causes and effects. Burning fossil fuels contributes to it. As a result, the ice melts and the sea level rises. This brings flooding, which affects many people and animals. The repercussions and the impact are the effect of the cause.",
];

CLOZE.housing = [
  "The estate agent shows a detached house with a garden. Next to it is a semi-detached house. In the city there are terraced houses, a penthouse and a studio flat. The valuation depends on size and location.",
  "A first-time buyer needs a down payment. The property ladder starts with a small flat. A fixer-upper is cheap but needs work. When the housing market rises, prices are higher. A good valuation helps to decide.",
  "Ana wants to let her furnished flat. The estate agent says an unfurnished flat is easier to rent. She prepares a roof terrace and a new extension. Soon a tenant moves in.",
  "Pedro moves out of his parents' house. He rents a studio flat. Later he buys a bungalow. The house needs a conversion of the attic and an extension. He enjoys the work on his fixer-upper.",
  "A penthouse is at the top of a building. A detached house stands alone. A semi-detached house shares one wall. A terraced house is in a line. A bungalow has one floor. Which do you prefer?",
  "In a good housing market, the property is expensive and a first-time buyer finds it hard to get a down payment. The estate agent explains the valuation and the mortgage. Many young people still rent.",
  "The conversion of an old farm building into a house is a big project. The estate agent says that the valuation will be high when it's finished. The new owner adds a roof terrace and an extension.",
  "Moving in is exciting. The first day in a new house, you carry boxes and open windows. When you move out, you clean and give the keys. The estate agent checks the property and the lease ends. The estate agent and the first-time buyer talk about the property and the valuation.",
  "Tom is a first-time buyer. He finds a fixer-upper with a small garden. The down payment is high, but the property is cheap. He plans a conversion and an extension to make it a family home.",
  "Words for buying a home: property, estate agent, let, down payment, valuation, furnished, unfurnished, detached, semi-detached, terraced, bungalow, penthouse, studio flat, conversion, extension, move in, move out, roof terrace, housing market, first-time buyer, property ladder, fixer-upper.",
];

CLOZE.nutrition = [
  "Good nutrition needs protein, carbohydrate, fibre and minerals. Dairy foods give vitamins. A varied diet with low-fat and sugar-free options reduces risks. Junk food has a lot of calories and few nutrients.",
  "Processed food often has additives and preservatives. Some people are allergic to gluten or lactose. Digestion is easier with fibre. An omnivore eats plants and meat. Fasting is not eating for some time.",
  "Ana checks the label of a product. It has too many calories, additives and sugar. She prefers a low-fat, sugar-free yoghurt with fibre and minerals. “Nutrition is important,” she says. “My intake of junk food is low.”",
  "Tom is undernourished. His intake of protein and carbohydrate is too low. A nutrition expert recommends dairy, fibre, minerals and more calories. After some months, he is healthier and stronger.",
  "A balanced diet includes protein, carbohydrate, fibre and minerals. It limits junk food, additives and preservatives. For people who are allergic to gluten or lactose, special foods exist.",
  "An omnivore eats everything. A person who does fasting does not eat for a time. Digestion starts in the mouth. Fibre helps digestion. Calories give energy. Nutrients are in foods.",
  "Sofia reads about nutrition. She learns that processed food has additives and preservatives. She chooses fresh products, protein, fibre and dairy. “My intake of calories is under control,” she says.",
  "Lactose is in milk and gluten is in bread. Some people are allergic to them. Sugar-free and low-fat foods are alternatives. A good diet without junk food and with minerals brings energy and health.",
  "A nutrition expert explains: protein builds muscles, carbohydrate gives energy, fibre helps digestion, minerals protect bones. The daily intake of calories depends on age and activity. Avoid junk food and additives.",
  "Words of nutrition: nutrition, nutrient, protein, carbohydrate, fibre, calorie, additive, preservative, processed, gluten, lactose, allergic, digestion, fasting, omnivore, low-fat, sugar-free, mineral, dairy, junk food, intake, undernourished. Words of nutrition: nutrition, nutrient, protein, carbohydrate, fibre, calorie, additive, preservative, processed, gluten, lactose, allergic, digestion, fasting, omnivore, low-fat, sugar-free, mineral, dairy, junk food, intake, undernourished. Learn five of them today.",
];

CLOZE.lifestyle = [
  "My routine is simple. I wake up early, do a workout and eat a good breakfast. I take a nap in the afternoon and unwind in the evening. I try to avoid overwork and to sleep enough. My well-being is better now.",
  "Tom is a night owl. He goes to bed late, oversleeps and yawns all day. His brother is an early bird: he wakes up at six and recharges with a walk. Both are sometimes exhausted.",
  "Insomnia is when you cannot sleep. A nightcap is a drink before bed. Stress and overwork can lead to being tired. To unwind, try a book, a bath or a walk. Good habits help well-being.",
  "A sedentary person sits much of the day. Fitness needs a regular workout. Many people want to quit bad habits, cut down on sugar or give up smoking. It is not easy, but it is possible.",
  "Ana is addicted to her phone. She wants to cut down. She quits social media at night and tries to unwind with a book. She sleeps better and is less stressed. “I feel recharged,” she says.",
  "Exhausted after a long week, Pedro takes a nap. He wants to quit overwork and improve his well-being. He starts a workout on weekends. He is less stressed and his sleep improves.",
  "A habit is something you do regularly. A routine is a set of habits. To give up a habit, start by cutting down. Quitting is hard but good for your well-being. A healthy routine includes fitness and sleep.",
  "Sofia is an early bird. She wakes up at six, does a workout and eats a healthy breakfast. She unwinds in the evening and never oversleeps. Her fitness and well-being are excellent.",
  "Words of lifestyle: routine, habit, insomnia, nap, oversleep, yawn, workout, fitness, sedentary, addicted, quit, cut down, give up, well-being, stressed, nightcap, early bird, night owl, unwind, recharge, overwork, exhausted. Which describe you?",
  "To recharge, take a nap, walk or sleep well. To unwind, try a book or music. If you are exhausted, stop overwork. A good routine, fitness and fewer bad habits improve your well-being.",
];

CLOZE.service = [
  "I made a complaint about a faulty product. It arrived damaged, so I asked for compensation. The representative was helpful and apologised for the inconvenience. She said she would resolve the problem and track the order.",
  "On the phone: “Please hold the line. I'll put you through to a representative.” The service was poor: I had to hold for twenty minutes. The service charge was high. I want a refund and compensation.",
  "Read the terms and conditions before you buy. The returns policy explains cancellation and refund. If the product is faulty, you can ask for compensation. Tracking your order helps you know where it is.",
  "Ana's order was on back order. The representative apologised for the delay and gave a tracking number. When the product arrived damaged, she escalated the complaint. The company resolved it with a refund.",
  "Unhelpful staff can ruin a good shop. Poor service makes customers angry. They complain, ask for compensation and may cancel. Helpful, polite representatives resolve problems and keep customers happy.",
  "Tom writes a complaint: “The product is faulty. I apologise for the inconvenience, but I want a refund. If you do not resolve this, I will escalate the complaint.” The company answers fast and refunds him.",
  "A service charge is an extra payment. A returns policy lets you give back a product. Cancellation is stopping an order. A back order is an item not yet in stock. A representative speaks for the company.",
  "Sofia calls customer service. She holds the line for ten minutes, then a helpful representative puts her through. The problem is resolved. “It was good service,” she says. “I apologise for being impatient.”",
  "My new phone is faulty. I read the terms and conditions and the returns policy. I contact customer service and track my order. The representative offers me a refund or compensation. I choose the refund.",
  "When there is a problem, stay calm. Explain it clearly to the representative. Ask for compensation if the product is damaged or faulty. If the service is poor, escalate. Good companies apologise and resolve the issue.",
];

CLOZE.mishaps = [
  "My flight was delayed and then cancelled. I missed my connection and had a long layover. The airline was overbooked and my luggage was lost. I was stranded at the airport for a night. Travel insurance helped.",
  "Tom was a backpacker off the beaten track. A scam at a tourist trap cost him money. His bus was bumpy and slow. At a transit stop, he missed the shuttle. Luckily, the people were kind.",
  "A red-eye flight leaves at night and arrives early. An in-flight meal is usually served. If you are a no-show, you lose your ticket. Roadworks can delay a shuttle. Sunburn is a common problem on the beach.",
  "Ana's luggage was lost. She was stranded in a transit city with no clothes. Her travel insurance paid for new things. The airline apologised, and the luggage arrived two days later. The airline said sorry, and her travel insurance paid for a delayed shuttle.",
  "A tourist trap is a place with high prices for tourists. A scam is a trick to get your money. Be careful. Check prices, use official taxis and read about the place before you go. A scam, a tourist trap, a shuttle that is delayed, roadworks that are bumpy, a layover that is long: these are all problems for a backpacker.",
  "The shuttle was delayed because of roadworks. We missed our flight, and the next flight was overbooked. We had a long layover. We were stranded, but the airline gave us a hotel and a meal.",
  "Pedro got sunburn on his first day. He had to stay in the shade. The next day the bus was bumpy and slow. “What a trip,” he said. “But I will remember it.” A backpacker off the beaten track also needs travel insurance, because a no-show or a delayed shuttle can happen.",
  "Travel insurance covers cancelled and delayed flights, lost luggage and illness. It is useful for a backpacker who goes off the beaten track. In case of a problem, keep receipts and call the company.",
  "A no-show passenger doesn't come to the flight. An overbooked flight has too many passengers. A layover is a stop between flights. A transit is passing through a place. In-flight means during the flight.",
  "Sofia's red-eye flight was delayed. She missed her shuttle and was stranded. She had no luggage, only a backpack. But the airline gave her a room, and she slept. “Every problem is a story,” she says.",
];

CLOZE.manners = [
  "Good manners make life pleasant. A respectful and courteous person is tactful and does not interrupt. He pays a compliment instead of flattering. Punctuality shows respect. Queue-jumping is rude.",
  "An awkward moment happens when someone says something tactless. A blunt person speaks directly and may hurt. A snobbish or inconsiderate person is not nice. Courteous and tactful people avoid such situations.",
  "Tom interrupts his friend. Then he eavesdrops on a conversation. His mother says: “That is not polite. Be more respectful and tactful.” Tom apologises and learns a lesson about manners.",
  "To tease is to make fun in a friendly way. To mock is to make fun in an not kind way. A back-handed compliment seems nice but is not. A put-down hurts. A pat on the back shows support.",
  "Ana is bad-tempered when she is tired, and she can be blunt. Her friend is tactful and courteous. At work they learn to be respectful. Punctuality, manners and compliments help everyone.",
  "A snobbish man looks down on others. An inconsiderate person ignores others' feelings. A tactless comment can cause an awkward silence. Respect, care and good manners make a pleasant community.",
  "Queue-jumping is when someone goes in front of others in a line. It is rude and inconsiderate. Courteous people wait. If you see it, you can be polite and say: “Excuse me, there is a queue.” It is also tactless, snobbish and bad-tempered, and a polite person will not do it.",
  "A good compliment is honest. Flattering is false praise. Sofia pays a compliment to her colleague about her work. He feels happy and gives her a pat on the back. Manners create good life.",
  "Pedro is late to a meeting. Punctuality is a sign of respect. He apologises and sits down quietly. He doesn't interrupt. Afterwards, his boss tells him he was courteous. “Next time, be on time,” she says. His boss is courteous, tactful and respectful, and she does not mock him or flatter him.",
  "Words of manners: manners, respectful, tactful, awkward, interrupt, eavesdrop, compliment, flatter, mock, tease, queue-jumping, punctuality, inconsiderate, bad-tempered, snobbish, courteous, blunt, tactless, back-handed, put down, pat on the back.",
];

CLOZE.academic = [
  "A researcher must evaluate every factor with a consistent approach. The methodology should be clear, and the framework must fit the context. A significant variable can change the outcome, so a sufficient sample is needed.",
  "The concept of this study is simple. We assume that the principle is valid and we undertake a careful analysis. From the data we derive an reading. The implications are important for the scope of the research.",
  "A phenomenon can be seen from several perspectives. Each criterion gives a different view. To interpret the outcome, we evaluate the context and every variable. A consistent approach avoids mistakes.",
  "Ana undertakes a research project. She chooses a methodology, assumes a framework and tests a variable. The outcome is significant. She evaluates the implications and derives a principle from the results.",
  "In an academic essay, you present a concept, give context, evaluate evidence and interpret results. You apply a criterion, consider different perspectives and discuss the implications of your outcome.",
  "Tom assumes that the factor is minor, but the data show it is significant. The approach is consistent, the sample is sufficient and the outcome is clear. He must interpret it carefully and revise his framework.",
  "The scope of the study is limited. The methodology is rigorous and the variable is well defined. The outcome has important implications for the principle that the team started to test.",
  "A principle is a basic rule. A concept is an idea. A phenomenon is something observed. A criterion is a standard for judging. A framework is a structure of ideas. A methodology is a set of methods.",
  "Sofia evaluates two perspectives on the same phenomenon. She uses a consistent criterion and a sufficient number of variables. She derives a principle and discusses the implications for the context.",
  "A good researcher is consistent, evaluates every factor, interprets the data with care, assumes nothing without proof and undertakes the work with a clear methodology and a clear scope.",
];

CLOZE.academic2 = [
  "The author hypothesises that an underlying factor explains the discrepancy. The notion is tentative, so a rigorous and comprehensive study is needed. A preliminary result may corroborate it, but more evidence must substantiate it.",
  "To delineate a problem is to describe it clearly. To juxtapose two ideas is to put them side by side. To extrapolate is to continue a trend. A nuanced view sees the details. A proponent supports an idea.",
  "Ana conceptualises a new model. She reiterates the main contention and presents a corollary. Her insight is substantial and her argument is rigorous. Critics point out a discrepancy, but she answers with comprehensive data.",
  "A tentative conclusion is not final. The preliminary results corroborate the hypothesis, but they do not yet substantiate it. The team will reiterate the test with a larger sample and a more rigorous method.",
  "The proponent of this theory has a substantial argument. His notion is that an inherent factor causes the effect. He delineates the model, juxtaposes it with another and extrapolates the results.",
  "A corollary follows from a main idea. An insight is a deep understanding. A contention is a claim. A discrepancy is a difference between two things that should agree. A nuanced analysis avoids extremes.",
  "Tom writes a comprehensive report. He hypothesises that an underlying cause exists, delineates his method and presents a preliminary result. He admits his conclusion is tentative and hopes to corroborate it.",
  "To substantiate a claim you give evidence. To corroborate it you add more evidence from other sources. A rigorous study checks each step. An inherent problem is a problem that belongs to the thing itself.",
  "The study extrapolates the data to predict the next decade. The author reiterates that the results are tentative. A proponent of the model says that the insight is valuable, but a critic notes a discrepancy.",
  "Words of academic style: hypothesise, underlying, inherent, notion, substantial, comprehensive, corroborate, substantiate, delineate, juxtapose, extrapolate, nuanced, discrepancy, tentative, rigorous, preliminary, conceptualise, reiterate, contention, corollary, insight, proponent. Choose five of them and write a sentence with each one.",
];

CLOZE.argument = [
  "A speaker makes a claim, justifies it and tries to convince the audience. Her opponents may refute it, dispute the premise or raise an objection. A valid argument has good reasoning and no flaw.",
  "The topic is controversial. Some people advocate a change, others oppose it. Both sides assert their viewpoint. A fair debater concedes a point when the other side is right and then explains her stance.",
  "Pedro tries to persuade his boss. He presents his premise, uses sound reasoning and concludes that the plan is good. The boss raises an objection and points out a flaw. Pedro concedes and improves the plan.",
  "A bias is an unfair preference. It can contradict the facts. To deduce is to reach a conclusion from evidence. To refute is to prove an argument wrong. To justify is to give a good reason.",
  "In a debate, Ana asserts that the law is unfair. Her opponent disputes this and refutes her claim. The judges note that her viewpoint is valid but one premise has a flaw. She concedes the point and changes her stance.",
  "Tom wants to convince the group. He explains his reasoning step by step, concludes with a strong claim and justifies his stance. A member raises an objection. Tom accepts it and corrects a flaw.",
  "A strong argument is based on a valid premise and good reasoning. It does not contradict itself. A weak argument has a flaw or a bias. A good speaker can persuade without pressure and respects other viewpoints.",
  "The article advocates a new policy. Critics oppose it and say it is controversial. They dispute the claims and refute the evidence. The author concedes that the data are limited but keeps his stance.",
  "Sofia examines an argument. She finds the claim, the premise and the conclusion. She checks the reasoning and the bias. She finds a flaw and writes an objection. “The argument is not valid,” she concludes.",
  "Words for argument: claim, contradict, convince, controversial, dispute, justify, oppose, persuade, refute, stance, viewpoint, bias, premise, conclude, deduce, reasoning, objection, concede, assert, advocate, valid, flaw. Use five in a short debate.",
];

CLOZE.argument2 = [
  "A rebuttal answers a counterargument. A strong counterargument is compelling and plausible. A far-fetched claim is hard to believe. An untenable position cannot be defended, while a tenable one can.",
  "The debate is heated. Both adversaries are vehement. One endorses the plan and reinforces it with evidence. The other rules out any concession. An impartial judge decides which side is more compelling.",
  "Tom makes a concession to his opponent. It is a moot point: it does not affect the main issue. His success hinges on the main argument, which is tenable and plausible. A rebuttal would be hard.",
  "A contentious issue divides people. A vehement speaker can sway the audience, but a calm, compelling argument is better. An impartial listener weighs a counterargument and a rebuttal before deciding.",
  "Ana rebuts a claim with a clear counterargument. Her rebuttal is compelling and plausible. Her adversary tries to sway the jury, but the idea is far-fetched. The judges rule out his argument as untenable.",
  "To endorse is to support. To reinforce is to make stronger. To sway is to influence. To hinge on is to depend on. To rule out is to exclude. A moot point is a question that makes no difference now.",
  "The two adversaries had a heated debate. One made a vehement rebuttal; the other conceded a point. The audience found his concession honest and his argument tenable. An impartial referee praised both.",
  "A plausible argument is likely to be true. A compelling argument is convincing. A far-fetched argument is unlikely. A contentious topic divides people. A heated discussion is full of emotion.",
  "Sofia endorses the proposal and reinforces it with data. Her adversary calls it untenable and offers a counterargument. She makes a short rebuttal and moves on. The decision hinges on the evidence.",
  "Pedro wants to sway the committee. He gives a compelling reason and a plausible plan. He knows that the vote hinges on a few people. An impartial member rules out the far-fetched idea and supports his plan.",
];

CLOZE.finance = [
  "In a recession the economy gets smaller. There is a budget deficit, austerity and a downturn. In a boom there is a surplus, growth and more jobs. The stock market is often volatile. A subsidy helps a sector.",
  "A mortgage is a loan for a house. The interest rate decides how much you pay. Fiscal policy is about taxes and spending, monetary policy about money and rates. A consumer reacts to both.",
  "A merger joins two companies. A monopoly controls a whole market. Regulation limits it. Bankruptcy happens when a company cannot pay its debts. A dividend is a share of profit given to owners.",
  "Wealth and inequality are big issues. Labour gives people income. In a recession the downturn hits workers first. The government may use austerity, which reduces public spending, or a subsidy, which helps companies.",
  "Ana invests in the stock market. She receives a dividend and watches the interest rate. Prices are volatile in a downturn. In a boom she gains, but she knows that a recession may follow.",
  "Tom takes out a mortgage to buy a house. The interest rate is low, so the monthly payment is fair. He knows that the economy can be volatile, so he saves. A recession would hurt his job in labour.",
  "The government has a deficit this year, not a surplus. It uses fiscal measures, such as taxes, and monetary measures, such as interest rates. Regulation of banks and companies helps protect the consumer.",
  "A company in bankruptcy sells its assets. A merger of two companies creates a bigger one, and sometimes a monopoly. The authority checks that consumers are not hurt. Wealth and inequality often grow with a boom.",
  "Words of economics: recession, austerity, deficit, surplus, subsidy, stock market, dividend, mortgage, fiscal, monetary, bankruptcy, merger, monopoly, labour, wealth, inequality, interest rate, consumer, regulation, volatile, boom, downturn. Choose five of them and write a sentence with each one.",
  "After the boom, a downturn begins. The stock market falls and becomes volatile. The deficit grows. The government considers austerity or a subsidy. Consumers spend less and labour is hit by unemployment.",
];

CLOZE.finance2 = [
  "A portfolio holds assets such as shares and bonds. A hedge reduces risk. Speculation takes high risk for high profit. A bubble bursts when prices fall suddenly. Leverage uses borrowed money to invest.",
  "A bank that is insolvent cannot pay its debts. A bailout uses public money to save it. If a person with a debt defaults, the creditor loses. A creditworthy client can borrow at a low yield. Solvency is the power to pay.",
  "Tom keeps a portfolio of assets. He uses a hedge against risk, avoids speculation and checks the yield. An audit of his accounts shows his liquidity is good. “I want to be creditworthy,” he says.",
  "Stagnation means no growth. A stimulus is a help. A government may give a stimulus to help the economy. If it depreciates, a currency loses value; if it appreciates, it gains value. A windfall is unexpected money.",
  "The company has an audit at the end of the fiscal year. The report shows a default on a debt and a lack of liquidity. The firm is nearly insolvent and asks for a bailout. Embezzlement by an employee made things worse.",
  "A tax haven is a place with very low taxes. Some companies use it to reduce what they pay. The government investigates this. A bubble in the housing market, built on leverage, burst and caused a crisis. The creditworthy firm has an audit each fiscal year, so its liquidity and portfolio are clear.",
  "Ana receives a windfall: an unexpected inheritance. She invests it in a portfolio of safe assets, with a hedge. She avoids speculation. After a year, the yield is good and the value appreciates.",
  "In times of stagnation, a government may offer a stimulus. A bailout helps banks, but many people complain. When a bubble bursts, assets depreciate and many investors become insolvent.",
  "Pedro studies finance. He learns about liquidity, assets, portfolio, hedge, speculation, bubble, bailout, solvency, default, leverage and yield. His teacher says: “An audit of your knowledge will come next week.”",
  "A creditworthy company can borrow money with a low yield. An insolvent company cannot pay. Default is failure to pay. Solvency is the opposite of not being able to pay. Embezzlement is stealing money given to you.",
];

CLOZE.law = [
  "The constitution is the basic law of a country. Legislation is made by parliament. An amendment changes a law. The courts enforce it. Jurisdiction is the area of a court's power. Sovereignty is the highest power of a state.",
  "In a trial, the prosecutor accuses the defendant. The plaintiff starts a civil case. A witness gives testimony under oath. The judge listens, and the tribunal gives a verdict. The loser can appeal the ruling.",
  "The defendant is released on bail until the trial. His testimony and the plaintiff's are different. The jury gives a verdict. If he is found responsible, he must pay. The law enforces the ruling.",
  "A lobby tries to influence legislation. A coalition is a group of parties. A referendum asks citizens to vote on one question. Bureaucracy can slow decisions. Autonomy gives a region some freedom.",
  "Ana studies law. She reads the constitution and learns about amendments, jurisdiction and sovereignty. She follows a trial and listens to the testimony. “Liability and verdict are my favourite topics,” she says.",
  "The plaintiff says that the company is responsible for the damage. The defendant denies it. The tribunal listens to the testimony and gives a ruling. The defendant decides to appeal. The case continues.",
  "A government is formed by a coalition. It works on legislation and an amendment to the constitution. A referendum is planned. Lobby groups try to influence the debate, and bureaucracy slows the process.",
  "To prosecute is to take legal action against a person. To enforce is to make sure the law is followed. To appeal is to ask a higher court to review. An oath is a solemn promise to tell the truth.",
  "Tom is a defendant in a minor case. He pays bail, gives his testimony and waits for the verdict. The tribunal rules that he is not responsible. He thanks the court and leaves relieved.",
  "Words of law: legislation, constitution, amendment, enforce, jurisdiction, prosecute, defendant, plaintiff, verdict, appeal, bail, testimony, liability, sovereignty, bureaucracy, lobby, referendum, coalition, autonomy, oath, tribunal, ruling. Choose five of them and write a sentence with each one.",
];

CLOZE.law2 = [
  "A statute is a written law. Litigation is a legal fight in court. A plea is a formal answer: guilty or not guilty. A subpoena orders a person to appear. An injunction stops an action. A precedent guides later cases.",
  "A loophole lets people avoid a law. Perjury is lying under oath. Jurisprudence is the study of law. Negligence is not taking proper care. Defamation is damaging someone's reputation by lies.",
  "Copyright protects books and music. A patent protects an invention. A trademark protects a brand name. In litigation, arbitration can settle a dispute without a trial. A settlement ends the case.",
  "The lawyer enters a plea of not guilty. The prosecutor presents an indictment. The jury reaches an acquittal. In another case, a conviction follows. The court may later repeal a law or overturn a decision.",
  "Tom is accused of negligence. The plaintiff starts litigation. A subpoena orders him to appear in court. His lawyer discusses a settlement. In the end, an arbitration solves the matter.",
  "A court can uphold a decision or overturn it. A parliament can repeal a statute. A precedent from an earlier case guides judges. A loophole in the law is often fixed by a new statute.",
  "Ana files a patent for her invention and registers a trademark for the name. The copyright of her manual protects her text. A rival tries to copy it, so she asks for an injunction.",
  "Perjury is a crime. Defamation can lead to litigation. A false statement under oath is a serious offence. A subpoena makes a witness come to court. The judge uses precedent to decide.",
  "The indictment lists the crimes. The accused enters a plea. After trial, the court gives an acquittal or a conviction. A settlement or arbitration can avoid trial. This is how jurisprudence works.",
  "Words of the law: statute, litigation, plea, subpoena, injunction, precedent, loophole, perjury, jurisprudence, negligence, defamation, copyright, patent, trademark, arbitration, settlement, acquittal, conviction, indictment, repeal, uphold, overturn. Choose five of them and write a sentence with each one.",
];

CLOZE.abstract = [
  "Ambiguity and paradox are part of life. Irony shows contrast. A dilemma is a hard choice. Integrity means being honest. Ethics and morality guide behaviour. Nuance is a small difference of meaning.",
  "Complexity makes problems hard. Consensus is general agreement. Coherence means logic in the whole. Contradiction is the opposite of agreement. Awareness is knowing what is happening around you.",
  "Resilience is the strength to recover. Vulnerability is being open to harm. Solidarity helps people to unite. Wisdom comes with experience. Scepticism asks for proof. Prejudice judges without knowing.",
  "Ana faces a dilemma: tell the truth and risk her job, or stay silent. Her integrity decides. She feels ambition but also a moral duty. Her identity as an honest person is more important than ambition.",
  "The film has irony, ambiguity and paradox. The hero has a strong identity but also vulnerability. The ending creates a dilemma for the audience. A critic praises its complexity and authenticity.",
  "A society needs solidarity, ethics and resilience. Prejudice and scepticism of the wrong kind harm it. Consensus is difficult, but awareness and wisdom help. Authenticity builds trust and integrity.",
  "Tom shows resilience after a failure. He admits his vulnerability and learns. He now understands the nuance of the situation. His wisdom grows with every dilemma, and his awareness of others increases.",
  "Coherence matters in an essay: ideas must connect. A contradiction makes weaker an argument. Ambiguity can confuse. The best writers join clarity with nuance, showing both complexity and irony.",
  "A consensus is reached when all agree. A paradox seems to contradict itself but is true. Authenticity is being real. Morality shows the difference between right and wrong. Identity is who you are.",
  "Words of ideas: ambiguity, ambition, authenticity, coherence, complexity, consensus, contradiction, dilemma, ethics, identity, integrity, irony, morality, nuance, paradox, prejudice, resilience, scepticism, solidarity, vulnerability, wisdom, awareness. Choose five of them and write a sentence with each one.",
];

CLOZE.abstract2 = [
  "A conundrum is a difficult puzzle. A predicament is a bad situation. Intuition is knowing without proof. An epiphany is a sudden insight. Serendipity is a happy accident. Oblivion is the state of being forgotten.",
  "Some things are transient, others perpetual. A tangible thing can be touched, an intangible one cannot. A fundamental principle is basic. A trivial matter is not important. An arbitrary decision has no reason.",
  "Cynicism does not trust everyone. An idealistic person believes in perfect goals. A juncture is a critical moment. The inevitable cannot be avoided. The quintessential example is the perfect one. Ineffable means too great for words.",
  "Ana is in a predicament: two jobs, one choice. It is a real conundrum. Her intuition says one thing, her mind another. Then, by serendipity, an old friend calls with advice. It is an epiphany.",
  "Tom's idealistic plan faces cynicism. The juncture is critical, and failure seems inevitable. But he sees a fundamental flaw, fixes it and the project survives. Success is not perpetual, but it is tangible.",
  "Beauty is often transient. The beauty of a sunset is ineffable. Its memory may go into oblivion, or it may transcend time in a poem. The quintessential beauty is the one that cannot be described.",
  "An arbitrary rule has no reason. A trivial problem can be ignored. A fundamental problem must be solved. An intangible benefit, such as happiness, matters as much as a tangible one, such as money.",
  "Sofia felt an epiphany on a walk. Her intuition told her to change career. It was a conundrum, but a happy serendipity helped: a stranger offered her a job. The change felt inevitable.",
  "The perpetual search for meaning is a human quality. Some think it transcends reality. Others are negative and see only transient things. An idealistic poet writes about the ineffable and the quintessential.",
  "Words of deep ideas: conundrum, predicament, intuition, epiphany, transient, perpetual, intrinsic, tangible, intangible, arbitrary, inevitable, fundamental, trivial, idealistic, cynicism, juncture, serendipity, ineffable, quintessential, oblivion, transcend. Choose five of them and write a sentence with each one.",
];

CLOZE.discourse = [
  "The plan is expensive; nevertheless, it is necessary. Moreover, it will create jobs. Consequently, the city accepts it. In addition, the cost will fall in the long term, whereas the benefits will grow.",
  "The team worked hard; nonetheless, they lost. Furthermore, the weather was bad. In contrast, the other team was calm. Hence, the result was clear. Thus, the coach accepted the defeat and thanked his players.",
  "As a result of the strike, the trains stopped. In particular, the north line was closed. Owing to this, many people stayed at home. With regard to the cost, the company says it was small. In conclusion, the strike failed.",
  "Albeit slowly, the economy improved. By contrast, the exports fell. To some extent the result was positive. On the contrary, the opposition said it was bad. Accordingly, the government changed its plan.",
  "In spite of the rain, the match took place. Notwithstanding the cold, the fans came. Moreover, the players performed well. Consequently, the team won, whereas the other lost. In conclusion, it was a good day.",
  "Ana writes an essay. She starts with a claim, adds a reason, uses nevertheless to show contrast and furthermore to add. She uses hence for a result. In conclusion, she repeats the main idea.",
  "Words that link ideas: furthermore, moreover, nevertheless, nonetheless, consequently, accordingly, hence, thus, whereas, albeit, notwithstanding, in contrast, on the contrary, as a result, in addition, in particular, in conclusion, to some extent, by contrast, in spite of, owing to, with regard to.",
  "Tom speaks formally. He says: “With regard to the budget, the figures are low; nevertheless, we will continue. In addition, we need more staff. As a result, we ask for more time.” The manager accepts his points.",
  "The text is clear, albeit long. Whereas the first part is about history, the second is about the future. In contrast, the final part gives advice. To some extent, it is useful. In conclusion, I recommend it.",
  "Owing to the delay, the event was moved. Thus, the guests received a message. Furthermore, a new date was set. Accordingly, the place was changed. In particular, the parking was improved. Nonetheless, many people complained.",
];

CLOZE.discourse2 = [
  "The contract states that the money will be paid thereafter. The company, whereby the owner is responsible, agrees pursuant to the law. Henceforth, all rules apply in accordance with the agreement.",
  "Whilst the rules are strict, they apply in lieu of the old ones. By virtue of the new law, workers are protected. Provided that the owner follows, no penalty applies. Ultimately, the system is fair.",
  "Amid the crisis, the government acts. Vis-à-vis the opposition, it is firm. Presumably, the plan will pass. On the grounds that it helps the economy, the parliament agrees. Namely, taxes will fall.",
  "The document says: “The tenant hereby agrees to the conditions.” Subsequent to signing, the contract starts. Henceforth, the rent is due monthly. Inter alia, the tenant must keep the home clean.",
  "The idea is, per se, good, but ipso facto it does not prove the plan will work. Lest it fail, we test it first. Whilst some doubt it, presumably it will succeed. Ultimately, results will decide.",
  "Ana reads a legal text. “Pursuant to the law, whereby the owner is responsible, the money will be paid in accordance with the contract.” She marks whereby and pursuant. “Formal language is hard,” she says. Her teacher says that whereby and pursuant are rare, and that henceforth and thereafter appear in contracts, ultimately.",
  "Provided that you pay on time, no extra charge applies. In lieu of cash, you may pay by card. Subsequent to the payment, you receive a receipt. Ultimately, all costs will be shown on the invoice.",
  "Lest we forget, the rules apply to everyone. Henceforth, there are no special cases. Namely, all members must attend. By virtue of their role, managers must lead. Presumably, this will be clear to all.",
  "The club, whereby members can use the pool, makes a new rule: whilst the pool is closed, nobody enters. Pursuant to the committee, the rule starts at once. Thereafter, the situation will be reviewed.",
  "Words of formal style: whereby, hereby, thereafter, henceforth, whilst, amid, vis-à-vis, per se, ipso facto, in lieu of, pursuant to, in accordance with, subsequent to, by virtue of, on the grounds that, provided that, lest, inter alia, namely, presumably, ultimately.",
];

CLOZE.power = [
  "The cabinet is the group of ministers. The government has authority, but the opposition criticises it. In an election the electorate votes by ballot. The turnout shows how many voted. A manifesto lists the promises.",
  "A diplomat speaks for his country. A delegate speaks for a group. A regime is a system of government. A dictatorship has no free elections. A revolution changes the regime. Sanctions are penalties on a country.",
  "The campaign is intense. The candidate publishes a manifesto and promises transparency. He wants to be accountable to the electorate. Corruption must end. The turnout is high and the ballot is secret.",
  "Ana studies ideology and hierarchy. She learns how authority works in a regime and how a veto can stop a law. “A legitimate government must be accountable and transparent,” she says.",
  "A president can veto a law. If he is accused of corruption, the parliament can impeach him. A legitimate leader respects the vote. An ideology is a system of ideas that guides a party.",
  "The opposition criticises the cabinet. A delegate asks for transparency. A diplomat works for peace. The electorate expects the campaign promises to be kept. If not, it votes against at the next ballot.",
  "In a hierarchy, there are levels of authority. In a dictatorship, one person decides. In a democracy, the electorate gives authority by ballot. Transparency allows citizens to check. Corruption damages trust.",
  "The turnout in the election was record-breaking. The government's manifesto won. The opposition accepted the result. Sanctions against the old regime ended. A new cabinet started work on reforms.",
  "Tom is a delegate at a conference. He meets a diplomat from another country. They discuss sanctions, a veto and the ideology of the regime. They agree to continue the talks in a transparent way.",
  "Words of politics: authority, campaign, cabinet, delegate, diplomat, dictatorship, electorate, hierarchy, ideology, legitimate, manifesto, opposition, regime, sanction, veto, ballot, turnout, revolution, corruption, accountable, transparency, impeach. Choose five of them and write a sentence with each one.",
];

CLOZE.power2 = [
  "An incumbent is the person holding a post. A demagogue uses populism to win people. A dissident criticises the regime. An oligarchy is rule by a few. An autocracy is rule by one. A monarchy has a king; a republic has a president.",
  "A coup d'état takes power by force. An assassination kills a leader. In a stalemate, nobody can win. A filibuster delays a vote. Gerrymandering changes borders to win. A mandate is the authority from voters.",
  "A swing voter has no fixed side. A grassroots movement comes from ordinary people. A bipartisan law has support from both parties. A partisan view supports one side. Succession decides who takes power next.",
  "Ana studies politics. She reads about populism, demagogues and dissidents. She compares a monarchy with a republic. “Succession in a monarchy and a mandate in a republic are very different,” she says.",
  "The incumbent lost the election. The new leader has a clear mandate. The old regime was an oligarchy. Dissidents who were in exile returned. A grassroots campaign helped to win the vote.",
  "A coup ousted the president. Soldiers took power, and the country moved towards autocracy. Dissidents were arrested. After a stalemate, a new election was promised. The succession is unclear.",
  "Tom is a swing voter. He listens to both partisan sides and chooses the bipartisan plan. He dislikes the populism of the demagogue and prefers a grassroots movement. “My vote has weight,” he says.",
  "A filibuster is a long speech to block a vote. Gerrymandering draws borders unfairly. These tricks harm democracy. A lobbyist tries to influence politicians. Honest government needs transparency. A filibuster, a mandate and succession are important in a republic or a monarchy, as are the incumbent and the swing voter.",
  "The republic needs a mandate from the people. The monarchy depends on succession. In an oligarchy, a few rule. In an autocracy, one rules. An incumbent can be ousted by a vote or by a coup.",
  "Words of power: incumbent, populism, demagogue, dissident, oligarchy, autocracy, monarchy, republic, coup d'état, assassination, filibuster, gerrymandering, lobbyist, bipartisan, partisan, grassroots, mandate, swing voter, stalemate, ousted, succession. Choose five of them and write a sentence with each one.",
];

CLOZE.sustain = [
  "Biodiversity means many species. An ecosystem is a community of living things. Deforestation destroys habitat. Overfishing empties the sea. Emissions of greenhouse gas harm the ozone layer. Conservation protects nature.",
  "To reduce your carbon footprint, use less energy, choose eco-friendly products, eat organic food and avoid landfill waste. Sustainable living helps tackle climate change. We must conserve resources and offset emissions.",
  "Urbanisation grows cities but threatens the countryside. Desertification turns land into desert. Pollutants contaminate air and water. Fossil fuels produce greenhouse gas. Landfill sites fill up quickly. Landfill sites fill up quickly, and the habitat of many species is lost.",
  "Ana tries to live in a sustainable way. She chooses organic food, recycles to avoid landfill, and offsets her flight emissions. “Every small action reduces my carbon footprint,” she says.",
  "Deforestation threatens a habitat of many species. Biodiversity falls and the ecosystem becomes weak. Conservation groups try to protect it. Governments must tackle the causes, such as logging and farming.",
  "Overfishing is catching too many fish. Pollutants from factories harm the sea. The ecosystem changes, and species disappear. Conservation, sustainable fishing and clean water help to bring back balance.",
  "A farm that is organic does not use chemical products. An eco-friendly home saves energy. A sustainable city reduces landfill, emissions and pollutants. These are ways to tackle climate change.",
  "Tom works on conservation. He protects a habitat, counts species and fights deforestation. He explains that the ozone layer protects us from the sun and that greenhouse gas must be reduced.",
  "To offset emissions means to make up for them, for example by planting trees. To conserve means to protect. To tackle means to deal with. To threaten means to put in danger.",
  "Words of the environment: biodiversity, carbon footprint, deforestation, ecosystem, emissions, fossil fuels, habitat, conservation, sustainable, greenhouse gas, ozone layer, overfishing, pollutant, landfill, organic, eco-friendly, urbanisation, desertification, offset, conserve, threaten, tackle.",
];

CLOZE.sustain2 = [
  "Afforestation plants new forests; reforestation plants again lost ones. A wetland and a coral reef are rich habitats. Poaching illegally kills animals. Stewardship means careful management. Some plants sequester carbon.",
  "A monoculture grows one crop only. Pesticide kills insects but also harms nature. Runoff carries chemicals into rivers. Permaculture designs farms like natural systems. Famine happens when there is not enough food.",
  "A carbon neutral company balances its emissions. Net zero means no new carbon is added. Greenwashing pretends to be green. A circular economy reuses things. Upcycling turns waste into something better. Food waste is a big problem.",
  "Ana joins a project of reforestation. They plant trees to sequester carbon and protect a wetland. The glacier melt raises the sea level. “Stewardship of nature is our duty,” she says.",
  "A coral reef is in danger from warm water and pollution. Poaching and overfishing threaten species. Conservation groups work with local people. Good stewardship can save these habitats. Afforestation and reforestation help the wetland and the coral reef, while stewardship and care for the sea level protect the ecosystem.",
  "Tom runs a farm with permaculture. He avoids pesticide and runoff, and grows many crops, not a monoculture. He wants a circular economy: waste from one part feeds another. His farm is nearly carbon neutral.",
  "Greenwashing is when a company says it is eco-friendly without being so. Net zero requires real actions, such as afforestation and less emissions. Upcycling and reducing food waste also help the circular economy.",
  "Sea level rises because of glacier melt. Wetlands protect coasts but are disappearing. Afforestation and reforestation help. Famine becomes a risk when crops fail. Stewardship of land and water is vital.",
  "Poaching destroys wildlife. Guards protect the animals in the reserve. Tourists help with money. Local people see the benefits of stewardship and help to stop poaching. The ecosystem recovers. A wetland, a coral reef and the sea level are all affected, and good stewardship can sequester carbon and stop poaching and famine.",
  "Words of care for nature: afforestation, reforestation, famine, runoff, pesticide, monoculture, permaculture, carbon neutral, net zero, greenwashing, circular economy, upcycling, food waste, glacier melt, sea level, wetland, coral reef, poaching, stewardship, sequester.",
];

CLOZE.innovation = [
  "An algorithm is a set of steps for a computer. Artificial intelligence and machine learning make machines learn. Automation replaces manual tasks. Bandwidth is the capacity of a network. An interface lets us use a program.",
  "A cyberattack tries to damage a system. Encryption protects data. A firewall blocks bad users. Privacy is the right to keep information secret. Surveillance watches people. A bug is an error in a program.",
  "A prototype is a first model. Innovation brings new ideas. Old technology becomes obsolete. A wearable device goes on the body. Virtual reality creates a digital world. Cloud storage keeps data online in a database.",
  "Ana works in innovation. She builds a prototype with machine learning. The interface is simple, and the algorithm is fast. A bug appears, but she fixes it. “Innovation needs patience,” she says.",
  "The digital divide is the gap between those with and without technology. Automation can disrupt jobs, but also modernise industry. Bandwidth, cloud storage and a good database help companies to grow.",
  "Tom studies computer security. A cyberattack can steal data, so encryption and a firewall are needed. Privacy and surveillance often conflict. He wants to protect companies and citizens.",
  "A company with an obsolete system needs to modernise. It uses cloud storage, a modern database and a new interface. Artificial intelligence helps with analysis, and automation reduces routine tasks.",
  "Virtual reality is used for training. A wearable monitors health. A prototype of a new device is tested. The algorithm improves with machine learning. Innovation changes the way we live and work.",
  "Words of innovation: algorithm, artificial intelligence, automation, bandwidth, cyberattack, encryption, innovation, interface, machine learning, obsolete, prototype, bug, cloud storage, database, digital divide, firewall, privacy, surveillance, virtual reality, wearable, disrupt, modernise.",
  "A bug in the software caused a cyberattack. The firewall failed and the database was exposed. The company improved encryption and moved data to cloud storage. Privacy of the users was protected afterwards.",
];

CLOZE.innovation2 = [
  "Blockchain keeps records in a chain of blocks. Cryptocurrency is digital money. Robotics builds robots. Nanotechnology works with very small things. Biotechnology uses living cells. Gene editing changes DNA.",
  "A quantum computer is far faster than a normal one. A supercomputer processes huge data. Open source software is free to see and change. A start-up with venture capital can grow quickly. An incubator helps new companies.",
  "A scalable product can grow. A disruptive idea changes a market. Cutting-edge technology is the newest. A state-of-the-art lab has the best equipment. A smart home is controlled by digital devices.",
  "Self-driving cars use sensors and software. 3D printing makes objects layer by layer. Facial recognition finds faces. A data breach exposes information. A deepfake is a false video made by artificial intelligence.",
  "Ana invests in a start-up. The company uses blockchain, robotics and gene editing. Venture capital funds the work. An incubator provides space. The product is scalable and disruptive.",
  "Tom builds a smart home. Lights, heating and security work through an app. He worries about a data breach and uses encryption. His self-driving car also connects to the home system. Facial recognition, a data breach and a deepfake are risks of this technology.",
  "A deepfake can look real but be false. This is a danger. Facial recognition can enter privacy. A data breach can expose millions of people. Society must control technology and protect rights. A deepfake and facial recognition use artificial intelligence, and a data breach can cost a company a lot of money. A start-up with venture capital and an incubator can make a disruptive product, but it needs scalable and state-of-the-art technology.",
  "Nanotechnology and biotechnology are changing medicine. Gene editing may cure illnesses. Robotics helps surgeons. 3D printing creates medical parts. Quantum technology could speed up research. Choose five of them and write a sentence with each one.",
  "An open source project is shared by many programmers. A start-up can use it, add a scalable service and win customers. A supercomputer helps with the heavy tasks. Cutting-edge ideas appear quickly.",
  "Words of the future: blockchain, cryptocurrency, robotics, nanotechnology, biotechnology, gene editing, quantum, supercomputer, open source, start-up, venture capital, incubator, scalable, disruptive, cutting-edge, state-of-the-art, smart home, self-driving, 3D printing, facial recognition, data breach, deepfake.",
];

CLOZE.management = [
  "A manager must supervise the team and set a strategy. Good management gives incentives such as a bonus or a promotion. Teamwork improves productivity. A heavy workload can lead to burnout.",
  "To downsize is to reduce staff. To lay off is to end a job because of lack of work. Redundancy means losing a job. To resign is to leave a job. To recruit is to hire people. To outsource is to give work to another company.",
  "Ana has a good work-life balance. Her workload is fair, she has no overtime and her appraisal is positive. She hopes for a promotion and a bonus. She works as a freelance on weekends.",
  "A stakeholder has an interest in a company. A strategy sets goals. A freelance works for several clients. An appraisal evaluates performance. Overtime is extra work. To headhunt is to recruit a person from another company.",
  "The company decided to downsize. It laid off fifty workers and outsourced some services. The staff who stayed had a bigger workload. Productivity fell and some people resigned. The management changed its strategy.",
  "Tom suffers from burnout. His workload is too high, he works much overtime and his work-life balance is poor. His manager supervises him but gives no incentive. Finally, he resigns and looks for a better job.",
  "Teamwork and good management increase productivity. A manager who gives incentives, such as a bonus and a promotion, keeps staff happy. A recruit learns faster in a team that cooperates.",
  "A freelancer works for himself and chooses his workload. He decides his own strategy and has no supervisor. But he has no bonus or paid holidays. The work-life balance depends on him.",
  "The stakeholders meet to discuss the strategy. They talk about redundancy, outsourcing and recruiting. They want to protect productivity. The manager promises an appraisal and, if possible, a bonus.",
  "Words of management: supervise, downsize, incentive, lay off, management, outsource, productivity, promotion, recruit, redundancy, resign, stakeholder, strategy, teamwork, workload, work-life balance, burnout, appraisal, bonus, freelance, overtime, headhunt. Choose five of them and write a sentence with each one.",
];

CLOZE.management2 = [
  "Delegation means giving tasks to others. To micromanage is to control too much. A mission statement describes a company's aim. A benchmark is a standard for comparison. A bottleneck slows a process. To streamline is to make it simpler.",
  "A company may restructure to improve. A turnaround makes a failing business successful. KPIs measure performance. Minutes record a meeting. A brainstorm produces ideas. Networking builds contacts. Choose five of them and write a sentence with each one.",
  "Onboarding helps new staff to join. A succession plan prepares future leaders. Upskilling teaches new skills. Retention is keeping employees. Mentoring guides the less experienced. Accountability means responsibility.",
  "Ana is a manager. She uses delegation, avoids controlling too much and checks KPIs. Her team uses a benchmark to improve. Minutes of each meeting are shared. “Accountability and trust are key,” she says.",
  "The company has a bottleneck in its supply chain. The managers streamline the process and restructure the department. After a brainstorm, they find a solution. The turnaround succeeds, and the benchmark is exceeded.",
  "Tom starts a job. The onboarding is well organised. He gets a mentor, meets the team and learns the mission statement. The company also has a succession plan and offers upskilling to keep staff.",
  "A corporate culture is defined by the mission statement, delegation and accountability. Good mentoring and upskilling help retention. Networking opens doors, and a brainstorm creates new ideas. Delegation and accountability, with mentoring and a brainstorm, build a good corporate culture, with benchmark, KPIs and a strong succession plan.",
  "The manager is a micromanager: he checks everything. Staff complain and retention falls. The company restructures and teaches him delegation. After mentoring, his team becomes more productive and satisfied.",
  "Sofia takes the minutes of the meeting. The team discusses KPIs, the benchmark and a bottleneck in the process. They decide to streamline the system. A negotiable deadline is accepted.",
  "Words of management: delegation, micromanage, mission statement, benchmark, bottleneck, streamline, restructure, onboarding, succession plan, turnaround, KPI, minutes, brainstorm, networking, upskill, retention, mentoring, negotiable, accountability, corporate. Choose five of them and write a sentence with each one.",
];

CLOZE.awl2 = [
  "A change in the economy can alter stability. The capacity of the system is limited. External factors need adjustment. The ratio of costs to income matters. A good plan will enable growth and facilitate a smooth transition.",
  "The welfare of citizens depends on logic and fair decisions. A clause in the contract has an equivalent in another. A liberal policy favours freedom. A substitution replaces one thing with another. Evolution is slow change.",
  "A conflict needs discretion. A consultation asks for opinions. Revenue is income. A draft is a first version. The expansion of the company requires an adjustment of the budget and a careful transition.",
  "Ana drafts a clause for the contract. She asks for a consultation with her colleagues. The ratio between costs and revenue is important. She uses logic to make the clause clear and equivalent to the old one.",
  "The company plans an expansion. External factors, like the market, may alter its stability. An adjustment of capacity is needed. The management enables staff to give their opinion in a consultation.",
  "In a conflict, discretion is wise. A good leader facilitates dialogue, makes a draft of the agreement and uses logic. The transition to peace needs patience, welfare programmes and fair substitution of old rules.",
  "Tom works on the evolution of the project. He changes the draft, changes the ratio and replaces a clause. A substitution of the old system will bring stability. Revenue should rise after the expansion.",
  "Liberal ideas support freedom. A conflict can alter the welfare of a country. A clause can facilitate or block a plan. A transition may enable a better future. Logic helps to find an equivalent solution.",
  "Words of academic style: alter, stability, capacity, external, adjustment, ratio, enable, facilitate, welfare, transition, logic, expansion, clause, equivalent, liberal, substitution, evolution, conflict, discretion, consultation, revenue, draft. Choose five of them and write a sentence with each one.",
  "After a consultation, the board approved the expansion. The revenue grew, the ratio improved and stability returned. The company used logic, discretion and a good draft. The transition was smooth and the welfare of staff improved.",
];

CLOZE.awl2b = [
  "A rule can cease to apply. A report can compile data. A team may comprise ten people. A set of parts constitutes a whole. A word can denote a meaning. A scientist can detect a signal.",
  "Prices can fluctuate and numbers can diminish. A result may deviate from the usual level. A crowd may displace a group. A person can dispose of waste. A claim can distort the truth.",
  "New ideas emerge. A plan can enhance quality. A cost can exceed a budget. A rule can exclude some people. A company can incorporate a new idea. A law can inhibit growth. A person who helps may mediate a dispute.",
  "Ana compiles data from the study. The team comprises five scientists. They detect a deviation and modify the method. The results do not exceed the limit. They monitor the changes and neutralise errors.",
  "The temperature fluctuates, and the number of visitors diminishes. A change may displace local people. The council modifies its plan to enhance life for all. It incorporates ideas from the neighbours.",
  "A person who helps tries to neutralise tension. She does not exclude any side. She monitors the talks, and she detects when a statement may distort the facts. The process does not cease until there is agreement.",
  "Tom compiles a list. It comprises twenty names. He disposes of old papers and incorporates new data. If the total exceeds the budget, he modifies the plan. He monitors the costs daily.",
  "Rules constitute the basis of a game. When a rule is changed, the game can alter. If a rule inhibits fun, players may deviate. A referee must detect mistakes and mediate arguments.",
  "A word denotes a thing. A report can distort a fact. To enhance is to improve; to diminish is to reduce; to cease is to stop; to emerge is to appear; to exceed is to go more than; to exclude is to leave out.",
  "Words of change and measure: cease, compile, comprise, constitute, denote, detect, deviate, diminish, displace, dispose of, distort, emerge, enhance, exceed, exclude, fluctuate, incorporate, inhibit, mediate, modify, monitor, neutralise.",
];

CLOZE.research = [
  "A researcher chooses a sample and sends a questionnaire. Each respondent answers. The average, the median and the percentage show the results. An outlier is a very different value. Causation is not the same as a link.",
  "A good survey has validity and reliability. A qualitative study uses words; a quantitative study uses numbers. A longitudinal study follows people for years. A control group helps to compare. Sampling bias spoils results.",
  "Ana collects a data set. She calculates the average and the median and finds an outlier. The proportion of respondents who agree is sixty per cent. The margin of error is small, and peer review confirms it.",
  "To replicate a study is to repeat it. An anomaly is something unusual. A trendline shows a pattern in the data. Peer review means other experts check the work. A percentage is a part out of one hundred.",
  "Tom designs a questionnaire. His sample is large. He wants to avoid sampling bias. He includes a control group. The data set will be reliable and valid. The results will be quantitative and qualitative.",
  "A study finds an anomaly in the data. The scientists replicate the experiment to check. The outlier disappears. After peer review, the study is published. The average and the median are close.",
  "A qualitative study asks why. A quantitative study asks how many. Both can be longitudinal. The proportion of respondents and the percentage are numbers; the margin of error shows how certain we are.",
  "Sofia analyses a data set. She draws a trendline, calculates the percentage, and notes an anomaly. She asks if causation is proved. Her control group shows that the result was caused by the treatment.",
  "Words of research: sample, respondent, questionnaire, causation, outlier, average, median, percentage, proportion, data set, peer review, replicate, anomaly, margin of error, validity, reliability, qualitative, quantitative, longitudinal, control group, sampling bias, trendline.",
  "The report says that the average age of respondents is thirty. The median is twenty-eight. The sample is small, so the margin of error is large. Peer review recommends a bigger sample and a control group.",
];

CLOZE.research2 = [
  "A correlation between two variables does not prove causation. Variance and standard deviation measure how spread the data are. A null hypothesis says there is no effect. Hypothesis testing checks it.",
  "A randomised, double-blind trial uses a placebo. A cohort is a group followed over time. A survey asks many people. An interviewee answers questions. Fieldwork collects data outside the laboratory.",
  "Ethnography studies people in their culture. A case study looks at one example. A meta-analysis combines many studies. A literature review summarises earlier research. Findings are the results. A limitation is a weakness.",
  "Ana runs a study. She wants to avoid a confound, so the trial is randomised and double-blind. People in the study take a drug or a placebo. The findings show a statistically significant effect. She notes a limitation too.",
  "Tom reads a literature review. Several surveys show a correlation, but the results are skewed. A meta-analysis combines them. The variance is high and the standard deviation is large. He concludes that more research is needed.",
  "A cohort is followed for ten years. Fieldwork and interviews with interviewees provide data. The case study shows a typical family. The researcher is careful to generalise only when the data allow.",
  "To generalise means to apply results to a larger group. A skewed distribution is not balanced. A confound is a hidden variable that affects the results. A limitation reminds us to be careful with the findings.",
  "In a double-blind test, nobody knows who gets the placebo. The null hypothesis says that the treatment has no effect. The findings are statistically significant if the effect is unlikely to be chance.",
  "Words of research: correlation, variance, standard deviation, hypothesis testing, null hypothesis, confound, randomised, double-blind, placebo, cohort, survey, interviewee, fieldwork, ethnography, case study, meta-analysis, literature review, findings, limitation, generalise, statistically significant, skewed.",
  "The ethnography is based on fieldwork. The researcher lives with the community and interviews many interviewees. The case study shows detail but has a limitation: it does not allow us to generalise. The findings need a larger survey.",
];

CLOZE.linguistics = [
  "A person can have an accent and speak with a different pronunciation. A bilingual person speaks two languages. Slang is informal language. Vocabulary is the set of words. Syntax is the order of words. Spelling and punctuation matter in writing.",
  "An interpreter translates speech. A native speaker has the language as a mother tongue. A lingua franca is a common language between people with different languages. Etymology is the start of words. A proverb is a wise saying.",
  "Ana is bilingual. Her mother tongue is Portuguese, but her fluency in English is excellent. She sometimes mispronounces a word, but she corrects it. Her accent is light, and her vocabulary is rich.",
  "A pun is a joke with words. A tongue-twister is hard to say. A loanword comes from another language. A collocation is a natural word pair. A language barrier makes communication difficult. A subtext is a hidden meaning.",
  "English is a lingua franca for business. Interpreters help when there is a language barrier. A native speaker may use slang, which learners find hard. Collocations and proverbs add colour to language.",
  "Tom studies the etymology of English words. Many are loanwords from French and Latin. He also practises pronunciation with tongue-twisters. His fluency improves, and he now understands more of the subtext.",
  "Spelling and punctuation mark correct writing. Syntax organises the sentences. Vocabulary gives the meaning. An accent shows where a person is from. Fluency is speaking easily. A mother tongue is the first language.",
  "A good interpreter understands the subtext and the culture, not only the words. He translates slang and proverbs carefully. He deals with the language barrier. A bilingual person often makes a good interpreter.",
  "Words about language: accent, bilingual, slang, vocabulary, syntax, pronunciation, interpreter, mother tongue, native speaker, lingua franca, etymology, proverb, loanword, spelling, punctuation, pun, tongue-twister, fluency, mispronounce, collocation, language barrier, subtext.",
  "Sofia loves puns and tongue-twisters. She mispronounces a few words, but her fluency grows. She learns collocations, proverbs and slang. Her accent is charming, and her vocabulary is wide. “Language is my passion,” she says.",
];

CLOZE.linguistics2 = [
  "An idiolect is the language of one person. Denotation is the dictionary meaning. A homonym sounds or looks like another word. A synonym has a similar meaning; an antonym has the opposite meaning. A prefix comes before a word, a suffix after.",
  "Morphology studies word forms. Phonetics studies sounds. Intonation is the rise and fall of the voice. Inflection changes a word's form. Semantics studies meaning. Pragmatics studies use in context.",
  "A colloquial word is informal. An archaic word is old. A neologism is a new word. An acronym is made from initials. A lexicon is a set of words. Verbosity is using too many words.",
  "Ana studies linguistics. She learns about prefixes, suffixes and inflection. She finds a homonym and a neologism in a text. Her professor says: “Pay attention to intonation and semantics, not only grammar.”",
  "Tom uses colloquial language with friends and formal language at work. He avoids verbosity and archaic words. He knows many synonyms and antonyms, and uses an acronym when it helps. His lexicon grows every day.",
  "The prefix un- changes happy to unhappy. The suffix -ness changes happy to happiness. These are examples of morphology. The inflection of a verb changes its tense. Grammar and semantics work together.",
  "Phonetics shows how to say sounds. Intonation shows if we ask or say. Pragmatics explains why “Can you pass the salt?” is a request, not a question. A homonym can cause a pun.",
  "A neologism like “selfie” enters the lexicon. An acronym like NASA is said as a word. An archaic word is no longer used. A colloquial expression may become standard.",
  "Words of language study: idiolect, denotation, homonym, synonym, antonym, prefix, suffix, morphology, phonetics, intonation, inflection, semantics, pragmatics, grammatical, colloquial, archaic, neologism, acronym, lexicon, verbosity. Choose five of them and write a sentence with each one.",
  "Sofia writes a short text. She uses a synonym to avoid saying the same again, adds a prefix, checks the inflection and the grammatical form. She reads it in a loud voice with good intonation. Her lexicon and her idiolect are clear.",
];

CLOZE.ethics = [
  "A whistleblower reveals wrong behaviour. A person with privilege has advantages. Gender stereotypes limit people. Religious tolerance respects different beliefs. Activism fights for change. Advocacy defends a cause.",
  "Conscience is the sense of right and wrong. Fairness means treating people equally. Civil rights protect citizens. Dissent is conflict. Conformity is following the group. Social mobility is moving up in society.",
  "A marginalised group is pushed to the edge of society. A vulnerable person needs protection. To exploit is to use unfairly. Oppression is cruel control. To empower is to give power. An inclusive group welcomes everyone.",
  "Ana is a whistleblower. She reveals that her company exploits workers. Her conscience tells her to act. She faces pressure, but she also gets support from activism groups and gets help from advocacy organisations.",
  "A code of conduct sets rules of behaviour. A moral dilemma is a hard ethical choice. Equity means fairness. To hold someone accountable is to make them responsible. These ideas are the basis of ethics.",
  "Tom works for an inclusive school. The staff empower students who are vulnerable or marginalised. They avoid gender stereotypes and teach religious tolerance and civil rights. The result is more fairness and social mobility.",
  "Dissent and conformity: sometimes people follow the group, sometimes they disagree. Dissent can lead to change. In a free society, dissent is protected by civil rights. Conformity can be safe but may hide injustice. In a code of conduct, equity and fairness protect the vulnerable and marginalised.",
  "A privilege is an advantage that others do not have. Social mobility allows people to improve their position. Equity and fairness reduce inequality. An inclusive society empowers everyone and holds power accountable.",
  "Words of ethics: whistleblower, privilege, gender stereotype, religious tolerance, activism, advocacy, conscience, fairness, civil rights, dissent, conformity, social mobility, marginalised, vulnerable, exploit, oppression, empower, inclusive, equity, moral dilemma, code of conduct, hold accountable.",
  "The company has a code of conduct, but a manager exploits staff. A whistleblower reports it. The moral dilemma is hard: loyalty or conscience? In the end she chooses fairness and the company must hold the manager accountable.",
];

CLOZE.ethics2 = [
  "Altruism is caring for others. Impartiality is not taking sides. Deontology is ethics based on duty. Utilitarian ethics seeks the greatest good for the most people. Dignity is the value of every person.",
  "Disparity is a big difference in wealth or treatment. Xenophobia is fear of people from other countries; sexism is discrimination by gender; ageism by age; homophobia against some people. Persecution is cruel treatment for beliefs.",
  "An asylum seeker flees persecution. A refugee camp gives shelter. Famine relief brings food. Philanthropy is giving money to help. An NGO works for a cause. Humanitarianism helps people in need.",
  "A grievance is a complaint about unfair treatment. Redress is a solution. Reparations make up for for past harm. Segregation separates groups. Affirmative action helps groups that were treated unfairly.",
  "Ana works for an NGO. She helps families in a refugee camp and brings famine relief. “Altruism and dignity are my values,” she says. She also fights xenophobia and persecution in her country.",
  "Tom believes in utilitarian ethics: do what gives the most good. His friend prefers deontology: do your duty. They argue about impartiality. Both agree that dignity and philanthropy are important.",
  "Segregation divided people by race. After the fight against it, affirmative action tried to correct disparity. Reparations and redress for grievances are still debated. Ageism, sexism and homophobia also continue.",
  "A refugee seeks asylum from persecution. The camp provides food and shelter. An NGO helps with famine relief. Philanthropy gives money and humanitarianism gives work. Dignity requires respect for every person.",
  "Words of social values: altruism, impartiality, deontology, utilitarian, dignity, disparity, xenophobia, sexism, ageism, homophobia, persecution, asylum, refugee camp, famine relief, philanthropy, humanitarianism, NGO, grievance, redress, reparations, segregation, affirmative action.",
  "A rich helper gives money to an NGO. It runs a refugee camp and brings famine relief. A volunteer says: “Altruism is its own reward.” The NGO also demands redress for the grievances of those who suffered persecution.",
];

CLOZE.trade = [
  "A tariff is a tax on imports. Exports are goods sold abroad. An embargo stops trade. A multinational company works in several countries. A supply chain links producers to buyers. A commodity is a basic good.",
  "A trade deficit means imports exceed exports. Free trade has no barriers. Fair trade pays producers well. Protectionism protects local business. A subsidiary is owned by a bigger company. An emerging market is growing fast.",
  "GDP per capita shows wealth per person. The exchange rate sets the price of a currency. A sweatshop pays low wages in bad conditions. A customs duty is a tax at the border. A trade war is a fight with tariffs.",
  "Ana studies trade. She learns about tariffs, quotas and embargoes. She compares free trade and protectionism. “A multinational can bring jobs but also exploit workers,” she says. She wants fair trade.",
  "The country imports oil and exports cars. Its trade deficit is growing. The government adds a tariff on some imports, but its partners respond with customs duties. A trade war begins, and prices rise.",
  "Outsourcing moves work abroad. Shipping carries goods by sea. A bilateral agreement is between two countries. A supply chain can be long, passing through many countries before the good reaches the consumer.",
  "Tom buys fair trade coffee. He knows that the farmers receive a fair price. Without fair trade, the commodity price may be too low. A multinational controls the supply chain, but fair trade supports small producers.",
  "An emerging market grows quickly, has a rising GDP per capita and needs imports. The exchange rate changes. A subsidiary of a multinational opens a factory. Bilateral trade agreements make exports easier.",
  "Words of trade: tariff, import, export, embargo, multinational, supply chain, commodity, trade deficit, free trade, fair trade, protectionism, subsidiary, emerging market, per capita, GDP, exchange rate, sweatshop, customs duty, trade war, outsourcing, shipping, bilateral.",
  "A trade war started when the government raised tariffs on imports. The other country answered with customs duties and an embargo on some commodities. Exports fell, shipping slowed and the supply chain was disrupted.",
];

CLOZE.trade2 = [
  "A quota limits the number of imports. A levy is a tax. Cargo is goods carried by ship or plane. Freight is the transport of goods. A container ship carries containers. A dock is where ships put goods on and take them off.",
  "A smuggler brings goods illegally. A counterfeit product is a fake. The black market sells illegal goods. Barter is exchange without money. Deregulation removes rules. A single market has no barriers.",
  "Devaluation lowers the value of a currency. The balance of payments records money in and out. Offshoring moves production abroad. Raw materials are basic resources. A manufacturer makes goods. An exporter sells abroad; an importer buys.",
  "Ana works at the dock. A container ship arrives with cargo. The freight is checked, and a levy is paid. A quota limits some goods. A smuggler is caught with counterfeit watches.",
  "The black market offers counterfeit goods. Smugglers bring them in through the port. The police check the cargo and the containers. Customs officers control freight to stop counterfeit goods.",
  "Tom runs a company that is an importer and an exporter. He uses raw materials for his factory. A devaluation changes his costs. He sees that deregulation and the single market can make business easier.",
  "In the old days, people used barter: a sack of rice for a chicken. Today we use money. The balance of payments shows if a country has more imports than exports. A quota and a levy may affect trade.",
  "A manufacturer depends on raw materials and tonnage of cargo. A container ship takes the goods to the importer. The dock has cranes. The freight cost depends on distance and weight. A single market lowers barriers.",
  "Words of trade: quota, levy, cargo, freight, container ship, dock, smuggler, counterfeit, black market, barter, deregulation, single market, devaluation, balance of payments, offshoring, raw materials, manufacturer, exporter, importer, tonnage.",
  "The government introduces a quota and a levy on imported steel. Importers complain, and manufacturers need raw materials. A container ship waits at the dock. Smugglers use the black market to sell steel, so officers control all cargo.",
];

CLOZE.idioms = [
  "The exam was a piece of cake. I was not under the weather, I was on the ball. My friend said: “You hit the nail on the head!” Once in a blue moon, a test is that easy, so I decided to call it a day.",
  "At the party, Ana tried to break the ice with a joke. Tom nearly spilled the beans about the surprise, but he stopped. “Do not let the cat out of the bag,” whispered Ana. It was hard not to beat around the bush.",
  "Buying the house cost an arm and a leg. Now the ball is in your court: you must bite the bullet and decide. A big loan can be a blessing in disguise if you go the extra mile and save.",
  "Pedro nearly missed the boat on that job. His boss said: “Do not cut corners.” The last straw was a bad report. But Pedro went the extra mile, and now he and his boss see eye to eye.",
  "Sofia got cold feet before the speech, but she stole the show. “I am only pulling your leg!” joked her friend. “You were wonderful.” Sofia smiled: it was a piece of cake in the end. Her speech was a piece of cake, and she did not beat around the bush. It was a blessing in disguise, once in a blue moon, and now the ball is in your court.",
  "When two people see eye to eye, there is no conflict. To go the extra mile is to do more than needed. To cut corners is to do a bad job quickly. To miss the boat is to lose a chance.",
  "The meeting started slowly. To break the ice, the boss told a story. Then a colleague hit the nail on the head about the real problem. Nobody wanted to beat around the bush. They decided to call it a day.",
  "I felt a bit under the weather, so I stayed in. Once in a blue moon I take a day off. My neighbour said it was a blessing in disguise, because a storm came that day and I stayed safe at home. It was a blessing in disguise, and it was a piece of cake to fix.",
  "Words of idioms: a piece of cake, break the ice, under the weather, once in a blue moon, hit the nail on the head, spill the beans, cost an arm and a leg, the ball is in your court, let the cat out of the bag, beat around the bush, bite the bullet.",
  "He was getting cold feet, but the last straw came when the date moved again. He decided to bite the bullet and call it a day. “It will cost an arm and a leg,” he said, “but it is a blessing in disguise.”",
];

CLOZE.idioms2 = [
  "Their quarrel was a storm in a teacup, but a friend added fuel to the fire. Soon it got out of hand and Tom hit the roof. After a long talk they were back to square one, and both had to face the music.",
  "Ana was in hot water at work. She had burned the midnight oil to meet a deadline, but she finished by the skin of your teeth. “Let me cut to the chase,” said her boss. “Keep your chin up.”",
  "Out of the blue, Pedro got a job offer. He was over the moon. He had to play it by ear, since he could not pull strings. He read between the lines of the offer and decided to take it with a pinch of salt.",
  "Sit on the fence if you want, but it will not help. When everyone jumped on the bandwagon, Sofia did not rock the boat. She let off steam by running in the park and kept her chin up.",
  "If you are barking up the wrong tree, you are looking in the wrong place. A storm in a teacup is a big noise about nothing. To cut to the chase is to go to the main point. To face the music is to accept the result.",
  "The politician was in hot water. He had pulled strings to get a contract. When the story got out of hand, he tried to cut to the chase. The public took his words with a pinch of salt and he had to face the music.",
  "When it comes to a holiday, I like to play it by ear. I do not plan too much. If a chance comes out of the blue, I take it. Last year it worked, and I was over the moon. It was a storm in a teacup, and nobody wanted to rock the boat or add fuel to the fire.",
  "Words of idioms: a storm in a teacup, add fuel to the fire, back to square one, barking up the wrong tree, burn the midnight oil, by the skin of your teeth, cut to the chase, face the music, get out of hand, hit the roof, in hot water, jump on the bandwagon.",
  "Tom read between the lines of the letter. He felt that his friend was upset but did not want to rock the boat. Instead of sitting on the fence, he called him. After a talk, the problem was a storm in a teacup. He was in hot water but kept his chin up and tried to cut to the chase.",
  "The project got out of hand and we were back to square one. My boss hit the roof, but I kept my chin up. We burned the midnight oil and finished by the skin of our teeth. It was a close call. Nobody wanted to sit on the fence, so we jumped on the bandwagon.",
];

CLOZE.phrasal = [
  "I came across an old photo when I was clearing out my room. It brought up many memories. I picked it up and figured out the date. Then I put it away and went on with the cleaning. I also had to figure out how to carry out my plan and to bring up the problem with a friend. Later I looked into it, found an old letter and passed it on, then I pointed out the date and set up a small album.",
  "The team carried out a study. They looked into the problem and came up with a plan. They pointed out some mistakes and worked out a solution. The boss set up a new group to take over the project.",
  "Tom is trying to cut down on sugar. He cannot put up with the headaches, but he will not give in. His doctor says that he will get over it. He ran out of sweets last week and did not buy more. Tom could not put up with it and decided to cut down on sweets and to carry out a plan.",
  "Ana wants to drop out of her course. Her teacher urges her to go through the difficult part first. “Do not hold back,” he says. “Do not turn down help from friends.” She decides to stay.",
  "My grandfather passed away last year. We went through his papers and found some letters. We could not make out some words. My mother turned down an offer to sell his house. She says she wants to keep it. We had to figure out a plan, carry out the wishes and bring up the topic, but he did not want to give in.",
  "He got away with it for years, but finally they found out. The police looked into the case and pointed out the clues. The thief gave in and told the truth. The judge brought up his past crimes. The police had to carry out a check and figure out how he could get away with it, and they came up with a plan.",
  "Two-word verbs are difficult. Come across means to find by chance. Bring up means to raise a topic. Carry out means to do. Figure out means to understand. Give in means to stop resisting. Pass away means to die.",
  "I ran out of petrol on the road. A man picked me up and took me to a garage. They set up a system to carry out the repair. I could not put up with the long wait, but at last the car was fixed. A man picked me up, and we had to figure out how to carry out the repair and set up a plan.",
  "Pedro came up with an idea to cut down on costs. He pointed out that the company could take over a small firm. His boss turned down the plan at first, but Pedro did not give in and in the end it worked out. Pedro came up with an idea, and the boss said he would carry out the plan and take over the project.",
  "Words of two-word verbs: bring up, carry out, come across, come up with, cut down on, drop out, figure out, get away with, give in, go through, hold back, look into, make up, pass away, pick up, point out, put up with, run out of, set up, take over, turn down, work out.",
];

CLOZE.phrasal2 = [
  "I need to brush up on my English before the trip. I will buckle down and jot down new words. My friend will chip in with some books. I will iron out my problems with grammar and weed out my mistakes.",
  "The talks fell through. The manager tried to smooth over the problem and to hammer out a new deal. He did not want to gloss over the real reasons. His team flesh out the proposal and mull over the options.",
  "Tom tends to shy away from big meetings. His boss wants to pin down a date and rein in the costs. The company will phase out old products and scale back its plans. Tom will leaf through the report tonight.",
  "The police clamp down on crime. The mayor wants to fend off the criticism and to dwell on the success of the plan. Problems stem from poverty, he says. We cannot gloss over it. New measures are being drafted.",
  "To iron out a problem is to solve small difficulties. To jot down is to write quickly. To leaf through is to read quickly. To mull over is to think carefully. To phase out is to end slowly.",
  "Ana jots down ideas, mulls over choices and hammers out a plan. She fleshes out the details and irons out the problems. The plan nearly falls through, but she pins down a helper who chips in.",
  "The firm has to scale back its plans and rein in spending. It will phase out the old model and weed out weak suppliers. The staff buckle down and try to fend off competition. The managers smooth over fears.",
  "When they brushed up on the rules, the players buckled down. The coach urged them to clamp down on mistakes and not dwell on failures. The problems stemmed from weak back line, so they worked on it.",
  "Words of two-word verbs: brush up on, buckle down, chip in, clamp down on, dwell on, fall through, fend off, flesh out, gloss over, hammer out, iron out, jot down, leaf through, mull over, phase out, pin down, rein in, scale back, shy away from, smooth over, stem from, weed out.",
  "My plan fell through, but I did not dwell on it. I leafed through my notes, jotted down new ideas and mulled over the options. A friend chipped in some money. In the end I hammered out a better plan.",
];

CLOZE.speech = [
  "He mumbled something and whispered to his friend. She murmured an answer. The boss grumbled about the delay. “Wait!” exclaimed the teacher. He hinted that the test would be hard and insisted that everyone study.",
  "She boasted about her new car. Her friend implied that it was too expensive. The child pleaded for a sweet. His mother urged him to wait. He stammered an excuse and hesitated before he told the truth.",
  "Tom pondered the question and contemplated his choices. He scrutinised the document with care. He glanced at his watch, caught a glimpse of a face in the window and stared. Then he gazed at the sky and peered into the dark.",
  "Maria wandered through the old town. She glanced at the shops and gazed at the old buildings. At the corner, she stared at a statue and peered through a window. Then she hesitated and went in.",
  "Words of speech and view: mumble, whisper, murmur, grumble, exclaim, hint, insist, imply, boast, plead, urge, stammer, hesitate, ponder, contemplate, scrutinise, glance, glimpse, stare, gaze, peer, wander. Choose five of them and write a sentence with each one.",
  "The teacher scrutinised the answer and pondered. “Interesting,” he murmured. The student hesitated, then insisted that he was right. The teacher hinted that he was wrong, but listened. At the end, they both exclaimed and laughed.",
  "A sad boy stared at the sea. He gazed for an hour. He did not boast or grumble. Quietly he contemplated his life and wondered what to do. Then he whispered: “I will go home.”",
  "To mumble is to speak unclearly; to whisper is to speak very quietly; to murmur is to speak low and softly; to grumble is to complain in a low voice; to exclaim is to cry out; to stammer is to speak with pauses.",
  "He glanced at the letter and glimpsed a name. Then he stared at it. “What does it imply?” he murmured. He pondered for a while, wandered around the room and finally urged his wife to read it too.",
  "In the court, the lawyer insisted that his client was innocent. The prosecutor implied the opposite. The witness hesitated, stammered and then pleaded for a break. The judge urged them to continue.",
];

CLOZE.speech2 = [
  "“I don't care!” she snapped. “Fine,” he retorted. The man began to blurt out the truth, but he stuttered. Then he began to ramble and rant. The audience chuckled and some began to babble.",
  "She sneered at the plan and glared at him. He squinted at the paper, peeked at the answer and gaped at the result. “Unbelievable,” he said. Then he skimmed the rest and began to muse and brood.",
  "Tom lamented his bad luck. He mused on the past and brooded over his mistakes. He tried to fathom why it happened. He surmised that someone had betrayed him, but he could not presume to know.",
  "To retort is to answer sharply. To snap is to speak angrily. To rant is to speak wildly. To ramble is to talk without focus. To babble is to talk fast and without meaning. To chuckle is to laugh quietly.",
  "The old man would ramble on about the past. Sometimes he ranted about the news. The children laughed, but his daughter listened. “He just wants to talk,” she said, and she fathomed his loneliness. He ranted and ramble on, then snapped and began to babble and to muse.",
  "Ogle is to stare rudely; peek is to look quickly; squint is to look through half-closed eyes; glare is to look angrily; gape is to look in surprise; skim is to read fast; sneer is to smile with contempt.",
  "The student blurted out an answer and then stuttered an apology. The teacher chuckled. “Do not babble,” he said. “Think, then speak.” The student began to muse on his mistake and learned from it.",
  "Words of sound and view: blurt, retort, snap, stutter, lament, ramble, rant, babble, chuckle, sneer, glare, squint, peek, gape, ogle, skim, muse, reflect, brood, fathom, surmise, presume. Choose five of them and write a sentence with each one.",
  "She presumed that he would arrive late. He was, in fact, early. She gaped, and he chuckled. “You did not expect me,” he said. She smiled and surmised he had a good reason, but did not want to ask.",
  "At the meeting, the boss glared at the clock and snapped at the staff. A man began to ramble. Another began to rant. The secretary skimmed her notes and tried to fathom what to write. At last, they reflected and agreed.",
];

CLOZE.literary = [
  "The day was gloomy and melancholy, but the evening was serene and radiant. The vivid colours of the sunset were ephemeral. The old man was humble, resilient and eloquent. His words were profound and subtle.",
  "The meticulous worker found the work tedious but did not complain. The boss was arrogant and relentless. A reluctant smile crossed the worker's face. The mundane routine was ambiguous: boring, yet also safe.",
  "The lavish house was ubiquitous in the town's pictures. Its owner was elusive, rarely seen. The garden was fragile in winter and radiant in spring. The tour guide spoke with an eloquent voice.",
  "Ana felt melancholy on a gloomy afternoon. The ephemeral beauty of the leaves made her pensive. The sky was subtle in colour. A profound sense of calm came to her. Soon the evening was serene.",
  "A resilient person recovers; a fragile object breaks easily. A humble person is modest; an arrogant person is proud. A tedious task is boring; a meticulous worker is careful; a relentless effort never stops.",
  "The writer used vivid images and an eloquent style. His story was ambiguous, a mix of mundane details and profound ideas. The hero was reluctant but resilient. The ending was subtle and elusive.",
  "Words of style: melancholy, serene, vivid, eloquent, ephemeral, ubiquitous, meticulous, reluctant, ambiguous, tedious, resilient, lavish, gloomy, radiant, humble, arrogant, relentless, fragile, profound, subtle, mundane, elusive. Choose five of them and write a sentence with each one.",
  "In the novel, the narrator is gloomy and reluctant. The setting is mundane, but the language is eloquent and vivid. The ubiquitous rain adds a melancholy tone, and the ending is ambiguous, elusive and profound.",
  "The lavish party was ephemeral. A radiant bride, a humble groom, an arrogant uncle and a reluctant cousin: all were present. The mood was serene at first and tedious later. The memory is subtle and fragile.",
  "Tom is meticulous and relentless at work, yet humble. He finds tedious tasks mundane, but never complains. His resilient character and eloquent speech make him a good leader. His success is profound and well earned.",
];

CLOZE.literary2 = [
  "The ethereal light was luminous over the sombre hills. The languid river flowed under the desolate sky. The lush valley was tranquil, while the barren mountain was austere. A pensive man stood alone.",
  "The opulent palace had sublime views. Inside, a jovial king laughed, while a haughty woman ruler sat silent. A sullen worker stood in a corner. Nearby, a frail child played with a whimsical toy.",
  "The macabre story was grotesque. The forlorn hero walked through the turbulent night. The solemn bells rang. His pensive mood was solemn, and the barren land reflected his desolate heart.",
  "Ana described the scene: a lush garden, a tranquil lake, a whimsical house and a luminous moon. It was sublime. Then a turbulent storm came and the ethereal beauty turned sombre and macabre.",
  "A languid summer afternoon: the air was tranquil and the garden lush. A pensive girl read under a tree. A jovial uncle laughed nearby. Nothing was turbulent, and the world felt serene and sublime.",
  "The opulent hotel was a contrast to the desolate village. The haughty owner and the forlorn guests rarely spoke. In winter the barren fields were austere. The frail old worker lit a solemn candle.",
  "Words of mood: ethereal, languid, sombre, luminous, opulent, austere, sublime, grotesque, macabre, whimsical, pensive, forlorn, desolate, lush, barren, tranquil, turbulent, solemn, jovial, sullen, haughty, frail. Choose five of them and write a sentence with each one.",
  "Sullen and haughty characters appear in the book. A jovial man brings light to the grotesque scene. The macabre ending is solemn. The language is opulent and the mood is sombre. A tranquil last chapter follows.",
  "Tom paints a whimsical picture: a luminous moon over a lush hill, a tranquil sea and a languid cat. It is a sublime view. His friend finds it ethereal. The art critic calls it austere but beautiful.",
  "A frail old man sits in a barren room. His forlorn face is pensive. Outside, the turbulent sea is sombre. Yet his heart is tranquil. He looks at the luminous moon and thinks of a lush, happy past.",
];

CLOZE.rhetoric = [
  "Rhetoric is the art of persuasion. A metaphor says one thing is another. A simile compares with “like” or “as”. An allusion refers to something known. Hyperbole exaggerates, while understatement does the opposite.",
  "A cliché is an used too much phrase. Jargon is technical language. A euphemism is a softer word. Tone is the attitude of the speaker; register is the level of politeness; connotation is the feeling attached to a word.",
  "To paraphrase is to say in other words. To summarise is to give the main points. To elaborate is to add detail. To articulate is to say clearly. A coherent text is logical. A concise text is short and clear; a verbose one is too long.",
  "A fluent speaker with eloquence can use persuasion with skill. The tone is calm, the register is formal and the message is coherent. A metaphor makes the speech vivid and a simile makes it clear.",
  "The politician used hyperbole and a cliché in his speech. His critic used understatement and irony. The journalist wrote in a concise way and avoided jargon. The article summarised the debate and quoted both sides.",
  "Ana writes an essay. She uses a metaphor and a simile and one allusion to a famous book. She elaborates her main ideas and keeps the text coherent and concise. Her tone is formal and the register suits the topic.",
  "“Time is money” is a metaphor. “As brave as a lion” is a simile. “A million times” is hyperbole. “It's a bit cold” on a freezing day is understatement. “Passed away” is a euphemism for “died”.",
  "Words of rhetoric: rhetoric, metaphor, simile, allusion, hyperbole, understatement, cliché, jargon, euphemism, tone, register, connotation, paraphrase, summarise, elaborate, articulate, coherent, concise, verbose, fluent, eloquence, persuasion. Choose five of them and write a sentence with each one.",
  "The doctor avoids jargon and uses a euphemism to give bad news in a gentle way. He articulates clearly and chooses a calm tone. He paraphrases to be sure the patient understands, and then elaborates if needed.",
  "A verbose speaker uses too many words, a concise one few. The connotation of a word can change the tone. A good writer is fluent, coherent and convincing, and knows when to use a metaphor or a cliché and when to avoid them.",
];

CLOZE.rhetoric2 = [
  "An oxymoron joins opposites, like “deafening silence”. Sarcasm says the opposite of what is meant. Antithesis contrasts ideas. Anaphora repeats words at the start of lines. Parallelism uses similar structures.",
  "A rhetorical question needs no answer. Pathos appeals to emotion; logos to reason. A digression leaves the main topic. Circumlocution uses many words to avoid saying something. A tautology repeats the same idea.",
  "A pleonasm is saying more than needed. An idiom is a fixed expression. A turn of phrase is a way of saying something. Wordplay is clever use of words. A double entendre has two senses, one of them rude.",
  "Ana used sarcasm in her speech, which caused offence. Her style was bombastic and inflammatory. A friend gave advice: be pithy and terse, use pathos and logos, and avoid digression and circumlocution.",
  "In the famous speech, the orator used anaphora, antithesis and parallelism. He asked a rhetorical question and left a silence. The audience, moved by pathos, rose to its feet. The wordplay made the message easy to remember.",
  "“Free gift” is a pleonasm. “It is what it is” is a tautology. “Jumbo shrimp” is an oxymoron. “Oh great, rain again” can be sarcasm. A terse reply is brief; a pithy one is short and full of meaning.",
  "Tom enjoys wordplay and double entendre. His jokes often have innuendo. He is good at turns of phrase. A bombastic speaker speaks with too much show; an inflammatory speaker tries to anger the crowd.",
  "Words of rhetoric: oxymoron, sarcasm, antithesis, anaphora, parallelism, rhetorical question, pathos, logos, digression, circumlocution, tautology, pleonasm, idiom, turn of phrase, wordplay, double entendre, innuendo, inflammatory, bombastic, pithy, terse.",
  "The writer's pithy lines, terse style and clever wordplay were praised. He avoided digression, circumlocution and tautology. His antithesis made ideas clear, and his rhetorical questions made readers think.",
  "In a debate, a speaker may use pathos to move and logos to convince. Anaphora and parallelism add rhythm. Sarcasm, innuendo and inflammatory language can hurt. A good debater remains clear and respectful.",
];

CLOZE.colloc = [
  "To make a decision, you must take a risk and draw a conclusion. Pay attention to the details, bear in mind the deadline and take into account the costs. Then you can make headway and meet a deadline.",
  "The campaign wants to raise awareness. The team must come to terms with a new reality and strike a balance between cost and quality. A good plan lays the foundations for later success and plays a role in the whole project.",
  "The report sheds light on the problem. The findings fall short of what was expected, but they set a precedent. The judge will reach a verdict soon. Do not jump to conclusions before the evidence is clear.",
  "Ana cannot hold a grudge against her friend. She decides to make a decision and to come to terms with the loss. She pays attention to her feelings and takes a risk: she calls him and says sorry.",
  "Tom runs a risk when he drives too fast. His mistake gives rise to a serious accident. The police draw a conclusion and take into account the weather. The judge says the case does not do justice to the facts.",
  "A good manager makes a decision with care. She takes a risk only if she can bear the consequences in mind. She tries to strike a balance and to make headway with her projects. She meets every deadline.",
  "Collocations are word pairs that go together: make a decision, take a risk, draw a conclusion, pay attention, raise awareness, meet a deadline, bear in mind, lay the foundations, strike a balance and play a role.",
  "The court has to reach a verdict. The jury takes into account all the evidence. The lawyer wants to do justice to his client. A precedent may give rise to future cases. Nobody should jump to conclusions.",
  "Sofia wants to lay the foundations for a business. She makes a decision, takes a risk and tries to meet a deadline. Her results fall short of her hopes, but she makes headway and keeps in mind a long-term plan.",
  "To shed light on a topic is to explain it. To fall short of a goal is not to reach it. To give rise to a problem is to cause it. To hold a grudge is to keep a feeling of anger. To run a risk is to be in danger.",
];

CLOZE.colloc2 = [
  "There was a heated debate and fierce competition for the prize. The result brought bitter disappointment to some. It is widely acknowledged that the winner was the best. Experts strongly advise caution about such events.",
  "The weather was bitterly cold. There was a sharp increase in the cost of heating and a steady decline in the number of tourists. The ideas of the old regime are deeply rooted, but many want a change.",
  "To reach a compromise, both sides need to give something. The union raised concerns about safety. The government decided to impose a ban on old machines. The workers had to withstand pressure from the bosses.",
  "A customer lodged a complaint. The company decided to launch an investigation. The report cast doubt on the claims of the factory. The manager tried to make amends and offered a refund. Safety took precedence.",
  "Terrorism poses a threat to society. Leaders exert influence to reduce it. The efforts begin to bear fruit, but the police come under fire from critics. Debates about the rules are heated and complex.",
  "Ana raises concerns about the cost. The debate is heated, but she reaches a compromise with her boss. They agree to a sharp increase in the budget, which must bear fruit within a year. She strongly advises care.",
  "A widely acknowledged fact is known by all. A deeply rooted tradition is very old. A heated debate is angry. Fierce competition is strong. Bitter disappointment is deep sadness. A steady decline is a slow fall.",
  "Tom made a mistake and wanted to make amends. He lodged an apology and promised to launch a plan to improve. The company came under fire for its poor service, and the new manager took precedence over the old. His mistake cast doubt on his work, and the debate was heated, so the company had to make amends and exert influence. The company will launch an investigation, impose a ban and lodge a complaint.",
  "The government has to impose a ban on dangerous toys. It exerts influence on shops to withdraw them. The ban casts doubt on the safety of other products, and consumers lodge complaints. A new law bears fruit.",
  "The school decided to launch an investigation into bullying. The result cast doubt on the old rules. Teachers raise concerns, and the principal imposes a ban on phones. It is widely acknowledged that the problem is deeply rooted.",
];

CLOZE.formal = [
  "The meeting will commence at nine and terminate at noon. Members are requested to notify the secretary in advance. We shall endeavour to assist everyone, and we shall ascertain all the facts before we decide.",
  "Please comply with the rules and refrain from smoking. Visitors must abide by the regulations and adhere to the schedule. The hotel can accommodate large groups, but the contract may stipulate extra costs.",
  "The company endeavours to procure good materials. Prior to the sale, the manager shall inquire about quality. The employees are remunerated monthly and can reside near the factory. Delay may necessitate a change of plans.",
  "Ana wishes to inquire about the job. She wants to ascertain if she can reside in the area. If she attains the post, she will assist the team and comply with the contract. A delay may preclude her from starting soon.",
  "The notice stipulates that visitors must refrain from taking photos. Staff will notify guests of the changes. Those who do not comply may face a fine. The rule is meant to preclude problems and ensue order.",
  "Words of formal English: commence, terminate, endeavour, ascertain, reside, inquire, assist, demonstrate, attain, procure, remunerate, notify, comply, refrain, abide by, adhere, accommodate, stipulate, preclude, necessitate, ensue, prior to.",
  "Prior to the exam, students must ascertain the rules and comply with them. They must refrain from using phones and adhere to the time limit. Failure to abide by the rules may necessitate a fine, or a new exam may ensue.",
  "In formal letters we use commence instead of start, terminate instead of end, reside instead of live, inquire instead of ask, assist instead of help, and notify instead of tell. This style is polite and correct.",
  "The court will commence at ten. The judge asks all to refrain from noise. After the trial, a long discussion may ensue. The tribunal tries to demonstrate that the law is just and to attain a fair outcome.",
  "The firm will procure new equipment, which will necessitate a larger budget. The staff are remunerated for overtime. The manager will inquire about the cost, notify the board and endeavour to attain a deal.",
];

CLOZE.formal2 = [
  "The company will acquire a rival firm. It will allocate funds, amend the contract and append a new clause. The board must authorise the plan, and a lawyer will cite the law. All members will concur.",
  "The committee will convene on Monday. The members deem the proposal useful. They will disclose the figures and discharge the old debts. If a member fails to attend, he may forfeit his right to vote.",
  "The hotel will furnish each room with a bed and a desk. The manager will impart the rules to guests. Guests are obliged to vacate the room by noon. Those who enquire at reception may receive a map.",
  "Ana peruses the contract with care. She deems that the terms are fair, so she renders her signature. She does not wish to forfeit her rights, so she will withhold payment until the work is done.",
  "Please tender your resignation in writing. The company will discharge you in an orderly way. You may solicit a reference from your manager. You must vacate your office by Friday and return the keys.",
  "Words of formal English: acquire, allocate, amend, append, authorise, cite, concur, convene, deem, disclose, discharge, enquire, forfeit, furnish, impart, oblige, peruse, render, solicit, tender, vacate, withhold. Choose five of them and write a sentence with each one.",
  "The board will convene to consider the offer. Members will peruse the report and concur or object. If the deal is authorised, the firm will allocate funds to acquire the other company and furnish the new office.",
  "A judge may deem a contract false. A lawyer will cite earlier cases. The defendant must disclose all documents. If he withholds information, he may forfeit his case. The court is obliged to render a fair decision.",
  "Tom writes to the manager: “I wish to enquire about my application. I am willing to amend my proposal and append my references. Please advise if you wish me to tender any further documents.”",
  "To amend is to change; to append is to add; to cite is to quote; to concur is to agree; to deem is to think; to disclose is to reveal; to discharge is to release; to forfeit is to lose; to furnish is to supply; to impart is to pass on.",
];

CLOZE.nuance = [
  "Nostalgia is a emotional longing for the past. A bittersweet memory has joy and sadness. Euphoria is great happiness. Apprehension is worry about the future. Indignation is anger at injustice. Resentment is bitter anger.",
  "Compassion is sympathy for others. Contempt is a feeling that someone is worthless. Despair is the loss of hope. Disdain is proud dislike. To yearn is to long for something. Zeal is great energy. Remorse is guilt. Serenity is calm.",
  "She felt nostalgia when she heard the song, and longing for her childhood. A wistful smile crossed her face. The memory was bittersweet. She felt some remorse for old mistakes, but also serenity and solace.",
  "Tom felt apprehension before the news. When he heard it, he felt indignation and resentment. His friend showed compassion. Soon Tom felt less despair. “You gave me solace,” he said.",
  "The crowd was ecstatic after the win. Zeal filled the streets. But the loser felt envy and contempt. A few were indifferent and others ambivalent. A man with apathy walked away from the noise.",
  "Words of emotion: nostalgia, bittersweet, euphoria, apprehension, indignation, resentment, compassion, contempt, despair, disdain, longing, remorse, serenity, solace, yearn, zeal, wistful, ecstatic, indifferent, ambivalent, apathy, envy. Choose five of them and write a sentence with each one.",
  "Ana yearns for her home. She feels a longing for old friends, and nostalgia for old days. It is a bittersweet feeling. She finds solace in music, and a wistful smile appears. Her serenity returns.",
  "The judge felt compassion but not kindness. The accused felt remorse and despair. The victims felt indignation and resentment. The public watched with apathy or zeal. Feelings in court are mixed.",
  "To feel ambivalent is to have two opposite feelings. To be indifferent is not to care. Apathy is lack of interest. Disdain is contempt. Euphoria is extreme joy. Envy is wanting what others have.",
  "At the reunion, many felt nostalgia and zeal. Some were ecstatic, others wistful. A man felt remorse for old quarrels and found solace in a talk. The mood was bittersweet but full of serenity and compassion.",
];

CLOZE.nuance2 = [
  "Elation is a feeling of great happiness. Dread is deep fear. Trepidation is anxiety. Consternation is shock and worry. Exasperation is deep annoyance. Bemusement is confusion. Disillusionment is loss of dream.",
  "Magnanimity is kindness. Rancour is deep bitterness. Spite is a wish to hurt. Complacency is too much satisfaction. Humility is humble behaviour. Vanity is too much pride. A smug person is pleased with himself.",
  "A sheepish boy was caught. A wary cat watched. A disgruntled worker complained. A nonchalant man moved his shoulders. An aloof girl stayed apart. A dismayed father looked unhappy. A jubilant crowd cheered.",
  "Tom entered the room with trepidation. His consternation turned to exasperation when he saw the mess. A sheepish child said sorry. Tom's bemusement turned into humour. He showed magnanimity and forgave him.",
  "After a long wait, Ana felt elation: she got the job. A rival felt spite and rancour, and a smug colleague showed vanity. Ana, with humility, thanked everyone. Her dread of failure was gone.",
  "The disgruntled staff were wary of the new boss. He was nonchalant and aloof at first, but he later showed humility. The consternation faded, and the jubilant mood returned. Disillusionment gave way to hope.",
  "Words of feelings: elation, dread, trepidation, consternation, exasperation, bemusement, disillusionment, magnanimity, rancour, spite, bitterness, complacency, humility, vanity, smug, sheepish, wary, disgruntled, nonchalant, aloof, dismayed, jubilant. Choose five of them and write a sentence with each one.",
  "A wary man is cautious. A nonchalant person seems not to care. An aloof person is distant. A jubilant person is very happy. A dismayed person is shocked. A sheepish person is embarrassed. A smug person is self-satisfied.",
  "After the defeat, the coach felt disillusionment and bitterness. The players were dismayed. But he showed humility and magnanimity, and the team's complacency went away. A new season began with hope and no spite.",
  "Pedro was smug about his success, and his vanity grew. Complacency made him careless. When he failed, he was dismayed and sheepish. Humility returned. His colleagues, once wary, offered magnanimity.",
];

CLOZE.thought = [
  "An axiom is a basic truth. A dichotomy is a split into two. Empirical knowledge comes from experience. Epistemology studies knowledge. Ethos is the spirit of a group. A paradigm is a model.",
  "A pragmatic person is practical. A rationale is the reason behind. Subjective views depend on feelings; objective views on facts. A tenet is a principle. A utopia is a perfect place; a dystopia a terrible one.",
  "Cognitive science studies the mind. Induction goes from examples to a rule. Relativism says truth depends on the view. Determinism says everything has a cause. A fallacy is a false argument. A dogma is a belief that cannot be questioned.",
  "Introspection is looking into your own mind. Rational thought uses reason. To postulate is to assume. The philosopher postulates an axiom, and his rationale is empirical. He is pragmatic and objective.",
  "Ana studies epistemology. She learns that a paradigm can change. She tests an axiom with empirical data and avoids a fallacy. Her professor says: “Be objective, but remember that all knowledge has a subjective side.”",
  "A utopia is a dream of perfection, but a dystopia is a bad dream of control. Writers use both to explore society. They examine ethos, dogma and the tenets of a regime. Readers are asked to think.",
  "Tom prefers a pragmatic approach. He depends on induction and empirical results. His friend believes in determinism, while another prefers relativism. They debate the dichotomy between free will and cause.",
  "Words of thought: axiom, dichotomy, empirical, epistemology, ethos, paradigm, pragmatic, rationale, subjective, objective, tenet, utopia, dystopia, cognitive, induction, relativism, determinism, fallacy, dogma, introspection, rational, postulate. Choose five of them and write a sentence with each one.",
  "A rational argument avoids a fallacy and a dogma. A good scientist is objective, uses an empirical method and follows a paradigm. He is open to change if the evidence is strong. Introspection helps him know his bias.",
  "Sofia practises introspection. She considers her tenets and asks about their rationale. She sees that some views are subjective. She postulates a new idea, tests it and, if the evidence is cognitive and empirical, she accepts it.",
];

CLOZE.thought2 = [
  "Ontology studies being; metaphysics studies the nature of reality. Existentialism says we create our own meaning. Nihilism says nothing matters. Stoicism teaches calm in hard times. Hedonism seeks pleasure. Materialism says only matter is real.",
  "Idealism says reality is made of ideas. Solipsism says only my mind is sure. A syllogism is a logical argument with two premises. Deduction goes from rule to case. A contradiction in terms is a phrase like “a round square”.",
  "A thought experiment tests ideas in the mind. A moral compass guides right and wrong. Free will is the power to choose. Consciousness is awareness. Mortality is the fact that we die. Transcendence goes outside the ordinary.",
  "Enlightenment is a period of reason and also an inside understanding. A dogmatic person will not change. A speculative idea has no proof. Abstraction is thinking without concrete examples.",
  "Ana reads about existentialism and stoicism. She thinks about free will and mortality. In a thought experiment she asks: if no one could see me, what would I do? Her moral compass answers clearly.",
  "A philosopher used a syllogism: all men are able to die, Socrates is a man, so Socrates is able to die. It is deduction. Another used a thought experiment on consciousness. A third was dogmatic and refused to listen.",
  "Words of philosophy: ontology, metaphysics, existentialism, nihilism, stoicism, hedonism, materialism, idealism, solipsism, syllogism, deduction, contradiction in terms, thought experiment, moral compass, free will, consciousness, mortality, transcendence, enlightenment, dogmatic, speculative, abstraction.",
  "Tom is a thinker, but his sister is an dreamer. He says that only matter exists. She says that mind comes first. They discuss metaphysics and ontology over dinner and finish with a smile and a coffee. Metaphysics, ontology, existentialism and nihilism also come into the talk, with stoicism, hedonism, idealism and solipsism.",
  "A hedonist seeks pleasure, a calm person accepts pain, and a person who sees no meaning sees no meaning. An thinker chooses his own purpose. The questions of free will and mortality interest them all, as do consciousness and transcendence.",
  "Sofia loves abstraction. She writes speculative essays on solipsism and enlightenment. Her teacher says her style is dogmatic at times. She replies: “I will use more thought experiments and fewer assumptions.”",
];

CLOZE.animalidioms = [
  "Searching for the lost keys was a wild goose chase. The red herring was a note in the drawer. Nobody mentioned the elephant in the room: the real problem. At last I smelled a rat and found the truth. It was a wild goose chase and a red herring, but in the end he took the bull by the horns.",
  "He tried to kill two birds with one stone and do two jobs at once. His boss said: “Let sleeping dogs lie and finish the first.” The lion's share of the work was his. He took the bull by the horns. It was a wild goose chase and a red herring, but the elephant in the room was the lion's share.",
  "She had butterflies in her stomach before the show. She was like a fish out of water on the stage. But the early bird catches the worm, and she arrived first. “Hold your horses,” said a friend, “wait for the signal.” She felt like a fish out of water, with butterflies in her stomach, and told a friend: “Hold your horses and smell a rat.”",
  "The boy who cried wolf lost his friends' trust. The black sheep of the family was a dreamer. A white elephant is an expensive thing that is not useful. When pigs fly, I will believe it, said his mother.",
  "It's raining cats and dogs. I'm barking up the wrong tree if I look for my umbrella here. My friend is like a bull in a china shop: he breaks things. The cat's whiskers were his new car.",
  "A bird's-eye view from the tower showed the tip of the iceberg: the city is bigger than we think. Smell a rat means to suspect a trick. Take the bull by the horns means to face a problem with courage.",
  "Words of animal idioms: a wild goose chase, the elephant in the room, a red herring, kill two birds with one stone, let sleeping dogs lie, the lion's share, a white elephant, when pigs fly, smell a rat, take the bull by the horns.",
  "The new building was a white elephant. It cost a lot and nobody used it. The mayor took the bull by the horns and sold it. Some wanted to let sleeping dogs lie, but the elephant in the room was the debt. The cat's whiskers, a red herring and a wild goose chase made a long story.",
  "The case was a red herring, and the detective was on a wild goose chase. He smelled a rat when a witness cried wolf. Finally, he got a bird's-eye view of the problem and saw the tip of the iceberg.",
  "At the meeting, the lion's share of time went to one man. A colleague who was a fish out of water stayed silent. Another said: “Hold your horses, let us listen to everyone.” The boss, who was an early bird, agreed. It was the tip of the iceberg: a white elephant and a wild goose chase.",
];

CLOZE.animalidioms2 = [
  "He is a snake in the grass: a false friend. She is a dark horse: nobody knows her skill. He is a lone wolf, always alone. She is a busy bee, always working. This shop is a cash cow, earning plenty.",
  "A cold fish shows little emotion. A copycat copies others. A guinea pig is used for tests. A leopard cannot change its spots: people don't change their nature. A sitting duck is an easy target.",
  "Beware of a wolf in sheep's clothing: it looks kind but is dangerous. The project moved at a snail's pace. My brother eats like a horse. My boss has a bee in his bonnet about the plan. He is a busy bee, a lone wolf and a dark horse who works at a snail's pace and eats like a horse.",
  "Don't put the cat among the pigeons by telling the news. To enter the lion's den means to face danger. The worm has turned: the quiet man finally answered. He wants to rule the roost.",
  "The children were quiet as a mouse, but the dog had ants in its pants. The teacher, a busy bee, prepared the lesson. The new boy was a dark horse: he won the prize. His friend was a copycat. The cash cow, the busy bee and the guinea pig all appeared in the story, and the dark horse won. A busy bee and a lone wolf, a cash cow and a snake in the grass: all appear in this story, along with a sitting duck.",
  "Tom is a lone wolf at work. He is not a cold fish; he is shy. He is a guinea pig for the new method. His boss, who is a snake in the grass, wants to rule the roost. But the worm has turned.",
  "Words of animal idioms: a snake in the grass, a dark horse, a lone wolf, a busy bee, a cash cow, a cold fish, a copycat, a guinea pig, a leopard cannot change its spots, a sitting duck, a wolf in sheep's clothing, at a snail's pace.",
  "The company was a sitting duck for a takeover. The old product was a cash cow, but the new one moved at a snail's pace. A guinea pig group tested it. The boss, a leopard that cannot change its spots, ruled the roost.",
  "Ana has a bee in her bonnet about recycling. She eats like a horse at lunch and is a busy bee at work. Her brother is a dark horse who surprised everyone. He walked into the lion's den and won.",
  "To have ants in your pants is to be nervous. To eat like a horse is to eat a lot. To be quiet as a mouse is to make no noise. To put the cat among the pigeons is to cause trouble. A wolf in sheep's clothing hides his real aims.",
];

CLOZE.phrasal3 = [
  "My computer broke down, so I could not back up my files. I had to fill in a form and hand in a request. The technician called me back and I had to hang on. He sorted out the problem, and everything turned out fine.",
  "The match was called off because of rain. The fans fell apart in the stadium: some got cross and others left. A friend of mine had come down with a cold and could not come. He let me down but I got over it. The match was called off, and everyone had to hang on, fill in a form and hand in the tickets, but nobody gave away the money.",
  "Tom does not look down on anyone. But he will not put off his duties. He ran into an old friend, who kept up with the news. They talked about the day they made out a shape in the sky and moved on. He also hands in his work, gets over his fear, fills in forms and backs up his files.",
  "Ana did not give away her secret. She stood for her beliefs. Her friend showed off a new car, but Ana did not fall for it. She cut off the call and moved on. In the end, the plan turned out well.",
  "Some trends catch on fast, but many wear out soon. A company that falls apart has not kept up with the market. Employees may be let down or laid off. Managers must hand in plans and sort out issues.",
  "Words of two-word verbs: back up, break down, call off, catch on, come down with, cut off, fall apart, fall for, fill in, get over, give away, hand in, hang on, keep up with, let down, look down on, make out, move on, put off.",
  "When my car broke down on the motorway, I called a mechanic, who cut off the engine and sorted out the problem. He told me to hang on while he made out the fault. At the end, it turned out to be a small thing.",
  "I fell for a trick and gave away my password. The bank called me, and I filled in a form. They sorted out the problem and told me to back up my files. I got over the shock and moved on.",
  "He was always showing off. The teacher did not look down on him, but told him to hand in his work. He put off his homework and was let down by his own laziness. Finally, he caught on and kept up with the class.",
  "A storm came and the event was called off. My friend, who had come down with the flu, could not come anyway. We ran into some problems with the tickets, but we sorted them out and moved on to another plan. He also had to fill in a form, hand in a paper and give away nothing, and he kept up with the news.",
];

CLOZE.phrasal3b = [
  "The meeting was going well until one man began to act up. Another opted out and a third lashed out. A manager tried to chime in, but the argument fizzled out. The deal did not pan out and the team had to knuckle down.",
  "Ana had to bounce back after a bad exam. She decided to knuckle down and not to clam up in class. She asked for help and branched out to new subjects. It dawned on her that she could do it.",
  "Pedro dozed off in the meeting, and the boss brushed off his excuse. A colleague bailed him out by chiming in. Later, Pedro was afraid he would mess up again, but he decided not to back out.",
  "The police cracked down on crime. Business owners cashed in on the situation by selling security. Others clammed up when asked about it. The attention dwindled away, and the plan fizzled out.",
  "Words of two-word verbs: act up, back out, bail out, bounce back, branch out, brush off, cash in on, chime in, clam up, crack down on, dawn on, doze off, dwindle away, fizzle out, fob off, hold out, knuckle down, lash out, mess up, nod off, opt out, pan out.",
  "The company tried to cash in on its fame and branch out into new markets. But the plan did not pan out, and it dwindled away. The boss fobbed off the critics, but then he had to knuckle down and bounce back.",
  "I nodded off on the train and missed my stop. A passer-by had to chime in to wake me. I dozed off again. Finally, it dawned on me that I should sleep more at night. I will not mess up again.",
  "Tom wants to back out of the deal. His partner tries to hold out hope. If they opt out, the firm will have to bail itself out. The partner lashes out, but later he clams up. The talks fizzle out.",
  "When the children act up, parents should not brush them off or lash out. A calm talk may help. The class teacher can crack down on bad behaviour, but it is better to chime in with praise. Things usually pan out well.",
  "She had to bounce back from failure. She knuckled down, branched out and stopped trying to fob off her fears. It dawned on her that fear dwindled away when she tried. At last it all panned out.",
];

CLOZE.narrative = [
  "The narrator tells the story. The protagonist is the hero and the antagonist is the opponent. The plot has a twist, a climax and a denouement. A flashback shows the past; foreshadowing hints at the future.",
  "Symbolism and imagery give meaning. Personification gives human qualities to things. Alliteration repeats sounds. Onomatopoeia copies sounds. A motif is a repeated element. Satire mocks society. A tragedy ends sadly.",
  "A poem has stanzas and rhyme. A sonnet has fourteen lines. Prose is ordinary writing. A memoir is a personal account of life. An anthology is a collection of works. Each form has its own style.",
  "Ana reads a novel with a strong protagonist and a cruel antagonist. The plot twist surprises her. At the climax, the hero fights. In the denouement, everything is explained. She loves the imagery and symbolism.",
  "The narrator uses a flashback to explain the past. Foreshadowing in the first chapter hints at the tragedy. The motif of the sea returns. The author uses personification: “the wind whispered”. The ending is sad.",
  "Tom writes a sonnet. He uses rhyme and alliteration. He adds onomatopoeia: “the buzz of the bees”. His friend writes a satire about politicians. A teacher collects the works in an anthology.",
  "Words about stories: narrator, protagonist, antagonist, plot twist, climax, denouement, flashback, foreshadowing, symbolism, imagery, personification, alliteration, onomatopoeia, motif, satire, tragedy, stanza, rhyme, sonnet, prose, memoir, anthology. Choose five of them and write a sentence with each one.",
  "A memoir is written in prose, while a sonnet is a poem. The narrator of the memoir tells his life with flashbacks. The climax is a moment of crisis. A motif of home appears in each chapter and gives order.",
  "In the play, the protagonist faces the antagonist. A plot twist changes everything. The tragedy ends with a death. Symbolism of light and dark runs through it. The critic praises the imagery and the satire in some scenes.",
  "A stanza is a group of lines. A good poem has rhyme or rhythm, imagery and sometimes alliteration. A writer may use personification and symbolism. An anthology brings many poems together in one book.",
];

CLOZE.narrative2 = [
  "An omniscient narrator knows everything. An unreliable narrator may lie. The point of view shapes the story. Stream of consciousness shows thoughts as they flow. Starting in medias res begins in the middle of action.",
  "A red herring misleads readers. A subplot is a second story. Exposition gives background. A prologue comes before and an epilogue after the main story. Irony of fate is a cruel twist. An allegory has hidden meaning.",
  "A fable is a short story with a moral. A parable teaches a lesson. An epic is a long brave poem. A ballad tells a story in song. An elegy cries for the dead. A couplet is two lines that rhyme.",
  "Meter is the rhythm of a poem. A vignette is a short scene. The story begins with a prologue and ends with an epilogue. The unreliable narrator tells the plot in medias res. A subplot adds more meaning.",
  "Ana writes a fable with a clear moral. Her brother writes an elegy for their grandfather. They share their works in class. The teacher says that the ballad and the couplet are in good meter.",
  "Words of story: omniscient, unreliable narrator, point of view, stream of consciousness, in medias res, red herring, subplot, exposition, epilogue, prologue, irony of fate, allegory, fable, parable, epic, ballad, elegy, couplet, meter, vignette.",
  "The novel has an omniscient narrator and a clear point of view. It begins in medias res, with exposition later. A subplot about love follows the main story. The epilogue closes the story, and the irony of fate is strong.",
  "A parable teaches by a story. A fable uses animals. An allegory uses symbols for hidden ideas. An epic tells the actions of a hero. A ballad is a song with a story. An elegy is a sad poem. A vignette is a brief scene.",
  "Tom reads a poem in couplets and notes its meter. The elegy is sad. The epic has heroes. The ballad is a folk song. In the vignette, a woman waits at a station. The stream of consciousness style makes it feel real.",
  "The unreliable narrator is a trick. A red herring hides the truth. A prologue gives hints. The story is told in medias res. The exposition appears late, and the epilogue explains the final twist. The author plays with readers.",
];

CLOZE.reasoning = [
  "From the data we can infer a trend. A good expert will discern patterns and speculate carefully. She will deliberate before she decides. She wants to reconcile two views and rectify the errors. She does not allege without proof.",
  "To elucidate a problem is to make it clear. To mitigate a risk is to reduce it. To exacerbate a problem is to make it worse. To undermine is to make weak, and to underpin is to support. To bolster is to make strong.",
  "Bad planning can hinder progress and impede growth. A good policy may alleviate poverty and ameliorate conditions. A clever manager can circumvent rules. A government may curtail spending. A teacher can foster talent.",
  "Ana tries to glean information from several sources. She wants to elucidate the cause of the problem. She infers that costs hamper growth. She deliberates, then speculates about a solution that can mitigate losses.",
  "The report seeks to reconcile two opposing views. The author alleges that the policy will exacerbate inequality. Another expert says it will alleviate it. Both try to underpin their claims with evidence and to bolster their case.",
  "Tom discerns a problem and wants to rectify it. He deliberates before acting. He tries to circumvent the delay, but he does not undermine the rules. His plan seeks to foster teamwork and curtail waste.",
  "Words of reasoning: infer, discern, speculate, deliberate, reconcile, rectify, allege, elucidate, mitigate, exacerbate, undermine, underpin, bolster, hinder, impede, alleviate, ameliorate, circumvent, curtail, foster, hamper, glean. Choose five and write a sentence.",
  "A storm can hamper traffic and impede rescue. Heavy rain exacerbates floods. Aid workers try to alleviate suffering, and the government seeks to mitigate damage and ameliorate conditions. They also curtail unnecessary costs.",
  "The scientist speculates but does not allege anything without proof. He infers a cause from the data and elucidates it in a paper. Peers deliberate and try to reconcile his result with older work. Any error is rectified.",
  "Sofia wants to foster trust at work. She avoids anything that might undermine it. Open talks underpin good links. A fair rule bolsters morale. Delays hinder the project, but she finds a way to circumvent them.",
];

CLOZE.reasoning2 = [
  "To attribute a result to a cause is to say it came from it. To construe is to interpret. To contend is to argue. To debunk is to show false. To disprove is to prove wrong. To distil is to extract the main point.",
  "A symbol can embody an idea. A cause can engender a result. To expound is to explain in detail. To galvanise is to move to action. To gauge is to measure. To intimate is to hint. To posit is to suggest as a fact.",
  "A good result can vindicate a plan. A rule may warrant an action. To adduce is to give as proof. To allude to is to mention without saying it clearly. To cogitate is to think. To conjecture is to guess. To adjudicate is to judge. To rationalise is to explain logically. To extol is to praise.",
  "The scientist posits a theory and adduces evidence. She expounds the idea and seeks to disprove the opposing view. A critic contends that the data are weak and tries to debunk the claims. The results vindicate her.",
  "Ana attributes her success to hard work. Her boss construes it differently: luck. She gauges the situation, cogitates and decides to adduce proof. In the end, her results vindicate her view.",
  "A leader galvanises a team with a clear aim. His words embody the spirit of the group. He intimates a change and alludes to the future. His speech engenders hope and he extols the effort of everyone.",
  "Words of reasoning: attribute, construe, contend, debunk, disprove, distil, embody, engender, expound, galvanise, gauge, intimate, posit, vindicate, warrant, adduce, allude to, cogitate, conjecture, adjudicate, rationalise, extol. Use five in a short text.",
  "The judge must adjudicate the case. He gauges the evidence, construes the law and decides whether the facts warrant a conviction. The lawyer posits an alibi and adduces a witness. The verdict vindicates the accused.",
  "Tom conjectures that the delay was caused by weather. His friend contends it was due to a mistake. Tom cogitates and rationalises his view. Later facts debunk the weather idea, and his friend is vindicated.",
  "A good thinker distils complex ideas, expounds them and doesn't just conjecture. He attributes results to real causes and tries to disprove his own claim. This approach embodies honesty and warrants trust.",
];

CLOZE.hedging = [
  "The plan is arguably the best one. It is ostensibly cheap, but supposedly costs more. Undeniably, it has risks. Inevitably, some people will complain. It is predominantly good, notably in its goals, but conversely weak in detail.",
  "Insofar as the data are reliable, the result is clear. Inasmuch as it matters, I agree. To a large extent, the team worked well. By and large, they were happy. For the most part, the plan was fine.",
  "Broadly speaking, the economy is stable. To put it mildly, the situation was difficult. Needless to say, we are worried. All things considered, the decision was fair. At any rate, we must go on.",
  "In retrospect, the project was a mistake. It was, as it were, a lesson. So to speak, we learned the hard way. The result was purportedly good, but it was not what we hoped.",
  "Ana is arguably the best player. She is notably quick and predominantly accurate. Supposedly she never gets tired. Undeniably she is a talent. To a large extent, the team depends on her.",
  "The report is ostensibly neutral, but it purportedly hides facts. Insofar as the numbers are true, we are in trouble. Inevitably, the board must act, and, needless to say, change will not be easy.",
  "Words for careful speech: arguably, ostensibly, purportedly, supposedly, undeniably, inevitably, predominantly, notably, conversely, inasmuch as, insofar as, to a large extent, by and large, for the most part, broadly speaking, to put it mildly, needless to say, all things considered, at any rate, as it were, so to speak, in retrospect.",
  "Tom says: “By and large, the plan worked. To put it mildly, there were problems, notably delays. Needless to say, we learned much. In retrospect, we should have asked for help, but all things considered, we did well.”",
  "Broadly speaking, young people use phones more than older people; conversely, the old read more newspapers. For the most part, this holds true. Undeniably, habits change, and inevitably technology will shape them.",
  "A speaker who wants to be careful says arguably, supposedly, purportedly, ostensibly or so to speak. These words show doubt. For the most part, they protect against error. At any rate, they are common in formal speech.",
];

CLOZE.hedging2 = [
  "It would seem that the plan works. To some degree, people are satisfied. In all likelihood, the plan will continue. More or less, it costs a thousand euros, give or take a few. For all intents and purposes, it is finished.",
  "In a nutshell, the plan is good. At the end of the day, what matters is the result. On balance, the project succeeded. To a certain extent, the team is proud. As far as I can tell, no one complained.",
  "To the best of my knowledge, the report is accurate. It goes without saying that safety is first. Suffice it to say that we are pleased. In the long run, the choice will pay off. In the main, the results are positive.",
  "Apparently, the film is good, and seemingly everyone likes it. Conceivably, it could win a prize. Tentatively, I would say yes. Strictly speaking, I haven't seen it, but I have read many reviews.",
  "Ana says: “It would seem that the shop is closed. In all likelihood, it opens tomorrow. More or less, I know the times, give or take an hour. As far as I can tell, they close at six.”",
  "Words for careful speech: it would seem, to some degree, in all likelihood, more or less, give or take, for all intents and purposes, in a nutshell, at the end of the day, on balance, to a certain extent, as far as I can tell, to the best of my knowledge, it goes without saying, suffice it to say, in the long run, in the main, apparently, seemingly, conceivably, tentatively, strictly speaking.",
  "In a nutshell, the new rule is fair. On balance, it helps more people than it hurts. To a certain extent, some lose, but in the long run, most gain. At the end of the day, it is a good law, apparently.",
  "Tom speaks carefully: “Strictly speaking, it is not allowed. Conceivably, we could ask for an special case. Tentatively, I think they would agree. To the best of my knowledge, they have done it before.”",
  "For all intents and purposes, the work is done. It would seem that no one needs more time. More or less, we met the target, give or take a day. It goes without saying that we are grateful. Suffice it to say, we won.",
  "The weather forecast says it will rain: apparently, a storm is coming. In all likelihood, the match will be cancelled. As far as I can tell, there is no plan B. On balance, it seems wise to stay at home. At the end of the day, safety matters.",
];
