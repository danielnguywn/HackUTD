import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Pages/LandingPage';
import SignIn from './Pages/signin';
import Questionnaire from './Pages/questionnaire';

function App() {
  return (
    <div className="App">
      <div className="pages">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/form" element={<Questionnaire />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;