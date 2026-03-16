import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Classes from './components/Classes';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark-950">
      <Navbar />
      <Hero />
      <Benefits />
      <Classes />
      <Pricing />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
