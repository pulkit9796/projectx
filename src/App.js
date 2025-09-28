import React from 'react';
import './index.css';

// Import all components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Demo />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
