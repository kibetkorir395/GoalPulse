import React, { useState } from 'react';
import './blog.css';
import { NavLink } from 'react-router-dom';

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      alert('Please enter your email address');
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "How to Manage Your Betting Bankroll",
      excerpt: "Learn the essential bankroll management strategies that professional bettors use to maximize profits and minimize risks.",
      date: "May 15, 2025",
      category: "Betting Strategies",
      icon: "📊"
    },
    {
      id: 2,
      title: "Understanding Value Betting",
      excerpt: "Discover how to identify value in odds and why this is the key to long-term success in sports betting.",
      date: "May 12, 2025",
      category: "Betting Strategies",
      icon: "🔍"
    },
    {
      id: 3,
      title: "The Psychology of Successful Betting",
      excerpt: "Explore the mental aspects of betting and how to maintain discipline during both winning and losing streaks.",
      date: "May 8, 2025",
      category: "Psychology",
      icon: "🧠"
    },
    {
      id: 4,
      title: "Premier League 2024/25 Season Analysis",
      excerpt: "Comprehensive breakdown of team performances, key players, and betting opportunities in the current Premier League season.",
      date: "May 5, 2025",
      category: "League Guides",
      icon: "🏆"
    },
    {
      id: 5,
      title: "5 Common Betting Mistakes to Avoid",
      excerpt: "Identify and steer clear of these common pitfalls that prevent bettors from achieving consistent profitability.",
      date: "May 2, 2025",
      category: "Betting Strategies",
      icon: "⚽"
    },
    {
      id: 6,
      title: "Using Statistics to Predict Match Outcomes",
      excerpt: "Learn which statistics matter most when analyzing teams and how to use data to make more informed betting decisions.",
      date: "April 28, 2025",
      category: "Analysis",
      icon: "📈"
    },
    {
      id: 7,
      title: "La Liga Betting Guide 2024/25",
      excerpt: "Complete overview of Spanish football league with team analysis and betting strategies.",
      date: "April 25, 2025",
      category: "League Guides",
      icon: "🇪🇸"
    },
    {
      id: 8,
      title: "The Art of In-Play Betting",
      excerpt: "Master the techniques of live betting to capitalize on shifting odds during matches.",
      date: "April 22, 2025",
      category: "Betting Strategies",
      icon: "🎯"
    },
    {
      id: 9,
      title: "Serie A Team-by-Team Breakdown",
      excerpt: "Detailed analysis of Italian Serie A teams and their betting potential for the season.",
      date: "April 19, 2025",
      category: "League Guides",
      icon: "🇮🇹"
    },
    {
      id: 10,
      title: "Building a Profitable Betting Portfolio",
      excerpt: "How to diversify your bets across different markets to create a sustainable betting portfolio.",
      date: "April 16, 2025",
      category: "Betting Strategies",
      icon: "💼"
    },
    {
      id: 11,
      title: "Bundesliga Betting Insights",
      excerpt: "Expert analysis of German football league with focus on high-scoring matches and betting opportunities.",
      date: "April 13, 2025",
      category: "League Guides",
      icon: "🇩🇪"
    },
    {
      id: 12,
      title: "The Science of Odds Calculation",
      excerpt: "Understand how bookmakers set odds and how you can use this knowledge to your advantage.",
      date: "April 10, 2025",
      category: "Analysis",
      icon: "🧮"
    },
    {
      id: 13,
      title: "Champions League Knockout Stage Guide",
      excerpt: "Complete betting guide for the Champions League knockout phases with team analysis.",
      date: "April 7, 2025",
      category: "Tournament Guides",
      icon: "⭐"
    },
    {
      id: 14,
      title: "Managing Emotions During Losing Streaks",
      excerpt: "Psychological techniques to maintain composure and make rational decisions during difficult periods.",
      date: "April 4, 2025",
      category: "Psychology",
      icon: "😌"
    },
    {
      id: 15,
      title: "Europa League Betting Strategy",
      excerpt: "How to approach betting on Europa League matches with unique insights into this competition.",
      date: "April 1, 2025",
      category: "Tournament Guides",
      icon: "🌍"
    },
    {
      id: 16,
      title: "The Power of Compound betting",
      excerpt: "How to systematically grow your bankroll using compound betting strategies.",
      date: "March 29, 2025",
      category: "Betting Strategies",
      icon: "📈"
    },
    {
      id: 17,
      title: "Ligue 1 French Football Analysis",
      excerpt: "Comprehensive guide to French football league with focus on PSG and other top teams.",
      date: "March 26, 2025",
      category: "League Guides",
      icon: "🇫🇷"
    },
    {
      id: 18,
      title: "Weather Conditions and Betting Outcomes",
      excerpt: "How weather factors like rain, wind, and temperature affect football matches and betting results.",
      date: "March 23, 2025",
      category: "Analysis",
      icon: "🌧️"
    },
    {
      id: 19,
      title: "World Cup 2026 Early betting Preview",
      excerpt: "Early analysis of potential contenders and dark horses for the next World Cup.",
      date: "March 20, 2025",
      category: "Tournament Guides",
      icon: "🏆"
    },
    {
      id: 20,
      title: "The Kelly Criterion in Sports Betting",
      excerpt: "How to apply this mathematical formula to optimize your bet sizing and maximize returns.",
      date: "March 17, 2025",
      category: "Betting Strategies",
      icon: "🎓"
    },
    {
      id: 21,
      title: "EFL Championship Betting Guide",
      excerpt: "Analysis of the competitive English Championship league and its betting opportunities.",
      date: "March 14, 2025",
      category: "League Guides",
      icon: "🏴"
    },
    {
      id: 22,
      title: "Player Performance Metrics That Matter",
      excerpt: "Which player statistics actually correlate with team success and betting outcomes.",
      date: "March 11, 2025",
      category: "Analysis",
      icon: "📋"
    },
    {
      id: 23,
      title: "Copa America 2024 Betting Preview",
      excerpt: "Complete guide to South America's premier international tournament with team analysis.",
      date: "March 8, 2025",
      category: "Tournament Guides",
      icon: "🇦🇷"
    },
    {
      id: 24,
      title: "Building a Betting Tracking System",
      excerpt: "How to create and maintain detailed records of your bets to identify strengths and weaknesses.",
      date: "March 5, 2025",
      category: "Betting Strategies",
      icon: "📝"
    },
    {
      id: 25,
      title: "Eredivisie Dutch League Analysis",
      excerpt: "Overview of Netherlands football with focus on attacking philosophies and goal-rich matches.",
      date: "March 2, 2025",
      category: "League Guides",
      icon: "🇳🇱"
    },
    {
      id: 26,
      title: "The Impact of Manager Changes",
      excerpt: "How managerial appointments and dismissals affect team performance and betting markets.",
      date: "February 27, 2025",
      category: "Analysis",
      icon: "👔"
    },
    {
      id: 27,
      title: "African Cup of Nations Betting Guide",
      excerpt: "Complete preview of AFCON with team analysis and tournament-specific betting strategies.",
      date: "February 24, 2025",
      category: "Tournament Guides",
      icon: "🇳🇬"
    },
    {
      id: 28,
      title: "Arbitrage Betting Opportunities",
      excerpt: "How to identify and exploit price differences across bookmakers for risk-free profits.",
      date: "February 21, 2025",
      category: "Betting Strategies",
      icon: "⚖️"
    },
    {
      id: 29,
      title: "Primeira Liga Portugal Analysis",
      excerpt: "Guide to Portuguese football league beyond the big three teams with betting insights.",
      date: "February 18, 2025",
      category: "League Guides",
      icon: "🇵🇹"
    },
    {
      id: 30,
      title: "Injury Analysis and Betting Impacts",
      excerpt: "How to assess the importance of player injuries and suspensions on match outcomes.",
      date: "February 15, 2025",
      category: "Analysis",
      icon: "🤕"
    },
    {
      id: 31,
      title: "Euro 2024 Championship Preview",
      excerpt: "Comprehensive betting guide for the European Championships with team-by-team analysis.",
      date: "February 12, 2025",
      category: "Tournament Guides",
      icon: "🇪🇺"
    },
    {
      id: 32,
      title: "The Martingale System: Pros and Cons",
      excerpt: "Critical analysis of this controversial betting system and whether it can be applied successfully.",
      date: "February 9, 2025",
      category: "Betting Strategies",
      icon: "🎰"
    },
    {
      id: 33,
      title: "MLS Betting Guide 2025 Season",
      excerpt: "Complete overview of Major League Soccer with unique betting considerations for North American football.",
      date: "February 6, 2025",
      category: "League Guides",
      icon: "🇺🇸"
    },
    {
      id: 34,
      title: "Expected Goals (xG) Explained",
      excerpt: "Understanding this advanced metric and how to use it in your betting analysis.",
      date: "February 3, 2025",
      category: "Analysis",
      icon: "🥅"
    },
    {
      id: 35,
      title: "Copa Libertadores Betting Strategy",
      excerpt: "How to approach South America's premier club competition with unique insights.",
      date: "January 30, 2025",
      category: "Tournament Guides",
      icon: "🇧🇷"
    },
    {
      id: 36,
      title: "Hedging Strategies for Guaranteed Profits",
      excerpt: "How to use hedging techniques to lock in profits and minimize risks in various betting scenarios.",
      date: "January 27, 2025",
      category: "Betting Strategies",
      icon: "🛡️"
    },
    {
      id: 37,
      title: "Scottish Premiership Analysis",
      excerpt: "Beyond the Old Firm: betting insights into Scotland's top football division.",
      date: "January 24, 2025",
      category: "League Guides",
      icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
    },
    {
      id: 38,
      title: "Home Advantage Statistics Revealed",
      excerpt: "Data-driven analysis of how much home advantage really matters in different leagues.",
      date: "January 21, 2025",
      category: "Analysis",
      icon: "🏠"
    },
    {
      id: 39,
      title: "Asian Cup 2024 Betting Preview",
      excerpt: "Complete guide to the Asian Football Confederation's premier tournament with team analysis.",
      date: "January 18, 2025",
      category: "Tournament Guides",
      icon: "🇯🇵"
    },
    {
      id: 40,
      title: "Corner Betting Strategies",
      excerpt: "How to profit from corner markets by identifying teams with specific playing styles.",
      date: "January 15, 2025",
      category: "Betting Strategies",
      icon: "↩️"
    },
    {
      id: 41,
      title: "Belgian Pro League Analysis",
      excerpt: "Guide to Belgium's exciting league known for developing young talent and high-scoring games.",
      date: "January 12, 2025",
      category: "League Guides",
      icon: "🇧🇪"
    },
    {
      id: 42,
      title: "Referee Tendencies and Betting",
      excerpt: "How different officiating styles can influence match outcomes and specific betting markets.",
      date: "January 9, 2025",
      category: "Analysis",
      icon: "👮"
    },
    {
      id: 43,
      title: "Club World Cup Betting Insights",
      excerpt: "Strategy guide for FIFA's global club tournament featuring champions from each continent.",
      date: "January 6, 2025",
      category: "Tournament Guides",
      icon: "🌎"
    },
    {
      id: 44,
      title: "Half-Time/Full-Time Betting Strategies",
      excerpt: "How to identify value in HT/FT markets by analyzing team patterns and tendencies.",
      date: "January 3, 2025",
      category: "Betting Strategies",
      icon: "⏱️"
    },
    {
      id: 45,
      title: "Austrian Bundesliga Analysis",
      excerpt: "Overview of Austria's top division with focus on Red Bull Salzburg's dominance.",
      date: "December 30, 2024",
      category: "League Guides",
      icon: "🇦🇹"
    },
    {
      id: 46,
      title: "Pressing Statistics and Their Importance",
      excerpt: "How teams' pressing intensity affects match outcomes and creates betting opportunities.",
      date: "December 27, 2024",
      category: "Analysis",
      icon: "🔁"
    },
    {
      id: 47,
      title: "Women's World Cup 2027 Early Look",
      excerpt: "Early analysis of the growing women's game and betting opportunities in international tournaments.",
      date: "December 24, 2024",
      category: "Tournament Guides",
      icon: "👑"
    },
    {
      id: 48,
      title: "Both Teams to Score Strategy Guide",
      excerpt: "How to systematically identify matches where both teams are likely to score.",
      date: "December 21, 2024",
      category: "Betting Strategies",
      icon: "✅"
    },
    {
      id: 49,
      title: "Scandinavian Leagues Overview",
      excerpt: "Comparative analysis of Norwegian, Swedish, and Danish leagues with betting insights.",
      date: "December 18, 2024",
      category: "League Guides",
      icon: "🇸🇪"
    },
    {
      id: 50,
      title: "Set-Piece Analysis for Goal Markets",
      excerpt: "How to use set-piece statistics to predict goalscoring opportunities and betting value.",
      date: "December 15, 2024",
      category: "Analysis",
      icon: "🎯"
    },
    {
      id: 51,
      title: "International Break Betting Guide",
      excerpt: "How to approach betting during international breaks when club football takes a pause.",
      date: "December 12, 2024",
      category: "Tournament Guides",
      icon: "🌐"
    },
    {
      id: 52,
      title: "Accumulator Strategies for Success",
      excerpt: "How to build winning accumulators without taking excessive risks or reducing value.",
      date: "December 9, 2024",
      category: "Betting Strategies",
      icon: "🎲"
    },
    {
      id: 53,
      title: "Turkish Süper Lig Analysis",
      excerpt: "Guide to Turkey's passionate football league known for intense atmospheres and unpredictable results.",
      date: "December 6, 2024",
      category: "League Guides",
      icon: "🇹🇷"
    },
    {
      id: 54,
      title: "Fixture Congestion Impact Analysis",
      excerpt: "How busy schedules affect team performance and create betting opportunities.",
      date: "December 3, 2024",
      category: "Analysis",
      icon: "📅"
    },
    {
      id: 55,
      title: "Olympic Football Tournament Guide",
      excerpt: "Betting insights for the Olympic football tournament with unique rules and squad limitations.",
      date: "November 30, 2024",
      category: "Tournament Guides",
      icon: "🥇"
    },
    {
      id: 56,
      title: "Draw No Bet Market Strategies",
      excerpt: "When and how to use the Draw No Bet market to reduce risk while maintaining value.",
      date: "November 27, 2024",
      category: "Betting Strategies",
      icon: "➖"
    }
  ];

  const categories = ['all', 'Betting Strategies', 'Bankroll Management', 'Team Analysis', 'League Guides', 'Psychology'];

  const filteredPosts = activeFilter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <div className="blog-container">
      {/* PAGE HEADER */}
      <div className="page-header">
        <h2>Football Betting Insights</h2>
        <p>Learn strategies to improve your winning chances in football betting</p>
      </div>

      {/* FILTERS */}
      <div className="blog-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category === 'all' ? 'All Topics' : category}
          </button>
        ))}
      </div>

      {/* BLOG POSTS */}
      <div className="blog-posts">
        {filteredPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-image">{post.icon}</div>
            <div className="blog-content">
              <div className="blog-meta">
                <span>{post.date}</span>
                <span>{post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <NavLink to="/single-blog" className="read-more">Read More →</NavLink>
            </div>
          </article>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        <NavLink to="#">&laquo;</NavLink>
        <NavLink to="#" className="active">1</NavLink>
        <NavLink to="#">2</NavLink>
        <NavLink to="#">3</NavLink>
        <NavLink to="#">&raquo;</NavLink>
      </div>

      {/* NEWSLETTER */}
      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get free betting tips, strategies, and exclusive offers delivered to your inbox.</p>
        <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </div>
    </div>
  );
}