NB.scene("ch16", String.raw`
*mood eve
*chapter 16 The Longest Days [16]
*temp laz_ok true
*temp dar_ok true
*temp serge_free false
*temp nadim_out false
*temp gis_ok true
*if (lazare_fate = "dead") or (lazare_rehushed and (not(lazare_restored)))
  *set laz_ok false
*if dario_fate = "dead"
  *set dar_ok false
*if keyman_safe and (keyman_fate != "dead") and (keyman_fate != "gardien")
  *set serge_free true
*if (nadim_fate = "free") or (nadim_fate = "held_by_consent")
  *set nadim_out true
*if n9_fell = "gisele"
  *set gis_ok false
June.

The longest days of the year. The sun comes up at five and goes down at nine, and it never really gets dark: at midnight the sky over the mountain is still deep blue, with a green edge in the north, and the swifts are still screaming over the rooftops. Nobody sleeps. Nobody wants to. The whole city's out on its balconies and its terrasses and its back steps till two in the morning, with beer and fans, in the heat.

And all over Québec, in every town and village and park, they're building bonfires for the Saint-Jean.
*if world = "held"
  The sleepers don't know. They're building them for a party. The Veillée know. On the Line, at Saint-Jude, at Chez Normande, they count the days on their fingers: twenty, nineteen, eighteen.
*else
  Everybody knows. There are people leaving the island every day now. There are people coming to it: pilgrims, from as far away as Boston and Ottawa, who want to see an angel. The Archbishop's asked the city to cancel the Fête nationale on the mountain. The city's refused. "It's been on the mountain since 1834," the mayor says on the news. "We're not moving it for an angel."

*page_break
You gather them.

You spend the first two weeks of June going round the city, the way you went round it in February, from one end to the other, in the van. Saint-Jude. The laundromat. The Line. Chez Normande. Bélanger & Fils. Le Mardi Gras. The towers of Notre-Dame. Strachan House.

You ask every one of them the same thing: [i]will you be there? On the mountain? On the twenty-fourth?[/i]

And they say yes.
*if dar_ok
  "The whole pack," says Dario, in the sacristy kitchen, in the lobster apron. "Every one. It said [i]the damned.[/i] That's us. We're not going to be at home under the bed when it comes."
*if laz_ok
  "I'll be in the tower," says Lazare. "Or beside you. Wherever you need me. I'm done not being where I'm needed."
*if nadim_out
  "Zeina and I will be there," says Nadim. "It said [i]everyone who profited.[/i] We were the profit." He smiles, thinly. "It seems only fair to go and see what it thinks of that."
*if gis_ok
  "I'm eighty-six," says Gisèle. "I've got a laundromat and a canoe and four women who drink too much. Of course we'll be there."
*else
  "We'll bring the canoe," says Thérèse, with Gisèle's cardigan over her shoulders. "She'd want us to."
*if fleurette_fate != "gone"
  "Darling, I'm [i]booked[/i]," says Fleurette.
*if met_rose and (price != "rose")
  "I wouldn't miss it," says Rose. "It's the first time in three hundred years anyone's promised to set me on fire in public."
*if honora_turned
  "The Club," says Honora, "will stand where you tell it to. The members who haven't been tidied, anyway."
*if clarke_turned
  "The Line goes where you go," says the Conductor. "It has since February."

*page_break
*mood oxblood
The laundromat. The twentieth of June. Ten o'clock at night, and still light outside.

The card table's covered in maps again: the mountain this time. Mount Royal, the park, the paths, the lookouts, the cross on the summit. And the great field below the Chalet, where they build the fire every year for the Fête nationale: a pyre of logs as big as a house, and a stage beside it, and screens, and room for half a million people on the slopes.
*if gis_ok
  "Four things," says Gisèle, stabbing the map with a nicotine-yellow finger. "Same as February. Different jobs."
*else
  "Four things," says Thérèse, stabbing the map with Gisèle's cigarette, unlit. "She always said four."
"[b]The Fire.[/b] The Club wants that bonfire for something. Iron, and a djinn, and the angel's own flame to make a new Hush with. Somebody has to hold the fire."

"[b]The Bell.[/b] Jean-Baptiste. In the tower. The angel comes to the mountain, but its voice is still in the bronze. Somebody should be up there with it when it speaks."

"[b]The Crowd.[/b] Half a million people on the mountain in the dark, singing, when an angel comes down on a bonfire. Somebody keep them from running."

"[b]And beside you.[/b] At the fire. When you sing it the song."

*page_break
[b]The Fire.[/b] Who holds it against the Club?

*choice
  *if (dar_ok) #@dario Dario and the pack. A ring of wolves round a bonfire. It's practically folklore.
    *set sj_fire "dario"
    *set ally_dario true
    "A ring of wolves round the fire," says Dario, grinning. "On the Saint-Jean. My nonna would've crossed herself so hard she'd have sprained something."
  *if (honora_turned) #Honora. She knows exactly what her members want with that fire. She taught them.
    *set sj_fire "honora"
    *set ally_honora true
    "I taught them everything they know," says Honora. "I shall enjoy correcting them."
  *if (nadim_out) #@nadim Nadim and Zeina. It's their fire the Club wants. Let two djinn guard it.
    *set sj_fire "nadim"
    Nadim looks at his sister. Zeina looks at him. Something passes between them, very old. "Two djinn at a bonfire," says Nadim. "Anybody who brings iron near it will find out what fire actually is."
  *if (clarke_turned) #The Conductor and the Line.
    *set sj_fire "clarke"
    *set ally_clarke true
    "The Line will guard the fire," says the Conductor. "It's the least we can do. We sold the first djinn, after all."
  *if (agathe_turned) #Agathe, and the hunters who'll follow her. They know iron better than anyone.
    *set sj_fire "agathe"
    "Iron," says Agathe. "We know iron." She looks at her hands. "It's the first time I'll be using it to protect something."
  #The Bélangers. Every undertaker in the family since 1911, in black suits, standing round a fire like a wake.
    *set sj_fire "belanger"
    Monsieur Bélanger puts on his good coat. "We stand with the dead every day," he says. "We can stand with the living for one night."

*page_break
[b]The Bell.[/b] Who's in the tower of La Persévérance, with Jean-Baptiste, when it speaks?

*choice
  *if (laz_ok) #@lazare Lazare. He's heard it every night since he was ten. It knows him.
    *set sj_bell "lazare"
    *set ally_lazare true
    "Yes," says Lazare. Just that. His hand goes to his chest, where a bell used to hang.
  *if ((bourdon_ask = "yes") or (bourdon_ask = "lazare")) #The Bourdon. He asked. To ring it once, to call it home.
    *set sj_bell "bourdon"
    *set rel_bourdon +5
    You tell the old man. He's sitting in his armchair by the window in the study under the belfry, with a blanket on his knees, in June. He doesn't say anything. He just nods, and closes his eyes.
  *if (mathis_mother or mathis_out) #@mathis Mathis. He hears it. He said somebody should tell it we're sorry.
    *set sj_bell "mathis"
    *set rel_mathis +10
    Mathis's mother says no. Mathis says he'll go by the sacristy way anyway. His mother says she'll come with him. That's how it's settled.
  *if (serge_free) #@keyman Your father. He used to put his hand on it when he was young, and not know why.
    *set sj_bell "serge"
    *set ally_keyman true
    Your father nods slowly. "I'll put my hand on it," he says. "And this time I'll know why."
  #Nobody. Let it speak to an empty tower. It's been doing that for fifty-nine years.
    *set sj_bell "none"

*page_break
[b]The Crowd.[/b] Half a million people on the mountain in the dark.

*choice
  *if (fleurette_sj and (fleurette_fate != "gone")) #@fleurette Fleurette. On every screen. One song, so they're not afraid.
    *set sj_crowd "fleurette"
    *set ally_fleurette true
    "One song," says Fleurette, from the compact on the card table. "And then my name. And then..." She doesn't finish. "Yes, chéri. Leave them to me."
  #@aime Aimé. He has the voice for it. He's used it on four hundred families.
    *set sj_crowd "aime"
    *set ally_aime true
    Aimé straightens his tie. "Everybody's worried about the cat," he says. "At the end. I'll tell them the cat's fine."
  *if (clarke_turned and (sj_fire != "clarke")) #The Conductor. A steward on every path.
    *set sj_crowd "clarke"
    *set ally_clarke true
    "Mind the gap," says the Conductor. "On a mountain. Yes. I can do that."
  *if (dar_ok and (sj_fire != "dario")) #@dario The pack, scattered through the crowd. The nice wolves.
    *set sj_crowd "dario"
    *set ally_dario true
    "Tuques," says Dario. "In June. We'll hand out tuques. Nobody's afraid of a wolf with a tuque."
  #The canoe. Five old women circling overhead. Nobody panics near a nonna.
    *set sj_crowd "gisele"
    *set ally_gisele true
    "We'll be the light show," says the laundromat, all at once.

*page_break
[b]Beside you.[/b] At the fire. When you sing it the song.

*choice
  *if (laz_ok and (sj_bell != "lazare")) #@lazare Lazare.
    *set sj_beside "lazare"
    *set rel_lazare +10
    Lazare looks at you across the laundromat, and nods.
  *if (dar_ok and (sj_fire != "dario") and (sj_crowd != "dario")) #@dario Dario.
    *set sj_beside "dario"
    *set rel_dario +10
    Dario looks at you, and for once in his life doesn't say anything.
  *if (laz_ok and dar_ok and (sj_bell != "lazare") and (sj_fire != "dario") and (sj_crowd != "dario") and throuple_ready) #Both of them. One on each side. The way it was on the step.
    *set sj_beside "both"
    *set rel_lazare +5
    *set rel_dario +5
    They look at each other across the laundromat. Then at you. Neither of them says anything. Neither of them has to.
  *if (serge_free and (sj_bell != "serge")) #@keyman Your father. Two Lacroix. The way the song was meant to be sung.
    *set sj_beside "serge"
    *set rel_keyman +10
    Your father puts his hand on the back of your neck.
  *if (met_rose and (price != "rose")) #@rose Rose. He asked to answer it. Let him stand beside you while he does.
    *set sj_beside "rose"
    *set rel_rose +10
    Rose bows, very deeply, from the doorway.
  *if (nadim_out and (sj_fire != "nadim")) #@nadim Nadim. It's his fire it wants. Let him look it in the face.
    *set sj_beside "nadim"
    *set rel_nadim +10
    Nadim goes very still. Then he nods.
  #Nobody. It's a Lacroix song. A Lacroix sings it.
    *set sj_beside "none"
    *set guarded %+10

*page_break
*mood eve
The twenty-second of June. The longest day of the year was yesterday. Tonight's the last night before.

It doesn't get dark. That's the thing. At eleven o'clock the sky over the mountain is still blue, and there's a green light in the north, and the swifts are still out, and the city smells of cut grass and hot tar and somebody's barbecue.

Who do you spend it with?

*choice
  *selectable_if (laz_ok and (des_lazare >= 50) and (rel_lazare >= 50)) #@lazare Lazare.
    *set last_before "lazare"
    *set final_romance "lazare"
    *goto lb_lazare
  *selectable_if (dar_ok and (des_dario >= 50) and (rel_dario >= 50)) #@dario Dario.
    *set last_before "dario"
    *set final_romance "dario"
    *goto lb_dario
  *selectable_if (laz_ok and dar_ok and throuple_ready and (des_lazare >= 50) and (des_dario >= 50)) #Both of them.
    *set last_before "both"
    *set final_romance "both"
    *goto lb_both
  *selectable_if (met_rose and (price != "rose") and (des_rose >= 50)) #@rose Rose.
    *set last_before "rose"
    *set final_romance "rose"
    *goto lb_rose
  *selectable_if (nadim_free and (nadim_q = "yes") and (des_nadim >= 40)) #@nadim Nadim.
    *set last_before "nadim"
    *set final_romance "nadim"
    *goto lb_nadim
  #Everyone. The back steps at Saint-Jude, or Chez Normande, or the laundromat roof. All of them. No bed tonight.
    *set last_before "friends"
    *goto lb_friends
  #Nobody. The river. The van. The island across the water.
    *set last_before "alone"
    *goto lb_alone

*label lb_lazare
*page_break
*portrait lazare smile
He takes you up the tower.

La Tempérance. The ringing room, the ten ropes hanging in their circle with their sallies of striped wool. And then up the ladder into the bell chamber, among the ten bells, [i]up[/i], mouths to the sky, the way they were the night you strapped leather onto their clappers. And out through a hatch onto the leads.

The roof of Notre-Dame at midnight on the twenty-second of June. Still blue. Warm. The whole city glittering to the mountain, and on the mountain, black against the green sky, the shape of the pyre they've built for the Saint-Jean, as big as a house.

"I brought a blanket," says Lazare. "And a bottle of wine I don't know anything about." He spreads the blanket on the leads, in the lee of La Persévérance, where the great bell hangs, humming, behind the stone. "I wanted a whole night. You said once: after. A whole night where nobody's ringing anything." He looks at you. "It's the only night left before."

*choice speak
  #"Then let's have it."
    *set des_lazare +10
  #"Up here? On the roof of Notre-Dame?"
    *set wry %+5
    "Where else," says Lazare, and for the first time since you've known him, he sounds like Dario. "I've been sleeping under this roof since I was ten. I'd like to sleep on top of it, once."
*set slept_lazare true
*set des_lazare +10
*set rel_lazare +10
*page_break
*if steam
  He asks. Every time. He always will; it's who he is. But tonight the asking's different. Tonight he asks and doesn't wait for the answer, because he already knows it, and you both laugh at that, on the roof, in the warm dark, with your shirts off and the city below.

  He's not careful tonight. He's not patient. For the first time since you met him he's something else: greedy, open, laughing into your mouth, pushing you down onto the blanket on the warm lead and following you down, his long body over yours, his curls falling in your face. He wants everything, and he says so, out loud, in words, in French and in Italian and in English, and then he takes it, and gives it, and the great bell hums behind the stone the whole time like something holding its breath.

  At the end he says your name. Not his. Yours. Over and over, into your throat, like a man learning a new prayer.

  Afterward, you lie on the blanket on the roof of Notre-Dame with his head on your chest and the green light in the north going slowly pink over the river.

  "I'd like to marry you," he says, to the sky. "Not now. Not yet. I don't even know if I believe in it. I'd just like to. One day. In front of my mother." He turns his head and looks at you. "You don't have to say anything."
*else
  He asks. Every time. But tonight he doesn't wait for the answer, because he already knows it, and you both laugh at that, on the roof, in the warm dark.

  Afterward you lie on the blanket on the leads with his head on your chest and the light in the north going pink. "I'd like to marry you," he says, to the sky. "One day. In front of my mother." He looks at you. "You don't have to say anything."
*choice
  #"One day. In front of your mother. And mine, if she's watching."
    *set rel_lazare +10
    *set final_romance "lazare"
    He closes his eyes. He doesn't say anything. His hand finds yours on the warm lead and holds on.
  #Don't say anything. Kiss him instead.
    *set des_lazare +5
*remember lazare The last night before the Saint-Jean, on the roof of Notre-Dame. He said: one day, in front of my mother.
*goto june23

*label lb_dario
*page_break
*portrait dario smile
He takes you to the lookout on the east side of the mountain, in the tow truck, with the windows down and Céline on the radio. The one where you watched the sun come up at Easter.

From up here you can see it: the pyre on the field below the Chalet, black against the green sky. And the whole of the east end. And the river. And Saint-Léonard, somewhere, with a step on rue Jarry.
*if mc_wolf
  "Run with me," he says. "One more time. Before." And you do: the whole mountain, in the blue dark, two wolves, the smell of cut grass and lilac leaves and the city, and the swifts screaming overhead.
*page_break
*set slept_dario true
*set des_dario +10
*set rel_dario +10
*if steam
  Afterward, in the back of the tow truck, on the flatbed, on the afghan he's brought up the mountain because he's a romantic under all of it, in the warm dark with the city below.

  It's slow. It's the slowest it's ever been with him. He takes you apart like one of your locks, listening, with his big hands and his beard and his mouth, and every time you make a sound he stops and looks at your face as if he's memorising it. As if he's afraid he'll need it later. His eyes are gold all the way through. He's shaking with holding back, and when you pull him down and tell him to stop holding back, he laughs, low, into your throat, and doesn't.

  At the end he says something in Italian that you'll ask him about later, and he'll tell you, straight away, without going red, because he's never been embarrassed about anything in his life: [i]I'd set myself on fire for you. I'd do it on the Saint-Jean. In front of everyone.[/i]

  "Don't," you say.

  "I know." He kisses your temple. "I'm just saying I would."
*else
  Afterward, in the back of the tow truck, on the flatbed, on the afghan he's brought up because he's a romantic under all of it. It's the slowest it's ever been with him, as if he's memorising your face. At the end he tells you, in Italian and then in English, that he'd set himself on fire for you. "Don't," you say. "I know," he says. "I'm just saying I would."
*choice
  #"Ask me again. About the rectory. I'll say yes."
    *set moved_in "jude"
    *set final_romance "dario"
    *set rel_dario +10
    "Move in," says Dario, instantly. "Move in, move in, move in. On the twenty-fifth. I'll carry your boxes."
  #Don't say anything. Lie on the flatbed with him till the sky goes pink.
    *set des_dario +5
*remember dario The last night before the Saint-Jean, on the flatbed of the tow truck on the mountain. He said he'd set himself on fire for you. You said don't.
*goto june23

*label lb_both
*page_break
Your apartment in Verdun. The new bed, the bigger one, that you bought in May at the place on Newman Boulevard, which took three of you and a tow truck to get up the stairs.

The windows open. The fan going. The city outside, hot and loud and not sleeping. The three of you on the bed in the half-dark with the sheet kicked off, not doing anything yet, just lying there, in the heat, with your legs tangled, listening to the swifts.

"Tomorrow," says Lazare.

"Don't," says Dario. "Not tonight. Tonight isn't tomorrow."

*set slept_both true
*set slept_lazare true
*set slept_dario true
*set des_lazare +10
*set des_dario +10
*set rel_lazare +10
*set rel_dario +10
*page_break
*if steam
  It's different now. It's not the clumsy, laughing, bed-breaking night in February. It's three people who know each other: who've had four months of Sundays and arguments and dinners and a shared calendar, God help you, and know exactly where to put their hands.

  Lazare, asking. Always asking. [i]Him? Now? Like this?[/i] And Dario answering for all of you, [i]yes, yes, obviously yes, Enzo, stop talking[/i], and Lazare laughing, which he does all the time now, which he never used to. Dario's mouth on your throat. Lazare's hand in your hair. The heat of the night and the heat of them, the three of you slick with it, and the fan going round and doing nothing.

  They take turns, and then they don't take turns. At one point you're watching them, the two of them, the way you did in February, and Dario's got Lazare's face in both his big hands and he's saying his name like it's the only word he knows, and Lazare's saying yours, and reaching for you, and you're there, and there's no middle and no edge any more, just the three of you in the heat.

  Afterward, in the pink light at four in the morning, nobody's asleep.

  "We should get married," says Dario, into the pillow.

  "You can't marry two people," says Lazare.

  "Says who?"

  "The law."

  "Then we'll break it. I know a locksmith."
*else
  It's different now. Three people who know each other: four months of Sundays and arguments and a shared calendar, God help you. The heat of the night and the heat of them, the fan going round and doing nothing. There's no middle and no edge any more.

  Afterward, in the pink light at four in the morning, nobody's asleep. "We should get married," says Dario, into the pillow. "You can't marry two people," says Lazare. "Then we'll break the law," says Dario. "I know a locksmith."
*set final_romance "both"
*remember lazare The last night before the Saint-Jean, in the new bed. Dario said: we should get married. Lazare said: you can't. Dario said: I know a locksmith.
*remember dario The last night before the Saint-Jean, in the new bed. He said: we should get married.
*goto june23

*label lb_rose
*page_break
*portrait rose smile
Le Mardi Gras. Midnight. The real midnight.
*if invited_rose
  The clocks tick. The windows are open. It's June in there now, like everywhere else, and the dance floor's empty, and the band's gone home, and Rose is standing in the middle of the black and white tiles in his shirtsleeves, with no gloves on.
*else
  The clocks say [b]11:59[/b]. They've said it since February. The dance floor's empty. Rose is standing in the middle of it, in his shirtsleeves, with his gloves in his hand.
"One dance," he says. "You owe me the end of one. You've owed it since Mardi Gras."

The fiddler in the red sash comes out from behind the bar, where you didn't see him, and plays.

It's the reel from February. The one from before there were cities. Rose takes you in his arms, bare hands, burning, at your back and in your hand, and you dance. Not fighting for the lead this time. Not following. Something else: the two of you moving together across the empty floor like two people who've stopped keeping score.
*if not(invited_rose)
  And at the end of it, as the fiddler draws out the last note, every clock in Le Mardi Gras ticks, all at once, for the first time since February. [b]12:00.[/b]

  Rose looks up at them. He laughs, a shocked, delighted, helpless laugh. "Midnight," he says. "Oh. It's midnight. It's [i]Lent.[/i]"
*set slept_rose true
*set des_rose +10
*set rel_rose +10
*page_break
*if steam
  He takes you upstairs. You didn't know there was an upstairs. There is: a room above the club with a bed from 1740 and a window over the Main, open, the street noise coming in, the heat.

  He undresses you with his bare hands, and everywhere he touches, the heat stays, a trail of it, like sunburn made of pleasure. The light under his skin is red and gold and so bright the room's lit with it. He talks, the way he always does, low in your ear in French from 1740 and English from 1940, telling you what he's going to do, and asking, every time, [i]yes?[/i], and waiting, and every yes you give him makes the light flare until you can see it through your closed eyelids.

  Tonight, for the first time, he lets you lead. All the way. He lies back on the old bed with his burning hands open on the sheets and lets you do whatever you want, and watches you do it with his red-coal eyes wide open, as if he's never been looked at before. When you're both undone he says your name, not like a courtier, not like a devil, but like a man.

  Afterward, with the Main going by outside and the sky already getting light at four, he says: "Tomorrow, I'm going to stand in front of an angel and ask it to judge me." His hand is on your chest. "If I go out, darling, I'll come back. A hundred years. On a Mardi Gras." A pause. "Wait for me? No. Don't. Don't wait. Just... remember the dance."
*else
  He takes you upstairs, to a room above the club with a bed from 1740 and a window over the Main. Everywhere his bare hands touch, the heat stays. Tonight, for the first time, he lets you lead. Afterward, with the sky already getting light, he says: "If I go out tomorrow, I'll come back. A hundred years. Don't wait. Just remember the dance."
*remember rose The last night before the Saint-Jean, you finished the dance, and he let you lead.
*goto june23

*label lb_nadim
*page_break
*portrait nadim true
The island. Parc Jean-Drapeau, the old Expo grounds, at midnight on the twenty-second of June, still blue, with the Biosphère glowing through the trees.

He takes you to the fort. Not the powder house; he won't go near it. The old stone wall above the river, where you can see the whole city across the water, lit up to the mountain, and on the mountain the pyre, black against the green.

"I've never done this," he says. "Not in four thousand years. Not with someone who could say no." He looks at you. His eyes are pure fire, no amber at all. "I'm going to ask. Every time. I learned that from a hunter."
*set slept_nadim true
*set des_nadim +15
*set rel_nadim +10
*page_break
*if steam
  He asks. [i]May I?[/i] and [i]here?[/i] and [i]yes?[/i], and every yes you give him, the air around you gets hotter, until the grass on the old wall is steaming and the stone under your back is warm as a hearth.

  He's so warm. Everywhere. His hands, his mouth, his skin, like lying in the sun on a hillside above a sea. He touches you like a man who's been in the dark for sixty-eight years and has just been handed the whole summer at once: slowly, and then not slowly at all, with a kind of astonished greed. His smoke comes loose at the edges when he's close, curling round you both, gold and dark, smelling of cedar. When you come apart under him he's saying something in the language older than the cedars, and the whole wall lights up, for a second, like a lantern, and across the river on the Montréal side somebody sees it and thinks it's the fireworks starting early.

  Afterward, lying on the warm stone with his head on your shoulder and his smoke still curled round your wrist like a bracelet, he says: "Yes. That's what yes feels like. When somebody could have said no." He laughs, softly. "I've waited four thousand years to find out."
*else
  He asks. Every time. And every yes you give him, the air gets hotter, until the grass on the old wall is steaming and the stone is warm as a hearth. His smoke comes loose at the edges and curls round you both, smelling of cedar. Afterward, with his head on your shoulder, he says: "That's what yes feels like. When somebody could have said no. I've waited four thousand years to find out."
*remember nadim The last night before the Saint-Jean, on the old wall of the fort above the river. He asked every time.
*goto june23

*label lb_friends
*page_break
You end up on the roof of the laundromat.

You don't know how. It starts at Chez Normande and moves to Saint-Jude and ends up, at two in the morning, on the flat roof of Buanderie Pépin in the Pointe, with the canoe up there too, and a cooler of beer, and every single person you've met since February who's still alive and able to climb a fire escape.

Dario and the pack. Lazare, in the toque or not. Aimé, in his shirtsleeves. Nadim and Zeina, arguing in the old language. The witches, with gin. The Conductor, in his cap, very dignified on an upturned crate. Mathis, who was supposed to be asleep and isn't, on his mother's knee. Rose on the edge of the roof in his shirtsleeves with his gloves off, looking at the mountain.
*if fleurette_fate != "gone"
  The compact open on the cooler, and Fleurette's voice coming out of it, telling everyone her plans for tomorrow, which involve sequins.
*if serge_free
  Your father, with a beer he isn't drinking, looking at all of it with an expression you'll remember for the rest of your life.
Nobody talks about tomorrow. Nobody talks about the angel, or the fire, or the damned. Somebody puts on music. Johnny Tabarnak does Sinatra. Dario does Céline. You do "Total Eclipse of the Heart", badly, and everyone sings the [i]turn around[/i] parts.

At four the sky goes pink over the river, and everyone's asleep on the roof in a heap, except you.

You sit on the edge of the roof beside the canoe, and look at the mountain, and the pyre, and the cross, going pink in the dawn, and you think: [i]these are my people. Every one of them is damned, by somebody's count. And tomorrow I'm going to stand in front of an angel for them.[/i]
*set rel_dario +5
*set rel_lazare +5
*set rel_aime +5
*set rel_nadim +5
*set rel_fleurette +5
*remember aime The last night before the Saint-Jean, on the laundromat roof, everyone. You did "Total Eclipse of the Heart".
*goto june23

*label lb_alone
*page_break
The river. The van. The foot of the Jacques Cartier Bridge, where you sat the night before Nuit blanche.

It's warm this time. The windows are down. The river's black and fast and full of summer. The island across the water is dark green, and the fort is somewhere in there, and the powder house, and a steel door.

You sit there all night. You don't sleep. You think about February, and the door, and a voice on the phone saying [i]le fort a besoin de son gardien[/i]. You think about your mother, and Mémé, and your grandfather with his tuning fork in a bell tower in the summer of 1966.

You hum it. Six notes, down and up and held.

At four the sky goes pink. Across the river, on the mountain, the pyre stands black against it, waiting.
*goto june23

*label june23
*page_break
*mood white
The twenty-third of June.

The eve of the Saint-Jean. All over Québec, in every town and every village, they light the bonfires at dusk. You can see them from the mountain if you stand on the lookout: little orange points of light across the whole dark country to the east, dozens, hundreds, one for every village, all the way to the river's mouth.

On Mount Royal, on the field below the Chalet, half a million people are coming up the paths in the long blue twilight, with coolers, and blankets, and kids on their shoulders, and flags, blue and white. The stage is lit. The screens are lit. There's music.

And the pyre, as big as a house, is waiting to be lit at midnight.

*page_break Chapter Seventeen
*goto_scene ch17
`);
