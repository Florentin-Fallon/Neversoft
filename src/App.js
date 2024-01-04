import React from 'react';
import Home from './Home';
import Team from './Team';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inscription from './Inscription';
import Tarifs from './Tarifs';
import Boutique from './Boutique';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
