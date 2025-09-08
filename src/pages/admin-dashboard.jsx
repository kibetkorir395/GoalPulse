import React, { useState } from 'react';
import './admin-dashboard.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', joinDate: '2024-01-15', membership: 'VIP' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', joinDate: '2024-02-20', membership: 'Free' },
    { id: 3, name: 'Robert Johnson', email: 'robert@example.com', status: 'Inactive', joinDate: '2024-03-05', membership: 'VIP' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', status: 'Active', joinDate: '2024-03-18', membership: 'Free' },
    { id: 5, name: 'Michael Brown', email: 'michael@example.com', status: 'Suspended', joinDate: '2024-04-02', membership: 'VIP' }
  ]);

  const [posts, setPosts] = useState([
    { id: 1, title: 'How to Manage Your Betting Bankroll', author: 'David Analyst', date: '2024-05-15', status: 'Published', views: 1245 },
    { id: 2, title: 'Understanding Value Betting', author: 'David Analyst', date: '2024-05-12', status: 'Published', views: 987 },
    { id: 3, title: 'The Psychology of Successful Betting', author: 'Emma Psych', date: '2024-05-08', status: 'Draft', views: 0 },
    { id: 4, title: 'Premier League 2024/25 Season Analysis', author: 'Mike Analyst', date: '2024-05-05', status: 'Published', views: 2156 },
    { id: 5, title: '5 Common Betting Mistakes to Avoid', author: 'David Analyst', date: '2024-05-02', status: 'Published', views: 1789 }
  ]);

  // Stats data
  const stats = [
    { title: 'Total Users', value: '2,548', change: '+12%', icon: '👥' },
    { title: 'Active Subscriptions', value: '1,237', change: '+8%', icon: '💳' },
    { title: 'Monthly Revenue', value: '$18,555', change: '+15%', icon: '💰' },
    { title: 'Blog Posts', value: '156', change: '+5%', icon: '📝' }
  ];

  // Recent activity data
  const recentActivity = [
    { user: 'John Doe', action: 'Upgraded to VIP plan', time: '2 hours ago' },
    { user: 'Jane Smith', action: 'Published new blog post', time: '5 hours ago' },
    { user: 'Admin', action: 'Updated system settings', time: 'Yesterday' },
    { user: 'Robert Johnson', action: 'Cancelled subscription', time: '2 days ago' },
    { user: 'Sarah Williams', action: 'Submitted support ticket', time: '3 days ago' }
  ];

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="header-actions">
          <button className="btn-primary">Generate Report</button>
          <button className="btn-secondary">Settings</button>
        </div>
      </div>

      <div className="dashboard-tabs">
        <button
          className={activeTab === 'overview' ? 'tab-active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          📊 Overview
        </button>
        <button
          className={activeTab === 'users' ? 'tab-active' : ''}
          onClick={() => setActiveTab('users')}
        >
          👥 Users
        </button>
        <button
          className={activeTab === 'content' ? 'tab-active' : ''}
          onClick={() => setActiveTab('content')}
        >
          📝 Content
        </button>
        <button
          className={activeTab === 'analytics' ? 'tab-active' : ''}
          onClick={() => setActiveTab('analytics')}
        >
          📈 Analytics
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-info">
                    <h3>{stat.value}</h3>
                    <p>{stat.title}</p>
                  </div>
                  <div className="stat-change positive">
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-row">
              <div className="chart-card">
                <h2>Revenue Overview</h2>
                <div className="chart-placeholder">
                  <p>Revenue chart would be displayed here</p>
                </div>
              </div>

              <div className="activity-card">
                <h2>Recent Activity</h2>
                <div className="activity-list">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-content">
                        <strong>{activity.user}</strong> {activity.action}
                      </div>
                      <div className="activity-time">{activity.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'users' && (
          <div className="table-card">
            <div className="table-header">
              <h2>User Management</h2>
              <input type="text" placeholder="Search users..." className="search-input" />
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Membership</th>
                  <th>Join Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`status-badge status-${user.status.toLowerCase()}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>{user.membership}</td>
                    <td>{user.joinDate}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-sm btn-edit">Edit</button>
                        <button className="btn-sm btn-delete">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="table-card">
            <div className="table-header">
              <h2>Content Management</h2>
              <button className="btn-primary">Create New Post</button>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Views</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.date}</td>
                    <td>
                      <span className={`status-badge status-${post.status.toLowerCase()}`}>
                        {post.status}
                      </span>
                    </td>
                    <td>{post.views}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="btn-sm btn-edit">Edit</button>
                        <button className="btn-sm btn-delete">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="analytics-container">
            <div className="analytics-card">
              <h2>Traffic Analytics</h2>
              <div className="chart-placeholder large">
                <p>Website traffic analytics chart would be displayed here</p>
              </div>
            </div>

            <div className="analytics-row">
              <div className="metric-card">
                <h3>Top Performing Content</h3>
                <ul className="metric-list">
                  <li>Premier League 2024/25 Season Analysis (2,156 views)</li>
                  <li>5 Common Betting Mistakes to Avoid (1,789 views)</li>
                  <li>How to Manage Your Betting Bankroll (1,245 views)</li>
                  <li>Understanding Value Betting (987 views)</li>
                </ul>
              </div>

              <div className="metric-card">
                <h3>Conversion Rates</h3>
                <ul className="metric-list">
                  <li>Free to Premium Conversion: 18.5%</li>
                  <li>Newsletter Signup Rate: 22.3%</li>
                  <li>Visitor Return Rate: 42.7%</li>
                  <li>Bounce Rate: 36.2%</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}