// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './HomePage';
import TemperatureChart from './components/Charts/TemperatureChart/TemperatureChart';
import CO2Chart from './components/Charts/Co2/Co2';
import Methane from './components/Charts/Methane/Methane';
import ArcticChart from './components/Charts/ArcticChart/ArcticChart';
import NitrousOxide from './components/Charts/No2Chart/No2Chart';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Usa il componente <Routes> per definire le route */}
          <Route path="/" element={<HomePage />} /> {/* Usa <Route> all'interno di <Routes> */}
          <Route path="/temperature" element={<TemperatureChart />} />
          <Route path="/co2chart" element={<CO2Chart />} />
          <Route path="/methane" element={<Methane />} />
          <Route path="/arcticchart" element={<ArcticChart />} />
          <Route path="/nitrousoxide" element={<NitrousOxide />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




