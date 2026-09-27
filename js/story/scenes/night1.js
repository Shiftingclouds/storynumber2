NB.scene("night1", String.raw`
*mood snow
*chapter 1 The Door
The dentist has locked himself out of his condo in his socks.

It's ten to two on a Friday morning in February, twenty-four below with the wind, and he's standing in a fourth-floor hallway of a glass tower in Griffintown in a cashmere sweater, a pair of boxer shorts and argyle socks, holding a bag of garbage he was on his way to put down the chute when the door swung shut behind him.

"Thank God," he says, when you come out of the elevator with your kit bag. "Thank [i]God[/i]. You're the locksmith?"

The patch on your jacket says SERRURERIE LACROIX 24/7. So does the van downstairs, in gold letters two feet high. You let it go.

"I'm the locksmith."

His name is Dr. Philippe Arsenault. He tells you twice. He's a dentist, he's had four glasses of a very good Amarone, he has been divorced since October, and he'd like it on the record that this has never happened to him before, not once, not in forty-six years.

You set the bag down and look at the door. It's a nice door, for a condo: solid core, painted a grey the building's brochure probably called [i]Fog[/i]. A smart lock with a keypad whose battery has died, and above it a proper deadbolt, a Medeco, the kind people buy when a salesman says the word [i]pick-resistant[/i] to them in a certain tone of voice.

"Can you do it?" he says. "Without, you know. Destroying it? My ex-wife picked that door."

*choice
  #Pick the deadbolt. Pick-resistant isn't pick-proof. Nothing is.
    *set hands +3
    *set reckless %+5
    You kneel, take out your tension wrench and the good rake, the one with the tape on the handle, and go in. A Medeco wants you to lift and turn at once, each pin to its own height and its own angle, like getting six people to agree on a restaurant.

    Four minutes. The dentist narrates every one of them. On the fifth, the cylinder turns under your fingers with a small, soft give that you have never once in your life stopped enjoying.
  #Look before you work. The deadbolt isn't even thrown. Only the latch.
    *set wits +2
    *set reckless %-5
    The bolt's throw-plate is empty. He didn't lock it; the door just latched behind him. You take a flat strip of spring steel from your bag, slide it into the gap by the strike plate, angle it down, and pop the latch in about nine seconds.

    The dentist stares at you as if you've performed a miracle. You don't tell him that anyone with a gym membership card could have done it. That's between you and his insurance company.
  #Swap the battery on the keypad. Sometimes the answer is stupider than the question.
    *set wits +1
    *set wry %+5
    You flip open the keypad's cover, pop out the dead nine-volt, put in one from your bag, and hand him the pad. He types his code, which you watch him type, which is his birthday.

    The lock chirps. The door opens. He looks at you as if you've raised the dead. You tell him to change the code, and know he won't.

He tries to tip you forty dollars. Then, holding the door open with one socked foot, with the garbage bag still in his other hand, he leans in and says, "Would you like to come in? For a glass of... there's still half a bottle. Or. You know." His ears go red. "Or."

He's handsome in a tired, expensive way. He's also sad and drunk and forty-six and wearing argyle socks.

*choice speak
  #"Doctor. You're in your socks, and I'm on the clock."
    *set dentist "joked"
    *set wry %+10
    *set guarded %+5
    He laughs, which is the best thing that's happened to him all week, you can tell. "Fair," he says. "Very fair." He tucks the forty into your jacket pocket, and goes in, and you hear the deadbolt turn behind him, properly this time.
  #"Drink some water. Call your sister in the morning. You'll be okay."
    *set dentist "kind"
    *set wry %-10
    *set guarded %-5
    His face does something complicated. "How did you know I have a sister?"

    "Everybody has a sister at two in the morning."

    He puts the forty in your hand and holds on to your fingers a second too long, and lets go. "Thank you," he says, and means something else.
  #Kiss him. Once. Then go.
    *set dentist "kissed"
    *set reckless %+10
    *set guarded %-10
    He tastes like Amarone and loneliness. It lasts about as long as picking a latch. When you step back he's standing in his doorway with his mouth open, and you're in the elevator before either of you can turn it into a mistake.

    The forty, you find later, has somehow got into your pocket anyway.
  #Take the forty, say goodnight, and let the door close.
    *set dentist "goodnight"
    *set guarded %+10
    "Goodnight, Doctor."

    "Philippe," he says to the door as it closes.

*page_break
Forty minutes later, you're eating a Jos Louis in the front seat of a 2009 Econoline outside the Couche-Tard on Wellington, because at 2:47 on a Friday morning in February that is what passes for a dinner break.

The van says SERRURERIE LACROIX 24/7 down both sides in gold letters your grandfather painted in 1978. You repainted them in 2020. They still peel. The heater has two settings, off and a smell of burning dust, and it is on the second one.

Snow comes down through the orange light of the streetlamps like something being sifted. The street is empty except for a snow-clearing convoy two blocks east, all its lights turning, grinding the night into slush.

Your phone buzzes on the dash.

The screen doesn't show a number. It shows two words: [b]LIGNE 3[/b].

There is no Line 3. You grew up here. The métro has green, orange, yellow, blue: one, two, four, five. Line 3 got cancelled before your father was born. It's a joke Montréalers tell tourists.

You answer it anyway. It's the night shift. You answer everything.

"Serrurerie Lacroix."

Silence. Not the silence of a dropped call. The silence of someone breathing carefully on the other end, like a man standing very still in a room where something is asleep.

Then a voice, hoarse, as if it hasn't been used in a long time: [i]"Le fort a besoin de son gardien."[/i]

The Jos Louis stops halfway to your mouth.
*clue c_phrase
*page_break

[i]The fort needs its keeper.[/i]

Your father said it at the door. Every time. Three, four nights a month, the phone would ring after midnight and he'd get up without turning on the light, and you'd hear his keys and your mother's voice, low, and then him, in the hallway, like a joke they shared: [i]Le fort a besoin de son gardien.[/i] And then the door, and the van starting in the lane.

You were fourteen the last time he said it. He didn't come back. Your mother told you he'd left, and after a while you stopped arguing with her, and after a longer while you stopped arguing with yourself.

Nobody else has ever said those words to you. Nobody else knew them.

*choice speak
  #"Sorry, we don't do forts. Condos, cars, the odd chastity belt."
    *set wry %+15
    *set guarded %+5
    The joke comes out the way they always do when something hurts: fast, from the side of your mouth, before you've decided to make it.

    The voice doesn't laugh. You didn't expect it to.
  #"Who is this? Where did you hear that?"
    *set wry %-15
    *set guarded %-10
    It comes out rawer than you meant. Your voice cracks on [i]that[/i] like it's fourteen again.

    The breathing on the line changes. Hitches.
  #"If this is a joke, you picked the wrong man. Tell me who gave you those words."
    *set reckless %+10
    *set nerve +3
    You say it low and even, the voice you use on drunks who've decided you're the reason they can't get into their own house.

    The breathing on the line goes very quiet.
  #Say nothing. Wait him out.
    *set guarded %+15
    You've learned this much on the night shift: whoever talks first is the one who needs something.

    You wait. The heater ticks. The convoy grinds past the end of the street.

"The powder house," the voice says. "Île Sainte-Hélène. By the old fort. There's two thousand dollars under the brick by the door." A pause, like a man choosing between a hundred things to say and failing to pick one. "Please."

The line clicks. The screen goes back to your lock screen, a picture of the van in summer, with nothing in the call log at all.

*page_break

You sit there for a while with the engine running.

In the rear-view mirror, a man looks back at you: twenty-nine, tired, whatever the night has left of his face.
*look
*page_break

The invoice pad on the dashboard has your name printed at the top in your grandfather's font, under the little mark he stamped on every lock he ever built, a cross inside a circle.

*choice
  #Julien Lacroix.
    *set name "Julien"
  #Sam Lacroix.
    *set name "Sam"
  #Gabriel Lacroix.
    *set name "Gabriel"
  #Max Lacroix.
    *set name "Max"
  #Something else.
    *input_text name Your first name:

{name} Lacroix. Locksmith. Born and raised in Verdun, three streets from here, to a francophone locksmith and a Newfoundland girl who came to Montréal for a job at the Northern Electric plant and married the first man who could open her mother's jewellery box without the key. English at home, French in the street, both at once when you're angry.

Your mother died in 2019. Your grandmother is in a care home on Bannantyne and most days she doesn't know who you are. You had one real boyfriend, Marc-André, for four years, and he went to Toronto for a job and you didn't, and that was that. Since then there's been a lot of three-in-the-morning and not much of anything else.

You're not unhappy, exactly. You're just very good at being awake when nobody else is.

As for what you did with your twenties, the years you were supposed to become somebody:
*choice
  #I boxed. Four nights a week at the gym on Wellington, until my knuckles quit before I did.
    *set nerve +15
    *set twenties "boxing"
    You were never going to be good. You were going to be hard to knock down, and you are. The body remembers: you still stand like somebody might swing at you.
  #I tended bar in the Village. You learn a lot about people at last call.
    *set charm +15
    *set twenties "bar"
    Five years at the bar on Sainte-Catherine. You learned how to make a man laugh when he'd come in to cry, and how to cry, once, in the walk-in, and come out smiling.
  #I stayed in the shop. Locks don't lie to you.
    *set hands +15
    *set twenties "shop"
    Your grandfather's bench, your grandfather's tools, the smell of 3-in-One oil. You can open anything with a keyhole. You have never once met a lock you couldn't talk to.
  #Night classes, true-crime podcasts, and a lot of noticing things.
    *set wits +15
    *set twenties "crime"
    Criminology at Concordia, two courses a semester, never finished. Four hundred hours of podcasts on the drive between jobs. You notice things. It's mostly a curse.

*commit_stats
*page_break

Before you pull out, you open the glovebox.

Under the registration, a snow brush with no bristles and a flashlight with no batteries, there's a notebook: black oilcloth covers gone grey at the corners, held shut with a rubber band. [i]Aurèle Lacroix, serrurier.[/i] Your grandfather wrote down every lock he ever designed, in pencil, in a hand like barbed wire. You've carried it in every van since you were twenty. You don't know why. You never read it.

*choice
  #Read it now.
    *set has_notebook true
    *set lore +3
    You thumb through sixty years of locks by the dome light. Bank vaults. Church poor boxes. A lock for a doctor's morphine cabinet on Park Avenue. A lock for "Mme B., the upstairs drawer, she will know why." Then, three-quarters of the way through, a page headed [i]La serrure à chanson[/i].

    A song lock. A drawing of six brass buttons in a row, each wired to a pin. Underneath, in the barbed-wire hand:

    [i]Six notes. The song is the key. The key is a Lacroix.[/i]

    And under that, smaller, as if he'd come back to add it later: [i]Pour le fort. Voir S.[/i]

    For the fort. See S.

    The next page has been torn out. Not cut: torn, fast, leaving a ragged edge of paper in the binding like a row of little teeth.

    [i]S.[/i] Serge. Your father.

    You put the notebook inside your jacket, against your chest, and you don't let yourself think about why.
  #Leave it. You've managed not to read it for nine years.
    *set guarded %+5
    You snap the glovebox shut. Whatever's in there has waited sixty years. It can wait one more night.

It is almost certainly a prank. Or a trap. Or some drunk who knew your father, and heard him say it once at the dépanneur, and thought it would be funny.

Two thousand dollars under a brick.

[i]Please.[/i]

You put the van in gear.
*label bridge
*page_break

The Jacques Cartier Bridge at three in the morning is a steel spine lit in slow colours, pink to blue to gold, that nobody is awake to see. The river under it is black between shelves of ice. On your left the city is a dark glitter, and above it the mountain, and on the mountain the cross, lit white, the way it has been every night of your life.

Halfway across, the island rises out of the dark: Île Sainte-Hélène, and the dead roller coasters of La Ronde, and the great glass bubble of the Biosphère, the American pavilion from Expo 67, a skeleton sphere with nothing left inside it but the wind.

Your father worked nights on this bridge. That's what he told your mother. [i]Sur le pont.[/i]

*if turned_back = 0
  *choice
    #Remember the night he let you ride along.
      *set n1_memory "ride"
      *set guarded %-5
      You were twelve. Your mother was working a double at the hospital and your father couldn't leave you alone, so he put you in the passenger seat of the old van with a blanket and a can of Coke and told you that if you fell asleep, that was fine.

      You remember the bridge lit up gold. You remember him humming. You remember nothing after that, except waking up in your own bed in the morning with the blanket still round you and your shoes still on, and your father at the kitchen table looking at you as if he'd been up all night deciding something.

      You never did remember the drive home.
    #Remember the morning he was gone.
      *set n1_memory "coat"
      *set wry %-5
      His coat was still on the hook. That's the thing you've never been able to get past. A man walks out on his family in February and doesn't take his coat? Your mother said he must have bought a new one. She said it too fast.
    #Don't. You never think about him. You drive.
      *set n1_memory "none"
      *set guarded %+10
      You turn the radio on. Somebody on CHOM is taking requests from insomniacs. You turn it up until it fills the van.

*if turned_back = 1
  Your phone lights up on the passenger seat. LIGNE 3. No voice this time, just a text, one word:

  [i]S'il vous plaît.[/i]
*choice
  #Take the exit for Île Sainte-Hélène.
    *goto fort
  #Turn around. Whatever this is, it isn't your problem.
    *set turned_back +1
    *set guarded %+10
    *if turned_back >= 2
      *node n1_door back
      *goto_scene endings sleep_through
    You take the far exit, loop under the bridge at Longueuil, and head back toward the city with your jaw tight.

    You get as far as the middle of the span.
    *goto bridge

*label fort
*page_break

The access road hasn't been cleared. The van slides, catches, slides. You park where the plough gave up and walk the rest, your kit bag over your shoulder, snow up to your shins.

The old fort sits low among the trees: grey stone the British laid down in the 1820s against an American invasion that never came, now a museum nobody visits in February. Beside it, half sunk in a drift, the powder house: a squat stone building with a pitched roof and one door.

The door is iron, and old, and it has been painted so many times it's gone soft at the edges like a bar of soap. Someone has bolted a plate of newer steel over the middle of it. The plate has no keyhole. It has six brass buttons in a row, worn gold by fingers, like the keys of a very small piano.

Above them, stamped into the steel, is a cross inside a circle, and [b]A.L. 1967[/b].

Aurèle Lacroix. Your grandfather.

The brick by the door is loose. Under it is a bank envelope with twenty hundred-dollar bills inside. Paper ones: the old brown kind, with the snowy owl on the back. The Bank of Canada stopped printing those in 2011. The year your father left.

There's something else in the envelope, behind the money. Stiff. Square.

A Polaroid.

It's faded to the colours of old tea, and the corners are soft from being held. It's summer in the picture: green leaves, hard sunlight, the powder house behind, this door, this exact door, with the steel plate shining new. In front of it a man is kneeling in the grass with his arm around a boy.

The man is your father. Thirty-nine, forty. His good work shirt. His hand on the boy's shoulder, big, square, a locksmith's hand.

The boy is you. Twelve. Skinny, sunburnt, squinting, in a Spider-Man T-shirt you'd forgotten you ever owned. You're both looking at the camera. Neither of you is smiling. You look like two people who have just been told something enormous.

On the white strip at the bottom, in blue ballpoint, in your father's small tidy capitals: [b]S. + {name}. AOÛT 2009.[/b]

You've been to this island a hundred times. La Ronde, every summer, screaming on the Monstre with a mouth full of cotton candy. But never here. Never this door. You would have sworn it on your mother's grave.

*set has_photo true
*choice
  #Put it in your wallet, behind your licence, where you'll feel it.
    *set photo "wallet"
    *set guarded %-5
    You slide it in behind your licence. It sits against your hip like a hand.
  #Study it until your flashlight dims. Look for anything. Anything at all.
    *set photo "studied"
    *set wits +2
    You find three things. A second shadow in the grass, long, from whoever held the camera. A glint in your father's shirt pocket that might be keys. And your own twelve-year-old hands, in the picture, held stiffly at your sides with the fingers spread, the way you hold them when you've just washed them and don't want to touch anything.

    Or the way you hold them when you've just learned to play something.
  #Put it back in the envelope, face down. Not now. You can't do this now.
    *set photo "face_down"
    *set guarded %+10
    You slide it back in without looking at it again. Your hands are shaking. You tell yourself it's the cold.

Your breath smokes. Somewhere across the water, very faintly, a church bell counts the quarter hour.

You take out your phone. Your thumb knows where it wants to go before you do.

*choice
  #Call 911. Tell them there's a break-in at the fort, and let someone with a badge open this door.
    *set called "911"
    *set reckless %-10
    It rings once. Then the line fills with static, and under the static, very faint, a man is humming.

    Six notes. Over and over. A tune you almost know, the way you almost know a word on the tip of your tongue.

    You hang up. Your hand is shaking, and not from the cold.
  #Call Marc-André. It's three in the morning in Toronto too.
    *set called "marc"
    *set guarded %-10
    *set wry %-5
    It rings four times. You're about to hang up when he answers, thick with sleep.

    "...Julien?" He never did learn to stop calling you by the first name he thought you had, the night you met, at a bar where you were pretending to be someone else. "Is everything okay? It's three in the morning."

    "I know."

    A rustle. Somebody else in the bed with him says something, low, and he says [i]it's fine, go back to sleep[/i], and you hear a door close as he goes into another room. Four years. You used to be the somebody else in the bed.

    "Are you in trouble?"

    You look at the brass buttons in the steel. At your grandfather's mark. "I don't know yet."

    "You sound scared," Marc-André says. "You never sound scared. That's the whole thing about you. That was always the whole thing." A pause. "Do you want me to stay on the line?"

    You want it more than you've wanted anything in two years. "No," you say. "Go back to bed. I'm sorry I woke you."

    "Call me tomorrow," he says. "Tell me it was nothing."

    You hang up. You don't know if you'll be able to.
  #Text Dr. Arsenault. "Change your code."
    *set called "dentist"
    *set wry %+10
    You send it. Three dots appear at once, which says everything you need to know about how the dentist is sleeping.

    [i]I will. Thank you. Also sorry about the. You know.[/i]

    You smile at the phone despite everything. Somewhere in this city a man in argyle socks is also awake. It helps, a little, in the stupidest possible way.
  #Put the phone away. Nobody you could call would understand this anyway.
    *set called "nobody"
    *set guarded %+10
    You put it back in your pocket. That's the other thing about the night shift. You get very used to being the only one who's there.

*page_break

You kneel in the snow with your penlight in your teeth and look at the lock.

It's a combination lock, of a kind you've only ever seen in your grandfather's notebooks: six pins, each one keyed to a button, and the buttons have to be pressed in the right order, or the whole thing resets with a soft, smug click. [i]Une serrure à chanson[/i], he called it: a song lock. The order is the song.

You don't know the song.

*choice
  *if (ngplus) #✦ Let your hands decide. You've done this before. You don't know how you know that.
    *achieve deja_vu
    *set opened_by "memory"
    *set lore +5
    *node n1_door finesse
    You take off your glove. Your fingers find the buttons as if they were warm.

    Four. One. Four. Six. Two. Three.

    Six notes, and you hear them in your head as you press them, in a man's voice, humming. The lock opens with a sound like a sigh. For a second the night smells of your father's coat.
  *if (has_notebook) *selectable_if ((wits >= 30) or (hands >= 40)) #Think like your grandfather. He always started a song on the fourth note. He said it was the only honest one.
    *set opened_by "finesse"
    *set wits +5
    *set lore +3
    *node n1_door finesse
    You don't know the song. But you know the man who wrote it, a little, from sixty years of his handwriting. [i]Commence toujours par le quatre[/i], he wrote in the margin of a church lock in 1971. Always begin on the fourth.

    Four. Then the one that feels loosest after it. Then the one after that. It's like playing a piano in the dark by listening for which key is out of tune. Twice the lock resets with its smug little click. On the third try, six pins drop in a row, and the lock opens with a sound like a sigh.
  *selectable_if (hands >= 45) #Pick it by feel. Somewhere in there, one pin is lazier than the rest.
    *set opened_by "finesse"
    *set hands +5
    *set reckless %-5
    *node n1_door finesse
    You take off your glove and lay your fingertips on the buttons like a man taking a pulse. You press each one a hair, not enough to count. Five of them push back. The fourth one gives.

    It takes you eleven minutes and every trick your grandfather wrote down. The fourth, then the first, then the fourth again, and on it goes. When the sixth pin drops, the lock opens with a sound like a sigh.
  #Drill it. Two thousand dollars buys a lot of forgiveness.
    *set opened_by "force"
    *set reckless %+10
    *node n1_door force
    You unzip the kit bag and take out the cordless drill and the cobalt bit, and you put your grandfather's mark in the crosshairs, and you apologise to him out loud, and you drill.

    The bit screams. Sparks spit into the snow. For a long, bad minute the steel won't take it. Then something gives inside the plate, and the buttons all sink at once, and the lock opens with a sound like a sigh.

*achieve opened
The door swings inward on its own.

The air that comes out is warm.

*page_break
*art vault
Stairs go down into the dark, stone worn into bowls by boots. You follow your penlight. The warmth thickens as you go, dry and heavy, like the air in front of an open oven. Your cheeks prickle. The snow on your boots melts into the steps.

At the bottom is a vaulted brick room the size of your apartment, and in the middle of the room is a fire that isn't burning anything.

It hangs in the air: a column of banked coals, red and black, breathing. Smoke moves inside it, slowly, in the shape of shoulders, of a bowed head. Around it, at the height of a man's chest and waist and knees, three bands of brass hang in the air with nothing holding them up. They're engraved all the way round with a script you can't read: flowing, joined-up, beautiful.

Each band has a small brass lock. Each lock has a cross inside a circle.

The coals brighten as you watch, like someone waking. Two points of light open in the smoke, at about the height of your eyes.

"What year," says the fire, in a voice like a match being struck, "is it?"

*choice speak
  #"Twenty twenty-six. You missed a lot. It's mostly bad."
    *set wry %+10
    *set rel_nadim +10
    A sound comes out of the coals that might, a long time ago, have been a laugh.
  #"It's 2026. How long have you been down here?"
    *set wry %-10
    *set rel_nadim +5
    The two lights flicker. "Since the summer of sixty-seven," it says. "So. A while."
  #"First you tell me what you are."
    *set reckless %+5
    *set rel_nadim +5
    *set des_nadim +5
    The lights narrow. "Rude," the fire says, "and fair."
  #Say nothing. Back up one step toward the stairs.
    *set guarded %+10
    *set reckless %-5
    The lights follow you. "Please don't," it says, very quietly. "It has been such a long time since anyone came down the stairs."

"Nineteen sixty-seven," the fire says, as if tasting the distance. "Is the monorail still running? The one at Expo. It went right through the American pavilion, you know. You could see it from here, sometimes, through the stone. I used to count the cars."

"The monorail," you say, "has been gone longer than I've been alive."

The coals settle, dimmer. "Ah," it says. "Well."

The lights study you. "And you are?"

*choice
  #Tell it your name. "{name}. {name} Lacroix."
    *set n1_gave_name true
    *set rel_nadim +5
    *set guarded %-5
    The coals flare at the second name, bright as a struck match, and then settle. "Where I come from," the fire says, "a name is the first gift. You gave it very easily."

    "Is that bad?"

    "It's rare," it says. "I'll decide later whether it's bad."
  #"You first."
    *set guarded %+5
    "My name is the only thing I own," it says. "Forgive me if I don't give it to the first man down the stairs. Even a helpful one."
  #"Locksmith's fine."
    *set wry %+5
    "Locksmith," it agrees, and sounds almost amused. "Yes. That's what you are, isn't it. That's what all of this has been waiting for."

*page_break

"You opened the door," the fire says. "By the law of my kind, whoever opens what was shut is owed. I am in your debt, locksmith. That is the good news."

"What's the bad news?"

"You opened the door."

The brass bands turn slowly in the air. Up close, the script on them is warm to look at, the way a stove is warm.

"The bands," the fire says. "They're the same work as the door. His work, whoever he was." The lights move to your chest, where your jacket has fallen open on the embroidered patch: SERRURERIE LACROIX. They stay there a long moment. "Ah," it says again, softer. "Of course."

"Please."

*choice
  #Unlock the bands, carefully, one pin at a time, the way your grandfather would have.
    *set n1_nadim "careful"
    *set rel_nadim +15
    *set hands +3
    *set guarded %-5
    You work the chest band first, then the waist, then the knees. The pins are the same song as the door, and your fingers remember it now. The brass is hot enough to hurt, and you don't stop.
  #"What are you? Tell me the truth, and I'll open them."
    *set n1_nadim "asked"
    *set lore +5
    *set rel_nadim +5
    *set wits +1
    "A djinn," it says, without hesitating. "Of smokeless fire, from the hills above a city that wasn't called Beirut yet. Bought on a railway platform under this city in 1958, and chained here in 1967 by people who needed something to burn." A pause. "That's the truth. It's not the whole truth. The whole truth would take all night, and I don't think we have all night."

    You open the bands.
  #"What happens if I do?"
    *set n1_nadim "hesitated"
    *set reckless %-10
    *set wits +1
    "The lights go out all over the city," the fire says, "a little. Some things that were forgotten will start to be remembered. And I stop burning." The coals pulse. "I've been burning for fifty-nine years, locksmith. I'd like to stop."

    You look at the bands for a long moment. Then you open them.
  #Back away. This is too much. Whatever it is, it was locked up for a reason.
    *set n1_nadim "left"
    *set rel_nadim -15
    *set reckless %-10
    *set guarded %+10
    You get as far as the fourth step. Behind you, the fire doesn't beg. It doesn't say anything at all. The light on the brick wall just goes very slightly dimmer, like someone turning their face to a wall.

    You stop on the stairs.

    You're your father's son. And your grandfather built this lock.

    You go back down, and you open the bands, and you don't look at the lights while you do it.

The last lock opens. The three bands of brass fall at once and ring on the floor like dropped plates.

The fire stands up.

That's the only way to say it. The coals draw in and up and together, and the smoke pulls tight around them like a coat being shrugged on, and then there is a man standing in the middle of the vault: forty, maybe, or four thousand. Brown skin, black hair falling in waves to his shoulders, a short dark beard. A charcoal robe whose collar is embroidered in gold thread that catches the light like embers. His eyes are amber all the way through, and they're still burning.

*meet nadim
He looks at his hands for a long time. He opens and closes them. At the edges he's already fraying back into smoke, like a man standing in a strong wind.

*temp asks 0
*label nadim_questions
*choice
  *hide_reuse #"Who put you here?"
    *set asks +1
    *set lore +2
    "People who needed something to burn," he says. "You'll meet them. They'll be very polite, and they'll shake your hand, and one of them will offer you a drink." His eyes go to the stairs. "Don't drink it."
  *hide_reuse #"Why did the lock open for me?"
    *set asks +1
    *set wits +1
    "Because your grandfather built it to," he says. "Only a Lacroix hand to open it, and only a Lacroix hand to close it. He was very proud of that. He told me so, through the door, the day he finished." A pause. "He cried, too. I don't think he knew I could hear."
  *hide_reuse #"Are you dangerous?"
    *set asks +1
    *set rel_nadim +3
    "To whom?" he says, and waits, as if it's a real question and he'd genuinely like your answer.
  *hide_reuse #"Where will you go?"
    *set asks +1
    *set rel_nadim +5
    *set des_nadim +3
    "Up," he says, and for the first time something in his voice is young. "I haven't seen the sky since the summer of sixty-seven."
  #Say nothing. Let him go.
    *goto nadim_done
*if asks < 2
  *goto nadim_questions
*label nadim_done

"My name is Nadim," he says. "Remember it. You'll need it, and it's the only thing I own." He looks at you, and the heat of the look is like standing too close to a stove. "I'll find you, creditor. We have business."

*if n1_nadim = "left"
  *remember nadim You walked away from him in chains, and came back.
*elseif n1_nadim = "careful"
  *remember nadim You unlocked him carefully, like his chains mattered.
*elseif n1_nadim = "asked"
  *remember nadim You made him tell you what he was before you set him free.
*else
  *remember nadim You asked what it would cost before you set him free.
Then he comes apart. Not like a man disappearing: like a fire going out all at once, a gust of hot smoke that pours past you and up the stairs, and up, and out into the night.

The vault goes cold. It's just a brick room now, with three bands of brass on the floor and a locksmith standing in the middle of it with his mouth open.

*page_break

You come up the stairs into the snow, and the city starts to ring.

It begins across the water: one bell, then ten, then every bell on the island, hundreds of them, big and small, near and far, the way they ring at midnight on New Year's, except it's 3:33 on a Friday morning in February and there is no reason at all.

Across the river, the lights of Montréal flicker. The whole city, block by block, all at once: out and back, like a held breath let go.

Then you hear running.

Two figures are coming across the snow from the trees at a dead sprint, long coats flying behind them. One of them is ringing a handbell as he runs, a bright hard sound that goes straight into your back teeth.

You have exactly enough time to think [i]oh, good, cops[/i] before the taller one reaches you.

*page_break
He hits you like a door slamming, one forearm across your chest, and pins you to the iron of the powder house so hard your kit bag drops into the snow.

*meet lazare
Up close he's a lot of things at once. Tall. Your age, give or take. Dark curls cropped too short, as if someone keeps making him cut them. A long black wool coat, snow on the shoulders, a dark red scarf. There's a scar on his chin, pale, like a thin crack in china. He smells of cold air and candle smoke. His eyes are almost black, and furious, and fixed on your face like you're a question he's going to answer by force.

"Don't move," he says, in French, and then, in English, when you blink at him, "Don't. Move."

He lifts the handbell. It's brass, the size of a teacup, on a leather cord around his neck. He holds it an inch from your temple and rings it once, hard.

The sound goes through your skull like a nail.

"[i]Oublie[/i]," he says. Forget.

You wait for something to happen. Nothing happens, except that your ear is ringing.

"...Ow?" you say.

*set bell_failed true
*achieve unhushable
He stares at you. Then he stares at the bell as if it's broken, and turns his head without taking his arm off your chest.

"Agathe," he says. "Ring it again."

*meet agathe
The second hunter catches up. A woman, early thirties, freckled, sandy hair cut short, breathing hard, a bell of her own already in her fist. She gives you a look of polite apology and rings it beside your other ear.

Nothing. Well, a headache.

"Huh," says Agathe.

"That's not possible," says the tall one.

"And yet," says Agathe.

He leans in until you can feel his breath on your face. "What are you?"

*choice speak
  *if (mem_enzo) #✦ "Hello, Enzo."
    *achieve deja_vu
    *set rel_lazare +5
    *set des_lazare +10
    *set n1_lied false
    You don't know why you say it. The name is just there in your mouth, like a word from a dream.

    He goes white. Not angry: white, as if you'd put your hand through his ribs and touched something. His arm drops off your chest. For a second he looks about ten years old.

    "Who told you that name," he says, barely audible, and then, before you can answer, he shakes his head hard, like a man shaking off a blow. "No. Nobody. It's nothing. It's a thing people say to me." His voice is steady again. His hands aren't. "What are you?"

    "A locksmith," you tell him, which is true.
    *remember lazare You called him Enzo. He doesn't know why it hurt.
  #"A locksmith. Someone called me. I opened a door. That's all I know."
    *set wry %-10
    *set guarded %-10
    *set rel_lazare +10
    *set n1_lied false
    He searches your face for the lie. You watch him not find it. Something in his jaw eases by a millimetre.
    *remember lazare You told him the truth, with his arm on your throat.
  #"I'm... lost? I was looking for the Biosphère."
    *set guarded %+15
    *set n1_lied true
    *set rel_lazare -10
    "At three in the morning," he says. "In a blizzard. With a drill."

    "I'm very into geodesic domes."

    Agathe snorts. He doesn't.
    *remember lazare You lied to him, badly, the first time you met.
  #"Ring it one more time and I start charging by the hour."
    *set wry %+15
    *set rel_lazare -5
    *set rel_agathe +10
    *set n1_lied false
    Agathe laughs out loud, and covers it with a cough. The tall one's jaw tightens. You get the strong impression that people don't usually joke at him.
  #"You know, you could just ask me to dinner. The bell thing is a lot."
    *set reckless %+10
    *set guarded %-10
    *set des_lazare +15
    *set n1_lied false
    Colour goes up his neck, visible even in the dark. He doesn't move his arm. He doesn't move at all, for a second too long. Then he says, very precisely, "I don't eat dinner with strangers."

    "Lucky we're getting to know each other."
    *remember lazare You flirted with him while he had you pinned to a door.

"Lazare," Agathe says quietly. She's looking past you, through the open door, down the stairs.

He sees it too. The warm air still breathing up out of the dark. The bands of brass on the floor below.

What goes across his face isn't anger. It's fear.

"What did you let out?"

*choice speak
  #Tell him the truth. "A man made of fire. He said his name was Nadim, and that I'm owed."
    *set rel_lazare +5
    *set rel_agathe +5
    *set lore +2
    *set told_djinn true
    Agathe crosses herself, fast, like swatting a fly. Lazare doesn't. He just closes his eyes for a second, the way you do when a doctor tells you a number you were afraid of.
  #"A lot of warm air, mostly."
    *set wry %+10
    Lazare looks at you as if he'd like to ring the bell again, very hard, directly into your skull.
  #"You first. Who the hell are you people?"
    *set reckless %+5
    *set wits +1
    Agathe answers, because Lazare clearly won't. "The Carillon," she says, as if that explains it. When it doesn't: "We ring the bells. We keep the Hush. We make sure people like you don't have to know about things like that." She nods at the door. "Usually it works."
    *codex carillon

He takes out his phone. It's the only modern thing about him. He turns away from you and speaks into it in a low voice, in a French that sounds like it was learned in a seminary.

"[i]Mon père.[/i] Yes. The fort on Sainte-Hélène. Open. ... No. Nothing inside. The bands are on the floor." A long pause. "A sleeper. A locksmith. ... No, Father. He doesn't Hush. Agathe tried too." A longer pause. His shoulders set. "Yes, Father. I understand. ... [i]Oui, mon père.[/i]"

He hangs up and doesn't turn around right away.

"Who was that?" you say.

"The Bourdon," says Agathe, and then, seeing your face: "Our Grand Master. Like the big bell. It's a whole thing." She looks at Lazare's back. "What did he say?"

"To bring him in," says Lazare, to the dark. "Whatever it takes."

*page_break

Before you can answer, something howls on the river.

It's close. Far closer than it has any right to be, on an island in the middle of a city. Another voice answers it, and another. Out on the ice of the channel between the island and the shore, shapes are running: long and low and grey, and fast, much too fast, coming straight at the fort.

Lazare swears in two languages and takes his arm off your chest to put himself between you and the river. Iron slides out of his sleeves into both hands: long nails, a railway spike's width, black and pitted and wicked. Agathe rings her bell, a warning peal.

The wolves come up off the ice onto the snow, and slow, and start to change.

It isn't pretty. It isn't quick. Fur goes back into skin like water into sand, spines crack and straighten, and a big grey wolf rises onto its hind legs and becomes a big bearded man, steaming in the cold. He's wearing jeans, boots and an unzipped parka over nothing at all, and, somehow, a lumpy hand-knitted red toque with a white pompom, the kind somebody's grandmother makes.

*meet dario
He grins at Lazare with a lot of teeth.

"Desautels," he says. "Out past your bedtime."

"Santangelo," Lazare says, like a door shutting. "You're on Carillon ground."

"It's a park, bro. There's a sign. [i]Chiens en laisse.[/i]" He tugs his parka closed with enormous dignity. "Somebody rang every bell in the city at three in the morning, the lights went out in Saint-Léonard, and my whole pack woke up with a nosebleed. So." His eyes find you, and go wide with interest. "Who's this?"

*meet manon
A woman steps up beside him: forties, dark hair shot with grey pulled back in a braid, a leather jacket, perfectly calm. She looks at the open door of the powder house, then at you, and says to the big man, quietly, "Dario. He's a sleeper."

"He's a problem," says Lazare.

"He's cute," says Dario. "Those aren't the same thing. Usually." He looks back at Lazare, and something passes between them that you don't have the language for yet: too long, too hot, gone.

Not all of the wolves have changed back.

The one at the end of the line, young and rangy, with a torn ear, is still on four legs, and still staring at Agathe's bell. Its lips peel back. It hasn't taken its eyes off the brass since it came up off the ice.

"Luc," Manon says, very quietly. "No."

It goes anyway.

It's fast in a way nothing alive should be fast: across the snow in two bounds, straight at Agathe, who's turning, too slow, her bell coming up.

*choice
  *selectable_if (nerve >= 20) #Put yourself between them.
    *set saved_agathe "between"
    *set nerve +5
    *set reckless %+10
    *set rel_agathe +15
    *set rel_manon +5
    You don't think. You're just there, suddenly, between a woman you met four minutes ago and a wolf in mid-air, with your kit bag held up in front of you like a shield.

    The wolf hits the bag. Three kilos of tools and a cordless drill go into its chest and you both go down in the snow. Its breath is hot on your face. Its teeth are an inch from your throat.

    And then a big hand closes on the scruff of its neck and hauls it off you like a puppy.
  #Grab Agathe by the coat and pull her down.
    *set saved_agathe "pulled"
    *set rel_agathe +10
    *set reckless %-5
    You catch a fistful of her coat and yank. She goes over backward into the snow on top of you, and the wolf sails through the space where her throat was and skids, scrabbling, on the ice by the door.

    Before it can turn, a big hand closes on the scruff of its neck and hauls it up like a puppy.
  #Shout. Not a word, just noise, as loud as you can.
    *set saved_agathe "shout"
    *set rel_manon +5
    It's the stupidest thing you could possibly do, and it works: the wolf flinches mid-leap and lands wrong, and Agathe gets her bell up, and Lazare's iron is already moving.

    Before the iron can land, a big hand closes on the scruff of the wolf's neck and hauls it back like a puppy.
  #Freeze.
    *set saved_agathe "froze"
    *set reckless %-10
    *set guarded %+5
    Your body won't move. You watch it happen in slow motion: the wolf in the air, Agathe turning, Lazare's arm coming up with the iron already in it.

    Before the iron can land, a big hand closes on the scruff of the wolf's neck and hauls it back like a puppy.

Dario holds the wolf up at arm's length, dangling, all four legs kicking. He's still smiling. It isn't a nice smile any more.

"Luc," he says conversationally. "[i]Qu'est-ce que je t'ai dit[/i] about the ladies with the bells?"

The wolf whines.

"Exactly." He tosses it into the snow, where it shrinks, whimpering, into a naked teenage boy with a torn ear, who scrambles up and runs for the ice with his hands over his crotch. Manon sighs, takes off her leather jacket, and follows him.

*if saved_agathe = "between"
  Dario looks down at you, flat on your back in the snow with your kit bag on your chest, and his eyebrows go up and stay there.

  "Okay," he says. "Okay. Who [i]are[/i] you?"

  Lazare pulls you to your feet by your collar. For a second he doesn't let go. He's looking at you as if you've done something that doesn't fit anything he knows about sleepers.
  *remember agathe You put yourself between her and a wolf.
  *remember lazare You put yourself between Agathe and a wolf.
*elseif saved_agathe = "pulled"
  Agathe lies on top of you in the snow for a second, breathing. "Thank you," she says, into your collar. "That was going to be very embarrassing."
  *remember agathe You pulled her out of a wolf's way.
*elseif saved_agathe = "froze"
  Agathe gets up, dusts off her coat, and doesn't look at you. You don't blame her.

"He's a kid," Dario says to Lazare, before Lazare can open his mouth. "He's been a wolf for two months. He'll apologise, and he'll mean it, and if you touch him with that iron, Desautels, I'll feed it to you."

"Keep your animals on a leash, then."

"You first."

*page_break

They argue about you as if you're a car at an auction.

The Carillon has jurisdiction over any breach of the Hush. The Sept-Ans have jurisdiction over "whatever the fuck we feel like, it's four in the morning." The fort is a Compagnie seal and nobody touches Compagnie seals. Nobody's touched anything, Desautels, relax your ass. The Bourdon will want to see him. The Bourdon can come see him himself, then, and bring his nice little bells.

Through all of it Lazare doesn't lower the iron, and Dario doesn't stop smiling, and they never once look away from each other.

Finally Dario turns to you and spreads his hands. "Okay. Law of the Veillée, even his: nobody takes a sleeper anywhere he doesn't want to go. So, cutie. Where do you want to go?"

*choice speak
  #@lazare "With him." You nod at Lazare. "He's the one with the questions. I want answers."
    *set n1_with "lazare"
    *set rel_lazare +10
    *set rel_dario -5
    *node n1_with lazare
    Dario's smile doesn't move, but his eyes do. "Your funeral," he says lightly. "He's a terrible date. Never pays."

    "Go home, Santangelo," Lazare says.

    Dario looks at him for one more second. Then he lifts two fingers to his toque, turns, and goes down onto the ice, already changing.
    *remember dario You chose Lazare over him, the first night.
  #@dario "Him." You nod at Dario. "Anyone who wears a toque into a fight is somebody I want to know."
    *set n1_with "dario"
    *set rel_dario +10
    *set rel_lazare -5
    *set wry %+5
    *node n1_with dario
    Dario throws back his head and laughs, loud enough to set a dog barking somewhere across the water. "You hear that, Desautels? The toque works."

    Lazare looks at you, and then at Dario, and something shuts in his face like a door. "This isn't over," he says.

    "It never is with you," Dario says, almost gently.
    *remember lazare You chose Dario over him, the first night.
  *selectable_if (nerve >= 25) #Neither. Grab your bag and run for the van.
    *set n1_with "ran"
    *set reckless %+10
    *set nerve +3
    *node n1_with ran
    You don't decide to. Your legs decide. You grab the bag and go, knee-deep, floundering, breath tearing out of you in clouds.

    Behind you, nobody fires anything. Somebody laughs, big and delighted. You reach the van, fall into it, and the engine catches on the first try for the first time since Christmas.

    In the mirror, a grey wolf lopes along beside the van for a hundred metres, tongue out, as if it's enjoying itself. Then it veers away into the trees.
    *remember dario You ran, and he let you.
  *selectable_if ((wits >= 35) or (charm >= 35)) #Play them against each other. "I'll go with whichever of you wins."
    *set n1_with "played"
    *set wits +2
    *set charm +3
    *set wry %+5
    *node n1_with played
    *achieve both_ways
    "Honestly," you say, "I'll go with whichever one of you wins."

    It's a joke. It's mostly a joke. You expect them to laugh.

    Instead they look at each other, and it's like watching a match drop into gasoline. Lazare says something in French, low, that makes Dario's grin vanish. Dario says something back in Italian that you're fairly sure is about Lazare's mother. And then they're on each other, iron and fists, in the snow, and it isn't a fight between enemies. It's a fight between two people who know exactly where the other one bruises.

    Agathe sighs. Manon sighs. They look at each other, two women who have done this before.

    You pick up your bag and walk to the van. Nobody stops you.
    *remember lazare You set him and Dario on each other and walked away.
    *remember dario You set him and Lazare on each other and walked away.

*page_break
*if n1_with = "lazare"
  Lazare drives a black 2004 Buick that smells of candle wax and gun oil, and he drives it exactly at the speed limit, even on an empty bridge at four in the morning. Agathe takes your van. She says she'll bring it back. You believe her, somehow.

  He doesn't talk for the first ten minutes. Then: "Your name."

  You tell him.

  "{name} Lacroix." He says it as if he's filing it somewhere. "You shouldn't be able to hear a bell like that and keep your memory."

  "Sorry."

  "It's not a compliment."

  In the light of the bridge, his profile is all edges. You look at the scar on his chin. He sees you looking, and his hand goes up to it, as if he's forgotten it's there and you've reminded him.

  "I don't know how I got it," he says, and then looks as if he didn't mean to say it out loud.

  *choice speak
    #"You're supposed to take me to your Bourdon. Whatever it takes. Are you going to?"
      *set n1_ride "bourdon"
      *set rel_lazare +5
      *set wits +1
      His hands tighten on the wheel. "Yes," he says. Then, after the whole length of the Sainte-Catherine exit: "Not tonight."

      "Why not?"

      "Because he'll want to know why the bell didn't work on you," Lazare says, "and I'd like to know first."
    #"Tell me about the bells. Why do they make people forget?"
      *set n1_ride "bells"
      *set lore +5
      *set rel_lazare +5
      "They don't. Not by themselves." He glances at you, deciding how much to say. "The Hush is a spell over the whole island. The bells are... a doorbell. They remind it you're there. It does the rest." A pause. "Every bell in every steeple in this city is tuned to it. That's what the Carillon is. Bell-ringers. That's all we've ever been."

      "And the iron in your sleeves?"

      "For when ringing isn't enough."
      *codex carillon
    #"The scar suits you. For what it's worth."
      *set n1_ride "scar"
      *set des_lazare +10
      *set reckless %+5
      He goes absolutely still in the driver's seat, which is an impressive thing to do at a hundred kilometres an hour.

      "It's not worth much," he says eventually, to the windscreen. But you see the side of his mouth, for just a second, before he controls it.
      *remember lazare You told him his scar suited him.
    #Say nothing. Watch the city go by.
      *set n1_ride "quiet"
      *set guarded %+5
      *set rel_lazare +3
      He seems to like that better than anything you could have said. The silence in the car goes from hostile to something else: two people who work nights, sharing the dark.

  At the bottom of the bridge, waiting at a red light at an empty intersection, he says, without looking at you: "Why did you open it?"

  *choice speak
    #"Because someone used my father's words. And my father's gone."
      *set rel_lazare +10
      *set guarded %-10
      He's quiet so long the light turns green and back to red again. "My parents are gone too," he says eventually. "A loup-garou. When I was ten." He puts the car in gear. "I'm sorry about your father."

      It's the most human thing he's said all night. You get the feeling it cost him something.
    #"Two thousand dollars. I've got a van payment."
      *set wry %+10
      *set rel_lazare -3
      "That's all?" He sounds almost disappointed.

      "That's never all," you admit. "But it's all I'm telling a man who pinned me to a door."
    #"Because it was a lock. That's what I do. I open things."
      *set rel_lazare +5
      *set des_lazare +5
      He glances at you, sideways, as if you've said something much more interesting than you meant to. "Yes," he says. "I noticed."

  He's supposed to take you in. You can tell by the way his hands keep tightening on the wheel. Instead, at the bottom of the bridge, he asks where you live, and when you say you don't want to go home yet, he drives you to the Village without a word and stops outside a bar with no name on the door.

  "Don't leave the island," he says.

  "It's an island. Where would I go?"

  He almost smiles. He definitely doesn't. He drives away.
*elseif n1_with = "dario"
  Dario's tow truck is parked on the Longueuil side of the bridge with the hazards on and a dreamcatcher, a rosary and a pine-tree air freshener that gave up years ago hanging from the mirror. He drives it like he's angry at the road. He talks the entire way.

  By the time you reach the city you know that his name is Dario Santangelo, that he's thirty-one, that he sings karaoke every Thursday at a bar in Saint-Léonard and is "honestly elite, don't let anyone tell you different," that his nonna knitted the toque, and that the woman with the braid is Manon and she used to be a nun and she will bite you if you're rude to her.

  You don't know what he is. He doesn't say, and you don't ask, and it hangs in the cab between you like the smell of wet fur.

  He buys you a poutine at La Banquise at four in the morning and watches you eat it with his chin on his fist.

  *choice speak
    #"So are we going to talk about the part where you were a wolf?"
      *set n1_ride "wolf"
      *set lore +5
      *set rel_dario +5
      He grins with his mouth full. "Loup-garou," he says, when he's swallowed. "Seven years without your Easter duties, bang, you're a wolf. It's in all your mémé's stories. Didn't she tell you?"

      "She told me. I thought it was to make me go to church."

      "It was," he says cheerfully. "Didn't work on me either."
      *codex loup_garou
    #"You've got a little gravy..." Reach over and wipe it off his beard with your thumb.
      *set n1_ride "gravy"
      *set des_dario +15
      *set reckless %+5
      He goes still under your thumb. Then he laughs, low, surprised at himself, and his eyes go dark and interested in a way that has nothing to do with poutine.

      "Careful, Lacroix," he says. "I bite."

      "So I keep hearing."
      *remember dario You wiped the gravy off his beard with your thumb, the first night.
    #"Desautels. The one with the bells. What's the story with you two?"
      *set n1_ride "lazare"
      *set wits +2
      "We go way back," Dario says. Something complicated goes on behind his eyes and then shuts. "He's a pain in my ass. Eat your fries."

      You eat your fries. You notice that he doesn't touch his for a full minute afterwards.
    #Eat your poutine. It's four in the morning and you've earned it.
      *set n1_ride "eat"
      *set rel_dario +5
      *set guarded %+3
      You eat the whole thing, cheese curds squeaking, and he watches you do it with open approval, as if you've passed a test you didn't know you were taking.

      "A man who eats," he says. "I respect that."

  Outside, in the cab, with the engine running for the heat, he's quiet for a whole minute, which you're starting to understand is a long time for him.

  "The bells," he says. "Desautels rang them in your ear and nothing happened."

  "Is that bad?"

  "It's never happened." He looks at you with an odd, careful attention. "You should know something about him. Lazare. He's not a bad guy. He's the worst guy in the world, but he's not a bad guy. You understand?"

  *choice speak
    #"No. But I'd like to. Tell me about him."
      *set rel_dario +5
      *set wits +1
      He opens his mouth. Something stops it. "Some other time," he says, and looks out at the snow. "It's a long story, and I only know the second half."
    #"You like him."
      *set rel_dario -2
      *set des_dario +5
      *set wits +2
      Dario laughs, loud and fake, and turns the radio on. "I like karaoke. I like poutine. I like big dumb trucks," he says. "Desautels is a pain in my ass."

      He drives the next four blocks with the back of his neck gone dark red.
      *remember dario You told him you thought he liked Lazare.
    #"I'm more interested in you, honestly."
      *set des_dario +10
      *set reckless %+5
      He turns and looks at you, full on, in the green light of the dash. Whatever he sees makes him grin, slow and pleased and a little dangerous.

      "Yeah?" he says. "Good."

  He drops you in the Village, outside a bar with no name on the door. "Trust me," he says. "You're gonna want a drink, and this is the only place open that'll serve you what you need."
*elseif n1_with = "ran"
  You don't go home. They could find your home; your address is on the side of the van in gold letters. You drive in circles through the empty grid of downtown until your hands stop shaking, and then you find yourself parked in the Village, outside a bar with no name on the door, with its window lit.

  At the corner of Sainte-Catherine and Amherst, stopped at a red light nobody else is awake to obey, you look up and there's a big grey wolf sitting in the middle of the intersection in the falling snow, watching you, with its tongue out.

  It tilts its head. The light goes green. It gets up, stretches like a dog in front of a fire, and trots off down Amherst without looking back.

  You don't remember deciding to come here. You go in anyway.
*else
  Agathe catches up with you at the van. You brace for handcuffs. She just leans on the door with her bell in her pocket and looks back at the two men rolling in the snow.

  "For what it's worth," she says, "that's the most fun I've had on this job in four years." She knocks twice on the roof. "Go. I'll tell him you ran. He'll believe it. He always believes the worst."
  *set rel_agathe +10

  You drive back across the bridge with the radio off and your heart going like a hammer. In the mirror, for a long time, you can see two small dark figures in the snow by the fort, still at it.

  You don't go home. You drive until you find yourself parked in the Village, outside a bar with no name on the door, with its window lit.

*page_break
The bar is called Chez Normande. You know this because it's written on the ashtrays, which are older than you.

It's long and narrow and brown, with a pressed-tin ceiling, and it's full, at five in the morning on a Friday, of people who look like they've never been anywhere else. An old man in a velvet jacket asleep over a cognac. Two women sharing one cigarette they aren't allowed to smoke. A bartender with forearms like hams who pours you a whisky before you ask for one, and pushes it across the bar, and looks at you with a kind of tired pity.

"Premier soir?" she says. First night?

"Of what?"

She just nods, as if you've answered. "Normande," she says, tapping her chest, and then the bar, and then the name on the ashtrays. "It's my bar. It's been my bar since 1971. You're safe in it." She says [i]safe[/i] like a word with a very specific legal meaning.

Something small tugs at your hair.

You turn. Sitting on the bar beside your elbow is a man the height of a wine bottle, with a nose like a new potato and a knitted cap, and he's braiding a tiny lock of your hair behind your ear with enormous concentration and very cold fingers.

"Don't mind him," Normande says. "Lutin. They used to braid horses' manes. There's no horses left in the city, so." She shrugs. "He'll want a favor for it."

"I didn't ask for a braid."

The lutin looks up at you, deeply offended, and finishes the braid with a little flourish, and ties it off with a bit of red thread from his pocket.

*choice
  #"It's very nice. Thank you."
    *set lutin "thanked"
    *set rel_fleurette +3
    *set charm +2
    The lutin beams, which is alarming, because he has a great many small teeth. He hops down off the bar and disappears between the stools.

    "You'll be fine," Normande says. "Anyone who says thank you to a lutin will be fine."
  #Take the braid out.
    *set lutin "refused"
    *set guarded %+5
    The lutin watches you pull it apart with an expression of profound betrayal. He hops down off the bar, and on the way past he steals one of your fries from yesterday, still in your jacket pocket, somehow.
  #Ask him what the favor is.
    *set lutin "deal"
    *set wits +1
    *set lore +2
    The lutin considers. He points at your kit bag, then mimes turning a key, then points at himself and holds up one finger. One lock, one day.

    "Deal," you say, and Normande raises her eyebrows so high they disappear into her hair.
    *codex lutins

At the back, a jukebox the size of a car, all chrome and coloured light, is playing Diane Dufresne, "J'ai rencontré l'homme de ma vie."

Sitting on top of the jukebox, with her legs crossed, is a woman.

A platinum wig the size of a birthday cake. Blue eyeshadow to the brows. A teal sequinned gown, and a pink feather boa, and diamond earrings the size of ice cubes. She's filing her nails with an emery board. She's very slightly transparent, the way a reflection in a window is transparent. Through her, you can see the jukebox's lights.

She glances up, bored, and catches you looking.

She stops filing.

*meet fleurette
"Oh," she says. "Oh, chéri. You can [i]see[/i] me."

*page_break
She's Madame Fleurette. She's been dead since October 1977, "and don't make that face, chéri, it's very ageing." She's been on this jukebox since 1983, when Chez Normande bought it from the cabaret on Stanley Street where she was, in her words, "the most famous woman in Montréal between eleven p.m. and four a.m., six nights a week, and on Sundays by appointment."

Nobody has been able to see her in nine years. Nobody who wasn't already part of it.

"Part of what?"

She looks at you with enormous, mascaraed pity, and pats the top of the jukebox beside her, and you find yourself sitting on a bar stool with your whisky, listening to a dead drag queen explain the world to you.

*codex veillee
*codex sleepers
*codex hush
*set lore +10
There's a word for it, she tells you: [i]la Veillée[/i]. Your mémé would know it. The old evenings, before television, when the family sat up late by the stove and told stories. The loup-garou. The flying canoe. The handsome stranger who comes to the dance and won't take off his gloves.

"The stories were true," Fleurette says. "They're still true. They just stay up later than you. Everybody who isn't one of us, we call a sleeper. And since 1967, sleepers don't see us, because of the Hush." She waves her emery board at the ceiling, at the city. "A spell over the whole island. See a wolf on Saint-Laurent, and by breakfast you remember a big dog. See me, and you forget by the time you get home." She taps your glass with a long nail that doesn't quite touch it. "Except you, apparently. And except tonight."

"What happened tonight?"

"Tonight, chéri, at 3:33, somebody opened a door they shouldn't have, and every bell on the island went off, and the Hush" she makes a small, precise gesture, like a thread snapping "went [i]twang[/i]."

She looks at you. You look at your whisky.

"Oh, no," says Fleurette, delighted. "Oh, [i]no[/i]."

*choice speak
  #"In my defence, I was paid two thousand dollars."
    *set wry %+10
    *set rel_fleurette +15
    She laughs so hard her wig tilts. "Two thousand! For the end of the world! Chéri, you undercharged."
  #"I didn't know. Someone called me, and they used my father's words, and I just... went."
    *set wry %-10
    *set guarded %-10
    *set rel_fleurette +10
    Her face softens, all at once, under the paint. "Well," she says. "Fathers. They'll get you out of bed at any hour, won't they. Even when they're not there."
  #"Is it bad? Tell me straight."
    *set reckless %-5
    *set rel_fleurette +5
    "It's not good," she says. "A spell that big doesn't break all at once. It'll fray. A few days, a week, maybe a little more. And then either somebody fixes it, or the whole city sees the whole Veillée at once, and we find out what happens next." She shrugs, a ripple of sequins. "Nobody knows. That's the exciting part."
  #Say nothing. Finish your whisky.
    *set guarded %+10
    *set rel_fleurette +5
    She watches you drink it. "The strong, silent type," she says. "I was married to one of those. Twice. Different men, same silence."

*achieve jukebox
*temp fq 0
*label fleurette_q
*choice
  *hide_reuse *if (met_lazare) #"The man with the bells. Lazare. What do you know about him?"
    *set fq +1
    "Lazare Desautels. The Carillon's golden boy." She taps her emery board against her teeth. "He comes in here sometimes, chéri, to not drink. Sits at the end of the bar with a soda water and watches the dance floor like it's a sin he's pricing." She smiles, slow. "And he isn't looking at the girls."
  *hide_reuse *if (met_dario) #"And the one in the toque?"
    *set fq +1
    "Dario Santangelo sang Céline at my jukebox in 2017. Drunk. Crying. The whole of 'Pour que tu m'aimes encore.' He tipped me a dollar. On a [i]jukebox[/i]." She presses a hand to her sequins. "I've loved him ever since."
  *hide_reuse #"Why can't they make me forget?"
    *set fq +1
    *set lore +2
    "I don't know, chéri. Nobody's ever walked through a bell before." She looks at you with sudden, shrewd attention. "Something's got a claim on you. Something that wants you to remember. That's usually expensive."
  *hide_reuse #"What happens to me now?"
    *set fq +1
    "Now? Now everybody who's anybody in the Veillée is going to want the sleeper who opened the fort. The hunters, the wolves, the vampires, the devil, God help you." She says it like a list of dinner invitations. "Some of them will want to thank you. Some of them will want to use you. A few of them, chéri, will just want you." She winks. "Try to tell the difference."
  *hide_reuse #"How did you die?"
    *set fq +1
    *set rel_fleurette +5
    For a moment she doesn't say anything. The jukebox changes songs by itself.

    "October 1977. The police raided a bar called Truxx, on Stanley. A hundred and forty-six men in the vans, in their undershirts, in the cold." She looks at her nails. "I wasn't even inside. I was on the sidewalk in my good coat, watching. And my heart said, [i]Fleurette, I don't want to see this[/i], and stopped." She shrugs, and it's a very small shrug. "Very dramatic. I've always had timing."
  #"I've heard enough for one night."
    *goto fleurette_done
*if fq < 3
  *goto fleurette_q
*label fleurette_done
The bartender brings you another whisky. You don't remember asking for it.

"Go home, chéri," Fleurette says, when the sky in the window has gone from black to the colour of dishwater. "Sleep. Eat something that isn't a Jos Louis. You smell like one." She taps the jukebox, and it starts, all on its own, to play something slow. "Tomorrow night, the whole Veillée is going to want to see the sleeper who opened the fort. You'll want to look nice."

*page_break
You get home to your three-and-a-half above the pharmacy on Verdun Street at twenty to seven, as the snowplough convoy goes by for the third time. You don't turn on the light. You sit on the edge of your bed in your coat.

Your phone buzzes.

*text unknown Merci.
*if n1_with = "dario"
  *text dario yo it's Dario. the wolf lol. got ur number off ur van
  *text dario u get home ok?? 🐺
*else
  *text dario yo it's Dario. the wolf lol. got ur number off ur van
  *text dario u good? desautels didn't bite u did he. he bites
*if n1_with = "lazare"
  *text lazare This is Lazare Desautels. I will need to speak to you again. Please do not leave the island.
  *text lazare Thank you for not lying to me.
*elseif n1_lied
  *text lazare This is Lazare Desautels of the Carillon. Do not leave the island. Do not lie to me again.
*else
  *text lazare This is Lazare Desautels of the Carillon. Do not leave the island.
*choice
  #Reply to Dario: "home. alive. thanks for the poutine / the chase / the chaos."
    *set n1_reply_dario "warm"
    *set rel_dario +5
    *text me home. alive. thanks for whatever that was
    *text dario 🐺❤️ get some sleep lacroix. ur gonna be popular tmrw
  #Reply to Dario: "was the toque a choice or a lifestyle"
    *set n1_reply_dario "wry"
    *set rel_dario +5
    *set des_dario +5
    *set wry %+5
    *text me was the toque a choice or a lifestyle
    *text dario lifestyle. i'll let u try it on sometime 😏
  #Reply to Lazare: "I'm not going anywhere. Goodnight, Lazare."
    *set n1_reply_lazare "warm"
    *set rel_lazare +5
    *text me I'm not going anywhere. Goodnight, Lazare.
    *text lazare Goodnight.
  #Reply to Lazare: "Do you always text like a legal notice?"
    *set n1_reply_lazare "wry"
    *set des_lazare +5
    *set wry %+5
    *text me Do you always text like a legal notice?
    *text lazare Yes.
    *text lazare Goodnight, {name}.
  #Reply to the unknown number: "Who is this? Papa?"
    *set wry %-10
    *set guarded %-10
    *text me Who is this?
    *text me Papa?
    You watch the screen until it goes dark. Nothing comes back.
  #Don't reply to anyone. Put the phone face down.
    *set guarded %+10

You look at the first message for a long time. Merci. From nobody.

Outside, the city is waking up. It doesn't look any different. It looks like Montréal on a Friday in February: grey, and cold, and beautiful, and full of people who have no idea.

Somewhere under it, you think, something that was burning for fifty-nine years is finally, for the first time, cold.

*page_break
You wake up because the window is warm.

It's full daylight: grey and white, the blinds striped with it, the radiator ticking. It's past noon. You've slept in your coat and your boots. And the window over your bed, which has had frost on the inside of it every morning since December, is clear, and dripping, and warm to the touch.

Outside it, on the fire escape, there's smoke. It's sitting, if smoke can sit, with its back against the railing, the way a man sits when he's very tired. Where its eyes should be, two points of amber light open and look at you through the glass.

You don't know how you know it's him. You just do.

You open the window. Cold air pours in around him. He doesn't come in. Up close, in daylight, he's hardly there at all: a smudge of heat, a shimmer, a smell of cedar and hot stone.

"You look terrible," you say.

"Fifty-nine years in a hole," says Nadim, from inside the smoke. "You'd look terrible too." His voice is fainter than it was in the vault. "I'm weak, creditor. I burned for a long time, and there's not much left to burn. It will come back. Slowly." A pause. "I came to tell you I haven't forgotten what I owe."

*choice speak
  #"You don't owe me anything. Get some rest."
    *set window_talk "free"
    *set rel_nadim +10
    *set des_nadim +5
    The lights flicker, surprised. "That isn't how it works," he says. "I wish it were. A debt is a debt. I couldn't set it down if I wanted to." Something that might be a laugh. "But it was kind of you to say it. Kind people are going to have a very hard time this week."
  #"What exactly do you owe me? What can you do?"
    *set window_talk "what"
    *set lore +3
    *set rel_nadim +5
    "I make, and I unmake," he says simply. "When I'm stronger, I'll be able to take back a moment for you. Something you did that you'd rather you hadn't. One at a time." The smoke shifts. "Wishes, your stories call them. It's a smaller thing than the stories say, and a bigger one."
  #"Who bought you, in 1958?"
    *set window_talk "who"
    *set wits +2
    *set rel_nadim +3
    The smoke goes still. "A man in a conductor's cap," he says, after a while. "On a railway platform under this city that isn't on any map. He had very good manners. He counted the money twice." The amber lights narrow. "You'll meet him. He'll be charming. Remember who he sold."
  #"Do you want to come in? You look cold."
    *set window_talk "invite"
    *set rel_nadim +10
    *set des_nadim +10
    *set guarded %-5
    For a long moment he doesn't say anything at all.

    "Nobody has asked me that," he says finally, "in a very long time." The smoke leans, just slightly, toward the warmth of the room. Then it draws back. "Not yet. I'm not fit company. But I'll remember that you asked."
    *remember nadim You asked him in out of the cold.

"Tonight," he says, already thinning, already going. "There's a place under the city where things are bought and sold. Everybody will be there, and everybody will want you. Your ghost will take you." The last of him is only two sparks. "Be careful what you let them owe you."

The window frosts over again from the edges in, fast, like a hand closing.

You fall back onto the bed in your coat, and sleep.
*set hush 88
*page_break Night Two
*finish
`);
