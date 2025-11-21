import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Benefits from './sections/Benefits';
import FAQ from './sections/FAQ';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import About from './sections/About';

function App(){
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <FAQ />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
