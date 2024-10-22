import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import HomePage from './HomePage'; // Impor HomePage
import AboutPage from './about-us'; // Impor AboutPage
import NewsPage from './news'; // Impor NewsPage
import LocationPage from './location'; // Impor LocationPage
import ProgramPage from './program'; // Impor ProgramPage
import PengurusHarianPage from './pengurus-harian'; // Import PengurusHarianPage
import AcaraPage from './acara'; // Import PengurusHarianPage
import MediaPage from './media'; // Import PengurusHarianPage
import HumasPage from './humas'; // Import PengurusHarianPage
import LogistikPage from './logistik'; // Import PengurusHarianPage
import './App.css'; // Pastikan ini ada dan sesuai

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Rute default untuk HomePage */}
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/pengurus-harian" element={<PengurusHarianPage/>} />
          <Route path="/acara" element={<AcaraPage/>} />
          <Route path="/media" element={<MediaPage/>} />
          <Route path="/humas" element={<HumasPage/>} />
          <Route path="/logistik" element={<LogistikPage/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
