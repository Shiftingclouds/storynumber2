NB.scene("epilogue", String.raw`
*mood white
*chapter 18 Nuit blanche, one year later [18]
*temp laz_ok true
*temp dar_ok true
*temp anyone_died false
*temp serge_free false
*temp nadim_out false
*if (nadim_fate = "free") or (nadim_fate = "held_by_consent")
  *set nadim_out true
*if keyman_safe and (keyman_fate != "dead") and (keyman_fate != "gardien")
  *set serge_free true
*if (lazare_fate = "dead") or (lazare_fate = "ashes") or (lazare_rehushed and (not(lazare_restored)))
  *set laz_ok false
*if (dario_fate = "dead") or (dario_fate = "ashes")
  *set dar_ok false
*if (lazare_fate = "dead") or (dario_fate = "dead") or (keyman_fate = "dead") or (n9_fell = "gisele") or (angel_end = "judged")
  *set anyone_died true
*if mc_fate = "ashes"
  *goto you_gone
[b]Saturday, the twenty-seventh of February, 2027.[/b]

Nuit blanche.

A year. Exactly a year, give or take a leap. The posters are up again on every lamp post and bus shelter: a white moon, a dark blue sky, a crowd of tiny people in the snow, looking up. [b]DU CRÉPUSCULE À L'AUBE.[/b] The métro's running all night. The screens are lit on every building in the Quartier des spectacles.

It's twenty below with the wind. It always is.
*if world = "held"
  The city doesn't remember last year. Not really. A strange electrical storm at three in the morning. A lot of cracked windows at Easter. A big fire on the mountain on the Saint-Jean. Some people say they dreamed about wolves. Most people say nothing at all.
*elseif world = "open"
  The city remembers everything. There's a wolf on the Nuit blanche poster this year, if you look: a tiny grey one in the crowd, in a tuque, looking up at the moon with everyone else. There's a vampire on the organising committee. There's a ghost doing a reading at the Monument-National at four in the morning. It's not easy. It's not always kind. But it's awake.
*else
  The city remembers what it's chosen to remember. Some people see the wolves. Some people don't. The lullaby's still holding, and it's still a question, and every night somebody decides, one way or the other, how to answer it.

*page_break
*mood snow
You go round the city, the way you did a year ago, the way you always do now.

*if laz_ok
  *portrait lazare smile
  [b]Lorenzo Ferrante[/b] rings the bells of Notre-Dame on Sunday mornings.
  *if ringer_plan
    Not for the Carillon. There isn't a Carillon any more. There's something else: forty ringers in the towers, some of them children who came of their own free will with letters from their parents, ringing for weddings and funerals and Easter and the Saint-Jean, and for nothing at all, sometimes, on a Tuesday, because it's beautiful. They call it [i]les Sonneurs de Jarry[/i]. He didn't name it. He'd never have named it that. Dario did.
  *else
    Some Sundays. When he wants to. The rest of the time he works nights at a bakery on Jean-Talon, and sleeps in the day, and goes to his mother's for lunch at one.
  *if rosa_knows
    Rosa knows him. Every Sunday. Some Sundays she has to be told again, in the held city; some Sundays she doesn't. There are pencil marks on her pantry door with a name beside every one.
  *if dario_fate = "dead"
    He still wears the toque. He never takes it off.
*elseif lazare_fate = "dead"
  *portrait lazare sad
  [b]Lorenzo Ferrante[/b] is buried in the cemetery at Côte-des-Neiges, under a stone his father cut himself, in the basement on Jarry, out of cedar first, to practise, and then granite. It says his name. Both of them. Every Sunday there's a cannoli on it, in a paper, from San Marco.
*elseif lazare_rehushed
  *portrait lazare neutral
  [b]Lazare Desautels[/b] doesn't remember. Not all of it. He remembers a man from Verdun who asked him his name on the ice, and a big man in a toque who looks at him sometimes as if he's something precious that got lost. He's started to remember more, lately. A kitchen. A flashlight. It comes back in pieces, the way snow melts: from the edges in.
*if dar_ok
  *portrait dario smile
  [b]Dario Santangelo[/b] runs the Sept-Ans out of Saint-Jude on Jean-Talon, where there's a new iron door on the side, from 1961, with a lock that works.
  *if world != "held"
    There are forty-one of them now. They come from all over: Laval, the South Shore, Gatineau, a nurse from the Jewish General, a teenager from Rivière-des-Prairies, a man who turned in 1971 and was alone in a rooming house for fifty years. He feeds all of them. Sunday lasagna, one o'clock, a table for fifty under the Stations of the Cross.
  *else
    Twenty-two of them. Sunday lasagna, one o'clock. The same table under the Stations of the Cross, with the Christmas lights.
  He still sings Céline on the altar every Friday. He's still flat.
  *if moved_in = "jude"
    There's a second toothbrush in the sacristy bathroom. It's yours.
*elseif dario_fate = "dead"
  *portrait dario sad
  [b]Dario Santangelo[/b] is buried at Côte-des-Neiges, beside his nonna. The pack goes every Sunday after lasagna and sings "Pour que tu m'aimes encore" at the grave, badly, with their eyes shut. Somebody always leaves a cannoli.

*page_break
*if met_rose
  *if rose_fate = "gone"
    *portrait rose sad
    [b]Rose[/b] went out like a candle on the Saint-Jean, in front of an angel, and hasn't come back. He said a hundred years. On a Mardi Gras.

    Le Mardi Gras is still on the Main, between the dépanneur and the shuttered theatre. The door has no handle. When you strike a match on the matchbook, it opens, and inside it's empty: the tables, the dance floor, the band's instruments on the stage. And the clocks. Every clock says the real time now, and ticks. You go in some nights and sit at his table, and the fiddle on the stage plays one note by itself, very softly, and stops.

    There's a pair of black kid gloves on your dresser at home. You haven't moved them.
  *elseif price = "rose"
    *portrait rose smile
    [b]Rose[/b] is holding a city asleep in his bare hands, under an island in the river, in three bands of brass. He's very gentle with it.
    You go on Thursdays. You bring him coffee. You hold the cup to his mouth.
  *else
    *portrait rose smirk
    [b]Rose[/b] is on the Main. Le Mardi Gras has windows now, and they open. The clocks tell the real time. It's Lent there when it's Lent everywhere else, and summer when it's summer, and on Nuit blanche it's open all night to anyone who can see the door.
    *if invited_rose
      And everyone can see the door. The whole city invited him in. He's never been so busy. He says it's exhausting. He's never been so happy.
*if nadim_out or (nadim_fate = "held") or (price_freed)
  *if nadim_fate = "ashes"
    *portrait nadim sad
    [b]Nadim[/b] went up like a spark on the Saint-Jean, holding his sister's hand.
  *elseif (nadim_fate = "held") and (not(price_freed))
    *portrait nadim hushed
    [b]Nadim[/b] is under an island in the river, in three bands of brass, holding a city asleep. You go on Thursdays. You bring a radio. You've been teaching him about baseball. He still doesn't understand the infield fly rule. Nobody does.
  *else
    *portrait nadim smile
    [b]Nadim[/b] lives in Pointe-Saint-Charles, above the laundromat.
    *if zeina_free
      With Zeina, who runs the laundromat now, with Thérèse and Yolande and Pierrette and Monique, and has made it profitable for the first time since 1971, and wins at cribbage every Tuesday, and is terrifying.
    He has a phone. He uses it to photograph things he's never seen before: a Couche-Tard at three in the morning, a skateboarder, a cat on a windowsill in Mile End. He sends them to you with no words. You've got four thousand of them.
    *if hush_fate = "remade"
      One night a year, he isn't holding anything. Tonight. Nuit blanche. He'll be out all night, in his 1967 suit, walking the whole city, seeing all of them. Every single one.
    *if nadim_free
      He owes nobody anything. He says no to things now, often, with enormous pleasure. Then, usually, he does them anyway.

*page_break
*if fleurette_fate = "gone"
  *portrait fleurette smile
  [b]Madame Fleurette[/b] (Réal Gauthier, 1941–1977) isn't on the jukebox at Chez Normande any more.

  Normande kept the jukebox. It's dark. Every Tuesday at karaoke, before it starts, Normande puts a quarter in it anyway, and it plays "Je suis malade", by itself, all the way through, and nobody sings over it.

  Her name's on a plaque now, on Stanley Street, where the Café Montmartre used to be. The city put it up in the autumn. [i]Madame Fleurette. Stanley Street, 1968–1977. Last Call.[/i]
*else
  *portrait fleurette smile
  [b]Madame Fleurette[/b] is on top of the jukebox at Chez Normande, in a new gown, for Nuit blanche. She's decided to stay, for now. "Somebody has to tell Normande her lipstick's wrong," she says. "And I've heard there's a boy in Laval who does a Dalida that'll make you weep. I have to see that before I go."
*portrait aime smile
[b]Aimé Bélanger[/b] runs Bélanger & Fils now. His father retired to Florida.
*if aime_fate = "hurt"
  He has a scar across his ribs from Holy Saturday that he shows people at parties. He tells the story every time: [i]I said, I'm here to collect the deceased, and they stepped back[/i].
*if aime_fate = "ashes"
  No. Aimé Bélanger is buried at Bélanger & Fils, by his father, who came back from Florida to do it. Nobody tasted him. His father wouldn't let them.
*else
  He doesn't sell memories any more. He does funerals for the Veillée as well as the sleepers: vampires and wolves and ghosts who've finally been remembered and want to go properly. He's very good at it. He cries at every one.
  *if dentist = "date"
    He's seeing a dentist. From Griffintown. Philippe. You introduced them by accident at a soup tent on the Saint-Jean. Philippe wears argyle socks to dinner on purpose now. Aimé says it's the most romantic thing anyone's ever done.
*if serge_free or (keyman_fate = "freed")
  *portrait keyman smile
  [b]Serge Lacroix[/b] runs Serrurerie Lacroix & Fils on Wellington, with his son, some days, when his son isn't out on the other kind of job. The sign's still crooked. There's a Polaroid in a frame behind the counter, and a photo of Aurèle from 1958, and, since April, a photo of Lucille in her pink cardigan, laughing.

  On Thursdays he closes at four. He doesn't say where he goes. You know.
*elseif keyman_fate = "gardien"
  *portrait keyman neutral
  [b]Serge Lacroix[/b] is keeping the fort. Three bands of brass, under an island in the river, glowing faintly gold. You go every Thursday. You bring a radio. You bring date squares from the Portuguese bakery, because Mémé would have wanted you to. He tells you what the city dreams. It's mostly about the cat.
*elseif keyman_fate = "dead"
  *portrait keyman sad
  [b]Serge Lacroix[/b] is buried at Côte-des-Neiges, beside Kath Byrne, beside Lucille and Aurèle. The stone says [i]Serrurier[/i]. You go on Thursdays.
*portrait lucille smile
[b]Lucille Lacroix[/b] died on the fifteenth of April, with the ice going out, holding your hand. She's buried beside Aurèle. There's a little brass key on a chain on the stone that the cemetery keeps asking you to remove, and you keep not removing.

*page_break
*if n9_fell = "gisele"
  *portrait gisele neutral
  [b]Gisèle Pépin[/b] went up in the chasse-galerie last March and knew the way. The canoe came back empty, a week later, and landed on the laundromat roof by itself. It flies on New Year's Eve, with four old women in it and a fifth seat nobody sits in.
*else
  *portrait gisele smirk
  [b]Gisèle Pépin[/b] is eighty-seven, and smokes a du Maurier under every NO SMOKING sign in Pointe-Saint-Charles, and has forgiven the Lacroix name, and not Aurèle, and says so every time she sees you. She's teaching Zeina to fly the canoe. It's going badly. It's going beautifully.
*if met_honora
  *if honora_fate = "burned"
    *portrait honora sad
    [b]Honora Strachan[/b] went up like paper on the Saint-Jean, in a white summer dress from 1812, with an expression of perfect, tired courtesy. The Beaver Club still dines at Strachan House on Thursdays. There's an empty chair at the head of the table.
  *elseif honora_turned
    *portrait honora smile
    [b]Honora Strachan[/b] is still President of the Beaver Club. It has fourteen fewer members than it had last February. She calls it a tidier Club. She has you to dinner once a month and serves you steak-frites and watches you eat it, and asks after your grandmother, and is, you've decided, very lonely, and very glad of the company.
  *else
    *portrait honora smirk
    [b]Honora Strachan[/b] is still on the mountain, behind a door your grandfather made. She sends you a card every Christmas. They're very polite. You don't open them.
*if met_bourdon
  *portrait bourdon neutral
  *if bourdon_fate = "rang"
    [b]Brother Clément Ouimet[/b] died at the rope in the belfry of La Persévérance, on the Saint-Jean, after ringing the great bell once, to call it home. He was found smiling. Lazare, or somebody, buried him in the crypt with the other Grand Masters, and put nothing on the stone but a small brass handbell, upside down.
  *elseif bourdon_fate = "judged"
    [b]Brother Clément Ouimet[/b] died in his armchair by the window under the belfry, on the night of the Saint-Jean, with a cup of tea in his hands, as the angel said [i]them I will not forget[/i]. Nobody knows if it was the angel, or his heart, or both. He was eighty-one.
  *else
    [b]Brother Clément Ouimet[/b] died in May, in his armchair by the window, with the Register on his knees, open, and a pen in his hand, crossing out the ticks. He'd got through forty years of pages.
*if agathe_turned
  *portrait agathe smile
  [b]Agathe Marchand[/b] rings the fifth bell on Sundays at Notre-Dame, and has been dating a nurse from the pack, Sandrine's cousin, since the autumn. She still has a small brass handbell with a paper tag on the handle. [i]RETURNED.[/i] She keeps it on her windowsill, upside down, with a geranium in it.
*if met_manon
  *if manon_cut
    *portrait manon sad
    [b]Manon Lefebvre[/b] lives in Hochelaga with her mother and teaches grade three again. She doesn't know the pack. Every Sunday she sets an extra place at lunch and doesn't know why. Every Easter, at dawn, she wakes up and goes to the window and looks toward the mountain.
  *else
    *portrait manon smile
    [b]Manon Lefebvre[/b] is second of the Sept-Ans, and says the grace on Sundays, and still does the crossword in yesterday's paper with a pen, and is still the calmest person in any room.
*if mathis_mother
  *portrait mathis smile
  [b]Mathis Tremblay[/b] is twelve in June. He lives on rue Sainte-Rose behind a red door with his mother, who has yellow hair and a green coat. He's the youngest of the ringers at Notre-Dame, on Sundays, by his own choice, on the second treble, on one box now. He still wakes up at 3:33 some nights, and listens, and says there's nothing there any more. He says it's nice. He says it's lonely.
*elseif met_mathis
  *portrait mathis neutral
  [b]Mathis Tremblay[/b] is still looking for a red door. You're still helping. You've knocked on eleven. He says the twelfth's the one.
*if met_angel
  *if angel_end = "freed"
    Jean-Baptiste is eleven tons of bronze in La Persévérance, rung on the great feasts. There's nobody in it any more. Mathis says it sounds lighter.
  *elseif angel_end = "bound"
    Jean-Baptiste is in the bronze, waiting. Angels are good at waiting. At 3:33, some nights, if you put your hand on the stone of the tower, you can feel it: not humming. Listening.
  *else
    Jean-Baptiste is in the bronze. At 3:33 on Nuit blanche, it rings once, by itself, for nobody. For everybody.

*page_break
*mood eve
The city remembers things. Small ones. The ones nobody would think to write down.
*if twenties = "boxing"
  The gym on Wellington, where you boxed four nights a week in your twenties, has a new sign in the window: [i]Wolves welcome. Bring your own tape.[/i] The owner says it's a joke. It isn't.
*elseif twenties = "bar"
  The bar on Sainte-Catherine where you tended bar in your twenties has a photograph behind the till now, of a drag queen in a teal gown, that nobody remembers putting up.
*elseif twenties = "shop"
  Your grandfather's bench in the back of the shop still has the vice bolted to it. You've finished the lock that was in it.
*else
  You finally finished the criminology certificate at Concordia, two courses a semester. Your final paper was on unsolved deaths in Montréal in February 2026. You got a B. The professor wrote [i]fanciful[/i] in the margin.
*if opened_by = "force"
  There's a drill hole in the steel plate on the powder-house door, where you put your grandfather's mark in the crosshairs and apologised to him out loud. Nobody's ever fixed it. You've decided it's character.
*else
  There's no mark on the steel plate of the powder-house door. You opened it the way he'd have wanted, a year ago, and it's never shown a scratch.
*if n1_ride = "gravy"
  Dario still honks twice every time he drives the tow truck past the Longueuil end of the bridge, where he fed you poutine at four in the morning on the first night.
*elseif n1_ride = "scar"
  Lazare still touches the scar on his chin when he's thinking. He knows where it came from now. He tells the story at parties, badly, and Dario corrects him.
*if n1_gave_name
  You gave Nadim your name first, in the vault, before you knew what it was worth. He's never forgotten. He says it was the first gift anyone gave him in sixty-eight years.
*if meme_way = "serge"
  Mémé called you Serge, the first time. You let her. You never told anyone you did that. You think, now, that she knew all along.
*if mireille_daughter
  In October, with Aimé, you found Josée Caron. She's fifty-four and teaches piano in Longueuil and had a mother nobody remembered. Aimé told her the last clear thing in her mother's head was a little girl doing homework at a kitchen table. She has the index card now, in a frame.
*if n3_sang = "duet"
  Every Friday at Chez Jude, when Dario sings Céline on the altar, he stops on the last chorus and points at you, and you get up there, and you're both flat.
*if climbed
  You climbed to the top of the Jacques Cartier Bridge once, in the snow, for a djinn. You've never told your father. He'd have a heart attack.
*if feeder = "mercy"
  A girl with a burn-less forearm works nights at the O-négatif bar on the Line now. She tells everyone a hunter let her go in an alley in Griffintown, once, because a locksmith asked him to.
*elseif feeder = "harsh"
  A girl with a burn on her forearm the shape of a bar of iron works nights at the O-négatif bar on the Line. She's never forgiven the hunter. She's not sure about you.
*if gisele_way = "sheets"
  Every Saturday at the laundromat, somebody folds a fitted sheet perfectly, corners into corners. The girls say it's Gisèle. It might be.
*if nadim_danced
  You danced a bossa nova with a djinn once, at a devil's party, under the ticking clocks. He still hums it.
*if n5_roof = "howled"
  You howled with the pack on the roof of Saint-Jude once, badly, as a human. They still do the impression. Luc does it best.
*if lazare_said_name
  In a cell in La Persévérance, he said his name to you before he said it to anyone. [i]Lorenzo.[/i] You've never let him forget it.
*if change_rung
  On the night of the great peal you asked Lazare to ring the tenor, and he did. You think about that, some nights. About what the bell would have said.
*if n6_lane = "three"
  There's a step behind rue Jarry, on the Santangelo side, built for two boys. Three men have sat on it, crushed together, in the snow. Rosa Ferrante shouts at them from the window every time. Then she brings them coffee.
*if meme_fort
  You carried your grandmother down the stairs of the powder house once, at half past three in the morning, to see her son. Ghislaine never told anyone. She sends you a card every April.
*if hw_thursday = "willibrord"
  On Holy Thursday you sat in the front pew at Saint-Willibrord for your mother. Father Lemieux saw. He's saved it for you every Sunday since.
*if song_how = "free"
  At 3:33, some nights, you still wake up. And there's nothing. Just the radiator, and the city. You don't know if you miss it.
*if kissed_nadim or slept_nadim
  A djinn asked you, once, on an old Expo path, whether he could kiss you. He tells everyone about it. He says it was the first question he ever asked.
*if throuple_yes
  There's a piece of paper, folded small, in Lazare's breast pocket. [i]We'd like the three of us to be something. On purpose. Out loud.[/i] He takes it out and reads it when he thinks nobody's looking.
*if nadim_sister and zeina_free
  Zeina runs the laundromat and has made it profitable. She does Thérèse's hair on Thursdays. She still hits her brother on the chest with both fists every time she sees him, and then holds on.

*page_break
*mood white
And you.
*if ally_lazare or ally_dario or ally_aime or ally_fleurette or ally_clarke or ally_honora or ally_keyman or ally_gisele or ally_manon
  On the anniversary, everyone who stood with you on Nuit blanche comes to the laundromat roof.
  *if ally_lazare
    Lazare, who held what you asked him to hold.
  *if ally_dario
    Dario, who held the door, or the crowd, or your hand.
  *if ally_manon
    Manon, who led the grace.
  *if ally_aime
    Aimé, in his good tie.
  *if ally_clarke
    The Conductor, in his cap, who took a side.
  *if ally_honora
    Honora, in fur, who tidied.
  *if ally_keyman
    Your father, who kept the fort for fifteen years before you.
  *if ally_gisele
    The girls from the laundromat, with gin.
  *if ally_fleurette
    And an empty space on the jukebox that everyone leaves room for.
*if mc_wolf
  You run with the pack at the full moon, and wear a tuque in every weather, and have never, since Easter, been alone.
*if mc_fate = "burned"
  You have scars on both hands from the Saint-Jean. White, like frost. They don't hurt. When you pick a lock now, you can feel the pins through them more clearly than you ever could before.
You're a locksmith. You've still got the van. At three in the morning, when somebody's locked out somewhere in this city, your phone rings, and you go.

*page_break
It's Nuit blanche. Half a million people in the streets, and the métro running all night, and the screens lit on every building, and the whole island awake.

Where are you at 3:33?

*if final_romance = "lazare"
  *achieve lazare_heart
*if final_romance = "dario"
  *achieve dario_heart
*if final_romance = "both"
  *achieve both_hearts
*if final_romance = "rose"
  *achieve rose_heart
*if final_romance = "nadim"
  *achieve nadim_heart
*if not(anyone_died)
  *achieve nobody_died
*if angel_end = "judged"
  On the mountain. On the lookout on the east side, where the ash was. You go every year. You'll go every year for the rest of your life. You bring a cannoli, and a date square, and a tuque, and a rose, and a beaker of tea, and you put them on the stone wall, and you don't say anything.

  You stepped back. It was an angel. It knew what was right.

  You'll never be sure.
  *ending ashes
*choice
  *if (ngplus and (not(anyone_died)) and (world != "held")) #✦ Everywhere. With everyone. You remember every night of this, and every other time. You got it right.
    *ending true_night
  *if (laz_ok and dar_ok and (final_romance = "both")) #On a step behind rue Jarry, between two men, with a cannoli and a cake for nobody.
    *ending three
  *if (laz_ok and dar_ok and reconciled and (final_romance != "both") and (final_romance != "lazare") and (final_romance != "dario")) #Walking home alone down Jarry, past a step where two men are sharing a cannoli. Glad.
    *ending enzo
  *if (laz_ok and (final_romance = "lazare") and ringer_plan) #In the ringing room of La Tempérance, with Lazare on the tenor, ringing for nothing, because it's beautiful.
    *ending ringer
  *if (laz_ok and (final_romance = "lazare") and (not(ringer_plan))) #On the roof of Notre-Dame, on a blanket, with Lazare, who asks, every time.
    *ending ringer
  *if (laz_ok and ringer_plan and (world = "held") and (final_romance != "lazare")) #In the towers, where the bells hold the city asleep, and no child is ever taken again.
    *ending new_bourdon
  *if (dar_ok and (final_romance = "dario") and (world != "held")) #At Saint-Jude, with the pack, in a city that can see them. On the altar, singing Céline, badly, with Dario.
    *ending wolf_heart
  *if (dar_ok and (final_romance = "dario") and (world = "held")) #At Saint-Jude, with the pack, at the long table, with Dario. The city asleep outside. Not in here.
    *ending wolf_heart
  *if (mc_wolf) #On the mountain, on four legs, in the snow, with the pack, howling at the screens.
    *ending seven_years
  *if ((price = "rose") and ((des_rose >= 45) or (rel_rose >= 50))) #At the fort, with coffee, holding the cup to a devil's mouth. It's always a quarter to midnight in there.
    *ending last_dance
  *if ((final_romance = "rose") and (price != "rose")) #At Le Mardi Gras, where the door's open to anyone who can see it, and everyone can.
    *ending invited
  *if ((met_rose) and (rose_fate = "gone")) #At Le Mardi Gras, at his table, alone, with a pair of black gloves. A hundred years. You'll wait.
    *ending last_dance
  *if (nadim_free and ((final_romance = "nadim") or (nadim_q = "yes"))) #On the old wall of the fort, with Nadim, watching the city he held asleep for fifty-nine years stay up all night.
    *ending smokeless_fire
  *if ((great_wish = "accord") or (great_wish = "angel")) #In the crowd, with everyone, in a city you wished awake.
    *ending accord_unmade
  *if (keyman_fate = "gardien") #At the fort. It's not Thursday. You go anyway. You bring a radio.
    *ending le_gardien
  *if ((honora_turned or honora_contract) and (mc_fate = "burned")) #At Strachan House, at the long walnut table, with a glass of something that isn't wine. You'll see every winter from now on.
    *ending wintered
  *if (clarke_turned) #On the Missing Line, in a porter's cap, checking a pocket watch. The Conductor retired at Christmas. The Line is yours.
    *ending last_stop
  *if (fleurette_fate = "gone") #At Chez Normande, by the dark jukebox, with a rye and ginger, when it plays "Je suis malade" by itself.
    *ending last_call
  *if ((hush_fate = "remade") or (angel_end = "covenant")) #In a laundromat in the Pointe, with the dryers going round, listening to a whole city choose.
    *ending the_remembering
  *if ((world = "held") and (price = "nadim")) #At home. The city's asleep. A djinn's holding it. It's quiet. You sleep.
    *ending compagnie_peace
  #In the street. In the crowd. With half a million people, awake, looking up.
    *ending white_night

*comment ---------------------------------------------------------------- YOU, GONE
*label you_gone
*page_break
*mood white
[b]Saturday, the twenty-seventh of February, 2027.[/b]

Nuit blanche.

You're not there.

You went up on the Saint-Jean, with the wolves, in the white fire. It was gentle. It was the gentlest thing that ever happened to you.

But they remember you. That's the thing. The ones who are left.
*if laz_ok
  Lorenzo Ferrante rings the great bell of Notre-Dame at 3:33 on Nuit blanche, once, for you. He does it every year.
*if (fleurette_fate != "gone")
  Madame Fleurette sings "Je ne regrette rien" from the top of the jukebox at Chez Normande, to an empty bar.
Aimé Bélanger lights a candle at Bélanger & Fils. He didn't taste you. He wouldn't. He says you'd have made a terrible undertaker, and he misses you every day.
*if serge_free
  Your father opens the shop at dawn. Serrurerie Lacroix & Fils. He never took the [i]& Fils[/i] down.

And somewhere, on the mountain, in the snow, there's a grey wolf that nobody can quite get close to, that sits on the stone wall of the lookout on the east side, on Nuit blanche, and looks at the city, and howls.
*ending ashes
`);
