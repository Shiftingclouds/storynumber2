# NUIT BLANCHE: Systems

This covers the engine, the script language additions, the UI, the pixel art, the optional AI features, and the
tools. The engine descends from *Heldwater*'s: a line-based ChoiceScript-style interpreter with no DOM dependency, so
the same code runs in the browser, in Node tests and in bots.

## What the best interactive stories have in common (and where each shows up here)

| Principle | Examples | Here |
|---|---|---|
| The game remembers | Choice of Robots, Fallen Hero | `*remember` notices, journal memories, callbacks that read them, texts at the end of each night |
| Choices express who you are | Choice of Robots, Creatures Such as We | Four dialogue registers with different effects on each person |
| Failure is a scene, not a wall | Disco Elysium, Citizen Sleeper | Checks that branch into worse-but-interesting outcomes; the canoe crash; wrong accusations |
| Scarcity gives weight | 80 Days, Fallen London | Six hours on Night Three; three wishes; favors spent are gone |
| Companions act without you | Mass Effect 2 | The lead you don't follow acts offscreen by trust; the plan's fit × loyalty |
| Replays reveal | Hades, Outer Wilds, Slay the Princess | New Game+ memories, déjà-vu options, True Night, the story map |
| Voice | Sorcery!, Disco Elysium | A defined narrator voice; Varied and Living narration |

## Script language additions

Everything from Heldwater still works (`*choice`, `*selectable_if`, `*set x %+10`, `{@cond|a|b}`, `{~a|b}`, ...).
New in NUIT BLANCHE:

