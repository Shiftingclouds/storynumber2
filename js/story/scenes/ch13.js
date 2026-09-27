NB.scene("ch13", String.raw`
*mood eve
*chapter 13 Easter [13]
*temp laz_ok true
*temp dar_ok true
*temp nadim_out false
*if (nadim_fate = "free") or (nadim_fate = "held_by_consent")
  *set nadim_out true
*if (lazare_fate = "dead") or (lazare_rehushed and (not(lazare_restored)))
  *set laz_ok false
*if dario_fate = "dead"
  *set dar_ok false
[b]Easter Sunday. The fifth of April.[/b]

Four in the morning. The city's dark. No bells; they're still in Rome, somewhere over the Atlantic, on their way home.

You're awake. You've been awake all night.

You can feel it. You didn't think you would. Under your skin, in your jaw, in the long bones of your arms: an ache, like growing pains, like the flu coming on. Your teeth feel wrong in your mouth. The dark in the room isn't as dark as it should be; you can see the pattern on the wallpaper, every leaf of it, in no light at all. And the smell of the city through the window, the snow and the river and the exhaust and somebody's toast three buildings over, is so loud you could drown in it.

Seven Easters. At dawn.

Sunrise is at 6:41.

*page_break
You've got two hours and forty minutes. Four ways you know of.

*choice
  #Go to confession. Saint-Willibrord. Your mother's church. Before dawn. Do it properly, the way she would have wanted.
    *set easter_how "confessed"
    *goto confess
  #Go up the mountain. Find the pack. Turn with them at sunrise. Don't be alone for it.
    *set easter_how "wolf"
    *set mc_wolf true
    *goto turn
  *if (met_rose and ((rel_rose >= 30) or invited_rose or slept_rose)) #Go to Le Mardi Gras. Ask Rose to hold the curse for you. He'll want something for it.
    *set easter_how "rose"
    *goto rose_curse
  *if (wishes >= 1) #Spend a wish. Unmake the count. Nadim can take seven Easters back as easily as a moment.
    *set easter_how "wish"
    *set wishes -1
    *set wishes_used +1
    *goto wished

*label confess
*page_break
Saint-Willibrord at half past four in the morning on Easter Sunday is dark and locked.

You're a locksmith. You don't do it. You go round to the rectory door instead, and ring, and after a long time a light comes on upstairs, and after a longer time the door opens on an old man in a dressing gown over his pyjamas, with his glasses on his forehead.

Father Lemieux. Seventy-eight. He's been at Saint-Willibrord since 1990. He buried your mother.

"It's half past four," he says. And then he looks at you properly, and his face changes. "Kath Byrne's boy."

"I need to make my confession, Father. Before dawn. It's... it's important. I'm sorry."

He looks at you for a long time in the doorway, in his dressing gown. Then he steps back and holds the door open.

"Nobody's ever knocked on this door at half past four in the morning to go to confession," he says. "In thirty-six years. Come in. I'll put the kettle on. God won't mind if we do it in the kitchen."

*page_break
He hears your confession at his kitchen table, in his dressing gown, with two mugs of tea and a stole round his neck he's put on over the dressing gown, purple, for Lent, which is over in two hours.

You don't know what to say. You haven't done this since 2019. You haven't done it for yourself, ever.

"Take your time," says Father Lemieux. "Start anywhere."

*choice speak
  #"I haven't been since my mother died. I only ever came for her."
    *set guarded %-10
    *set rel_lucille +5
    "I know," says Father Lemieux, gently. "I watched you. Every Easter. In the middle pew, because she wanted the front and you wanted the back." He smiles. "She told me. She said, [i]he comes for me, Father. One day he'll come for himself.[/i]" He looks at you over his tea. "Is today that day?"
  #"I've done things this month I can't explain to you. I've lied, and broken into places, and I've loved people I'm not supposed to."
    *set guarded %-10
    *set nerve +2
    Father Lemieux listens to all of it, the lying and the breaking in and the loving, without blinking, with his hands round his mug.

    "The first two," he says, when you're done, "are sins. I'll give you a penance. The third one," he looks at you over his glasses, "I'm seventy-eight years old and I've been a priest in Verdun for thirty-six years, and I have never once been sorry that somebody loved somebody. I'm not starting at five in the morning on Easter."
  #"I'm afraid, Father. That's all. I'm so afraid of what's coming."
    *set guarded %-10
    *set wits +2
    Father Lemieux is quiet for a long time.

    "So am I," he says. "Every morning. Since those bells started at three thirty-three." He puts his hand over yours on the kitchen table. "Being afraid isn't a sin, son. It's just the price of paying attention."

*page_break
He absolves you at 5:40 at his kitchen table, with his hand on your head, in Latin, the old way, because, he says, he's old and so is the curse, and it might as well hear the language it knows.

And at six, in the dark church, alone, just the two of you, before the first Mass, he gives you communion.

You feel it go. Under your skin. The ache in your bones, the wrongness in your teeth. It goes out of you like a fever breaking. The dark in the church gets dark again. The smell of the city goes back to being just the smell of an old church at dawn: wax, and stone, and cold.
*if laz_ok
  When you come out onto Verdun Avenue at a quarter past six, Lazare is sitting on the church steps in the dark, in his coat, waiting.
  *if dario_fate = "dead"
    In Dario's toque.
  "I couldn't sleep," he says. "I thought you might be here." He looks at your face. "You did it."

  "I did it."

  He stands up. He doesn't say anything else. He puts his arms round you on the steps of Saint-Willibrord, in the dark, on Easter morning, and holds on, and he's shaking, and you realise he's been sitting there since four.
  *set rel_lazare +10
  *set des_lazare +5
*remember lucille On Easter morning you made your confession at Father Lemieux's kitchen table. For yourself, for once.
*goto sunrise

*label turn
*page_break
*mood wolves
Mount Royal at a quarter to six in the morning. The lookout on the east side. Snow, and dark, and the whole of the east end spread out below you, all the way to the river.

The pack is there. All of them. Twenty people in parkas on the stone wall of the lookout, sitting close together, waiting for the sun.
*if dar_ok
  Dario sees you coming up the path in the dark and stands up. He doesn't say anything. He comes down the steps and meets you halfway and takes your face in both his hands and looks at your eyes.

  "Yeah," he says softly. "Yeah. It's starting." His thumbs move on your cheekbones. "I'm here. I'm right here. I'm not going anywhere."
*else
  Manon sees you coming, or Réjean. They come down the steps and meet you halfway and take your arm.

  "Dario would've wanted to be here for this," they say. "So we're here for him."

*page_break
It hurts.

Nobody lied about that. It starts in your jaw, a grinding, an ache like a tooth coming in, and then your hands, the bones in your hands, lengthening, and you're on your knees in the snow at the lookout with the pack all round you, with their hands on your back and your shoulders and your hair, and somebody's saying your name over and over, and the sky over the east end is going grey, and pink, and gold.

It hurts like being born. You don't remember being born. You'll remember this.

And then the sun comes up over the refinery at Pointe-aux-Trembles, red, at 6:41, and you're on four legs in the snow.

*page_break
The world is enormous.

Every smell on the mountain, every one, at once: the snow and the pine and the stone and the pack all round you, twenty people you can smell the individual hearts of. The city below, a million lives, every kitchen, every bakery, every bus. And sound: the river, the ice, the traffic on the Décarie, a crow on the cross on the summit, your own heart, going like a hammer.

And you're not alone. That's the thing nobody told you right. Twenty other hearts, all round you, going just as fast. They're touching you. Noses and shoulders and warm flanks against yours in the snow.
*if dar_ok
  And one of them, a big grey wolf with a lumpy red toque somehow still hooked over one ear, has his forehead pressed against yours, and is making a sound in his chest you can feel through your skull. Not a growl. Something you don't have a word for yet. You'll learn it.
The whole pack lifts its head at the sunrise, and howls.

You howl with them. It's not a human noise this time. It's perfect.
*set rel_dario +10
*set rel_manon +10
*remember dario On Easter morning you turned, on the mountain, at sunrise, and the pack howled you in.
*goto sunrise

*label rose_curse
*page_break
*mood carnival
*portrait rose smirk
Le Mardi Gras at five in the morning on Easter Sunday.

You strike the match. The door opens. The clocks on the walls say
*if invited_rose
  [b]5:02[/b], and they're ticking.
*else
  [b]11:59[/b], and they're waiting.
Rose is at his table, alone, with no band and no dancers, in black, with his gloves on, as if he's been sitting up all night waiting for you. He probably has.

"A curse," he says, before you can say anything. "Seven Easters. I can smell it on you. Wolf and snow and a little bit of fear." He looks at you with his red-coal eyes. "You want me to hold it."

"Can you?"

"I can hold anything. It's the one thing devils are good at." He folds his gloved hands on the silver head of his cane. "I'll take it into the club. Here, it's always Mardi Gras. It's always the last night before Lent. The curse will never reach its Easter. It'll wait here, at the door, forever, like a dog outside a church." A pause. "But it's still yours. And I'm still holding it. And holding something for someone is..."

"A debt."

"I was going to say [i]intimate.[/i]" He smiles. "But yes. Also a debt."

*choice speak
  #"What do you want for it?"
    *set owe_rose true
    *set rel_rose +5
    "A dance," says Rose. "At the Saint-Jean. The twenty-fourth of June. Whatever happens on that mountain, whatever the angel does, you'll dance with me first." His eyes don't move from yours. "That's all. One dance. I've been waiting two hundred and eighty-six years for someone to finish one with me."
  #"Nothing. You'll do it for nothing. Because you want to."
    *set rel_rose +10
    *set des_rose +10
    Rose goes very still.

    "That's not how it works," he says softly. And then, after a long moment, looking at you: "That's never how it's worked." He takes off one glove. "Give me your hand."

    You give him your hand. He holds it, bare, burning, and something goes out of you, out of your bones and your teeth, into his palm, and the light under his skin flickers wolf-grey for a second, and then red again.

    "Nothing," he says. "For nothing." He sounds astonished. "I've never done anything for nothing in my life."
    *set owe_rose false
  #"Take it. Whatever it costs."
    *set owe_rose true
    *set reckless %+10
    "Whatever it costs," Rose repeats. "Oh, you shouldn't say things like that to me." He takes off his glove. "You should say them to someone who'll lie to you about the price."
Rose takes your hand in his bare burning one, and something goes out of you, out of your bones and your jaw, into his palm, and settles somewhere behind the bar, by the door, where it's always Mardi Gras.

Outside, the sun comes up at 6:41. You don't turn.
*remember rose On Easter morning, at Le Mardi Gras, he took your curse into his hand and put it by the door.
*goto sunrise

*label wished
*page_break
You close your hand on a curl of smoke in your pocket, and ask.

*if nadim_fate = "held"
  From under the island, through the stone and the river and the city, you feel him hear it. The coals flare. [i]Seven Easters,[/i] says a voice in your head, formal and exhausted and fond. [i]Only you would spend a wish on church attendance, creditor.[/i]
*else
  Somewhere in the city, a djinn who's been teaching himself to use a toaster looks up. [i]Seven Easters,[/i] says a voice in your head, formal and amused. [i]Only you would spend a wish on church attendance, creditor.[/i]
The ache goes out of your bones. The wrongness goes out of your teeth. The count goes back to nothing, like an odometer rolled back: 2019, and then nothing since, and nothing owed.

[i]Granted.[/i]

The sun comes up at 6:41. You don't turn. You're very aware, as it comes up, that you've got one wish fewer for whatever's coming.
*remember nadim On Easter morning you spent a wish on seven Easters. He called it church attendance.
*goto sunrise

*comment ---------------------------------------------------------------- SUNRISE
*label sunrise
*page_break
*mood snow
*if easter_how != "wolf"
  *if dar_ok
    You go up the mountain anyway, after, for the end of it. The lookout on the east side. The pack's there, twenty people on the stone wall in the snow, watching the sun come up red over the refinery, not going to Mass, not turning, the only morning of the year nobody turns.

    Dario sees you coming up the path and stands up and looks at your eyes. He looks for a long time.

    "Not today," he says. And you can't tell, from his face, whether he's relieved or sorry. Both, probably. "Okay. Not today." He puts his arm round your neck. "Come watch the sun anyway."
  *else
    You go up the mountain anyway, after, for the end of it. The pack's there, on the stone wall at the lookout in the snow. They make room for you. Nobody asks.
Easter morning. Everyone you love is somewhere in this city, and the bells are on their way home.
*if world = "held"
  The city's asleep, mostly. Easter Mass at nine. Chocolate for the kids. Ham at noon.
*else
  The city's awake. It's the first Easter since 1966 that it's been awake, and it doesn't know what to do with itself. There are people at Mass this morning who haven't been in forty years. There are wolves at Mass this morning, some of them, sitting at the back.

*page_break
At Sainte-Marguerite, at eleven, Mémé has a chocolate egg on her tray, from Ghislaine, and she's saved half of it for you.

"The bells bring them," she says, as she always has, every Easter of your life. "From Rome. They fly back and drop the chocolate on the way." She gives you your half. It's melted a little from her hand. "Eat it before noon. Before they're back."

"Why before noon?"

Mémé looks out of the window at the sky over Verdun, grey and blue, with the river ice going out beneath it.

"Because at noon," she says, "they won't be the only thing coming home."

*page_break
*mood bells
At noon, on Easter Sunday, the bells come back from Rome.

All of them. All at once. Every bell on the island of Montréal, every church, every tower, from Pointe-aux-Trembles to Sainte-Anne-de-Bellevue, the Oratory and the cathedral and Saint-Jean-Baptiste and Saint-Bernardin and Saint-Willibrord and the ten bells of La Tempérance and, over all of them, huge, from La Persévérance, the great bell.

It doesn't stop. That's the first thing. The other bells ring for Easter and stop. The great bell doesn't. It goes on, one note, rising, filling the city, and the windows hum with it, and the snow on the roofs slides off all over the island at once in a great soft roar.

And it speaks.
*effect bells
*meet angel
*set angel_judgment true

*page_break
[b]MONTRÉAL.[/b]

Everyone hears it. Everyone. In the held city, the sleepers hear thunder in April and look up from their hams; the Veillée hear words. In the waking city, everyone hears words, half a million, a million, the whole island stopping in its kitchens and its churches and its streets.

[b]I HAVE BEEN TO ROME AND I HAVE COME HOME.[/b]

[b]FOR FIFTY-NINE YEARS THIS ISLAND SLEPT, AND WHILE IT SLEPT, IT WAS FED UPON. ITS CHILDREN WERE STOLEN FROM THEIR BEDS. ITS DEAD WERE FORGOTTEN. ITS MONSTERS WERE PAID.[/b]
*if world = "held"
  [b]AND NOW IT SLEEPS AGAIN, BECAUSE ONE MORE WAS PAID TO HOLD IT.[/b]
*elseif world = "open"
  [b]AND NOW IT IS AWAKE, AND IT SEES WHAT IT FED, AND WHAT FED ON IT.[/b]
*else
  [b]AND NOW IT HAS CHOSEN A SLEEP. I DO NOT KNOW YET WHETHER A CHOSEN SLEEP IS INNOCENT.[/b]

*page_break
[b]ON THE FEAST OF THE BAPTIST, I WILL BAPTISE THIS ISLAND WITH FIRE.[/b]

The note goes up. The windows crack. All over the island. You hear it: a sound like hail, a million panes of glass starring at once.

[b]THE DAMNED. THE FED-UPON. THE STOLEN. THE UNMADE. EVERY ONE WHO PROFITED. EVERY ONE WHO SLEPT WHILE IT WAS DONE.[/b]
*if mc_wolf
  [b]AND YOU, SERGE'S SON, WHO WAS ONE OF THE LIVING AT CANDLEMAS, AND IS ONE OF THE DAMNED AT EASTER.[/b]

  You're standing in the car park of Sainte-Marguerite with the half-egg of chocolate in your hand, and your new wolf's eyes, and every hair on your body standing up. It's talking to you. It's talking to [i]you.[/i]
*elseif ally_angel
  [b]SERGE'S SON. YOU GAVE ME MY VOICE. YOU WILL COME TO ME ON THE MOUNTAIN, ON THE FEAST. AND YOU WILL SEE WHAT I MUST DO.[/b]
*else
  [b]SERGE'S SON. YOU CARRY MY NAME IN YOUR HANDS. COME TO ME ON THE FEAST, IF YOU DARE.[/b]

[b]ON THE TWENTY-FOURTH OF JUNE. AT THE FIRES.[/b]

And the note goes down, and down, into the stone, and the bells of Montréal, all of them, stop.

*page_break
*mood snow
The city is very quiet for a long time.

Your phone lights up in your hand. Then again. Then it doesn't stop.
*if dar_ok
  *text dario the damned. that's us. that's the pack
  *text dario that's every one of us lacroix
  *if mc_wolf
    *text dario that's YOU now
*if laz_ok
  *text lazare I've heard it every night since I was ten.
  *text lazare I've never heard it angry. That wasn't angry. That was sure.
*if fleurette_fate != "gone"
  *text normande Fleurette says to tell you: "the dead, chéri. It said the dead. It means me."
*text unknown This is Gisèle Pépin's laundromat. Thérèse speaking. The girls say come tonight. Bring the song. All of it.
*if met_rose
  *text unknown It said the damned. I'm rather the original, darling. —R.
*if nadim_out
  *text unknown This is Nadim. Aimé gave me a phone. It said "every one who profited." It means me too. I was the thing they profited from, and I was also the thing that let them.

*page_break
You sit in the car park of Résidence Sainte-Marguerite in the van, on Easter Sunday, with a half-egg of chocolate melting in your hand, and look at the cracked windscreen.

The twenty-fourth of June. Eleven weeks.

On the feast of the Baptist, the whole of Québec builds bonfires. Every town, every village, every park. On the mountain in Montréal there's a stage and a fire the size of a house, and half a million people singing [i]Gens du pays[/i] in the dark. It's the biggest night of the year. It's the shortest.

And an angel is coming to it with fire, for everyone you love.

You put the half-egg in your mouth. It tastes of Easter, and your mother, and the back pew at Saint-Willibrord.

Then you start the van.

*page_break
[b]END OF PART TWO[/b]

*page_break Part Three
*goto_scene ch14
`);
