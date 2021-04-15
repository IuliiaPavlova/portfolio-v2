import React from 'react';
import './styles/main.scss';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import SliderProjects from './components/SliderProjects';

function App() {
  return (
    <div id='shell'>
      <NavBar />
      <Hero />
      <SliderProjects />
    </div>
  );
}

export default App;
