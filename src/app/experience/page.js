'use client';

import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const jobs = [
    {
      company: 'Coder Scotch',
      fullName: 'Coder Scotch Technologies',
      title: 'Next.js Developer',
      url: 'https://coderscotch.com/',
      range: 'May 2024 - Present',
      duties: [
        'Lead the frontend development for the Suqoof digital platform using Next.js, React, and modular SCSS architectures.',
        'Architect and manage multi-tier role-based authentication and navigation flows for guests, hosts, suppliers, and administrators.',
        'Integrate all required Laravel REST APIs from the backend team, handling authentication tokens and asynchronous state.',
        'Coordinate directly with clients and cross-functional teams to implement responsive UI, performance optimizations, and feature requests.',
      ],
    },
    {
      company: 'Karmaleen Tech',
      fullName: 'Karmaleen Technology',
      title: 'Web Application Developer',
      url: 'https://karmaleen.com/',
      range: 'August 2023 - April 2024',
      duties: [
        'Developed the user-facing web application for Agent AI using Next.js and engineered an administrative dashboard with React.js.',
        'Integrated backend Node.js APIs, managed state pipelines, and implemented secure NextAuth and JWT token authorization.',
        'Built dynamic form handling and validation pipelines using React Hook Form paired with Zod schema validation.',
        'Troubleshot and debugged complex full-stack issues, optimizing performance and consistently meeting tight production milestones.',
      ],
    },
    {
      company: 'Karavya Solutions',
      fullName: 'Karavya Solutions LLP',
      title: 'MERN Stack Developer',
      url: 'https://www.karavyasolutions.com/',
      range: 'May 2023 - July 2024',
      duties: [
        'Engineered the Instant Short Code app for Shopify merchants utilizing React.js, Node.js, Express, and Shopify Polaris.',
        'Developed modern e-commerce storefronts with Next.js, implementing NextAuth with JWT and Google OAuth providers.',
        'Managed complex application state using Redux Toolkit and integrated Shopify Storefront APIs for custom product cards and banners.',
        'Collaborated closely with UI/UX design teams to translate design systems into clean, responsive, and reusable component libraries.',
      ],
    },
    {
      company: 'TalentRoots Tech',
      fullName: 'Talentroots Technologies Private Limited',
      title: 'Jr. MERN Stack Developer',
      url: 'https://www.linkedin.com/in/talentroots-technologies',
      range: 'February 2022 - February 2023',
      duties: [
        'Engineered features and modular components for the Emplify business management platform using ReactJS, Redux, and Reactstrap.',
        'Implemented cloud-connected features utilizing AWS Amplify, AppSync, GraphQL, Cognito User Pools, and S3 buckets.',
        'Built key business workflow modules including employee time tracking, meeting coordination, reward systems, and goal tracking.',
        'Performed cross-browser compatibility testing, performance profiling, and iterative bug fixes based on design specifications.',
      ],
    },
    {
      company: 'Infocampus',
      fullName: 'Infocampus Institute, Bangalore',
      title: 'Web Developer Trainee',
      url: 'https://infocampus.co.in/',
      range: 'September 2021 - January 2022',
      duties: [
        'Underwent comprehensive full-stack training in modern web development across JavaScript ES6+, ReactJS, Node.js, Express, and MongoDB.',
        'Developed a full-stack Student Management System with student enrollment, course allocation, and role-based data validation.',
        'Implemented responsive layouts using Bootstrap, state management with Redux, navigation with React Router, and API communication via Axios.',
      ],
    },
  ];

  return (
    <section id="jobs" className="styled-jobs-section">
      <h2 className="numbered-heading">
        <span className="number-prefix">02.</span>Where I’ve Worked
      </h2>

      <div className="inner">
        <div className="styled-tab-list" role="tablist" aria-label="Job tabs">
          {jobs.map((job, i) => (
            <button
              key={i}
              className={`styled-tab-button ${activeTabId === i ? 'is-active' : ''}`}
              onClick={() => setActiveTabId(i)}
              id={`tab-${i}`}
              role="tab"
              tabIndex={activeTabId === i ? 0 : -1}
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}>
              <span>{job.company}</span>
            </button>
          ))}
          <div
            className="styled-highlight"
            style={{
              transform: isMobile
                ? `translateX(calc(${activeTabId} * var(--tab-width)))`
                : `translateY(calc(${activeTabId} * var(--tab-height)))`,
            }}
          />
        </div>

        <div className="styled-tab-panels">
          {jobs.map((job, i) => {
            if (activeTabId !== i) return null;
            return (
              <div
                key={i}
                className="styled-tab-panel"
                id={`panel-${i}`}
                role="tabpanel"
                tabIndex={0}
                aria-labelledby={`tab-${i}`}>
                <h3>
                  <span>{job.title}</span>
                  <span className="company">
                    &nbsp;@&nbsp;
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-link">
                      {job.fullName || job.company}
                    </a>
                  </span>
                </h3>

                <p className="range">{job.range}</p>

                <ul>
                  {job.duties.map((duty, j) => (
                    <li key={j}>{duty}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
