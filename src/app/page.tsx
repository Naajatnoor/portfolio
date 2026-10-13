import React from 'react';
import Hero from './components/Banner';
import About from './components/about';
import Skills from './components/Skills';

const page = () => {
  return (
    <div>
      <Hero/>
    <About/>
    <Skills/>
    </div>
  );
};

export default page;