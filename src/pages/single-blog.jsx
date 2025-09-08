import React, { useState } from 'react';
import './single-blog.css';
import { NavLink } from 'react-router-dom';

export default function SingleBlog() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      alert('Please enter your email address');
    }
  };

  return (
    <div className="container">
      <article className="blog-article">
        <div className="blog-hero">📊</div>

        <div className="article-content">
          <div className="article-meta">
            <span>May 15, 2025</span>
            <span>By: David Analyst</span>
            <span>10 min read</span>
          </div>

          <h1>How to Manage Your Betting Bankroll</h1>

          <p>Bankroll management is the cornerstone of successful sports betting. Without proper money management, even the most skilled handicapper can quickly find themselves out of funds. In this comprehensive guide, we'll explore the strategies that professional bettors use to protect their capital and maximize profits.</p>

          <h2>What is Bankroll Management?</h2>
          <p>Bankroll management refers to the process of allocating and managing the money you've set aside for betting (your "bankroll") in a way that minimizes risk while maximizing potential returns. It's not about picking winners—it's about managing your money wisely regardless of whether you win or lose on any given day.</p>

          <div className="tip-box">
            <h3>Pro Tip</h3>
            <p>Never bet more than 1-5% of your total bankroll on a single wager. This protects you from significant losses during inevitable losing streaks.</p>
          </div>

          <h2>The Percentage Method</h2>
          <p>The most popular bankroll management strategy is the percentage method, where you bet a fixed percentage of your bankroll on each wager. Here's how it works:</p>

          <ol>
            <li><strong>Determine your total bankroll</strong> - This is the amount you're willing to risk entirely on sports betting.</li>
            <li><strong>Set your percentage</strong> - Most professionals recommend between 1% and 5% per bet.</li>
            <li><strong>Calculate your bet size</strong> - Multiply your bankroll by your chosen percentage.</li>
            <li><strong>Adjust after each bet</strong> - Recalculate your bet size based on your new bankroll after each wager.</li>
          </ol>

          <h2>Unit System Explained</h2>
          <p>Many successful bettors use a "unit system" to standardize their bet sizes. One unit typically represents 1% of your bankroll, but this can vary based on your risk tolerance.</p>

          <p>For example, if you have a $1,000 bankroll:</p>
          <ul>
            <li>1 unit = $10 (1% of bankroll)</li>
            <li>Confident plays: 1-2 units</li>
            <li>Strong opinions: 3-4 units</li>
            <li>Best bets: 5 units (maximum)</li>
          </ul>

          <h2>Practical Bankroll Management Tips</h2>
          <p>Implementing these strategies will help you maintain discipline and protect your betting funds:</p>

          <ol>
            <li><strong>Set aside a dedicated bankroll</strong> - Only use money you can afford to lose.</li>
            <li><strong>Keep detailed records</strong> - Track all your bets, including stakes, odds, and outcomes.</li>
            <li><strong>Avoid chasing losses</strong> - Increasing bet sizes after losses is a recipe for disaster.</li>
            <li><strong>Reassess regularly</strong> - Adjust your unit size as your bankroll grows or shrinks.</li>
            <li><strong>Set stop-loss limits</strong> - Decide in advance when to take a break if you hit a losing streak.</li>
          </ol>

          <div className="article-tags">
            <span className="tag">Bankroll Management</span>
            <span className="tag">Betting Strategies</span>
            <span className="tag">Money Management</span>
            <span className="tag">Sports Betting</span>
          </div>

          <div className="article-nav">
            <NavLink to="#">&larr; Previous Article</NavLink>
            <NavLink to="#">Next Article &rarr;</NavLink>
          </div>
        </div>
      </article>

      <div className="author-bio">
        <div className="author-avatar">DA</div>
        <div className="author-info">
          <h3>David Analyst</h3>
          <p>David is a professional sports bettor with over 10 years of experience in football betting. He specializes in statistical analysis and bankroll management strategies, helping thousands of bettors improve their profitability.</p>
        </div>
      </div>

              <div class="section">
                <h2>Today's Free Tips</h2>
              <table>
                  <tr>
                      <th>Match</th>
                      <th>Prediction</th>
                      <th>Odds</th>
                  </tr>
                  <tr>
                      <td>Arsenal vs Chelsea</td>
                      <td>Over 2.5 Goals</td>
                      <td>1.80</td>
                  </tr>
                  <tr>
                      <td>Barcelona vs Real Madrid</td>
                      <td>Barcelona Win</td>
                      <td>2.10</td>
                  </tr>
              </table>
              </div>

      <div className="related-section">
        <h2>Related Articles</h2>
        <div className="related-articles">
          <div className="related-card">
            <div className="related-image">🔍</div>
            <div className="related-content">
              <h3>Understanding Value Betting</h3>
              <p>Discover how to identify value in odds and why this is the key to long-term success.</p>
              <NavLink to="#" className="read-more">Read More →</NavLink>
            </div>
          </div>

          <div className="related-card">
            <div className="related-image">🧠</div>
            <div className="related-content">
              <h3>The Psychology of Successful Betting</h3>
              <p>Explore the mental aspects of betting and how to maintain discipline.</p>
              <NavLink to="#" className="read-more">Read More →</NavLink>
            </div>
          </div>

          <div className="related-card">
            <div className="related-image">⚽</div>
            <div className="related-content">
              <h3>5 Common Betting Mistakes to Avoid</h3>
              <p>Identify and steer clear of these common pitfalls that prevent consistent profitability.</p>
              <NavLink to="#" className="read-more">Read More →</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get free betting tips, strategies, and exclusive offers delivered to your inbox.</p>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </div>
    </div>
  );
}