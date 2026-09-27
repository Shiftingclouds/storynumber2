NB.scene("night5b", String.raw`
*mood wolves
*chapter 5 Saint-Jude [5b]
*node n5_path wolves
*temp crypt ""
*temp knife ""
*temp heard ""
*temp convince false
Dario drives the tow truck up Saint-Laurent at a hundred and ten kilometres an hour, through red lights, on the wrong side of the road, with the hazards on and the chains on the back of the truck slamming against the bed at every pothole like a church bell being dropped down the stairs.

He doesn't talk. That's how you know it's bad. On Friday night he talked the whole way across the bridge. Now his hands are white on the wheel and his jaw is working, and every few seconds he glances at his phone in the cup-holder, where it lies face up, not ringing.

At the corner of Jean-Talon, he runs a red light in front of a snowplough, and the plough driver leans on his horn, long and outraged, and Dario doesn't even look.

"Manon's hurt," he says, to the windshield. "Manon doesn't get hurt. Manon's the one who holds your head while you throw up." A breath. "And he's walking to the towers. In his shirt. In twenty-two below. To ask the man who stole him why." He hits the wheel with the heel of his hand, once, hard. "[i]Porca miseria.[/i] I should be in two places. I'm never in the right place. Twelve years and I'm never in the right place."

*choice speak
  #Put your hand on his knee. Leave it there. "You're in this place. Drive."
    *set n5_walk "hand"
    *set des_dario +10
    *set rel_dario +5
    *set guarded %-5
    He looks down at your hand on his knee, and then back at the road. The truck slows, very slightly, from a hundred and ten to ninety. His hand comes off the wheel and covers yours for a second, rough and hot, and goes back.

    "Okay," he says. "Okay. I'm driving."
  #"You told me Lazare's the best hunter in the city. He'll be fine for one night. Your pack won't, without you."
    *set n5_walk "talk"
    *set rel_dario +5
    *set wits +2
    "The best hunter in the city is walking into a tower full of the people who taught him everything," Dario says. "That's not a comfort, Lacroix. That's the whole problem." But his shoulders come down a little. "You're right, though. One thing at a time. Manon first."
  #"If you drive into that plough, you'll be in no places at all. Slow down, Santangelo."
    *set n5_walk "coat"
    *set wry %+10
    *set rel_dario +5
    He barks a laugh, surprised out of him. "You sound like my nonna," he says. "She used to hit me with a wooden spoon from the back seat." But he slows down. "She'd have liked you. After ten years."
  #Say nothing. Hold the door handle. Let him drive.
    *set n5_walk "quiet"
    *set rel_dario +3
    *set guarded %+5
    You hold on to the door handle and say nothing. After a few blocks, he glances at you, and something in his face says he's glad you didn't try.

*page_break
*art 5b
You hear Saint-Jude before you see it.

Bells. Not church bells: handbells, dozens of them, rung by hand in the street, a thin cold jangling that gets in behind your teeth. And under it, from inside the church, a sound that makes the hair on your arms stand up through your coat: howling. Twenty voices, rising and falling, ragged, furious, frightened.

Dario kills the headlights and pulls up on the corner half a block away, and you both sit and look.

The Carillon are all round the church. Thirty of them, maybe more, in their long dark coats, in a ring in the snow, on the sidewalk and in the street and in the little yard with the statue of the Virgin in it, every one of them ringing a handbell, slow and steady, not in time with each other, so the sound never stops. There's a line on the ground all the way round the building: salt, or iron filings, or both, glittering in the streetlights. The pink neon sign over the door, [b]CHEZ JUDE[/b], is still on. Someone's thrown something at it and it flickers.

The front doors are shut. There's furniture against them from inside, you can tell from the way they bulge. The windows are dark except for the stained glass at the back, Saint Jude and his painted wolf, lit from inside, red and gold.

"They can't cross the line," Dario says, low. "The salt. Not while the bells are going. Neither can we. So nobody's going in, and nobody's coming out, and at dawn they'll have enough of them to rush the doors." He's shaking. Not with fear. "They'll cut everybody they catch. Every one. They'll bleed them and ring the bells over them and my whole pack'll wake up in the snow tomorrow not knowing their own names."

*page_break
"There's a way in," he says. "The rectory." He points at the brick house next to the church, dark. "There's a coal tunnel from the rectory basement to the crypt. From when they heated the whole place with one furnace in 1955. It comes up under the altar. The rectory's outside their line." He looks at you. "The door at the crypt end's locked. Iron. Has been since before I got the place. I never needed it." A beat. "I never had a locksmith."

You get into the rectory through a basement window with a coat hanger. The basement is black and full of old Christmas decorations and a furnace the size of a car. The coal tunnel is behind it: brick, low, a metre and a half high, going away into the dark under the yard, with the handbells jangling faintly overhead through the earth. You go down it bent double, your phone's torch in your teeth, Dario behind you breathing like a bellows.

At the end, a door. Iron, rusted, riveted, with a big lock set in it and a sign on it in French, in a nun's handwriting: [i]DÉFENSE D'ENTRER. PAR ORDRE DU CURÉ.[/i] 1961.

On the other side of it, you can hear the pack howling.

*choice
  *selectable_if (hands >= 48) #Pick it. It's an old lever lock and it's rusted half solid, but rust is just a kind of patience.
    *set crypt "picked"
    *set hands +3
    It takes you six minutes, on your knees in the coal dust, with Dario holding the torch over your shoulder and breathing on your neck. The levers are frozen with rust; you have to work each one, back and forth, back and forth, the way you'd work a stiff joint, until it gives. Your grandfather's voice in your head the whole time: [i]pas de force. De la patience.[/i]

    The fifth lever goes. The bolt draws back with a scream of iron that you feel in your fillings.

    "[i]Madonna,[/i]" breathes Dario, very close behind you. "I want to marry your hands."
  #Take the hinges off. The lock's strong. The hinges are sixty years of rust.
    *set crypt "hinges"
    *set hands +2
    *set wits +2
    You don't touch the lock. You look at the hinges, big iron pins rusted into their knuckles, and get the flat screwdriver and the little hammer out of your kit and go to work on the pins from underneath. It takes twenty minutes and all the skin on two knuckles. The first pin comes out. The second. The door hangs in its frame by the lock alone, and Dario gets his shoulder under it and lifts it away like a man lifting a car door off a wreck.
  #"Can you break it?" Let the wolf do it.
    *set crypt "wolf"
    *set rel_dario +5
    *set nerve +2
    Dario looks at the door. Then he takes off his toque and hands it to you, very carefully, as if it's the most important thing he owns, which it is.

    "Don't look," he says.

    You look. His shoulders go first: they widen, and something moves under his parka like a sack full of cats. His hands on the iron aren't quite hands any more. His breath comes out of him in a growl so low the tunnel hums. He puts his whole body against the door, once, twice, and on the third time the lock tears out of the frame with a shriek, and the door goes over into the dark with a crash they must hear all the way to the street.

    When he turns back to you, his eyes are gold all the way through, and it takes him a long moment to find his mouth again. "Toque," he says, thickly, and holds out a hand that's nearly a hand.

*page_break
*portrait manon sad
The crypt of Saint-Jude is a low concrete room full of stacked folding chairs and cases of beer, and it's full of wolves.

Not all of them are wolves right now. Some are people: Kim and Sandrine, the nurses, kneeling on the floor over someone in a pool of light from a camping lantern; Big Réjean with a tire iron; Yves the almost-priest with a first-aid kit; Johnny Tabarnak in his tuxedo, with his pencil moustache smeared, holding a crying boy by the shoulders. But some of them are wolves: big, grey and brown and black, pacing, hackles up, eyes gold in the lantern light. They all turn as the door goes down, and every one of them bares its teeth, and then they see Dario, and the sound they make is like nothing you've ever heard, a sound like a whole room of people saying [i]oh thank God[/i] with no words at all.

The person on the floor between the nurses is Manon.

She's sitting up against the wall with her braid over her shoulder and her face grey. There's a crossbow bolt in her shoulder. Iron: you can see the skin round it has gone black, like frostbite, spreading. She's holding it very still with her other hand.

"Dario," she says, calmly. "You're late. You're always late. You'd be late to your own funeral, and then you'd complain about the music."

Dario goes down on his knees beside her.
*if luc_friend
  And across the crypt, Luc, the young wolf from the Main, still half-furred, with his torn ear, takes one look at you and comes across the room and puts his forehead against your chest like a dog, and leaves it there, shaking. You put your hand on the back of his neck. He's okay. He's here. You got him off the street.

*page_break
Kim and Sandrine can't get the bolt out. It's iron, and it's barbed, and every time they touch it Manon's whole body locks and the black spreads another centimetre.

"It has to come out clean," says Sandrine, who's been an ER nurse at Jean-Talon for twenty years and is plainly furious to be on her knees on a crypt floor without a single instrument. "One pull, straight, the angle it went in. If it snags on the way out, the barbs'll leave iron in her and she'll lose the arm. Maybe more." She looks at her own hands. They're shaking. Wolves' hands; she's been half-turned for an hour. "I can't. Not like this. My hands aren't mine right now."

Everyone in the crypt looks at their hands. Everyone's hands are half-wolf.

Except yours.

*choice
  *selectable_if (hands >= 45) #"I'll do it. Tell me the angle. My hands are the steadiest thing in this room."
    *set hands +3
    *set rel_manon +15
    *set rel_dario +5
    Sandrine looks at you, and at your hands, and makes a decision. She puts your fingers on the shaft, and shows you the angle with her own hand over yours, and says, "On three. Don't stop halfway. Whatever she does. Don't stop."

    Manon looks at you. "Locksmith," she says. "Be gentle."

    "I'm always gentle."

    On three, you pull. Straight, smooth, the way you'd draw a key out of a lock you don't want to wake. Manon doesn't scream. She makes one sound, deep in her chest, and her hand closes on Dario's so hard you hear his knuckles go. The bolt comes out clean. Every barb. You're holding it, black and wet, in your hand.

    The black round the wound stops spreading. Then, slowly, as Kim presses gauze into it, it starts to fade.

    "Thank you," Manon says, grey and sweating, with her eyes shut. "I'd forgotten what it was like to have a doctor with no fur."
    *remember manon You pulled the iron out of her shoulder in the crypt, clean, every barb.
  #Hold Manon still while Sandrine does it, wolf hands or not. Give her something to hold on to.
    *set rel_manon +10
    *set nerve +2
    You get behind Manon and brace her against your chest, your arms round her, her good hand in yours. "Squeeze," you say. "Break my fingers. I've got nine more."

    Sandrine pulls. It snags, halfway: you feel it go through Manon's whole body like a current. And then it's out. Sandrine throws it across the crypt with a cry of disgust. There's a sliver still in; you can see it glinting. Kim goes in after it with tweezers from Yves's kit, and swears, and gets it.

    Manon's hand in yours relaxes, finger by finger. "You have very good fingers," she says faintly. "I apologise for them."
  #"Let Dario do it. It's his pack. They'll want it to be him."
    *set rel_dario +5
    *set guarded %+5
    Dario looks at you as if you've handed him a live grenade. Then he looks at Manon, and his hands, and closes his eyes, and breathes, and you watch him pull the wolf back into himself by main force, finger by finger, until his hands are just hands. Shaking. But hands.

    He pulls. It comes out. Most of it. Manon passes out cleanly on the last centimetre, which Sandrine says is a mercy, and Kim digs out the last sliver of iron while she's out. When she comes round, she looks at Dario's grey face and says, "You did that very badly," and he laughs, and it cracks down the middle.

*page_break
Upstairs, the church is a fortress.

The pews are piled against the front doors and the side door. The karaoke machine is on its side against the sacristy door. The stained-glass window of Saint Jude and his painted wolf is lit from inside by every candle they could find, so the Carillon outside can see it and know the pack is still here. On the altar, Johnny Tabarnak has set up the lasagna pan full of salt and a row of kitchen knives, and he's sitting beside it in his tuxedo with a wooden spoon across his knees like a sword, humming "My Way."

Outside, the handbells don't stop. Thin and cold and endless, jangling in through the walls. Every wolf in the building has their ears back.

Dario stands in the middle of the nave and looks round at his pack. Twenty people. Half of them bleeding. All of them excommunicate, lost causes, patron saint in the window.

"Okay," he says. "Okay. Listen to me."

*choice
  #Stand beside him while he talks. Let them see the locksmith's with the alpha.
    *set rel_dario +5
    *set nerve +2
    You step up beside him, in the middle of the nave, and stand there, shoulder to his shoulder, in your party clothes with coal dust on the knees. Twenty pairs of gold eyes go from him to you and back.

    Dario glances at you. Something in his face steadies, like a man who's found the rail on a staircase in the dark.
  #Go and sit with Luc. The kid's shaking so hard his teeth are going.
    *set rel_manon +5
    *set charm +2
    You go and sit on the pew beside Luc, who's in his Céline hoodie again, with his knees up and his arms round them and his teeth chattering. You don't say anything. You put your shoulder against his. After a minute he leans on it.
  #Check the doors. All of them. You know doors.
    *set hands +2
    *set wits +2
    You go round the church while Dario talks, checking every door the way you'd check a house after a break-in. The front doors: barricaded, solid. The sacristy: fine. The side door by the confessionals: an old aluminium fire door from the seventies with a crash bar and a lock you could open with a credit card.

    "That one," you tell Dario, afterward, low. "If they come in, they'll come in there. It's the worst door in the building."
    *set heard "door"

"They want Luc," Dario says to the pack. "That's what they said. Give them the wolf from the Main, the one on the phones, and they'll call it even." He looks at Luc, whose face has gone white. "They can go to hell. Nobody's giving anybody. We hold till dawn. At dawn the Angelus rings, and the Carillon has to go and pray, every one of them, it's in their rule. We hold till the Angelus." He looks round at them. "Six hours. That's all. We've done worse. Réjean, you did seven Easters in a Kenworth. You can do six hours in a church."

"Easy," says Réjean, and hefts the tire iron.

*page_break
They come in at four.

You're on the floor by the side door with your back against the wall, not asleep, not awake, with Luc's head on your shoulder, when the aluminium fire door blows in off its hinges.
*if heard = "door"
  You knew it would be that one. You're already on your feet before it's hit the floor, and you've got Luc behind you, and Réjean's already there with the tire iron because you told Dario, and Dario told him.
*else
  You didn't think about the side door. Nobody did. Nobody thinks about the side door.

Hunters. Six of them, then ten, through the gap, in their long coats, with bells in one hand and iron in the other. The handbells outside are suddenly inside, jangling off the stone, and every wolf in the church goes up at once in a roar that you feel in your stomach.

It's chaos. It's pews going over and candles going over and the Stations of the Cross in their Christmas lights swinging on their nails. It's Big Réjean swinging the tire iron at a man with a bell. It's Kim and Sandrine back to back, half-wolf, snarling. It's Johnny Tabarnak on the altar throwing handfuls of salt in the hunters' faces and yelling Sinatra. It's a young hunter, nineteen maybe, with a soft moustache, going down under a grey wolf by the confessionals and a bell rolling away across the floor, ringing, ringing.

And it's Agathe.

*page_break
*portrait agathe angry
You'd know her anywhere: the crop of blonde hair, the freckles, the black coat. Lazare's partner. She's come in with the second wave and she's going through the nave like a woman with one purpose, and the purpose is Luc.

She's got him. You don't see how. One second he's beside you and the next he's on his back on the tiles in front of the altar, half-changed, and Agathe's on him with her knee on his chest and a knife in her hand. Silver. A short curved blade that catches the candlelight. The knife the Carillon use to draw a wolf's blood and cut the curse out, and everything the wolf ever learned along with it.

"You went for me," she's saying, "you went for my [i]throat[/i], at the fort, in front of..." Her voice is shaking. "Hold still. Hold still. It doesn't hurt. It's mercy. It's [i]mercy[/i]..."

Manon comes out of nowhere.

She's grey, and her shoulder's strapped, and she shouldn't be on her feet, and she's between them. She's got Agathe's knife wrist in her good hand, and she's shoving Luc away with her knee, and she says, very clearly, in her grade-three-teacher voice: "Not him. He's seventeen. Take me instead, if you need to take someone."

Agathe's knife is an inch from Manon's cheek. Agathe's face is wet.

You're four metres away. You've got about two seconds.

*choice
  *if (saved_agathe != "") #"[i]Agathe![/i] At the fort. It was me. Look at me." Remind her who stood between her and a wolf.
    *set knife "name"
    *set rel_agathe +15
    *set charm +2
    *goto knife_name
  *selectable_if (nerve >= 45) #Get between them. Put your own body in front of the knife. You're mortal. Silver's just a blade to you.
    *set knife "body"
    *set nerve +3
    *goto knife_body
  *selectable_if (charm >= 48) #"Agathe. Look at her. She was a nun for twenty-two years. She taught grade three. Look at her face."
    *set knife "words"
    *set charm +3
    *goto knife_words
  #Grab for the knife. Anything. Now.
    *set knife "grab"
    *set reckless %+10
    *goto knife_grab

*label knife_name
*page_break
"[i]Agathe![/i]"

Her head comes round.

"At the fort," you say. You're walking toward her. Slowly. Hands open. "Friday. On the ice. A wolf came for your throat and somebody got in the way. You don't even know my name. I know yours." You stop a metre away. "It was me. Look at me."

Agathe looks at you. The knife doesn't move. But her face does. You watch it go across her: the night at the fort, the snow, the wolf coming at her, a stranger in a parka between her and the teeth.

"You," she says.

"Me. And that's the wolf. Luc. He's seventeen. He's two months in, and he's sorry. He told me so himself." You look at Manon. "And she's the one who holds their heads when they're sick."

Agathe's hand opens.

The knife falls on the tiles. It rings, a small bright sound, silver on stone, and lies there.
*goto knife_safe

*label knife_body
*page_break
You don't think. You go.

You're across the four metres before anyone can stop you, and you get your arm in between Manon's face and the silver just as Agathe's wrist comes free and the knife comes down.

It goes into your forearm. Through your party sleeve, through the skin, into the meat. It hurts exactly as much as a knife should. It doesn't hurt one bit more.

You're a sleeper, or you were. A locksmith from Verdun. There's no curse in you for silver to cut out. Just blood, ordinary blood, red, running down your wrist onto Manon's collar and Agathe's hands.

Agathe stares at it. At your blood on her hands. At you.

"You're..." she says. "You're not..."

"No. I'm just a guy." You hold your arm against your chest. Your voice is shaking. "And that's just a kid, and that's a woman who used to be a nun. And you were about to cut the whole of them out of themselves." You look at her. "Is that what you want to be?"

The knife falls on the tiles.
*set nerve +2
*remember manon You put your arm in front of the silver for her. The scar's still there.
*goto knife_safe

*label knife_words
*page_break
"Agathe," you say. Not loud. Clear, the way you'd talk to someone on a ledge. "Look at her. Not at the wolf. At her face."

Agathe's eyes flick to Manon.

"She was a Sister of Providence for twenty-two years," you say. "She taught grade three in Hochelaga. She says grace at dinner. She says it better than any priest I ever heard." You take a step closer. "She's asking you to take her instead of a boy. That's what she is. You were raised by nuns, weren't you? You know exactly what that is."

Agathe's face crumples. Just for a second. Just at the mouth.

"Sister," Manon says softly, under the knife. "It's all right. I know. I know what they told you it was for."

Agathe's hand opens.

The knife falls on the tiles.
*goto knife_safe

*label knife_grab
*page_break
You go for the knife.

You're fast. Not fast enough. Agathe's been a hunter since she was fifteen and you're a locksmith with coal dust on his knees, and she sees you coming, and twists, and in the twist the knife goes where the knife was always going to go.

It's not deep. It doesn't need to be. It's a line across Manon's cheek, from the bone to the corner of her mouth, and the blood that comes out of it is red. Just red.

Manon sits back on her heels.

You watch it happen. You watch it go out of her. Her eyes go from gold to hazel. Her shoulders drop. Her face, the calmest face in any room, goes slack and puzzled and then frightened, and she looks round the church, at the wolves, at the candles, at the painted Saint Jude in the window, at Dario running toward her across the nave, and she doesn't know any of it.

"Where am I?" says Manon Lefebvre. "Who are you people? What... what is this place?" She puts her hand to her cheek and looks at the blood. "Why am I bleeding?"

*set manon_cut true
*set rel_dario -5
*set favor_manon false
*remember dario The night of the siege, Agathe's knife found Manon, and she forgot all of you.
*goto knife_after

*label knife_safe
*set manon_safe true
*achieve manon
*page_break
*portrait agathe sad
Agathe sits back on the tiles with her empty hands in her lap, looking at them.

Around you, the fight is running down. You feel it go, the way a storm goes: the hunters falling back toward the broken side door, dragging each other; the wolves not following, circling, snarling; Dario in the middle of the nave roaring something in three languages that means [i]let them go, let them go, let them go[/i].

Agathe doesn't go with them. She sits on the floor of the church in front of the altar, with Luc and Manon and you and the silver knife on the tiles between you, and she starts to cry. Not loudly. The way people cry who haven't let themselves in a long time and have forgotten how.

"They told us the wolves did it," she says. "The Quiet Killings. Wolf hair in their hands. The Bourdon said." She wipes her face with the back of her wrist. "But the bruises are from one of ours. One of our bells. I know they are. I've seen that bruise on training dummies since I was fifteen."
*clue c_bell_stolen
She looks up at you. "One went missing. From the armory. From my own peg. I signed it out on the second and brought it back, I know I brought it back, and three weeks later it's gone, and the tag says [i]returned[/i] in my own hand." Her voice cracks. "Somebody's using my bell to kill people, and blaming it on them, and I came here tonight to cut a seventeen-year-old because I wanted it to be true."

Manon, grey, bleeding through her strapping, reaches out with her good hand and puts it on Agathe's head. Like a blessing. Like a teacher with a child who's done something terrible and is sorry.

"Go home, Sister," she says gently. "Go home before they miss you. And look for your bell."
*remember agathe At the siege, she dropped the knife. She told you about the bell that went missing from her peg.
*set rel_agathe +5
*goto knife_after

*label knife_after
*page_break
The Angelus rings at six.

From every church tower in the east end, all at once, the old morning bell, three and three and three and nine, across the snow, and outside Saint-Jude the handbells stop. Just like that. Thirty hunters lower their bells and turn and walk away down the street in the grey light, toward their cars and the métro and their prayers, because it's in their rule, and they've never once in fifty-nine years not done what the rule says.

In the church, nobody moves for a long time.
*if manon_cut
  Kim and Sandrine have Manon on a pew under a blanket. She's stopped asking questions. She's just sitting there, holding a cup of coffee she doesn't drink, looking at the stained-glass window of Saint Jude with the wolf at his feet, with a small polite frown, the way you'd look at a painting in a stranger's house.

  Dario is sitting on the altar step with his head in his hands.

  "She'll remember her mother," Sandrine says to you quietly. "And her sisters. The convent. Her twenty-two years. Everything up to 2016." She swallows. "Not us. Not one of us. Not him." She looks at Dario. "He found her, you know. Seven years ago. He heard her turn, from across the city, and came with a blanket."

  You go and sit on the altar step next to him. He doesn't look up.

  "She held my head," he says, into his hands. "Every time. Every time I came back from a roof in Rosemont with a knife wound and a broken heart, she held my head and didn't ask." A long, shaking breath. "She's going to go back to her mother's house in Hochelaga now. And she's going to wonder, the rest of her life, why she keeps setting a place for somebody on Sundays."
*else
  Manon is asleep on a pew under three blankets with her head in Kim's lap and her strapped shoulder rising and falling. Luc is asleep on the floor beside her, curled up like the wolf he isn't right now. Johnny Tabarnak has fallen asleep sitting up on the altar with the wooden spoon still across his knees.

  Dario is walking round his church in the grey light, touching things. The pews. The Stations. The karaoke machine, which he rights, very gently, like a man helping up a drunk friend. When he gets to you, he doesn't say anything. He puts his forehead against yours, and stays there, breathing.

  "Everybody," he says, at last. "Everybody's still here. Everybody still knows their own name." His hands are on the back of your neck. "Because of you, Lacroix."

*page_break
Réjean finds the body at seven.

He comes back in from the yard, where he went to have a cigarette and look at the damage, and he stands in the broken side door with his face the colour of the snow.

"Dario," he says. "Out back. Behind the rectory. You better come."

It's the young hunter. The one with the soft moustache, nineteen at most, who went down under a grey wolf by the confessionals in the fight. He's lying in the snow behind the rectory, where nobody went in the fight, on his back with his arms flung out, and his eyes open, looking at the sky.

There's a bruise on his left temple the exact shape of the lip of a bell.

And clenched in his right fist, grey wolf hair.

*page_break
The silence goes on. Dario kneels down in the snow beside the boy. He doesn't touch him.

"That's not us," says Réjean, behind you, hoarse. "Dario. That's not us. The one that got him in the church, that was Sandrine's cousin, and he only knocked him down. I saw the kid get up. I saw him run out the side with the others." He's pleading. "That's not us."

"I know," Dario says, very quietly. He's looking at the wolf hair. "Nobody here's got hair that colour. That's old. That's dead." He looks up at you. "Somebody followed them here, Lacroix. In the fight. Somebody waited behind the rectory for one of them to come round the corner on his own, and rang a bell on his head, and put this in his hand. So the Carillon find him and know we did it." His voice goes flat. "And they will. By noon every hunter in those towers'll know the pack murdered a nineteen-year-old boy behind a church."

*set olivier_dead true
In the boy's coat pocket, when Dario finally, gently, looks, there's a novice's missal with a name written in the front in careful blue ballpoint: [i]Frère Olivier Paré. La Persévérance. 2024.[/i]

*choice speak
  #"We take him to Aimé. Bélanger & Fils is neutral ground. And Aimé can find out who did this."
    *set rel_aime +5
    *set wits +2
    *set heard "aime"
    Dario looks up at you. "The ghoul?"

    "The undertaker. The Conductor sends him the Line's dead. The Carillon'll take their boy back from Bélanger & Fils without anyone having to fight about it." You look at the hair in Olivier's fist. "And if anyone can tell us who was behind this rectory at five in the morning, it's the man who can taste the last thing he saw."
  #"We call the Carillon. Now. Before they find him. We tell them the truth ourselves."
    *set rel_agathe +5
    *set nerve +2
    *set heard "call"
    Dario stares at you. "They'll never believe us."
    *if manon_safe and (knife != "grab")
      "Agathe might," you say. "She saw the pack not cut her tonight. She knows about her bell." You get out your phone. You don't have her number. "Give me Lazare's."

      It rings out. You leave a message, low, steady. You say where. You say what's in his fist. You say: tell Agathe. And then you ring Aimé anyway, because somebody has to take care of the boy.
    *else
      "Then we tell them anyway, so it's on the record that we did." You get out your phone. It rings out. You leave a message for Lazare, low, steady. You say where. You say what's in his fist. And then you ring Aimé, because somebody has to take care of the boy.
    *set heard "aime"
  #Close his eyes. Then decide.
    *set rel_dario +5
    *set guarded %-5
    *set heard "aime"
    You kneel down in the snow on the other side of the boy from Dario, and reach out, and close his eyes, one and then the other, the way you saw the nurses do for your mother.

    Dario watches you do it. Something in his face shifts. "Nobody does that for them," he says. "The Carillon. When one of ours dies, they just... leave us." He looks at Olivier for a long time. "Aimé," he says. "Aimé'll take care of him. Aimé takes care of everybody."

*page_break
Aimé Bélanger comes for Brother Olivier at nine in the morning, in the hearse, in a black suit and a black tie with his glasses on and his hair combed wet, because, he explains, you dress properly for a pickup, whoever it is.

He's very gentle with the boy. He and Dario lift him onto the stretcher together, and Aimé covers him with a white sheet and tucks it round him like a blanket, and says something in Latin under his breath. And then he looks at you over the stretcher with his face grey.

"You want me to taste him," he says. "Don't you."

*choice speak
  #"Only if you want to. You don't have to. Not for me."
    *set rel_aime +10
    *set guarded %-5
    Aimé studies you.

    "Nobody ever says that," he says. "That I don't have to." He looks down at the sheet. "I want to. For him. Somebody should know what happened to him, and it should be somebody who'll say it right." He swallows. "At the home. Properly. Not in a yard."
  #"Yes. Please. Someone did this to frame the pack, and he saw who."
    *set rel_aime +3
    *set rel_dario +5
    "Okay," says Aimé. "Okay." He pushes his glasses up. "At the home. Properly. Not in a yard."
  *if (favor_aime) #"You owe me one, Aimé. I'm calling it in. For the pack."
    *set favor_aime false
    *set rel_aime -5
    *set rel_dario +10
    Aimé flinches, very slightly. Then he nods. "Fair," he says. "A favor's a favor." He pushes his glasses up, not looking at you. "At the home. Properly."

    Dario looks at you, surprised, and then at Aimé, and puts a hand on his shoulder, briefly, hard. "Thanks, ghoul," he says. "I owe you now. That's how it goes."

*page_break
You follow the hearse to Verdun in the tow truck.

In the prep room at Bélanger & Fils, under the big round lamp, Aimé turns his back on you and Dario to do it, the way he always does, so you won't have to see. He murmurs the Latin. It takes a long time. When he turns round he's wiping his mouth with a folded white handkerchief, and his eyes are wet behind his glasses, and he has to sit down on the stool by the sink.

"He was running," he says. "Round the back of the rectory, to get away from the fight. He was frightened. He was thinking about his mother, a bit. He didn't remember her face." Aimé folds the handkerchief. "And then cold hands. On his face. Holding him very gently, from behind. A bell, very close to his ear. And a wrist, in front of his eyes: pale, pale skin, with plastic bracelets stacked up it. Pony beads. Pink and green and yellow." He swallows. "And a voice. Soft. An accent, not from here. [i]Sorry, love.[/i]"

Dario goes completely still beside you.

"And one more thing," says Aimé. "Under everything. A smell, on the hands. Not blood. Cedar, and old fur, and cold stone. Like a cellar. Like a closet full of fur coats that nobody's worn in a hundred years."
*clue c_furs_taste
*if not(aime_tasted)
  *set aime_tasted true
*remember aime He tasted Brother Olivier for the pack, and gave you the beads and the furs.

*page_break
You sleep for three hours on a pew at Saint-Jude, under Dario's parka, which smells of him and motor oil and cold air, and wake at two in the afternoon to the sound of somebody hammering.

It's Big Réjean, trying to rehang the side door with a hammer, a mouthful of nails and absolutely no idea.

The church in daylight is a wreck, and it's also full of people. The pack came back. The ones who were out, the ones who work days: two bus drivers, a woman who teaches yoga, a man from the STM who fixes escalators. They're sweeping up glass and righting pews and restringing the Christmas lights round the Stations of the Cross, and someone has started a pot of coffee the size of a bucket, and someone else is making eggs.

You've got an afternoon. You can do one thing properly.

*choice
  #Fix the side door. Properly. Réjean's going to hurt himself.
    *set hands +3
    *set rel_dario +5
    You take the hammer out of Réjean's hand, very gently, the way you'd take a gun off a toddler. You rehang the side door. Then you take the crap aluminium fire door off entirely and go down to the crypt and bring up the old iron door from the coal tunnel, the one from 1961 with [i]DÉFENSE D'ENTRER[/i] on it, and hang [i]that[/i] instead, on new pins, with a proper lock from the hardware store on Jean-Talon.

    It takes you four hours. When you're done, Dario comes and stands in front of it with his arms folded and looks at it for a long time.

    "That's the best door I've ever had," he says. "That's the only good door I've ever had." He looks at you. "You put a door on my church, Lacroix."
    *remember dario You hung the old iron door from the coal tunnel on his church, with a lock that works.
  #Sit with Manon. Or with what's left of her.
    *set rel_manon +10
    *set guarded %-5
    *goto afternoon_manon
  #Find Luc. The kid thinks tonight was his fault.
    *set rel_manon +5
    *set charm +3
    *set luc_friend true
    You find him up in the empty belfry where Dario took you on Sunday, sitting in one of the arches with his legs over the drop and his hood up.

    "They came for me," he says, without turning round. "All of it. Manon. The kid behind the rectory. It's because of me. Because I was on the Main at the Thaw and everybody filmed me."

    You sit down in the next arch, which is a very bad idea at your age, and hang your legs over too.

    "They came because an old man in a tower needed a war," you say. "You were just the name he picked. If it hadn't been you, it'd have been Réjean, or Johnny, or me." You look at him. "You know what you did tonight? You stayed. You were scared out of your mind, and you stayed with your pack. That's the whole job. That's all it is."

    Luc doesn't say anything for a long time. Then he takes his hood down. "Can you teach me to pick a lock?" he says. "Like, for real?"

    You spend the next two hours on the belfry floor with your practice lock and your picks. He's terrible. He's delighted.
    *remember manon You taught Luc to pick a lock in the belfry, the afternoon after the siege.
*goto afternoon_end

*label afternoon_manon
*if manon_cut
  Manon's in the sacristy kitchen, at the table, with a cup of tea going cold in front of her, and her coat on. Kim's going to drive her to her mother's in Hochelaga at four. She looks up at you politely, the way you'd look up at a waiter.

  "Hello," she says. "I'm sorry. Everyone keeps telling me I know them. I'm afraid I don't."

  You sit down across from her.

  *choice speak
    #"You don't have to remember. I'll tell you one thing about yourself, though, and then you can go."
      *set rel_manon +5
      "All right," says Manon, carefully.

      "Last night you put yourself between a knife and a seventeen-year-old boy you'd have told me you barely knew. You said, [i]take me instead[/i]." You look at her. "That's who you are. Whatever you remember or don't. That's all."

      She studies her tea. "I was a Sister of Providence for twenty-two years," she says, slowly. "I taught grade three." She lifts her eyes to you. "That sounds like something I'd do."
    #Ask her about the convent. Let her talk about the things she still has.
      *set wits +2
      She talks. About Hochelaga, and the grade threes, and a girl called Josianne who could never tell her b from her d, and the Tuesday in March she walked out in her habit and took the 18 bus. It's all there, up to 2016, clear and bright. And then nothing. She stops, frowning, like a woman who's walked into a room and forgotten why.

      "I'm sorry," she says. "There's something after that. Isn't there? Something big." She touches the cut on her cheek, taped now. "I feel like I've mislaid a whole house."
    #Don't say anything. Just sit with her until Kim comes.
      *set guarded %+5
      You sit with her. After a while, without seeming to know she's doing it, she reaches across the table and straightens your collar, the way she'd straighten a child's before school, and then looks at her own hand, puzzled.

  At four Kim comes, and Manon puts her cup in the sink and rinses it, and dries it, and puts it back on the exact hook where it lives, without looking. Then she stops, and stares at the hook. Then she goes.
  *remember manon The afternoon after, she hung her cup on its hook without knowing how she knew where it went.
*else
  Manon's in the sacristy kitchen at the table, with her arm in a sling and a cup of tea, doing the crossword in yesterday's [i]Journal de Montréal[/i] with her left hand, badly.

  "Seven letters," she says, without looking up, as you sit down. "Patron saint of lost causes."

  "You're joking."

  "I never joke about crosswords." She fills it in: J, U, D, E, and then stops. "It doesn't fit. It's only four." She frowns at it. "The paper's wrong. The paper's always wrong."

  *choice speak
    #"Thank you. For last night. For putting yourself in front of Luc."
      *set rel_manon +5
      *set guarded %-5
      Manon looks at you over her reading glasses.

      "I was a Sister of Providence for twenty-two years," she says. "You learn one thing, if you learn anything. You stand in front of the children." She goes back to the crossword. "Nobody thanks you. It isn't that kind of job."
    #"How long have you known about him and Lazare?"
      *set wits +2
      *set rel_manon +3
      "Seven years," says Manon, without hesitation. "I found them on the roof of the Rosemont Loblaws in 2019 with their shirts off, trying to kill each other, and not very hard." She fills in a word. "I've been praying for them ever since. I'm not sure who to. The prayers go somewhere. That's the main thing."
    #"Is Dario going to be all right?"
      *set rel_manon +5
      *set rel_dario +3
      Manon puts down her pencil.

      "He's been in two places for twelve years," she says. "Half of him on rue Jarry, waiting on a step. Half of him here, holding us together with duct tape and lasagna." She looks at you. "He'll be all right when he's in one place. I don't know if that place exists yet." A pause. "You might be helping to build it. I haven't decided."
  *remember manon The afternoon after the siege, she did the crossword with her left hand and told you about the roof in Rosemont.

*label afternoon_end
*page_break
At seven o'clock, your phone goes.

*if (rel_lazare >= 30) or n4_told_lazare
  *set lazare_inside true
  It's Lazare.

  *text lazare I'm all right.
  *text lazare I asked him. He said yes. He said all of it. He cried. I didn't.
  *text lazare He's calling me his guest. There's a hunter outside my door.
  *text lazare I said my name to him. Out loud. Lorenzo. He flinched like I'd hit him.
  *text lazare Agathe says a boy died behind Saint-Jude this morning and they're saying it was the pack.
  *text lazare Tell Dario it wasn't. I know it wasn't. I'll tell them.
  *choice
    #"We know who it was. Pony beads. An accent. Stay alive. We're coming for you."
      *set rel_lazare +10
      *text me It wasn't the pack. Aimé tasted him. Pony bracelets, an accent, "sorry love." Stay alive. We're coming for you.
      *text lazare …
      *text lazare don't. they'll ring the great bell over whoever tries
      *text lazare but thank you
    #"Dario wants to know if you're okay. He won't ask."
      *set rel_lazare +5
      *set rel_dario +5
      *text me Dario wants to know if you're okay. He won't ask.
      *text lazare Tell him I said my name.
      *text lazare He'll know what that means.
    #"Say it again. Your name. To me."
      *set rel_lazare +5
      *set des_lazare +5
      *text me Say it again. To me.
      *text lazare Lorenzo.
      *text lazare Enzo.
      *text lazare It sounds like somebody else. It sounds like me.
  You show Dario. He reads it standing up, by the altar, and then sits down on the step, very suddenly, as if his legs have gone.

  "He said his name," he says. "To the old man. To his face." He laughs, and it cracks. "Twelve years. [i]Twelve years[/i], and he goes and says it on a Tuesday while I'm on the other side of the city fixing a door."
*else
  *set lazare_rehushed true
  It's a number you don't know.

  *text unknown This is Agathe. Lazare's partner. I got your number off the Line.
  *text unknown I'm sorry. I thought someone should tell you both and I can't tell Dario Santangelo anything, he'd rip my throat out and he'd be right.
  *text unknown The Bourdon rang the great bell over Lazare at dawn. Jean-Baptiste. The big one.
  *text unknown He asked to forget. Or he was made to. I don't know which. I wasn't there.
  *text unknown He came down to breakfast and said good morning to me like it was any day. He doesn't remember Monday. He doesn't remember the Thaw. He doesn't remember his mother.
  *text unknown He doesn't remember Dario.
  You show Dario. You have to. He reads it standing up, by the altar.

  He doesn't say anything. He puts the phone down very carefully on the altar, next to the lasagna pan full of salt. And then he walks out of the church, into the snow, in his T-shirt, and doesn't come back for an hour.

  When you find him, he's sitting in the tow truck in the lot with the engine off and the windows fogged, with his toque in his hands.

  "Again," he says, when you get in. "They did it again. I had him for one hour. One hour, Monday night, on the Main, in the snow. He looked at me and knew me." He turns the toque round and round. "Twelve years for one hour."
  *choice speak
    #"We'll get him back. The Hush let go of him once. It can let go again."
      *set rel_dario +10
      *set nerve +2
      "How?" says Dario, not looking at you.

      "I don't know yet. I open things. I'll find the way in." You put your hand on the toque in his hands. "Nobody gets unmade on my watch twice."
    #Don't say anything. Take his hand.
      *set rel_dario +5
      *set des_dario +5
      You take his hand. It's freezing. You hold it until it isn't.
    #"Tell me about him. The kid. Enzo. Before."
      *set rel_dario +10
      *set guarded %-5
      Dario looks at you. And then he tells you: about the flashlight, and the system, two flashes for [i]come out[/i], three for [i]my dad's home[/i]. About the cannoli. About the shovel, and the blood on the snow, and crying harder than Enzo did. About a boy who wanted to be a priest, and a boy who wanted to be Céline Dion, and practised in the lane with a hairbrush, and didn't care who saw. He talks for an hour. You listen to all of it.
  *remember dario The day they rang the great bell over Lazare again, you sat with him in the truck.

*page_break
The Missing Line opens after the last métro.

The council's in the old interchange at the centre of it, the station that would have been called Berri-UQAM Ligne 3 if the line had ever been built: a great vaulted hall of green tile under the city, with dead escalators going up into the dark and the Conductor's lamps hung from the ceiling on chains. The stalls have been pushed back against the walls. In the middle of the hall there's a long table made of métro benches, and round it, on folding chairs, the Veillée's powers.

The Conductor at the head of the table, in his porter's cap, with his ledger open in front of him and a pen in his hand.

The Club: Honora Strachan in her bottle-green gown, small and upright and smiling, with a glass of something dark at her elbow. And at her right side, lounging, with his bleached hair and his leather jacket and his stacked bracelets, Ruari.

The Buanderie: Gisèle Pépin, eighty-six, in a purple parka and a plastic rain bonnet, smoking a du Maurier under the NO SMOKING sign with enormous satisfaction.

Aimé, at the end, in his black suit, because the Line's dead are his business.

And the pack. Dario, in a clean shirt and his toque, with Réjean at his shoulder and you at his other.
*if manon_safe
  And Manon, with her arm in a sling, who wasn't going to be left at home, thank you very much.
The Carillon's chair is empty. Somebody's put a handbell on it, upside down.

*page_break
*portrait honora smirk
"The Carillon has declared war on the Sept-Ans," the Conductor says. His voice carries without effort, the voice of a man who called stations on the Montreal–Chicago sleeper for thirty years. "The Carillon has withdrawn from the Accord's protection. The Carillon isn't here." He glances at the empty chair. "This table will hear what the Veillée wants to do about it."

"May I?" says Honora, and doesn't wait.

She stands. She's so small that standing barely changes her height at the table. She smiles round at everyone with great warmth.

"The Club has always stood for order," she says. "For the peace. The Accord. But the Carillon have broken it. They've gone to war against people who've done nothing but live quietly in a church in Saint-Léonard and sing Céline Dion." A ripple of laughter. "And now a boy is dead. One of their own. Behind that church. With wolf hair in his hand." She turns her pale eyes on Dario, full of sympathy. "Now, I don't believe for a moment that the pack killed him. But the Carillon will. And they'll come again tomorrow night, with twice the iron."

"So," says Honora. "The Club offers its protection. To the Sept-Ans. Iron, from our cellars. Lawyers, if it comes to that. Money. Our name. And on Saturday, when the Hush must be closed or lost, the pack stands with the Club at the fort. Not against the Carillon. Just... between. Keeping the peace." She spreads her small cold hands. "And the pack's grievance against the Carillon, and against the man who took Mr. Santangelo's childhood friend from his bed, becomes the Club's grievance too. I'll see that the Bourdon answers for it. Personally."

She sits down. Ruari, at her right hand, yawns.

*page_break
Dario looks at you.

*if lazare_rehushed
  You can see it in his face: she's offering him the Bourdon. She's offering him the man who rang the great bell over Enzo this morning. He wants it so badly he's shaking.
*elseif manon_cut
  You can see it in his face: she's offering him the people who cut Manon. He wants it so badly he's shaking.
*else
  You can see it in his face: she's offering him the towers, and the old man in them, and a war he could win. He wants it. He knows he shouldn't. He's looking at you to tell him which.

The whole table is watching. Ruari has stopped yawning. At his wrists, the pony beads catch the lamplight: pink and green and yellow.

*choice
  *if (ded_planted or c_furs_taste or c_pelt_room) #Stand up. "Before the pack answers, there's something the table should hear about that boy."
    *goto expose
  #"The pack doesn't need the Club. It needs the Carillon to stop, and that's not the same thing." Refuse, politely.
    *set honora_alliance "refused"
    *set rel_honora -10
    *set rel_dario +5
    *goto council_refuse
  #Lean in. "Take it," you murmur to Dario. "We need the iron. We need the lawyers. We can decide who we owe on Saturday."
    *set honora_alliance "accepted"
    *set rel_honora +10
    *set rel_dario +3
    *set wits +2
    *goto council_accept
  #Say nothing. It's his pack. Let him choose.
    *set guarded %+10
    *goto council_silent

*label expose
*page_break
You stand up.

It's a long way up, in a room like that. Every face turns to you: the Conductor's, calm and interested; Gisèle's, through her cigarette smoke, with one pencilled eyebrow lifting; Aimé's, going white. Honora's, pleasant and attentive and entirely still.

"The boy behind the church," you say. "His name was Olivier Paré. He was nineteen. He was a novice of La Persévérance." You look round the table. "He had a bell bruise on his temple, and wolf hair in his fist, and so did Mireille Caron, and so did Guy Hébert. And that wolf hair's dead. It's old. It didn't come off anybody alive."
*if c_pelt_room
  "It came off a pelt," you say. "A grey wolf pelt, hanging on a wall with the furs, in the trophy room of a house on the mountain. With squares cut out of it. I've seen it." You don't look at Honora. You don't need to; the whole table does it for you.
*elseif c_pelt
  "It came off a pelt," you say. "A skin. Dario held it to the light on Sunday and it broke like straw. Somebody in this city's got a dead wolf on their wall, and a pair of scissors."
And then, because you have it, you say the rest. "Aimé tasted Olivier this morning. At his family's home. Tell them what he saw last, Aimé."

Aimé stands. His hands are shaking so badly he has to hold the back of his chair. But his voice is steady.

"Cold hands," he says. "A bell. A pale wrist in front of his eyes, with plastic bracelets stacked on it. Pony beads, pink and green and yellow. And a voice, soft, with an accent that isn't from here, saying [i]sorry, love.[/i]" He swallows. "And the smell of a cellar. Cedar, and fur, and cold stone."

Every head at the table turns, slowly, to Ruari.

*page_break
Ruari Strachan has gone very still. His hands are flat on the métro bench in front of him. His bracelets are very bright under the lamps.

*if (charm >= 50) or (lore >= 40) or (wits >= 55)
  *set convince true
*if convince
  *if (charm >= 50)
    You don't raise your voice. You don't need to; you've been talking people into opening doors since you were nineteen. "Nobody at this table has to say anything tonight," you say. "Nobody's accusing anybody. I'm just telling you what the dead saw. You can all decide for yourselves what it means." You sit down. "I know I have."
  *elseif (lore >= 40)
    "Article nine of the Accord," you say. "I've been reading. [i]Any party that sheds blood under colour of another shall answer to the table as if it had shed that blood in its own name.[/i]" You look at the Conductor. "Somebody put a Carillon bell and a wolf's hair on three dead people. Whoever it was, the Accord says they answer as themselves. Not as the pack."

    The Conductor looks at you for a long moment, and very slowly writes something in his ledger.
  *else
    "Three bodies," you say. "Every one on neutral ground or near it. Every one with one sign from each side, the bell and the hair, like a signature on a bad cheque. And the only people who win if the pack and the Carillon destroy each other are the people who need a war to justify what they're going to do at the fort on Saturday." You don't look at Honora. "I'm a locksmith. I look at how things are put together. This was put together."
  *set honora_alliance "exposed"
  *set rel_honora -20
  *set rel_dario +15
  *set rel_clarke +10
  *set rel_aime +10
  *set charm +2
  *goto exposed
*else
  You've said it. You watch it go round the table, and you watch it not quite land. It's a ghoul's word, and a locksmith's, and a smell of fur. Gisèle is looking at Ruari through her smoke with her eyes narrowed. The Conductor's pen has stopped moving. But nobody says anything, and Honora's smile doesn't move by a millimetre.

  "What a dreadful story," she says gently. "Poor boy. Ruari, you were at the Club all last night, weren't you, dear? With me."

  "All night," says Ruari. His voice is steady. His eyes aren't.

  "There we are." Honora turns to Dario. "The Club's offer stands, Mr. Santangelo. I don't hold it against the pack that its friends are overwrought." She glances at you, kindly. "It's been a very long week for Mr. Lacroix."
  *set honora_alliance "refused"
  *set rel_honora -10
  *set rel_dario +10
  *set rel_aime +5
  Dario stands up.

  "No," he says. "Thank you. The pack doesn't need the Club." He looks at Ruari, just once, a long look, a wolf's look. "The pack's got a good nose, though. We'll remember what we smell."
  *goto council_end

*label exposed
*page_break
Honora doesn't blink.

That's the frightening thing. Everyone else at the table moves: Gisèle stubs out her cigarette on the bench; the Conductor closes his ledger on his pen; Réjean growls; Aimé sits down very suddenly as if his legs have gone. Honora doesn't move at all. She sits in her bottle-green gown with her small hands folded, and looks at you with her pale, pleasant, attentive eyes, the way she looked at you over the cheese on Sunday.

"How very clever of you," she says. "Your grandfather was clever too, in his way."

Then she stands.

"Ruari," she says. "Come along. I don't think the Club is welcome at this table tonight." She pulls on her gloves, finger by finger. "The offer is withdrawn, of course. Mr. Santangelo, I'm sorry for your trouble. Mr. Lacroix." She inclines her head to you, a small precise bow, like a woman at a ball. "We'll see each other on Saturday. You'll be closing the lock, after all. Whatever else happens. You're the only man who can."
*if honora_contract
  "And you did give me your word, at my own table," she adds, pleasantly. "I haven't forgotten. I never do."

Ruari gets up to follow her. As he passes behind your chair, very close, he leans down, and you smell the cedar and the fur on him, and the cold.

"You should've let me drink more, the other night," he says, very softly, into your ear, in his Scottish vowels. And then, even softer, so that nobody else hears it, and you'll never be sure afterward that you did either: "[i]Sorry, love.[/i]"

They go up the dead escalator into the dark, the small woman in green and the boy with the bracelets, and the whole Missing Line watches them go.
*remember honora At the war council, you told the Line what the dead saw. She pulled on her gloves and said: Saturday.
*remember dario At the war council on the Line, you stood up and made the whole Veillée look at Ruari.
*goto council_end

*label council_refuse
*page_break
"The pack doesn't need the Club," you say. "With respect, madame. It needs the Carillon to stop. That's not the same thing."

Honora smiles at you. "Isn't it?"

"No. One's peace. The other one's a bigger war with better lawyers."

Gisèle Pépin laughs out loud through her cigarette smoke, a bark like a seal. Down the table, the Conductor's mouth twitches.

Dario looks at you, and then at Honora, and stands. "What he said," he says. "Thank you. The pack'll look after itself."

"Of course." Honora inclines her head. "The offer stands until Saturday, Mr. Santangelo. You'll find the Club is patient." Her eyes move to you, pleasant and pale. "And Mr. Lacroix. Saturday."
*goto council_end

*label council_accept
*page_break
"Take it," you murmur, close to Dario's ear. "We need the iron. We need the lawyers. They'll come back tomorrow night with twice as many. We can decide who we owe on Saturday."

Dario looks at you for a long moment. You can see him not liking it. You can see him needing it.

"The pack accepts," he says to the table. His voice is rough.

Honora smiles, and it goes all the way up this time. "Wonderful," she says. "Ruari, dear, see that the Sept-Ans have what they need from the cellars tonight." She raises her glass of something dark. "To the pack. And to peace."

Ruari lifts his glass too, lazily, and looks at Dario over it, and smiles. His bracelets clink against the crystal.

On the other side of the table, Gisèle Pépin stubs out her cigarette and doesn't raise anything.
*remember honora At the war council, the pack took her iron, on your advice.
*goto council_end

*label council_silent
*page_break
You don't say anything. It's his pack. You sit beside him with your hands in your lap and let him feel you there.

Dario looks at Honora for a long time. At Ruari, lounging at her right hand. At the empty chair with the upside-down handbell.

"No," he says finally. "Thank you, madame. The pack's been looking after itself since 1967. We'll manage until Saturday."

"Of course," says Honora. "The offer stands." And to you, pleasantly: "Mr. Lacroix. Saturday."
*set honora_alliance "refused"
*goto council_end

*label council_end
*page_break
*portrait gisele smirk
After, in the emptying hall, Gisèle Pépin catches your sleeve with a hand like a bundle of twigs.

"You," she says. She looks you up and down through her cat's-eye glasses. "Aurèle's grandson. You've got his chin. Unfortunately."

"Madame Pépin."

"Don't madame me, I'm not dead." She takes a drag on her du Maurier and blows the smoke over your shoulder, at the NO SMOKING sign. "Your hunter's in the tower. The pretty one with the curls."
*if lazare_rehushed
  "And they rang the big bell over him, the idiots, the whole thing, fifty-nine years of it, and now he doesn't know his own name." She taps ash on the tiles. "The Hush is half dead. It can be undone. One more time. By someone who knows his name and says it to him where the bell can hear." She looks at Dario, across the hall. "That one knows his name."
*else
  "And the old man's got a hunter outside his door and a bell ready, and he'll ring it the minute your hunter says the wrong thing." She taps ash on the tiles. "Nobody's getting up those stairs. Not with the whole Carillon at war on them."
"You want into those towers," says Gisèle, "you don't go up the stairs. You come in from the top." She drops the cigarette and grinds it out under a purple snow boot. "Come to the laundromat tomorrow. Pointe-Saint-Charles. After supper." And then, as she turns away: "And bring the wolf. I'll need somebody to paddle. Tell him if he swears in my canoe, I'll drop him in the river."
*codex chasse_galerie

*page_break
It's five in the morning when you get back to Saint-Jude, and the pack is on the roof.

All of them. Up the belfry stairs and out through the arches onto the flat roof of the nave, in the snow, in the dark, twenty people, most of them still people, some of them not. Somebody's brought up a speaker. Somebody's brought up the coffee. And as you come out through the arch after Dario, Big Réjean lifts his head at the sky, where the clouds are breaking up over Saint-Léonard and there are stars, real ones, a few, and howls.

The whole pack takes it up.

It isn't sad. That's what you don't expect. It's loud, and ragged, and joyful, twenty voices going up into the dark over the roofs, and down in the street a dog answers, and then another, and then every dog in Saint-Léonard, and lights come on in kitchens, and a nonna in a hairnet leans out of a window across the street and shouts at them in Italian, and the pack howls louder.
*if manon_cut
  It's for Manon, Johnny Tabarnak tells you, quietly, between breaths. For the ones who were cut. So they'll hear it, wherever they are, and not know why they're crying.
*else
  It's for Olivier, Johnny Tabarnak tells you, quietly, between breaths. The boy behind the rectory. For the ones who die alone. So they'll hear it, wherever they are.

Dario is standing at the edge of the roof with his head back and his eyes shut and his whole chest going, and when he stops, he turns and looks at you in the dark, and his eyes are gold.

*choice
  #Howl. You're not a wolf. Do it anyway.
    *set n5_roof "howled"
    *set rel_dario +10
    *set des_dario +5
    *set nerve +2
    *set guarded %-10
    You put your head back and howl.

    It's terrible. It's a human noise, cracked and tuneless and far too high, like a teenager doing an impression of a wolf at a sleepover. The pack stops dead. Twenty heads turn. And then Johnny Tabarnak cracks up, and Réjean cracks up, and the howl that goes up next is half laughter, and they pull you into it, and Dario grabs you round the neck and howls right next to your ear, and you're both howling, badly, into the dark, over Saint-Léonard, until your voice is gone.
    *remember dario You howled with the pack on the roof of Saint-Jude. Badly. They let you.
  #Stand beside Dario at the edge. Put your hand on his back while he howls.
    *set n5_roof "beside"
    *set rel_dario +5
    *set des_dario +10
    You stand beside him at the edge of the roof and put your hand flat on his back, between his shoulder blades, and feel the howl go through him when he lifts his head again: the whole enormous sound of it, rumbling in his ribs under your palm like an engine.
  #Stay by the arch. Watch them. This is theirs.
    *set n5_roof "watched"
    *set rel_manon +5
    *set guarded %+5
    You stay by the arch, in the lee, out of the wind, and watch them: twenty damned people on a church roof in the snow, howling for their dead at the stars. You don't join in. You don't need to. It's enough to see it.

*page_break
*portrait dario smile
Afterward, when the pack's gone down one by one to sleep in the pews, Dario doesn't. He sits down on the cold roof with his back against the belfry and his knees up, and after a moment you sit down next to him.

The sky's going grey over the east end. Somewhere a snowplough's scraping.

"Why'd you come with me?" he says. Not looking at you. "Monday. At the Thaw. You could've gone with him. He needed you more. He was walking into that tower in his shirt." He picks at a thread on his knee. "I keep thinking about it. You picked the truck."

*choice speak
  #"Because you were the one being left behind. Again. I wasn't going to be one more person who did that."
    *set rel_dario +10
    *set des_dario +5
    *set guarded %-5
    He goes still. Then he turns his head and looks at you for a long time in the grey light.

    "Twelve years," he says, hoarse, "of being the one on the step." He swallows. "Nobody ever picked the step."
  #"Because your pack needed hands. And I've got good hands."
    *set rel_dario +5
    *set des_dario +5
    *set wry %+5
    He snorts. "You do have good hands," he says. "I noticed. The whole pack noticed. Sandrine wants to adopt you." A pause. "That's not why, though, is it."

    "No."

    "Didn't think so."
  #"Because I wanted to be where you were."
    *set des_dario +15
    *set rel_dario +5
    *set reckless %+5
    Dario turns and looks at you. You watch it land. You watch him not know what to do with it, for once: the loudest man in Montréal, silent on a church roof with his mouth a little open.

    "Oh," he says. And then, rough: "Okay. Okay. That's... okay."
  #"I don't know. I'm still working it out."
    *set rel_dario +5
    *set guarded %+5
    "That's honest," says Dario. "I like honest. I'm surrounded by liars. Most of them are me." He bumps your shoulder with his.

*page_break
"And him," Dario says, after a while. "Enzo. I'm not... I don't want you thinking I'm..." He stops. Starts again. "I've been in love with him since I was nine. I'm always gonna be. That's not a thing I can put down." He looks at his hands. "And you walked in on Friday in that stupid van, and now there's two of you in my head, and I don't know what that makes me. Except greedy."

*choice speak
  *if (three_kiss or ((des_lazare >= 25) and (des_dario >= 25))) #"It doesn't have to be one or the other. It wasn't, in the coat room."
    *set rel_dario +10
    *set des_dario +5
    *set throuple_ready true
    Dario's head comes up. He stares at you.

    "You mean that," he says slowly.

    "I don't know what it means yet. But I'm not asking you to put him down. I'd never ask you that."

    He looks at you for a long moment. Then he laughs, low, disbelieving, and puts his face in his hands, and then takes them away. "[i]Madonna.[/i] He's going to kill us both," he says. "When he remembers. He's going to kill us both, and it's going to be the best day of my life."
    *remember dario On the roof of Saint-Jude, you told him it didn't have to be one or the other.
  #"I'm not asking you to put him down. I'm just asking if there's room."
    *set rel_dario +10
    *set des_dario +5
    "Room," says Dario. He looks at you. "Lacroix. I've got a church." And then, softer: "Yeah. There's room."
  #"Then tell me to go. I will."
    *set rel_dario +5
    *set guarded %+5
    "Don't," says Dario, instantly, and then looks surprised at himself. "Don't. I'm not telling you that. I'm not ever telling you that." He rubs his face. "I just wanted you to know what you were getting. Before."

    "Before what?"

    He doesn't answer. His ears have gone red.

*page_break
*if ((des_dario >= 45) and (kissed_dario or three_kiss))
  *goto roof_ask
*goto roof_sleep

*label roof_ask
He doesn't answer. He turns and looks at you in the grey light, and his eyes are still gold at the rims, and he says, very quietly, with none of the noise at all: "Come downstairs with me."

It isn't a joke. It isn't a line. You can hear what it costs him to say it plainly.

*choice
  #"Yes."
    *goto roof_yes
  #"Not tonight. But stay here with me till the sun's up."
    *set rel_dario +10
    *set guarded %+5
    He nods, and doesn't look disappointed, or if he is he hides it well. "Okay," he says. "Sun's up in forty minutes. I can do forty minutes." He puts his arm round you, and you lean into the heat of him, and you watch the sky go pink over the east end together in silence, and it's the best forty minutes of your week.
    *remember dario On the roof of Saint-Jude at dawn, he asked, and you asked him to wait. He did.
    *goto roof_end

*label roof_yes
*set slept_dario true
*set des_dario +15
*set rel_dario +10
*page_break
His room is above the sacristy, where the curé used to sleep: a narrow room with a slanted ceiling and a radiator that bangs, a double mattress on the floor under a crocheted afghan in orange and brown that belonged to his nonna, a crucifix with a tiny red toque on it, a tow-truck calendar, and a window full of grey sky over the roofs.
*if steam
  He shuts the door and stands with his back against it and looks at you, breathing hard, as if he's run up the stairs, which he did.

  "You can still say no," he says. "Anytime. I mean it. Say [i]stop[/i] and I'll stop. Even if I'm..." He makes a gesture at himself that takes in the eyes, the heat coming off him, whatever's pacing under his skin. "I'll stop."

  "I know," you say, and you pull his T-shirt over his head.

  He's big, and furred across the chest and down his belly, and scarred: a white starburst in his shoulder where a silver knife went through it on a roof in Rosemont seven years ago, a line across his ribs, a bite mark on his forearm from something bigger than a person. He's hot to the touch like a man with a fever. When you put your palm flat over his heart, it's going like a hammer, and he closes his eyes and leans into your hand like an animal being stroked, and makes a sound in his chest that's almost a growl and almost a laugh.

  Then his mouth is on yours, and it's nothing like the bell tower. The bell tower was a question. This is an answer. He kisses you like he's starving, like he's been starving for twelve years, hard and deep and messy, his beard scraping your jaw raw, his hands everywhere, in your hair, under your shirt, gripping your hips and pulling you against him so you can feel exactly how much he wants this. Your shirt goes somewhere. Your belt. His. You go down onto the mattress in a tangle, him on top of you, heavy as a truck and twice as warm, and his mouth is on your throat and his teeth are there, grazing, just the edge, and your whole body arches up off his nonna's afghan.

  *page_break
  He takes his time. That's the thing you don't expect: the loudest man in Montréal, and he's slow. He takes you apart piece by piece like one of your locks, listening for every sound you make, finding what makes you gasp and doing it again and again until you're shaking. His mouth goes down your chest, your stomach, and lower, and his beard is rough on the inside of your thighs, and his hands hold your hips down to the mattress, gently, completely, and you stop being able to think in words.

  When he finally moves up over you and into you, slow, careful, his forehead against yours and his gold eyes open and fixed on your face, you both stop breathing for a second. He's shaking with holding back. "Okay?" he says, rough, and you say yes, and yes, and [i]please[/i], and then he isn't holding back any more.

  It's loud. Of course it's loud. The radiator bangs and the mattress shifts across the floorboards and he's saying your name, and swearing in three languages, and at one point laughing, breathless, into your neck, because it's so good it's ridiculous. His hand finds yours on the afghan and laces your fingers together and pins them there. You come apart underneath him with his name in your mouth, and he follows you over a second later with his face buried in your shoulder and a sound that isn't quite human, and his teeth close on the muscle of your shoulder, not breaking the skin, just holding on, like a wolf holding on to something it isn't letting go.

  *page_break
  Afterward he lies on his back with you half on top of him, your head on his chest, his hand moving slowly up and down your spine, and the sky in the window is pink.

  "Downstairs," he says, eventually, to the ceiling, in a wrecked voice, "the whole pack heard that."

  "The whole of Saint-Léonard heard that."

  He laughs, a big helpless laugh that shakes the mattress and your head on his chest. "My nonna's crucifix is wearing a toque," he says. "She's looking right at us."

  "She'd have liked me. After ten years."

  "After ten years," he agrees. And then, quieter, his hand stopping on your back: "Stay. Sleep. I'll make eggs." A pause. "I make very good eggs."
*else
  He shuts the door and leans against it and looks at you. "You can still say no," he says. "Anytime. Say [i]stop[/i] and I'll stop."

  "I know," you say, and you pull his T-shirt over his head.

  What happens after is slow, and loud, and very warm. The radiator bangs. The mattress moves across the floor. He says your name, and swears in three languages, and at one point laughs into your neck because it's so good it's ridiculous. When the sky in the window goes pink you're lying with your head on his chest, and his hand is moving slowly up and down your back, and he's telling you the whole pack heard, and he doesn't care.

  "Stay," he says. "Sleep. I'll make eggs."
*remember dario At dawn after the war council, in the room above the sacristy. The radiator banged. He asked you to stay, and made eggs.
*goto roof_end

*label roof_sleep
He doesn't answer. He leans his head back against the belfry and closes his eyes, and after a while, you realise he's asleep, sitting up, in the snow, the way he must have slept on a thousand stakeouts on a thousand roofs.

You don't wake him. You take off your coat, and put it over him, and sit beside him with your shoulder against his until the sky goes pink over the east end, and the first bus goes by in the street below, and a nonna across the road opens her shutters and sees you, two men asleep on a church roof, and crosses herself, and then, after a moment, smiles.
*remember dario On the roof of Saint-Jude, at dawn, he fell asleep against your shoulder.

*label roof_end
*page_break
Your phone buzzes at seven, face down on the floor.

*if lazare_inside
  *text lazare The Bourdon's having the great bell rung tomorrow night. Jean-Baptiste. For me.
  *text lazare He says it's mercy. He says I'll be happier.
  *text lazare I don't want to forget again.
  *text lazare I don't want to forget him again.
*else
  *text unknown This is Agathe again.
  *text unknown He's asking about a scar on his chin. He doesn't know where it came from.
  *text unknown The Bourdon's going to have him rung again tomorrow night, to be sure. He says the Thaw left roots.
  *text unknown If you're going to do something, it has to be tomorrow.
*if (ded_planted or c_furs_taste) and (not(ded_ruari))
  Under the texts, there's a thought you can't put down: a pale wrist, pony beads, pink and green and yellow. You've seen those bracelets before. At a table on the Missing Line. At Honora's right hand.

*set hush 45
*page_break Night Six
*goto_scene night6b
`);
