'use strict';

function getScore(m_score1, m_score2) {
    var score = "";
    var tempScore = 0;
    if (m_score1 === m_score2) {
        switch (m_score1) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        const diference = m_score1 - m_score2 > 0 ? m_score1 - m_score2 : m_score2 - m_score1;
        if (diference === 1) {score = "Advantage player";}
        else if (diference >= 2) {score = "Win for player";}
        score += m_score1 - m_score2 > 0 ? "1" : "2"

    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) {tempScore = m_score1;}
            else {
                score += "-";
                tempScore = m_score2;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
}

module.exports = getScore;