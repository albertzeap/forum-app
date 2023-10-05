// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import '../css/styles.css'; // Import your CSS file

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <ul>
        <li className="dropdown">
          <span className="dropdown-btn" onClick={handleDropdownToggle}>
            Main Menu ⮟
          </span>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/">Home</Link>
              <Link to="/forum">Forum</Link>
              {/* Add more dropdown links as needed */}
            </div>
          )}
        </li>
        <li>
          {isLoggedIn ? (
            <span style={{ color: 'white' }}>Welcome!</span>
          ) : (
            <span style={{ color: 'white' }}>Not logged in</span>
          )}
        </li>

        {!isLoggedIn && (
            <li>
          <button className="signup-btn">
            <Link to="/signup">Signup</Link>
          </button>
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </li>
        
      </ul>
      {showLoginForm && !isLoggedIn && <LoginModal setIsLoggedIn={setIsLoggedIn} onClose={() => setShowLoginForm(false)} />}
    </nav>
  );
};

export default Navbar;
