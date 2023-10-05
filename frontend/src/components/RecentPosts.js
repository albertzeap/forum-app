// RecentPosts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch recent posts from your API
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recent-posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching recent posts:', error.message);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {/* Add more details as needed */}
        </div>
      ))}
    </div>
  );
};

export default RecentPosts;