| Command | Effect |
|---|---|
| `*meet id` | First meeting: shows a portrait card (name and epithet) in the page, adds the person to the journal, sets `met_id`. |
| `*portrait id [mood]` | Shows a portrait beside the next paragraph. Moods: `neutral`, `smile`, `angry`, `sad`, plus special moods per person (`wolf`, `true`, `fire`, `hushed`...). |
| `*remember id text` | Toast: *"Lazare will remember that."* Adds a line to his journal page under *Remembers*. |
| `*clue id` | Adds a clue card (defined in config) to the board, sets `clue` var, and shows a toast. |
| `*codex id` | Unlocks a codex entry, counted across playthroughs. |
| `*text who message` | A phone message; consecutive `*text` lines render as one phone. `who` = a person id, `me`, or `unknown`. |
| `*art id` | A full-width pixel illustration (title-card art reused mid-scene). |
| `*chapter N Title [art]` | Title card with pixel art; sets `night`. |
| `*mood name` | Retints the interface accents: `snow`, `carnival`, `bells`, `wolves`, `oxblood`, `eve`, `white`. |
| `*meter var max Label\|Left\|Right` | A contest bar (the dance, the canoe's altitude). |
| `*pips var max Label` | A row of pips (hours left on Night Three). |
| `*effect name` | A one-off screen effect: `thaw` (the journal melts), `bells`. |
| `*node id branch` | Records a branch taken, for the story map. |
| `*look` | Opens the portrait creator (a page of its own). |
| `*choice speak` | Marks a dialogue choice where, online and with the setting on, you may type your own words. |
| `#@id Text` | An option with a small portrait of `id` beside it. |
| `*if steam` | `steam` reflects the *Intimate scenes* setting (on the page / fade to black). |

Journal redactions: journal and codex text uses `hush(text, known)`. Unknown text renders as a blacked-out bar of the
same length. The Thaw animates the change.

## Wishes (undo)

- Before every choice, the runtime keeps a snapshot of the state (one level deep).
- When `wishes > 0`, a **Wish it undone** button (a curl of pixel smoke) appears under the choices. After a
  confirmation it restores the snapshot, then sets `wishes = old − 1` and `wishes_used + 1`, and records the undone
  option in `undone` (Nadim remembers).
- Wishes are earned in the story (`*set wishes +1`, clamped to 3). The finale's great wish needs one.

## Deductions

`config.deductions` lists pairs of clues. In the journal's Clues tab you select two cards and press *Connect*. A
matching pair records the deduction and sets its variable; false theories are recorded too and can be accused. If the
current page is a choice, the runtime re-collects its options, so a deduction made at the accusation instantly
unlocks the option.

## New Game+ and the story map

- `meta` (in local storage, across playthroughs) keeps endings, achievements, codex seen, map branches seen, and
  memories. `newGame({ng: true})` injects the memory flags as variables.
- `config.map` lists the book's major branch points by night. `*node` records the branch taken. After an ending,
  **The Story Map** shows every branch point: yours are highlighted, ones you took in earlier playthroughs are shown
  faintly, and the rest read *???*. **Reveal all paths** (with a spoiler warning) shows everything.

## UI

- **Header:** title; the **Hush gauge** (a strip of pixel snowflakes that melts as the Hush fails); the night; wishes
  (smoke curls). Buttons: *Stats*, *Journal*, *Saves*, *Menu*.
- **Story page:** title card, then the text in a single measure. Portraits float beside their paragraph; phone
  messages render as a phone. Choices are Choice of Games radio buttons with a *Next* button; hints appear on locked
  options.
- **Journal:**
  - *People*: a grid of portraits with hearts (and flames); each opens an encyclopedia page with description,
    memories and favors.
  - *Codex.*
  - *Clues* (the board).
  - *Ask Fleurette.*
  - *The story so far* (an offline recap).
  - *You* (your portrait and a summary).
- **Stats:** Choice of Games style: voice & temper (opposed bars), skills, wishes, favors, the Hush.
- **Menu:** settings, endings & achievements, the story map (after one ending), how to play, start over.
- **Settings:** theme (Auto, Night, Day), text size, line spacing, typeface (serif, sans, or Atkinson Hyperlegible),
  line width, reduced motion, intimate scenes (on the page or fade to black), "They'll remember that" notices, stat
  changes, requirement hints, narration (Classic, Varied or Living), and the optional Claude connection.

## Pixel art

- `js/art/pixel.js`: a tiny raster library (RGBA buffer; rectangles, ellipses, polygons, lines, dithered gradients,
  outlines). It works identically in the browser (painted into a canvas) and in Node (PNG export for previews).
- `js/art/portraits.js`: a 64×64 procedural portrait kit. Each person is a spec (skin ramp, head shape, hair style,
  brows, eyes, mouth, facial hair, clothing, accessories, background). Moods change brows, mouth and eyes. Special
  moods: Dario's wolf eyes, Rose's horns and ember eyes, Nadim's fire, Fleurette's translucency. The player's portrait
  is built from the look creator's choices.
- `js/art/cards.js`: 192×80 title cards, one scene painter per night (plus the Thaw, the flight, Nuit blanche), with
  dithered skies, snow, and lit windows.
- `tools/art-preview.js` writes contact sheets to `docs/art/` for review.
- Rendered at integer scale with `image-rendering: pixelated`.

## The optional AI (never required)

Everything works offline. With a Claude connection (your API key, or Claude in the claude.ai app):
- **Living narration**: every page is retold in a chosen voice, with facts, names and choices fixed. Pages with
  intimate scenes are never sent.
- **Your own words**: on dialogue choices marked `speak`, you may type what you say. Claude maps it to the nearest
  written option, and your words appear as the line your character says.
- **Ask Fleurette, anything**: free-text questions answered in her voice, limited to what you've already
  discovered.

## Tools

| Tool | Why it earns its place |
|---|---|
| `validate.js` | Static checks for labels, scenes, variables, clues, codex, people, art ids and endings. Also a **payoff audit**: flags that are set but read fewer than twice (a reactivity gap). |
| `playtest.js` | Thousands of bot playthroughs (random, coverage-guided, persona). They use wishes, make deductions and plan roles. Reports errors, endings, option and line coverage, and words per night. |
| `endings-check.js` | Drives a designed route to each of the 22 endings. |
| `prose-lint.js` | Flags clichés, tics, repeated words and em-dash density in the script. Used during the writing pass, not shipped. |
| `art-preview.js` | Contact sheets of every portrait (all moods) and every card, for visual review. |
| `smoke.mjs` | A headless-browser run through the real UI, with screenshots. |
| `build.js` | Single-file `dist/nuit-blanche.html`. |

A separate pacing chart didn't earn its place: `playtest.js` already reports words and pages per night.
