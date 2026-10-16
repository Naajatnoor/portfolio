import React from 'react';
import Hero from './components/Banner';
import About from './components/about';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const page = () => {
  return (
    <div>
      <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Education/>
    <Contact/>
    <Footer/>
    </div>
  );
};

export default page;