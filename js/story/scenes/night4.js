NB.scene("night4", String.raw`
*mood carnival
*chapter 4 Mardi Gras
Monday. You sleep till three and wake up with Rose's card on the pillow beside your head, where you definitely didn't leave it.

[i]Wear something you can move in.[/i]

You own four pairs of jeans, eleven identical black T-shirts from Costco, a work jacket, a parka, one suit that you bought for your mother's funeral and have worn to two more funerals since, and a Canadian tuxedo that Marc-André bought you as a joke for your twenty-fifth birthday. None of it is anything you can move in, in front of a devil.

You text the only person you know who would understand the problem.

*text me I have nothing to wear to a party thrown by a demon
*text aime I have a very good black suit. Everyone who wears it is dead though
*text me …
*text aime Too dark? Sorry. Occupational humour. Ask Fleurette. She dressed half the Village in 1976
*page_break
Chez Normande at six in the evening is empty, and Fleurette is waiting for you on top of the jukebox in a dressing gown and full make-up, with the air of a general on the eve of a campaign.

"Take off your coat," she says. "Take off your shirt. Stand in the light. Turn around. Oh, [i]chéri[/i]." It isn't a compliment. It isn't quite not one either. "Normande. The trunk."

Normande goes down to the basement and comes back up the stairs dragging a steamer trunk the size of a coffin, covered in stickers from hotels that don't exist any more, and opens it on the floor of the bar. It smells of mothballs and Chanel No. 5 and 1976.

"Everything in there," Fleurette says, "was worn on the stage of the Café Montmartre on Stanley Street between 1968 and 1977, by me or by the boys. Anything that fits, you can have. Anything that doesn't, Normande will take in." She lies back on the jukebox like Cleopatra. "Go on. I want to see."

*page_break
You try things on behind the bar while Normande pins and tucks and Fleurette gives notes from the jukebox. A gold lamé jumpsuit (no). A white suit with lapels like the wings of a jet (absolutely not). A pink ruffled shirt that Fleurette insists "was very big in 1972" and that you insist was a war crime.

And then, at the bottom of the trunk, three things that aren't jokes.

*choice
  #A black velvet suit, 1970s cut, narrow at the waist. It fits like somebody made it for you.
    *set outfit "velvet"
    *set charm +3
    It's black velvet, soft as a cat, with narrow lapels and a waist that takes you in and trousers that break just so over the ankle. When you step out from behind the bar, Normande stops pinning, and Fleurette sits up on the jukebox.

    "Oh," Fleurette says. "Oh, [i]there[/i] he is."
  #A plain black shirt and black trousers. Clean. Sharp. Invisible until you're not.
    *set outfit "black"
    *set guarded %+5
    *set wits +2
    Black on black. Nothing to catch the eye until the eye catches you. You look in the mirror behind the bar and see a man who could be a waiter or a hitman or a very expensive date.

    "Understated," says Fleurette. "Mysterious. A little bit Catholic." She nods slowly. "The devil will love it. He loves anything that looks like it has a secret."
  #A deep red silk shirt, open at the throat, with your own black jeans. If you're going to the devil's party, go as yourself.
    *set outfit "red"
    *set reckless %+5
    *set nerve +2
    It's the colour of the rose in the devil's lapel. Open at the throat. With your own jeans and your own boots, it looks like you, only louder.

    Fleurette laughs, delighted. "Oh, you [i]want[/i] trouble," she says. "Good. Trouble's the only thing worth dressing for."

*page_break
"One more thing," Fleurette says. "Normande. The little box."

Normande hands you a small velvet box, black, rubbed bald at the corners. Inside, on a bed of faded satin, there are two cufflinks: silver, each set with a single small stone that catches the bar light and throws it back, very clear and very white.

"Diamonds," says Fleurette. "Real ones. The only real ones I ever owned." She isn't looking at you. She's looking at the cufflinks, from the top of the jukebox, with an expression you haven't seen on her before. "A man called Gaétan gave them to me. In 1974. He drove a taxi and he saved for a year. He said, [i]so you'll have one thing that isn't paste.[/i]"

"What happened to him?"

"He went home to his wife every night at four," says Fleurette, "and he came back every night at eleven, for three years, and then one night he didn't." She shrugs, a ripple of dressing gown. "I kept the cufflinks. I never had a shirt with the cuffs for them." She waves a hand. "Wear them tonight. Somebody should."

*choice speak
  #"I can't take these, Fleurette. They're yours."
    *set cufflinks true
    *set rel_fleurette +10
    "You're not taking them, chéri. You're [i]wearing[/i] them. There's a difference, and I'll know if you forget it." She points at you. "Bring them back. With a story."
  #Put them on without a word. Then kiss the air beside her cheek, the way she'd do it.
    *set cufflinks true
    *set rel_fleurette +15
    *set guarded %-5
    You fasten them. You go up on your toes by the jukebox and kiss the air a quarter of an inch from her cheek, mwah, the way you've seen a hundred queens do it at the bar on Sainte-Catherine.

    Fleurette goes completely still. Under the paint and the powder, something happens to her face.

    "Well," she says, a little unsteadily. "Well. [i]Somebody[/i] was raised right." She flaps a hand at you. "Go. Go before I ruin my mascara, it's older than you are."
    *remember fleurette You wore Gaétan's cufflinks, and kissed the air beside her cheek.
  #"Tell me about Gaétan. Properly."
    *set cufflinks true
    *set rel_fleurette +10
    *set wits +2
    She's quiet for a while. Normande goes on pinning your hem as if nothing's happening.

    "He smelled of Brylcreem and cold coffee," Fleurette says finally. "He had a scar through one eyebrow from a fight at a tavern in Hochelaga, over me, before we'd even met. He'd heard somebody say a thing about the girls at the Montmartre and he hit him. Then he came to see what the fuss was about." She smiles at nothing. "He called me [i]ma belle[/i], never Fleurette, never Réal. Just [i]ma belle[/i]. As if it were my name." She looks at you. "That's all. That's the whole story. It's enough."

*set charm +2
"Now," says Fleurette. "One more piece of advice, and then I'll let you go and be ruined." She leans down from the jukebox. "Tonight, everybody will be there. Everybody. And everybody will want something from you, and some of them will ask nicely. Watch who doesn't ask." She taps the side of her nose with a long nail. "And chéri. You've been collecting clues like a magpie. Have you [i]connected[/i] any of them?"

*if (ded_bite or ded_planted or ded_bell or ded_ruari or ded_ruari_there or ded_keyman)
  You tell her what you've worked out. She listens, her eyes narrowing, and at the end she nods slowly. "Good boy," she says. "Keep going. The ones who hurt people always come to parties. They can't help it. They like to watch."
*else
  You admit you haven't, not really. Not yet. She sighs. "Open your journal, chéri. Put two of them next to each other and see what they say. Tonight, if the one who's doing this is at the party, you'll want to know what to look for."

*page_break
*art 4
Le Mardi Gras on the last hour before Lent is the whole Veillée in one room.

You know it the second the door opens under your match: the noise hits you like warm water, a band of five eras playing one song, a hundred voices, glasses, laughter, the stamp of feet on the black and white floor. The dance floor is packed. The balconies are packed. Every table is full.

And the clocks are moving.

That's the first thing you notice, and you notice other people noticing it: heads turning to the walls, to the mantelpiece, to the gilt cherubs. Every clock in the room, for the first time in anyone's memory, is ticking. They all say the same thing. [b]11:02.[/b]

"First time since 1740," says a lutin on the bar beside you, to nobody. He sounds frightened.

*page_break
You see them all, in the first minute, the way you'd see faces in a crowd at a wedding.

The Beaver Club, at the best table by the dance floor, in dinner dress two centuries wide: Honora in bottle-green with her pearls, the baron, the rum-runner, and Ruari, leaning back in his chair in a white dinner jacket with his bracelets clacking, looking bored and beautiful and watching the door. The Conductor at the end of the bar in his porter's uniform, with a glass of rum he isn't drinking. Gisèle and her four witches at a table covered in empty glasses, cackling. Aimé, in the black suit that everyone who wears it is dead in, standing by the wall looking like he'd rather be dead.

The Sept-Ans, twenty of them, crowded round two tables pushed together, loud, in their best clothes, which for Big Réjean means a clean plaid shirt. Luc in a borrowed blazer. Manon in black. And Dario, in a dark suit that doesn't quite fit across the shoulders, and his toque, because of course.

And in the far corner by the stage, in black tie, holding flutes of champagne as if they're weapons: the Carillon. Agathe, grinning. Lazare, in a dinner jacket that fits him like a sentence, with his hair combed flat, looking like a man at his own execution.

Dario and Lazare are on opposite sides of the room. Neither of them is looking at the other. You can feel them not looking, from the door.

*page_break
It's 11:05. The devil hasn't come down yet. You have a little time.
*temp talks 0
*label party
*choice
  *hide_reuse #@honora Drift toward the Beaver Club's table. Honora and the Conductor have their heads together.
    *set talks +1
    *goto p_overhear
  *hide_reuse #@nadim There's someone at the bar in a 1967 suit, and the air around him shimmers.
    *set talks +1
    *goto p_nadim
  *hide_reuse #@gisele Gisèle's table. The witches are waving you over.
    *set talks +1
    *goto p_gisele
  *hide_reuse *if (met_ruari) #@ruari Ruari. He's watching the door. He's watching you.
    *set talks +1
    *goto p_ruari
  *hide_reuse #@lazare The Carillon's corner. Lazare looks like he needs rescuing.
    *set talks +1
    *goto p_lazare
  *hide_reuse #@dario The Sept-Ans' tables. Dario sees you and stands up.
    *set talks +1
    *goto p_dario
*label party_next
*if talks < 3
  *page_break
  *if talks = 1
    It's 11:18. The clocks tick. The band plays.
  *else
    It's 11:31. Somebody opens a window for air, and the cold comes in like a blade, and the noise doesn't drop at all.
  *goto party
*set party_talks talks
*goto coat_room

*label p_overhear
*page_break
Honora Strachan and Everett Clarke are standing by the pillar behind the Club's table, heads bent, glasses held at exactly the same angle. Two very old people talking the way very old people talk at parties: as if nobody else can hear, because for most of their lives nobody could.

You don't walk up to them. You stop at the next table with your back half to them, and take a glass off a passing tray, and listen.

*choice
  *selectable_if (wits >= 40) #Listen properly. Be furniture. Nobody notices furniture.
    *set overheard true
    *set wits +3
    *goto p_heard
  *selectable_if (rel_fleurette >= 30) #Let Fleurette do it. Open the compact in your pocket, just a crack.
    *set overheard true
    *set rel_fleurette +5
    You slide your hand into your pocket and open the compact a hair. A cold draught goes past your ear, and you'd swear you feel the swish of sequins.
    *goto p_heard
  #Walk right up and say good evening.
    *set charm +2
    *set nerve +2
    "Good evening," you say.

    They both turn. The Conductor inclines his head; Honora smiles as if you've made her whole night. "Mr. Lacroix. We were just saying how well you look. Weren't we, Everett?"

    "We were," says the Conductor, looking at your cufflinks. "Very well indeed."

    Whatever they were saying before, they won't say it now. They make pleasant conversation about the snow for three minutes, and you learn nothing, and you're very aware, when you walk away, of two pairs of very old eyes on your back.
    *goto party_next

*label p_heard
"...by Saturday," Honora is saying, very low. "The djinn will be taken on Wednesday or Thursday, when he's weakest. The Carillon will handle it, Clément has promised. And on Saturday, at three, the lock is closed again, and the island goes back to sleep."

"And the key?" says the Conductor. "The boy won't do it willingly. You saw him on the Line. He's Aurèle all over again."

"The key will cooperate," says Honora pleasantly, "or the old man will do." She sips from her glass. "Clément says the old man's hands still remember the song, even if nothing else does. He'll close anything he's told to close. That's rather the point of him, isn't it? Now."

A long pause.

"I sold that djinn," says the Conductor, very quietly. "In 1958. I've regretted it every day since. I'm not certain I can sit at this table again, Honora, and help you do it twice."

"You'll sit where you're told, Everett," says Honora, without any change of tone at all. "We all will. That's what an Accord [i]is[/i]."

She puts her glass down and turns toward the dance floor, and you turn away, fast, and walk, and don't look back, and your heart is going like a drum.

[i]The old man will do.[/i] An old man whose hands remember the song.

*if met_keyman
  You think of a pair of square, scarred hands, black with brass dust, holding a key out to you. [i]You'll need this, I think.[/i]
*goto party_next

*label p_nadim
*page_break
He's at the end of the bar in a charcoal suit with narrow lapels and a skinny black tie, a white shirt, cufflinks shaped like tiny suns, the whole thing so perfectly 1967 that he looks like a photograph of a man at Expo. His black hair is combed back. His beard is trimmed. The air around him shimmers faintly, like the air over a road in August, and the ice in the glass in front of him has all melted.

"The Conductor lent it to me," he says, before you can ask. "He had it in a trunk. He said it seemed a pity to waste it." He looks down at himself. "It's the suit I'd have bought, if I'd been allowed out to buy a suit, the summer they buried me."

"You look good."

"I look like a ghost of a man at a World's Fair," says Nadim. "But thank you." His amber eyes take you in, the velvet or the black or the red, the cufflinks. "You look like a man who's about to dance with the devil. Be careful. He dances very well. It's the only thing he's ever been honest about."

The band slides into something slow. A bossa nova, of all things, from about 1966.

Nadim looks at the dance floor, and then at you, and then away.

*choice
  #"Dance with me. Before he does."
    *set nadim_danced true
    *set des_nadim +15
    *set rel_nadim +10
    *set guarded %-5
    He looks at you as if you've said something in a language he hasn't heard in a very long time.

    "I haven't danced," he says, "since before the Ottomans."

    "It's a bossa nova. It's basically standing still."

    He laughs, the struck-match laugh, and takes your hand. His hand is hot as a mug of tea. On the crowded floor, under the ticking clocks, he dances the way he probably did everything four hundred years ago: formally, with his back very straight and his hand very correct at your waist, and then, halfway through the song, not formally at all. He's warm all down your front, warm as a fire. You can feel his heartbeat, or something like it, slow and heavy and very old.

    "Thank you," he says, into your hair, when the song ends. "I'd forgotten that this is what it's for. Hands." He lets go, a little too slowly. "You'd better go. The devil is watching, and he's the jealous type."
    *remember nadim You danced a bossa nova with him in the devil's club, under the ticking clocks.
  #"Are you all right? Being out, in a crowd like this?"
    *set rel_nadim +10
    "No," he says honestly. "Too many people. Too much noise. Too many of them looking at me like a thing they'd like to own." He turns his glass. "But I wanted to see you dance. So." A small shrug. "I'm here."
  #"What do you know about the Beaver Club? About Honora?"
    *set wits +3
    *set rel_nadim +5
    *set lore +2
    His face goes still. "She came down the stairs once," he says. "In 1971. To look at me. She stood outside the door for an hour and said nothing at all, and then she said, [i]so you're what it costs[/i], and went away." He sets the glass down. "She's the one who'll want me back. When they come for me. It'll be her idea, and someone else's hands."
*goto party_next

*label p_gisele
*page_break
"Sit, boy, sit," says Thérèse, pulling out a chair with her foot. "Gisèle's been waiting all night to tell you how to not get your soul taken. Haven't you, Gisèle?"

"I have not," says Gisèle, who clearly has. She pours you a gin without asking. The four witches lean in like a card game about to be dealt.

"When you dance with him," Gisèle says, "and you will, everybody does, listen. It's a contredanse, not a waltz, whatever it sounds like. Six steps, and a turn, and six steps." She taps the table in time. "At the turn he'll try to take you backward. Three steps back, toward the wall. It's an old devil's trick: back him up, back him up, and on the third step you're in his corner and he's leading you anywhere he likes."

"So what do I do?"

"You don't take the third step," says Gisèle. "You stop, on two, and you hold your ground, and you make [i]him[/i] come to [i]you[/i]." She knocks back her gin. "Rose Latulipe did. On the third step, she stopped. That's what nobody ever tells you in the story."
*set lore +3
*set gisele_tip true

"And Aimé," says Yolande, pointing, "wants to dance with you and won't ask. Look at him. Stuck to the wall like wallpaper."

Across the room, Aimé, in his dead man's suit, sees all five of them pointing at him, and goes the colour of a fire truck, and pretends to be very interested in a painting.

*choice
  #Go and get Aimé. One dance. For Sec 3.
    *set rel_aime +15
    *set charm +2
    You cross the floor and hold out your hand, and he looks at it the way Luc looked at it at Saint-Jude, like nobody's ever offered him one, and takes it.

    He can't dance. At all. He steps on your feet twice and apologises four times and laughs, high and helpless, and by the end of the song he's leaning his forehead on your shoulder, shaking with laughter, and the witches are applauding.

    "Prom," he says, into your velvet. "This is the prom. I've decided. Thank you."
    *remember aime You danced with him at the devil's party. He called it the prom.
  #Tell the witches to leave him alone. He's shy.
    *set rel_gisele +5
    *set rel_aime +5
    "Protective," says Gisèle, approvingly. "Like Aurèle. He'd have fought a bear for anybody standing by a wall." She pours you another gin. "Drink that. You'll need it."
*goto party_next

*label p_ruari
*page_break
Ruari is on his own for once, at the end of the Club's table, turning an empty glass in his fingers. His white dinner jacket is too big in the shoulders: borrowed, or from a decade when shoulders were bigger. When he sees you coming he sits up, and then, visibly, makes himself sit back down.

*if fed_ruari
  "You came back," he says, softly. Something in his face is different from the trophy room: rawer, more careful, as if he's afraid you'll say something he can't take back. His eyes go to your throat, to the place under your jaw where there's still, if you look, a faint mark. Then away. "How's the... are you all right? I didn't take too much. Did I?"

  *choice speak
    #"I'm fine. I'd let you do it again."
      *set des_ruari +10
      *set rel_ruari +5
      He shuts his eyes for a second. "Don't," he says. "Don't say that to me in here, in front of her." But his hand, on the table, has moved half an inch toward yours.
    #"You said something. After. 'Sorry, love.' Why?"
      *set wits +3
      *set rel_ruari -5
      Something shutters in his face so fast you almost miss it. "Did I?" he says lightly. "I say it to everyone. It's a Glasgow thing." He looks away, at the door, at the clocks. "Everybody's sorry for something, eh."
  *goto p_ruari_end
*else
  "Look at you," says Ruari. "Velvet and diamonds. The locksmith cleans up." He smiles with his mouth closed. "Sit down. I'm bored and everyone here is two hundred years old."

  *choice speak
    #Sit. "Tell me about the Solstice. The last night you were warm."
      *set rel_ruari +10
      He looks at you sharply, as if you've read his diary. Then he laughs, not happily. "Everyone wants that story," he says. "Nobody wants the one after." He touches the bracelets. "Another time, locksmith. If there is one."
    #"Nice bracelets. You're missing one."
      *set wits +3
      He looks down. On his left wrist, among the stacked pink and green and blue, there's a gap in the pattern: a pink bracelet with its cord knotted short, as if it broke and he tied it back together without all its beads.

      "Snapped on a door handle," he says. "Clumsy." He tugs his sleeve down over it.
      *if c_kandi_bead
        You think of a single pink pony bead in the snow at the foot of the mountain stairs, and you don't let anything move in your face.
*label p_ruari_end
*goto party_next

*label p_lazare
*page_break
"Please," says Agathe, as you come up. "Please talk to him. He's been standing there like a chess piece for forty minutes. He's frightening the vampires."

She goes off to the bar. Lazare doesn't move. He's holding his champagne at chest height like something he's been told to guard. His hair is combed flat and wet and he looks miserable and extremely handsome.

"I hate parties," he says.

"I can tell."

"We're here to watch." His eyes don't stop moving: the Club, the Conductor, the Sept-Ans, the door. They skip over Dario's table very fast, and come back, and skip over it again. "The Bourdon wanted eyes inside. Anyone who's anyone in the Veillée is in this room. If the one killing the unmade wants to see who's frightened, he'll be here too."

*choice speak
  #"Then let's give them something to watch. Dance with me."
    *set des_lazare +10
    *set reckless %+5
    He looks at you as if you've suggested he set himself on fire. "I don't dance."

    "Everybody dances. Some people just do it badly."

    For a second, something wants to say yes; you see it in his face, a crack of light under a door. Then he looks past your shoulder, across the room, at a table of wolves, and the door shuts. "Not here," he says quietly. "Not in front of..." He stops. "Not here."
  #"Your dinner jacket fits you like a sentence."
    *set des_lazare +10
    *set wry %+5
    "Is that a compliment?"

    "Life sentence."

    He tries not to smile. He fails for about half a second, and it's worth the whole night. "Agathe picked it," he says. "She said I should look like a man who's been invited somewhere."
  #"Are you all right? You look like you haven't slept."
    *set rel_lazare +10
    "I haven't." He turns the champagne flute in his fingers. "There's been a death in my house. Guy. And the bell that killed him came from our armory. And the Bourdon says it's being looked into, in the voice he uses when it isn't." He looks at you. "And every time I close my eyes I see a lane in the snow. I don't know why. It's been happening since Friday."
*goto party_next

*label p_dario
*page_break
Dario meets you halfway across the floor, which means he walked fast.

"Lacroix." He looks you up and down, the whole outfit, and his grin goes slow and very wide. "[i]Madonna.[/i] Look at you. You look like trouble in a church."

"Fleurette dressed me."

"Fleurette should be canonised." His suit's straining at the shoulders. His toque is on. He smells of aftershave that he definitely doesn't wear every day, and under it, wolf. "The pack's been betting on who you'd talk to first. Réjean had money on the vampires. He owes me twenty bucks."

*choice speak
  #"You look good in a suit. Terrible toque. But good."
    *set des_dario +10
    *set wry %+5
    "The toque is load-bearing," he says. "The toque stays." But he's pleased; you can see it in the tips of his ears.
  #"Why do you keep looking at the Carillon's corner?"
    *set wits +3
    *set rel_dario -3
    He stops looking at it so fast it's almost a flinch. "I'm not," he says. "I'm keeping an eye on the bell-ringers. It's my job. Pack business." He takes a long drink of his beer. "Anyway. Fleurette dressed you. That's what we were talking about."
  #"Is Luc all right? After the Line?"
    *set rel_dario +10
    *set rel_manon +5
    His face softens. "He's scared," Dario says. "He thinks they're coming for him. I told him nobody's coming for anybody while I'm alive." He looks at you. "Thanks for asking. Nobody asks about the kid. They just look at his ear."
*goto party_next

*label coat_room
*page_break
It's 11:40. The room's too hot. The clocks are too loud. You need air, or you need somewhere to put down Fleurette's compact for a minute, which has started, in your pocket, to feel very heavy.

The coat room is down a short corridor off the lobby, behind a curtain of red velvet, with no attendant. Inside, it's dark and close and smells of wet wool and fur. Rows of coats on hooks. Parkas and furs and a single sealskin cape.

You're halfway through the curtain when you hear voices, and stop.

*page_break
"...can't be here. Not here, not tonight, not with the whole Veillée..."

Lazare. Low, fast, furious.

"Then leave. Nobody's making you stay."

Dario. Just as low.

You can see them through the gap between the curtain and the wall: two dark shapes in the back of the coat room, between the rows, much too close together. Lazare has Dario by the lapels of his too-tight suit, pushed back against a rack of coats. Dario's hands are open, at his sides, not fighting.

"You texted me," Lazare says. "In the middle of a murder. [i]Please.[/i] That's all it said. [i]Please.[/i] Do you know what that did to me? With Guy lying in the snow?"

"I know what it did to you," says Dario, very quietly. "I was there. At five. You came."

Silence. And then Lazare's hands, on Dario's lapels, stop pushing and start pulling, and then they're kissing.

*page_break
It isn't gentle. It's the opposite of gentle: it's two people who've been starving in public all night and have run out of pretending. Lazare kisses like he's furious about it. Dario kisses back like he's been waiting seven years and doesn't care any more who knows. The rack of coats rattles and shifts on its wheels. A fur slides off a hook onto the floor and neither of them notices.

When they come apart for breath, Dario puts his forehead against Lazare's, and his big hand comes up to the back of Lazare's neck, the way you'd hold something you're afraid will run.

"Enzo," he whispers.

Lazare shoves him. Hard. Back into the coats.

"Don't call me that." His voice is shaking. "Don't. You know I hate it. Every time. Seven years. Every time, like it's a joke, like it's..." He doesn't finish.

"It's not a joke," says Dario. "It's never been a joke."

"Then what is it?"

Dario opens his mouth, and closes it, and looks at the floor.

*set know_affair true
*achieve coat_room
*page_break
*if saw_scarf
  So that's what the scarf was. [i]Oh, chéri,[/i] Fleurette said, on Saint-Viateur. You should have listened.
*elseif rose_q = "leads"
  [i]Check the coat room,[/i] Rose said. He can't lie.
*else
  Seven years. Enemies on the rooftops. A knife in the shoulder. A pain in my ass.

  You stand there with your hand on the red curtain and feel every conversation you've had with either of them rearrange itself, click by click, like the pins in a lock.

*choice
  #Step through the curtain. Let them see you.
    *set coat_seen true
    *node n4_coat revealed
    *set nerve +3
    *set guarded %-10
    *goto coat_revealed
  #Let the curtain fall. Slip away. This isn't yours.
    *node n4_coat slipped
    *set guarded %+10
    *set rel_lazare +5
    *set rel_dario +5
    *goto coat_slipped
  #Clear your throat. "Sorry, is this where I leave my coat?"
    *set coat_seen true
    *node n4_coat joked
    *set wry %+15
    *goto coat_joked
  #Stay where you are. Watch a moment longer than you should.
    *set coat_seen true
    *node n4_coat stayed
    *set reckless %+10
    *set des_lazare +5
    *set des_dario +5
    *goto coat_stayed
  *selectable_if ((des_lazare >= 30) and (des_dario >= 30)) #Step in. Not to stop them. Because you want to be in that room too.
    *set coat_seen true
    *node n4_coat three
    *set reckless %+10
    *set guarded %-15
    *goto coat_three

*label coat_revealed
You push the curtain aside and step into the coat room.

They spring apart like two people hit by the same current. Lazare's hand goes to his mouth. Dario's goes, bizarrely, to his toque, as if to check it's still on. For a long second nobody says anything at all, and the only sound is the band, far off, and the clocks.

"How long," says Lazare.

"Long enough."

*choice speak
  #"How long have you two been doing this?"
    *set rel_dario +5
    *set rel_lazare -5
    They look at each other. It's Dario who answers, because of course it is.

    "Seven years," he says. "On and off. Mostly on." He tries a grin; it doesn't hold. "It's complicated."

    "It's [i]not[/i] complicated," says Lazare. "It's a mistake. A very long mistake." He's white. "I have to go."
  #"It's okay. I'm not going to tell anyone."
    *set rel_lazare +10
    *set rel_dario +10
    Lazare stares at you as if you've done something no one has ever done. Dario lets out a breath like he's been holding it since 2019.

    "You don't know what you're promising," says Lazare. "If the Bourdon knew..."

    "I said I won't tell anyone," you say. "I don't break locks I've promised to keep."
    *remember lazare You found him with Dario in the coat room, and promised not to tell.
    *remember dario You found him with Lazare in the coat room, and promised not to tell.
  #"Why does he hate being called Enzo?"
    *set wits +5
    *set rel_lazare -5
    *set rel_dario +5
    Dario goes very still. Lazare goes red to the roots of his hair. "Because it's a taunt," Lazare says. "Because it's his little joke. Because it's not my name."

    And Dario looks at him, with such naked grief on his face that you have to look away.

    "Yeah," says Dario quietly. "Sure. A joke."
*goto coat_end

*label coat_slipped
You let the curtain fall. You walk back up the corridor to the lobby on legs that don't feel like yours, and stand by the door in the cold draught from the street, and breathe.

You understand now. Every look across every room. Every argument that went on too long. The scarf. [i]A pain in my ass.[/i] [i]A mistake I keep making.[/i]

And behind the understanding, something else, that you don't have a word for yet, and that feels a lot like being on the outside of a door you'd very much like to open.
*goto coat_end

*label coat_joked
"Sorry," you say, through the curtain. "Is this where I leave my coat?"

They spring apart so fast the whole rack of coats goes over.

For a long second there's nothing but the clatter of hangers and the band, far off. Then Dario starts to laugh. He can't help it: it comes up out of him like a hiccup, helpless, and he has to put a hand on the wall.

Lazare doesn't laugh. Lazare looks at you as if he'd like the floor to open, and also as if, very faintly, against every instinct he has, some part of him is relieved.

"Hooks on the left," Dario manages. "Ticket's free."

"I'm going to kill you both," says Lazare, to the ceiling, "and then myself."
*set rel_dario +10
*set rel_lazare -5
*goto coat_end

*label coat_stayed
You don't move.

You tell yourself it's because you're afraid of the noise the curtain would make. It isn't. It's because you can't look away: from Dario's hand on the back of Lazare's neck, from the way Lazare's fists are still clenched in his lapels even as he leans into him, from the two of them breathing hard in the dark among the coats like men after a fight. It's the most private thing you've ever seen. It goes through you like heat.

And then Lazare turns his head, and sees you in the gap of the curtain.

His eyes go wide. Dario turns too. Nobody says anything. You look at them, and they look at you, and nobody moves, and something passes between the three of you in the dark that none of you has a word for, and you can feel it land, in both of them, the same way it's landed in you.

Then Lazare pushes past Dario and past you and through the curtain, without a word, and is gone.

Dario stays where he is, against the coats. He looks at you for a long moment.

"Well," he says softly. "Now you know."
*goto coat_end

*label coat_three
You push the curtain aside and step in and let it fall shut behind you.

They spring apart. Lazare's back hits the wall; Dario's hits the coats. Nobody says anything. The band, far away, is playing something slow.

You don't say anything either. You just look at them: at Lazare, flushed and furious and terrified, his mouth red; at Dario, breathing hard, his hand still half raised where it was holding Lazare's neck. You look from one to the other, and you let them see exactly what you're thinking.

Dario gets it first. Of course he does. His eyes go wide, and then dark, and then something in his face tips over the edge of a laugh into something else entirely.

"Oh," he says softly. "Oh, [i]Lacroix[/i]."

Lazare gets it second, and his face does something you'll remember for the rest of your life.

*if steam
  Dario moves first. He crosses the coat room in two steps and takes your face in his big hot hands and kisses you, slow this time, nothing like the way he kissed Lazare: slow and thorough, as if he's been thinking about it for three days and has decided to take his time. When he lets you go your knees are water.

  He looks over his shoulder at Lazare, still against the wall.

  "Your turn, Desautels," he says, rough, and it's not a taunt. It's an invitation. It might be the kindest thing you've ever heard anyone say.

  Lazare doesn't move. And then he does: one step off the wall, and another, and he's in front of you, close enough that you can feel him shaking. He looks at your mouth. He looks at Dario, over your shoulder, as if asking something. Whatever he sees in Dario's face makes his breath catch.

  He kisses you like a man stepping off a roof. Careful for one second, and then not careful at all, his cold hands on your jaw and his mouth hot, and behind you Dario's hand settles low on your back, steadying you, holding you between them, and for one long, impossible minute in a devil's coat room at twenty to midnight there are three of you and it is exactly, terrifyingly right.
*else
  Dario kisses you first, slow, as if he's been thinking about it for three days. Then he looks over his shoulder at Lazare, and says, "Your turn, Desautels," and it's not a taunt.

  Lazare kisses you like a man stepping off a roof, with Dario's hand steadying your back, and for one long, impossible minute there are three of you and it is exactly right.
*set three_kiss true
*set kissed_lazare true
*set kissed_dario true
*set des_lazare +15
*set des_dario +15
*achieve three_kiss

Somewhere outside the curtain, every clock in the club strikes the three-quarter hour at once, a great golden [i]bong[/i] that shakes the coats on their hooks.

Lazare steps back as if he's been burned. He looks at you both with an expression you can't read at all: terror, and wonder, and something that looks almost like grief. Then he's gone, through the curtain, fast, without a word.

Dario lets out a long shaky breath, and laughs, low, and doesn't let go of you. "Well," he says into your hair. "[i]That[/i] happened."
*remember lazare The coat room, twenty to midnight: the three of you.
*remember dario The coat room, twenty to midnight: the three of you.

*label coat_end
*page_break
At 11:47, every clock in the room chimes once, softly, like a glass tapped with a spoon, and the music stops.

The dance floor clears. Nobody tells it to. It just empties, the dancers drifting to the edges, the lutins scrambling off the bar, the band lowering their instruments and waiting. A hundred faces turn toward the staircase at the back of the room.

He comes down the stairs slowly, in black, with the rose in his lapel and the silver-headed cane and the black kid gloves, and every creature in the room holds its breath.

*portrait rose smirk
Rose crosses the empty floor to you. The sound of his heels on the black and white tiles is the only sound in the world. He stops in front of you, and bows from the waist, the way he did at his table, and holds out his gloved hand.

*if cufflinks
  His eyes drop, just for a second, to your wrists. To the two small white stones. Something flickers in the red at the back of his eyes: recognition, and a kind of respect. "Gaétan's diamonds," he says softly. "She lent you those? Then she likes you very much." He looks back up. "So will I."

"Thirteen minutes," he says. "Until midnight. Until Lent. Dance with me, locksmith."

*if rose_invite
  You promised him this. You take his hand.
*else
  You didn't promise him this. The whole Veillée is watching. You take his hand anyway.

*goto_scene night4b dance
`);
