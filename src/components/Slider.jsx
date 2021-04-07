import React from 'react';
import { projects } from '../data/data';

const Slider = () => {
  return (
    <section className='slider'>
      {
        projects.map((project) => {
          const {
            id, name, github, deployed, image, description,
          } = project;
          return (
            <div key={id} className='project'>
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
          );
        })
      }
    </section>
  );
};

export default Slider;
