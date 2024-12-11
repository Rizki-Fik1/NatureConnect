import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import NatureConnectProfile from './components/Profile';
import OrganizationSection from './components/Organization';
import TestimonialsSection from './components/Client';
import LayananPage from './components/Service';
import ContactSection from './components/Contact';
import EnvironmentalFooter from './components/Footer';

function App() {
  return (
  <Router>
    <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<NatureConnectProfile />} />
        <Route path="/organization" element={<OrganizationSection />} />
        <Route path='/client' element={<TestimonialsSection />} />
        <Route path="/service" element={<LayananPage />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <EnvironmentalFooter />
  </Router>
  );
}

export default App;
