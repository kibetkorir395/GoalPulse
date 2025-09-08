import React from 'react'
import './premium.css'
import { NavLink } from 'react-router-dom'

export default function Premium() {
  return (
<div className="vip-container">
    <div className="vip-intro">
        <h2>Welcome to VIP Section 🏆</h2>
        <p>Gain access to high-stake winning predictions and maximize your profits.
            Only premium members can view today’s VIP tips.</p>
        <NavLink to="/subscription" className="btn">Upgrade to VIP</NavLink>
    </div>

    <h2 style={{color:"var(--primary)", marginBottom:"15px"}}>Today’s VIP Predictions</h2>
    <div className="matches">
        <div className="match-card">
            <div className="match-title">PSG vs Bayern Munich</div>
            <div className="prediction">Prediction: PSG Win</div>
            <div className="odds">Odds: 2.30</div>
        </div>

        <div className="match-card">
            <div className="match-title">Juventus vs AC Milan</div>
            <div className="prediction">Prediction: Under 2.5 Goals</div>
            <div className="odds">Odds: 1.75</div>
        </div>

        <div className="match-card">
            <div className="match-title">Dortmund vs Napoli</div>
            <div className="prediction">Prediction: Both Teams to Score</div>
            <div className="odds">Odds: 1.65</div>
        </div>
    </div>

</div>
)
}
