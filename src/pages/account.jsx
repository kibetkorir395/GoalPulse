import React, { useState } from 'react';
import './account.css';

export default function UserAccount() {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    avatar: 'JD',
    membership: 'VIP Premium',
    joinDate: 'January 15, 2024',
    status: 'Active',
    notifications: true,
    smsAlerts: false,
    newsletter: true
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({...userData});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUserData({...formData});
    setEditMode(false);
    alert('account updated successfully!');
  };

  const handleCancel = () => {
    setFormData({...userData});
    setEditMode(false);
  };

  return (
    <div className="account-container">
      <div className="account-header">
        <h1>My account</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="account-content">
        <div className="account-sidebar">
          <div className="user-card">
            <div className="avatar-large">{userData.avatar}</div>
            <h2>{userData.name}</h2>
            <p className="membership-badge">{userData.membership}</p>
            <p className="join-date">Member since {userData.joinDate}</p>
            <div className={`status-indicator ${userData.status.toLowerCase()}`}>
              {userData.status}
            </div>
          </div>

          {!editMode && (
            <button
              className="edit-account-btn"
              onClick={() => setEditMode(true)}
            >
              Edit account
            </button>
          )}
        </div>

        <div className="account-main">
          <div className="account-section">
            <h2>Personal Information</h2>

            {!editMode ? (
              <div className="account-details">
                <div className="detail-item">
                  <span className="detail-label">Full Name</span>
                  <span className="detail-value">{userData.name}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Email Address</span>
                  <span className="detail-value">{userData.email}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Phone Number</span>
                  <span className="detail-value">{userData.phone}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Membership Status</span>
                  <span className="detail-value">{userData.membership}</span>
                </div>
              </div>
            ) : (
              <form className="account-form" onSubmit={handleSave}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
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
                    required
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

                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button type="submit" className="save-btn">
                    Save Changes
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="account-section">
            <h2>Notification Preferences</h2>
            <div className="preferences-list">
              <label className="preference-item">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={userData.notifications}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
                <span>Email Notifications</span>
              </label>
              <label className="preference-item">
                <input
                  type="checkbox"
                  name="smsAlerts"
                  checked={userData.smsAlerts}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
                <span>SMS Alerts</span>
              </label>
              <label className="preference-item">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={userData.newsletter}
                  onChange={handleInputChange}
                  disabled={!editMode}
                />
                <span>Weekly Newsletter</span>
              </label>
            </div>
          </div>

          <div className="account-section">
            <h2>Account Actions</h2>
            <div className="action-buttons">
              <button className="action-btn change-password">
                Change Password
              </button>
              <button className="action-btn enable-2fa">
                Enable Two-Factor Authentication
              </button>
              <button className="action-btn download-data">
                Download My Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}