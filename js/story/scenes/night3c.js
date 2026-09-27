NB.scene("night3c", String.raw`
*comment Night Three storylets, part two: the Buanderie, the Beaver Club, the funeral home, the Keyman.
*label buanderie
*page_break
*set visited_gisele true
Pointe-Saint-Charles is the part of the city that the city forgot to gentrify, or tried to and gave up: brick row houses shoulder to shoulder along the Lachine Canal, old factories turned into condos next to old factories still falling down, a church on every third corner and a tavern on the other two.

On Rue du Centre, between a pawnshop and a place that fixes vacuum cleaners, a sign glows through the falling snow: [b]BUANDERIE PÉPIN. LIBRE-SERVICE. OUVERT 24H.[/b] Pépin Laundromat. Self-serve. Open 24 hours.

Through the steamed-up window you can see the dryers turning, a whole wall of them, round glass eyes full of tumbling colour. And at a card table between the washers, four old women in housecoats and snow boots are playing cards with a bottle of gin in the middle of the table and an ashtray the size of a hubcap.

You push the door open. A bell rings over it. Warm air hits you, smelling of Bounce sheets and cigarettes and something else, something green and sharp, like crushed juniper.

All four women look up at once.

"Well, [i]tabarnak[/i]," says one of them, delighted. "It's Aurèle's boy."

*page_break
*meet gisele
The woman behind the counter isn't one of the four. She's older than all of them: small and very straight, in a purple cardigan with the sleeves pushed up, cat's-eye glasses on a chain, a perm like a grey storm cloud, and a du Maurier in the corner of a mouth painted red. She's folding a fitted sheet, which nobody can do, and doing it perfectly.

She looks at you over the glasses for a long time.

"You've got his jaw," she says finally. "Aurèle's. The same stubborn jaw. The rest of you is your mother's, I expect, poor thing." She snaps the sheet into a perfect square. "Sit down before you fall down. Thérèse, get the boy a coffee. Don't put gin in it." A pause. "Put a little gin in it."

"You knew my grandfather."

"Gisèle Pépin," she says, as if that answers it, and it seems to. The four women at the card table look at each other. "I knew your grandfather. Sit."

You sit on a plastic chair by the dryers. Thérèse brings the coffee. It has gin in it. The four women introduce themselves, one by one, as if it's a ritual: Thérèse, who has a hearing aid and a laugh like a crow; Monique, who knits without looking; Pierrette, very tall, very silent; Yolande, who has a scar on her chin and wants to know if you're married.

In the nearest dryer, going round and round among the towels, there's a pair of jeans and a handwritten letter and a sprig of something green.

"Love spell," says Yolande, following your look. "For my granddaughter. Low heat. Forty minutes. She'll have him by Friday."

*page_break
"So," says Gisèle, lighting a new cigarette off the old one. "You opened it."

"Everyone keeps saying that like it's a question."

"It isn't." She looks at you through the smoke. "I felt it. We all did. Friday, 3:33, every dryer in this place stopped at once, and the gin froze in the bottle." Thérèse nods vigorously. "Fifty-nine years I've been waiting for somebody to open that door. I always thought it would be me, with a crowbar, when I was angry enough." She taps ash. "I never got angry enough. I got old instead."

*choice speak
  #"Tell me about him. Aurèle. Nobody ever told me anything."
    *set gisele_way "asked"
    *set rel_gisele +10
    *set lore +3
    *goto gis_aurele
  #"You were in love with him."
    *set gisele_way "love"
    *set rel_gisele +5
    *set wits +2
    The four women at the card table go absolutely silent. Monique stops knitting.

    Gisèle doesn't move for a moment. Then she laughs, one short bark, and the smoke goes everywhere. "Well," she says. "You've got his mouth, too. He could never leave a thing alone either." She taps her cigarette. "Yes. I was in love with him. In 1956. Before your grandmother. A long time before you."
    *goto gis_aurele
  #"What did he build? Really? Nobody will give me a straight answer."
    *set gisele_way "straight"
    *set rel_gisele +5
    *set nerve +2
    "A straight answer," says Gisèle. "From a witch. God help us, the youth." She leans on the counter. "Fine. Straight. Your grandfather built a cage for a djinn, for three people who were frightened of what would happen if the city saw us, so they could hide us from it forever. He built it well. He always built things well." Her mouth tightens. "That's as straight as it gets, boy. Now ask me what it cost."
    *goto gis_aurele

*label gis_aurele
*page_break
"We met in 1956," says Gisèle. "At a dance at the Palais d'Or. He was twenty-six, and a locksmith, and shy as a cat, and he couldn't dance, and he danced with me anyway, all night, because he said I was the only girl there who didn't laugh at him." She smiles at the dryers, where the love letter goes round and round. "I laughed at him, of course. Just not where he could see."

"What happened?"

"He met Lucille." She says it without bitterness, which is more painful than bitterness would be. "Your mémé. She was a sleeper, and pretty, and kind, and she didn't come home smelling of juniper and grave-dirt, and she didn't have four crazy women playing cards in her kitchen. He married her in '58. I was at the wedding. I brought a cake." Thérèse cackles. "It was a good cake. We didn't put anything in it."

"And in 1966," you say.

Her face goes still.

"In 1966, he came back," says Gisèle. "To this laundromat. In the middle of the night, with his hat in his hands. He'd been offered a great deal of money by three people I won't name in my own shop, to build a lock that nothing of the Veillée could ever open. And he wanted to know how." She draws on the cigarette. "Because no lock can do that on its own. You need something older than the Veillée in it. Something from the other side."

"What did you tell him?"

"I told him no. I told him that if he built it, I would never speak to him again." She lets the smoke out, slowly. "He built it. I kept my word. He died in 1994 and I didn't go to the funeral. I sent a cake." She looks at you. "Nobody ate it. That one I did put something in."

*page_break
"There's one thing I never understood," Gisèle says, more quietly, and the four women at the card table lean in, as if they've never heard this part either. "That summer, the summer of '66, before he built it, your grandfather spent every day in the towers of Notre-Dame. Up with the bells. With a tuning fork." She shakes her head. "A tuning fork, for a lock. Lucille thought he had a mistress in the choir. I knew better. I just never knew what he was listening for."
*set rel_gisele +5

*choice
  #Tell her about Mémé. The key on the chain. "He left her something. For whoever opened the door."
    *set gisele_way "key"
    *set rel_gisele +15
    *set favor_gisele true
    *set guarded %-10
    You take out the chain from under your shirt: the little gold cross, and behind it the small brass key with the cross in a circle.

    Gisèle looks at it for a long time. She doesn't touch it. Her mouth works.

    "The old fool," she says at last, and her voice cracks right down the middle. "The old, stupid, [i]beautiful[/i] fool. He made a way out. He made a way out and hid it round his wife's neck for fifty years." She takes off her glasses and wipes them on her cardigan, and puts them back on, and when she looks at you again her eyes are wet and furious. "All right, boy. All right. I owe you one. For that. For showing me he wasn't only what I thought." She points her cigarette at you. "A Pépin favor. Don't waste it on anything stupid."
    *remember gisele You showed her the key Aurèle left around Lucille's neck.
  #"I'm sorry. For what he did. For what it cost you."
    *set gisele_way "sorry"
    *set rel_gisele +10
    *set favor_gisele true
    *set wry %-10
    She looks at you as if you've said something in a language she used to speak.

    "You don't owe me that," she says. "You weren't born." A long pause. "But nobody in that family ever said it, not once, in sixty years. Not him. Not Serge, when he came sniffing around here in the nineties with the same jaw and the same questions." She stubs out the cigarette. "So I'll take it. And I'll owe you one for it. That's how it works."
    *remember gisele You apologised for your grandfather, sixty years late.
  #Get up. Pick up the other end of the fitted sheet she's folding. Help.
    *set gisele_way "sheets"
    *set rel_gisele +10
    *set favor_gisele true
    *set hands +2
    You get up and take the other end of the next fitted sheet off the pile, and after a surprised second she lets you, and you fold it together: corners into corners, the elastic tucked, the long edges matched. Your mother taught you. It's the only domestic thing you can do perfectly.

    Gisèle watches your hands the whole time. When it's done, a perfect square, she takes it from you and puts it on the pile and looks at you over her glasses.

    "Kath Byrne taught you that," she says.

    "You knew my mother?"

    "Everybody in the Pointe knew your mother. She did her wash here every Saturday, for years, before the machine at your place. She never knew what we were. She always said thank you." Gisèle nods, once. "All right. A Pépin favor. For the sheet, and the manners."
    *remember gisele You folded a fitted sheet with her, the way your mother taught you.
  #"Why a tuning fork? What was in the towers?"
    *set gisele_way "fork"
    *set wits +2
    *set lore +3
    "If I knew that, boy, I'd have been a lot less angry for a lot longer." She lights another cigarette. "All I know is what the old stories say. Every bell that's blessed has a voice, and a big enough bell, rung on the great feasts for a hundred years, gets something living in the voice." She looks toward the east, toward the river and the old town. "The biggest bell on this island is in La Persévérance. Eleven tons. They call it Jean-Baptiste." She says the name as if it might hear her. "Ask it, if you ever get close enough. I never did."
    *codex angel

*page_break
Before you go, she takes you into the back room.

It's small and cold and smells of cedar. There's a washtub, and a mangle from about 1920, and shelves of jars with handwritten labels you don't try to read. And hanging from the ceiling on ropes, filling the room from wall to wall, there's a canoe.

It's birchbark, very old, painted red, with a white stripe along the gunwale and six seats and six paddles lashed inside it. There are marks burned into the bark at the bow: a line of letters in a script that isn't quite any alphabet, and at the end of them a signature, in a flourish like a sword stroke, that you've seen once before, on the inside of a matchbook.

"La chasse-galerie," says Gisèle. "Don't touch it."
*codex chasse_galerie
*codex buanderie

"It [i]flies[/i]?"

"Once a year. New Year's Eve. We take it up over the city and look at the lights." She lays a hand on the side of it, gently, like a woman touching a horse. "The paperwork's with the devil. It always was. Six paddlers, no holy words, and don't touch a steeple, and you can go anywhere in the world in a night." She lets go. "Remember it's here, boy. You might need a ride, one of these nights. Everybody does, eventually."
*set n3_last "gisele"
*set charm +2
*return

*label beaver_club
*page_break
*set beaver_dinner true
Strachan House is on the mountain, above Sherbrooke Street, in the part of the city they called the Golden Square Mile when three-quarters of the wealth of Canada lived in it. It's a greystone mansion with turrets and a wraparound porch and a lawn that goes up the slope under a foot of perfect snow, and every window on the ground floor is lit gold. The knocker on the front door is a brass beaver.

Of course it is.

The door is opened before you can touch the beaver by a butler in white gloves with a face like a peeled egg and eyes that don't quite focus. He takes your coat without a word. He smells, very faintly, of iron.

Inside, the house is warm and dark and hung with furs.

Beaver, fox, marten, mink, lynx, a great black bear pelt on the floor of the hall with its head still on. Portraits of men in high collars and cravats glare down from the walls: [i]Simon, 1791. James, 1802. William, 1824[/i]. Somewhere a string quartet is playing Haydn, not very well.

"Mr. Lacroix," says a voice from the top of the stairs. "You came. How very brave."

*page_break
*meet honora
She's small. That's the first thing. Five foot nothing, in a bottle-green gown from the reign of George III, high-waisted, with a lace collar up to her jaw and a rope of pearls, and her auburn hair piled on her head in curls and pins the way women wore it when Napoleon was a threat. Her skin is the colour of milk with the cream taken off. Her eyes are pale grey and perfectly, unhurriedly attentive, like a very good doctor's.

She comes down the stairs one step at a time, with a hand on the banister, and holds out the other one to you, palm down, to be kissed or shaken.

*choice
  #Kiss it. When in 1812, do as they did.
    *set rel_honora +10
    *set charm +3
    Her hand is cold as a doorknob in January. When you straighten, she's smiling, very slightly. "A gentleman," she says. "Your grandfather never could. He shook it like a pump handle and blushed."
  #Shake it. Firmly. You're from Verdun.
    *set rel_honora +5
    *set guarded %+5
    Her hand is cold as a doorknob in January. She lets you shake it with a look of mild, delighted surprise, as if you've done a trick. "Aurèle shook it exactly like that," she says. "Like a pump handle. It must be in the blood."

"Honora Strachan," she says. "President of the Club. Welcome to supper."

*page_break
The Beaver Club dines at a long table under an antler chandelier in a room panelled in black walnut.

There are twelve members tonight, and you. You learn them as the courses come: a Scottish fur baron in a silk cravat who wintered on the Athabasca in 1788 and never let anyone forget it; a woman in a 1920s beaded dress who ran rum across the border from Sutton and still calls everyone "doll"; a man in a very good 1960s suit who was an advertising executive on Sherbrooke Street and wants to know if you've ever thought about your "personal brand." They all have Honora's stillness, and her colouring, and the same way of looking at your throat and then politely away.

They eat nothing. They drink from crystal glasses a dark red that isn't wine. They serve you, and only you, an excellent steak-frites and a glass of Bordeaux, and watch you eat it with the fond, faintly hungry attention of people watching a dog enjoy a bone.

At nine minutes past one, the Scottish baron rises and lifts his glass.

"Gentlemen," he says. "And ladies, God help us. The toasts."

And they drink, one after another, standing: "To the Mother of All the Saints." "To the King." "To the fur trade in all its branches." "To voyageurs, wives and children." And, last, in a lower voice, all together, their glasses lifted toward the dark window: "To absent members."

"The Club's toasts haven't changed since 1785," Honora murmurs to you, at her right hand. "We're a very conservative institution."
*codex beaver_club

*page_break
"Your grandfather built our cellar lock," says Honora, over the cheese, which only you are eating. "In 1961. A sweet man. He was terrified of me the whole time." She turns her glass by the stem. "He did very good work. It's still there. I think of him every time I go down for a bottle."

"Is that why you invited me? For the family connection?"

"I invited you," says Honora, "because you're the most important man in Montréal this week, and you don't know it yet, and I'd like to be your friend before somebody else teaches you what you're worth." Her smile is small and very precise. "And because the Club is worried. The Hush is fraying, Mr. Lacroix. Things that were tidily put away are coming loose. People are remembering things they oughtn't." She dabs her lips with a napkin she doesn't need. "The Club is seeing to a little tidying, of course. One does what one can. But it would be so much simpler if the Hush were whole again."
*clue c_tidying

*choice speak
  *selectable_if (wits >= 35) #"Tidying." Hold her eyes. "Is that what you call what happened to Mireille Caron?"
    *set rel_honora -10
    *set wits +2
    *set nerve +2
    Nobody at the table moves. The string quartet, somewhere down the hall, plays on.

    Honora's face doesn't change at all, which is how you know you've hit something. "I don't believe I know anybody by that name," she says pleasantly. "Should I?" She turns to the rum-runner. "Doll, would you pass the Stilton to Mr. Lacroix? He's hardly eaten."

    The subject is closed so smoothly you barely feel the door.
  #"What kind of tidying?"
    *set wits +1
    "Oh, the usual kind," says Honora. "Loose ends. Old business. When a spell as large as the Hush frays, Mr. Lacroix, it's a bit like a dam. The water finds every crack." She smiles. "Someone has to go round with a bucket."
  #Let it go. Eat the cheese.
    *set guarded %+5
    *set rel_honora +5
    You let it go. Honora approves; you can see it, the way a cat approves of a bird that stays still.

*page_break
"Now," says Honora, and the table goes quiet, the way tables go quiet around a woman who has been in charge of them for two hundred years. "I'm going to make you an offer, and I'm going to make it very plainly, because I have found that young men from Verdun appreciate plainness."

"Go on."

"The Club's protection," she says. "Complete. You would want for nothing. A house on this mountain, if you'd like one. A car that starts in winter. Your grandmother moved to a proper home, with a garden and a nurse who doesn't have forty other patients." She lets that land. "In return, only this: when the time comes, and the lock needs closing again, you'll close it for us. You're the only man alive who can." A pause. "Well. Very nearly."

*choice speak
  #"Yes. I'll take it."
    *set honora_contract true
    *set favor_honora true
    *set rel_honora +15
    *set guarded %+5
    Honora smiles, and it's the first smile you've seen on her that reaches all the way up. The whole table lifts its glasses to you at once.

    "Welcome to the Club, Mr. Lacroix," she says. "Associate member. We'll have your grandmother moved by Tuesday." She touches your hand, once, cold as a doorknob. "You'll find we look after our own. Always. It's the only thing we've ever been good at."
    *remember honora You took her offer at her own table.
  *selectable_if (charm >= 35) #"Not yet. But I'd like to stay friends while I think about it."
    *set rel_honora +10
    *set charm +3
    "Friends," says Honora, as if tasting a wine she'd forgotten she liked. "Yes. Why not." She lifts her glass to you. "Think as long as you need to, Mr. Lacroix. Only, not too long. The Hush won't wait for you to make up your mind, and neither, I'm afraid, will some of my competitors."
  #"No. Thank you. I don't close cages for people."
    *set rel_honora -10
    *set nerve +3
    *set guarded %-5
    The table goes very quiet.

    Honora looks at you for a long moment, with her small cold hands folded, and then she laughs, softly, and shakes her head. "Aurèle said exactly the same thing," she says. "In this room. In 1961. And then in 1967 he built it anyway." She rises, and the whole table rises with her. "We'll speak again. Do enjoy the rest of the evening."
  #"What does 'very nearly' mean? Who else could close it?"
    *set wits +5
    *set rel_honora -5
    *set overheard true
    Honora's smile doesn't move at all. "I'm sure I don't know what you mean," she says. "A figure of speech." And she turns to the baron and asks after his gout.

    But you saw it: the smallest flicker of her eyes toward the head of the table, where no one is sitting, and a place is laid anyway. [i]Absent members.[/i]

*page_break
After supper the Club withdraws to the smoking room, which is a room for smoking, still, and nobody seems to have told Honora it's 2026. You wander. Nobody stops you. The house is huge and dark and every room is full of fur.

At the end of a long corridor there's a door standing half open, and a light on inside.

It's a trophy room. Stuffed heads on the walls: moose, elk, a bear. Glass cases of beaver pelts, stretched on hoops, dated in copperplate: [i]Fort Chipewyan, 1792. Grand Portage, 1799[/i]. Snowshoes crossed over the fireplace. A birchbark canoe, much less beautiful than Gisèle's. And, on the far wall, stretched flat and pinned out like a map, a great grey wolf pelt, the head still on it, the glass eyes yellow.

*if (took_hair) or (c_wolfhair)
  You go closer. You don't mean to. Your feet take you.

  *choice
    *selectable_if ((wits >= 30) or (took_hair)) #Look closely at the pelt. Really look.
      *set wits +2
      *clue c_pelt_room
      There are holes in it.

      Not moth-holes. Squares, three or four of them, the size of a playing card, cut out of the grey fur along the flank with something very sharp, the edges clean. You put your finger in one of them. The skin underneath is old and dry as paper.

      You stand there in the Beaver Club's trophy room with your finger in a hole in a dead wolf, and think of a hank of dry grey hair in an old woman's fist.
    #Don't. Get out of this room before someone finds you here.
      *set guarded %+5
      *set reckless %-5
      You back out of the room with the wolf's glass eyes on you all the way to the door.
*else
  The glass eyes of the wolf follow you round the room. You don't like it. You leave.

*page_break
"You found the good room."

Ruari is leaning in the doorway behind you, with a glass of the dark red in his hand, his bleached hair falling in his eyes, his bracelets clacking softly as he lifts the glass. He looks at the wolf, and then at you, and something moves under his face and is gone.

"She has the whole Hudson's Bay Company on these walls," he says. "Two hundred years of dead things. She comes in here to think." He pushes off the door frame and comes in. "I come in here to feel less like one of them."

He stops close to you. Too close. He smells of cold skin and old smoke and, very faintly, of something sweet, like the ghost of a club at five in the morning.

"You've not been bitten," he says, softly, looking at your throat. "Have you. Ever."

*choice
  *selectable_if ((des_ruari >= 15) or (reckless >= 55)) #"No. Are you offering?"
    *set fed_ruari true
    *set des_ruari +20
    *set reckless %+10
    *achieve fed
    *goto ruari_bite
  #"Is that what she sent you to do? Soften up the locksmith?"
    *set rel_ruari +10
    *set wits +2
    He laughs, low. "She didn't send me anywhere. She never does. She just leaves doors open and waits to see who walks through them." He looks at his glass. "You're right, though. It's what I'm for. Pretty and useless."

    "You keep saying that."

    "Aye, well." He knocks back the drink. "If I say it first, nobody else gets to."
  #"Tell me about 1998. The Solstice. The last night you were warm."
    *set rel_ruari +15
    *set guarded %-5
    His face goes still, and then something in it cracks.

    "A warehouse on Wellington," he says. "Down by the canal. Two thousand people and a sound system you could feel in your teeth. I was twenty-five and I'd been in Montréal a year and I'd never been so happy in my life." He touches the bracelets on his wrist, one after another, like a rosary. "At five in the morning I went out for air and there was a lady on the loading dock in a green dress. She asked if I was cold. I said [i]never[/i]." He smiles, and it's terrible. "Never been warm since."
    *remember ruari He told you about the Solstice rave, and the lady in green on the loading dock.
  #Step back. "I think I should find my coat."
    *set guarded %+10
    He steps back too, at once, with a little bow, as if it's a dance he's lost fairly. "Probably wise," he says. "Most people aren't."
*set n3_last "club"
*set wits +1
*return

*label ruari_bite
*page_break
He looks at you for a long second, as if checking that you meant it. Then he sets his glass down on the glass case of Fort Chipewyan beavers, very carefully.

"It doesn't hurt," he says. "Not if I do it right. And I always do it right." He puts one cold hand on the side of your neck, his thumb under your jaw, tilting your head. "Tell me to stop and I stop. That's a rule. Mine, not hers."

*if steam
  His mouth is cold at first, against your throat. Then it isn't. Then there's a pressure, sharp and brief, like a key turning in a very tight lock, and then heat, a flood of it, going out of you and into him and back into you somehow at the same time, rolling down through your chest and your belly and lower, like the first swallow of whisky after a long cold night.

  Your knees go. He holds you up, one arm round your back, pinning you against the glass case, and you can feel him shaking, his whole body, pressed against yours, and hear the soft sound he's making against your skin, not quite a moan. Your hands are in his bleached hair. You don't remember putting them there. You're hard, and he knows, and he makes a small helpless sound about it into your throat, and you can feel his heartbeat start, slow and heavy, like something waking up in a cold house because you've lit a fire in it.

  You could let him keep going. You want him to keep going. That's the dangerous part.
*else
  His mouth is cold at first, against your throat. Then it isn't. There's a pressure, sharp and brief, and then heat, a flood of it, going out of you and into him and back again, and your knees go, and he holds you up against the glass case, shaking.

*choice
  #"Stop." Say it. See if he means his rule.
    *set rel_ruari +15
    *set guarded %+5
    He stops.

    Instantly. He lifts his mouth from your neck as if you'd pulled a switch, and stands there holding you, breathing hard, with your blood on his lip, and his eyes, for a moment, completely red. Then they fade back to pale blue.

    "There," he says, a little unsteadily. "See? A rule."
  #Let him go on. A little longer.
    *set des_ruari +10
    *set reckless %+10
    *set nerve -2
    You let him. The room goes soft at the edges. The wolf's glass eyes blur. Somewhere a string quartet is playing Haydn very badly, very far away, and you're warm, warmer than you've been since you were a child, and then he stops on his own, pulling back with a gasp like a man surfacing from deep water.

He holds you there a moment longer, his forehead against your temple, dizzy, soft, his voice slurred with your blood.

"Sorry, love," Ruari murmurs.
*clue c_ruari_sorry

It goes through you like cold water.

*if c_voice
  [i]Sorry, love.[/i] Aimé, kneeling on the cold floor of a service tunnel, eyes closed, saying what the dead woman heard: [i]A young man's voice. Soft. An accent, not from here.[/i]

  Ruari's lips are at your temple. Right where the bruise was.

  You don't move. You don't let anything move in your face. You just stand there in his arms in the trophy room, with his mouth wet with your blood, and let your heart go very slowly, very carefully, the way you'd let a pin drop in a lock you don't want to trigger.

  He lets go of you. He licks his lip, and smiles, dreamy, and picks up his glass. "You taste like cheap coffee and good decisions," he says. "Come back anytime."
*else
  It's just a thing people say. It's just something a man says after he's taken something from you. You tell yourself so, three times, and it doesn't stop feeling like cold water.

  He lets go of you. He licks his lip, and smiles, dreamy, and picks up his glass. "You taste like cheap coffee and good decisions," he says. "Come back anytime."
*remember ruari You let him drink from you in the trophy room, under the wolf.
*set n3_last "club"
*set wits +1
*return

*label funeral_home
*page_break
*set visited_aime true
Salon funéraire Bélanger & Fils is on Wellington, four blocks from where you grew up: a red-brick building with white trim and a green awning, and a sign in gold script that's been there since before your father was born. You've walked past it a thousand times. When you were eight, you and the other kids used to dare each other to touch the door.

At two in the morning, the door is unlocked. Aimé's waiting inside in shirtsleeves and a rubber apron, with his glasses pushed up on his head, and a look on his face like a man who didn't expect you to come and is now deeply worried about the state of his hair.

"You came," he says. "Okay. Okay, good. I made tea. Do you want tea? I made it in a beaker. Sorry. The kettle broke in 2019."

*page_break
The prep room is in the basement: white tile, steel tables, a smell of cold and something chemical and sweet over it that reminds you, horribly, of your grandmother's care home. Under a white sheet on the nearest table, there's a shape you recognise.

"I haven't done anything to her yet," says Aimé, quietly. "The Conductor said to keep her as she was. For the Carillon. Or anyone." He hands you the tea. It's very strong and very sweet and it's in a beaker. "I thought you'd want to see her. Before."

*choice speak
  #"Thank you, Aimé. For looking after her."
    *set rel_aime +10
    *set guarded %-5
    He takes his glasses down and puts them on and looks at you through them as if checking you're real. "It's what we do," he says. "Someone has to be the last person who's gentle with them."
  #"Show me. Everything. Anything that doesn't look right."
    *set wits +2
    *set rel_aime +5
    Aimé nods, suddenly all business, and something steadies in him: this is a thing he's good at.
  #"You look terrible. When did you last sleep?"
    *set rel_aime +10
    *set wry %+5
    "Thursday?" He thinks about it. "Wednesday. There's a backlog. Everybody dies in February." He laughs weakly. "Thank you for noticing, though. Nobody notices. It's the ghoul thing."

*page_break
He folds the sheet back to her shoulders. Mireille Caron looks smaller on the steel table than she did on the platform floor, and older, and more peaceful. Aimé turns on a big round lamp on a steel arm and angles it down onto her face.

"Here," he says. "Look."

He takes a pair of tweezers and a magnifying glass and very gently parts the grey hair above her left ear, over the bell bruise.

"I didn't see it on the platform. It was too dark. But look." He moves the glass. "Right in the middle of the bruise."

Two punctures. Tiny, neat, a centimetre apart. You'd never see them unless you were looking, under a lamp, with a glass. They're almost hidden in the purple.

"Somebody bit her," says Aimé. "Very carefully, and not much. And then they hit her with the bell, right on top of it. Hard. To hide it." He puts the tweezers down. His hands are shaking. "The bruise isn't the wound. The bruise is the [i]cover-up[/i]."
*clue c_bite

*if not (aime_tasted)
  "There's something else I can do," Aimé says, not looking at you. "I didn't do it on the platform. There were too many people, and I... didn't want you to see." He swallows. "But it's been a day, and it's fading. If I'm going to, it has to be now."

  *choice
    #"Do it. Please."
      *set aime_tasted true
      *set rel_aime +5
      *clue c_voice
      He turns away from you to do it, so you can't see. He murmurs the Latin, too fast to follow. When he turns back he's wiping his mouth with a folded white handkerchief and his eyes are wet.

      "Cold," he says. "Cold hands on her face, holding her gently. A bell ringing in her ear. And a young man's voice. Soft. An accent, not from here. He said [i]sorry, love[/i]." He folds the handkerchief. "He said sorry."
    #"No. You don't have to. Not for me."
      *set rel_aime +15
      *set guarded %-5
      He looks at you. "Nobody's ever said that to me," he says. "That I don't have to." He puts the sheet back over her face, gently. "Thank you."
*page_break
"There's something else," Aimé says. "From before. From what I tasted on the platform." He's holding the edge of the sheet. "She had a daughter. She really did. She wasn't confused. The last clear thing in her, right under the cold, was a little girl at a kitchen table doing homework. Josée. Her name was Josée." He looks up. "She'd be fifty now. Somewhere. Not knowing she ever had a mother."

*choice
  #"Then we find Josée. After this is over. We tell her."
    *set mireille_daughter true
    *set rel_aime +10
    *set guarded %-5
    Aimé stares at you. "You can't just tell someone that," he says. "The Hush. She'd forget by morning."

    "Then we make it so she doesn't."

    He looks at you as if you've said something enormous and impossible and he'd like, very much, to believe it. "Okay," he says. "Okay. I'll write it down. Josée. I'll find her. For after."
    *remember aime You promised him you'd find Mireille's daughter, Josée, after.
  #"Write it down. On a card. Keep it."
    *set mireille_daughter true
    *set rel_aime +5
    Aimé takes a white index card from his apron pocket and writes, in his neat handwriting: [i]Mme Mireille Caron. The silver, on the mountain. A little girl at a kitchen table. Josée.[/i] He puts it in his breast pocket, over his heart.

    "I don't sell these," he says. "The important ones. I keep them."
  #Say nothing. There's nothing that helps.
    *set guarded %+5
    You don't say anything. Aimé puts the sheet back over her face, very gently, and turns off the lamp.

*page_break
Afterward you sit on the back steps of the funeral home in the snow, both of you, because Aimé says he needs air and you need not to be in that room. The yard backs onto the lane where you used to ride your bike. Across it, you can see the back of the apartment where you grew up, the kitchen window dark.

He has a cigarette he doesn't light. He just holds it.

"I don't smoke," he says. "It just gives my hands something to do. People get nervous when a ghoul doesn't have something in his hands."

*choice speak
  #"I'm not nervous."
    *set rel_aime +10
    He looks at you sideways. "No," he says. "You never were. That was the whole problem, in Sec 3." And then he goes pink to the ears, even in the cold, and looks at the snow very hard.
  #"What was it like? Growing up a ghoul, in Verdun?"
    *set rel_aime +10
    *set lore +3
    "Lonely," he says, simply. "My father told me when I was twelve. Took me down to that room and showed me. After that I couldn't tell anyone anything, because what would I say? [i]Hi, I eat a little bit of dead people, want to come over and play Mario Kart?[/i]" He turns the cigarette in his fingers. "So I didn't. I just sat on the stairs and ate my lunch and watched everybody else be normal. And watched you." He stops. "Sorry."

    "Don't be."
    *codex ghouls
  #"Aimé. The thing you said. In Sec 3. The crush."
    *set rel_aime +5
    *set wry %-5
    He puts his face in his hands. "Oh my God," he says, through his fingers. "Please don't. I've been trying to forget I said that since Saturday."

    "I'm not making fun of you."

    He looks at you between his fingers. "I know," he says, very quietly. "That's the worst part. You never did."
    *if rel_aime >= 30
      *choice
        #"In another life, Aimé."
          *set rel_aime +10
          He smiles, crooked, sad, and completely without self-pity. "In another life," he agrees. "I'd have asked you to the prom. You'd have said yes out of pity. I'd have stepped on your feet all night." He bumps your shoulder with his. "It would have been great."
        #Put your arm round him. Just for a minute.
          *set rel_aime +15
          *set guarded %-5
          You put your arm round his thin shoulders and he goes stiff with surprise, and then, slowly, leans against you, a cold small weight in the snow.

          "Okay," he says, very quietly. "Okay. This is good. This is enough." And you understand that he means it, and that it's true.
          *remember aime You sat on the back steps with your arm around him, in the snow.

He stands up at last and stubs out the cigarette he never lit. "Go," he says. "It's late. It's early. Whatever it is." At the door, he turns back. "Lacroix. If it happens again. Another one. Call me first. Before anybody. While it's fresh."
*set n3_last "aime"
*set wits +1
*return

*label keyman
*page_break
*set visited_keyman true
The Line is closed. The Conductor closed it last night, and it's still closed: at St-Viateur, Samir looks at you for a long moment through the flour-dust in the back of the bakery and then shrugs and lets you through anyway. "The old man's still down there," he says. "He sleeps down there. Nobody's ever figured out where else he'd go."

The platform is dark. The stalls are covered in tarps. The old blue train sits at the platform with all its doors shut, like a sleeping animal. Your footsteps echo off the tile. Somewhere a feu follet, left behind in a jar, knocks faintly against its glass.

At the far end, past the last stall, by the tunnel mouth, there's a small blue flame.

*page_break
The Keyman is sitting on an upturned milk crate beside his key-cutting machine, with a camping stove at his feet and a dented aluminium pot on it, making tea. There's a camp cot behind him against the tunnel wall, with an army blanket folded on it with great neatness. A transistor radio on a shelf. A single photograph pinned to the tile beside the cot: you can't see what of.

He looks up when you come into the light, and for a second his face does something complicated: pleasure, and confusion, and then a kind of polite, careful blankness, like a man who's been told many times not to trust his own face.

"You came back," he says. "The one I cut the key for."

"I did."

"Tea?" He's already reaching for a second cup: enamel, chipped. "It's Red Rose. The man at the dépanneur says they don't sell it in the rest of the world. I don't know if that's true." He pours. "Only in Canada, you say. Pity."

It's a line from an old TV commercial. From the eighties. Your father used to say it every single time he made tea. You'd forgotten until this second.

*choice speak
  #Take the tea. Sit down with him. "Thank you."
    *set rel_keyman +10
    *set guarded %-5
    You sit on another milk crate. The tea is terrible and very sweet, the way he's made it, three sugars without asking, the way you take it. You didn't tell him how you take it.
  #"Where did you learn that line? 'Only in Canada, you say'?"
    *set wits +2
    *set rel_keyman +5
    He frowns into the pot. "I don't know," he says. "It's just there. Like the song." He looks up at you, puzzled, almost frightened. "A lot of things are just there. I don't know where they come from. The Conductor says I shouldn't pick at them."
  #"How long have you been down here?"
    *set rel_keyman +5
    "Since 2011," he says. "March. They tell me I came down the stairs one night with good hands and no name and a page in my pocket, and I didn't know where I was." He hands you the tea. "The Conductor gave me this corner. The ghoul's father gave me the cot. People bring me locks. It's a good life." He says it like something he's decided to believe.

*page_break
The treadle on his key machine is broken. You can see it: the pitman arm that connects the foot-pedal to the flywheel has sheared at the pin, and he's tied it together with wire.

"It's been like that since Christmas," he says, following your eyes. "I can't find the part. They don't make it any more. They haven't made it since 1931."

*choice
  *selectable_if (hands >= 40) #Fix it. You can make the part. You've got a bench in your van and a file in your bag.
    *set rel_keyman +15
    *set hands +5
    *set guarded %-5
    You take off your coat. You take the arm off the machine, and look at the break, and then you get down on your knees on the cold tile and take a file and a length of brass rod out of your kit bag, and start making a pin.

    He watches. After a minute he gets down on the floor beside you and holds the arm steady while you file. Neither of you says anything. You work the way you've always worked, and he holds the part the way somebody always held it for you, when you were small, at a bench in a basement in Verdun, with the radio on.

    And then, as you're filing, he starts to hum.

    Six notes. Down, and up, and one held at the end.

    You hum it with him before you've decided to. The two of you, on your knees on the tile at the end of a railway that doesn't exist, humming the same six notes in the same key, filing a brass pin.

    When it's done, the treadle goes round smoothly for the first time since Christmas. He works it with his foot, up and down, up and down, and looks at you with his pale eyes shining.

    "You have my hands," he says. And then, embarrassed: "That's a silly thing to say. I don't know why I said that."
    *remember keyman You fixed his treadle with him, humming the same song.
  #Offer to bring him the part. You know a man in Lachine who has everything.
    *set rel_keyman +5
    *set charm +2
    "You'd do that?" He seems genuinely astonished. "For a stranger?"

    "You cut me a key for nothing."

    "That's different," he says. "I needed to." He doesn't explain what he means, and you don't think he could.
  #Say nothing about it. It's not your machine.
    *set guarded %+5
    He follows your eyes to the broken arm and back to your face, and something like disappointment goes through his, very faintly, as if you've failed a test neither of you knew about.

*page_break
"I'm sorry," he says. "I never asked your name. Last time. I cut you a key and never asked your name."

"{name}," you say. "{name} Lacroix."

He flinches.

It's not a big movement. But you see it go through his whole body, like a man touching a live wire: his hands jerk, the tea slops out of his enamel cup onto the tile, and for one second his face is completely naked, and terrified, and full of something. Then it's gone. He's looking at the spilled tea as if he doesn't know how it got there.

"I'm sorry," he says. "I'm so clumsy. It's the cold."
*clue c_flinch

*page_break
He shows you the box before you go.

It's a cigar box, Montecristo, the lid held on with an elastic band. He takes it down from the shelf by the cot and opens it on his knees with a kind of shyness, like a boy showing a stranger his rock collection.

"What I came with," he says. "In 2011. They let me keep it."

A St. Christopher medal on a broken chain. A transistor radio, dead, with an Expos sticker on the back, peeling. A key: brass, old, with a cross in a circle on the bow. And a piece of paper, folded in four, soft as cloth from being opened and closed.

He unfolds it. It's a page from a notebook, with a ragged torn edge along one side like a row of little teeth. A drawing, in pencil, in a hand like barbed wire: six buttons in a row. And under it, six numbers, crossed out, one by one, and written again, and crossed out again.

*if has_notebook
  You don't breathe.

  You take the notebook out of your jacket. Your grandfather's notebook, black oilcloth, the page three-quarters of the way through: [i]La serrure à chanson. Pour le fort. Voir S.[/i] And after it, the stub of the page that isn't there. A ragged torn edge. A row of little teeth.

  You hold them side by side in the blue light of the camp stove. The teeth fit.
  *clue c_torn_page

  The Keyman looks at the notebook, and at the page, and at you. His face is doing something you've never seen a face do: trying very hard to remember something, and being stopped, from the inside, by something that won't let him.

  *choice
    #"I think you're my father."
      *set keyman_told true
      *set rel_keyman +5
      *set guarded %-10
      He looks at you.

      And then his hands start to shake, and his breath starts to go, short, shorter, and he presses the heels of his hands into his eyes and makes a sound like a man being hit, and says [i]no, no, no[/i], and you catch the page as it falls from his knees.

      It takes ten minutes. You hold his shoulders. He rocks. When it's over he looks at you with his pale kind empty eyes and says, politely, "I'm sorry. I don't know what came over me. What were we talking about?"

      You understand, then. You can't just tell him. Whatever the Hush did to him, it's still holding. It will take the words away as fast as you can say them, and hurt him every time it does.

      "Nothing," you say. "Keys."
      *remember keyman You told him you thought he was your father. The Hush took it back in ten minutes.
    #Say nothing. Give him back his page. Watch his face.
      *set rel_keyman +10
      You fold the page along its soft old creases and put it back in his hands. He holds it against his chest, where the St. Christopher used to hang.

      "It's all I came with," he says. "I don't know what it means. But I know it's the most important thing I have."

      "I know," you say. "Keep it safe."
    #"Can I borrow it? Just for a night?"
      *set rel_keyman -5
      *set wits +1
      He goes pale and closes the box and holds it against his chest. "I'm sorry," he says. "I'm sorry. I can't. It's all I came with." He doesn't look at you again until you're halfway down the platform.
*else
  "I don't know what it means," he says. "But I know it's the most important thing I have." He folds it up again, carefully, along its soft old creases. "Isn't that strange? To have the most important thing in your life, and not know what it is?"

  You don't know what to say. You think of your grandfather's notebook, in the glovebox of the van, where you left it.
*set n3_last "keyman"
*set hands +2
*return
`);
