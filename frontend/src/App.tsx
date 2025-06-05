// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages needed for react router
import About from './pages/About';
import Home from './pages/Home';
import './App.css';
import Weather from './pages/Weather';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
