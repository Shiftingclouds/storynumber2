NB.scene("ch10", String.raw`
*mood snow
*chapter 10 Ash [morning]
*temp laz_ok true
*temp lunch false
*temp dead ""
*if (lazare_fate = "dead") or (lazare_rehushed and (not(lazare_restored)))
  *set laz_ok false
*if lazare_fate = "dead"
  *set dead "lazare"
*elseif dario_fate = "dead"
  *set dead "dario"
*elseif keyman_fate = "dead"
  *set dead "serge"
*elseif n9_fell = "gisele"
  *set dead "gisele"
[b]PART TWO: LENT[/b]

Sunday, the first of March.

You sleep until two in the afternoon, and when you wake up, the world is still there.

That's the first thing. You lie in bed, in Verdun, and listen, and the radiator's
*if keyman_safe or (keyman_fate = "gardien")
  quiet, because your father fixed it,
*else
  banging, the way it has since 2021,
and a snowplough's going down the lane, and somebody's kid is screaming with happiness about something across the street, and it's Sunday. An ordinary Sunday, in Lent.
*if world = "held"
  You turn on the radio. The news is the news. A water main in Rosemont. A strike at the port. Nuit blanche, a great success, a record crowd, [i]some reports of a strange electrical storm around three in the morning, which Hydro-Québec is investigating[/i]. That's all. Half a million people saw the Veillée last night for half an hour, and this morning, they don't remember a thing.

  It worked. The Hush held.
  *if price = "nadim"
    Under an island in the river, in three bands of brass, a djinn is counting the seconds of another fifty-nine years.
  *elseif price = "serge"
    Under an island in the river, in three bands of brass, your father is keeping the fort.
  *else
    Under an island in the river, in three bands of brass, a devil is holding a city in his bare hands, and being gentle with it.
*elseif world = "open"
  You turn on the radio. It's all anyone's talking about. Every station. Callers, crying, laughing. [i]A vampire gave me soup. My grandmother's ghost told me where she hid the rings. There's a wolf in a hoodie on my street and he shovelled my driveway.[/i] The premier's going to make a statement at four. The Archbishop's going to make a statement at five. Radio-Canada has a panel. The panel's arguing about whether to call them [i]people.[/i]

  It's happened. The city's awake. And it's not on fire.
  *if not(crowd_safe)
    Not quite. There's a report about a car on Saint-Laurent, and a crush on Sainte-Catherine, and a man in Hochelaga who went after his neighbour's dog with a shotgun because he'd decided it was a loup-garou, and it wasn't. There'll be more. You can feel it coming, like weather.
*else
  You turn on the radio. It's strange. Nobody's panicking. But everyone's talking about [i]remembering[/i]: callers ringing in to say they woke up this morning and remembered a brother, a daughter, an uncle, somebody they'd forgotten they'd forgotten. A woman in Côte-des-Neiges crying on air because she remembered her son. Nobody knows why. The Archbishop's going to make a statement. Nobody expects it to help.

  Some of them are talking about the other thing too: the vampire at the soup tent, the ghosts, the wolf in the hoodie. Some of them aren't. It's a lullaby you can choose to sing. Half the city's chosen to wake up. Half's chosen to sleep. Nobody's quite sure who's who.

*page_break
*if dead = "lazare"
  *goto grief_lazare
*if dead = "dario"
  *goto grief_dario
*if dead = "serge"
  *goto grief_serge
*if dead = "gisele"
  *goto grief_gisele
*goto meme

*comment ---------------------------------------------------------------- GRIEF
*label grief_lazare
*set funeral "lazare"
And then you remember.

You lie on your back in your bed in Verdun and look at the ceiling and remember the vault, and the brick floor, and the weight of his head in your lap, and his name. [i]Lorenzo.[/i]

You don't get up for a long time.

*page_break
The funeral's on Wednesday, at Bélanger & Fils, on Wellington.

Aimé does it himself. He won't let his father. He does the whole thing in his good tie, with his hands shaking, and his voice not shaking at all.

They come. All of them. You didn't know there'd be so many.
*if dario_fate != "dead"
  Dario, in a black suit that doesn't fit, with his toque in his hands, standing at the back of the room with his face like a wall, not coming near the coffin. You go and stand beside him. He doesn't look at you. After an hour, his hand finds yours, and grips, and doesn't let go for the rest of the day.
*if world != "held"
  And Rosa and Vito Ferrante, from rue Jarry, in the front row, who woke up on Sunday morning knowing they had a son, and found out on Sunday afternoon that he was dead. Rosa doesn't cry. She sits with her hands in her lap looking at the coffin as if she's waiting for it to explain itself. Vito cries enough for both of them.
*else
  And, in the second row, a small round woman in a black cardigan with gold hoops in her ears, and a tall stooped man with a white moustache, who sit through the whole service and don't know why they came. Rosa Ferrante saw the notice in the paper, she tells you afterward, at the door. [i]Lazare Desautels, 32.[/i] "I don't know him," she says. "I don't know why I'm here. I just couldn't not." She looks at the coffin. "Was he a good boy?"
The Bourdon comes. He sits at the very back, alone, in his cassock, and nobody speaks to him, and when it's over he goes up to the coffin and puts his hand on the lid, and stays like that for a long time, and then goes out without a word.

*choice
  #Speak. Stand up at the front and say something. Anything.
    *set rel_aime +5
    *set nerve +2
    You stand up. You don't know what you're going to say. You say that he asked, every time. That he was scared of heights and walked to the parapet anyway. That his name was Lorenzo Ferrante and he was born on rue Jarry on the twenty-fifth of February 1994, and somebody should say it out loud in a room full of people, because for twenty-one years nobody did.
  #Don't speak. Sit in the front row and let the room hold you.
    *set guarded %+5
    You don't speak. You sit in the front row, and let Aimé do it, and let the room do it, and at some point somebody's hand is on your shoulder, and somebody else's, and you don't turn round to see whose.
  #Hum it. The song. Quietly, from your seat. Let whoever knows it join in.
    *set lore +2
    You hum it. Six notes, down and up and held. Quietly, from your seat, in the front row. And from the back of the room, very faintly, the Bourdon hums it too. And then someone else. And someone else.
*remember lazare The funeral at Bélanger & Fils. They said his name out loud. Lorenzo Ferrante.
*goto meme

*label grief_dario
*set funeral "dario"
And then you remember.

The vault. The brick floor. A toque. Something in Italian that might have been a prayer and might have been Céline.

You don't get up for a long time.

*page_break
The funeral's on Wednesday, at Saint-Jude.

Not Bélanger & Fils. The pack wouldn't have it. They carry him from the funeral home up Jean-Talon in the snow on their shoulders, twenty people in parkas and fur, and lay him on the altar at Chez Jude under the disco ball, in front of the stained-glass window of Saint Jude with his painted wolf, and Aimé does the service there, in his good tie, standing on the stage where the karaoke machine used to be.
*if not(manon_cut)
  Manon leads the grace. [i]For the ones who left, and the ones who were left.[/i] Her voice doesn't break until the very end.
*else
  Big Réjean tries to lead the grace, the way Manon used to, and can't get through it, and Johnny Tabarnak finishes it for him.
*if laz_ok
  Lazare stands at the foot of the coffin through the whole service, in his borrowed suit, with his hand flat on the wood. He doesn't speak. He doesn't cry. When it's over, he takes Dario's toque off the coffin lid, very carefully, and puts it on his own head, and wears it out into the snow, and you never once see him take it off again.
*if world != "held"
  Dario's mother is there. And his nonna's neighbours from Jarry. And Rosa and Vito Ferrante, in the second row, who woke up on Sunday knowing who the Santangelo boy's best friend was, and who he'd been sitting on the step for.

At the end, the pack sings. Not a hymn. "Pour que tu m'aimes encore", the whole thing, twenty damned people in a deconsecrated church shouting it at the stained glass, badly, with their eyes shut and their whole chests.

*choice
  #Sing with them.
    *set rel_manon +5
    *set nerve +2
    You sing with them. You don't know all the words. It doesn't matter. Nobody does.
  #Don't sing. Stand at the back, and let them sing him out.
    *set guarded %+5
    You don't sing. You stand at the back, under the Stations of the Cross in their Christmas lights, and let them sing him out.
*remember dario The funeral at Saint-Jude. The pack sang Céline. Pour que tu m'aimes encore.
*goto meme

*label grief_serge
*set funeral "serge"
And then you remember.

The vault. The brick floor. [i]Same hands.[/i] Six notes, not finished.

You don't get up for a long time.

*page_break
The funeral's on Wednesday, at Bélanger & Fils, on Wellington, four blocks from the house you grew up in.

Aimé does it. There aren't many people. That's the thing about a man who's been unmade for fifteen years: nobody knows to come. The pack comes, because you asked. The Line comes: the Conductor, in his cap, and Samir from the bagel shop, and a dozen people from the market whose locks he fixed for fifteen years without charging.
*if nadim_fate = "free"
  And Nadim. In a borrowed suit, solid, at the back, alone, looking at the coffin. He's out. He's free. Your father never lived to see it. Nadim stands through the whole service with his hands clasped behind his back like a man at attention, and at the end he goes up to the coffin, and puts a transistor radio on the lid, a new one, and says something in a language you don't know.
And Mémé.

Ghislaine brings her from Sainte-Marguerite in a wheelchair, in her pink cardigan, with the little gold cross. She sits at the front beside you with her hands in her lap and looks at the coffin for the whole service.

"My boy," she says, at the end, very clearly. "My good boy. Even when he was bad."

And then she hums. And you hum it with her.
*remember lucille At your father's funeral, she said: my good boy. Even when he was bad. You hummed it together.
*goto meme

*label grief_gisele
*set funeral "gisele"
*page_break
The funeral's on Wednesday. Not in a church. In the laundromat.

Thérèse insists. Monique knits a shroud. Yolande does Gisèle's lipstick. Pierrette carries her in, alone, and lays her on the folding table between the washers, in her purple cardigan, with a du Maurier in her fingers, unlit, because Yolande says she'd have wanted one and Thérèse says she'd have wanted it lit and they compromise.

Every dryer is going. Every one. All through the service. Round and round, with nothing in them.

Aimé does the words. At the end, the four of them take the chasse-galerie down from the ceiling in the back room and carry Gisèle out to the canal in it, and put it on the ice, and you all stand on the bank in the snow and watch the red canoe go up, empty except for her, out over the Pointe, over the city, higher and higher, until it's a speck, and then it isn't.

"She'll get there," says Thérèse, wiping her eyes. "She knows the way. She always knew the way."
*remember gisele At the laundromat, the girls sent her up in the chasse-galerie, alone, and she knew the way.
*goto meme

*comment ---------------------------------------------------------------- MÉMÉ
*label meme
*page_break
*portrait lucille neutral
On Sunday evening, you go to Bannantyne Street.

Ghislaine meets you at the elevator. "She's been asking for you all day," she says. "By name. She hasn't done that in two years." She hesitates. "She's very clear today. Sometimes that happens. Before." She doesn't finish. She touches your arm, once, the way nurses do.

Lucille Lacroix is in her chair by the window in her pink cardigan. She turns when you come in, and her whole face opens.

"{name}," she says. "Come here. Sit."

You sit. She takes your hand.

"You did it," she says. "Whatever it was. I felt it. At three thirty-three. I was awake. I'm always awake." She looks at the window. "I heard the bells, and then I didn't, and then I did. Aurèle's song." She squeezes your hand. "Now. I want my key back."

*page_break
*if hush_fate = "remade"
  "It's in the lock, Mémé," you say. "Under the cross-in-a-circle. On the chest band. It turned the lock into a question, like he meant it to. It has to stay there."

  She's quiet for a long time. Then she smiles, and her eyes fill.

  "Fifty years round my neck," she says. "And now it's where he meant it to go." She pats your hand. "Good. I wanted it back so I could give it to him myself, when I see him." A pause. "I'll just tell him where it is."
*else
  You take the chain off from under your shirt. The little gold cross, and behind it the small brass key with the cross in a circle. It's warm from your skin.

  *choice
    #Put it back round her neck. It's hers.
      *set meme_key_back true
      *set rel_lucille +10
      You put it back round her neck. You do up the clasp with fingers that aren't steady. She holds the key against her chest, through her cardigan, the way she held it for fifty years.

      "There," she says. "Now I can give it to him myself, when I see him."
    #"Can I keep it a little longer, Mémé? I think I might still need it."
      *set rel_lucille +5
      *set wits +2
      She looks at you for a long time.

      "Yes," she says. "Yes. Keep it. You're the one who opens things." She closes your hand over it. "Just bring it when I ask. I'll ask once more. You'll know when."
*page_break
"Ghislaine thinks I'm dying," Mémé says, conversationally, looking out at the snow. "She's very sweet. She gets a look." She pats your hand. "I am, a little. Not today. Not this week. When the ice goes out on the river, maybe. I always liked the spring."

"Mémé..."

"Don't," she says. "I'm eighty-eight. I've been dying for three years in this chair and not knowing who anybody was. Now I know everybody." She smiles at you. "That's a very good way to go. Better than most people get."
*remember lucille On the first of March she knew you by name, and asked for her key back. She said: when the ice goes out.

*comment ---------------------------------------------------------------- JARRY
*if laz_ok
  *if (world != "held") or (n6_parents = "told") or (n6_parents = "birthday") or (n6_parents = "stranger")
    *set lunch true
*if not(lunch)
  *goto dinner
*page_break
*portrait rosa smile
*if world = "held"
  Lunch on rue Jarry is at one, the Sunday after.

  You go with Lazare because she asked him to come, and he said he would. [i]I don't know you. Come anyway.[/i]
*else
  Lunch on rue Jarry is at one, on Sunday. After ten o'clock Mass.

  Lazare doesn't say anything on the 193 bus. He sits by the window with his hands between his knees, the way he did on his birthday, watching the fig trees in their burlap go by. But this time his knee is going up and down like a sewing machine.
*if dario_fate != "dead"
  Dario meets you at the corner of Jarry and Viau with a white bakery box from San Marco and a face like a man going to his own trial. He's shaved. He's wearing a shirt with a collar. He's taken off the toque, and then put it back on, three times; you can tell from his hair.

  "Your mamma's going to kill me," he says to Lazare.

  "Probably," says Lazare.

*page_break
*if world = "held"
  Rosa Ferrante opens the door in an apron, with flour to the elbows, and looks at Lazare for a long time. She doesn't know him. You can see it. You can see her look, and not find him.

  "You came," she says anyway. "Good. Come in. It's cold. I made too much lasagna. I always make too much lasagna. I never know who it's for."
*else
  Rosa Ferrante opens the door in an apron, with flour to the elbows. She looks at Lazare.

  She doesn't say anything. She doesn't have to. You watch her face do what your father's did in the tunnel: come up a very long staircase in the dark, one step at a time. And arrive.

  "Lorenzo," she says.

  And then she's hit him. Not hard. Open-handed, on the arm, the way Italian mothers have hit their sons since Rome. "[i]Twenty-one years![/i]" she says. "Twenty-one years and not one phone call!" And then she's crying, and holding his face in her floury hands, and Lazare's crying, and Vito's coming up the basement stairs three at a time on his bad knees, saying [i]Rosa, Rosa, what is it[/i], and then he sees, and stops dead at the top of the stairs with his hand on the rail.

  You stand on the landing and look very hard at the ceiling.

*page_break
The lasagna is the best thing you've ever eaten. You say so.
*if dario_fate != "dead"
  "It's her recipe," Dario tells you, under his breath. "Nonna stole it from her in 1988. Don't tell her."
The kitchen is yellow. The Pope and Céline Dion watch from the wall. The coffee is [i]troppo forte[/i].
*if world != "held"
  Rosa won't let go of Lazare's hand. She eats with her fork in her left hand so she can hold his with her right. Vito keeps getting up to bring things nobody asked for. Bread. Parmigiano. A photo album, which he puts down on the table and opens, and there are the pages: Lorenzo, age two, in a sailor suit. Lorenzo's First Communion. Lorenzo and the Santangelo boy on the back step with a cannoli between them. Pages that were blank last week. Pages Vito's been looking at for twenty-one years, wondering why there were so many empty pages in the middle of the album.

  "I kept buying film," Vito says, wonderingly. "Every Christmas. Every birthday. I kept buying film and I didn't know what for."
*else
  Rosa keeps looking at Lazare across the table. Not like a stranger. Not like a son. Like a woman looking at a word she almost knows. Vito brings things nobody asked for: bread, Parmigiano, a photo album with pages in the middle that are strangely empty, which he puts down on the table and then looks at, and frowns at, and closes.
*if mathis_out
  And Mathis. You brought him; you didn't know what else to do with him on a Sunday. Rosa took one look at him in the doorway in his too-long coat and said [i]Madonna, he's skin and bone[/i], and he's had three helpings, and he's sitting on the counter by the stove now, with his crayon drawing out, showing it to Rosa, and Rosa is looking at the woman with yellow hair and a green coat in front of a red door, very seriously, the way you'd look at a painting in a museum.

  "Sainte-Rose," she says slowly. "In Centre-Sud. There's a house with a red door on Sainte-Rose. My cousin Carmela's friend lived next to it." She looks at Mathis. "We'll go. After Easter. You and me. We'll knock."
  *set mathis_mother true

*page_break
Afterward, Rosa corners you in the pantry doorway, by the frame with the pencil marks.
*if n6_parents = "told"
  "You," she says. "You're the one who said [i]tell her[/i]. On his birthday. In my kitchen."
*elseif n6_parents = "birthday"
  "You," she says. "You're the one who said it was his birthday. And I lit a candle for a stranger and sang."
*else
  "You," she says. "You're the one who brought him home."
She looks at you for a long time with her son's eyebrows.

*choice speak
  #"He brought himself home. I just held the door."
    *set rel_rosa +10
    *set rel_lazare +5
    "Hm," says Rosa. She doesn't believe you. She kisses you on both cheeks, hard, and leaves flour on your face. "You'll come on Sundays," she says. It isn't a question. "All of you. Every Sunday. I always make too much."
  #"I'm in love with him, signora."
    *set rel_rosa +5
    *set des_lazare +5
    *set guarded %-10
    Rosa looks at you. Then she looks over your shoulder at the kitchen table, where Lazare is laughing at something, with his head back, with his whole face.

    "Yes," she says. "I can see that." She pats your cheek, and leaves flour. "Sundays. One o'clock. You'll come."
  #Hand her the pencil from the shelf by the phone. Ask her to mark him again. Properly this time, with his name.
    *set rel_rosa +15
    *set rel_lazare +5
    Rosa looks at the pencil in your hand. At the frame. At the marks going up, [i]25/2/96, 25/2/97[/i], with the space beside them where a name should be.

    "Yes," she says.

    She calls him over. She stands him against the frame with his heels together, and makes him take his shoes off, and puts her floury hand flat on his curls, and marks it. And then she writes it, beside the line, in blue ballpoint, in capitals: [b]LORENZO.[/b] And goes down the frame and writes it beside every one of the others, while he stands there with his shoes off and his face in pieces.
*remember lazare Sunday lunch on rue Jarry. His mother, the lasagna, the pantry door.
*set ch10_lunch "jarry"

*comment ---------------------------------------------------------------- DINNER
*label dinner
*page_break
*mood eve
That night, the first Sunday after, you have dinner with someone.

It's the strangest thing. You've been through a siege and a flying canoe and a bell that spoke and a vault under an island together. And now it's Sunday night, and you're trying to decide where to eat, and whether it's a date.

*choice
  *if (laz_ok and (des_lazare >= 40)) #@lazare Lazare. Somewhere with a tablecloth. He's never been on a date.
    *set ch10_dinner "lazare"
    *set romance "lazare"
    *set time_lazare +1
    *goto d_lazare
  *if ((dario_fate != "dead") and (des_dario >= 40)) #@dario Dario. He'll want to cook. Let him.
    *set ch10_dinner "dario"
    *set romance "dario"
    *set time_dario +1
    *goto d_dario
  *if (laz_ok and (dario_fate != "dead") and (slept_both or throuple_ready)) #Both of them. Somewhere with a table for three, and a waiter who doesn't blink.
    *set ch10_dinner "both"
    *set romance "both"
    *set time_lazare +1
    *set time_dario +1
    *goto d_both
  *if ((slept_rose or (des_rose >= 40)) and (price != "rose")) #@rose Rose. At Le Mardi Gras. Where it's always the last hour before Lent, and it's Lent now.
    *set ch10_dinner "rose"
    *set romance "rose"
    *set time_rose +1
    *goto d_rose
  *if ((nadim_fate = "free") and (rel_nadim >= 30)) #@nadim Nadim. He's never had a Tim Hortons. Or a phone. Start somewhere.
    *set ch10_dinner "nadim"
    *set time_nadim +1
    *goto d_nadim
  *if (keyman_safe and (keyman_fate != "dead") and (keyman_fate != "gardien")) #@keyman Your father. Just the two of you. At the diner on Wellington where he used to take you.
    *set ch10_dinner "serge"
    *set time_serge +1
    *goto d_serge
  #Nobody. Chez Normande. A rye and ginger and a pickled egg.
    *set ch10_dinner "alone"
    *goto d_alone

*label d_lazare
*page_break
*portrait lazare smile
You take him to a restaurant on Saint-Denis with tablecloths and candles and a waiter with a moustache who calls you both [i]messieurs[/i].
*if dario_fate = "dead"
  He's wearing Dario's toque. He doesn't take it off, even at the table. The waiter looks at it and, to his eternal credit, says nothing.
He reads the whole menu, front and back, twice, including the wine list, with total concentration, as if there'll be a test. Then he puts it down.

"I don't know how to do this," he says. "I've never been on a date. I don't know what you're supposed to talk about."

*choice speak
  #"Tell me something nobody knows about you."
    *set des_lazare +5
    *set rel_lazare +5
    He thinks about it for a long time. "I like musicals," he says finally. "I used to sneak out of the tower to the Saint-Denis Theatre. I've seen [i]Les Misérables[/i] eleven times." He looks at you, stricken. "Don't tell Dario."
  #"We're not supposed to talk about anything. We're supposed to eat and look at each other."
    *set des_lazare +10
    He looks at you. You look at him. The candle between you. After a while he starts to smile, very slowly, and can't stop, and has to look at his plate.
  #"Is this a date? Are we... what are we?"
    *set rel_lazare +10
    *set wits +2
    He puts his fork down. "I don't know," he says honestly. "I'd like to find out. Slowly. Properly. With tablecloths." A pause. "I'd like to ask you on another one. Next Sunday. After my mother's lasagna." He looks at you. "Can I ask you that? Is that how it works?"
*remember lazare Your first real date. Saint-Denis, tablecloths, a waiter with a moustache.
*goto night_end

*label d_dario
*page_break
*portrait dario smile
He cooks. Of course he cooks. In the sacristy kitchen at Saint-Jude, in your mother's lobster apron, which he's stolen from your apartment and refuses to give back, with his toque on and Céline on the radio.
*if lazare_fate = "dead"
  He doesn't talk about Enzo. Not once. He cooks the lasagna his nonna stole from Rosa Ferrante in 1988, and puts out three plates, and then looks at the third one, and takes it away, very carefully, and puts it back in the cupboard.
Veal. Rapini. Bread he made himself, badly. A bottle of wine he bought at the SAQ by pointing at the most expensive one. He puts it all on the long table in the nave under the Stations of the Cross, just the two of you at one end of a table for twenty.

"This is a date," he says, sitting down. "I'm saying it out loud so there's no confusion. I'm on a date with you." He points his fork at you. "In a church."

*choice speak
  #"It's the best date I've ever been on, and we haven't eaten yet."
    *set des_dario +10
    *set rel_dario +5
    Dario goes red to the ears. "Shut up," he says, delighted. "Eat your veal."
  #"Is it just the two of us? Going forward? I need to know."
    *set rel_dario +10
    *set wits +2
    Dario puts his fork down. He looks at the long empty table.
    *if laz_ok
      "I don't know," he says. "There's him. There's always going to be him. I'm not going to lie to you about that." He looks at you. "But this, tonight, this is you. Just you. And I want more of it. That's all I know."
    *else
      "Yeah," he says quietly. "Just us."
  #Say nothing. Reach across and take the toque off his head, and put it on your own.
    *set des_dario +10
    *set wry %+5
    He stares at you. Nobody touches the toque. And then he starts to laugh, helplessly, and leans back in his chair, and looks at you in it.

    "Okay," he says. "Okay. You can keep it. For tonight."
*remember dario Your first real date. The nave at Saint-Jude, a table for twenty, veal and rapini, the toque.
*goto night_end

*label d_both
*page_break
You find a restaurant on Saint-Laurent with a round table in the back, and a waiter who looks at the three of you, and then at the reservation, and says, "For three, yes, messieurs, this way," without a flicker, and gets a very large tip.

It's a disaster, and it's wonderful. Dario orders for everyone and gets it wrong. Lazare sends back the wine, correctly, and Dario says he's a snob, and Lazare says he's a peasant, and they argue about it across you for fifteen minutes with their knees pressed against yours under the table on both sides.

And then, over dessert, Lazare puts his spoon down.

"We should talk about what this is," he says.

*choice speak
  #"It's the three of us. That's what it is. We'll work out the rest."
    *set rel_lazare +10
    *set rel_dario +10
    *set throuple_ready true
    They both look at you. Then at each other.

    "The three of us," Dario says slowly, trying it out.

    "The three of us," says Lazare. And then, very seriously, taking out his phone: "We should have a shared calendar."

    Dario puts his face in his hands.
  #"I don't know yet. Let's not decide it tonight. Let's just have dessert."
    *set des_lazare +5
    *set des_dario +5
    "Dessert," Dario agrees, instantly. "Dessert is a decision I can make."

    Lazare looks at you both for a long moment. Then he picks his spoon back up. "Dessert," he says. "And then we'll talk. Eventually. In about seven years."
  #"What do [i]you[/i] want? Both of you. I want to hear it."
    *set rel_lazare +5
    *set rel_dario +5
    *set wits +2
    They look at each other for a long time.

    "Him," says Dario, nodding at Lazare. "Since I was nine." He looks at you. "And you. Since the coat room."

    "Him," says Lazare. "Since a roof in Rosemont." He looks at you. "And you. Since the fort. When you asked my name."
*remember lazare The first dinner for three. Round table, a waiter who didn't blink.
*remember dario The first dinner for three. He ordered for everyone and got it wrong.
*goto night_end

*label d_rose
*page_break
*portrait rose smile
Le Mardi Gras on the first Sunday of Lent.

You strike a match on the matchbook and the door opens, and inside, for the first time in two hundred and eighty-six years, the clocks aren't saying [b]11:47[/b].
*if invited_rose
  They're saying [b]12:04[/b]. And ticking.

  Rose is at his table at the edge of the dance floor, alone, in black. He looks up when you come in. "It's after midnight," he says. "It's Lent. It's been Lent in here since three thirty-three yesterday morning." He stands, and bows. "I don't know what to do with it. I've never had a Lent before."
*else
  They're saying [b]11:59[/b]. Almost. Not quite.

  Rose is at his table, alone, in black. "Almost," he says, when he sees you look. "So close. It's been [b]11:59[/b] since Saturday. I think it's waiting for something." He looks at you. "I can't imagine what."
The dinner's absurd. Seven courses, served by a waiter in a powdered wig from 1740, each one a dish that hasn't existed for a century. Rose doesn't eat. He watches you eat, with his chin on his gloved hand.

"Tell me," he says, over the sixth course. "What does one do? After? On a date. When the dance is over."

*choice speak
  #"You walk me home. And at the door, you ask."
    *set des_rose +10
    *set rel_rose +5
    Rose looks at you for a long moment. "And then?"

    "And then I say yes. Or no."

    "Either," says Rose softly, "would be the best thing that's happened to me in a century."
  #"I don't know. I've never dated the devil."
    *set rel_rose +10
    *set wry %+5
    "Nobody has," says Rose. "They've bargained with me. Danced with me. Sold me things." He smiles. "You're the first to buy me dinner." A pause. "Well. I'm buying. But you know what I mean."
  #Reach across the table and take off one of his gloves.
    *set des_rose +15
    *set reckless %+5
    He goes very still. You draw the glove off, finger by finger, in the middle of his own club, in front of everyone. The light under his skin flares red and gold.

    "Darling," he says, very quietly. "People are watching."

    "Good."
*remember rose Your first real date. Le Mardi Gras, seven courses, and the clocks moved.
*goto night_end

*label d_nadim
*page_break
*portrait nadim smile
You take Nadim to Tim Hortons.

The one on Wellington, at nine at night, with the fluorescent lights and the teenager behind the counter who doesn't look up. He stands in front of the menu board in his 1967 suit for a very long time.

"A double-double," you tell him. "And a box of Timbits. Trust me."

He sits at a plastic table by the window and drinks a double-double for the first time in the history of the djinn, and his whole face changes. "It's terrible," he says, with total wonder. "It's the worst thing I've ever tasted. Give me another."

*choice speak
  #"Welcome to 2026. It's mostly bad. But the coffee's terrible in a good way."
    *set rel_nadim +10
    *set des_nadim +5
    He laughs. The real one, like a bonfire catching. The teenager behind the counter looks up for the first time.
  #"What do you want to do first? Now you're out?"
    *set rel_nadim +10
    *set wits +2
    He thinks about it for a long time, turning the paper cup round and round.

    "Find Zeina," he says. "My sister. And then..." He looks out of the window at Wellington Street in the snow. "The monorail. I know it's gone. I want to stand where it was."
  #Don't ask him anything. Just watch him eat a Timbit.
    *set des_nadim +10
    He eats a Timbit. A birthday cake one, with sprinkles. He eats it very slowly, with his eyes closed.

    "I've been in the dark," he says, "for sixty-eight years. And this is what's out here." He opens his eyes. "Sprinkles."
*remember nadim The first Sunday after, you took him to Tim Hortons. Double-double. Sprinkles.
*goto night_end

*label d_serge
*page_break
*portrait keyman smile
The Wellington Diner hasn't changed since 1994. The same booths. The same laminated menus. The same waitress, Denise, who's seventy now, and who looks at your father for a long time when you come in, and says, "Serge? Serge Lacroix?" and drops her coffee pot.

You sit in the booth by the window, the one he always sat in, and he orders for you both without asking: two hot chicken sandwiches with extra gravy and a Coke. The way he always did.

"You were nine," he says. "The first time. You had a tooth out. You were very brave, and then you cried in the van."

*choice speak
  #"Tell me about Mom. The things I don't know."
    *set rel_keyman +10
    He does. For an hour. Kath Byrne from Petit-de-Grat, who said [i]b'y[/i] and laughed at everything. How she beat him at cribbage on their first date and never let him forget it. How she knew, he thinks. Not what. But that something. "She never asked," he says. "Every Thursday, I went out, and she never once asked."
  #"Are you staying? In the city? Or is it too strange?"
    *set rel_keyman +5
    *set wits +2
    "It's very strange," he says. "Everybody's fifteen years older. The dépanneur's a Couche-Tard. Everybody's looking at their phones." He looks at you across the table. "But you're here. So I'm staying." A pause. "I thought I'd open the shop again. Serrurerie Lacroix. If you'd have me."
  #Don't say anything. Eat your hot chicken. Let him watch you do it.
    *set rel_keyman +10
    You eat. He watches you, the way you've watched other people's fathers watch their sons in diners your whole life, and never had it. He doesn't say anything. He doesn't have to.
*remember keyman The first Sunday after, the Wellington Diner, hot chicken with extra gravy. Denise dropped the coffee.
*goto night_end

*label d_alone
*page_break
Chez Normande. Sunday night. The Christmas lights over the bar. The pickled eggs.
*if fleurette_fate = "gone"
  The jukebox in the corner is dark.

  Normande doesn't say anything when you come in. She pours you a rye and ginger without asking, and slides you a pickled egg, and then, after a while, pours herself one, which you've never seen her do, and sits on the stool beside you.

  "Forty-three years," she says, looking at the jukebox. "She used to sit on top of it and tell me my lipstick was wrong." She drinks. "It was. It always was."
*else
  Fleurette's on top of the jukebox, in black, with her legs crossed, looking at you over a cigarette holder with no cigarette in it.

  "Alone, chéri?" she says. "On the first Sunday of the rest of it?" She sighs. "Well. You came to me. That's something." She taps the jukebox. "Sit. Normande, the boy needs a rye. And put on something sad. Not too sad. Dalida."
*remember fleurette The first Sunday after, Chez Normande, a rye and ginger, a pickled egg.
*goto night_end

*comment ---------------------------------------------------------------- 3:33
*label night_end
*page_break
*mood bells
At 3:33 on Monday morning, you wake up.

You don't know why. You lie in the dark and listen. The radiator. The snow. Somebody's car alarm, far away.

And then every bell in the city rings.

Once. All of them, at the same moment, every church on the island, every tower, from Pointe-aux-Trembles to Sainte-Anne-de-Bellevue, one single note, rung by nobody.

And then silence.

You lie in the dark with your heart going, and you think of eleven tons of bronze in a tower in the old town, and a note turning into a word.
*if angel_heard
  [i]When the bells come home, I will come home with them. And then I will judge.[/i]
*elseif path = "wolves"
  [i]Come back when the bells are silent. I will have more to say.[/i]
*else
  [i]Silence them. Let me speak.[/i] You didn't. It's still waiting.

It's Lent. Easter's in five weeks.
*page_break Chapter Eleven
*goto_scene ch11
`);
