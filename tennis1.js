'use strict';

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

function getScore(m_score1, m_score2) {
    const diference = m_score1 - m_score2 > 0 ? m_score1 - m_score2 : m_score2 - m_score1;

    if (diference === 0) {
        return m_score1 > 2 ? "Deuce" : scoreName(m_score1) + "-All"

    } else if (m_score1 >= 4 || m_score2 >= 4) {
        const score = (diference === 1) ? "Advantage player" : "Win for player"
        return  m_score1 - m_score2 > 0 ? score + "1" : score + "2"

    } 
    return scoreName(m_score1) + "-" + scoreName(m_score2)
}

module.exports = getScore;