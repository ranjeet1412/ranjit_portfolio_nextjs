"use client"
import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const companies = [
    {
      name: "TalentRoots Tech",
      description: {
        position: "Jr MERN Stack Developer",
        companyName: "TalentRoots Technologies Pvt Ltd, Ahmedabad.",
        link: "https://www.linkedin.com/in/talentroots-technologies",
        startDate: "February 2022",
        lastDate: "February 2023",
        details: [
          "Developed and maintained code for in-house and project called Emplify using tech as React, Redux, graphQL, AWS-amplify, Reactstrap and more.",
          "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness"
        ]
      }
    },
    {
      name: "Karavya Solutions",
      description: {
        position: "Frontend Developer",
        companyName: "Karavya Solutions LLP, Ahmedabad",
        link: "https://www.karavyasolutions.com/",
        startDate: "May 2023",
        lastDate: "Present",
        details: [
          "Developed and shipped highly interactive web applications for clients using React, Redux, MaterialUI, and Tailwind",
          "Interfaced with clients on a monthly basis, providing project updates"
        ]
      }
    },
  ];

  const activeLink = (clickedTab) => {
    setActiveTab(clickedTab);
  };

  return (
    <div className="experience-container">
      <div
        data-aos="fadeInUpBig"
        data-aos-offset="100"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
        className="section experience"
        id="experience"
      >
        <h3 className="section-heading">Where I've Worked</h3>
        <div className="experience-content">
          <div className="info-text">
            <ul className="company-list">
              {companies.map((company, index) => (
                <li key={company.name} onClick={() => activeLink(index)}>
                  <button className={index === activeTab ? 'active-company' : 'company'}>
                    {company.name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="company-info">
              {companies[activeTab] && (
                <>
                  <h4 className="company-title">
                    <span>{companies[activeTab].description.position}</span>
                    <span>
                      <span style={{ color: 'rgb(100, 255, 218)' }}>&nbsp;@&nbsp;</span>
                      <a href={companies[activeTab].description.link} target="_blank" rel="noopener noreferrer" className="company-link">
                        {companies[activeTab].description.companyName}
                      </a>
                    </span>
                  </h4>
                  <div className="work-dates">
                    {companies[activeTab].description.startDate} - {companies[activeTab].description.lastDate}
                  </div>
                  <ul className="work-details">
                    {companies[activeTab].description.details.map((detail, index) => (
                      <li key={index} className="description-line">{detail}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
