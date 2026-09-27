NB.scene("night3b", String.raw`
*comment Night Three storylets, part one: Saint-Jude, the patrol, Le Mardi Gras, the bridge. Each is reached with *gosub_scene and ends with *return.
*label saint_jude
*page_break
*set visited_dario true
Saint-Léonard at night after a blizzard is a street of white duplexes with iron staircases spiralling up their fronts like a row of corkscrews, every one of them buried in snow, every balcony with a Madonna or a plastic Santa or both. The bakeries are dark. The cafés are dark. Every third house has a light on in the kitchen and somebody's nonna in it, awake, because nonnas don't sleep.

Église Saint-Jude is at the end of the street: a low brick church from the fifties, all sharp modern angles and a bell tower like an exclamation point. The bell's long gone. Over the doors, where the saint's name used to be carved, somebody has hung a pink neon sign in looping script that says [b]CHEZ JUDE[/b], and under it, smaller, in blue: [i]patron des causes perdues[/i].

Patron of lost causes. You laugh out loud in the snow.

Inside, it's warm and loud and smells of garlic.

The pews have been turned into booths. The altar is a stage, with a karaoke machine, a disco ball and a keyboard with a tea towel over it. The long bar runs down one side of the nave under the Stations of the Cross, and somebody has hung a string of Christmas lights round each station, with great care, like jewellery. At the back, above where the choir would have been, there's a stained-glass window of Saint Jude with his staff and his flame, and someone, a long time ago, with a steady hand and black paint, has added a wolf sitting at his feet, looking up at him adoringly.

There are about twenty people in the nave. When you come in, every one of them turns and looks at you, and every one of them has yellow eyes.

*page_break
*portrait dario smile
"[i]LACROIX![/i]"

Dario comes out of the sacristy wearing a floral apron over his T-shirt and carrying a lasagna the size of a car door in two oven mitts shaped like lobsters. His toque is on. Of course it is.

"You came! Everybody, this is the locksmith. The one I told you about. The one Desautels rang the bell at and nothing happened." A cheer goes up, as if this is an achievement. "Sit, sit. Manon, get him a beer. Luc, get off your phone and say hi." He sets the lasagna on the long table they've made by pushing four pews together, and wipes his hands on the apron, and grins at you as if you've just made his night by existing. "Nonna Pina's recipe. She died in 2020. She'd have hated you. She hated everyone for the first ten years."

The young wolf with the torn ear gets up off a pew. Luc. Seventeen, maybe. He's in a Céline Dion tour hoodie that's three sizes too big for him, and he can't quite look at you.

*if saved_agathe = "between"
  "You got between me and a bell-ringer," Luc says to your shoes. "At the fort. I nearly..." He swallows. "Nobody does that. Nobody gets between us and them. Not for them, and not for us." He looks up at last. "I'm sorry I nearly bit you. Thank you for not letting me bite her."
*elseif saved_agathe = "pulled"
  "I almost killed that lady," Luc says to your shoes. "At the fort. You pulled her out of the way." He swallows. "Dario says I'd have been cut for it. The Carillon would have taken the whole... me. Out of me." He looks up at last. "So. Thanks. I guess."
*else
  "I'm sorry," Luc says to your shoes. "About the fort. About going for the lady with the bell. I didn't mean it. I don't always mean it yet." He looks up at last. "Dario says it gets easier."

*choice speak
  #"Hey. You're two months in. I couldn't parallel-park two months in."
    *set rel_manon +5
    *set charm +3
    *set luc_friend true
    Luc laughs, surprised, and something in his shoulders unknots. "I still can't parallel-park," he says.

    "Nobody in this city can," says Dario. "That's why I have a tow truck."
  #"Why did you go for her? Just her?"
    *set wits +2
    *set lore +2
    Luc touches his torn ear. "The bell," he says. "The sound of it. When they cut me, when I was..." He stops. "Before. Before I was a wolf. My dad used to ring the bell at Mass. He was an altar server his whole life. He rang it when he threw me out." He shrugs, a teenager's shrug, enormous and fragile. "I hear a bell, I see red."
    *codex loup_garou
  #Hold out your hand. "{name}. Nice to meet you properly, Luc."
    *set rel_manon +10
    *set charm +2
    *set luc_friend true
    He looks at your hand as if nobody has ever offered him one. Then he shakes it, hard, too hard, the way boys do when they've been told to have a good handshake.

    Behind the bar, the woman with the braid, Manon, watches this happen and nods once to herself.

*page_break
Dinner at Chez Jude is a long table of damned people passing plates.

Manon leads the grace. She stands at the head of the table with her hands folded and her eyes closed, a woman who clearly said grace ten thousand times in another life, and says, in a clear low voice: "For the ones who left, and the ones who were left. For the ones who were cut, and the ones who ran. For Nonna Pina's lasagna, which none of us deserve. Amen."

"[i]Amen[/i]," says the table, and twenty forks go in at once.

You meet them as the plates go round. Big Réjean, sixty, a long-haul trucker who turned in 1989 because he was on the road every Easter for seven years and never noticed. Kim and Sandrine, nurses at Jean-Talon, married, who turned the same year because they left the Church together over the wedding. A drag king called Johnny Tabarnak, in a pencil moustache and a tuxedo, who asks you whether you've ever been to Chez Normande and whether Fleurette still does the fan dance. Yves, who was two years from the priesthood when he walked out of the seminary. And a dozen more. Every one of them has a story that starts with a church door closing behind them.

The lasagna is the best thing you've ever eaten. You say so. Dario pretends he doesn't care and goes pink to the ears.

*choice
  #Sit by Manon. The calmest person in the room is always the one worth talking to.
    *set rel_manon +10
    *goto sj_manon
  #Ask the table how it works: the pack, the change, the seven years.
    *set lore +5
    *set rel_dario +5
    *goto sj_lore
  #Talk to Dario. Just Dario. Let the table go on around you.
    *set des_dario +5
    *set rel_dario +5
    *goto sj_dario_talk

*label sj_manon
Manon has a glass of red wine she hasn't touched and a plate she has. She watches you sit down beside her with an expression of mild, polite interest, the way a cat watches a new piece of furniture.

"You were a nun," you say.

"I was a Sister of Providence for twenty-two years," says Manon. "I taught grade three in Hochelaga. I was very good at it."

*choice speak
  #"Why did you leave?"
    *set rel_manon +5
    *set wits +1
    "Because one day I realised I believed in the children more than I believed in the order," she says. "And the order was very clear, when it came to it, which of the two it believed in." She turns the wineglass by the stem. "I walked out in my habit on a Tuesday in March. I took the 18 bus to my mother's. I've never been back." A small shrug. "Seven Easters later, here I am. God has a sense of humour. Or He doesn't, and that's funnier."
  #"Do you miss God?"
    *set rel_manon +10
    *set guarded %-5
    *set favor_manon true
    She's quiet for a long time. Down the table, Johnny Tabarnak is telling a story about a bishop that has everyone screaming.

    "Every day," says Manon. "The way you miss a person who hurt you. You don't miss what they did. You miss who you were when you still thought they wouldn't." She looks at you, properly, for the first time. "Nobody's asked me that in seven years. They all ask why I left. You asked what I lost." She lifts the glass at last. "I owe you one for that, locksmith. And I pay my debts."
    *remember manon You asked her if she missed God. Nobody had, in seven years.
  #"Were you scared? The first time you changed?"
    *set rel_manon +5
    *set nerve +2
    "Terrified," she says simply. "I was forty-six years old, alone in my mother's kitchen, on Easter Sunday, on all fours on the linoleum. I thought I was being punished." She almost smiles. "And then I heard howling, from very far away, across the whole city, from the east. Somebody had felt me turn. Dario. He was twenty-one. He came in his tow truck, with a blanket, and my mother made him coffee." She sips. "That's what a pack is, locksmith. Somebody who hears you, from across the city, and comes with a blanket."
*goto sj_karaoke

*label sj_lore
"Oh, you want the [i]catechism[/i]," says Johnny Tabarnak, delighted, and the whole table takes it up at once, talking over each other.

Seven years without your Easter duties: no confession, no communion, not once, seven Easters running. It doesn't matter if you believe or not. The folklore doesn't care what you believe. It only counts. And on the seventh Easter Sunday, you turn.

"You turn every full moon," says Big Réjean, "and any other night you're angry enough, or scared enough, or drunk enough."

"Or horny enough," says Kim, and Sandrine elbows her.

And there's a way out. There's always been a way out, in the stories: draw the wolf's blood with a blade, and the curse breaks. "It's in every book your mémé read you," says Yves. "The hero cuts the wolf. The wolf becomes a man again. Everyone cries. The end."

"What they don't put in the books," says Manon, from the head of the table, quietly, "is that the man doesn't remember. Seven years. More. Everything he learned while he was one of us, everyone he loved. The Hush takes it back, the moment he's a sleeper again. The Carillon cut us, and call it mercy, and the ones they cut wake up in a stranger's bed not knowing why their hands are shaking."

The table goes quiet.

"That's why we don't let them cut us," says Dario, at the stove, without turning round. "Even the ones who'd like to be cured. Especially them." A pause. "Some things you'd rather keep, even if they hurt."
*codex sept_ans
*codex loup_garou
*goto sj_karaoke

*label sj_dario_talk
You end up beside Dario at the stove in the sacristy kitchen, which is a real kitchen now, with a gas range and a fridge covered in photos and a crucifix over the door that someone has put a tiny red toque on.

"Nonna made this every Sunday," he says, cutting you a second piece you didn't ask for. "My whole life. When I stopped going to Mass, when I was twelve, my father wouldn't speak to me for a year. Nonna kept making the lasagna. Every Sunday. She'd put my plate out at the table, whether I came or not." He wipes his hands. "She never said a word about the church. She just kept feeding me."

*choice speak
  #"Why did you stop going? At twelve?"
    *set rel_dario +10
    *set guarded %-5
    His jaw works. "Father Gendron," he says. "Saint-Bernardin, on Jarry. I told him in confession I thought I liked boys. I was twelve. I didn't even know what it meant yet." He's cutting the lasagna into smaller and smaller pieces, not looking at it. "He told me boys like me were damned. He said it very kindly. He said it like he was telling me it would rain." He puts the knife down. "So I figured, okay. If I'm damned anyway, why am I getting up early on Sundays?" A laugh with nothing in it. "Seven years later, the joke was on me."
    *remember dario He told you about Father Gendron, and the confession, when he was twelve.
  #"She sounds like she loved you a lot."
    *set rel_dario +5
    *set des_dario +5
    "She loved me like a pain in the ass," Dario says, and his eyes are wet, and he doesn't do anything about it. "Best way there is."
  #"You're not damned, you know. For what it's worth."
    *set rel_dario +10
    *set des_dario +5
    *set wry %-10
    He looks at you for a long moment over the lasagna. "It's worth a lot," he says quietly. "It's worth more than you'd think, coming from somebody who hasn't got fur." And then, because he can't stand being serious for more than about ten seconds: "Also I am, a little. It's fine. Hell's got a better playlist."
*goto sj_karaoke

*label sj_karaoke
*page_break
At midnight the tea towel comes off the keyboard and somebody plugs in the karaoke machine and it's over.

Johnny Tabarnak does "My Way," in French, weeping. Kim and Sandrine do "Islands in the Stream" and nearly come to blows over who's Dolly. Luc does something from TikTok that nobody over twenty-five has heard of, and does it very well, and sits down scarlet to the loudest applause of the night.

And then the crowd starts chanting [i]Da-ri-o, Da-ri-o[/i], and Dario throws his apron at them, and takes off his toque, and puts it back on, and gets up on the altar.

"Pour que tu m'aimes encore." Céline. The whole thing. He sings it the way people sing in the shower when they're sure nobody can hear: loudly, badly, with his eyes shut and his whole chest, and the entire pack sings the chorus with him, twenty damned people in a deconsecrated church shouting [i]pour que tu m'aimes encore[/i] at the stained glass, and somewhere in the middle of it you realise that your face hurts from smiling.

On the last chorus he opens his eyes and looks straight at you and holds out his hand.

*choice
  *selectable_if ((charm >= 30) or (nerve >= 30)) #Get up there. Sing it with him.
    *set n3_sang "duet"
    *set des_dario +10
    *set rel_dario +10
    *set charm +3
    *set nerve +2
    *set guarded %-10
    You get up there. You don't know all the words. It doesn't matter. He puts his arm round your shoulders and you both hold the microphone and the pack loses its mind, and on the last long note his voice cracks and yours does too, and you end up forehead to forehead on the altar of a church, laughing, breathless, with twenty people stamping on the pews.

    "Okay," he says, into the noise, just for you. "Okay, Lacroix. You can stay."
    *remember dario You sang Céline with him on the altar at Chez Jude.
  #Heckle him. Lovingly. Loudly.
    *set n3_sang "heckle"
    *set wry %+10
    *set rel_dario +5
    *set rel_manon +5
    "[i]FLAT![/i]" you yell, over the chorus. "[i]YOU'RE FLAT, SANTANGELO![/i]"

    The whole church erupts. Dario points at you from the altar, still singing, and mouths [i]you're dead[/i], and sings the last note directly at you, a full octave off, on purpose, with his hand on his heart.
  #Shake your head, smiling. Just watch him.
    *set n3_sang "watch"
    *set des_dario +5
    *set guarded %+5
    You shake your head. He shrugs, grinning, and sings the last chorus to you anyway, across the whole nave, as if nobody else is there.

    You watch him. You can't stop watching him. When he finishes and the pack roars, he's still looking at you, and he's not smiling any more, not exactly.

*page_break
*if took_hair
  Later, in the sacristy kitchen, with the noise of the party coming through the door, you take out the napkin and unfold it on the counter by the sink.

  "From her hand," you say. "Mireille's. I took some."

  Dario's face changes. He picks up one hair between finger and thumb and holds it to the light over the sink, and then, without any embarrassment at all, he smells it.

  "That's not one of us," he says at once. "It's not anybody." He crumbles it between his fingers; it breaks like straw. "It's old. It's dead hair. Nobody pulled this off a living wolf, not last night, not in years. This came off a skin." His voice goes very flat and very quiet. "Somebody's got a wolf pelt somewhere, Lacroix. Somebody cut a piece off a dead one of us and put it in an old lady's hand to make us look like murderers."
  *clue c_pelt
  He puts the napkin down very carefully, as if it's a relic. "Where does a person even get a wolf pelt, in this city, in 2026?"

  *choice speak
    #"Somebody rich. Somebody old. Somebody who hunts."
      *set wits +2
      *set rel_dario +5
      He looks at you, and you can see him thinking about the mountain, about the big stone houses, about the one club in this city that still toasts the fur trade.
    #"We'll find out. Together."
      *set rel_dario +10
      "Together," he says, like he's trying out a word in a foreign language.
    #Put your hand over his on the counter.
      *set des_dario +5
      *set rel_dario +5
      His hand turns over under yours and holds on.
*else
  Later, in the sacristy kitchen, with the noise of the party coming through the door, Dario tells you what the pack heard on the Line: that the hair in Mireille Caron's hand was wolf hair, and that the Carillon are saying so in the towers already, and that by the end of the week somebody's going to come to Saint-Jude with iron.

  "They'll say it was one of mine," he says. "They'll come for Luc. He's new, he's got a record, he went for a bell-ringer in front of witnesses." He grips the edge of the sink. "I won't let them. I don't care what it costs."

*page_break
He takes you up the bell tower to show you the view.

The stairs are narrow and cold and smell of old pigeons, and the belfry at the top is empty: the bell was sold in 1998 to a church in Ontario, he says, to pay the heating bill. There's just the great oak frame it used to hang from, and the four open arches, and snow blowing in, and Saint-Léonard spread out below in the dark, all its white roofs and staircases and a thousand kitchen lights.

"I come up here when the pack gets too loud," Dario says. "Or not loud enough." He's leaning on the frame. He's close. He smells of garlic and cold air and something underneath that you're starting to recognise as just him, animal and warm. "Sometimes I just come up here and look at that street." He nods at a street you can't see, somewhere to the north. "Jarry. I grew up on Jarry."

"Your family's still there?"

"My mother." A pause. "And some other people." He doesn't explain. Something in his face goes somewhere else, a long way off, and comes back. "When I turned, at nineteen, I... remembered something I'd lost. That's all. It happens sometimes, when you turn. The Hush lets go of you."

"What did you lose?"

"A friend." He says it lightly. His hands on the frame are white at the knuckles. "Doesn't matter. Long time ago."

*choice
  *selectable_if (des_dario >= 20) #Kiss him. Up here, in the snow, in a bell tower with no bell.
    *set kissed_dario true
    *set des_dario +15
    *set rel_dario +5
    *set reckless %+5
    *if steam
      You don't decide to. You're just kissing him, and he makes a sound against your mouth like something breaking open, and then he's kissing you back, hard, his hands on your face, then in your hair, then under your coat, hot as a stove through your shirt. He backs you up against the old oak frame and the whole tower seems to hum with it.

      He's big and he's careful and he isn't careful at all. His beard scrapes your jaw raw. His mouth goes to your throat and stays there, and his teeth graze you, just the edge of them, just enough, and your knees go, and he laughs low into your neck and holds you up with one arm like you weigh nothing.

      Your hands are inside his T-shirt. His skin is fever-hot. You can feel his heart going like a hammer under your palm, and something else under it, something wilder, pacing. When he pulls back his eyes are yellow all the way through, gold as a streetlight, and he's breathing like he's been running.

      "Not in the church," he says hoarsely, and then laughs at himself, forehead against yours. "Listen to me. [i]Not in the church.[/i] My nonna would climb out of her grave." He kisses you again, softer. "But I'm gonna need you to know, Lacroix, that it's taking everything I've got."
    *else
      You kiss him, and he kisses you back like something breaking open, and for a long time there's nothing in the bell tower but snow and the two of you and the city below.

      When he finally pulls back his eyes are gold as streetlights. "Not in the church," he says, and laughs at himself. "Listen to me."
    *remember dario You kissed him in the bell tower at Saint-Jude.
  #"A friend who mattered."
    *set rel_dario +10
    *set wits +2
    He's quiet so long you think he won't answer.

    "The only one," he says finally. And then, fast, before you can ask anything else: "It's cold. Let's go down. Manon made coffee."

    On the stairs he stops, one step below you, so your faces are level, and looks at you for a long second in the dark. He doesn't do anything. He just looks, like a man memorising something. Then he goes on down.
  #Stand beside him. Look at the street with him. Don't ask.
    *set rel_dario +10
    *set des_dario +5
    *set guarded %+5
    You lean on the frame next to him, your shoulder against his, and look north across the roofs toward a street you can't see, and don't ask.

    After a while he leans back, just slightly. Just enough.

    "Thanks," he says, very low. You don't ask what for.

*page_break
When you come down, his phone buzzes on the bar. He looks at it. You watch his whole face change: open, and then shut, fast, like a door slammed in a draught.

"I gotta go out," he says. "Pack business. Stay, eat, Manon'll drive you wherever." He's already pulling on his parka. He doesn't look at you. At the door he stops and turns back. "Tonight was good, Lacroix. You know that, right? Tonight was really good."

And he's gone into the snow, fast, toward the truck, and you stand there by the bar under the Stations of the Cross with their Christmas lights, and Manon, polishing a glass, very carefully doesn't look at you.

*if favor_manon
  "He'll be back," she says, at last. "He always comes back." She puts the glass down. "You didn't ask me who texted him. That's good. Don't."
*set n3_last "dario"
*set charm +2
*return

*label patrol
*page_break
*set patrolled true
Place d'Armes at midnight after a snowfall is a white square with a statue of Maisonneuve in the middle of it wearing a cap of snow, and on one side, lit gold from below, the front of Notre-Dame: three great arches and two tall square towers, and between them, up in the dark, a rose window like a held breath.

Lazare is waiting at the foot of the west tower with his hands in his coat pockets. When he sees you crossing the square toward him, he takes them out, and then doesn't know what to do with them, and puts them back.

"You came," he says.

"You asked."

"I asked you to come and see the Bourdon." He glances up at the tower. "I didn't expect you to come and walk the roofs with me instead."

"Is that what we're doing?"

"It's what I'm doing." A pause. You watch him decide something. "The Bourdon is at prayer until three. You can walk with me until then, if you want. It's... quiet. Mostly."

Across the square, a figure in a long coat lifts a hand: Agathe, heading off east toward the old port, her sector. She raises her eyebrows at you, very slightly, and at Lazare, and is gone.

*page_break
Old Montréal from the rooftops is a different city.

He takes you up the back of a warehouse on Saint-Paul by a fire escape, iron rungs rimed with ice, and then you're up among the chimneys and the snow-covered tin roofs and the dormer windows, and the whole of the old town is laid out under you: the narrow streets with their gas-style lamps, the grey stone of the seminary, the silver dome of the Marché Bonsecours down by the water, and beyond it the port and the frozen river and the lights of the bridge.

He moves across the roofs like he was born on them. You don't.

At the edge of the third roof there's a gap to the next building: two metres of nothing, and four storeys down, an alley.

Lazare jumps it without stopping. He lands light on the far side and turns and looks back at you.

"There's a door," he says, "if you'd rather. On the roof access. It's locked."

*choice
  *selectable_if (nerve >= 30) #Jump.
    *set climbed true
    *set nerve +5
    *set des_lazare +5
    *set reckless %+10
    You don't think about it. That's the only way to do it. You run and you jump and for one long second there's nothing under you but the alley and the snow falling past, and then your boots hit the tin on the far side and skid, and his hand closes on the front of your coat and hauls you upright against him.

    For a moment you're very close. He's breathing hard, and it isn't from the jump.

    "That," he says, "was stupid." He doesn't let go of your coat right away. "Well done."
  *selectable_if (hands >= 40) #Take the door. You're a locksmith. Locked is a suggestion.
    *set climbed true
    *set hands +3
    *set rel_lazare +5
    The roof-access door is steel, with a padlock on a hasp and a deadbolt in the door itself. The padlock takes eight seconds. The deadbolt takes forty. You go down one flight of the dark stairwell, along a corridor that smells of old paper, and up the stairs on the other side, and out onto the next roof, where Lazare is waiting with an expression you can't read.

    "Forty-eight seconds," he says. "I timed you."

    "Is that good?"

    "Agathe takes a crowbar," he says, "and three minutes, and a lot of swearing."
  #"Neither. I'll wait here." Let him come back for you.
    *set rel_lazare +3
    *set guarded %+5
    *set reckless %-10
    He looks at you across the gap, and then he comes back, the way he went, and lands beside you, and holds out his hand.

    "Together," he says. "On three. I won't let you fall."

    You take his hand. On three, you jump. You don't fall. He doesn't let go of your hand for a second or two after you land, and then he does, abruptly, as if he's only just noticed.

*page_break
You find the feeder in an alley behind the Rue de la Commune.

Lazare hears it first: he stops dead on the edge of a roof and puts his hand flat on your chest to stop you too, and then you hear it, down in the dark between two walls. A man's voice, slurred, laughing at something. And another sound under it. A wet sound.

Lazare goes down the drainpipe like water. You follow, slower.

In the alley a man in a Canadian Tire parka is sitting against the wall in the snow, drunk, smiling, with his head on one side. Kneeling in front of him, with its mouth at his throat, is a girl. Nineteen. Twenty. A Concordia hoodie, ripped jeans, bare feet in the snow. When the handbell rings she comes off the man's throat and spins round in a crouch and hisses, and her face is smeared red to the eyes, and she's so thin you can see her cheekbones through her skin.

Lazare rings the bell again, softly, by the drunk man's ear: [i]oublie[/i]. The man sighs and closes his eyes and smiles, and will wake up tomorrow with a hangover and a hickey and no idea. Then Lazare turns to the girl with the iron already in his hand.

"Please," she says. "Please. I didn't take much. I'm so hungry. They won't let me in at the Club. They said I wasn't turned properly. They said I'm not [i]anyone's[/i]."

Lazare doesn't lower the iron. He looks at you, sideways, a single glance. You're not sure he knows he did it.

*choice speak
  #"She's a kid, Lazare. She's starving. She didn't kill him."
    *set feeder "mercy"
    *set rel_lazare +10
    *set guarded %-5
    His jaw works. Then, slowly, the iron goes back into his sleeve.

    He crouches down in the snow in front of the girl and takes a wallet from inside his coat. He gives her a card, a plain white card with an address on it in Griffintown, and three twenty-dollar bills. "There's a place," he says quietly. "A blood bank. Behind the old Northern Electric plant. Tell them Brother Lazare sent you. They'll feed you, and they won't ask whose you are." He stands. "If I find you in an alley again, I won't have a card."

    She stares at him. Then she's gone, up the wall, barefoot, like a spider.

    Lazare stands in the alley for a long moment with his back to you. "The Bourdon would say I should have cut her," he says.

    "What do you say?"

    "I say she was hungry." He turns. "I say I was hungry once, and nobody cut me."
    *remember lazare You asked him to spare a starving girl in an alley, and he did.
  #"She was killing that man. Do what you have to."
    *set feeder "harsh"
    *set rel_lazare -5
    *set nerve +2
    He looks at you, and something in him seems to close, very slightly, like a hand.

    He doesn't cut her. He takes the iron in his fist and presses it, flat, against her forearm, and she screams and the smell of burned skin fills the alley, and then she's gone up the wall, sobbing, barefoot, like a spider.

    "She'll carry that mark for a hundred years," Lazare says, putting the iron away. "Every time she's hungry, she'll look at it and think twice." He doesn't sound satisfied. He sounds tired. "That's the mercy. That's all the mercy there is."
  *selectable_if (nerve >= 25) #Step between them yourself. Get the drunk man out of the way first.
    *set feeder "stepped"
    *set nerve +3
    *set rel_lazare +5
    *set des_lazare +5
    You don't wait for him to decide. You get your hands under the drunk man's arms and haul him up and back, out of her reach, and stand there with his weight against you and your eyes on the girl.

    For a second everything balances on a knife: the girl crouched and hissing, the iron in Lazare's hand, you and a drunk in a Canadian Tire parka between them.

    Then Lazare lowers the iron. "Go," he says to the girl. "Now. Griffintown, behind the old Northern Electric plant. Tell them Brother Lazare sent you." She goes, up the wall, like a spider.

    He looks at you over the drunk man's lolling head. "You keep doing that," he says. "Standing between things."
  #Say nothing. Watch what he does when he thinks it's his call alone.
    *set feeder "watched"
    *set wits +2
    You say nothing. He looks at you once more, as if waiting, and when you don't speak, he looks back at the girl for a long moment.

    Then he puts the iron away, and gives her a card, and three twenties, and an address in Griffintown, and she goes up the wall like a spider.

    "You didn't tell me what to do," he says, not looking at you.

    "It wasn't my call."

    "No," he says. "Everybody always tells me what to do. It's been a long time since it was my call." He sounds almost frightened by it.

*page_break
You end up on the roof of the Marché Bonsecours, under the silver dome, with your backs against it and your boots in the snow. From up here you can see the whole of the old port, and the river beyond with its black water between the ice, and the bridge lit gold and blue, and behind you, if you turn your head, the mountain, and the cross on it, lit white.

Lazare sits with his knees up and his arms around them, like a boy. He's been quiet since the alley.

"Can I ask you something?" you say.

"You'll ask anyway."

"Your parents. You said a loup-garou."

He doesn't move. "Rue Jarry," he says after a while. "In Saint-Léonard. I was ten. The Bourdon says I was lucky. The Carillon found me in the snow in the lane behind the house, and took me in, and raised me. He says I was in shock. That's why I don't remember." A pause. "I don't remember their faces. I don't remember the house. I remember the lane, and the snow, and then the towers. That's all."

"You don't remember your own parents' faces?"

"The Bourdon says it's a mercy." He says it the way you'd say a line you've said a thousand times. "The Hush takes what hurts too much to keep."

*choice speak
  #"Lazare. Doesn't that seem strange to you? That you remember the lane but not their faces?"
    *set wits +5
    *set rel_lazare +5
    He's very still. "Yes," he says finally, so quietly you almost don't hear it. "Every day." And then, harder, as if you've caught him at something: "It's not your business."

    But he doesn't get up. And he doesn't tell you to stop.
    *remember lazare You asked him why he remembers the lane and not his parents' faces.
  #Take his hand, where it's wrapped around his knees.
    *set des_lazare +10
    *set rel_lazare +5
    *set guarded %-5
    His hand is cold. You don't think he's worn gloves in his life. He goes rigid when you touch him, the way he did on Saint-Viateur, and then, slowly, his fingers turn over and close on yours.

    He doesn't look at you. He looks at the river. But he doesn't let go.
  #Tell him about your father. The coat on the hook. The phone call. The Polaroid.
    *set rel_lazare +10
    *set guarded %-10
    You tell him all of it. You don't know why. You tell him about the coat your father left on the hook, and a voice on the phone saying his words, and a Polaroid of a boy in a Spider-Man T-shirt in front of a door he doesn't remember.

    Lazare listens without moving. When you've finished, he says, "Show me." And you take it out of your wallet, or describe it, and he looks for a long time.

    "You don't remember being there," he says.

    "No."

    "Neither do I," says Lazare, strangely, and doesn't explain.
    *set shared_father true
  #"I'm sorry." And leave it at that.
    *set rel_lazare +5
    "Everybody's sorry," he says, not unkindly. "It's all right. It was a long time ago." He tucks his chin into his scarf. "I have the Carillon. I have the bells. It's enough."

    You don't believe him. You don't think he does either.

*page_break
*if ((rel_lazare >= 20) or (shared_father))
  After a while he says, without looking at you: "I'm going to tell you two things. I shouldn't tell you either of them."

  "Okay."

  "The first is that three weeks ago, a Hush-bell went missing from the armory in La Tempérance. Agathe signed for it last. She says she put it back. The Bourdon says it's being looked into." He turns his head. "The bruise on that woman. On Mireille Caron. It was a Hush-bell. Somebody has one of ours, and is killing people with it."
  *clue c_bell_stolen
  "And the second?"

  "The Carillon keeps a book," Lazare says. "The Register. Every name the Hush has ever unmade, since 1967, in the Bourdon's hand. It's kept in his study, on a lectern, under a lock." He looks back at the river. "If Mireille Caron was unmade, her name's in it. And so, I think, is whoever wanted her quiet."
  *clue c_register
  *set rel_lazare +5
  *remember lazare He told you about the stolen bell, and the Register. He shouldn't have.
*else
  After a while he says, "Somebody's killing people with one of our bells." He doesn't say anything more. He doesn't have to. It's in his face: the fear, and the shame of it, and something harder under both.

*page_break
The cross on the mountain burns white behind you. The bridge changes colour, gold to blue to pink. It's almost one.

"When I was a boy," Lazare says, "in the towers, I used to think the cross was watching the city. All night. That it would see if anything went wrong." He almost smiles. "Now I know it's a hundred and fifty-eight light bulbs and a timer. The city pays for them."

*choice
  *selectable_if (des_lazare >= 20) #Kiss him. Up here, with the cross and its hundred and fifty-eight lightbulbs watching.
    *set kissed_lazare true
    *set des_lazare +15
    *set reckless %+5
    You lean over and kiss him.

    He doesn't move at first. Then he does, all at once, like a man who's been holding a door shut with his whole body and has let go of it. He kisses you like he's confessing something: carefully, and then not carefully at all, one cold hand coming up to the side of your face, his breath catching against your mouth.
    *if steam
      His other hand fists in the front of your coat and pulls you closer, down into the snow against the silver dome, and he makes a low sound into your mouth that goes straight through you. For a long moment there's only this: the cold metal at your back, the heat of him, his thumb along your jaw, the snow falling on both of you and melting where it lands.
    Then he pulls back. His eyes are wide and dark and his mouth is wet and he looks, for a moment, absolutely terrified.

    "I can't," he says. "I'm sorry. I can't, there's..." He stops. "There's someone. It's not a someone. It's a mistake I keep making." He presses the back of his hand to his mouth. "I'm sorry. That wasn't fair to you."

    "Lazare..."

    "It's not you," he says. "God. It's not you." And he looks at you in a way that makes it very clear that that is exactly the problem.
    *remember lazare You kissed him on the roof of the Marché Bonsecours. He kissed you back, then said there was someone.
  #"It's still watching. Somebody paid for the bulbs."
    *set rel_lazare +10
    *set des_lazare +5
    *set wry %-5
    He looks at you, and then back at the cross, and something in his face softens in a way you haven't seen before. "That's a very Catholic answer," he says. "For a man who doesn't go to Mass."

    "How do you know I don't go to Mass?"

    "Nobody who goes to Mass," says Lazare, "is awake at this hour, on a roof, with me."
  #"I think it's watching you, mostly. You look like you need watching."
    *set des_lazare +10
    *set wry %+10
    He laughs, actually laughs, surprised, and it changes his whole face: suddenly he's thirty-one and not a hundred, a man laughing on a roof. It lasts about three seconds. Then he looks at you, and it's gone, and something else is there instead.

    "Don't," he says quietly. "Please. Don't be kind to me like that. I don't know what to do with it."

His phone buzzes in his coat. He takes it out and looks at it. You see the name on the screen before he tilts it away: just an initial. [b]S.[/b]

His face does something complicated and very private. He puts the phone back.

"I have to go," he says. "I'll walk you down."
*set n3_last "lazare"
*set wits +1
*return

*label mardi_gras
*page_break
*set saw_rose true
The Main at night in February is a long bright scar through the middle of the city: Boulevard Saint-Laurent, the line where the English west used to end and the French east began, lined with smoked-meat counters and strip clubs and Portuguese churches and bars that were cool in 1994 and have been coasting on it ever since. Snow in the gutters, grey. Neon in the snow, pink and green.

Halfway down the block from Sainte-Catherine, between a dépanneur and a shuttered theatre, there's a building you've walked past a hundred times and never seen: a narrow cabaret front from the forties, black and gold, with a marquee that says [b]LE MARDI GRAS[/b] in red script that buzzes, and a door with no handle.

You take out the matchbook. You don't know why. You strike a match on the cover, and the door opens.

*page_break
Inside, it's always a quarter to midnight.

Every clock says so. There are dozens: on the walls, over the bar, in the hands of the ormolu cherubs on the mantelpiece. [b]11:47.[/b] None of them tick.

It's a cabaret, or a ballroom, or both, and it's been every decade at once. A dance floor of black and white tiles. A band on a little stage: a swing band in white dinner jackets, and a fiddler in a red sash and moccasins who looks like he stepped off a sleigh in 1740, and a DJ with a laptop, all playing together, somehow, the same song. And the dancers. Habitants in tuques and sashes whirling girls in bonnets. Flappers. Zoot suits. Club kids in fur and glitter with their pupils blown wide. A woman in a crinoline dancing with a woman in a leather harness. All of them masked. All of them dancing as if they're afraid the music will stop, and all of them knowing it never will.

It's Mardi Gras. The last night before Lent. The last hour before the ashes. It always will be, in here.
*codex beau_danseur

At a table at the edge of the dance floor, alone, in black, sits the most beautiful man you have ever seen.

*page_break
*meet rose
He's dark: black hair swept back from a high forehead, a widow's peak like the point of a spade. Pale skin. A thin black moustache, the kind men wore in old films. A black suit so well cut it looks poured, a white shirt open at the throat, a single red rose in his lapel. His hands, resting on the silver head of a cane, are in black kid gloves.

And his eyes, when he lifts them and finds you across the room, are dark all the way through, and at the very back of them, like the last coals in a grate, there's a red light.

He stands, and bows, a real bow from the waist, eighteenth-century, and gestures to the chair across from him.

"Monsieur Lacroix," he says. His voice is low and amused and very warm, like a hand at the small of your back. "I've been waiting for you since 3:33 on Friday morning. Please. Sit. I'm Rose."

"Rose."

"I took it from a girl who turned me down," he says. "In 1740. It seemed only fair to keep something." He pours two glasses of champagne from a bottle that wasn't there a moment ago. He slides one across to you with a gloved fingertip. "You're wondering whether to drink that."

*choice speak
  #Drink it. If he wanted to trick you, he wouldn't need champagne to do it.
    *set reckless %+10
    *set rel_rose +5
    *set des_rose +5
    It's champagne. Very good champagne. That's all it is.

    Rose watches you drink with open pleasure. "Correct," he says. "I don't need tricks. Tricks are for people who can lie." He lifts his own glass. "I can't. Not won't. [i]Can't.[/i] It's the only rule I have, and I've never once broken it, in two hundred and eighty-six years."
  #Leave it. "I was told not to drink what polite people pour."
    *set guarded %+10
    *set rel_rose +10
    *set lore +2
    Rose looks delighted, as if you've passed a test he didn't expect you to pass. "Good," he says. "Someone's teaching you properly. The djinn, I expect." He moves the glass away from you with one finger. "It's only champagne. But you were right not to trust it. Don't trust anything in here that you haven't paid for."
  #"What's in it?"
    *set wits +2
    *set rel_rose +5
    "Champagne," says Rose. "Moët, 1921. A very good year, if you liked the twenties, which I did." He smiles. "You're asking the right questions in the wrong order. Most people ask what's in the glass before they ask who's pouring. You'll learn."

*page_break
"I'll give you something," Rose says, "for nothing, which I never do. One question. Ask me anything, and I'll answer truly, because I must. The second one costs." He folds his gloved hands on the silver cane. "Choose well, locksmith. Most people waste it on whether I have horns."

*choice
  #"Who called me on Friday night? Who sent me to the fort?"
    *set rose_q "caller"
    *set wits +1
    Rose's smile changes, becomes gentler and somehow sadder.

    "Someone who loves you," he says, "and can't remember why."

    You stare at him. He doesn't elaborate. He doesn't have to, and he knows it, and he lets the words sit on the table between you like a card turned face up.
  #"What is the Hush? Really?"
    *set rose_q "hush"
    *set lore +5
    *codex accord
    "A lullaby," says Rose, "sung over a whole city by three frightened people, in 1967, in my ink." He turns his glass. "Three of them signed it, and I witnessed. They bought a djinn to power it, and they hired a locksmith to lock him in, and they paid me for the ink with a promise they've never kept." He smiles. "I'll tell you whose names, darling. But not for free. Not that part."
  #"What do you want? From me."
    *set rose_q "want"
    *set des_rose +10
    *set rel_rose +5
    He's quiet for a moment, which you're beginning to understand is rare.

    "To be invited," he says. "By someone who knows exactly what I am. A demon can only go where he's asked, locksmith, and only take what's freely given. For fifty-nine years, since the Hush, no sleeper in this city has been able to see me well enough to ask me in." He looks at you with those red-coal eyes. "And then, on Friday, a sleeper walked through a bell." He spreads his gloved hands. "What do I want? I want to be chosen. Just once more, before the end of the world."
  #"Lazare and Dario. What's the story there?"
    *set rose_q "leads"
    *set wry %+5
    Rose laughs, a low delighted sound that turns heads three tables away.

    "Oh, darling," he says. "Check the coat room." And then, when you just look at him: "I can't lie. So I'll tell you only this: some people hate each other in public so that no one ever looks at what they do in private." He sips his champagne. "And some of them have been doing it for seven years."

*page_break
"And now," says Rose, "the part that costs."

He stands, and holds out his gloved hand to you, palm up.

"Tomorrow night the whole Veillée comes here, for the last hour before Lent. I'd like the first dance with you. At midnight. Until the clock strikes." The red light at the back of his eyes glows, very faintly. "Dance with me until then, and I'll tell you anything you ask: who signed the Accord, who built what, who's lying to you and why. Every question, one per turn of the floor."

"And if I lose?"

"Nobody loses a dance, darling." His smile is very beautiful and very old. "But if I'm leading when the clock strikes twelve, you'll owe me something. A small thing. A single yes, whenever I choose to ask for it." He tilts his head. "You'd be amazed how rarely I ask."

*choice speak
  #Take his hand. "Tomorrow. At midnight. I'll lead."
    *set rose_invite true
    *set des_rose +10
    *set reckless %+5
    *set nerve +2
    His gloved fingers close on yours. They're warm, very warm, much warmer than a man's hand should be through leather.

    "Oh," Rose says softly. "Oh, I [i]like[/i] you." He lifts your hand and presses his lips to your knuckles, a courtier's kiss, and your whole arm goes hot to the shoulder. "Tomorrow, then. Wear something you can move in."
    *remember rose You took his hand and promised him the first dance.
  #"Tell me why midnight, first. Tell me about the girl."
    *set rose_invite true
    *set lore +5
    *set rel_rose +10
    His hand stays where it is, open. "Rose Latulipe," he says. "Mardi Gras, 1740, in a farmhouse outside Québec. Her father threw a ball. I came in a black coat, with gloves on, because of my hands, and I asked her to dance, and she danced with me all night, until the curé came in at the stroke of midnight and saw what I was, and that was the end of the story." He looks at his gloves. "That's what they tell children. Would you like to know what really happened?"

    "Yes."

    "At a quarter to midnight, she looked at me, and saw exactly what I was. Horns and all. And she said no." He smiles, and for the first time it isn't amused at all. "Nobody had ever said no to me knowing. They'd said no out of fear. She said no the way you'd turn down a second glass of wine. Politely. Clearly. Because she didn't want to." He closes his gloved hand, slowly. "I've been in love with that no for two hundred and eighty-six years. Come tomorrow. I'll tell you the rest."
  #"No. But I'll come to the party."
    *set rose_invite false
    *set guarded %+10
    *set rel_rose +10
    He lowers his hand. He doesn't look disappointed. He looks, if anything, as if you've given him a present.

    "Then come to the party," he says. "And I'll ask again. And you'll say no again, perhaps, and I'll enjoy that too." He bows. "You've no idea how lovely it is to be refused properly."
  #"Take off your gloves first."
    *set des_rose +15
    *set reckless %+10
    Rose goes very still. Then he laughs, low and wicked, and the red light in his eyes flares like somebody's blown on a coal.

    "Not on a first date," he says. "Not even for you." He leans closer across the table. His breath smells of champagne and cloves and, very faintly, of smoke. "But ask me again tomorrow. At a quarter to midnight. And see what I say."
    *set rose_invite true
    *remember rose You asked him to take off his gloves. He laughed.

*page_break
As you get up to go, he catches your wrist, very lightly, and turns your hand over, palm up, and looks at it.

"Locksmith's hands," Rose says. "Your father's hands. He came here, you know. Your father. Many times." He lets go. "He danced with me once, in 1998. Badly. He owed me a dance after that, and he never paid it." He smiles. "The Lacroix men always leave something owing. It's very endearing."

"My father was here?"

"Ask me tomorrow," says Rose, "at a quarter to midnight." And he turns back to the dancers, and the band plays on, and every clock in the room says 11:47.

Outside on the Main, when the door shuts behind you, your watch says it's been exactly an hour.
*set n3_last "rose"
*set charm +2
*return

*label bridge
*page_break
*set bridge_nadim true
The Jacques Cartier Bridge has a walkway along one side, behind a railing and a chain-link fence, for cyclists in summer and nobody in winter. You walk it alone, out over the black river, with the wind coming down the St. Lawrence straight from Labrador, cutting through your coat like it isn't there.

Halfway across, where the bridge's great steel superstructure rises up over the channel in lattices and girders like a cathedral made of Meccano, there's a maintenance ladder bolted to a pier. At the top of it, a hundred metres above the ice, against the stars, there's a glow. Faint. Orange. Like a cigarette in the dark.

*choice
  *selectable_if (nerve >= 30) #Climb. One rung at a time. Don't look down.
    *set climbed true
    *set nerve +5
    *set rel_nadim +5
    You climb. The rungs are iced and your gloves slip and the wind tries to take you off the ladder like a hand. You don't look down. You look up, at the glow, getting closer, and count the rungs, and at a hundred and twelve a hand reaches down out of the dark, warm as a stove, and takes yours, and pulls you up onto the girder.

    "That," says Nadim, "was either very brave or very stupid, and I'm too old to tell the difference any more."
  #Call up to him. "Come down! I'm not climbing that!"
    *set rel_nadim +3
    *set wry %+5
    For a moment nothing happens. Then the glow sighs, visibly, and pours down the ladder like smoke going the wrong way, and wraps around you, and lifts, and there's a truly undignified thirty seconds that you will never, ever speak of, and then you're on the girder at the top, sitting down very hard.

    "Never," says Nadim, reassembling beside you, "ask me to do that again. I'm not a lift."

*page_break
It's cold at the top of the world. The wind hums in the cables. Below you, the whole city is laid out like a spill of coins: downtown's towers, the dark hump of the mountain with the cross on it, the long lit arteries of the streets going out to the edges of the island, and the black river curling round all of it, full of ice.

Nadim sits on the girder with his back against a steel upright and his knees drawn up. He's more solid than he was at your window, less than he was in the vault. The heat coming off him is like sitting next to a woodstove. Snow that falls on him turns to steam.

*if plate_got
  He has the name-plate in his lap. He keeps touching it, the way you keep touching your grandmother's key.
*else
  His hands are empty, and he keeps looking at them.

"I come up here," he says, "because it's the highest place I can reach without being seen, and because I can see the island I was buried in." He nods down at Île Sainte-Hélène: the dark trees, the dead rides of La Ronde, the ghostly globe of the Biosphère. "Fifty-nine years. It looks very small from up here."

*choice speak
  #Sit beside him. Close. Share the heat. Say nothing yet.
    *set rel_nadim +10
    *set des_nadim +5
    *set guarded %-5
    You sit beside him on the girder, shoulder to shoulder, and let the heat of him soak into your cold side. He goes still. Then, very slightly, he leans.
  #"How are you feeling? Honestly."
    *set rel_nadim +5
    "Honestly?" He considers. "Like a fire someone kept feeding with wet wood for fifty-nine years. Smoky. Resentful. Surprised to still be lit." A pause. "Better, tonight. It's the height. And the company."
  #"Nice view. Shame about the wind chill."
    *set wry %+10
    *set rel_nadim +5
    The struck-match laugh. "It's minus thirty-one," he says. "I checked. On a sign. I'm learning about signs." He looks almost pleased with himself. "In 1967 the signs said Expo. Now they say minus thirty-one and [i]Tim Hortons[/i]. What is a Tim Horton?"

*page_break
"I could hear it, you know," Nadim says. "Expo. Through the stone. That whole summer." He smiles at the dark island. "Fifty million people came. Can you imagine? I could hear them. Crowds, all day, in every language, laughing. The monorail going over, every four minutes, a hum and a rush, and I counted them. The fireworks on Saturdays. A brass band from Czechoslovakia that played the same march every afternoon at three." His voice goes soft. "It was the first time anything had sounded happy near me in a very long time."

"Where were you before? Before 1958?"

He's quiet for a long moment.

"In the hills above a city by the sea. In a well, with my sister, for about four hundred years. We quarrelled a great deal. It was wonderful." He looks at his hands. "A man came with brass and a book. I don't know if she got away."

*choice speak
  #"I'm sorry, Nadim."
    *set rel_nadim +5
    "Don't be sorry," he says. "Be angry. Sorry is for things nobody did."
  #"If she's alive, we'll find her. After."
    *set rel_nadim +10
    *set des_nadim +5
    He turns his head and looks at you, and the amber in his eyes flares, bright, and then banks. "After," he says. "You say that as if there'll be one." He looks away. "Thank you. It's a foolish thing to say, and I'm glad you said it."
    *remember nadim You promised to help him find his sister, after.
  #"What was her name?"
    *set rel_nadim +10
    *set lore +3
    He says it. It's long and old and has the sound of water in it. Then he says, "Nobody has asked me that in sixty-eight years," and doesn't say anything else for a while.

*page_break
"There's something I owe you besides a wish," Nadim says. "A story. About your father."

The wind drops. You feel it drop, like a held breath.

"In 1996, a man came down the stairs to my door. Not your grandfather: your grandfather came only once a year, to check the lock, and he never spoke. This one was younger. Thirty. He sat on the bottom step and he said, through the steel, [i]Bonsoir. I'm Serge. I'm the keeper now.[/i]" Nadim's voice is careful, the way you'd carry something full to the brim. "And then he came back the next week. And the next. For fifteen years."

"Every week?"

"Every Thursday. He brought a radio. A little transistor. He'd sit on the steps and play me the Expos games on CKAC: baseball, a game I have never understood and never will. He'd explain the rules. Every week. Patiently. I never learned them." Nadim smiles at the dark. "He told me about his wife. Kath. From Newfoundland, who said [i]b'y[/i] and laughed at everything. And he told me about his son."

You can't say anything.

"When you lost your first tooth," Nadim says. "When you won the spelling bee, in grade four, with 'rhythm.' When you told him you liked boys, at seventeen, in the van, and he had to pull over on Wellington because he was crying, and you thought it was because he was angry." A pause. "It wasn't. He told me. He said, [i]Nadim, my boy is braver than I have ever been in my life[/i]."
*clue c_serge_visits

The city blurs. You let it.

"And then," Nadim says, "in the spring of 2011, he said he'd found a way to get me out. He said, [i]next Thursday.[/i]" The heat of him flickers. "The next Thursday, nobody came. Nobody ever came again. Until you."

*choice
  #"He lied to us. My whole life. He came here every week and he never told us."
    *set rel_nadim +5
    *set guarded %+5
    *set wry %-5
    "Yes," says Nadim. "He lied to you. He was trying to keep you out of it. It's the oldest lie there is." He looks at you. "It didn't work. They never do."
  #"Did he... did he say he loved us? My mother and me?"
    *set rel_nadim +10
    *set guarded %-10
    "Every Thursday," says Nadim. "For fifteen years. It was the only thing he said every single time, without fail." He's quiet. "I used to think it was a strange thing to say to a djinn through a steel door. Now I think he just needed to say it out loud, somewhere it couldn't hurt anyone."
    *remember nadim You asked him if your father said he loved you. He said: every Thursday.
  #Say nothing. Look at the island. Let it be what it is.
    *set rel_nadim +5
    *set des_nadim +5
    You look at the island for a long time. So does he. The monorail doesn't go by. Nothing does, except the wind.

*page_break
*if wishes < 3
  When you finally stand to go, stiff with cold, he stands too, and holds out his closed hand.

  "I'm a little stronger tonight," he says. "Thanks to the height, and the company. Take it." A coal rolls into your palm and sinks in, warm, like a drop of water into sand. "Another wish. Don't spend it on anything I'd be embarrassed by."
  *set wishes +1
  [b]You have another wish.[/b]
*else
  When you finally stand to go, stiff with cold, he stands too.
*if window_talk = "invite"
  "You asked me in," Nadim says. "At your window. Out of the cold." He looks at the city. "I haven't forgotten. One day I'd like to say yes." A pause. "When I'm free to say it."
*set n3_last "nadim"
*set lore +3
*return
`);
