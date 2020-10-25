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
  var score = "";
  const diference =
    P1point - P2point > 0 ? P1point - P2point : P2point - P1point;

  if (P1point === P2point) {
    if (P1point < 3) {
      score = scoreName(P1point) + "-All";
    } else {
      score = "Deuce";
    }
  }

  var P1res;
  var P2res;
  if (P1point > 0 && P2point === 0) {
    P1res = scoreName(P1point);
    P2res = "Love";
    score = P1res + "-" + P2res;
  }
  if (P2point > 0 && P1point === 0) {
    P2res = scoreName(P2point);
    P1res = "Love";
    score = P1res + "-" + P2res;
  }

  if (P1point > P2point && P1point < 4) {
    P1res = scoreName(P1point);
    P2res = scoreName(P2point);

    score = P1res + "-" + P2res;
  }
  if (P2point > P1point && P2point < 4) {
    P1res = scoreName(P1point);
    P2res = scoreName(P2point);

    score = P1res + "-" + P2res;
  }

  if (P1point >= 3 && P2point >= 3 && diference >= 1) {
    score = "Advantage player" + (P1point - P2point > 0 ? "1" : "2");
  }

  if ((P1point >= 4 || P2point >= 4) && diference >= 2) {
    score = "Win for player" + (P1point - P2point > 0 ? "1" : "2");
  }
  return score;
}

module.exports = getScore;
