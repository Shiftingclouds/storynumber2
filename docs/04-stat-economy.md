# NUIT BLANCHE: The Stat Economy

Two rules, both enforced by the tools:

1. **Every requirement can be met through the story's own choices.** Someone who builds toward a skill will pass
   that skill's checks. Nothing is gated behind numbers the story never lets you reach.
2. **Everything introduced matters again later.** Every skill is tested on most nights. Every item and favor is used
   at least twice. Every relationship scene sets something a later scene reads.

## Skills

| Skill | What it's for | Starts | Tested on nights |
|---|---|---|---|
| **Hands** | Locks, tools, anything done with care. The MC's identity. | 35 | 1 (the door), 2 (the plate box), 3 (Keyman, patrol), 4 (the coat-room door), 5A (the Register lectern), 5B (the crypt door), 6A (the bell clapper), 6B (the canoe's rigging), 7 (the Keyman's shackles), 9 (the lock) |
| **Nerve** | Staying when everything says run. | 15 | 1 (Luc, running), 2 (stepping over the white line), 3 (the bridge climb, the patrol), 4 (leading the dance, the Thaw street), 5A (the Bourdon), 5B (the siege), 6A (the tower heights), 6B (the flight), 7 (Ruari), 9 (the Door) |
| **Charm** | Getting people to want what you want. | 20 | 1 (playing them off), 2 (the crowd, the plate), 3 (the Club, Saint-Jude), 4 (following in the dance), 5A (Agathe), 5B (the war council), 6A (rue Jarry), 6B (Rose's contract), 7 (the dinner), 8 (allies), 9 (the crowd) |
| **Wits** | Noticing, lying, putting things together. | 20 | 1 (the notebook, playing them off), 2 (the con, the body), 3 (the trophy room, Rose's questions), 4 (overhearing), 5A (the Register), 5B (the frame), 6A (change-ringing), 7 (the accusation), 9 (the Bourdon's trap) |
| **Lore** | What you know about the Veillée. | 0 | 3 (djinn law), 4 (demon etiquette), 5–6 (angel and loup-garou law), 7 (the Accord's wording), 8 (the remade Hush), 9 |

**Your twenties** (Night One) adds +15 to Hands, Nerve, Charm or Wits. Lore can only be learned: from Fleurette,
the codex, Nadim, Gisèle, Rose and the Line.

### Growth, and where the checks sit

Each night offers at least **three +2 to +5 opportunities per skill**, spread across its choices. Night Three's
storylets are each weighted toward particular skills:

- the patrol: Nerve, Wits;
- Saint-Jude: Charm, Nerve;
- Le Mardi Gras: Charm, Lore;
- the bridge: Nerve, Lore;
- the Buanderie: Lore, Charm;
- the Beaver Club: Wits, Charm;
- the funeral home: Wits, Lore;
- the Keyman: Hands, Lore.

| At the start of night | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Focused skill (a player leaning into it) | 35–50 | 40–55 | 45–60 | 50–65 | 55–70 | 58–72 | 62–76 | 65–80 | 68–85 |
| Secondary skill | 15–35 | 20–40 | 25–45 | 30–48 | 33–50 | 36–53 | 40–56 | 42–58 | 45–60 |
| **Check thresholds used that night** | 18–45 | 30–40 | 35–45 | 40–50 | 45–55 | 48–58 | 50–60 | 52–62 | 55–65 |

**No hard locks on the plot.** Every check gates a *better* or *different* outcome, never the way forward. Every
checked option sits beside alternatives: another skill, a favor, a relationship, an item, a wish, or a costlier
brute-force route.

## Voice and temper (opposed, fairmath)

- Wry ↔ Earnest, Reckless ↔ Wary, Guarded ↔ Open. Each dialogue choice moves one by 5–15 points of fairmath.
- A handful of options are personality-gated at **60 / 40**, which three or four consistent choices will reach. For
  example, a disarming joke needs Wry 60; a confession needs Open 60 (Guarded 40 or below).

## Relationships

- Regard (`rel_`) moves +3 to +15 per meaningful moment, and −5 to −20 for betrayals. Thresholds by night:
  20 (Nights 2–3), 30 (Night 4), 40 (Nights 5–6), 50–60 (Nights 7–9).
- Desire (`des_`) is only for the romanceable characters. Each love interest gets at least **two desire moments on
  every night he appears**. The thresholds are 25 for a first kiss, 45 for a love scene, and 60 for an endgame
  romance.
- The quiet scenes are real conversations: three to five exchanges, each a choice, each moving regard or desire,
  and at least one of them setting a flag that a later night reads.

## Items, favors, wishes

| Thing | Got | Used |
|---|---|---|
| Mémé's key | 2 | 5A/6B (the bands under the tower), 9 (the lock: remake instead of close) |
| The Keyman's key | 2 | 5A (the Register lectern), 6B (the tower's side door), 7 (it's the key to Serge's old workshop) |
| The notebook | 1 | 1 (the lock), 6A (change-ringing), 7 (the torn page) |
| The Polaroid | 1 | 4 (the Thaw), 7 (the Keyman), epilogue |
| The lutin's knot | 2 | 6B (lashing the canoe), 9 (tying the Bourdon's bell rope) |
| Fleurette's compact | 2 | every night; 9 (Last Call) |
| Favors | 2–7 | each one opens at least two later options; spent favors are gone |
| Wishes | 2, 3, 8 | undo at any choice; the great wish at the lock (9) |

## The tools that check this

- `node tools/validate.js --checks` lists every stat check by night, with its threshold and alternatives.
- `node tools/playtest.js --focus` runs **focused bots**, one per skill, which always pick the option that raises
  their skill. It reports, for every check on that skill, how often a focused bot could pass it. Anything a
  focused bot passes less than half the time is flagged.
