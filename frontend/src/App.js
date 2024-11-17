import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
      <div className="pages">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
