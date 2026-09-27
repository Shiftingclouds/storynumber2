NB.scene("night6a", String.raw`
*mood bells
*chapter 6 Change-Ringing [6a]
*node n6_path bells
*temp out_how ""
*temp knock ""
*temp mend 0
*temp pack_noise false
*temp caught false
Somebody knocks on your cell door at seven in the morning, which in the Carillon is late.

It's Lazare. He's holding two cups of coffee, real coffee, not the brown water from the refectory urn, and he looks as if he hasn't slept at all. He's shaved, badly. There's a nick on his jaw with a scrap of toilet paper still stuck to it. He's in his hunter's black, but his bell isn't round his neck. You look for it. It's in his coat pocket; you can see the shape of it.

He hands you a cup and sits on the end of the bed, where Mathis sat yesterday, and looks at the crucifix on the wall for a while.

"It's the twenty-fifth," he says.

You wait.

"The twenty-fifth of February. I remembered it at the Thaw. There was a cake. Every year there was a cassata from Alati-Caserta with green marzipan, and my mother wrote my name on it herself with a tube of icing because she didn't trust the girl at the counter to spell it." He turns the cup in his hands. "The Carillon gave me a birthday. The fourteenth of September. The Exaltation of the Cross, the day I was [i]found[/i]. I've had twenty-one birthdays on the wrong day." A breath. "I'm thirty-two today. I thought I had until September."

*choice speak
  #"Happy birthday, Enzo."
    *set rel_lazare +10
    *set des_lazare +5
    *set wry %-5
    He goes very still. Then he puts his coffee down on the floor, carefully, and puts the heels of his hands against his eyes and holds them there.

    "Nobody's said that," he says, from behind his hands. "Nobody's said that to me since I was ten."

    When he takes them away his eyes are red, and he's almost smiling. "Say it again. No. Don't. I'll fall apart, and I have to go out."
    *remember lazare On his first real birthday in twenty-one years, you were the first one to say it.
  #"Thirty-two. You don't look a day over forty."
    *set rel_lazare +3
    *set wry %+10
    He stares at you. And then, to his own obvious surprise, he laughs: one short bark, like something coming loose. "You're a terrible person," he says.

    "It's your birthday. You're allowed to laugh on your birthday. It's in the Bible somewhere."

    "It isn't." But he's still almost smiling, looking down into the coffee.
  #"Where do you want to go?" You already know.
    *set rel_lazare +8
    *set wits +2
    He looks at you, and something in his face lets go a little: the relief of not having to say it.

    "Rue Jarry," he says. "I don't know what I'll do when I get there. I don't know if I'll knock. I just have to see the house. With my eyes open. Knowing."
  #"Are you sure you want to? Whatever you're thinking of doing today, it might break your heart."
    *set rel_lazare +5
    *set guarded %+5
    "It's already broken," Lazare says, simply, as if he's telling you the time. "I'd like to see where it was, at least."

*page_break
"He's forbidden anyone to leave the towers," Lazare says. "Since the Thaw. Hunters on every door, and on the crypt. It's a war, he says." He picks up his coffee again. "I'm going to rue Jarry today. With his leave or without it."

"And me?"

"You're the only reason I think I can." He says it to the coffee, fast, as if it'll hurt less. "Will you come?"

You're a locksmith in a tower full of doors. There are a few ways out of here.

*choice
  *selectable_if (hands >= 48) #Pick the crypt door. It's a Victorian padlock on a hasp, and the hunter guarding it sleeps at eight.
    *set out_how "crypt"
    *set hands +3
    The crypt of La Persévérance is a cold low room full of the coffins of dead Grand Masters, with a door at the end that opens onto a stair up into the rue Saint-Sulpice. It's got a hasp and a padlock the size of your fist, made in Birmingham in about 1890, and it is beautiful, and it is also no match for a tension wrench and a bent hairpin and twenty years of practice.

    The young hunter on the stool at the bottom of the stairs is asleep with his chin on his chest, exactly as Lazare said he would be. You're through the door and up the stair in ninety seconds, with the padlock hanging closed behind you as if nobody had touched it.

    "That," says Lazare, in the snow on rue Saint-Sulpice, "is deeply upsetting to watch."

    "You're welcome."
  *selectable_if (nerve >= 48) #Walk out of the front door. Through the square. Like you own the place.
    *set out_how "front"
    *set nerve +3
    You go down the stairs of La Persévérance together, all two hundred of them, and through the iron door at the bottom, past the two hunters on guard in the snow, and neither of you stops or looks at them.

    "Brother..." one of them begins.

    "Good morning, Brother Anselme," says Lazare, and doesn't slow down.

    You don't either. Your heart is doing something frankly athletic, but you walk across Place d'Armes at the pace of a man going for croissants, past forty hunters, and nobody rings anything, because nobody can quite believe you're doing it. It's only when you're round the corner on Notre-Dame Street that Lazare lets out his breath, and you realise he'd been holding it the whole way.

    "I've never done anything like that," he says.

    "It's a Verdun thing. You walk like you belong, and people hold the door."
  *if (agathe_help or (rel_agathe >= 15)) #Ask Agathe. She has the key to the armory, and the armory has a bridge.
    *set out_how "agathe"
    *set rel_agathe +5
    Agathe listens to you with her arms folded in the armory door. Then she sighs, and takes a ring of keys off her belt.

    "The leads," she says. "Over the roof to La Tempérance, down the east stair, out through the sacristy. Nobody's watching the sacristy. Nobody ever thinks of the sacristy." She unlocks a small door behind the racks of bells. "Be back before Compline, or I'll be the one who hangs for it."

    "They don't hang people in the Carillon."

    "They didn't take children either, I thought." She holds the door for you, and doesn't meet Lazare's eyes, and then, as he passes, she does. "Happy birthday," she says, very quietly. "I read it. In the Register. After you two had been up there." She shuts the door behind you before he can answer.
    *set agathe_help true
  #Ask the Bourdon for leave. He can only say no.
    *set out_how "leave"
    *set rel_bourdon +5
    The Bourdon is at his desk under the green lamp, in his cardigan, writing. He listens to Lazare without looking up.

    Then he takes off his glasses and folds them.

    "Go," he says. "Take Monsieur Lacroix. Go to rue Jarry and knock on the door." He looks up at Lazare with his tired, gentle eyes. "And when you come back, tell me honestly whether it would have been kinder to leave her alone. I would like to know. I've wondered for twenty-one years."
    *if bourdon_deal
      As you go, he adds, to you, mildly: "Our agreement stands, Monsieur Lacroix. Saturday."

*page_break
*art 6a
The 193 bus goes the whole length of rue Jarry, east from the métro into Saint-Léonard, and it takes forty minutes in the snow.

You sit at the back. Lazare sits by the window with his hands between his knees and watches the city go past as if he's never seen it, which in a way he hasn't. You watch it change around him: the brick walk-ups turning into duplexes, and the duplexes into bigger duplexes, with wrought-iron balconies and outdoor staircases curling up the front of them like the fronds of ferns. Aluminium awnings. Plastic lions on the gateposts, wearing hats of snow. A Madonna in a bathtub grotto in a front yard, in a blue that's been repainted every spring for forty years. Café Milano. Pâtisserie San Marco. A caisse populaire. A funeral home with Italian names in gold on the window. And in every second front yard, a small tree wrapped up for the winter in burlap and string, with an upturned bucket on its head like a man in a costume.

"Fig trees," says Lazare, without turning from the window. "They wrap them up in October and unwrap them at Easter. Everybody's nonno has one. They're not supposed to be able to grow here." His breath fogs the glass. "They do anyway. You practically bury them, and they come back."

He doesn't say anything else until you get off at the corner of Jarry and Viau and he stops dead on the sidewalk with his hand over his mouth.

*page_break
The house is a brown-brick duplex with a white aluminium awning and a black iron staircase going up to the second-floor door. There's a fig tree in the tiny front yard under its burlap and its bucket. There's a snowblower under a tarp by the steps, and a plastic Saint Anthony in the window, and a wreath on the ground-floor door that hasn't been taken down since Christmas. It's so ordinary it hurts to look at.

"The upstairs was ours," Lazare says behind his hand. "My aunt Carmela had the downstairs. She died, I think. I think she must have died; that's a different name on the bell." He points without seeming to know he's pointing. "That window. That was my room. I used to climb out on the balcony and talk to Dario on his. We had a system with a flashlight." He stops. "I can't go up there. I can't. I can't walk up those stairs."

The upstairs curtain moves. Somebody's in the kitchen.

*choice
  *selectable_if (charm >= 50) #Go up and knock. Be the nicest young man anyone's ever had on their doorstep.
    *set rel_rosa +10
    *set charm +2
    *set knock "charm"
    You go up the iron stairs, which ring under your boots like a xylophone, and knock, and put on the face your mother used on landlords and nuns: open, warm, a little sorry to bother anyone.
  #Go up and knock. You're a locksmith. Everybody lets in a locksmith.
    *set hands +3
    *set knock "lock"
    You go up the iron stairs and look at the storm door while you wait. It has a bent latch that's been rattling for years; you can tell from the scratches. Before anyone even answers, you've got your small screwdriver out.
  #Let Lazare do it. It's his door.
    *set rel_lazare +5
    *set nerve +2
    *set knock "lazare"
    You don't push him. You stand beside him at the bottom of the stairs, and wait, and after a minute he takes a breath and goes up them, one at a time, like a man climbing a scaffold, and you go up behind him with your hand not quite on his back.

*page_break
*meet rosa
The door opens on a small round woman in a black cardigan, with a pair of reading glasses on a chain round her neck and flour to the elbows.

Rosa Ferrante is sixty-three. Her hair is dark and very carefully dyed, with half an inch of grey at the parting she's missed this month, pinned up in a tortoiseshell clip. There's a gold cross at her throat and gold hoops in her ears. She has Lazare's eyebrows, exactly, the same straight black severe line; it's so strange to see them on a laughing face.

*if knock = "charm"
  "Buongiorno, madame," you say. "I'm so sorry to bother you. My friend used to live on this street, a long time ago, and he's back for the first time, and..." You smile at her. You watch it work. "It's his birthday."

  "On a Wednesday! In February! [i]Madonna,[/i] come in, come in, you'll freeze, look at you, no hat."
*elseif knock = "lock"
  "I don't want anything," Rosa says through the glass. "Whatever it is. We have the Jehovah's already, a nice girl, Thursdays."

  "Your latch is bent, madame." You show her. "It's been rattling since about 2019. Thirty seconds. No charge."

  She watches you do it through the glass with her arms folded and her lips pressed together. When the storm door shuts with a clean click for the first time in seven years, she opens the inside door. "Vito's been saying he'd fix that since the Olympics," she says. "Come in. Both of you. I have coffee."
*else
  "Yes?" Rosa says. "Can I help you?"

  Lazare opens his mouth, and nothing comes out.

  She looks at him: the long black coat, the pale face, the eyes. Something happens behind her own. You watch her not know what it is. "You look frozen," she says at last, slowly. "Come in. Come in off the stairs. I have coffee."

*page_break
The kitchen is yellow.

It's exactly as he saw it at the Thaw, you realise: too small, too warm, a table with an oilcloth printed with lemons, a Sacred Heart over the door, a calendar from the funeral home on Jean-Talon, and on the wall above the table, side by side in matching gilt frames, the Pope and Céline Dion. The windows are steamed. There's a pot on the stove. It smells of coffee made too strong, and tomato, and something frying in oil. Rosa sits you at the table with a speed that brooks no argument and puts two tiny cups in front of you and pours coffee into them that is basically tar.

Lazare looks down at the coffee. He picks up the cup. His hand isn't steady.

"[i]Troppo forte,[/i]" Rosa says, watching him, apologetic. "Everybody says. My husband says I make it like a woman who wants him dead." She sits down across from you, which she clearly doesn't often do, and folds her floury hands. "Now. Who are you?"

*choice speak
  #"He grew up on this street. A long time ago. He wanted to see it again."
    *set rel_rosa +5
    *set rel_lazare +5
    *set wry %-5
    "On Jarry? Which house?" She leans forward, delighted. "I know everyone. Thirty-eight years on this street, I know everyone."

    Lazare says, very quietly, "This one."

    Rosa laughs. Then she sees that he isn't joking, and stops. "No," she says. "We've been here since eighty-eight. Before that it was the Pellegrinos, and they had only girls." She looks at him. "You're mixing it up with somewhere else, [i]caro[/i]. All these houses look alike."
  #"I'm a locksmith. We're checking the locks on the block. There have been some break-ins." (It's the kind of lie that makes people comfortable.)
    *set wits +2
    *set guarded %+5
    "Break-ins! On Jarry!" Rosa crosses herself. "It's the drugs. It's the drugs everywhere now. Vito says they come from Laval." She's happy to be alarmed; it gives her something to do with her hands. She gets up and cuts you both a slice of something off a plate on the counter without asking. "And him?" A nod at Lazare. "He's a locksmith too? He doesn't look like a locksmith. He looks like a priest."

    "He's in training."

    "For which?"

    "Both," says Lazare. He's looking at the Sacred Heart over the door.
  #"We're nobody, madame. We're sorry to bother you. It's just that it's been a very long winter."
    *set rel_rosa +8
    *set charm +2
    "Oh, [i]caro[/i]," says Rosa, instantly, as if you've told her you're an orphan. "It's been the longest winter. Since Monday, especially." She shakes her head. "Since Monday I'm not myself."

*page_break
"Since Monday," Rosa says, "I'm going crazy a little bit. Vito thinks it's the change. I said, Vito, I had the change in 2012, you were there, you complained the whole time about the thermostat." She turns her cup on its saucer. "Monday night I woke up at midnight, standing at that window." She points: the back window, over the lane. "Crying. Like this, like a baby, like I'm at a funeral. And I don't know why. Nothing happened. For one hour I knew something, and then at one o'clock the church bells rang, all of them, in the middle of the night, and it was gone, like a dream when you open your eyes."

Lazare puts his cup down very carefully.

"And then yesterday," Rosa says, "I went to Alati-Caserta for bread, and I came home with a cake." She nods at the counter. There's a white cardboard box there, open. Inside it, a cassata, round, iced white, bordered in pale green marzipan, with crystallised fruit on top like jewels. The top is blank. "The girl says, what name do you want on it, signora, and I stood there like a [i]stupida[/i]. I didn't know. I said, leave it. Leave it blank." Her mouth twists. "Forty dollars. For nobody. A cake for nobody. Vito says I've lost my mind."

She laughs, and it isn't much of a laugh.

"And every year it's something," she says. "Every year on this day. You know? Every year, on the twenty-fifth of February, somebody leaves a cannoli on my back step. One cannoli, in a paper, from San Marco. For twelve years. Vito says it's the Santangelo boy next door, the one with the tow truck; he was always a strange boy, God bless him, him and his nonna." She shrugs. "I eat it. What am I going to do? Throw it out?"

Beside you, Lazare makes a very small sound, and turns it into a cough.

*page_break
You notice the doorframe because you notice doorframes. It's a professional hazard.

It's the frame of the pantry door, painted cream a dozen times over, and on the inside edge, down low, there are pencil marks. Short lines, the way you'd mark a child's height. Each with a date written beside it in a woman's hand, in blue ballpoint that's been painted around, carefully, every time the frame's been painted. [i]25/2/96.[/i] [i]25/2/97.[/i] Going up. [i]25/2/2000[/i], with a little star. The last one, at about the height of your belt: [i]25/2/2004.[/i]

There are no names. There's a space beside every date where a name would go, and nothing in it.

"Oh, those," Rosa says, following your eyes. "Vito says it's the people from before. But the dates start in ninety-six, and we were here in eighty-eight, so that's not possible, is it?" She frowns at the frame. "I never can paint over them. Every time I go to paint the kitchen I leave that bit. I don't know why. It's silly."

*choice
  #Stand Lazare against the frame. Take the pencil from beside the phone. Mark it.
    *set rel_lazare +10
    *set des_lazare +5
    *set rel_rosa +3
    *set guarded %-5
    You get up. You take the pencil off the little shelf by the wall phone. You take Lazare by the elbow and stand him against the pantry frame, with his back to the paint and his heels together, the way you'd do with a kid, and he lets you, staring at you, and Rosa watches with her mouth a little open.

    You put the flat of your hand on top of his head and draw a line on the paint above his curls. [i]25/2/2026.[/i] It's a foot and a half above the last one.

    "Hey," says Rosa, but not angry. Uncertain. "What are you doing?"

    "Sorry," you say. "Habit."

    Lazare doesn't move away from the frame for a long moment. His shoulder blades are pressed against it like a man against a wall in a storm.
    *remember lazare In his mother's kitchen, you measured him against the pantry door, a foot and a half above the last mark.
  #Ask her about the space where the names should be.
    *set rel_rosa +5
    *set wits +2
    "Where do you think the names went?" you ask.

    Rosa looks at the frame for a long time. "I think," she says slowly, "that somebody wrote them in pencil, and they rubbed off." She touches the space beside [i]2004[/i] with one floury fingertip. "I think about that sometimes. Isn't that stupid? Somebody's name, just rubbed off."
  #Say nothing. Watch Lazare look at it.
    *set rel_lazare +5
    *set guarded %+5
    Lazare gets up without seeming to know he's doing it, and crosses the kitchen, and stands in front of the pantry door. He reaches out and puts his hand flat on the frame beside the last mark, [i]25/2/2004[/i], which comes up to his belt. He stands like that. Rosa watches him, and doesn't tell him to sit down, and doesn't say anything at all.

*page_break
Feet on the basement stairs, heavy, and a man comes up into the kitchen brushing sawdust off his cardigan: tall, stooped, bald, with a white moustache and huge square hands, a carpenter's pencil behind his ear.

"Rosa, who's..." He stops.

Vito Ferrante is sixty-seven. He was a tile-setter for forty years; his knees are gone. He's been in the basement, where every father in Saint-Léonard has a workshop his wife isn't allowed into, making something out of cedar. He shakes your hand. He shakes Lazare's, and then doesn't let go of it.

He turns it over, Lazare's hand, in both of his, and looks at it: at the long fingers and the broad palm and the calluses from twenty-one years of bell rope.

"[i]Mani di muratore,[/i]" he says, surprised. A mason's hands. "You have hands like my father. He built walls in Campobasso. Stone walls, with no mortar. They're still standing." He lets go, embarrassed. "I'm sorry. I'm an old man. You looked for a second like somebody."

"Who?" says Lazare. His voice isn't working properly.

Vito shrugs with his whole body, the way old Italian men shrug. "I don't know," he says. "That's the funny thing." He goes to the stove and lifts a lid and looks into the pot. "Nobody," he says, to the sauce.

*page_break
The coffee's finished. The clock over the fridge says twenty past eleven. Rosa is cutting the cake for nobody, because you're guests and she's not going to let you leave without something, and Vito's gone back down to his cedar, and Lazare is sitting at his mother's table with his hands flat on the lemon oilcloth, looking at you.

He doesn't know what to do. You can see it. He's waiting for you to tell him.

*choice
  #"Tell her." Say it quietly. "Tell her who you are. She deserves to hear it once, even if she can't keep it."
    *set n6_parents "told"
    *set rel_lazare +10
    *set rel_rosa +5
    *set nerve +2
    *set guarded %-10
    *goto told
  #"Signora. It's his birthday today." And let her do what she does.
    *set n6_parents "birthday"
    *set rel_lazare +10
    *set rel_rosa +10
    *set charm +2
    *goto birthday
  #Let it be his choice. Say nothing. Just put your hand on his knee under the table.
    *set n6_parents "stranger"
    *set rel_lazare +5
    *set des_lazare +3
    *set guarded %+5
    *goto stranger
  #"We should go." Get him out before this breaks him in half in front of her.
    *set n6_parents "left"
    *set rel_lazare -5
    *set guarded %+10
    *goto left

*label told
*page_break
Lazare looks at you for a long moment. Then he turns to his mother.

"Signora," he says. "My name is Lorenzo."

Rosa is putting a slice of cassata on a plate. She stops.

"I was born in this house," Lazare says, "on the twenty-fifth of February, 1994. In the upstairs bedroom, because it snowed and the ambulance couldn't get up Viau. You had me on the bedroom floor. Aunt Carmela delivered me. You tell everyone that. You told everyone that, at every christening. You said I came so fast I nearly got born in the snow." His voice is shaking, but he doesn't stop. "Those are my marks, on the door. You measured me every birthday, before the cake. You made me take my shoes off. You said, [i]no cheating, Enzo.[/i]"

The knife goes down on the counter, very slowly.

*page_break
*portrait rosa sad
Rosa Ferrante doesn't remember him. You can see it. You can see her look for him, behind her eyes, the way you'd feel in a dark room for a light switch that ought to be there, and find only wall.

But she doesn't laugh. She doesn't call Vito. She doesn't tell him he's crazy, or to get out.

She comes round the table, and puts her floury hand on his face, on his jaw, and turns it to the light. Her thumb goes to the scar on his chin.

"The Santangelo boy," she says, strangely. "With a shovel. I remember the blood on the snow. I remember I was so frightened I couldn't breathe. I remember I held a towel on it. For years I've remembered that. I thought I was remembering the blood on [i]him[/i], on Dario..." Her thumb moves on the scar. "I never could remember whose blood it was."

"Mine," says Lazare.

Rosa looks at him. Tears are running down her face. She doesn't seem to notice them. "I don't know you," she says. "I'm sorry. I'm sorry, [i]caro[/i], I don't know you, I look and I look." She takes a breath. "Come back on Sunday. For lunch. After ten o'clock Mass. I make the lasagna." She wipes her face with the back of her wrist and leaves flour on her cheek. "I don't know you. Come anyway."

*remember lazare He told his mother his name, in her kitchen, and she told him to come for Sunday lunch anyway.
*goto after_kitchen

*label birthday
*page_break
"It's his birthday," you say. "Today."

Rosa turns round with the knife in her hand. She looks at Lazare. She looks at the cake for nobody, with its blank top and its green marzipan border.

"Today," she says.

She doesn't say anything else. She goes to the drawer by the stove and rummages in it and comes back with a single birthday candle, pink and white striped, left over from some grandniece's party, and pushes it into the middle of the cassata, and lights it with the long lighter she uses for the gas. She puts the whole cake down in front of Lazare on the lemon oilcloth.

And then Rosa Ferrante, who doesn't know him, puts her hand on the back of her son's chair and sings.

[i]Tanti auguri a te. Tanti auguri a te.[/i]

Her voice is small and a little flat and completely sure of itself. Lazare sits with his hands flat on the table and stares at the candle and doesn't move. You don't think he's breathing.

[i]Tanti auguri, caro...[/i] She stops, for a second, where the name goes. There's a gap, a breath, the length of a name. And then she goes on over it. [i]Tanti auguri a te.[/i]

"Blow," she says. "Make a wish. Go on."

He blows it out. Rosa claps. And then she turns away to the sink very quickly, and runs the tap, and stands with her back to you both and her shoulders going, and says, to the window, "I don't know why I'm crying. I'm sorry. I'm a stupid old woman. Eat your cake."

*remember lazare On his birthday, his mother sang to him without knowing him, and stopped where his name should go.
*goto after_kitchen

*label stranger
*page_break
You don't say anything. You put your hand on his knee under the table, and leave it there.

Lazare looks down at the lemon oilcloth for a long time. Then he looks up at his mother, cutting cake.

"Signora," he says. "I used to live near here. When I was a boy. You were very kind to me. You won't remember. I wanted to say thank you."

"For what?" says Rosa, surprised.

"You made me take my shoes off," Lazare says. "Before you measured me."

Rosa laughs, puzzled, and looks at the doorframe, and stops laughing. She doesn't ask. She wraps two slices of cassata in a paper napkin, and then, after a moment, the whole rest of the cake back in its box, and pushes the box into his hands at the door.

"Take it," she says. "Take it. It's for nobody, I told you." She holds on to the box for a second longer than she has to, with him holding the other side. "Come back," she says. "When you're in the neighbourhood. For coffee. It's too strong, but it's hot."
*goto after_kitchen

*label left
*page_break
"We should go," you say, and you're already standing up.

Lazare looks up at you as if you've slapped him, and then as if you've caught him falling, and you can't tell which is the truth. Maybe both.

"Oh! Already?" Rosa is disappointed. "Wait. Wait." She wraps two slices of cake in a paper napkin and pushes them into your hands. "For the bus. Nobody's going to eat it here."

On the iron stairs outside, Lazare stops halfway down, with his hand on the freezing rail.

"I would have told her," he says. "I think. I was going to." He doesn't look at you. "I'll never know now, will I?"

"You can come back."

"Yes," he says, in a voice like a door closing. "I can come back."

*label after_kitchen
*set visited_parents true
*achieve rue_jarry
*page_break
*portrait dario sad
You go out the back way. Lazare wants to see the lane.

Every block in Saint-Léonard has one: a ruelle behind the duplexes, where the garages are, and the garbage bins, and the backyards with their clotheslines strung on pulleys to the second-floor balconies, their tomato cages under the snow, their fig trees in burlap. There's a basketball hoop on a garage with no net. There are spiral iron staircases coming down from the back balconies, black against the snow like the ribs of something.

On the bottom step of the staircase next door, the Santangelo house, sits a big man in a parka and a lumpy red toque, with a white bakery box on his knee.

He's been here a while. There's no snow on the step where he's sitting, and a lot on his shoulders. He's got a black eye, turning yellow at the edges, and a cut on his cheekbone held closed with two butterfly strips, and a split lip. The siege at Saint-Jude. He looks up at the two of you coming down the lane and doesn't get up, and doesn't look surprised.

"Every year," says Dario Santangelo, "for twelve years, I come and sit here on your birthday." His voice is rough. "I buy a cannoli at San Marco and I leave it on your mamma's step, and I sit on my nonna's stairs and I wait, like a [i]coglione[/i], in case you come home." He looks at the box on his knee. "This is the first year you came."

*page_break
Lazare stands in the lane with his hands at his sides.

"You knew," he says. It's what he said at the Thaw. It's quieter now, which is worse. "Every time you said it. You knew my mother was here, making the coffee too strong. You knew where the marks on the door came from. You knew, and you let me come to your bed every month for seven years and go home to the man who took me, and say my prayers, and hate you."

"I told you on the roof. The first night."

"You said a name. You said a name while I was trying to kill you. How was I supposed to..."

"[i]How was I supposed to say it better?[/i]" Dario's up off the step. The box is in his hand, crumpling. "Tell me! You tell me! Every time I got close you had a bell in your hand! I thought if I pushed, you'd ring it. I thought you'd ring it at me, or at yourself, or they'd see it on you and ring it over you, and then you'd be gone, and I'd be the only one on the whole island who knew what they took, and I couldn't..." He stops. "I couldn't be that. I'd rather you hated me and came back."

They stand three metres apart in the snow, in a back lane in Saint-Léonard where they had a war with shovels when they were nine.

*choice speak
  #"He did tell you, Lazare. Every time he said Enzo. You just couldn't hear it yet."
    *set mend +1
    *set rel_dario +10
    *set rel_lazare -3
    Lazare turns his head and looks at you as if you've betrayed him. And then his face changes, because he knows it's true, and knowing it's true is so much worse than being betrayed.
  #"He should have found a way, Dario. He's allowed to be angry about twelve years."
    *set rel_lazare +10
    *set rel_dario -5
    Dario's jaw works. He doesn't argue. "Yeah," he says, to the snow. "Yeah. He is."

    Lazare looks at you like a man who's just been handed a coat. It's a comfort. But it makes the lane colder, somehow, for the man on the step.
  #Don't take a side. Put your hand flat on the middle of Lazare's back, and keep it there.
    *set mend +1
    *set rel_lazare +5
    *set guarded %-5
    You don't say anything. You put your hand on his back, between his shoulder blades, through the coat. You can feel him breathing too fast. After a while, under your hand, he slows down.

*page_break
"Why the cannoli," says Lazare, at last. His voice is raw. "Why every year. If I was never coming."

Dario doesn't answer. He's looking at the box.

*choice speak
  #"Tell him the rest. Tell him why San Marco."
    *set mend +1
    *set rel_dario +5
    *set wits +2
    Dario shuts his eyes.

    "Old Signor Russo," he says. "At the bakery. Every Saturday he gave you a cannoli for free, because you were an altar boy and you had a face like a saint in a painting. You used to split it with me. Every Saturday. On this step." He opens his eyes. "He didn't remember you either, after. Nobody did. I used to go in and buy one and he'd give me the change, and I'd think, [i]you gave him one every Saturday for five years, you old bastard, and you don't even[/i]..." He stops. "So I buy one on your birthday. So somebody's still doing it."
  #"Dario. Stand up straight and say it to his face. Not to the box."
    *set mend +1
    *set nerve +2
    *set rel_dario +5
    Dario looks at you. Then he straightens up, all six foot two of him, split lip and black eye and toque, and makes himself look Lazare in the face.

    "Because I missed you," he says. "Because every year I missed you. Every year, even the years we were trying to kill each other. Even the years I was in your bed. I missed [i]you[/i]. Enzo. Not the other one. The one who split the cannoli." His voice cracks. "Happy birthday. I missed you."
  #"You two are the most Catholic heathens I've ever met, you know that?"
    *set rel_dario +5
    *set wry %+10
    Dario snorts, in spite of everything, and has to wipe his nose on the back of his glove. Lazare doesn't laugh. He looks at you, then at the snow, as if he can't believe you've made a joke, here, and he's trying to decide whether to forgive it.

*page_break
Dario holds out the box.

It's a bit crushed. There's a single cannoli in it, on a square of wax paper, dusted with icing sugar, with a candied cherry in each end. Lazare doesn't take it. He looks at it, and at Dario's hand holding it, the knuckles all split from the siege, and his own hands stay at his sides.

*choice
  #Take the box out of Dario's hand, and put it into Lazare's.
    *set mend +1
    *set hands +2
    You take it. Dario lets you. You turn and hold it out to Lazare, and after a moment his hands come up and take it from you, because hands take what's put in them, and then he's standing there holding it, and it's too late for him not to have taken it.
  #"It's your birthday, Enzo. Take the cannoli."
    *set mend +1
    *set rel_lazare +3
    Lazare flinches at the name, out of seven years of habit. And then, slowly, you watch him decide not to.

    He takes the box.
  #"Maybe not today." Say it gently. Some things you can't do on the same day as your mother.
    *set mend -1
    *set rel_lazare +5
    *set guarded %+10
    Dario's arm comes down, slowly, with the box on the end of it. He nods. He doesn't argue.

*if mend >= 2
  *goto reconcile
*goto broken

*label reconcile
*page_break
*set reconciled true
*node n6_leads reconciled
*achieve reconciled
Lazare stands in the lane holding a crushed box with a cannoli in it, and looks down at it for a long time.

Then he sits down on the bottom step of the Santangelo staircase, in the snow, where there's room for two, and takes the cannoli out of its paper and breaks it in half. Icing sugar goes everywhere, all over his black coat. He holds out one half without looking up.

Dario stares at it.

Then he sits down next to him on the step, heavily, and takes it. They eat the two halves side by side in silence, not looking at each other, with the icing sugar going down their coats and their shoulders touching: two big men on a step built for boys.

"It's not as good as Russo's," Lazare says, with his mouth full.

"Nothing's as good as Russo's. Russo's dead."

"Oh." Lazare swallows. "I'm sorry."

"He was a hundred and four. He was a bastard." Dario wipes his mouth on his sleeve. And then he says it, very quietly, to the lane. "[i]Buon compleanno, Enzo.[/i]"

Lazare shuts his eyes. "Don't call me that," he says. And then, after a long moment: "No. Call me that." He opens them. "Call me that."

*page_break
Dario turns and takes Lazare's face in both his big split-knuckled hands, sugar and all, and kisses him.

Not like the coat room. Not hungry, not secret, not like two men stealing something. Slowly, in the middle of a back lane in daylight, where any nonna at any window can see: a kiss like a door being opened and left open. Lazare makes a sound against his mouth and puts a hand flat on his chest, not pushing. Holding on. There's icing sugar in Dario's beard. There are tears on both their faces, and they don't seem to notice.

When it ends, Dario keeps his forehead against Lazare's for a long time. Then he opens his eyes and looks at you, over Lazare's shoulder, standing in the snow three metres away.

*choice
  *if (three_kiss or ((des_lazare >= 30) and (des_dario >= 30))) #Dario holds out his arm. Step into it.
    *set n6_lane "three"
    *set des_lazare +5
    *set des_dario +5
    *set rel_lazare +5
    *set rel_dario +5
    *set guarded %-10
    "Get over here, Lacroix," Dario says hoarsely. "[i]Madonna.[/i] Don't stand there like a mailbox."

    You step into it. His arm comes round you and pulls, and you're down on the bottom step too somehow, crushed in on Lazare's other side, three grown men on a staircase built for two boys, and Lazare's hand finds yours and grips, and Dario kisses the side of your head, rough, through your hair, and says something in Italian you don't catch. You sit like that in the lane with snow falling on the three of you. Nobody says anything. There isn't anything that needs saying.

    Somewhere above you, a window opens, and an old woman's voice shouts something in Italian that sounds very much like a complaint, and then, after a pause, like a blessing. And the window shuts.
    *remember dario In the lane behind rue Jarry, on Enzo's birthday, he pulled you onto the step with them.
    *remember lazare On the Santangelo stairs, on his birthday, with Dario on one side and you on the other.
  #Watch them. This is theirs. It's been theirs since they were nine.
    *set n6_lane "watched"
    *set rel_lazare +5
    *set rel_dario +5
    You stay where you are. Dario looks at you a moment longer, and you nod, and something in his face says [i]thank you[/i], and something else says [i]later[/i]. Then he turns back to Lazare and puts his arm around him, and you stand guard at the end of the lane, and look at the fig trees in their burlap, and let them have it.
  #Go and wait at the end of the lane. Give them the whole lane.
    *set n6_lane "gave"
    *set rel_lazare +3
    *set rel_dario +3
    *set guarded %+5
    You go and wait at the end of the lane, by the garbage bins, with your back to them. You can hear their voices, low. At one point you hear Lazare laugh, a real laugh, surprised out of him. You don't turn round. You watch the traffic on Viau and let them have the whole lane, and the whole twelve years, and whatever comes next.
*goto lane_end

*label broken
*page_break
*node n6_leads broken
*set n6_lane "broken"
Lazare stands in the lane for a long moment, looking at Dario.

Then he shakes his head, once, and turns, and walks away down the lane toward Viau, with his hands in the pockets of his coat and his shoulders up round his ears.

Dario doesn't go after him. He sits back down on the step, heavily, with the box on his knee.

"Go on," he says to you, without looking up. "Go with him. It's fine." It isn't. "He can't be alone today. I know him. He'll go and stand in a church for five hours." He looks at the cannoli in the box. "Look after him, Lacroix. Please. I don't get to."
*remember dario On Enzo's birthday, in the lane, Lazare walked away from him, and he asked you to go too.

*label lane_end
*page_break
Before you go, Dario catches your sleeve.

"Listen," he says, low. "Word on the Line. The whole Carillon's going into the towers tonight. Every ringer they've got, even the old ones, even the kids. Something big at three." His eyes go to Lazare's back. "And the Club's been buying iron. Every chain on the Line, Clarke's people say. Nobody knows what for."
*if reconciled or (rel_dario >= 45)
  *set pack_noise true
  He hesitates. Then: "Whatever you two are doing tonight, and don't tell me you're not doing something, I know that face, I've been looking at that face in the dark for seven years..." He squeezes your arm. "If you need a noise at three o'clock, in Place d'Armes, text me. The Sept-Ans can make a hell of a noise."
*else
  He lets go of your sleeve. "Be careful in there," he says. "Both of you. They've got nothing left to lose now, and old men with nothing to lose are the worst ones."

*page_break
You're back in the tower before Compline.

*if out_how = "leave"
  You go in by the front door, and nobody stops you, because you have leave.
*elseif out_how = "agathe"
  You go in the way you came, through the sacristy and up the east stair and over the leads, and Agathe's waiting at the armory door, white as paper, and closes her eyes with relief when she sees you.
*else
  You go in the way you came out. It isn't as easy the second time; there are more hunters on the doors. But they're looking for people trying to get [i]out[/i]. Nobody's ever tried to break [i]into[/i] La Persévérance before.

At the top of the stairs, the black oak door of the study is open, and the Bourdon is standing in it in his cardigan, waiting, as if he knew exactly when you'd come.
*if out_how != "leave"
  "Rue Jarry," he says gently. "Of course. It's the twenty-fifth. I'd have gone too."
"Lazare," he says. "Well? Was it kinder?"

*page_break
*portrait bourdon sad
*if n6_parents = "told"
  "I told her my name," Lazare says. "She didn't know me. She touched my scar and asked whose blood it was. She said, come for lunch on Sunday." He looks at the old man steadily. "No. It wasn't kinder. It was the cruellest thing I've ever seen a person do, and you did it to her, and she's been paying for it for twenty-one years without knowing what the bill was for."
*elseif n6_parents = "birthday"
  "She sang to me," Lazare says. "She lit a candle on a cake she bought for nobody. She stopped where my name goes, and she didn't know why, and then she turned round to the sink and cried." He looks at the old man steadily. "No. It wasn't kinder."
*elseif n6_parents = "stranger"
  "She gave me cake," Lazare says. "She told me to come back for coffee. She doesn't know me. There are marks on the pantry door with no names beside them, and she can't paint over them." He looks at the old man steadily. "No. It wasn't kinder."
*else
  "I sat at her table," Lazare says, "and drank her coffee, and I couldn't say it. And then we left." He looks at the old man steadily. "I don't know. I don't know what kinder is any more. You took that too."

The Bourdon listens with his hands folded. When Lazare's finished, he nods, slowly, like a man who's been given a diagnosis he expected.

"Thank you," he says. "I did want to know."

*page_break
He turns to you.

"Somebody was in my study last night, Monsieur Lacroix. During Compline." He says it mildly.
*if lectern_how = "forced"
  "The hasp on my Register is broken. Your father made that hasp, you know. It survived fifty-nine years of me."
*elseif lectern_how = "key"
  "Nothing's broken. But my Register has been moved a quarter of an inch on its lectern, and it hasn't moved a quarter of an inch in fifty-nine years."
*else
  "Nothing's broken. Nothing's missing. Whoever it was knew their locks. But I've kept that book for fifty-nine years, and I know when it's been read."

*choice speak
  #"It was me. And I saw the ticks. Fresh ink. Nineteen names. Two of them are dead."
    *set bourdon_knows true
    *set nerve +2
    *set rel_bourdon -5
    *goto confront
  #"It wasn't me, Father." (A lie. He'll know. But he'll have to say so.)
    *set guarded %+10
    *set rel_bourdon -5
    The Bourdon looks at your hands. "Your father lied exactly like that," he says. "With his whole face, and nothing in his hands." He almost smiles. "I'll take it as a yes."
    *goto peal
  #Say nothing. Wait for him.
    *set wits +2
    The Bourdon waits too. He's better at it than you. After a while he nods, as if you've answered.

    "You'll have seen the ticks, then," he says. "In the fresh ink. I mark those who've begun to remember, as the Accord requires, and I send the names to the Compagnie, so that they can be seen to quietly. With a bell." He folds his glasses. "You needn't look at me like that. It's kinder than war."
    *goto peal

*label confront
*page_break
"I mark those who've begun to remember," the Bourdon says, "as the Accord requires. And I send the names to the Compagnie, so that they can be seen to quietly."

"Seen to," you say. "You send the names to Honora Strachan. To be [i]seen to[/i]."

"To be rung over again. Quietly. Before they can frighten themselves, or anyone else."

"Mireille Caron is dead. Guy Hébert is dead. They were both on your list, with a fresh tick. Somebody rang a bell over them, all right. Right on the temple. Hard enough to hide the teeth marks underneath."

The Bourdon doesn't say anything for a long moment.

"There was wolf hair," he says finally. "In their hands."

*if ded_planted
  "Off a pelt. A dead one. There's a room full of them in the Beaver Club, on the walls." You watch it land. "The same people you're sending your list to."
*else
  "Funny place for a wolf to leave it," you say. "In a dead woman's fist, like a signature. Who does that? Except somebody who wants you to read it."

The old man sits down. Not slowly, this time. He sits as if his legs have been cut.

"I told myself it was the wolves," he says, to the floor. "When they started dying. I told myself it was the wolves, because it gave me a war I could believe in." He looks up at you, and for the first time since you met him he looks every one of his eighty-one years. "I've buried children, Monsieur Lacroix. I know what I'm capable of believing, if it lets me sleep."
*remember bourdon You told him what his list was for. He sat down as if his legs had been cut.

*label peal
*page_break
"Tonight," the Bourdon says, "at three, the Carillon will ring a full peal. Stedman Caters, on the ten bells of La Tempérance. Five thousand and seven changes. Three hours and twenty minutes." He says it the way another man might say a prayer. "Every ringer in the order. It's the only way to close the wound the Thaw left in the Hush. Otherwise, by Saturday, there'll be nothing left to close."
*if bourdon_knows
  His voice is not quite steady. "I don't know any more what's right, Monsieur Lacroix. But I know how to ring a peal. It's all I know how to do tonight."
He turns to Lazare. "You'll ring the tenor, Lazare. You always ring the tenor. Nobody else can hold it through Stedman."

Lazare doesn't answer.

"And you, Monsieur Lacroix," the old man says, "will stay in your cell, please, and sleep, if you can. It's going to be very loud."

*page_break
Nobody stops Lazare from coming to your cell at midnight. Nobody's on the stool. The whole tower is getting ready: you can hear it through the stone, feet on stairs, doors, voices, somebody's radio, a woman laughing too loud with nerves.

"Come up," he says. "I want to show you something."

He takes you up past the Bourdon's study, through a low door you'd never have noticed, and out onto the roof.

The leads of Notre-Dame are a great slope of grey metal between the two towers, sixty metres above Place d'Armes, with a narrow walkway of planks along the ridge and a stone parapet along the front, carved with gargoyles, crusted with snow. On one side, La Persévérance, where the great bell hangs. On the other, La Tempérance, with its ten bells, lit gold behind its louvres. And beyond the parapet, the whole city, laid out in lights to the mountain, with the cross burning on top of it, and the snow coming down slowly over all of it like something being forgiven.

"The novices dare each other," Lazare says, "to walk to the parapet and look over. I did it when I was twelve. I was sick afterward." He looks at the parapet. "I've never done it since."

*choice
  *selectable_if (nerve >= 50) #Walk out to the parapet with him. Look over. Hold his hand while you do.
    *set nerve +3
    *set des_lazare +5
    *set rel_lazare +5
    You take his hand and walk him out along the planks, across the slope of the leads, to the stone parapet, and put your free hand on a gargoyle's head, and look over.

    Sixty metres down, Place d'Armes is full of hunters in the snow, small as chess pieces. Beyond them, Saint-Jacques, the old bank towers, the port, the river, black and frozen, going away east forever. Your stomach drops out of your body and keeps going. You don't let go of his hand, and he doesn't let go of yours, and after a minute the fear goes through you and out the other side, into something like flying.

    "Twenty years," Lazare says beside you, into the wind. "I've been scared of this for twenty years." He's laughing a little, breathless. "It's just a square."
    *remember lazare On the roof of Notre-Dame, you walked him to the parapet he'd been afraid of for twenty years.
  #Stay by the door with him, in the lee of the tower, out of the wind.
    *set rel_lazare +3
    *set guarded %+5
    You stay by the tower door, in the lee, out of the wind. Lazare sits on the plank walkway with his back to the stone, and you sit next to him, close enough to be warm, and the snow comes down on your knees.
  #Go out to the parapet alone. Then come back and tell him what's down there.
    *set nerve +2
    *set wry %+5
    You go out on your own, along the planks, and look over, and come back and sit down next to him in the lee of the tower with your heart going like a drum. "Hunters," you say. "Snow. Some very ugly gargoyles. One of them looks like the Bourdon."

    He laughs, surprised. "Which one?"

    "Left of the door. With the face like he's disappointed in the pigeons."

*page_break
"I've heard it every night since I was ten," Lazare says. "The bell. The big one."

The city hums below you. Behind you, through the stone of La Persévérance, you can feel it, if you listen: that low note under everything, like breath.

"When I was a novice I thought it was God. I thought God was talking to me in the bell, at night, and saying no. Just no, over and over." He looks at his hands. "I thought it meant I was damned. I prayed to stop hearing it. When I was fourteen I put candle wax in my ears for a year. I went to the Bourdon and confessed that I was hearing voices, and he held my hands and told me it was the devil tempting me, and gave me the tenor to ring, because when you're ringing the tenor you can't hear anything else." His mouth twists. "It worked. For twenty years. He knew exactly what it was. He gave me the rope so I'd drown it out myself."

*choice speak
  #"It wasn't saying no to you. It was saying no to them."
    *set rel_lazare +10
    *set lore +3
    *set wry %-5
    Lazare turns his head and looks at you. You watch it go into him, slowly, twenty years of it: the nights on the stairs with his hand on the wall. The wax. The rope.

    "Oh," he says, very quietly. "Oh."
  #"You weren't mad. You were the only sane man in the building."
    *set rel_lazare +8
    *set charm +2
    "That's a low bar," Lazare says. "Have you met Brother Anselme?" But his hand finds yours on the cold plank between you.
  #"What does it sound like? When it's saying no?"
    *set lore +5
    *set rel_lazare +5
    He thinks about it for a long time.

    "Like a man who's been told to be quiet at a funeral," he says. "Who knows the name of the dead and isn't allowed to say it. Angels can't lie, the old ringers say. But they can be silenced. And it's been silenced so long it's forgotten how to be anything but angry." He looks at the black bulk of the tower behind you. "An angel's anger isn't like ours, {name}. There's no mercy in it. It's just true."
    *codex angel
  #Don't say anything. Kiss him instead.
    *set des_lazare +10
    *set rel_lazare +5
    *set reckless %+5
    *set kissed_lazare true
    You turn his face to you with two fingers on his jaw, the side with the scar, and kiss him, on the roof of Notre-Dame, in the snow, with forty hunters sixty metres below and the whole city watching, if it cares to.

    He kisses you back. His mouth is cold, and then it isn't. His hand comes up into your hair and holds on, and he makes a sound into your mouth that's half a laugh and half something else, and when you break apart he stays there with his forehead against yours, breathing.

    "Twenty years of praying for it to stop," he says against your mouth. "And it turns out I only needed to be kissed on a roof."
    *if steam
      He kisses you again, harder this time, pulling you in by the front of your coat until you're half in his lap on the frozen planks, his thigh between yours, his hand sliding inside your coat to find the heat of you through your shirt, and you forget the cold, and the hunters, and the height. When he pulls back, his pupils are huge and his mouth is red. "After," he says, rough. "After. If there is one." His thumb moves on your hip. "I want a whole night with you where nobody's ringing anything."

*page_break
"It asked me to silence the bells," you say. "Tonight. At three. The angel. It said, [i]let me speak.[/i]"

*if angel_asked = "what"
  "I asked it what it would say," you add. "It said the truth. And then it said it would judge."
*elseif angel_asked = "trust"
  "I asked it why I should trust it. It said it didn't want anything from me. It wanted something from [i]them[/i]." You look at him. "And that that wasn't the same thing, and wasn't safer."
*else
  "And I said yes. I already said yes."

Lazare's quiet for a long time, looking at La Tempérance, where the ten bells are waiting behind the gold louvres.

"If it speaks," he says finally, "the whole island hears it. Everything the Hush is holding shut, it'll push on. I don't know what it'll say. Nobody does. Nobody's heard it in fifty-nine years." He turns to you. "But I've heard it every night since I was ten, telling me no. And I'm so tired of drowning it out." A breath. "What do you want to do?"

*page_break
*choice
  *if (has_notebook or mem_notes) *selectable_if ((rel_lazare >= 40) and ((wits >= 50) or (lore >= 40))) #Don't silence the bells. Change the peal. Ring it the song, quatre, un, quatre, six, deux, trois: ring the angel its own name.
    *set change_how "song"
    *set wits +3
    *set lore +3
    *goto ch_song
  *selectable_if (hands >= 52) #Muffle them. Ten clappers, ten leather muffles, and forty minutes before the band comes up. They'll ring and ring and nothing will sound.
    *set change_how "muffled"
    *set hands +3
    *goto ch_muffled
  *if (agathe_help or (rel_agathe >= 20)) #Ask Agathe. She keeps the ringing room. Ropes can be cut.
    *set change_how "ropes"
    *set rel_agathe +5
    *goto ch_ropes
  *selectable_if (rel_lazare >= 55) #"You ring the tenor. Nobody else can hold it through Stedman. So don't."
    *set change_how "stood"
    *set rel_lazare +5
    *goto ch_stood
  #Lock yourselves in. The ringing room has one door, and you're a locksmith.
    *set change_how "locked"
    *set reckless %+10
    *goto ch_locked
  #Don't. You don't trust anything that says the word [i]judge[/i] like that. Let them ring.
    *set change_how "none"
    *set guarded %+10
    *goto ch_none

*label ch_song
*page_break
"Not silence it," you say. "Answer it."

Lazare frowns. "Answer it with what?"

"With its name." You've had the six notes in your mouth since Monday night; you don't need the notebook, but you take it out anyway, and open it to your grandfather's handwriting. "He tuned the lock on the fort to the great bell in 1966. Six notes. The bell told me: [i]you carry my name in your hands.[/i] The Lacroix song [i]is[/i] its name." You look at the gold louvres of La Tempérance. "What if, tonight, instead of drowning it out, the Carillon rang it its name? Loud enough for the whole island?"

Lazare stares at you.

"A peal isn't a tune," he says slowly. "It's changes. The bells swap places, row after row. Nobody rings a melody. It isn't done." But you can see him thinking, the ringer in him, the part of him that's spent twenty years on a rope. "But a conductor calls the changes. And the band rings what he calls. And if the conductor called the fourth to lead, and then the first, and the fourth..." He stops. "The tenor would have to hold the whole time. Like a drone. Under it."

"Always begin on the fourth," you say. "He wrote it in the margin of a church lock in 1971. He said it was the only honest note."

"Who conducts tonight?"

"You tell me."

Lazare looks at you for a long moment, in the snow. "Brother Anselme," he says. "Unless he's ill." And then, very slowly, the first real grin you've ever seen on his face: "Brother Anselme is going to be very ill."

*page_break
At twenty to three you stand in the ringing room of La Tempérance, in a corner, in a borrowed black coat, while the band comes in.

Ten ropes hang from the ceiling in a circle, each with its sally, a thick striped grip of red and white and blue wool, each disappearing up through a hole in the boards to a bell you can't see. Ten ringers take their places: old men and young women and three novices on the trebles, their feet on little wooden boxes to reach. The small boy with the pudding-bowl haircut is on the second treble, standing on two boxes, holding his sally with both hands.

Mathis sees you. His eyes go huge. He doesn't say anything.

Lazare takes the tenor. He takes it the way another man might take the hand of someone he loves: without looking, knowing exactly where it is. And then he says, in a voice that carries without being loud, "Brother Anselme is unwell. I'll conduct tonight."

Nobody argues. Nobody ever argues with Lazare in the ringing room. The Bourdon, in the doorway in his cardigan with his hands folded, only nods.

"Look to," says Lazare. "Treble's going. She's gone."

*page_break
It starts as a peal. It starts exactly as it should: rounds, all ten bells in order down the scale, the sound pouring out of the louvres over the city, bright and cold and mathematical. Then changes: the bells begin to swap, row after row, the pattern unfolding, and you feel the Hush tightening under it like a bandage being wound.

And then Lazare calls.

"Four to lead."

The ringers blink. It isn't in Stedman. But the conductor has called it, and the band rings what the conductor calls. The fourth bell comes to the front.

"One after four. Four after one. Six. Two. Three."

You feel it go round the room. The old ringers' faces change. Hands falter and then hold. The novices on the trebles just ring, bright-eyed, not knowing enough to be afraid. And out of ten bells in a tower in the old town, over the whole sleeping island, comes a tune: six notes, down and up and held.

[i]Quatre. Un. Quatre. Six. Deux. Trois.[/i]

And again. And again. With the tenor under it all, never changing, Lazare holding it like a floor under everyone's feet, and his face, as he rings, completely open.

"Lazare!" The Bourdon's voice, from the door, cracking. "[i]Lazare, what are you...[/i]"

On the fourth time through, the great bell in the other tower answers.
*goto angel

*label ch_muffled
*page_break
The Carillon keeps muffles for requiems: leather pads that strap onto one side of each bell's clapper, so that it strikes half-dumb, for the funeral peals of Grand Masters. They're in a chest in the ringing room of La Tempérance. At a quarter past two, with the band at their prayers in the chapel below, you and Lazare go up the ladder from the ringing room into the bell chamber with ten muffles over your shoulder.

The bell chamber is a cage of oak beams in the dark, with ten bells hanging in a great frame. They're [i]up[/i], Lazare says: mouth to the sky, balanced on their stays, ready to swing. Their mouths gape. You have to climb down [i]into[/i] them, one by one, on the beams, and reach inside the bronze in the dark to get at the clapper. The biggest of them could drop you like a stone if anyone leaned on a rope below.

*choice
  *selectable_if (nerve >= 30) #Climb down into them yourself. One by one. Don't think about the ropes.
    *set nerve +3
    You climb into the first bell's mouth with a headlamp in your teeth. It's like climbing into a well. The bronze is freezing and gives back your breathing in a hundred tiny echoes. You find the clapper, a great iron tongue as long as your arm, and strap the leather round its ball with your locksmith's fingers, buckle, buckle, tight, and climb out. Nine more.

    On the seventh, three tons of bronze, the whole frame shifts a quarter of an inch under you as somebody below leans on a door, and your heart stops, and then goes on. You finish the buckle. You climb out.
  #Let Lazare go down into them. You do the straps from the beam. Your hands are better; his nerve is.
    *set rel_lazare +5
    *set hands +2
    Lazare goes down into the bells, one by one, braced in their bronze mouths with his long legs, holding each clapper steady, and you lie flat along the beams above with the headlamp and do the buckles upside down, your fingers numb, fast. It's the most intimate thing you've ever done with a man with your clothes on. Neither of you says so. On the seventh bell his hand comes up out of the dark and holds your wrist, for no reason, for a second, and lets go.
  *if (wishes >= 1) #It's too high. It's too much. Spend a wish on your nerve: ask Nadim for steady hands, just for tonight.
    *set wishes -1
    *set wishes_used +1
    You close your hand round the curl of warm smoke in your pocket and ask. You feel it go out of you and into your hands: heat, like holding a cup of coffee. Your fingers stop shaking. You climb down into the bells like a man going down his own stairs. Far away, very faintly, somebody says, in a formal, exhausted voice, [i]granted[/i].

*page_break
At twenty to three you're back in the ringing room, in a corner, in a borrowed black coat, while the band comes in. Ten ringers. Three novices on the trebles on their little boxes. The small boy with the pudding-bowl haircut is on the second treble. Mathis sees you and his eyes go huge. Lazare takes the tenor.

"Look to," says Brother Anselme, the conductor. "Treble's going. She's gone."

The ropes go up. The ropes come down. The sallies fly. Ten ringers throw their whole weight into the first rounds of the peal, and the bells swing up above in the dark, a hundred tons of bronze; you can feel it in the boards through your feet.

And nothing sounds.

Just a thud. Ten dull leather thuds, like somebody knocking on ten doors in a house where no one lives.

The ringers look at each other. Brother Anselme calls again. The ropes go up and down. Thud, thud, thud. And under the thuds, into the silence where the peal should be, from the other tower, something begins.
*goto angel

*label ch_ropes
*page_break
Agathe listens to you at the armory door at half past midnight with her arms crossed and her face white.

"The ropes," she says. "You want me to cut the ropes. The Carillon's ropes. That I've been sewing sallies onto since I was fifteen."

"Not cut. Nick. So they part at the first pull."

She looks at you, and doesn't hurry. You can see her faith in her face, holding her up like a load-bearing wall, and you can see the cracks in it: the gap on the peg, the tag in neat handwriting, [i]RETURNED[/i], the way the other hunters look at her in the refectory.

"If the angel speaks," she says slowly, "then I'll know. Won't I? Whether it's the devil, like he says. Or..." She stops. She goes to the rack and takes down a small curved knife, the kind for trimming rope. "Ten ropes. Just above the sally, where they can't see the cut. God forgive me." She looks at you. "If it's the devil, {name}, I'll ring the bell over you myself."

*page_break
At twenty to three you're in a corner of the ringing room in a borrowed coat. Ten ringers take their places. Three novices on the trebles on their little boxes. Mathis sees you, eyes huge. Agathe takes the fifth, with her face like stone. Lazare takes the tenor.

"Look to," says Brother Anselme. "Treble's going. She's gone."

The treble's rope goes up, and parts just above the sally with a crack like a whip, and the rope's tail goes whistling up through the hole in the ceiling like a snake going down a drain.

Then the second. Then the third. Ten cracks, one after another round the circle, ten ringers left standing with a sally of striped wool in their hands and nothing on the end of it. Somebody screams. Brother Anselme stares at the stump in his hands. Agathe stands absolutely still, holding hers, with her eyes shut.

In the silence where the peal should be, from the other tower, something begins.
*goto angel

*label ch_stood
*page_break
"Don't ring," you say. "That's all. You ring the tenor, and nobody else can hold it through Stedman. So don't pick up the rope."

Lazare looks at you for a long time, on the roof in the snow.

"He'll ask me in front of everyone," he says. "The whole band. The novices. He'll say [i]Lazare, look to[/i], the way he's said it every night for twenty years."

"I know."

"And I'll have to stand there and say no. To his face." His hand goes to his coat pocket, where the bell is. "That's what you're asking. Not a trick. Just to say no."

"The bell's been saying it for fifty-nine years," you say. "It could use the company."

*page_break
At twenty to three you stand in a corner of the ringing room of La Tempérance in a borrowed coat, while the band comes in. Ten ropes, ten sallies of striped wool. Three novices on the trebles on their little boxes. The small boy with the pudding-bowl haircut is on the second treble; Mathis sees you and his eyes go huge. The Bourdon stands in the doorway in his cardigan with his hands folded.

Nine ringers take their ropes. The tenor's rope hangs in its place, untouched.

Lazare stands beside it with his hands at his sides.

"Lazare," the Bourdon says gently. "Look to."

"No," says Lazare.

Nobody moves. The rope sways a little on its own in the draught.

"Lazare. [i]Mon petit.[/i] Without the tenor there is no peal."

"I know," says Lazare. "That's why." He looks at the old man who raised him, across the ringing room, in front of everyone, in front of the novices on their boxes. "I've heard it every night since I was ten, Father. Saying no. You gave me the rope so I'd drown it. I'm not going to drown it tonight." A breath. "I'm going to listen."

The Bourdon opens his mouth. And before he can speak, from the other tower, in the silence where the peal should have been, something begins.
*goto angel

*label ch_locked
*page_break
The ringing room of La Tempérance has one door: oak, iron-bound, with a lock in it made in about 1880, a big old box lock with a key the size of your hand. At two o'clock, while the band's at their prayers in the chapel, you and Lazare go in, and you kneel on the inside of that door with your kit.

You don't pick it. That would only open it. You take it apart and put it back together wrong, with the wards reversed and the bolt thrown, so that the key they'll bring up from the chapel will turn and turn and catch on nothing. It takes you forty minutes and every trick your grandfather wrote in the notebook's margins about church doors.

"How long will it hold?" says Lazare.

"Against a key? Forever. Against ten ringers with a pew?" You look at the oak. "Ten minutes. Maybe fifteen."

"Will that be enough?"

"I don't know how long angels take," you say.
*if pack_noise
  You text Dario. [i]3am. place d'armes. make a noise.[/i]

  Back comes a wolf, a bell, a skull and a thumbs up.

*page_break
At twenty to three the band comes up the stair from the chapel, and finds the door.

You sit with your back against the oak, with Lazare beside you under ten hanging ropes, and listen: the key going in, and turning, and catching on nothing. Voices. The key again. Somebody shoving the door, and then several somebodies. The Bourdon's voice, mild, through the wood: "Lazare. Open the door, please."

Lazare shuts his eyes and doesn't answer.
*if pack_noise
  And then, from Place d'Armes below, through the louvres, a noise.

  It starts with one howl and becomes thirty. The Sept-Ans, in the square, in the snow, in their fur, under the statue of Maisonneuve: the whole pack, howling at the towers of Notre-Dame at three in the morning, a sound to stand every hair on your body on end. On the stair outside, the shoving stops. Feet go running down, toward the square, to see.
*else
  "Get the pew!" Brother Anselme's voice, cracking. "Get the pew from the landing!"

  A crash. The whole oak door jumps against your spine. Another crash. The door holds. The door holds. Wood splinters.

It's three o'clock. Inside the ringing room ten ropes hang unrung.

And from the other tower, in the silence, something begins.
*goto angel

*label ch_none
*page_break
"No," you say. "Let them ring."

Lazare doesn't look away. You can't read his face.

"You're afraid of it," he says.

"Aren't you? It told me it was going to judge. It said it the way you'd say the river's going to rise." You shake your head. "Whatever's wrong with the Hush, I don't want that thing deciding what to do about it. Not yet."

He's quiet. Then he nods, slowly, and stands up, and brushes the snow off his coat. "Then I'll go and ring the tenor," he says. "It's what I'm for." He doesn't say it bitterly. That's the worst part.

*page_break
At three o'clock you're lying on the narrow bed in your cell when the peal begins.

It's enormous. Ten bells, across the roof from you, the sound so big it's not sound any more but weather: bright and cold and mathematical, the changes pouring out over the old town, over the island, row after row, and under your back the whole tower hums. You feel the Hush tighten under it like a bandage being wound. For three hours and twenty minutes, it doesn't stop.

And under it, if you put your hand flat on the stone wall, the way Lazare does on the stairs, you can feel the other bell. The great one. Humming its one long note, the whole time, under the peal. Trying to say something. Being drowned.

At some point you realise your face is wet, and you don't know when that started.
*set change_rung true
*remember lazare On the night of the peal, you asked him to ring the tenor, and he did.
*goto after_angel

*label angel
*page_break
*meet angel
*set angel_heard true
*achieve angel
*effect bells
It begins as the note. The one you've felt through the stone for two days: low, enormous, under everything. But now there's nothing on top of it. Nothing drowning it. And it rises.

It fills the ringing room. It fills the tower. You feel it come up through the soles of your feet into your ribs and your teeth. Out of the louvres of La Persévérance it goes, over the square, over the old town, over the frozen river and the mountain and every roof on the island, and the windows of the whole city hum with it at once, and the snow in the air stops falling. For a moment the snow simply hangs.

And it speaks.

*page_break
[b]MONTRÉAL.[/b]

It isn't sound. It's the note, turning into words inside every body that can hear it. You see, all round you, the faces change as it goes into them.
*if change_how = "locked"
  Beside you, against the door, Lazare. And through the oak, on the stair, you hear a dozen people go quiet at once.
*else
  The old men and the young women, the three novices on their boxes. They can all hear it now. Everyone can.

[b]FOR FIFTY-NINE YEARS YOU HAVE RUNG SMALL BELLS OVER ME SO THAT NO ONE WOULD HEAR ME SAY NO.[/b]

[b]HEAR IT. NO.[/b]

[b]I HAVE COUNTED THE CHILDREN TAKEN FROM THEIR BEDS. FOUR HUNDRED AND TWELVE. I KNOW EACH OF THEIR NAMES. THEIR MOTHERS DO NOT.[/b]

*page_break
[b]CLÉMENT OUIMET.[/b]

*if change_how = "locked"
  On the other side of the door, an old man's voice makes a sound like a man struck.
*else
  The old man in the doorway lifts his head as if he's been struck.

[b]I HEARD YOU WEEP FOR THE ELEVEN IN THE WINTER OF 1966. I HEARD YOU. EVERY NIGHT SINCE, I HAVE ALSO HEARD THE CHILDREN.[/b]

*if change_how = "locked"
  Through the oak you hear him go down: the creak of old knees on the boards, and then his voice, very low, saying something over and over that might be a prayer or might be a name.
*else
  The Bourdon goes down. Not falling: kneeling, slowly, on the boards in his cardigan, with one hand on the stone of the doorframe. He has never heard it before, you realise. He took children because they could hear it, for fifty-nine years, and he never once heard it himself. His lips are moving. You can't tell what he's saying.

*page_break
[b]AND HEAR THIS, WHICH IS THE TRUTH.[/b] The note deepens until the tower creaks. [b]THOSE WHO HAVE DIED THIS WEEK WITH A BELL'S MARK ON THEIR HEADS WERE NOT KILLED BY WOLVES.[/b]

[b]THE HAND THAT RINGS THE STOLEN BELL DRINKS AT THE PRESIDENT'S RIGHT SIDE.[/b]

*clue c_angel_word
*if change_how = "song"
  And then, softer, not to the island but to the room, to the tower, to you:

  [b]SERGE'S SON. YOU RANG ME MY NAME. NO ONE HAS SAID IT TO ME SINCE AURÈLE.[/b] The note shivers, like a laugh or a sob, in bronze. [b]I WILL REMEMBER IT.[/b]

  Up on the second treble, on his two boxes, Mathis is laughing out loud, with tears running down his face, still holding his sally, as if he's just been told the best secret in the world.
*elseif change_how = "stood"
  And then, softer, not to the island but to the room:

  [b]LORENZO FERRANTE. YOU LISTENED.[/b]

  Lazare, beside the unrung tenor rope, closes his eyes.
*elseif change_how = "ropes"
  And then, softer, not to the island but to the room:

  [b]AGATHE MARCHAND. IT WAS NOT YOUR HAND. IT WAS NEVER YOUR HAND.[/b]

  Agathe sits down on the boards with the stump of rope in her fist and puts her face in her hands.
*elseif change_how = "muffled"
  And then, softer, not to the island but to the room:

  [b]SERGE'S SON. YOU WENT DOWN INTO THE MOUTHS OF THE BELLS FOR ME.[/b] The note shivers. [b]I WILL REMEMBER IT.[/b]
*else
  And then, softer, to the two of you against the door:

  [b]SERGE'S SON. YOU LOCKED THEM OUT SO THAT I COULD BE HEARD.[/b] Something in the note that might, in a person, be dry. [b]YOUR FATHER WOULD HAVE LAUGHED.[/b]

*page_break
[b]THE BELLS WILL FLY TO ROME AT EASTER, AND COME HOME AGAIN.[/b] The note begins to sink, as if it's tired, as if even an angel can be tired. [b]WHEN THEY COME HOME, I WILL COME HOME WITH THEM. AND THEN I WILL JUDGE.[/b]

The note goes down, and down, and under, into the stone, into the ground. The snow starts falling again, all at once, as if nothing had happened.

It's over.

Everywhere on the island, you'll find out later, the sleepers woke at three o'clock to what they thought was thunder in February. Dogs barked from Pointe-aux-Trembles to Sainte-Anne-de-Bellevue. In Saint-Léonard, a woman stood at her kitchen window in her nightgown and couldn't stop crying, and didn't know why, and put her hand flat on the glass.

And every one of the Veillée heard every word.

*if (change_how = "locked") and (not(pack_noise))
  *set caught true
*if (change_how != "locked") or (angel_asked = "yes")
  *set ally_angel true
*if caught
  *page_break
  The door gives at last, four minutes after the angel falls silent. Not to the pew. To Brother Anselme, weeping, taking it off its hinges with a screwdriver.

  Four hunters come through it with bells in their hands, and iron. They don't ring them. They just stand there looking at you and Lazare on the floor under the ropes, like men who've seen something they can't put back.

  "Take him to the Bourdon," says one of them at last, without conviction. Nobody moves to do it.
  *set rel_bourdon -10
  *set nerve +2
*goto after_angel

*label after_angel
*page_break
*if change_how = "none"
  At twenty past six the peal ends. The silence afterward is so enormous it rings.

  You go up the stairs. You don't know why. The ringing room of La Tempérance is full of ringers sitting on the floor with their backs against the wall, sweating and grey, flexing their raw hands; three novices asleep on each other in a corner like puppies. The Bourdon stands in the middle of the room with his eyes shut and his face lifted, like a man who's come out of a storm. By the second treble box, the small boy with the pudding-bowl haircut is crying without making any noise. When he sees you, he turns his face away.

  Lazare is sitting against the wall under the tenor rope with his hands open on his knees. The palms are bleeding. He looks at you with no expression at all.

  "Well," he says. "It's quiet now."
*else
  *if change_how = "locked"
    *if not(caught)
      It takes you ten minutes to undo what you did to the lock. When the door swings open, the stair outside is full of ringers sitting on the steps, and the Bourdon is on his knees on the landing.
  In the ringing room of La Tempérance, nobody says anything for a long time.

  The ringers stand where they are. Some of them are crying. Some of them are praying. One old man is laughing silently with his hand over his mouth. The three novices have climbed down off their boxes and are standing close together, holding hands. The Bourdon is still on his knees.

  Lazare goes to him. He kneels down on the boards in front of the old man, so their faces are level.

  "You heard it," Lazare says. "Didn't you. For the first time."

  The Bourdon nods. He can't speak.

  "Now you know," Lazare says, "what it was like." He doesn't say it cruelly. He says it like a man handing over something heavy that he's carried a long way.

*page_break
Lazare takes his bell out of his coat pocket.

It's brass, the size of a teacup, on its worn leather cord. He's carried it every day since he was ten. You've seen him with it in his fist on the Main at the Thaw, and in the snow at the fort on Friday with Agathe, and hanging against his chest in the coat room. You've seen him touch it without knowing he was touching it, the way other men touch a wedding ring.

He looks at it. Then he looks at you.

*choice
  *selectable_if ((rel_lazare >= 45) or reconciled or (n6_parents = "told")) #"Put it down. Come with me. Now. You don't owe them another night."
    *set n6_lazare "left"
    *set rel_lazare +10
    *set nerve +2
  #"It's your choice. Whatever you choose, I'm not going anywhere."
    *set rel_lazare +5
    *set guarded %-5
    *if (rel_lazare >= 60) or reconciled
      *set n6_lazare "left"
    *else
      *set n6_lazare "stayed"
  #"Stay. Change it from inside. When this is over, those kids need somebody here they trust."
    *set n6_lazare "stayed"
    *set wits +2
    *set rel_lazare +3
  #Say nothing. It has to be him.
    *set guarded %+5
    *if rel_lazare >= 50
      *set n6_lazare "left"
    *else
      *set n6_lazare "stayed"

*if n6_lazare = "left"
  *set lazare_left_carillon true
  *goto lazare_leaves
*goto lazare_stays

*label lazare_leaves
*page_break
*portrait lazare neutral
Lazare stands up.

He walks across the ringing room to the conductor's little table by the door, where the peal book sits with a pencil and a jug of water, and he puts the bell down on it. It makes a very small sound on the wood: [i]tink[/i]. The smallest sound a bell can make.

He takes off his hunter's coat, the long black one with iron in the sleeves, and folds it over the back of the chair, neatly, the way he was taught to fold things at ten years old.

"My name is Lorenzo Ferrante," he says, to the room: to the ringers on the floor and the novices holding hands and the old man on his knees. "I was born on rue Jarry. I'm not a hunter of the Carillon." He looks at the Bourdon. "Thank you for Jules Verne. You did all the voices."

He walks out of the ringing room in his shirtsleeves, and down the stairs, and you go after him.

*remember lazare He put his bell down on the table in the ringing room, and walked out of the Carillon in his shirtsleeves.
*remember bourdon Lazare left his bell on the table, and thanked him for Jules Verne.
*if mathis_promise
  *goto mathis
*goto nadim

*label lazare_stays
*page_break
*portrait lazare sad
Lazare closes his fist around the bell.

"Not yet," he says. "Not like this. Not with them all..." He looks at the novices, at the old ringers. "Somebody has to be here tomorrow when they wake up and don't know what to believe. Somebody they know." He puts the bell back in his pocket. "If I walk out tonight, it'll be him or Anselme telling them what they heard. I can't let it be him."

He looks at you.

"Saturday," he says. "Whatever happens on Saturday, I'll be where you need me. I swear it. But tonight I'm staying with them."
*if change_how = "none"
  He doesn't say the rest. He doesn't need to. You asked him to ring, and he rang.
*remember lazare On the night of the peal, he stayed in the tower, for the novices.
*goto nadim

*label mathis
*page_break
*portrait mathis sad
You're three landings down the stairs of La Tempérance when feet come pattering after you, bare, on the stone.

It's Mathis. In his grey nightshirt, barefoot, with his crayon drawing in his fist.

"Take me with you," he says. He's out of breath. "Please. You promised. You said you'd help me find her. You can't do it from here and I can't do it from here, and I don't want to ring any more."

*if change_how = "none"
  "It was [i]crying[/i]. All night. Under us. It was crying and they made me ring over it." His voice wobbles, and he steadies it, furious.
*else
  "It was [i]crying[/i]. All this time. It was crying, and they made me ring over it, every night." His voice wobbles, and he steadies it, furious.

"I'm not staying. If you don't take me I'll go by myself. I know the sacristy way."

*if lazare_left_carillon
  Lazare, in his shirtsleeves, looks at you over the boy's head.

*choice
  #"Get your boots. And a coat. It's twenty below."
    *set mathis_out true
    *set rel_mathis +20
    *set rel_lazare +5
    *set guarded %-5
    Mathis runs. He's back in forty seconds with his boots on the wrong feet and a novice's grey coat down to his ankles. Lazare kneels down on the stone stairs without a word and switches the boots onto the right feet and does up the coat to the top button, the way someone once did it for him, a long time ago, on rue Jarry.

    "Where are we going?" says Mathis.

    Lazare and you look at each other. Neither of you knows.
    *remember mathis You took him out of the towers, with his boots on the wrong feet.
  #"Not tonight. It's not safe out there, Mathis. But I'll come back for you. I promise."
    *set rel_mathis +5
    *set guarded %+5
    Mathis looks at you with his enormous eyes. Then he nods, once, like a small soldier.

    "You promised twice now," he says. "That's two." And he turns and goes back up the stairs with the drawing in his fist, and doesn't look back.
    *remember mathis You left him in the tower, and promised to come back. He's counting.

*label nadim
*page_break
*portrait nadim hushed
On the stairs, somewhere between one landing and the next, the air goes hot.

A thread of smoke comes up through the stone. It's thin. It's so thin. It gathers itself in front of you on the step, and tries to be a man, and can't quite: a face, amber eyes, a hand. The hand has iron on it. A cuff of black iron round the wrist of the smoke, and a length of chain going away into nothing.

"Lacroix." His voice is almost nothing. "Creditor."

"Nadim. What... where are you?"

"Under the Beaver Club." The smoke wavers. "They came while the bell was speaking. Every ear on this island was turned to the towers, and nobody was watching the Line." Something like a laugh. "It was well done. Honora always did know how to time an entrance."
*if plate_how = "clarke"
  His amber eyes find yours. "The Conductor read my name," he says, "off the brass plate you gave him. My whole name. And I had to come when I was called. That's what a name is for." It isn't an accusation. It's worse; it's just true. "It's not your fault, Lacroix. You didn't know. I'm telling you so you'll know."
  *set rel_nadim -5
*else
  "They didn't have my name. You made sure of that." The smoke flickers. "So they used iron, a great deal of iron, and a boy with pony beads on his wrists, who can walk through any door in the city if someone once invited him. He apologised to me the whole time. [i]Sorry, love. Sorry.[/i]"
*set nadim_taken true
"What do they want?"

"Me. In the lock. On Saturday." The eyes go dim, and bright, and dim. "With you to turn the key. Or your father, if you won't."

"Nadim..."

"Keep your wishes," he says. "Don't try to spend them on me. A debt doesn't care about iron; you'll still have them when you need them." The smoke is going.

*if change_how = "none"
  "And Lacroix. The bell tried to speak tonight. I felt it, through all that iron, under the peal." Something almost like a smile. "One day somebody will let it."
*else
  "And Lacroix. The bell said no." Something almost like a smile. "I heard it, through all that iron. I've waited fifty-nine years for someone to say it."

He's gone. There's a smell of cedar, and hot stone, and nothing.
*remember nadim The night of the great peal, the Club took him in iron, and he came to you as smoke to say: keep your wishes.

*page_break
*if caught
  At dawn the four hunters walk you to the Bourdon's study, and can't look at you. The old man is sitting in his armchair by the window with a blanket over his knees and the green lamp still on. He looks up at you, and then at them.

  "Let him go," he says. "Let him go. What would I keep him for?" He turns back to the window, to the city, to the cross on the mountain going grey in the dawn. "It's said now. You can't unring a bell, Monsieur Lacroix. That's the first thing every novice learns." A long pause. "Saturday. The lock is still a Lacroix lock. Whatever it said. Whatever I am."

You come out of the tower into Place d'Armes at dawn.

The square is trampled. There are hunters sitting on the steps of the basilica in the snow in their long coats, not talking, some with their bells in their laps. Nobody stops you. Nobody even looks up. A pigeon is sitting on the head of the statue of Maisonneuve, looking at the city as if it's never seen it either.
*if lazare_left_carillon
  Lazare walks beside you in his shirtsleeves, again, in the cold, and this time he doesn't shake.
  *if mathis_out
    Mathis walks between you in his too-long coat, holding one of each of your hands, and looking up at everything.
*if reconciled
  At the kerb on Notre-Dame Street, with its engine running and its hazards flashing, is a tow truck with a dent in the door.

  Dario Santangelo leans on it in his parka and his toque, with his black eye, and three coffees and a hot chocolate, as if he knew. Maybe he did.
  *if lazare_left_carillon
    He looks at Lazare in his shirtsleeves, with no bell, and doesn't say anything at all. He just takes off his parka and puts it round Lazare's shoulders, the way you'd put a coat on a man who's come out of the river, and holds the lapels together, and leaves his hands there.
  *else
    He looks past you at the tower door. Lazare isn't with you. His face does something complicated, and then settles.

    "He stayed," he says.

    "For the kids. He said Saturday. Wherever we need him."

    Dario nods slowly. "Yeah," he says. "That's him. That's Enzo." He hands you a coffee. "Get in. I'll drive you home."
  *if mathis_out
    Dario looks down at Mathis. Mathis looks up at Dario: at the toque, the black eye, the beard.

    "Are you a wolf?" says Mathis.

    "Yeah," says Dario.

    "Cool," says Mathis, and takes the hot chocolate.
*else
  *if angel_heard
    *text dario i heard it
    *text dario everybody heard it. whole pack. manon cried
    *text dario the president's right side. who sits there
  *else
    *text dario those bells went all night. i could hear them in saint-léonard
    *text dario sounded like a funeral
  *if lazare_left_carillon
    *text dario is he with you
    *text me He walked out. He left his bell on the table.
    *text dario …
    *text dario tell him i'll be at jarry sunday. if he wants. he doesn't have to
  *else
    *text dario is he ok
    *text me He stayed. For the novices.
    *text dario course he did
The sun comes up behind the towers, and the great bell of Notre-Dame, all by itself, rings once.

Just once. For nobody. For everybody.

*if change_how = "none"
  *set hush 45
*else
  *set hush 35
*page_break Night Seven
*goto_scene night7
`);
