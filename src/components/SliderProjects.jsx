/* eslint-disable max-len */
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { projectsData } from '../data/data';

const SliderProjects = () => {
  const [index, setIndex] = useState(0);
  const {
    name, github, deployed, image, description,
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
  const prevProject = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const nextProject = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <section className='slider-main' id='projects'>
      <h1>PROJECTS</h1>
      <article className='slider'>
        <FaArrowCircleLeft className='icon next-arrow' onClick={prevProject} />
        <div className='project'>
          <div className='project-img'>
            {image}
          </div>
          <div className='project-description'>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className='project-links'>
              <a href={github.url}>
                {github.icon}
              </a>
              <a href={deployed.url}>
                {deployed.icon}
              </a>
            </div>
          </div>
        </div>
        <FaArrowCircleRight className='icon prev-arrow' onClick={nextProject} />

      </article>
      {/* <button type='button' className='next-arrow' onClick={prevProject}> */}

      {/* <FaArrowCircleLeft className='icon next-arrow' onClick={prevProject} /> */}
      {/* </button> */}
      {/* <button type='button' className='prev-arrow icon' onClick={nextProject} className='icon' > */}

      {/* <FaArrowCircleRight className='icon prev-arrow' onClick={nextProject} /> */}
      {/* </button> */}
    </section>
  );
};

export default SliderProjects;
