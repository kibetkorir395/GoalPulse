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

  const [predictions, setPredictions] = useState([
    { id: 1, match: 'Arsenal vs Chelsea', prediction: 'Over 2.5 Goals', odds: 1.80, league: 'Premier League', date: '2024-05-20', status: 'Pending', isPremium: false },
    { id: 2, match: 'Barcelona vs Real Madrid', prediction: 'Barcelona Win', odds: 2.10, league: 'La Liga', date: '2024-05-21', status: 'Won', isPremium: true },
    { id: 3, match: 'PSG vs Bayern Munich', prediction: 'PSG Win', odds: 2.30, league: 'Champions League', date: '2024-05-18', status: 'Lost', isPremium: true },
    { id: 4, match: 'Man United vs Liverpool', prediction: 'Both Teams to Score', odds: 1.70, league: 'Premier League', date: '2024-05-19', status: 'Pending', isPremium: false },
    { id: 5, match: 'Juventus vs AC Milan', prediction: 'Under 2.5 Goals', odds: 1.75, league: 'Serie A', date: '2024-05-17', status: 'Void', isPremium: true }
  ]);

  // Form states
  const [postForm, setPostForm] = useState({
    title: '',
    content: '',
    category: 'Betting Strategies',
    status: 'Draft',
    image: null
  });

  const [predictionForm, setPredictionForm] = useState({
    match: '',
    prediction: '',
    odds: '',
    league: 'Premier League',
    matchDate: '',
    isPremium: false,
    analysis: ''
  });

  const [editingPrediction, setEditingPrediction] = useState(null);

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

  // Handle post form changes
  const handlePostChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPostForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle prediction form changes
  const handlePredictionChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPredictionForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Submit new post
  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      title: postForm.title,
      author: 'Admin',
      date: new Date().toISOString().split('T')[0],
      status: postForm.status,
      views: 0,
      category: postForm.category
    };

    setPosts([newPost, ...posts]);
    setPostForm({
      title: '',
      content: '',
      category: 'Betting Strategies',
      status: 'Draft',
      image: null
    });

    alert('Blog post created successfully!');
  };

  // Submit new prediction
  const handlePredictionSubmit = (e) => {
    e.preventDefault();

    if (editingPrediction) {
      // Update existing prediction
      setPredictions(predictions.map(p =>
        p.id === editingPrediction.id
          ? { ...p, ...predictionForm }
          : p
      ));
      setEditingPrediction(null);
      alert('Prediction updated successfully!');
    } else {
      // Add new prediction
      const newPrediction = {
        id: predictions.length + 1,
        ...predictionForm,
        status: 'Pending',
        date: new Date().toISOString().split('T')[0]
      };

      setPredictions([newPrediction, ...predictions]);
      alert('Prediction added successfully!');
    }

    setPredictionForm({
      match: '',
      prediction: '',
      odds: '',
      league: 'Premier League',
      matchDate: '',
      isPremium: false,
      analysis: ''
    });
  };

  // Edit prediction
  const handleEditPrediction = (prediction) => {
    setEditingPrediction(prediction);
    setPredictionForm({
      match: prediction.match,
      prediction: prediction.prediction,
      odds: prediction.odds,
      league: prediction.league,
      matchDate: prediction.matchDate,
      isPremium: prediction.isPremium,
      analysis: prediction.analysis || ''
    });
  };

  // Delete prediction
  const handleDeletePrediction = (id) => {
    if (window.confirm('Are you sure you want to delete this prediction?')) {
      setPredictions(predictions.filter(p => p.id !== id));
      alert('Prediction deleted successfully!');
    }
  };

  // Update prediction status
  const handleStatusChange = (id, status) => {
    setPredictions(predictions.map(p =>
      p.id === id ? { ...p, status } : p
    ));
    alert('Prediction status updated!');
  };

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
          className={activeTab === 'predictions' ? 'tab-active' : ''}
          onClick={() => setActiveTab('predictions')}
        >
          ⚽ Predictions
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
          <div className="content-management">
            <div className="content-header">
              <h2>Content Management</h2>
              <button
                className="btn-primary"
                onClick={() => setActiveTab('create-post')}
              >
                Create New Post
              </button>
            </div>

            <div className="table-card">
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
          </div>
        )}

        {activeTab === 'create-post' && (
          <div className="form-card">
            <h2>Create New Blog Post</h2>
            <form onSubmit={handlePostSubmit}>
              <div className="form-group">
                <label htmlFor="post-title">Title</label>
                <input
                  type="text"
                  id="post-title"
                  name="title"
                  value={postForm.title}
                  onChange={handlePostChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="post-category">Category</label>
                <select
                  id="post-category"
                  name="category"
                  value={postForm.category}
                  onChange={handlePostChange}
                >
                  <option value="Betting Strategies">Betting Strategies</option>
                  <option value="Bankroll Management">Bankroll Management</option>
                  <option value="League Guides">League Guides</option>
                  <option value="Team Analysis">Team Analysis</option>
                  <option value="Psychology">Psychology</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="post-content">Content</label>
                <textarea
                  id="post-content"
                  name="content"
                  rows="10"
                  value={postForm.content}
                  onChange={handlePostChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="post-status">Status</label>
                <select
                  id="post-status"
                  name="status"
                  value={postForm.status}
                  onChange={handlePostChange}
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </select>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setActiveTab('content')}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {postForm.status === 'Draft' ? 'Save Draft' : 'Publish Post'}
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'predictions' && (
          <div className="predictions-management">
            <div className="predictions-header">
              <h2>Prediction Management</h2>
              <button className="btn-primary" onClick={() => setEditingPrediction(null)}>
                Add New Prediction
              </button>
            </div>

            {editingPrediction ? (
              <div className="form-card">
                <h2>{editingPrediction ? 'Edit Prediction' : 'Add New Prediction'}</h2>
                <form onSubmit={handlePredictionSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="prediction-match">Match</label>
                      <input
                        type="text"
                        id="prediction-match"
                        name="match"
                        value={predictionForm.match}
                        onChange={handlePredictionChange}
                        required
                        placeholder="e.g., Arsenal vs Chelsea"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="prediction-league">League</label>
                      <select
                        id="prediction-league"
                        name="league"
                        value={predictionForm.league}
                        onChange={handlePredictionChange}
                      >
                        <option value="Premier League">Premier League</option>
                        <option value="La Liga">La Liga</option>
                        <option value="Serie A">Serie A</option>
                        <option value="Bundesliga">Bundesliga</option>
                        <option value="Ligue 1">Ligue 1</option>
                        <option value="Champions League">Champions League</option>
                        <option value="Europa League">Europa League</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="prediction-prediction">Prediction</label>
                      <input
                        type="text"
                        id="prediction-prediction"
                        name="prediction"
                        value={predictionForm.prediction}
                        onChange={handlePredictionChange}
                        required
                        placeholder="e.g., Over 2.5 Goals"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="prediction-odds">Odds</label>
                      <input
                        type="number"
                        id="prediction-odds"
                        name="odds"
                        step="0.01"
                        min="1.00"
                        value={predictionForm.odds}
                        onChange={handlePredictionChange}
                        required
                        placeholder="e.g., 1.80"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="prediction-date">Match Date</label>
                      <input
                        type="date"
                        id="prediction-date"
                        name="matchDate"
                        value={predictionForm.matchDate}
                        onChange={handlePredictionChange}
                        required
                      />
                    </div>

                    <div className="form-group checkbox-group">
                      <label htmlFor="prediction-premium">
                        <input
                          type="checkbox"
                          id="prediction-premium"
                          name="isPremium"
                          checked={predictionForm.isPremium}
                          onChange={handlePredictionChange}
                        />
                        Premium Prediction
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="prediction-analysis">Analysis (Optional)</label>
                    <textarea
                      id="prediction-analysis"
                      name="analysis"
                      rows="4"
                      value={predictionForm.analysis}
                      onChange={handlePredictionChange}
                      placeholder="Brief analysis explaining the prediction..."
                    ></textarea>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setEditingPrediction(null)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary">
                      {editingPrediction ? 'Update Prediction' : 'Add Prediction'}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="table-card">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Match</th>
                      <th>Prediction</th>
                      <th>Odds</th>
                      <th>League</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {predictions.map(prediction => (
                      <tr key={prediction.id}>
                        <td>{prediction.match}</td>
                        <td>{prediction.prediction}</td>
                        <td>{prediction.odds}</td>
                        <td>{prediction.league}</td>
                        <td>{prediction.date}</td>
                        <td>
                          <select
                            value={prediction.status}
                            onChange={(e) => handleStatusChange(prediction.id, e.target.value)}
                            className={`status-select status-${prediction.status.toLowerCase()}`}
                          >
                            <option value="Pending">Pending</option>
                            <option value="Won">Won</option>
                            <option value="Lost">Lost</option>
                            <option value="Void">Void</option>
                          </select>
                        </td>
                        <td>
                          <span className={`type-badge ${prediction.isPremium ? 'premium' : 'free'}`}>
                            {prediction.isPremium ? 'Premium' : 'Free'}
                          </span>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button
                              className="btn-sm btn-edit"
                              onClick={() => handleEditPrediction(prediction)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn-sm btn-delete"
                              onClick={() => handleDeletePrediction(prediction.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
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