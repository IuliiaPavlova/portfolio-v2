import React from 'react';
import { socialLinks } from '../data/data';
import photo from '../assets/hero-img.png';

const Hero = () => {
  return (
    <main>
      <article className='main-bio'>
        <h1>Hi, I&apos;m Iuliia</h1>
        <h4>
          Full-Stack Developer with a strong knowledge of JavaScript,
          data structures and algorithms, front-end (React, Angular),
          and Back-end (Node.js, Express, and Koa) libraries.
          Experienced working on dynamic projects in an Agile environment.
          Formerly trained as a lawyer with strong logic and problem-solving skills.
        </h4>
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
    </main>
  );
};

export default Hero;
