NB.scene("night7", String.raw`
*mood snow
*chapter 7 The Keyman [7]
*temp laz_free false
*temp pieces 0
*temp save 0
*if lazare_left_carillon or (path = "wolves")
  *set laz_free true
You wake at noon on Thursday in your own bed in Verdun, and for one long second you don't know where you are, because it's so ordinary.

The radiator's banging. The window's full of grey sky and snow and the back of the dépanneur across the lane. There's a smell of coffee, which is wrong, because you live alone, and nobody's made coffee in this apartment but you since 2021.
*if path = "bells"
  *if lazare_left_carillon
    Lazare is in your kitchen.

    He's standing at the counter in yesterday's shirt with his sleeves rolled up, making coffee in your stovetop pot like a man defusing a bomb, and he's found your mother's apron, the one with the lobsters on it that says [i]I GOT CRABS IN PETIT-DE-GRAT[/i], and he's wearing it without, apparently, having read it.
    *if reconciled
      Dario is asleep on your couch, which is a metre and a half too short for him, with his feet in their wool socks hanging over the arm and his toque over his eyes, snoring like a snowblower.
    *if mathis_out
      Mathis is asleep in your armchair under your winter coat, with his crayon drawing clutched in his fist.
  *else
    *if reconciled
      Dario is in your kitchen, making coffee badly, in your mother's lobster apron, which says [i]I GOT CRABS IN PETIT-DE-GRAT[/i]. He drove you home at dawn. He never left.
    *else
      Nobody's in the kitchen. The coffee is from the machine you forgot you set last week. Of course it is. It's just you.
*else
  *if n6_lazare = "jude"
    Dario is in your kitchen.

    He drove you home at dawn after taking Lazare to Saint-Jude, and then he didn't leave. He's making coffee in your stovetop pot in your mother's lobster apron, the one that says [i]I GOT CRABS IN PETIT-DE-GRAT[/i], with his toque on, humming Céline.
  *else
    Lazare is in your kitchen, making coffee in your stovetop pot like a man defusing a bomb, wearing your mother's lobster apron, the one that says [i]I GOT CRABS IN PETIT-DE-GRAT[/i], without, apparently, having read it. Dario is asleep on your couch, which is a metre and a half too short for him, with his toque over his eyes, snoring like a snowblower.

*page_break
On your fridge, under a magnet shaped like a lighthouse, is the Polaroid.

You put it there on Saturday morning. [b]S. + {name}. AOÛT 2009.[/b] A man kneeling in the grass with his arm round a boy in a Spider-Man T-shirt, in front of a steel door with a plate shining new.

It's Thursday.

You stand in your kitchen in your boxers with a cup of coffee somebody made you, and look at it, and think: [i]every Thursday.[/i] That's what Nadim told you on the bridge. For fifteen years, your father went down the stairs at the fort every Thursday with a transistor radio and told a djinn about his son.

And now the djinn's in chains in a cellar on the mountain, and your father's cutting keys under the city with no name, with a fresh black tick beside it in an old man's book.
*if know_keyman
  You know where he is. You've known since the Register. You've been not-thinking about it for a day and a half, the way you'd not-think about a tooth.
*else
  You don't know his name yet. But you know the hands, and the song, and the flinch. You've known since Sunday, really. You just haven't let yourself say it.

*page_break
*if laz_free
  "You're going to the Line," says Lazare, from behind you. It isn't a question. He's looking at the Polaroid over your shoulder. "To him."
*else
  *if reconciled or (path = "wolves")
    "You're going to the Line," says Dario, from behind you. It isn't a question. He's looking at the Polaroid over your shoulder. "To him."
  *else
    You're going to the Line. You know it the way you know a lock's about to give.
"He's on the list," you say. "In the Register. With a fresh tick. Mireille had one. Guy Hébert had one."
*if olivier_dead
  "Olivier didn't need one. He was just in the way."
The kitchen is very quiet.

*if mathis_out
  Mathis goes to Saint-Jude at one o'clock. Kim and Sandrine come for him in their car, and he looks at the two nurses with deep suspicion until Sandrine says the words [i]there's lasagna[/i], and then he goes without looking back.
  "Manon taught grade three for twenty-two years," Kim tells you at the door. "She's going to eat him alive. In a good way."

The Line opens after the last métro. But the Keyman sleeps down there. And whoever's been ticking names out of that book doesn't wait for the market to open. They come when nobody's there.

*choice
  #Go alone. It's your father. It should be just you.
    *set n7_with "alone"
    *set guarded %-5
    *if laz_free
      Lazare watches you. Then he nods. "Text me," he says. "Every hour. Or I'm coming down there with a bell I don't own any more."
    *else
      Nobody argues. You wish, a little, somebody would.
  *if (laz_free) #Take Lazare. He knows the bells. If someone comes with one, he'll know it before you will.
    *set n7_with "lazare"
    *set rel_lazare +5
    Lazare takes off the lobster apron, folds it, and puts it on the counter. "Yes," he says. Just that.
  #Take Dario. If someone comes for your father, you want a wolf between them.
    *set n7_with "dario"
    *set rel_dario +5
    *if (path = "bells") and (not(reconciled))
      You text him. He's at your door in twenty-five minutes in the tow truck, with the engine running and two coffees. "Your father," he says. "Get in."
    *else
      Dario pulls his boots on without a word. "Your father," he says. "Get in the truck."
  *if (laz_free) #Take both of them. You don't know what's coming, and they're the two best fighters you know.
    *set n7_with "both"
    *set rel_lazare +3
    *set rel_dario +3
    They look at each other across your tiny kitchen, the hunter in the lobster apron and the wolf in his socks, and something passes between them, old and wordless.

    "Truck," says Dario.

    "I'm not getting in that truck," says Lazare. "It smells of wet dog."

    "It smells of [i]me[/i]."

    "Yes," says Lazare. "That's what I said."

*page_break
*art 7
The bagel bakery on St-Viateur is open, because it's always open, the wood ovens roaring, the long rope of dough going round the table under the hands of three men who've been doing this for forty years. Samir looks up from the ovens when you come in, and sees your face, and doesn't ask.

"He's down there," he says. "He always is." He wipes his hands on his apron and lifts the flap in the counter. "Mind the stairs. They're older than the ovens."

The Missing Line in daylight is a cathedral nobody goes to.

The stalls are all covered in tarps. The strings of bulbs are off. The old blue train sits at the platform with all its doors shut. The only light comes from a grating somewhere far above, a grey shaft of February afternoon falling through the dust onto the tiles, and, at the far end, past the last stall, by the tunnel mouth, the small blue flame of a camping stove.
*if n7_with = "alone"
  Your footsteps are the only sound.
*else
  "Let him go ahead," someone says quietly behind you, and stops at the last stall, and waits there in the shadows. You go on alone.

*page_break
*portrait keyman neutral
The Keyman is sitting on his upturned milk crate beside the green treadle machine, making tea.

He looks up when you come into the light, and his face does the thing it always does: pleasure, and confusion, and then a careful polite blankness, like a man who's been told not to trust his own face.

"You came back," he says. "I hoped you would."
*if visited_keyman
  He nods at the treadle. "It's still going round. Your pin."
"Tea? It's Red Rose." He's already reaching for the second enamel cup. "Only in Canada, you say."
*if visited_keyman
  "Pity," you say.

  He stops, with the pot in his hand, and looks at you.
*else
  It's a line from an old TV commercial. Your father used to say it every single time he made tea. You'd forgotten, until this second, that you'd forgotten.

You sit down on the other milk crate. He hands you the tea. Three sugars. The way you take it. You didn't tell him.

*page_break
You've thought about this all the way here. What to say. How to do it without breaking him.
*if keyman_told
  Last time, you told him outright, and the Hush took it back out of him in ten minutes, and hurt him doing it. You're not doing that again.
You can't just tell him. Whatever the Hush did to him is still holding: weaker now, you think, cracked by the Thaw, but holding. You have to give him things. Pieces. And let him put them together himself, the way you'd let a lock find its own way to open.

*choice
  *if (has_photo) #Take the Polaroid out of your wallet. Put it on his knee. Say nothing.
    *set pieces +1
    *set rel_keyman +5
    You take it out and put it on his knee, face up, on the leather of his apron.

    He looks at it for a long time. A man kneeling in the grass with his arm round a boy. The door behind them. The white strip at the bottom, in blue ballpoint, in small tidy capitals: [b]S. + {name}. AOÛT 2009.[/b]

    His finger moves to the capitals. Traces them. The S.

    "That's my writing," he says. Quite calmly. As if he's pointing out the weather. "That's how I make my S. With the little hook." He doesn't look up. "Why do you have a picture in my writing?"
  *if (know_keyman or ded_keyman) #"Papa." Just the word. Quietly. Once.
    *set pieces +1
    *set rel_keyman +10
    *set guarded %-10
    "Papa," you say.

    He goes still. The tea in his cup goes still. For a second, you see it all behind his face, right there under the surface, like a drowned man under ice, pressing his hands up against it.

    Then he looks down at his tea. "I'm sorry," he says, very carefully. "I think you've mistaken me for someone." His hands are shaking. "It happens. Down here. People are looking for all sorts of people."
  #Just drink the tea. Sit with him. There's time.
    *set rel_keyman +5
    You drink the tea. It's terrible. You sit with him in the blue light of the stove and the grey light from the grating, and neither of you says anything, and it's the most time you've spent in a room with your father since you were fourteen.

*page_break
He's humming.

He doesn't know he's doing it. He's refilling the pot from a jug, and it comes out of him the way it always does: six notes, down and up and one held at the end, like a question.

*choice
  *if (mem_notes or c_six_notes or c_meme_hum) #Hum it with him. And then don't stop where he stops. Finish it the way he taught you at the fort: say the numbers.
    *set pieces +1
    *set rel_keyman +10
    You hum it with him. He hears you and stops, startled, with the jug in his hand. You don't stop. You finish it. And then you do what he did, at the fort, in August, with your fingers on the buttons: you say it.

    "[i]Quatre. Un. Quatre. Six. Deux. Trois.[/i]"

    The jug goes down on the tile, very slowly.

    "[i]Viens ici, mon grand,[/i]" the Keyman says, in a voice that isn't quite his. It's younger. It comes out of him like something falling out of a cupboard. "[i]Only family knows it.[/i]" He stops. He puts his hand over his mouth.
  *if (has_notebook) #Take out your grandfather's notebook. Open it to the torn page. Hold out your hand for his.
    *set pieces +1
    *set rel_keyman +5
    You take out the notebook, black oilcloth, and open it to the page three-quarters of the way through. [i]La serrure à chanson. Pour le fort. Voir S.[/i] And the stub of the page that isn't there, a ragged edge like a row of teeth.

    You hold out your hand.

    He studies it. Then he gets up, and takes the cigar box down from the shelf by the cot, and takes out the folded page, soft as cloth, and puts it in your hand without a word. You lay it against the stub. The teeth fit.
    *clue c_torn_page

    "[i]Voir S.[/i]," he reads, off your grandfather's page, very slowly, as if he's learning to read. "See S." He touches the letter. "Who's S?"
  *if (meme_key or serge_promise) #"My grandmother hums that. Lucille. On Bannantyne. She calls it Aurèle's song."
    *set pieces +1
    *set rel_keyman +5
    "Lucille," he says.

    Just the name. He says it the way you'd say the name of a street you grew up on, and then look round, puzzled, because you've never been there.

    "She's eighty-eight," you say. "She has a pink cardigan and a little gold cross, and she thinks everybody's you. She calls me Serge, most days. She asks me if I kept my promise."

    His hand goes to his chest. To where a St. Christopher medal would hang, if it hadn't broken.
  #Tell him about the fort. The door. The steel plate. Six brass buttons in a row.
    *set rel_keyman +3
    You tell him about the fort. The powder house on Île Sainte-Hélène. The door with the steel plate. The six brass buttons in a row, and the loose brick with the envelope under it.

    He listens with a polite, fixed attention, the way you'd listen to someone describe their holiday. Only his hands give him away: they've stopped, in his lap, with the fingers spread, the way you'd hold them when you'd just been playing something.

*page_break
There's a payphone on the wall by the tunnel mouth. You've never noticed it. It's old, Bell Canada, the black kind with a steel cord, bolted to the tile, with a little sign above it that says [b]LIGNE 3[/b] in the same enamel lettering as the station signs.

You look at it. He sees you look at it.

*choice
  #"You called me. Friday. Ten to two in the morning. From that phone."
    *set pieces +1
    *set rel_keyman +5
    He looks at the phone for a long time.

    "I didn't know the number," he says slowly. "I didn't know I knew it. I just picked up the receiver and my fingers did it. The way they do keys." He turns his hands over and looks at them. "And a voice came out of me, and said something, and I didn't know what it meant. [i]Le fort a besoin de son gardien.[/i]" He looks at you. "And then a man on the other end breathed. Like he was waiting for someone. And I thought: [i]he sounds like me when I was young.[/i]"
  *if (bridge_nadim) #"You used to go down the stairs to Nadim. Every Thursday. With a transistor radio. You played him the Expos."
    *set pieces +1
    *set rel_keyman +5
    *set rel_nadim +3
    "The Expos," he says. And then, very quietly, to himself: "Nobody could ever explain the infield fly rule to him."

    He goes to the shelf, as if sleepwalking, and takes down the cigar box, and takes out the dead transistor radio with the peeling Expos sticker on the back. He holds it in both hands.

    "It's Thursday," he says. "Isn't it."
  #"You don't have to remember. It's all right. I'll just sit here."
    *set rel_keyman +10
    *set guarded %-5
    He looks at you with his pale kind eyes. "That's very kind," he says. "Nobody's ever said that to me down here. Everyone wants me to remember something."

*page_break
*if pieces >= 2
  *goto remembers
*goto not_yet

*label not_yet
He sits on his crate with his hands in his lap, and you can see it in him, right there under the skin: the whole shape of it, a man, a name, a son, pressing up against the ice. And the ice holding.

"I'm sorry," he says. "I know there's something. I know you're... something." He puts the heels of his hands against his eyes. "It's like trying to remember a dream. The harder I try."

You don't push. You've seen what pushing does.

"It's okay," you say. "It's okay. I'll come back." You don't know if you mean tomorrow, or next week, or after Saturday, if there is an after.

He nods. He takes his hands down. And then, as you're getting up, he catches your sleeve.

"Whoever you are," he says. "Whatever I am to you." His grip is very tight. "I'm glad you came down the stairs."
*remember keyman On the Thursday before Nuit blanche, you gave him pieces, and the Hush held. He was glad you came down the stairs.
*goto ruari

*label remembers
*page_break
*portrait keyman sad
It doesn't happen the way you thought it would.

You thought it would be like the Thaw: a door blowing open, a flood. It isn't. It's like watching a man come up a very long staircase in the dark. Slowly. One step and then another. You can see him coming up it, behind his eyes. You can see him stop, and rest, and go on.

He looks at the Polaroid, or the page, or the payphone, or nothing. He looks at his hands.

And then he looks at you. And you see him arrive.

"{name}," says Serge Lacroix.

*set keyman_known true
*achieve papa
*page_break
He doesn't cry. You thought he might. He just sits there on his milk crate looking at you, with his mouth a little open, as if you're the most astonishing thing he's ever seen, and he's afraid that if he moves you'll go.

"You're so tall," he says.

"I'm twenty-nine."

"You're twenty-nine," he repeats. "You were fourteen." His voice cracks, finally, right down the middle. "You were fourteen, and you had a cold, and I said I'd bring you back a Jos Louis from the dépanneur, and I went to the fort instead." His hands are shaking. "Did anybody bring you a Jos Louis?"

You don't know what you're going to do until you do it.

*choice
  #Put your arms around him.
    *set rel_keyman +15
    *set guarded %-10
    You get off your crate and kneel down on the tile and put your arms round him, and he's thin, so thin, under the denim, all shoulder blades, and he smells of brass dust and Red Rose tea and the tunnel, and underneath all of it, faintly, of the van. The old van. Your childhood.

    He holds on. He holds on so hard it hurts. He doesn't say anything at all.
  #"No. Nobody brought me a Jos Louis." Say it, and let it land.
    *set rel_keyman +5
    *set guarded %+5
    "No," you say. "Nobody brought me a Jos Louis."

    He closes his eyes. You watch it go into him. Fifteen years of it.

    "No," he says. "No. Of course not." He opens his eyes. "I'm sorry."
  #"Mom brought me one. The next day. She said you'd sent it." (It isn't true. It's the kindest lie you know.)
    *set rel_keyman +10
    *set wry %-5
    He looks at you, steadily. He knows. You can see that he knows; he was always a better liar than you, and he always knew when you were doing it.

    "Kath," he says. "Is she..."

    You have to tell him. You tell him. 2019. The hospital on Wellington. How she kept asking the nurses what day it was, because she wanted to know if it was Thursday.

*page_break
He tells you. Some of it. What he can reach.

That he was the keeper, after Aurèle. That every year on the first of August he went down to the fort to check the lock, the way his father had, and that in the summer of 2009 he took you, because you were twelve and you had his hands and one day it would be you.

"I taught you the song," he says. "At the door. In the grass. Your mémé took the picture; she came with us, she always came, she said somebody had to keep the Lacroix men from locking themselves in something." A small, cracked laugh. "And then you asked what was behind the door. And I told you. And I watched your face." He looks at his hands. "And I was so frightened, {name}. Of what they'd do to you if they knew you knew. So I rang Papa's bell over you. That same afternoon. In the car. The old Carillon bell he kept in the glovebox for anyone who found the door." He swallows. "You were asleep before we got off the bridge. When you woke up, you didn't remember the door. Only the ride. Only the ice cream after." He looks up. "Your hands remembered. I could see it. For years. Every time you picked a lock. [i]Quatre, un[/i]. I could see them do it."

*page_break
"And 2011," you say.

"And 2011." He nods slowly. "Nadim. Every Thursday for fifteen years. He was my friend. He was the only person I could tell everything to." He looks at the payphone. "And one Thursday in March I thought: my son is fourteen. And the man I tell about my son is chained in the dark under an island so the rest of us can sleep. And I couldn't do it any more."

"So you went to open it."

"With a crowbar and a transistor radio and a song, because I didn't know what else to use." He almost smiles. "And the Bourdon was waiting. He always knew when I went. And he rang the great bell over me himself, on the ice, and I came down the stairs of a bagel shop with good hands and no name." He looks at you. "Before I went, I put an envelope under the brick. Two thousand dollars. The picture. For whoever came to the door next." His voice goes. "I hoped it would be you. And I prayed every night it wouldn't."

"You called me."

"I didn't know it was you. I didn't know anything." He looks at his hands. "I just knew the fort needed its keeper. And I knew I wasn't him any more."

*page_break
He looks at you, and waits. Like a man in a dock.

*choice speak
  #"I forgive you. For all of it. You were trying to keep me safe."
    *set keyman_forgiven true
    *set rel_keyman +15
    *set wry %-10
    He shuts his eyes. He doesn't say anything for a while. When he does, it's very quiet.

    "I don't deserve it," he says.

    "I didn't ask if you deserved it. I said I forgive you."

    Serge Lacroix laughs, a wet broken sound, and wipes his face on the sleeve of his denim shirt. "Your mother," he says. "That's your mother. That's exactly what she'd say."
    *remember keyman On the Line, on a Thursday, you told your father you forgave him.
  #"I don't know yet. But I'm here. I'm not going anywhere."
    *set rel_keyman +10
    *set guarded %+5
    He nods. He doesn't argue. "That's more than I've got any right to," he says. "Here is more than enough."
  #"Mom died thinking you walked out on us. I grew up thinking it. You should have told us. You should have trusted us."
    *set rel_keyman -5
    *set nerve +2
    He takes it. He doesn't flinch, or argue, or explain. He sits on his milk crate and lets it land, all of it, the way you'd stand in the rain because you've got it coming.

    "Yes," he says finally. "I should have. I was a coward. I thought if I carried it alone it'd weigh less for you." He looks at you. "It didn't, did it."

    "No."

    "No," he agrees, very quietly.
  #Don't say anything. Take his hand. His locksmith's hand, black with brass dust. Hold it.
    *set keyman_forgiven true
    *set rel_keyman +10
    You take his hand. He looks down at it, your hand holding his, both of them square and scarred and black at the creases, the same hands, thirty years apart.

    "Same hands," he says.

    "Same hands."

*page_break
He gets up, stiffly, and takes the cigar box down from the shelf, and takes out the brass key with the cross in a circle on its bow.

"This is the keeper's key," he says. "Papa's. To the outer door at the fort, the one before the one with the buttons. I've had it in a cigar box for fifteen years and not known what it opened." He holds it out. "It was always going to be yours."
*set has_serge_key true
*remember keyman He gave you the keeper's key, the one to the outer door at the fort. It was always going to be yours.
*goto ruari

*label ruari
*page_break
*portrait ruari smirk
At six o'clock, a bell rings in the tunnel.

Not a church bell. A handbell. Small and clear and cold, from somewhere in the dark beyond the tunnel mouth, where the tracks go away under the city to nowhere. One ring. Then quiet. Then another, closer.

The Keyman goes very still.
*if keyman_known
  "That's a Carillon bell," says your father. "I'd know it anywhere. I've heard it twice in my life."
*else
  "Somebody's coming," he says. His hands have started to shake.

And out of the dark of the tunnel, walking along the rails with his hands in the pockets of his leather jacket, comes Ruari Strachan.

He looks the same as he did at Honora's right hand: bleached hair with the roots coming in, pale beautiful bored face, a choker, a single earring. And on both his wrists, stacked up, bright in the blue light of the camp stove, plastic pony-bead bracelets, pink and green and yellow. There's a brass handbell hanging from his fingers. On its handle, on a loop of string, a small paper tag.

Behind him come two men in dark coats with the eyes of people who aren't quite there any more. One of them is Honora's butler, with the face like a peeled egg. He's carrying a coil of chain.

*page_break
"Ah, Christ," says Ruari, softly, when he sees you. His Scottish vowels. "I was hoping you'd be at your wolf's. Or your hunter's." He sounds genuinely sorry. "Sorry, love. I've a job to do, and he's on the list." He nods at the Keyman. "Fresh ink, see."
*if fed_ruari
  He looks at your throat. At where he drank from you, on Sunday, in the dark of the Club, and said [i]sorry, love[/i] into your skin. Something goes across his face, fast, and is gone.
*if n7_with = "dario"
  From the shadows by the last stall, there's a growl. Low, long, a sound you feel in the tiles.

  Ruari's head turns. "Oh, grand," he says. "The dog."
*elseif n7_with = "lazare"
  From the shadows by the last stall, a figure steps out into the grey light. Tall. Dark curls. No bell.

  Ruari's head turns. "Oh, grand," he says. "The priest."
*elseif n7_with = "both"
  From the shadows by the last stall, two figures step out into the grey light. A big man in a toque, with his eyes gone gold. A tall man with dark curls, no bell, and a length of iron pipe from the tracks in his hand.

  Ruari looks at them. "Oh, grand," he says. "The dog and the priest. Like a joke."

"You're not taking him," you say.

"I'm afraid I am, love." Ruari lifts the bell. The tag on its handle turns in the light. In neat handwriting, you can read it from here: [i]Sœur Agathe. 2/2. RETURNED.[/i] "One ring for you, to be polite, and it won't work, because you're a creditor, aren't you, Nadim's creditor, and nothing rings on you. And then one for him." He smiles, and his teeth are very white. "And then he comes with us to the mountain, and your Madam President has something to hold on to if you get any ideas about Saturday." He sighs. "It's not personal. Nothing I do is personal any more. That's rather the point of me."

*page_break
The butler moves toward the Keyman with the chain.

*choice
  *selectable_if (nerve >= 55) #Step in front of the bell. Right up close. "Go on. Ring it."
    *set save +2
    *set nerve +3
    You step in front of your father. Right up to Ruari, close enough to smell the cedar and the fur on him, the cellar smell. Close enough that the bell's lip is an inch from your temple.

    "Go on," you say. "Ring it. Ring it right here. Like you did to Mireille. Like Guy. Like Olivier. Right on the bone."

    Ruari looks at you. The bell's in his hand. He's a vampire who's been dead since 1998, and he could break your neck with two fingers, and you're a locksmith from Verdun, and you don't move.

    He doesn't ring it.
  *selectable_if (hands >= 55) #Go for the chain. They'll have to put it on him. You'll have it off him faster.
    *set save +2
    *set hands +3
    The butler gets the chain round your father's wrists: iron, heavy, a padlock through the links, a cheap brass Master lock. You're on it before he's stepped back. Tension wrench. Rake. The padlock's open before the butler's turned round, and the chain's on the tile, and your father's hands are free, and he's looking at you with an expression you last saw on his face when you were nine and opened his own toolbox without the key.
  *if (ded_ruari) #Say their names. "Mireille Caron. Guy Hébert. Olivier Paré." Watch his face.
    *set save +2
    *set wits +3
    "Mireille Caron," you say. "Guy Hébert. Olivier Paré. Nineteen. A novice. He was running away from a fight." You don't raise your voice. "He was thinking about his mother, Ruari. Aimé tasted it. He didn't remember her face."

    Ruari's face does something terrible. It's gone as fast as it came. But the bell in his hand has started to shake.

    "I know it was you," you say. "Everybody on the Line knows. The Conductor knows. The angel said it out loud. You're done. The only question is whether you're done tonight, with my father on your hands too."
  *if (fed_ruari) #"You drank from me, Ruari. You said sorry into my neck, and you meant it. Mean it now."
    *set save +1
    *set rel_ruari +10
    *set guarded %-10
    Ruari goes very still.

    "I did mean it," he says. Very quietly. "I always mean it. That's the joke." He looks at the bell in his hand as if he's never seen it before. "I've said it to every one of them, love. Every one. It doesn't help them, and it doesn't help me." His grip loosens.
  #Grab the iron bar from the key machine. Anything. Fight.
    *set reckless %+10
    *set nerve +2
    You grab the iron crank-handle off the treadle machine and swing it. It hits Ruari in the shoulder with a crack that would put a living man on the floor. He doesn't even step back. He looks at the crank-handle, and then at you, with something like pity.

    "Oh, love," he says.

*if n7_with = "dario"
  *set save +1
  Dario hits the butler like a truck. The chain goes skidding across the tiles. The second thrall goes for him and ends up in the tunnel on his back with a wolf standing on his chest, growling in a way that makes the tiles hum.
*elseif n7_with = "lazare"
  *set save +1
  Lazare moves. You've never seen him fight, really, not properly; you've seen him on the ice at the fort with a bell. This is different. He goes past the butler like a door swinging shut, and takes the chain out of his hands, and wraps it round the thrall's own wrists, and has him face-down on the tiles in about three seconds. "Twenty-one years of training," he says to Ruari, not even breathing hard, "and I was always better with my hands than my bell."
*elseif n7_with = "both"
  *set save +2
  Dario hits the butler like a truck. Lazare takes the second thrall down with the chain in three seconds flat and kneels on him. They don't look at each other. They don't need to; they've been fighting each other on rooftops for seven years, and it turns out that's exactly the same as fighting side by side.

*page_break
*if save >= 2
  *goto saved
*goto taken

*label saved
*set keyman_safe true
*node n7_father saved
Ruari stands in the grey light from the grating with the bell hanging from his fingers, and looks at the Keyman, safe behind you, and at his thralls on the floor, and at you.

"Well," he says. "That's that, then."

He holds out the bell. Just holds it out, on the end of his arm, with the tag turning on its string. [i]Sœur Agathe. 2/2. RETURNED.[/i]

"Take it," he says. "Go on. It's heavier than it looks." When you don't move, he drops it, and it hits the tiles and rings, once, small and clear, and rolls to your feet. "She'll know I lost it. She'll know you have it." He almost smiles. "Tell her I said sorry, love. She'll laugh."

And he goes back into the dark of the tunnel the way he came, walking along the rails with his hands in his pockets, and you hear his footsteps for a long time, and then you don't.
*set stolen_bell true
*set ruari_fate "fled"
*remember ruari In the Missing Line, on the Thursday, he dropped the stolen bell at your feet and walked back into the tunnel.
*page_break
You pick up the bell. It's brass, small, cold. There's a dent in the lip, and on the dent, faintly, something dark.

Behind you, your father has sat down on his milk crate, very suddenly, with his hands between his knees.
*if keyman_known
  "Well," says Serge Lacroix, shakily. "That's twice in my life somebody's come down a tunnel for me with a bell." He looks up at you. "It's the first time somebody's stopped them."
*else
  "Thank you," says the Keyman, shakily. "Whoever you are." He looks at you for a long time. "I think I'd have gone with him. I think I've been waiting for somebody like him for fifteen years." He shakes his head. "I don't know why I'm not afraid of you."
*goto end

*label taken
*set keyman_taken true
*node n7_father taken
Ruari sighs.

He steps past you. You try to stop him and it's like trying to stop a door in a gale. He puts one cold hand on your chest and moves you aside, gently, like a curtain, and lifts the bell over your father's head.

"Sorry, love," he says. To your father, this time.

He rings it. Once. Soft. The way the Bourdon must have rung it on the ice in 2011.

Your father's eyes go wide, and then soft, and then empty, and he folds down onto his milk crate like a coat falling off a hook. The butler gets the chain round him. They lift him between them.

"He'll be all right," Ruari says to you. "He'll be at the Club. In the cellar, with the djinn. Honora wants him comfortable. She's very particular about hostages." He looks at you for a moment longer. "She'll send you a card, I expect. About Saturday."

And they're gone into the tunnel, and your father with them, his head lolling on the butler's shoulder, and you hear them for a long time, and then you don't.
*remember keyman On the Thursday before Nuit blanche, Ruari rang the stolen bell over him and carried him off to the Club.
*page_break
You stand on the platform in the grey light with the crank-handle in your hand, or nothing in your hands. The camp stove is still burning. The Red Rose tea is still warm in its pot.

On the tiles, where your father dropped it when he went down, is the cigar box, open. The St. Christopher. The dead radio with the Expos sticker. The torn page, soft as cloth.
*if not(has_serge_key)
  And a brass key with a cross in a circle on its bow.

  You pick it up. You don't know what it opens yet. You know it's yours.
  *set has_serge_key true

*label end
*page_break
When you come up the stairs through the bagel bakery at seven, into the heat of the ovens, Samir is waiting at the top with his arms folded and a stiff cream-coloured card in his floury hand.

"A man brought this," he says. "In white gloves. Twenty minutes ago. He wouldn't come down." He hands it to you. "He smelled like iron."

It's heavy card, with a deckled edge, and a brass beaver embossed at the top.

[i]The Beaver Club requests the pleasure of Monsieur {name} Lacroix's company at supper this evening, at midnight, at Strachan House. The Accord's table sits tonight, as it has sat on the last Thursday before each renewal since 1967. Monsieur Lacroix may bring one guest.[/i]

[i]Dress: evening.[/i]

And under it, in a small precise hand, in ink that's gone brown the way old blood goes brown:

*if keyman_taken
  [i]Your father is quite comfortable. —H.S.[/i]
*else
  [i]Do come. We have so much to discuss. —H.S.[/i]

*goto_scene night7b
`);
