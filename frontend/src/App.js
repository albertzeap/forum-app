import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Forum from './components/Forum';

const App = () => {
    return (
        <div>
            <Signup />
            <hr />
            <Login />
            <hr />
            <Forum />
        </div>
    );
};

export default App;
