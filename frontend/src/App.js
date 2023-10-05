import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import axios from 'axios';
import Signup from './components/Signup'; // Import your Signup component

import Forum from './components/forum/Forum';
import { Discussion } from './components/Discussion';
import { Home } from './components/Home';
import LoginModal from './components/LoginModal';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.length > 0 ? true : false);

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginModal/>} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/category" element={<Discussion/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;