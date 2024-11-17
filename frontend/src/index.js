import "./index.css";
import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from 'react-dom/client';  // Updated import
import SignIn from "./Pages/signin";
import SignUp from "./Pages/signup";
import Dashboard from "./Pages/dashboard";
import Questionnaire from "./Pages/questionnaire";

// Get the root element
const container = document.getElementById('root');
// Create a root
const root = createRoot(container);

// Render your app
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Questionnaire />} />
      </Routes>
    </Router>
  </React.StrictMode>
);