import React, { useState } from 'react';
import axios from 'axios';
import '../css/Signup.css'; // Import your CSS file

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/signup', { username, password });
          if (response.data) {
            // Access response data here
            alert('Signup successful!');
          } else {
            alert('Signup failed: No data in the response.');
          }
        } catch (error) {
          // Handle error
          console.error('Error in signup:', error.message);
          alert('Signup failed: An error occurred.');
        }
      };

  return (

    <div className="signup-container">
      <h2>Signup</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
