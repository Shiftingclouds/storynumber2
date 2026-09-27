NB.scene("night5a", String.raw`
*mood bells
*chapter 5 La Persévérance [5a]
*node n5_path bells
It's two kilometres from the Main to the old town, downhill all the way, and it's twenty-two below, and Lazare Desautels walks every metre of it in his shirtsleeves.

He doesn't seem to feel it. He walks fast, looking straight ahead, his bell in his fist on its leather cord, his breath going up in clouds, his lips going slowly blue. You keep pace beside him down Saint-Laurent, past the smoked-meat counters and the shuttered clubs and the Chinatown gates, and he doesn't say anything, and you don't make him.

At the corner of René-Lévesque, waiting for a light nobody else is awake to obey, he starts to shake.

*choice
  #Take off your coat and put it round his shoulders.
    *set n5_walk "coat"
    *set rel_lazare +10
    *set des_lazare +5
    *set guarded %-5
    He tries to refuse. You don't let him. You put it round his shoulders and pull it closed at the front like you'd do for a child, and hold the lapels for a second, and he stands there and lets you, looking at your hands.

    "You'll freeze," he says.

    "I'm from Verdun. We don't feel the cold. We just resent it."

    Something that might be a laugh. His teeth are chattering too hard to finish it.
  #Talk to him. Anything. Keep him here, in the street, in his body.
    *set n5_walk "talk"
    *set rel_lazare +5
    *set charm +2
    You talk. About nothing. About the snow, about the dentist in argyle socks, about the time you got locked in a bank vault on Saint-Jacques for six hours in 2021 because the time lock was set wrong and you had to pee in a deposit box. He doesn't answer. But by the time you get to the old town he's stopped shaking, and once, on Notre-Dame Street, he almost smiles.
  #Take his hand. His bell hand. Hold it.
    *set n5_walk "hand"
    *set des_lazare +10
    *set rel_lazare +5
    His hand is ice, and the bell is in it, and you take both, the hand and the bell together, and hold on.

    He looks down at your hands, and then at you. He doesn't let go. He doesn't let go all the way to Place d'Armes, walking down the middle of the empty street with his bell and your hand in his, like a man walking into church.
  #Say nothing. Walk beside him. Close enough that your shoulder touches his.
    *set n5_walk "quiet"
    *set rel_lazare +5
    *set guarded %+5
    You walk close. Your shoulder touches his at every step. It isn't much. He leans into it anyway, just slightly, all the way down the hill.

*page_break
*art 5a
Place d'Armes at two in the morning after the Thaw is full of hunters.

They've come from every tower in the city, the ringers of the Carillon: forty or fifty of them, in long dark coats with bells round their necks, standing in the snow in front of the basilica in knots of three and four, talking low. The front of Notre-Dame is dark. Up in the two towers, La Persévérance on the left and La Tempérance on the right, lights are burning behind the louvres, and you can hear, faintly, a single bell being rung, slow and steady, like a heartbeat.

They see Lazare coming across the square in a civilian's coat, or his shirtsleeves, with a sleeper beside him, and every conversation stops.

"Brother Lazare," someone says, uncertain.

He doesn't answer. He walks through them as if they're not there, toward a small iron door in the base of the left-hand tower, and they part for him, and some of them, you notice, won't meet his eyes. They know. The Thaw showed everyone something. Some of them, you realise, were shown the same thing he was.

At the door, a young hunter with a bell in his hand steps in front of it. "Brother. You can't bring a sleeper into La Persévérance. Not tonight. The Bourdon's orders."

"He's not a sleeper," says Lazare, without stopping. "He walked through a bell. And the Bourdon's going to see him, and he's going to see me." He puts his hand flat on the young man's chest and moves him aside, gently, like moving a curtain. "Go and tell him we're coming up."

*page_break
The stairs inside La Persévérance go up forever.

They're stone, and narrow, and they spiral, and every hundred steps there's a door, and behind the doors you catch glimpses of the Carillon's secret house in the tower: a refectory with long tables and a crucifix; a dormitory with rows of narrow iron beds; a room full of bell ropes, dozens of them, hanging from holes in the ceiling like the roots of some enormous tree, with a woman sitting under them on a stool in her nightgown, keeping one slow rope in motion, [i]tolling[/i]; an armory, lit, with rows of handbells on pegs like teacups, and a gap in one row where a bell should be.

Faces at doorways. Novices. Children. Eight, ten, twelve years old, in grey nightshirts, standing barefoot on the stone to watch Brother Lazare go by. One of them, a small boy with a pudding-bowl haircut and enormous eyes, lifts a hand and waves. Lazare doesn't see.

You do.

At the top of the stairs, under the belfry, there's a door of black oak with an iron ring for a handle. Light comes out underneath it, and the smell of tea.

Lazare stops in front of it. He doesn't knock. He puts his hand on the ring and stands there, and you watch his back rise and fall three times. Four.

"He taught me to read," he says, to the door. "He taught me to ring the tenor. He sat up with me every night for a month when I had scarlet fever, the winter I was eleven. He read me Jules Verne. He did all the voices." His hand tightens on the ring. "He took me out of my mother's house in the middle of the night, and he did all the voices."

He opens the door.

*page_break
*meet bourdon
The Bourdon's study is small and warm and full of books.

Bookshelves to the ceiling, crooked with weight. A desk under a green lamp, covered in papers. A kettle on a hot plate, steaming. A window of old wavy glass with the whole snowy city laid out beyond it and the mountain behind, and the cross on the mountain, white. And in the middle of the room, a lectern of dark wood, with a great book lying closed on it, bound in black leather, with a brass lock across its edge.

And an old man in a cardigan over his black cassock, getting up from the armchair by the window with a hand on its arm, slowly, the way old men get up.

Brother Clément Ouimet is eighty-one. He's small and thin and stooped and completely bald on top, with a fringe of white hair round the sides like a monk in an old painting. Reading glasses pushed up on his forehead. Pale blue eyes behind them, very gentle, very tired, the eyes of a man who's been awake worrying for sixty years. He looks like somebody's grandfather. He looks like the kindest man you've ever met.

"Lazare," he says. "[i]Mon petit.[/i]" His voice is soft and cracked. "You're frozen. Sit down, sit. I'll make tea." And then he sees you, and his eyes go over you, slowly, the velvet or the black or the red, the cufflinks, your face, and something in his own face changes: settles, the way a man settles when a long-expected guest finally arrives. "And Monsieur Lacroix. Of course. You have your grandfather's jaw."

"Did you take me," says Lazare.

*page_break
The kettle clicks off.

The Bourdon looks at Lazare for a long time. Then he takes his glasses off his forehead, and folds them, and puts them in the pocket of his cardigan, very carefully, as if he wants to be able to see nothing clearly for this.

"Yes," he says.

Lazare doesn't move.

"I took you," says the Bourdon, "from the second-floor bedroom of a duplex on rue Jarry, on the fourteenth of February, 2005, at three in the morning. I rang the bell over you myself. I rang the bell over your mother, and your father, and your aunt Carmela in the downstairs flat, and every child in your class at Saint-Bernardin, and the priest, and the man at the bakery who gave you a cannoli every Saturday." He says it steadily, the way you'd read out a list of names at a memorial. "It took four of us all night. You were the only child on the island that winter who could hear the bell."

"What bell."

"The great bell," says the Bourdon. "Jean-Baptiste. Above us." He lifts his eyes to the ceiling. "There is something that lives in it, Lazare. You know there is. You've heard it. You've heard it every night of your life in this tower, and you've never told me, because you thought it meant you were going mad." He smiles, very sadly. "It doesn't. It means you're one of the few who can hear it. And only those who can hear it can ring the changes that keep it quiet."

*page_break
"Keep it quiet," you say. "Why does it need keeping quiet?"

The Bourdon turns his gentle eyes on you.

"Because it objects, Monsieur Lacroix," he says. "To the Hush. To the Accord. To everything we did in 1967 to stop the war." He sits down, slowly, in the armchair. "You don't remember 1966. Nobody does, now. That was rather the point. There was a war in this city between the sleepers and the Veillée, a quiet one, in alleys, in back rooms, in hospitals. People saw things they couldn't explain and did what frightened people do. The Veillée did what hungry things do. I was twenty-one. I buried eleven children that winter. [i]Eleven.[/i] Sleepers and Veillée both. The youngest was four."

He looks at his hands.

"The Hush ended it. In one night. And it has kept the peace on this island for fifty-nine years. I have never pretended it was clean. It needed a djinn, and it needed a lock, and it needed a great deal of forgetting. And it needed children who could hear the angel, to ring it quiet, so it could not undo what we'd done." He lifts his head. "I took you, Lazare, because I believed that one stolen boy was a smaller sin than a hundred dead ones. I still believe it. I have believed it every day for twenty-one years. And I have loved you every day for twenty-one years, which does not make it one grain better."

*page_break
Lazare is standing in the middle of the study with his hands at his sides, and he's crying, without any sound at all, the tears just running down his face and off his jaw onto the collar of his shirt.

"My mother," he says.

"Is alive," says the Bourdon. "And well. And happy, I think, in the way people are happy who don't know what they've lost." He says it gently. "That's the mercy of it, Lazare. She's never grieved you for one day."

*choice speak
  #"That isn't mercy. That's theft. You stole twenty-one years of grief from her along with her son."
    *set n5_bourdon "earnest"
    *set rel_lazare +15
    *set rel_bourdon -10
    *set wry %-10
    *set nerve +2
    The Bourdon looks at you for a long time.

    "Yes," he says at last. "It is. You're quite right." He doesn't argue. That's the worst part. "I've never found a word for it I could live with. [i]Mercy[/i] is the one I use to sleep."

    Lazare turns his head and looks at you, as if you've said something he's been trying to say for twenty-one years and couldn't find the words for.
    *remember lazare In the Bourdon's study, you called it what it was: theft.
  #"You're a very good liar, Father. You even believe yourself."
    *set n5_bourdon "wry"
    *set rel_bourdon -5
    *set wry %+10
    "I've never lied to him," the Bourdon says mildly. "Not once. I told him a wolf took his parents. A wolf did take them from him. A wolf in a cassock." He almost smiles. "The Jesuits taught me that sort of thing. I'm not proud of it."
  #"If you ever go near him again with a bell, old man, I'll put it through your window."
    *set n5_bourdon "bold"
    *set rel_bourdon -15
    *set rel_lazare +10
    *set reckless %+10
    *set nerve +3
    The Bourdon doesn't flinch. He just looks at you with those tired blue eyes. "I believe you would," he says. "Aurèle said much the same to me, in 1967, when I asked him to tune the lock." A pause. "He built it anyway."
  #"What do you want from us, Father? Tell us plainly, and we'll listen."
    *set n5_bourdon "guarded"
    *set rel_bourdon +10
    *set wits +2
    *set guarded %+5
    "Plainly," says the Bourdon. "Yes. That's fair." He folds his hands. "I want what I've always wanted. For this island to go back to sleep. And for no more children to be buried." He looks at you. "And for that, Monsieur Lacroix, I need you."

*page_break
"On Saturday," says the Bourdon, "at three in the morning, the Hush will be finished unless somebody closes the lock on the fort again with a djinn inside it. It is a Lacroix lock. It takes a Lacroix hand." He looks at you. "Close it for me, Monsieur Lacroix, and I will give you your father."

The room goes very quiet.

"My father left in 2011."

"Your father tried to open that door in March of 2011, with a crowbar and a transistor radio and a song he'd half forgotten, because a djinn had become his friend," says the Bourdon. "I was there. I rang the great bell over him myself. He's been cutting keys on the Missing Line for fifteen years, with no name, a few kilometres from your bed." He watches your face. "He's alive, Monsieur Lacroix. And the Hush that took him can give him back. The great bell can unmake an unmaking, if it's rung by the right hands on the right night. Close the lock on Saturday, and on Sunday I'll ring it for Serge Lacroix, and he'll know his own son." He turns to Lazare. "And I'll ring it for Rosa and Vito Ferrante, and they'll know theirs."

*if met_keyman
  A pair of square, scarred hands, black with brass dust, holding out a key. [i]You'll need this, I think.[/i] A man who flinched at the name Lacroix. The Keyman. Your father.

  You have to sit down. There's a chair. You sit on it.
*set know_keyman true
*clue c_flinch

*choice
  #"Yes. I'll close it. Give me my father."
    *set bourdon_deal true
    *set n5_bourdon "deal"
    *set rel_bourdon +20
    *set rel_lazare -10
    *set guarded %+10
    It comes out of you before you've thought about it. You see Lazare turn, very slowly, and look at you.

    "Thank you," says the Bourdon quietly, and you can hear that he means it, that he's been praying for exactly this. "You won't regret it. You'll have him back by Sunday Mass."

    Lazare doesn't say anything at all. He just looks at you, and then at the old man, and then out of the window at the city, as if he's standing on a very high place and trying to decide which way to fall.
    *remember lazare In the Bourdon's study, you said yes to closing the lock, for your father.
  #"No. Not with Nadim inside. Find another way."
    *set n5_bourdon "refused"
    *set rel_bourdon -5
    *set rel_lazare +10
    *set rel_nadim +5
    *set nerve +2
    "There is no other way," says the Bourdon, gently. "There's only this way, or war." He doesn't seem angry. He seems sad, the way a doctor is sad. "But you have until Saturday. Think about your father. Think about Lazare's mother. Think about a four-year-old in a hospital bed in 1966." He stands. "And stay here, please. As my guest. It isn't safe for you outside, now that everyone knows what you can do."
  #"Make me forget. All of it. Ring your bell over me and let me go home."
    *goto forget_me
  #"I need time."
    *set n5_bourdon "time"
    *set wits +2
    "Of course," says the Bourdon. "You have until Saturday. That's all anybody has." He stands. "Stay here, please, as my guest. It isn't safe for you outside, now."

*goto guest

*label forget_me
*page_break
"Make me forget," you say.

Lazare turns. "{name}..."

"All of it. The fort. The djinn. The Line. The ghost and the wolves and you, and my father, and all of it." Your voice is shaking. "I didn't ask for any of this. I opened a door for two thousand dollars. I want to go home. I want to wake up in my own bed and not know."

The Bourdon looks at you for a long time with great kindness.

"The ordinary bells won't take you," he says. "You're owed a debt. But the great one would." He glances up at the ceiling, where eleven tons of bronze are hanging in the dark. "It would take everything since Friday. You'd wake up in your van on Wellington with a Jos Louis in your hand and a very bad headache, and never know. Is that truly what you want?"

*choice
  #"Yes."
    *set n5_bourdon "forget"
    *goto_scene endings sleeper
  #"...No. No. I'm sorry. I don't know why I said that."
    *set nerve +3
    *set guarded %-5
    "Because it's three in the morning and you've had a very long week," says the Bourdon, not unkindly. "It's the most human thing I've heard anyone say tonight." He stands. "Stay here, please, as my guest. Sleep. You have until Saturday."
    *goto guest

*label guest
*page_break
[i]Guest[/i], it turns out, means a novice's cell on the fourth floor of La Persévérance, with a narrow iron bed and a crucifix and a window the size of a book, a young hunter sitting on a stool outside the door all night with a bell in his lap, and the door not locked, exactly, but not open either.

You're a locksmith. You notice that the lock on the cell door is a hundred-year-old mortise lock that you could open with a hairpin. You also notice the hunter on the stool. You lie on the bed in your party clothes with your grandmother's key against your chest and the Keyman's in your pocket, and you look at the ceiling, and you think about a man with your hands.

Lazare went down the stairs without a word after the Bourdon's study. You don't know where.

You don't think you'll sleep. You do.

*page_break
You wake at dawn because somebody is standing at the foot of your bed.

It's the small boy with the pudding-bowl haircut, from the stairs. He's holding a tray with a bowl of soup and a heel of bread and a glass of milk, very carefully, with his tongue between his teeth. Behind him the hunter on the stool is asleep with his chin on his chest.

"Brother Lazare said to bring you breakfast," the boy whispers. "He said you'd be hungry, and grumpy, and to not mind." He puts the tray on your knees. "I'm Mathis."

"Hi, Mathis."

He sits on the end of the bed without being asked, the way kids do, and looks at you with his enormous eyes.

"Are you the one who opened the fort?"

*choice speak
  #"Yeah. That was me."
    *set rel_bourdon -2
    Mathis lets out a breath. "Brother Aurèle-Marie says you're going to make everything go dark. Brother Lazare says you're going to make everything better." He looks at you seriously. "Which one?"

    "I don't know yet, Mathis."

    He nods, as if that's a very reasonable answer.
  #"Depends who's asking."
    *set wry %+5
    "Me," says Mathis, reasonably. "I'm asking." And you laugh, for the first time since midnight, with your mouth full of soup, and he grins, delighted.
  #"How old are you, Mathis?"
    *set rel_lazare +3
    "Eleven. Nearly. In June." He swings his feet. "I've been here since I was eight. I don't remember before. Brother Clément says that's normal, that everybody's like that, that it's the Hush being kind." He looks at the window. "I don't think it's kind. But he says it is."

*page_break
"Can I ask you something?" says Mathis, lower. He glances at the sleeping hunter on the stool. "Don't tell Brother Clément."

"Okay."

"Do you hear it? The big one?" He points at the ceiling. "At night. When everyone's asleep and they're not ringing. It..." He struggles for the word. "It hums. And sometimes it's sad. Really sad. Like when you cry and try not to make any noise." He looks at you. "Brother Lazare hears it too. He never says. But I see him, at night, on the stairs, with his hand on the wall, listening."

He reaches into the neck of his nightshirt and pulls out a piece of paper, folded small, soft from handling. He unfolds it on the blanket. It's a drawing, in crayon, the kind an eight-year-old does: a woman with yellow hair and a green coat, standing in front of a house with a red door, holding the hand of a small boy.

"I don't know who that is," says Mathis. "I drew it when I got here. I don't know why. I just knew what she looked like." He folds it up again, fast, as if he's afraid it'll be taken. "Brother Clément says it's just a dream I had."

*choice
  #"It's not a dream, Mathis. It's your mother. I promise you, one day, I'll help you find her."
    *set mathis_promise true
    *set guarded %-10
    *set rel_lazare +5
    He stares at you. His whole small face goes very still, the way a kid's face goes when an adult says something too big to believe and too important to not.

    "You promise?"

    "I promise. I'm a locksmith. I open things." You hold out your hand. "Shake on it."

    He shakes it. His hand is very small and very cold and he holds on a second too long.
    *remember lazare You promised Mathis you'd help him find his mother. He told Lazare.
  #"Keep it safe. Don't let anybody take it."
    *set mathis_promise true
    *set rel_lazare +3
    He nods, fierce, and tucks it back into his nightshirt. "Nobody," he says. "Not even Brother Clément."
  #"Brother Clément is probably right. It's probably a dream."
    *set guarded %+10
    *set rel_bourdon +5
    Mathis's face closes, the way kids' faces close when an adult turns out to be just another adult. "Okay," he says politely, and gets up, and takes the empty tray, and goes.

*page_break
You spend Tuesday in the tower.

Not in the cell: nobody stops you walking, as long as the young hunter with the bell walks three steps behind you. So you walk. You see the refectory at lunch, where fifty hunters eat soup in silence under a crucifix and nobody meets your eyes. You see the ringing room, where the bell ropes hang in their dozens, each one with a sally of red-and-white wool to grip, each one leading up through the ceiling to a bell you can't see. You watch a woman teach three novices to ring a change: [i]handstroke, backstroke, handstroke[/i], the ropes going up and down like breathing.

You see the armory in La Tempérance, the other tower, across a bridge of leads above the basilica's roof. Rows of brass handbells on pegs. Iron, in racks: long nails, and knives, and a single sword. And in one row of bells, a gap, with a paper tag hanging from the empty peg in neat handwriting: [i]Sœur Agathe. 2/2. RETURNED.[/i]

It hasn't been returned.

"Don't," says a voice behind you. "Please. Don't say anything."

*page_break
*portrait agathe sad
Agathe is standing in the armory door in her black coat, and she looks as if she hasn't slept since Guy Hébert died. Her freckles stand out on her face like paint.

"I signed for it on the second," she says. "I took it on patrol. I brought it back. I [i]know[/i] I brought it back, I hung it on that peg myself." She comes in and stands looking at the gap. "Three weeks later it's gone, and the Bourdon says it's being looked into. And now two people are dead with that bell's mark on their heads, and every hunter in this tower looks at me in the refectory like I'm..." She stops. "Like I might be the one."

*clue c_bell_stolen
*if saved_agathe = "between"
  She looks at you. "You put yourself between me and a wolf," she says. "At the fort. You didn't even know my name." A long breath. "So I'm going to trust you. God knows there's nobody in this tower I can."
*elseif saved_agathe = "pulled"
  She looks at you. "You pulled me out of the way of a wolf," she says. "At the fort. I never said thank you properly." A long breath. "So I'm going to trust you. God knows there's nobody in this tower I can."
*else
  She looks at you for a long time, as if deciding something. "Lazare trusts you," she says finally. "I've never seen him trust anyone. So."

"The Register," Agathe says. "The book on the Bourdon's lectern. Every name the Hush has ever unmade. If that bell's been used on the unmade, then whoever's using it is working from that book. Somebody's reading it. Somebody's choosing." She swallows. "The Bourdon keeps the key on his person. Always. He goes down to Compline at nine tonight. Forty minutes. His study's empty for forty minutes."

*choice
  *selectable_if ((charm >= 45) or (saved_agathe = "between") or (saved_agathe = "pulled")) #"Help me. Keep the guard on the stairs busy for forty minutes. I'll do the rest."
    *set agathe_help true
    *set rel_agathe +15
    *set charm +2
    She closes her eyes. "God forgive me," she says. "Yes. Nine o'clock. I'll bring him cocoa and ask him about his mother. He'll talk for an hour." She opens them. "If you get caught, I didn't do this."

    "Of course you didn't."
    *remember agathe She helped you get into the Bourdon's study, and asked you to say she didn't.
  #"Why are you telling me this?"
    *set wits +2
    *set rel_agathe +5
    "Because you're a locksmith," Agathe says, "and I'm a coward, and somebody in this tower has to find out who's killing people with my bell before I lose my mind." She turns to go. "Nine o'clock. Forty minutes. I didn't tell you."
  #"I'm not going to risk it. It's too dangerous."
    *set reckless %-10
    *set rel_agathe -5
    Agathe looks at you for a long moment. "Okay," she says. "Okay. I understand." She doesn't. You can see it in her face. She goes.

*page_break
Lazare finds you at dusk, in your cell, sitting on the bed with the light off, watching the snow come down past the book-sized window.

He's changed out of his party clothes into his hunter's black, but he isn't wearing his bell. He stands in the doorway for a long time. Then he comes in, and shuts the door behind him, and sits on the other end of the narrow bed, as far away as the bed allows, with his elbows on his knees and his hands hanging.

"I didn't go," he says. "To Jarry. I walked there. This afternoon. I stood at the end of the street and looked at the house for an hour, and I didn't go."

"Why not?"

"Because she won't know me." He's looking at his hands. "Because I'll knock on the door and she'll open it and she'll look at me like a stranger, like a man selling something, and I'll know. I'll know she's alive and happy and doesn't know I was ever born." His voice cracks. "I don't know if I can do that. I don't know if I can survive her looking at me like that."

*choice speak
  #Move down the bed. Sit next to him. Put your hand on the back of his neck.
    *set rel_lazare +10
    *set des_lazare +10
    *set guarded %-5
    He goes still under your hand. Then, slowly, his head comes down, until his forehead is resting on his knees, and he breathes, long and ragged, and you keep your hand where it is, your thumb moving very slightly against the short hair at the nape of his neck.

    "Nobody's touched me like this," he says, muffled. "Nobody. In twenty-one years. Except..." He stops.

    "Except Dario."

    He doesn't answer. His shoulders shake once.
  #"Then I'll come with you. You won't be standing on that doorstep alone."
    *set rel_lazare +15
    *set nerve +2
    He lifts his head and looks at you.

    "You'd do that."

    "I'm already in it. Aren't I."

    He looks at you for a long time in the dark. "Tomorrow," he says. "Tomorrow night. If I can." A breath. "If you're there."
  #"Say your name."
    *set rel_lazare +10
    *set des_lazare +5
    He looks at you, confused.

    "Your name," you say. "Your real one. Say it. Out loud. You haven't, yet. Have you."

    He opens his mouth. Nothing comes out. He closes it. He tries again, and you watch it cost him.

    "Lorenzo," he says. It comes out a whisper, like something he's afraid of breaking. "Lorenzo Ferrante." And then, stronger, astonished, as if he's heard someone else say it: "[i]Enzo.[/i]"
    *set lazare_said_name true
    *remember lazare In a cell in La Persévérance, he said his own name out loud for the first time.
  #"You're not the only one. The Keyman is my father. The Bourdon took him too."
    *set rel_lazare +10
    *set wits +2
    Lazare turns his head. "The Keyman," he says slowly. "On the Line. The old man with the treadle." He stares at you. "Your father's been down there the whole time?"

    "Fifteen years. A few kilometres from my bed."

    He doesn't say anything. He just reaches over in the dark and takes your hand, and holds it, hard, like two men holding on to the same rope.

*page_break
*if ((des_lazare >= 45) and ((kissed_lazare) or (three_kiss)))
  He turns to look at you, in the dark, and something has changed in his face. The grief is still there. But there's something under it now, something that's been waiting.

  "I've been kissed like that twice in my life," he says quietly. "By Dario, in 2019, on a roof in Rosemont, just before I put a knife in him. And by you." He swallows. "I don't know what I am any more. I don't know who I am. I know what I want." A breath. "May I?"

  *choice
    #"Yes."
      *goto cell_yes
    #"Not like this. Not tonight. You're hurting. Stay, though. Just stay."
      *set rel_lazare +15
      *set guarded %-5
      He looks at you for a long moment, and then he nods, and lies down on the narrow iron bed with his back against the wall, and you lie down beside him, and he puts his arm over you in the dark, heavy and careful.

      He falls asleep almost at once, the way people do when they haven't slept in days. You lie awake and listen to him breathe, and to the great bell above you humming, very faintly, like someone singing to themselves in another room.
      *remember lazare You stayed with him in the cell, and didn't take anything, and he slept.
      *goto cell_end
*else
  He stays until the bells ring six, sitting beside you in the dark, not saying much. When he goes, he stops at the door.

  "Thank you," he says. "For coming up the stairs with me." A pause. "Nobody ever has."
  *goto cell_end

*label cell_yes
*set slept_lazare true
*set des_lazare +15
*set rel_lazare +10
*if steam
  He kisses you like he's asking permission with every second of it, and then like he isn't asking any more.

  His hands are careful at first: on your face, your jaw, the back of your neck, as if he's learning the shape of you by touch, the way a blind man learns a lock. Then less careful. He pulls the velvet off your shoulders, or the black shirt, or the red silk, and makes a sound when he sees you, low and helpless, and puts his mouth on your collarbone like a man drinking.

  "Tell me if..." he starts, and you pull him down onto the narrow iron bed before he can finish.

  He's all edges and heat under the black: the long hard muscle of a man who climbs towers for a living, a scar across his ribs, another on his shoulder, pale in the snowlight from the window. You touch every one of them. He shudders at each, as if nobody's ever touched them on purpose. When your hand goes lower he stops breathing entirely, and says your name against your mouth like a prayer, and then like something that isn't a prayer at all.

  He asks, every time. [i]Is this... can I...[/i] Every time, in the dark, in a whisper, as if the asking is part of it. As if nobody ever asked him, and he's decided he'll never not ask anyone. And every time you say [i]yes[/i], he makes a sound like you've given him something.

  The bed is too narrow. The iron frame creaks. Somewhere above you eleven tons of bronze are humming, very faintly, as if the angel in the bell is listening, and neither of you cares. He's slow, and then he isn't. He holds your wrists above your head against the iron frame and looks down at you in the snowlight with his black eyes gone wide and wet, and you see him see you, all of you, and not look away.

  Afterward he lies with his face in your neck and his heart going like a hammer against your chest and says, very quietly, "Lorenzo. Say it. Please. Just once."

  You say it. He shakes, once, all through, and holds on.
*else
  He kisses you like he's asking permission with every second of it, and then like he isn't asking any more. The bed is too narrow and the iron creaks and above you the great bell hums, faintly, as if listening. He asks, every time. Every time, you say yes.

  Afterward he lies with his face in your neck and says, very quietly, "Lorenzo. Say it. Please. Just once." You say it. He holds on.
*remember lazare In a cell in La Persévérance, under the great bell. He asked, every time.

*label cell_end
*page_break
At nine o'clock the bells ring for Compline, and the whole tower goes down the stairs to pray.

You hear them go: fifty pairs of feet on the stone, the murmur of voices, the slow tolling of a single bell. And then the tower is quiet.

The hunter on the stool outside your door is gone.
*if agathe_help
  From the landing below, faintly, you hear Agathe's voice, bright and too loud: "Brother Anselme! I brought you cocoa. I wanted to ask you about your mother, you never talk about her..."
You open your door with a hairpin in eleven seconds, and go up the stairs.

*page_break
The Bourdon's study is dark except for the green lamp on the desk, which he's left on. The kettle's cold. The window shows the city, lit, and the mountain, and the cross.

The lectern stands in the middle of the room with the Register lying closed on it: black leather, heavy as a gravestone, and across its edge a brass hasp with a lock set into it. Small, old, beautiful. And stamped on the brass, worn almost smooth, a mark you'd know anywhere.

Not a cross in a circle. A cross in a circle, with a small [i]S[/i] beside it.

Serge.

Your father built this lock.

*choice
  *if (has_key) #Try the Keyman's key. The one he cut you for nothing. [i]You'll need this, I think.[/i]
    *set lectern_how "key"
    *set rel_keyman +5
    *set hands +2
    You take it out of your pocket. Plain brass, new, one tooth filed by hand. You don't expect it to fit.

    It slides in like it was made for it. Because it was. Fifteen years after he made the lock, with no name and no memory, a man on the Missing Line cut its key from the shape in his hands.

    It turns. The hasp opens with a small, soft click.

    You have to stand there for a second with your hand on the book.
  *selectable_if (hands >= 50) #Pick it. It's your father's work. You were taught by the same hands.
    *set lectern_how "picked"
    *set hands +5
    It's a lever lock, five levers, tiny. You kneel at the lectern with your pick and tension wrench and your nose an inch from the brass, and go in.

    It's like hearing a voice you know from another room. Every lever is set the way your father set them, the way he taught you when you were nine: the third one always a hair stiffer than the others, [i]to make them think[/i], he used to say. You find the third lever. You smile. You don't mean to.

    It opens in ninety seconds.
  #Break the hasp. There's a letter knife on the desk. Forty minutes isn't long.
    *set lectern_how "forced"
    *set reckless %+10
    *set nerve +2
    You get the letter knife under the hasp and lean on it, and the old brass bends, and bends, and snaps with a noise like a pistol shot in the quiet tower.

    You freeze. Far below, the chanting of Compline goes on, unbroken. Nobody heard. Probably. The hasp hangs off the book, twisted.

    He'll know. Whenever he opens it next, he'll know someone was here.

*page_break
*set read_register true
*achieve register
The Register is written in fountain pen, in the same small upright hand from the first page to the last. Fifty-nine years. Hundreds of pages. Thousands of names.

Each entry the same: a date, a name, an age, a place, and a reason. [i]Saw.[/i] [i]Knew.[/i] [i]Would not stop asking.[/i] [i]Heard.[/i] Hundreds and hundreds of [i]Saw.[/i] Dozens of children marked [i]Heard[/i], every one of them followed by the same two words: [i]Taken in.[/i]

You turn the pages with hands that aren't steady.

[i]14 February 2005. Lorenzo Ferrante. 10. Rue Jarry, Saint-Léonard. Heard. Taken in. Family unmade (6), neighbours (31), school (212), parish (Saint-Bernardin, all).[/i]

[i]19 March 2011. Serge Lacroix. 44. Île Sainte-Hélène, at the fort. Attempted the lock. Unmade (self). Placed on the Missing Line. Keep close.[/i]

[i]Keep close.[/i]

[i]2 September 2023. Mathis Tremblay. 8. Rue Sainte-Rose, Centre-Sud. Heard. Taken in. Mother unmade.[/i]

*page_break
And then you find what you came for.

You find it because of the ink. Everything in the Register is in the same blue-black fountain pen, faded to brown in the early pages. But here and there, down the margins of the older pages, next to certain names, there's a small new mark. A tick. In the same hand, but in fresh, glossy black. Recent. Weeks old at most.

[i]11 June 1983. Mireille Caron. 31. Strachan House, the Golden Square Mile. Saw (the Club at table). Unmade (self; daughter unmade from her).[/i] A fresh black tick.

[i]23 May 1994. Guy Hébert. 13. Novice, La Persévérance. Saw (the fort). Unmade (self). Released.[/i] A fresh black tick.

You go through it with shaking fingers. Nineteen fresh ticks. Nineteen names. Two of them dead. Seventeen still alive, somewhere on the island, starting to remember.

And one of the seventeen, three pages from the end:

[i]19 March 2011. Serge Lacroix.[/i] A fresh black tick.
*clue c_victim_list
*clue c_bourdon_list

*choice
  #Take a picture of every ticked page. Every one. Fast.
    *set wits +2
    *set nerve +2
    You get your phone out and photograph every page with a fresh tick on it, nineteen pages, your hands shaking so badly half the pictures blur, and you take them again.
  #Tear out your father's page. He's not staying in this book.
    *set reckless %+10
    *set rel_keyman +5
    You tear it out. The sound is enormous in the quiet. You fold it into your shirt, against your chest, next to your grandmother's key.

    He'll know. You don't care.
  #Close the book. Leave it exactly as you found it. Remember everything.
    *set guarded %+5
    *set wits +2
    You close the book. You lock it again, if you can. You stand in the green lamplight and say the nineteen names under your breath, once, twice, so you won't need a photograph.

*page_break
Above the Bourdon's study there's a ladder, iron, bolted to the wall, leading to a trapdoor in the ceiling. You know where it goes. You've been feeling it all day, like a pressure behind your eyes, like a hand resting on the top of your head.

You climb.

The belfry of La Persévérance is a cage of oak beams and louvred windows, open to the night on all four sides, snow blowing in. The whole city is out there, glittering, and the cold is savage. And in the middle of the belfry, hanging from a frame of beams as thick as a man, is a bell the size of a small house.

Jean-Baptiste. Eleven tons of bronze, cast in London in 1848, rung on the great feasts for a hundred and seventy years. Its lip is taller than you are. Its surface is green-black with age, crusted with inscriptions and saints in relief. It hangs perfectly still.

And it's humming.

You feel it before you hear it: in your feet on the boards, in your ribs, in the brass key on its chain against your chest, which has gone warm. A single low note, so deep it's barely sound, going on and on, like a held breath that never runs out.

*page_break
*meet angel
[b]Lacroix.[/b]

It isn't a voice. It's the note. It changes, inside you, into a word, the way a lock turns into an open door.

[b]You carry my name in your hands.[/b]

You don't understand. And then you do. Six notes. Down, and up, and held. Quatre, un, quatre, six, deux, trois. Your grandfather in this belfry in the summer of 1966 with a tuning fork.

"The song," you say out loud, to eleven tons of bronze in the snow. "The lock. He tuned it to you."

[b]He stole my name to make a lock my kind could never open. And then he wept, here, where you stand, and asked forgiveness, and I gave it.[/b] The note deepens. [b]I have said no for fifty-nine years. They ring the small bells over me every night so that no one will hear. Only the ones who can hear me hear me. They take those ones too.[/b]

"What do you want?"

[b]To be heard. Once. By the whole city.[/b] The hum rises. [b]Tomorrow night, at three, the small bells in the other tower will ring their change over me, as they do every night. Silence them. Let me speak.[/b]

*choice speak
  #"What will you say? If I let you speak?"
    *set angel_asked "what"
    *set lore +5
    [b]The truth.[/b] A long pause, the note wavering like a candle. [b]And then, when I am free, I will judge.[/b]

    It isn't a threat. It's worse than a threat. It's a simple statement, the way you'd say [i]the river will rise in April.[/i]
  #"I'll do it."
    *set angel_asked "yes"
    *set nerve +3
    [b]I know.[/b] The note softens. [b]You are Serge's son. He used to come up here too, when he was young, before he was the keeper, and put his hand on me, and hum my name back to me, and not know why.[/b]
  #"Why should I trust you? Everyone in this city wants something from me."
    *set angel_asked "trust"
    *set wits +2
    *set guarded %+5
    [b]I want nothing from you,[/b] says the bell. [b]I want something from them.[/b] The note deepens until the beams creak. [b]That is not the same thing. And it is not safer.[/b]

You climb down the ladder with your hands shaking and your grandmother's key burning against your chest. In the study, the green lamp is still on. The Register is on its lectern. Far below, Compline is ending, fifty voices on the last long [i]Amen[/i].

*page_break
Back in your cell, on the narrow bed, with the snow coming down past the book-sized window, your phone lights up.

*text dario is he ok
*text dario don't tell him i asked
*text dario saint jude held. mostly. they got in the side door around 4. manon's ok. luc's ok. réjean took iron in the leg. we held
*text dario they'll come back tonight. or tomorrow. they said the accord doesn't protect us any more
*text dario is he ok
*choice
  #"He's not okay. But he's here, and he's still himself. He said his name tonight."
    *set rel_dario +10
    *text me He's not okay. But he's still himself. He said his real name tonight. Out loud.
    *text dario …
    *text dario what name
    *text me Lorenzo.
    For a long time, nothing. Then:

    *text dario ok
    *text dario ok. thank u
  #"He's okay. He's asking about you too." (He isn't. Not in words.)
    *set rel_dario +5
    *set guarded %+5
    *text me He's okay. He asked about you.
    *text dario liar
    *text dario but thanks
  #"You should ask him yourself."
    *set rel_dario +3
    *text me Ask him yourself.
    *text dario he won't answer me
    *text dario he's never going to answer me again
  #Don't answer. Not tonight.
    *set guarded %+10
    You put the phone face down on the blanket. It buzzes twice more. You don't look.
*set hush 45
*page_break Night Six
*goto_scene night6a
`);
