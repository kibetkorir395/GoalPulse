import React from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container">
        <div className="hero">
            <h2>Unlock 100% Sure VIP Tips</h2>
            <p>Join thousands of winning bettors who use our expert predictions to maximize their profits. Our team of analysts works around the clock to bring you the most accurate football tips.</p>
            <NavLink to="subscription" className="btn">Join VIP Now</NavLink>
        </div>

        <div className="stats">
            <div className="stat-card">
                <div className="stat-number">87%</div>
                <div>Win Rate</div>
            </div>
            <div className="stat-card">
                <div className="stat-number">2,540+</div>
                <div>Happy Customers</div>
            </div>
            <div className="stat-card">
                <div className="stat-number">15+</div>
                <div>Expert Analysts</div>
            </div>
        </div>

        <h2 className="section-title">🔥 Today's Free Tips</h2>
        <div className="matches">
            <div className="match-card">
                <div className="match-league">English Premier League</div>
                <div className="match-title">Arsenal vs Chelsea</div>
                <div className="match-time">Today, 18:30 GMT</div>
                <div className="prediction">Prediction: Over 2.5 Goals</div>
                <div className="odds">Odds: 1.80</div>
            </div>

            <div className="match-card">
                <div className="match-league">La Liga</div>
                <div className="match-title">Barcelona vs Real Madrid</div>
                <div className="match-time">Today, 21:00 GMT</div>
                <div className="prediction">Prediction: Barcelona Win</div>
                <div className="odds">Odds: 2.10</div>
            </div>

            <div className="match-card">
                <div className="match-league">English Premier League</div>
                <div className="match-title">Man United vs Liverpool</div>
                <div className="match-time">Tomorrow, 16:30 GMT</div>
                <div className="prediction">Prediction: Both Teams to Score</div>
                <div className="odds">Odds: 1.70</div>
            </div>
        </div>

          <div style={{ textAlign: "center", margin: "20px 0"}}>
            <NavLink to="free-tips" className="btn">View All Free Tips</NavLink>
        </div>

        <h2 className="section-title">⭐ VIP Tips Preview</h2>
        <div className="matches">
            <div className="match-card vip">
                <span className="vip-badge">VIP</span>
                <div className="match-league">Champions League</div>
                <div className="match-title">PSG vs Bayern Munich</div>
                <div className="match-time">Tomorrow, 20:00 GMT</div>
                <div className="prediction">Prediction: PSG Win</div>
                <div className="odds">Odds: 2.30</div>
            </div>

            <div className="match-card vip">
                <span className="vip-badge">VIP</span>
                <div className="match-league">Serie A</div>
                <div className="match-title">Juventus vs AC Milan</div>
                <div className="match-time">Tomorrow, 19:45 GMT</div>
                <div className="prediction">Prediction: Under 2.5 Goals</div>
                <div className="odds">Odds: 1.75</div>
            </div>

            <div className="match-card vip">
                <span className="vip-badge">VIP</span>
                <div className="match-league">Europa League</div>
                <div className="match-title">Dortmund vs Napoli</div>
                <div className="match-time">Tomorrow, 17:45 GMT</div>
                <div className="prediction">Prediction: Both Teams to Score</div>
                <div className="odds">Odds: 1.65</div>
            </div>
        </div>

        <div style={{ textAlign: "center", margin: "20px 0"}}>
            <NavLink to="subscription" className="btn">Subscribe for All VIP Tips</NavLink>
        </div>

        <div className="testimonials">
            <div className="testimonial">
                <div className="testimonial-text">
                    "I've been using Goal Pulse for 3 months now and my betting has completely transformed. I've more than doubled my bankroll with their VIP predictions!"
                </div>
                <div className="testimonial-author">- James K., Professional Bettor</div>
            </div>
          </div>


        <h2 className="section-title">📖 Latest From Our Blog</h2>
        <div className="blog-posts">
            <div className="blog-card">
                <div className="blog-content">
                    <h3>How to Manage Your Betting Bankroll</h3>
                    <p>Learn the essential bankroll management strategies that professional bettors use to maximize profits and minimize risks.</p>
                    <NavLink to="/single-blog" className="read-more">Read More →</NavLink>
                </div>
            </div>

            <div className="blog-card">
                <div className="blog-content">
                    <h3>Understanding Value Betting</h3>
                    <p>Discover how to identify value in odds and why this is the key to long-term success in sports betting.</p>
                    <NavLink to="/single-blog" className="read-more">Read More →</NavLink>
                </div>
            </div>


            <div className="blog-card">
                <div className="blog-content">
                    <h3>The Psychology of Successful Betting</h3>
                    <p>Explore the mental aspects of betting and how to maintain discipline during both winning and losing streaks.</p>
                    <NavLink to="/single-blog" className="read-more">Read More →</NavLink>
                </div>
            </div>
        </div>

        <div style={{ textAlign: "center", margin: "20px 0"}}>
            <NavLink to="blog" className="btn">View All Articles</NavLink>
        </div>

        <div className="newsletter">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Get free betting tips, strategies, and exclusive offers delivered to your inbox.</p>
            <form className="newsletter-form">
                <input type="email" placeholder="Your Email Address" required/>
                <button type="submit" className="btn">Subscribe</button>
            </form>
        </div>
    </div>
    )
};
