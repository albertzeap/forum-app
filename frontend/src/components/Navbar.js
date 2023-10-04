// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import '../css/styles.css'; // Import your CSS file

const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLogoutClick = () => {
    // Perform logout logic, e.g., call an API to log out
    // Once logged out, update the state or perform any other necessary actions
    onLogout();
  };

  const handleLogin = async () => {
    // ... (same as before)
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <ul>
        <li className="dropdown">
          <span className="dropdown-btn" onClick={handleDropdownToggle}>
            Main Menu
          </span>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/">Home</Link>
              <Link to="/forum">Forum</Link>
              {/* Add more dropdown links as needed */}
            </div>
          )}
        </li>
        {!isLoggedIn && (
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogoutClick}>
              Logout
            </button>
          ) : (
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </li>
        
      </ul>
      {showLoginForm && !isLoggedIn && <LoginModal onLogin={onLogin} onClose={() => setShowLoginForm(false)} />}
    </nav>
  );
};

export default Navbar;
