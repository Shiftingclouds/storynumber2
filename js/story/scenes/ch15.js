NB.scene("ch15", String.raw`
*mood eve
*chapter 15 Lilacs [15]
*temp week 1
*temp laz_ok true
*temp dar_ok true
*temp serge_free false
*temp nadim_out false
*if (lazare_fate = "dead") or (lazare_rehushed and (not(lazare_restored)))
  *set laz_ok false
*if dario_fate = "dead"
  *set dar_ok false
*if keyman_safe and (keyman_fate != "dead") and (keyman_fate != "gardien")
  *set serge_free true
*if (nadim_fate = "free") or (nadim_fate = "held_by_consent")
  *set nadim_out true
May.

The lilacs come out on the twentieth, the way they do every year, all at once, overnight: every lane in Verdun, every back fence in the Plateau, every park, the whole island suddenly purple and white and smelling so sweet you can taste it on the métro. People walk around with armfuls of them. There's a bunch in a jam jar on the counter at every dépanneur.

The first warm Sunday, the whole city goes up the mountain.

*page_break
*art title
The tam-tams.

Every Sunday from May to September, at the foot of the angel on the George-Étienne Cartier monument on Park Avenue, a hundred drummers. Nobody organises it. Nobody's ever organised it. Since the seventies people have just come: drummers with djembes and congas and plastic buckets, dancers, jugglers, a man on stilts, kids, dogs, a thousand people on the grass on the slope of the mountain in the sun, and the drums going all afternoon, one heartbeat, until the sun goes down behind the mountain.

You lie on the grass with your eyes closed and feel it through the ground.
*if world != "held"
  There are wolves at the tam-tams this year. Everyone knows. A dozen of the Sept-Ans in a circle on the grass, drumming, with their eyes gold in the sunlight, and nobody minds. A little girl in a tutu dances in front of Big Réjean for twenty minutes, and he plays for her with total seriousness. There's a vampire in a very large hat under a tree. There are ghosts, if you look, dancing at the edge of the crowd in the clothes of every decade the tam-tams have been going.
*if dar_ok
  Dario's drumming. Of course he is. On an upturned plastic pail, with his toque on in twenty-two degrees, with his eyes shut and his whole chest, exactly the way he sings.
*if laz_ok
  Lazare's lying on the grass beside you, on his back, with his arm over his eyes, not drumming, not dancing, just listening, and every so often his fingers move on the grass, keeping time.

Up on the top of the monument, above the drums, the bronze angel holds up her wreath against the blue sky.

It's the most ordinary, beautiful afternoon. And it's five weeks to the Saint-Jean.

*page_break
*label week
*page_break
*if week = 1
  [b]The second week of May.[/b] The lilacs are in bud. Who do you spend it with?
*elseif week = 2
  [b]The third week of May.[/b] The lilacs are out. The whole city smells of them. Who do you spend it with?
*else
  [b]The last week of May.[/b] The lilacs are going brown at the edges. It's hot. Who do you spend it with?

*choice
  *if (laz_ok and (not(romance = "both"))) *hide_reuse #@lazare Lazare. A terrasse on Saint-Denis, the first warm night.
    *set time_lazare +1
    *goto m_lazare
  *if (dar_ok and (not(romance = "both"))) *hide_reuse #@dario Dario. The tam-tams, and after.
    *set time_dario +1
    *goto m_dario
  *if (laz_ok and dar_ok and ((romance = "both") or throuple_ready)) *hide_reuse #Both of them. They've been talking. They have a question.
    *set time_lazare +1
    *set time_dario +1
    *goto m_both
  *if (met_rose and (price != "rose")) *hide_reuse #@rose Rose. He sent a card. It says: [i]I'd like to ask for my yes.[/i]
    *set time_rose +1
    *goto m_rose
  *if (nadim_free) *hide_reuse #@nadim Nadim. He's free. He's been working up to asking you something.
    *set time_nadim +1
    *goto m_nadim
  *if (serge_free) *hide_reuse #@keyman Your father, at the shop. It's been open six weeks.
    *set time_serge +1
    *goto m_serge
  *hide_reuse #@aime Aimé. He called. He sounded strange.
    *set rel_aime +10
    *goto m_aime
  *if (fleurette_fate != "gone") *hide_reuse #@fleurette Fleurette. She wants to talk about the Saint-Jean.
    *set rel_fleurette +10
    *goto m_fleurette
  *if (mathis_mother) *hide_reuse #@mathis Mathis, on rue Sainte-Rose. With his mother.
    *set rel_mathis +10
    *goto m_mathis

*comment ---------------------------------------------------------------- LAZARE
*label m_lazare
*page_break
*portrait lazare smile
A terrasse on Saint-Denis, the first warm night of the year. Everybody in the city's out on a terrasse, in T-shirts, pale as fish, drinking white wine and blinking at the light at eight o'clock.

Lazare's in short sleeves. You've never seen his forearms in daylight. They're covered in small white scars, old ones, burns and cuts, from twenty-one years of hunting. He sees you looking and doesn't cover them.

"I want to ask you something," he says, over the second glass. "I've been thinking about it for a month."

*choice speak
  #"Ask."
    *set rel_lazare +5
  #"If it's to marry you, the answer's give me a year."
    *set wry %+10
    *set des_lazare +5
    He goes red to the ears. "It isn't," he says. "It isn't that." A pause. "Not yet."
"The Carillon," he says. "What's left of it. There are forty ringers in those towers who've done nothing else since they were children. Mathis's age. Younger." He turns his glass. "The Bourdon's dying. Everybody knows. And when he goes, they'll have nobody, and nothing to ring for, and nowhere to go."

He looks at you.

"I want to rebuild it," he says. "Not the Carillon. Something else. Ringers. For weddings, and funerals, and Easter, and the Saint-Jean. No bells rung over anyone's head. No children taken. Just..." He looks for the word. "Just ringing. Because it's beautiful." A breath. "Would you think I was mad?"

*choice speak
  #"I think it's the best idea anyone's had since 1967."
    *set ringer_plan true
    *set rel_lazare +15
    *set des_lazare +5
    He looks at you across the table on Saint-Denis, with the whole street going by, and his face does something you've never seen it do: it lights up, all the way, like a window at night.

    "Really?"

    "Really. You'd need a locksmith. Towers have a lot of doors."
    *remember lazare On a terrasse on Saint-Denis, he told you he wanted to rebuild the Carillon, with no children taken. You said you'd do the doors.
  #"I think you should do whatever lets you sleep at night."
    *set ringer_plan true
    *set rel_lazare +10
    "I've never slept at night," he says. "Not since I was ten." He almost smiles. "Maybe this would."
  #"I think you should get as far away from those towers as you can."
    *set rel_lazare -5
    *set guarded %+10
    Lazare looks at his glass. "Maybe," he says. "Maybe you're right." But he doesn't sound like he thinks so.
*set week +1
*goto week_end

*comment ---------------------------------------------------------------- DARIO
*label m_dario
*page_break
*portrait dario smile
After the tam-tams, when the sun's gone down behind the mountain and the drummers are packing up, Dario takes you up the path to the lookout on the east side, the one where you watched the sun come up at Easter.
*if mc_wolf
  It's the full moon. You can feel it under your skin like a second heartbeat. The first one since Easter. He's been waiting for it with you for a month.

  "Tonight," he says, "we run. You and me. The whole mountain." He's grinning, far too many teeth. "And then I'm going to ask you something. After. When you've got your breath back."
*else
  He sits on the stone wall with his legs hanging over the drop and pulls you down beside him and doesn't say anything for a long time.

  "I'm going to ask you something," he says finally. "And you can say no. I'm practising saying that, like Enzo does. [i]You can say no.[/i]" He makes a face. "It sounds stupid when I say it."
*page_break
"Move in," says Dario. "To the rectory. Above the sacristy. The room with the afghan." He's not looking at you. "It's got a bed that's actually on legs now. I bought legs. And the radiator doesn't bang, I got Réjean's cousin to look at it." He picks at the stone. "The pack likes you. I like you. I like you a lot. More than a lot. I'm not good at saying it but I'm saying it. Move in."

*choice speak
  #"Yes."
    *set moved_in "jude"
    *set rel_dario +15
    *set des_dario +10
    Dario looks at you. And then he whoops, a noise that goes out over the whole east end, and somewhere down the mountain a dog barks back, and then another, and he grabs your face in both his hands and kisses you on the stone wall of the lookout with the whole city lit up below you.
    *remember dario At the lookout, after the tam-tams, he asked you to move into the rectory. You said yes.
  #"Not yet. Ask me again after the Saint-Jean. After the fire."
    *set rel_dario +5
    He nods slowly. "After the fire," he says. "Okay. I'll ask you on the twenty-fifth. At breakfast." He bumps your shoulder with his. "Don't be dead."
  #"What about Enzo?"
    *set rel_dario +10
    *set wits +2
    Dario's quiet a while.
    *if laz_ok
      "I don't know," he says. "I ask myself every day. I love him. I've loved him since I was nine. And I love you." He looks at you, finally. "I'm asking you to move in. I'm not asking you to make me choose. I don't know if I can." A pause. "Maybe you could ask him too. What he thinks."
    *else
      "Enzo's dead," he says, very quietly. "I'm allowed to ask." He looks at the city. "He'd want me to ask."
*set week +1
*goto week_end

*comment ---------------------------------------------------------------- BOTH
*label m_both
*page_break
They take you to dinner. They've booked it. That's how you know it's serious: Dario never books anything, and Lazare's been looking at restaurant websites for a week.

It's a little Portuguese place on Rachel with a terrasse under a lilac tree, and they've got the table in the corner, and they both sit down across from you, side by side, like a job interview.

"We've been talking," says Lazare.

"We've been [i]arguing[/i]," says Dario. "For a month."

"We've been talking," says Lazare firmly. "And we'd like to ask you a question. Both of us." He looks at Dario. Dario looks at him. "Go on."

"No, you."

"You practised it."

"You wrote it down!"

Lazare takes a piece of paper out of his breast pocket, folded small, and unfolds it, and reads it, very seriously, with Dario's head on his shoulder to read along.

"[i]We'd like the three of us to be something. On purpose. Out loud. At Sunday lunch, at my mother's, and at the pack's table, and in front of whoever asks. Not a coat room. Not a lane. A thing with a name.[/i]" He looks up. "We haven't got a name for it yet. We thought you might."

*choice speak
  #"Yes. Out loud. In front of everyone. Starting with your mother."
    *set throuple_yes true
    *set throuple_ready true
    *set rel_lazare +15
    *set rel_dario +15
    *set des_lazare +5
    *set des_dario +5
    *set guarded %-10
    Dario lets out a breath like a man who's been underwater for a month. Lazare folds the paper up again, very carefully, along its creases, and puts it back in his pocket, over his heart, and doesn't say anything at all, because his face is saying it.

    "Starting with my mother," he says eventually. "Oh God. She's going to make so much lasagna."
    *remember lazare Under the lilac tree on Rachel, he read it off a piece of paper: a thing with a name. You said yes, out loud.
    *remember dario Under the lilac tree on Rachel, they asked you to be three on purpose. You said yes.
  #"I need to think about it. It's a lot. I love you both. I need to be sure."
    *set rel_lazare +5
    *set rel_dario +5
    They look at each other. Then back at you.

    "That's fair," says Lazare.

    "That's so fair it's annoying," says Dario. "Take a week. Take till the Saint-Jean." He grins. "We'll still be here. We've been here since we were nine."
  #"I don't think I can. I think... I think you two need to be you two. And I'll be here. Close. But not in the middle."
    *set rel_lazare +5
    *set rel_dario +5
    *set guarded %+10
    *set throuple_ready false
    Nobody says anything. The lilac tree drops a petal on the tablecloth.

    "Okay," says Dario, finally, and his voice is rough. "Okay. I get it." He looks at Lazare. Lazare's looking at you, with his face very still.

    "Close," says Lazare. "Not in the middle." He nods slowly. "You gave us back to each other. I suppose that means you get to decide where you stand." He reaches across the table and puts his hand on yours. "Stand close."
*set week +1
*goto week_end

*comment ---------------------------------------------------------------- ROSE
*label m_rose
*page_break
*portrait rose smirk
Le Mardi Gras in May.
*if invited_rose
  The clocks say eleven at night, the real eleven at night, and they tick. It's May in there now, like everywhere else. Rose has put lilacs on every table. He's opened the windows. You've never seen the windows open. You didn't know it had windows.
*else
  The clocks say [b]11:59[/b]. They've said it since Nuit blanche. Waiting.
Rose is at his table. He stands when you come in, and bows, and doesn't sit down.

"I'd like to ask for my yes," he says.
*if not(owe_rose)
  "I know you don't owe me one," he adds. "Not any more. That's rather the point." He smiles. "I'd like to ask for one anyway. Freely. And you can say no. I'd like that too, in a way. I've always liked it when people say no to me." A pause. "It's the only time I know they mean it."

He takes off his gloves. Both of them. Here, in his own club, in front of the dancers, who stop dancing. The light under his skin glows red and gold.

"On the Saint-Jean," he says, "an angel is coming to the mountain to judge the damned. I'm the most damned thing on this island. I've been damned since before there was an island." He holds out his bare hands. "I'd like to answer it. When it comes. I'd like to be the one who stands in front of it and says: [i]here I am. Judge me first.[/i]" His voice is very steady. "And I'd like you to say yes. That I can. That I'm allowed."

*choice speak
  #"Yes."
    *set rose_yes "answer"
    *set rel_rose +15
    *set des_rose +5
    *if owe_rose
      *set owe_rose false
    Rose closes his eyes.

    "Thank you," he says. "You have no idea what that costs me. Or what it's worth." He opens them. "Two hundred and eighty-six years. And the first yes I get, I spend on letting an angel burn me." He laughs, softly. "She'd have liked that. Rose Latulipe. She had a sense of humour."
    *remember rose In May, at Le Mardi Gras, he asked for his yes: to be allowed to answer the angel first. You said yes.
  #"No. Not that. I won't give you that one."
    *set rose_yes "no"
    *set rel_rose +10
    *set des_rose +10
    Rose goes very still. And then he smiles, the real one, the one from the dance floor.

    "[i]There[/i] it is," he says softly. "Oh, there it is again." He puts his gloves back on, slowly. "Then ask me for something else, darling. Ask me what you'd say yes to."

    "Dance with me. At the Saint-Jean. Before any of it."

    "Yes," says Rose, instantly. And then, astonished: "Oh. I said yes. I'm not the one who's supposed to say yes."
    *remember rose In May, at Le Mardi Gras, you refused him the yes he asked for. He said yes to a dance instead, and was astonished.
  #"Why? Why do you want to be first?"
    *set rose_yes "asked"
    *set rel_rose +10
    *set wits +2
    Rose looks at his bare hands for a long time.

    "Because I'm the only one on this island who's already been judged," he says. "In the beginning. By the best. I know what it's like." He looks up. "Everyone else you love would be meeting it for the first time. I'd like to be the one it meets first. So that by the time it gets to them, it's already had to look at something it can't forgive, and found out it can't burn it." A pause. "Devils don't burn, darling. We just go out, and come back in a hundred years. I'd like it to learn that on me."
*set week +1
*goto week_end

*comment ---------------------------------------------------------------- NADIM
*label m_nadim
*page_break
*portrait nadim smile
Nadim takes you to the place where the monorail used to go.

Parc Jean-Drapeau, on the island, on a warm night in May, with the Biosphère glowing blue through the trees and the river going by black and full of stars. The old Expo paths. There's a line of concrete pylons in the grass, cut off at the knee, where the monorail ran. He stands on the path between two of them and looks up at nothing.

"It came every four minutes," he says. "A hum and a rush, through the stone. For six months. I counted them." He looks at you. "I've been free for three months and I still count things. Cars on the bridge. Steps on stairs. Days."

He turns to you.

"I want to ask you something," he says. "It's the first question I've ever asked anyone where the answer could be no. So please, if it's no, say no. I'd like to hear what it sounds like."
*if zeina_free
  "Zeina says I'm an idiot," he adds. "She says it every day. In four languages."
"May I kiss you?"

*choice
  #"Yes."
    *set nadim_q "yes"
    *set kissed_nadim true
    *set des_nadim +20
    *set rel_nadim +10
    He kisses you.

    It's like being kissed by a woodstove, by July, by the sun on a hillside above a sea with no city beside it. His mouth is so warm. His hands on your face are so warm. The grass around your feet goes to steam in the May night. And he's shaking, very slightly, the whole time, like a man doing something for the very first time and finding out it's exactly what he hoped.

    When it's over he stands with his forehead against yours on the Expo path, between the pylons, breathing.

    "Yes," he says, wondering. "You said yes. And I could have heard no." He laughs, softly. "That's the difference. That's the whole difference."
    *remember nadim On the old Expo path, between the monorail pylons, he asked if he could kiss you. You said yes.
  #"No. Not like that. But ask me something else."
    *set nadim_q "no"
    *set rel_nadim +15
    Nadim stands very still.

    Then he smiles. Slowly. And it's the widest smile you've ever seen on him. "No," he says. "You said no. And the sky didn't fall." He laughs, the bonfire laugh. "Then may I walk you home? All the way to Verdun. Across the bridge. It's a very long way."

    "Yes."

    "[i]Yes,[/i]" he says, delighted, and offers you his arm.
  #"Ask me after the Saint-Jean."
    *set nadim_q "later"
    *set rel_nadim +5
    *set des_nadim +5
    "After," says Nadim. He nods. "Everyone says after." He looks at the pylons. "I'll count the days."
*set week +1
*goto week_end

*comment ---------------------------------------------------------------- SERGE
*label m_serge
*page_break
*portrait keyman smile
[b]SERRURERIE LACROIX & FILS. 1958. OUVERT.[/b] The sign's still crooked. You've both decided it's character.

It's been open six weeks. The phone rings all day. Half the calls are ordinary: a lockout on Verdun Avenue, a sticky deadbolt in the Plateau. And half of them aren't. A vampire in Westmount whose coffin lock is jammed. A lutin who's lost the key to his teapot. A ghost on Saint-Denis who wants the lock on her old apartment changed, so the new tenants stop coming in while she's trying to haunt.

Your father takes all of them. He whistles while he works. He's put the Polaroid on the wall behind the counter, in a frame, next to a photo of Aurèle from 1958 in front of the shop with his arms folded.

"I want to ask you something," he says, on the Friday, closing up. "For the Saint-Jean."

*choice speak
  #"Anything."
    *set rel_keyman +5
  #"If it's about the fire, I know."
    *set wits +2
"The angel," says your father. "It'll come to the mountain. To the fire. It said so." He turns the sign on the door to [b]FERMÉ[/b]. "I've heard it. My whole life, when I was young, I used to go up and put my hand on it. I didn't know why." He looks at you. "I'd like to be there. With you. I'd like to sing it the song, with you. The two of us. The way your grandfather meant it to be sung."

*choice speak
  #"Yes. The two of us."
    *set rel_keyman +15
    He puts his hand on the back of your neck, the way he did when you were nine, and leaves it there.
    *remember keyman At the shop, closing up, he asked to sing the song with you at the Saint-Jean. The two of you.
  #"No. Stay home. I just got you back."
    *set rel_keyman +5
    *set guarded %+10
    He looks at you, and keeps looking. "I just got you back too," he says quietly. "That's why I'm asking."
*set week +1
*goto week_end

*comment ---------------------------------------------------------------- AIMÉ
*label m_aime
*page_break
*portrait aime neutral
Aimé's sitting on the steps of Bélanger & Fils on Wellington when you get there, in his shirtsleeves, in the sun, with his tie off. You've never seen Aimé with his tie off.

"I quit," he says. "The Line. The memories. Selling them." He looks at his hands. "I did it for twelve years. People came to me and I'd sell them their mother's last thought for a favor. Or a stranger's. And they'd pay." He looks up at the lilacs on the fence across the street. "The angel said [i]everyone who profited.[/i] I profited. Every Saturday on the Line." He swallows. "So I quit. On Easter Monday. I haven't told anybody. I wanted to tell you first."

*choice speak
  #"I'm proud of you, Aimé."
    *set aime_quit true
    *set rel_aime +15
    Aimé looks at you. His eyes behind his glasses fill up, and he takes his glasses off and wipes them on his shirt, which makes it worse.

    "Nobody's ever said that to me," he says. "My dad says [i]good job[/i]. It's not the same."
  #"Will it be enough? If the angel comes for you?"
    *set aime_quit true
    *set rel_aime +10
    *set wits +2
    "I don't know," says Aimé. "I don't think so. I'm still a ghoul. I still eat the dead." He puts his glasses back on. "But I'd like to be standing on the right side of the fire when it comes. Even if it burns me."
  #Sit down on the step next to him. Put your shoulder against his.
    *set aime_quit true
    *set rel_aime +10
    You sit down next to him. You don't say anything. After a while he leans on you, just slightly. You sit on the steps of the funeral home in the sun and look at the lilacs.
*set week +1
*goto week_end

*comment ---------------------------------------------------------------- FLEURETTE
*label m_fleurette
*page_break
*portrait fleurette smile
"The screens," says Fleurette.

She's on top of the jukebox at Chez Normande, in a white gown, for summer, and a white wig. "On the Saint-Jean. There's a stage on the mountain, and a fire, and screens. Big ones. Normande's nephew is doing them again. He owes her for a car." She leans down. "And I've been thinking, chéri. About the angel. And the fire. And what it said. [i]The dead.[/i]"

"You think it's coming for you."

"I know it is. I'm dead, darling. I've been dead since 1977. The dead who stay. The ones nobody's said goodbye to properly." She lifts her chin. "So I'd like to go before it gets here. On my own terms. With my name in lights. At the Saint-Jean, on every screen, in front of half a million people. And I'd like to sing, on the way out." She looks at you. "One song. For whoever's standing in front of that fire. So they're not afraid."
*if fleurette_plan
  "You promised me once," she adds. "Nuit blanche. And you'd have done it, I know. I just had a feeling it wasn't the right night." She smiles. "This one is."

*choice speak
  #"Your name, on every screen. And your song. I promise."
    *set fleurette_sj true
    *set rel_fleurette +15
    Fleurette puts her hand over her mouth. "Oh, chéri," she says. "Oh, don't. The lashes."
    *remember fleurette In May, she asked for the Saint-Jean: her name on every screen, one song, and then to go. You promised.
  #"Stay. Don't go. We'll stand in front of the fire together."
    *set rel_fleurette +10
    Fleurette takes a long look at you. "You sweet, stupid boy," she says softly. "All right. I'll stand with you. But if it comes to it..." She looks at the jukebox. "If it comes to it, I'd like the screens."
    *set fleurette_sj true
*set week +1
*goto week_end

*comment ---------------------------------------------------------------- MATHIS
*label m_mathis
*page_break
*portrait mathis smile
The red door on rue Sainte-Rose has a new doormat that says [b]BIENVENUE[/b] and a kid's bike chained to the railing with a lock you gave him. Mathis opens the door before you've knocked.

He's grown. Two inches since March, his mother says. He's had a haircut: no more pudding bowl. He's in a Céline Dion tour T-shirt three sizes too big that Luc from the pack gave him, and that he's very proud of, and that you decide not to say anything about.

His mother, Julie, makes you coffee in the kitchen, and tells you, in a low voice while Mathis is showing you the lock on his bike, that he still wakes up at 3:33. Every night. Even since the bells stopped ringing at 3:33.

"He says he's listening," she says. "For it. The big bell."

Later, on the back step, Mathis says: "It's going to come to the mountain. At the Saint-Jean. I can hear it getting closer. It's not crying any more." He looks at you with his enormous eyes. "It's angry. Really angry. But under the angry, it's still sad." He picks at the step. "Somebody should tell it we're sorry. All of us. Not just the people who did it."

*choice speak
  #"Maybe you should. You're the one who hears it."
    *set rel_mathis +10
    Mathis thinks about it very seriously. "Maybe," he says. "If I'm allowed to stay up."
  #"That's a really good idea, Mathis. I'll tell it. I promise."
    *set rel_mathis +10
    *set wits +2
    "That's three promises," says Mathis. "You've kept two." He holds out his hand. "Shake."
*set week +1
*goto week_end

*comment ---------------------------------------------------------------- WEEK END BEATS
*label week_end
*if week = 2
  *goto beat_bourdon
*if week = 3
  *goto beat_club
*goto beat_song

*label beat_bourdon
*page_break
*portrait bourdon sad
*mood bells
The Bourdon comes to see you at the end of the week.

He comes to the shop, or your door. On foot. Eighty-one, in his cassock, with a cane now, in the lilac-smelling heat, and he stands on the doorstep and asks if he can sit down.

He sits at your kitchen table. You make him Red Rose, because it's what's in the cupboard. He drinks it with both hands round the cup.

"I'm dying," he says. "The doctors say the summer, perhaps. I'd like to be honest with you, because I wasn't, for a long time."

*choice speak
  #"I'm sorry, Father."
    *set rel_bourdon +10
    "You shouldn't be," he says. "But thank you." He looks at the cup. "You're a better man than I raised any of them to be."
  #"Why are you telling me?"
    *set wits +2
    "Because I have one thing left to ask," he says. "And no right to ask it."
  #"Good." Say it, and mean it, and watch him take it.
    *set rel_bourdon -5
    *set nerve +2
    He takes it. He nods, slowly, as if you've given him a penance. "Yes," he says. "Good. That's fair."
"On the Saint-Jean," says the Bourdon, "the angel will come to the mountain. To the fire. To judge." He puts the cup down. "It will judge me first, I think. I've earned that. I'd like to be there. I'd like to stand in front of it and let it." He looks at you. "And I'd like, if you'll allow it, to ring Jean-Baptiste one last time before it does. Not the changes. Not to drown it. Just once. To call it home." His voice cracks. "I rang over it for fifty-nine years. I'd like to ring it once, for it."

*choice speak
  #"Yes. Ring it. Call it home."
    *set bourdon_ask "yes"
    *set rel_bourdon +15
    The old man closes his eyes. "Thank you," he says. "Thank you." He sits for a long time at your kitchen table with his eyes closed and his hands round the cup of Red Rose.
    *remember bourdon In May, at your kitchen table, dying, he asked to ring the great bell once at the Saint-Jean, to call the angel home. You said yes.
  #"No. You don't get to be forgiven by an angel. You'll stand in front of it like everyone else."
    *set bourdon_ask "no"
    *set rel_bourdon -10
    He nods slowly. He doesn't argue. "Like everyone else," he says. "Yes. That's fair too." He gets up, with his cane. "I'll be there. At the back."
  #"Ask Lazare. Not me. He's the one you owe."
    *set bourdon_ask "lazare"
    *set rel_lazare +5
    *set wits +2
    The Bourdon looks at you for a long time. Then he nods. "Yes," he says. "Yes. You're right." He stands. "I'll ask him. He'll say no." A pause. "I'll ask him anyway."
*goto week

*label beat_club
*page_break
*mood oxblood
*if zeina_free
  The Club sends no cards in May.

  They don't need to. On the Line, the Conductor tells you, they've been buying up iron again: every chain from here to Trois-Rivières. And they've been asking about fires. What burns, and what doesn't, and what a djinn is, if you throw one on a bonfire on the feast of the Baptist.
  *if nadim_out
    Nadim hears. His face goes very still. "They'll come for Zeina," he says. "Or me. On the Saint-Jean. When the angel's there, and everyone's looking up." He looks at you. "They want to make a new Hush out of the angel's own fire."
*else
  The Club sends a card in May.

  [i]Monsieur Lacroix. We still have the lamp. We still have the lady. On the feast of the Baptist, when the whole island is at the fires and the angel is looking at the damned, we will do what we could not do at Easter. We would so much prefer to do it with your hand.[/i]

  [i]—For the Club.[/i]
  *if nadim_out
    Nadim reads it over your shoulder. The paper catches fire in your hand, all at once, and you drop it, and it burns to nothing on the lino.

    "Zeina," he says. That's all.
*goto week

*label beat_song
*page_break
*mood white
*if n9_fell = "gisele"
  At the end of May, Thérèse calls you to the laundromat.

  She's sitting at the card table under the dryers with Gisèle's purple cardigan over her shoulders and something in her hand: a tuning fork. Old. Brass. "It was in her pocket," she says. "When she went up in the canoe. I took it out. I don't know why. She'd have wanted you to have it." She holds it out. "She said, a long time ago, [i]if Aurèle's grandson ever comes asking, tell him what the song is for.[/i] So I'm telling you."
*else
  At the end of May, Gisèle calls you to the laundromat.

  She's sitting at the card table under the dryers with a du Maurier and a tuning fork. Old. Brass. "His," she says. "Aurèle's. From 1966. He left it on my kitchen table the night before he built the lock, and said, [i]keep this, Gisèle, so I can't use it again.[/i]" She holds it out. "Your turn."
*if know_song_name
  You know already, some of it. You heard it in March. But you listen again. You listen to all of it.
The six notes of the Lacroix song aren't a song. They're a name.

The partials of the great bell of Notre-Dame. The notes inside the note: Jean-Baptiste's own voice, taken apart with a tuning fork in the summer of 1966 and written down in pencil in a notebook, and built into a lock so that nothing of the Veillée could ever open it, because nothing of the Veillée can sing an angel's name without burning.

"But a mortal can," says the voice across the card table. "A Lacroix can. And on its feast day, sung to its face, by the right mouth, the name can do three things." Fingers held up, one by one. "Calm it. Bind it. Or set it free."

"What's the difference?"

"Calm, and it listens. Bind, and it's yours: it'll do what you say, and hate you for it, and it'll wait, the way angels wait, for a thousand years if it has to. Free," a long pause, "and it goes home. For good. Wherever angels go. And it takes its judgment with it, and its fire, and its voice, and there's no great bell on this island any more, only eleven tons of bronze." The tuning fork strikes the edge of the washer. It sings. "Which one is up to you. And what you've got in you when you sing it."
*set know_song_name true
*set lore +5
*codex angel
*remember gisele At the end of May, at the laundromat, with Aurèle's tuning fork: the song can calm it, bind it, or set it free.

*page_break
The lilacs are over. The first week of June comes in hot and green, and the whole city's out on its balconies at night.

Three weeks to the Saint-Jean.

*page_break Chapter Sixteen
*goto_scene ch16
`);
