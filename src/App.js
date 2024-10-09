import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import HomePage from './HomePage'; // Impor HomePage
import AboutPage from './about-us'; // Impor HomePage
import './App.css';  // Pastikan ini ada dan sesuai

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/HomePage" element={<HomePage />} /> {/* Pastikan rute ini ada */}
          {/* Tambahkan route lainnya jika diperlukan */}
        </Routes>
        <Routes>
          <Route path="/about-us" element={<AboutPage />} /> {/* Pastikan rute ini ada */}
          {/* Tambahkan route lainnya jika diperlukan */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
