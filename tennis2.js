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

  if (P1point === P2point && P1point < 3) {
    score = scoreName(P1point) + "-All";
  }
  if (P1point === P2point && P1point > 2) {
    score = "Deuce";
  }

  // if (P1point === 0 || P2point === 0) {
  //   score = scoreName(P1point) + "-" + scoreName(P2point);
  // }
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

  if (P1point > P2point && P2point >= 3) {
    score = "Advantage player1";
  }

  if (P2point > P1point && P1point >= 3) {
    score = "Advantage player2";
  }

  if (P1point >= 4 && P2point >= 0 && P1point - P2point >= 2) {
    score = "Win for player1";
  }
  if (P2point >= 4 && P1point >= 0 && P2point - P1point >= 2) {
    score = "Win for player2";
  }
  return score;
}

module.exports = getScore;
