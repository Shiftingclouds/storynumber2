NB.scene("night8", String.raw`
*mood eve
*chapter 8 The Eve [8]
*temp laz_free false
*temp laz_self true
*temp reqs 0
*if lazare_left_carillon or (path = "wolves")
  *set laz_free true
*if lazare_rehushed and (not(lazare_restored))
  *set laz_self false
*codex nuit_blanche
Friday. The last day before.

The city doesn't know. That's the strangest part. You drive the van down Wellington at two in the afternoon, past the dépanneur and the Portuguese bakery and the church, and everything's ordinary. People carrying groceries. A man shovelling a walk. A bus. And on every lamp post, on every bus shelter, on the side of every métro car, the same poster: a white moon on a dark blue sky, and a crowd of tiny people in the snow, looking up.

[b]NUIT BLANCHE À MONTRÉAL. SAMEDI 28 FÉVRIER. DU CRÉPUSCULE À L'AUBE.[/b]

Half a million people in the streets tomorrow night. Art in the métro stations. Light shows on the buildings. Soup kitchens and fire pits and poetry readings at four in the morning. Every screen in the Quartier des spectacles lit up till dawn. The whole island, awake, together, in the dark.

And at 3:33 in the morning, the Hush will run out over all of them.

*page_break
Your phone doesn't stop.
*if dentist = "date"
  *text philippe Are you going to Nuit blanche tomorrow? I'm taking my sister's kids to the light show at Place des Arts. They're 8 and 11. They've never stayed up past midnight.
  *text philippe Also I had the strangest dream about a wolf on Saint-Laurent. You were in it.
  *text philippe That's not a line. Well. It's a bit of a line.
*elseif dentist != ""
  *text philippe Hi it's Philippe. The dentist. Are you doing Nuit blanche? Everyone's doing Nuit blanche.
*if called = "marc"
  *text marc I'm driving down tomorrow. For Nuit blanche. I haven't been since we went together.
  *text marc I keep thinking about Monday night. Waking up and needing to hear your voice.
  *text marc Can I see you? Even for five minutes. Even at 4 in the morning at a soup tent.
  *choice
    #"Yes. Come. I'll find you."
      *set guarded %-10
      *text me Yes. Come. I'll find you.
      *text marc ❤️
      *text marc (sorry. that was a lot. but ❤️)
    #"Not tomorrow. Tomorrow's not a good night. I'll explain someday."
      *set guarded %+5
      *text me Not tomorrow. Please. Stay in Toronto tomorrow. I'll explain someday.
      *text marc …ok. that's the scariest text anyone's ever sent me
      *text marc be careful {marcname}
    #Don't answer. You can't. Not today.
      *set guarded %+10
      The dots appear, and disappear, and appear. And stop.
*text normande Fleurette won't stop talking about "the screens." Come by before she drives me to drink. More than usual.

*page_break
*if keyman_safe
  Your father is in your apartment when you get home, fixing your radiator.

  He's on his back on the floor under the window with his head behind the pipes and a wrench in his hand, in your old jeans, which are too long for him, and he's humming. He's been at it for two hours, he says. It's been banging since 2021. It's a very badly fitted radiator.

  "Pass me the eleven," he says, without looking, holding out his hand. And you do, without thinking, the way you did when you were nine: you put the eleven-millimetre wrench into your father's palm, and his fingers close on it, and he says [i]merci, mon grand[/i], and neither of you says anything else for a very long time.
  *if keyman_known
    Later, he sits at your kitchen table with a cup of Red Rose and looks at the Polaroid on the fridge. "Tomorrow," he says. "The fort." He turns the cup. "I kept that door for fifteen years. I know every stone of it. Whatever you decide to do, {name}, I'll be there. I'll hold anything you need held."
  *else
    Later, he sits at your kitchen table with a cup of Red Rose and looks at the Polaroid on the fridge for a long time, with a small puzzled frown, the way you'd look at a word in a language you're only just learning. "That's my writing," he says, at last. "Isn't it." It isn't a question any more.
*elseif keyman_taken
  Your apartment's empty when you get home. The radiator's banging.

  You sit at your kitchen table and look at the Polaroid on the fridge. [b]S. + {name}. AOÛT 2009.[/b] Somewhere on the mountain, in a cellar with your grandfather's lock on it, your father's asleep in iron beside a djinn, and tomorrow night they'll bring him to the fort in case you won't turn the key.

  You put the keeper's key on the table beside the Polaroid. And your grandmother's little key beside it. You sit there for a long time.

*page_break
*portrait fleurette smile
At seven, the compact clicks open on the table by itself.

"[i]Chéri.[/i]" Fleurette's voice is different tonight. Not the foghorn in sequins. Smaller. "Can I ask you something? It's a favor. A real one. I've never asked you for anything."

"Anything."

"Don't say anything. You don't know what it is yet." A pause. "Tomorrow night there'll be screens everywhere downtown. Place des Arts. The Quartier des spectacles. The big one on the side of the UQAM building, the one they play the films on. Every screen in the city, all night, with half a million people looking up at them." Her voice goes very quiet. "Normande's nephew runs the screens. The light show. He's a good boy. He owes her for a car."

"Fleurette."

"At last call," says Fleurette. "At three. Before whatever happens, happens. I'd like my name up there. On every screen. Just for a minute. [i]Madame Fleurette.[/i] Where the whole city can see it." A breath. "Ghosts stay as long as nobody alive remembers their name, [i]chéri[/i]. You know that. You know what happens when they do."

*choice speak
  #"I'll put your name on every screen in the city. I promise."
    *set fleurette_plan true
    *set rel_fleurette +15
    *set guarded %-10
    The compact is quiet for so long you think she's gone.

    "You promise," she says finally. "Oh, chéri. Nobody's promised me anything since Jimmy, with the diamonds." A sound that might be a laugh or might be something else. "Don't you dare make me cry. It ruins the lashes, even dead."
    *remember fleurette The night before Nuit blanche, you promised to put her name on every screen in the city.
  #"If your name goes up, you'll go. Won't you. Is that what you want?"
    *set fleurette_plan true
    *set rel_fleurette +10
    *set wits +2
    "I've been on that jukebox since 1983," says Fleurette. "Forty-three years, chéri. Every Tuesday it's karaoke. Do you know how many times I've heard 'I Will Survive' sung by accountants?" A pause. "I want to go. I want to go with my name in lights. I've always wanted to go with my name in lights." Her voice cracks. "Yes. That's what I want."
    *remember fleurette She told you she wants to go, with her name in lights. You said you'd do it.
  #"Not tomorrow. Tomorrow I need you here. With me. I'm sorry."
    *set rel_fleurette -5
    *set guarded %+10
    The compact is quiet. "Of course," she says, lightly, too lightly. "Of course, chéri. What was I thinking. The night of the century and I want a billboard." A pause. "Another year. There's always another Nuit blanche." She clicks shut. You don't hear from her again till ten.

*page_break
*art 8
Buanderie Pépin at ten o'clock on the last Friday in February is full.

Every dryer is going. Every chair's taken, every washer's got somebody sitting on it. The card table's been pushed against the wall and it's covered in maps: old ones, yellow, hand-drawn, of Île Sainte-Hélène, of the fort, of the powder house and the tunnels under it, in a hand you know. Your grandfather's.

And they came. You didn't know if they would. They came.
*if laz_free and laz_self
  Lazare, on a plastic chair by the dryers, in a borrowed sweater, with no bell, very upright, like a man in church.
*elseif laz_free
  Lazare, on a plastic chair by the dryers, in a borrowed sweater, with no bell. He doesn't know most of these people. He came because Dario asked him, and because, he says, he has a feeling in his chest like a word on the tip of his tongue.
*else
  Lazare isn't here. He's in the tower. But your phone's on the card table with a call open and his face on it, pale and serious, lit by a candle, and behind him you can see the stone of La Persévérance.
Dario, sitting on a washing machine with his boots swinging, in his toque, eating a bag of chips from the vending machine.
*if not(manon_cut)
  Manon, beside him, with her arm still in a sling, doing Monique's crossword.
*else
  Big Réjean, beside him, where Manon would have been, looking at his hands.
Aimé, in his black suit, by the door, holding a tray of date squares from his mother, which he offers to everyone every ten minutes.
*if keyman_safe
  Your father, at the card table, bent over your grandfather's maps with his loupe, his finger on the powder house, not talking.
*if clarke_turned
  The Conductor, in his porter's cap, in the one armchair, with his ledger on his knee.
*if honora_turned
  And, astonishingly, in the corner by the Coke machine, in a fur coat, with her small gloved hands folded, Honora Strachan. Nobody's sitting within three metres of her. Yolande keeps looking at her throat.
*if agathe_turned
  Agathe, in her black coat, at the window, with the stolen bell's twin in her hand, the one she signed out on the second and brought back, and looking at nobody.
*if invited_rose
  And Rose. In the doorway, in black, with his cane, not quite in. Gisèle is looking at him the way a cat looks at a snake.

  "You invited [i]him[/i]?" she says to you.

  "The city invited him," says Rose, pleasantly. "I only came to watch."

  "Well, you can watch from the step," says Gisèle. And he does. He sits down on the laundromat's front step in the snow in his beautiful coat and watches through the glass, and seems, if anything, delighted.
And Gisèle, eighty-six, in her purple cardigan with a du Maurier, standing in the middle of it all, looking at you.

"Right," she says. "Everybody shut up."

*page_break
*portrait gisele neutral
"Tomorrow night," says Gisèle, "at three thirty-three, the Hush runs out. Fifty-nine years to the minute. Everybody on this island who's been asleep since 1967 wakes up." She taps ash on the lino. "Half a million of them'll be in the streets for this [i]Nuit blanche[/i], God help us, drunk on mulled wine and looking at a light show. And every vampire and wolf and ghost and witch in this city'll be standing next to them, in plain sight, for the first time since Expo."

Nobody says anything.

"There's three things you can do about it, boy." She holds up one finger, yellowed with nicotine. "One. You go to the fort and you close that lock again, with the djinn inside. Like the Compagnie wants. The Hush comes back. Everybody goes back to sleep. Nothing changes. For another fifty-nine years." A second finger. "Two. You break it. For good. Let the djinn go, and let the city wake up and see us, and God help all of us, because the last time that happened was 1966, and the old man in the tower buried eleven children." A third finger. "Three."

She looks at the chain round your neck.

"Three, you do what Aurèle built that little key for."

*page_break
*if know_other_key
  "It turns the lock into a question," you say. "For the one inside. Whether he'll stay, and on what terms. And he can say no."

  Gisèle stares at you. The cigarette stops halfway to her mouth.

  "Lucille told you," she says. And then, very quietly, to nobody: "Of course she did. Of course she knew. Fifty years round her neck." She puts the cigarette down. "Yes. That's what it does. It makes a Hush that the one holding it has agreed to. A lullaby somebody chose to sing." She looks at you. "It's the only kind of Hush that doesn't rot. And it's never been done, because nobody who's ever made one has ever been willing to ask."
*else
  "What's it for?" you ask. "Mémé said it was for the other thing."

  "It turns the lock into a question," says Gisèle. "For the one inside. Whether he'll stay, and on what terms. And he can say no." She looks at you. "It makes a Hush the one holding it has agreed to. A lullaby somebody chose to sing. It's the only kind that doesn't rot. And it's never been done, because nobody who's ever made one has ever been willing to ask."
  *set know_other_key true

"But you can't just turn a key," Gisèle says. "Not for that. There's four things you need, and if you're missing one, it doesn't work, and you've made a mess on the one night the whole city's awake to see it." She counts on her fingers. "The little key, round your neck. A witch to weave it, because a new Hush isn't a lock, it's a spell, and it's a hell of a spell. A voice the whole city can hear, to sing it over them. And the djinn has to say yes." She looks at you. "Freely. Not because he owes you. Not because you wished it. Yes."

*page_break
"So," says Gisèle. "Which is it, boy?"

The whole laundromat is looking at you. The dryers go round.

*choice
  #"We close it. With Nadim inside. It kept the peace for fifty-nine years. I don't know how to keep it any other way."
    *set intent "close"
    *set guarded %+10
    *set rel_nadim -10
    *set rel_bourdon +10
    Nobody says anything for a long time. Dario looks at his hands. Aimé puts the date squares down.
    *if laz_free
      Lazare says, very quietly, "He'll be in the dark again. Fifty-nine more years."
    Gisèle looks at you for a long time over her glasses. "Well," she says at last. "You're a Lacroix." It isn't a compliment. It isn't quite an insult, either. "Your grandfather would understand you. God help you."
  #"We break it. Let him go. Let the city see. Whatever happens after, it happens with everybody awake."
    *set intent "break"
    *set reckless %+10
    *set rel_nadim +10
    *set rel_dario +5
    The laundromat goes very quiet.

    "The Carillon," says Lazare, from his chair or from the phone. "There'll be people who panic. People who go looking for wolves with shotguns. Children..."

    "I know."

    "And you'll do it anyway."

    "I've spent fifty-nine years' worth of people asleep. I want to see what they do awake." You look round the room: the wolves, the witches, the ghoul with his date squares. "I want to see what [i]we[/i] do."

    Gisèle takes a long drag on her du Maurier. "God help us," she says. And then, unexpectedly: "About time."
  #"We ask him. We make a new one. One he says yes to."
    *set intent "remake"
    *set rel_gisele +10
    *set rel_nadim +10
    *set wry %-10
    Gisèle Pépin looks at you for a long, long moment. Then she puts her cigarette down in the ashtray the size of a hubcap, and folds her hands.

    "Aurèle's grandson," she says, and her voice isn't quite steady. "Standing in my laundromat. Asking me to finish what he started." She takes off her glasses and wipes them on her cardigan. "Right. Right. Then let's see what you've got."
  #"I don't know yet. I want to see him first. Nadim. I want to ask him before I decide anything for him."
    *set intent "ask"
    *set wits +2
    *set rel_nadim +10
    "Good answer," says Gisèle, grudgingly. "Irritating. But good." She picks up her cigarette. "Then you'd better have all four things in your pocket when you get there, in case he says what I think he'll say."

*page_break
*if (intent = "remake") or (intent = "ask")
  *goto requirements
*goto plan

*label requirements
"The key," says Gisèle.
*if meme_key
  *set reqs +1
  You pull it out on its chain, from under your shirt: the little gold cross, and behind it the small brass key with the cross in a circle. The whole laundromat leans in to look. Monique stops knitting.

  "Lucille's," Gisèle says softly. "Round her neck for fifty years. Good. One."
*else
  You don't have it. You never went to see Mémé on Saturday; or you did, and you didn't get it. Gisèle's face falls, just a little.

  "Then that's one we'll have to find," she says. "Lucille's still got it, maybe. Ask her. Tonight, if you have to."

"The witch," says Gisèle.
*if favor_gisele or (rel_gisele >= 30)
  *set reqs +1
  *set ally_gisele true
  She looks at you over her glasses. "You've got a Pépin favor in your pocket, or near enough," she says. "And even if you didn't, I've waited fifty-nine years to unmake that man's mistake." She stubs out her cigarette. "I'll weave it. The girls'll help. It'll take all five of us, and the dryers, and a great deal of gin. Two."
  *remember gisele At the council, she said she'd weave the new Hush. It would take all five of them, and the dryers, and a great deal of gin.
*else
  She looks at you over her glasses for a long time. "I don't know you, boy," she says. "I knew your grandfather, and he broke my heart and built a cage. I'll need to be sure about you." She taps ash. "I'll be there tomorrow. I'll decide at the lock."

"A voice," says Gisèle. "The whole city has to hear it. Every sleeper on the island, all at once. So who's singing?"

*choice
  *if (fleurette_plan) #Fleurette. On every screen in the city, at last call. Half a million people will already be looking up.
    *set voice "fleurette"
    *set reqs +1
    *set rel_fleurette +10
    From the compact on the card table, a sound like a woman sitting down very suddenly.

    "Me?" says Fleurette. "[i]Me?[/i] Sing a whole city to sleep? On every screen?" A pause. "Chéri, I've been waiting my whole death for that booking."
  *if (ally_angel) #The angel. It's been trying to speak to the city for fifty-nine years. Ask it to sing instead.
    *set voice "angel"
    *set reqs +1
    *set lore +3
    Gisèle goes very still. "The bell," she says. "Jean-Baptiste."

    "It knows the song. The song is its name. My grandfather stole it with a tuning fork." You look at her. "I think it'd like to give it back, properly. To everyone."

    Gisèle looks at you for a long time. "Aurèle's grandson," she says again, and shakes her head. "God help the angels."
  *if (invited_rose) #Rose. He's been singing people into things for three hundred years. And he can go anywhere now.
    *set voice "rose"
    *set reqs +1
    *set rel_rose +10
    Everyone turns to look at the front window, where a beautiful man in a black coat is sitting on the step in the snow.

    Rose puts his gloved hand on his heart, through the glass, and bows his head.

    "Oh, for God's sake," says Gisèle. But she doesn't say no.
  *if (role_bells = "") #The song itself. Ring it on the bells of Notre-Dame, like a peal, over the whole island. Somebody who knows the ropes.
    *set voice "bells"
    *set reqs +1
    *set wits +2
    "The bells," says Gisèle slowly. "The six notes, on the bells." She looks at the phone, or at Lazare. "You'd need a ringer. A good one. Inside the tower."
  #"I don't know yet."
    *set voice ""
    "Then find out," says Gisèle. "By three tomorrow."

"And the djinn," says Gisèle. "Has to say yes."

"He's in chains in Honora's cellar."

"Then you'd better ask him in your sleep," says Gisèle, and doesn't explain.
*if honora_turned
  In the corner by the Coke machine, Honora Strachan lifts her small gloved hand. "He'll be in the courtyard at eleven tomorrow night," she says, "being put into a car. I can arrange for you to have five minutes with him in the back seat." Everyone stares at her. "What? I said I'd tidy."

*label plan
*page_break
*portrait gisele smirk
"Right," says Gisèle. "Whatever you do at the lock, you can't do it alone, and you can't do it if you can't get there." She spreads your grandfather's map across the card table and stabs it with a nicotine-yellow finger. "Four jobs. Four people. Choose right, or somebody dies."

She counts them off.

"[b]The Door.[/b] The powder house on Île Sainte-Hélène. Everybody who wants that lock closed their way is going to be trying to get through it: the Club, the Carillon if they're still fighting, whatever Honora can buy. Somebody has to hold it."

"[b]The Crowd.[/b] Half a million people. When the Hush goes at three thirty-three, they're going to see things. Somebody has to keep them from stampeding, or from going after the first wolf they see with a snow shovel." She glances at Dario. "Or a lamp post."

"[b]The Bells.[/b] Whatever you do, the Carillon'll try to ring the Hush back at three. Somebody has to be in those towers."

"[b]And beside you.[/b] At the lock. Whoever's standing next to you when you put your hand on it." She looks at you. "Choose that one last. And choose it with your heart, boy, not your head. Your head's a Lacroix head. It'll only get you in trouble."

*page_break
[b]The Door.[/b] Who holds it?

*choice
  #@dario Dario, and the Sept-Ans. Wolves hold doors. It's the one thing everybody agrees they're good at.
    *set role_door "dario"
    *set ally_dario true
    *if not(manon_cut)
      *set ally_manon true
    Dario jumps down off the washing machine. "The whole pack," he says. "Every one. Nobody gets through that door we don't like." He grins, far too many teeth. "And we don't like anybody."
  *if (honora_turned) #Honora. She has cars, thralls, and more reason than anyone to hold the Club back. Let her tidy.
    *set role_door "honora"
    *set ally_honora true
    Honora inclines her head. "My own members," she says, "trying to get past me. How very refreshing." She smiles. "I'll hold your door, Mr. Lacroix. I've held worse, against better."
  *if (clarke_turned) #The Conductor. The whole Missing Line, and sixty-eight years of owing.
    *set role_door "clarke"
    *set ally_clarke true
    The Conductor closes his ledger. "The Line has never taken a side," he says. "It's taking one tomorrow." He stands, and puts on his cap. "I'll bring everyone who owes me a favor. That's most of the island."
  *if (agathe_turned) #Agathe. She knows how the Carillon fights, and she knows every hunter by name.
    *set role_door "agathe"
    Agathe turns from the window. "They'll send Anselme," she says. "And the old guard. They'll see me on that door and they won't know what to do." Her jaw sets. "Good."
  *if (keyman_safe) #Your father. He kept that door for fifteen years.
    *set role_door "serge"
    *set ally_keyman true
    Your father looks up from the map. "Every stone of it," he says quietly. "I know every stone." But you see him look at his hands, and at the other people in the room, the wolves and the witches, and you wonder if a door is what he's for.
  #Aimé. He's braver than he thinks he is.
    *set role_door "aime"
    *set ally_aime true
    Aimé drops the date squares. "The [i]door?[/i]" he says. "Against [i]vampires?[/i]" He picks them up. He straightens his tie. "Okay," he says, in a very small voice. "Okay. I'm a Bélanger. We hold the door for the dead. I suppose I can hold one for the living."

*page_break
[b]The Crowd.[/b] Who keeps half a million people safe when they see us?

*choice
  *if (role_door != "dario") #@dario Dario. Every wolf in the pack has family in this city. They know how to be seen and not start a riot.
    *set role_crowd "dario"
    *set ally_dario true
    Dario looks surprised. Then thoughtful. "Luc," he says. "Kim and Sandrine. Johnny. Half of them work with the public already. Bus drivers. Nurses." He nods slowly. "We'll be the nice wolves. The ones in the photos."
  #@fleurette Fleurette. Every ghost on the island will come if she calls. The dead know how to calm the living.
    *set role_crowd "fleurette"
    *set ally_fleurette true
    "Chéri," says the compact, "I've been calming drunk crowds on Stanley Street since 1968. Leave it to me. Every ghost from here to Pointe-aux-Trembles, in their best." A pause. "They'll be [i]thrilled[/i]."
  *if (clarke_turned and (role_door != "clarke")) #The Conductor. Half the Veillée owes him favors. He can put a steward on every corner.
    *set role_crowd "clarke"
    *set ally_clarke true
    The Conductor nods. "I ran a sleeping car for thirty years," he says. "Keeping frightened people calm at three in the morning is the only thing I was ever really good at."
  *if (honora_turned and (role_door != "honora")) #Honora. Nobody in this city knows better how to make people believe nothing's wrong.
    *set role_crowd "honora"
    *set ally_honora true
    "Why, thank you," says Honora. "I've been doing it since 1812."
  *if (role_door != "aime") #Aimé. People trust an undertaker. He has the voice for bad news.
    *set role_crowd "aime"
    *set ally_aime true
    Aimé looks at you. "I do have the voice," he says, surprised. "Mum always says. I've told four hundred families their grandmother's gone." He straightens his tie. "I can tell half a million people they're safe."
  #Gisèle's girls. Five old women with a laundromat and a flying canoe. Nobody panics near a nonna.
    *set role_crowd "gisele"
    *set ally_gisele true
    Thérèse cackles. Yolande reapplies her lipstick. "Nobody panics," says Gisèle, "when there's an old woman telling them to put their hat on." She considers. "We'll take the canoe. We'll be the light show."

*page_break
[b]The Bells.[/b] Who's in the towers at three?

*choice
  *if (laz_free or (not(lazare_left_carillon))) #@lazare Lazare. He's rung the tenor since he was ten. Nobody alive knows those ropes better.
    *set role_bells "lazare"
    *set ally_lazare true
    *if laz_self
      Lazare doesn't hesitate. "Yes," he says. "I know every rope in both towers. I know which ringers will follow me." He looks at you. "And I know the one bell they can't ring without me."
    *else
      Lazare looks at you for a long time. "I don't remember why," he says slowly. "But when you say [i]the bells[/i], my hands know what you mean." He looks at them. "I'll ring whatever you ask."
  *if (agathe_turned) #Agathe. She knows the tower and the band. They'll follow her.
    *set role_bells "agathe"
    Agathe nods once. "I'll take the fifth and cut anybody else's rope who tries to ring over us," she says. "I'm very good at ropes now."
  *if (keyman_safe) #Your father. He knows the song. He knows the bell it belongs to.
    *set role_bells "serge"
    *set ally_keyman true
    Your father looks up from the map. "Jean-Baptiste," he says softly. "I used to go up and put my hand on it when I was young. I didn't know why." He nods. "Yes."
  *if (mathis_out) #Mathis. He hears the great bell. He knows the tower. The novices trust him.
    *set role_bells "mathis"
    Dario stares at you. "He's [i]ten.[/i]"

    "Eleven in June," says Mathis, from the corner, where he's been eating Aimé's date squares and listening to everything. "And I know the sacristy way. And it cries when they ring it at people, and I'm not letting them." He folds his arms. "I'm going anyway. You can't stop me. I know the sacristy way."
  #Nobody. Let the Carillon ring. You'll deal with it at the lock.
    *set role_bells "none"
    *set guarded %+5
    Gisèle looks at you over her glasses and doesn't say anything, which is worse than if she had.

*page_break
[b]Beside you.[/b] At the lock. With your heart, boy, not your head.

*choice
  *if ((role_bells != "lazare") and laz_free and laz_self) #@lazare Lazare.
    *set role_beside "lazare"
    *set ally_lazare true
    *set rel_lazare +10
    Lazare looks at you across the laundromat. He doesn't say anything. He doesn't have to.
  *if ((role_door != "dario") and (role_crowd != "dario")) #@dario Dario.
    *set role_beside "dario"
    *set ally_dario true
    *set rel_dario +10
    Dario looks at you from his washing machine with his bag of chips halfway to his mouth, and for once in his life, he doesn't say anything at all.
  *if ((keyman_safe) and (role_door != "serge") and (role_bells != "serge")) #@keyman Your father. The last keeper, beside the next one.
    *set role_beside "serge"
    *set ally_keyman true
    *set rel_keyman +10
    Your father puts down his loupe. "Beside you," he says. And that's all.
  *if ((ally_gisele) and (role_crowd != "gisele")) #@gisele Gisèle. If you're remaking it, you need the witch at your elbow.
    *set role_beside "gisele"
    *set rel_gisele +10
    Gisèle snorts. "Me. At the lock. Fifty-nine years later." She lights a new cigarette. "Well. Somebody has to tell you where to put your hands."
  *if (invited_rose) #@rose Rose. The witness. Whatever you make, he'll have seen it made.
    *set role_beside "rose"
    *set ally_rose true
    *set des_rose +5
    On the step outside, in the snow, Rose stands up and bows, deeply, through the glass.
  #Nobody. It's a Lacroix lock. A Lacroix goes alone.
    *set role_beside "none"
    *set guarded %+10
    Nobody says anything. Gisèle looks at you for a long time and then looks away, and you think it's the saddest you've ever seen her look.

*page_break
It's one in the morning when they start to go.

Out into the snow on Rue du Centre, in ones and twos, to cars and the tow truck and the night bus, with maps in their pockets and jobs to do tomorrow. Aimé, at the door, presses the last date square into your hand and hugs you, suddenly and hard, and says into your shoulder, "I've had a crush on you since Secondaire 3, I thought you should know in case anybody dies," and leaves before you can answer.

Gisèle is the last. She stands at the laundromat door in her purple cardigan with the dryers going round behind her, and looks at you.

"Go home, boy," she says. "Or go to somebody's. It's the last night before." She stubs out her cigarette on the door frame. "Aurèle spent his last night before in my kitchen, in 1967, telling me he was going to do it anyway." A pause. "Don't spend yours with an old woman. Spend it with somebody you'll want to have spent it with."
*set rel_aime +5
*goto_scene night8b
`);
