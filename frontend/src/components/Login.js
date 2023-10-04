import React, { useState } from 'react';
import axios from 'axios';
import LoginModal from './LoginModal'; // Import the LoginModal component

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { username, password });
            if (response && response.data) {
                alert('Login successful!');
                onLogin(response.data.token); // Call the onLogin prop with the token
            } else {
                alert('Login failed: Response data is missing.');
            }
        } catch (error) {
            console.error('Error in login:', error.message);
            alert('Login failed: An error occurred.');
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h2>Login</h2>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>

            {/* Render the LoginModal conditionally based on isModalOpen */}
            {isModalOpen && (
                <LoginModal onLogin={onLogin} onClose={closeModal} />
            )}
        </div>
    );
};

export default Login;
