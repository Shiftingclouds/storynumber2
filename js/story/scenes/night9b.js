NB.scene("night9b", String.raw`
*comment Night Nine, part two: the vault, three thirty-three, the choice at the lock, and dawn.
*mood white
*temp peril 0
*temp who ""
*temp nadim_ok false
*temp serge_held false
*if not(door_held)
  *set peril +1
*if not(bells_stopped)
  *set peril +1
*if keyman_taken
  *set serge_held true
*page_break
*art vault
The powder house door is the way you left it on Friday night, nine nights ago: open, the steel plate with its six brass buttons, and the warm air breathing up out of the dark.

Except it isn't open. Somebody's put a new door in front of it, inside the old frame: oak, iron-bound, with a lock in it you'd know anywhere. A cross in a circle. The Compagnie had it made this week. Of course they did. It's a Lacroix lock, and it keeps out everyone but a Lacroix.

*choice
  *if (has_serge_key) #The keeper's key. Your grandfather's, then your father's. [i]It was always going to be yours.[/i]
    *set rel_keyman +5
    It goes into the lock like a hand into a glove. It turns. The door knows it. You could swear, as it swings open, that you hear somebody humming.
  *selectable_if (hands >= 55) #Pick it. It's new. New locks are the easy ones.
    *set hands +3
    It's new, and it's good, and it's a Lacroix design built by somebody who isn't a Lacroix, which means every tolerance is a hair too generous. You're through it in two minutes.
  #Put your hand flat on it and hum. Six notes. It's a Lacroix lock. It'll know one.
    *set lore +3
    You put your hand flat on the oak and hum: [i]quatre, un, quatre, six, deux, trois.[/i] Nothing happens. You hum it again. And on the third time, like an old dog getting up off a rug, the lock turns over by itself.

*page_break
The stairs go down into the warm dark, stone worn into bowls by boots. You go down them with your penlight in your teeth, the way you did nine nights ago, and at the bottom is the brick room the size of your apartment.

It's full.
*meet bourdon
The Bourdon is there, in his cassock and his cardigan, with a lantern at his feet and his hands folded, standing very straight by the far wall.
*if not(clarke_turned)
  The Conductor, in his porter's cap, by the stairs, with his ledger held against his chest like a shield.
*if not(honora_turned)
  Honora Strachan, in bottle-green, small and upright, with two thralls behind her.
*else
  Honora Strachan, in her fur coat, standing a little apart from the others, looking at the Bourdon the way you'd look at a colleague who's about to lose his job.
*if serge_held
  And on the floor by the wall, in iron cuffs, with a chain to a ring in the brick, his head on his chest, asleep, your father.
And in the middle of the room, hanging in the air, a column of banked coals, red and black, dimmer than you've ever seen it. Smoke inside it, the shape of shoulders, of a bowed head. And round it, at chest and waist and knees, three bands of brass, hanging open in the air, waiting to be closed.

*portrait nadim hushed
Two points of light open in the smoke.

"Creditor," says Nadim. "You brought your keys."

*page_break
*if role_beside = "none"
  You came alone. You stand at the bottom of the stairs with your hands empty, and you think about Gisèle's face when you said it, and you wish, for one second, very badly, that you hadn't.
*else
  *if role_beside = "lazare"
    *set who "lazare"
    Lazare comes down the stairs behind you and stops at your shoulder. He looks at the Bourdon across the room. The Bourdon looks at him. Neither of them says anything for a long time.
  *elseif role_beside = "dario"
    *set who "dario"
    Dario comes down the stairs behind you, in his toque, and stops at your shoulder, and looks round the room at the Compagnie, and at the djinn in the air, and says, very quietly, "[i]Saperlipopette.[/i]"
  *elseif role_beside = "serge"
    *set who "serge"
    Your father comes down the stairs behind you, and stops at the bottom, and puts his hand on the wall, and looks at the room he kept for fifteen years. At the bands. At the fire in the air.

    "Nadim," he says.

    The coals flare, bright as a struck match.

    "[i]Serge.[/i]" The voice from the fire breaks. "It's Thursday. Isn't it. It's always Thursday, with you."
  *elseif role_beside = "gisele"
    *set who "gisele"
    Gisèle Pépin comes down the stairs behind you one step at a time with her hand on the wall, eighty-six, in her purple snowsuit, and stops at the bottom and looks at the three bands of brass hanging in the air, and at the Bourdon.

    "Clément," she says.

    "Gisèle." The Bourdon's voice is very soft. "You came."

    "I said I would. In 1967. I said, [i]one day I'll come down those stairs and undo it[/i]." She lights a cigarette in the vault, under the eyes of the Compagnie. "I'm a little late."
  *elseif role_beside = "rose"
    *set who "rose"
    Rose comes down the stairs behind you, and stops at the bottom, and every candle and lantern in the room leans toward him at once.

    "Clément," he says, pleasantly. "Honora. Everett." He bows. "I believe I was the witness last time. I've been invited back."

*page_break
It's five to three.

"Monsieur Lacroix," says the Bourdon. His voice is gentle, as it always is. "You know what we're asking. Close the bands. With the song. Close the door. And the city sleeps again, and no child is ever buried for this. And on Sunday I'll ring the great bell for every child I've taken, and they'll go home."
*if bourdon_knows
  He looks at his hands. "I know what I am now," he says. "I know what my list was for. I'm asking anyway. Because I don't know any other way to keep them safe." He looks up. "Tell me there's another way, and I'll listen. I've been listening all week."
*if (not(honora_turned)) and serge_held
  "And if you won't," says Honora, pleasantly, "your father will. He has the hands. He has the song. He's asleep, but we can wake him." She smiles. "It's so much tidier with the young. But the old man will do."

*page_break
At three o'clock, the bells.
*if bells_stopped
  *if voice = "bells"
    You hear it through the stone and the earth and the river. Not the Carillon's peal. Not the changes, row after row, winding the Hush tight. A tune. Six notes, on the bells of Notre-Dame, over the whole island, down and up and held.

    [i]Quatre. Un. Quatre. Six. Deux. Trois.[/i]
    *if role_bells = "lazare"
      Lazare, on the tenor. You'd know his hand anywhere now.
    *elseif role_bells = "agathe"
      Agathe, on the fifth, and whoever she's got.
    *elseif role_bells = "serge"
      Your father, up there, with his hand on the great bell, and whoever he found to pull the ropes.
    *else
      A small boy with a pudding-bowl haircut, on the second treble, standing on two boxes.

    In the air in the middle of the vault, the coals of the djinn brighten, just a little, as if something has warmed them.
  *else
    Nothing.

    That's what you hear. The Carillon should be ringing now: every tower on the island, the great peal, winding the Hush tight over the city for the last half-hour before it fails. And there's nothing. The night's silent. Somebody in the towers of Notre-Dame is holding the ropes still.
    *if role_bells = "lazare"
      You know who. You'd know his silence anywhere.

    The Bourdon closes his eyes.
*else
  It starts in the towers of Notre-Dame and spreads: every bell the Carillon has, on every church on the island, the great peal, the changes pouring out over the city, row after row, winding the Hush tight for the last half-hour before it fails. You feel it in the brick. You feel it in your teeth. In the air in the middle of the room, the coals of the djinn go dim, and the smoke shrinks, and Nadim makes a sound like a man being pressed flat.

  "Nobody in the towers," the Bourdon says quietly. "I thought not."

*if fleurette_plan
  *page_break
  *portrait fleurette smile
  In your pocket, the compact clicks open.

  "Chéri," says Fleurette, and her voice is shaking. "Chéri, [i]look[/i]."

  You can't look. You're under an island. But she tells you, fast, breathless, the way she'd tell you the gossip at Normande's bar: that at three o'clock exactly, at last call, every screen in the Quartier des spectacles went black for one second. The UQAM tower. Place des Arts. The big one on the Monument-National. Every one. And then, in pink neon script forty metres high, on every screen at once, over half a million people:

  [b]MADAME FLEURETTE[/b]

  [b]STANLEY STREET, 1968–1977[/b]

  [b]LAST CALL[/b]

  "They're reading it," she says. "Chéri, they're all looking up and [i]reading it.[/i] Half a million people are saying my name." A sound like laughing and crying at once. "I can feel it. Oh. Oh, I can feel it. Like the curtain going up."
  *achieve fleurette_name
  *if voice = "fleurette"
    "Not yet," she says, and her voice firms. "Not yet. I've got one more number. Three thirty-three. And then I'm going to take the biggest bow this city has ever seen."
  *else
    "I have to go, chéri," she says. "I can feel it pulling. Like the stage lights. Thank you. Thank you. You kept your promise. Nobody ever..." And then, clear and bright, the voice of a woman on a stage on Stanley Street in 1971: "[i]Bonne nuit, mes chéris![/i]"

    And the compact clicks shut.

    It doesn't open again.
    *set fleurette_fate "gone"
    *remember fleurette At last call on Nuit blanche, her name went up on every screen in the city. She said bonne nuit, and went.

*page_break
*if peril = 0
  *goto no_peril
*comment --- the door didn't hold, or the bells weren't stopped, or both. Someone comes down the stairs.
*if (ruari_fate = "confessed") or (ruari_fate = "fled")
  At three fifteen, feet on the stairs. Thralls: the Club's, the ones who didn't follow Honora, or were bought by somebody who didn't. Four of them, with iron.
*else
  At three fifteen, feet on the stairs. Thralls, four of them, with iron. And behind them, with his hands in the pockets of his leather jacket and his bracelets bright in the lantern light, Ruari.

  "Sorry, love," he says. "Somebody's got to close it. And you won't."
*if not(war_over)
  And behind them, two hunters of the Carillon with bells, who came in with the Club through a door that didn't hold.

*if (who = "") and (peril >= 2)
  *goto peril_alone
*if who = ""
  *goto peril_hurt
*page_break
They come for you. Not for the djinn. You're the one who can close it, or not close it, and they've been told which.

*if who = "lazare"
  Lazare's in front of you before you know he's moved. He takes the first thrall down with the edge of his hand, and the second, and the third gets him, iron, a short black blade, under the ribs.
*elseif who = "dario"
  Dario's in front of you before you know he's moved, and he isn't all the way a man when he gets there. He hits the thralls like a truck. And the iron goes into him, twice, in the side, and he doesn't stop.
*elseif who = "serge"
  Your father's in front of you before you know he's moved: a fifty-nine-year-old locksmith in your winter coat, with his arms out, between you and the iron. It goes into him. He doesn't make a sound.
*elseif who = "gisele"
  Gisèle Pépin says a word you don't know, a green word that smells of juniper, and the first two thralls fall down the stairs. The third one's iron catches her across the arm, and she sits down on the bottom step, very suddenly, eighty-six, with her cigarette still in her mouth.
*else
  Rose steps in front of you. He takes off one glove. The first thrall to touch his bare hand screams and goes up the stairs on fire. The iron goes into Rose's side, and he looks down at it with an expression of polite astonishment, and then at you, and smiles.

*if peril >= 2
  *set n9_fell who
  *goto fell
*if who = "lazare"
  *set lazare_fate "hurt"
*elseif who = "dario"
  *set dario_fate "hurt"
*elseif who = "serge"
  *set keyman_fate "hurt"
*page_break
The iron's in, but it isn't deep. They're down, but not out. The thralls are on the floor, and the hunters have dropped their bells, and it's over, for now, and you're on your knees beside whoever took it for you, with your hands pressed on the wound, and they're looking at you and saying [i]I'm fine, I'm fine, go on, do it[/i], and it's ten past three.
*if serge_held
  In the fight, somebody's knocked the chain out of the wall. Your father's free. He's awake, and dazed, and sitting up against the brick with his cuffed hands in his lap, looking at you.
  *set serge_held false
  *set keyman_safe true
*goto choice

*label fell
*page_break
It's deep.

You know it's deep from the sound. From the way they go down, and don't get up. From the colour of the snow melting off their boots on the brick floor. You're on your knees beside them with your hands on the wound, and it's pumping between your fingers, hot, and they're looking up at you and trying to say something, and you can't hear it for the bells.

*if wishes >= 1
  *choice
    #Unmake it. Spend a wish. Take this moment back.
      *set wishes -1
      *set wishes_used +1
      *set n9_fell ""
      You close your hand on a curl of smoke in your pocket, and ask. You don't have to ask out loud. In the middle of the room, the djinn's coals flare, bright as a struck match, and the whole vault goes sideways, and it's ten seconds ago.

      The iron's coming. And this time you see it coming, and you pull them back by the collar, and it goes past, into the brick, and sparks.

      "[i]Granted,[/i]" says Nadim, very faintly, in his formal, exhausted voice.
      *goto after_fell
    #You can't. You can't spend it. You need it for the lock.
      *goto dead
*goto dead

*label dead
*if n9_fell = "lazare"
  *set lazare_fate "dead"
*elseif n9_fell = "dario"
  *set dario_fate "dead"
*elseif n9_fell = "serge"
  *set keyman_fate "dead"
*elseif n9_fell = "rose"
  *set ally_rose false
*page_break
*if n9_fell = "lazare"
  Lazare dies on the brick floor of the vault under Île Sainte-Hélène at eleven minutes past three in the morning, with his head in your lap and his hand in yours.

  He says his name at the end. Not to you. To himself, very quietly, the way you'd say something you wanted to be sure of. [i]Lorenzo.[/i]
*elseif n9_fell = "dario"
  Dario dies on the brick floor of the vault under Île Sainte-Hélène at eleven minutes past three in the morning, with his head in your lap, with his toque still on.

  He says Enzo's name at the end. And then yours. And then, very faintly, something in Italian that might be a prayer and might be the chorus of a Céline Dion song, and you'll never know which.
*elseif n9_fell = "serge"
  Your father dies on the brick floor of the vault he kept for fifteen years, at eleven minutes past three in the morning, with his head in your lap.

  "Same hands," he says, at the end, holding yours. And then he hums. Six notes. He doesn't finish them.
*elseif n9_fell = "gisele"
  Gisèle Pépin dies on the bottom step of the vault under Île Sainte-Hélène at eleven minutes past three in the morning, with a du Maurier still burning in her fingers.

  "Tell Aurèle," she says, at the end, "I came down the stairs." And then, with enormous irritation: "Damn it. I was going to finish it."
  *set ally_gisele false
*else
  Rose doesn't die. Devils don't. He just goes out, like a candle, with a small surprised sound, and where he was standing there's a black glove on the brick and a smell of cloves, and nothing else.

  He'll be back, you tell yourself. In a hundred years. On a Mardi Gras. He'll be back.
*goto after_fell

*label peril_hurt
*page_break
They come for you. You came alone, and there's nobody between you and the iron.

You see it coming. You get your arm up. It goes into your forearm instead of your ribs, deep, to the bone, and you go down on the brick with your arm against your chest, and the first thrall stands over you with the iron raised again.

And then the djinn in the middle of the room flares, bright as a struck match, so bright the thralls throw their arms over their eyes, and the heat of it knocks them back against the wall, and the iron goes skittering across the floor.

"[i]Not him,[/i]" says Nadim, from the fire, in a voice like a furnace door. "Not my creditor. Not in my house."

It costs him. You see it cost him: the coals go dim, dimmer than you've ever seen them. But the thralls go up the stairs, and don't come back.
*set mc_fate "hurt"
*set rel_nadim +10
*goto after_fell

*label peril_alone
*page_break
They come for you. You came alone, and there's nobody between you and the iron.

It goes in under your ribs. It doesn't hurt, at first. It's just cold, a very deep cold, like the river, and then it's hot, and then you're on the floor of the vault on your back, looking up at the brick ceiling, and the column of coals in the middle of the room is very bright, and very far away.

*if wishes >= 1
  *choice
    #Unmake it. Spend a wish. Take this moment back.
      *set wishes -1
      *set wishes_used +1
      You close your hand on a curl of smoke in your pocket. The vault goes sideways, and it's ten seconds ago, and the iron's coming, and this time you see it, and step, and it goes past you into the brick, and sparks.

      "[i]Granted,[/i]" says Nadim, very faintly. "Don't make me do that again."
      *goto after_fell
    #Let it go.
      *goto_scene endings unmade
*goto_scene endings unmade

*label after_fell
*if serge_held
  In the fight, somebody's knocked the chain out of the wall. Your father's free. He's awake, and dazed, sitting up against the brick with his cuffed hands in his lap, looking at you.
  *set serge_held false
  *set keyman_safe true
*goto choice

*label no_peril
*page_break
Nobody comes down the stairs.

The door held. The bells are quiet. Up above, somewhere, the whole of the Veillée and half a million sleepers are standing in the snow on Nuit blanche, and nobody comes down the stairs of the powder house on Île Sainte-Hélène but you, and whoever you chose to bring.
*if serge_held
  *if honora_turned
    Honora Strachan crosses the vault, and kneels, in her fur coat, beside your father, and unlocks his cuffs with a small iron key from her glove. "I did say I'd tidy," she says, without looking at you.
  *else
    "Unlock him," you say to Honora. "Or I don't touch the lock at all, and you can explain to half a million people at three thirty-three why you didn't."

    Honora looks at you for a long time. Then she takes a small iron key from her glove, and tosses it to you, underhand, like a coin to a porter.
  Your father wakes as the cuffs come off. He looks at you, dazed, and then at the room, and at the fire in the air, and his face does something you'll remember for the rest of your life.

  "Nadim," he says.
  *set serge_held false
  *set keyman_safe true

*label choice
*page_break
*portrait nadim true
It's three thirty.

The Hush is going. You can feel it, the way you'd feel a tide going out: a pull, a thinning. Up above, half a million people are about to wake up. The coals in the middle of the room are very bright now, brighter than you've ever seen them, and the three bands of brass hang open in the air around them, turning slowly, waiting.

You walk up to them. You put your hand on the chest band. The brass is warm. Under the cross-in-a-circle, where you never looked before, there's a keyhole no bigger than your little fingernail.

"Lacroix," says Nadim, from the fire. Very quietly. "It's time."
*if (intent = "remake") or (intent = "ask")
  *if nadim_consent
    *set nadim_ok true
  *else
    "You asked me in a dream," he says. "I said, ask me at the lock. With your hand on it." The coals look at your hand on the brass. "Ask me now."

    *choice speak
      #"Will you? On your terms? One night a year, your sister, your name on a door, and stop when you say stop?"
        *if (rel_nadim >= 30) or (des_nadim >= 20)
          *set nadim_ok true
          *set nadim_consent true
          The fire is quiet for a long moment.

          "Your hand's steady," Nadim says. "It was shaking on Friday." A pause. "Yes. On those terms. Yes."
        *else
          The fire is quiet for a long time.

          "No," says Nadim, gently. "Not yet. I don't know you well enough, creditor. I'm sorry." A pause. "That's allowed. Isn't it. That's the whole point of the little key." You can hear, in the fire, something almost like wonder. "I said no."
      #"Never mind. I won't ask you to carry us."
        *set rel_nadim +5
        "Thank you," says Nadim, and means it.

*page_break
Three thirty-three.

Everyone in the room is looking at you. The Bourdon with his hands folded. The Compagnie. Whoever came down the stairs with you.
*if keyman_safe and (keyman_fate != "dead")
  Your father, against the wall, with his hand over his mouth.
Your hand is on the brass.

*choice
  #Close it. The bands, the song, the door. With Nadim inside. The city sleeps.
    *set hush_fate "rebound"
    *set world "held"
    *set price "nadim"
    *node n9_lock rebound
    *goto close_it
  *if ((keyman_safe) and (keyman_known) and (keyman_fate != "dead")) *selectable_if (keyman_forgiven) #Let your father take it. He kept this door for fifteen years. [i]Le fort a besoin de son gardien.[/i]
    *set hush_fate "gardien"
    *set world "held"
    *set price "serge"
    *node n9_lock gardien
    *goto gardien
  #Take his place yourself. Step inside the bands. Let a Lacroix hold what a Lacroix built.
    *node n9_lock lock
    *goto_scene endings the_lock
  #Break it. Forever. Let him go, and let the city wake up and see us.
    *set hush_fate "fallen"
    *set world "open"
    *set price "none"
    *node n9_lock fallen
    *goto break_it
  *if ((intent = "remake") or (intent = "ask")) *selectable_if ((meme_key) and (ally_gisele) and (voice != "") and (nadim_ok)) #The little key. Turn the lock into a question. Remake it, by consent.
    *set hush_fate "remade"
    *set world "remade"
    *set price "none"
    *node n9_lock remade
    *goto remake
  *if ((rose_bargain) or (invited_rose and owe_rose)) *selectable_if (ally_rose or rose_bargain) #Call Rose. The devil's bargain. He holds the Hush, and you owe him.
    *set hush_fate "rose"
    *set world "held"
    *set price "rose"
    *set owe_rose true
    *node n9_lock rose
    *goto rose_holds
  *if (wishes >= 1) #The great wish. Everything you've got left. Wish the Accord of '67 undone.
    *set hush_fate "wished"
    *set great_wish "accord"
    *set world "open"
    *set price "none"
    *set wishes 0
    *node n9_lock wished
    *goto great_wish

*comment ---------------------------------------------------------------- CLOSE
*label close_it
*page_break
You close it.

You do it the way your grandfather did it in 1967, and your father never could: your fingers on the brass, the six notes, the chest band, the waist, the knees. The pins drop, one after another, like a heartbeat. The bands close round the fire with three soft clicks.

Nadim doesn't say anything. The coals look at you. They don't look angry. They look like the Bourdon's eyes: sad, and tired, and not surprised.

"It's all right, Lacroix," he says, as the last band closes. "It's a sensible thing. You're a sensible man." A pause. "Come on Thursdays. If you can. Bring a radio."

You climb the stairs. You close the door. You put your hand on the steel plate and play the six notes, and the lock closes with a sound like a sigh.

Up above, at three thirty-three, all over the island, half a million people blink, and look at each other, and laugh at nothing, and go home to bed.
*if bourdon_deal or bourdon_knows
  "Thank you," the Bourdon says, behind you, in the snow. His voice is breaking. "On Sunday. I'll ring the great bell for the children. All of them. I swear it." He looks at the door. "And for your father. And for Rosa and Vito Ferrante."
*remember nadim At three thirty-three on Nuit blanche, you closed the bands on him. He said: come on Thursdays.
*goto morning

*comment ---------------------------------------------------------------- GARDIEN
*label gardien
*page_break
*portrait keyman sad
"Papa."

Your father takes his hand away from his mouth.

He looks at you, and at the fire, and at the three bands of brass, and you watch him understand. He's known, you think. He's known since the stairs. Maybe since Thursday. Maybe since 2011.

"Le fort a besoin de son gardien," he says. The phrase from the phone. The phrase he said every time he left for a night job when you were small. He smiles. "I said it on the phone and didn't know what it meant. It means me."

"Papa, you don't..."

"I do." He crosses the room and takes your face in his square scarred hands, black with brass dust. "I kept it for fifteen years from the outside. I can keep it from the inside. A Lacroix hand, holding what a Lacroix built." His thumbs move on your cheekbones. "And Nadim goes free. He was my friend, {name}. I owe him fifteen Thursdays and a crowbar."

*page_break
You open the bands. Nadim comes out of them like a man coming up out of water: the coals rising, the smoke taking shape, shoulders, a face, a man in a 1967 suit standing on the brick floor of the vault, solid, for the first time since the summer of Expo.

He looks at your father. Your father looks at him.

"Thursday," says Nadim, hoarsely.

"Thursday," says your father. "Bring a radio."

And Serge Lacroix steps into the bands. You close them round him, your fingers on the brass, the six notes, and he hums them with you, the whole time, in the same key. The last pin drops. The fire that was a djinn is gone, and in the middle of the room, standing very still inside three bands of brass, is a man with your hands, with his eyes closed, glowing faintly gold, like a coal someone's breathed on.

"Go home," he says, without opening his eyes. "Tell Maman I'll see her Thursday."
*set keyman_fate "gardien"
*set nadim_fate "free"
*achieve papa
*remember keyman At three thirty-three on Nuit blanche, he took the lock. [i]Le fort a besoin de son gardien.[/i]
*goto morning

*comment ---------------------------------------------------------------- BREAK
*label break_it
*page_break
You don't close it.

You take your hand off the brass. You pick up the three bands, one after another, and they're heavy and hot and humming, and you carry them up the stairs, and out of the powder house, and across the snow to the edge of the island, and you throw them in the river.

They go through the ice like it isn't there.

Behind you, the fire comes up the stairs. It comes up out of the powder house like a man coming up out of water: the coals rising, the smoke taking shape, shoulders, a face, a man in a 1967 suit standing in the snow on Île Sainte-Hélène, solid, looking up at the sky for the first time in fifty-nine years.

At three thirty-three, the Hush runs out.

You feel it go. The whole island feels it go. Half a million people on Nuit blanche stop, all at once, in the snow, in the light of the screens and the fire pits, and look around them, and see.
*set nadim_fate "free"
*achieve thaw
*remember nadim At three thirty-three on Nuit blanche, you threw the bands in the river, and he walked out into the snow.
*goto aftermath_open

*comment ---------------------------------------------------------------- REMAKE
*label remake
*page_break
You take the little key off the chain round your neck. Mémé's key. Warm from your skin. No longer than your little finger.

It goes into the keyhole under the cross-in-a-circle like it's been waiting fifty years to. It has.

You turn it.

The bands don't close. They don't open. They [i]ring[/i]: all three at once, one note, a question, going up into the brick and the earth and the river. And the fire in the middle of the room hears it, and you hear it hear it.

"Yes," says Nadim.

*page_break
*if role_beside = "gisele"
  Beside you, Gisèle Pépin puts her cigarette out on the brick floor and holds out both her hands over the bands, and starts to weave.
*else
  Three kilometres away, in a laundromat in Pointe-Saint-Charles, every dryer stops at once, and five old women put down their gin and hold out their hands over the warm glass, and start to weave.
You can't see it. You can feel it: something going out from the vault, up through the island, across the ice, over the city, fine as thread, green as juniper, a net of it, a lullaby with the words taken out and room left for new ones.

And then the voice.
*if voice = "fleurette"
  From every screen in the city, at three thirty-three, a drag queen in a teal gown and a platinum wig, forty metres high, sings. Not "Je suis malade". Not "I Will Survive". Six notes, down and up and held, and then words, words of her own, in French and in English, about a city that stays up all night and a promise that it can sleep when it wants to and wake when it wants to, and half a million people stand in the snow with their faces lifted and listen.

  And at the end of it, she takes a bow. The biggest bow the city has ever seen. And the screens go white, and she's gone.
  *set fleurette_fate "gone"
  *achieve fleurette_name
  *remember fleurette She sang the city to sleep on every screen at three thirty-three, and took her bow, and went.
*elseif voice = "angel"
  From La Persévérance, over the whole island, the great bell rings. Once. And then it sings: the six notes, its own name, given back freely at last, eleven tons of bronze over half a million people in the snow. Everyone on the island hears it. Nobody on the island is afraid.
*elseif voice = "rose"
  And Rose sings. You didn't know he could. He stands in the snow outside the powder house door, invited, seen, and sings, in a voice like a hand at the small of your back, and the whole city hears him, and nobody on the island, for once, is being tempted into anything. They're being asked.
*else
  From the towers of Notre-Dame, the song. Six notes, rung on the bells, over the whole island, down and up and held, again, and again, and half a million people in the snow stop and listen, and don't know why they're crying.

At three thirty-three, the Hush doesn't fail. It changes.

Nobody forgets anything. The unmade remember. Everyone who was taken out of somebody's head goes back in. And the sleepers who've seen the Veillée tonight keep seeing them, if they want to. And if they don't, they don't. A lullaby you can choose to sing.
*set nadim_fate "held_by_consent"
*achieve thaw
*remember nadim At three thirty-three, you turned the lock into a question. He said yes.
*goto aftermath_remade

*comment ---------------------------------------------------------------- ROSE
*label rose_holds
*page_break
*portrait rose smirk
"Rose," you say.

He's there. Of course he's there. At the bottom of the stairs, or in the doorway, or beside you, in black, with his cane, where he always was.

"Darling," he says. "Are you sure?"

"Hold it. The Hush. Let him go, and hold it yourself."

Rose looks at you for a long time. Then he takes off his gloves, both of them, finger by finger, and gives them to you to hold, and walks to the three bands of brass and puts his bare burning hands on them.

The fire comes out of the bands like a man coming up out of water. Nadim stands on the brick floor, solid, in his 1967 suit, and stares at the devil.

"You," he says.

"Me," says Rose, pleasantly. "Go on. Before I change my mind. I never do, but there's always a first time." And the bands close round Rose, and the vault fills with the smell of cloves and roses gone slightly over, and up above, at three thirty-three, the whole city goes to sleep in the devil's hands, and he's very, very gentle with it.

"A yes, Monsieur Lacroix," he says, from inside the bands, with his red-coal eyes on yours. "Whenever I ask. That's the price. You'll have forgotten, by the time I do." He smiles. "I won't."
*set nadim_fate "free"
*remember rose At three thirty-three on Nuit blanche, he took the Hush in his bare hands, and reminded you: a yes, whenever he asks.
*goto morning

*comment ---------------------------------------------------------------- THE GREAT WISH
*label great_wish
*page_break
You take your hand off the brass and put it in your pocket, round every curl of smoke you've got left.

"Nadim," you say. "I wish the Accord of '67 had never been signed."

The fire goes very still.

"Everything?" he says. "All of it? The Hush, the lock, the Carillon, the children, the Line?" His voice isn't steady. "Do you know what you're asking? You're asking me to unmake a whole city's fifty-nine years."

"Not the years. Just the lie."

A long silence.

"That," says Nadim, "I can do." And he laughs, the first real laugh you've ever heard from him, like a bonfire catching. "[i]Granted.[/i]"

The bands fall. The fire rises. And at three thirty-three, all over the island, fifty-nine years of forgetting come undone, not like a door blowing open, but like snow melting: slowly, gently, from the edges in. Nobody runs. Nobody screams. Half a million people stand in the snow on Nuit blanche, and look at the vampire at the soup tent, and the wolf in the Céline hoodie, and the ghost in the mink stole, and remember that they've always known.
*set nadim_fate "free"
*remember nadim At three thirty-three, you wished the Accord undone. He laughed, and said: granted.
*goto aftermath_open

*comment ---------------------------------------------------------------- AFTERMATHS
*label aftermath_open
*page_break
*if crowd_safe
  Up above, on Nuit blanche, half a million people see the Veillée.

  And nobody runs.
  *if role_crowd = "fleurette"
    There's a ghost beside every one of them. The dead know how to calm the living.
  *elseif role_crowd = "clarke"
    There's a steward on every corner in an orange vest, handing out hot chocolate, saying [i]it's all right, it's all right, they've always been here.[/i]
  *elseif role_crowd = "aime"
    There's an undertaker on a milk crate by the soup tent in a volunteer's vest, saying, in the voice he's used on four hundred grieving families, [i]everyone's safe. Everyone's safe. Stay by the fire.[/i]
  *elseif role_crowd = "gisele"
    There's a red canoe going round and round overhead with five old women in it, waving, and it's very hard to be frightened of anything with five nonnas waving at you from a flying canoe.
  *elseif role_crowd = "dario"
    There's a wolf in a Céline hoodie handing out tuques, and a pair of nurses at the first-aid tent with gold eyes, and a drag king on a stage in a pencil moustache doing Sinatra, and it's very hard to be afraid of any of it.
  *else
    There are men in good coats among the crowd, very still, and a small woman on the Hôtel de Ville balcony in fur, and nobody runs, because the Club has been making people believe nothing's wrong since 1812.
  *set crowd_safe true
*else
  Up above, on Nuit blanche, half a million people see the Veillée.

  Some of them run.

  You'll hear about it later: the crush on Sainte-Catherine, the man who went at a vampire at the soup tent with a fire extinguisher, the car that went up on the sidewalk on Saint-Laurent when the driver saw a wolf. Nobody dies. It's a miracle, the newspapers will say, that nobody dies. But people are hurt. And there are hunters, the old kind, who wake up in the morning with shotguns and ideas.
*goto morning

*label aftermath_remade
*page_break
Up above, on Nuit blanche, half a million people stand in the snow and look at each other.

Some of them see the Veillée. Some of them don't. The ones who do look at the vampire at the soup tent, and the wolf in the Céline hoodie, and the woman with antlers, and the ghosts in their best, and then at each other, and nod, slowly, like people remembering the words to a song.
*if crowd_safe
  Nobody runs.
*else
  A few of them run. Not many. It's a lullaby, not a fire alarm. Most of them just stand there, in the snow, crying, and don't know why.
*goto morning

*comment ---------------------------------------------------------------- MORNING
*label morning
*page_break
*mood snow
*art morning
You come up out of the powder house into the dawn.

It's six in the morning on Sunday the first of March, and the sun is coming up red over the river and the refinery and the South Shore, and the snow on Île Sainte-Hélène is pink with it, and it's so quiet you can hear the ice.
*if world = "held"
  The city's asleep again. You can feel it: the Hush, over everything, like a blanket over a sleeping child.
  *if price = "nadim"
    Under your feet, a djinn in brass bands, for another fifty-nine years.
  *elseif price = "serge"
    Under your feet, your father, in three brass bands, glowing faintly gold, keeping the fort.
  *else
    Under your feet, a devil holding a city in his bare hands, being gentle with it.
*elseif world = "remade"
  The city's awake, and asleep, and both, and neither. It's chosen. You can feel it, like a held breath let out.
*else
  The city's awake. The whole city. You can feel it from here: half a million people who stayed up all night, going home through the snow, remembering.
*if lazare_fate = "dead"
  You carry Lazare up the stairs yourself. Nobody helps. You don't let them.
*elseif dario_fate = "dead"
  You carry Dario up the stairs. The whole pack comes to help, and you don't let them, and then you do.
*elseif keyman_fate = "dead"
  You carry your father up the stairs. He's very light. He was always so much lighter than he looked.
*elseif n9_fell = "gisele"
  Thérèse and Yolande and Pierrette and Monique come and carry Gisèle out of the powder house, the four of them, like pallbearers, humming.

*page_break
Your phone buzzes in your pocket, over and over, a whole night of it arriving at once.
*if dentist != ""
  *text philippe We're ok. The kids are ok. We stayed by the tent like you said.
  *if world = "open"
    *text philippe There was a WOLF handing out TUQUES. Gabriel wants to be a wolf now. What do I tell him.
*if called = "marc"
  *text marc I don't know what happened last night.
  *text marc I think I remember something. About you. From a long time ago. Before Toronto.
  *text marc Are you ok?
*text residence Mme Lacroix was awake at 3:33 and asked us to tell you: she heard it. She was humming.
*if (keyman_fate = "gardien")
  *text residence She also says: "Tell him Thursday is fine."
*if (world != "held") and (lazare_fate != "dead") and (not(lazare_rehushed and (not(lazare_restored))))
  *text unknown This is Rosa Ferrante. From Jarry. I don't know how I have this number. It was on my fridge this morning in my own writing.
  *text unknown Tell Lorenzo there's lasagna at one. After ten o'clock Mass.
  *text unknown Tell him to bring the Santangelo boy.

*page_break
You sit down in the snow outside the powder house on Île Sainte-Hélène with your back against the old stone wall, in the pink light, and look across the river at the city.

Nine nights. A week ago you were a locksmith with a van and a sick grandmother and a father who walked out, and you'd never seen a ghost or a wolf or a djinn or a devil, or been in love, not really, not since Toronto.

You're still a locksmith. You've still got the van.

Everything else is different.

*page_break Part Two
*goto_scene ch10
`);
