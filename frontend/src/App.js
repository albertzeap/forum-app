import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import { Forum } from './components/forum/Forum';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <BrowserRouter>
           
            <Routes>
                <Route path="/" exact element={<Forum/>}/>

            </Routes>
        
        </BrowserRouter>
            
    );
};

export default App;
