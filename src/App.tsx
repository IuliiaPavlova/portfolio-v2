import React from 'react';
import './styles/main.scss';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SliderProjects from './components/SliderProjects';
// import TechStack from './components/TechStack';

const App = () => {
  return (
    <div id='shell'>
      <NavBar />
      <Hero />
      {/* <TechStack /> */}
      <SliderProjects />
    </div>
  );
};

export default App;
