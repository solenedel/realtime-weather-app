// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages needed for react router
import About from './pages/About';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
