// LoginModal.js
import React, { useState } from 'react';
import axios from 'axios';
import '../css/styles.css';

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/login', { username, password });
        if (response && response.data && response.data.token) {
            onLogin(response.data.token);
            onClose(); // Close the modal after successful login
            alert('Login successful!');
        } else {
            alert('Login failed: Response data or token is missing.');
        }
    } catch (error) {
        console.error('Error in login:', error.message);
        alert(`Login failed: ${error.response.data.error}`);
    }
};
  return (
    <div className="login-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginModal;
