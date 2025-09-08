import React from 'react';
import './error-page.css';

export default function ErrorPage() {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">⚠️</div>
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist or has been moved.</p>

        <div className="error-actions">
          <a href="/" className="btn-primary">Go Home</a>
          <a href="/blog" className="btn-secondary">Browse Blog</a>
          <a href="/contact" className="btn-secondary">Contact Support</a>
        </div>

        <div className="error-suggestions">
          <h3>Popular Pages</h3>
          <div className="suggestion-links">
            <a href="/">Homepage</a>
            <a href="/free-tips">Free Tips</a>
            <a href="/vip-tips">VIP Predictions</a>
            <a href="/blog">Blog</a>
            <a href="/subscription">Subscription Plans</a>
          </div>
        </div>
      </div>
    </div>
  );
}