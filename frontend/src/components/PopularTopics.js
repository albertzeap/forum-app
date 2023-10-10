// PopularTopics.js
import React from 'react';

const PopularTopics = () => {
  // Assuming you have an array of popular topics
  const popularTopics = ['Topic1', 'Topic2', 'Topic3'];

  return (
    <div className="widget">
      <h3>Popular Topics</h3>
      <ul>
        {popularTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default PopularTopics;
