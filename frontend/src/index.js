import "./index.css";
import React from 'react';
import App from './App';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import SignIn from "./Pages/signin";
import SignUp from "./Pages/signup";
import Dashboard from "./Pages/dashboard";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
     <React.StrictMode>
       <Router>
         <Routes>
           <Route path="/" element={<App />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/signup" element={<SignUp />} />
           <Route path="/dashboard" element={<Dashboard />} />
         </Routes>
       </Router>
     </React.StrictMode>
   );
   
