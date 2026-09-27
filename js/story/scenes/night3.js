NB.scene("night3", String.raw`
*mood snow
*chapter 3 The Small Hours
It snowed all day Sunday while you slept: forty centimetres, the radio says, the most since 2008. When you wake at five the city has gone quiet the way it only does under deep snow, every sound wrapped in cotton, the streetlights coming on one by one in a world gone soft and blue.

You make coffee in the moka pot your mother brought from Newfoundland and never once used properly. You stand at the window in your socks and drink it, and watch a man across the street dig his car out with a dustpan, very slowly, with enormous dignity.

*if photo = "fridge"
  On the fridge, under the pizza magnet, a man and a boy look out at you from a summer you don't remember.
*elseif photo = "wallet"
  You can feel the Polaroid in your wallet against your hip, like a hand.
*elseif photo = "drawer"
  You don't open the kitchen drawer. You can feel the Polaroid in there anyway.
Your grandmother's key hangs round your neck now, on its chain, under your shirt, with her gold cross. The Keyman's key is on your keyring with the van's. You keep touching them, the way you touch a sore tooth with your tongue.

Two nights. Two nights ago you were a locksmith who ate Jos Louis in a van. Now you know the names of a ghost and a ghoul and a djinn, and a woman who didn't know her own name is dead in a funeral home in Verdun, and somebody wants a war.

The coffee's gone cold. You put your boots on.

*page_break
Chez Normande on a Sunday night after a blizzard is almost empty: the old man in the velvet jacket asleep over his cognac, Normande doing the crossword in pen, and the jukebox, playing Barbara, very softly, to itself.

Fleurette is sitting on top of it in a quilted pink dressing gown with a turban round her head and cold cream on her face, which is, you're fairly sure, a statement.

"You're early," she says. "I'm not receiving."

"You're dead."

"Even the dead need an evening off, chéri." She sighs, and waves a hand, and the cold cream is gone, and the turban, and she's in a black cocktail dress and pearls, and the wig is back, and her face is done, all in the time it takes you to blink. "There. Happy? Sit. We need to talk about your night."

You sit on the stool by the jukebox. Normande puts a coffee in front of you without looking up from the crossword. It has something in it that isn't coffee.

*page_break
"Here is what I know," Fleurette says. "I know that everybody in the Veillée wants a piece of you tonight, and that every one of them has sent an invitation, and that you've got six hours until dawn." She holds up a long nail for each. "Your hunter wants you at the towers. Your wolf wants you at his church. The Beaver Club wants you at supper. A djinn wrote you a note on your windshield. And the whole of the Line knows you've been asking about the Keyman."

"How do you know all that?"

"The dead hear everything that's said in bars," says Fleurette. "And everybody who's anybody drinks." She leans down from the jukebox, suddenly serious. "Which is why I'm going to make you an offer, chéri. From now on, any night, anywhere, you open that compact and you ask me whatever you like. Who someone is. What they want. What happened in 1967. I'll tell you what the dead know. I don't know everything." A small, rueful smile. "But I know more than anyone alive would like."
*set fleurette_open true
*set rel_fleurette +5

[b]You can now ask Fleurette questions from your Journal.[/b] [i]New questions appear as you learn more. The dead hear everything.[/i]

*choice speak
  #"Why would you do that for me?"
    *set rel_fleurette +5
    *set guarded %-5
    She looks at you for a long moment. "Because you can see me," she says. "Do you know how long it's been since somebody looked at me and saw a woman instead of a jukebox? Nine years. Nine years, chéri, of sequins for nobody." She sniffs. "And because you're going to get yourself killed without me, and I'd hate to share the jukebox."
  #"What's it going to cost me?"
    *set wits +1
    *set rel_fleurette +3
    "Oh, I'll think of something," Fleurette says airily. "I'm a woman of expensive tastes. When the time comes, I'll ask. And you'll say yes, because you're a gentleman." She pats your head without touching it. "You are a gentleman, aren't you? Under the smell?"
  #"Deal."
    *set rel_fleurette +5
    *set reckless %+5
    "Deal," says Fleurette, delighted. "Oh, I've missed that word. Nobody makes deals with ghosts any more. They just call priests."

*page_break
"And before you go running off," Fleurette says, "lay it out. Everything you've got. All of it, on the bar, where we can see it."

So you do. You take out your phone and your grandmother's key and the Keyman's key and the napkin with the hair in it, if you took it, and Ruari's cream-coloured card with the beaver in the wax, and you say it all out loud, in order, to a ghost and a bartender doing a crossword: the phone call and the phrase, the lock and the song, the bruise at Mireille Caron's temple the exact shape of a Carillon handbell, the wolf hair in her fist, the voice that said [i]sorry, love[/i], if Aimé tasted her; the bracelets on Ruari's wrists; an old man on the Line who hums your grandfather's song.

It sounds, out loud, like the plot of one of your podcasts. It sounds like somebody else's life.

"Now," says Fleurette. "Which of those go together?"

"What do you mean?"

"I mean, chéri, that clues are like men. One on its own tells you nothing. Two, side by side, tell you everything." She taps the bar where the napkin lies, and the card. "Put them next to each other. See which ones fit. Some of them will fit and be lies." She shrugs. "Also like men."

[b]The clue board is open in your Journal.[/b] [i]Pick two clues and connect them. A right connection becomes a deduction you can act on later. A wrong one can still look right.[/i]

*page_break
It's ten to eleven. The snow has started again outside, softer now. The city's full of places you could be.

"Six hours until dawn, chéri," says Fleurette. "You can't be everywhere. Choose who you'd like to know better." She picks up an invisible something from the top of the jukebox and holds it out to you, and when you put out your hand, there's a matchbook in it: black, with a red rose on the cover, and gold letters: [b]LE MARDI GRAS[/b]. And on the inside, in a hand like a flourish of a sword, [i]Any hour before dawn.[/i]

"That," says Fleurette, "has been in your pocket since you walked in. I didn't put it there." She looks at it the way you'd look at a very beautiful snake. "Somebody is very interested in you, chéri. Somebody who doesn't usually need to send invitations."

*label hub
*page_break
*pips hours 6 Hours until dawn
*if hours = 6
  It's eleven o'clock. The night is all in front of you.
*elseif hours = 5
  It's midnight. Somewhere across the city, a church bell counts it out, and you find yourself listening for anything wrong in it.
*elseif hours = 4
  It's one in the morning. The snowploughs are out, their orange lights sweeping the fronts of the buildings.
*elseif hours = 3
  It's two. The bars are emptying onto the sidewalks, all over the city: laughter, a car horn, somebody singing.
*elseif hours = 2
  It's three in the morning. The dead hour. Your father's hour. The hour the phone always rang.
*else
  It's four. One hour left before the sky starts to think about grey.
*if hours < 6
  Where to now?
*choice
  *hide_reuse *selectable_if (hours >= 2) #@dario Saint-Jude, in Saint-Léonard. Dario said the pack eats at eleven and to come hungry. (Two hours.)
    *if n3_order = ""
      *node n3_first dario
    *set n3_order &"D"
    *set hours -2
    *gosub_scene night3b saint_jude
  *hide_reuse *selectable_if (hours >= 2) #@lazare Place d'Armes, under the towers of Notre-Dame. Lazare said he'd be on patrol, and that you could come. (Two hours.)
    *if n3_order = ""
      *node n3_first lazare
    *set n3_order &"L"
    *set hours -2
    *gosub_scene night3b patrol
  *hide_reuse #@rose The matchbook. Le Mardi Gras, on the Main. (One hour.)
    *if n3_order = ""
      *node n3_first rose
    *set n3_order &"R"
    *set hours -1
    *gosub_scene night3b mardi_gras
  *hide_reuse #@nadim The top of the Jacques Cartier Bridge. [i]Tomorrow. The bridge. At the top.[/i] (One hour.)
    *if n3_order = ""
      *node n3_first nadim
    *set n3_order &"N"
    *set hours -1
    *gosub_scene night3b bridge
  *hide_reuse #Buanderie Pépin, in the Pointe. Fleurette says an old witch there knew your grandfather. (One hour.)
    *if n3_order = ""
      *node n3_first gisele
    *set n3_order &"G"
    *set hours -1
    *gosub_scene night3c buanderie
  *hide_reuse *selectable_if (hours >= 4) #@ruari Strachan House, on the mountain. The Beaver Club's supper, half past midnight. (Two hours.)
    *if n3_order = ""
      *node n3_first club
    *set n3_order &"C"
    *set hours -2
    *gosub_scene night3c beaver_club
  *hide_reuse #@aime Salon funéraire Bélanger, in Verdun. Aimé is up all night. Mireille Caron is downstairs. (One hour.)
    *if n3_order = ""
      *node n3_first aime
    *set n3_order &"A"
    *set hours -1
    *gosub_scene night3c funeral_home
  *hide_reuse #@keyman Down to the Line, closed for the night, to find the Keyman. (One hour.)
    *if n3_order = ""
      *node n3_first keyman
    *set n3_order &"K"
    *set hours -1
    *gosub_scene night3c keyman
  *if (hours < 6) #Go home. Sleep before the sun comes up, for once in your life.
    *set hours 0
    *set n3_last "home"
    *goto dawn
*if hours > 0
  *goto hub
*achieve six_hours
*goto dawn

*label dawn
*page_break
At ten to six your phone rings.

*if n3_last = "lazare"
  You're still on the roof with Lazare when it happens: his phone first, and then yours, and then, from every direction, the bells.
*elseif n3_last = "dario"
  You're in the cab of Dario's tow truck outside Saint-Jude, both of you half asleep, when every wolf in the church starts howling at once, and Dario sits up like somebody's put a knife in him.
*elseif n3_last = "home"
  You're in bed, not asleep, staring at the ceiling, when the compact on your nightstand clicks open all by itself.
*else
  You're in the van, driving home through the snow, when the compact in your pocket clicks open all by itself.
"Chéri," says Fleurette's voice, very small. "There's another one."

*page_break
*art 3
The stairs up the mountain start at the top of Peel Street, where the city runs out and the trees begin: a long zigzag of wooden steps climbing through the dark woods toward the lookout, three hundred of them, with the cross somewhere above you all the way up, white against the sky. In summer they're full of joggers. Tonight they're a ramp of blue snow with one line of footprints going up them, and none coming down.

At the bottom of the stairs there's a man lying on his back in the snow.

Fifties. A green army-surplus parka, a beard, hands in fingerless gloves. The kind of man who sleeps in the métro in winter and whom you've stepped around your whole life without seeing. His face is peaceful. At his left temple there's a bruise, dark purple going black: a curve, the width of the lip of a handbell.

*if (n3_last = "lazare") or (n3_last = "dario")
  You got here first, before anybody. It's still dark.
*else
  You got here first, before anybody. It's still dark.
Your hands are shaking. You make them stop.

*temp looked 0
*label body2
*choice
  *hide_reuse #Look at the snow around him.
    *set looked +1
    *set wits +1
    *clue c_kandi_bead
    One line of footprints comes down Peel to the bottom of the stairs, his: big boots with the tread worn flat. There's a scuffle where he fell. And beside his hand, pressed into the snow as if somebody knelt on it, a single bright spot of colour.

    A plastic pony bead. Pink. The kind you string on a cord to make a bracelet.

    You pick it up with your glove and look at it for a long time. Then you put it in your pocket.
  *hide_reuse #Look at his hands.
    *set looked +1
    His right fist is clenched. When you open it, there's grey hair in his palm, coarse and dry.

    Of course there is.
  *hide_reuse #Go through his pockets. Find out who he was.
    *set looked +1
    *set lore +2
    In the inside pocket of the parka, in a Ziploc bag with a métro card and a St. Christopher medal, there's a photograph, laminated, soft from handling: a group of boys in black cassocks, maybe twelve years old, lined up in front of a great stone door. There's a date written on the back in felt pen, [i]Pentecôte 1994[/i], and a name circled: [i]Guy.[/i]

    You recognise the door. It's the door at the foot of the towers of Notre-Dame.
  *hide_reuse *if (c_bellmark) #Look closer at the bruise. The same as Mireille's?
    *set looked +1
    *set wits +1
    The same. Exactly the same. The same curve, the same width, the same place above the left ear. Whoever did this has done it before, and they know exactly where to strike.
*if looked < 2
  *goto body2

*page_break
They come in the next ten minutes, in the order they always seem to come.

Agathe first, alone, running up Peel in the snow with her bell in her fist. She stops dead when she sees the body, and crosses herself, and kneels, and looks at the photograph in the Ziploc bag, and says, very softly, "Oh, [i]Guy[/i]."

"You knew him."

"He was a novice. Years ahead of me. He left in the nineties." She's white. "He was unmade. They said he'd seen something, a long time ago, and had to be let go. I thought he'd moved to the Gaspé. That's what they told us." She looks up at you. "He was sleeping in the métro?"

*if patrolled
  Lazare comes up Peel a minute later, breathing hard, his coat open. He was with you until an hour ago. He looks at Guy's face, and at the bruise, and at the photograph, and his jaw goes tight as a fist.

  "Brother Guy," he says. "He taught me to ring the tenor bell. When I was ten." He turns away and stands with his back to all of you, looking up the stairs at the cross.
*else
  "Where's Lazare?" you say.

  Agathe's face closes. "On patrol," she says.

  "He isn't on patrol. Is he."

  She looks at you for a long moment. "He asked me to cover for him tonight," she says finally, quietly. "From one till five. He does, sometimes. I don't ask where he goes." She looks down at Guy. "I didn't ask."
  *clue c_lazare_absent

  Lazare comes up Peel ten minutes later, in a hurry, his hair wet, his scarf wound high around his throat as if to hide something. When he sees the body he stops so suddenly he slips in the snow.

  He doesn't meet your eyes. You notice that. You notice, as he crouches by Guy and his scarf shifts, a dark mark on the side of his neck, just under his jaw, that looks very much like someone's mouth.
*if visited_dario
  *if n3_last = "dario"
    Dario is right behind you, of course. He came up in the truck with you. He stands at a careful distance from the body with his hands in his pockets and his face grey.
  *else
    Dario turns up last, in the tow truck, with its hazards going. His toque is on crooked. He doesn't look at Lazare, very hard. You remember that he went out, around three, and didn't say where.
*else
  Dario turns up last, in the tow truck, with its hazards going. He looks at the wolf hair in the dead man's fist and makes a sound like he's been punched.

*page_break
"Two," says Agathe. "Two in two nights."

"Both of them unmade," you say. "Both of them starting to remember. Both of them with a bell bruise and wolf hair." You look from one of them to the other. "Somebody's cleaning up."

Nobody answers. The snow comes down. Above you, three hundred steps up the mountain, the cross goes out, the way it does every morning at dawn, and the sky behind it is the colour of dishwater.

*if took_hair
  *if visited_dario
    Dario catches your eye and gives you a tiny nod. [i]Dead hair.[/i] He knows it too, now.
Lazare stands up. He takes the photograph in its Ziploc bag and puts it in his coat, over his heart, and says, to nobody in particular, "I'll find who's doing this." And then, to you: "Go home, {name}. Go home and lock your door."

It's the second time someone's told you that in two nights. You're beginning to understand that it means nothing at all.

*page_break
When you get home, just after seven, there's an envelope on your doormat. There's no stamp, and no footprints in the snow on the stairs.

The paper is heavy and red. Inside, a card, black, with a single red rose on it, and gold letters:

[i]Monsieur Lacroix is invited to Le Mardi Gras, tomorrow night, for the last hour before Lent. The whole Veillée will be there. Come at midnight. Wear something you can move in.[/i]

*if saw_rose
  *if danced_won
    Under it, a line in the same hand like a sword stroke: [i]Save me the dance you promised. —R.[/i]
  *else
    Under it, a line in the same hand like a sword stroke: [i]I'll hold you to the dance. —R.[/i]
*else
  Under it, a line in the same hand like a sword stroke: [i]I've been waiting a long time to meet you. —R.[/i]

*if n3_order = ""
  *text dario u didn't come to dinner. nonna's lasagna waits for no one 😤
*if visited_dario
  *text dario thanks for coming tonight. the pack liked u. i liked u. manon says ur "acceptable" which is a lot from manon
*if patrolled
  *text lazare Thank you for tonight. I'm sorry about how it ended.
*if fed_ruari
  *text ruari you taste like cheap coffee and good decisions x
*text aime Two now. I heard. Are you ok? Call me when you wake up.
*set hush 70
*page_break Night Four
*goto_scene night4
`);
