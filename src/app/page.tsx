import React from 'react';
import Hero from './components/Banner';
import About from './components/about';
import Skills from './components/Skills';
import Projects from './components/Projects';

const page = () => {
  return (
    <div>
      <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    </div>
  );
};

export default page;