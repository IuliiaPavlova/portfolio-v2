/* eslint-disable max-len */
import React from 'react';
import {
  SiLinkedin,
  SiGithub,
  SiFacebook,
  SiSkyliner,
} from 'react-icons/si';
import Bloodworks from '../assets/Bloodworks1.png';
import TfN from '../assets/TfN.png';

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
    icon: <SiFacebook className='icon' />,
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
      url: '',
    },
    deployed: {
      icon: <SiSkyliner className='icon' />,
      url: '',
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
];
