# NUIT BLANCHE: Storyboard

Nine nights, from Friday 20 February to Saturday 28 February 2026 (Nuit blanche). Each night is a chapter and gets a
pixel-art title card. Nights Five and Six exist in two versions, depending on the midpoint split. A playthrough is
about 80,000 words; about 105,000 are written in total.

## Stats

| Kind | Variables | Notes |
|---|---|---|
| Voice & temper (opposed, fairmath) | `wry` (Wry ↔ Earnest), `reckless` (Reckless ↔ Wary), `guarded` (Guarded ↔ Open) | Start at 50. Dialogue registers move them. |
| Skills (0–100) | `hands`, `nerve`, `charm`, `wits`, `lore` | The locksmith starts high in Hands; Lore starts at 0 (the Fool). Night One's background adds +15 to one skill. |
| Regard (−100..100) | `rel_lazare`, `rel_dario`, `rel_rose`, `rel_nadim`, `rel_fleurette`, `rel_aime`, `rel_gisele`, `rel_honora`, `rel_ruari`, `rel_clarke`, `rel_keyman`, `rel_bourdon`, `rel_agathe`, `rel_manon` | Shown as pixel hearts: every 20 points is one heart, and negative values show broken hearts. |
| Desire (0–100) | `des_lazare`, `des_dario`, `des_rose`, `des_nadim`, `des_ruari` | Shown as flames, for romanceable characters. |
| Wishes | `wishes` (0–3), `wishes_used` | The undo mechanic, and the finale's great wish. |
| Favors | `favor_aime`, `favor_clarke`, `favor_gisele`, `favor_rose`, `favor_honora`, `favor_manon` | Owed *to* you. `owe_rose` and `owe_clarke` are debts you owe. |
| The Hush | `hush` (100 → 0) | The clock. The header gauge. |

Checks follow Choice of Games conventions: `*selectable_if (hands >= 50)` greys an option and shows *"Requires Hands 50"*.

## Features by night

| Night | New feature | How the story introduces it |
|---|---|---|
| 1 | Title cards, **portraits** on meeting people, stats, the **look creator** (your portrait), **phone texts** at the end of the night | Your van, your face in the rear-view mirror, your phone buzzing at dawn |
| 2 | **Journal**: people with **hearts**, **"They'll remember that"**, **favors**, **wishes (undo)** | The market runs on owing; Nadim pays his first debt |
| 3 | **The Small Hours** hub (six hours, and you can't do everything), **Ask Fleurette**, **clues** | "The dead hear everything said in bars." |
| 4 | **The dance** (a contest meter), the **deduction board**, **the Thaw**: hushed journal lines melt | Rose's party; midnight |
| 5–6 A | **Change-ringing**: a pattern puzzle in the bell tower | Silencing the carillon so the angel can speak |
| 5–6 B | **The chasse-galerie**: an altitude gauge and forbidden words | Dario can't stop swearing |
| 7 | **The accusation**: your deductions become weapons | The Compagnie's dinner |
| 8 | **The plan**: assign companions to roles (portrait cards, fit × loyalty) and **the last night** | The eve of Nuit blanche |
| 9 | The **great wish**; **Morning** (epilogue with portraits); the **story map** (with *Reveal all paths*); **New Game+** | The end |

---

## Night One: The Door (Friday)

*Mood: snow. Card: the fort's powder-magazine door in snow, the Jacques Cartier bridge lit behind it.*

1. **2:47 a.m.**, the van outside a dépanneur on Wellington. The phone rings: *"Le fort a besoin de son gardien."*
   These were his father's words, whenever Serge went out on a night job. The caller offers $2,000 under a brick.
   - **Name** (Julien, Sam, Gabriel, Max, or type one). **Your look** (the portrait creator).
   - **Your twenties**: boxing at the Wellington gym (+Nerve), bartending in the Village (+Charm), nothing but the shop
     (+Hands), true crime and night classes (+Wits).
   - First register choice: how you answer the phone.
2. **The bridge.** Snow, La Ronde's dead roller coaster, the Farine Five Roses sign. Choose to go on or to turn back.
   Turning back twice leads to the early ending **Sleep Through It**.
3. **The door.** Aurèle's maker's mark: a small cross and *A.L. 1967*. Open it by finesse (Hands) or by force (drill);
   either way it wants you. The vault holds brass bands of script and a man made of banked coals: **Nadim**. *"What
   year is it?" / "Is the monorail still running?"* He tells you of the debt. Choose how to unchain him (register choice,
   `rel_nadim`); he goes up as smoke.
   *They'll remember:* Nadim remembers how you treated him in chains.
