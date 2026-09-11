'use client';

import React from 'react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js & Express',
    'Redux & Redux Toolkit',
    'Shopify Apps & Polaris',
    'GraphQL & REST APIs',
    'AWS (Amplify, Cognito, AppSync)',
    'Docker & Tailwind CSS',
    'MongoDB & MySQL',
    'HTML5 / CSS3 / SCSS',
  ];

  return (
    <section id="about" className="styled-about-section">
      <h2 className="numbered-heading">
        <span className="number-prefix">01.</span>About Me
      </h2>

      <div className="inner">
        <div className="styled-about-text">
          <div>
            <p>
              Hello! My name is Ranjit and I am a software developer with a strong focus on building
              responsive, scalable, and high-performance web applications. My passion for web
              development began during my Bachelor of Engineering studies at{' '}
              <a
                href="https://www.gtu.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link">
                Gujarat Technological University
              </a>
              , where I discovered a love for designing intuitive user interfaces backed by robust
              architectures.
            </p>

            <p>
              Since completing full-stack training at{' '}
              <span className="inline-link" style={{ cursor: 'default' }}>
                Infocampus Institute
              </span>
              , I’ve had the privilege of developing production applications across dynamic tech
              companies—engineering core modules at{' '}
              <a
                href="https://www.linkedin.com/in/talentroots-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link">
                Talentroots Technologies
              </a>
              , developing Shopify apps and e-commerce platforms at{' '}
              <a
                href="https://www.karavyasolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link">
                Karavya Solutions
              </a>
              , and building AI platforms at Karmaleen Technology. Today, I am working as a Next.js
              Developer at{' '}
              <span className="inline-link" style={{ cursor: 'default' }}>
                Coder Scotch Technologies
              </span>
              , leading frontend development for large-scale web platforms like Suqoof.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="styled-about-pic">
          <div className="wrapper">
            <img className="img" src="/assets/my_pic.png" alt="Ranjit Baldaniya" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
