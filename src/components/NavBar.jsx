/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { navLinks, socialLinks } from '../data/linksSocial';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" style={{ height: '80px', width: '80px' }} />

          </Link>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {navLinks.map((link) => {
              const { id, name, url } = link;
              return (
                <li key={id}>
                  <a href={url}>{name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
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
      </div>
    </nav>
  );
};

export default NavBar;
