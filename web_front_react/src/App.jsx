import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/navBars/Navbar';
import Home from './pages/Home/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<div>Projects Page Coming Soon</div>} />
            <Route path="/about" element={<div>About Page Coming Soon</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;