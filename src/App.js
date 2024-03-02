import React from 'react';
import Home from './Home';
import Team from './Team';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Inscription from './Inscription';
import Tarifs from './Tarifs';
import Contact from './Contact';
import Airsoft from './Airsoft';
import Securite from './Securite';
import Avantages from './Avantages';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/airsoft" element={<Airsoft />} />
          <Route path="/securite" element={<Securite />} />
          <Route path="/avantages" element={<Avantages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
