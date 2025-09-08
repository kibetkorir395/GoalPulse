import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom';

export default function Footer() {
    const homText = '| Designed for Winners 🏆';
    const vipText = '| VIP Members Area';
    const freeTex = '| All Rights Reserved';
    const subscriptionText = '| Subscriptions';
    const paymentsText = '| Payments'
  return (
    <footer>
        <div className="footer-content">
            <div className="footer-section">
                <h3>Goal Pulse</h3>
                <p>Your trusted partner for accurate football predictions and betting insights.</p>
                  <div className="social-links">
                  <div className="social-links">
  <NavLink to="#" className="social-icon">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M18.896 0H1.104C0.494 0 0 0.494 0 1.104v17.793C0 19.506 0.494 20 1.104 20h9.579v-7.745H8.076V9.237h2.607V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052 0.082 2.329 0.119v2.7h-1.598c-1.254 0-1.496 0.597-1.496 1.47v1.927h2.989l-0.389 3.018h-2.6V20h5.098c0.608 0 1.102-0.494 1.102-1.104V1.104C20 0.494 19.506 0 18.896 0z"/>
    </svg>
  </NavLink>
  <NavLink to="#" className="social-icon">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M18.943 4.197c.006.143.006.287.006.43 0 4.401-3.35 9.474-9.474 9.474v-.002A9.424 9.424 0 0 1 2 16.317a6.67 6.67 0 0 0 4.92-1.375 3.33 3.33 0 0 1-3.108-2.308c.498.095 1.012.076 1.5-.057A3.328 3.328 0 0 1 2.67 7.72v-.042c.447.248.96.388 1.488.404A3.326 3.326 0 0 1 2.67 4.46c0-.614.165-1.189.453-1.684a9.456 9.456 0 0 0 6.86 3.482 3.327 3.327 0 0 1 5.673-3.034 6.666 6.666 0 0 0 2.114-.808 3.336 3.336 0 0 1-1.463 1.841 6.657 6.657 0 0 0 1.911-.523 6.723 6.723 0 0 1-1.665 1.723z"/>
    </svg>
  </NavLink>
  <NavLink to="#" className="social-icon">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.125.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
    </svg>
  </NavLink>
  <NavLink to="#" className="social-icon">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M19.582 5.112a2.336 2.336 0 0 0-1.643-1.643C16.513 3.1 10 3.1 10 3.1s-6.512 0-7.939.369a2.336 2.336 0 0 0-1.643 1.643C0 6.539 0 10 0 10s0 3.461.418 4.888a2.336 2.336 0 0 0 1.643 1.643C3.487 16.9 10 16.9 10 16.9s6.512 0 7.939-.369a2.336 2.336 0 0 0 1.643-1.643C20 13.461 20 10 20 10s0-3.461-.418-4.888zM8.125 12.85V7.15l5.25 2.85-5.25 2.85z"/>
    </svg>
  </NavLink>
</div>
                </div>
            </div>

            <div className="footer-section">
                <h3>Quick Links</h3>
                <NavLink to="index">Home</NavLink>
                <NavLink to="free-tips">Free Tips</NavLink>
                <NavLink to="vip-tips">VIP Tips</NavLink>
                <NavLink to="subscription">Subscription Plans</NavLink>
                <NavLink to="blog">Blog</NavLink>
            </div>

            <div className="footer-section">
                <h3>Support</h3>
                <NavLink to="contact">Contact Us</NavLink>
                <NavLink to="faq">FAQ</NavLink>
                <NavLink to="terms">Terms of Service</NavLink>
                <NavLink to="privacy">Privacy Policy</NavLink>
            </div>
        </div>

        <div className="copyright">
            <p>© 2025 Goal Pulse | Designed for Winners 🏆</p>
        </div>
    </footer>
  )
}
