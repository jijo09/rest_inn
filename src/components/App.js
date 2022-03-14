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
import DescriptionPage from './DescriptionPage';
import Ptype from './ptypepage';


const App = () => 
{
 
  return (
      <BrowserRouter>

          <Routes>

            <Route path="/" element={<HomePage  />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/propertylisting" element={<PropertyListing />} />
            <Route path="/dbs/:id" element={<DescriptionPage />} />
            <Route path="/propertytype/:type" element={<Ptype />} />
            <Route path="/:type/:id" element={<DescriptionPage />} />
            
          </Routes>
      
      </BrowserRouter>
    );
};

export default App;

