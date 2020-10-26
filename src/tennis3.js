"use strict";

function getScore(p1, p2) {
  const diference = p1 - p2 > 0 ? p1 - p2 : p2 - p1;
  const points = ["Love", "Fifteen", "Thirty", "Forty"];

  if (p1 < 4 && p2 < 4 && p1 + p2 < 6) {
    return diference === 0
      ? points[p1] + "-All"
      : points[p1] + "-" + points[p2];
  }
  if (diference === 0) {
    return "Deuce";
  }
  return (
    (diference === 1 ? "Advantage player" : "Win for player") +
    (p1 > p2 ? "1" : "2")
  );
}

module.exports = getScore;
