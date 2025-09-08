import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import './header.css'

export default function Header() {
  const location = useLocation();

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
    }
  };

  // Get current page content or default to home
  const currentContent = pageContent[location.pathname] || pageContent['/'];
  return (
    <div>
        <header>
            <h1>{currentContent.title}</h1>
            <p>{currentContent.subtitle}</p>
        </header>
        <nav>
            <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
            <NavLink to="/free-tips" className={location.pathname === '/free-tips' ? 'active' : ''}>Free Tips</NavLink>
            <NavLink to="/vip-tips" className={location.pathname === '/vip-tips' ? 'active' : ''}>VIP Tips</NavLink>
            <NavLink to="/subscription" className={location.pathname === '/subscription' ? 'active' : ''}>Subscription</NavLink>
            <NavLink to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</NavLink>
            <NavLink to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</NavLink>
        </nav>
    </div>
  )
}
