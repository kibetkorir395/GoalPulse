import React from 'react'
import './free.css'
import { NavLink } from 'react-router-dom'
export default function Free() {
  return (
    <div className="container">
    <div className="hero">
        <h2>Unlock 100% Sure VIP Tips</h2>
        <p>Subscribe today and boost your winning chances with expert predictions.</p>
        <NavLink to="#" className="btn">Join VIP Now</NavLink>
    </div>

    <h2 style={{color: "var(--primary)", marginBottom: "15px"}}>🔥 Today's Free Tips</h2>
    <div className="matches">
        <div className="match-card">
            <div className="match-title">Arsenal vs Chelsea</div>
            <div className="prediction">Prediction: Over 2.5 Goals</div>
            <div className="odds">Odds: 1.80</div>
        </div>

        <div className="match-card">
            <div className="match-title">Barcelona vs Real Madrid</div>
            <div className="prediction">Prediction: Barcelona Win</div>
            <div className="odds">Odds: 2.10</div>
        </div>

        <div className="match-card">
            <div className="match-title">Man United vs Liverpool</div>
            <div className="prediction">Prediction: Both Teams to Score</div>
            <div className="odds">Odds: 1.70</div>
        </div>
    </div>

    <div className="blog">
        <h2>📖 Betting Tips & Guides</h2>
        <p>Learn how to manage your bankroll, maximize profits, and make informed bets.
            Check out our <NavLink to="/blog">latest blog articles</NavLink> for expert strategies.</p>
    </div>

</div>
  )
}
