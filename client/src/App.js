import React from 'react';
import './App.css';

import { Navbar } from './components/Navbar/Navbar';
import { HeroSection } from './components/HeroSection/HeroSection';
import { RegistrationForm } from './components/RegistrationForm/RegistrationForm';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default App;
