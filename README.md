# Nuit Blanche

*A dark romance in nine nights, and the months after. Montréal, from February to the Saint-Jean.*

You're a locksmith from Verdun who gets a call at three in the morning in your dead father's words, and opens a door on Île Sainte-Hélène that was locked in 1967. Behind it: a djinn, a secret, and the Hush that has kept the island asleep to everything that walks it at night. Vampires with a club and a long table. A werewolf pack in a deconsecrated church in the east end. Bell-ringing monks who hunt them. A ghost on a jukebox, a witch with a laundromat, a warlock who runs a market on a metro line that was never built, a devil who likes to dance, and an angel in the great bell of Notre-Dame that has been saying *no* for fifty-nine years.

And two men who hate each other: Lazare, a hunter of the Carillon, and Dario, alpha of the Sept-Ans. Then Night Four happens, and you find out why.

**Content note.** For adults. The romance is gay and explicit, on the page; a setting fades those scenes to black and changes nothing else. There is violence, death, grief, and dementia.

## Play

- **Browser:** open `dist/nuit-blanche.html`. One file, and it works offline.
- **Windows:** download `downloads/NuitBlanche.exe` and run it; nothing is installed. It's unsigned, so the first time Windows SmartScreen will warn you: click **More info → Run anyway**.
- **From source:** open `index.html`.

Saves, endings, achievements and the story map are kept in the browser (or in the app), on this device.

## What's in it

- **Three parts, about 160,000 words of story.** *Part One: The Nine Nights* runs from the first call to Nuit blanche, with a split at Night Four: follow Lazare into the towers, or Dario to Saint-Jude. *Part Two: Lent* runs through the forty days to Easter. *Part Three: The Long Light* runs through spring to the fire on the mountain on the Saint-Jean. Then there's an epilogue, a year on.
- **23 endings.** Which ones are open to you depends on who you loved and who you kept alive, what you did at the lock, and what you did in the fire.
- **Pixel art:**
  - portraits of everyone you meet, with moods, in the text and in your journal;
  - a title card for every chapter, and one for every ending;
  - a portrait of you, which you design.
- **The Journal:**
  - *People*: an encyclopedia of everyone you've met, with pixel hearts for how they feel about you, flames for desire, and the moments they'll remember;
  - *Codex*: the Veillée's lore;
  - *Clues*: a board where you connect evidence into deductions you can act on;
  - *Ask Fleurette*: a ghost who answers questions;
  - *The story so far*: a recap that remembers your choices.
- **Memories matter.** People remember what you did, and bring it up weeks later.
- **Wishes.** Nadim, the djinn, grants a few. You can spend one to unmake your last choice, or save them for something bigger.
- **Checkpoints** at every chapter, plus six save slots and an autosave on every page.
- **Texts and favors** from people you've met; they can pay off later.
- **The story map**, unlocked when you finish the game once. It lights the path you took, faintly shows paths from other playthroughs, and has a **Reveal all paths** button if you want to see everything.
- **New Game+** keeps some of what you learned, and adds options only a second-timer would think of.
- **Offline first.** Everything above works with no connection and no account. If you want, *Settings* can turn on Claude as a live narrator, or let you write your own lines at some choices; it's entirely optional.

## Development

Plain HTML, CSS and JavaScript with no dependencies; open `index.html` to run it. The story is written in a small ChoiceScript-like language in `js/story/scenes/`, one file per night or chapter. `docs/` has the story bible, storyboard, systems and stat-economy notes, and contact sheets of the art.

```bash
node tools/validate.js          # labels, variables, people, clues, map nodes, endings; --payoff lists underused flags
node tools/lint-prose.js        # tags, banned words, doubled words, quotes, spelling; --tics lists repeated phrases
node tools/playtest.js          # random bots play to the end; --runs N, --focus, --until night6a, --unshown, --tally var
node tools/art-preview.js       # render every portrait and card into docs/art/
node tools/make-icons.js        # favicon.png and icons/icon.ico from the pixel key
node tools/build.js             # dist/nuit-blanche.html (and an artifact variant)
cd desktop && npm install && npm run dist:win   # desktop/release/NuitBlanche.exe
```
