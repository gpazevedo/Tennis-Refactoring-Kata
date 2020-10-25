"use strict";

function scoreName(points) {
  switch (points) {
    case 0:
      return "Love";
    case 1:
      return "Fifteen";
    case 2:
      return "Thirty";
    case 3:
      return "Forty";
  }
}

function getScore(P1point, P2point) {
  const diference =
    P1point - P2point > 0 ? P1point - P2point : P2point - P1point;

  if (diference === 0) {
    return P1point < 3 ? scoreName(P1point) + "-All" : "Deuce";
  }

  if (P1point < 4 && P2point < 4) {
    return scoreName(P1point) + "-" + scoreName(P2point);
  }

  return (
    (diference === 1 ? "Advantage player" : "Win for player") +
    (P1point - P2point > 0 ? "1" : "2")
  );
}

module.exports = getScore;
