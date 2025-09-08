import React, { useState } from 'react';
import './profile.css';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'JD',
    membership: 'VIP Premium',
    joinDate: 'January 15, 2024',
    status: 'Active'
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({...userData});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUserData({...formData});
    setEditMode(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setFormData({...userData});
    setEditMode(false);
  };

  const subscriptionHistory = [
    { id: 1, plan: 'VIP Monthly', date: 'May 1, 2025', amount: '$15.00', status: 'Active' },
    { id: 2, plan: 'VIP Weekly', date: 'April 24, 2025', amount: '$5.00', status: 'Expired' },
    { id: 3, plan: 'VIP Weekly', date: 'April 17, 2025', amount: '$5.00', status: 'Expired' }
  ];

  const bettingStats = [
    { label: 'Total Bets', value: '147', change: '+12%' },
    { label: 'Win Rate', value: '78%', change: '+5%' },
    { label: 'Total Profit', value: '$1,245', change: '+8%' },
    { label: 'Current Streak', value: '6 Wins', change: '+2' }
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Account</h1>
        <p>Manage your profile, subscription, and betting preferences</p>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="user-card">
            <div className="avatar-large">{userData.avatar}</div>
            <h2>{userData.name}</h2>
            <p className="membership-badge">{userData.membership}</p>
            <p className="join-date">Member since {userData.joinDate}</p>
            <div className={`status-indicator ${userData.status.toLowerCase()}`}>
              {userData.status}
            </div>
          </div>

          <nav className="profile-nav">
            <button
              className={activeTab === 'profile' ? 'active' : ''}
              onClick={() => setActiveTab('profile')}
            >
              📋 Profile
            </button>
            <button
              className={activeTab === 'subscription' ? 'active' : ''}
              onClick={() => setActiveTab('subscription')}
            >
              💳 Subscription
            </button>
            <button
              className={activeTab === 'stats' ? 'active' : ''}
              onClick={() => setActiveTab('stats')}
            >
              📊 Statistics
            </button>
            <button
              className={activeTab === 'settings' ? 'active' : ''}
              onClick={() => setActiveTab('settings')}
            >
              ⚙️ Settings
            </button>
          </nav>
        </div>

        <div className="profile-main">
          {activeTab === 'profile' && (
            <div className="tab-content">
              <div className="tab-header">
                <h2>Personal Information</h2>
                {!editMode ? (
                  <button className="edit-btn" onClick={() => setEditMode(true)}>
                    Edit Profile
                  </button>
                ) : (
                  <div className="edit-actions">
                    <button className="cancel-btn" onClick={handleCancel}>
                      Cancel
                    </button>
                    <button className="save-btn" onClick={handleSave}>
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              {!editMode ? (
                <div className="profile-details">
                  <div className="detail-item">
                    <label>Full Name</label>
                    <p>{userData.name}</p>
                  </div>
                  <div className="detail-item">
                    <label>Email Address</label>
                    <p>{userData.email}</p>
                  </div>
                  <div className="detail-item">
                    <label>Phone Number</label>
                    <p>{userData.phone}</p>
                  </div>
                  <div className="detail-item">
                    <label>Membership Status</label>
                    <p>{userData.membership}</p>
                  </div>
                </div>
              ) : (
                <form className="profile-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              )}
            </div>
          )}

          {activeTab === 'subscription' && (
            <div className="tab-content">
              <h2>Subscription Management</h2>
              <div className="subscription-card">
                <div className="subscription-header">
                  <h3>Current Plan: {userData.membership}</h3>
                  <span className="status-badge active">Active</span>
                </div>
                <p>Your subscription will renew on June 1, 2025</p>
                <div className="subscription-actions">
                  <button className="upgrade-btn">Upgrade Plan</button>
                  <button className="cancel-sub-btn">Cancel Subscription</button>
                </div>
              </div>

              <h3>Payment History</h3>
              <div className="payment-history">
                {subscriptionHistory.map(item => (
                  <div key={item.id} className="payment-item">
                    <div className="payment-info">
                      <h4>{item.plan}</h4>
                      <p>{item.date}</p>
                    </div>
                    <div className="payment-amount">
                      <span>{item.amount}</span>
                      <span className={`status ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'stats' && (
            <div className="tab-content">
              <h2>Betting Statistics</h2>
              <div className="stats-grid">
                {bettingStats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                    <span className="stat-change positive">{stat.change}</span>
                  </div>
                ))}
              </div>

              <div className="chart-placeholder">
                <h3>Performance Overview</h3>
                <div className="chart-container">
                  <p>📈 Chart would display here</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="tab-content">
              <h2>Account Settings</h2>

              <div className="settings-section">
                <h3>Notification Preferences</h3>
                <div className="setting-item">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>Email notifications</span>
                  </label>
                </div>
                <div className="setting-item">
                  <label className="checkbox-label">
                    <input type="checkbox" defaultChecked />
                    <span>SMS alerts</span>
                  </label>
                </div>
                <div className="setting-item">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Push notifications</span>
                  </label>
                </div>
              </div>

              <div className="settings-section">
                <h3>Privacy & Security</h3>
                <button className="change-pw-btn">Change Password</button>
                <button className="two-fa-btn">Enable Two-Factor Authentication</button>
              </div>

              <div className="settings-section danger-zone">
                <h3>Danger Zone</h3>
                <p>Once you delete your account, there is no going back. Please be certain.</p>
                <button className="delete-account-btn">Delete Account</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}