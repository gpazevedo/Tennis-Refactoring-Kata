"use strict";

function getScore(points1, points2) {
  const pontuation = ["Love", "Fifteen", "Thirty", "Forty"];

  const diference =
    points1 - points2 > 0 ? points1 - points2 : points2 - points1;

  if (diference === 0)
    return points1 > 2 ? "Deuce" : pontuation[points1] + "-All";

  if ((points1 > points2 ? points1 : points2) < 4)
    return pontuation[points1] + "-" + pontuation[points2];

  return (
    (diference === 1 ? "Advantage player" : "Win for player") +
    (points1 > points2 ? "1" : "2")
  );
}

module.exports = getScore;
