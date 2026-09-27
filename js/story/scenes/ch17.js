NB.scene("ch17", String.raw`
*mood white
*chapter 17 La Saint-Jean [17]
*temp laz_ok true
*temp dar_ok true
*temp serge_free false
*temp nadim_out false
*temp gis_ok true
*temp ffit 0
*temp power 0
*temp can_remake false
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
*comment --- the fire: how well it's held against the Club
*if (sj_fire = "dario") or (sj_fire = "honora") or (sj_fire = "nadim")
  *set ffit 3
*elseif (sj_fire = "clarke") or (sj_fire = "agathe")
  *set ffit 2
*else
  *set ffit 1
*if honora_turned
  *set ffit +1
*if ffit >= 3
  *set fire_held true
*comment --- the song's strength: who's singing it, and who's at the bell
*set power 1
*if (sj_beside = "serge") or (sj_bell = "serge")
  *set power +1
*if (sj_bell = "lazare") or (sj_bell = "bourdon") or (sj_bell = "mathis")
  *set power +1
*if ally_angel
  *set power +1
*if lore >= 60
  *set power +1
*if (gis_ok or (rel_gisele >= 20)) and ((sj_crowd = "fleurette") or (voice != "") or (sj_beside = "rose")) and (nadim_consent or (nadim_q = "yes") or (hush_fate = "remade")) and (meme_key or (hush_fate = "remade"))
  *set can_remake true
[b]The twenty-third of June. The eve of the feast of Saint John the Baptist.[/b]

At eleven o'clock the mountain is full.

Half a million people on the slopes below the Chalet, on blankets, in the long blue twilight that never quite gets dark, with coolers and flags and kids asleep on their parents' shoulders. The stage is lit. The screens are lit. A band's playing old songs, Vigneault and Charlebois and Ginette Reno, and the whole mountain's singing along, badly, happily, in the warm dark. The smell of cut grass and beer and sunscreen and the first cigarettes.
*if world = "held"
  The sleepers don't know. They think it's a party. It is a party.
*else
  Everybody knows. That's the strangest thing. They came anyway. Half a million people who heard an angel promise fire on this night, and brought their kids, and their coolers, and their flags, and came anyway.
And in the middle of the field, on a platform of earth ringed with a low stone wall, the pyre. Logs and pallets and old Christmas trees and fence posts, piled higher than a house, black against the blue, waiting for midnight.

You're standing at the stone wall with your hand on the rough bark of a log, and you can feel it. A hum, in the wood, in the ground, in your teeth. Like standing too close to a bell that somebody's just stopped.
*if sj_beside = "lazare"
  Lazare's beside you, very straight, in Dario's old toque or his own dark curls, with his hand flat on the wall beside yours.
*elseif sj_beside = "dario"
  Dario's beside you, in his toque, in twenty-four degrees, with his arm against yours.
*elseif sj_beside = "both"
  They're on either side of you. Lazare on your left, very straight. Dario on your right, in his toque. Neither of them says anything. Both of their shoulders are against yours.
*elseif sj_beside = "serge"
  Your father's beside you, in his work shirt, with his loupe in his pocket and his hand flat on the log beside yours. Same hands.
*elseif sj_beside = "rose"
  Rose is beside you, in his shirtsleeves, with his gloves off, the light under his skin a low red glow in the blue dark, looking at the pyre with an expression of polite, intense interest, like a man at an auction.
*elseif sj_beside = "nadim"
  Nadim's beside you, in his 1967 suit, very still, with his eyes pure fire, looking at the pyre like a man looking at the edge of a cliff.
*else
  Nobody's beside you. You chose that. You stand at the wall on your own with half a million people at your back.

*page_break
*if sj_crowd = "fleurette"
  *portrait fleurette smile
  At half past eleven, every screen on the mountain goes dark.

  And then, forty metres high, on every one, a drag queen in a white gown and a white wig, under a single spotlight, on a stage that's been gone since 1977.

  "[i]Mesdames et messieurs,[/i]" says Madame Fleurette, to half a million people. "Bonsoir. You don't know me. Nobody alive does. I'd like to change that." She smiles, the lashes, the lipstick, the mole. "I'm going to sing you one song. And then I'm going to go. And while I'm singing, I want every one of you to look at the person next to you, the wolf, or the ghost, or the pretty boy with the fangs, or your mother, and not be afraid."

  She sings "Quand les hommes vivront d'amour."

  Half a million people on the side of a mountain go quiet for a woman nobody alive remembers. You watch them do it. You watch them look at each other. The little girl in the tutu from the tam-tams, sitting on Big Réjean's shoulders. A vampire in a very large hat holding hands with a man from Laval. A ghost in a mink stole and curlers, dancing slowly with nobody.

  At the end, the screens say, in pink neon script, over the whole mountain:

  [b]MADAME FLEURETTE[/b]

  [b]STANLEY STREET, 1968–1977[/b]

  [b]LAST CALL[/b]

  And she takes a bow. The biggest bow you've ever seen. And the screens go white. And she's gone.
  *set fleurette_fate "gone"
  *set crowd_safe true
  *achieve fleurette_name
  *remember fleurette On the Saint-Jean, on every screen on the mountain, she sang "Quand les hommes vivront d'amour" to half a million people, and took her bow, and went.
*elseif sj_crowd = "aime"
  At half past eleven, you see Aimé on the stage, in his good tie, with a microphone, explaining to half a million people, very calmly, in the voice he's used on four hundred grieving families, where the first-aid tents are, and that everyone's cat is fine. People laugh. People relax. You love him so much you can't breathe.
  *set crowd_safe true
*elseif sj_crowd = "clarke"
  At half past eleven, you see them: a steward on every path, in an orange vest, with a lantern. The Line, all over the mountain, keeping people calm. The Conductor at the top of the steps by the Chalet, checking his pocket watch.
  *set crowd_safe true
*elseif sj_crowd = "dario"
  At half past eleven, you see them: the pack, scattered through the crowd, in their tuques, in June, handing out more tuques. Nobody's afraid of a wolf in a tuque.
*else
  At half past eleven, overhead, you see it: a red canoe going round and round in a great slow circle over the mountain, with old women in it, waving, and a long red scarf trailing from its stern.

*page_break
*mood oxblood
At a quarter to twelve, the Club comes to the fire.

You knew they would. Men in good coats among the crowd, very still, with iron. Members of the Club you remember from the long walnut table. And among them, carried between two thralls in a black cloth like something being taken to a christening,
*if zeina_free
  a brass lamp. Empty. They don't know it's empty. They've been buying lamps all spring. They bought this one in Marseille too.
  *set sj_zeina "free"
*else
  a brass lamp. Dented. Beautiful. With something inside it that makes the ground hum, very faintly, like a sea heard through a shell.

  Zeina.
  *set sj_zeina "taken"
*if (ruari_fate = "") or (ruari_fate = "disowned")
  And at the front of them, with his hands in the pockets of his leather jacket and his bracelets bright in the firelight of the lanterns, Ruari.
They come for the pyre. They mean to put the lamp on it, at midnight, when the angel comes down in fire, and bind the djinn in the angel's own flame, and make a Hush that heaven can't object to, because heaven lit it.
*if sj_fire = "dario"
  The pack meets them at the stone wall. Twenty wolves in a ring round the pyre, in the firelight of the lanterns, in their fur, not howling, just standing, the way wolves stand when a thing is theirs.
*elseif sj_fire = "honora"
  Honora meets them at the stone wall. Alone, small, in a white summer dress from 1812, with her hands folded. "Good evening, gentlemen," she says. "You've been very tiresome. I'm going to have to tidy you."
*elseif sj_fire = "nadim"
  Nadim and Zeina meet them at the stone wall. Two djinn, in the blue dark, and the air around them so hot the grass has gone to steam, and their eyes pure fire.
*elseif sj_fire = "clarke"
  The Line meets them at the stone wall. The Conductor with his lantern, and forty people who owe him favors, and Samir from the bagel shop with his rolling pin.
*elseif sj_fire = "agathe"
  The hunters meet them at the stone wall. Agathe, and six from the Carillon who'd follow her anywhere now, with iron, protecting something for the first time in their lives.
*else
  The Bélangers meet them at the stone wall: Aimé's father and three uncles and a cousin, in black suits, grey-faced, very calm, standing round the pyre like men at a wake. It isn't much. It's what there is.

*choice
  *selectable_if (nerve >= 65) #Walk out and meet them. On your own. The key, in front of the Club, one more time.
    *set ffit +1
    *set nerve +3
    You walk out from the wall and meet them on the grass in front of the pyre, alone, the one key on the island, with half a million people watching. You don't say anything. They stop. They always stop.
  *selectable_if (hands >= 65) #The lamp. Get your hands on it. It's got a lock on the lid. Everything's got a lock.
    *set ffit +1
    *set hands +3
    It's got a lock on the lid: a little brass hasp, Marseille, 1960, you'd know that lever anywhere. You're across the grass and your hands are on it before the thralls know you've moved, and it's open in four seconds, and you're holding it under your arm, and the Club's looking at an empty black cloth.
  *if (wishes >= 1) #A wish. Unmake the moment they got the lamp out of the car.
    *set ffit +1
    *set wishes -1
    You close your hand on a curl of smoke. It's thirty seconds ago. The lamp's still in the car. It's still in the car when the car's towed, forty minutes later, by a man in a toque with a tow truck and a very satisfied expression.
  #Trust them. Whoever's at the wall. Turn your back on it and face the pyre.
    *set guarded %-5
    You turn your back on the Club and face the pyre, and trust whoever's at the wall, and it's the hardest thing you've done all year.
*if ffit >= 3
  *set fire_held true
*if fire_held
  They don't get to the pyre. The Club, in their good coats, with their iron, stand on the grass in the blue dark in front of half a million people and understand, all at once, that there's nothing they can do here, and that everyone's looking at them.
  *if sj_zeina = "taken"
    The lamp comes back to you. It's hot in your hands. You open it, and Zeina comes out, dark and gold and furious, and Nadim is there, and the two of them stand together by the wall and nobody from the Club comes within twenty metres of them again.
    *set zeina_free true
  *if (ruari_fate = "") or (ruari_fate = "disowned")
    Ruari stands on the grass with his hands in his pockets and looks at you for a long time. Then he takes his hands out of his pockets, and takes off his bracelets, one by one, all of them, pink and green and yellow, and drops them in the grass, and walks away down the mountain in the dark.
    *set ruari_fate "gone"
*else
  They get to the pyre. Not all of them, but enough. Two thralls, with the lamp, on the logs, climbing, and you can't reach them, and it's five to midnight.
  *if sj_zeina = "taken"
    *set sj_zeina "pyre"

*page_break
*mood bells
At midnight they light the pyre.

Not the Club. The city. The way they do every year: the mayor and a child with a torch, on the stage, and a countdown, half a million people shouting it, [i]dix, neuf, huit[/i], and at [i]zéro[/i] the torch goes into the base of the pyre and the fire goes up it like something climbing a ladder, and the whole mountain cheers.

And in the old town, in La Persévérance, the great bell rings.
*if sj_bell = "bourdon"
  Once. One note. Rung by an old man in a cassock, on his own, with both hands on the rope and his cane on the floor, eighty-one, dying, calling it home.

  You'll find out tomorrow that he died at the rope. That Lazare, or Agathe, or whoever went up the ladder at dawn, found him sitting on the boards under the great bell with his back against the frame and his hands in his lap and his eyes open, looking up at it. Smiling.
  *set bourdon_fate "rang"
*elseif sj_bell = "lazare"
  Rung by a man who's heard it every night since he was ten. Six notes. Down and up and held. The song, on the great bell, for the first time in its hundred and seventy years.
*elseif sj_bell = "mathis"
  Rung by a boy, eleven now, with his mother holding the rope with him, and you can almost hear him through the bronze: [i]we're sorry. All of us. We're sorry.[/i]
*elseif sj_bell = "serge"
  Rung by a locksmith with his hand flat on the bronze. Not with the rope. With his hand. Humming.
*else
  Rung by nobody. By itself. The way it rang at 3:33 every night in March.
The note comes across the city and up the mountain, huge, and the fire on the pyre leans toward it, all of it, like a flame in a draught.

And it comes down.

*page_break
*meet angel
It comes down onto the fire.

Not like a bird. Not like a man with wings. Like the note turning into light. The flames on the pyre go white, and then gold, and then a colour you don't have a word for, and they go up, forty metres, fifty, a column of fire standing on the mountain like a bell made of flame, and inside it, something with a shape that the eye won't hold. Wings, maybe. Faces, maybe. A great many eyes. Bronze.

Half a million people stop singing.

[b]MONTRÉAL.[/b]

It speaks from the fire, and from the bell in the old town, and from inside every chest on the mountain, all at once.

[b]I HAVE COME HOME ON MY FEAST, AS I SAID. AND NOW I WILL BAPTISE THIS ISLAND.[/b]

The fire goes out from the pyre. Not burning. Walking. Across the grass, a ring of white flame, spreading, slow as honey, toward the crowd. Toward the wolves in their tuques. The vampire in the very large hat. The ghosts at the edges. Aimé on the stage. Nadim and Zeina at the wall.
*if mc_wolf
  Toward you.
Wherever it touches the grass, the grass doesn't burn. It goes white. Clean. Like snow.

People start to scream.

*page_break
*if (rose_yes = "answer") and (met_rose) and (price != "rose")
  *goto rose_first
*goto the_choice

*label rose_first
*portrait rose true
Rose steps over the stone wall.

In his shirtsleeves, with his gloves off, the light under his skin blazing red and gold, he walks across the white grass toward the column of fire as if he's walking across a ballroom to ask someone to dance. The ring of flame stops where he walks. It parts round him.

He stops in front of the pyre. He looks up at the thing in the fire. He bows. The real bow, from the waist, from 1740.

"Good evening," says Rose. "I believe you're here for the damned." He spreads his bare burning hands. "I was the first. Before this island. Before the river. I've been judged by the best, a long time ago, and I'm still standing." He smiles. "Judge me first, please. I'd like you to see what you can't burn, before you start on anyone you can."

The angel looks at him. You feel it look. The whole mountain feels it.

[b]LE BEAU DANSEUR.[/b]

"At your service."

[b]YOU WERE REFUSED.[/b]

"I was," says Rose. "It's the best thing that ever happened to me."

The fire goes into him. All of it, for a moment: the whole white column bending down and pouring into the devil like water into a glass. He doesn't scream. He stands there with his arms spread and his face lifted and the fire going into him, and for one second you see what he was, before: something so beautiful it hurts, something with wings.

And then he goes out. Like a candle. With a small, surprised sound. And where he was standing there's a pair of black kid gloves on the white grass, and a smell of cloves, and a red rose.

And the fire, when it comes back up out of the ground where he was, is smaller. Slower. As if it's learned something.
*set rose_fate "gone"
*set power +1
*remember rose On the Saint-Jean, he asked the angel to judge him first, and went out like a candle, and the fire came back smaller.

*label the_choice
*page_break
The fire's coming. Slower now, or not. Across the white grass toward the damned. Toward everyone you love.

You have the song. You've had it in your hands since you were twelve.

*choice
  #Sing it the song. Its own name. To its face, on its feast. Walk up to the fire and sing.
    *goto sing
  #Stand between it and them. Walk into the ring of fire and don't move. Let it get through you first.
    *set angel_end "stood"
    *goto stand
  *if (can_remake) #Make it a covenant. The little key, the witch, a voice, and a yes. The only Hush heaven will bless. Offer it to the angel.
    *set angel_end "covenant"
    *goto covenant
  *if (wishes >= 1) #The great wish. Everything you've got left. Wish the angel's anger undone.
    *set angel_end "wished"
    *set great_wish "angel"
    *set wishes 0
    *goto wish_angel
  #Let it judge. It's an angel. It knows what's right better than you do. Step back.
    *set angel_end "judged"
    *goto judged

*comment ---------------------------------------------------------------- SING
*label sing
*page_break
You walk out across the white grass toward the fire.
*if sj_beside = "serge"
  Your father walks with you. Step for step. His hand on your shoulder.
*elseif sj_beside = "both"
  They walk with you. One on each side. Lazare's hand in yours on the left. Dario's hand in yours on the right.
*elseif sj_beside != "none"
  *if sj_beside != "rose"
    Whoever's beside you walks with you, step for step, as far as the fire lets them.
It's hot. It's so hot. But it doesn't burn you. It parts round you, the way it parted for Rose. You're mortal. You carry its name.

You stop in front of the pyre. You look up into the fire, at the thing in it that the eye won't hold.

And you sing.

[i]Quatre. Un. Quatre. Six. Deux. Trois.[/i]

*page_break
Your voice cracks on the third note. It doesn't matter.
*if sj_beside = "serge"
  Your father's voice comes in under yours on the fourth. The same key. Two Lacroix.
*if (sj_bell = "lazare") or (sj_bell = "serge") or (sj_bell = "mathis") or (sj_bell = "bourdon")
  And from the old town, from La Persévérance, the great bell answers: the same six notes, huge, over the whole island, and the fire on the mountain shakes with it.
The column of fire stops.

The ring of white flame on the grass stops.

The thing in the fire turns, all of its eyes, all at once, and looks at you.

[b]SERGE'S SON.[/b]

The whole mountain holds its breath.

[b]YOU SING MY NAME.[/b] It isn't angry. It isn't anything you have a word for. [b]AURÈLE STOLE IT. SERGE HUMMED IT. YOU SING IT.[/b] A pause, like a bell's hum between strokes. [b]WHAT DO YOU ASK, WITH MY NAME IN YOUR MOUTH?[/b]

*page_break
Three things, Gisèle said. Calm it. Bind it. Or set it free.

*choice
  #Calm it. "Listen. Just listen. Look at them. Look at who you're about to burn."
    *set song_how "calm"
    *goto calm
  *selectable_if (power >= 3) #Bind it. "Stop. By your name. Put out the fire and wait. As long as it takes."
    *set song_how "bind"
    *goto bind
  *selectable_if (power >= 2) #Free it. "Go home. By your name. Take your judgment and go. You've been heard."
    *set song_how "free"
    *goto free

*label calm
*page_break
"Listen," you say. To an angel. On a mountain. "Just listen. Look at them."

And you point. At the wolves in their tuques, with a little girl in a tutu on the biggest one's shoulders. At a vampire in a very large hat holding hands with a man from Laval. At a ghoul on the stage in his good tie. At two djinn by the wall, a brother and a sister, sixty-eight years apart and now together. At a hunter who stopped hunting. At ghosts in their best clothes, dancing with nobody.

"You said the damned," you say. "The fed-upon. The stolen. The unmade. And everyone who profited, and everyone who slept." Your voice is shaking. "That's everyone. That's the whole island. That's me. You can't baptise all of us with fire. There'd be nobody left to remember you were right."

The fire is very still.
*if power >= 2
  [b]I HAVE LISTENED FOR FIFTY-NINE YEARS,[/b] it says. [b]I WILL LISTEN A LITTLE LONGER.[/b]

  And the ring of white flame on the grass goes back. Slowly. Like a tide going out. Back across the grass, back up the pyre, back into the column of fire, and the column goes down, and down, until it's just a bonfire again. A very big one. On a mountain. On the Saint-Jean.

  But before it goes, it speaks once more. [b]THE ONES WHO CHOSE. THE ONES WHO KNEW, AND SIGNED, AND TICKED THE NAMES. THEM I WILL NOT FORGET.[/b]
  *if not(honora_turned)
    Somewhere on the grass, in a white summer dress, a small woman lifts her face to the fire with an expression of perfect, tired courtesy, and goes up like paper.
    *set honora_fate "burned"
  *if bourdon_fate != "rang"
    And in the old town, in a study under a belfry, an old man in a cardigan puts down his cup of tea and closes his eyes.
    *set bourdon_fate "judged"
  *set angel_end "calmed"
*else
  The fire listens. You feel it listen. And then, very gently, the way you'd move a child out of a doorway, it moves you aside.

  [b]I HEARD YOU,[/b] it says. [b]I AM SORRY.[/b]

  And the ring of white flame goes on across the grass.
  *set angel_end "judged"
  *goto judged
*goto after

*label bind
*page_break
"Stop," you say. "By your name. Put out the fire. And wait."

The fire stops.

All of it. The column, the ring, the flames on the pyre, the thing inside it with all its eyes. Stops, like a film paused, half a million people staring at a fire that isn't moving.

[b]YOU BIND ME,[/b] it says. There's no anger in it. Just a vast, patient, terrible attention. [b]WITH MY OWN NAME. AS AURÈLE DID.[/b]

"Not in a lock. Not in the dark. I'm not ringing anything over you. I'm asking you to wait."

[b]HOW LONG?[/b]

"Until we deserve it. Or don't. Until we've had a chance."

A long, long silence. The fire doesn't move.

[b]I WILL WAIT,[/b] says the angel. [b]A HUNDRED YEARS. A THOUSAND. ANGELS ARE VERY GOOD AT WAITING.[/b] And, softer, only to you: [b]AND WHEN I COME BACK, SERGE'S SON, I WILL REMEMBER WHO SANG.[/b]

The fire goes out. All at once. The pyre's just a pile of logs, smoking in the blue dark, and half a million people on the side of a mountain, blinking.
*set angel_end "bound"
*goto after

*label free
*page_break
"Go home," you say. "By your name. You've been heard. Everybody heard you. Take your judgment and go home."

The fire is very still.

[b]HOME,[/b] it says. As if it's a word it hasn't heard in a very long time. [b]I HAVE BEEN IN BRONZE FOR A HUNDRED AND SEVENTY YEARS. I HAVE FORGOTTEN WHERE HOME IS.[/b]

"Up," you say. "I think it's up."

And the angel laughs.

You'll never forget it. Nobody on the mountain will. A laugh like every bell on the island ringing at once, for joy, the way they rang on Easter morning when you were a boy. The fire goes up. Not out: up. The whole column lifting off the pyre like a bell lifting off its frame, higher, and higher, gold, white, a colour you don't have a word for, over the mountain, over the cross, over the city, and gone.

In the old town, in La Persévérance, Jean-Baptiste rings once more, on its own. And then it's just eleven tons of bronze. For the first time in a hundred and seventy years, there's nobody in it.
*set angel_end "freed"
*goto after

*comment ---------------------------------------------------------------- STAND
*label stand
*page_break
You don't sing. You walk out into the ring of fire and stand in it.

It's hot. It's so hot. It doesn't part round you this time; you've asked it not to. You stand in the white flame on the grass between the fire and the damned, with your arms out, and it goes into you.
*if mc_wolf
  You're one of them now. You feel it know that. It burns the wolf in you first: your teeth, your eyes, the long bones of your hands. You feel it go, the seven Easters, all of it, burned out of you like a fever.
You don't let it past.

[b]SERGE'S SON.[/b] The fire is all around you. [b]YOU ARE NOT THE ONE I CAME FOR.[/b]

"I know. They are. You'll have to go through me."

[b]WHY?[/b]

"Because I love them."

The fire stops.

*if (power >= 3) or (sj_beside != "none")
  *if sj_beside != "none"
    And then there are hands on you. Pulling you back. Out of the fire. Whoever came up the mountain beside you, whoever you chose, has walked into it after you, and they've got you by the collar and the arms, and they're pulling, and they're burning too, and they don't let go.
  The angel looks at the two of you, or the three of you, in the fire, holding on to each other.

  [b]AH,[/b] it says, very softly. [b]YES. I SEE.[/b]

  And it goes back. The ring, the column, all of it, back into the pyre, and down, until it's just a bonfire on a mountain. And the last thing it says, as it goes, is: [b]THAT, I HAD FORGOTTEN.[/b]
  *set angel_end "stood"
  *set mc_fate "burned"
  *if mc_wolf
    *set mc_wolf false
*else
  The angel looks at you for a long time, standing alone in the fire with your arms out.

  [b]YES,[/b] it says. [b]I SEE.[/b]

  And it goes back. But not before it's finished with you. When the pyre's just a bonfire again, you're lying on the white grass in front of it, and you can't feel your hands, and there are people running toward you across the grass, and the sky is very blue, and very far away.
  *set angel_end "stood"
  *set mc_fate "burned"
  *if mc_wolf
    *set mc_wolf false
*goto after

*comment ---------------------------------------------------------------- COVENANT
*label covenant
*page_break
"Wait," you say. To an angel, on a mountain. "Before you judge us. I want to offer you something."
*if hush_fate = "remade"
  You don't need the key. It's in the lock at the fort, where Mémé wanted it, under the cross-in-a-circle. The lullaby's already a question. You just need heaven to hear the answer.
*else
  You take out the little key on its chain. Mémé's key. Warm from your skin.
*if gis_ok
  Beside you at the wall, Gisèle Pépin lights a du Maurier, eighty-six, and holds out her hands over the white grass, and starts to weave.
*else
  At the laundromat in Pointe-Saint-Charles, three kilometres away, every dryer stops, and four old women hold out their hands over the warm glass, and one of them has Gisèle's cardigan round her shoulders.
*if nadim_out
  Nadim walks out from the wall. And Zeina, if she's free, with him.
"A lullaby," you say, "that the one holding it agreed to hold. That anyone can choose to sing, or not. A Hush that asks." You look up into the fire. "The only kind that doesn't rot. Will you bless it?"

[b]WHO HOLDS IT?[/b]

Nadim steps forward. "I do," he says. "By choice. On terms." He looks up at the fire, a djinn looking at an angel, and doesn't flinch. "I was bought. I was bound. I held your island asleep in the dark for fifty-nine years and nobody asked me once." His voice is steady. "Somebody finally asked. And I said yes."

[b]AND WHO SINGS IT?[/b]
*if sj_crowd = "fleurette"
  You look at the screens. They're white. She's gone. But they're still humming, faintly, the last note of her song.
*elseif voice = "rose"
  You look at the place where Rose went out. At the black gloves on the grass.
You open your mouth.

"I do," you say. "And anyone who wants to. It's a family song. The family's got bigger."

And you sing it. Six notes, down and up and held. And behind you, half a million people who've heard it on the bells all spring, at every funeral, on every Sunday at Saint-Jude, at the tam-tams, in your van at the lights, start, very quietly, to sing it too.

*page_break
The fire listens to half a million people singing its name.

[b]THIS,[/b] it says, at last, [b]I CAN BLESS.[/b]

And the fire comes down off the pyre. Not burning. Not judging. Gold, and slow, across the white grass, over the crowd, over the wolves and the ghosts and the vampires and the sleepers and the ghoul on the stage, soft as snow, and where it touches, it doesn't burn. It warms.

A baptism. Not with fire. With something that looks like fire, and isn't.

In the old town, Jean-Baptiste rings once, for joy.
*set angel_end "covenant"
*set world "remade"
*set price "none"
*set hush_fate "remade"
*achieve thaw
*goto after

*comment ---------------------------------------------------------------- WISH
*label wish_angel
*page_break
You close your hand round every curl of smoke you've got left.

"Nadim," you say. "I wish it wasn't angry."
The djinn at the wall goes very still.

"That's not a moment," he says. "That's fifty-nine years. That's a hundred and seventy." And then, very quietly: "But I can try."

The fire flares. Nadim's fire, meeting the angel's, gold against white, in the middle of the grass, and for one second the whole mountain's lit like noon. And the thing in the pyre turns and looks at the djinn who's trying to unmake its anger.

[b]YOU,[/b] it says. [b]THE ONE THEY BOUGHT.[/b]

"Me," says Nadim.

[b]YOU WOULD UNMAKE MY ANGER. FOR THEM.[/b]

"For him," says Nadim. He looks at you. "He asked."

The angel is quiet for a long time. And when the fire comes back, it's smaller. Quieter. Not gone. But tired, the way a man's tired after a long cry.

[b]IT IS NOT UNMADE,[/b] it says. [b]BUT IT IS SPENT.[/b] And it goes back into the pyre, and down, until it's a bonfire on a mountain.
*set angel_end "spent"
*goto after

*comment ---------------------------------------------------------------- JUDGED
*label judged
*page_break
*mood oxblood
You step back.

It's an angel. It knows. It's been listening for fifty-nine years to everything that was done on this island, in the dark, while it was drowned out. Who are you to say it's wrong?

The ring of white flame goes out across the grass.

It isn't fire, exactly. It doesn't burn the way fire burns. It touches, and whatever it touches goes white, and clean, and still. The wolves in their tuques. The vampire in the very large hat. The ghosts in their best clothes, who go out one after another like candles in a draught, gladly, some of them, waving.
*if dar_ok
  Dario, at the wall, in his toque, who looks at you across the white grass as it reaches him, and doesn't run, and says something you can't hear, and goes white, and still.
  *set dario_fate "ashes"
*if nadim_out
  Nadim, and Zeina, holding hands, going up together like two sparks.
  *set nadim_fate "ashes"
*if (not(aime_quit))
  Aimé, on the stage, in his good tie.
  *set aime_fate "ashes"
*if mc_wolf
  And you. It reaches you last, because you stepped back. And it's very gentle. It's the gentlest thing that's ever happened to you.
  *set mc_fate "ashes"
In the morning, the mountain is white. Not snow. Ash.

The sleepers remember a fire on the Saint-Jean that got out of control. The newspapers say a miracle nobody died. Half a million people went home. The ones who didn't aren't in the newspapers. They were never anybody the newspapers knew.
*set angel_end "judged"
*goto after

*comment ---------------------------------------------------------------- AFTER
*label after
*page_break
*mood snow
Dawn on the twenty-fourth of June. The feast of Saint John the Baptist.

The sun comes up at five, over the east end, over the refinery and the river, red, and then gold. The pyre on the mountain's a ring of smoking ash. Half a million people are asleep on the grass on blankets, or walking home down the paths in the early light, carrying their kids, their coolers, their flags.
*if angel_end = "judged"
  And some of them aren't walking home.
*else
  They're all walking home. Every one.
*if mc_fate = "burned"
  You're lying on a blanket on the grass with your hands wrapped in gauze from the first-aid tent, and your whole body feels like the day after a sunburn, and somebody's holding your head in their lap. You don't have to look to know who.
*if mc_wolf
  You're a wolf, still. You can feel it under your skin, like a second heartbeat. The fire didn't take it. It could have. It didn't.
*if bourdon_fate = "rang"
  In the old town, in the belfry of La Persévérance, they've found an old man sitting under the great bell with his back against the frame, smiling.
*if sj_zeina = "pyre"
  *if angel_end != "judged"
    And on the pyre, in the ash, a brass lamp, blackened, split open. Empty. Zeina is standing beside it, in the smoke, looking at her hands. The angel's fire went through the lamp and out the other side, and took the Club's binding with it, and left her.
    *set zeina_free true

*page_break
You sit on the grass on the mountain in the sunrise on the feast of the Baptist, and look at the city below.

Four months. Nine nights and four months. In February you were a locksmith with a van and a sick grandmother and a father who walked out.

You're still a locksmith. You've still got the van.

Everything else is different.

*page_break Epilogue
*goto_scene epilogue
`);
