'use client';

import React, { useState } from 'react';
import { IconFolder, IconGitHub, IconExternal } from '@/component/icons';

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: 'Agent AI',
      description:
        'An AI-powered web platform with an intuitive user interface and a dedicated administrative panel. Features NextAuth JWT authentication, React Hook Form with Zod validation, and responsive Tailwind styling.',
      tech: ['Next.js', 'React', 'TypeScript', 'NextAuth', 'Redux Toolkit', 'Tailwind'],
      external: 'https://agentai.co.in/',
    },
    {
      title: 'Travel Regions',
      description:
        'A comprehensive tourism and destination discovery portal in Saudi Arabia allowing travelers to explore regional destinations, heritage tours, and authentic local experiences with localized multilingual (Arabic & English) support.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'i18n', 'REST APIs'],
      external: 'https://www.travelregions.sa/en/',
    },
    {
      title: 'Instant Short Code App',
      description:
        'A published Shopify ecosystem application empowering merchants to customize online store themes seamlessly by embedding dynamic shortcodes into live storefronts without modifying theme code.',
      tech: ['Shopify App', 'React.js', 'Node.js', 'Polaris', 'GraphQL'],
      external: 'https://apps.shopify.com/shortcode-app',
    },
    {
      title: 'Tour Booking App',
      description:
        'A full-featured tour management system providing an administrative panel for tour listings and user booking inquiries. Implements JWT authentication, MySQL via Sequelize-CLI, Stripe payments, and EmailJS.',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'Stripe'],
    },
    {
      title: 'Emplify Platform',
      description:
        'An enterprise productivity and business management suite empowering teams with employee time tracking, meeting coordination, positive reward systems, and KPI goal achievement.',
      tech: ['React', 'Redux', 'AWS Amplify', 'AppSync', 'GraphQL', 'Cognito'],
    },
    {
      title: 'Real Time Chat Application',
      description:
        'A scalable real-time messaging application supporting instant peer-to-peer and room chat, active online indicators, message persistence, and responsive UI built with modern web technologies.',
      tech: ['React', 'Node.js', 'Socket.io', 'Express', 'MongoDB'],
    },
  ];

  const GRID_LIMIT = 6;
  const projectsToShow = showMore ? projects : projects.slice(0, GRID_LIMIT);

  return (
    <section className="styled-noteworthy-section">
      <h2>Other Noteworthy Projects</h2>
      <a
        className="inline-link archive-link"
        href="https://github.com/ranjit1412"
        target="_blank"
        rel="noopener noreferrer">
        view the archive
      </a>

      <ul className="projects-grid">
        {projectsToShow.map((project, i) => (
          <li key={i} className="styled-noteworthy-card">
            <div className="project-inner">
              <header style={{ width: '100%' }}>
                <div className="project-top">
                  <div className="folder">
                    <IconFolder />
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        aria-label="GitHub Link"
                        target="_blank"
                        rel="noopener noreferrer">
                        <IconGitHub />
                      </a>
                    )}
                    {project.external && (
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

                <h3 className="project-title">
                  <a
                    href={project.external || project.github || '#'}
                    target="_blank"
                    rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>

                <div className="project-description">
                  <p>{project.description}</p>
                </div>
              </header>

              <footer style={{ width: '100%' }}>
                {project.tech && (
                  <ul className="project-tech-list">
                    {project.tech.map((t, j) => (
                      <li key={j}>{t}</li>
                    ))}
                  </ul>
                )}
              </footer>
            </div>
          </li>
        ))}
      </ul>

      {projects.length > GRID_LIMIT && (
        <button className="button more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </section>
  );
};

export default OtherProjects;