4. **3:33 a.m.: every bell in Montréal rings.** Lazare and Sister Agathe cross the snow. He rings a bell at your temple
   and nothing happens. *"Ring it again."* Interrogation: truth, lie, joke or flirt. `rel_lazare`, `des_lazare`.
   *They'll remember:* Lazare remembers whether you lied to him.
5. **Wolves on the ice.** Dario (Canadiens toque, parka, not much else) and Manon. The rivals' banter is venom with
   subtext. Choose: go with Lazare, go with Dario, run for the van, or play them against each other (Wits or Charm).
   `n1_with` = lazare | dario | ran | played. *They'll remember.*
6. **5 a.m., Chez Normande.** The jukebox plays Diane Dufresne by itself. **Madame Fleurette** is sitting on it. She sees
   you seeing her. The Veillée is explained (codex: veillee, sleepers, hush).
7. **Texts at dawn:** an unknown number (*"Merci."*), Dario (*"got ur number off ur van lol"*), Lazare (*"Do not
   leave the island."*). `hush` 88.

Clues: `c_phrase` (the caller used your father's phrase).

## Night Two: The Missing Line (Saturday)

*Card: a ghost métro platform with stalls and lanterns.*

1. **The care home calls.** Mémé Lucille is agitated and asking for "Serge." At her bedside she's lucid: *"You opened
   it. Aurèle said a Lacroix would open it, and a Lacroix would have to close it."* (`c_close`, codex `lacroix_lock`.)
   She calls you Serge. A tender scene.
2. **The Missing Line.** Fleurette leads you through the oven room at the back of a 24-hour bagel bakery on
   Saint-Viateur and down to a station that doesn't exist. The market: lutins braiding hair charms, feux follets in jars,
   a vampire sommelier, bottled winters, a wolf furrier. *"On the Line you pay in owing."* (codex `favors`,
   `missing_line`; the **favor** mechanic.)
   - **Aimé** recognizes you from Secondaire 3. Kindness earns `favor_aime`.
   - **The Conductor** knew your grandfather. He offers a job, a strongbox to open, for a favor. Accept (`favor_clarke`),
     refuse, or negotiate.
   - **Ruari** delivers Honora's invitation. Flirting. The kandi bracelets are noted (`c_kandi_worn`).
   - **The Keyman** cuts you a key you didn't ask for (`has_key`) and hums six notes (`c_six_notes`).
3. **Nadim** is trying to buy back his **name-plate**, sold with him in 1958. Help by theft (Hands), bargaining (Charm),
   a con (Wits) or spending Aimé's favor. `plate_got`. Nadim pays the first wish: **the undo unlocks** (`wishes` 1).
   *"Your father came to my door every week for fifteen years."*
4. **A body in a service tunnel.** Mireille Caron, a Beaver Club housekeeper unmade in 1983, has a bell-shaped bruise at
   her temple and wolf hair in her fist (`c_bellmark`, `c_wolfhair`). Everyone blames the pack. Dario arrives, and
   the Carillon with him, allowed on the Line for a murder. Ask Aimé to taste her (`c_voice`: *"cold hands, a bell, a young
   man's voice: sorry, love"*). Take a sample of the hair (`took_hair`).
5. **The escort.** Lazare offers the Carillon's protection; Dario offers the pack's. Or you make them both walk you to
   the van (Charm or Bold), and see Dario fix Lazare's scarf and Lazare slap his hand away a second too late
   (`saw_scarf`). *They'll remember.*
6. **Texts.** Nadim can't text: he writes in the frost on your windshield. Ruari: *"Honora requests the pleasure."*
   `hush` 80.

## Night Three: The Small Hours (Sunday)

*Card: the skyline, the lit cross on the mountain, snow.*

**Fleurette** makes you an offer: *"Come to the jukebox any night. Ask me anything. The dead hear everything said in
bars."* (**Ask Fleurette** unlocks.) Then it's **11 p.m. to 6 a.m.: six hours**.

| Storylet | Hours | What you get |
|---|---|---|
| **Saint-Jude with Dario** | 2 | Pack life, the Easter curse (codex), Dario at nineteen ("I remembered something I'd lost," a *hushed* line). With the hair sample: *"Not one of us. Old hair. A pelt."* (`c_pelt`). Possible heat. `favor_manon`. |
| **Patrol with Lazare** | 2 | Rooftops of Old Montréal. His parents "killed by a wolf" (a *hushed* line). With trust: a stolen Hush-bell (`c_bell_stolen`), the Register exists (`c_register`). The cross on the mountain. Possible kiss. Gives him an alibi for tonight. |
| **Le Mardi Gras** | 1 | Meet **Rose**. He offers a dance tomorrow in exchange for a truth. Flirting and danger. |
| **The bridge with Nadim** | 1 | On the steel at the top of the Jacques Cartier. 1967; grief; your father's visits (`c_serge_visits`). Kindness earns a wish. |
| **The Buanderie** | 1 | Meet **Gisèle**. Aurèle, 1966, the Accord ("three signed, one witnessed", `c_three_signed`). `favor_gisele`. |
| **The Beaver Club** | 2 | Meet **Honora**. The contract (`honora_contract`). The trophy room: a grey wolf pelt with patches cut out (`c_pelt_room`, Wits). Honora says *"tidying"* (`c_tidying`). Ruari; an optional feeding scene (steam). |
| **The funeral home** | 1 | Aimé and Mireille's body. He finds the puncture under the bruise (`c_bite`) and tastes her (`c_voice`). |
| **The Keyman's stall** | 1 | He asks your name and flinches (`c_flinch`). In New Game+: *"Papa?"* |

**6 a.m., the second body**, at the foot of the stairs up the mountain. Guy Hébert was a Carillon novice unmade in
1994. A plastic bead lies in the snow (`c_kandi_bead`), and the same bell bruise. If you didn't patrol with Lazare,
he was *absent* all night (`c_lazare_absent`; he was with Dario). The **clue** mechanic unlocks. Rose's card arrives:
*"Tomorrow. Midnight. Wear something you can move in."* `hush` 70.

## Night Four: Mardi Gras (Monday)

*Mood: carnival. Card: dancers under red lamps.*

1. Fleurette: *"You have pieces, chéri. Lay them out."* The **deduction board** unlocks.
2. **Le Mardi Gras**: neutral ground, and the whole Veillée is here.
3. **The dance with Rose.** Five rounds, with a meter for who is leading. Each round you choose to lead (Nerve), follow
   (Charm), ask (Wits), refuse a step (Guarded; Rose adores it) or flirt (Bold). He answers one question per round.
   - Win: he names the three signatories of the Accord (`c_accord_signers`) and you gain `favor_rose`.
   - Lose: you owe him (`owe_rose`: *"one yes, whenever I ask"*).
4. **The coat room.** You find Lazare and Dario fighting, then not fighting, then kissing. Dario whispers *Enzo* and
   Lazare shoves him: *"Don't call me that."* You can reveal yourself, slip away, joke, or stay a moment too long.
   `know_affair`. With enough desire for both, and boldness, there is a kiss with each: `three_kiss`.
5. **Midnight: THE THAW.** The Hush lets go for an hour.
   - The MC remembers being twelve, at the fort, while his father sang him six notes (`mem_notes`).
   - **Lazare remembers he is Enzo Ferrante.** He falls to his knees on Saint-Laurent. *"Mamma."* He remembers the
     boy on the next balcony, and realizes Dario knew.
   - The street: sleepers see a wolf on the Main and a canoe in the sky, and the phones come out.
   - **The journal thaws.** Redacted lines melt on screen.
   - At one, the Carillon's bells ring the Hush closed. The Bourdon declares war on the Sept-Ans for the Thaw.
6. **The split.** Lazare is walking to the tower to ask the Bourdon to his face. Dario's phone: Saint-Jude has been
   hit and Manon is down. Both men look at you.
   - **Go with Lazare:** `path = "bells"` (Nights 5A, 6A).
   - **Go with Dario:** `path = "wolves"` (Nights 5B, 6B).
   *The one you don't follow will remember that.*

## Night Five A: La Persévérance (Tuesday)

1. The towers of Notre-Dame. **The Bourdon** admits it gently: *"I took you. You would have turned by fourteen. I
   saved you."* Your interventions shape Lazare's crisis. He makes you an offer: *"Close the lock on Nuit blanche and I
   will give you your father."* (`c_bourdon_knows`.) Refuse, accept (`bourdon_deal`), or ask him to make you forget
   (early ending **Sleeper**).
2. **Inside the Carillon.** The novices: Mathis, eleven, unmade. Sister Agathe is grieving her stolen bell
   (`c_bell_stolen`).
3. **Lazare's cell.** *"Say your name."* A love scene (steam) or a vigil. `slept_lazare`.
4. **The Register heist** (Hands, Wits, or Charm on Agathe). Every victim of the Quiet Killings is in it, with a fresh
   tick in the Bourdon's hand (`c_victim_list`, `c_bourdon_list`). *Serge Lacroix, unmade 2011: the Keyman, Missing
   Line.* *Lorenzo Ferrante, 2005, age ten.*
5. **The angel.** Jean-Baptiste speaks from the Gros Bourdon and asks you to silence the carillon that drowns it.
6. Texts from Dario (offscreen): the siege. *"Is he okay. Don't tell him I asked."* `hush` 50.

## Night Six A: Change-Ringing (Wednesday)

1. **Rue Jarry.** Lazare's parents don't know him. Rosa: *"We always wanted a son. It just never happened."* Dario
   is in the lane under the balconies; he comes every year on Enzo's birthday, and tonight is that birthday. You mediate.
   Lazare either forgives Dario (`reconciled`) or breaks with him. With desire high on both sides: three people under
   the balconies (`three_kiss`, or deeper).
2. **The change.** At 3 a.m. the carillon rings to drown the angel. You must ring the wrong change: a three-step
   pattern puzzle, with hints from the Register's margins (`c_change_notes`) and the six notes you remember.
3. **The angel speaks** over Old Montréal (sleepers hear thunder). It names the killer's master (`c_angel_word`) and
   offers its help in the finale at the price of its justice (`ally_angel`).
4. Lazare chooses: leave the Carillon with you (`ally_lazare`) or stay and fight from within. Agathe chooses too.
5. **The Compagnie takes Nadim** from the bridge. `hush` 35.

## Night Five B: Saint-Jude (Tuesday)

1. **The siege** at Saint-Léonard. Open the crypt door (Hands). Reach Manon before the Carillon's knife "frees" her
   (Nerve, Reckless) → `manon_safe` / `manon_cut` (she wakes a sleeper and forgets everyone).
2. **Pack night.** Found family. Dario's grief and fury. A love scene (steam) or a vigil. `slept_dario`.
3. **War council on the Line.** Honora offers the pack an alliance against the Carillon; it's a trap. Accept, refuse,
   or expose the frame (needs the *planted hair* deduction).
4. **Aimé tastes the newest victim** (`c_voice` / `c_kandi_bead`).
5. **Offscreen:** if Lazare trusted you (`rel_lazare >= 30` or `n4_told_lazare`), he's inside the tower and sends word
   (`lazare_inside`). Otherwise the Bourdon has rung the Gros Bourdon over him and **re-Hushed** him (`lazare_rehushed`):
   he no longer remembers Enzo.
6. Gisèle: *"You want him back? I've got a canoe."* `hush` 50.

## Night Six B: La Chasse-galerie (Wednesday)

1. **The Buanderie.** The canoe runs on a contract with Rose, who drops by to check the paperwork.
2. **The flight** over the canal and the city. The altitude gauge. No holy words and no steeples, with Dario aboard.
   Handle him with a kiss (Bold), substitute swears (Wry), a held hand (Earnest) or duct tape (Reckless). Steeples need
   Wits or Lore to avoid.
3. **The tower window.** If Lazare is re-Hushed, make him remember (*Enzo*, Dario's plea, your earnest words). If
   he's inside, he comes out through the window with the Register (`c_victim_list`, `c_bourdon_list`). The angel speaks
   one line to you.
4. **Aftermath:** reconciliation or a break (`reconciled`).
5. **The Compagnie takes Nadim.** `hush` 35.

## Night Seven: The Compagnie (Thursday)

*Mood: oxblood. Card: a long table, candles, antlers.*

1. **The Keyman.** He made the call. Father and son. `keyman_forgiven`, `keyman_known`. Ruari comes for him (he's on
   the list): save him (Nerve, an ally, a favor, or a wish) → `keyman_safe`, or he's taken and the Compagnie has a
   spare key.
2. **The Beaver Club dinner.** The Compagnie makes you an offer: close the lock and have anything. Then **the
   accusation**:

| Accuse | Requires | Result |
|---|---|---|
| Ruari | `ded_ruari` or `ded_ruari_there` | True. Honora sacrifices him (`ruari_fate`). |
| Honora | `ded_ruari` and `c_tidying` | True. Honora is cornered; offer her a way out (`honora_turned`). |
| The Compagnie | `ded_list` | True. The Conductor breaks ranks (`clarke_turned`). |
| The pack | `ded_wolf` (false theory) | Disaster: the Carillon has its excuse. |
| Lazare | `ded_lazare` (false theory) | Disaster: Lazare is taken. |
| No one | | The dinner ends cold. |

3. **Rose's offer.** Invite him in (`invited_rose`, `ally_rose`), refuse, or bargain.
4. Texts. `hush` 20.

## Night Eight: The Eve (Friday)

1. **The council.** What will you do with the Hush? (`intent`.) Gisèle explains what a *remade* Hush needs: the coven,
   a voice (the angel or Rose), the key (you), and a free djinn's gift.
2. **The plan.** Assign companions to four roles: **the Door** (hold the fort), **the Crowd** (protect the sleepers at
   Nuit blanche), **the Bells** (stop the Bourdon ringing the city to sleep), and **Beside you** (at the lock). Each
   companion has a fit for each role; fit plus loyalty (`rel_x`) decides the outcome.
3. **The last night.** Choose one: Lazare, Dario, both (`throuple_ready`), Rose, the friends (Fleurette and Aimé at
   Chez Normande, Diane Dufresne karaoke), Mémé, or alone on the mountain.
4. **3 a.m.:** Nadim reaches you in smoke from his chains and gives you a wish if you have fewer than three.
   `hush` 8.

## Night Nine: Nuit Blanche (Saturday)

*Mood: white night. Card: crowds under lights.*

1. The city is awake. The crew moves out.
2. **The Crowd** plays out, including Fleurette's last show at the Place des Arts (her name on the big screen).
3. **The Bells**: the Bourdon rings the Gros Bourdon at 3 a.m.
4. **The Door**: the fort, the canoe or the bridge. People can die here.
5. **The vault.** The Compagnie, Nadim in chains, and perhaps your father at the lock.
6. **The choice at the lock:**
   - **Close it on Nadim:** `hush_fate = "rebound"`.
   - **Take his place:** `"lock"`.
   - **Break it forever:** `"fallen"`.
   - **Remake the Hush by consent:** `"remade"`. Needs Gisèle, a voice (the angel or Rose), Nadim's consent, and you.
   - **Take Rose's bargain:** `"rose"`.
   - **The great wish** (with a wish left): unmake the Accord, set Nadim free, or unmake a death from tonight.

## Endings (22)

Chosen in priority order at the end of Night Nine (see `endings.js`). The epilogue **Morning** then shows a portrait
card for every character met, with their fate.

| id | Title | Shape |
|---|---|---|
| `sleep_through` | Sleep Through It | You turned back on Night One. |
| `sleeper` | Sleeper | You asked to forget, or were made to. |
| `unmade` | Unmade | You died at the fort. |
| `compagnie_peace` | The Compagnie's Peace | You closed the lock on Nadim. |
| `new_bourdon` | The New Bourdon | Rebound, with Lazare as Bourdon beside you, sworn to end the unmaking. |
| `the_lock` | The Lock | You took his place. The city forgets you. |
| `white_night` | White Night | The Hush fell. The Veillée walked out into the light. |
| `seven_years` | Seven Years Late | The Hush fell and so did you: you run with the pack now. (Dario.) |
| `the_remembering` | The Remembering | A Hush remade by consent. The unmade go home. |
| `three` | Three | Lazare, Dario, you. (Remade or fallen, both men alive and reconciled, and all three of you chose it.) |
| `enzo` | Enzo | You gave them back to each other and walked home alone, glad. |
| `ringer` | The Ringer | Lazare, and a Carillon rebuilt without stolen children. |
| `wolf_heart` | Wolf Heart | Dario, and the pack, in a world that can see them. |
| `last_dance` | The Last Dance | Rose holds the Hush; you hold Rose. |
| `invited` | Invited | Rose, freely chosen, in a city that can finally see him. |
| `smokeless_fire` | Smokeless Fire | Nadim, freed by your last wish, stays by choice. |
| `accord_unmade` | The Accord Unmade | Your great wish unmade 1967. |
| `wintered` | Wintered | You took Honora's offer, and a seat at the Club. |
| `last_stop` | Last Stop | The Conductor retires; the Missing Line is yours. |
| `last_call` | Last Call | Fleurette's name on every screen in the city. She goes, and you are there. |
| `ashes` | Ashes | The angel's justice. The tower burns. |
| `true_night` | True Night | *New Game+ only.* Nobody dies. Everyone remembers. |

## Mystery: clues and deductions

| Clue | Where | Text (short) |
|---|---|---|
| `c_bellmark` | N2 body | A bruise at the temple shaped like the lip of a bell |
| `c_wolfhair` | N2 body | Grey wolf hair in her fist |
| `c_voice` | Aimé tastes | "Cold hands, a bell, a young man's voice: *sorry, love*" |
| `c_kandi_worn` | N2 Ruari | Ruari wears bracelets of plastic beads |
| `c_kandi_bead` | N3 body / N5B | A plastic pony bead in the snow |
| `c_bite` | N3 funeral home | A puncture under the bruise |
| `c_pelt` | N3 Dario (with hair) | "Not one of us. Dead hair. A pelt." |
| `c_pelt_room` | N3 Beaver Club | A grey wolf pelt with patches cut out |
| `c_tidying` | N3 Honora | Honora: "a little tidying" |
| `c_bell_stolen` | N3 Lazare / N5A Agathe | A Hush-bell missing from the Carillon armory |
| `c_register` | N3 Lazare | The Carillon keeps a Register of the unmade |
| `c_lazare_absent` | N3 (no patrol) | Lazare was absent the night Guy Hébert died |
| `c_victim_list` | N5A / N6B Register | Every victim is in the Register |
| `c_bourdon_list` | N5A / N6B Register | Fresh ticks in the Bourdon's hand |
| `c_accord_signers` | N4 Rose / N6A angel | Signed by the Bourdon, Honora and the Conductor; witnessed by Rose |
| `c_angel_word` | N6A angel | "The one who drinks at the President's right hand" |

| Deduction | From | Sets | True? |
|---|---|---|---|
| The bell hid a bite | `c_bellmark` + `c_bite` | `ded_bite` | yes |
| The wolf hair was planted | `c_wolfhair` + `c_pelt` or `c_pelt_room` | `ded_planted` | yes |
| A stolen Carillon bell | `c_bellmark` + `c_bell_stolen` | `ded_bell` | yes |
| Ruari was there | `c_kandi_bead` + `c_kandi_worn` | `ded_ruari_there` | yes |
| Ruari is the killer | `c_voice` + `c_kandi_worn` (or `c_angel_word` + `c_kandi_worn`) | `ded_ruari` | yes |
| The Compagnie chose them | `c_victim_list` + `c_bourdon_list` | `ded_list` | yes |
| A wolf did it | `c_wolfhair` + `c_bellmark` | `ded_wolf` | **no** |
| Lazare did it | `c_bellmark` + `c_lazare_absent` | `ded_lazare` | **no** |

## New Game+

After any ending, **New Game+** carries memories across (Nadim remembers undone timelines):
- `ngplus`, and memory flags `mem_enzo`, `mem_keyman`, `mem_killer`, `mem_accord`, `mem_bells`, `mem_wolves`.
- ✦ *déjà vu* options appear where a memory would change things: tell Lazare his name on Night One, recognize the
  Keyman on Night Two, name the killer early.
- You start with one wish.
- **True Night** is only reachable in New Game+.
