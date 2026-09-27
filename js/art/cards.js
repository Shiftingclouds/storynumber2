/* Nuit Blanche — pixel-art title cards and scene illustrations (192×80).
 * One painter per card. NB.cards.draw(id) -> Canvas; NB.cards.url(id) -> data URL (browser).
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var P = NB.pixel;
  var W = 192, H = 80;
  var INK = "#0b0714";

  /* ---------------- shared scenery ---------------- */

  function sky(c, stops, h) { c.vgrad(0, 0, W, h || H, stops); }

  function stars(c, n, seed, maxY, cols) {
    var r = P.rng(seed);
    for (var i = 0; i < n; i++) {
      var x = Math.floor(r() * W), y = Math.floor(r() * (maxY || 40));
      c.set(x, y, (cols || ["#ffffff", "#bcd0ff", "#8fa4d8"])[Math.floor(r() * 3)]);
      if (r() < 0.08) { c.set(x + 1, y, "#8fa4d8"); c.set(x - 1, y, "#8fa4d8"); c.set(x, y + 1, "#8fa4d8"); c.set(x, y - 1, "#8fa4d8"); }
    }
  }

  function moon(c, x, y, r, col, glow) {
    if (glow) c.ellipse(x, y, r + 5, r + 5, function (px, py) { return P.dither(px, py, 0.3) ? glow : null; });
    c.ellipse(x, y, r, r, col || "#fff4d6");
    c.ellipse(x - r * 0.3, y - r * 0.2, r * 0.22, r * 0.22, P.shade(col || "#fff4d6", -0.12));
    c.ellipse(x + r * 0.35, y + r * 0.3, r * 0.15, r * 0.15, P.shade(col || "#fff4d6", -0.1));
  }

  function snow(c, n, seed, cols) {
    var r = P.rng(seed);
    for (var i = 0; i < n; i++) c.set(Math.floor(r() * W), Math.floor(r() * H), (cols || ["#ffffff", "#dfe8ff", "#b8c6e8"])[Math.floor(r() * 3)]);
  }

  /** Buildings with lit windows between x0 and x1, standing on baseY. */
  function skyline(c, x0, x1, baseY, seed, o) {
    o = o || {};
    var r = P.rng(seed);
    var x = x0;
    while (x < x1) {
      var bw = 5 + Math.floor(r() * (o.wide || 10));
      var bh = (o.min || 8) + Math.floor(r() * (o.max || 22));
      var col = (o.cols || ["#141a33", "#10152b", "#1a2140"])[Math.floor(r() * 3)];
      c.rect(x, baseY - bh, bw, bh, col);
      if (r() < 0.25) c.rect(x + Math.floor(bw / 2), baseY - bh - 3, 1, 3, col);
      for (var wy = baseY - bh + 2; wy < baseY - 1; wy += 3) {
        for (var wx = x + 1; wx < x + bw - 1; wx += 2) {
          if (r() < (o.lit || 0.28)) c.set(wx, wy, (o.win || ["#ffd88a", "#ffe9b8", "#9fd0ff"])[Math.floor(r() * 3)]);
        }
      }
      x += bw + (r() < 0.3 ? 1 : 0);
    }
  }

  function ground(c, y, col, col2) {
    c.rect(0, y, W, H - y, col);
    if (col2) for (var x = 0; x < W; x++) if (P.dither(x, y, 0.5)) c.set(x, y, col2);
  }

  function person(c, x, baseY, h, col, o) {
    o = o || {};
    var hr = Math.max(1, Math.round(h / 7));
    c.ellipse(x, baseY - h + hr, hr, hr, col);
    c.poly([[x - hr - 1, baseY - h + hr * 2 + 1], [x + hr + 1, baseY - h + hr * 2 + 1], [x + hr + (o.skirt ? 3 : 1), baseY], [x - hr - (o.skirt ? 3 : 1), baseY]], col);
    if (o.arm) c.line(x + hr, baseY - h + hr * 3, x + hr + o.arm[0], baseY - h + hr * 3 + o.arm[1], col);
    if (o.arm2) c.line(x - hr, baseY - h + hr * 3, x - hr + o.arm2[0], baseY - h + hr * 3 + o.arm2[1], col);
  }

  function wolf(c, x, baseY, s, col, howl) {
    // side-view wolf facing right; s = scale
    var k = s || 1;
    var stand = [[0, -9], [4, -11], [14, -11], [16, -13], [17, -16], [18, -14], [19, -17], [20, -14], [24, -12], [24, -11], [20, -10], [18, -8],
      [18, 0], [16, 0], [16, -6], [8, -6], [7, 0], [5, 0], [5, -6], [3, -7], [-3, -5], [-1, -8]];
    var howling = [[0, -9], [4, -11], [13, -12], [15, -14], [16, -17], [17, -16], [18, -19], [21, -23], [22, -22], [20, -17], [19, -14], [18, -11],
      [18, 0], [16, 0], [16, -6], [8, -6], [7, 0], [5, 0], [5, -6], [3, -7], [-3, -5], [-1, -8]];
    var pts = (howl ? howling : stand).map(function (p) { return [x + p[0] * k, baseY + p[1] * k]; });
    c.poly(pts, col);
    var e = howl ? [18, -16] : [19, -13];
    c.set(Math.round(x + e[0] * k), Math.round(baseY + e[1] * k), "#ffd23a");
  }

  function bell(c, x, y, w, h, cols) {
    var hw = w / 2;
    c.poly([[x - hw * 0.45, y], [x + hw * 0.45, y], [x + hw * 0.6, y + h * 0.35], [x + hw * 0.75, y + h * 0.8], [x + hw, y + h],
      [x - hw, y + h], [x - hw * 0.75, y + h * 0.8], [x - hw * 0.6, y + h * 0.35]], function (px) {
      return px < x - hw * 0.25 ? cols[0] : px > x + hw * 0.35 ? cols[2] : cols[1];
    });
    c.hline(x - hw, x + hw, y + h, cols[2]);
    c.rect(x - 1, y - 3, 3, 3, cols[2]);
  }

  function lamp(c, x, y, col) {
    c.ellipse(x, y, 6, 6, function (px, py) { return P.dither(px, py, 0.35) ? P.mix(col, "#000000", 0.35) : null; });
    c.ellipse(x, y, 3, 3, function (px, py) { return P.dither(px, py, 0.5) ? col : null; });
    c.set(x, y, "#ffffff");
  }

  /* ---------------- the cards ---------------- */

  var painters = {};

  // Night One: the fort's powder-magazine door, the bridge lit behind it.
  painters["1"] = function (c) {
    sky(c, ["#05081a", "#0f1a3d", "#243a6b", "#3b4f80"], 62);
    stars(c, 70, 11, 38);
    // the Jacques Cartier bridge: steel truss, lit
    var by = 40;
    c.rect(0, by, 120, 2, "#1d2644");
    for (var x = 0; x < 120; x += 6) {
      c.line(x, by, x + 6, by - 10 + Math.round(Math.abs(Math.sin(x / 38)) * 4), "#2b3a66");
      c.line(x + 6, by, x, by - 10 + Math.round(Math.abs(Math.sin((x + 6) / 38)) * 4), "#2b3a66");
    }
    for (var lx = 2; lx < 120; lx += 5) c.set(lx, by - 1, ["#ff6fb5", "#7ad7ff", "#ffe36e", "#9dff8a"][Math.floor(lx / 5) % 4]);
    c.rect(20, by, 3, 22, "#141b33"); c.rect(70, by, 3, 22, "#141b33");
    // river ice
    c.vgrad(0, 50, W, 12, ["#1a2745", "#223457"]);
    for (var ix = 0; ix < W; ix += 7) c.hline(ix, ix + 3, 52 + (ix % 3), "#3f5580");
    // snow ground
    c.vgrad(0, 60, W, 20, ["#c9d6ef", "#9fb0d6", "#7d8fbd"]);
    // the powder magazine
    c.poly([[118, 60], [118, 30], [150, 18], [182, 30], [182, 60]], "#3d3a45");
    c.poly([[114, 31], [150, 15], [186, 31], [184, 33], [150, 18], [116, 33]], "#5d5866");
    for (var sy = 34; sy < 60; sy += 4) for (var sx = 119 + (sy % 8 ? 0 : 3); sx < 181; sx += 7) c.hline(sx, sx + 5, sy, "#46424f");
    c.poly([[141, 60], [141, 40], [150, 35], [159, 40], [159, 60]], "#1a141c");
    c.rect(143, 42, 14, 18, "#4a2d1f");
    for (var d = 44; d < 60; d += 4) c.hline(143, 156, d, "#2e1a12");
    c.set(154, 51, "#ffd66a"); c.set(154, 52, "#c49a3a");
    lamp(c, 150, 30, "#ffcf7a");
    c.poly([[114, 60], [118, 58], [182, 58], [186, 60]], "#e6eeff");
    // the van, far left, headlights on
    c.rect(24, 60, 22, 9, "#d8d4c8"); c.rect(24, 57, 14, 4, "#d8d4c8"); c.rect(26, 58, 5, 2, "#6a8cc0");
    c.set(46, 63, "#fff4b0"); c.poly([[46, 62], [80, 58], [80, 70], [46, 65]], function (px, py) { return P.dither(px, py, 0.18) ? "#fff4c8" : null; });
    c.rect(26, 69, 4, 2, INK); c.rect(40, 69, 4, 2, INK);
    snow(c, 90, 12);
  };

  // Night Two: the Missing Line — a ghost platform turned market.
  painters["2"] = function (c) {
    c.fill("#120d1a");
    // vaulted tiled wall
    for (var y = 0; y < 44; y++) for (var x = 0; x < W; x++) {
      var t = (x % 8 === 0 || y % 5 === 0) ? "#2a2a3a" : (y < 20 ? "#3b3550" : "#463f5c");
      c.set(x, y, t);
    }
    c.rect(0, 12, W, 4, "#c8a23a"); c.hline(0, W - 1, 12, "#f0cf6a");
    // the station name board
    c.rect(66, 18, 60, 9, "#1c3f7a"); c.rect(67, 19, 58, 7, "#244f98");
    for (var k = 0; k < 9; k++) c.rect(72 + k * 6, 21, 4, 3, "#e8ecf5");
    // the platform
    c.rect(0, 44, W, 36, "#2a2330");
    c.hline(0, W - 1, 44, "#e8c14a"); c.hline(0, W - 1, 45, "#9a7d2c");
    // a train, lamps lit, stalls in its doors
    c.rect(0, 26, 58, 18, "#2f5d8f"); c.rect(0, 28, 58, 3, "#5b8fc4");
    for (var wx = 4; wx < 54; wx += 12) { c.rect(wx, 32, 8, 7, "#ffd88a"); c.rect(wx + 1, 33, 6, 5, "#ffeec2"); }
    // stalls: awnings, lanterns, feux follets
    var cols = ["#b3263b", "#2e8c6a", "#d98a2b", "#6b3fa0"];
    for (var s = 0; s < 4; s++) {
      var sx = 64 + s * 32;
      c.poly([[sx, 36], [sx + 28, 36], [sx + 26, 42], [sx + 2, 42]], cols[s]);
      for (var st = sx + 2; st < sx + 27; st += 4) c.vline(st, 36, 42, P.shade(cols[s], 0.25));
      c.rect(sx + 2, 42, 24, 12, "#3a2a22"); c.hline(sx + 2, sx + 25, 42, "#5a4030");
      lamp(c, sx + 14, 47, s % 2 ? "#8cff9e" : "#ffcf6a");
      person(c, sx + 8, 64, 12, "#0e0a12");
      person(c, sx + 22, 66, 14, "#0e0a12", { arm: [3, -3] });
    }
    // feux follets
    var r = P.rng(22);
    for (var f = 0; f < 10; f++) { var fx = 70 + Math.floor(r() * 120), fy = 4 + Math.floor(r() * 30); c.set(fx, fy, "#b6ffbf"); c.set(fx, fy + 1, "#4ecb68"); }
    person(c, 30, 72, 16, "#08060c", { arm: [4, 2] });
  };

  // Night Three: the skyline and the lit cross on the mountain, snowing.
  painters["3"] = function (c) {
    sky(c, ["#070a1d", "#141d44", "#2a3570", "#51407a"], 70);
    stars(c, 50, 31, 30);
    // Mount Royal
    c.poly([[40, 70], [60, 40], [80, 30], [105, 26], [130, 31], [150, 42], [170, 70]], "#101634");
    for (var t = 0; t < 60; t++) { var r = P.rng(t + 5)(); c.set(60 + Math.floor(r * 100), 36 + Math.floor(P.rng(t + 99)() * 20), "#16204a"); }
    // the cross, lit
    var cx = 108, cy = 12;
    c.ellipse(cx, cy + 6, 9, 12, function (px, py) { return P.dither(px, py, 0.18) ? "#8fa8ff" : null; });
    c.rect(cx, cy, 2, 16, "#ffffff"); c.rect(cx - 4, cy + 4, 10, 2, "#ffffff");
    c.set(cx - 1, cy, "#cfe0ff"); c.set(cx + 2, cy + 15, "#cfe0ff");
    // downtown
    skyline(c, 0, W, 72, 314, { min: 10, max: 30, lit: 0.35 });
    c.rect(0, 72, W, 8, "#dfe7fb");
    for (var x = 0; x < W; x += 3) c.set(x, 72, "#ffffff");
    snow(c, 140, 7);
  };

  // Night Four: Le Mardi Gras — red lamps, dancers, a clock at midnight.
  painters["4"] = function (c) {
    c.vgrad(0, 0, W, H, ["#2a0610", "#4a0b1b", "#6a1224", "#2a0610"]);
    // chandelier / lamps
    for (var i = 0; i < 6; i++) { var lx = 18 + i * 32; c.vline(lx, 0, 8, "#3a1a1a"); lamp(c, lx, 11, "#ff5a5a"); }
    // clock at midnight
    c.ellipse(96, 22, 11, 11, "#1a0a0e"); c.ellipse(96, 22, 9, 9, "#f2e6c8");
    for (var h = 0; h < 12; h++) c.set(96 + Math.round(Math.cos(h / 12 * Math.PI * 2) * 7), 22 + Math.round(Math.sin(h / 12 * Math.PI * 2) * 7), "#3a2a1a");
    c.vline(96, 15, 22, "#1a0a0e"); c.vline(97, 17, 22, "#1a0a0e");
    // dance floor
    for (var y = 52; y < H; y++) for (var x = 0; x < W; x++) c.set(x, y, ((Math.floor(x / 8) + Math.floor(y / 4)) % 2) ? "#3a0a14" : "#1a050a");
    c.hline(0, W - 1, 52, "#ff6a6a");
    // dancers: pairs
    var pairs = [[30, 18], [70, 20], [128, 21], [166, 17]];
    pairs.forEach(function (p, k) {
      person(c, p[0], 66, p[1], "#0a0306", { arm: [5, -2] });
      person(c, p[0] + 7, 66, p[1] - 2, "#0a0306", { arm2: [-5, -2], skirt: k % 2 === 0 });
    });
    // the devil and his partner, centre, in a spotlight
    c.poly([[84, 0], [108, 0], [118, 70], [74, 70]], function (px, py) { return P.dither(px, py, 0.22) ? "#ff9a9a" : null; });
    person(c, 92, 70, 24, "#050103", { arm: [6, -4] });
    c.set(92, 49, "#ff3a1a"); c.set(93, 49, "#ff3a1a");
    person(c, 100, 70, 22, "#150810", { arm2: [-6, -4] });
    c.set(88, 58, "#ff2b4a"); // the rose
  };

  // Night Five A: the towers of Notre-Dame.
  painters["5a"] = function (c) {
    sky(c, ["#060818", "#121a40", "#26306a", "#3a3f78"], H);
    stars(c, 40, 51, 30);
    moon(c, 160, 16, 7, "#fff4d6", "#6a78c0");
    skyline(c, 0, 50, 72, 55, { min: 6, max: 14 });
    skyline(c, 142, W, 72, 56, { min: 6, max: 14 });
    // twin towers
    [[60, 1], [118, 0]].forEach(function (t) {
      var tx = t[0];
      c.rect(tx, 18, 18, 56, "#2b2a3d");
      c.rect(tx + 14, 18, 4, 56, "#1d1c2b");
      c.poly([[tx - 1, 18], [tx + 19, 18], [tx + 17, 14], [tx + 1, 14]], "#3a394f");
      for (var p = 0; p < 5; p++) c.rect(tx + 1 + p * 4, 11, 2, 3, "#3a394f");
      c.poly([[tx + 5, 34], [tx + 13, 34], [tx + 13, 26], [tx + 9, 22], [tx + 5, 26]], "#141224");
      for (var v = 26; v < 34; v += 2) c.hline(tx + 6, tx + 12, v, "#3a2f5a");
      bell(c, tx + 9, 25, 6, 7, ["#e8c26a", "#c0923a", "#7a5620"]);
      c.poly([[tx + 5, 50], [tx + 13, 50], [tx + 13, 42], [tx + 9, 38], [tx + 5, 42]], "#6a8cff");
    });
    // the facade between the towers
    c.rect(78, 34, 40, 40, "#26253a");
    for (var a = 0; a < 3; a++) {
      var ax = 81 + a * 12;
      c.poly([[ax, 74], [ax, 58], [ax + 5, 52], [ax + 10, 58], [ax + 10, 74]], "#101022");
      c.poly([[ax + 2, 74], [ax + 2, 60], [ax + 5, 56], [ax + 8, 60], [ax + 8, 74]], "#ffcf7a");
    }
    c.hline(78, 117, 34, "#3a394f");
    for (var sx = 80; sx < 116; sx += 5) c.rect(sx, 38, 3, 8, "#1b1a2e");
    c.rect(0, 74, W, 6, "#d5def5");
    snow(c, 60, 3);
  };

  // Night Six A: inside the bell chamber.
  painters["6a"] = function (c) {
    c.fill("#0f0c16");
    // louvers with moonlight
    for (var l = 0; l < 3; l++) {
      var lx = 20 + l * 64;
      c.rect(lx, 8, 24, 40, "#1a2240");
      for (var y = 10; y < 46; y += 4) c.hline(lx, lx + 23, y, "#2b3a6a");
      c.poly([[lx, 48], [lx + 24, 48], [lx + 40, 80], [lx - 10, 80]], function (px, py) { return P.dither(px, py, 0.15) ? "#8fa8ff" : null; });
    }
    // beams
    c.rect(0, 4, W, 4, "#3a2616"); c.rect(0, 50, W, 4, "#3a2616");
    for (var bx = 0; bx < W; bx += 48) c.rect(bx, 0, 4, H, "#2c1c10");
    // bells in a row, the great one centre
    var bells = [[36, 12, 16, 18], [70, 14, 14, 15], [96, 8, 30, 34], [126, 14, 14, 15], [158, 12, 16, 18]];
    bells.forEach(function (b) {
      c.vline(b[0], 4, b[1], "#2c1c10");
      bell(c, b[0], b[1], b[2], b[3], ["#f0cf7a", "#c49a3a", "#7a5620"]);
      c.vline(b[0], b[1] + b[3] + 1, 76, "#b89a6a");
    });
    c.ellipse(96, 30, 3, 3, "#ffffff");
    c.ellipse(96, 30, 1.5, 1.5, "#2a6ac8");
    c.rect(0, 76, W, 4, "#2c1c10");
  };

  // Night Five B: Saint-Jude, the wolves' church, full moon.
  painters["5b"] = function (c) {
    sky(c, ["#0a0612", "#1e0c24", "#3a1430", "#5a1e2e"], H);
    stars(c, 40, 71, 36);
    moon(c, 150, 22, 13, "#fff0d0", "#8a3a4a");
    skyline(c, 0, 60, 68, 72, { min: 8, max: 16, cols: ["#1a0e1a", "#140a14", "#200f1e"] });
    // the church
    c.poly([[70, 68], [70, 36], [96, 24], [122, 36], [122, 68]], "#2a1a26");
    c.rect(90, 6, 12, 30, "#2a1a26");
    c.poly([[88, 8], [96, -4], [104, 8]], "#3a2432");
    c.rect(95, 0, 2, 6, "#6a4a5a");
    c.ellipse(96, 44, 7, 7, "#ff6a3a"); c.ellipse(96, 44, 5, 5, "#ffb04a");
    for (var r = 0; r < 4; r++) c.line(96, 44, 96 + [7, -7, 0, 0][r], 44 + [0, 0, 7, -7][r], "#7a2a1a");
    c.poly([[90, 68], [90, 56], [96, 51], [102, 56], [102, 68]], "#ffcf7a");
    // neon sign
    c.rect(72, 58, 16, 5, "#1a0a12");
    for (var n = 0; n < 5; n++) c.set(74 + n * 3, 60, "#ff4fd8");
    c.set(75, 61, "#ff4fd8"); c.set(81, 61, "#ff4fd8");
    // snow, wolves
    c.vgrad(0, 68, W, 12, ["#c9c4d8", "#9a90b0"]);
    wolf(c, 128, 74, 1.1, "#0e0810", true);
    wolf(c, 150, 77, 0.9, "#0e0810", false);
    wolf(c, 8, 77, 0.8, "#0e0810", false);
    // tow truck
    c.rect(36, 62, 20, 8, "#e0b030"); c.rect(50, 58, 8, 5, "#e0b030"); c.line(36, 62, 30, 54, "#555"); c.set(30, 54, "#555");
    c.rect(38, 70, 4, 2, INK); c.rect(50, 70, 4, 2, INK); c.set(56, 58, "#ff8a2a");
    snow(c, 50, 9);
  };

  // Night Six B: la chasse-galerie — the flying canoe across the moon.
  painters["6b"] = function (c) {
    sky(c, ["#040614", "#0c1438", "#1a2a62", "#2c3c7a"], H);
    stars(c, 90, 81, 60);
    moon(c, 110, 30, 22, "#fff4d8", "#5a6ab0");
    // river and city far below
    c.vgrad(0, 66, W, 14, ["#0a1024", "#121a3a"]);
    skyline(c, 0, W, 70, 83, { min: 2, max: 7, wide: 6, lit: 0.5 });
    for (var x = 0; x < W; x += 4) c.set(x, 74, "#2a3a6a");
    // the canoe in silhouette against the moon
    c.poly([[80, 34], [140, 34], [134, 39], [86, 39]], "#07050c");
    c.poly([[78, 31], [82, 34], [80, 34]], "#07050c"); c.poly([[142, 31], [138, 34], [140, 34]], "#07050c");
    [88, 98, 108, 118, 128].forEach(function (px, i) {
      person(c, px, 34, 9, "#07050c");
      c.line(px + 2, 30, px + (i % 2 ? 7 : -4), 40, "#07050c");
    });
    // a trail of sparks: the devil's contract
    var r = P.rng(4);
    for (var i = 0; i < 26; i++) c.set(140 + Math.floor(i * 1.8), 36 + Math.floor(r() * 5) + Math.floor(i / 4), i % 3 ? "#ff8a3a" : "#ffd36a");
  };

  // Night Seven: the Compagnie dines.
  painters["7"] = function (c) {
    c.vgrad(0, 0, W, H, ["#1a0608", "#3a0c12", "#240709"]);
    // panelled walls, portraits
    for (var p = 0; p < 5; p++) {
      var px = 12 + p * 38;
      c.rect(px, 8, 22, 26, "#6a4a1a"); c.rect(px + 2, 10, 18, 22, "#1a0e10");
      c.ellipse(px + 11, 19, 4, 5, "#c8b8a8"); c.rect(px + 5, 25, 12, 7, "#2a1a1a");
    }
    // antlers
    c.line(96, 6, 88, 0, "#d8c8a8"); c.line(96, 6, 104, 0, "#d8c8a8"); c.line(91, 3, 89, 5, "#d8c8a8"); c.line(101, 3, 103, 5, "#d8c8a8");
    // the long table in perspective
    c.poly([[40, 80], [80, 42], [112, 42], [152, 80]], "#f0e8d8");
    c.poly([[34, 80], [40, 80], [80, 42], [78, 42]], "#6a3a1a");
    c.poly([[152, 80], [158, 80], [114, 42], [112, 42]], "#6a3a1a");
    for (var i = 0; i < 6; i++) {
      var t = i / 6;
      var ly = 44 + t * 30;
      var lx0 = 80 - t * 36, lx1 = 112 + t * 36;
      [lx0 + 6 + t * 4, lx1 - 6 - t * 4].forEach(function (cx) {
        c.vline(Math.round(cx), Math.round(ly - 4 - t * 3), Math.round(ly), "#f4ecd8");
        c.set(Math.round(cx), Math.round(ly - 5 - t * 3), "#ffcf5a"); c.set(Math.round(cx), Math.round(ly - 6 - t * 3), "#fff3b0");
      });
      c.ellipse(96, ly + 1, 3 + t * 5, 1 + t * 2, "#9a1a2a");
    }
    // diners in silhouette
    [[30, 60], [22, 74], [162, 60], [170, 74]].forEach(function (d) { person(c, d[0], d[1] + 6, 20, "#0a0204"); });
  };

  // Night Eight: the city from the mountain lookout, the eve.
  painters["8"] = function (c) {
    sky(c, ["#0c0a24", "#2a1a4a", "#6a2e5a", "#b0506a"], 46);
    stars(c, 40, 91, 22);
    c.rect(0, 46, W, 34, "#0c0f22");
    // the river and the bridges
    c.vgrad(0, 52, W, 8, ["#1a2448", "#223060"]);
    for (var x = 0; x < W; x += 3) c.set(x, 55, "#3a4a80");
    c.line(120, 50, 192, 49, "#2a3560"); for (var bx = 122; bx < 192; bx += 4) c.set(bx, 48, ["#ff6fb5", "#7ad7ff", "#ffe36e"][bx % 3]);
    // the Olympic tower, far right
    c.poly([[176, 44], [178, 26], [186, 18], [183, 26], [181, 44]], "#1a1d3a"); c.set(186, 18, "#ff4a4a");
    // downtown in front
    skyline(c, 10, 170, 62, 811, { min: 8, max: 28, lit: 0.45 });
    // the lookout balustrade and two figures
    c.rect(0, 68, W, 12, "#1a1422");
    for (var p = 0; p < W; p += 6) c.rect(p, 64, 2, 5, "#2a2232");
    c.hline(0, W - 1, 63, "#3a3244");
    person(c, 88, 64, 16, "#07050a", { arm: [4, 1] });
    person(c, 97, 64, 17, "#07050a", { arm2: [-4, 1] });
    snow(c, 30, 5);
  };

  // Night Nine: Nuit blanche — the city awake, crowds and light.
  painters["9"] = function (c) {
    sky(c, ["#0a0a1a", "#1a1438", "#2a1e52"], H);
    // light installations: arcs of neon
    var cols = ["#ff4fd8", "#4ffff0", "#fff24f", "#8a6aff", "#ff7a4f"];
    for (var a = 0; a < 5; a++) c.ring(96, 90, 40 + a * 14, 60 + a * 10, cols[a]);
    // searchlights
    c.poly([[40, 80], [44, 80], [70, 0], [60, 0]], function (px, py) { return P.dither(px, py, 0.2) ? "#ffffff" : null; });
    c.poly([[150, 80], [154, 80], [136, 0], [126, 0]], function (px, py) { return P.dither(px, py, 0.2) ? "#ffffff" : null; });
    skyline(c, 0, W, 58, 99, { min: 10, max: 30, lit: 0.55, win: ["#ffffff", "#ffe9b8", "#ff9ad8"] });
    // the white night: snow and crowds
    c.rect(0, 58, W, 22, "#e8ecf8");
    var r = P.rng(9);
    for (var i = 0; i < 60; i++) {
      var px = Math.floor(r() * W), h = 9 + Math.floor(r() * 6);
      person(c, px, 70 + Math.floor(r() * 10), h, r() < 0.5 ? "#141024" : "#241a34");
    }
    for (var s = 0; s < 40; s++) c.set(Math.floor(r() * W), 58 + Math.floor(r() * 20), cols[s % 5]);
    snow(c, 80, 19);
  };

  // The Thaw: the Main at midnight, a wolf in the street, the phones come out.
  painters.thaw = function (c) {
    sky(c, ["#1a0a24", "#3a1238", "#7a2a48"], 40);
    skyline(c, 0, 70, 50, 101, { min: 16, max: 30, lit: 0.5 });
    skyline(c, 122, W, 50, 102, { min: 16, max: 30, lit: 0.5 });
    // the street
    c.poly([[70, 50], [122, 50], [192, 80], [0, 80]], "#2a2230");
    for (var y = 52; y < 80; y += 4) c.hline(96 - (y - 50) * 0.2, 96 + (y - 50) * 0.2, y, "#e8d24a");
    c.rect(0, 50, 70, 30, "#1c1624"); c.rect(122, 50, 70, 30, "#1c1624");
    // melting frost framing the image
    for (var x = 0; x < W; x++) {
      var d = 3 + Math.round(Math.abs(Math.sin(x / 7)) * 5);
      for (var yy = 0; yy < d; yy++) c.set(x, yy, P.dither(x, yy, 0.6) ? "#d8ecff" : "#a8c8f0");
      if (x % 9 === 0) c.vline(x, d, d + 3, "#bcd8ff");
    }
    // a wolf in the road, sleepers with phones
    wolf(c, 80, 74, 1.1, "#0a0608", true);
    [[20, 66], [34, 70], [150, 66], [168, 71], [178, 64]].forEach(function (p, i) {
      person(c, p[0], p[1], 14, "#0a0610", { arm: [3, -4] });
      c.set(p[0] + 5, p[1] - 11, "#bfe8ff"); c.set(p[0] + 5, p[1] - 10, "#bfe8ff");
    });
    // a canoe in the sky
    c.poly([[130, 20], [150, 20], [148, 22], [132, 22]], "#0a0610");
  };

  // The vault under the fort, Nadim in his brass bands.
  painters.vault = function (c) {
    c.fill("#0c0808");
    c.vgrad(0, 0, W, H, ["#1a100c", "#2a1a12", "#120a08"]);
    for (var y = 4; y < H; y += 6) for (var x = (y % 12 ? 0 : 5); x < W; x += 11) c.rect(x, y, 9, 4, "#24180f");
    // the smoke-and-coal figure
    c.ellipse(96, 44, 26, 30, function (px, py) { return P.dither(px, py, 0.25) ? "#5a2a14" : null; });
    c.ellipse(96, 40, 16, 22, function (px, py) { return P.dither(px, py, 0.45) ? "#ff6a1f" : "#3a120a"; });
    c.ellipse(96, 28, 6, 7, "#ff8a3a");
    c.set(94, 28, "#fff2b0"); c.set(98, 28, "#fff2b0");
    // brass bands of script
    [26, 40, 54].forEach(function (by, i) {
      c.ring(96, by, 24 - i * 2, 4, "#d9a441");
      for (var t = 0; t < 30; t++) {
        var ang = t / 30 * Math.PI * 2;
        if (t % 2) c.set(96 + Math.round(Math.cos(ang) * (24 - i * 2)), by + Math.round(Math.sin(ang) * 4), "#7a5620");
      }
    });
    // a flashlight beam from the door
    c.poly([[0, 34], [0, 50], [70, 70], [70, 20]], function (px, py) { return P.dither(px, py, 0.12) ? "#fff0c8" : null; });
  };

  // Morning: dawn over the river, the bridge, snow.
  painters.morning = function (c) {
    sky(c, ["#2a3a7a", "#8a6aa8", "#f0a0a0", "#ffd8a0"], 56);
    c.ellipse(140, 56, 14, 14, function (px, py) { return P.dither(px, py, 0.5) ? "#fff0c0" : "#ffe0a0"; });
    c.vgrad(0, 56, W, 24, ["#c8b0c8", "#8a7aa8", "#5a5a8a"]);
    for (var x = 0; x < W; x += 5) c.hline(x, x + 2, 60 + (x % 4), "#ffe0b0");
    // the bridge in silhouette
    c.rect(0, 44, W, 2, "#3a2a4a");
    for (var bx = 0; bx < W; bx += 8) {
      c.line(bx, 44, bx + 8, 34 + Math.round(Math.abs(Math.sin(bx / 40)) * 5), "#3a2a4a");
      c.line(bx + 8, 44, bx, 34 + Math.round(Math.abs(Math.sin((bx + 8) / 40)) * 5), "#3a2a4a");
    }
    c.rect(40, 44, 4, 14, "#3a2a4a"); c.rect(120, 44, 4, 14, "#3a2a4a");
    // gulls
    [[60, 20], [70, 16], [160, 24]].forEach(function (g) { c.set(g[0], g[1], "#3a2a4a"); c.set(g[0] - 1, g[1] - 1, "#3a2a4a"); c.set(g[0] + 1, g[1] - 1, "#3a2a4a"); });
  };

  // The title screen: the island at night under snow, with room for the title.
  painters.title = function (c) {
    sky(c, ["#03040f", "#0a1030", "#1a2458", "#34306a"], 66);
    stars(c, 110, 123, 44);
    moon(c, 30, 18, 6, "#fff4d6", "#3a4a90");
    c.poly([[60, 66], [84, 44], [104, 38], [124, 42], [146, 56], [160, 66]], "#0c1030");
    c.rect(102, 28, 2, 12, "#ffffff"); c.rect(99, 31, 8, 2, "#ffffff");
    c.ellipse(103, 34, 8, 10, function (px, py) { return P.dither(px, py, 0.12) ? "#8fa8ff" : null; });
    skyline(c, 0, W, 70, 7, { min: 8, max: 22, lit: 0.32 });
    c.rect(0, 70, W, 10, "#e3eafb");
    snow(c, 160, 44);
  };


  /* ---------------- Parts Two and Three ---------------- */

  function mountainWithCross(c, baseY, col, lit) {
    c.poly([[40, baseY], [70, baseY - 18], [92, baseY - 26], [110, baseY - 24], [134, baseY - 14], [170, baseY]], col);
    c.rect(95, baseY - 38, 2, 12, lit || "#ffffff"); c.rect(92, baseY - 35, 8, 2, lit || "#ffffff");
  }

  function pyre(c, x, baseY, w, h, col) {
    c.poly([[x - w / 2, baseY], [x - w / 6, baseY - h], [x + w / 6, baseY - h], [x + w / 2, baseY]], col);
    for (var i = 0; i < 8; i++) c.line(x - w / 2 + i * (w / 8), baseY, x - w / 8 + i * (w / 32), baseY - h + 2, P.shade(col, 0.15));
  }

  function wingedBell(c, x, y, s, t) {
    bell(c, x, y, 8 * s, 8 * s, ["#f0c860", "#c9962e", "#8a6418"]);
    var wy = y + 2 * s;
    c.poly([[x - 4 * s, wy], [x - 11 * s, wy - 3 * s - t], [x - 9 * s, wy + 1], [x - 5 * s, wy + 2 * s]], "#ffffff");
    c.poly([[x + 4 * s, wy], [x + 11 * s, wy - 3 * s - t], [x + 9 * s, wy + 1], [x + 5 * s, wy + 2 * s]], "#ffffff");
  }

  // Chapter Ten, Ash: grey dawn on the first of March, a man against the fort wall.
  painters["10"] = function (c) {
    sky(c, ["#3a3f52", "#6a6878", "#a89aa0", "#d8c0b0"], 50);
    c.ellipse(150, 48, 10, 10, function (px, py) { return P.dither(px, py, 0.4) ? "#fff0d8" : "#f0d8c0"; });
    c.vgrad(0, 46, W, 12, ["#5a6078", "#7a7c90"]);
    for (var fx = 0; fx < W; fx += 9) c.hline(fx, fx + 4, 50 + (fx % 5), "#9aa0b8");
    c.vgrad(0, 56, W, 24, ["#d8d8e0", "#b8b8c8", "#9898b0"]);
    // the old fort wall, stone
    c.rect(0, 40, 70, 30, "#4a4652");
    for (var sy = 42; sy < 70; sy += 4) for (var sx = (sy % 8 ? 0 : 3); sx < 70; sx += 8) c.hline(sx, sx + 6, sy, "#3a3642");
    // a man sitting against it, knees up
    c.ellipse(78, 56, 2, 2, "#1a1620");
    c.poly([[75, 59], [81, 59], [84, 66], [90, 66], [90, 69], [76, 69]], "#1a1620");
    // a wisp of smoke rising from the powder house, far off
    for (var k = 0; k < 20; k++) c.set(40 + Math.round(Math.sin(k / 3) * 2), 38 - k, P.dither(k, 0, 0.5) ? "#8a8898" : "#aaa8b8");
    snow(c, 30, 101, ["#ffffff", "#e8e8f0"]);
  };

  // Chapter Eleven, The Forty Days: a church tower at 3:33, rings of sound over slush.
  painters["11"] = function (c) {
    sky(c, ["#060814", "#10182e", "#1c2644"], H);
    stars(c, 40, 111, 30);
    skyline(c, 0, W, 66, 111, { min: 6, max: 18, lit: 0.18 });
    // the tower
    c.rect(86, 18, 20, 48, "#1e2238");
    c.poly([[84, 18], [96, 4], [108, 18]], "#262a44");
    c.rect(95, 0, 2, 5, "#c8c0a0"); c.rect(93, 2, 6, 1, "#c8c0a0");
    c.ellipse(96, 30, 6, 6, "#e8e0c0"); c.ellipse(96, 30, 5, 5, "#fff8e0");
    c.line(96, 30, 96, 26, INK); c.line(96, 30, 99, 31, INK);
    c.rect(90, 42, 12, 10, "#0e1020");
    bell(c, 96, 43, 8, 7, ["#c9962e", "#a67822", "#6e4e14"]);
    for (var r2 = 0; r2 < 4; r2++) c.ring(96, 47, 16 + r2 * 12, 17 + r2 * 12, ["#fff2a8", "#e2b64a", "#a88a3a", "#6a5a2a"][r2]);
    c.vgrad(0, 66, W, 14, ["#3a3a4a", "#2a2a36"]);
    for (var x = 0; x < W; x += 6) c.hline(x, x + 3, 70 + (x % 3), "#5a5a6e");
  };

  // Chapter Twelve, Holy Week: the bells fly to Rome over the city at dusk.
  painters["12"] = function (c) {
    sky(c, ["#1a1a44", "#4a3a6a", "#b86a7a", "#f0a870"], 60);
    skyline(c, 0, W, 66, 121, { min: 8, max: 24, lit: 0.2, cols: ["#1a1428", "#221a30", "#140e20"] });
    // two towers of Notre-Dame, dark, bells gone
    c.rect(20, 30, 12, 36, "#140e20"); c.rect(44, 30, 12, 36, "#140e20");
    c.rect(22, 34, 8, 6, "#3a2a4a"); c.rect(46, 34, 8, 6, "#3a2a4a");
    // the bells flying east, in a line
    var pts = [[70, 40, 1.2, 2], [96, 30, 1.0, 1], [120, 22, 0.9, 2], [142, 16, 0.8, 1], [162, 12, 0.7, 2], [180, 9, 0.6, 1]];
    pts.forEach(function (b) { wingedBell(c, b[0], b[1], b[2], b[3]); });
    c.vgrad(0, 66, W, 14, ["#2a2238", "#1a1428"]);
  };

  // Chapter Thirteen, Easter: sunrise on the mountain, the pack on the lookout wall.
  painters["13"] = function (c) {
    sky(c, ["#3a4a8a", "#c87a9a", "#ffb870", "#ffe8a0"], 58);
    c.ellipse(150, 58, 16, 16, function (px, py) { return P.dither(px, py, 0.5) ? "#fff8d0" : "#ffe890"; });
    for (var i = 0; i < 6; i++) c.line(150, 58, 150 + Math.cos(-0.3 - i * 0.5) * 70, 58 + Math.sin(-0.3 - i * 0.5) * 70, "#fff0c0");
    c.vgrad(0, 62, W, 18, ["#c87a8a", "#8a5a7a", "#4a3a5a"]);
    for (var rx = 96; rx < W; rx += 6) c.hline(rx, rx + 3, 66 + (rx % 4), "#ffd8a0");
    skyline(c, 90, W, 62, 131, { min: 3, max: 8, lit: 0.05, cols: ["#6a4a6a", "#5a3a5a", "#7a5a70"] });
    c.poly([[0, 80], [0, 50], [40, 44], [80, 52], [96, 62], [96, 80]], "#2a2240");
    c.rect(0, 58, 90, 4, "#4a4058");
    wolf(c, 12, 58, 0.9, "#1a1428", true);
    wolf(c, 36, 58, 0.8, "#221a30", false);
    wolf(c, 58, 58, 0.9, "#1a1428", true);
    person(c, 80, 58, 12, "#1a1428");
    c.rect(20, 18, 2, 10, "#ffffff"); c.rect(17, 21, 8, 2, "#ffffff");
  };

  // Chapter Fourteen, The Thaw: river ice breaking up under the bridge in April.
  painters["14"] = function (c) {
    sky(c, ["#6a8ac8", "#9ab8e0", "#d0e0f0"], 44);
    c.rect(0, 30, W, 2, "#3a4a6a");
    for (var bx = 0; bx < W; bx += 8) {
      c.line(bx, 30, bx + 8, 20 + Math.round(Math.abs(Math.sin(bx / 40)) * 5), "#3a4a6a");
      c.line(bx + 8, 30, bx, 20 + Math.round(Math.abs(Math.sin((bx + 8) / 40)) * 5), "#3a4a6a");
    }
    c.rect(50, 30, 4, 14, "#3a4a6a"); c.rect(140, 30, 4, 14, "#3a4a6a");
    c.vgrad(0, 44, W, 36, ["#1a3050", "#10203a"]);
    var r = P.rng(141);
    for (var f = 0; f < 22; f++) {
      var fx = Math.floor(r() * W), fy = 46 + Math.floor(r() * 30), fw = 6 + Math.floor(r() * 16), fh = 2 + Math.floor(r() * 4);
      c.poly([[fx, fy], [fx + fw, fy - 1], [fx + fw + 2, fy + fh], [fx + 1, fy + fh + 1]], r() < 0.5 ? "#e8f0ff" : "#c8d8f0");
    }
    // crocuses on the bank
    c.rect(0, 74, W, 6, "#5a6a3a");
    for (var k = 4; k < W; k += 7) { c.set(k, 73, "#b88ae8"); c.set(k + 1, 73, "#ffe070"); }
  };

  // Chapter Fifteen, Lilacs: the tam-tams under the angel monument, lilacs everywhere.
  painters["15"] = function (c) {
    sky(c, ["#5aa0e8", "#8ac0f0", "#c8e0f8"], 50);
    c.poly([[0, 50], [50, 30], [110, 24], [170, 34], [192, 44], [192, 50]], "#4a8a4a");
    // the monument and its angel
    c.rect(92, 20, 8, 34, "#8a8a90"); c.rect(88, 50, 16, 6, "#7a7a80");
    c.ellipse(96, 16, 3, 3, "#c0a040");
    c.poly([[93, 16], [86, 10], [92, 14]], "#c0a040"); c.poly([[99, 16], [106, 10], [100, 14]], "#c0a040");
    c.vgrad(0, 50, W, 30, ["#5a9a4a", "#4a8a3a"]);
    var r = P.rng(151);
    for (var i = 0; i < 26; i++) person(c, Math.floor(r() * W), 64 + Math.floor(r() * 14), 9 + Math.floor(r() * 4), ["#3a2a4a", "#6a3a3a", "#2a3a5a"][i % 3], { arm: [3, -2] });
    // lilac bushes at both edges
    [[10, 46], [22, 52], [176, 46], [186, 54], [160, 56]].forEach(function (b) {
      c.ellipse(b[0], b[1], 10, 8, function (px, py) { return P.dither(px, py, 0.5) ? "#b88ad8" : (P.dither(px + 1, py, 0.5) ? "#e0c8f0" : "#6a4a8a"); });
    });
  };

  // Chapter Sixteen, The Longest Days: blue midnight, a green edge in the north, the pyre on the mountain.
  painters["16"] = function (c) {
    sky(c, ["#0e2a5a", "#1a4a7a", "#2a6a7a", "#6ab89a"], 50);
    stars(c, 12, 161, 20, ["#ffffff", "#dde8ff", "#b8c8e8"]);
    mountainWithCross(c, 58, "#0a1a30", "#ffffff");
    pyre(c, 118, 46, 14, 12, "#1a1208");
    skyline(c, 0, W, 70, 161, { min: 6, max: 16, lit: 0.45 });
    c.rect(0, 70, W, 10, "#0a1424");
    // swifts
    [[40, 14], [52, 10], [150, 18], [164, 12], [172, 20]].forEach(function (g) { c.set(g[0], g[1], INK); c.set(g[0] - 2, g[1] - 1, INK); c.set(g[0] + 2, g[1] - 1, INK); c.set(g[0] - 1, g[1], INK); c.set(g[0] + 1, g[1], INK); });
  };

  // Chapter Seventeen, La Saint-Jean: the angel coming down on the bonfire.
  painters["17"] = function (c) {
    sky(c, ["#060a20", "#10183a", "#2a2050"], H);
    stars(c, 30, 171, 30);
    c.poly([[0, 80], [0, 58], [60, 50], [132, 50], [192, 58], [192, 80]], "#0e0c1a");
    pyre(c, 96, 60, 30, 10, "#2a1a0a");
    // the column of white fire
    c.poly([[82, 52], [110, 52], [104, 0], [88, 0]], function (px, py) { return P.dither(px, py, 0.55) ? "#fff8e0" : (P.dither(px, py + 1, 0.5) ? "#ffd070" : "#ff9040"); });
    // wings of light
    c.poly([[88, 22], [40, 6], [56, 20], [30, 22], [60, 30], [86, 30]], function (px, py) { return P.dither(px, py, 0.35) ? "#fff4c0" : null; });
    c.poly([[104, 22], [152, 6], [136, 20], [162, 22], [132, 30], [106, 30]], function (px, py) { return P.dither(px, py, 0.35) ? "#fff4c0" : null; });
    // eyes in the fire
    [[96, 12], [92, 20], [100, 20], [96, 28], [93, 36], [99, 36]].forEach(function (e) { c.set(e[0], e[1], "#3a6aff"); });
    var r = P.rng(172);
    for (var i = 0; i < 70; i++) person(c, Math.floor(r() * W), 68 + Math.floor(r() * 12), 8 + Math.floor(r() * 4), r() < 0.5 ? "#06040c" : "#140e22");
    c.ring(96, 56, 36, 38, "#fff0c0");
  };

  // Epilogue: Nuit blanche 2027. The screens, the moon, the crowd, one small wolf in a tuque.
  painters["18"] = function (c) {
    sky(c, ["#0a0a1a", "#1a1438", "#2a1e52"], H);
    moon(c, 160, 14, 7, "#fff4d6", "#4a3a8a");
    skyline(c, 0, W, 58, 181, { min: 12, max: 30, lit: 0.6, win: ["#ffffff", "#ffe9b8", "#ff9ad8"] });
    c.rect(40, 18, 40, 22, "#1a1030"); c.rect(42, 20, 36, 18, "#ff9ad8");
    c.rect(46, 26, 28, 2, "#ffffff"); c.rect(50, 30, 20, 2, "#ffffff");
    c.rect(0, 58, W, 22, "#e8ecf8");
    var r = P.rng(182);
    for (var i = 0; i < 50; i++) person(c, Math.floor(r() * W), 70 + Math.floor(r() * 10), 9 + Math.floor(r() * 6), r() < 0.5 ? "#141024" : "#241a34");
    wolf(c, 110, 74, 0.6, "#6a6a78", true);
    c.rect(122, 60, 4, 2, "#c41d38"); c.set(124, 59, "#ffffff");
    snow(c, 90, 183);
  };

  var IDS = ["1", "2", "3", "4", "5a", "6a", "5b", "6b", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "thaw", "vault", "morning", "title"];

  var cache = {};
  function draw(id) {
    if (!painters[id]) throw new Error("No card painter for " + id);
    if (!cache[id]) {
      var c = P.canvas(W, H);
      c.fill("#000000");
      painters[id](c);
      cache[id] = c;
    }
    return cache[id];
  }

  NB.cards = {
    W: W, H: H, ids: IDS,
    draw: draw,
    url: function (id) { return P.toDataURL(draw(id), "c:" + id); }
  };
})(typeof window !== "undefined" ? window : globalThis);
