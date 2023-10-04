import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Forum from './components/forum/Forum';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
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
  );
};

export default App;
