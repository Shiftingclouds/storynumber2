# NUIT BLANCHE: Parts Two and Three (storyboard revision 3)

The book now runs **four months**, from Friday 20 February to Wednesday 24 June 2026, in three parts that follow
the liturgical year, as the old Québec stories do.

| Part | Span | Chapters | Climax |
|---|---|---|---|
| **One: The Nine Nights** | 20–28 February | Nights 1–9 | **Nuit blanche**: the choice at the lock. This decides the *state of the world*, not the ending. |
| **Two: Lent** | 1 March – 5 April | 10 Ash · 11 The Forty Days · 12 Holy Week · 13 Easter | Holy Week, when the bells fly to Rome; Easter morning, and your own seven years come due |
| **Three: The Long Light** | April – 24 June | 14 The Thaw · 15 Lilacs · 16 The Longest Days · 17 La Saint-Jean | The angel's judgment, among the Saint-Jean bonfires |
| **Epilogue: Nuit blanche, one year later** | 27 February 2027 | Morning | A portrait card for everyone |

The through-line that carries past Nuit blanche is **the angel**. Jean-Baptiste, in the great bell, has objected to
the Hush since 1967 and been drowned out by the Carillon for fifty-nine years. Angels keep accounts:

- **At Easter**, it returns from Rome with the bells and names its judgment: *on the feast of the Baptist, this island
  will be baptised by fire.*
- The fire is meant for **the Veillée**: the damned, the fed-upon, the stolen, the unmade, and everyone who
  profited. That's the Compagnie, but it's also Dario's pack, Rose, Fleurette, the Club, and anyone the Hush
  sheltered.
- **The final antagonist is righteous judgment itself.** The MC has to stand between heaven's justice and the damned
  people he loves, and by then he may be one of them.

**The key idea: the song is the angel's name.** The six notes of the Lacroix song lock are the partials of the Gros
Bourdon. Aurèle tuned his lock to the angel's own voice in 1967, so nothing of the Veillée could ever open it.
Sung to the angel on its feast day, the family song can calm it, bind it, or set it free. The song was the key the
whole time.

## World states after Nuit blanche

The choice at the lock (Night 9) sets `world` and `price`. Parts Two and Three share one spine; the text and some
scenes change with the state.

| Lock choice | `world` | `price` (who pays) | Can it change later? |
|---|---|---|---|
| Close it on Nadim | `held` | `nadim` | Yes: free him in Holy Week, when the bells are gone |
| Your father takes the lock (Le Gardien) | `held` | `serge` | Yes: in Holy Week, or at the Saint-Jean |
| Rose's bargain | `held` | `rose` (you owe the devil) | Yes: at Easter, when a devil's claims are weakest |
| Remake it by consent | `remade` | `none` | It can be broken by the Compagnie's revenge |
| Break it forever | `open` | `none` | The Club tries to force a new Hush in Holy Week |
| The great wish: unmake the Accord | `open` (gently) | `none` | As above |
| Take Nadim's place yourself | **terminal: The Lock** | | |
| You die at the fort | **terminal: Unmade** | | |

Deaths at Nuit blanche carry forward: funerals at Bélanger & Fils in Chapter 10. Some can be undone: a wish can
unmake a death on the night itself.

## Part Two: Lent

**10. Ash (Sunday 1 March).** The morning after.

- Who's alive; the city, by world state; the first night after.
- A funeral if anyone died; Aimé does the service.
- The first quiet dinner with whoever you love. The "romance" becomes a *relationship*, and with it the practical
  questions: is it a date, whose place, and what about the other one.
- **Mémé** remembers you by name on 1 March, whatever the state, and asks for her key back. It's a bad sign.

**11. The Forty Days (March).** A playable **interlude**: four weeks, each a vignette you choose, plus fixed beats.

- **Week vignettes** (choose one each week, so four of about eight):
  - teach Nadim 2026 (the métro, a phone, a Tim Hortons);
  - cook Sunday lasagna at Saint-Jude;
  - Lazare's first Mass back, or his first night not going;
  - reopen the shop with your father, if he's alive and free: *Serrurerie Lacroix & Fils*;
  - Rose's Lenten ball;
  - Aimé and the backlog of the dead;
  - Fleurette's rehearsals;
  - Gisèle's lessons.
