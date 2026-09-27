NB.scene("night6b", String.raw`
*mood wolves
*chapter 6 La Chasse-galerie [6b]
*node n6_path wolves
*temp round 1
*temp forfeit ""
*temp oath ""
*temp stand ""
*temp mend 0
*temp register false
It's the twenty-fifth of February.

Dario tells you so at eight in the morning, standing at the stove in the sacristy kitchen in his boxers and his toque, frying eggs, without turning round. "It's the twenty-fifth," he says, to the pan. "It's his birthday."

You wait.

"Every year," says Dario, "I go and sit on my nonna's back step on Jarry. With a cannoli from San Marco. I leave it on his mother's step and I wait. Twelve years." He flips an egg. It breaks. He swears at it in Italian. "I'm going. Today. Even with him in the tower. Especially." He puts the broken egg on a plate for you, and the perfect one on a plate for himself, and then looks at them and swaps them. "You don't have to come."

*choice speak
  #"I'm coming."
    *set rel_dario +5
    *set guarded %-5
    He doesn't say anything. He puts a second egg on your plate that you didn't ask for, which you're beginning to understand is how he says thank you.
  #"Twelve years. Every single one?"
    *set rel_dario +5
    *set wits +2
    "Every single one," says Dario. "Even 2020, in the lockdown. I wore a mask and sat six feet from the step. A cop asked me what I was doing." He shrugs. "I said, visiting a friend. He let me stay."
  #"Is it still his birthday if he doesn't know it is?"
    *set rel_dario +3
    *set wry %-5
    Dario turns round from the stove and looks at you for a long moment.

    "Yeah," he says. "That's the whole point. Somebody has to know."

*page_break
The lane behind rue Jarry in the morning is all snow and clotheslines and iron staircases, fig trees in burlap in every yard, a basketball hoop with no net. Dario sits on the bottom step of the Santangelo staircase with the white bakery box on his knee, and you sit beside him, and the cannoli goes on the next-door step, on its square of wax paper, on the snow.

You sit there for forty minutes. Your backside goes numb. Dario tells you which window was Enzo's, and about the flashlight system, and the war with the shovels. He doesn't cry. He talks about it the way you'd talk about a place you used to live.

At a quarter to nine, the back door on the second floor next door opens, and a woman comes out onto the balcony in a quilted housecoat, with a cup of coffee, and looks down.

*page_break
*meet rosa
She's small and round, sixty-something, with her dark hair in a tortoiseshell clip and half an inch of grey at the parting. She has, you notice, exactly Lazare's eyebrows: the same straight black severe line.

She looks down at the cannoli on her step. Then at Dario on the next step over. Then at you.

"Santangelo," says Rosa Ferrante. "Is it you? Every year? The cannoli?"

Dario has gone absolutely rigid beside you. His mouth opens. Nothing comes out.

*choice speak
  #Answer for him. "It's for somebody he lost, madame. Somebody who used to live near here."
    *set rel_rosa +5
    *set rel_dario +5
    Rosa looks at you, and then at Dario, and her face changes.

    "Oh," she says, softly. "Oh, [i]caro[/i]. I'm sorry. I didn't know." She looks at the cannoli. "Who?"

    "A friend," Dario manages. "A kid. From when I was a kid."

    Rosa nods slowly. "I eat it, you know," she says. "Every year. I thought it was a joke. I'm sorry. I didn't know it was for somebody."

    "It's okay," says Dario, and his voice goes. "It's okay. It was for somebody who'd want you to eat it."
  #Nudge Dario. Let him answer. It's his.
    *set rel_dario +5
    *set nerve +2
    Dario swallows. Then he stands up, all six foot two of him, with his toque in his hands, like a boy in front of a teacher.

    "Yeah, Signora Ferrante," he says. "It's me. Sorry. Every year."

    "Why?"

    Dario looks at her for a long time. "Because it's somebody's birthday," he says. "And somebody should remember."

    Rosa puts her hand on the balcony rail. She doesn't say anything for a while. "Yes," she says finally, strangely. "Yes. Somebody should."
  #"Good morning, madame! Lovely fig tree!" Rescue him with nonsense.
    *set rel_dario +3
    *set wry %+10
    *set charm +2
    Rosa looks at you as if you've come down in the last snow. Then she looks at the fig tree in its burlap and bucket, and, despite herself, softens. "Vito's," she says. "He talks to it. It's the only thing in this house that listens to him."

    It's enough time for Dario to find his voice. "It's me, signora," he says. "The cannoli. Sorry. It's for a friend."

*page_break
Rosa looks at the two of you for a long moment from her balcony, over her coffee.

"Wait there," she says, and goes inside, and comes out again two minutes later in snow boots and a parka over the housecoat, and comes down the iron staircase with a white cardboard box in her hands.

"Since Monday," she says, "I'm not myself. I woke up at midnight Monday crying at the kitchen window, and I don't know why. Then Tuesday I go for bread and come home with this." She holds out the box. Inside it is a cassata, iced white, bordered in pale green marzipan, with crystallised fruit on top like jewels, untouched. The top is blank. "The girl says, what name do you want on it, and I didn't know. I said, leave it blank." She pushes it into Dario's hands. "Forty dollars, a cake for nobody. Take it. Give it to your friend. Maybe he's somebody."

Dario stands there holding his friend's mother's birthday cake in the lane, in the snow, and you watch him hold his whole face together by main force.

"Thank you, Signora," he says.

Rosa's already going back up the stairs. Halfway, she stops, and looks down at the cannoli on her step, and picks it up, and holds it.

"Every year," she says, not to either of you. "Every year I eat it, and every year I cry, and I don't know why." And she goes in.
*remember dario On Enzo's birthday, his mother gave him her cake for nobody, to give to his friend.

*page_break
In the truck, Dario puts the cake box on the seat between you, very carefully, and puts the seatbelt round it, and then sits with both hands on the wheel, not starting the engine.

"His mother gave me his birthday cake," he says. "His mother gave me his birthday cake for nobody." His hands tighten. "I'm going to get him out of that tower tonight, Lacroix, and he's going to eat this cake, if I have to hold him down."

"Gisèle said come after supper."

"Gisèle said the canoe flies on a contract with the devil." Dario starts the engine. "Which means before supper, somebody's gotta go and see the devil." He looks at you sideways. "I'm guessing it's not gonna be me. He doesn't like me. I bit one of his bouncers in 2021."

*page_break
Le Mardi Gras in daylight is a black door with no handle, between a dépanneur and a shuttered theatre, on a grey slushy block of the Main. You strike a match from the matchbook on its cover, and it opens, and inside it's a quarter to midnight.

Every clock says so. [b]11:47.[/b] The band is playing, the fiddler and the swing band and the DJ, all together. The dancers are dancing, every decade of them. The candles lean in a wind that isn't there. It's Mardi Gras. It always will be, in here.

Rose is at his table at the edge of the dance floor, alone, in black, with his gloved hands on the silver head of his cane. He's not surprised to see you. He's never surprised.
*if danced_won
  "Monsieur Lacroix," he says, rising, and bowing, the real bow from the waist. "My partner. My only defeat this century." His red-coal eyes are warm. "Sit. Please. I can smell a favor on you, like a coin in a pocket."
*else
  "Monsieur Lacroix," he says, rising, and bowing. "My partner. The man who owes me a yes." His red-coal eyes are warm. "Sit. Have you come to pay it? Or to add to it? It's so often the second."
"You've come about a canoe," he says. "The witches sent a message. Gisèle Pépin's first communication with me since 1967. It said, [i]give the boy the ink or I'll come down there and give you something else.[/i] I was very moved."
*meet rose

*page_break
*portrait rose smirk
"The chasse-galerie," says Rose, pouring two glasses of champagne from a bottle that wasn't there, "flies on my ink. It always has. The old contract was with a devil in the Ottawa valley in 1858, a crude fellow, all horns and sulphur, very provincial. He went home in '67 and left me the paperwork." He slides a glass across to you with one gloved fingertip. "I let them fly on New Year's Eve, as a courtesy. One night a year. A second flight is a new contract."

"How much?"

"Oh, darling." He looks genuinely pained. "Don't be vulgar. We haven't discussed the terms." He folds his hands on the cane. "The terms are the old terms. Six paddlers. There and back before the Angelus. No one aboard speaks a holy word, nor touches a steeple. And if any soul aboard does..." He smiles. "The canoe falls. And that soul is mine."

"Every soul aboard, or just the one who said it?"

"You see, this is why I like you." Rose's eyes crease. "Just the one who said it, traditionally. It's a very sporting contract. Although I note that one of your paddlers is Dario Santangelo, who can't order a coffee without blaspheming in three languages." He sips. "I'd say the odds are in my favour."

*page_break
"I want better terms," you say.

"Everyone does. Almost nobody gets them." Rose leans back. "Persuade me."

*choice
  *if (favor_rose) #Spend your favor. The one you won on the dance floor. "Strike the forfeit. If someone swears, the canoe falls. That's all."
    *set favor_rose false
    *set forfeit "fall"
    *set rel_rose +5
    Rose looks at you for a long moment, and then laughs, low and delighted.

    "You'd spend the only favor a devil's owed anyone in this city in fifty-nine years," he says, "on a wolf's soul." He takes a fountain pen from inside his jacket. "Very well. A favor's a favor. I'll strike it." He writes. The ink is red and smokes faintly. "If anyone swears, the canoe falls. Nobody's mine. I'd hate to take your wolf, anyway. He'd chew the furniture."
    *remember rose You spent your favor to strike the forfeit off the chasse-galerie's contract.
  *selectable_if (charm >= 52) #"What would you take instead? Name something. Something that isn't a soul."
    *set forfeit "answer"
    *set charm +3
    *set des_rose +5
    *goto rose_answer
  #"Put the forfeit on me. If anyone in that canoe swears, it's my soul, not theirs."
    *set forfeit "mc"
    *set nerve +3
    *set rel_rose +10
    *set rel_dario +5
    Rose goes very still.

    "Yours," he says. "Not the wolf's. Not the witch's. Yours, whoever says it."

    "Mine."

    Something happens behind his red-coal eyes. For a moment he looks at you the way you'd look at a painting you didn't expect to find in a stranger's house.

    "Done," he says softly, and takes out a fountain pen, and writes, in red ink that smokes. "Do try to keep them quiet, darling. I'd hate to have you like that." He blots it. "I'd much rather have you some other way."
    *remember rose You put your own soul on the chasse-galerie's contract, instead of Dario's.
  #"Then I'll owe you. Another yes. Or a first one. Just give Gisèle the ink."
    *set forfeit "owe"
    *set owe_rose true
    *set rel_rose +5
    *set guarded %-5
    "A yes," says Rose. He savours it. "Whenever I ask. For anything I ask." He takes out a fountain pen. "You know that's worth a great deal more than a soul, don't you? Souls are two a penny. A [i]yes[/i]..." He signs. The ink is red and smokes. "The terms stand as they are, mind. The forfeit's still the swearer's. I only give you the ink."
    *remember rose You promised him a yes, for the canoe's ink.
*goto rose_done

*label rose_answer
*page_break
"Something that isn't a soul," Rose repeats. He considers you, over his glass, for a long time. "A true answer, then. To one question. You'll answer it truly, here, now, and I'll know if you don't." He leans in, and his voice drops so that only you can hear it, under the band. "And the forfeit comes off. If someone swears, the canoe falls. Nobody's mine."

"Ask."

Rose looks at you with his dark red eyes. "Why are you doing this?" he says. "Not the wolf. Not the hunter. Why are [i]you[/i] flying into a bell tower tonight for two men who spent seven years lying to each other?"

*choice speak
  #"Because I'm in love with one of them. Maybe both. I don't know yet."
    *set des_rose +5
    *set rel_rose +10
    *set guarded %-10
    Rose sits back. He's quiet for a long time. The clocks don't tick.

    "True," he says at last. "Every word." He takes out his pen. "And terrifying, I should think." He writes, in red ink that smokes. "How very brave of you, to say it to me first."
  #"Because somebody has to. Nobody came for my father."
    *set rel_rose +10
    *set nerve +2
    Rose looks at you, and keeps looking. "True," he says quietly. "And sadder than the other answer would have been." He takes out his pen and writes. "Your father would be very proud. For whatever that's worth, from me."
  #"Because I wanted to see if you'd ask me that."
    *set des_rose +10
    *set rel_rose +5
    *set reckless %+10
    Rose laughs out loud, the real laugh, and half the room turns.

    "True," he says, delighted. "God help me, that's true." He takes out his pen. "You're flirting with the devil to get a canoe. Your grandfather would be appalled." He writes. "Gisèle will be thrilled."
*set forfeit "fall"
*remember rose He asked you why you were flying into a bell tower, and you told him the truth.

*label rose_done
*page_break
Rose folds the contract, which is on paper that looks like old birchbark, into a neat square, and holds it out between two gloved fingers.

You take it. Your fingers touch the leather of his glove. It's hot, like a stove door.

"One thing more," he says, not letting go of it yet. "For nothing. Because I'm feeling sentimental, and it's so rare." His eyes hold yours. "The old man in the tower isn't the only one ringing bells tonight. Somebody's going shopping on the Missing Line while every hunter in the city is looking up at Notre-Dame." He lets go. "Look down, now and then, when you're flying. That's all."

*if rel_rose >= 30
  As you stand, he catches your wrist, lightly, just his gloved fingertips, and turns your hand over and looks at the palm.

  "Come back from this," he says, very low. "I haven't finished dancing with you."
  *set des_rose +5

*page_break
*art 6b
Buanderie Pépin at seven in the evening is full of steam and old women and the smell of juniper.

The dryers are all going at once. The card table's been pushed back. Thérèse is doing something complicated to a paddle with a candle and a knife. Monique is knitting, very fast, something long and red that's already five metres of scarf piled on the floor. Pierrette, very tall, very silent, is on a stepladder untying the ropes that hold the canoe to the ceiling. Yolande is doing her lipstick in the round glass door of a dryer.

And Gisèle Pépin, eighty-six, in a purple snowsuit that must have been bought for a grandchild in 1985, with a leather aviator's cap on her head and the ear-flaps down, is standing in the middle of it smoking a du Maurier and looking at Dario Santangelo the way a farmer looks at a bull she's been told she has to ride.

"So you're the wolf," she says.

"Madame Pépin," says Dario, and takes off his toque, which you've never seen him do voluntarily.

"You swear," says Gisèle. It isn't a question.

"Sometimes."

"He swears in three languages," you say. "Before breakfast."

Gisèle takes a long drag on the du Maurier. "The canoe falls if anybody says a holy word, boy. [i]Tabarnak. Câlice. Hostie. Ciboire. Sacrament.[/i] Christ, in any language. The Virgin. Any saint. [i]Porca Madonna[/i], I've heard you, we all have, the whole Pointe's heard you at the Tim Hortons. One of those, up there, and we all go down into the river, and the devil gets whoever said it." She points the cigarette at Dario. "That means you."
*if forfeit = "mc"
  "Actually," you say, "it means me."

  Gisèle turns and looks at you. You show her the contract. She reads it, and her eyebrows go up into the aviator cap, and she looks at you over her glasses for a long, long moment.

  "Aurèle's boy," she says. "Aurèle's stupid, stupid boy." And then, to Dario, much more sharply: "Did you hear that? It's [i]his[/i] soul if you swear now. So you don't."

  Dario is looking at you as if you've hit him with a truck.
*elseif forfeit = "fall"
  "It doesn't," you say. "Not tonight. Nobody's soul. If somebody swears, we just fall."

  Gisèle reads the contract. "Well, that's all right, then," she says. "We'll only drown."

"So we need a plan for his mouth," says Gisèle.

*choice
  #Teach him the substitutes. Every Québécois nonna has a list. [i]Tabarouette. Câline de bine. Saperlipopette.[/i]
    *set oath "substitutes"
    *set rel_dario +5
    *set wry %+10
    *set charm +2
    You sit him down on a dryer and drill him. Every good Catholic grandmother in Québec has a list: the swears with the holy taken out, for when the priest's in the room. [i]Tabarouette. Tabarnouche. Câline de bine. Câlique. Ciboulette. Sapristi. Saperlipopette.[/i]

    "[i]Saperlipopette,[/i]" Dario repeats, in tones of profound disgust.

    "Again."

    "I'm not saying [i]saperlipopette[/i] in front of a bell tower full of hunters, Lacroix."

    "You'll say it in front of God and the river if you want to live. Again."

    By the end, the witches are crying with laughter and Dario can do a whole sentence, with feeling: "[i]Câline de bine de tabarouette, qu'il fait frette.[/i]"
  #Gag him. With his own toque, if you have to. Lovingly.
    *set oath "gag"
    *set rel_dario +3
    *set reckless %+5
    "Toque," you say, and hold out your hand.

    Dario looks at you in horror. "Not the toque."

    "If you open your mouth up there, the toque goes in it."

    "My [i]nonna[/i] made this toque."

    "Your nonna would rather it was in your mouth than you were in the river." The witches applaud. Dario gives you the toque. He looks betrayed. He looks, a little, like he's trying not to laugh.
  #"He won't swear. Will you?" Look him in the eye. Trust him.
    *set oath "trust"
    *set rel_dario +10
    *set des_dario +5
    Dario looks at you, and you look back, and the laundromat goes quiet.

    "I won't swear," he says. "Not one word. Not for my soul." He glances at the contract in your hand. "Not for yours."

    Gisèle snorts. But she doesn't argue.

*page_break
They take the canoe out through the back door into the alley, six old women and two men and a birchbark canoe painted red, and then up the fire escape onto the flat roof of the laundromat, which is harder than it sounds, and Pierrette does most of it on her own.

Up on the roof, the whole Pointe is laid out around you: the brick rows, the canal white with snow, the dark shapes of the old Northern Electric factory and the grain elevator by the port, and beyond it all, across the old town, the two towers of Notre-Dame, lit gold, three kilometres away. It's a clear night, and twenty-five below. Your breath freezes on your scarf.

Six seats. Gisèle in the stern, to steer. Then Thérèse, and Yolande, and Pierrette. Then Dario. And you in the bow, at the front, with a paddle in your hands and nothing in front of you but the sky.

Monique stays on the roof with her red scarf, which is now very long indeed, one end of it tied round her own waist and the other round the canoe's stern.

"For luck," she says. "And so we can find our way home."

Gisèle reads the contract out loud, in a voice like a Mass. Then she tears it in half, and the halves go up in red smoke, and the canoe shivers under you like a horse.

"[i]Acabris, acabras, acabram[/i]," says Gisèle. "Paddle, you idiots."

*set canoe_alt 5
*label round
*page_break
*set canoe_alt -1
*meter canoe_alt 10 Altitude|The ground|The sky
*if round = 1
  [b]Over the canal.[/b] The canoe lifts off the roof like a leaf off a pond, and the laundromat falls away beneath you, and your stomach falls with it. Snow whips past. You're paddling air. It's thick, like paddling through cold honey. The canoe wallows and dips toward the frozen canal.

  "[i]Together![/i]" Gisèle shouts from the stern. "Stroke together, or we go down!"
*elseif round = 2
  [b]Over the port.[/b] The wind off the river hits you broadside, a wall of it, twenty-five below, straight down the Saint Lawrence from the Gulf. The canoe heels over. Below you, far too far below, the grain elevator and the black water where the icebreakers have been. With a crack like a gunshot, the lashing that holds the middle thwart to the gunwale snaps, and the whole canoe starts to flex like a bow.
*elseif round = 3
  [b]Over the old town.[/b] Steeples. Everywhere, steeples: Bonsecours with the Virgin on its roof, arms out to the sailors; the Jesuit chapel; the Récollets; spires and crosses and weathervanes sticking up out of the old town like the spines of a hedgehog, gold in the floodlights. Gisèle is steering between them by the light of her cigarette. The canoe dips. A cross goes by close enough that you could touch it.
*elseif round = 4
  [b]The gust.[/b] Over Place Jacques-Cartier a downdraft catches you, and the canoe drops like a stone, ten metres, twenty, the snow going up past you instead of down, and Thérèse screams, and the tourists in the square are suddenly very close, looking up, and Dario's hand clamps on your shoulder so hard it bruises, and you can hear the swear coming up out of him like a train out of a tunnel.
*else
  [b]The towers.[/b] Notre-Dame, dead ahead, enormous. La Tempérance on the right, La Persévérance on the left, where the great bell hangs, with its louvres lit from within. You have to come in over the leads, under the belfry's arches, and land in there, in the dark, among the beams, without touching the cross on the gable. Gisèle's aiming for a gap about the width of a canoe and a half.

*choice
  *if round = 1
    #"Stroke! Stroke! Stroke!" Call the rhythm. Somebody has to.
      *set canoe_alt +2
      *set charm +2
      You call it, the way you've heard coxes call it on the canal in summer, at the top of your lungs: [i]stroke! Stroke! Stroke![/i] Behind you six paddles find it, one by one, and the canoe stops wallowing and starts to climb.
    #Put your back into it. Paddle like the canal's on fire.
      *set canoe_alt +1
      *set nerve +2
      You dig in. Your shoulders scream. The canoe lurches upward. Not gracefully. But up.
    #Don't paddle. Watch Gisèle. Match your stroke to hers.
      *set canoe_alt +2
      *set wits +2
      You watch her. The old woman in the stern has done this for sixty years, and her stroke is long and slow and absolutely even. You match it. Then Dario matches you. Then the others. The canoe sighs and rises.
  *if round = 2
    *if (lutin = "paid") #The lutin's knot. The red thread from the Line. [i]Tie that round anything and it won't come undone.[/i]
      *set canoe_alt +3
      *set hands +2
      You get the red thread out of your pocket with numb fingers: the lutin's knot, from the Missing Line, for opening his chest in forty seconds. You lean back into the canoe and whip it round the broken thwart and the gunwale, once, twice, and tie it.

      The canoe stops flexing. Instantly. As if somebody's put a hand on it. The red thread shines in the dark like a vein.

      "[i]Lutin,[/i]" says Gisèle, in the stern, with enormous respect. "Where the devil did you get lutin work?"
    *selectable_if (hands >= 52) #Re-lash it. You've got cord in your kit. Knots are just locks for rope.
      *set canoe_alt +2
      *set hands +3
      You get the cord out of your kit, and lean back over the thwart with the wind trying to pull you out of the canoe, and lash it: round and round and a hitch and round again, the way your grandfather lashed ladders to the van roof, tight enough to sing when you pluck it. The canoe stiffens. Holds.
    #Brace it. Put your whole body across the thwart and hold it together yourself.
      *set canoe_alt -1
      *set nerve +2
      You throw yourself back across the thwart and hold it to the gunwale with both arms and all your weight. It holds. You can't paddle. The canoe drops a little, with one less paddle in it, and your arms burn, and the bark creaks against your chest like something alive.
  *if round = 3
    *selectable_if (wits >= 50) #Read the steeples. Call them out to Gisèle before she's on them. [i]Bonsecours, left! Cross, right, high![/i]
      *set canoe_alt +2
      *set wits +2
      You've driven every street of the old town at three in the morning for ten years. You know where every church is. You call them: [i]Bonsecours on the left, low! The Jesuits, dead ahead! Récollets, right, high, go over![/i] Gisèle steers by your voice, and the steeples go by on either side like buoys, and not one of them touches.
    *selectable_if (lore >= 45) #Remember the rule. It's not the steeple you can't touch. It's the cross. Fly between the crosses.
      *set canoe_alt +2
      *set lore +2
      "The crosses!" you shout. "It's the crosses, not the spires! Keep the crosses off the hull!" Gisèle hears you. Her mouth goes tight round the cigarette, and she steers not away from the spires but between them, close as a thread through a needle, and you go through the old town like a needle through cloth.
    #Close your eyes. Let the old woman steer. Just paddle.
      *set canoe_alt -1
      *set guarded %+5
      You close your eyes and paddle. You feel the steeples go by: cold air on one side, then the other, then a scrape, a terrible long scrape along the hull, and every witch in the canoe gasps, and nothing happens. It was a weathervane. A rooster. Not holy. The canoe drops, shuddering.
  *if round = 4
    *if oath = "substitutes"
      #"[i]SAPERLIPOPETTE![/i]" you scream at him. "Say it! SAY IT!"
        *set canoe_alt +2
        *set rel_dario +5
        "[i]SAPERLIPOPETTE![/i]" Dario roars, at the top of his lungs, into the sky over Place Jacques-Cartier, at a hundred tourists. "[i]CÂLINE DE BINE DE TABAROUETTE![/i]"

        The canoe catches the air like a hand catching a ball, and swoops up, and the tourists cheer.
    *if oath = "gag"
      #Toque. Now. In his mouth.
        *set canoe_alt +1
        *set rel_dario +3
        You twist round in your seat and shove his nonna's toque into his open mouth, and the swear comes out muffled into the wool, a long outraged [i]mmmmmmfff[/i] that could be anything, and the canoe shudders, and decides it doesn't count, and climbs.
    #Turn round in your seat and kiss him. Hard. Shut him up the best way there is.
      *set canoe_alt +2
      *set des_dario +10
      *set kissed_dario true
      You twist round in the bow and grab his parka with both fists and kiss him, hard, full on the mouth, with the canoe falling and the snow going the wrong way. The swear dies in his throat. His hand comes up into your hair.

      The canoe catches the air and swoops up, and somewhere behind him Yolande shrieks with delight, and Thérèse says [i]well, finally[/i], and Gisèle says nothing at all, but she's smiling round her cigarette.
    *selectable_if (oath = "trust") #Don't do anything. You told him you trusted him. Trust him.
      *set canoe_alt +1
      *set rel_dario +10
      You don't turn round. You told him you trusted him.

      Behind you, you hear the swear come up out of him. And then you hear him stop it. You hear him catch it in his teeth and hold it, a sound like a man lifting a car off his own chest, and let out his breath instead, long and shaking. Not a word.

      The canoe shudders, and levels, and climbs.

      "Not one word," Dario says, hoarsely, behind you. "Not for yours."
  *if round = 5
    *selectable_if (nerve >= 50) #Stand up in the bow as you come in. Grab the beam. Pull the canoe in yourself.
      *set canoe_alt +2
      *set nerve +3
      You stand up. In a flying canoe. Sixty metres over Place d'Armes. Every witch behind you screams. The belfry arch comes at you, dark, and you reach out and grab the oak beam inside it with both hands and hold on, and the canoe swings in under you like a boat coming into a dock, and slides onto the boards of the belfry floor with a long, soft hiss of bark on wood.
    #Trust Gisèle. She's done this for sixty years. Keep your head down.
      *set canoe_alt +1
      You keep your head down. Gisèle brings it in through the arch like threading a needle, with about a hand's width on either side, and the canoe comes down on the belfry boards with a bump and a skid and a crack.
    #Paddle backward. Slow it down. Too fast, too fast.
      *set canoe_alt +1
      *set wits +2
      You back-paddle, and so does Dario, and the canoe slows, and slows, and comes in through the arch at a walking pace, and settles on the boards of the belfry floor like a sigh.

*if canoe_alt <= 1
  *goto canoe_down
*set round +1
*if round <= 5
  *goto round
*goto landed

*label canoe_down
*page_break
*set canoe_crashed true
The canoe goes down.

Not far. That's the luck of it. You're over the old town, over the roofs, and the canoe drops the last ten metres like a thrown stone and hits the leads of Notre-Dame, the long slope of grey metal between the two towers, and skids, with a scream of bark on lead, all the way down to the stone parapet over the square, and stops there, with its bow sticking out over sixty metres of nothing.

Nobody moves. Snow falls. Six old women and two men sit in a cracked canoe on the roof of a basilica with their paddles in their laps.

"Well," says Gisèle at last, round her cigarette. "We're here."

The bark is split along the hull from the bow to the second thwart. Pierrette is already looking at it with a roll of duct tape in her hand, which she seems to have brought for exactly this.

"She'll fly again," says Gisèle. "Not well. Not far." She looks up at the belfry of La Persévérance, above you, lit gold. "Go and get your hunter, boys. We'll be here. Mending."

You and Dario climb up the leads and over the gable and in through the belfry louvres the hard way, on your hands and knees in the snow.
*goto belfry

*label landed
*page_break
*achieve no_swears
The canoe settles on the belfry boards and is still.

For a moment nobody moves. You're sitting in a canoe in the belfry of La Persévérance, in the dark, among the great oak beams, with snow blowing in through the louvres and the whole city glittering outside. And hanging in the middle of the belfry, filling it, so big it takes a moment to understand it's there, is a bell.

"Well, [i]saperlipopette[/i]," says Thérèse, very quietly.

*label belfry
*page_break
*meet angel
Jean-Baptiste. Eleven tons of bronze, cast in London in 1848, rung on the great feasts of this city for a hundred and seventy years. Its lip is taller than you are. Its surface is green-black with age, crusted with inscriptions and saints in relief. It hangs perfectly still in its frame of beams as thick as a man.

And it's humming.

You feel it before you hear it: in your feet on the boards, in your ribs, in your grandmother's key against your chest, which has gone warm. A single low note, so deep it's barely sound, going on and on, like a held breath.

Dario has gone very still beside you. His eyes are gold. Every hair on him is standing up.

"It's alive," he whispers. "Lacroix. That's... there's somebody in there."

*page_break
It's twenty to three. The Bourdon rings the great bell at three, Lazare said. Twenty minutes.

Below you, through a trapdoor in the boards, there's a ladder going down into light: a green lamp, bookshelves, the smell of tea. The Bourdon's study. And from further down, through the stone, you can hear the tower moving: feet on stairs, doors, voices, a single handbell tolling slow.

"They'll bring him up that ladder," Dario says, low. "At three. With the old man."

You've got twenty minutes.

*choice
  #Go down the ladder. The study's empty. There's a book on a lectern down there, and you want to read it.
    *set register true
    *goto study
  #Stay with Dario, in the dark among the beams. Wait. Watch.
    *set rel_dario +5
    *goto wait

*label study
*page_break
*meet bourdon
The Bourdon's study is small and warm and full of books. A desk under a green lamp. A kettle on a hot plate. A window of old wavy glass with the whole snowy city beyond it. An armchair by the window with a cardigan over the back.

And in the middle of the room, a lectern of dark wood, with a great book lying closed on it, bound in black leather, and across its edge a brass hasp with a small lock set into it. On the brass, worn almost smooth, a mark you'd know anywhere: a cross in a circle, with a small [i]S[/i] beside it.

Serge. Your father built this lock.

*choice
  *if (has_key) #Try the Keyman's key. [i]You'll need this, I think.[/i]
    *set lectern_how "key"
    *set rel_keyman +5
    *set hands +2
    It slides in like it was made for it. Because it was. A man on the Missing Line with no name and no memory cut its key from the shape in his hands.

    It turns. You have to stand there for a second with your hand on the book.
  *selectable_if (hands >= 50) #Pick it. It's your father's work. You were taught by the same hands.
    *set lectern_how "picked"
    *set hands +3
    It's a lever lock, five levers, tiny, and every one of them is set the way your father set them: the third one always a hair stiffer, [i]to make them think[/i]. You find it. You smile, and don't mean to. Ninety seconds.
  #Break the hasp with the letter knife on the desk. There's no time for manners.
    *set lectern_how "forced"
    *set nerve +2
    *set reckless %+10
    The old brass bends, and bends, and snaps with a noise like a pistol shot. You freeze. Below, the handbell goes on tolling. Nobody heard. Probably.

*page_break
*set read_register true
*achieve register
The Register is written in fountain pen, in the same small upright hand from the first page to the last. Fifty-nine years. Thousands of names. Each entry the same: a date, a name, an age, a place, and a reason. [i]Saw. Knew. Would not stop asking. Heard. Taken in.[/i]

You don't have time. You turn the pages fast.

[i]14 February 2005. Lorenzo Ferrante. 10. Rue Jarry, Saint-Léonard. Heard. Taken in. Family unmade.[/i]

[i]19 March 2011. Serge Lacroix. 44. Île Sainte-Hélène, at the fort. Attempted the lock. Unmade (self). Placed on the Missing Line. Keep close.[/i]

You stop breathing.

*if met_keyman
  A pair of square, scarred hands, black with brass dust, holding out a key. [i]You'll need this, I think.[/i] A man on the Missing Line who hums six notes and flinched at your name.
*set know_keyman true
*clue c_flinch
*page_break
And beside certain names, down the margins, you see the ticks. Small, in the same hand, but in fresh, glossy black ink. Recent.

[i]Mireille Caron. 31. Saw (the Club at table).[/i] A fresh tick.

[i]Guy Hébert. 13. Novice, La Persévérance. Saw (the fort).[/i] A fresh tick.

[i]Serge Lacroix.[/i] A fresh tick.
*clue c_victim_list
*clue c_bourdon_list
Below you, feet on the stairs. Coming up.

You take one photograph of your father's page, blurred, and close the book, and go back up the ladder faster than you've ever climbed anything.
*goto wait

*label wait
*page_break
You wait in the dark among the beams, with Dario, behind the great bell.

It's so cold your teeth hurt. The bell hums. Through the louvres, the city. Dario's shoulder against yours is the only warm thing in the world. You can hear him breathing, slow and deliberate, the way you'd breathe to keep something inside you from getting out.

Something comes up the ladder. Small. Alone.

It's a boy. Ten, maybe eleven, in a grey nightshirt, barefoot on the freezing boards, with a pudding-bowl haircut and enormous eyes. He doesn't see you. He goes straight to the great bell and puts both his small hands flat on the bronze and his forehead against it, and stands there, with his eyes shut, as if he's listening to a heartbeat.

"Don't cry," he whispers to the bell. "Don't cry. They're going to ring you again, I'm sorry. I'm sorry."

Then he opens his eyes, and sees you.

*page_break
*meet mathis
He doesn't scream. That's the first thing. He just looks at you, and at the enormous bearded man in the toque beside you, and at the canoe on the boards behind you full of old women, one of whom waves.

"Are you the one who opened the fort?" he whispers.

"Yeah."

"Brother Clément says you're going to make everything go dark." He looks at Dario. "Are you a wolf?"

"Yeah," says Dario.

"Cool," says the boy. And then, fast, looking at the trapdoor: "They're bringing Brother Lazare. To ring the big bell over him. Brother Clément says it's to make him happy." His small face is fierce. "It's not. I know it's not. It [i]cries[/i] when they ring it at people. I hear it." He puts his hand back on the bronze. "I'm Mathis. I hear it every night."

He reaches into the neck of his nightshirt and pulls out a piece of paper folded small, and holds it out to you, as if you're the only grown-up in the world he's decided to trust: a crayon drawing of a woman with yellow hair and a green coat in front of a house with a red door.

"I don't know who that is," he whispers. "Brother Clément says it's a dream."

*choice
  #"It's not a dream, Mathis. I think it's your mother. And I promise you, when this is over, I'll help you find her."
    *set mathis_promise true
    *set rel_mathis +15
    *set guarded %-10
    He looks at you with his whole face gone still, the way a kid's face goes when an adult says something too big to believe and too important not to.

    "Promise?"

    "I'm a locksmith. I open things." You hold out your hand. He shakes it.
    *remember mathis In the belfry, with the canoe behind you, you promised to help him find his mother.
  #"Keep it safe. Don't let anybody take it."
    *set mathis_promise true
    *set rel_mathis +5
    He nods, fierce, and puts it back in his nightshirt.
  #"Go back down, Mathis. It's not safe up here. Go on."
    *set rel_mathis -5
    *set guarded %+10
    His face closes. He goes, without a word, back down the ladder.

*page_break
At three o'clock, they bring Lazare up the ladder.

The Bourdon first, slowly, the way old men climb, in his cardigan over his cassock, with a lantern. Then two hunters. Then Lazare, in his hunter's black, between them, with his hands free, which somehow is worse than if they were tied. Then Agathe, last, with her face like paper.
*if lazare_inside
  He's thinner than he was on Monday. Paler. He looks round the belfry once, at the bell, at the snow blowing in, and his face doesn't change at all. He's decided something. You can see that from here. He's decided to be very calm.

  "You don't have to do this, Father," he says. "I'm asking you not to."

  "I know, [i]mon petit[/i]," says the Bourdon gently. "I know. It'll be over in a moment. You won't remember asking. That's the mercy of it."
*else
  He looks round the belfry with polite interest, the way you'd look round a church you'd been told was historic. He doesn't know why he's here. He doesn't know Monday happened. He touches the scar on his chin, absently, the way you'd touch a sore tooth.

  "Why am I being rung again, Father?" he asks. Mildly. Obediently. "I don't understand. I feel fine."

  "To be sure, [i]mon petit[/i]," says the Bourdon gently. "The Thaw leaves roots. We pull them. You'll feel even better tomorrow."

The Bourdon puts down the lantern. He takes hold of the rope that hangs from the great bell's clapper, a thick old rope, hemp, dark with a hundred and seventy years of hands. He takes off his glasses and folds them and puts them in his pocket.

Beside you, in the dark, Dario is shaking.

*choice
  *if (lutin = "paid") #The lutin's knot. [i]Won't come undone unless you say so.[/i] Get to the clapper first and tie it.
    *set stand "knot"
    *set hands +2
    *goto stand_knot
  *selectable_if (hands >= 52) #The clapper hangs on a leather baldric with an iron pin through it. Pull the pin, and the clapper drops, and the bell can't be rung.
    *set stand "pin"
    *set hands +3
    *goto stand_pin
  *selectable_if (nerve >= 50) #Step out of the dark. Put your hand flat on the bronze. "Ring it, Father. Ring it through me."
    *set stand "hand"
    *set nerve +3
    *goto stand_hand
  #Let Dario go. He's been waiting twelve years.
    *set stand "dario"
    *goto stand_dario

*label stand_knot
*page_break
You go.

You're out of the dark and across the boards and under the lip of the bell before the Bourdon has the rope taut, and you reach up inside the bronze mouth, where it's black and freezing and humming so hard your arm goes numb, and find the clapper, a great iron tongue as long as your leg, and whip the lutin's red thread round it and round the crown-staple it hangs from, and tie it.

The Bourdon pulls.

The rope goes taut. The clapper doesn't move. It hangs in the bell's mouth, tied with a thread of red cotton as thin as a hair, and it doesn't move one millimetre.

The Bourdon pulls again, with all his old weight. Nothing. He stares at the rope in his hands. Then at you, coming out from under the bell.

"Lutin work," he says, with a kind of wonder. "Where on earth did you get lutin work?"

"I said thank you," you say. "To a lutin. Once."
*goto stood

*label stand_pin
*page_break
You go.

You're out of the dark and under the lip of the bell before the Bourdon has the rope taut. You've never touched a bell in your life. But it's a mechanism, like any other: the clapper hangs on a leather strap, a baldric, from a staple in the crown, and the baldric's held by an iron pin with a cotter through the end of it. You reach up into the humming black and find the cotter by feel, and straighten it with your thumbnail, and pull.

The pin comes out in your hand. The clapper drops, a great iron tongue as long as your leg, straight down, out of the bell's mouth, and hits the boards with a crash that shakes the whole tower.

The Bourdon, holding a rope attached to nothing, stares at it. Then at you.

"Serge's son," he says, very quietly. "Of course."
*goto stood

*label stand_hand
*page_break
You step out of the dark.

Everyone turns. The hunters' hands go to their bells. You don't look at them. You walk across the boards to the great bell, and put your hand flat on the bronze, and the hum goes up your arm and into your chest like a current.

"Ring it, Father," you say. "Go on. Ring it through me."

The Bourdon looks at you. He looks at your hand on the bell.

"It won't take you," he says. "You're a creditor. You know it won't."

"Then ring it and find out what it does."

The Bourdon pulls.

The clapper swings. It strikes the bronze an inch from your hand. And the bell doesn't ring.

It doesn't make a sound. Eleven tons of bronze struck by a clapper as long as your leg, and there's nothing: no note, no hum, no echo, a silence so total that the snow blowing in through the louvres seems loud. The bell has simply decided not to speak.

Under your hand, very faintly, you feel it. Not a note. A word.

[b]No.[/b]
*set ally_angel true
*goto stood

*label stand_dario
*page_break
Dario goes.

He's out of the dark before you can say anything, and he isn't all the way a man when he gets there. He hits the two hunters like a truck hitting a snowbank and they go down, bells skittering across the boards, ringing, and he's got the rope out of the Bourdon's hands and he's standing between the old man and the bell, huge, half-furred, gold-eyed, with the rope in his fist.

"No," he says. It comes out of him as a growl. "[i]No.[/i] Not again. You don't get him twice."

The hunters are up. One of them has iron: a short black blade, in his fist. He goes for Dario's back.

It goes in under the shoulder blade. Iron. You see the black start to spread through the parka before Dario even knows he's hurt.
*set rel_dario +5
*set nerve +2
*goto stood

*label stood
*page_break
*if stand = "dario"
  "[i]Stop![/i]"

  It's Agathe.
*else
  The hunters move. Both of them, bells up, toward you.

  "[i]Stop![/i]"

  It's Agathe.
*if (rel_agathe >= 10) or manon_safe
  *set agathe_turned true
  She's between them and you, with her own bell in her fist, facing her own people. Her face is white. Her voice isn't.

  "I sat on the floor of a church last night," she says, "with a silver knife, and a wolf who'd have let me cut her to save a boy. I'm not doing this. I'm not letting you do this." She looks at the Bourdon. "Father. Look at them. Look at what we're doing."
*else
  She's standing at the top of the ladder, with her own bell in her hand, not ringing it, and she's shaking. "Stop," she says again, to nobody, to everybody. "Just... stop. Please."

  And for a second, everyone does.

*page_break
*portrait lazare sad
In the silence, Lazare looks at Dario.
*if lazare_inside
  He knows him. He's known him since Monday night on the Main, and since he was nine, and his whole face comes apart.

  "Dario," he says. "[i]Dario.[/i] What are you... you're bleeding... you came up a [i]bell tower[/i]..."

  "In a canoe," says Dario. "With six witches. Don't ask." His voice cracks. "Happy birthday, Enzo."
  *goto out
*else
  He doesn't know him. You watch him not know him. He sees a big bearded wolf in a toque, bleeding or not, in the Carillon's belfry, and his hand goes to his bell.

  "Santangelo," he says. Flat. Cold. The hunter's voice. "What are you doing in a church?"

  And Dario, standing in front of him, makes a sound like something tearing.

  You can see Gisèle's face in your mind, through her cigarette smoke. [i]Someone who knows his name, and says it to him where the bell can hear.[/i]

*choice
  *if (mem_notes or has_notebook) #Put your hand on the bronze and hum it. Six notes. [i]Quatre, un, quatre, six, deux, trois.[/i] Let the bell hear its name, and ask it for his.
    *set lore +3
    *set ally_angel true
    *goto restore_song
  *selectable_if ((rel_dario >= 55) or (lore >= 45)) #"Dario. Say it. Not like a taunt. Not like a secret. Like you're calling him in for supper."
    *set rel_dario +5
    *goto restore_name
  #Take his hand. Tell him his mother gave you a cake today, for nobody, and it's in the canoe.
    *set rel_lazare +5
    *goto restore_cake
  #There isn't time. Get him out first. Remember him later.
    *goto restore_none

*label restore_song
*page_break
You put your hand flat on the bronze, and hum.

You're not a singer. Your voice cracks on the third note. It doesn't matter. Six notes, down and up and held, the song your father taught you at the fort when you were twelve, the song your grandfather stole from this bell in 1966 with a tuning fork. [i]Quatre. Un. Quatre. Six. Deux. Trois.[/i]

The bell answers.

Not loudly. Not a peal. It picks up the song from your hand the way a glass picks up a note, and gives it back, deeper, huge, through the whole tower, through the boards, through the soles of everyone's feet. Six notes, sung by eleven tons of bronze, so low they're more felt than heard.

And under it, a word.

[b]LORENZO.[/b]

Lazare staggers. His hand comes off his bell. He puts it against the beam beside him, and holds on.

"Enzo," says Dario, beside him, quietly, into the note. "Enzo. It's me. It's Dario. From Jarry."

Lazare looks at him. And you watch it happen, the way you'd watch a lock turn: pin, and pin, and pin. The roof in Rosemont. The knife. A boy on the next balcony with a flashlight. His mother's kitchen. His own name.

"Dario," he says. "Oh, God. [i]Dario.[/i]"
*set lazare_restored true
*achieve restored
*goto out

*label restore_name
*page_break
Dario looks at you. Then he looks at Lazare. He takes off his toque, even bleeding, even half a wolf, and holds it in his hands, and he says it the way his nonna must have said it across the lane on a thousand summer evenings, the way Rosa said it up the stairs:

"[i]Enzo![/i] Enzo, [i]à table![/i] Come in, it's getting dark, your mamma's calling."

Under the words, very faintly, the great bell hums. As if it's listening. As if it's saying the name too.

Lazare's hand stops on his bell.

"Your mamma made the coffee too strong," Dario says. His voice is breaking. "Your papa reads [i]Il Corriere[/i] with his glasses on his forehead. You had a flashlight. Two flashes for come out. Three for my dad's home. You split the cannoli with me every Saturday. I hit you with a shovel when we were nine, and you bled all over the snow, and I cried harder than you did."

Lazare's hand goes up to the scar on his chin. Slowly. As if it's somebody else's hand.

"Dario," he says. And then, as if he's falling: "[i]Dario.[/i]"
*set lazare_restored true
*achieve restored
*goto out

*label restore_cake
*page_break
You cross the boards and take his hand. The bell hand. He lets you, startled; nobody touches a hunter's bell hand.

"Your mother gave me a cake this morning," you say. "Rosa. On Jarry. A cassata, from Alati-Caserta, with green marzipan. She bought it yesterday for nobody. She didn't know what name to put on it." You hold his hand. "It's your birthday. It's in the canoe. It's for you."

Lazare looks at you. Something moves in his face, far down, like a fish under ice.

"I don't have a mother," he says, uncertain. "A wolf..."

"No wolf. A man with kind eyes and a bell. And a woman in Saint-Léonard who's cried at her kitchen window every twenty-fifth of February for twenty-one years and doesn't know why."

Lazare stares at you. His hand, in yours, has started to shake.

He doesn't remember. Not yet. You can see him reaching for it and not finding it. But he doesn't pull his hand away.

"Show me," he says, very quietly. "The cake."
*goto out

*label restore_none
*page_break
There isn't time. The hunters are coming up the ladder behind Agathe, more of them, and the Bourdon is reaching for his own bell.

"Lazare," you say. "Come with us. Now. You don't know us, and I'm sorry, and I'll explain everything. Just come."

He looks at you, a stranger, and at Dario, a wolf, and at the old man who raised him.

And maybe it's nothing. Maybe it's the roots the Thaw left, that the Bourdon wanted to pull. But he looks at the Bourdon for a long moment, and something in his face doesn't trust what it sees.

"Why do you want to ring it at me again, Father?" he says. "If I'm fine?"

The Bourdon doesn't answer.

Lazare comes.

*label out
*page_break
You go out through the louvres, all three of you, into the snow.
*if canoe_crashed
  Down the leads, sliding, to where six old women are sitting in a cracked red canoe held together with duct tape at the edge of the roof of Notre-Dame, sixty metres over the square.
*else
  Into the canoe, where six old women are waiting with their paddles up.
*if stand = "dario"
  Dario's slow. The iron in his back is spreading black. You and Lazare get him between you and half carry him.
Behind you, the Bourdon has come to the louvres, with his lantern, and stands there in his cardigan, in the snow, looking out at you, not ringing anything. He doesn't call after you. He doesn't send the hunters.

As you pass under the lip of the great bell for the last time, it hums, and the hum turns into words inside you, the way a lock turns into an open door.

[b]SERGE'S SON.[/b]

You stop.

[b]THE HAND THAT RINGS THE STOLEN BELL DRINKS AT THE PRESIDENT'S RIGHT SIDE.[/b] The note wavers. [b]COME BACK WHEN THE BELLS ARE SILENT. I WILL HAVE MORE TO SAY.[/b]
*clue c_angel_word
*codex angel

*page_break
"[i]Acabris, acabras, acabram[/i]," says Gisèle. "Paddle, you idiots."

*if canoe_crashed
  The cracked canoe goes off the edge of the roof of Notre-Dame like a sled off a hill, and drops, and drops, sixty metres of air under you and the square coming up, and then, groaning, catches, a metre above the heads of the hunters in Place d'Armes, and skims across it low enough that you could reach down and take someone's hat, and rises, slowly, over Saint-Jacques, wallowing, with Pierrette's duct tape singing in the wind.
*else
  The canoe slides off the belfry boards and out through the arch into the night, and drops, sickeningly, and catches, and climbs, over Place d'Armes, over the hunters looking up with their mouths open, over the old bank towers on Saint-Jacques, and up, and up, into the snow.
Lazare is in the middle of the canoe, between Pierrette and Dario, with a paddle somebody's pushed into his hands. He's staring at the city going by beneath him. And then, over the old town, with the steeples going by on either side, you see his lips start to move, and you know, the way you know a lock's about to catch, what's coming out of him.

He's praying. Of course he is. He's a hunter of the Carillon, in a devil's canoe, flying. [i]Notre Père, qui es aux cieux...[/i]

"[i]Lazare![/i]" Gisèle shrieks.

*choice
  #Kiss him. It's the only thing that'll stop a Carillon hunter mid-Pater Noster.
    *set des_lazare +10
    *set kissed_lazare true
    *set canoe_alt +1
    You twist round in the bow and lean back over Thérèse and Yolande, who both duck, and get a hand in the front of Lazare's coat and pull him forward and kiss him, hard, mid-[i]Père[/i].

    He goes rigid. Then he doesn't. His paddle nearly goes over the side. The prayer dies in his mouth, and when you let go, he stares at you in the snow, breathing hard, with his lips parted.
    *if lazare_inside or lazare_restored
      "That's twice," he says faintly, "that someone's kissed me to stop me praying." He glances at Dario. "The last one was on a roof in 2019."
    *else
      "I don't know you," he says faintly. And then, after a moment, as if surprised: "I'd like to."
  #"[i]Saperlipopette![/i]" Give him a substitute. Fast.
    *set rel_lazare +5
    *set wry %+10
    "[i]Saperlipopette![/i]" you yell at him. "Say [i]saperlipopette![/i]"

    Lazare stares at you as if you've lost your mind. "[i]What?[/i]"

    "It's what you say instead! Dario! Tell him!"

    "[i]Câline de bine de tabarouette,[/i]" says Dario, grimly, through his teeth. "Do it, Enzo. Or we're all going in the river."

    And Lazare Desautels, hunter of the Carillon, sixty metres over Montréal, says, very quietly, with enormous dignity, "[i]Saperlipopette,[/i]" and the canoe climbs.
  #Let Dario handle it. He knows exactly how to shut Lazare up.
    *set rel_dario +5
    *set rel_lazare +3
    Dario, bleeding or not, reaches forward and puts his big hand over Lazare's mouth, gently, from behind, the way you'd cover a child's mouth in church. And leaves it there.

    Lazare goes still under it. Then, slowly, his hand comes up and covers Dario's, and holds it there.

*page_break
Over the mountain, on the way back, you remember what Rose said. [i]Look down, now and then.[/i]

You look down.

Below you, on the slope of the mountain above Sherbrooke Street, among the big stone houses of the Golden Square Mile, there's one house with every window lit gold: a greystone mansion with turrets and a wraparound porch. In its courtyard there are cars, black ones, a lot of them, with their headlights on. And rising from the courtyard, straight up into the snow, is a column of smoke. Dark, and thin, and glowing at its heart like a coal. And round the smoke, glinting in the headlights, loop after loop after loop of chain.

"[i]Nadim,[/i]" you say.

The canoe dips toward it, before you know you've leaned. Gisèle hauls it back.

"No," she says. "Not with a split hull and a bleeding wolf and five women over seventy. Not tonight, boy."

And as you pass over, the smoke reaches up. Not far: the chains hold it. But a thread of it comes up through the snow, thin as a finger, and brushes the side of the canoe, and your hand.

"[i]Lacroix.[/i]" His voice, almost nothing. "Creditor. They came while every hunter on the island was looking at the tower." Something like a laugh. "Well done, Honora."
*if plate_how = "clarke"
  "The Conductor read my name. Off the plate you gave him. I had to come." Not an accusation. Just true.
  *set rel_nadim -5
*else
  "They didn't have my name. You made sure of that. So they brought a great deal of iron, and a boy with bracelets who kept saying he was sorry."
"Keep your wishes. A debt doesn't care about iron." The thread is thinning. "Saturday. They want me in the lock. With you to turn the key. Or your father."

And it's gone.
*set nadim_taken true
*remember nadim The night of the canoe, you saw them chain him in the courtyard on the mountain, and he reached up to touch your hand.

*page_break
Gisèle lands the canoe in the lane behind rue Jarry at a quarter to six in the morning, because that's where Dario asks her to.

It comes down between the garages and the clotheslines, soft as a leaf, and slides to a stop in the snow beside a fig tree in burlap, and six old women and three men sit in it in the blue dawn, not moving.

"Out," says Gisèle. "I've got a laundromat to open."

*if stand = "dario"
  Dario gets out slowly. The iron wound in his back has stopped spreading; Thérèse did something to it in the air with a candle and a lot of language that was very carefully not holy. He's grey. He's grinning.
Lazare gets out and stands in the lane and looks at the back of the duplex where he was born: the iron staircase, the second-floor balcony, the window that was his.

*if lazare_inside or lazare_restored
  *goto dawn_known
*goto dawn_stranger

*label dawn_known
*page_break
*portrait lazare sad
Dario gets the cake out of the canoe. The box is a bit crushed. The cassata inside is perfect, iced white, green marzipan, with its blank top.

"Your mamma gave me this yesterday," he says. "She said, [i]give it to your friend. Maybe he's somebody.[/i]"

Lazare looks at the cake for a while.

Then he looks at Dario. And all of it's there in his face, all at once: the roof in Rosemont, the knife, seven years of [i]Enzo[/i] in the dark.

"You knew," he says. It's what he said at the Thaw. It's quieter now. "Twelve years. You sat on that step."

"Every year."

"And you let me hate you."

"I'd rather you hated me and came back."

*choice speak
  #"He came up a bell tower in a flying canoe with six witches, Lazare. For you. Bleeding."
    *set mend +1
    *set rel_dario +5
    Lazare looks at Dario, at the torn parka, at the witches in the canoe watching with enormous interest. His mouth twitches, very slightly, in spite of everything.
  #"He should've found a way to tell you. You're allowed to be angry."
    *set rel_lazare +10
    *set rel_dario -3
    "I am," says Lazare. "I'm so angry." But he doesn't move away.
  #Put your hand on Lazare's back. Say nothing.
    *set mend +1
    *set rel_lazare +5
    *set guarded %-5
    You put your hand between his shoulder blades. He's breathing too fast. Under your hand, slowly, he slows.

*page_break
"Why the cannoli," says Lazare. "Every year. If I was never coming."

*choice speak
  #"Tell him about Russo, Dario. The bakery."
    *set mend +1
    *set wits +2
    Dario tells him. About old Signor Russo at San Marco, and the free cannoli every Saturday for the altar boy with the face like a saint, and the two of them splitting it on this step. About going in afterward, when nobody remembered, and buying one, and getting his change from a man who didn't know. "So somebody's still doing it," he says. "That's all. So somebody's still doing it."
  #"Dario. Say it to his face. Not to the cake."
    *set mend +1
    *set nerve +2
    Dario straightens up, grey and bleeding and enormous, and makes himself look Lazare in the eyes. "Because I missed you," he says. "Every year. Even the years we were trying to kill each other. I missed [i]you.[/i]"
  #"You two are the most Catholic heathens I've ever met."
    *set wry %+10
    *set rel_dario +3
    In the canoe, Thérèse cackles. Dario snorts. Lazare doesn't laugh. But he looks at you like he's deciding whether to forgive it.

*page_break
Dario holds out the cake.

*choice
  #Take the box from Dario and put it in Lazare's hands.
    *set mend +1
    You take it and put it in Lazare's hands, and his hands take it, because hands take what's put in them.
  #"It's your birthday, Enzo. Eat your mother's cake."
    *set mend +1
    *set rel_lazare +3
    He flinches at the name, out of seven years of habit. And then, slowly, he decides not to.
  #"Maybe not today."
    *set mend -1
    *set guarded %+10
    Dario's arms come down, slowly, with the box.

*if mend >= 2
  *goto reconcile
*goto broken

*label reconcile
*page_break
*set reconciled true
*node n6_leads reconciled
*achieve reconciled
Lazare sits down on the bottom step of the Santangelo staircase in the snow, with his mother's cake on his knees, and opens the box.

He doesn't have a knife. He breaks it with his fingers, a piece of cassata with green marzipan and a crystallised cherry, and holds it out to Dario without looking up.

Dario sits down beside him, heavily, bleeding into his parka, and takes it. They eat Rosa Ferrante's cake for nobody with their fingers, side by side on a step built for boys, in the blue dawn, with icing sugar on their coats and six witches watching from a canoe.

"It's not your birthday any more," Dario says, with his mouth full. "It's the twenty-sixth."

"It's still the twenty-fifth in Vancouver."

"You've never been to Vancouver."

"I'm going," says Lazare. "Now. I've decided. I'm going to go everywhere." He wipes his fingers on his knee. And then, to the lane, very quietly: "Call me it. Call me Enzo."

"[i]Buon compleanno, Enzo.[/i]"

Lazare turns and kisses him, cake and sugar and all, slowly, in the lane in the daylight, like a door being opened and left open. In the canoe, Yolande applauds. Gisèle hits her with a paddle.

*page_break
When they come apart, Dario looks at you over Lazare's shoulder.

*choice
  *if (three_kiss or ((des_lazare >= 30) and (des_dario >= 30))) #Dario holds out his arm. Step into it.
    *set n6_lane "three"
    *set des_lazare +5
    *set des_dario +5
    *set rel_lazare +5
    *set rel_dario +5
    *set guarded %-10
    "Get over here, Lacroix," Dario says. "[i]Madonna.[/i]"

    You step in. You end up on the step too, somehow, on Lazare's other side, three grown men on a staircase built for two boys, with a cake, and Lazare's hand finds yours and grips, and Dario kisses the side of your head, rough, and you sit like that in the lane with the sun coming up over Saint-Léonard.

    "Well," says Gisèle, from the canoe, after a long time, lighting a du Maurier. "That's a lot of men."
    *remember dario In the lane behind rue Jarry, at dawn, after the canoe, he pulled you onto the step with them.
    *remember lazare On the Santangelo stairs, the morning after his birthday, with his mother's cake, and the two of you.
  #Watch them. This is theirs.
    *set n6_lane "watched"
    *set rel_lazare +5
    *set rel_dario +5
    You stay where you are, by the canoe, and let them have it. Gisèle, beside you, lights a cigarette and doesn't say anything for a long time.

    "Aurèle and me had a step," she says eventually. "Behind the Palais d'Or. It's a parking lot now." She blows smoke at the sky. "Go on, boy. They'll want you in a minute."
  #Walk to the end of the lane. Give them the whole morning.
    *set n6_lane "gave"
    *set rel_lazare +3
    *set rel_dario +3
    *set guarded %+5
    You walk to the end of the lane and stand by the garbage bins with your back to them, and watch the first 193 bus go down Jarry, and let them have it.
*goto dawn_end

*label broken
*page_break
*node n6_leads broken
*set n6_lane "broken"
Lazare stands in the lane holding nothing, looking at the cake in Dario's hands.

"I can't," he says. "Not yet. I'm sorry. I've been in a tower for three days listening to the man who stole me explain why it was kind." He looks at Dario. "I don't know how to be in a lane with you yet."

"Okay," says Dario. He puts the cake down on the step. "Okay. It'll be here."

Lazare nods. He doesn't leave. He just goes and stands by the fig tree in its burlap, with his back to you both, and looks up at his mother's window.
*remember dario At dawn, in the lane, Lazare couldn't take the cake yet. Dario put it on the step for later.
*goto dawn_end

*label dawn_stranger
*page_break
*node n6_leads broken
*set n6_lane "broken"
Lazare stands in the lane and looks at the back of the duplex, the iron staircase, the second-floor balcony, and his face does nothing at all. It's a house. He doesn't know it.

Dario gets the cake out of the canoe. He holds it out.

"Your mamma gave me this," he says. His voice is very careful. "Yesterday. For you. She didn't know it was for you."

Lazare takes the box, politely, the way you'd take a gift from a stranger at a funeral. He looks at the blank white top, the green marzipan.
*if n1_lied
  "I don't know you," he says. He looks at you. "Either of you. I'm sorry." A pause. "Why do I feel like I should?"
*else
  "I don't know you," he says, to Dario. And then, to you, slowly: "But I think I know you. From... somewhere. Friday? At a fort?" He frowns. "I'm not sure of anything since Friday."
He doesn't go back to the towers. That's the thing. He could. Nobody's stopping him. He stands in the lane with a stranger's cake in his hands, looking at a house he doesn't remember, and he doesn't go.
*remember lazare At dawn, in the lane, he held his mother's cake and didn't know whose it was. He didn't go back to the tower.

*label dawn_end
*page_break
*if lazare_inside or lazare_restored
  *set lazare_left_carillon true
"Where do you go now?" Dario asks Lazare, eventually. Not looking at him. "The towers?"
*if lazare_left_carillon
  "No," says Lazare. "Never again." He looks at his hunter's coat, the iron in the sleeves. He takes it off, in the lane, in the cold, and folds it over the fig tree's bucket. "I don't know where I go. I've never been anywhere else."
*else
  Lazare looks at him, a stranger in a toque, and doesn't know what to say.

*choice
  #"Saint-Jude. There's a new door. It's the best door in Saint-Léonard."
    *set n6_lazare "jude"
    *set rel_dario +5
    Dario looks at you, and then at Lazare, and something in his face goes very bright and very careful at once, like a man carrying a full cup.

    "There's a bed above the sacristy," he says. "It's got an afghan. It's hideous. You'd hate it."
  #"Verdun. My place. It's small and the radiator's broken and nobody there has ever rung a bell."
    *set n6_lazare "verdun"
    *set rel_lazare +5
    *set des_lazare +5
    Lazare takes a long look at you. "Your place," he says. As if it's a word in a foreign language he's always wanted to learn.
  #"Ask him, Dario. Don't ask me. Ask him where he wants to go."
    *set n6_lazare "asked"
    *set rel_lazare +5
    *set rel_dario +3
    *set wits +2
    Dario looks at you. Then at Lazare. "Where do you want to go?" he says, and it's the first time, you think, that anyone's asked Lazare Desautels that question since he was ten years old.

    Lazare is quiet. "Somewhere I can sleep," he says finally. "Somewhere nobody rings anything." He looks at the two of you. "Somewhere you both are."

*page_break
Gisèle takes the canoe up out of the lane at six, back to the Pointe, with five old women waving and one smoking. You watch it go, a red canoe going up over the roofs of Saint-Léonard into the pink sky, over the duplexes and the fig trees and the steeple of Saint-Bernardin, which it avoids by a very wide margin.

On the second floor of the Ferrante duplex, a curtain moves.

A woman in a quilted housecoat stands at the back window with a cup of coffee, looking down at the lane: at three men on a step, or near it, and a cake box, and a red canoe going up into the dawn. She stands there for a long time.

Then she puts her hand flat on the glass.

*if (ded_planted or c_furs_taste) and (not(ded_ruari))
  *page_break
  Your phone buzzes in your pocket. It's the compact, clicking open by itself.

  "Chéri," says Fleurette, very low. "The whole Village is talking about the Club's cars on the mountain last night. And about a boy with pony beads, crying in the ladies' at the Cabaret Mado at five in the morning, saying he's sorry, sorry, over and over, and nobody knows to who." A pause. "Put it on your board, darling. Next to the bell."
*set hush 40
*page_break Night Seven
*goto_scene night7
`);
