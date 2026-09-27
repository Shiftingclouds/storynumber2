NB.scene("ch14", String.raw`
*mood snow
*chapter 14 The Thaw [morning]
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
[b]PART THREE: THE LONG LIGHT[/b]

April.

The ice is gone from the river. It went on Easter Monday, all at once, the way it always does, a groaning in the night and then the morning black and open and moving, floes going down to the sea as big as houses. The snowbanks shrink into grey ridges full of a winter's worth of lost mittens. The first crocuses come up in the park on Wellington through the gravel. It's still cold. It's always still cold. But the light's back, and it stays till seven.

And the city's frightened.
*if world = "held"
  Not the sleepers. The sleepers heard thunder at noon on Easter Sunday and a lot of windows cracked, and Hydro-Québec is investigating. It's the Veillée that's frightened. You can feel it on the Line, at Saint-Jude, at Chez Normande: the damned, counting days. Eleven weeks. Ten. Nine.
*else
  Everybody. The whole city heard it. [i]On the feast of the Baptist, I will baptise this island with fire.[/i] The Archbishop's been on television every night. There are people leaving: moving to Laval, to the South Shore, to Ottawa, off the island. There are wolves who won't go out in daylight. There are ghosts who've stopped haunting. And there are men in Hochelaga and Rivière-des-Prairies with shotguns and a list, who've decided that if the angel's coming for the damned, they'll save it the trouble.

*page_break
*portrait lucille neutral
On the fifteenth of April, at two in the morning, the phone rings.

It's Ghislaine. "She's asking for you," she says. "Now. She's very clear. She says..." A pause. "She says it's the ice. She says you'll know."

You know.
*if serge_free
  You call your father. He's in the van before you've finished the sentence.
*if keyman_fate = "gardien"
  *goto meme_fort_ask
*goto meme_room

*label meme_fort_ask
*page_break
She's awake in her chair by the window when you get there, in her pink cardigan, with the little gold cross, looking at the dark river.

"{name}," she says. "Take me to him."

"Mémé..."

"To Serge. At the fort. I know where he is. I've known since Nuit blanche. I heard him humming, at three thirty-three, from under the island." She holds out her hands. "Take me to my son. I won't see another Thursday."

*choice
  #Take her. Wheelchair, blanket, the van, the bridge, the fort. Whatever it takes.
    *set meme_fort true
    *set rel_lucille +15
    *set rel_keyman +10
    *set nerve +2
    *goto meme_fort
  #"Mémé, it's four degrees and you're eighty-eight. I'll bring you his voice. I'll call him from the stairs."
    *set rel_lucille +5
    *goto meme_room

*label meme_fort
*page_break
Ghislaine helps you get her into the van. She doesn't say a word about the rules. She tucks a second blanket round Mémé's knees and a hot-water bottle under it, and kisses her on the forehead, and says, "Bonne nuit, Madame Lacroix," in a voice that tells you she knows.

The Jacques Cartier Bridge at three in the morning, empty, green lights, the black river under it full of floes going out to sea. Mémé looks at it the whole way over. "Aurèle drove me over this bridge in 1958," she says. "On our wedding night. To the island. We had a picnic by the fort." She smiles. "He didn't tell me what he'd build there. He didn't know yet."

You carry her down the stairs of the powder house. She weighs nothing. She holds on to your neck with her arms like a child.

At the bottom, in the brick room, in three bands of brass, glowing faintly gold, your father opens his eyes.

"Maman," he says.

*page_break
You sit her on the bottom step, wrapped in both blankets, and she looks at her son in the bands for a long time.

"You promised him," she says at last. "Papa. On the Bible. You'd never come back here." Her voice is scolding and relieved at once, the way it was on the night you first came to see her in February. "And look at you. Standing in it."

"I know, Maman." He's smiling. He's crying. "I'm sorry."

"You're always sorry." She holds out her hand, toward the bands, toward him. "Come here. Come here, my good boy. Even when you were bad."

He can't come out. So you do it: you take her hand, and you take his, through the bands, where the brass is hot, and you put them together. Mother and son, with a Lacroix hand between them, holding on.

She hums. He hums. You hum. Three Lacroix, at the bottom of the stairs, at half past three in the morning.
*remember keyman At half past three in the morning, you carried Mémé down the stairs to him, and put their hands together through the bands.
*remember lucille You took her to the fort, over the bridge Aurèle drove her across on their wedding night, to see her son.
*goto meme_end

*label meme_room
*page_break
She's awake in her chair by the window when you get there, in her pink cardigan, with the little gold cross, looking at the dark river.
*if serge_free
  Your father goes in first. He kneels down on the linoleum beside her chair and puts his head in her lap, the way he did in February, and she puts her hands on his hair.

  "My good boy," she says. "Even when you were bad."
"{name}," she says, and holds out her other hand. "Sit."

You sit.

She talks. She's very clear. She talks about Rielle Street, and the river going to confession, and a dance at the Palais d'Or in 1956 where a shy locksmith who couldn't dance danced with the wrong girl all night, and then, two years later, with the right one.
*if n9_fell != "gisele"
  "Gisèle Pépin," she says. "She sent a cake to his funeral. With something in it. Nobody ate it." She almost laughs. "Tell her I knew. Tell her I always knew. Tell her he loved her first, and me longest, and that's not the same, and it doesn't have to be."
*page_break
*label meme_end
*page_break
"The key," says Mémé.
*if hush_fate = "remade"
  "It's in the lock, Mémé. Where he meant it."

  "Good," she says. "Then I'll tell him where it is." She closes her eyes, smiling. "He'll be so annoyed he didn't think of it himself."
*elseif meme_key_back
  She touches it, at her throat, behind the little gold cross. She's been wearing it since March. She takes it off, with fingers that shake, and puts it in your palm, and closes your hand.

  "It was never mine," she says. "He said, give it to whoever opens the door. You opened the door." She holds your fist between her two hands. "You'll need it. On the feast. I can feel it. You'll need to ask something a question."
  *set meme_key_back false
*else
  You take it out from under your shirt. The little gold cross, and behind it the small brass key. You hold it out to her.

  She looks at it for a long time. She doesn't take it.

  "No," she says. "I asked once more. That was the once." She closes your hand over it. "It was never mine. Keep it. You'll need to ask something a question, on the feast. I can feel it."

She's tiring. You watch the light go out of her eyes, slowly, the way the colour goes out of the sky.

"Be frightened and right," she says. "Remember."

"I'll remember, Mémé."

"I know you will." She smiles. "You're the one who remembers. You're the only one of us who never forgot anything." Her eyes close. "Hum it for me."

You hum it. Six notes, down and up and held.

She dies at twenty past six in the morning on the fifteenth of April, with the sun coming up over the river and the last of the ice going out to sea, holding your hand.
*set meme_gone true
*remember lucille She died at twenty past six in the morning on the fifteenth of April, with the ice going out, holding your hand.

*page_break
*mood white
The funeral's at Bélanger & Fils, on Wellington, on a Saturday.

Aimé does it. He wears his good tie. He's been crying since Thursday and he says he'll stop when it's over and he doesn't.

It's full. You didn't think it would be. You thought it'd be you and Ghislaine and the night staff. But they come.
*if serge_free
  Your father, in the front row, in a black suit from the Salvation Army on Wellington that's too big in the shoulders, holding your hand.
*elseif keyman_fate = "gardien"
  Your father can't come. He's keeping the fort. But at eleven o'clock, when the service starts, you'd swear you feel it: a warmth, like a hand on the back of your neck, all the way from under the island.
*if laz_ok
  Lazare, beside you, very straight, in his borrowed suit, who says the Latin under his breath along with Aimé, every word, without meaning to.
*if dar_ok
  Dario, at the back with the whole pack, twenty people in their good clothes who never met her, because you're one of theirs now, and that's what the pack does.
*if n9_fell != "gisele"
  And, at the very back, alone, in her purple cardigan, with an unlit du Maurier in her fingers, Gisèle Pépin.

  She comes up to you after, at the door, in the spring rain. She doesn't say anything for a long time.

  "I sent a cake to his," she says finally. "Nobody ate it." She looks at the hearse. "This time I came."

  *choice speak
    #"She said to tell you: he loved you first, and her longest, and it doesn't have to be the same."
      *set rel_gisele +20
      *set lore +2
      Gisèle Pépin stands very still on the sidewalk on Wellington in the rain.

      Then she puts the du Maurier in her mouth, and doesn't light it, and puts her hand on your face, her hand like a bundle of twigs, for a second.

      "Lucille," she says. "Of course she knew. She always knew everything." Her eyes are wet behind the cat's-eye glasses. "All right, Lacroix. All right. I forgive the name." She takes her hand away. "Not him. Never him. But the name."
      *remember gisele At Mémé's funeral, she forgave the Lacroix name. Not him. The name.
    #Don't say anything. Hold the door for her.
      *set rel_gisele +10
      You hold the door. She goes through it, and stops, and looks back at you. "You're a good boy," she says, grudgingly. "Lucille did well."
*if nadim_out
  And Nadim, at the back, in his 1967 suit, who never met her. He tells you afterward that he knew her voice. Every Thursday, for fifteen years, your father told him about Lucille. "I heard about her date squares," he says. "For fifteen years. I'd have liked, once, to taste one."

  You give him the last one from the tray. He eats it with his eyes closed.
*if fleurette_fate != "gone"
  Fleurette isn't there. She can't leave the jukebox. But when you get home, the compact's open on your kitchen table, and there's a lipstick kiss on its mirror that wasn't there this morning.
At the end, everyone sings. Not a hymn. Six notes, down and up and held, over and over, a whole room of people who've learned it from you without knowing they have.

*page_break
*mood snow
*comment ---------------------------------------------------------------- LAZARE'S PARENTS
*if laz_ok
  *goto parents
*goto nadim

*label parents
*page_break
*portrait lazare neutral
*if world = "held"
  In the held city, Rosa and Vito Ferrante still don't know they have a son.
  *if ch10_lunch = "jarry"
    Lazare goes to lunch on Sundays anyway. Every Sunday since March. Rosa feeds him. She doesn't know why she does. She calls him [i]caro[/i] and asks about his work and sends him home with foil packets of lasagna, and every Sunday, at the door, she looks at him for a long time with her son's eyebrows, as if she's about to remember something, and doesn't.
  *else
    Lazare goes and stands on the sidewalk across the street from the duplex on Jarry, some Sundays. He doesn't knock.
  In the last week of April, on the 193 bus, he asks you.

  "Should I tell them? Properly. Everything. The Carillon, the Bourdon, the bell." He looks out of the window at the fig trees, unwrapped now, bare and grey and alive. "The Hush won't let them keep it. They'll forget by the next morning. I'd be telling them every Sunday for the rest of their lives." A pause. "Or I could just be the young man who comes for lunch."

  *choice speak
    #"Tell them. Every Sunday if you have to. They deserve to hear it, even if they can't keep it."
      *set rosa_knows true
      *set rel_lazare +10
      *set nerve +2
      He tells them. That Sunday, and the next, and every Sunday after. Rosa cries every time. Every time, she forgets by Monday. And every time, on Sunday, she starts to cry a little earlier, before he's even said it, at the door, as if something in her remembers the crying even if it can't remember why.
    #"Be the young man who comes for lunch. That's a good thing to be. That's a son, whatever they call it."
      *set rel_lazare +10
      *set wits +2
      Lazare looks at you for a long time. Then he nods. "A son, whatever they call it," he says. He looks out of the window. "My mother calls me [i]caro[/i]. It means dear. It's what she called me when I was small." He almost smiles. "It'll do."
    #"Ask them. Not me. Ask your mother if she wants to know."
      *set rel_lazare +5
      *set rel_rosa +10
      He asks her. That Sunday, in the kitchen, with flour on her hands. [i]Signora, if there was something about your life you'd forgotten, something that would make you cry every Sunday, would you want me to tell you?[/i]

      Rosa looks at him for a long, long time. Then she wipes her hands on her apron and sits down at the table.

      "Tell me," she says. "Tell me every Sunday. I'll make the lasagna."
      *set rosa_knows true
*else
  In the waking city, Rosa and Vito Ferrante know they have a son.

  They know too much, some days. They know the Carillon took him. They know the Bourdon's name. Vito went down to Place d'Armes the week after Easter with a crowbar from his basement and stood in front of La Persévérance for six hours, shouting up at the tower in Italian, until Lazare came and took him home.

  "He said he was going to break the door down," Lazare tells you, on your couch, that night. "Sixty-seven, with his knees. With a crowbar." He puts his face in his hands, and you realise he's laughing. "My father tried to break into a church for me."
  *set rosa_knows true
  *set rel_lazare +5
*remember lazare In April, on the 193 bus, he asked you whether to tell his parents.

*label nadim
*page_break
*if zeina_free
  *goto zeina
*goto debt

*label zeina
*page_break
*portrait nadim smile
Zeina lives at the laundromat.

Nobody decided it. She just did. She came out of her lamp in the snow in Honora's garden on Holy Saturday and hit her brother and held on, and then Thérèse drove her to Pointe-Saint-Charles in the canoe, and she walked into Buanderie Pépin and looked at the dryers going round with their round glass eyes and said something in a language older than the cedars that Nadim, wincing, translates as [i]finally, a place with some sense[/i].

She's smaller than her brother, and fiercer, and her smoke is darker, with gold in it like sparks. She's taken over the card table. She plays cribbage with Thérèse for money and wins. She's told Yolande her lipstick is the wrong colour, and been right. And she looks at you, when you come in, the way a cat looks at a man who's just given it back its kitten.

"You're the one," she says. Her English is from Marseille, 1960, very precise. "The locksmith. The creditor."

*choice speak
  #"I'm just the one who opened the door."
    *set rel_nadim +5
    Zeina looks at you for a long time. "In my country," she says, "that's what we'd have called a king." She turns back to her cribbage. "Sit. Thérèse is cheating. Watch her for me."
  #"I'm his friend."
    *set rel_nadim +10
    *set des_nadim +5
    Zeina glances at her brother, across the laundromat, who is pretending very hard not to listen, and failing, and going faintly gold at the edges. She looks back at you, and something in her fierce face softens, very slightly.

    "Yes," she says. "I can see that." A pause. "Be careful with him. He's been in the dark a long time. He doesn't know what a friend is for yet."
*goto debt

*label debt
*page_break
*if (nadim_fate = "held") and (not(price_freed))
  You go to the fort on a Thursday at the end of April, with the transistor radio, the way you always do now.
  *if zeina_free
    Zeina comes with you. She sits on the bottom step beside you, very straight, and looks at her brother in his three bands of brass for a long time without saying anything. Then she says something in the old language, fierce and fast, and his coals flare, and he laughs. You don't ask.
*else
  At the end of April, on the first warm night, you walk with Nadim along the river in the old port. He's wearing a sweater Aimé lent him over the 1967 suit. He's learned to use a phone. He sends you photographs of things he's never seen: a Couche-Tard at night, a skateboarder, a cat on a windowsill in Mile End, with no text, just the photograph, like a man showing you a jewel.
*if nadim_free
  *goto april_end
*portrait nadim neutral
"Creditor," says Nadim. "Can I ask you something?"

It's the first time he's ever asked you anything. You realise that as he says it. Two months. He's answered everything. He's never asked.

"The debt," he says. "What I owe you. The wishes." He looks at his hands. "While I owe you, I can't say no to you. Not really. Not to anything. Every time you ask me something, there's a voice in me that says [i]you have to.[/i]" He looks at you. "It's the voice I had in the dark for sixty-eight years. I'd like it to stop."
*if wishes >= 1
  In your pocket, the curls of smoke are warm. You've got some left. Moments you could take back.
*else
  You don't have any wishes left. You spent them. But the debt's still there; you can feel it, like a thread between you and him, tied at both ends.

*choice
  #"I release you. The debt. All of it. Whatever's left." Say it, and mean it.
    *set nadim_free true
    *set wishes 0
    *set rel_nadim +20
    *set des_nadim +10
    *set guarded %-10
    You say it. [i]I release you.[/i] You feel it go: a thread snapping, somewhere under your ribs, and the warm weight in your pocket going cold and then nothing.

    Nadim stands very still.

    Then he laughs. The real laugh, like a bonfire catching, and the air goes hot for ten metres around him, and a man walking his dog on the path stops and stares.

    "No," says Nadim. He's testing it. "No. No." He's laughing and crying at once. "Ask me something. Anything. Ask me to do something."

    "Nadim, will you get me a coffee?"

    "[i]No,[/i]" says Nadim, with enormous joy, and then goes and gets you a coffee anyway.
    *remember nadim In April, by the river, you released his debt. He said no to you for the first time, and then got you a coffee anyway.
  #"Not yet. I'm sorry. I might still need them. For June."
    *set rel_nadim -5
    *set wits +2
    Nadim nods slowly. He doesn't argue. He can't argue. That's the whole point.

    "Of course," he says. "Of course. June." He looks at the river. "I understand." You can hear that he does. You can also hear the voice in him that says [i]you have to[/i].
  #"Ask me again at the Saint-Jean. After. If there's an after."
    *set rel_nadim +5
    "After," says Nadim. He smiles. "Everyone always says after." He looks at you. "I'll hold you to it, creditor. I've got a very good memory. It's the only thing they couldn't take."

*label april_end
*page_break
The last day of April. You're sitting on the back step of your building in Verdun in a T-shirt for the first time since October, with a coffee, and the lane's full of kids on bikes, and somebody's got their windows open and a radio on.

On the lilac bush by the dépanneur, there are buds. Hard and green and tight. In three weeks, the whole city will smell of them.

Eight weeks to the Saint-Jean.

*page_break Chapter Fifteen
*goto_scene ch15
`);
