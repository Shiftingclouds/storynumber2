NB.scene("night8b", String.raw`
*comment Night Eight, part two: the last night before, and Nadim's smoke dream.
*mood eve
*temp laz_self true
*temp can_laz false
*temp can_dar false
*temp can_both false
*temp can_rose false
*if lazare_rehushed and (not(lazare_restored))
  *set laz_self false
*if laz_self and (des_lazare >= 45) and (rel_lazare >= 40)
  *set can_laz true
*if (des_dario >= 45) and (rel_dario >= 40)
  *set can_dar true
*if can_laz and can_dar and reconciled and (throuple_ready or (n6_lane = "three"))
  *set can_both true
*if invited_rose and (des_rose >= 45)
  *set can_rose true
*page_break
It's the last night before.

You stand on Rue du Centre in the snow outside the laundromat with the dryers still going round behind the glass, and your phone in your hand, and the whole city dark and glittering around you, and you think about who you want to have spent it with.

*choice
  *selectable_if (can_laz) #@lazare Lazare.
    *set last_night "lazare"
    *node n8_last lazare
    *goto ln_lazare
  *selectable_if (can_dar) #@dario Dario.
    *set last_night "dario"
    *node n8_last dario
    *goto ln_dario
  *selectable_if (can_both) #Both of them. Together. The way it was in the lane.
    *set last_night "both"
    *node n8_last both
    *goto ln_both
  *selectable_if (can_rose) #@rose Rose. You invited him in. Invite him all the way.
    *set last_night "rose"
    *node n8_last rose
    *goto ln_rose
  #Your friends. Chez Normande. Fleurette's jukebox. One last ordinary night.
    *set last_night "friends"
    *node n8_last friends
    *goto ln_friends
  #@lucille Mémé. Sit with her in the dark.
    *set last_night "lucille"
    *node n8_last lucille
    *goto ln_lucille
  #Nobody. The van. The river. Just you.
    *set last_night "alone"
    *node n8_last alone
    *goto ln_alone

*comment ---------------------------------------------------------------- LAZARE
*label ln_lazare
*page_break
*portrait lazare smile
*if lazare_left_carillon or (path = "wolves")
  He's waiting for you by the van. He didn't ask. He just knew.
*else
  He comes to your door at two in the morning, out of breath, with snow in his curls. He came over the leads, he says, and down the sacristy stair, and Agathe's sitting on his bed in the tower pretending to be him in case anybody checks. "She said I owed her," he says. "She said to tell you she'll collect."

You drive to Verdun in silence, with his hand on your knee the whole way, and he doesn't take it off, even at the lights.

Your apartment is dark and warm.
*if keyman_safe
  The radiator doesn't bang any more. Your father fixed it this afternoon. The quiet's so strange you both stand in the hall listening to it.
*else
  The radiator's banging. It's been banging since 2021.
Lazare stands in your little kitchen with his coat still on and looks at everything: the Polaroid on the fridge, your mother's lobster apron on its hook, the dishes in the sink, the calendar from the hardware store on Wellington. As if he's memorising it.

"I've never been in anyone's home," he says. "Not since I was ten. Not a real one. Barracks and cells and Dario's church." He touches the apron. "This is what it looks like. A home."

*choice speak
  #"It's small, and the fridge makes a noise, and it's yours for as long as you want it."
    *set rel_lazare +10
    *set des_lazare +5
    *set guarded %-10
    He turns round and looks at you. He doesn't say anything. His eyes are very bright.

    "You can't say things like that to me," he says finally, hoarsely. "Not tonight. I'll believe you."

    "Good."
  #"It's a mess. Sorry. I wasn't expecting a hunter of the Carillon."
    *set rel_lazare +5
    *set wry %+5
    "Former," he says. And then, almost smiling: "And you're right. It's a disgrace. There's a sock on the stove."

    There is. You don't know how.
  #Don't answer. Take his coat off his shoulders. Hang it on the hook beside the apron.
    *set des_lazare +10
    You take his coat off his shoulders, slowly, and hang it on the hook beside your mother's apron. He stands very still and lets you. When you turn back round he's looking at you like a man at the edge of a very high place.

*page_break
He doesn't kiss you. Not yet. He stands in your kitchen in his borrowed sweater with his hands at his sides, and says, very carefully, the way he says everything that matters:

"Tomorrow, I don't know what happens. Neither do you." He takes a breath. "I'd like to go to bed with you. Tonight. Not because it's the last night. Because it's you." A pause. "You can say no. You can always say no. I'll ask again every time, and you can say no every time."

*choice
  #"Yes."
    *goto laz_yes
  #"Ask me properly."
    *set des_lazare +5
    *set reckless %+5
    His mouth twitches. And then, very seriously, he goes down on one knee on your kitchen lino, beside the sock on the stove, in his borrowed sweater, and takes your hand.

    "{name} Lacroix," he says. "Will you go to bed with me?"

    You're laughing so hard you can barely say it. You say it. [i]Yes.[/i]
    *goto laz_yes
  #"Not tonight. But stay. Sleep here. I want to wake up and you still be here."
    *set rel_lazare +15
    *set guarded %-5
    *goto laz_sleep

*label laz_yes
*set slept_lazare true
*set des_lazare +10
*set rel_lazare +10
*page_break
*if steam
  He kisses you then, finally, in your kitchen, and it's nothing like the roof or the cell. It's slow. It's so slow. He kisses you like he's reading something he's been waiting his whole life to read, one word at a time, his hands on your face, then your throat, then your shoulders, learning them.

  "Here?" he says, against your mouth, with his fingers at the hem of your shirt.

  "Yes."

  He takes it off you. He takes his own off, over his head, and you see him properly for the first time in light: long and lean and pale, a scatter of dark hair down the centre of his chest, the scars of twenty-one years of hunting, a burn on one hip, a white line across his ribs from, he tells you later, a vampire in Outremont in 2017. And over his heart, faint, a small round mark, the size of a teacup's base, where a brass bell hung against his skin for twenty-one years.

  You put your mouth on it. He makes a sound like something breaking.

  *page_break
  In your bed, under the window with the snow going past it, he asks. Every time. [i]Here? This? Like this?[/i] And you say yes, and yes, and the asking stops being careful and starts being something else, something that makes your whole body go hot, his voice low and rough against your ear, asking you what you want and making you say it, out loud, in words, and then doing it exactly, precisely, devastatingly, the way he does everything.

  He's patient in a way that feels like a kind of violence. He takes you apart for what feels like hours with his mouth and his long hands, till you're shaking and swearing and begging, and then, only then, when you've said [i]please[/i] enough times that it's stopped being a word, he moves over you and into you, slow, with his forehead against yours and his eyes open.

  "Say my name," he says. It isn't a request. It's a man drowning, reaching for the one rope.

  "Enzo."

  He comes apart. You both do. His hand's laced in yours on the pillow, and his mouth's on your throat, and he's saying something in Italian over and over that you'll ask him about later, and he'll go red and refuse to tell you, and then one night in April tell you anyway.

  *page_break
  Afterward, he lies with his head on your chest, and you can feel his heart slowing against your ribs.

  "Twenty-one years," he says, into your skin, "I thought I'd go to hell for this."

  "And?"

  He lifts his head and looks at you in the snow-light from the window, his curls a disaster, his mouth swollen. "And I've decided," says Lorenzo Ferrante, very seriously, "that if hell's anything like your apartment, I'll manage."
*else
  He kisses you then, finally, in your kitchen, slowly, like a man reading something he's waited his whole life to read.

  In your bed, under the window with the snow going past, he asks. Every time. [i]Here? This? Like this?[/i] And you say yes, and yes, until the asking stops being careful and becomes something else entirely. He says his own name when you ask him to, and then he asks you to say it, and you do.

  Afterward he lies with his head on your chest. "Twenty-one years I thought I'd go to hell for this," he says into your skin. And then, lifting his head, very seriously: "If hell's anything like your apartment, I'll manage."
*remember lazare The last night before Nuit blanche, in your bed in Verdun. He asked every time. You said his name.
*goto dream

*label laz_sleep
*page_break
He looks at you. And then something in his face goes soft and open, like a door somebody's finally stopped holding shut.

"Yes," he says. "Yes. I'd like that more than anything."

You lend him a T-shirt. It says [i]SERRURERIE LACROIX 24/7[/i] on the back, and it's too short in the arms. He gets into your bed on the side by the wall, and lies on his back looking at the ceiling, very stiff, like a man in a coffin, and you get in beside him and turn off the light.

After a minute, in the dark, his hand finds yours.

After ten, he's asleep. You lie awake and listen to him breathe, a hunter of the Carillon asleep in your bed in Verdun with his hand in yours, and think it might be the most intimate thing that's ever happened to you.
*set rel_lazare +5
*remember lazare The last night before Nuit blanche, he slept in your bed in a Serrurerie Lacroix T-shirt, holding your hand.
*goto dream

*comment ---------------------------------------------------------------- DARIO
*label ln_dario
*page_break
*portrait dario smile
Dario's in the tow truck at the kerb with the engine running and Céline on the radio, as if he's been waiting there since the dawn of time.

"Get in," he says. "I'm taking you somewhere."

He drives you up the mountain. Not the Westmount side, not the Club's side: the east side, up Camillien-Houde, to the lookout, where the whole of the east end is spread out below you in the dark, all the way to the Olympic Stadium and the river and the refinery lights at Pointe-aux-Trembles. He parks the truck with its nose to the view and leaves the engine running for the heat, and turns the radio down, and doesn't say anything for a while.

"I used to come up here when I first turned," he says. "Nineteen. I'd drive my nonna's Buick up here at three in the morning and sit and look at the city and think, somewhere down there there's a kid I used to know, and nobody knows he's missing." He turns the toque in his hands. "Now look. He's at your place, or my church, and tomorrow the whole city wakes up." He looks at you. "Twelve years of sitting up here. And you fixed it in a week."

*choice speak
  #"I didn't fix it. You did. You never stopped saying his name."
    *set rel_dario +10
    *set des_dario +5
    He looks at you in the green light from the dashboard.

    "You're not allowed to be nice to me tonight," he says hoarsely. "I'll cry in the truck. And then you'll have seen me cry in the truck."
  #"Is that why you brought me up here? To thank me?"
    *set des_dario +10
    *set reckless %+5
    "No," says Dario. And then, with his ears going red in the dark: "That's not why I brought you up here."
  #"Tell me about the Buick."
    *set rel_dario +10
    *set wry %+5
    He laughs, surprised. "A 1987 LeSabre," he says. "Burgundy. Velour seats. She had a Saint Christopher and a Padre Pio and a picture of Céline on the dash, all in a row, like the Holy Trinity." He grins. "I learned to drive in it. I lost my virginity in it. Not up here. In the parking lot of the Dollarama on Jean-Talon." He looks at you. "Don't tell Enzo. He thinks it was romantic."

*page_break
*if slept_dario
  "Last time," he says, "on the roof of Saint-Jude, I didn't really ask. I just said come downstairs and hoped." He turns in his seat to face you, big and serious in the green light. "So I'm asking now. Properly. Tomorrow I don't know what happens. I want tonight with you. In my bed with the ugly afghan. Or here. Or anywhere."
*else
  "I'm not good at this," he says. "Asking. I'm good at the other thing. Shouting across a street. Kissing people in bell towers." He turns in his seat to face you, big and serious in the green light. "So I'm asking. Properly. Tomorrow I don't know what happens. I want tonight with you. If you want it."

*choice
  #"Yes."
    *goto dar_yes
  #Don't answer. Climb across the seat into his lap.
    *set des_dario +10
    *set reckless %+10
    *goto dar_yes
  #"Not tonight. But let's stay up here till the sun comes up."
    *set rel_dario +15
    *goto dar_sleep

*label dar_yes
*set slept_dario true
*set des_dario +10
*set rel_dario +10
*page_break
*if steam
  He laughs, low, delighted, and then he isn't laughing. His hands are on your hips, pulling you across the bench seat into his lap, and your back's against the steering wheel and the horn goes off, one long honk into the silence of the mountain, and you both crack up, forehead to forehead, and then he's kissing you, and nothing's funny any more.

  He kisses like he drives: like he's angry at the road, like there's somewhere he needs to be and it's inside you. His beard scrapes your jaw. His hands go up under your shirt, hot as a stove, and his mouth goes to your throat and his teeth are there, just the edge, just enough, and he growls, actually growls, low in his chest, and you feel it in your whole body. The windows fog. Céline is still going, very quietly, on the radio.

  "Not in the truck," he says, against your neck. "Not our first... not this time. I want you in a bed. I want to see you." He's breathing hard. "Saint-Jude's ten minutes."

  "Six," you say, "the way you drive."

  *page_break
  It's four. He runs every light on Jean-Talon.

  In his room above the sacristy, under his nonna's crucifix with its tiny red toque, on the mattress on the floor under the orange and brown afghan, he undresses you like he's unwrapping something he's been saving. Slowly. Kissing every inch he uncovers. Your collarbone. Your ribs. The inside of your wrist. The soft skin under your navel, where he stops, and looks up at you with his gold eyes, and says "Yeah?" and you say yeah, and he doesn't stop again for a long time.

  He's big and heavy and fever-hot, and when he finally pushes into you, slow, with his whole weight held off you on his forearms and his face right over yours, he's shaking with holding back, and his eyes are gold all the way through. "Tell me," he says. "Tell me if it's..." and you pull him down on top of you by the back of his neck and tell him exactly what it is, and he groans your name into your mouth and stops holding back.

  The radiator bangs. The mattress walks across the floorboards. At one point the afghan goes out the door. At one point he's laughing into your shoulder, because it's so good it's ridiculous, and at another he isn't laughing at all, he's holding your face in his big split-knuckled hands and looking at you like you're something he's been looking for his whole life, and saying, in three languages, [i]don't go anywhere, don't go anywhere, don't go[/i].

  *page_break
  Afterward, he lies on his back with you sprawled half across him, and his hand moves up and down your spine, and the sky in the window is going grey.

  "Pour que tu m'aimes encore," he says, very quietly, to the ceiling. Céline. The song he sang on the altar on Sunday, with his eyes shut and his whole chest.

  "What?"

  "Nothing." His hand stops on your back. "It's a song. It means... it's about doing everything. Anything. So somebody'll keep loving you." He's quiet for a while. "After tomorrow. If there's an after. Don't go back to the van and the three a.m. calls and nobody. Okay? Stay somewhere I can find you."
*else
  He laughs, low, and pulls you across the bench seat into his lap, and the horn goes off, one long honk into the silence of the mountain, and you both crack up, and then he's kissing you and nothing's funny any more.

  In his room above the sacristy, under his nonna's crucifix with its tiny red toque, he undresses you like something he's been saving. It's slow, and then it isn't, and it's loud, and at one point the afghan goes out the door. Afterward he lies with you sprawled across him and the sky going grey, and says, to the ceiling, "Stay somewhere I can find you. After. Okay?"
*remember dario The last night before Nuit blanche, above the sacristy. He asked you to stay somewhere he could find you.
*goto dream

*label dar_sleep
*page_break
He nods, and doesn't look disappointed, or if he is, he hides it under a grin.

"Till the sun comes up," he says. "I can do that." He turns the radio back up. Céline. Of course. "I can do that easy."

You stay up there all night in the tow truck with the engine running for the heat and the city spread out below, talking. About his nonna, and your mother, and the Buick and the van, and the worst jobs you've ever had and the best meals you've ever eaten. At four he falls asleep sitting up with his head against the window. At five you do, with your head on his shoulder. When you wake up the sun's coming up over the Olympic Stadium, red, and his arm's round you, and he's awake, and he hasn't moved in an hour so as not to wake you.
*set rel_dario +5
*remember dario The last night before Nuit blanche, you watched the sun come up from the mountain in his tow truck.
*goto dream

*comment ---------------------------------------------------------------- BOTH
*label ln_both
*page_break
*set throuple_ready true
They're both waiting by the van.

Lazare's leaning on the passenger door with his arms folded. Dario's sitting on the bumper eating the last of Aimé's date squares. They look up at the same moment, and then at each other, and then back at you, and something passes across both their faces, the same thing, at the same time.

"We talked," says Lazare.

"We [i]argued[/i]," says Dario, with his mouth full. "For forty minutes. In the alley. Behind the dryers. Gisèle threw a shoe at us."

"We talked," says Lazare firmly. "And we decided that we'd both like to spend tonight with you." He looks at Dario. "Together. If you want that." A pause. "If you don't, that's all right. Either of us, or neither of us, or both. Whatever you say."

"He made me practise that," says Dario. "The last part. Six times."

*choice speak
  #"Both. I want both of you. I've wanted it since the coat room."
    *set des_lazare +10
    *set des_dario +10
    *set guarded %-10
    Dario lets out a breath like a man who's been underwater. Lazare doesn't let out anything; he just closes his eyes for a second, and opens them, and they're very bright.

    "Since the coat room," Dario says. "[i]Madonna.[/i] Me too."

    "Since the fort," says Lazare, quietly. And then, when you both stare at him: "Friday. On the ice. When you asked me my name." A pause. "I'm very slow. I've been told."
  #"What happens after? Tomorrow. If there is an after. What are we?"
    *set rel_lazare +10
    *set rel_dario +10
    *set wits +2
    They look at each other.

    "I don't know," says Lazare, honestly. "Nobody's ever done this. Not in the Carillon's rule, not in the Church's, not in anybody's I know."

    "So we make it up," says Dario. "We make it up as we go. Like a new lock." He looks at you. "You're good at that, right? Making a lock nobody's made before?"
  #"Whose place? Mine's got one bed and it's a double."
    *set wry %+10
    *set rel_dario +5
    "Mine's got a mattress on the floor," says Dario.

    "Mine's got a hunter sitting on it pretending to be me," says Lazare.

    "The double," says Dario, decisively. "We'll manage. Enzo's thin."

*page_break
*set slept_both true
*set slept_lazare true
*set slept_dario true
*set des_lazare +10
*set des_dario +10
*set rel_lazare +10
*set rel_dario +10
*if steam
  Your double bed in Verdun is not built for three grown men, one of whom is six foot two and built like a tow truck.

  You find this out at a quarter past two, when you're all three trying to take your boots off at once in your tiny bedroom and Dario falls over the laundry basket and takes Lazare down with him, and you're laughing so hard you have to sit on the floor. And then Lazare, on his back on your rug under two hundred pounds of wolf, starts laughing too, the real laugh, surprised out of him, and Dario looks down at him laughing, and stops laughing himself, and kisses him.

  And you watch. You kneel on the floor of your own bedroom and watch the two of them kiss, the way they must have kissed on a thousand rooftops in the dark for seven years, except it isn't like that, you can see that it isn't: it's slow, and open, and nobody's hiding it. Lazare's hand in Dario's hair. Dario's hand flat on Lazare's chest, over the mark where the bell used to hang. And then they both, at the same moment, as if they'd planned it, which knowing them they did, reach out a hand for you.

  *page_break
  It's clumsy. It's clumsy and it's funny and it's the hottest thing that's ever happened to you.

  Dario's mouth on your throat and Lazare's on your mouth. Six hands and nobody sure whose is whose. Lazare, asking, of course, even now, [i]this? here? him and me?[/i], and you saying yes to all of it, and Dario growling low against your shoulder every time you do. The heat of Dario at your back like a woodstove, and Lazare in front of you long and lean and cool, and you between them, held, the way you haven't been held since you can remember.

  They know each other's bodies. That's the thing. Seven years of it. They know exactly where to touch each other, and they teach you, without saying anything, just by showing: here, for Dario, the back of his neck, and his breath goes; here, for Lazare, the inside of his wrist, and he shuts his eyes. And then they turn all of that on you, together, like two men who've been fighting for seven years and just realised they're on the same side, and you stop being able to tell where you end.

  Dario takes you first, slow, with you on your back and Lazare's mouth on yours swallowing every sound you make, Lazare's hand laced in yours, and then later it's Lazare, and Dario holding you from behind with his mouth on your shoulder and his hand on your chest, over your heart, as if he's keeping count. At some point you're watching them, the two of them, and Lazare says [i]Dario[/i] in a voice you've never heard, and Dario says [i]Enzo[/i] like a prayer, and you have your hands on both of them, and it's the most beautiful thing you've ever seen.

  *page_break
  Afterward, you lie tangled in a bed far too small, with Dario's arm across both of you like a bar across a door, and Lazare's head on your chest, and the snow going past the window.

  "The bed," says Lazare, eventually, "is broken."

  It is. The back left leg went at some point. None of you noticed. The whole thing's tilted about ten degrees toward the window.

  "I'll fix it," you say.

  "We'll buy a bigger one," says Dario, sleepily, into your hair. And then, as if he's just heard himself: "I mean. If. After. If you want. A bigger one."

  Nobody says anything for a long time. Lazare's hand finds Dario's, across your chest, and holds on.

  "A bigger one," Lazare agrees, very quietly. And that's all anyone says about it, for now.
*else
  Your double bed in Verdun is not built for three grown men. You find that out at a quarter past two, when Dario falls over the laundry basket taking his boots off and takes Lazare down with him, and you're all laughing so hard you have to sit on the floor. And then Dario kisses Lazare, on your rug, slow and open, nobody hiding it, and then they both reach out a hand for you.

  It's clumsy and funny and it's the best night of your life. They know each other's bodies, seven years of it, and they teach you, without saying anything. Afterward you lie tangled in a bed that's broken, the back left leg gone at some point, tilted toward the window, with Dario's arm across both of you like a bar across a door.

  "We'll buy a bigger one," says Dario, sleepily. "After. If you want."

  "A bigger one," Lazare agrees, very quietly.
*remember lazare The last night before Nuit blanche, the three of you broke your bed in Verdun. He said: a bigger one.
*remember dario The last night before Nuit blanche, the three of you broke your bed in Verdun. He said it first: a bigger one.
*goto dream

*comment ---------------------------------------------------------------- ROSE
*label ln_rose
*page_break
*portrait rose smirk
You don't call him. You don't have to. You say it, out loud, on the sidewalk on Rue du Centre, to the snow: "Rose."

And he's there. Across the street, under a streetlight, in his black coat, leaning on his cane, as if he's been standing there waiting since 1740.

"You called," he says.

"I did."

He crosses the street to you. The snow doesn't land on him; it turns to steam an inch above his shoulders. He stops a foot away and looks at you with his red-coal eyes, and doesn't touch you.

"I'm going to need you to say it," he says. "All of it. I'm a very literal creature. It's a professional deformation."

*choice speak
  #"Come home with me, Rose. Tonight. I want you."
    *set des_rose +10
    *set rel_rose +5
    *set guarded %-10
    Rose goes still. Very still, in the way a flame goes still when a door's shut.

    "Say that again," he says softly.

    "I want you."

    He closes his eyes. "Two hundred and eighty-six years," he says. "And nobody's ever said it to me with their eyes open."
  #"I want to see your hands. I want you to take the gloves off."
    *set des_rose +15
    *set reckless %+10
    Rose looks at you for a long moment. Then he laughs, low and astonished. "Of everything you could have asked for," he says. "Of everything in the world." He looks down at his gloved hands on the silver head of the cane. "Nobody's asked to see them since she did. In 1740. And then she said no." He looks up. "Come home with me, and ask me again."
  #"Is this a bargain? I need to know. Is there a price?"
    *set rel_rose +10
    *set wits +2
    "No," says Rose. And then, because he can't lie: "Not from me. Not tonight. There's no price, and there's no paper, and nothing's owed." A pause. "That's the most terrifying thing I've said in a century. I hope you appreciate it."

*page_break
*set slept_rose true
*set des_rose +10
*set rel_rose +10
*if steam
  He comes up your stairs in Verdun behind you, and stops at your door, and waits.

  "You have to say it," he says. "Here. At this door. I'm sorry. It's the rule."

  "Come in, Rose."

  He comes in. He stands in your tiny kitchen, the most beautiful thing that has ever been in it, in his black coat, among the dishes and the lobster apron and the Polaroid on the fridge, and looks around him with an expression you've never seen on him: shy. The devil, shy.

  Then he holds out his hands to you, palms up, still gloved. "Take them off," he says. "Please. I can't. Not for this. It has to be you."

  *page_break
  You take hold of the left glove at the fingertips, and draw it off, slowly, finger by finger.

  His hand is beautiful. Long, pale, perfect. And under the skin, very faintly, like veins, there are lines of light: red, and gold, glowing, moving, like the coals at the back of a grate when you blow on them. It's hot. When you take it in yours it's hot as a cup of tea, and he makes a sound, a small shocked sound, as if nobody's touched his bare hand in a very long time. Because nobody has.

  You take off the right one. You kiss the palm. The light under his skin flares, and his head goes back, and he says your name in a voice that doesn't sound like anything you've heard from him before: not amused, not courteous, not in control of anything at all.

  He's very, very good at this. Of course he is. He's had three hundred years. But he doesn't use any of it, not at first. At first he just touches you, with his bare burning hands, your face, your throat, your chest under your shirt, slowly, wondering, like a man touching snow for the first time. And then you pull him down onto your bed by his beautiful lapels, and he stops wondering.

  *page_break
  He undresses you like a courtier and takes you like a storm. Everywhere his hands go, they leave heat, a trail of it on your skin like a sunburn made of pleasure, and his mouth follows, and it's hotter. He talks. God, he talks: low, in your ear, in French from 1740 and English from 1940 and things in no language at all, telling you exactly what he's going to do and then doing it, and asking, every time, [i]yes?[/i], and waiting for it, and every [i]yes[/i] you give him makes the light under his skin burn brighter until the whole room is lit red and gold like the inside of a forge.

  When he's inside you, he's still asking. [i]Yes? Still yes?[/i] And you say yes so many times it stops being a word and starts being something you're both breathing.

  And at the end, when you come apart underneath him with his name on your mouth, he says [i]thank you[/i], broken, into your neck. Not to you. You don't think it's to you. To someone, somewhere, a very long time ago, who said no.

  *page_break
  Afterward, he lies beside you on your narrow bed with his bare hands on your chest, watching the light under his skin fade slowly back down to embers.

  "There's a tradition," he says, eventually. "Among my kind. That a devil can't love. That it's the one thing we gave up, when we fell." He turns his hand over on your chest and looks at the palm. "I've always thought it was true. It's very convenient, if it's true."

  "And?"

  Rose looks at you in the snow-light from the window, with his red-coal eyes.

  "I can't lie," he says. "So I'm not going to say anything at all."
*else
  At your door in Verdun, he stops. "You have to say it," he says. "Here. It's the rule."

  "Come in, Rose."

  He comes in, and stands in your kitchen, shy, the devil, shy. Then he holds out his gloved hands. "Take them off," he says. "It has to be you."

  You do. His hands are beautiful, and under the skin there are lines of light, red and gold, like coals when you blow on them. He makes a small shocked sound when you touch them, as if nobody has in a very long time. Because nobody has.

  What happens after is hot, and slow, and then very much not slow, and he asks [i]yes?[/i] every time, and waits for it. Afterward he lies with his bare hands on your chest, watching the light fade to embers. "They say a devil can't love," he says. "I can't lie. So I'm not going to say anything at all."
*remember rose The last night before Nuit blanche, you took off his gloves. He said thank you, to someone a very long time ago.
*goto dream

*comment ---------------------------------------------------------------- FRIENDS
*label ln_friends
*page_break
*portrait fleurette smile
Chez Normande at one in the morning on the last Friday in February is the same as it always is, which is the whole point.

The Christmas lights over the bar that nobody's taken down since 1994. The pool table with the torn felt. The pickled eggs. Normande behind the bar, in her cardigan, polishing a glass with a face like a closed door. The lutin on the end stool, braiding the fringe of a lampshade. And the jukebox in the corner, lit up pink and green, with a drag queen sitting on top of it in a teal gown and a platinum wig, who sees you come in and throws up both arms and screams.

"[i]CHÉRI![/i] You came! On the last night! To [i]me![/i]"
*if n7_guest = "aime"
  Aimé's already there, at the bar, still in his good funeral tie from the Accord's table, drinking a Molson Ex. He goes pink when he sees you.
*else
  Aimé's already there, at the bar, still in his black suit, drinking a Molson Ex. He goes pink to the ears when he sees you, and you remember what he said at the laundromat door, and you go a bit pink too.

*page_break
It's the best night.

It's the most ordinary, stupid, beautiful night. Normande pours you a rye and ginger without asking and slides you a pickled egg and says, "On the house. If you die tomorrow I'm not paying for flowers." The lutin braids your hair without asking, again, and this time you let him, and he ties it off with a bit of red thread and gives you a thumbs up. Fleurette makes Normande put on the karaoke machine, which hasn't been used on a Friday since 2008, and sings "Je suis malade" from the top of the jukebox in a voice like a foghorn in sequins, and cries all her mascara off, and doesn't care.

And then she points at you.

*choice
  #Sing. Anything. Get up there and sing.
    *set rel_fleurette +10
    *set charm +3
    *set nerve +2
    You sing. You pick "Total Eclipse of the Heart" because it's the only thing you know all the words to, and you're terrible, and Fleurette does the [i]turn around[/i] parts from the top of the jukebox, and Aimé does the [i]bright eyes[/i] parts from the bar with his eyes shut, and Normande, behind the bar, polishing a glass, very quietly mouths every single word.
    *remember fleurette The last night before, you sang "Total Eclipse of the Heart" at Chez Normande, and she did the turn-around parts.
  #Make Aimé sing with you.
    *set rel_aime +10
    *set charm +2
    You drag Aimé off his stool by his funeral tie. He protests the whole way to the microphone. And then he sings "Islands in the Stream" with you, as Dolly, with total commitment and a surprisingly good voice, and when you get to the chorus he's looking at you, and you're looking at him, and Fleurette is fanning herself with a beer mat on top of the jukebox.
  #Shake your head. Let Fleurette have the whole night.
    *set rel_fleurette +5
    *set guarded %+5
    You shake your head and raise your rye to her, and she laughs and sings three more songs, and every one of them, you notice, she sings looking at you.

*page_break
Later, at the end of the bar, with the karaoke off and Normande counting the till, Aimé turns his glass round and round on the counter and doesn't look at you.

"I said a stupid thing," he says. "At the laundromat door."

*choice speak
  #"It wasn't stupid. I'm glad you told me."
    *set rel_aime +15
    *set guarded %-5
    He looks up at you. "Really?"

    "Really. Nobody's had a crush on me since Secondaire 3. I didn't even know I had a Spider-Man pencil case until you reminded me."

    Aimé laughs, and goes pink to the ears, and looks at his beer. "It was a very good pencil case," he says. "I used to look at it instead of Mr. Tessier."
  #"Aimé. I love you. Not like that. But I love you. You know that?"
    *set rel_aime +10
    He doesn't look away. Then he nods, slowly, and smiles, a real smile, crooked, a little sad. "Yeah," he says. "Yeah. I know. That's okay. That's actually... that's okay." He clinks his glass against yours. "Best friend's better than a crush. Crushes are for Secondaire 3."
  #Kiss him on the cheek. Don't say anything.
    *set rel_aime +10
    You lean over and kiss him on the cheek, over the stubble, next to his glasses. He goes absolutely still, and then very red, and then he laughs, and puts his hand over the place.

    "I'm never washing this," he says. "I'm a ghoul. It's allowed."

*page_break
At three, Fleurette sits down on the bar in front of you, a cold draught in teal sequins, and looks at you.

"Tomorrow," she says. "At last call."
*if fleurette_plan
  "My name. On every screen." She touches your face, or tries to; it's like a breath of cold air on your cheek. "I don't think I'll see you after, chéri. If it works. I think I'll just... go." She smiles. "So I wanted tonight. Just one more ordinary night. With the good-looking locksmith and the ghoul and Normande's terrible eggs." Her eyes are wet. "Thank you for giving it to me."
*else
  "Another year," she says, lightly. "There's always another Nuit blanche." She looks at the jukebox. "Forty-three years on that thing. What's one more?" But she doesn't quite look at you when she says it.
*set rel_fleurette +5
*remember aime The last night before, at the end of Normande's bar, he told you the crush was a stupid thing. You told him it wasn't.
*goto dream

*comment ---------------------------------------------------------------- LUCILLE
*label ln_lucille
*page_break
*portrait lucille neutral
Résidence Sainte-Marguerite at two in the morning. Ghislaine lets you in by the side door again and doesn't ask.

Mémé's asleep in her bed with the little lamp on, very small under the blanket, with her hands folded on top of it and her mouth a little open. You pull the chair over from the window and sit down beside her, and take her hand, which is light and dry as paper, and just sit.

You don't sleep. You watch the snow go past the streetlight. You listen to the television down the hall playing a game show to nobody, and the radiator ticking, and your grandmother breathing.

At a quarter to three, her hand moves in yours.

*page_break
"{name}," she says, without opening her eyes.

"I'm here, Mémé."

"I know you are." She squeezes your hand. "Aurèle sat with me the night before, too. In '67. Not here. In the kitchen on Rielle Street. He didn't say what he was going to do. He didn't have to." Her eyes open. They're clear. "He was so frightened, {name}. He was so frightened, and he did it anyway. And he was wrong." She looks at you. "Don't be frightened and wrong. Be frightened and right. It's harder. It's the only thing worth being."

*choice speak
  #"I don't know what right is, Mémé."
    *set rel_lucille +10
    *set wits +2
    "Nobody does," says Lucille Lacroix. "That's how you know you're close." She pats your hand. "Ask the one in the dark. Aurèle never asked. That was all. He never once asked."
  #"Will you come tomorrow? To the fort?"
    *set rel_lucille +10
    Mémé laughs, a small dry sound. "I'm eighty-eight, {name}. I'd freeze solid on the bridge." She squeezes your hand. "But I'll be awake at three thirty-three. I'm always awake at three thirty-three. I'll be here at this window. I'll hum it. You'll hear me."
  #Don't say anything. Just hold her hand.
    *set rel_lucille +5
    You hold her hand. She holds yours. After a while she starts to hum: six notes, down and up and one held at the end, like a question.
*if keyman_safe and keyman_known
  "Bring your father tomorrow," she says, closing her eyes again. "After. Bring him for breakfast. I'll want to see my boys at the same table."
*set rel_lucille +5
*remember lucille The last night before, you sat with her in the dark. She said: be frightened and right.
*goto dream

*comment ---------------------------------------------------------------- ALONE
*label ln_alone
*page_break
You drive the van down to the river.

To the foot of the Jacques Cartier Bridge, on the Montréal side, where there's a little park with a parking lot that nobody uses in February, and you can look across the black water at Île Sainte-Hélène: the dark trees, the old fort, the powder house somewhere in there with a steel door and six brass buttons in a row.

You leave the engine running for the heat. You drink a coffee from the Tim Hortons on Notre-Dame. The bridge goes over your head, lit green, with the night traffic going to the South Shore, and every few minutes a truck makes the whole steel structure hum.

It's where it started. A week ago. [i]LIGNE 3.[/i] A door you'd never seen, on an island you'd been to a hundred times.

*page_break
*choice
  #Take out the Polaroid. Look at it one more time.
    *set rel_keyman +5
    *set guarded %-5
    You take it out of your wallet. [b]S. + {name}. AOÛT 2009.[/b] A man kneeling in the grass with his arm round a boy. Mémé holding the camera. The door behind them, shining new.

    Tomorrow you'll be standing at that door again. Seventeen years later. On your own two feet.

    You put it on the dashboard, propped against the windshield, facing the island, where it can see.
  #Call your mother's old number. Just to hear it ring.
    *set guarded %-10
    *set nerve +2
    You still have it in your phone. You've never deleted it. You press it, and hold the phone to your ear, and it rings, somewhere, in some stranger's pocket, or some drawer, and nobody answers, and it goes to a woman's voice saying the number is not in service.

    You let it say it three times. Then you hang up. "Tomorrow, Mom," you say to the windshield. "Wish me luck, b'y."
  #Get out of the van. Walk to the edge of the ice. Look at the fort until you're not afraid of it.
    *set nerve +3
    You get out and walk down to the edge of the river where the ice starts, grey and rough, going out into the dark toward the island. It's twenty below. The wind comes down the river from the Gulf like something with teeth.

    You stand there and look at the island until you stop being afraid of it. It takes an hour. Your feet go numb. But you stop.

*page_break
At three in the morning, sitting in the van with the engine running, you realise you're not alone.

The heat from the vents has gone strange. Hotter. It smells of cedar, and hot stone. And on the passenger seat, where there's nobody, there's the faint impression of somebody sitting: a dent in the cushion, and a shimmer in the air, like heat over a road in July.
*remember nadim The last night before, alone in the van by the river, you felt him sitting beside you.
*goto dream

*comment ---------------------------------------------------------------- THE SMOKE DREAM
*label dream
*page_break
*mood white
*portrait nadim true
You dream.

You know it's a dream because you're warm, and you're never warm in February. You're on a hillside in the sun. Real sun, hot on the back of your neck. There are trees, huge ones, dark green, with branches that go out flat like hands held out palm down: cedars, you realise, a whole forest of them going up the slope, and below you, a very long way down, a blue sea with no city beside it at all.

And Nadim, sitting on a rock under the cedars, in the robe from the vault and no chains at all, with his knees drawn up, watching you.

"Creditor," he says. "Welcome to my country. Before it had its name." He looks at the sea. "This is the last place I was free. Four thousand years ago, give or take a Tuesday. It's the only place I can still get to."

You sit down on the warm rock beside him. You can feel the heat of him, like sitting next to a woodstove. You can smell cedar. There are no chains on him. In a dream there don't have to be.

*page_break
"Tomorrow," Nadim says. "Three thirty-three."

*if intent = "close"
  "You're going to close it," he says. "With me inside." He doesn't sound angry. He sounds like the Bourdon: like a doctor, sad. "I know. I heard. The dead hear everything that's said in laundromats." A small smile. "I don't blame you. Your grandfather did it. Your father tried to undo it and lost his name. You're a sensible man. Fifty-nine more years is nothing, to me. I've done forty centuries."
*elseif intent = "break"
  "You're going to break it," he says, and his voice isn't steady. "Let me go. Let the whole city wake." He looks at his hands. "Do you know what that means? After sixty-eight years? I'll walk out of that door and I won't know where to go. I don't know anyone alive. I don't know what a telephone is for."
*else
  "Gisèle Pépin," he says, "wants to make a lullaby I agree to." He shakes his head slowly. "Aurèle's little key. I didn't know he'd made one. Fifty-nine years in the dark, and there was a question hanging round a woman's neck in Verdun the whole time, waiting to be asked."

*choice speak
  #"If I turned the lock into a question, Nadim, what would you answer?"
    *goto ask_consent
  #"What do you want? Not what you owe me. What do you want?"
    *set rel_nadim +10
    *set des_nadim +5
    Nadim looks at you, and keeps looking.

    "Nobody's asked me that," he says, "since before this forest was cut down to build ships for Solomon's temple." He looks at the cedars. "I want my sister. Zeina. She was sold two years after me, in a different market, to a different man. I don't know where. I've been listening for her through the stone for sixty-eight years." His hands tighten on his knees. "And I want to be asked things. Just that. To be asked, and to be able to say no."
    *goto ask_consent
  #Don't ask him anything. Just sit in the sun with him.
    *set rel_nadim +5
    *set des_nadim +10
    You don't ask him anything. You sit on the warm rock in the sun beside him, in the cedars, above a sea with no city, and after a while he leans, very slightly, against your shoulder. He's warm all the way through, like a stone that's been in the sun all day.

    "Thank you," he says, after a long time. "For not asking. Everyone always wants something." A pause. "Ask me anyway. Before you wake up. I'd like to be asked."
    *goto ask_consent

*label ask_consent
*page_break
"If I turned the lock into a question," you say. "If I asked you to hold the Hush. Not forever. Not in the dark. On terms. Your terms. And you could say no."

Nadim doesn't answer right away. The sea goes on being blue. Somewhere up the slope, a bird you don't know the name of says something twice.
*if (rel_nadim >= 40) or (window_talk = "free") or (window_talk = "invite") or (bridge_nadim and (rel_nadim >= 25))
  *set nadim_consent true
  "Yes," he says.

  He says it very simply. Then he says it again, as if he's tasting it. "Yes." He turns to you, and his amber eyes are very bright. "Not as I am. Not in chains in the dark under an island, while a man with a tuning fork's grandson visits on Thursdays. But on terms." He counts on his fingers, the way Gisèle does. "One night a year, out. Nuit blanche. To see them. Every one of them. And my sister, if you can find her. And my name on a door, in the open, where anyone can come and read it." He looks at you. "And if I ever say stop, it stops."

  "That's four."

  "I've had sixty-eight years to think about it." His mouth twitches. "Yes, Lacroix. On those terms, I'd sing your city to sleep. I'd even enjoy it. It's a very beautiful city. I've heard it through the stone for a long time."
  *remember nadim In the smoke dream, among the cedars, you asked him. He said yes, on four terms.
*else
  "I don't know," he says.

  He says it very honestly. "I don't know you well enough, creditor. I don't know if you're asking because you want to, or because an old witch told you it's the only way that doesn't rot." He looks at the sea. "Ask me again at the lock. Tomorrow. With your hand on it. I'll know then." A pause. "I'll know what you are when your hand's on the lock. Everyone does."
  *remember nadim In the smoke dream, you asked him. He said: ask me again at the lock.

*page_break
The sun's getting lower. The cedars' shadows are getting long. You can feel it: the dream wearing thin, like a sheet that's been washed too many times.

"One more thing," says Nadim. "Before you go." He holds out his hand. There's smoke in it: a curl, warm, golden, like the ones in your pocket. "You've spent some. You've spent them well, mostly. Tomorrow you'll need one, maybe more." He looks at you. "I can't give you what I owe you twice. But I can give you back one you spent. If you've room for it."

*if wishes < 3
  *choice
    #Take it.
      *set wishes +1
      *set n8_wish true
      *set rel_nadim +5
      You take it. It's warm in your hand, and then it's in your pocket, with the others, a small warm weight, a moment you can take back.
    #"Keep it. You'll need everything you've got tomorrow."
      *set rel_nadim +10
      *set des_nadim +5
      Nadim takes a long look at you. Then he closes his hand on the smoke, and it goes back into him, and he glows, very slightly, like a coal someone's breathed on.

      "No one," he says, "has ever given a djinn back his own power." He looks at his hand. "I'll remember that. Tomorrow. And after, if there is one."
*else
  He looks at your pocket, where three curls of smoke are sitting warm and heavy, and smiles. "Ah," he says. "No room. You've been saving. Clever." He closes his hand. "Then spend them well."

He's fading. The cedars are fading. The sea.

"Tomorrow, Lacroix," says Nadim, from very far away. "Three thirty-three. Bring your keys."

*page_break
*mood snow
You wake up.
*if last_night = "lazare"
  In your own bed, in Verdun, with Lazare asleep against your back and his arm across your chest, and the grey light of Saturday morning coming in through the window. Nuit blanche.
*elseif last_night = "dario"
  *if slept_dario
    Under the orange and brown afghan, above the sacristy, with Dario snoring into the back of your neck and the grey light of Saturday coming in through the window. Nuit blanche.
  *else
    In the cab of the tow truck, on the mountain, with the sun coming up red over the east end and Dario's arm round you. Nuit blanche.
*elseif last_night = "both"
  In your broken bed in Verdun, tilted ten degrees toward the window, between two men, both asleep, one snoring. The grey light of Saturday. Nuit blanche.
*elseif last_night = "rose"
  In your own bed, alone, with a pair of black kid gloves folded on the pillow beside you, and a red rose, and a card in a copperplate hand: [i]I never lie. So: until tonight. —R.[/i] Nuit blanche.
*elseif last_night = "friends"
  In a booth at Chez Normande, with your cheek on the table and a pickled egg by your head and a braid in your hair tied off with red thread, and Aimé asleep in the booth across from you with his tie over his shoulder. Normande's putting chairs on tables. Nuit blanche.
*elseif last_night = "lucille"
  In the chair by Mémé's bed, with a crick in your neck and her hand still in yours. Ghislaine's put a blanket over you. It's Saturday. Nuit blanche.
*else
  In the van, by the river, with the engine running and the windows fogged, and the sun coming up grey over the fort. The passenger seat is still warm. Nuit blanche.

Your pocket is warm. You put your hand in it. The curls of smoke are there, and the little key on its chain, and the big one.

It's Saturday, the twenty-eighth of February.

Tonight nobody on the island sleeps.
*set hush 20
*page_break Night Nine
*goto_scene night9
`);
