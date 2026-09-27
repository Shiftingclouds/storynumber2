NB.scene("ch12", String.raw`
*mood bells
*chapter 12 Holy Week [12]
*temp laz_ok true
*temp dar_ok true
*temp serge_free false
*temp nadim_out false
*temp dfit 0
*temp decoyfit 0
*temp bfit 0
*temp was ""
*if (lazare_fate = "dead") or (lazare_rehushed and (not(lazare_restored)))
  *set laz_ok false
*if dario_fate = "dead"
  *set dar_ok false
*if keyman_safe and (keyman_fate != "dead") and (keyman_fate != "gardien")
  *set serge_free true
*if (nadim_fate = "free") or (nadim_fate = "held_by_consent")
  *set nadim_out true
[b]Palm Sunday. The twenty-ninth of March.[/b]

The ice goes out on the river the week before Easter. It always has. You grew up with it: the sound of it, at night, from Verdun, a groaning and cracking like somebody enormous turning over in bed, and then one morning the river's open and black and full of floes going down to the sea.

Mémé can hear it from her window at Sainte-Marguerite. She's been listening all week.

You bring the date squares from the Portuguese bakery. A lot. She eats one, very slowly, in her chair by the window, in her pink cardigan, and gives the rest to Ghislaine to share with the night staff, and holds your hand, and listens to the river.

"When I was a girl on Rielle Street," she says, "we'd go down to the bank on the Sunday before Easter and watch it go. Everyone. The whole street. My father said it was the river going to confession." She smiles. "He said it had a lot to confess."
*if not(meme_key_back)
  *if hush_fate != "remade"
    She pats your hand. "You still have my key?"

    "Yes, Mémé."

    "Good. I'll ask for it once more. Not yet."
She's quiet for a long time. Then: "The bells go on Thursday," she says. "To Rome. They always come back on Sunday. But this year..." She looks at you. "This year I don't think they're coming back alone."
*set rel_lucille +5

*page_break
That afternoon, at three, the Carillon rings its last full peal before the silence.

You hear it from everywhere on the island. The old town first, the ten bells of La Tempérance, and then every tower in the city taking it up: Saint-Joseph's Oratory, the cathedral, Saint-Jean-Baptiste on Rachel, Saint-Bernardin on Jarry, Saint-Willibrord in Verdun where your mother dragged you every Easter. Palm Sunday. Changes, row after row, bright and cold and mathematical, for an hour.
*if bourdon_knows
  The Bourdon rings it himself. You know it without being told. There's something in the tenor: a man who's rung a bell every day for sixty years, ringing it like he's saying goodbye.
*if laz_ok
  *if lazare_left_carillon or (path = "wolves")
    Lazare stands in the street outside your building with his head tipped back and his eyes closed and listens to the whole thing, all hour, in the slush, without moving. When it's over he opens his eyes.

    "I know every one of those ringers," he says. "I could tell you who's on every rope." He looks at his hands. "I don't know what to do with my hands."
  *else
    Lazare rings the tenor. Of course he does. He's in the tower, still, with the novices, and when it's over he texts you one word: [i]Thursday.[/i]

*page_break
*mood snow
[b]Holy Thursday. The second of April.[/b]

At the evening Mass of the Lord's Supper, in every church in Québec, at the Gloria, every bell rings, all at once, as loud as they can, every bell in the building, the altar bells and the tower bells and the little handbells in the servers' hands. And then they stop.

And they don't ring again until Easter.

The bells have flown to Rome. Every child in Québec knows it: on Holy Thursday the bells fly away to Rome to be blessed by the Pope, and on Easter morning they fly back, bringing chocolate eggs. For three days, nothing rings. Not the Angelus. Not the hours. Not the Carillon.

Not the great bell in La Persévérance at 3:33.

Where are you at the Gloria?

*choice
  *if (laz_ok) #@lazare With Lazare. A ringer with nothing to ring.
    *set hw_thursday "lazare"
    *set time_lazare +1
    *goto th_lazare
  *if (dar_ok) #@dario At Saint-Jude, with the pack. They have no bells. They have a karaoke machine.
    *set hw_thursday "dario"
    *set time_dario +1
    *goto th_dario
  *if (price != "") #At the fort. With whoever's holding the city asleep. Nobody should be alone when the bells go.
    *set hw_thursday "fort"
    *goto th_fort
  #At Saint-Willibrord in Verdun. Your mother's church. The back pew.
    *set hw_thursday "willibrord"
    *goto th_willibrord

*label th_lazare
*page_break
*portrait lazare sad
*if lazare_left_carillon or (path = "wolves")
  You take him to Notre-Dame. To the Mass. He says he doesn't want to go and then he's walking faster than you up Saint-Sulpice.
*else
  He meets you on the steps of Notre-Dame. He's come down from the tower for it. He says the Bourdon told him to go and sit in the nave with the people, just once, and listen to it from the outside.
You sit at the back of the basilica, in the blue and gold dark, among a thousand candles and a few hundred people, and when the priest intones the Gloria every bell in the building goes off at once: the organ, the choir, the little altar bells shaking in the servers' hands, and above you, through the stone, the ten bells of La Tempérance and the great bell in La Persévérance, all together, as loud as they've ever rung.

Lazare's hand finds yours on the pew and grips so hard it hurts.

And then they stop.

The silence is enormous. The whole basilica is full of it. And Lazare Desautels, who has heard a bell every day of his life since he was ten years old, sits in the silence with his eyes wide open, and starts, very quietly, to shake.

*choice speak
  #Put your arm round him. "It's all right. They're coming back. Sunday."
    *set rel_lazare +10
    *set des_lazare +5
    He leans into you, there on the pew, in front of everyone. "I've never heard it," he says, into your shoulder. "Nothing. I've never once in twenty-one years heard nothing." A breath. "It's so loud."
  #"What does it sound like? The nothing?"
    *set rel_lazare +10
    *set lore +2
    He thinks about it for a long time, in the silence, with the candles.

    "Like being ten," he says finally. "In my bed on Jarry. Before they came." He looks at you. "I'd forgotten there was a before."
  #Don't say anything. Hold his hand in the silence until he stops shaking.
    *set des_lazare +10
    You hold his hand. It takes the whole Mass. By the end, he's stopped shaking, and he's looking up at the ceiling of Notre-Dame, blue and gold, with an expression you've never seen on him before: not afraid of anything.
*remember lazare On Holy Thursday, when the bells flew to Rome, he heard nothing for the first time since he was ten.
*goto friday

*label th_dario
*page_break
*portrait dario smile
Saint-Jude has no bells. The bell went to a church in Ontario in 1998 to pay the heating bill.

So at eight o'clock on Holy Thursday, when the Gloria's being sung in every church in the city, Dario Santangelo climbs up on the altar at Chez Jude under the disco ball, and turns on the karaoke machine, and the whole pack rings every bell it can find: bicycle bells, a cowbell, the little brass bell from the reception desk at the Jean-Talon hospital that Kim stole in 2019, the dinner bell from the sacristy, a wind chime, Johnny Tabarnak hitting a saucepan with a spoon. For one minute, Saint-Jude is the loudest church on the island.

And then they stop, and everyone's laughing, and Dario turns to you in the silence with his toque crooked and his face shining.
*if laz_ok
  "Enzo'd hate this," he says, delighted. "He'd say it was blasphemy."

  "It's a bit blasphemy."

  "It's a lot blasphemy." He puts his arm round your neck. "Happy Holy Thursday, Lacroix."
*else
  "Enzo would have hated this," he says, and his voice catches, just once, and then doesn't. "He'd have said it was blasphemy." He puts his arm round your neck. "He'd have been right."

*choice speak
  #"Happy Holy Thursday, Santangelo." Kiss him, in front of the whole pack.
    *set des_dario +10
    *set rel_dario +5
    The pack loses its mind. Somebody rings the cowbell again, which is definitely a sin.
  #"What happens to the pack at Easter? I've never asked."
    *set rel_dario +10
    *set lore +2
    "We go up the mountain," he says. "Every Easter, at dawn. All of us. We watch the sun come up over the east end, and we don't go to Mass, and we don't turn. It's the only morning of the year nobody turns." He looks at you. "You'll come. This year. Whatever happens."
  #Ring the reception bell. Once. Just to be the last one.
    *set rel_dario +5
    *set wry %+10
    [i]Ding.[/i]

    Twenty wolves turn and look at you. And then the whole church cracks up, and Dario laughs so hard he has to sit down on the altar step.
*remember dario On Holy Thursday, the pack rang every bell they could find at Chez Jude. Then silence.
*goto friday

*label th_fort
*page_break
You go down the stairs of the powder house with the bells ringing overhead, the Gloria from every church on the island coming through the stone, and then, all at once, as you reach the bottom, it stops.
*if price = "nadim"
  *portrait nadim hushed
  Nadim, in his three bands, a column of coals. In the silence, he brightens. You watch it happen: the coals going from dull red to orange to something almost gold.

  "It's quiet," he says, wondering. "Creditor. It's [i]quiet.[/i] For the first time in fifty-nine years there's nothing ringing over me." A sound like a laugh. "I can hear the river."
*elseif price = "serge"
  *portrait keyman smile
  Your father, in his three bands, glowing faintly gold. He opens his eyes when the bells stop.

  "Oh," he says softly. "Oh, that's better. I didn't know how loud it was." He looks at you. "Three days. Nadim used to talk about Holy Week. He said it was the only three days a year he could think."
*elseif price = "rose"
  *portrait rose smile
  Rose, in his three bands, with his bare hands on the brass. When the bells stop, the light under his skin flares so bright you have to shield your eyes.

  "Well," he says. "That's a relief. The Church has been ringing at me for three hundred years." He smiles. "Three days off. Whatever shall I do."
*else
  *portrait nadim smile
  Nadim, in the middle of the room, not bound, by choice, standing beside the open bands with his hand resting on the chest band where the little key sits in its keyhole. He looks up when the bells stop.

  "It's quiet," he says. "The lullaby's still holding. It doesn't need the bells." He sounds surprised. "It's holding because they want it to."
*choice speak
  #Sit on the bottom step. Stay the whole night.
    *set rel_nadim +5
    *set rel_keyman +5
    *set rel_rose +5
    You sit on the bottom step. You stay the whole night. Neither of you says much. At some point you fall asleep with your head against the brick, and when you wake up there's a warmth on your shoulder like a hand.
  #"Three days without bells. Is there anything you want to do with them?"
    *set wits +2
    *if price = "nadim"
      "Listen," says Nadim. "Just listen. And maybe..." He hesitates. "Maybe on Saturday, when it's quietest, come back. There's something I want to ask you."
    *elseif price = "serge"
      "Think," says your father. "Just think, without the bells. And on Saturday, when it's quietest, come back. I want to talk to you about Nadim."
    *elseif price = "rose"
      "Dance," says Rose, promptly. And then, more quietly: "Come back on Saturday. When it's quietest. I have a proposition, and for once it isn't a bargain."
    *else
      "Walk," says Nadim. "On the island. At night. Without anything ringing over me." He smiles. "Come with me on Saturday."
*goto friday

*label th_willibrord
*page_break
Saint-Willibrord is a big grey stone church on Verdun Avenue with two square towers, and it's where your mother dragged you every Easter of your life until 2019.

You sit in the back pew. The same back pew. She always wanted the front and you always wanted the back, and every year you compromised on the middle and every year she said [i]next year, b'y, the front[/i].

At the Gloria the bells go, all of them, as loud as they can, and you feel it in the pew, in your ribs, in your teeth. And then silence.

You sit there in it. The priest's saying something. You're not listening. You're thinking about a woman from Petit-de-Grat who said [i]b'y[/i] and laughed at everything and knew, maybe, that her husband went somewhere on Thursdays, and never once asked.
*if easter_due
  And you're thinking about Sunday. Seven Easters. Dawn.

*choice
  #Go to the front pew. Just for the rest of the Mass. For her.
    *set guarded %-10
    *set nerve +2
    You get up and walk up the aisle, the whole length of the church, in the silence, with everyone watching, and sit in the front pew. Her pew.

    You don't pray. You don't know how. But you sit in the front, for once, for her.
    *remember lucille On Holy Thursday you sat in the front pew at Saint-Willibrord, for your mother, the way she always wanted.
  #Stay in the back. Some things you don't change.
    *set guarded %+5
    You stay in the back. [i]Next year, b'y.[/i] You can almost hear her.
*goto friday

*comment ---------------------------------------------------------------- GOOD FRIDAY
*label friday
*page_break
*mood oxblood
[b]Good Friday. The third of April.[/b]

The Club moves while the bells are gone.

You find out at four in the afternoon, from Aimé's father, on the phone, in a voice you've never heard from a Bélanger: high, and shaking.

"They took him," says Monsieur Bélanger. "From the chapel. In the middle of a wake. Men in good coats. They walked in and took him by the arms and walked out, and nobody could stop them, and the family didn't even look up from the coffin." A breath. "They left a card. On the guestbook. It's got your name on it."

*page_break
It's heavy cream stock with a deckled edge, and a brass beaver embossed at the top.
*if honora_turned
  It isn't Honora's hand. It's three hands: the Scottish baron, the woman in beads, the advertising man from Sherbrooke Street. The Club without its President.
*else
  It's Honora's hand. Small, precise, in ink gone brown the way old blood goes brown.

[i]Monsieur Lacroix.[/i]

[i]While the bells are in Rome, nothing rings over this island. It is the only time in the year a Hush can be made fresh, by hand, without the angel's objection. We intend to make one.[/i]

[i]We have acquired a djinn. A lady, from Marseille, in a brass lamp. Her name, we understand, is Zeina.[/i]

*if nadim_out
  Your hand is shaking so badly the card rattles. [i]Zeina.[/i] Nadim's sister. Sold two years after him, to a man from Marseille. He's been listening for her for sixty-eight years.
*else
  [i]Zeina.[/i] Nadim's sister. He told you about her among the cedars, in a dream. Sold two years after him. He's been listening for her through the stone for sixty-eight years.
[i]On Holy Saturday, at midnight, at the fort, you will close a Lacroix lock on her. A Lacroix lock is the only kind that holds.[/i]
*if world = "held"
  *if price = "nadim"
    [i]In exchange, the old djinn goes free, and his sister takes his place. A family matter.[/i]
  *elseif price = "serge"
    [i]In exchange, your father walks out of the bands, and goes home. We understand he has a shop to open.[/i]
  *else
    [i]In exchange, the devil goes back to his club, and the Club is no longer in his debt.[/i]
*elseif world = "open"
  [i]In exchange, the city goes back to sleep, and the Club goes back to its dinners, and nobody else is hurt.[/i]
*else
  [i]In exchange, we will not tear down your little lullaby by force. We will simply replace it.[/i]
[i]We have Monsieur Bélanger's son as our guest in the meantime. He is quite comfortable. He is, however, a ghoul, and ghouls are so very easy to mistake for the dead.[/i]

*if honora_turned
  [i]—For the Club.[/i]
*else
  [i]—H.S.[/i]

*page_break
*if nadim_out
  *portrait nadim angry
  You don't have to tell Nadim. He knows. He's standing in your doorway when you get home, and the hallway's hot as an oven, and the paint on the doorframe's blistering.

  "Zeina," he says. His eyes are pure fire, no amber at all. "I felt her. At noon. The moment they opened the lamp in that cellar. I felt her, across the whole island, for the first time in sixty-eight years." His voice breaks, and the light bulb in the hall bursts. "She's [i]here[/i]. In this city. In a hole under a rich woman's house. And they want to put her in [i]my[/i] hole."

  *choice speak
    #"We'll get her out. Tomorrow. I swear it."
      *set rel_nadim +10
      *set nerve +2
      Nadim looks at you. The fire in his eyes banks, slowly, down to embers.

      "You swear," he says. "A creditor swearing to a djinn." A sound like a laugh with nothing funny in it. "All right. I'll hold you to it."
    #"Nadim. Breathe. You're setting my building on fire."
      *set rel_nadim +5
      *set wry %+5
      He looks at the blistered paint. At the burst bulb. He closes his eyes, and the heat goes out of the hall like a tide going out. "Sorry," he says. "Sixty-eight years." He opens them. "Tell me the plan. You always have a plan."
    #Put your arms around him. Fire and all.
      *set des_nadim +10
      *set rel_nadim +10
      It's like putting your arms round a woodstove. It hurts. You do it anyway. After a second he goes still, and then he holds on, and the heat goes down, and down, until he's just warm.
*elseif price = "nadim"
  You go to the fort. You go down the stairs. The coals in the three bands are brighter than you've ever seen them, and moving, pacing, like something in a cage.

  "She's here," says Nadim. "Zeina. I felt her at noon, through the stone, across the whole island." The coals flare. "Creditor. Get her out. Whatever it costs. I'll hold this city asleep for a thousand years if you get her out."
  *set rel_nadim +10
*set nadim_sister true

*comment ---------------------------------------------------------------- THE PLAN
*page_break
*mood eve
Holy Saturday. The laundromat.
*if n9_fell = "gisele"
  Without Gisèle. Thérèse runs it now, with her hearing aid turned all the way up and a du Maurier she doesn't smoke, just holds, because Gisèle would have.
*else
  Gisèle, with a du Maurier, at the card table, with a map of the Golden Square Mile.
"Two places," she says. "The cellar at Strachan House, where they've got the ghoul and the lamp. And the fort, at midnight, where they're expecting you." She taps the map. "You can't be in both. And nobody but a Lacroix gets through that cellar door. Aurèle built it in 1961."
*if serge_free
  Your father, beside you, says quietly: "Two Lacroix."
*if honora_turned
  "Or me," says Honora, from the corner, in her fur. "It's my cellar. I have the key." She smiles. "They've changed the locks on me, of course. But your grandfather's lock doesn't change. It only knows Lacroix, and me."

"So you go to the cellar," says Gisèle. "Somebody has to hold the front door of Strachan House while you're in there. And somebody has to go to the fort at midnight and make the Club think you're coming. Keep them waiting. Keep them looking at the island while you're under the mountain."

*page_break
[b]The front door of Strachan House.[/b] Who holds it?

*choice
  *if (dar_ok) #@dario Dario, and the pack.
    *set hs_door "dario"
    *set dfit 3
    "The house with the dead wolf on the wall," says Dario, cracking his knuckles. "Oh, I've been waiting for this one."
  *if (honora_turned) #Honora. It's her house. She knows every door in it.
    *set hs_door "honora"
    *set dfit 3
    "My own front door," says Honora, "against my own members." She smiles. "I've been waiting two hundred years to throw some of them out."
  *if (clarke_turned) #The Conductor, and the Line.
    *set hs_door "clarke"
    *set dfit 2
    The Conductor puts on his cap. "The Line has a lot of people who don't like the Club," he says. "Most of them owe me."
  *if (agathe_turned) #Agathe. And whoever from the Carillon will follow her.
    *set hs_door "agathe"
    *set dfit 2
    "Six of us," says Agathe. "Anselme's coming. He says he owes you a soup." She almost smiles.
  #Aimé's father. And every Bélanger since 1911. Ghouls hold doors for the dead.
    *set hs_door "belanger"
    *set dfit 1
    Monsieur Bélanger, in his black suit, stands up. "It's my son," he says. "I'll hold any door you like."

*page_break
[b]The fort at midnight.[/b] Who goes, and makes the Club think you're coming?

*choice
  *if (laz_ok and (hs_door != "lazare")) #@lazare Lazare. He's your height, near enough. In your coat, in the dark, with your van.
    *set hs_decoy "lazare"
    *set decoyfit 3
    Lazare nods. "In the dark, in your coat, they won't know until they see my face." A pause. "And they won't see my face."
  *if (dar_ok and (hs_door != "dario")) #@dario Dario. They'll expect a fight at the fort. Give them one. Loudly.
    *set hs_decoy "dario"
    *set decoyfit 2
    "Loudly," says Dario, grinning. "I can do loudly."
  *if ((met_rose) and (price != "rose")) #@rose Rose. Nobody can keep a room waiting like the devil.
    *set hs_decoy "rose"
    *set decoyfit 3
    "Keep them waiting," says Rose, delighted. "Darling. It's the only thing I've ever been truly good at. I once kept a girl waiting for the end of a dance for two hundred and eighty-six years."
  *if (serge_free) #Your father. He's a Lacroix. If anyone's going to be believed at that lock, it's him.
    *set hs_decoy "serge"
    *set decoyfit 3
    Your father nods slowly. "They'll think I've come to close it for you," he says. "They'll think the old man will do." He almost smiles. "Let them think it."
  #The Line. A dozen people in your coat and a toque, all over the island, all at once.
    *set hs_decoy "line"
    *set decoyfit 1
    It's a terrible plan. It's so terrible it might work.

*page_break
[b]Beside you, in the cellar.[/b]

*choice
  *if (serge_free and (hs_decoy != "serge")) #@keyman Your father. Two Lacroix on one lock.
    *set hs_beside "serge"
    *set bfit 3
    "Two Lacroix," your father says, and puts his loupe in his pocket.
  *if (laz_ok and (hs_decoy != "lazare")) #@lazare Lazare. Quiet, fast, and he knows how the Club posts its guards.
    *set hs_beside "lazare"
    *set bfit 3
  *if (dar_ok and (hs_door != "dario") and (hs_decoy != "dario")) #@dario Dario. If the cellar goes wrong, you want a wolf in it.
    *set hs_beside "dario"
    *set bfit 2
  *if (nadim_out) #@nadim Nadim. It's his sister.
    *set hs_beside "nadim"
    *set bfit 3
    Nadim doesn't say anything. He doesn't have to.
  #Nobody. In and out. Quietly.
    *set hs_beside "none"
    *set bfit 1

*page_break
*mood oxblood
Strachan House at half past eleven on Holy Saturday. No bells anywhere in the city. Just the snow, and the wind off the mountain, and every window on the ground floor lit gold.
*if hs_door = "dario"
  The pack takes the front door at eleven thirty-five, twenty wolves up the lawn in the snow, howling, and every thrall in the house comes running.
*elseif hs_door = "honora"
  Honora walks up her own front steps at eleven thirty-five, in her fur, and rings her own bell, and when the butler with the peeled-egg face opens it she says, pleasantly, "Good evening, Stephen. You're dismissed," and walks in, and every member of the Club in the house comes running to see.
*elseif hs_door = "clarke"
  The Line takes the front door at eleven thirty-five: the woman with antlers, the O-négatif barman, Samir with his rolling pin, the Conductor with his lantern, and forty more, and every thrall in the house comes running.
*elseif hs_door = "agathe"
  The Carillon takes the front door at eleven thirty-five: six hunters in long coats, and Agathe at the front, and Brother Anselme with a thermos of soup, and every thrall in the house comes running.
*else
  The Bélangers take the front door at eleven thirty-five: Aimé's father and three uncles and a cousin, all in black suits, grey-faced, very calm, like men arriving to collect somebody. Every thrall in the house comes running.
*if hs_decoy = "lazare"
  On the island, at the fort, a man in your coat and your toque gets out of your van and walks toward the powder house, slowly, in the dark, with his collar up, and the Club watches him come.
*elseif hs_decoy = "rose"
  On the island, at the fort, the devil arrives at midnight, invited or not, and bows, and begins to talk, and the Club finds that it cannot, for the life of it, stop listening.
*elseif hs_decoy = "serge"
  On the island, at the fort, an old man in a work shirt walks up to the powder house door and puts his square scarred hand on it, and the Club watches him, and thinks: the old man will do.
*elseif hs_decoy = "dario"
  On the island, at the fort, a tow truck comes across the Concordia Bridge at a hundred and forty with its hazards on, and a very large wolf in a toque gets out and starts throwing thralls into the river.
*else
  On the island, at the fort, and on every bridge, and in every métro station, a dozen people in your coat and a toque start turning up at once, and the Club's phones start to ring.

*page_break
You go round the back, down the servants' stairs, to the cellar door.

Oak, iron-bound, with a lock you'd know in the dark. A cross in a circle. [i]A.L. 1961.[/i]

It opens for you like a dog rolling over.
*if hs_beside = "serge"
  Your father puts his hand on it too, beside yours. "He always said it was his best one," he says. "The Strachan cellar. He said he built it to last a thousand years and he hoped nobody ever had to open it."
Inside, cedar and stone and fur. Wine racks. And at the back, in a circle of salt, on a cot, bound with iron, Aimé, in his funeral suit, with his glasses crooked and a bruise on his cheek, looking up at you.

"Oh thank God," says Aimé. "Oh thank God. They kept saying I was dead. I'm not dead. I checked."

And on a table beside him, in a circle of iron filings, a brass lamp. Old. Beautiful. Dented. With something inside it that makes the whole cellar hum, very faintly, like a sea heard through a shell.

*page_break
*temp plan 0
*set plan dfit
*set plan +decoyfit
*set plan +bfit
*choice
  *selectable_if (hands >= 60) #Pick Aimé's cuffs and the circle round the lamp. Fast. Clean. Your whole life has been practice for this minute.
    *set plan +2
    *set hands +3
    You do it in forty seconds. The cuffs, the chain, the iron filings swept aside with the flat of your hand. Your hands don't shake. They've been waiting their whole lives for this minute.
  *if (has_serge_key) #The keeper's key. It knew the cuffs in the cellar last time. It'll know them now.
    *set plan +2
    It knows them. The cuffs fall off Aimé's wrists like they're relieved to.
  *if (hs_beside = "nadim") #Let Nadim do it. It's his sister.
    *set plan +2
    *set rel_nadim +10
    Nadim walks into the circle of salt. It burns him. He doesn't stop. He picks up the lamp in both hands, iron filings and all, and holds it against his chest, and says a word you'll never hear again in your life, and the lamp goes warm and gold in his arms.
  #Break the chain at the ring. Carry Aimé. Grab the lamp. Run.
    *set nerve +2
    *set reckless %+10
    You get the chain off the wall. It's loud. You get Aimé over your shoulder and the lamp under your arm, iron filings and all, and it burns, and you run.

*if plan >= 7
  *set aime_safe true
  *set zeina_free true
*elseif plan >= 5
  *set aime_safe true
*page_break
*if zeina_free
  You come up the servants' stairs into the cold with Aimé on your arm and the lamp in your hands, and nobody stops you, because everybody in Strachan House is at the front door, or on an island in the river, looking the wrong way.

  In the garden, under the snow, by the dark hedge, you set the lamp down.
  *if hs_beside = "nadim"
    Nadim kneels in the snow in front of it.
  *else
    And the air goes hot, and Nadim is there, somehow, kneeling in the snow in front of it, as if he's been pulled across the island on a thread.
  He puts his hand on the brass. He says her name.

  The lamp opens. Smoke comes out of it: dark, and gold, and fierce, a woman's shape, a face with his eyes. She looks at him. He looks at her.

  "[i]Zeina,[/i]" he says.

  She says something in a language older than the cedars, and hits him, hard, on the chest, with both fists, and then she's holding on to him, and the snow for ten metres around the two of them turns to steam, and you walk Aimé to the car, and don't look back, because some things aren't yours to watch.
  *remember nadim On Holy Saturday, in the snow in Honora's garden, he said his sister's name, and she hit him, and held on.
  *set rel_nadim +20
  *set des_nadim +5
*elseif aime_safe
  You come up the servants' stairs with Aimé on your arm and the lamp in your hands, and they're waiting at the top. Four thralls. And behind them, in a velvet jacket, a member of the Club you don't know, who holds out his hand for the lamp, very politely.

  You have Aimé. You can't have both. You can feel the lamp burning through your coat.

  You give him the lamp. You'll hate yourself for it. You give it to him and take Aimé and go.

  "Tomorrow," he says, pleasantly, behind you. "The bells will be back. The angel will be back. We'll find another night." He smiles. "The Saint-Jean, perhaps. Everyone's out on the Saint-Jean."
  *remember aime On Holy Saturday you got him out of the cellar, and had to leave the lamp behind.
*else
  It goes wrong on the stairs. The decoy didn't hold, or the door didn't; you'll never know which. They're waiting at the top: thralls, six of them, with iron.

  You get Aimé past them. You don't know how. Aimé gets you past them, is closer to the truth: he stands at the top of the servants' stairs, in his funeral suit, and says, in his undertaker's voice, "[i]Excuse me. I'm here to collect the deceased[/i]," and for one second every thrall in the corridor steps back out of pure reflex, and you run.

  But the iron catches him on the way out. Across the ribs. You get him to the car. He's bleeding on the back seat, and laughing, weakly, and saying [i]I told them I wasn't dead[/i].

  And the lamp's still in the cellar.
  *set aime_fate "hurt"
  *remember aime On Holy Saturday he said "I'm here to collect the deceased", and the thralls stepped back. He took the iron for it.
*achieve planner

*comment ---------------------------------------------------------------- THE PRICE, IN THE SILENCE
*page_break
*mood snow
It's three in the morning on Holy Saturday night, and there are no bells anywhere on the island, and it's the quietest night of the year.
*if world != "held"
  *goto vigil
*if price = "nadim"
  You go to the fort. You go down the stairs. Nadim's coals, in their three bands, are gold.
  *if zeina_free
    "She's out," he says. "She's out. She's at the laundromat with four old women and a bottle of gin, and she's already told Thérèse she's doing her hair wrong." A sound like a laugh with tears in it. "Sixty-eight years."
  "It's the quietest night of the year," he says. "The only night the angel can't hear what we do down here." The coals flicker. "You could open the bands, creditor. Tonight. Nobody could stop you. The city would wake up, and you'd have to live with that. Or you could leave me. And I'd understand. I've always understood."
*elseif price = "serge"
  You go to the fort. You go down the stairs. Your father, in his three bands, glowing faintly gold, opens his eyes.

  "It's the quietest night of the year," he says. "The angel can't hear what we do down here tonight." He looks at you. "You could open the bands, {name}. I'd walk out. And the city would wake up." A pause. "Or you could leave me. I'm all right. I'm keeping it. I promised Papa." He smiles. "Your choice. It was always going to be your choice."
*else
  You go to the fort. You go down the stairs. Rose, in his three bands, with his bare hands on the brass.

  "It's the quietest night of the year," he says. "The angel can't hear what we do down here tonight." He looks at you with his red-coal eyes. "You could let me go. Open the bands. The city would wake up, and you'd owe me nothing. The yes would be cancelled. Or you could leave me here." He smiles. "I don't mind. I've never been so useful in my life."

*choice
  #Open the bands. Let them out. Let the city wake up.
    *set was price
    *set price_freed true
    *set world "open"
    *set price "none"
    *set hush_fate "fallen"
    You open the bands. Your fingers on the brass, the six notes, backward. The chest band, the waist, the knees. They fall and ring on the brick floor like dropped plates, for the second time in your life.
    *if was = "serge"
      *set keyman_fate "freed"
      *set keyman_safe true
      Your father steps out of them, and stumbles, and you catch him, and he stands on the brick floor of the vault with your arms round him, and laughs.

      "Thursday," he says. "It's Easter tomorrow. Take me to Maman."
      *remember keyman On Holy Saturday night, in the silence, you opened the bands, and your father walked out of the fort.
    *elseif was = "nadim"
      *set nadim_fate "free"
      Nadim comes out of them like a man coming up out of water, and stands on the brick floor, solid, in his 1967 suit, and looks at you for a long time.

      "Why?" he says. "Why now?"

      "Because it's quiet. Because your sister's out. Because I'm tired of coming on Thursdays."
      *remember nadim On Holy Saturday night, in the silence, you opened the bands and let him out.
    *else
      Rose steps out of the bands, and takes his gloves out of his pocket, and puts them on, finger by finger, and looks at you.

      "The yes is cancelled," he says. "I can't lie. So I have to tell you that I'm very disappointed." He smiles. "And very, very glad."
      *set owe_rose false
      *remember rose On Holy Saturday night, you let him out of the bands, and cancelled the yes. He was disappointed, and glad.
    When you come up the stairs into the snow, it's four in the morning, and the city's still dark, and still silent. But you can feel it waking. Slowly. From the edges in.
  #Leave them. Keep the city asleep. It's what you chose on Nuit blanche.
    *set guarded %+10
    You don't open the bands. You sit on the bottom step for a while in the silence. Then you go back up the stairs, and close the door, and play the six notes, and it closes with a sound like a sigh.
    *if price = "nadim"
      "Thank you for coming," Nadim says, as you go. "It's the first Holy Saturday anyone's come."
    *elseif price = "serge"
      "Thursday," your father says, as you go. "Bring Maman's date squares."
    *else
      "Darling," says Rose, as you go. "You're a very sensible man. It's one of your least attractive qualities."

*label vigil
*page_break
*mood eve
Saturday night, very late. Easter Eve.

Outside every church on the island, at the Vigil, they light a new fire in the dark: a brazier on the steps, and the priest lights the Paschal candle from it, and the candle goes into the dark church, and everybody's little candle gets lit from it, one after another, until the whole church is full of light.

No bells. The bells are still in Rome. They come back in the morning.
And in the morning, at dawn, your seven Easters come due.

You sit on the steps of Saint-Willibrord in Verdun at midnight, with a little candle somebody gave you, and watch the fire in the brazier, and think about it.

Confession. Communion. Before dawn. [i]The curse doesn't care what you believe. It counts.[/i]

Or the mountain. The pack. The sun coming up over the east end. And never being alone again.

Or something else.

*page_break Chapter Thirteen
*goto_scene ch13
`);
