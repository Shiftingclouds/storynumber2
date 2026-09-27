/* Nuit Blanche — procedural pixel portraits (64×64).
 * Each person is a spec (skin, hair, eyes, clothes, accessories, background). Moods change brows, eyes and mouth;
 * special moods change more (Dario's wolf eyes, Rose's horns, Nadim's fire). The player's portrait is built from
 * the look creator's choices. NB.portraits.draw(id, mood, vars) -> Canvas.
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var P = NB.pixel;
  var W = 64, H = 64;

  /* ---------------- palettes ---------------- */

  // [highlight, base, shadow, deep]
  var SKIN = {
    porcelain: ["#fbe9df", "#efd0bf", "#d3a792", "#a97a67"],
    fair: ["#f6d5b8", "#e7b791", "#c78f6c", "#98634a"],
    rosy: ["#f7cfb9", "#e9ad93", "#c8836c", "#94594a"],
    olive: ["#ecc79f", "#cf9f73", "#aa7851", "#7a5239"],
    tan: ["#dfac7f", "#bf8858", "#99653f", "#6c442b"],
    brown: ["#c08a60", "#9c6741", "#784a2c", "#55321e"],
    deep: ["#96623f", "#744729", "#57331d", "#3b2113"],
    pallid: ["#f4ecee", "#dcccd4", "#b7a5b5", "#8a7b92"],
    grey: ["#e9ddd6", "#d2beb4", "#ae978d", "#806b63"]
  };
  var SKIN_ORDER = ["porcelain", "fair", "olive", "tan", "brown", "deep"];

  // [highlight, base, shadow]
  var HAIR = {
    black: ["#4a4a63", "#23222f", "#101018"],
    espresso: ["#6e4b39", "#3e2a22", "#221613"],
    brown: ["#9a6a44", "#6b4529", "#452a18"],
    auburn: ["#c7683c", "#924522", "#5e2914"],
    blond: ["#f3dc8e", "#d2ad5a", "#9c7735"],
    platinum: ["#ffffff", "#e9e6f2", "#b9b3cc"],
    grey: ["#d8d6dc", "#a7a4ad", "#716e7a"],
    white: ["#ffffff", "#e6e3e8", "#b8b3bd"],
    bleach: ["#fff3c4", "#e8d48e", "#a79152"],
    salt: ["#b9b5bc", "#6d6873", "#3e3a45"]
  };
  var HAIR_ORDER = ["black", "espresso", "brown", "auburn", "blond", "grey"];

  var EYE = {
    brown: "#5a3521", dark: "#2b1a14", blue: "#3f78c2", green: "#3f8a5a", grey: "#7f8c99", hazel: "#8a6a2c",
    amber: "#e0a13a", yellow: "#ffd23a", ember: "#ff6a1f", red: "#d8243a", pale: "#b7c7d6"
  };
  var EYE_ORDER = ["brown", "blue", "green", "grey"];

  var INK = "#150e1f";

  /* ---------------- people ---------------- */

  var SPECS = {
    lazare: { skin: "olive", hair: "black", style: "curls", eyes: "dark", brows: 2, clothes: "coat", cloth: ["#3a3f4f", "#262a36", "#171a22"],
      scarf: "#5b1f2a", pendant: "bell", scar: true, bg: ["#1c2a57", "#0f173a"], motif: "glass", jaw: 1, nose: "long", cheek: true, beard: "shadow" },
    dario: { skin: "tan", hair: "black", style: "buzz", beard: "full", eyes: "brown", brows: 2, clothes: "parka", cloth: ["#3d4a3b", "#2a3429", "#1a2119"],
      fur: "#a9a39a", chain: true, bentNose: true, toque: true, bg: ["#5a1420", "#2a0810"], motif: "moon", jaw: 2, nose: "broad" },
    rose: { skin: "porcelain", hair: "black", style: "slick", eyes: "dark", brows: 1, clothes: "suit", cloth: ["#26222c", "#17141c", "#0b090e"],
      shirt: "#efe8e4", flower: "#c41d38", bg: ["#6e0f1f", "#2c0610"], motif: "petals", jaw: 2, resting: "smirk", eyeStyle: "narrow", cheek: true, pencil: true, beard: "shadow" },
    nadim: { skin: "brown", hair: "black", style: "wavy", beard: "trim", eyes: "amber", glowEyes: true, brows: 2, clothes: "robe", cloth: ["#34282c", "#22181c", "#140e11"],
      trim: "#d9a441", bg: ["#3a1508", "#0e0604"], motif: "smoke", jaw: 1, eyeStyle: "heavy", nose: "long" },
    fleurette: { skin: "rosy", hair: "platinum", style: "wig", eyes: "blue", brows: 1, lashes: true, clothes: "gown", cloth: ["#5ad0c8", "#2f9d9b", "#1d6668"],
      boa: "#ff7fbf", earrings: "#fff2a8", lips: "#d4204a", shadowLid: "#6a8cff", mole: true, bg: ["#7a1f6b", "#2e0c2c"], motif: "spot", ghost: true, jaw: 0, resting: "smile" },
    aime: { skin: "grey", hair: "black", style: "part", eyes: "grey", brows: 1, clothes: "undertaker", cloth: ["#2b2d33", "#1c1d22", "#101114"],
      shirt: "#f1f1ee", tie: "#141418", glasses: "round", bg: ["#56695d", "#2a342f"], motif: "lilies", jaw: 0, nose: "button" },
    gisele: { skin: "fair", hair: "grey", style: "perm", eyes: "hazel", brows: 1, clothes: "cardigan", cloth: ["#7a4a9c", "#5b3378", "#3d2052"],
      shirt: "#e8dccb", lips: "#b83246", cigarette: true, wrinkles: true, glasses: "cat", bg: ["#2b6f7a", "#153c44"], motif: "dryers", jaw: 0, resting: "smirk" },
    honora: { skin: "pallid", hair: "auburn", style: "updo", eyes: "pale", brows: 1, clothes: "regency", cloth: ["#1f5a3f", "#133a28", "#0a2217"],
      lace: "#f2ece2", pearls: true, lips: "#8c3a4e", bg: ["#173828", "#08150e"], motif: "candle", jaw: 0 },
    ruari: { skin: "pallid", hair: "bleach", style: "messy", roots: true, eyes: "pale", brows: 1, clothes: "leather", cloth: ["#2a2a30", "#19191e", "#0d0d10"],
      tee: "#b52a67", choker: true, earring: true, bg: ["#3c1b78", "#120a2e"], motif: "beams", jaw: 1, resting: "smirk", eyeStyle: "narrow", nose: "button" },
    clarke: { skin: "deep", hair: "white", style: "cropped", mustache: true, eyes: "dark", brows: 1, clothes: "porter", cloth: ["#27315a", "#1a2142", "#0f142b"],
      buttons: "#e2b64a", cap: true, bg: ["#6b4a22", "#2d1d0c"], motif: "lantern", jaw: 1, wrinkles: true, nose: "broad", eyeStyle: "heavy" },
    keyman: { skin: "fair", hair: "grey", style: "thin", beard: "stubble", eyes: "grey", brows: 1, clothes: "apron", cloth: ["#476a8c", "#34506c", "#22364a"],
      apron: "#7a4f2c", loupe: true, wrinkles: true, bg: ["#8a5a1c", "#3a230a"], motif: "keys", jaw: 1 },
    lucille: { skin: "fair", hair: "white", style: "perm", small: true, eyes: "blue", brows: 1, clothes: "cardigan", cloth: ["#e3a2b4", "#c47f93", "#955b6d"],
      shirt: "#f4efe6", glasses: "big", cross: true, wrinkles: true, bg: ["#d9b8c2", "#a07a88"], motif: "window", jaw: 0, resting: "smile" },
    bourdon: { skin: "fair", hair: "white", style: "tonsure", eyes: "pale", brows: 1, clothes: "cassock", cloth: ["#1f1e24", "#141318", "#0a090c"],
      collar: "#f5f3ee", wrinkles: true, bg: ["#232150", "#0e0c26"], motif: "rose", jaw: 1, eyeStyle: "heavy", nose: "long" },
    agathe: { skin: "fair", hair: "blond", style: "crop", eyes: "green", brows: 1, freckles: true, clothes: "coat", cloth: ["#4b5563", "#343b47", "#20252e"],
      pendant: "bell", bg: ["#35495c", "#1a2531"], motif: "glass", jaw: 0 },
    manon: { skin: "fair", hair: "salt", style: "braid", eyes: "hazel", brows: 2, browScar: true, clothes: "leather", cloth: ["#3b2d24", "#271d17", "#17110d"],
      tee: "#5a6b52", bg: ["#23402c", "#0e1d13"], motif: "moon", jaw: 1, cheek: true },
    rosa: { skin: "olive", hair: "salt", style: "updo", eyes: "dark", brows: 2, clothes: "cardigan", cloth: ["#34303a", "#231f28", "#141217"],
      shirt: "#efe3cf", earrings: "#e8c35a", cross: true, wrinkles: true, bg: ["#e0b04a", "#9a6420"], motif: "window", jaw: 0, resting: "smile", cheek: true },
    mathis: { skin: "fair", hair: "brown", style: "short", small: true, eyes: "blue", brows: 1, clothes: "robe", cloth: ["#8b9098", "#6a6f78", "#4a4e56"],
      trim: "#6a6f78", freckles: true, bg: ["#2c3f58", "#121c2a"], motif: "glass", jaw: 0, nose: "button" },
    angel: { angel: true, bg: ["#f7d77a", "#b0782a"] }
  };

  /* ---------------- helpers ---------------- */

  // Face frame (all feature positions derive from these).
  var HX = 32, HY = 26, HRX = 13, HRY = 14.6, CHIN = 46;

  function inHead(x, y, jaw) {
    // Cranium ellipse plus jaw curve. jaw: 0 narrow, 1 medium, 2 square.
    var nx = (x + 0.5 - HX) / (HRX + 0.4), ny = (y + 0.5 - HY) / HRY;
    if (y <= 31 && nx * nx + ny * ny <= 1) return true;
    if (y < 30 || y > CHIN) return false;
    var t = (y - 30) / (CHIN - 30);
    var half = HRX - t * t * (jaw === 2 ? 5.5 : jaw === 1 ? 6.6 : 7.8) - t * (jaw === 2 ? 1.4 : 2.4);
    if (y === CHIN) half = jaw === 2 ? 4.5 : jaw === 1 ? 3.5 : 2.5;
    return Math.abs(x + 0.5 - HX) <= half;
  }

  function faceShade(x, y, ramp, jaw) {
    // Light from the upper left.
    var u = (x + 0.5 - HX) / HRX, v = (y - 28) / 17;
    if (u > 0.78) return ramp[3];
    if (u > 0.5 || (v > 0.72 && u > 0.1)) return ramp[2];
    if (v > 0.9) return ramp[2];
    if (u < -0.25 && v < 0.1 && v > -0.75 && P.dither(x, y, 0.5)) return ramp[0];
    return ramp[1];
  }

  function drawHead(fig, spec, ramp) {
    // neck first, so the jaw sits over it
    for (var ny = 40; ny <= 52; ny++) {
      for (var nx = 26; nx <= 37; nx++) {
        var c = ny < 47 ? ramp[3] : (nx > 34 ? ramp[3] : ramp[2]);
        fig.set(nx, ny, c);
      }
    }
    for (var y = 9; y <= CHIN; y++) {
      for (var x = 16; x <= 48; x++) {
        if (inHead(x, y, spec.jaw)) fig.set(x, y, faceShade(x, y, ramp, spec.jaw));
      }
    }
    // ears
    fig.ellipse(18.6, 31, 1.5, 3.4, ramp[2]);
    fig.ellipse(45.4, 31, 1.5, 3.4, ramp[3]);
    fig.set(18, 31, ramp[3]); fig.set(45, 31, P.shade(ramp[3], -0.2));
  }

  function brows(fig, spec, mood, col) {
    var t = spec.brows || 1;
    var L, R;
    if (mood === "angry" || mood === "wolf" || mood === "true" || mood === "hungry") {
      L = [[22, 24], [23, 24], [24, 25], [25, 25], [26, 26], [27, 26]];
    } else if (mood === "sad" || mood === "hushed") {
      L = [[22, 26], [23, 26], [24, 26], [25, 25], [26, 25], [27, 24]];
    } else if (mood === "smile" || mood === "fire") {
      L = [[22, 25], [23, 24], [24, 24], [25, 24], [26, 24], [27, 25]];
    } else {
      L = [[22, 25], [23, 24], [24, 24], [25, 24], [26, 24], [27, 25]];
    }
    R = L.map(function (p) { return [63 - p[0], p[1]]; });
    if (mood === "smirk") R = R.map(function (p) { return [p[0], p[1] - 1]; });
    L.concat(R).forEach(function (p) {
      fig.set(p[0], p[1], col);
      if (t > 1) fig.set(p[0], p[1] - 1, col);
    });
    if (spec.browScar) { fig.set(39, 23, SKIN[spec.skin][0]); fig.set(39, 25, SKIN[spec.skin][0]); fig.set(40, 24, SKIN[spec.skin][0]); }
  }

  function eyes(fig, spec, mood, ramp) {
    var iris = EYE[spec.eyes] || EYE.brown;
    var glow = false;
    if (mood === "wolf") { iris = EYE.yellow; glow = true; }
    if (mood === "true") { iris = EYE.ember; glow = true; }
    if (mood === "fire") { iris = "#ffd98a"; glow = true; }
    if (mood === "hungry") { iris = EYE.red; glow = true; }
    if (spec.glowEyes) glow = true;
    var white = mood === "true" ? "#1a0a0e" : "#f4f1ea";
    var lash = INK;
    [[23, 0], [37, 1]].forEach(function (e) {
      var x0 = e[0], right = e[1];
      var y = 28;
      if (mood === "hushed") {
        fig.hline(x0, x0 + 3, y + 1, lash);
        return;
      }
      // upper lid
      fig.hline(x0, x0 + 3, y, lash);
      if (spec.lashes) { fig.set(right ? x0 + 4 : x0 - 1, y - 1, lash); fig.set(right ? x0 + 4 : x0 - 1, y, lash); }
      if (spec.shadowLid) fig.hline(x0, x0 + 3, y - 1, spec.shadowLid);
      var narrow = mood === "smile" || mood === "angry" || mood === "smirk" || spec.eyeStyle === "narrow";
      if (spec.eyeStyle === "heavy") fig.hline(x0 - (right ? 0 : 1), x0 + 3 + (right ? 1 : 0), y - 1, P.shade(ramp[2], -0.25));
      if (spec.eyeStyle === "narrow") { fig.set(right ? x0 + 4 : x0 - 1, y + 1, lash); }
      // eye row
      fig.set(x0, y + 1, white);
      fig.set(x0 + 1, y + 1, iris);
      fig.set(x0 + 2, y + 1, glow ? P.shade(iris, 0.45) : P.shade(iris, -0.55));
      fig.set(x0 + 3, y + 1, white);
      if (!narrow) {
        fig.set(x0 + 1, y + 2, P.shade(iris, -0.2));
        fig.set(x0 + 2, y + 2, P.shade(iris, -0.2));
        fig.set(x0, y + 2, ramp[2]);
        fig.set(x0 + 3, y + 2, ramp[2]);
      } else {
        fig.hline(x0, x0 + 3, y + 2, ramp[2]);
      }
      if (glow) { fig.set(x0 + 1, y + 1, P.shade(iris, 0.25)); }
      // catch-light
      if (!glow) fig.set(x0 + 1, y + 1, P.shade(iris, 0.35));
      if (mood === "sad") fig.set(x0 + 1, y + 3, "#9fd0ff");
    });
    if (mood === "sad") { fig.set(24, 32, "#9fd0ff"); fig.set(24, 33, "#9fd0ff"); fig.set(24, 34, "#9fd0ff"); }
  }

  function nose(fig, spec, ramp) {
    if (spec.nose === "button") {
      fig.set(33, 33, ramp[2]); fig.set(33, 34, ramp[2]);
      fig.set(31, 35, ramp[2]); fig.set(32, 35, ramp[1]); fig.set(33, 35, ramp[2]);
      fig.set(31, 33, ramp[0]);
      return;
    }
    if (spec.nose === "broad") {
      fig.set(29, 36, ramp[3]); fig.set(35, 36, ramp[3]); fig.set(29, 35, ramp[2]); fig.set(35, 35, ramp[3]);
    }
    if (spec.nose === "long") {
      fig.vline(33, 29, 30, ramp[2]);
    }
    var bx = spec.bentNose ? 1 : 0;
    fig.vline(33 + bx, 30, 35, ramp[2]);
    if (spec.bentNose) { fig.set(33, 30, ramp[2]); fig.set(33, 31, ramp[2]); }
    fig.set(30, 36, ramp[2]);
    fig.set(34, 36, ramp[3]);
    fig.set(31, 36, ramp[1]);
    fig.set(32, 36, ramp[2]);
    fig.set(33, 36, ramp[2]);
    fig.set(31, 33, ramp[0]);
    fig.set(31, 34, ramp[0]);
  }

  function mouth(fig, spec, mood, ramp) {
    var lip = spec.lips || P.shade(ramp[2], -0.05);
    var dark = P.shade(ramp[3], -0.4);
    var m = mood;
    if (m === "neutral" && spec.resting) m = spec.resting;
    if (m === "smile" || m === "fire") {
      fig.hline(30, 33, 40, dark);
      fig.set(29, 39, dark); fig.set(34, 39, dark);
      fig.hline(30, 33, 41, lip);
      if (spec.lips) fig.hline(30, 33, 39, lip);
    } else if (m === "smirk") {
      fig.hline(29, 33, 40, dark);
      fig.set(34, 39, dark);
      fig.hline(30, 32, 41, lip);
      if (spec.lips) fig.hline(30, 33, 39, lip);
    } else if (m === "angry" || m === "wolf" || m === "hungry" || m === "true") {
      fig.hline(29, 34, 40, dark);
      fig.hline(30, 33, 41, lip);
      if (m !== "angry") {
        fig.hline(29, 34, 40, "#2a0c10");
        fig.set(29, 41, "#f7f3ea"); fig.set(34, 41, "#f7f3ea");
      }
    } else if (m === "sad" || m === "hushed") {
      fig.hline(30, 33, 40, dark);
      fig.set(29, 41, dark); fig.set(34, 41, dark);
      fig.hline(31, 32, 41, lip);
    } else {
      fig.hline(30, 33, 40, dark);
      fig.hline(30, 33, 41, lip);
      if (spec.lips) fig.hline(30, 33, 39, lip);
    }
  }

  /* ---------------- hair ---------------- */

  function hairBack(fig, spec, hc) {
    var s = spec.style;
    if (s === "wavy" || s === "long") {
      fig.poly([[18, 22], [46, 22], [50, 50], [44, 55], [20, 55], [14, 50]], function (x, y) {
        return (x + Math.floor(y / 3)) % 5 === 0 ? hc[2] : (x < 24 ? hc[1] : hc[2]);
      });
    } else if (s === "wig") {
      fig.ellipse(32, 22, 19, 16, hc[1]);
      fig.ellipse(13, 35, 5, 6, hc[1]);
      fig.ellipse(51, 35, 5, 6, hc[2]);
    }
  }

  // The scalp region above a hairline. hairline(x) gives the lowest hair row at column x.
  function capFill(fig, hc, hairline, extra, shadeFn) {
    for (var y = 6; y <= 34; y++) {
      for (var x = 14; x <= 50; x++) {
        var nx = (x + 0.5 - HX) / (HRX + 1 + (extra || 0)), ny = (y + 0.5 - (HY - 0.6)) / (HRY + 0.9);
        if (nx * nx + ny * ny > 1) continue;
        if (y > hairline(x)) continue;
        fig.set(x, y, shadeFn ? shadeFn(x, y) : ((x < 27 && y < 16) ? hc[0] : (x > 40 ? hc[2] : hc[1])));
      }
    }
  }
  function arcLine(base, rise, power) {
    return function (x) { return base + Math.round(Math.pow(Math.abs(x + 0.5 - HX) / 12.5, power || 2.4) * rise); };
  }

  function hairFront(fig, spec, hc, rnd) {
    var s = spec.style;
    var x, y;
    if (s === "curls" || s === "mcurly") {
      capFill(fig, hc, function (x) { return 19 + (x % 3 === 0 ? 1 : 0) + Math.round(Math.pow(Math.abs(x + 0.5 - HX) / 12.5, 3) * 10); }, 0.8);
      for (var k = 0; k < 90; k++) {
        var cx = 17 + Math.floor(rnd() * 31), cy = 8 + Math.floor(rnd() * 13);
        if (fig.filled(cx, cy) && fig.filled(cx + 1, cy)) { fig.set(cx, cy, rnd() < 0.45 ? hc[0] : hc[2]); }
      }
      for (x = 20; x <= 43; x += 3) { fig.set(x, 21, hc[1]); fig.set(x + 1, 20, hc[2]); }
    } else if (s === "buzz") {
      capFill(fig, hc, arcLine(18, 9, 2.2), 0.2, function (x, y) {
        if (y > 16 && P.dither(x, y, 0.35)) return P.mix(hc[1], "#000000", 0.1);
        return (x < 26 && y < 15) ? P.mix(hc[1], hc[0], 0.5) : hc[1];
      });
    } else if (s === "slick") {
      capFill(fig, hc, function (x) { return (x === 31 || x === 32) ? 18 : 17 + Math.round(Math.pow(Math.abs(x + 0.5 - HX) / 12.5, 2.2) * 9); }, 0.4);
      for (x = 22; x <= 38; x++) fig.set(x, 13 + Math.round(Math.abs(x - 29) / 4), hc[0]);
      for (x = 25; x <= 40; x += 3) fig.line(x, 15, x + 3, 19, hc[2]);
    } else if (s === "wig") {
      for (y = 4; y <= 24; y++) for (x = 13; x <= 51; x++) {
        var wx = (x + 0.5 - HX) / 17.5, wy = (y - 21) / 16;
        if (wx * wx + wy * wy > 1) continue;
        var line = 17 + Math.round(Math.pow(Math.abs(x + 0.5 - HX) / 12.5, 2) * 7) + (x > 32 ? 1 : 0);
        if (y > line) continue;
        fig.set(x, y, (y < 11 && x < 32) ? hc[0] : (y > line - 2 ? hc[2] : hc[1]));
      }
      for (x = 20; x <= 36; x++) fig.set(x, 18 + Math.round((x - 20) / 6), hc[0]);
      for (y = 6; y <= 12; y += 3) fig.hline(18 + (y - 6), 26 + (y - 6), y, hc[0]);
      fig.ellipse(16, 33, 3, 6, hc[1]); fig.ellipse(48, 33, 3, 6, hc[2]);
      fig.set(15, 30, hc[0]); fig.set(15, 31, hc[0]);
    } else if (s === "updo") {
      fig.ellipse(32, 8, 8, 5.5, hc[1]);
      fig.set(28, 5, hc[0]); fig.set(29, 4, hc[0]); fig.set(30, 4, hc[0]);
      fig.hline(26, 37, 11, hc[2]);
      capFill(fig, hc, arcLine(18, 10), 0.4);
      for (y = 22; y <= 36; y++) {
        fig.set(18, y, y % 2 ? hc[1] : hc[0]); fig.set(19, y, y % 2 ? hc[2] : hc[1]);
        fig.set(44, y, y % 2 ? hc[2] : hc[1]); fig.set(45, y, y % 2 ? hc[1] : hc[2]);
      }
    } else if (s === "spikes") {
      capFill(fig, hc, arcLine(18, 8), 0.3);
      // tufts pointing outward along the crown
      for (var t = 0; t < 11; t++) {
        var ang = Math.PI * (1.08 + t * 0.084);
        var bx = HX + Math.cos(ang) * (HRX + 1), by = (HY - 1) + Math.sin(ang) * (HRY + 1);
        var len = 4 + (t % 3);
        var tx = bx + Math.cos(ang + (t % 2 ? 0.25 : -0.2)) * len, ty = by + Math.sin(ang + (t % 2 ? 0.25 : -0.2)) * len;
        var px = -Math.sin(ang) * 2, py = Math.cos(ang) * 2;
        fig.poly([[bx - px, by - py], [tx, ty], [bx + px, by + py]], t % 2 ? hc[1] : hc[0]);
      }
      if (spec.roots) for (x = 19; x <= 44; x++) { var r0 = arcLine(18, 8)(x); fig.set(x, r0, HAIR.brown[2]); if (P.dither(x, r0 - 1, 0.5)) fig.set(x, r0 - 1, HAIR.brown[1]); }
      [[24, 20], [25, 21], [30, 20], [31, 21], [37, 20], [38, 21]].forEach(function (p) { fig.set(p[0], p[1], hc[1]); });
    } else if (s === "perm") {
      var R = spec.small ? 13 : 16.5;
      var blobs = [];
      var n = spec.small ? 15 : 24;
      for (var b = 0; b < n; b++) {
        var a = Math.PI * 0.95 + (b / (n - 1)) * Math.PI * 1.1;
        var rr = R - (b % 2) * 2;
        blobs.push([HX + Math.cos(a) * rr, 22 + Math.sin(a) * (R - 3)]);
      }
      if (!spec.small) { blobs.push([15, 32]); blobs.push([49, 32]); }
      for (var c = 0; c < 7; c++) blobs.push([22 + c * 3.3, 13]);
      blobs.forEach(function (p) {
        fig.ellipse(p[0], p[1], 3, 3, p[0] < 30 ? hc[1] : hc[2]);
        fig.set(Math.round(p[0]) - 1, Math.round(p[1]) - 1, hc[0]);
      });
    } else if (s === "part") {
      capFill(fig, hc, function (x) { return (x > 26 ? 19 : 18) + Math.round(Math.pow(Math.abs(x + 0.5 - HX) / 12.5, 2.4) * 8); }, 0.5);
      for (y = 10; y <= 18; y++) fig.set(26, y, hc[2]);
      for (x = 27; x <= 43; x++) fig.set(x, 20 + (x > 39 ? 1 : 0), hc[1]);
      fig.line(28, 13, 40, 17, hc[0]);
    } else if (s === "cropped") {
      capFill(fig, hc, arcLine(17, 8), 0.1, function (x, y) { return P.dither(x, y, 0.75) ? hc[1] : hc[2]; });
    } else if (s === "thin") {
      capFill(fig, hc, arcLine(15, 12, 2), 0.3, function (x, y) {
        var dens = Math.abs(x + 0.5 - HX) < 7 ? 0.38 : 0.9;
        if (!P.dither(x, y, dens)) return null;
        return (x + y) % 4 ? hc[1] : hc[0];
      });
      fig.vline(19, 20, 29, hc[1]); fig.vline(44, 20, 29, hc[2]);
    } else if (s === "tonsure") {
      for (y = 20; y <= 33; y++) {
        var w = y < 23 || y > 31 ? 1 : 2;
        for (var i = 0; i < w; i++) {
          if (P.dither(18 + i, y, 0.8)) fig.set(18 + i, y, i ? hc[0] : hc[1]);
          if (P.dither(45 - i, y, 0.8)) fig.set(45 - i, y, i ? hc[1] : hc[2]);
        }
      }
      [[26, 13], [29, 12], [33, 12], [36, 13]].forEach(function (p) { fig.set(p[0], p[1], hc[0]); fig.set(p[0] + 1, p[1] + 1, hc[1]); });
    } else if (s === "crop") {
      capFill(fig, hc, function (x) { return 19 + (x % 4 === 0 ? 1 : 0) + (x % 7 === 3 ? -1 : 0) + Math.round(Math.pow(Math.abs(x + 0.5 - HX) / 12.5, 3) * 8); }, 0.3);
    } else if (s === "braid") {
      capFill(fig, hc, arcLine(18, 8), 0.1);
      for (y = 10; y <= 20; y++) fig.set(25, y, HAIR.white[1]);
      fig.set(24, 12, HAIR.white[0]); fig.set(26, 14, HAIR.white[2]);
    } else if (s === "wavy" || s === "long") {
      capFill(fig, hc, arcLine(18, 11), 0.8);
      for (y = 20; y <= 46; y++) {
        var off = (Math.floor(y / 4) % 2);
        fig.set(16 + off, y, hc[1]); fig.set(17 + off, y, hc[0]); fig.set(18 + off, y, hc[1]);
        fig.set(45 - off, y, hc[2]); fig.set(46 - off, y, hc[1]); fig.set(47 - off, y, hc[2]);
      }
      for (x = 22; x <= 41; x++) if (x % 5) fig.set(x, 19 + (x % 5 === 0 ? 1 : 0), hc[1]);
    } else if (s === "short") {
      capFill(fig, hc, arcLine(18, 9), 0.5);
      for (x = 21; x <= 42; x++) if (x % 3) fig.set(x, 19, hc[1]);
    } else if (s === "messy") {
      capFill(fig, hc, arcLine(18, 9), 0.7);
      [[21, 19], [24, 20], [27, 20], [31, 21], [35, 20], [38, 20], [41, 19]].forEach(function (p) { fig.set(p[0], p[1], hc[1]); fig.set(p[0], p[1] + 1, hc[2]); });
      [[18, 12], [23, 8], [30, 6], [37, 7], [44, 11]].forEach(function (p) { fig.set(p[0], p[1], hc[1]); fig.set(p[0] + 1, p[1] + 1, hc[0]); fig.set(p[0], p[1] + 1, hc[1]); });
      if (spec.roots) for (x = 19; x <= 44; x++) { var r1 = arcLine(18, 9)(x); if (P.dither(x, r1 - 1, 0.6)) fig.set(x, r1 - 1, HAIR.brown[1]); }
    }
  }

  function facialHair(fig, spec, hc, ramp) {
    function mouthBox(x, y) { return y >= 39 && y <= 41 && x >= 29 && x <= 34; }
    // jaw region: at the centre it starts at `top`; toward the ears it climbs into sideburns
    function jawRegion(x, y, top) {
      if (!inHead(x, y, spec.jaw)) return false;
      var dx = Math.abs(x + 0.5 - HX);
      var line = dx > 9 ? 29 : top - Math.max(0, dx - 5) * 1.1;
      return y >= line;
    }
    if (spec.beard === "shadow") {
      for (var sy = 33; sy <= CHIN; sy++) for (var sx = 16; sx <= 48; sx++) {
        if (!jawRegion(sx, sy, 38) || mouthBox(sx, sy)) continue;
        if (P.dither(sx, sy, 0.22)) fig.set(sx, sy, P.mix(hc[2], ramp[2], 0.55));
      }
    }
    if (spec.beard === "stubble") {
      for (var y = 28; y <= CHIN; y++) for (var x = 16; x <= 48; x++) {
        if (!jawRegion(x, y, 37) || mouthBox(x, y)) continue;
        if (P.dither(x, y, 0.38)) fig.set(x, y, P.mix(hc[2], ramp[2], 0.35));
      }
    } else if (spec.beard === "full" || spec.beard === "trim") {
      var top = spec.beard === "full" ? 35 : 36;
      var drop = spec.beard === "full" ? 3 : 1;
      for (var by = 28; by <= CHIN + drop; by++) for (var bx = 15; bx <= 49; bx++) {
        var inside = by <= CHIN ? jawRegion(bx, by, top) : Math.abs(bx + 0.5 - HX) <= 4.5 - (by - CHIN) * 1.2;
        if (!inside || mouthBox(bx, by)) continue;
        var col = hc[1];
        if ((bx * 3 + by * 5) % 7 === 0) col = hc[2];
        if (bx > 38) col = (bx + by) % 3 ? hc[2] : hc[1];
        if (bx < 26 && (bx + by) % 5 === 0) col = hc[0];
        fig.set(bx, by, col);
      }
      fig.hline(29, 34, 38, hc[1]);
      fig.set(28, 39, hc[1]); fig.set(35, 39, hc[2]);
      fig.hline(30, 33, 41, spec.lips || P.shade(ramp[2], -0.05));
    }
    if (spec.mustache) {
      fig.hline(29, 34, 38, hc[1]);
      fig.set(28, 39, hc[1]); fig.set(35, 39, hc[2]);
      fig.set(30, 38, hc[0]);
    }
  }

  /* ---------------- clothes ---------------- */

  function torso(fig, spec) {
    var c = spec.cloth;
    var shape = [[2, 64], [6, 55], [17, 49], [25, 47], [39, 47], [47, 49], [58, 55], [62, 64]];
    fig.poly(shape, function (x, y) { return x > 45 ? c[2] : (x < 19 && y < 58 ? c[0] : c[1]); });
    var k = spec.clothes;
    if (k === "coat") {
      fig.poly([[25, 47], [32, 59], [22, 64], [15, 53]], c[0]);
      fig.poly([[39, 47], [32, 59], [42, 64], [49, 53]], c[2]);
      if (spec.scarf) {
        fig.poly([[24, 45], [40, 45], [39, 50], [25, 50]], spec.scarf);
        fig.hline(25, 39, 48, P.shade(spec.scarf, -0.3));
        fig.poly([[27, 50], [31, 50], [30, 60], [26, 60]], spec.scarf);
        fig.hline(26, 30, 60, P.shade(spec.scarf, -0.3));
      }
    } else if (k === "parka") {
      for (var fx = 10; fx <= 54; fx++) {
        var dx = Math.abs(fx + 0.5 - 32);
        var top = 46 + Math.round(dx * dx / 90) - ((fx * 7) % 3 === 0 ? 1 : 0);
        var bot = 53 + Math.round(dx * dx / 120) + ((fx * 5) % 3 === 0 ? 1 : 0);
        for (var fy = top; fy <= bot; fy++) {
          var fc = spec.fur;
          if ((fx + fy * 2) % 5 === 0) fc = P.shade(spec.fur, 0.35);
          else if ((fx * 3 + fy) % 7 === 0 || fy === bot) fc = P.shade(spec.fur, -0.3);
          fig.set(fx, fy, fc);
        }
      }
      fig.poly([[26, 47], [38, 47], [36, 53], [28, 53]], P.shade(spec.fur, -0.55));
      fig.vline(32, 56, 64, P.shade(c[1], -0.4));
      fig.hline(8, 56, 59, c[2]); fig.hline(6, 58, 63, c[2]);
    } else if (k === "suit") {
      fig.poly([[27, 47], [32, 61], [37, 47]], spec.shirt);
      fig.poly([[25, 47], [32, 61], [21, 64], [15, 53]], c[0]);
      fig.poly([[39, 47], [32, 61], [43, 64], [49, 53]], c[0]);
      fig.hline(22, 26, 52, P.shade(c[0], 0.15));
      fig.ellipse(21, 55, 2.2, 2.2, spec.flower); fig.set(20, 54, P.shade(spec.flower, 0.45)); fig.set(22, 58, "#2d6a33"); fig.set(23, 59, "#2d6a33");
    } else if (k === "robe") {
      fig.poly([[26, 47], [32, 57], [38, 47]], c[2]);
      for (var t = 0; t < 11; t++) { fig.set(26 + t * 0.55, 47 + t, spec.trim); fig.set(38 - t * 0.55, 47 + t, spec.trim); }
      fig.hline(16, 48, 50, spec.trim);
      for (var tx = 17; tx < 48; tx += 3) fig.set(tx, 51, P.shade(spec.trim, -0.3));
    } else if (k === "gown") {
      fig.poly(shape, function (x, y) { return ((x * 7 + y * 13) % 11 === 0) ? "#f6fffd" : (x > 45 ? c[2] : ((x + y) % 5 === 0 ? c[0] : c[1])); });
      fig.poly([[23, 47], [41, 47], [37, 56], [27, 56]], SKIN[spec.skin][2]);
      for (var bx = 4; bx <= 60; bx++) {
        var by = 52 + Math.round(Math.sin(bx / 3) * 1.5) + (bx < 20 || bx > 44 ? 2 : 0);
        fig.set(bx, by, spec.boa); fig.set(bx, by + 1, P.shade(spec.boa, bx % 2 ? 0.3 : -0.2)); fig.set(bx, by - 1, P.shade(spec.boa, 0.4));
        if (bx % 3 === 0) fig.set(bx, by - 2, P.shade(spec.boa, 0.2));
      }
    } else if (k === "undertaker") {
      fig.poly([[27, 47], [32, 59], [37, 47]], spec.shirt);
      fig.poly([[31, 49], [33, 49], [33, 59], [31, 59]], spec.tie);
      fig.poly([[25, 47], [31, 59], [21, 64], [15, 53]], c[0]);
      fig.poly([[39, 47], [33, 59], [43, 64], [49, 53]], c[1]);
    } else if (k === "cardigan") {
      fig.poly([[26, 47], [32, 57], [38, 47]], spec.shirt);
      fig.vline(32, 57, 64, c[2]);
      for (var cy = 58; cy < 64; cy += 3) fig.set(33, cy, "#efe2c4");
      if (spec.cross) { fig.set(32, 51, "#e8c14a"); fig.set(31, 52, "#e8c14a"); fig.set(32, 52, "#e8c14a"); fig.set(33, 52, "#e8c14a"); fig.set(32, 53, "#e8c14a"); }
    } else if (k === "regency") {
      fig.poly([[24, 44], [40, 44], [41, 53], [23, 53]], spec.lace);
      for (var lx = 24; lx <= 40; lx += 2) fig.set(lx, 44, P.shade(spec.lace, -0.2));
      if (spec.pearls) for (var px = 25; px <= 39; px += 2) fig.set(px, 55 - Math.round(Math.abs(px - 32) / 4), "#fffaf0");
    } else if (k === "leather") {
      fig.poly([[26, 47], [32, 61], [38, 47]], spec.tee);
      fig.poly([[25, 47], [31, 61], [19, 64], [14, 54]], c[0]);
      fig.poly([[39, 47], [33, 61], [45, 64], [50, 54]], c[1]);
      fig.set(20, 57, "#c9c9d1"); fig.set(44, 57, "#c9c9d1");
      if (spec.choker) { fig.hline(27, 36, 45, INK); fig.set(31, 46, "#ff5fb3"); fig.set(32, 46, "#ff5fb3"); }
    } else if (k === "porter") {
      fig.vline(32, 48, 64, c[2]);
      for (var py = 51; py < 64; py += 4) { fig.set(29, py, spec.buttons); fig.set(35, py, spec.buttons); }
      fig.poly([[26, 46], [38, 46], [37, 49], [27, 49]], "#f1efe8");
    } else if (k === "apron") {
      fig.poly([[21, 51], [43, 51], [45, 64], [19, 64]], spec.apron);
      fig.line(21, 51, 26, 47, spec.apron); fig.line(43, 51, 38, 47, spec.apron);
      fig.set(30, 57, "#d9c27a"); fig.set(31, 58, "#d9c27a"); fig.set(31, 59, "#d9c27a"); fig.set(32, 59, "#d9c27a");
    } else if (k === "cassock") {
      fig.poly([[28, 46], [36, 46], [36, 49], [28, 49]], INK);
      fig.rect(31, 47, 2, 2, spec.collar);
      for (var ky = 51; ky < 64; ky += 3) fig.set(32, ky, "#3a3942");
    }
    if (spec.pendant === "bell") {
      fig.line(27, 48, 32, 54, "#6b4a2b"); fig.line(37, 48, 32, 54, "#6b4a2b");
      fig.poly([[31, 55], [33, 55], [35, 60], [29, 60]], "#d9a441");
      fig.set(31, 56, "#ffe29a"); fig.hline(29, 35, 60, "#8f6420"); fig.set(32, 61, "#8f6420");
    }
    if (spec.chain) {
      for (var ch = 0; ch < 11; ch++) fig.set(27 + ch, 50 + Math.round(Math.sin(ch / 10 * Math.PI) * 3), ch % 2 ? "#ffd65a" : "#c9962b");
    }
  }

  /* ---------------- accessories ---------------- */

  function accessories(fig, spec, mood, ramp) {
    if (spec.style === "braid") {
      var hcb = HAIR[spec.hair];
      for (var bi = 0; bi < 7; bi++) fig.ellipse(21 - bi * 0.6, 44 + bi * 3, 2.3, 1.9, bi % 2 ? hcb[2] : hcb[1]);
      fig.set(17, 64 - 1, hcb[2]);
    }
    if (spec.cheek) { fig.hline(20, 22, 35, ramp[2]); fig.set(23, 36, ramp[2]); fig.hline(41, 43, 35, ramp[3]); fig.set(40, 36, ramp[3]); }
    if (spec.pencil) { fig.hline(30, 33, 38, HAIR.black[1]); fig.set(29, 39, HAIR.black[1]); fig.set(34, 39, HAIR.black[1]); }
    if (spec.toque) {
      // his nonna's hand-knitted toque: lumpy red wool, a ribbed cuff, a white pompom
      fig.poly([[18, 20], [46, 20], [44, 11], [38, 7], [26, 7], [20, 11]], function (x, y) { return x > 40 ? "#8e1c24" : (x < 25 && y < 14 ? "#d8424a" : "#b3242e"); });
      for (var ty = 16; ty <= 20; ty++) for (var tx0 = 17; tx0 <= 47; tx0++) fig.set(tx0, ty, (tx0 % 2) ? "#9a1e28" : "#c23a42");
      for (var tx = 20; tx <= 44; tx += 3) { fig.set(tx, 11 + (tx % 2), "#9a1e28"); fig.set(tx + 1, 13, "#9a1e28"); }
      fig.ellipse(32, 5, 3, 2.5, "#f2f2f2"); fig.set(31, 4, "#ffffff"); fig.set(34, 6, "#c9c9d1");
    }
    if (spec.scar) { fig.set(34, 44, ramp[0]); fig.set(35, 45, ramp[0]); }
    if (spec.freckles) [[21, 33], [23, 34], [40, 33], [42, 34], [22, 35], [41, 35]].forEach(function (p) { fig.set(p[0], p[1], ramp[2]); });
    if (spec.mole) fig.set(37, 38, INK);
    if (spec.wrinkles) { fig.set(21, 30, ramp[2]); fig.set(42, 30, ramp[3]); fig.set(28, 42, ramp[2]); fig.set(35, 42, ramp[2]); fig.set(27, 37, ramp[2]); }
    if (spec.earrings) { fig.ellipse(18.6, 37, 1.3, 2.2, spec.earrings); fig.ellipse(45.4, 37, 1.3, 2.2, spec.earrings); }
    if (spec.earring) fig.set(45, 33, "#e8e8ee");
    if (spec.glasses) {
      var gc = spec.glasses === "cat" ? "#7a2b4a" : "#2a2622";
      var big = spec.glasses === "big";
      [24.5, 38.5].forEach(function (gx) {
        fig.ring(gx, 29.5, big ? 3.8 : 3.2, big ? 3.2 : 2.6, gc);
        fig.set(Math.round(gx) - 2, 28, "#ffffff");
      });
      fig.hline(28, 35, 29, gc);
      if (spec.glasses === "cat") { fig.set(20, 27, gc); fig.set(43, 27, gc); }
    }
    if (spec.cigarette) {
      fig.hline(35, 40, 41, "#f2efe6"); fig.set(40, 41, "#ff7a2a"); fig.set(41, 41, "#8a8a8a");
      fig.set(42, 39, "#b9b9c4"); fig.set(43, 37, "#9a9aa8"); fig.set(42, 35, "#8a8a98"); fig.set(43, 33, "#7a7a88");
    }
    if (spec.loupe) { fig.hline(19, 44, 17, "#3a2a20"); fig.ellipse(38, 16, 3, 2.5, "#1c1c22"); fig.ellipse(38, 16, 1.6, 1.3, "#9fd6ff"); }
    if (spec.cap) {
      fig.poly([[17, 18], [47, 18], [45, 7], [19, 7]], "#1d2548");
      fig.hline(15, 49, 19, "#0f142b"); fig.hline(16, 48, 20, "#0f142b");
      fig.rect(29, 10, 6, 4, "#e2b64a"); fig.set(31, 11, "#fff2b8");
      fig.hline(19, 45, 17, "#2b3566");
    }
    if (mood === "true") {
      fig.poly([[22, 15], [18, 7], [15, 2], [20, 5], [25, 12]], "#2a0f14");
      fig.poly([[42, 15], [46, 7], [49, 2], [44, 5], [39, 12]], "#2a0f14");
      fig.set(17, 4, "#6a2a34"); fig.set(47, 4, "#6a2a34");
    }
    if (mood === "wolf") {
      [[18, 35], [17, 38], [46, 35], [47, 38], [19, 42], [45, 42], [17, 32], [47, 32]].forEach(function (p) { fig.set(p[0], p[1], HAIR.salt[1]); fig.set(p[0], p[1] + 1, HAIR.salt[2]); });
    }
  }

  /* ---------------- backgrounds ---------------- */

  function background(c, spec, id) {
    var bg = spec.bg;
    c.vgrad(0, 0, W, H, [bg[0], P.mix(bg[0], bg[1], 0.5), bg[1]]);
    var r = P.rng(id.length * 7919 + 17);
    var m = spec.motif;
    var i;
    if (m === "glass") {
      for (i = 0; i < 5; i++) c.ring(32, 64, 20 + i * 9, 26 + i * 9, P.mix(bg[0], "#d9a441", 0.25 - i * 0.03));
      for (i = 0; i < 12; i++) c.set(Math.floor(r() * 64), Math.floor(r() * 40), P.mix(bg[0], "#ffe29a", 0.5));
    } else if (m === "moon") {
      c.ellipse(44, 18, 11, 11, P.mix(bg[0], "#fff4d8", 0.55));
      c.ellipse(41, 15, 2, 2, P.mix(bg[0], "#fff4d8", 0.35));
      c.ellipse(48, 22, 3, 2, P.mix(bg[0], "#fff4d8", 0.4));
    } else if (m === "petals") {
      for (i = 0; i < 16; i++) { var px = Math.floor(r() * 64), py = Math.floor(r() * 64); c.set(px, py, "#ff4d6d"); c.set(px + 1, py, "#b3122e"); }
    } else if (m === "smoke") {
      for (i = 0; i < 6; i++) {
        var sx = r() * 64, sy = r() * 64;
        for (var t = 0; t < 14; t++) c.set(Math.round(sx + Math.sin(t / 2) * 3), Math.round(sy - t), P.mix(bg[1], "#ff8a3a", 0.25));
      }
    } else if (m === "spot") {
      c.ellipse(32, 26, 26, 30, function (x, y) { return P.dither(x, y, 0.5) ? P.mix(bg[0], "#ffd1f0", 0.35) : P.mix(bg[0], "#ffd1f0", 0.2); });
    } else if (m === "lilies") {
      for (i = 0; i < 4; i++) { var lx = 4 + i * 16; c.ellipse(lx, 12 + (i % 2) * 8, 3, 2, "#f4f2ea"); c.set(lx, 12 + (i % 2) * 8, "#e8c14a"); }
    } else if (m === "dryers") {
      [[10, 14], [54, 14], [10, 40], [54, 40]].forEach(function (d) { c.ring(d[0], d[1], 7, 7, "#9ad7df"); c.ellipse(d[0], d[1], 5, 5, P.mix(bg[1], "#9ad7df", 0.25)); });
    } else if (m === "candle") {
      c.ellipse(10, 20, 6, 8, P.mix(bg[0], "#ffcf6a", 0.25)); c.rect(9, 22, 3, 12, "#efe6cf"); c.set(10, 20, "#ffd76a"); c.set(10, 19, "#fff3b0");
    } else if (m === "beams") {
      for (i = 0; i < 4; i++) c.line(i * 18, 0, 20 + i * 8, 64, P.mix(bg[0], ["#27f5ff", "#ff3df2", "#8aff5c", "#ffe95c"][i], 0.45));
    } else if (m === "lantern") {
      c.ellipse(52, 16, 8, 8, P.mix(bg[0], "#ffcf6a", 0.25)); c.rect(50, 13, 5, 7, "#f8d27a"); c.hline(49, 55, 12, "#3a2410");
      c.hline(0, 63, 58, "#3a2410"); c.hline(0, 63, 61, "#3a2410");
    } else if (m === "keys") {
      for (i = 0; i < 7; i++) { var kx = 4 + i * 9; c.vline(kx, 0, 6 + (i % 3) * 3, "#5a3a14"); c.ellipse(kx, 8 + (i % 3) * 3, 1.6, 1.6, "#e8c14a"); c.vline(kx, 10 + (i % 3) * 3, 14 + (i % 3) * 3, "#c9962b"); }
    } else if (m === "window") {
      c.rect(44, 6, 16, 20, P.mix(bg[0], "#ffffff", 0.35)); c.vline(52, 6, 25, bg[1]); c.hline(44, 59, 15, bg[1]);
    } else if (m === "rose") {
      for (i = 0; i < 12; i++) {
        var a = i / 12 * Math.PI * 2;
        c.line(32, 22, 32 + Math.cos(a) * 30, 22 + Math.sin(a) * 30, P.mix(bg[0], ["#c83a3a", "#3a6ac8", "#d9a441"][i % 3], 0.35));
      }
      c.ring(32, 22, 29, 29, P.mix(bg[0], "#d9a441", 0.4));
    }
  }

  /* ---------------- the angel ---------------- */

  function angel(mood) {
    var c = P.canvas(W, H);
    c.vgrad(0, 0, W, H, ["#fff1b8", "#f2c460", "#b0782a"]);
    for (var i = 0; i < 16; i++) {
      var a = i / 16 * Math.PI * 2;
      c.line(32, 30, 32 + Math.cos(a) * 40, 30 + Math.sin(a) * 40, i % 2 ? "#fff8d6" : "#ffe08a");
    }
    c.ring(32, 12, 14, 4, "#fffbe6"); c.ring(32, 12, 13, 3, "#ffe38f");
    var bell = [[26, 18], [38, 18], [41, 24], [43, 40], [48, 50], [16, 50], [21, 40], [23, 24]];
    c.poly(bell, function (x, y) { return x < 28 ? "#e0a84e" : x > 40 ? "#7a4f1a" : "#b8792c"; });
    c.hline(15, 49, 50, "#5a3510"); c.hline(16, 48, 51, "#3a2208");
    c.hline(22, 42, 44, "#e0a84e");
    c.ellipse(32, 18, 5, 2, "#8a5a1e");
    var open = mood !== "hushed";
    c.ellipse(32, 36, 7, open ? 4 : 1, "#fffdf2");
    if (open) { c.ellipse(32, 36, 3, 3, "#2a6ac8"); c.ellipse(32, 36, 1.4, 1.4, "#0a0a18"); c.set(31, 35, "#ffffff"); }
    c.hline(24, 40, 31, "#5a3510");
    return c;
  }

  /* ---------------- composition ---------------- */

  function lookSpec(v) {
    v = v || {};
    var styles = ["short", "curls", "buzz", "long", "messy"];
    var beards = [null, "stubble", "trim", "mustache"];
    var s = {
      skin: SKIN_ORDER[(v.look_skin | 0) % SKIN_ORDER.length],
      hair: HAIR_ORDER[(v.look_hair | 0) % HAIR_ORDER.length],
      style: styles[(v.look_style | 0) % styles.length],
      eyes: EYE_ORDER[(v.look_eyes | 0) % EYE_ORDER.length],
      brows: 2, clothes: "work", cloth: ["#a0784a", "#7c5a33", "#553c20"], hood: "#5d6470",
      bg: ["#1b2748", "#0b1024"], motif: "snow", jaw: 1
    };
    var b = beards[(v.look_beard | 0) % beards.length];
    if (b === "mustache") s.mustache = true; else if (b) s.beard = b;
    return s;
  }

  function workJacket(fig, spec) {
    var c = spec.cloth;
    fig.poly([[4, 64], [8, 54], [18, 48], [26, 46], [38, 46], [46, 48], [56, 54], [60, 64]], function (x, y) { return x > 44 ? c[2] : (x < 20 && y < 58 ? c[0] : c[1]); });
    fig.poly([[25, 45], [39, 45], [36, 53], [28, 53]], spec.hood);
    fig.hline(27, 37, 46, P.shade(spec.hood, 0.2));
    fig.poly([[24, 46], [30, 55], [24, 64], [17, 52]], c[0]);
    fig.poly([[40, 46], [34, 55], [40, 64], [47, 52]], c[2]);
    fig.set(29, 54, "#d8d2c4"); fig.set(35, 54, "#d8d2c4");
    fig.rect(12, 57, 6, 4, c[2]); fig.hline(12, 17, 57, P.shade(c[0], 0.2));
  }

  function drawPerson(id, mood, vars) {
    var spec = id === "mc" ? lookSpec(vars) : SPECS[id];
    if (!spec) throw new Error("No portrait spec for " + id);
    if (spec.angel) return angel(mood);
    mood = mood || "neutral";
    var c = P.canvas(W, H);
    if (spec.motif === "snow") {
      c.vgrad(0, 0, W, H, [spec.bg[0], P.mix(spec.bg[0], spec.bg[1], 0.5), spec.bg[1]]);
      var sr = P.rng(99);
      for (var s = 0; s < 40; s++) c.set(Math.floor(sr() * 64), Math.floor(sr() * 64), sr() < 0.3 ? "#ffffff" : "#9fb3d9");
    } else background(c, spec, id);

    var fig = P.canvas(W, H);
    var ramp = SKIN[spec.skin];
    var hc = HAIR[spec.hair];
    var rnd = P.rng(id.charCodeAt(0) * 131 + id.length);
    hairBack(fig, spec, hc);
    if (spec.clothes === "work") workJacket(fig, spec); else torso(fig, spec);
    drawHead(fig, spec, ramp);
    eyes(fig, spec, mood, ramp);
    brows(fig, spec, mood, P.shade(hc[2], -0.2));
    nose(fig, spec, ramp);
    mouth(fig, spec, mood, ramp);
    facialHair(fig, spec, hc, ramp);
    hairFront(fig, spec, hc, rnd);
    accessories(fig, spec, mood, ramp);
    // coloured rim light on the shadow side, from the background
    var rim = P.mix(spec.bg[0], "#ffffff", 0.35);
    var edge = P.canvas(W, H);
    edge.data.set(fig.data);
    for (var ry = 0; ry < H; ry++) for (var rx = 1; rx < W - 1; rx++) {
      if (edge.filled(rx, ry) && !edge.filled(rx + 1, ry) && rx > 32) { var p0 = edge.get(rx, ry); fig.set(rx, ry, P.mix(p0, rim, 0.45)); }
    }
    fig.outline(INK);

    if (mood === "fire" || (spec.glowEyes && mood === "fire")) {
      var glow = P.canvas(W, H);
      glow.data.set(fig.data);
      glow.map(function (p) { return p[3] ? [255, 120, 40, 255] : null; });
      glow.outline("#ff8a2a");
      glow.outline("#ff5a1a55");
      c.blit(glow, 0, 0, 0.8);
    }
    if (spec.ghost) {
      c.blit(fig, 0, 0, 0.72);
      c.map(function (p, x, y) { return y % 3 === 0 ? [Math.min(255, p[0] + 10), Math.min(255, p[1] + 18), Math.min(255, p[2] + 28), 255] : null; });
    } else {
      c.blit(fig, 0, 0, 1);
    }
    if (mood === "fire") {
      var fr = P.rng(7);
      for (var f = 0; f < 24; f++) { var fx = 16 + Math.floor(fr() * 32), fy = 4 + Math.floor(fr() * 14); c.set(fx, fy, fr() < 0.5 ? "#ffcf5a" : "#ff6a1f"); }
    }
    if (mood === "hushed") c.map(function (p) { var g = Math.round(p[0] * 0.3 + p[1] * 0.5 + p[2] * 0.2); return [g, g, Math.min(255, g + 12), p[3]]; });
    // frame
    for (var i = 0; i < W; i++) { c.set(i, 0, INK); c.set(i, H - 1, INK); c.set(0, i, INK); c.set(W - 1, i, INK); }
    return c;
  }

  var cache = {};
  function draw(id, mood, vars) {
    var key = id + ":" + (mood || "neutral") + (id === "mc" ? ":" + [vars && vars.look_skin, vars && vars.look_hair, vars && vars.look_style, vars && vars.look_beard, vars && vars.look_eyes].join(",") : "");
    if (!cache[key]) cache[key] = drawPerson(id, mood, vars);
    return { canvas: cache[key], key: key };
  }

  function url(id, mood, vars) {
    var d = draw(id, mood, vars);
    return P.toDataURL(d.canvas, "p:" + d.key);
  }

  /** A 36×36 crop around the face, for toasts, options and phone avatars. */
  function faceUrl(id, mood, vars) {
    var d = draw(id, mood, vars);
    var key = "f:" + d.key;
    var crop = P.canvas(36, 36);
    for (var y = 0; y < 36; y++) for (var x = 0; x < 36; x++) {
      var p = d.canvas.get(x + 14, y + 8);
      if (p) crop.set(x, y, p);
    }
    for (var i = 0; i < 36; i++) { crop.set(i, 0, INK); crop.set(i, 35, INK); crop.set(0, i, INK); crop.set(35, i, INK); }
    return P.toDataURL(crop, key);
  }

  NB.portraits = {
    ids: Object.keys(SPECS),
    specs: SPECS,
    draw: function (id, mood, vars) { return draw(id, mood, vars).canvas; },
    url: url,
    faceUrl: faceUrl,
    lookOptions: { look_skin: SKIN_ORDER.length, look_hair: HAIR_ORDER.length, look_style: 5, look_beard: 4, look_eyes: EYE_ORDER.length },
    lookLabels: {
      look_skin: ["Porcelain", "Fair", "Olive", "Tan", "Brown", "Deep"],
      look_hair: ["Black", "Espresso", "Brown", "Auburn", "Blond", "Grey"],
      look_style: ["Short", "Curly", "Buzzed", "Long", "Messy"],
      look_beard: ["Clean-shaven", "Stubble", "Beard", "Moustache"],
      look_eyes: ["Brown", "Blue", "Green", "Grey"]
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
