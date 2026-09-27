/* Nuit Blanche — the app icon: a brass key whose bow is a cross in a circle, on a snowy night. 32×32.
 * NB.appicon.draw() -> Canvas.
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var P = NB.pixel;
  var S = 32;

  function draw() {
    var c = P.canvas(S, S);
    // rounded night square
    c.vgrad(0, 0, S, S, ["#050818", "#101a44", "#2a2460"]);
    [[0, 0], [1, 0], [0, 1], [S - 1, 0], [S - 2, 0], [S - 1, 1], [0, S - 1], [1, S - 1], [0, S - 2], [S - 1, S - 1], [S - 2, S - 1], [S - 1, S - 2]]
      .forEach(function (p) { c.data[(p[1] * S + p[0]) * 4 + 3] = 0; });
    // a few stars and the moon
    [[4, 5], [9, 3], [15, 6], [6, 12], [26, 14], [3, 20]].forEach(function (p) { c.set(p[0], p[1], "#bcd0ff"); });
    c.ellipse(25, 6, 3, 3, "#fff4d6");
    c.set(24, 5, "#e8dcb8");
    // snow on the ground
    c.rect(2, 27, 28, 3, "#dfe8ff");
    c.rect(2, 26, 28, 1, "#b8c6e8");
    // the key: a bow that is a cross in a circle, a shaft, and a bit hanging down
    var gold = "#f0c860", mid = "#c9962e", dark = "#6a4a10", hi = "#fff2b8";
    c.ellipse(9, 15, 6, 6, dark);
    c.ellipse(9, 15, 5, 5, gold);
    c.ellipse(9, 15, 3, 3, "#141036");
    c.rect(9, 11, 1, 9, gold); c.rect(5, 15, 9, 1, gold);
    c.set(7, 11, hi); c.set(6, 12, hi);
    c.rect(14, 13, 14, 5, dark);
    c.rect(14, 14, 14, 3, gold);
    c.rect(14, 14, 14, 1, hi);
    c.rect(14, 16, 14, 1, mid);
    c.rect(20, 17, 3, 5, dark); c.rect(21, 17, 1, 4, gold);
    c.rect(24, 17, 4, 6, dark); c.rect(25, 17, 2, 5, gold);
    c.set(26, 21, mid);
    // a glint on the bow
    c.set(4, 10, "#ffffff");
    return c;
  }

  NB.appicon = { draw: draw, size: S };
})(typeof window !== "undefined" ? window : globalThis);
