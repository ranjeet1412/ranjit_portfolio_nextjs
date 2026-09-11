'use client';

import React from 'react';

const Intro = () => {
  const items = [
    <h1 key="1">Hi, my name is</h1>,
    <h2 key="2" className="big-heading">
      Ranjit Baldaniya.
    </h2>,
    <h3 key="3" className="big-heading">
      I build things for the web.
    </h3>,
    <p key="4">
      I’m a software engineer specializing in building (and occasionally designing) exceptional
      digital experiences. Currently, I’m focused on building responsive, accessible, and high-performance
      web applications at{' '}
      <a
        href="https://coderscotch.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-link">
        Coder Scotch Technologies
      </a>
      .
    </p>,
    <div key="5" style={{ marginTop: '50px' }}>
      <a href="#projects" className="big-button">
        Check out my work!
      </a>
    </div>,
  ];

  return (
    <section className="styled-hero-section">
      {items.map((item, i) => (
        <div
          key={i}
          className="anim-fadeup"
          style={{ animationDelay: `${i * 100 + 400}ms` }}>
          {item}
        </div>
      ))}
    </section>
  );
};

export default Intro;
