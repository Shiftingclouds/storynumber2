NB.scene("night9", String.raw`
*mood white
*chapter 9 Nuit Blanche [9]
*temp laz_self true
*temp dfit 0
*temp cfit 0
*temp bfit 0
*if lazare_rehushed and (not(lazare_restored))
  *set laz_self false
*comment --- how well each role fits the person you gave it to (0 to 3), and whether they're loyal enough to do it
*if role_door = "dario"
  *set dfit 3
  *if manon_cut
    *set dfit 2
*elseif role_door = "honora"
  *set dfit 3
*elseif (role_door = "clarke") or (role_door = "agathe")
  *set dfit 2
*else
  *set dfit 1
*if war_over
  *set dfit +1
*if honora_turned or (honora_alliance = "exposed") or (accused = "honora") or (accused = "compagnie")
  *set dfit +1
*if (role_door = "dario") and (rel_dario < 30)
  *set dfit -1
*if (role_crowd = "fleurette") or (role_crowd = "clarke")
  *set cfit 3
*elseif (role_crowd = "aime") or (role_crowd = "honora") or (role_crowd = "gisele") or (role_crowd = "dario")
  *set cfit 2
*if fleurette_plan
  *set cfit +1
*if role_bells = "lazare"
  *set bfit 3
  *if not(laz_self)
    *set bfit 2
*elseif role_bells = "agathe"
  *set bfit 3
*elseif (role_bells = "serge") or (role_bells = "mathis")
  *set bfit 2
*if war_over
  *set bfit +1
Saturday, the twenty-eighth of February. Nuit blanche.

The city wakes up at dusk.

You feel it happen from the window of
*if last_night = "both"
  your apartment in Verdun, with the broken bed behind you and two men arguing in your kitchen about how to make coffee:
*elseif last_night = "dario"
  the tow truck, on the Main, with Dario's hand on your knee:
*elseif last_night = "lazare"
  your apartment in Verdun, with Lazare behind you in your Serrurerie Lacroix T-shirt, reading your mother's recipe cards:
*else
  the van, on Wellington, with the engine running:
the streetlights come on at five, and the sky goes from grey to deep blue to black, and all over the island, like somebody breathing in, people start coming out of their houses. Families with kids in snowsuits and headlamps. Students in groups of twenty. Old couples arm in arm. Everyone bundled to the eyes, everyone going the same way: downtown, to the lights.

By eight o'clock there are half a million people in the streets of Montréal, and none of them know that at 3:33 in the morning, they're going to wake up.

*page_break
*art 9
The Quartier des spectacles at ten o'clock is the brightest place you've ever stood.

Every building's a screen. Place des Arts is running a light show up its whole glass front, blue and gold and pink. The UQAM tower has a film on it forty metres high: a woman's face, eyes closing, eyes opening. There are fire pits in the square with people standing round them in a ring, and a soup tent, and a man on stilts, and a brass band from somewhere playing something old and happy that makes you think, for no reason, of a djinn listening through the stone to a band from Czechoslovakia in 1967.
*if role_crowd = "fleurette"
  And the ghosts are out.

  Nobody else can see them yet. You can. Every ghost on the island, it looks like, in their best: a man in a zoot suit, a girl in a flapper dress, a nun, three sailors from 1944, a woman in a housecoat with her curlers in and a mink stole over the top of it. They're everywhere in the crowd, standing beside the sleepers, very close, calm, watchful, like ushers at a wedding, waiting. On top of a fire hydrant on the corner of Sainte-Catherine, directing them all with a feather boa, is a drag queen in a teal gown.
*elseif role_crowd = "clarke"
  And the Line is out. Nobody else would notice. You do: a steward on every corner, in an orange vest, calm, watchful. A lutin on a lamp post. The woman with antlers from the market, in a very large hat. The vampire from the O-négatif bar, handing out hot chocolate. And at the corner of Saint-Laurent and Sainte-Catherine, in his porter's cap, with a lantern, checking his pocket watch, the Conductor.
*elseif role_crowd = "aime"
  And there's Aimé, in a fluorescent vest over his black suit that says [b]BÉNÉVOLE[/b], volunteer, standing on a milk crate by the soup tent, telling people calmly where the toilets are. He's very good at it. People trust an undertaker.
*elseif role_crowd = "honora"
  And there's the Club. Nobody else would know. You do: a black car on every corner with its engine running and its windows dark, and men in good coats among the crowd, very still, and on the balcony of the Hôtel de Ville, very small, in fur, looking down at half a million people with the fond and faintly hungry attention of a woman watching a garden grow, Honora Strachan.
*elseif role_crowd = "gisele"
  And overhead, very high, so small you'd take it for a kite, a red canoe goes round and round in a great slow circle over the Quartier des spectacles, with five old women in it and a long red scarf trailing from its stern. Monique's scarf. For luck, and so they can find their way home.
*elseif role_crowd = "dario"
  And there's the pack. Nobody else would know. You do: Luc in his Céline hoodie handing out tuques. Kim and Sandrine at the first-aid tent. Johnny Tabarnak doing a set on the stage outside the Monument-National in his pencil moustache. Big Réjean directing traffic in an orange vest he definitely stole.

*page_break
*if dentist = "date"
  At the soup tent, a man in a very good coat and a very bad wool hat is holding two paper cups of soup and trying to supervise a boy of eight and a girl of eleven who have both, clearly, had too much hot chocolate.

  "Philippe."

  The dentist turns round. His whole face lights up. "You came! These are my sister's. Élodie and Gabriel. Say hi, guys. This is the locksmith. The one from..."

  "The socks!" shrieks Élodie, who's eleven. "Uncle Philippe told us! You rescued him in his [i]socks![/i]"

  Philippe goes scarlet. You laugh. It's the first time you've laughed all day, and it cracks something in your chest, and you're so grateful to him for it you could kiss him, and maybe, a week ago, you would have.

  "Stay near the soup tent tonight," you tell him. "Okay? Whatever happens at three thirty. Keep them near the tent. Near the fire."

  He looks at you, puzzled, and then, slowly, less puzzled. "Something's going to happen," he says. "Isn't it. Like the wolf on Saint-Laurent."

  "Something good, I hope."

  He looks at you for a long moment. "Okay," he says. "The tent. I'll keep them by the tent."
  *set crowd_safe true
*elseif dentist != ""
  At the soup tent, a man in a very good coat is holding two paper cups of soup: Philippe, the dentist. He waves at you across the crowd with a cup, and spills it, and laughs. You wave back.
*if called = "marc"
  *text marc I'm here. By the big screen on UQAM. Where are you?
  *text marc I don't know why I'm shaking. I think I dreamt about you last night.

*page_break
Near midnight, on the corner of Saint-Urbain, you see a hunter.

A young one. Black coat, a bell in his hand, standing at the edge of the crowd under a streetlight, watching a group of teenagers taking pictures of the UQAM screen. His face is white. His hand on the bell's shaking.
*if war_over
  He sees you, and knows you, and his face does something complicated. "The Bourdon said to stand down," he says, before you can say anything. "He said it was over. I don't..." He looks at the crowd. "I don't know what else to do with my hands."
*else
  It's Brother Anselme. He sees you. He knows you. His hand tightens on the bell.

*choice
  *selectable_if (charm >= 55) #Go and stand next to him. Talk to him like a person. "Hey. Want some soup?"
    *set crowd_safe true
    *set charm +3
    You go and stand next to him under the streetlight, shoulder to shoulder, looking at the screen. "Want some soup?" you say. "It's free. It's pea. It's terrible."

    He stares at you. Then, slowly, his hand on the bell relaxes. "I've never been to Nuit blanche," he says. "I've been in the towers since I was twelve." He looks at the crowd. "They look so happy."

    "They are. Come on. Soup."

    He comes. He puts the bell in his pocket. You leave him at the soup tent with a paper cup in both hands, and a woman in a mink stole and curlers standing beside him, very close, that only you can see, humming.
  *selectable_if (nerve >= 55) #Walk straight up to him and take the bell out of his hand.
    *set crowd_safe true
    *set nerve +3
    You walk straight up to him through the crowd and take the bell out of his hand before he's decided whether to ring it. Just take it. Like taking car keys off a drunk friend.

    He looks at his empty hand. Then at you.

    "Go home, Anselme," you say. "Or have some soup. But not this. Not tonight."

    He looks at you for a long time. Then he goes. Toward the soup.
  #Leave him. You've got a fort to get to.
    *set guarded %+5
    You leave him under his streetlight with his bell and his white face. You've got a fort to get to. You hope, going down into the métro, that somebody else notices him.
*if cfit >= 3
  *set crowd_safe true

*page_break
The métro runs all night on Nuit blanche. It always has. The yellow line, under the river, from Berri to the islands: the only line that goes under the Saint Lawrence, built for Expo in 1967, the same summer they chained a djinn under Île Sainte-Hélène a few hundred metres from the station.

You ride it at one in the morning, in a car full of students going to the fire-pit party on the island, with
*if role_beside = "lazare"
  Lazare beside you, very straight, holding the pole, looking at the students' faces as if memorising them.
*elseif role_beside = "dario"
  Dario beside you, in his toque, eating a poutine out of a styrofoam box and offering it to everyone in the car.
*elseif role_beside = "serge"
  your father beside you, in your winter coat, with his loupe in his pocket, looking at the tunnel walls going past like a man looking at the walls of his own house.
*elseif role_beside = "gisele"
  Gisèle Pépin beside you, eighty-six, in a purple snowsuit and an aviator's cap, smoking under the NO SMOKING sign, while a car full of students stares at her in absolute awe.
*elseif role_beside = "rose"
  Rose beside you, in black, with his cane, not holding the pole, not needing to, perfectly balanced, as the students round you drift closer to him without knowing why.
*else
  nobody beside you. Just students, laughing, and the tunnel walls going past, and your grandfather's keys in your pocket.
*if keyman_safe and (role_beside != "serge")
  Your father is two seats down, in your winter coat, watching you. He's coming as far as the door. He wouldn't be talked out of it.

Jean-Drapeau station comes up out of the dark like something from a dream: the big curved concrete vault of it, from Expo, from 1967, all Space Age hope, and then the escalators, and then the cold, and the island.

*page_break
Île Sainte-Hélène at two in the morning on Nuit blanche. The fire-pit party's by the water, on the south side, all music and orange light and people dancing in snowsuits. The rest of the island's dark: trees, snow, the black shapes of the old Expo pavilions, the geodesic dome of the Biosphère glowing faintly blue through the branches like a ghost of the future.

And the fort. The old stone walls, the powder house behind them, where it all started. Nine nights ago. [i]LIGNE 3.[/i]

There are cars in the lot by the fort. Black ones. A lot of them. With their engines running.
*if (not(war_over))
  And along the stone wall, in a line in the snow, in long dark coats, with bells: the Carillon. Twenty of them. More.
*if honora_turned
  Honora's cars, you realise. But she's with you. So the people in them aren't.

*page_break
*if role_door = "dario"
  *portrait dario wolf
  The Sept-Ans are at the door.

  All of them. Twenty wolves in the snow in front of the powder house door, in a half-circle, some in fur and some in parkas, and Dario in the middle in his toque, with his arms folded. When he sees you coming up the path he grins, far too many teeth.

  "Door's held," he says. "Nobody we don't like."
*elseif role_door = "honora"
  *portrait honora smirk
  Honora Strachan is standing at the powder house door, alone, in a fur coat, with her small gloved hands folded, looking at the black cars in the lot with an expression of mild distaste. "My own members," she says as you come up. "Can you imagine. After everything I've done for them." She smiles at you. "Go on, Mr. Lacroix. I'll hold your door."
*elseif role_door = "clarke"
  The Missing Line is at the door. The Conductor, in his cap, with his lantern. The woman with antlers. The O-négatif barman. Samir from the bagel shop, with a rolling pin. A dozen more, every one of them owing the Conductor a favor. "The Line has never taken a side," the Conductor says. "Mind the gap, Monsieur Lacroix."
*elseif role_door = "agathe"
  Agathe is at the door, alone, in her black coat, with her bell in her hand, facing the line of hunters along the wall. They're all looking at her. None of them are moving. "Go on," she says, without turning. "They won't come past me. Not yet."
*elseif role_door = "serge"
  Your father is at the door. He's standing in front of it with his hand flat on the stone beside the frame, the way you'd put your hand on a horse, and he's humming. "I know every stone," he says, when you come up. "I kept it for fifteen years."
*else
  Aimé is at the door, in his black suit and his fluorescent vest, alone, with his hands shaking and his chin up. "I'm holding it," he says, when you come up the path. "I'm holding the door." His voice cracks. "Please hurry."

*page_break
They come at half past two.

The car doors open in the lot, all together, and the Club gets out: men in good coats with the empty eyes of thralls, a dozen, twenty, and among them, pale and beautiful, members you remember from the long walnut table. A Scottish fur baron. A woman in beads.
*if not(war_over)
  And the Carillon, coming off the wall, bells up, slow, in a line.
*if (ruari_fate != "confessed") and (ruari_fate != "fled")
  And at the front of the Club, with his hands in the pockets of his leather jacket and his bracelets bright in the headlights, Ruari.

You can help hold the door, or you can go through it. You haven't got time for both.

*choice
  *selectable_if (hands >= 55) #Lock the gate behind you. The old iron gate in the fort wall. You're a locksmith. Make them come the long way.
    *set dfit +1
    *set hands +3
    There's an iron gate in the fort's outer wall that the path goes through, old, from 1820, with a hasp and staple and no lock on it. You've got a padlock in your bag. You've always got a padlock in your bag. You put it through the hasp and snap it shut and snap the key off in it, and then you do something to the hinges with a screwdriver that your grandfather taught you when you were nine, and the gate is suddenly a wall.

    It won't hold forever. It'll make them go round. Round is four minutes through the snow. Four minutes is a lot.
  *selectable_if (nerve >= 55) #Stand at the door beside them for one minute. Let the Club see the key's not afraid of them.
    *set dfit +1
    *set nerve +3
    You walk down the path and stand at the powder house door beside whoever's holding it, and turn round, and face them: the thralls, the members, the bells. You don't say anything. You just stand there, the one key on the island, in your good jacket, in the snow.

    They stop. For a moment, they all stop, forty metres away, and look at you.

    It's enough. It's a minute. A minute is a lot.
  *if (wishes >= 1) #Spend a wish. Unmake the moment the first of them gets out of their car.
    *set dfit +1
    *set wishes -1
    *set wishes_used +1
    You close your hand on a curl of smoke in your pocket, and ask.

    The car doors that just opened are shut. The engines are running. The lot is quiet. It's thirty seconds ago, and they haven't moved yet, and they don't know why they haven't moved, and they sit in their cars for thirty seconds more, frowning, wondering what they forgot.

    Thirty seconds is a lot.
  #Go. Straight through the door. Trust them to hold it.
    *set rel_dario +3
    *set guarded %-5
    You don't stop. You trust them. You go straight past them to the door without looking back, and you hear it start behind you: the snarling, the bells, somebody shouting in three languages.

*if dfit >= 3
  *set door_held true
*if cfit >= 2
  *set crowd_safe true
*if bfit >= 2
  *set bells_stopped true
*goto_scene night9b
`);
