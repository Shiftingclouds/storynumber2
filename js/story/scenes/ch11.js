NB.scene("ch11", String.raw`
*mood snow
*chapter 11 The Forty Days [11]
*temp week 1
*temp laz_ok true
*temp dar_ok true
*temp serge_here false
*temp nadim_out false
*if (lazare_fate = "dead") or (lazare_rehushed and (not(lazare_restored)))
  *set laz_ok false
*if dario_fate = "dead"
  *set dar_ok false
*if keyman_safe and (keyman_fate != "dead") and (keyman_fate != "gardien")
  *set serge_here true
*if (nadim_fate = "free") or (nadim_fate = "held_by_consent")
  *set nadim_out true
March comes in like it always does in Montréal: grey, and wet, and furious. The snowbanks go black. The sidewalks turn to sheets of ice and then to rivers and then to ice again overnight. Everybody's sick of winter and there's six more weeks of it.

And every night, at 3:33, every bell in the city rings once, by itself.

You get used to it. That's the frightening part. By the end of the first week you don't even wake up. You just turn over in the dark, and count to one, and go back to sleep.

It's Lent. Forty days. You've got four weeks before Holy Week, and a life, suddenly, that has people in it.
*if world = "open"
  And a city that can see them. The first week, there's a wolf on the front page of [i]La Presse[/i] every single day. By the third week, there's a vampire with a column in [i]The Gazette[/i], and a ghost on a talk show on TVA, and a man in Laval running for city council on a platform of [i]registering the undead[/i]. Some days it feels like a carnival. Some days it feels like 1966.
*elseif world = "remade"
  And a city that can see them, if it wants to. Half of it does. Half of it's chosen to go on sleeping. You never know, on the métro, which half you're sitting next to. Sometimes a woman across the aisle catches your eye and looks at the lutin braiding the strap of her handbag, and smiles, and you know.

*page_break
*label week
*page_break
*if week = 1
  [b]The first week of March.[/b] Grey, and wet. How do you spend it?
*elseif week = 2
  [b]The second week of March.[/b] A thaw, then a freeze. The river ice groans at night. How do you spend it?
*elseif week = 3
  [b]The third week of March.[/b] Saint Patrick's Day, green beer on Sainte-Catherine, snow in the parade. How do you spend it?
*else
  [b]The last week of March.[/b] The days are getting longer. You can feel it: light at six o'clock, for the first time since October. How do you spend it?

*choice
  *if (laz_ok) *hide_reuse #@lazare With Lazare. His first Sunday in twenty-one years without the Carillon.
    *set time_lazare +1
    *goto v_lazare
  *if (dar_ok) *hide_reuse #@dario With Dario. Sunday lasagna at Saint-Jude, and the pack.
    *set time_dario +1
    *goto v_dario
  *if (serge_here) *hide_reuse #@keyman With your father. Reopening the shop. Serrurerie Lacroix & Fils.
    *set time_serge +1
    *goto v_shop
  *if (keyman_fate = "gardien") *hide_reuse #@keyman Thursdays at the fort, with a transistor radio. Your father's keeping it now.
    *set time_serge +1
    *goto v_gardien
  *if (nadim_out) *hide_reuse #@nadim With Nadim. Teaching a djinn 2026. And looking for his sister.
    *set time_nadim +1
    *goto v_nadim
  *if (price = "nadim") *hide_reuse #@nadim Thursdays at the fort, with a transistor radio. Your father did it for fifteen years.
    *set time_nadim +1
    *goto v_thursdays
  *if ((price != "rose") and (met_rose)) *hide_reuse #@rose With Rose. He's throwing a Lenten ball, which is a contradiction in terms, which is the point.
    *set time_rose +1
    *goto v_rose
  *if (price = "rose") *hide_reuse #@rose Visit Rose in the vault. He's holding a city in his bare hands. Somebody should bring him a coffee.
    *set time_rose +1
    *goto v_rose_vault
  *hide_reuse #@aime With Aimé. The backlog of the dead, at Bélanger & Fils.
    *set rel_aime +10
    *goto v_aime
  *if (((ally_gisele) or (rel_gisele >= 20)) and (n9_fell != "gisele")) *hide_reuse #@gisele At the laundromat. Gisèle says it's time you learned what your family's song is for.
    *set rel_gisele +10
    *goto v_gisele
  *if (mathis_promise and (mathis_fate != "dead")) *hide_reuse #@mathis With Mathis. A red door on rue Sainte-Rose. You promised.
    *set rel_mathis +10
    *goto v_mathis
  *if (fleurette_fate != "gone") *hide_reuse #@fleurette At Chez Normande. Fleurette's rehearsing. She won't say for what.
    *set rel_fleurette +10
    *goto v_fleurette

*comment ---------------------------------------------------------------- LAZARE
*label v_lazare
*page_break
*portrait lazare neutral
Sunday morning. Ten o'clock. The bells of Saint-Bernardin, on rue Jarry, ringing for Mass.

Lazare is standing on the sidewalk across the street from the church in a borrowed coat, with his hands in his pockets, looking at the doors.
*if dario_fate = "dead"
  He's wearing Dario's toque. He always is, now.
"I've been to Mass every day of my life since I was ten," he says. "Twice on Sundays. Every day. I've never missed one." He looks at the people going up the steps: old women in good coats, a family with three kids, a man with a cane. "I don't know if I believe in any of it. I don't know if I ever did. Or if I just believed in [i]him[/i]." He means the Bourdon. "And my mother goes here. Every Sunday at ten. She'll be in the fourth pew on the left."

*choice speak
  #"Go in. Sit with her. You don't have to believe anything. You just have to sit next to your mother."
    *set rel_lazare +10
    Lazare looks at you for a long time. Then he crosses the street, and goes up the steps, and in.

    You wait on the sidewalk. At eleven, the doors open and people come out into the grey, and among them, a small round woman in a black coat, holding the arm of a tall man in a borrowed coat, talking up at him nonstop, and he's bending his head down to listen, and he's smiling.
    *remember lazare His first Mass as Lorenzo Ferrante, in the fourth pew on the left, next to his mother.
  #"Don't go. Not this week. Come for a walk with me instead."
    *set rel_lazare +5
    *set des_lazare +5
    You walk. Up Jarry, and across to the park, in the grey slush, and he doesn't say anything for a long time.

    "It's the first Sunday I haven't gone," he says finally. "In twenty-one years." He looks up at the sky. "Nothing happened. I thought something would happen." A pause. "It feels like taking off a coat that was too heavy. And then being cold."

    You take his hand. His bell hand. He lets you.
  #"What do you believe in? Now? If not him?"
    *set rel_lazare +10
    *set lore +2
    He thinks about it for a very long time, on the sidewalk, with the bells going.

    "The bell," he says finally. "The big one. I believe in that. I've heard it every night of my life." He looks at you. "And I believe in a man from Verdun who asked me my name on the ice." He almost smiles. "That's two more things than I had a month ago."
*goto week_end

*comment ---------------------------------------------------------------- DARIO
*label v_dario
*page_break
*portrait dario smile
Sunday lasagna at Saint-Jude.

Twenty people at the long table under the Stations of the Cross. Manon's grace, or Réjean's. Luc in his Céline hoodie, taller than he was a month ago. Johnny Tabarnak doing a bit about the Archbishop.
*if world = "open"
  And new faces. Every Sunday this month there are more of them: people who saw the Veillée on Nuit blanche and came looking. A nurse from the Jewish General who's been having dreams about running. A teenager from Rivière-des-Prairies whose parents threw him out. An old man who turned in 1971 and has been alone in a rooming house on Ontario Street ever since, and didn't know there was anybody else. Dario feeds all of them. Dario makes room at the table for every one.
Dario in the lobster apron, at the stove, with his toque on, pretending not to watch you eat.

*choice speak
  #Help him cook. You're terrible at it. Help anyway.
    *set rel_dario +10
    *set des_dario +5
    You're terrible at it. You burn the garlic. He takes the pan off you and shows you how, with his big hand over yours on the handle, and his chest against your back, and his chin on your shoulder, and Kim and Sandrine start a slow clap from the table.
  #"Tell me about your nonna. Pina."
    *set rel_dario +10
    He does. The Buick. The wooden spoon. The plate she put out every Sunday whether he came or not. The toque she knitted him in 2014, when he turned, lumpy and red, because she said a boy who's going to be out all night needs something on his head. "She didn't know what I was," he says. "She knew something. She just kept knitting."
  #"You're good at this. The pack. All of it. You know that?"
    *set rel_dario +5
    *set charm +2
    He looks at you, and goes red to the ears, and turns back to the stove. "Shut up," he says. "Eat your lasagna." But he's smiling at the pan.
*goto week_end

*comment ---------------------------------------------------------------- THE SHOP
*label v_shop
*page_break
*portrait keyman smile
Serrurerie Lacroix, on Wellington, has been a locksmith's since 1958, and a storage unit for your grandfather's junk since 2019. This week you and your father clear it out.

It takes four days. Boxes of blanks. A key machine from 1962 that he gets running again in an afternoon, humming. Aurèle's workbench, with the vice still bolted to it and a half-finished lock in it that nobody's touched since 1994. A calendar from 2011, still on March.

On the Friday, he stands on a stepladder outside in the slush and takes down the old sign, and puts up a new one he's painted himself, in gold on green, badly:

[b]SERRURERIE LACROIX & FILS. 1958. OUVERT.[/b]

He climbs down and stands on the sidewalk beside you and looks at it.

*choice speak
  #"It's crooked."
    *set rel_keyman +5
    *set wry %+5
    "It's not crooked," says your father. "The building's crooked." He looks at it. "It's a little crooked."

    You leave it crooked.
  #"Papa. It's perfect."
    *set rel_keyman +10
    He doesn't say anything. He puts his hand on the back of your neck, the way he did when you were nine, and leaves it there, on the sidewalk on Wellington, in the slush, looking at the sign.
  #"Teach me the half-finished one. On Grand-papa's bench."
    *set rel_keyman +10
    *set hands +3
    He looks at you. Then he takes you inside, and turns on the lamp over Aurèle's bench, and you both look at the lock in the vice: a lever lock, brass, beautiful, half done. "He was making it for your mémé," your father says. "For the jewellery box. He died before he finished it." He hands you a file. "We'll finish it together. Then you'll take it to her."
    *remember keyman You finished your grandfather's last lock together, on his bench, with the lamp on.
*goto week_end

*comment ---------------------------------------------------------------- GARDIEN
*label v_gardien
*page_break
*portrait keyman neutral
Thursday. The fort. The powder house on Île Sainte-Hélène. The steel door with six brass buttons.

You go down the stairs with a transistor radio, the way he did for fifteen years.

He's there, in the middle of the brick room, standing inside three bands of brass, glowing faintly gold, with his eyes closed. When he hears you on the stairs, he opens them and smiles.

"It's Thursday," says Serge Lacroix.

You sit on the bottom step. You turn on the radio. There aren't any Expos any more. You find some music instead, something old, and he laughs, because it's the song they played at his wedding.

*choice speak
  #Tell him everything. The week, the city, Mémé, all of it.
    *set rel_keyman +10
    You tell him everything. The shop, still closed. Mémé's cardigan. The bells at 3:33. He listens with his eyes closed, glowing faintly, the way Nadim must have listened to him for fifteen years.
  #"Is it bad? In there? Tell me the truth."
    *set rel_keyman +5
    *set wits +2
    "It's quiet," he says. "It's very quiet. I can hear the whole city, like a sea." He opens his eyes. "It's not bad, {name}. It's lonely. That's all. Nadim did it for fifty-nine years." A pause. "Come on Thursdays. That's all I ask. That's all he ever asked."
  #Put your hand through the bands. Just for a second. Hold his.
    *set rel_keyman +10
    *set nerve +2
    The brass is hot. You put your hand through anyway, between the bands, and he takes it. His hand's warm as a stone in the sun.

    "Same hands," he says.
*goto week_end

*comment ---------------------------------------------------------------- NADIM
*label v_nadim
*page_break
*portrait nadim smile
You teach Nadim the métro.

It takes all week. He's terrified of the escalators at Berri-UQAM. He's delighted by the Opus card. He rides the green line from one end to the other, Honoré-Beaugrand to Angrignon, twice, with his face pressed to the window, and every time the train comes out of the tunnel into a station he says "[i]ah[/i]" under his breath like a man watching fireworks.

On the Thursday you take him to Parc Jean-Drapeau and stand with him on the path where the Expo monorail used to go through the American pavilion.
*if world = "open"
  People look at him on the métro. It's a strange city now. A man in a 1967 suit whose eyes glow faintly amber in the tunnels. Some of them take pictures. One little girl asks if he's a genie. He says, gravely, "Yes," and she asks for a wish, and he looks at you, and then gives her a Timbit.

*choice speak
  #"Tell me about Zeina. We could look for her."
    *set rel_nadim +10
    *set nadim_sister true
    He tells you. Zeina, younger than him, fiercer, sold two years after him to a man from Marseille. He's been listening for her through the stone for sixty-eight years. "She'd be in a lamp, or a ring, or a bottle," he says. "Somewhere by the sea. She always liked the sea." He looks at the river. "Aimé's father knows someone at the Line who knows someone in Marseille. It's a start."
  #"Is it what you thought? Being out?"
    *set rel_nadim +5
    *set des_nadim +5
    "No," he says. "It's louder. It's uglier. Everyone's looking at a little glass rectangle." He looks at the river, and the bridge, and the city on the other side. "And it's more beautiful than anything I heard through the stone. I didn't know people had got so good at being alive."
  #Take his hand on the path where the monorail used to go.
    *set des_nadim +10
    His hand's warm as a stove door. He looks down at it, in yours, for a long time.

    "Careful, creditor," he says, very softly. "I still owe you. I can't say yes to anything while I owe you." But he doesn't let go.
*goto week_end

*comment ---------------------------------------------------------------- THURSDAYS (price nadim)
*label v_thursdays
*page_break
*portrait nadim hushed
Thursday. The fort. The steel door, the six buttons, the stairs.

He's there, in the middle of the brick room, in three bands of brass, a column of coals, dim. When he hears you on the stairs, two points of light open in the smoke.

"Creditor," he says. And then, with something like wonder: "You came. It's Thursday. You came."

You sit on the bottom step. You turn on the transistor radio you bought at the Canadian Tire on Wellington.

*choice speak
  #Tell him about the city. What he's holding asleep.
    *set rel_nadim +10
    You tell him. The water main in Rosemont. The Portuguese bakery. A kid on Wellington with a Céline hoodie. He listens, the coals brightening a little, the way Serge must have made them brighten for fifteen years.
  #"I'm sorry."
    *set rel_nadim +5
    "Don't be," he says. "It was a sensible thing. You're a sensible man." A long pause. "But thank you for saying it. Your father never said it. He just came."
  #Find him some music on the radio. Anything but sports.
    *set des_nadim +5
    *set rel_nadim +5
    You find a jazz station. Something old, from the sixties. The coals flicker, and brighten, and you realise, after a while, that he's humming along.
*goto week_end

*comment ---------------------------------------------------------------- ROSE
*label v_rose
*page_break
*portrait rose smirk
Rose's Lenten ball is at Le Mardi Gras on the third Saturday of March, and it's a contradiction in terms, and that's the point.
*if invited_rose
  The clocks on the walls say [b]12:47[/b], and they're ticking. It's Lent in the Mardi Gras for the first time in two hundred and eighty-six years, and Rose has decided that the way to celebrate this is a masked ball at which nobody is allowed to eat, drink, dance or kiss, which of course means that everybody does all four, constantly, with enormous guilt.
*else
  The clocks on the walls say [b]11:59[/b], and they're not ticking. Waiting. Rose has thrown a masked ball anyway, at which nobody is allowed to eat, drink, dance or kiss, which of course means that everybody does all four, constantly, with enormous guilt.
He finds you by the champagne fountain, in a black mask, with his gloves on.

"You came to my Lenten ball," he says. "What are you giving up?"

*choice speak
  #"Being afraid of you."
    *set des_rose +10
    *set rel_rose +5
    Rose goes very still behind his mask. "Oh," he says softly. "Oh, that's a very bad idea." He holds out his gloved hand. "Dance with me anyway."
  #"Nothing. I've given up enough this year."
    *set rel_rose +10
    Rose laughs. "Fair," he says. "More than fair." He looks at the room, the masks, the forbidden champagne. "I gave up heaven. It was a long time ago. I don't recommend it as a Lenten practice."
  #"Lying. I'm giving up lying. To everybody."
    *set rel_rose +10
    *set guarded %-10
    "Welcome," says Rose, with great warmth, "to my entire existence." He lifts his glass. "It's terrible. You'll love it."
*goto week_end

*comment ---------------------------------------------------------------- ROSE IN THE VAULT
*label v_rose_vault
*page_break
*portrait rose neutral
The fort. The stairs. The brick room.

Rose is standing inside the three bands of brass with his bare hands on the chest band, and the light under his skin is glowing red and gold, steady, like a forge banked for the night. The whole vault smells of cloves. He opens his eyes when you come down.

"Darling," he says. "You brought coffee. Nobody's ever brought the devil coffee."

*choice speak
  #Hold it up to his mouth. His hands are busy.
    *set des_rose +10
    *set rel_rose +5
    He drinks it from the cup in your hand, watching you over the rim with his red-coal eyes. "That's the most intimate thing anyone's done for me since 1740," he says.
  #"Is it hard? Holding it?"
    *set rel_rose +10
    "It's like holding a sleeping child," he says. "Half a million sleeping children." He looks at his hands on the brass. "They dream, you know. I can feel all of them dreaming." A pause. "It's the most innocent thing I've touched in three hundred years. It's unbearable."
  #"When will you ask? For the yes."
    *set rel_rose +5
    *set wits +2
    "When you least want me to," says Rose, pleasantly. "That's how it works." And then, more quietly: "Or maybe never. I'm finding I like having it more than I'd like spending it."
*goto week_end

*comment ---------------------------------------------------------------- AIMÉ
*label v_aime
*page_break
*portrait aime smile
The backlog of the dead.
*if world = "held"
  It's always bad in March, Aimé says. Everybody hangs on through the winter and then lets go when the light comes back. Bélanger & Fils has eleven services this week.
*else
  It's worse than usual. The city woke up, and a lot of the Veillée's dead woke up with it: ghosts who'd been waiting fifty-nine years for someone to remember their names, and now somebody has, and they want to go. Properly. With a service. Bélanger & Fils has thirty-one services this week, and eleven of them are for people who died before 1967.
You help. You don't know how to do anything, so you do everything: carry chairs, answer the phone, drive the hearse once when Aimé falls asleep at his desk at four in the afternoon with his face on the funeral register.

On the Friday night, in the prep room, with the tea in beakers, he looks at you over his glasses.

*choice speak
  #"How do you do this every day? The last thoughts. All of them."
    *set rel_aime +10
    *set lore +2
    Aimé thinks about it. "Most of them are small," he says. "That's what nobody tells you. You'd think it'd be big things, at the end. God, or love, or regrets. But it's mostly: [i]did I turn off the stove.[/i] [i]Is the cat fed.[/i]" He smiles. "It's very comforting, actually. Everybody's worried about the cat."
  #"You're my best friend, Aimé. You know that?"
    *set rel_aime +15
    He goes pink to the ears. "Since Secondaire 3," he says. "I had a Spider-Man pencil case too. Did you know that? I bought it after I saw yours." He looks at his beaker. "Best friend's better than a crush."
  #Fall asleep on the couch in his office. Let him put a blanket on you.
    *set rel_aime +10
    You wake at midnight under a blanket that smells of lilies, with a date square on a plate on the floor beside you, and a note in careful handwriting: [i]You're a very bad undertaker. Thank you. —A.[/i]
*goto week_end

*comment ---------------------------------------------------------------- GISÈLE
*label v_gisele
*page_break
*portrait gisele smirk
The laundromat. Tuesday night. Bingo night, in theory. Gisèle has cancelled it.

"Sit," she says. "Your grandfather spent the summer of 1966 in those towers with a tuning fork. Nobody ever told you why. I'm going to tell you why." She lights a du Maurier. "And then you're going to wish I hadn't."

She tells you. The six notes of the Lacroix song aren't a song. They're a name. The partials of the great bell of Notre-Dame, the overtones, the notes inside the note: Jean-Baptiste's own voice, taken apart and written down. Aurèle tuned the lock to the angel's name, so that nothing of the Veillée could ever open it, because nothing of the Veillée can speak an angel's name without burning.

"But a mortal can," says Gisèle. "A Lacroix can. You can sing it to its face." She looks at you through her smoke. "Do you understand what that means, boy? It means you can call it. It means you can calm it, or bind it, or let it go. With a song you've been humming in the van since you were twelve."
*set lore +5
*set know_song_name true
*codex angel

*choice speak
  #"Why would I need to bind an angel?"
    *set rel_gisele +5
    *set wits +2
    Gisèle looks at you for a long time. "You heard the bells last night," she says. "At three thirty-three. Every night." She taps ash. "Something's coming home at Easter. And it's been waiting fifty-nine years to say what it thinks of us."
  #"Teach me. Properly. All of it."
    *set rel_gisele +10
    *set lore +3
    She teaches you. For three hours, among the dryers, with a tuning fork she's had in a drawer since 1966, [i]his[/i] tuning fork, she says, and doesn't explain how she has it. By midnight you can hear it: the name inside the note, when she strikes the fork on the edge of the washer.
  #"You kept his tuning fork. For sixty years."
    *set rel_gisele +15
    Gisèle doesn't say anything for a long time. Then she takes it out of her cardigan pocket, where it's been the whole time, and looks at it.

    "He left it on my kitchen table," she says. "The night before. In '67. He said, [i]keep this, Gisèle, so I can't use it again.[/i]" She turns it in her fingers. "Stupid man. Stupid, beautiful man."
*goto week_end

*comment ---------------------------------------------------------------- MATHIS
*label v_mathis
*page_break
*portrait mathis smile
*if mathis_mother
  Rosa Ferrante takes Mathis to rue Sainte-Rose on a Wednesday afternoon, in her good coat, holding his hand, and you go with them, and wait on the corner.
*else
  You take Mathis to rue Sainte-Rose on a Wednesday afternoon. He's got his crayon drawing in his fist.
Rue Sainte-Rose in Centre-Sud is a street of old brick row houses, every one with an outdoor staircase and a different coloured door. Halfway down the block, there's one that's red.

Mathis stops dead on the sidewalk and looks at it.
*if world = "held"
  He goes up the stairs, and knocks, and a woman opens the door. Yellow hair, going grey now. A green coat on the hook behind her. She looks down at him: a small boy with a pudding-bowl haircut and a crayon drawing.

  She doesn't know him.

  You watch her not know him. You watch Mathis see it. He holds up the drawing. She looks at it for a long time, and something happens in her face, far down, like a fish under ice.

  "That's my coat," she says slowly. "That's my door." She looks at him. "Who are you, sweetheart?"
  *choice speak
    #Go up the stairs. "His name's Mathis. He drew that when he was eight. He's been looking for you."
      *set rel_mathis +10
      *set nerve +2
      She doesn't remember. The Hush holds. But she doesn't close the door. She crouches down on her own doorstep, and looks at the drawing, and then at Mathis, for a long time.

      "Would you like to come in?" she says finally. "I've got hot chocolate. I don't know why I always keep hot chocolate. I don't drink it."
      *set mathis_mother true
    #Let him do it. It's his door.
      *set rel_mathis +5
      "I'm Mathis," he says. His voice wobbles and he steadies it. "I think you're my mother. They took you out of me. And me out of you." He holds up the drawing. "But I drew you. I remembered your coat."

      She looks at him for a long, long time. Then she sits down on her own doorstep in the cold, and holds out her arms, and doesn't know why, and he goes into them.
      *set mathis_mother true
*else
  He goes up the stairs, and knocks, and the door opens before his hand's even come down.

  A woman. Yellow hair, going grey. A green coat, on, as if she's been about to go out for a month and never gone. She looks down at him.

  "[i]Mathis,[/i]" she says.

  She knows him. The whole city woke up on Nuit blanche, and she woke up with a son. She's been going door to door in Centre-Sud for a month with his picture. She's been to the police. She's been to the Archbishop.

  He drops the drawing. You see it go down the stairs, in the wind, a crayon woman in a green coat in front of a red door, and nobody picks it up, because Mathis is in his mother's arms on the top step, and she's on her knees, and neither of them is ever letting go.
  *set mathis_mother true
*remember mathis On rue Sainte-Rose, a red door, a green coat. You kept your promise.
*goto week_end

*comment ---------------------------------------------------------------- FLEURETTE
*label v_fleurette
*page_break
*portrait fleurette smile
Fleurette is rehearsing.

Every night this week, at Chez Normande, after closing, on top of the jukebox, in a different gown every night, with Normande at the bar pretending not to watch. She won't say what for. She sings everything: Piaf, Dalida, Diane Dufresne, Céline, Ginette Reno. She stops halfway through songs and starts again. She makes you sit in a booth and tell her honestly.

"For what, Fleurette?"

"For the Saint-Jean, chéri," she says, as if it's obvious. "June. The Fête nationale. There'll be a stage on the mountain, and a bonfire, and every Québécois in the city singing [i]Gens du pays[/i]." She adjusts her wig. "And I have a feeling, chéri, a very strong feeling, that somebody's going to need a voice the whole island can hear."

*choice speak
  #"You're amazing. You know that? You've always been amazing."
    *set rel_fleurette +10
    Fleurette looks at you from the top of the jukebox for a long moment. "Nobody's said that to me since 1977," she says. "Say it again. Slowly. I want to remember it."
  #"You know something. About June. What do you know?"
    *set rel_fleurette +5
    *set wits +2
    "The dead hear everything that's said in bars, chéri," says Fleurette. "And every priest in this city's been drinking very heavily since those bells started at three thirty-three." She looks at you. "They're saying the bells are counting down. To Easter. And after Easter, to the Baptist." She crosses herself, badly, the wrong way round. "Whatever comes home at Easter, it isn't coming home to forgive anybody."
  #"Sing me one. Just me. Anything."
    *set rel_fleurette +10
    She sings you "Je ne regrette rien", from the top of the jukebox, at two in the morning, to an empty bar, and Normande stops polishing, and nobody breathes.
*goto week_end

*comment ---------------------------------------------------------------- WEEK END: fixed beats
*label week_end
*page_break
*if week = 1
  *goto beat_bells
*if week = 2
  *goto beat_compagnie
*if week = 3
  *goto beat_easter
*goto beat_last

*label beat_bells
*mood bells
At the end of the first week, you go to the old town.

You don't mean to. You're driving past, on a job, and you pull over on Notre-Dame Street and look up at the two towers of the basilica. La Tempérance. La Persévérance.

The Carillon is still there. Some of it. You can see a light in the ringing room. And on the steps of the basilica, in the grey afternoon, sitting in his cassock with a thermos, is the Bourdon.
*if bourdon_knows or (change_how != "")
  He sees you. He doesn't get up. After a while you go and sit next to him on the steps.

  "It rings at three thirty-three," he says. "Every night. By itself. Jean-Baptiste. And then every bell on the island answers." He pours tea into the thermos lid and holds it out to you. "Fifty-nine years I rang the changes to drown it out. Now I sit on the steps and listen." He looks up at the towers. "It's counting, Monsieur Lacroix. Every night, one note. It's counting down to Easter."
*else
  He sees you. He lifts the thermos lid to you, like a toast, and doesn't get up, and you don't go over.

  At 3:33 that night, you're awake when it happens. One note, from the old town, and then every bell on the island. And under it, if you listen, something that sounds almost like a word.
*set rel_bourdon +5
*set week +1
*goto week

*label beat_compagnie
*mood oxblood
At the end of the second week, there's a card on your windshield.

Heavy cream stock, a deckled edge, a brass beaver embossed at the top.
*if honora_turned
  But it's not from Honora. It's from the Club, signed by three names you don't know: the Scottish fur baron, the woman in beads, the advertising man from Sherbrooke Street. [i]The Club regrets that its President has lost her way. The Club does not.[/i]

  You show it to Honora. She reads it on the porch of Strachan House in her fur, and laughs, the first real laugh you've heard from her. "How very tiresome," she says. "My own members. They'll make their move in Holy Week, when the bells are gone and there's nothing ringing to stop them." She hands it back. "Don't worry, Mr. Lacroix. I'm very, very good at tidying."
*elseif ruari_fate = "confessed"
  [i]The Club notes with regret the unpleasantness at our table. The Club is patient. The Club will see you at Easter. —H.S.[/i]
*else
  [i]The Club congratulates Mr. Lacroix on a memorable Nuit blanche. The Club is patient. The Club will see you at Easter. —H.S.[/i]
*if world = "held"
  *if price = "nadim"
    The Hush is held. It's what they wanted. So why the card? You ask the Conductor. "Because a Hush you close by hand, you can open by hand," he says. "And they've seen what you can do with yours. They'd rather have the key."
  *elseif price = "serge"
    The Hush is held, by your father. "And a Hush held by a man," says the Conductor, when you ask him, "is a Hush held by someone who can be persuaded to let go." He looks at you. "They'll come for him. When the bells are gone."
  *else
    The Hush is held, by a devil. "And the Club," says the Conductor, when you ask him, "has never liked owing anything to anyone. Least of all him."
*elseif world = "open"
  The city's awake, and the Club wants it asleep. You know that without anyone telling you. A new Hush, forced, by hand, on the three days when the bells are gone to Rome and nothing's ringing to stop it. And a Lacroix to close it. Or a Lacroix's father.
*else
  The Hush is remade, by consent, and the Club hates it. A lullaby that people choose isn't a lullaby you can sell. They'll try to tear it down. When the bells are gone.
*set week +1
*goto week

*label beat_easter
*mood wolves
*page_break
*if dar_ok
  At the end of the third week, at Saint-Jude, over the Sunday lasagna, Dario asks you a question.

  He asks it laughing. He's got his mouth full. "Hey, Lacroix. When's the last time you did your Easter duties?"

  The whole table laughs. It's a pack joke. They ask everyone.
*else
  At the end of the third week, at Saint-Jude, over the Sunday lasagna, Manon asks you a question. Or Big Réjean, if it's Réjean at the head of the table now.

  "When's the last time you did your Easter duties, locksmith?"

  The whole table laughs. It's a pack joke. They ask everyone.

"2019," you say. "My mother's last Easter. She dragged me to Saint-Willibrord every year. Confession, the whole thing. Communion. I did it for her." You shrug. "Not since."

The table stops laughing.
*if dar_ok
  Dario puts his fork down. You watch him count, on his fingers, under the table. 2020. 2021. 2022. 2023. 2024. 2025.

  "Six," he says. His face has gone a strange colour. "Six Easters. And this one's seven." He looks at you. "Lacroix. This Easter's your seventh."
*else
  Somebody counts, on their fingers, under the table. 2020. 2021. 2022. 2023. 2024. 2025. "Six," they say. "This one's seven."
*set easter_due true
*page_break
Nobody says anything for a long time.

"You'll turn," says Kim, gently, from the other end of the table. "On Easter Sunday. At dawn. That's how it goes." She looks at Sandrine. "It's not... it's not the end of the world. Look at us."

"It's not the end of the world," says Sandrine. "It's the end of [i]a[/i] world."

*choice speak
  #"Okay. Then I'll turn. Tell me what it's like."
    *set rel_dario +5
    *set rel_manon +5
    *set reckless %+10
    The whole table looks at you. And then, slowly, Big Réjean starts to grin, and Johnny Tabarnak starts to applaud, and somebody bangs the table, and it goes round, the whole pack, stamping and banging, like you've just told them you're getting married.
    *if dar_ok
      Dario doesn't bang the table. He looks at you, very steady, with his gold eyes. "It hurts," he says. "The first time. Like being born. And then you're never alone again." A pause. "You'd be one of us."
  #"No. There's got to be another way. Confession. Something."
    *set guarded %+10
    *set wits +2
    "There is," says Manon, or Réjean. "There's always a way, till the day. Go to confession. Take communion. On Easter Sunday, before dawn." A pause. "You'd have to mean it. Or at least do it properly. The curse doesn't care what you believe. It counts."
  #"Why didn't it happen before? Under the Hush?"
    *set lore +3
    "Because you were a creditor," says Manon, slowly, as if working it out. "A djinn's creditor. The Hush couldn't touch you. And nor could anything else of the Veillée." She looks at you. "But the debt's changing. Isn't it. Everything's changing. You're not protected by anything any more."
*remember dario At Saint-Jude, over lasagna, the pack counted your Easters. This one's seven.
*set week +1
*goto week

*label beat_last
*mood snow
*page_break
The last Sunday in March. Palm Sunday's next week. Then Holy Week. Then Easter.

On the Saturday night, very late, you get a call from Résidence Sainte-Marguerite. It's Ghislaine.

"She's all right," she says, before you can ask. "She's all right. She just wanted me to call. She says to tell you..." A pause. "She says to tell you the ice is starting to go on the river. She can hear it from her window. She says you'll know what that means." Another pause. "Do you?"

*choice speak
  #"Yes. I'll come tomorrow."
    *set rel_lucille +10
    "Good," says Ghislaine. "She'll like that. She asked for the date squares from the Portuguese bakery." A breath. "Bring a lot."
  #"Is she frightened?"
    *set rel_lucille +5
    "No," says Ghislaine, surprised. "No. She's humming. She's been humming all night. That song. You know the one."
*page_break
At 3:33 that night, the bells ring. One note, from the old town, and every bell on the island answering.

But this time, you're awake. And this time, under it, you hear it clearly, like a word said in the next room:

[b]SEVEN.[/b]

Seven days to Easter.

*page_break Chapter Twelve
*goto_scene ch12
`);
