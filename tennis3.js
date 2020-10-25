"use strict";

function getScore(p1, p2) {
  const diference = p1 - p2 > 0 ? p1 - p2 : p2 - p1;
  var s;
  let p1N = "player1";
  let p2N = "player2";
  if (p1 < 4 && p2 < 4 && p1 + p2 < 6) {
    var p = ["Love", "Fifteen", "Thirty", "Forty"];
    s = p[p1];
    return diference === 0 ? p[p1] + "-All" : p[p1] + "-" + p[p2];
  } else {
    if (p1 === p2) {
      return "Deuce";
    }
    s = p1 > p2 ? p1N : p2N;
    return diference === 1 ? "Advantage " + s : "Win for " + s;
  }
}

module.exports = getScore;
