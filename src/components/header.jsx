import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './header.css'

export default function Header() {
  const location = useLocation();
  const isAdmin = true;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define content for each page
  const pageContent = {
    '/': {
      title: '⚽ Goal Pulse',
      subtitle: 'Winning Starts Here - Get Free & Premium Predictions'//Your No.1 Source for Free & Premium Predictions
    },
    '/free-tips': {
      title: '📋 Free Football Tips',
      subtitle: 'Expert Predictions Without Cost - Start Winning Today'
    },
    '/vip-tips': {
      title: '⭐ VIP Football Tips',
      subtitle: 'Exclusive High-Value Predictions For Subscribed Members Only'//For Maximum Returns
    },
    '/subscription': {
      title: '🔐 Subscription Plans',
      subtitle: 'Choose Your Plan - Unlock Premium Predictions'
    },
    '/blog': {
      title: '📝 Football Insights Blog', //📖 Goal Pulse Blog
      subtitle: 'Expert Analysis, Tips & Strategy For Smart Betting'
    },
    '/single-blog': {
      title: '📖 Goal Pulse Blog',
      subtitle: 'Expert Insights, Strategies & Betting Tips'
    },
    '/login': {
      title: '🔒 Member Login',
      subtitle: 'Access Your Account To View Premium Predictions'//to get today's predictions
    },
    '/payment': {
      title: 'Payment',
      subtitle: 'Complete your subscription and access VIP tips instantly'
    },
    '/admin': {
      title: '⚙️ Admin Dashboard',
      subtitle: 'Manage Users, Content, and Analytics'
    },
    '/profile': {
      title: '👤 User Profile',
      subtitle: 'Manage Your Account Settings and Preferences'
    },
    '/account': {
      title: '💼 Account Management',
      subtitle: 'Update Your Subscription and Payment Details'
    }
  };

  // Get current page content or default to home
  const currentContent = pageContent[location.pathname] || pageContent['/'];
  
  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
        <header>
            <h1>{currentContent.title}</h1>
            <p>{currentContent.subtitle}</p>
        </header>
        <nav>
            <button 
              className="hamburger" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <NavLink to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>Home</NavLink>
              <NavLink to="/free-tips" className={location.pathname === '/free-tips' ? 'active' : ''} onClick={handleLinkClick}>Free Tips</NavLink>
              <NavLink to="/vip-tips" className={location.pathname === '/vip-tips' ? 'active' : ''} onClick={handleLinkClick}>VIP Tips</NavLink>
              <NavLink to="/subscription" className={location.pathname === '/subscription' ? 'active' : ''} onClick={handleLinkClick}>Subscription</NavLink>
              <NavLink to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={handleLinkClick}>Blog</NavLink>
              {
                isAdmin ? <NavLink to="/admin" className={location.pathname === '/admin' ? 'active' : ''} onClick={handleLinkClick}>Admin</NavLink>
                : <NavLink to="/account" className={location.pathname === '/account' ? 'active' : ''} onClick={handleLinkClick}>👤Account</NavLink>
              }
            </div>
        </nav>
    </div>
  )
}
