import React from 'react'
import './subscription.css'
import { NavLink } from 'react-router-dom'

export default function Subscription() {
  return (
    <div className="plans-container">
    <div className="plan-card">
        <h2>Daily Plan</h2>
        <div className="price">Ksh 100 / $1</div>
        <ul className="features">
            <li>Access for 24 Hours</li>
            <li>High Accuracy Tips</li>
            <li>Customer Support</li>
        </ul>
        <NavLink to="/payment" className="btn">Subscribe</NavLink>
    </div>

    <div className="plan-card">
        <h2>Weekly Plan</h2>
        <div className="price">Ksh 500 / $5</div>
        <ul className="features">
            <li>7 Days Full Access</li>
            <li>Sure VIP Matches</li>
            <li>Priority Support</li>
        </ul>
        <NavLink to="/payment" className="btn">Subscribe</NavLink>
    </div>

    <div className="plan-card">
        <h2>Monthly Plan</h2>
        <div className="price">Ksh 1500 / $15</div>
        <ul className="features">
            <li>30 Days Full Access</li>
            <li>Exclusive Analysis</li>
            <li>Instant Updates</li>
        </ul>
        <NavLink to="/payment" className="btn">Subscribe</NavLink>
    </div>

    <div className="plan-card">
        <h2>Yearly Plan</h2>
        <div className="price">Ksh 10,000 / $100</div>
        <ul className="features">
            <li>365 Days Access</li>
            <li>Best Value Plan</li>
            <li>24/7 Support</li>
        </ul>
        <NavLink to="/payment" className="btn">Subscribe</NavLink>
    </div>
</div>
  )
}
