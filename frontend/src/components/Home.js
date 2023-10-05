// Home.js
import React from 'react';
import RecentPosts from './RecentPosts'; // Assuming you have a component for recent posts
import '../css/home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Our Forum!</h1>
      </div>

      <div className="recent-posts-section">
        <h2>Recent Posts</h2>
        <RecentPosts />
      </div>

      {/* Add more sections or blocks as needed */}
    </div>
  );
};

export default Home;
