import React from 'react';
import './styles/main.scss';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import { projectsData } from './data/data';

function App() {
  return (
    <div id='shell'>
      <NavBar />
      <Hero />
      <Slider projectsArr={projectsData} />
    </div>
  );
}

export default App;
