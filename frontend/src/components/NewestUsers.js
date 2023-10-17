// NewestUsers.js
import React from 'react';

const NewestUsers = () => {
  // Assuming you have an array of newest users
  const newestUsers = ['User1', 'User2', 'User3'];

  return (
    <div className="widget">
      <h3>Newest Users</h3>
      <ul>
        {newestUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewestUsers;
