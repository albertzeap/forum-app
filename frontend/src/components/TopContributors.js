// TopContributors.js
import React from 'react';

const TopContributors = () => {
  // Assuming you have an array of top contributors
  const topContributors = ['Contributor1', 'Contributor2', 'Contributor3'];

  return (
    <div className="widget">
      <h3>Top Contributors</h3>
      <ul>
        {topContributors.map((contributor, index) => (
          <li key={index}>{contributor}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopContributors;
