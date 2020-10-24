'use strict';

function scoreName(points) {
    let score = ""
    switch (points) {
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
    return score
    
}

function getScore(m_score1, m_score2) {
    const diference = m_score1 - m_score2 > 0 ? m_score1 - m_score2 : m_score2 - m_score1;

    var score = "";
    var tempScore = 0;
    if (diference === 0) {
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
        score = (diference === 1) ? "Advantage player" : "Win for player"
        score += m_score1 - m_score2 > 0 ? "1" : "2"

    } else {
        score = scoreName(m_score1) + "-" + scoreName(m_score2)
    }
    return score;
}

module.exports = getScore;