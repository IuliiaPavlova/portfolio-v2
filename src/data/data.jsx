/* eslint-disable max-len */
import React from 'react';
import {
  SiLinkedin,
  SiGithub,
  // SiFacebook,
  SiMinutemailer,
  SiSkyliner,
} from 'react-icons/si';
import Bloodworks from '../assets/Bloodworks1.png';
import TfN from '../assets/TfN.png';
import Employees from '../assets/employees.png';

export const socialLinks = [
  {
    id: 1,
    icon: <SiLinkedin className='icon' />,
    url: 'https://www.linkedin.com/in/iuliiapavlova/',
  },
  {
    id: 2,
    icon: <SiGithub className='icon' />,
    url: 'https://github.com/IuliiaPavlova',
  },
  {
    id: 3,
    icon: <SiMinutemailer className='icon' />,
    url: 'iuliia.a.pavlova@gmail.com',
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

export const projectsData = [
  {
    id: 1,
    name: 'Bloodworks',
    github: {
      icon: <SiGithub className='icon' />,
      url: '',
    },
    deployed: {
      icon: <SiSkyliner className='icon' />,
      url: '',
    },
    image: <img src={Bloodworks} alt='project screenshot' className='project-screenshot' />,
    description: 'Bloodworks is a tool that takes patients data such as blood pressure or blood tests and uses data visualization to display the data in understandable and easy way.',
  },
  {
    id: 2,
    name: 'Toronto for Newcomers',
    github: {
      icon: <SiGithub className='icon' />,
      url: 'https://github.com/IuliiaPavlova/toronto-for-newcomers',
    },
    deployed: {
      icon: <SiSkyliner className='icon' />,
      url: 'https://toronto-for-newcomers.vercel.app/',
    },
    image: <img src={TfN} alt='project screenshot' className='project-screenshot' />,
    description: 'Toronto for Newcomers is a website that gives useful information for newcomers about Toronto\'s neighborhoods.',
  },
  // {
  //   id: 3,
  //   name: 'DrivelTV',
  //   github: {
  //     icon: <SiGithub className='icon' />,
  //     url: '',
  //   },
  //   deployed: {
  //     icon: <SiSkyliner className='icon' />,
  //     url: '',
  //   },
  //   description: 'DrivelTv is a web-app lets users start an online stream (broadcast) using their YouTube playlists.',
  // },
  {
    id: 3,
    name: 'Employees App',
    github: {
      icon: <SiGithub className='icon' />,
      url: 'https://github.com/IuliiaPavlova/employess-app',
    },
    deployed: {
      icon: <SiSkyliner className='icon' />,
      url: 'https://employees-app-technichal-assignment.netlify.app/',
    },
    image: <img src={Employees} alt='project screenshot' className='project-screenshot' />,
    description: 'A client-side SPA (single-page app) built with Create React App that fetches data about employees and displays in the table',
  },
];
