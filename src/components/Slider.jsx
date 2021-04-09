/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { projectsData } from '../data/data';

const Slider = ({ projectsArr }) => {
  const [current, setCurrent] = useState(0);
  const { length } = projectsArr;

  const prevProject = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextProject = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);
  // if (Array.isArray(projectsArr) || projectsArr.length <= 0) {
  //   return null;
  // }
  return (
    <section className='slider'>
      <h2>PROJECTS</h2>
      <FaArrowCircleLeft className='next-arrow' onClick={prevProject} />
      <FaArrowCircleRight className='prev-arrow' onClick={nextProject} />
      {projectsData.map((project) => {
        const {
          id, name, github, deployed, image, description,
        } = project;
        return (
          <div key={id} className={id - 1 === current ? 'project active' : 'project'}>
            {id - 1 === current && (
              <div>
                <div className='project-img'>
                  <img src={image} alt='project screenshot' />
                </div>
                <div className='project-description'>
                  <h4>{name}</h4>
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
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
