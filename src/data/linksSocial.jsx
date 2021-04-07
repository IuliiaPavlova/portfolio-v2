import React from 'react';
import {
  SiLinkedin,
  SiGithub,
  SiFacebook,
} from 'react-icons/si';

export const socialLinks = [
  {
    id: 1,
    icon: <SiLinkedin className="social-icon" />,
    url: 'https://www.linkedin.com/in/iuliiapavlova/',
  },
  {
    id: 2,
    icon: <SiGithub className="social-icon" />,
    url: 'https://github.com/IuliiaPavlova',
  },
  {
    id: 3,
    icon: <SiFacebook className="social-icon" />,
    url: 'https://www.facebook.com/iuliia.pavlova.2902/',
  },
];
export const navLinks = [
  {
    id: 1,
    name: 'home',
    url: '/',
  },
  {
    id: 2,
    name: 'about',
    url: '/about/',
  },
  {
    id: 3,
    name: 'resume',
    url: '/resume/',
  },
  {
    id: 4,
    name: 'projects',
    url: '/projects/',
  },
];
