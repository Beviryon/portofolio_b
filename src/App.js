import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import ThemeToggleButton from './ThemeToggleButton';


function App() {
  return (
    <>
      <Header />
      <ThemeToggleButton />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
