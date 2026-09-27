#!/usr/bin/env node
// Renders the app icon: favicon.png (64×64), icons/icon-256.png (for the desktop app), icons/icon.ico.
//   node tools/make-icons.js
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { encode, ico } = require("./png");

const ROOT = path.resolve(__dirname, "..");
const sandbox = { console, Math, JSON };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const f of ["js/art/pixel.js", "js/art/appicon.js"]) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), sandbox, { filename: f });
const c = sandbox.NB.appicon.draw();
fs.mkdirSync(path.join(ROOT, "icons"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "favicon.png"), encode(c.w, c.h, c.data, 2));
fs.writeFileSync(path.join(ROOT, "icons/icon-256.png"), encode(c.w, c.h, c.data, 8));
fs.writeFileSync(path.join(ROOT, "icons/icon.ico"), ico([32, 64, 128, 256].map((size) => ({ size, png: encode(c.w, c.h, c.data, size / 32) }))));
console.log("wrote favicon.png, icons/icon-256.png, icons/icon.ico");
