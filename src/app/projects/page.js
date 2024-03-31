"use client"
import React, { useState } from 'react';

const Projects = () => {

  const [activeTab, setActiveTab] = useState(0);


  const projects = [
    {
      name: "My Portfolio",
      description: {
        position: "Personal Portfolio",
        companyName: "NextJs",
        link: "https://www.linkedin.com/in/talentroots-technologies",
        details: [
          "I have build my portfolio using nextjs.",
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
          "I have build instant shortcode app using shopify node template and currently it is live on shopify app store.",
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
          "I have build Real Time Chat Application using MERN stack, completed token based authentication and used socket.io",
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
        <h3 className="section-heading">Some Things I&apos;ve Built</h3>
        <div className="about-content">
          {/* <div className="info-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum.
          </div> */}
        <div className="experience-content">
          <div className="info-text">
            <ul className="company-list">
              {projects.map((company, index) => (
                <li key={index} onClick={() => activeLink(index)}>
                  <button className={index === activeTab ? 'active-company' : 'company'}>
                    {company.name}
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
              {/* <div className="work-dates">
                {projects[activeTab].description.startDate} - {projects[activeTab].description.lastDate}
              </div> */}
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
    </div>
  );
};

export default Projects;
