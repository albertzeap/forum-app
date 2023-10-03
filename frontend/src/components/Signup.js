import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Signup</h2>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
};

export default Signup;
