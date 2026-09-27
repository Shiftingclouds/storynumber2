#!/usr/bin/env node
// Renders contact sheets of every portrait (all moods) and every title card into docs/art/ for review.
//   node tools/art-preview.js [--only portraits|cards] [--id lazare] [--out dir]
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { encode } = require("./png");

const ROOT = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const only = opt("--only", null);
const oneId = opt("--id", null);
const outDir = path.resolve(opt("--out", path.join(ROOT, "docs/art")));

const sandbox = { console, Math, JSON };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const f of ["js/art/pixel.js", "js/art/portraits.js", "js/art/cards.js"]) {
  const p = path.join(ROOT, f);
  if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: f });
}
const NB = sandbox.NB;
const P = NB.pixel;
fs.mkdirSync(outDir, { recursive: true });

function sheet(tiles, cols, tw, th, pad, bg) {
  const rows = Math.ceil(tiles.length / cols);
  const c = P.canvas(cols * (tw + pad) + pad, rows * (th + pad) + pad);
  c.fill(bg || "#2a2733");
  tiles.forEach((t, i) => c.blit(t, pad + (i % cols) * (tw + pad), pad + Math.floor(i / cols) * (th + pad)));
  return c;
}

const MOODS = { default: ["neutral", "smile", "smirk", "angry", "sad"], lazare: ["hushed"], dario: ["wolf"], rose: ["true"], nadim: ["fire"],
  honora: ["hungry"], ruari: ["hungry"], angel: ["neutral", "hushed"] };

if (!only || only === "portraits") {
  const ids = oneId ? [oneId] : NB.portraits.ids;
  const tiles = [];
  for (const id of ids) {
    const moods = id === "angel" ? MOODS.angel : MOODS.default.concat(MOODS[id] || []);
    for (const m of moods) tiles.push(NB.portraits.draw(id, m, {}));
    while (tiles.length % 6) tiles.push(P.canvas(64, 64));
  }
  const s = sheet(tiles, 6, 64, 64, 4);
  const file = path.join(outDir, oneId ? `portrait-${oneId}.png` : "portraits.png");
  fs.writeFileSync(file, encode(s.w, s.h, s.data, oneId ? 4 : 2));
  console.log("wrote " + path.relative(ROOT, file));

  // the player's look variations
  const looks = [];
  for (let i = 0; i < 12; i++) {
    looks.push(NB.portraits.draw("mc", "neutral", { look_skin: i % 6, look_hair: (i * 5) % 6, look_style: i % 5, look_beard: (i * 3) % 4, look_eyes: i % 4 }));
  }
  const ls = sheet(looks, 6, 64, 64, 4);
  fs.writeFileSync(path.join(outDir, "looks.png"), encode(ls.w, ls.h, ls.data, 2));
  console.log("wrote docs/art/looks.png");
}

if ((!only || only === "cards") && NB.cards) {
  const ids = oneId ? [oneId] : NB.cards.ids;
  const tiles = ids.map((id) => NB.cards.draw(id));
  const s = sheet(tiles, oneId ? 1 : 2, NB.cards.W, NB.cards.H, 4);
  const file = path.join(outDir, oneId ? `card-${oneId}.png` : "cards.png");
  fs.writeFileSync(file, encode(s.w, s.h, s.data, oneId ? 4 : 2));
  console.log("wrote " + path.relative(ROOT, file));
}
