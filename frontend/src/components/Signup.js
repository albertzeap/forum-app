import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await axios.post('http://localhost:5000/api/signup', { username, password });
            alert('Signup successful!');
        } catch (error) {
            console.error('Error in signup:', error.response.data.error);
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
