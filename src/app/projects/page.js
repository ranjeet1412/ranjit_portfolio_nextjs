'use client';

import React from 'react';
import { IconGitHub, IconExternal } from '@/component/icons';

const FeaturedProjects = () => {
  const featured = [
    {
      title: 'Suqoof',
      description:
        'A modern hospitality and real estate platform featuring dedicated multi-tier role management for guests, hosts, suppliers, and administrators. Built with Next.js, featuring secure Google and Apple authentication, dynamic booking workflows, and seamless Laravel REST API integration.',
      tech: ['Next.js', 'TypeScript', 'SCSS', 'Google & Apple Auth', 'Laravel API', 'React Hook Form'],
      external: 'https://www.suqoof.com/',
      cover: '/assets/projects/suqoof.png',
    },
    {
      title: 'Kaabil.me',
      description:
        'An intuitive EdTech platform empowering learners and job seekers with modern career development, structured learning journeys, and skill enhancement tools. Engineered with Next.js, featuring modular component architecture, dynamic student progress tracking, and responsive user experiences.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      external: 'https://kaabil.me/',
      cover: '/assets/projects/kaabil.png',
    },
    {
      title: 'Tradeon.ai',
      description:
        'A financial market intelligence application providing traders with live stock market news, predictive insights, and comprehensive trading dashboards. Built authentication flows, real-time analytics visualizations, and scalable AWS cloud backend integrations.',
      tech: ['React', 'AWS', 'Node.js', 'Redux', 'Financial APIs'],
      external: 'https://tradeon.ai/',
      cover: '/assets/projects/tradeon.png',
    },
  ];

  return (
    <section id="projects">
      <h2 className="numbered-heading">
        <span className="number-prefix">03.</span>Some Things I’ve Built
      </h2>

      <ul className="styled-projects-grid">
        {featured.map((project, i) => (
          <li key={i} className="styled-project">
            <div className="project-content">
              <div>
                <p className="project-overline">Featured Project</p>

                <h3 className="project-title">
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>

                <div className="project-description">
                  <p>{project.description}</p>
                </div>

                <ul className="project-tech-list">
                  {project.tech.map((tech, j) => (
                    <li key={j}>{tech}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.cta && (
                    <a
                      href={project.cta}
                      aria-label="Course Link"
                      className="cta"
                      target="_blank"
                      rel="noopener noreferrer">
                      Learn More
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      aria-label="GitHub Link"
                      target="_blank"
                      rel="noopener noreferrer">
                      <IconGitHub />
                    </a>
                  )}
                  {project.external && !project.cta && (
                    <a
                      href={project.external}
                      aria-label="External Link"
                      className="external"
                      target="_blank"
                      rel="noopener noreferrer">
                      <IconExternal />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-image">
              <a
                href={project.external || project.github || '#'}
                target="_blank"
                rel="noopener noreferrer">
                <img src={project.cover} alt={project.title} className="img" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedProjects;
