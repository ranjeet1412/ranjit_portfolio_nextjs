"use client"

import React, { useState } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      name: "My Portfolio",
      description: {
        position: "Personal Portfolio",
        companyName: "Next.js",
        link: "https://www.linkedin.com/in/talentroots-technologies",
        details: [
          "I built my portfolio using Next.js.",
        ]
      }
    },
    {
      name: "Shortcode App",
      description: {
        position: "Instant Shortcode App",
        companyName: "Instant Shortcode App",
        link: "https://apps.shopify.com/shortcode-app",
        details: [
          "I built an instant shortcode app using Shopify node template, and it is live on the Shopify app store.",
        ]
      }
    },
    {
      name: "Chat App",
      description: {
        position: "Chat Application",
        companyName: "Chat Application",
        link: "https://github.com/ranjitbaldaniya/chat-app",
        details: [
          "I built a real-time chat application using the MERN stack, completed token-based authentication, and used socket.io.",
        ]
      }
    },
  ];

  const activeLink = (clickedTab) => {
    setActiveTab(clickedTab);
  };

  return (
    <div className="projects-container">
      <div
        data-aos="fadeInUpBig"
        data-aos-offset="100"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
        className="section projects"
        id="projects"
      >
        <h3 className="section-heading">Some Things I've Built</h3>
        <div className="experience-content">
          <div className="info-text">
            <ul className="company-list">
              {projects.map((project, index) => (
                <li key={index} onClick={() => activeLink(index)}>
                  <button className={index === activeTab ? 'active-company' : 'company'}>
                    {project.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="company-info">
              <h4 className="company-title">
                <span>{projects[activeTab].description.position}</span>
                <span>
                  <span style={{ color: 'rgb(100, 255, 218)' }}>&nbsp;@&nbsp;</span>
                  <a href={projects[activeTab].description.link} target="_blank" rel="noopener noreferrer" className="company-link">
                    {projects[activeTab].description.companyName}
                  </a>
                </span>
              </h4>
              <ul className="work-details">
                {projects[activeTab].description.details.map((detail, index) => (
                  <li key={index} className="description-line">{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
