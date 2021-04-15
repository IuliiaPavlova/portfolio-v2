import React from 'react';
import './styles/main.scss';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
// import Slider from './components/Slider';
// import { projectsData } from './data/data';
import SliderProjects from './components/SliderProjects';

function App() {
  return (
    <div id='shell'>
      <NavBar />
      <Hero />
      {/* <Slider projectsArr={projectsData} /> */}
      <SliderProjects />
    </div>
  );
}

export default App;
