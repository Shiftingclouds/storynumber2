NB.scene("night7b", String.raw`
*comment Night Seven, part two: the Accord's table, the accusation, Rose's offer, Mémé at three.
*mood oxblood
*temp laz_free false
*temp proof 0
*temp convinced false
*if lazare_left_carillon or (path = "wolves")
  *set laz_free true
*page_break
*if outfit = "velvet"
  You put the velvet back on. The jacket from Monday, from Fleurette's rail, which still smells faintly of Rose's club and the cold of the Main.
*elseif outfit = "red"
  You put the red back on. The jacket from Monday, from Fleurette's rail, with a stain on the cuff from the Thaw that you've decided is character.
*else
  You put the black back on. The suit from Monday, from Fleurette's rail. It still fits like it was cut for somebody braver than you.
*if cufflinks
  And the cufflinks. The diamonds from the only man who ever bought her a real one.
The compact clicks open on your dresser by itself.

"Oh, [i]chéri[/i]," says Fleurette, in a voice full of doom and delight. "The Accord's table. Nobody's been invited to the Accord's table since 1967 who wasn't already sitting at it." A pause. "You may bring one guest. Choose well. I can't go. They'd see me. The Club has ghost-glass in every window."

*choice
  *if (laz_free) #Lazare. The Bourdon will be at that table. Let him look at the boy he stole, across the soup.
    *set n7_guest "lazare"
    *set rel_lazare +5
    *set nerve +2
    Lazare, when you ask him, goes very still. Then he nods once, and goes to borrow a suit from somebody. He comes back in one of Dario's, which is too wide in the shoulders and too short in the leg and makes him look, somehow, more dangerous rather than less.
  #Dario. The Club offered his pack protection on the Line. Let Honora smell him at her table.
    *set n7_guest "dario"
    *set rel_dario +5
    Dario, when you ask him, laughs out loud. Then he stops laughing. "In the house with the wolf on the wall," he says. "Okay." He comes back an hour later in a black suit that must be twenty years old and his nonna's red toque, which he refuses, absolutely, to take off.
  #Aimé. If anything's going to be said about the dead at that table, you want the man who's tasted them.
    *set n7_guest "aime"
    *set rel_aime +10
    Aimé, when you call him, is silent for so long you think the line's dropped. "Me?" he says finally. "At the Beaver Club? At the [i]Accord's table?[/i]" A pause. "I'll wear my good tie. I have a good tie. It's for funerals, but it's very good."
  #Go alone. Whatever happens at that table, nobody you love should be sitting at it.
    *set n7_guest "alone"
    *set guarded %+10
    *set nerve +2
    "Alone," says Fleurette's compact. "Brave boy. Stupid boy. Take me in your pocket, at least. I'll be very quiet. I'll be quiet as the grave." A pause. "That was a joke, chéri."

*page_break
*art 7
Strachan House at midnight is every window lit gold.

Snow on the lawn, perfect and untouched, going up the slope of the mountain. Snow on the turrets. Black cars in the courtyard with their engines running and nobody in them. And under the courtyard, somewhere, a cellar with a lock your grandfather built in 1961, and in it, in iron,
*if keyman_taken
  a djinn, and your father.
*else
  a djinn.
The butler opens the door before you can touch the brass beaver. His face is like a peeled egg, and there's a bruise coming up on it.
*if (keyman_safe and (n7_with != "alone"))
  He looks at you, and at your guest, and you remember him on his back on the platform tiles this afternoon. He doesn't say anything. He takes your coat.
*else
  He takes your coat without a word.

The hall is hung with furs. Beaver, fox, marten, lynx, the bear on the floor with its head still on.
*if n7_guest = "dario"
  Dario stops dead in the doorway and breathes in, once, through his nose, and his eyes go gold, and his whole big body goes still in a way you've never seen, like a dog at a gate.

  "There," he says, very low, not moving his lips. "Under the fur. Old wolf. Dead wolf. Up the stairs, second on the left." His jaw works. "That's the smell on Olivier's hands. That's the smell in the hair."
  *set proof +1
Portraits of dead men in cravats look down from the walls. Somewhere a string quartet is playing Haydn, not very well.

*page_break
The Accord's table is laid in the dining room under the antler chandelier: black walnut, silver, crystal, candles. Six places. There have always been six, you'll learn: three for the signatories, one for the witness, one for the key, and one for the key's guest, which has sat empty for fifty-nine years.

They're already there.
*meet honora
At the head, Honora Strachan in bottle-green silk and pearls, small and straight and smiling.
*if ruari_fate = "fled"
  The chair at her right hand is empty.
*else
  At her right hand, lounging, Ruari, in a velvet jacket, with his bracelets clinking against his glass.
*meet clarke
At her left, the Conductor, Everett Clarke, in a dinner jacket from about 1925, with his porter's cap on the table beside his plate like a hat at a wake.
*meet bourdon
Across from him, the Bourdon: small, bald, stooped, in his cassock with no cardigan tonight, his hands folded on the tablecloth. He looks up when you come in.
*if bourdon_knows
  He looks at you, and then down at his hands, and doesn't look up again for a long time.
*elseif (n7_guest = "lazare")
  He looks past you at Lazare, in Dario's suit, and his face does something terrible and quiet.
*else
  He inclines his head to you, gently, like a priest greeting a parishioner.

And at the foot of the table, in black, with a red rose in his lapel and his gloves on, Rose.

"Monsieur Lacroix," Rose says, rising, bowing. "The witness is always invited. It's the only door on the mountain I can walk through." His red-coal eyes crease. "I've been looking forward to this for fifty-nine years."

*page_break
*portrait honora smile
The soup is consommé. Only you and your guest are served. The Compagnie drink from their crystal, a red that isn't wine, and the Conductor drinks water, and the Bourdon drinks nothing at all.

"Thank you for coming," says Honora. "I know it's been a very trying week." She folds her small cold hands. "So. Plainly, because Mr. Lacroix likes plainness. On Saturday, at three in the morning, the Hush will fail unless the lock at the fort is closed again with the djinn inside. The djinn is in our cellar. The lock is a Lacroix lock. It needs a Lacroix hand." She smiles at you. "Yours."
*if keyman_taken
  "Or," she adds, pleasantly, "your father's, if yours proves unavailable. He's in the cellar too. Quite comfortable. Ruari rang him to sleep. He won't know a thing until Saturday." She sips. "I do hope it won't come to that. It's so much tidier with the young."
*elseif keyman_safe
  "I understand your father has had an eventful afternoon," she says. "I'm so glad he's well. Do tell him the Club is always delighted to see a Lacroix." Her eyes go to the empty chair at her right hand, and back. "Always."
*if overheard
  [i]The key will cooperate, or the old man will do.[/i] You heard her say it on Monday, at Rose's party, to the Conductor. You watch the Conductor remember that you might have.

*page_break
*portrait bourdon sad
The Bourdon speaks next. He doesn't stand.

"I made Monsieur Lacroix an offer," he says, "on Tuesday. Close the lock, and I'll ring the great bell for his father, and give him back his name." He looks at his hands. "I renew it tonight." He lifts his eyes to you. "And I add to it. The children. Every child the Carillon has taken since 1967 who's still living. I'll ring the bell for all of them, on Sunday, and they'll go home, and their mothers will know them." His voice is very steady. "After Saturday, there'll be no need to take any more. The Hush will be new. It'll hold for another fifty-nine years. By then, I'll be dead, and it won't be my sin any more."
*if n7_guest = "lazare"
  Across the table, Lazare puts down his spoon.

  "Rosa and Vito Ferrante," he says. "Would you ring it for them? If he closes the lock?"

  "Yes," says the Bourdon. "Of course. They'd know you, [i]mon petit[/i]. By Sunday lunch."

  Lazare looks at him for a long time, and doesn't say anything, and you can't tell, from his face, what it costs him not to.

The Conductor clears his throat. "The Line," he says, in his porter's voice, "will stay neutral. The Line always has. But I will say this, for the record, at this table, where I have sat for fifty-nine years." He looks at you. "I sold that djinn in 1958. For forty dollars and a ride to Chicago. I have regretted it every day since, which is not the same as putting it right." His hands are flat on the tablecloth. "I'd like, before I die, to see it put right. I don't know that closing the lock is how."
*codex warlocks

Honora looks at him, and something passes between them, very cold.

*page_break
Everyone at the table is looking at you.

You can feel it. The candle flames lean. The quartet in the next room has stopped. At the foot of the table Rose has his chin on his gloved hand and is watching you with open, delighted attention, like a man at the theatre.

This is the table. The three who signed the Accord, the witness who inked it, and you. And three people are dead, with a bell's mark on their heads and a dead wolf's hair in their hands.

*if stolen_bell
  In your jacket pocket, heavy against your hip, is a small brass handbell with a paper tag on its handle. [i]Sœur Agathe. 2/2. RETURNED.[/i]
  *set proof +2
*if (n7_guest = "aime") and (c_voice or c_furs_taste)
  *set proof +1
*if angel_heard
  *set proof +1
*if bourdon_knows
  *set proof +1
*if c_bourdon_list
  *set proof +1

*choice
  *if (ded_ruari) #Stand up. "Ruari Strachan killed them. Mireille Caron, Guy Hébert, Olivier Paré. With a stolen Carillon bell."
    *set accused "ruari"
    *goto accuse
  *if ((ded_ruari) and (c_tidying or overheard)) #Stand up. "Ruari rang the bell. But he rang it because you told him to, madame. You called it tidying."
    *set accused "honora"
    *goto accuse
  *if ((ded_ruari) and (ded_list)) #Stand up. "All three of you. He picked the names, you gave the order, and he rang the bell."
    *set accused "compagnie"
    *goto accuse
  *if (ded_wolf) #Stand up. "A wolf did it. The hair doesn't lie. And somebody taught that wolf to use a Carillon bell."
    *set accused "pack"
    *goto accuse
  *if (ded_lazare) #Stand up. "It was a hunter. The only one with no alibi for the second night." Don't look at Lazare.
    *set accused "lazare"
    *goto accuse
  #Say nothing. Eat your soup. Keep what you know for Saturday.
    *set accused "none"
    *set guarded %+10
    *set wits +2
    *node n7_accuse none
    *goto no_accuse

*label accuse
*page_break
*if accused = "ruari"
  *node n7_accuse ruari
*elseif accused = "honora"
  *node n7_accuse honora
*elseif accused = "compagnie"
  *node n7_accuse compagnie
*elseif accused = "pack"
  *node n7_accuse pack
*else
  *node n7_accuse lazare
You stand up.

It's a long way up, at a table like that. The chandelier. The candles. The dead men in cravats on the walls.
*if accused = "pack"
  *goto accuse_wrong
*if accused = "lazare"
  *goto accuse_wrong
*if (wits >= 55) or (charm >= 55)
  *set proof +1
*if proof >= 3
  *set convinced true
*if accused = "ruari"
  "Ruari Strachan," you say. "Mireille Caron, at the Missing Line. Guy Hébert, at the fort. Olivier Paré, behind Saint-Jude, on Tuesday morning, nineteen years old. He bit them, and then he rang a stolen Carillon bell on top of the bite to hide it, and he put a dead wolf's hair in their hands."
*elseif accused = "honora"
  "Ruari Strachan rang the bell," you say. "Mireille Caron. Guy Hébert. Olivier Paré, nineteen. He bit them, and rang a stolen bell on the bite, and put dead wolf's hair in their hands." You turn to the head of the table. "But he did it because you told him to, madame. You told me yourself, on Sunday, over the cheese. The Club was [i]seeing to a little tidying[/i]."
*else
  "Ruari Strachan rang the bell," you say. "Mireille Caron. Guy Hébert. Olivier Paré, nineteen. A stolen Carillon bell on top of a bite, and a dead wolf's hair in their fists." You look round the table. "Father, you ticked their names in your Register when they started to remember, and sent the list here. Madame, you gave the order, and called it tidying. And he did the rest." You look at the Conductor. "And the Line kept its peace."

*page_break
*if stolen_bell
  You take the bell out of your pocket and put it on the tablecloth, between the silver and the crystal, with its tag turned up. [i]Sœur Agathe. 2/2. RETURNED.[/i] There's a dent in its lip, and in the dent, something dark.

  The Bourdon looks at it and goes white to the lips.
*if (n7_guest = "aime") and (c_voice or c_furs_taste)
  Aimé stands up beside you, in his good funeral tie, with his hands shaking so badly he has to hold the back of his chair. "I tasted them," he says. "Mireille. And Olivier. Cold hands. A bell. A pale wrist with plastic beads on it. [i]Sorry, love.[/i] And the smell of a cellar full of furs." He swallows. "I'm a Bélanger. We don't lie about the dead."
*if n7_guest = "dario"
  Dario doesn't stand up. He doesn't have to. "Second on the left, at the top of the stairs," he says to Honora, conversationally. "Grey wolf. Squares cut out of it. I can smell it from here, madame. I could smell it on a nineteen-year-old boy's hands in the snow."
*if angel_heard
  "And you all heard it," you say. "Tuesday night. Three in the morning. Every one of the Veillée on this island heard the angel in the great bell say it: [i]the hand that rings the stolen bell drinks at the President's right side.[/i]" You look at the chair at Honora's right hand.
*if bourdon_knows
  The Bourdon closes his eyes.

  "It's true," he says. "The list is mine. I sent it here. I was told they'd be rung to sleep again. Quietly." His voice is steady and terrible. "I chose to believe it. Even when they started dying. God forgive me, I chose to believe it was the wolves."

*if convinced
  *goto accuse_right
*goto accuse_unproven

*label accuse_right
*page_break
*achieve accuser
Nobody at the table says anything for a long time.

Then the Conductor takes off his reading glasses and folds them and puts them in the breast pocket of his 1925 dinner jacket, very carefully, the way the Bourdon does.

"I have kept the Line neutral for sixty-eight years," he says. "I have never once taken a side at this table." He looks at Honora. "I'm taking one now. The Line will not be party to this. Not on Saturday. Not ever again."
*if (rel_clarke >= 10) or clarke_moved or (plate_how = "conned") or (plate_how = "bargained")
  *set clarke_turned true
  He looks at you. "And Monsieur Lacroix," he says. "When you go to the fort on Saturday, the Line goes with you. Whatever you decide to do with that lock." A pause. "It's forty dollars and sixty-eight years late. But there it is."
  *remember clarke At the Accord's table, he took a side, for the first time in sixty-eight years. Yours.
*if bourdon_knows
  *set war_over true
  The Bourdon lifts his head. "And the Carillon's war on the Sept-Ans is over," he says. "Tonight. I'll ring the peal message myself when I get home." He looks at Dario's empty chair, or at Dario. "It should never have begun."

*if accused = "ruari"
  *goto verdict_ruari
*goto verdict_honora

*label verdict_ruari
*page_break
*portrait honora neutral
Honora sets down her glass.
*if ruari_fate = "fled"
  "Ruari isn't here tonight," she says. "Indisposed, he told me. I see now why." She turns her pale eyes on you. "If what you say is true, Mr. Lacroix, then he's been very wicked, and entirely on his own initiative. I'm appalled. I'll see that he's found, and dealt with, as the Club deals with its own." A small, perfect smile. "Thank you for bringing it to my attention."
  *set ruari_fate "disowned"
*else
  She turns to the young man at her right hand.

  "Ruari," she says. "Is this true?"

  Ruari looks at her. Not at you, not at the bell on the tablecloth. At her. For a long time. You watch something happen in his beautiful bored face: something coming apart, very quietly, stitch by stitch.

  "You know it is," he says.

  "I know nothing of the kind." Honora's voice doesn't change. "I asked you to see to some loose ends. I never asked you to kill anyone. If you took it upon yourself to..."

  "[i]Tidy,[/i]" says Ruari. "You said [i]tidy[/i]. You gave me the bell. You gave me the list. You cut the hair off the pelt yourself, with your sewing scissors, in the trophy room, and put it in an envelope for me like a valentine." He's shaking. "Twenty-eight years I've sat at your right hand. I'd have done anything. I [i]did[/i] anything."

  "You're overwrought, dear."

  Ruari stands up. His chair goes over. He looks at you, across the table, and his eyes are wet, which you didn't think they could be.

  "Sorry, love," he says. "I really am. I always was." And he walks out of the dining room and out of Strachan House, and nobody stops him.
  *set ruari_fate "confessed"
  *remember ruari At the Accord's table, he said Honora's word out loud, [i]tidy[/i], and walked out of Strachan House.
*remember honora At the Accord's table, you named Ruari. She let him go without a flicker.
*goto after_accuse

*label verdict_honora
*page_break
*portrait honora angry
Honora doesn't move.

That's the frightening thing. She sits at the head of the Accord's table in her bottle-green silk with her small hands folded, and looks at you, and doesn't move at all, and the candles all round the table lean away from her as if from a cold draught.
*if ruari_fate != "fled"
  Beside her, Ruari has put his face in his hands.
"How very thorough," she says at last. "Your grandfather was thorough too. He built me a beautiful lock for my cellar in 1961, and he never once asked me what I kept in it." She stands. She's so small that standing barely changes her height at the table. "Do you know how many times this Club has saved this city, Mr. Lacroix? From itself? The fire of 1852. The cholera. 1966." Her pale eyes are perfectly calm. "Loose ends kill cities. I tidied. I'd tidy again."

She looks round the table. At the Conductor, who won't meet her eyes. At the Bourdon, who's praying. At Rose, who's smiling.

*choice
  *selectable_if ((charm >= 55) or (honora_contract) or (rel_honora >= 25)) #"Then tidy one more thing, madame. Stand with me on Saturday. The Club survives this. It doesn't survive a war."
    *set honora_turned true
    *set rel_honora +10
    *set charm +3
    Honora looks at you for a long, long time.

    "You'd have me," she says. "After this." It isn't a question. It's an assessment, like a woman pricing a horse.

    "I'd have the Club. It knows this city. It has the cars and the cellars and the lawyers. And you're very, very good at tidying." You hold her eyes. "Tidy up after yourself, for once."

    Something happens at the corner of her mouth. It might, in a living woman, have been the beginning of a laugh.

    "Very well," says Honora Strachan. "The Club will stand where you tell it to on Saturday. And when it's over, whatever it is, we'll discuss what I owe." She sits back down, and picks up her glass, and drinks. "I've been tired of the twentieth century for a very long time, Mr. Lacroix. Perhaps I'll try the twenty-first."
    *remember honora At the Accord's table, you accused her, and then asked her to stand with you. She said yes, like a woman pricing a horse.
  #"Then you'll answer for it. To the whole Veillée. On Saturday, in front of everyone."
    *set rel_honora -15
    *set nerve +2
    "On Saturday," says Honora, "we'll see who answers for what." She pulls on her gloves, finger by finger. "Good night, gentlemen. Rose." A small precise bow to you. "Mr. Lacroix. The lock is still a Lacroix lock. Whatever else you've done tonight." And she walks out of her own dining room, and leaves you all at her table.
    *remember honora At the Accord's table, you accused her. She pulled on her gloves and said: Saturday.
  #Say nothing. Let the room decide what she is.
    *set guarded %+5
    *set wits +2
    You don't say anything. You let the silence do it. The Conductor won't look at her. The Bourdon's praying. At the foot of the table, Rose is smiling like a man at the best play he's seen in a century.

    Honora looks round at all of them. Then she sits back down, and picks up her glass, and says, quite pleasantly, "Well. Shall we have the fish?"
*goto after_accuse

*label accuse_unproven
*page_break
*portrait honora smirk
You've said it. You watch it go round the table, and you watch it not quite land.

The Conductor's face is very still. The Bourdon is looking at his hands. At the foot of the table, Rose has lifted one eyebrow, very slightly, as if a good actor has fluffed a line.

"What a dreadful story," Honora says gently. "Poor Mr. Lacroix. You've had such a week." She turns to the table. "I think we can agree that grief and a great deal of cold air have made our guest see patterns. It happens to the best of us." She smiles at you. "Sit down, dear. Have some fish."

You sit down. Your face is burning.

Under the table, very lightly, something touches your ankle. Rose's shoe. When you look up, he's looking at you down the whole length of the table with his red-coal eyes, and he mouths, very clearly: [i]Not enough. Not yet.[/i]
*goto after_accuse

*label accuse_wrong
*page_break
*achieve wrong_man
*if accused = "pack"
  "A wolf," you say. "The hair in their hands. Somebody from Saint-Jude, who knows how the Carillon rings."
  *if n7_guest = "dario"
    Beside you, Dario goes absolutely still. Then he puts his napkin down on the table, very carefully, and gets up, and walks out of the room without a word.
  *set rel_dario -20
  Honora smiles at you with enormous warmth. "Thank you, Mr. Lacroix," she says. "That's precisely what the Club has been saying all along." She lifts her glass. "The Carillon was right to go to war. We'll see it finished properly."

  At the foot of the table, Rose closes his eyes, like a man watching a car go off a bridge.
*else
  "A hunter," you say. "The only one with no alibi for the second night. The one who knew exactly where the bell bruise would go."
  *if n7_guest = "lazare"
    Beside you, Lazare doesn't move at all. He just turns his head and looks at you. He doesn't say anything. He doesn't have to.
  *set rel_lazare -20
  The Bourdon half rises from his chair. "Lazare was with me," he says, hoarsely. "The night Guy Hébert died. He was on the stairs, with his hand on the wall, listening to the great bell. He's done it every night since he was ten. I've watched him." His voice cracks. "Whatever else I've done, Monsieur Lacroix, I won't let you put that on him."

  Honora smiles into her glass.
*goto after_accuse

*label no_accuse
*page_break
You don't say anything. You eat your soup.

You can feel it: everything you know, in your pocket, on your board, in your head, the bell and the beads and the fur and the fresh black ink, sitting on your tongue, and you don't let it out. Not here. Not at their table, on their terms, with their cellar under your feet.

Honora watches you eat with the fond attention of a woman watching a dog enjoy a bone.
*if n7_guest = "dario"
  Beside you, Dario is vibrating. He doesn't say anything either. You can feel what it costs him.
*elseif n7_guest = "lazare"
  Beside you, Lazare is looking at the Bourdon, and hasn't touched his soup.
At the foot of the table, Rose catches your eye and lifts his glass to you, very slightly. [i]Wise,[/i] his face says. Or maybe: [i]coward.[/i] With Rose you're never sure it isn't both.

*label after_accuse
*page_break
*if keyman_taken
  *goto cellar
*goto porch

*label cellar
*page_break
Your father is under your feet.

You can't stop thinking it, through the fish, through the Haydn, which has started up again next door. Somewhere below this black walnut floor there's a cellar with a lock your grandfather built, and your father's in it, asleep, in iron, with a djinn.

You have to get down there.

*choice
  *selectable_if (nerve >= 55) #Excuse yourself. The washroom. Then walk down the back stairs like you own the house.
    *set nerve +3
    *set keyman_freed "walked"
    You fold your napkin and excuse yourself, and walk out of the dining room and past the washroom and down the servants' stairs at the back of the hall like a man who has every right to be on them. Nobody stops you. A thrall on the landing looks at you with his empty eyes and says nothing. You walk like you belong, and the house holds the door.
  *if ((n7_guest = "dario") or (n7_guest = "lazare")) #Catch your guest's eye. Nod at the floor. Let them make the diversion.
    *set keyman_freed "guest"
    *if n7_guest = "dario"
      *set rel_dario +5
      Dario catches your look, and looks at the floor, and understands, and grins with far too many teeth.

      Thirty seconds later he knocks the whole crystal decanter of red that isn't wine into Honora's lap, and stands up roaring apologies in three languages, and every thrall in the house comes running with napkins. You slip out through the kitchen.
    *else
      *set rel_lazare +5
      Lazare catches your look, and looks at the floor, and understands.

      He stands up. "Father," he says to the Bourdon, very clearly, in front of everyone, "I'd like to make my confession." And the whole table turns to stare at him, and the Bourdon's face breaks open, and in the silence that follows you slip out through the kitchen.
  *if (rel_rose >= 30) #Look down the table at Rose. He's the witness. He sees everything. He owes you nothing. Ask anyway.
    *set keyman_freed "rose"
    *set rel_rose +5
    *set des_rose +5
    You look at Rose. He looks back. You look, very deliberately, at the floor.

    Rose sighs, as if you've asked him to carry something heavy. Then he stands, and taps his glass with a gloved finger, and says, "I'd like to propose a toast. To the Accord. I witnessed it, you know. Shall I tell you all exactly what each of you promised me in 1967, for the ink?" And the whole table goes white, and nobody is watching you at all.
  #Wait. Do it at the end of the night, when they're all distracted by goodbyes.
    *set keyman_freed "late"
    *set wits +2
    You wait. You eat the fish, and the bird, and the cheese that only you are eating. And at two in the morning, when the table rises and the goodbyes begin in the hall, and the thralls are fetching coats, you slip away down the servants' stairs.

    There are two thralls on the cellar door. They've been there all night; you'd have known, if you'd gone earlier. They look at you with their empty eyes, and one of them, very politely, takes your elbow and walks you back up the stairs and out onto the porch, and shuts the door.
    *goto porch

*page_break
The cellar door is at the bottom of the servants' stairs: oak, iron-bound, with a lock in it you'd know in the dark. A cross in a circle. [i]A.L. 1961.[/i]

No creature of the Veillée can open it. A mortal hand can, if it knows how. A Lacroix hand, better than any.

It opens for you like a dog rolling over.

Inside, it's cold and dark and smells of cedar and stone and fur, the smell on Olivier's hands, and it's full of wine racks and dark bottles with handwritten labels, and at the back, in a circle of salt, in iron, there's smoke. Thin and dim and glowing at the heart like a coal, bound with loop after loop of chain.

And beside it, on a cot, asleep, with iron cuffs on his wrists and a chain to a ring in the wall, your father.

*page_break
*portrait nadim hushed
"Creditor," says the smoke, very faintly. "You came down the stairs." Something like a laugh. "It runs in the family."

The cuffs on your father's wrists are old: Georgian iron, with a keyhole in each the size of your little fingernail, and no key anywhere you can see.

*choice
  *selectable_if (hands >= 55) #Pick the cuffs. Georgian iron. Two levers. You can do this in the dark.
    *set hands +3
    *set keyman_safe true
    *set keyman_taken false
    You kneel by the cot and do it in the dark, by feel, with your tension wrench and your smallest pick. Two levers. Old iron, rusted soft. The first cuff falls open in forty seconds. The second in twenty. Your father doesn't wake. You get his arm over your shoulder.
  *if (has_serge_key) #Try the keeper's key. It's a Lacroix key. Maybe the Lacroix locks in this house all answer to it.
    *set keyman_safe true
    *set keyman_taken false
    *set hands +2
    It shouldn't fit. It's far too big for the keyhole. But when you hold it to the cuff, the iron seems to know it: the keyhole gives, somehow, the way a door gives to a man it recognises, and the cuff falls open. And the other. Your grandfather made a lot of locks for a lot of frightened people. It seems he made them all to answer to one key.
  #Break the chain at the ring. The wall's old. The mortar's older.
    *set nerve +2
    *set reckless %+10
    You get both hands on the chain where it goes into the ring in the wall and pull, and brace your foot, and pull. The mortar cracks. The ring doesn't come. You pull again, and the noise of it goes up the stairs like a gunshot, and you hear feet.

    They come down fast: the butler with the egg face, and two more. They don't hurt you. They don't need to. They lift you off the chain like a child off a fence, and walk you up the stairs and out onto the porch, and shut the door.

    Behind you, in the dark, very faintly: "[i]Saturday, creditor. Bring him home on Saturday.[/i]"
    *set keyman_freed "caught"
    *goto porch

*if keyman_safe
  *set keyman_freed "freed"
  *node n7_father saved
"Nadim." You look at the smoke. "The chains. I can..."

"No," he says. Gently. Absolutely. "Not tonight, Lacroix. If I go, they come for you, or for him, or for the children in the tower. They'll need something in that lock on Saturday. Let it be me, for now. Let them bring me to the fort. That's where it ends." The coals of his eyes flicker. "Take your father home. He came down the stairs for me once. Let me pay it back."
*remember nadim In Honora's cellar, he wouldn't let you break his chains. He told you to take your father home.
You carry your father up the servants' stairs and out through the kitchen into the snow, and nobody stops you, because everybody in Strachan House is looking at something else.
*goto porch

*label porch
*page_break
*portrait rose smirk
Rose is waiting on the porch.

He's leaning on the rail at the top of the steps in his black coat, with his cane, looking out over the snowy lawn and the city lit up below it, all the way down the mountain to the river. He doesn't turn round.

"Well," he says. "That was the best dinner I've attended since 1837."

You stand beside him at the rail. The cold's savage. Down below, the city: the old town, the two towers of Notre-Dame, the long bright scar of the Main. Somewhere down there, your whole week.

"I'm going to make you an offer," Rose says. "And I'm going to make it plainly, because you like plainness, and because I'm tired, which I never am." He turns to you. His red-coal eyes are very steady. "Invite me in."
*codex demons

*page_break
"Not into your house," he says. "Though I wouldn't say no. Into the city. You can see me. You're a sleeper, or you were, and you can see me, and nobody's been able to see me well enough to invite me anywhere since 1967." He lifts one gloved hand toward the lights. "Say it, where the city can hear. [i]Come in, Rose.[/i] And on Saturday I'll stand at that lock beside you. I'll witness whatever you make there. I'll hold anything you need held." A pause. "I don't want your soul. I've got plenty. I want to be [i]asked[/i]."

*choice
  #"Come in, Rose."
    *set invited_rose true
    *set ally_rose true
    *set rel_rose +20
    *set des_rose +10
    *set guarded %-10
    *node n7_rose invited
    *achieve invited
    You say it. Out loud, at the rail, over the whole city. "Come in, Rose."

    Nothing happens. No thunder. No smell of sulphur. The snow goes on falling.

    But Rose closes his eyes. And stands there for a long moment at the rail on the mountain with his eyes closed and his face turned up to the snow, like a man standing in the first warm rain of spring.

    "Thank you," he says, very quietly. It's the first time you've ever heard him say it without a price attached. "You have no idea. You have absolutely no idea."
    *remember rose On the porch of Strachan House, you said it out loud, over the city: come in, Rose.
  #"Not in. Not yet. But if it comes to it on Saturday, and there's nobody else, will you hold the Hush? For a price?"
    *set rel_rose +5
    *set owe_rose true
    *set rose_bargain true
    *node n7_rose bargained
    *set wits +2
    Rose looks at you.

    "A devil holding a whole city's sleep," he says. "Do you know what you're asking?"

    "Yes."

    "The price is a yes. Yours. Whenever I ask. Forever." He smiles, and it doesn't reach his eyes. "I'd be gentle with the city. I'm always gentle. It's the only thing I've never had to pretend." He holds out his gloved hand. "If there's nobody else. On Saturday. I'll be there."

    You shake it. It's hot as a stove door through the leather.
    *remember rose On the porch, you bargained: if there's no one else, he holds the Hush, for a yes, forever.
  #"No, Rose." Say it plainly, the way she did in 1740.
    *set rel_rose +10
    *set des_rose +5
    *node n7_rose refused
    Rose goes very still.

    And then he smiles, the real one, the one you saw on the dance floor on Monday when somebody first said no to him.

    "[i]There[/i] it is," he says softly. "Oh, there it is." He takes your hand, and bows over it, and doesn't kiss it. "Thank you. I mean that. Nobody ever says it to me properly any more." He lets go. "I'll be there on Saturday anyway. To witness. It's my job. But I'll be standing at the back." A pause. "Where I can watch you say no to everyone else."
    *remember rose On the porch of Strachan House, you told him no, plainly. He said thank you.

*page_break
*mood snow
At three in the morning, you're on Bannantyne Street, in Verdun, in the snow, in front of Résidence Sainte-Marguerite.
*if keyman_safe and keyman_known
  Your father is beside you.

  He's in your winter coat, which is too big for him, and one of your toques, and he's standing on the sidewalk looking at the statue of the Virgin in the snowbank by the door, and he's shaking.

  "She won't know me," he says. "They took me out of her. Like they took Enzo out of Rosa."

  "She's eighty-eight and she's got dementia and it's three in the morning," you say. "At three in the morning, she knows everything."
*elseif keyman_safe
  Your father is beside you, in your winter coat and one of your toques. He doesn't know he's your father. He knows you asked him to come, and that you look at him like he's something, and that he's glad you came down the stairs. He's looking at the care home with polite, puzzled interest.

  "Who lives here?" he asks.

  "My grandmother."

  He nods. Something moves behind his face, deep down, like a fish under ice.
*else
  You're alone. You didn't know where else to go.

*page_break
*meet lucille
Ghislaine lets you in at the side door without asking why, because she's done nights at Sainte-Marguerite for eleven years and nothing surprises her any more. "She's awake," she says. "She's been awake since two. She said you'd come." She touches your arm. "She said you'd bring somebody."

Lucille Lacroix is in her chair by the window in her pink cardigan, with the little gold cross over it, watching the snow come down past the streetlight. Eighty-eight years old and four foot eleven, and the straightest back in any room.

She turns when you come in.
*if keyman_safe
  *goto meme_serge
*goto meme_alone

*label meme_serge
*page_break
*portrait lucille sad
She doesn't look at you.

She looks past you, at the man in the doorway in your too-big coat, with his toque in his hands and his hair wild and his face grey, and something happens in her face that you've never seen happen in a face before. It isn't recognition. It's older than that.

"Serge," she says.

He makes a sound.

"Serge. [i]Mon grand.[/i]" She holds out both her hands. "You're so thin. You never eat. Come here. Come here to me."
*if keyman_known
  And your father crosses the room, and kneels down on the floor beside her chair, a fifty-nine-year-old man on his knees on the linoleum, and puts his head in his mother's lap, and she puts her hands on his wild grey hair, and neither of them says anything at all.
*else
  And your father, who doesn't know her, who doesn't know his own name, crosses the room as if something's pulling him on a rope, and kneels down on the floor beside her chair, and she puts her hands on his face.

  "I don't..." he says. "Madame, I don't know..."

  "Of course you don't," says Lucille. "They took you out of your own head. I told you they would. I told you and told you." She holds his face. "It doesn't matter. I know you. I'll know you for both of us."

  And you watch your father's face, under his mother's hands, come slowly apart.
  *set keyman_known true
  *achieve papa
*set meme_saw_serge true
*set rel_lucille +20
*set rel_keyman +10

You stand in the doorway and watch it, and you don't go in. Some doors you don't go through. You just hold them.

*page_break
After a long time, she looks up at you over your father's head.

"{name}," she says. Your name. Clear as a bell.

"Mémé."

"You brought him home." She strokes his hair. "Aurèle said a Lacroix would open it. He never said one would bring the other one home." Her eyes are very bright. "I took the picture, you know. The one in the grass, at the fort. Serge wanted to be the one in it with you. I said, somebody has to keep the Lacroix men from locking themselves inside something." She almost smiles. "I never managed it. Not once."
*goto meme_key

*label meme_alone
*page_break
*portrait lucille smile
"{name}," she says.

Not Serge. Not [i]young man[/i]. Your name, clear as a bell, the voice from your childhood that told you to take your boots off at the door.

"Mémé."

"Sit," she says. "Sit down, you look terrible. You look like your father after a night at the fort." She pats the chair beside her. "Did you find him?"

You sit. You tell her. The Line, the tea, the Polaroid, the payphone.
Ruari, and the bell, and the cellar on the mountain.

She listens with her hands folded on her lap. When you're done, she doesn't cry. She's eighty-eight. She's done her crying.

"Then you'll bring him home on Saturday," she says. "That's all. A Lacroix opened it. A Lacroix will bring him home." She says it like the weather.
"I took the picture, you know," she says, looking out at the snow. "The one in the grass, at the fort, in 2009. Serge wanted to be the one in it with you. I said, somebody has to keep the Lacroix men from locking themselves inside something." She almost smiles. "I never managed it. Not once."

*label meme_key
*page_break
She puts her hand out, and touches the chain round your neck, through your shirt: the little gold cross, and behind it the small brass key.

"You still have it," she says.

"Always."

"Good." Her hand stays there. "Listen to me now, {name}, because I won't be like this for long, and I'll forget I said it, and you mustn't." Her voice drops. "Aurèle made two keys for that door. One for the keeper, to open the outer door and check the lock. And that one."
*if has_serge_key
  You take the other one out of your pocket, the keeper's key, the big brass one with the cross in a circle, and show her.

  She looks at it. "Serge's," she says. "Aurèle's. And now yours. Both of them." Her mouth trembles, and firms. "Good. Then you'll need to know what the little one's for."
"The big lock on the fort only knows two things," she says. "Open, and shut. With the djinn inside, or without. That's what they paid him for." Her fingers tighten on the little key through your shirt. "But Aurèle couldn't live with it. So he made a third thing, and hid it round my neck for fifty years. The little key doesn't open the lock, and it doesn't close it. It turns it into a question."

"A question?"

"For the one inside." She looks at you with her clear old eyes. "Whether he'll stay. And on what terms. And he can say no." A breath. "That's all Aurèle ever wanted, in the end. For the poor creature to be able to say no."
*set know_other_key true
*codex lacroix_lock

*page_break
She's tiring. You watch it happen: the light going out of her eyes, slowly, and then all at once. She leans back in her chair and looks at the snow.

And she hums. Six notes. Down, and up, and one held at the end, like a question.
*if keyman_safe
  And on the floor beside her chair, with his head against her knee, your father hums it with her. The same key. The same six notes. You haven't heard it in two voices since you were twelve.

  You hum it too. You can't help it. Three Lacroix, in a care home on Bannantyne at half past three in the morning, humming a song a man stole from an angel.
*else
  You hum it with her. The same key. The same six notes.

When you look again, she's asleep.
*remember lucille At three in the morning, on the Thursday before Nuit blanche, she told you what the little key is for: to turn the lock into a question.

*page_break
Your phone buzzes on the walk home through the snow.
*if war_over
  *text agathe_sms Peal message from the Bourdon. To all of us. "The Carillon's war on the Sept-Ans is ended. God forgive us." That's all it says.
  *text agathe_sms Half the tower is crying. The other half's asleep.
*if invited_rose
  *text unknown Thank you. —R.
*if keyman_safe and keyman_known
  *text dario is he really your dad
  *text me Yes.
  *text dario holy shit lacroix
  *text dario sorry. saperlipopette
*elseif keyman_taken
  *text dario we'll get him. saturday. i swear on my nonna
*text unknown This is Gisèle Pépin. The laundromat. Ten o'clock tomorrow night. Everyone you've got.
*text unknown Bring the little key. And the big one, if you have it.
*text unknown Don't be late. I'm eighty-six. I could die any minute and then where would you be.
*set hush 30
*page_break Night Eight
*goto_scene night8
`);
