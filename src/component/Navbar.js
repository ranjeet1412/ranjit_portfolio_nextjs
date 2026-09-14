'use client';

import React, { useState, useEffect, useRef } from 'react';
import { IconLogo, IconHex } from '@/component/icons';
import useScrollDirection from '@/hooks/useScrollDirection';
import useOnClickOutside from '@/hooks/useOnClickOutside';

const NavBar = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection({ initialDirection: 'up' });

  const navLinks = [
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#jobs' },
    { name: 'Work', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  const resumeUrl =
    'https://docs.google.com/document/d/1haRoRKK5TlM2hv1omDwMA8v0fi_F52FkxCinRTdBoUk/edit?usp=sharing';

  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setMenuOpen(false));

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let scrollClass = '';
  if (scrollDirection === 'up' && !scrolledToTop) {
    scrollClass = 'nav-up';
  } else if (scrollDirection === 'down' && !scrolledToTop) {
    scrollClass = 'nav-down';
  }

  return (
    <header className={`styled-header ${scrollClass}`}>
      <nav className="styled-nav">
        {/* Hexagon Logo */}
        <div className="logo" tabIndex="-1">
          <a href="/" aria-label="home" className="anim-fade">
            <div className="hex-container">
              <IconHex />
            </div>
            <div className="logo-container">
              <IconLogo />
            </div>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="styled-links">
          <ol>
            {navLinks.map(({ name, url }, i) => (
              <li
                key={i}
                className="anim-fadedown"
                style={{ animationDelay: `${i * 100 + 100}ms` }}>
                <a href={url}>
                  <span className="nav-counter">0{i + 1}.</span>
                  {name}
                </a>
              </li>
            ))}
          </ol>
          <div
            className="anim-fadedown"
            style={{ animationDelay: `${navLinks.length * 100 + 100}ms` }}>
            <a
              className="small-button resume-button"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Hamburger & Drawer */}
        <div className="styled-menu" ref={menuRef}>
          <a
            className={`small-button resume-button mobile-resume-button ${menuOpen ? 'hidden' : ''}`}
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a>

          <button
            className={`styled-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu">
            <div className="ham-box">
              <div className="ham-box-inner" />
            </div>
          </button>

          <aside className={`styled-sidebar ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
            <nav>
              <ol>
                {navLinks.map(({ name, url }, i) => (
                  <li key={i}>
                    <a href={url} onClick={() => setMenuOpen(false)}>
                      <span className="nav-counter">0{i + 1}.</span>
                      {name}
                    </a>
                  </li>
                ))}
              </ol>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button resume-link"
                onClick={() => setMenuOpen(false)}>
                Resume
              </a>
            </nav>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
