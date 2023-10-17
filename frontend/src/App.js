import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import axios from 'axios';
import Signup from './components/Signup'; // Import your Signup component

import { Forum } from './components/forum/Forum';
import { Discussion } from './components/Discussion';
import Home from './components/Home';
import LoginModal from './components/LoginModal';
import { Reply } from './components/Reply';
import EditProfile from './components/EditProfile';
import NewThread from './components/NewThread';

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
          <Route path="/forum/category/discussion" element={<Reply/>}/>
          <Route path="/forum/new-thread" element={<NewThread />} />
          <Route path="/editProfile" element={<EditProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;