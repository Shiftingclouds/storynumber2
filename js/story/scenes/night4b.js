NB.scene("night4b", String.raw`
*comment Night Four, part two: the dance, the Thaw, the split.
*label dance
*page_break
*set rose_lead 5
*temp round 1
The band starts again. Not the swing band, not the DJ: just the fiddler in the red sash, alone, playing a reel from before there were cities, and the whole room holds still to hear it.

Rose puts his gloved hand at the small of your back and takes your other hand in his, and the heat of him comes through the leather like a stove through an oven door. He smells of cloves and smoke and roses gone slightly over.

"One question per turn of the floor," he says. "I'll answer truly. And one step per turn. Let's see who's leading when the clock strikes." His red-coal eyes crease at the corners. "I've been dancing for two hundred and eighty-six years, locksmith. Try to keep up."

*label round
*page_break
*meter rose_lead 10 Who's leading|You lead|He leads
*if round = 1
  [b]11:48.[/b] The first turn. He moves like smoke moves: you don't see him go, he's just somewhere else, and you're somewhere else with him. The floor tilts.
*elseif round = 2
  [b]11:50.[/b] The second turn. The fiddle speeds up. The watching crowd is a blur of masks and candlelight. Somewhere in it are all the people you know.
*elseif round = 3
  [b]11:52.[/b] The turn. He draws you in, close, chest to chest, and you feel it: the pull backward, toward the wall, one step, two...
*elseif round = 4
  [b]11:55.[/b] The fourth turn. You're both breathing hard now. His glove is damp at your back. The candle flames all lean one way, as if in a wind nobody else can feel.
*else
  [b]11:58.[/b] The last turn. Every clock in the room is ticking in time with the fiddle. Two minutes to Lent.
*choice
  *selectable_if (nerve >= 40) #Lead. Take his weight, and turn him, hard.
    *set rose_lead -2
    *set nerve +2
    You plant your feet and take his weight, the whole dark elegant length of him, and turn him, and for a second he's the one going backward. The crowd makes a sound like a single held breath.

    "[i]Oh,[/i]" says Rose, delighted, right against your ear.
  #Try to lead. You don't really know how. Try anyway.
    *set rose_lead -1
    You try. You're not a dancer; you're a man from Verdun who sways at weddings. But you try, pushing where he pulls, and some of the time, just some of it, he goes where you send him.

    "Brave," he murmurs. "Clumsy. Brave."
  #Follow him. Let him take you wherever he likes.
    *set rose_lead +1
    *set des_rose +5
    *set charm +2
    You stop fighting it. You let him take you: across the floor and round and back, weightless, his hand at your back the only fixed point in the world, and it's the easiest thing you've ever done and the most dangerous.

    He's smiling. He's not smiling like a man who's winning. He's smiling like a man who's been given something.
  *selectable_if (guarded >= 55) #Refuse the step. Stop dead. Make him come to you.
    *set rose_lead -2
    *set rel_rose +5
    You stop. In the middle of the step. He goes on half a beat into nothing, and has to turn and come back to you.

    He looks at you, and the red at the back of his eyes flares up like a bellows on a coal, and he laughs out loud, a real laugh, and half the room turns to see why.

    "[i]No,[/i]" he says. "Oh, you lovely creature. You said no."
  *if ((gisele_tip) and (round = 3)) #Don't take the third step. Stop on two. Hold your ground, the way Rose Latulipe did.
    *set rose_lead -3
    *set lore +2
    *set rel_rose +10
    One step back. Two. And on the third, where he's pulling you, into his corner, you stop. You hold your ground on two with your weight low and your hand firm on his shoulder, and you don't go.

    He stops too. He has to. For a long second you're both perfectly still in the middle of the floor, his hand at your back, pulling, and you not moving.

    "Who told you that," Rose says softly. It isn't a question. "Gisèle Pépin. Of course." He's looking at you with something very like awe. "Nobody has done that to me since 1740."
  *selectable_if (charm >= 45) #Match him. Step for step, turn for turn, and smile at him while you do it.
    *set rose_lead -1
    *set des_rose +10
    *set charm +2
    You don't fight him and you don't follow him. You match him: step for step, turn for turn, mirror for mirror, and you smile at him the whole time like you've been dancing with devils all your life.

    He smiles back. It's the first time you've seen him look surprised.

*page_break
*meter rose_lead 10 Who's leading|You lead|He leads
"Your question," says Rose, turning you. "Ask."
*choice
  *hide_reuse #"Who signed the Accord of '67?"
    *set lore +3
    *set n4_rose_q +1
    *codex accord
    *codex compagnie
    *clue c_accord_signers
    "Three," Rose says. "Clément Ouimet: the Bourdon, twenty-two years old, a novice with a good heart and a terrible fear of the dark. Honora Strachan, for the Club. And Everett Clarke, who sold them the djinn and then couldn't bear to watch what he'd sold." He turns you under his arm. "I witnessed. My ink made it hold. They call themselves the Compagnie. They think it sounds holy."
  *hide_reuse #"Did my father really dance with you?"
    *set n4_rose_q +1
    *set wits +2
    "In 1998," says Rose. "Here. Badly." A small smile. "He wanted to know how to open the fort from the outside. How to get the djinn out without the Carillon knowing. I told him the truth: he couldn't. The lock was built to open only for a Lacroix hand, from the front, with the song, and the bells would know." He's quiet a moment. "He said he'd find another way. I believe he did. I believe it cost him everything he was."
  *hide_reuse #"Who's killing the unmade?"
    *set n4_rose_q +1
    "I don't know," says Rose. "I can't lie, so I won't guess." His hand tightens at your back. "But I know who would sleep better if they stayed quiet. Everyone who signed. Everyone who was paid. Everyone who ate at that table." A glance, very brief, toward the Beaver Club's corner.
  *hide_reuse #"What happens at midnight?"
    *set n4_rose_q +1
    *set lore +3
    "The Hush tears," says Rose simply. "It's been fraying since you opened the door. Tonight is the last hour of Mardi Gras, the last hour when everything is permitted, and at the stroke of Lent, it will let go." He looks at you. "For an hour. Everything it's taken, it will give back. Everything. Hold on to something, darling."
  *hide_reuse #"What do you see, when you look at me?"
    *set n4_rose_q +1
    *set des_rose +10
    He looks. He takes his time about it, turning you slowly, his red-coal eyes going over your face as if reading a page.

    "A man who's been awake for twelve years," he says, "waiting for someone to ask him to stay up with them." His voice is very gentle. "And who would sooner die than ask first."
  *hide_reuse #"Why do you never take off your gloves?"
    *set n4_rose_q +1
    *set des_rose +5
    "Because of what's under them," says Rose. "And because a man should always keep something back, for the one who asks for it properly." He lifts your joined hands and looks at them, glove and skin. "Ask me properly, some night. You might be surprised what I give you."
  *hide_reuse #"What's in the great bell of Notre-Dame?"
    *set n4_rose_q +1
    *set lore +5
    *codex angel
    Rose's step falters. Only a hair, only for a beat, but you feel it.

    "Jean-Baptiste," he says. "An angel. The only one on this island who never agreed to any of it. It has been saying [i]no[/i] since 1967, and they've been ringing over it ever since, so nobody can hear." His voice is very low. "Angels don't forget, darling. And they don't forgive the way you'd like them to. If it ever gets its voice back, pray you're not standing where it's looking."
  *hide_reuse #"Enzo. Who is Enzo?"
    *set n4_rose_q +1
    *set wits +3
    Rose looks at you, and for a moment the amusement goes out of him entirely.

    "Someone who was stolen," he says. "A long time ago. From a kitchen on rue Jarry." The fiddle soars. "Ask the man in the toque. Or wait." He glances at the nearest clock. "Just wait a few minutes. You won't have to ask anyone anything."
  #Don't ask anything. Just dance.
    *set des_rose +5
    *set rel_rose +3
    You don't ask. You just dance. He notices; you feel him notice. His hand at your back goes, for a moment, gentle.
*set round +1
*if round <= 5
  *goto round

*page_break
*meter rose_lead 10 Who's leading|You lead|He leads
[b]11:59.[/b]

The fiddle stops. Rose stops. You stop, with his gloved hand still at your back and yours still on his shoulder, in the middle of an empty floor with the whole Veillée around you in the candlelight, holding its breath.

*if rose_lead <= 4
  *set danced_won true
  *set favor_rose true
  *node n4_dance won
  *achieve led
  "You lead," says Rose.

  He says it the way other people say [i]I love you[/i] or [i]I surrender[/i], which might be the same thing to him. He takes his hand from your back and steps back and bows, low, from the waist, the whole length of the empty floor watching.

  "In two hundred and eighty-six years," he says, straightening, "that's twice." His eyes are very bright. "I owe you a favor, locksmith. A real one. The Veillée heard me say it." And then, lower: "And if you haven't asked me who signed, the answer is Clément Ouimet, Honora Strachan and Everett Clarke. That's a gift. Don't tell anyone I give them."
  *clue c_accord_signers
  *remember rose You led the devil, at a minute to midnight, in front of the whole Veillée.
*else
  *set owe_rose true
  *node n4_dance lost
  "I lead," says Rose.

  He says it gently, almost apologetically. He doesn't let go of you. "One yes," he murmurs. "Whenever I choose to ask for it. That's all. I'm told I rarely ask." He lifts your hand and kisses your knuckles through the glove, and the heat goes up your arm to the shoulder and stays there. "Don't look so frightened, darling. You danced beautifully. You danced with the devil at a quarter to midnight, and you're still standing. Very few can say that."
  *remember rose He led, at a minute to midnight. You owe him one yes.

*page_break
Every clock in Le Mardi Gras strikes twelve.

They've never done it before. You can tell from the faces around you: a hundred creatures who've come to this room for a hundred years to dance in the hour that never ends, hearing it end. The clocks strike, all of them, big and small, silver chimes and iron gongs and the tinny little bell in the belly of a porcelain shepherdess, twelve times each, not quite together, a great ragged crashing wave of bells.

Mardi Gras is over. It's Lent.

And the Hush lets go.

*page_break
*effect thaw
*set thaw true
*set hush 50
*achieve thaw
*art thaw
It sounds like ice.

That's the only way you'll ever be able to describe it afterward: like the river breaking up in April, that long groaning crack you can hear across the whole city at night, the sound of something enormous and frozen giving way all at once. It goes through the floor and the walls and your teeth. Every light in the room flares white and every candle blows sideways and every glass on every table rings.

And then it's inside you.

*page_break
You're twelve.

It's August, 2009, and it's hot, the sticky Montréal hot that makes the tar soft in the lanes, and you're in the passenger seat of the old van with a can of Coke sweating in your hand, going over the Jacques Cartier Bridge in the long gold evening, and your father is humming.

*if n1_memory = "ride"
  The drive you never remembered. Here it is. Here it all is.
Your mother's working a double. Mémé's in the back, which you'd forgotten too: Mémé, seventy-one, in a sun hat, holding a Polaroid camera on her lap like a church purse.

The fort. The powder house. The heat coming off the old stone. Your father kneeling in the grass in front of a door with a steel plate on it, and six brass buttons, and a cross in a circle.

"[i]Viens ici, mon grand.[/i]" Come here. He takes your hands in his, his big square scarred hands, and puts your fingers on the buttons. "I'm going to teach you a song. Only family knows it. Quatre. Un. Quatre. Six. Deux. Trois." He presses your fingers down, one after another. You feel the pins drop in the steel, one after another, like a heartbeat. "Say it back to me."

"Why?"

"Because one day somebody might need to open this door," your father says, "and it can't be me."

Behind you, Mémé says [i]souriez[/i], smile, and neither of you does, and the camera goes [i]click-whirr[/i].
*set mem_notes true

*page_break
And then, on the bridge, going home, in the gold light going grey: your father pulls over onto the shoulder with the hazards on. He reaches into the glovebox and takes out something small and brass, the size of a teacup. A handbell.

He's crying. You'd never seen your father cry. You're seeing it now, seventeen years late, in a devil's ballroom.

"[i]Pardonne-moi,[/i] mon grand," he says. Forgive me. And he rings it, very softly, beside your ear, like saying a name. "[i]Oublie.[/i] C'est plus sûr."

Forget. It's safer.
*set remembered_bell true

*page_break
You come back to yourself on your knees on the black and white tiles, with Rose's gloved hand on your shoulder and your face wet.

*if has_photo
  The Polaroid. Mémé's shadow in the grass. Your twelve-year-old hands held stiff at your sides with the fingers spread, the way you hold them when you've just learned to play something. You know exactly what you'd just learned to play.
Your father Hushed you. With a Carillon bell. On the bridge. To keep you safe. And then, two years later, he went back to the fort alone, and never came home.

*choice
  #Let it hurt. Let it come.
    *set guarded %-10
    *set wry %-10
    You let it. You kneel there on the devil's dance floor and cry for a father who loved you enough to take your memory, and nobody in the Veillée says a word. Rose keeps his hand on your shoulder the whole time. It's very warm.
  #Get up. Wipe your face. Later. There'll be time later.
    *set guarded %+10
    *set nerve +3
    You get up. You wipe your face on your sleeve. Later. You've been putting things off until later for seventeen years; you can do it for one more night.
  #Say it out loud. The song. "Quatre, un, quatre, six, deux, trois."
    *set lore +3
    *set rel_rose +5
    You say it out loud, on your knees, in your father's voice. Quatre, un, quatre, six, deux, trois.

    Rose's hand goes very still on your shoulder. Somewhere far across the city, very faintly, under the sound of the ice, a great bell hums, one long low note, like something hearing its name.

*page_break
All around you, the Veillée is remembering.

You see it in the faces. The rum-runner at the Club's table with her hands over her mouth, remembering a husband she'd let herself forget in 1931. The Conductor at the end of the bar with his eyes shut, standing very straight, remembering, you'd guess, a railway platform in 1958 and a djinn in a crate. Aimé by the wall with tears running down under his glasses, remembering, in one terrible hour, the last thoughts of everyone he's ever tasted. Gisèle standing, very straight, one hand on the table, her lips moving: [i]Aurèle. Aurèle, you old fool.[/i]

From your pocket, Fleurette's voice, high and wild: "Chéri! Chéri, they can [i]see[/i] me, out in the street, the sleepers, I can hear them, they're [i]screaming[/i]!" She sounds happier than you've ever heard her.

And in the middle of the dance floor, where the crowd has drawn back from him in a ring, Lazare Desautels is on his knees.

*page_break
*portrait lazare sad
He's kneeling on the black and white tiles in his black tie with both hands pressed flat against the floor, as if the floor is the only thing holding him to the earth. His face is white. His eyes are open and seeing something none of you can see.

"[i]Mamma,[/i]" he says.

It's not French. It's Italian. It comes out of him in a child's voice.

"Mamma. [i]Mamma, il caffè è troppo forte.[/i]"

*page_break
You know, later, because he tells you, what he was seeing. But you can see a lot of it in his face while it happens.

A kitchen on rue Jarry, yellow, too small, with a picture of the Pope and a picture of Céline Dion side by side on the wall. A woman at the stove with her hair in a clip, turning to laugh at him: Rosa. A man at the table reading [i]Il Corriere Italiano[/i] with his glasses on his forehead: Vito. The smell of coffee made too strong, the way his mother always made it. His own name, called up the stairs: [i]Lorenzo! Enzo! À table![/i]

A boy on the next balcony, with a broken nose and a snow shovel. [i]Enzo! Come out! It snowed![/i] Dario, nine years old. Two boys in the lane behind the duplexes, in snowsuits, having a war with shovels, and one shovel catching one chin, and blood in the snow, and Dario crying harder than he did.

And then a night in February, when he was ten. Men in long coats in his bedroom, with bells. A hand over his mouth. A man with kind eyes, much younger than he is now, kneeling beside the bed, ringing a small brass bell beside his ear, very softly, like saying a name. [i]Oublie, mon petit.[/i]

And then the towers. And nothing, for twenty-one years, until tonight.

*page_break
Lazare lifts his head.

The crowd has drawn back. There's nobody near him on the floor. And across the ring of watching faces, where the Sept-Ans are standing, one man has come forward half a step, and stopped, in his too-tight suit and his nonna's toque, with his face absolutely stricken.

Lazare looks at Dario.

You watch him understand. You watch it happen, the way you'd watch a lock turn: pin, and pin, and pin, the whole thing falling into place. The roof in Rosemont. The knife. [i]Enzo.[/i] Seven years of [i]Enzo[/i], whispered in the dark, and every single time Lazare thinking it was a taunt.

"You knew," Lazare says.

"Enzo..."

"[i]You knew.[/i]" He's on his feet. You didn't see him get up. "Seven years. Seven years, and you [i]knew[/i]. You knew my mother's name. You knew my name. You let me... you let me..." His voice breaks in half. "You let me hate you."

"I tried to tell you!" Dario's voice cracks right down the middle. "On the roof! The first night! I said your name, I said [i]Enzo, it's me, it's Dario, from Jarry[/i], and you put a knife through my shoulder! I've been saying it for seven years! Every time! Every single time I said your name, I was telling you!"

The whole Veillée is watching. Nobody breathes.

Lazare looks at him for one more second. Then he turns and pushes through the crowd, and out through the lobby, and out through the door into the street, and the cold comes in behind him like a wave.

*page_break
*choice
  #@lazare Go after Lazare. Now.
    *set thaw_side "lazare"
    *set rel_lazare +10
    *set nerve +2
    *goto street
  #@dario Go to Dario first. He's standing there like he's been shot.
    *set thaw_side "dario"
    *set rel_dario +10
    *set guarded %-5
    You go to Dario. He doesn't seem to see you for a second. Then his hand finds your arm, and grips, hard enough to bruise.

    "I tried," he says. "I swear to God, Lacroix. I swear on my nonna. I tried."

    "I know. Come on. Come with me. Both of you are going out there."

    He looks at you. He nods. You go out into the street together.
    *goto street
  #Grab Dario's hand, and go after Lazare together. They need to be in the same place for this.
    *set thaw_side "both"
    *set rel_dario +5
    *set rel_lazare +5
    *set charm +2
    You take Dario's hand. He looks down at it, startled. "Come on," you say. "He's not running from you. He's running from twenty-one years. Don't let him do it alone."

    Dario stares at you. And then he's moving, and you're both moving, through the crowd and out the door into the cold.
    *goto street

*label street
*page_break
Boulevard Saint-Laurent at five past midnight on the first night of Lent is a street that has woken up.

The Main is packed: the bars have emptied, the clubs have emptied, the smoked-meat counters have emptied, hundreds of people standing in the snow in their going-out clothes, holding their phones up, screaming or laughing or crying or all three. And the Veillée is among them, and they can see it.

A vampire in a velvet jacket standing at a bus stop, blinking, as three girls in miniskirts take selfies with him. Two women in fur coats, one of whom has antlers, being filmed from every angle. A lutin sitting on the roof of a parked Honda Civic, braiding the aerial. Ghosts on the sidewalks: dozens of them, the whole length of the street, in the clothes of every decade of the city's life, a man in a zoot suit, a girl in a flapper dress, a nun, a soldier, a woman in a housecoat with her curlers in, all of them looking around them in wonder, all of them seen.

And overhead, against the orange sky, very small, a red canoe full of old women, paddling in a great slow circle over the Main, whooping.

In the middle of the street, in the middle of the traffic that has stopped, stands a young grey wolf with a torn ear, frozen in the headlights, while a hundred people film it.

*if dentist = "date"
  Your phone buzzes in your pocket. [i]Philippe: Is there a WOLF on Saint-Laurent?? I'm at Schwartz's. Everyone's filming. Also there's a ghost in the booth next to us and she's lovely.[/i]
  *set philippe_saw true
*elseif dentist != ""
  Your phone buzzes in your pocket. [i]Philippe: Is there a WOLF on Saint-Laurent??[/i] You don't answer.
  *set philippe_saw true
*if called = "marc"
  It buzzes again: a call. Toronto. Marc-André. You let it ring, and then you answer, because you can't not.

  "Julien?" His voice is strange, dazed. "I don't know why I'm calling. I was asleep. I just woke up with the strongest feeling that I had to hear your voice. Like I'd forgotten something about you, and just remembered it." A pause. "Are you okay? It sounds like a riot."

  "I'm okay," you say. "I'll call you. I promise." And for the first time in two years you mean it.

*page_break
Lazare is standing on the far sidewalk, in the snow, in his shirtsleeves, having lost his jacket somewhere. He's looking at the wolf in the street. The wolf is looking at him.

In his hand, from habit, from twenty-one years of habit, is his bell.

"Luc," says Dario, beside you, in a voice like breaking glass. "Luc, [i]no[/i], stay there, don't..."

Lazare lifts the bell.

*choice
  #Get to Luc first. Get the kid off the street before anybody rings anything.
    *set nerve +3
    *set rel_manon +10
    *set rel_dario +5
    *set luc_friend true
    You're in the road before you've decided, between the stopped cars, through the headlights, and you get your arms around the young wolf's neck and haul, and he's heavy and shaking and his heart is going like a rabbit's, and you get him onto the far sidewalk and down the lane by the dépanneur, into the dark, where Manon is already running toward you with her leather jacket off.

    When you come back out into the light, Lazare is still standing where he was. The bell is still in his hand. He hasn't rung it.
  #"Lazare. Put it down. Look at me. Not the wolf. Me."
    *set rel_lazare +10
    *set n4_told_lazare true
    *set guarded %-5
    You walk across the street to him, slow, the way you'd walk up to a man on a ledge. He watches you come. His hand with the bell in it is shaking so hard it rings, very faintly, on its own.

    "Look at me," you say. "Not at him. Me. You're not the Bourdon. You don't have to do what he'd do."

    His eyes find yours. They're black and wet and completely lost. And slowly, so slowly, the bell comes down.
    *remember lazare At the Thaw, on Saint-Laurent, you talked him into putting the bell down.
  #Stand beside Dario, between Lazare and the wolf. Don't say anything. Just stand there.
    *set rel_dario +10
    *set nerve +2
    You walk out into the headlights and stand beside Dario, between Lazare and the kid, your shoulder against Dario's. You don't say anything. You just stand there.

    Lazare looks at the two of you. He looks for a long time. Then the bell comes down.

*page_break
*if thaw_side = "both"
  "Enzo," says Dario. Quietly this time.

  Lazare doesn't hit him. He doesn't run. He stands there in the snow in his shirtsleeves and lets Dario say it, and you watch it go into him, the name, like a key into a lock that's finally the right shape.
*else
  "Enzo," says Dario, from behind you. Quietly this time.

  Lazare flinches. And then, slowly, he doesn't.
"My mother," Lazare says. "Is she..."

"Alive." Dario's voice shakes. "Rosa's alive. Vito too. Same house. Same kitchen. She still makes the coffee too strong. She still goes to Saint-Bernardin every Sunday at ten." He swallows. "She doesn't know you exist, Enzo. None of them do. When they took you, they took you out of everybody. Except me. And I only got you back because I turned."

Lazare makes a sound you've never heard a person make.

*choice speak
  #Put your arms around him.
    *set rel_lazare +10
    *set des_lazare +5
    *set n4_told_lazare true
    *set guarded %-10
    You put your arms around him. He's shaking so hard his teeth are chattering. For a second he's rigid as a post. Then he isn't: he folds into you, forehead on your shoulder, and holds on to your coat with both fists, and over his shoulder you see Dario's face, watching, wrecked, and you hold out your other arm.

    Dario doesn't take it. Not yet. But he takes one step closer, and stays there.
    *remember lazare At the Thaw, you held him on Saint-Laurent while he remembered his mother.
  #"We'll find them. Rosa and Vito. I'll help you. I promise."
    *set rel_lazare +10
    *set n4_told_lazare true
    *set nerve +2
    Lazare looks at you as if you've said something in a language he's only just remembered he speaks.

    "How?" he says. "They don't know me. They won't know me."

    "Then we'll find a way to make them." You don't know how. You mean it anyway. "I open things. It's what I do."
  #Step back. This is theirs. Let them have it.
    *set rel_dario +5
    *set rel_lazare +5
    *set guarded %+5
    You step back, onto the curb, into the crowd, and let them have it: two men in the snow in the middle of the Main, one in shirtsleeves, one in a toque, three feet apart, with twenty-one years between them.

    Dario says something you can't hear. Lazare shakes his head. Dario says it again. Lazare puts his hands over his face.

    You don't look away. You don't know if that's kindness or not.
  #"Dario. Tell him why you never stopped saying it."
    *set rel_dario +10
    *set wits +2
    Dario looks at you, startled. Then he looks at Lazare, and something breaks open in his face that's been locked for seven years.

    "Because it's your name," he says. "Because if I stopped saying it, there'd be nobody left in the whole world who knew it. And then you'd really be gone." His voice cracks. "I couldn't. I couldn't be the last one to forget you."

*page_break
At one o'clock in the morning, the great bell of Notre-Dame begins to ring.

You hear it from the Main, a kilometre and a half away: one enormous note, so low it's more a feeling than a sound, a shudder in the snow and the windows and the fillings of your teeth. And then every other bell in the city joins it, hundreds, the way they rang on Friday at 3:33, but this time not in alarm. In order. In a pattern. A change, rung by people who know exactly what they're doing.

The Carillon is ringing the Hush closed.

You watch it happen, on the Main. You watch the sleepers blink. The girls taking selfies with the vampire lower their phones and look at the screens in confusion, at pictures of a man at a bus stop, and shrug. The crowd filming the wolf looks at the empty street and laughs, embarrassed, at nothing. The ghosts on the sidewalks fade from their eyes one by one like breath from a window, and the ghosts know it, and some of them wave.

In your pocket, Fleurette's voice goes very small. "Oh," she says. "Oh, that was nice while it lasted."

*page_break
But not everybody forgets.

You don't. You'll never forget again; you know that the way you know your own name. Dario doesn't. And Lazare doesn't. You watch him wait for it, standing in the snow with his eyes shut and his fists clenched, braced, as the bells go on and on, waiting for his mother's face to be taken away again.

It isn't. He opens his eyes.

"It doesn't work on us," he says, wondering, hoarse. "The Carillon. We're not sleepers. We're... part of it. It can't take back what it gives its own."

He looks at the bell in his own hand. His bell. Brass, the size of a teacup, on its leather cord. The same kind of bell a man with kind eyes rang beside his ear when he was ten years old.

He takes it off his neck, very slowly, and looks at it for a long time.

*page_break
The bells stop.

Into the silence, Agathe comes running down the Main in her black tie, slipping in the slush, with her phone in her hand and her face grey.

"Lazare. It's the Bourdon. A peal message, to all of us." She holds the phone out as if it's burning her. "[i]By order of the Bourdon. The Thaw was the work of the Sept-Ans. The Accord's protection is withdrawn from the wolves. The Carillon will act tonight.[/i]"

Dario's phone rings. He answers it. You watch his face go from grey to white.

"Manon," he says. "What... [i]Where?[/i]" A pause. "How many?" A longer pause. "Is Luc..." He shuts his eyes. "I'm coming. I'm coming now. Hold the doors."

He puts the phone down. "They're at Saint-Jude," he says. "The Carillon. With iron. Manon's hurt. They're trying to get in." He's already moving, backward, toward the truck. "I have to go. I have to go [i]now[/i]."

And Lazare, with his bell in his fist, turns toward the old town, toward the two towers you can't see from here and can feel anyway, like a pressure behind the eyes.

"I'm going to the towers," he says. "I'm going to ask him. To his face. I'm going to ask the man who raised me why he rang a bell over a ten-year-old boy in his bed." His voice is very quiet and very steady and more frightening than any shout. "And I'm going to hear him answer."

*page_break
They both stop. They both look at you.

Dario, at the door of his tow truck with the engine running, his toque crooked, his face wrecked. Lazare in his shirtsleeves in the snow, with a bell in his fist and twenty-one years in his eyes.

Neither of them asks. Neither of them has to.

*if three_kiss
  Twenty minutes ago, in a coat room, there were three of you. Now there are two roads out of this street, going in opposite directions, and you can only take one.
*choice
  #@lazare Go with Lazare. To the towers. He shouldn't face that man alone.
    *set path "bells"
    *node n4_split bells
    *set rel_lazare +10
    *remember dario The night of the Thaw, when Saint-Jude was burning, you went with Lazare.
    Dario looks at you for one long second across the snow. Then he nods, once, as if he understands, as if he'd have done the same, and gets in the truck, and is gone down the Main with his hazards flashing.

    Lazare looks at you as if you've given him something he didn't know how to ask for.

    "Come on," he says. "It's a long walk to the old town, and I'm not going back for my coat."
    *goto_scene night5a
  #@dario Go with Dario. To Saint-Jude. They're coming with iron, and he needs every pair of hands.
    *set path "wolves"
    *node n4_split wolves
    *set rel_dario +10
    *remember lazare The night of the Thaw, when he walked to the towers alone, you went with Dario.
    Lazare looks at you for one long second across the snow. Something closes in his face. Or opens; you'll never be sure which. Then he nods, once, and turns, and walks away up the Main toward the old town, alone, in his shirtsleeves, with his bell in his fist.

    Dario is already holding the passenger door open. "Get in," he says. "Get in, get in, get [i]in[/i]."
    *goto_scene night5b
`);