- **Fixed beats:**
  - The first sign: bells ringing by themselves at 3:33 all over the city. The angel is stirring.
  - The Compagnie's remnants regroup (Honora, the Bourdon if alive, the Conductor if not turned).
  - The Easter question arrives. Dario, laughing, then not laughing: *"When's the last time you did your Easter
    duties, Lacroix?"* At seventeen. Twelve years. Under the Hush you couldn't turn. Now you can. `easter_due`
- **Relationship mechanic:** each week, whoever you spend it with gains a *time* point (`time_x`). Endgame romance
  and the **Three** ending need time, not only desire.

**12. Holy Week (29 March – 4 April).**

- **Palm Sunday:** the palms, the city; the Carillon's last full peal before the silence.
- **Holy Thursday:** at the Gloria, every bell in Québec falls silent. *The bells have flown to Rome.* The
  Carillon's power goes with them, and so does the angel. For three days the island has no bells. Lazare, a
  ringer with nothing to ring, is terrified and free.
- **Good Friday:** the enemy moves while the bells are gone. By state:
  - `held`: the Club tries to take the fort, and the price.
  - `open`: Honora tries to force a new Hush, using you, or your father, as the key.
  - `remade`: the Compagnie tries to tear it down.

  A set piece at the fort, or in the Club's cellars.
- **Holy Saturday:** the rescue, the heist, or the stand, with the second use of **the plan** (roles, fit ×
  loyalty). In `held`, this is the chance to free whoever pays the price.

**13. Easter (Sunday 5 April).**

- **Dawn:** your seven years come due. The choice:
  - Go to confession and take communion. Lazare can hear it, if he's left the order, which is its own heat.
  - Run with the pack, and turn. `mc_wolf`
  - Ask Rose to hold the curse, which is a debt.
  - Spend a wish.
- The pack's Easter, at sunrise on the mountain.
- **Noon:** every bell in the city comes back from Rome at once, the angel with them. It speaks over the whole
  island, and the sleepers hear thunder: *On the feast of the Baptist, I will baptise this island with fire.*
- A ticking clock to 24 June.

## Part Three: The Long Light

**14. The Thaw (April).** The river ice breaks.

- **Mémé:** her last lucid night, and her death. The funeral at Bélanger & Fils. Aimé; your father, if he's here;
  the song.
- **Lazare and his parents.** In `open` or `remade`, they remember him, which is joy and grief. In `held`, they
  don't, and he has to decide whether to tell them.
- **Nadim**, free or bound, and his sister. The great wish becomes possible.

**15. Lilacs (May).** An interlude of weeks: Sunday tam-tams on the mountain, the lilacs, the first warm night on a
terrasse.

- The relationship tests. The throuple asks its hard question. Rose asks his *yes*. Nadim, freed, asks his first
  question with a real yes in it.
- **Fleurette's plan** for the Saint-Jean: her name on the screens.
- **Gisèle's teaching:** the six notes are the angel's name. `know_song_name`

**16. The Longest Days (1–23 June).**

- Gather allies. **The plan**, the third time: the bonfire, the bell, the crowd, the mountain, and beside you.
- **The last night before**: the final love scene of the book.
- **23 June:** the bonfires are built all over Québec.

**17. La Saint-Jean (23–24 June).** The feast of the Baptist, and the finale.

- The angel descends onto the bonfire on the mountain, or into the great bell of Notre-Dame, by state.
- Roles play out. The final choice:
  - **Sing it the song**: the Lacroix name-song, to calm, bind or free it.
  - Let it judge (**Ashes**).
  - Stand between it and the damned.
  - Invite Rose to answer it.
  - Spend the great wish.
  - Remake the covenant, with Gisèle, a voice, and consent. The only Hush that heaven will bless.
- **Endings.**

**Epilogue: Nuit blanche, 2027.** One year later, the same night. Where everyone is.

## Endings (all at the Saint-Jean, except the terminal ones)

- **Terminal endings, earlier:** Sleep Through It (Night 1), Sleeper (Night 5A), Unmade (Night 9), The Lock
  (Night 9).
- **At the Saint-Jean:** the other nineteen, re-keyed to the final world state, the romance, and the fates (see
  `config.js`), plus Seven Years Late (you became a wolf at Easter and chose the pack).
- **True Night:** New Game+ only.

## What this changes in Part One

- **Night 9** ends with the state, the morning, and *"Part Two: Lent"*, not an ending card.
- The Night 8 plan, the Night 7 accusation and every earlier flag feed Part Two and Three as well. Nothing is spent
  at Nuit blanche.
- **The angel** is introduced properly on both paths by Night 6. Path B gets one line from the bell, and the
  Gros Bourdon rings on its own at the Thaw.
