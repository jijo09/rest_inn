import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './HomePage';
import Login from './Login'
import Register from './Register';
import PropertyListing from './PropertyListing';


const App = () => 
{
 
  return (
      <BrowserRouter>

          <Routes>

            <Route path="/" element={<HomePage  />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/propertylisting" element={<PropertyListing />} />
            
          </Routes>
      
      </BrowserRouter>
    );
};

export default App;

