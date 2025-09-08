import React, { useState, useRef } from 'react';
import './auth.css';
import { NavLink } from 'react-router-dom';

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
    regName: '',
    regEmail: '',
    regPassword: '',
    regConfirm: '',
    rememberMe: false,
    terms: false
  });

  const loginFormRef = useRef(null);
  const registerFormRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { loginEmail, loginPassword } = formData;

    if (loginEmail && loginPassword) {
      alert('Login successful! Redirecting to your dashboard...');
      // In a real application, you would handle the login process here
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const { regName, regEmail, regPassword, regConfirm, terms } = formData;

    if (!regName || !regEmail || !regPassword || !regConfirm) {
      alert('Please fill in all fields');
      return;
    }

    if (regPassword !== regConfirm) {
      alert('Passwords do not match');
      return;
    }

    if (!terms) {
      alert('You must agree to the terms and conditions');
      return;
    }

    alert('Registration successful! Welcome to Goal Pulse.');
    // In a real application, you would handle the registration process here
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <div
          className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </div>
        <div
          className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
          onClick={() => handleTabChange('register')}
        >
          Register
        </div>
      </div>

      <form
        className="auth-form"
        ref={loginFormRef}
        style={{ display: activeTab === 'login' ? 'block' : 'none' }}
        onSubmit={handleLoginSubmit}
      >
        <div className="form-header">
          <h2>Welcome Back</h2>
          <p>Sign in to access your predictions</p>
        </div>

        <div className="form-group">
          <label htmlFor="loginEmail">Email Address</label>
          <input
            type="email"
            id="loginEmail"
            name="loginEmail"
            value={formData.loginEmail}
            onChange={handleInputChange}
            placeholder="Your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            id="loginPassword"
            name="loginPassword"
            value={formData.loginPassword}
            onChange={handleInputChange}
            placeholder="Your password"
            required
          />
        </div>

        <div className="form-options">
          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <NavLink to="#" className="forgot-password">Forgot password?</NavLink>
        </div>

        <button type="submit" className="btn">Login to Account</button>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <div className="social-login">
          <button type="button" className="social-btn">
            <span>Google</span>
          </button>
          <button type="button" className="social-btn">
            <span>Facebook</span>
          </button>
        </div>

        <div className="form-footer">
          Don't have an account? <NavLink to="#" onClick={(e) => { e.preventDefault(); handleTabChange('register'); }}>Sign up here</NavLink>
        </div>
      </form>

      <form
        className="auth-form"
        ref={registerFormRef}
        style={{ display: activeTab === 'register' ? 'block' : 'none' }}
        onSubmit={handleRegisterSubmit}
      >
        <div className="form-header">
          <h2>Create Account</h2>
          <p>Join thousands of winning bettors</p>
        </div>

        <div className="form-group">
          <label htmlFor="reg-name">Full Name</label>
          <input
            type="text"
            id="reg-name"
            name="regName"
            value={formData.regName}
            onChange={handleInputChange}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reg-email">Email Address</label>
          <input
            type="email"
            id="reg-email"
            name="regEmail"
            value={formData.regEmail}
            onChange={handleInputChange}
            placeholder="Your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reg-password">Password</label>
          <input
            type="password"
            id="reg-password"
            name="regPassword"
            value={formData.regPassword}
            onChange={handleInputChange}
            placeholder="Create a password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reg-confirm">Confirm Password</label>
          <input
            type="password"
            id="reg-confirm"
            name="regConfirm"
            value={formData.regConfirm}
            onChange={handleInputChange}
            placeholder="Confirm your password"
            required
          />
        </div>

        <div className="form-options">
          <div className="remember-me">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="terms">I agree to the <NavLink to="#" style={{ color: "var(--primary)"}}>Terms & Conditions</NavLink></label>
          </div>
        </div>

        <button type="submit" className="btn">Create Account</button>

        <div className="divider">
          <span>Or continue with</span>
        </div>

        <div className="social-login">
          <button type="button" className="social-btn">
            <span>Google</span>
          </button>
          <button type="button" className="social-btn">
            <span>Facebook</span>
          </button>
              </div>


        <div className="form-footer">
          Already have an account? <NavLink to="#" onClick={(e) => { e.preventDefault(); handleTabChange('login'); }}>Sign in here</NavLink>
        </div>
      </form>
    </div>
  );
}