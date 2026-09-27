NB.scene("night2b", String.raw`
*page_break
The Conductor's car is the first car of the train.

It's been gutted and rebuilt as an office, sixty years ago, by someone with taste and a grudge against plastic. Brass lamps with green glass shades. A desk that came out of a Pullman sleeping car, mahogany, with a little railing round the top so nothing slides off on the curves. Framed photographs on the curved walls: rows of men in white jackets and peaked caps, standing proud in front of great black trains, [i]Montréal, 1917. Montréal, 1928[/i]. The porters. The only job a Black man could get on the railways, for fifty years, and the best-dressed men in any station in the country.

Behind the desk sits one of them.

He's very tall even sitting down, and very old in a way that doesn't show in his skin, which is deep brown and barely lined, but in the way he holds still. Silver hair cut close. A grey moustache, trimmed to the millimetre. A navy porter's uniform with brass buttons polished to mirrors, and on his head, square, the cap. There's a brass badge on it: a train, and under it one word, [b]CONDUCTOR[/b].

*meet clarke
"Mr. Lacroix," he says, rising, and holds out a hand. The accent is Barbados under a century of Montréal, every word set down carefully like good china. "Everett Clarke. I knew your grandfather. A fine craftsman and an honest man, which is a rare combination in any century." His grip is dry and warm. "Please. Sit."

You don't sit, because the corner of the car behind him is on fire.

*page_break
Not on fire. [i]Smouldering.[/i] A shape of smoke and banked coals is sitting in a leather armchair by the window as if it's been there for some time, and two points of amber light turn to you as you come in.

"Creditor," says Nadim. He sounds exhausted. He looks worse than he did at your window: thinner, dimmer, the coals under the smoke more black than red. "You found the Line."

"You look terrible."

"I'm aware." The lights move to the desk. "I came to buy back something of mine, and Mr. Clarke is being very courteous about not selling it to me."

On the desk, between the Conductor's folded hands, sits a box.

It's iron, black, the size of a shoebox, with bevelled edges and four little lion's-paw feet. There's no keyhole. There's a row of six small brass studs set into the front, like a song lock's buttons in miniature. And stamped into the lid, worn by sixty-eight years of fingers, is a cross inside a circle.

[b]A.L. 1958.[/b]

*page_break
"In 1958," says the Conductor, "I sold a djinn."

He says it plainly, the way a man says a thing he's said to himself every night for a long time.

"I bought him from a dealer in antiquities who'd bought him in Beirut from a man who'd won him at cards. The dealer didn't know what he had. I did. I paid four favors for him and sold him the same year to three people who wanted something to burn, for a great deal more." He lays a long hand on the box. "A djinn's true name is his leash. His name was engraved on a brass plate the size of a playing card, and whoever holds the plate holds the djinn. When I sold him, I kept the plate. As security."

"And then?"

"And then I found I couldn't sleep." He looks at the smoke in the armchair, and doesn't look away. "So I went to your grandfather, who was the best locksmith on the island, and I asked him to build me a box that I could never open. So I could never sell the plate again, however much I was offered, and I was offered a great deal." A thin smile. "He did very good work. I've tried to open it every Easter since. Out of curiosity. And vanity."

"He wants it back," you say, nodding at Nadim.

"He does. And I'd like, in some fashion, to give it to him. But I'm a warlock, Mr. Lacroix: I cheated a demon once, on a train, and I've kept my soul these hundred and fifteen years by never, ever giving anything away for nothing." He opens his hands. "And your djinn has nothing to pay with. His wishes all belong to you."

"So open it yourself," says Nadim, "and sell it to me on credit."

"I can't open it," says the Conductor, gently. "Only a Lacroix can." He turns his old calm eyes on you. "Which brings us to you. Open this box for me, Mr. Lacroix, and I'll owe you a favor on the Line, and a favor from me is worth more than most men's houses."

*page_break
You look at the box. You look at the smoke in the chair, flickering, trying to look as if it doesn't care.

Six brass studs. A song lock. And four hours ago, in a care home on Bannantyne, your grandmother hummed you six notes and called them Aurèle's song. You don't know how notes turn into buttons. Your fingers seem to.

*choice
  #Open it, and hand the plate to the Conductor, as he asked. A deal's a deal on the Line.
    *set plate_how "clarke"
    *set favor_clarke true
    *set rel_clarke +15
    *set rel_nadim -15
    *set guarded %+5
    *node n2_plate clarke
    Four, one, four, six, two, three. Your fingers find it the way water finds a crack. The lid lifts.

    Inside, on a bed of green baize, is a plate of brass the size of a playing card, engraved edge to edge with the same flowing script as the bands in the vault. It's warm. You lift it out and put it in the Conductor's long hand.

    He closes his fingers on it and shuts his eyes, and for a moment he looks every one of his hundred and forty-odd years.

    In the armchair, the smoke goes very still, and very dim, and says nothing at all.
    *remember nadim You put his name in the Conductor's hand.
  *selectable_if (hands >= 40) #Open it, and palm the plate into Nadim's hand before the Conductor can blink.
    *set plate_how "stole"
    *set plate_got true
    *set rel_nadim +15
    *set rel_clarke -20
    *set reckless %+10
    *set hands +3
    *node n2_plate stole
    Four, one, four, six, two, three. The lid lifts. You don't hand the Conductor anything. You tip the box, catch the plate as it slides out, and in the same movement, the way you'd pass a key to a customer behind a counter, you put it into the smoke.

    The smoke closes on it. The coals flare so bright the green lamps go pale.

    The Conductor doesn't move. He looks at you for a long moment with an expression you can't read at all.

    "That," he says softly, "was very rude. And very well done." He stands, and buttons his jacket. "I'll remember it, Mr. Lacroix. I remember everything. It's my only hobby."
    *remember clarke You opened his box and handed the plate to Nadim instead.
  *selectable_if (charm >= 35) #"My fee for opening it is simple. The plate goes to its owner."
    *set plate_how "bargained"
    *set plate_got true
    *set clarke_moved true
    *set rel_clarke +10
    *set rel_nadim +15
    *set charm +3
    *node n2_plate bargained
    The Conductor gives you a long look. Then he laughs, low and genuine, and shakes his head.

    "You'd make a fine porter," he says. "You'd make a finer Conductor." He spreads his hands. "Very well. A fee freely named and freely agreed. That isn't giving anything away. It's business." He looks at Nadim, and his voice changes. "It's been business for sixty-eight years. Let's call it settled."

    You open the box. The plate is brass the size of a playing card, engraved edge to edge. You put it into the smoke. The coals flare so bright the green lamps go pale.
    *remember clarke You made him give back what he sold, and let him call it business.
  *selectable_if (wits >= 35) #Tell him a Lacroix lock only opens with its owner's hand on the lid. The djinn's hand.
    *set plate_how "conned"
    *set plate_got true
    *set rel_nadim +10
    *set rel_clarke -5
    *set wits +2
    *node n2_plate conned
    "It's keyed to the owner," you say, straight-faced, "as well as the song. Aurèle always did it that way with anything precious. Somebody has to hold the lid while I play it." You nod at the smoke. "Him. It's his name."

    The Conductor narrows his eyes. He knows locks; he doesn't know Aurèle's. After a second he gestures, [i]go ahead[/i].

    Nadim's smoke settles over the box like a hand. You play the six notes. The lid lifts, and the plate is already in the smoke before the Conductor has finished leaning forward to see.

    He sits back. "Aurèle never did any such thing," he says mildly. "Did he."

    "No, sir."

    "Hm," says the Conductor, and you'd swear he's trying not to smile.
  *selectable_if (favor_aime) #Spend Aimé's favor. "Aimé Bélanger owes me one. I'm buying the plate with it."
    *set plate_how "favor"
    *set plate_got true
    *set favor_aime false
    *set rel_nadim +15
    *set rel_aime +5
    *set rel_clarke +5
    *node n2_plate favor
    "A Bélanger favor," says the Conductor, with real respect. "For a sleeper's first night on the Line, that's a very good currency." He inclines his head. "Accepted."

    You open the box. The plate is brass the size of a playing card, engraved edge to edge. You put it into the smoke. Somewhere down the platform, you imagine Aimé feeling his favor go, like a coin leaving a pocket.
  #"It's not mine to open." Keep out of it.
    *set plate_how "lost"
    *set rel_nadim -10
    *set rel_clarke -5
    *set guarded %+10
    *node n2_plate lost
    "It isn't my box," you say, "and it isn't my name. I've opened enough doors this week I shouldn't have."

    The Conductor inclines his head, as if that's a perfectly respectable answer, and puts the box in a drawer, and locks the drawer, with an ordinary key.

    In the armchair, the smoke says nothing. It doesn't need to.

*page_break
*if plate_got
  *achieve name_plate
  Outside the car, on the platform, in the noise, the smoke pulls itself together into a man.

  It takes longer than it did in the vault. He comes back in pieces: a hand, a shoulder, the collar of the charcoal robe with its gold thread like embers, his face last. He's holding the plate against his chest with both hands, the way you'd hold a letter from someone who died.

  "Sixty-eight years," Nadim says. "I haven't held it in sixty-eight years. I'd forgotten how heavy it is." He turns it over. The script flows edge to edge; the brass is warm. "My name. My whole name. Do you know what it is to have somebody else carry your name around in a drawer?"

  *choice
    #"No. But I know what it is to have my father's name carried by somebody else's voice on the phone."
      *set rel_nadim +10
      *set guarded %-5
      He looks at you then, properly. "Yes," he says after a moment. "I suppose you do."
    #"Congratulations. Put it somewhere safe."
      *set rel_nadim +5
      He laughs, the struck-match laugh. "Where? I have no pockets, locksmith. I'm made of fire." He tucks it into the fold of his robe anyway, over where a heart would be.
    *selectable_if (rel_nadim >= 25) #Say nothing. Just wait. If he wants to show you, he will.
      *set rel_nadim +10
      *set des_nadim +10
      *set know_true_name true
      You wait. The noise of the market goes on around you. After a long moment, without looking at you, he turns the plate so you can see it.

      You can't read the script. But he reads it to you, under his breath, and the name is long and old and has the sound of wind in it, and you understand without being told that he has just given you the most dangerous thing he owns.

      "Don't say it out loud," he says. "Not unless you have to. Not unless it's the end of the world."

      "How will I know?"

      "Oh," says Nadim, "you'll know."
      *remember nadim He told you his true name, on a railway platform, under the city.
*else
  Outside the car, on the platform, the smoke pulls itself together into a man, and it takes a long time, and he doesn't look at you while it's happening.

  "You were right," he says finally, "not to open another man's box. It was the correct thing." A long pause. "I'm tired of correct things."

*page_break
"Now," says Nadim. "I owe you. And I've been putting off paying, because I'm weak, and because paying is complicated. But the law is the law."

He holds out his hand, palm up. A single coal sits in it, red and black, breathing.

"I can't do very much yet. But I can do this. If you ever wish you'd chosen differently, say so. I'll take back the moment: the last choice you made, and everything that came of it, as if it never happened. Once." The coal pulses. "When I'm stronger, I'll be able to do it again. Three times at most, before a debt like mine is paid. I won't be able to refuse you. That's the part I hate."

"And if I never use it?"

Something flickers in his face that you don't understand yet. "Then you'll have something very valuable, when the time comes," he says. "Wishes are worth more at the end than at the beginning. Everyone learns that too late."

He tips his hand. The coal rolls into yours. It doesn't burn. It sinks into your palm like a drop of warm water into sand, and is gone, and you feel it there, in the lines of your hand, like a held breath.
*codex djinn
*codex wishes
*set wish_unlocked true
*if wishes < 1
  *set wishes 1
[b]You have a wish.[/b] [i]When you'd rather you'd chosen otherwise, a wish can unmake your last choice. Look for the curl of smoke under your choices.[/i]

*if rel_nadim >= 20
  "Your father," Nadim adds, as if it's nothing, already turning away. "A Lacroix came to my door, you know. Not your grandfather. Somebody younger. Every week, for years. He talked to me through the steel." His eyes find yours, briefly. "Another time. I'm too tired to tell it properly, and it deserves to be told properly."

He goes up as smoke, out along the ceiling, following the strings of bulbs toward the stairs, and is gone.

*page_break
At the far end of the platform, past the last stall, where the lanterns give out and the tunnel mouth breathes cold air, an old man is cutting keys.

He's got a machine you've only ever seen in museums: a treadle key-cutter, cast iron, painted green, with gold pinstripes worn to nothing, driven by his foot like a sewing machine. The blank goes in the vice. The treadle goes up and down. A file-wheel spins, and a shower of brass dust falls into a tray. There's a hand-painted sign on a board propped against the tunnel wall: [b]CLÉS.[/b] Keys. Nothing else.

He's sixty, maybe. Thin, stooped, a grey stubble, grey hair gone thin on top and wild everywhere else. A work shirt, denim, the sleeves rolled. A leather apron, black with brass dust. A jeweller's loupe on an elastic band pushed up on his forehead like a third eye.

*meet keyman
He's humming while he works.

Six notes. Down, and up, and one held at the end, like a question.

*clue c_six_notes
*if c_meme_hum
  The floor of the platform goes soft under you.

  It's Mémé's song. Aurèle's song. The one the Lacroix men hummed doing the dishes. You heard it four hours ago in a care home on Bannantyne, and now you're hearing it from a stranger on a railway platform that doesn't exist.

  *choice
    #"Where did you learn that song?"
      *set keyman_asked true
      *set wits +1
      The old man looks up. His eyes are blue-grey, pale, very kind, and completely empty of recognition. "The song?" he says. "I don't know. I've always known it." He frowns a little, as if you've asked him where he learned to breathe. "Do you know it too?"

      "My grandmother sings it."

      Something moves behind his face, very deep down, like a fish under ice. Then it's gone. "Then she has good taste," he says, and goes back to his treadle.
    *if (mem_keyman) #✦ "Papa?"
      *achieve deja_vu
      *set keyman_asked true
      *set rel_keyman +10
      *clue c_flinch
      The treadle stops.

      The old man stares at you. His hands start to shake: badly, so badly the key in the vice rattles. "I'm sorry," he says, "I'm sorry, I don't... I don't know you. Do I know you?" He presses the heels of his hands into his eyes. "I'm sorry. It's the light down here. It does things."

      You know. You don't know how you know. You knew it before you came down the stairs, the way you know a song.
    #Say nothing. Listen to him hum.
      *set guarded %+5
      You stand there in the cold air from the tunnel mouth and listen to a stranger hum your family's song, and don't say anything, because you don't trust your voice.
*else
  It's a tune you almost know. Like a word on the tip of your tongue.

He looks up at you, finally, and something in his face goes quiet.

"You'll need this," he says. "I think."

He's already cutting it. You didn't ask for anything. He takes a plain brass blank from a tin, sets it in the vice, pumps the treadle, and cuts it to a shape without looking at any original, as if the shape is in his hands. He blows the dust off, files one tooth by hand, and holds it out.

"What does it open?"

"I don't remember," says the Keyman, simply. "I only remember that you'll need it." He puts it in your palm and closes your fingers on it with his own. His hands are square and scarred and warm and blackened with brass dust. A locksmith's hands. "No charge. Some things you don't charge for."
*set has_key true

*choice speak
  #"Thank you. What's your name?"
    *set rel_keyman +5
    "Everyone calls me the Keyman," he says. "I've been here since 2011. Before that..." He shrugs, a small helpless movement. "Before that I don't know. They say I came down the stairs one night with good hands and no name, and the Conductor gave me this corner." He smiles, and the smile is terribly familiar and you can't think why. "Good hands are enough, down here."
  #"Why me? Why do you think I'll need it?"
    *set wits +2
    *set rel_keyman +3
    He thinks about it seriously. "Because you look like someone who opens things," he says. "And sooner or later everybody who opens things needs a way back out."
  #Take the key and go. There's something about him you can't look at for long.
    *set guarded %+10
    You put the key in your pocket, next to your grandmother's, and walk away fast. Behind you, the treadle starts again, and the humming.

*page_break
You're halfway back up the platform when someone screams.

It comes from the tunnel on the far side of the tracks: the service tunnel, a low arched doorway you hadn't noticed, with a red lamp over it. The scream goes up and up, and then the whole market is moving toward the sound, and you're moving with it, and then you're at the front, because the crowd makes room for the locksmith without being asked.

There's a woman lying on the floor of the service tunnel, in the red light, on her back, with her arms at her sides.

A good wool coat gone shiny at the elbows. A clear plastic rain bonnet, still tied under her chin.

*if mireille_kind
  It's Mireille Caron. You held her hand an hour ago. You told her you'd come and find her.
*else
  It's the old woman who asked you if you knew her. Mireille Caron.
Her eyes are open. She doesn't look frightened any more. She doesn't look like anything.

*page_break
The crowd presses behind you. Nobody else goes in. There's a line on the floor of the tunnel mouth, you realise, painted in white, very old, and nobody on the Line will step over it: whatever's beyond it isn't the market any more.

You step over it.

"Chéri," says the pocket, very quietly. "Be quick. The Conductor will be here in a minute, and after him, everyone."

*temp looked 0
*label body
*choice
  *hide_reuse #Kneel and look at her face.
    *set looked +1
    *set wits +1
    *clue c_bellmark
    Her face is calm. Her skin is cold, much colder than it should be after an hour. And at her left temple, just above the ear, there's a bruise, dark purple going black, in a very precise shape: a curve, a crescent, the exact width of the lip of a bell.

    Not a big bell. A handbell. The size of a teacup.

    You've seen a bell that size. Last night. An inch from your own temple.
  *hide_reuse #Open her hand. Her right fist is clenched.
    *set looked +1
    *clue c_wolfhair
    It takes some doing. She held on hard. When her fingers finally open, there's hair in her palm: coarse, grey and silver and black, a thick hank of it, like something pulled out of a dog.

    Behind you, someone in the crowd sees it and says the word before you can close her hand again. [i]Loup.[/i] And then everyone is saying it.
  *hide_reuse *if (c_wolfhair) #Take a few of those hairs. Fold them in a napkin, in your pocket.
    *set looked +1
    *set took_hair true
    *set wits +1
    You pull the paper napkin from the bagel shop out of your pocket and pinch a few of the hairs into it and fold it and put it away, fast, with your body between your hand and the crowd.

    They feel wrong between your fingers. Dry. Brittle. You don't know why that bothers you. You just know that if you'd pulled them out of a live animal in a fight, they wouldn't feel like old straw.
  *hide_reuse *selectable_if ((rel_aime >= 20) or (favor_aime)) #Look for Aimé in the crowd. Ask him to do what his family does.
    *set looked +1
    *set aime_tasted true
    *set rel_aime +5
    *clue c_voice
    He's already there, at the front, white as paper. When you look at him he knows what you're asking before you ask it, and his face does something awful: it goes through horror, and then refusal, and then a kind of resigned tenderness, like a nurse.

    "It has to be now," he says. "While it's fresh." He kneels on the other side of her. He takes off his glasses and folds them and puts them in his breast pocket. He murmurs something in Latin, too fast to follow. Then he bends over her hand, very gently, like a man kissing a ring.

    You look away. You don't hear anything. When you look back he's sitting on his heels with his eyes closed and a smear of something on his lower lip that he wipes off with a white handkerchief.

    "Cold," he says, eyes still closed. "Cold hands on her face. Somebody holding her very gently. The ring of a bell, right in her ear. And a voice." He swallows. "A young man's voice. Soft. An accent, not from here. He said [i]sorry, love.[/i]" Aimé opens his eyes. "He said sorry."
    *if mireille_kind
      "And, {name}." He can't look at you. "Before that. The last thing she was really thinking about. It was you. 'The kind young man said he'd come and find me.'"

      You don't say anything. There isn't anything.
  *hide_reuse #Open the compact. Ask Fleurette if Mireille is still here.
    *set looked +1
    *set lore +2
    "No, chéri." The voice from the compact is very gentle. "She didn't stay. The ones who go fast like that, with nobody holding their name, they don't stay. There's nothing to hold them." A pause. "That's the cruelty of it. Unmade, and then unmade again."
*if looked < 3
  *goto body

*page_break
"[i]Loups-garous.[/i]"

It's in every mouth on the platform now. Wolf hair in her fist. Everybody saw it, and everybody has an opinion, and none of the opinions are about the bell.

The crowd behind you parts, fast, the way crowds part for trouble: the Sept-Ans are coming down the platform. Dario in front, in his parka and his nonna's red toque, walking fast. Manon at his shoulder. Behind them the young one, Luc, with his torn ear and a borrowed coat, looking about fourteen and terrified.

"What happened?" says Dario, and then he sees her, and stops.

"Your wolves happened," somebody says from the crowd, and somebody else says it louder, and then the platform is full of it.

Dario's face goes very still. "Nobody in my pack," he says, clearly, to the whole platform, "has been down here tonight except the three of us, and we've been at the furrier's table since midnight, selling sheds. Ask Madame Pinsonneault. Ask anybody."

"There's hair in her hand, Santangelo."

Dario looks at the hand, and then at you, crouched beside it. Something passes between you: a question.

*page_break
The turnstile at the top of the stairs clanks, twice.

Everyone turns. Down the steps into the lanterns, in long black coats, with snow on their shoulders, come the only two people on the whole island who shouldn't be able to walk onto the Missing Line without the Conductor's leave. Lazare in front, Agathe behind, both with their bells out.

The Conductor is at the foot of the stairs before they reach it. He doesn't hurry. He simply is there, the way a wall is there.

"Brother Lazare," he says pleasantly. "You're a long way from your towers."

"Somebody's dead on your platform, Mr. Clarke." Lazare doesn't look at Dario. He very pointedly doesn't look at Dario. "The Accord gives us the right to examine any death touching the Hush."

The Conductor considers him for a long moment. Then he steps aside. "The Accord does. Examine. Touch nothing, arrest no one. Anybody who brings violence onto my platform will find the Line closed to them forever. That goes for the Carillon. That goes for the Sept-Ans." His eyes find you. "That goes for everyone."

*page_break
Lazare crouches on the other side of Mireille Caron and looks at her temple, and you watch the blood go out of his face.

He knows what made that bruise. So does Agathe, standing over him: she makes a small sound, [i]c'est une des nôtres[/i], that's one of ours, and Lazare says her name sharply, once, and she shuts her mouth.

"Wolf hair," he says instead, louder, standing, to the platform. "In her hand. She fought something that shed."

"Your bell," says Dario, very quietly. "On her head. And you want to talk about my wolves?"

"I want to talk about what's in her fist."

"Say it, then. Say it to my face, Desautels, in front of everybody. Say my wolves did this."

They're standing a foot apart over a dead woman. The whole platform is holding its breath. Neither of them is looking at anything but the other.

And then, both at once, they look at you.

*choice speak
  *if (took_hair) *selectable_if (wits >= 30) #"The hair's wrong. It's dead hair. Dry. Nobody pulled that off a live wolf in a fight."
    *set n2_stance "proof"
    *set rel_dario +15
    *set rel_lazare +5
    *set rel_clarke +10
    *set wits +2
    You unfold the napkin and hold it up to the red lamp. The platform goes quiet.

    "Feel it," you say to Lazare. "Go on."

    He takes a hair between finger and thumb. You watch him understand. It crumbles. It isn't a hair that was in a wolf twenty minutes ago. It's a hair that hasn't been in a wolf for a very long time.

    "Somebody put it there," you say. "Somebody wants you blaming each other."

    For a long moment nobody says anything. Then the Conductor says, "Hm," in a tone that means he's writing something down in a very old book.
    *remember dario You stood up on the Line and said his wolves didn't do it, and showed why.
    *remember lazare You showed him the wolf hair was dead hair, in front of everyone.
  *selectable_if (wits >= 35) #"Look at what's on her. A Carillon bell and a wolf's hair. Somebody wants you two at each other's throats."
    *set n2_stance "both"
    *set rel_clarke +10
    *set rel_lazare +5
    *set rel_dario +5
    *set wits +2
    "A bell bruise and wolf hair," you say. "One from each of you. On the same old woman, on neutral ground, on the one night the whole Veillée's down here to look at me." You stand up. "If I wanted a war, that's exactly the body I'd leave."

    Lazare's mouth closes. Dario's opens, and nothing comes out.

    The Conductor, at the foot of the stairs, looks at you with the particular stillness of a very old chess player who's just seen someone across the board make a move he didn't expect.
    *remember lazare You said the bell and the hair were both left to start a war.
    *remember dario You said the bell and the hair were both left to start a war.
  #Stand with the pack. "You don't know it was a wolf. Nobody here does."
    *set n2_stance "pack"
    *set rel_dario +10
    *set rel_lazare -5
    *set rel_manon +10
    Dario looks at you as if you've handed him something he didn't expect to be given, in front of all these people. Manon, behind him, nods once, slowly, the way a judge nods.

    Lazare's eyes go flat and cold. "You've known them one night," he says.

    "I've known you one night too."
    *remember dario You stood with his pack on the Line when nobody else would.
  #Stand with the Carillon. "There's wolf hair in her fist. That's evidence."
    *set n2_stance "carillon"
    *set rel_lazare +10
    *set rel_dario -10
    *set rel_agathe +5
    Lazare glances at you, fast, surprised, and something in his shoulders eases.

    Dario doesn't say anything. He just looks at you for a long second, and then away, and you feel it like a door closing somewhere in a house you've only just walked into.
    *remember dario You said the wolf hair was evidence against his pack.
  #Say nothing. This isn't your fight. Yet.
    *set n2_stance "out"
    *set guarded %+10
    You don't say anything. Both of them look away from you at the same moment, and back at each other, and you feel them each decide something about you.

The Conductor claps his hands, once. It echoes off the tile like a gunshot.

"Enough. This woman goes to Bélanger and Fils, as the dead of the Line always do. Nobody arrests anybody. Nobody fights anybody. The market is closed for tonight." He looks along the platform, and every creature on it drops its eyes. "Go home. All of you. Go home and lock your doors."

*page_break
The market packs itself up faster than seems possible: awnings folding, jars clinking into crates, the old blue métro doors sliding shut one after another all down the train. Two young men in black suits, who you realise must be Aimé's cousins, come with a stretcher and a white sheet and lift Mireille Caron with enormous care. Aimé walks beside the stretcher with his hand on it and doesn't look back.

At the foot of the stairs, three people are waiting for you.

Lazare, with his coat buttoned to the throat. "The Carillon will see you home," he says. "It isn't safe. Not tonight. Not for you."

Dario, hands in his parka, his toque pushed back. "Or the pack will. It's a long walk to Verdun, Lacroix. Good company makes it shorter."

And, drifting at your shoulder in a cloud of cold perfume, Fleurette, or the idea of her, out of the compact. "Or your friends will," she says. "Aimé has the hearse, chéri. It's very roomy."

*choice
  #@lazare Go with Lazare.
    *set n2_escort "lazare"
    *node n2_escort lazare
    *set rel_lazare +5
    *goto walk_lazare
  #@dario Go with Dario.
    *set n2_escort "dario"
    *node n2_escort dario
    *set rel_dario +5
    *goto walk_dario
  *selectable_if ((charm >= 35) or ((rel_lazare >= 10) and (rel_dario >= 10))) #"You can both walk me. Try not to kill each other on the way."
    *set n2_escort "both"
    *node n2_escort both
    *goto walk_both
  #@aime Go with your friends. The hearse it is.
    *set n2_escort "friends"
    *node n2_escort friends
    *set rel_aime +5
    *set rel_fleurette +5
    *goto walk_friends

*label walk_lazare
*page_break
It's snowing again on Saint-Viateur, big slow flakes, the kind that fall straight down when there's no wind. Lazare walks on the outside of the sidewalk, between you and the street, without seeming to think about it. The black Buick is parked two blocks away. He doesn't hurry toward it.

"The bruise," you say. "That's your bell."

He's quiet for half a block. "It's a Carillon bell," he says finally. "Not mine. Ours." His breath smokes. "There are two hundred of them. Every hunter carries one. They're rung to make a sleeper forget, and you ring them softly, beside the ear, the way you'd say a name. You don't strike with them. Nobody strikes with them." He stops walking. "To make a bruise like that, you'd have to hit someone with all your strength. At the temple. Where the skull is thinnest."

*if n1_lied
  He looks at you sideways. "I'm telling you this," he says, "and I don't know why. You lied to me the night we met."

  "I was pinned to a door."

  "Yes." Something that could almost be a smile. "I've been told that's not the best way to begin."
*else
  He looks at you sideways. "I'm telling you this," he says, "because you didn't lie to me, the night we met. Almost everybody lies to me. It's the coat."

*choice speak
  #"Someone's trying to frame the wolves. And your order's name is on the weapon."
    *set rel_lazare +10
    *set wits +1
    "Yes," Lazare says, very low, as if saying it out loud costs him. "I know." He starts walking again. "I'll find out who. I'll find out, and then I'll deal with it myself."
  #"Are you worried it's one of your own?"
    *set rel_lazare +5
    *set des_lazare +5
    He doesn't answer. That's the answer.
  #"Why does it matter so much to you that it isn't the wolves?"
    *set des_lazare +5
    *set wits +2
    He stops so suddenly you nearly walk into him.

    "It doesn't," he says. "It doesn't matter to me at all. A loup-garou killed my parents." He says it like a catechism. Then, after a second, much quieter, as if to himself: "It matters because it's a lie. That's all. I don't like lies."
  #Take his arm. It's icy. That's your excuse.
    *set des_lazare +10
    *set reckless %+5
    *set guarded %-5
    You slip your hand through the crook of his elbow, the way old couples walk on ice. He goes rigid. For a whole block he doesn't say anything, and doesn't pull away.

    "It's icy," you say.

    "Yes," he says, to the snow. "It is."
    *remember lazare You took his arm on Saint-Viateur, in the snow, and he let you.

At the Buick he stops, keys in hand. "Come to the towers tomorrow night," he says. "Voluntarily. Let the Bourdon see you. It would be better, if you come on your own, than if he sends someone who isn't me."

*choice
  #"I'll think about it."
    *set guarded %+5
    "That's what everybody says," Lazare says, "right before they don't."
  #"If you ask me nicely."
    *set des_lazare +5
    *set wry %+5
    He looks at you across the roof of the car for a long moment, snow collecting in his curls. "{name}," he says, and it's the first time he's said your first name. "Please."

    It shouldn't do what it does to you. It does it anyway.
  #"Your Bourdon ordered you to bring me in whatever it takes. Why are you asking?"
    *set rel_lazare +5
    *set wits +1
    "Because I'd rather you came," he says, "than that I had to." He unlocks the car. "Get in. It's cold."

He drives you to Verdun at exactly the speed limit, and when he drops you off outside the pharmacy he waits, with the engine running, until your light goes on upstairs.
*goto dawn

*label walk_dario
*page_break
The tow truck is parked across two spaces on Saint-Viateur with the hazards going. Dario doesn't get in. He stands by the door in the falling snow with his hands on the roof of the cab and his head down, breathing.

"She was an old lady," he says. "An old lady who didn't know her own name. And somebody made it look like one of mine." He hits the roof of the cab with his flat hand, once, not hard, and the whole truck rings. "Luc is seventeen. You know what they'll do to him, if they decide it was him? The Carillon don't do trials. They cut you. They call it mercy. You wake up a sleeper, and you don't remember your own pack, your own family, the people who held you down the first time you turned." His voice cracks. "Seven years. They take seven years out of you like a kidney."

*if n2_stance = "proof"
  He looks up at you. "You stood up in front of everybody and said it wasn't us. With proof. Nobody's ever done that for my wolves." He shakes his head, bewildered. "Nobody."
*elseif n2_stance = "pack"
  He looks up at you. "You stood with us. In front of everybody." He shakes his head. "You don't even know us."
*elseif n2_stance = "carillon"
  He looks at you, and there's hurt in it, carefully put away. "You said it was evidence," he says. "I get it. I do. It looked bad." He opens the cab door for you anyway. "Come on. It's cold."

*choice speak
  #Put your hand on his back. Just put it there. Say nothing.
    *set rel_dario +10
    *set des_dario +5
    *set guarded %-5
    He's hot through the parka, like a stove. He goes still under your hand, and then, slowly, he leans back into it, the way a big dog leans into your legs.

    "Okay," he says, after a while. "Okay. Get in the truck, Lacroix."
  #"Then we find who did it. Before they come for Luc."
    *set rel_dario +10
    *set reckless %+5
    He looks at you. "We?"

    "I'm the one who opened the door. I'm already in it."

    Something in his face breaks open and shows you the kid he must have been once. "Yeah," he says. "Okay. We."
  #"Tell me about the first time you turned."
    *set rel_dario +5
    *set lore +3
    He laughs, shakily. "Easter Sunday, 2014. I was nineteen. I was at my cousin's wedding in a rented tux, and I went outside for a smoke, and I came back in on four legs." He wipes his eyes. "My nonna hit me with her purse until I changed back. Then she fixed my tie and made me dance with my aunt." He shakes his head. "She knew. She always knew. Never said a word."

He drives you to Verdun the long way, down Parc and along the mountain, where the cross is lit white above the trees. He sings along to the radio under his breath, badly, with total commitment. When he pulls up outside the pharmacy, he doesn't turn the engine off.

"So," he says.

"So."

He's looking at your mouth. He isn't hiding it.

*choice
  #Kiss him.
    *set kissed_dario true
    *set des_dario +15
    *set reckless %+10
    He tastes like cold air and the mint he's been crunching since Mile End. It isn't gentle. He kisses you like he's been waiting all night to do it and has decided waiting was stupid. His hand comes up to the back of your neck, rough and hot, and holds you there. When he finally lets you go you're both breathing hard and the windows are fogged solid.

    "Okay," he says, a little dazed, grinning. "[i]Okay.[/i] Good night, Lacroix."
    *remember dario You kissed him in his tow truck outside your apartment, the second night.
  #"Not tonight. But ask me again."
    *set des_dario +10
    *set guarded %+5
    He grins, slow. "Oh, I'll ask," he says. "I'm very persistent. It's a wolf thing."
  #"Good night, Dario." Get out before you do something stupid.
    *set guarded %+10
    "Good night, Lacroix," he says, and you can feel him watching you all the way to your door.
*goto dawn

*label walk_both
*page_break
You end up walking between them up Saint-Viateur in the falling snow, the hunter on your left and the wolf on your right, which feels like being escorted by two weather systems.

They argue the entire way. About the bell. About the hair. About whether the Carillon has ever once in its history done anything useful, and whether the Sept-Ans have ever once in theirs paid a parking ticket. About a fight on a roof in Rosemont in 2019 that each of them clearly remembers differently and in enormous detail. It's the most intimate argument you've ever overheard, and neither of them seems to notice.

At the corner of Parc, waiting for the light, Lazare's scarf has come loose, the dark red one, and the wind is lifting the end of it.

Dario reaches over without looking, without breaking his sentence, and tucks it back into Lazare's collar. His knuckles brush Lazare's jaw.

Lazare knocks his hand away. A second too late. A long second.
*set saw_scarf true

Neither of them looks at the other. Neither of them looks at you. The light changes. They keep arguing.

In your coat pocket, very quietly, a tinny voice says: "Oh, [i]chéri[/i]."

*choice
  #Say nothing. File it away.
    *set wits +2
    *set guarded %+5
    You say nothing. You file it away, in the place where you keep things you've noticed and aren't supposed to have.
  #"You two should get a room."
    *set wry %+10
    *set rel_lazare -5
    *set des_dario +5
    Lazare stops dead on the sidewalk as if you've shot him. Dario laughs, too loud, much too loud, and says, "Hey, [i]no[/i], hey, what, no," and then keeps laughing, and doesn't finish the sentence, and his ears are bright red under the toque.

    Lazare says, very precisely, "Good night," and walks off into the snow toward his car, and doesn't look back.
    *remember lazare You told him and Dario to get a room. He walked away.
  #Look at them both. Really look. Let them see you do it.
    *set des_lazare +5
    *set des_dario +5
    *set reckless %+5
    You stop walking, and they both stop too, and you look from one to the other, the hunter and the wolf, snow in their hair, both breathing hard from arguing, both suddenly silent.

    Dario looks back at you with frank interest. Lazare looks back at you as if you've caught him at something, which you have.

    "What?" says Lazare.

    "Nothing," you say. "Just thinking."

In the end Lazare's car and Dario's truck both follow you to Verdun, one behind the other, and both of them wait outside the pharmacy with their engines running until your light goes on upstairs, and then, you watch from the window, neither of them leaves until the other does.
*goto dawn

*label walk_friends
*page_break
The hearse is a 2011 Cadillac with a purple interior and a bumper sticker on the back that says [i]MY OTHER CAR IS ALSO A HEARSE[/i]. Aimé drives it like a man carrying an egg in a spoon. Fleurette's compact sits open on the dashboard, and she complains about the heater, and the radio, and Aimé's driving, and Aimé's tie, and the state of the Décarie, which you're not even on.

It's the most normal twenty minutes you've had in two days, and at some point, on Wellington, you start laughing, and can't stop, and then you're crying, a little, with your head against the cold window. Nobody says anything about it. Aimé turns the radio up a bit. Fleurette hums along.

*choice speak
  #"Thank you. Both of you. I don't know what I'd have done tonight without you."
    *set rel_aime +10
    *set rel_fleurette +10
    *set guarded %-10
    "Oh, you'd have been fine," says Fleurette. "Dead, probably, but fine."

    Aimé doesn't say anything. But at the next red light he reaches over and squeezes your hand, once, fast, and puts his hand back on the wheel as if it never happened.
    *remember aime You thanked him, crying in his hearse.
  #"Aimé. What she was thinking about, at the end. Did it hurt her?"
    *set rel_aime +5
    *set wits +1
    Aimé keeps his eyes on the road. "No," he says. "Not the dying. It was quick. The part before that hurt. Not knowing her own daughter's name." He swallows. "That hurt for forty-three years."
  #"Fleurette. Somebody's killing people like her. Why?"
    *set lore +3
    *set rel_fleurette +5
    "Because they're remembering, chéri," says the compact. "The Hush is leaking, and the unmade are starting to remember what was taken out of them. And somebody, somewhere, would very much rather they didn't." A pause. "Ask yourself who has the most to lose if the whole city starts remembering what the Hush did to it."

He drops you outside the pharmacy. "Call me," Aimé says. "For anything. I mean it. I'm up all night. Occupational hazard."

*label dawn
*page_break
Your apartment is cold. You don't turn on the lights. You put the two keys on the kitchen table side by side: your grandmother's, small and worn, and the Keyman's, bright and new.

They're finished the same way.

Not the same key, and maybe not the same hand. But the same teaching: the same bevel on the bow, the same little flourish filed into the tip of the blade, like a signature. You've seen that flourish your whole life. It's in your grandfather's notebook. It's on the keys you cut yourself, because it's how you were taught to finish a key, by a man who was taught it by his father.

Nobody else in Montréal finishes a key like that. Nobody alive.

You sit down very slowly.

*if has_photo
  *choice
    #Put the Polaroid on the fridge. Where you'll see it every morning.
      *set photo "fridge"
      *set guarded %-10
      You put it under the magnet from the pizza place. S. + {name}. Août 2009. A man and a boy in front of a door. You look at it for a long time.
    #Put it in the kitchen drawer, with the takeout menus. Not yet.
      *set photo "drawer"
      *set guarded %+10
      You put it in the drawer with the menus and the dead batteries and shut the drawer. It doesn't help. You can feel it in there.
    #Keep it in your wallet. Wherever you go, it goes.
      *set photo "wallet"
      You put it back in your wallet, behind your licence, against your hip.

Your phone buzzes.

*text ruari Honora says she looks forward to it. So do I. 🩸
*if n2_escort = "lazare"
  *text lazare Your light is on. Good night.
*elseif n2_escort = "dario"
  *if kissed_dario
    *text dario still thinking about it
    *text dario the kiss not the murder
    *text dario ok also the murder
  *else
    *text dario get some sleep lacroix. i'll find out who did it. promise
*elseif n2_escort = "both"
  *text dario he's still parked across the street lol
  *text lazare Santangelo is still parked across the street.
*else
  *text aime Home safe? Also I still can't believe I said the thing about Sec 3. Please forget it.
When you go down to the van at noon to get your thermos, there's writing on the windshield, in the frost, from the inside. Neat, joined-up, old-fashioned letters, as if written with a warm fingertip.

[i]Tomorrow. The bridge. At the top. —N.[/i]

It melts as you watch.

*set hush 80
*page_break Night Three
*finish
`);
