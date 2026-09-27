NB.scene("night2", String.raw`
*mood snow
*chapter 2 The Missing Line
You wake at twenty to seven in the evening, in your coat, in the dark.

For about four seconds you don't remember anything. You're just a man with a crick in his neck and boots on his bed and the radiator knocking like it wants to be let out. Then it all arrives at once: the phone, the bridge, the door, a fire that asked what year it was, a man pinning you to iron with a bell in his fist, wolves standing up out of the snow.

You lie there and wait to feel like it was a dream. It doesn't come.

*if has_photo
  The envelope is on the kitchen table where you dropped it. Twenty paper hundreds, and behind them the Polaroid. You don't have to take it out to see it. [i]S. + {name}. AOÛT 2009.[/i] A summer you don't remember, a door you've never seen, your father's hand on your shoulder.
*else
  The envelope is on the kitchen table where you dropped it. Twenty paper hundreds that smell faintly of smoke.
Your phone has been busy while you slept.

*if called = "marc"
  *text marc You didn't call.
  *text marc Tell me it was nothing?
*if dentist = "kissed"
  *text philippe Hi, it's Philippe. The dentist. From last night. I changed the code. I also wanted to say I'm not usually like that. I mean I'd like to be, but I'm not.
  *text philippe Can I buy you dinner sometime? A normal one. With shoes.
*elseif dentist = "kind"
  *text philippe It's Philippe (the dentist, the socks). I called my sister. Thank you.
*if n1_with = "lazare"
  *text agathe_sms Your van is outside. Keys in your mailbox. It needs a new heater. —Agathe
*elseif saved_agathe = "between"
  *text agathe_sms This is Agathe, from the fort. You're an idiot. Thank you.
*text dario u alive lacroix?
*text dario don't answer if ur a ghost now. fleurette will tell me
You text Dario back one word, [i]alive[/i], and get back a wolf, a skull, and a heart, in that order, which you decide not to interpret.

*if called = "marc"
  *choice
    #Text Marc-André: "It was nothing. Go back to your life."
      *set guarded %+10
      *text me It was nothing. Sorry I woke you. Go back to your life.
      *text marc Ok. Take care of yourself, Julien.
      You put the phone face down. It's the kindest lie you know how to tell.
    #Text Marc-André: "It wasn't nothing. I don't know what it was yet."
      *set guarded %-10
      *text me It wasn't nothing. I don't know what it was yet. I'll tell you when I do.
      *text marc I'm here. I mean it.
      You read [i]I'm here[/i] four times, and then you make yourself stop.
*if dentist = "kissed"
  *choice
    #Tell Philippe yes. Why not. A normal dinner, with shoes.
      *set dentist "date"
      *text me Sure. Some night when I'm not working. With shoes.
      *text philippe 😊
    #Let him down gently.
      *text me You're sweet. I think you should take yourself to dinner first. Somewhere nice.
      *text philippe That's the nicest rejection I've ever had. Ok.

*page_break
At quarter past seven the phone rings for real. A landline number. Bannantyne.

"Monsieur Lacroix? It's Ghislaine, at Sainte-Marguerite. The night nurse." A careful voice, the kind that has made a lot of calls like this. "It's your grandmother. She's not in danger. But she's been very agitated since last night. Since about half past three, actually. She keeps asking for Serge." A pause. "That's your father, I think?"

Half past three. The bells.

"I'll come," you say.

*page_break
Résidence Sainte-Marguerite is a long brick building on Bannantyne with a statue of the Virgin in a snowbank by the door and a smell, inside, of floor wax and boiled vegetables and something sweet underneath that you've never been able to name and have never wanted to.

Ghislaine meets you at the elevator. She's small and round and tired and she touches your arm, once, the way nurses do. "She's been talking about a fort," she says. "And a door. And your grandfather. I thought maybe it would help if she saw a face she knew."

Most days, your grandmother's face doesn't know yours. You've made your peace with that, mostly. You come on Sundays and bring her the date squares from the Portuguese bakery and tell her about the weather, and she tells you that you have a nice smile and asks if you're married, and you tell her no, and she says a nice-looking young man like you, and you say I know, Mémé, I know.

Lucille Lacroix is in her chair by the window, in her pink cardigan, with her little gold cross on its chain over the top of it, watching the snow come down past the streetlight. Eighty-eight years old and four foot eleven and still, somehow, the straightest back in any room.

*meet lucille
She turns when you come in.

Her whole face opens.

"Serge," she says. "Oh, Serge. [i]Enfin.[/i]"

*page_break
She holds out both hands. You take them. They're light and dry as paper, and they grip you with a strength you'd forgotten she had.

"You went back," she says. "You went back to the fort. I heard the bells, Serge, I [i]heard[/i] them. You promised Papa. You promised him on the Bible you wouldn't go back there."

She thinks you're your father. You look enough like him now: you've known that since you turned twenty-five and started catching him in shop windows.

*choice
  #Be him. Just for tonight. "I'm here, Maman. I'm here."
    *set meme_way "serge"
    *set guarded %+5
    *set rel_lucille +10
    *set serge_promise true
    It's the easiest thing you've ever done and it's a knife going in.

    "I'm here, Maman."

    She pulls your hands to her chest and closes her eyes. "You promised him," she says again, softer, scolding and relieved at once. "When he built that terrible thing. He made you swear you'd never go back and try to open it. He said they'd take you. He said they take people who try, Serge, they take everything, they take you right out of your own head."

    [i]They take you right out of your own head.[/i]

    "I know," you hear yourself say, in your father's voice. "I'm sorry."

    "You're always sorry." She pats your hand. "You were always my good boy. Even when you were bad."
  #Gently tell her the truth. "It's me, Mémé. It's {name}. Serge's boy."
    *set meme_way "self"
    *set guarded %-10
    *set rel_lucille +5
    "It's me, Mémé," you say. "It's {name}. Serge's boy. Your grandson."

    She looks at you for a long time. You watch her try. You watch the name go into her like a key into a lock that's rusted, and not turn, and not turn.

    "Serge's boy," she repeats. "Serge has a boy?" And then, slowly, wonderingly, touching your face: "He'd be so tall now."

    "He is," you say. "He is, Mémé."
  #Don't say anything. Just sit with her and hold her hands.
    *set meme_way "silent"
    *set guarded %+5
    *set rel_lucille +5
    You pull the other chair over and sit knee to knee with her and hold her hands, and don't correct her, and don't pretend.

    She talks. About the bells. About a promise. About somebody called "Papa," who you think must be your grandfather, and a thing he built that he should never have built, and people who came to the house in good coats to pay for it.

    You listen. You've always been good at listening in the dark.

*page_break
The snow comes down past the streetlight. Somewhere down the hall a television is playing a game show very loudly to nobody. Your grandmother's hands go still in yours.

When she speaks again, her voice is different. Clearer. It's the voice from your childhood: the voice that told you to take your boots off at the door and to say thank you to the bus driver.

"{name}," she says.

You look up. She's looking right at you. At [i]you[/i].

"Mémé?"

"You opened it," says Lucille Lacroix. "Didn't you. Not Serge. You." She doesn't sound angry. She sounds like a woman who has been waiting for a train for fifty years and has finally heard it in the tunnel. "Aurèle always said a Lacroix would open it. And that a Lacroix would have to close it."
*clue c_close
*codex lacroix_lock
*set meme_told true

"Mémé, what is it? What did he build?"

"A lock for people who shouldn't have had a key," she says. "He built it because they paid him, and because he was afraid of what they'd do to us if he didn't. And then he couldn't live with it." Her hand goes to her throat, to the chain of the little gold cross, and she draws it up out of her cardigan.

There's something else on the chain, behind the cross. Something that has lain against her skin for as long as you've been alive, and you've never seen it.

A small brass key. No longer than your little finger. Worn smooth. On its bow, very faint, a cross inside a circle.

She works the clasp with fingers that shake, and puts the chain in your palm, and closes your hand over it.

"He said, give it to whoever opens the door," she says. "I thought it would be Serge. I prayed every night it would be Serge." She holds your fist between her two hands. "It isn't the key to the door, {name}. It's the key to the other thing. He said you'd know. He said the one who opened it would know."

*set meme_key true
You don't know. You don't know anything. You hold the key and the cross, still warm from her skin.

*page_break
She's tiring. You can see it happen: the light going out of her eyes the way the colour goes out of the sky, slowly, and then all at once. She leans back in her chair and looks at the snow.

And she hums.

Six notes. A little falling tune, then a rise, then one held at the end, like a question. Over and over, the way you'd hum to a baby, or to yourself on a long drive.

"What's that song, Mémé?"

"Aurèle's song," she says drowsily. "He put it in the lock. So only family would know it." She smiles at the window. "He used to hum it doing the dishes. Serge too. All the Lacroix men. You'd think it was the only song they knew."
*clue c_meme_hum

*choice
  #Kiss her forehead and let her sleep.
    *set rel_lucille +5
    You kiss her forehead. She smells of powder and the sweet thing underneath. "Bonne nuit, Mémé."

    "Bonne nuit, mon grand," she murmurs, and it's impossible to say whether she means you, or your father, or someone else entirely.
  #Hum it back to her.
    *set rel_lucille +10
    *set guarded %-5
    You don't know the song. You hum it anyway: six notes, down and up and held, and your mouth finds them more easily than it should, like a word you knew as a child.

    Your grandmother's eyes open. For a second she looks at you with a kind of terror, and then with a kind of peace. "Yes," she says. "Like that. Just like that." And she sleeps.
  #Ask her one more question, while she's still here. "Mémé. Where did Papa go?"
    *set rel_lucille -5
    *set wits +3
    Her eyes flicker. "To the Line," she says, from very far away. "He said he'd be on the Line. He said, if anyone asks, Lucille, I'm on the Line." Her face creases. "Which line? I asked him. There's only the four."

    And she's gone again, into wherever she goes, humming.

Ghislaine walks you to the elevator. "Did it help?" she says. "Having you there?"

You look at the key in your fist. "Yes," you say. "I think it did."

*page_break
Chez Normande at eleven o'clock on a Saturday night is a different animal: the tin ceiling roaring with voices, the jukebox playing Donna Summer, the air thick with a smell like somebody set a cinnamon stick on fire in a room full of wet wool.

You understand, the moment you're through the door, that half the people in here aren't people.

It isn't anything you can point to. It's the man at the corner table whose shadow is on the wrong side of him. It's the woman laughing at the bar who has too many joints in her fingers. It's the two big bearded men arm-wrestling by the toilets who both have yellow eyes. Last night you'd have looked at all of them and seen a Saturday. Tonight the Hush has a hole in it the shape of you, and the Veillée is sitting in it, drinking.

Every head in the bar turns when you come in. The noise drops, like a hand on a record.

"[i]Le serrurier,[/i]" somebody says, not quite under their breath. The locksmith.

"Oh, for heaven's sake," says a voice from the jukebox, "stop [i]staring[/i], all of you, you'll give him a complex."

*page_break
*portrait fleurette smile
Fleurette has changed. The teal gown is gone; she's in black tonight, something long and fitted with a slit up one side and a hundred tiny jet beads that catch the light as she moves, and the platinum wig is swept up on one side and held with a comb shaped like a swallow. She looks you up and down with the frank professional interest of a woman who once dressed forty drag queens in a single night in a basement on Stanley Street with one mirror.

"You slept in that," she says.

"I did."

"You [i]smell[/i] like you slept in that." She sighs. "Well. The Line isn't a fashion show. It's worse. Normande!"

Normande appears with a bowl of pea soup, a heel of bread and a look that means [i]eat[/i]. You eat. It's the best thing you've ever tasted, which you suspect is about the soup and also about the last twenty-four hours.

*choice speak
  #"Is everyone in here... one of you?"
    *set lore +3
    *set rel_fleurette +3
    "About half," says Fleurette. "Normande serves anyone who can find the door. The other half are sleepers who can't see a thing and think the jukebox has a mind of its own." She pats it. "It does."
  #"Why is everyone staring at me?"
    *set wits +2
    "Because you're news, chéri." She waves at the room. "A sleeper who walked through a Carillon bell and opened a Compagnie seal on the same night. By now every creature on the island knows your name, your van, and your shoe size. By midnight, half of them will have decided they're in love with you, and the other half will have decided to kill you." She considers. "Some will manage both."
  #"I went to see my grandmother. She knew about the fort. She gave me this." Show her the key.
    *set rel_fleurette +5
    *set lore +2
    Fleurette leans in to look. She doesn't touch it. Ghosts, you're learning, don't touch things that matter.

    "Aurèle Lacroix's mark," she says softly. "I know that little cross. Half the good locks in this city have it." She looks up at you. "Keep it on you, chéri. Somewhere nobody can see. Don't show it on the Line. Not to anyone."
  #Say nothing. Eat your soup.
    *set guarded %+5
    "A man who eats in silence," Fleurette says approvingly. "Very Catholic. We'll make something of you yet."

*page_break
"Now," says Fleurette. "The Missing Line. Everybody who's anybody will be there tonight, because you'll be there tonight, and everybody knows it. Which means you need a guide, and you need an escort, and I'm both."

"I thought you couldn't leave the jukebox."

"A ghost can go anywhere that something of hers goes," she says. "Normande."

Normande reaches under the bar and comes up with a powder compact: gold, dented, the enamel on its lid chipped, a swallow picked out in rhinestones with two of them missing. She puts it on the bar in front of you like a bartender putting down a drink.

"It was mine," says Fleurette. "My mother gave it to me the night I first went out in a dress. 1959. She said, if you're going to do it, Réal, do it properly, and powder your nose." Her voice doesn't change at all, which is how you know. "Put it in your pocket. Keep it close. Wherever it goes, I go."

You pick it up. It's warm, the way her jukebox is warm.

"Don't open it on the métro," Fleurette adds. "I hate the métro."

*page_break
St-Viateur Bagel on a Saturday night at midnight is lit up like an aquarium: the long room white with flour, the wood fire roaring in the brick oven at the back, three men in aprons rolling dough into rings faster than your eye can follow and throwing them into the honey water and out onto the long paddles. There's a lineup out the door even now, students and drunks and a cab driver in a fur hat, stamping their feet in the snow.

You join it, feeling like an idiot. From your coat pocket, Fleurette's voice says, very small and tinny, "Not the line, chéri. Go round the side."

Round the side, in the alley, there's a steel door with no handle beside a stack of flour sacks and a dumpster. You knock. It's opened by a baker with flour to the elbows and a cigarette behind each ear, who looks at you, and looks at your coat pocket, and says, "Evening, Madame Fleurette," to the pocket, and steps aside.

"Evening, Samir," says the pocket. "He's with me."

"I know who he is," says Samir, and looks at you, not unkindly. "Everybody knows who he is. Go on. Mind the stairs. They're older than the ovens."

Past the ovens, in the heat, behind a rack of cooling bagels, there's a door in the brick that you would swear wasn't there when you came in. Behind it, stairs go down: first brick, then concrete, then old square tiles, orange and cream, in the exact pattern of the métro stations you've ridden your whole life. The air changes as you go. Warmer. It smells of wet stone and hot metal and something like cloves.

At the bottom there's a turnstile, the old kind, the heavy chrome ones they took out in the nineties. It won't turn for you. You look for a slot to put something in and there isn't one.

"Say what you owe," says the pocket.

"I don't owe anyone anything."

"Then say what you're owed."

You think of a fire in a vault that asked what year it was. "I'm owed," you say, feeling ridiculous. "By a djinn called Nadim."

The turnstile turns.

*page_break
*art 2
*codex missing_line
The station is called MILE-END.

It says so on the wall in the old métro font, white letters on a band of blue tile, and it doesn't exist. There is no Mile-End station. You've lived here all your life. But here it is: a long vaulted platform lit by strings of bare bulbs and paper lanterns, the tracks sunk between two walls of tile, and on the tracks, at the platform, a métro train. Not the new ones. The old blue ones with the round faces and the rubber tyres, the MR-63s that ran from Expo till they retired them in 2018, with every one of their doors wide open and a market spilling out of them onto the platform.

And the platform is full.

Your eyes don't know where to go first. A stall under a striped awning selling feux follets in Mason jars: little green lights knocking against the glass like moths, a sign on the counter in careful script, [i]Âmes non baptisées, garanties 100 ans[/i]. A woman with a face like a hawk's selling bottled winters, each jar labelled with a year: [i]L'hiver de '98 (la crise du verglas). L'hiver de '08 (le gros).[/i] You can see snow falling inside them. A long table of lost things: gloves, single mittens, a thousand house keys, a wedding ring, a child's retainer, and a card that says [i]THINGS THE CITY FORGOT, 2 FOR 1[/i].
*codex feux_follets

A lutin is braiding the beard of a very large man who might be a troll. Two women in fur coats, one of whom has antlers, are haggling over a jar of something red. A vampire in a velvet smoking jacket stands behind a bar made from a métro bench, pouring what is very clearly not wine into crystal glasses from bottles with handwritten labels: [i]O négatif, Outremont, 1994. Correct pour la saison.[/i]

It's loud and warm and it smells of cloves and cold stone and frying dough, and nobody, not one creature on the whole long platform, is pretending to be anything other than what they are.

*if lutin = "deal"
  Something tugs your hair. You know before you look. The lutin from Chez Normande is sitting on the edge of the feux follets stall, swinging his legs, and he holds up one finger at you: [i]one lock, one day.[/i] Today, apparently. He points down the platform at a small iron chest with a padlock on it, sitting under a table.

  It takes you forty seconds. He looks at you with a respect so enormous it's almost frightening, and presses something into your hand before he disappears under the tables: a red thread, tied in a knot.

  "A lutin's knot," says Fleurette's pocket, impressed. "Tie that round anything and it won't come undone unless you say so. Keep it."
  *set lutin "paid"
*elseif lutin = "thanked"
  Something tugs your hair. The lutin from Chez Normande is sitting on the edge of the feux follets stall, swinging his legs. He points at the braid he tied last night, still behind your ear, and gives you a thumbs up so emphatic he nearly falls off.

*page_break
They notice you about four seconds after you notice them.

It goes down the platform like a ripple going down a pond: heads turning, voices dropping, the word going from mouth to mouth. [i]Le serrurier. C'est lui. The one from the fort. The sleeper. Look at his hands.[/i]

And then they're coming.

Not all at once. But a woman with scales on her wrists wants you to look at a lock on her grandmother's jewellery box, and a man with a lamp for a head (an actual antique brass oil lamp, with a wick that burns while he talks) wants to know if you'd consider a retainer, and a pair of very beautiful twins with identical silver eyes want to know if you're seeing anyone, and a man in a beige raincoat who is almost certainly a sleeper with no idea what he's looking at wants to know where the washroom is.

*codex favors
"Careful what you say yes to," says the pocket. "Down here, a yes is a favor, and a favor is money, and everybody heard."

*choice
  *selectable_if (charm >= 30) #Work the crowd. You tended bar in the Village; this is just last call with more teeth.
    *set n2_crowd "charm"
    *set charm +3
    *set rel_fleurette +5
    You smile. You shake hands. You tell the woman with the scales to bring the box by the shop on Tuesday, and the lamp man that you don't do retainers but you do do house calls, and the twins that you're very flattered, and you point the man in the raincoat at the stairs. In ten minutes you've got a crowd laughing at a story about a dentist in argyle socks, and when you move on, they let you, and they're smiling.

    "Oh, chéri," says the pocket. "You're a natural."
  *selectable_if (wits >= 30) #Bluff. Tell them all you're booked, very important, very expensive. Let them wonder.
    *set n2_crowd "bluff"
    *set wits +3
    *set guarded %+5
    "I'm afraid I'm spoken for this week," you say, gravely, to everyone at once, like a man with an appointment book. "But I'll be taking commissions after Nuit blanche. Leave your name with Madame Fleurette."

    Nobody knows what that means. It works anyway. The crowd parts with a respectful murmur, and you walk through it with your heart pounding.
  #Let Fleurette handle them.
    *set n2_crowd "fleurette"
    *set rel_fleurette +5
    *set guarded %+5
    You take the compact out of your pocket and flip it open, and a voice like a foghorn in sequins comes out of it and says, "[i]MESDAMES ET MESSIEURS[/i]. He's working. He's with me. He will not be opening your ugly little boxes tonight. [i]Circulez![/i]"

    They circulate. Several of them look genuinely frightened.
  #Just keep walking. Head down. You're not a show.
    *set n2_crowd "walk"
    *set guarded %+10
    *set nerve +2
    You put your head down and your hands in your pockets and walk through them like a man walking through rain. They let you. They stare, but they let you.

*page_break
Halfway down the platform, by the table of forgotten things, someone takes hold of your sleeve.

An old woman. Seventies, maybe. A good wool coat gone shiny at the elbows, a clear plastic rain bonnet over her hair, even here, underground. Her face is soft and lined and very frightened, and her hand on your sleeve is shaking.

"Excuse me," she says, in the French of the east end. "Excuse me, monsieur. Do you know me?"

"I'm sorry, madame. I don't think so."

"I think I worked for somebody," she says. "A family. On the mountain. A big house. I cleaned the silver, I think. I remember the silver." Her grip tightens. "And I think I had a daughter. I keep thinking it. But when I ask at the house, they say I never had a daughter. They say I never worked there. And they're so polite about it."

She searches your face as if the answer might be written on it.

"Everyone here is looking at you," she says. "They say you open things. Could you open that? Whatever's shut in me?"

*choice
  #Take her hand. "What's your name, madame?"
    *set met_mireille true
    *set rel_fleurette +5
    *set guarded %-5
    She holds on to your hand like a railing. "Mireille," she says. "Mireille Caron. I think." She says it again, testing it, like a key she's not sure fits. "Mireille Caron."

    "I'm {name}," you say. "I don't know how to open what's shut in you, Madame Caron. But I'm going to find out. And when I do, I'll come and find you."

    Her eyes fill. "Thank you," she says. "It's been so long since anybody said my name back to me."
    *set mireille_kind true
  #"I'm sorry, madame. I don't know how. I wish I did."
    *set met_mireille true
    She nods, as if that's the answer she's heard every day for forty years. "No," she says. "Nobody does." She lets go of your sleeve, gently, and pats it smooth where she held it, and goes back to the table of forgotten things.
  #Ask Fleurette, quietly, what's wrong with her.
    *set met_mireille true
    *set lore +3
    "Unmade, chéri," says the pocket, very low. "The Hush took her out of everybody's memory, or took everybody out of hers. It's been happening since '67. Mostly to people who saw too much. Now the Hush is leaking, and some of them are starting to remember the shape of what they lost." A pause. "It's not a kind thing, remembering the shape."
    *codex unmaking

    The old woman is already drifting away down the platform, asking the next person: [i]Excuse me, monsieur. Do you know me?[/i]

*page_break
"Lacroix?"

A man's voice, behind you, cracking with disbelief. "{name} Lacroix? From Monseigneur-Richard?"

You turn. Behind a stall hung with black velvet, under a hand-lettered sign that says [i]SOUVENIRS BÉLANGER. Mémoires, discrétion assurée[/i], a young man is staring at you over the top of a pair of round tortoiseshell glasses.

He's your age. Thin, very pale, with black hair combed into a neat side part and a black suit that fits him like a school uniform. He's holding a stack of white index cards in both hands as if you've caught him shoplifting them.

*meet aime
"It's Aimé," he says. "Aimé Bélanger? I sat behind you in Secondaire 3. Mr. Tessier's history class. You used to let me copy your homework. You had a Spider-Man pencil case."

It comes back to you all at once, the way the smell of a school hallway can come back. A skinny, silent kid who ate his lunch alone on the stairs. The undertaker's son. The other kids called him [i]le Mort[/i], the dead one, and held their noses when he walked by. You didn't. You never did anything about it either.

"Aimé," you say. "Holy shit."

"Holy shit," he agrees, and laughs, high and nervous, and then puts a hand over his mouth. "Sorry. It's just. You're [i]him[/i]. The one everybody's talking about. And you're [i]you[/i]." He shakes his head. "I had such a crush on you in Sec 3. Oh my God. I can't believe I said that out loud. Please forget I said that."

*page_break
The index cards, it turns out, are memories.

"Last ones," Aimé says, not looking at you, straightening the stack with great care. "People's. When they die. It's, um. It's a family thing. We're ghouls." He winces at the word. "The Bélangers. We've run the funeral home in Verdun since 1911. When somebody dies, before the service, we take a very, very small, um, taste. It's respectful! There's a prayer. And we get what they were thinking about at the end. Some of it. Just a little."
*codex ghouls

He holds up a card. In small neat handwriting: [i]M. Gaétan Roy, Rosemont, 81. The sun on the kitchen floor in 1962. His wife laughing at something on the radio.[/i]

"Families come to us," Aimé says. "They want to know. Was it peaceful. Was he thinking of me. Were they scared. So I write it down, and I sell it to them, or to people who collect them, which is a whole other thing I don't love." He puts the card down. "It pays for the hearse."

He finally looks at you. His eyes are grey and very frank behind the glasses, and braced, like a kid waiting to be called a name on the stairs.

*choice speak
  #"That's the kindest thing I've ever heard a business do."
    *set rel_aime +15
    *set favor_aime true
    *set guarded %-5
    Aimé's mouth falls open. Then he goes pink from his collar to his hair, which on a man as pale as he is looks like a sunrise.

    "Okay," he says. "Okay. I owe you one for that. That's a real favor, by the way. On the Line. I just gave you a favor." He looks panicked and delighted. "Use it wisely. Or stupidly. Whatever you want."
    *remember aime You told him his family's trade was the kindest thing you'd ever heard of.
  #"So you eat dead people."
    *set wry %+10
    *set rel_aime +5
    "A [i]mouthful[/i]," Aimé says, a little wounded and mostly relieved, as if you'd confirmed something he'd been waiting for. "A tiny mouthful. For science. And grief." He pushes his glasses up. "You still have the same face you made in Sec 3 when Tessier said something stupid. I missed that face."
  #"I'm sorry, Aimé. For Sec 3. For never doing anything about the stairs."
    *set rel_aime +15
    *set favor_aime true
    *set wry %-10
    He blinks. He takes his glasses off and cleans them on his tie for a long time.

    "You didn't hold your nose," he says finally. "Everybody else did. You were the only one who didn't. I used to think about that." He puts his glasses back on. "You don't owe me anything. But I owe you one now. A favor. That's how it works down here."
    *remember aime You apologised for Secondaire 3, fifteen years late.
  #"Could you do that to anyone? Read their last thoughts?"
    *set wits +3
    *set rel_aime +5
    "If they're dead," Aimé says carefully. "And if I'm very close to it. The sooner the better. After a few days it's just... static." He studies you. "Why?"

    You don't know yet why you asked. It sits in your stomach like a stone.

*page_break
"You should be careful down here," Aimé says, lower, leaning over the velvet. "Everybody's being very nice to you. That's what worries me." He glances down the platform. "The Beaver Club's here tonight. The vampires, from up the mountain. They never come down to the Line. And the Conductor's asked about you three times."

"Who's the Conductor?"

"He runs this. All of it. The Line." Aimé hesitates. "He's okay. He's fair. But he's old, and old things are always thinking about something that happened a long time ago." He nods past your shoulder. "And speaking of the Beaver Club."

*page_break
*meet ruari
The young man leaning on the vampire sommelier's bench is so beautiful it's a little rude.

Twenty-five, maybe, forever: bleached hair shoved back off his face with dark roots showing, skin like skim milk, a battered leather jacket over a pink T-shirt that says ULTRAMAGNETIC in cracked letters. Both wrists stacked to the elbow with plastic bracelets: pony beads, pink and green and orange and blue, the kind of thing a kid made at a rave in a warehouse in 1998 and gave away to strangers with a hug. He's holding a crystal glass of something dark and not drinking it.

He watches you walk over as if he's been waiting all night for exactly this, and is now slightly bored by it.

"Well," he says. Glasgow, under a quarter-century of Montréal. "Look at you. The wee locksmith."
*clue c_kandi_worn

He hands you an envelope. Heavy cream paper, sealed with red wax pressed with a beaver. Of course it's a beaver. Inside, a card, engraved:

[i]Mrs. Honora Strachan, President of the Beaver Club, requests the pleasure of Mr. {name} Lacroix's company at supper. Tomorrow evening. Strachan House. Half past midnight.[/i]

"I'm Ruari," he says. "Honora's. She sends her regards, and she says the Club would very much like to be your friend." He smiles with his mouth closed. "You should come. The food's terrible for you and wonderful for us."

*choice speak
  #"Are you on the menu?"
    *set n2_ruari "flirt"
    *set des_ruari +15
    *set reckless %+5
    His eyebrows go up. Then he laughs, a real one, surprised out of him, and it takes about fifteen years off a face that's already twenty-five.

    "Only for regulars," he says. He looks at your throat, just for a second, and then back at your eyes, and you feel it like a hand. "Come to supper. We'll see what you're on."
  #"What does the Beaver Club want with a locksmith?"
    *set n2_ruari "sharp"
    *set wits +3
    "What does anyone want with a locksmith?" Ruari says. "Something opened. Something closed." He turns the glass in his fingers. The bracelets clack. "Honora doesn't tell me the why. I just carry the envelopes. Pretty and useless. It's my whole brand."
  #"Tell Mrs. Strachan I'll think about it."
    *set n2_ruari "cold"
    *set guarded %+5
    "I'll tell her," he says, and looks at you with sudden, genuine interest, the way a cat looks at a door it's never seen closed before. "Nobody's told her 'I'll think about it' since about 1850. She'll adore you. Or have you killed. It's a coin toss with her."
  #"Nice bracelets."
    *set n2_ruari "kandi"
    *set rel_ruari +10
    *set wits +2
    He looks down at them as if he'd forgotten they were there. Something passes over his face, fast and raw, and is gone.

    "Solstice, '98," he says. "A warehouse on Wellington. Last night I was ever warm." He tugs his sleeves down over them. "Everybody who was there gave everybody else a bracelet. I kept all of mine."

He finishes the drink he wasn't drinking in one swallow, sets the glass down, and pushes off the bench.

"Half past midnight," he says. "Wear something you can bleed in." A beat. "Kidding. Mostly." And he's gone into the crowd, a flash of bleached hair and beads.

*goto_scene night2b
`);
