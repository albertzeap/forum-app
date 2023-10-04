<<<<<<< HEAD
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import axios from 'axios';
import Signup from './components/Signup'; // Import your Signup component
=======
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
>>>>>>> 88b2bf169a4bbf820740fe1481dcad2ce7b996b5
import Login from './components/Login';
import Forum from './components/forum/Forum';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      // Make a request to your backend to validate credentials
      const response = await axios.post('http://localhost:5000/api/login', { username, password });

      // Assuming a successful login for demonstration
      // In a real app, you would handle success and error cases accordingly
      setIsLoggedIn(true);  // Update the state to indicate that the user is logged in
      alert('Login successful!');
    } catch (error) {
      console.error('Error in login:', error.response.data.error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  const handleLogout = () => {
    // Perform any necessary actions on logout
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </Router>
=======
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Forum App
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
            {/* You can add a Logout link here when implementing authentication */}
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Forum />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 88b2bf169a4bbf820740fe1481dcad2ce7b996b5
  );
};

export default App;
