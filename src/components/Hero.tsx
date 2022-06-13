import React from 'react';
import { socialLinks } from '../data/data';
import photo from '../assets/hero-img.png';
// import Slider from './Slider';

const Hero = () => {
  return (
    <section className='main' id='about'>
      <article className='main-bio'>
        <h1>Hi, I&apos;m Iuliia!</h1>
        <br />
        <p>
          Full-Stack Developer with strong knowledge of JavaScript,
          data structures and algorithms front-end (React, Angular),
          and Back-end (Node.js, Express, and Koa) libraries.
        </p>
        <br />
        <p>
          Experienced working on dynamic projects in an Agile environment.
          <br />
          Formerly trained as a lawyer with strong logic and problem-solving skills.
        </p>
        <ul className='social-icons'>
          {socialLinks.map((iconSocial) => {
            const { id, icon, url } = iconSocial;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </article>
      <img src={photo} alt='Me' className='main-photo' />
      {/* <Slider projectsArr={projectsData} /> */}
    </section>
  );
};

export default Hero;
