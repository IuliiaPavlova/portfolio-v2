import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight, FaPeopleCarry } from 'react-icons/fa';
import { projectsData } from '../data/data';

const SliderProjects = () => {
  const [index, setIndex] = useState(0);
  const {
    id, name, github, deployed, image, description,
  } = projectsData[index];

  const checkNumber = (number) => {
    if (number > projectsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return projectsData.length - 1;
    }
    return number;
  };

  return (
    <section className='slider'>
      <h2>PROJECTS</h2>
      <FaArrowCircleLeft className='next-arrow' onClick={prevProject} />
      <FaArrowCircleRight className='prev-arrow' onClick={nextProject} />

    </section>
  );
};

export default SliderProjects;
