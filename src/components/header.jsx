import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './header.css'

export default function Header() {
  const location = useLocation();
  const isAdmin = true;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Define content for each page
  const pageContent = {
    '/': {
      title: '⚽ Goal Pulse',
      subtitle: 'Winning Starts Here - Get Free & Premium Predictions'
    },
    '/free-tips': {
      title: '📋 Free Football Tips',
      subtitle: 'Expert Predictions Without Cost - Start Winning Today'
    },
    '/vip-tips': {
      title: '⭐ VIP Football Tips',
      subtitle: 'Exclusive High-Value Predictions For Subscribed Members Only'
    },
    '/subscription': {
      title: '🔐 Subscription Plans',
      subtitle: 'Choose Your Plan - Unlock Premium Predictions'
    },
    '/blog': {
      title: '📝 Football Insights Blog',
      subtitle: 'Expert Analysis, Tips & Strategy For Smart Betting'
    },
    '/single-blog': {
      title: '📖 Goal Pulse Blog',
      subtitle: 'Expert Insights, Strategies & Betting Tips'
    },
    '/login': {
      title: '🔒 Member Login',
      subtitle: 'Access Your Account To View Premium Predictions'
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
  
  // Close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && 
          navRef.current && 
          !navRef.current.contains(event.target) &&
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div>
        <header>
            <h1>{currentContent.title}</h1>
            <p>{currentContent.subtitle}</p>
        </header>
        <nav>
            <button 
              ref={hamburgerRef}
              className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div ref={navRef} className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <button className="close-menu-btn" onClick={closeMenu}>✕</button>
              <NavLink to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
              <NavLink to="/free-tips" className={location.pathname === '/free-tips' ? 'active' : ''} onClick={closeMenu}>Free Tips</NavLink>
              <NavLink to="/vip-tips" className={location.pathname === '/vip-tips' ? 'active' : ''} onClick={closeMenu}>VIP Tips</NavLink>
              <NavLink to="/subscription" className={location.pathname === '/subscription' ? 'active' : ''} onClick={closeMenu}>Subscription</NavLink>
              <NavLink to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={closeMenu}>Blog</NavLink>
              {
                isAdmin ? <NavLink to="/admin" className={location.pathname === '/admin' ? 'active' : ''} onClick={closeMenu}>Admin</NavLink>
                : <NavLink to="/account" className={location.pathname === '/account' ? 'active' : ''} onClick={closeMenu}>👤Account</NavLink>
              }
            </div>
        </nav>
    </div>
  )
}