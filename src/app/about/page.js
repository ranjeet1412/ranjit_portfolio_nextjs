import React from 'react';

const About = () => {
  const skills = [
    "HTML & (S)CSS",
    "JavaScript (ES6+)",
    "Typescript",
    "Next.js",
    "React",
    "Redux",
    "GraphQL",
    "Figma",
    "ReactStrap",
    "Node.js",
    "Express",
    "MongoDB",
    "MySql",
    "Docker",
    "AWS-Amplify",
    "Shopify Apps"
  ];

  return (
    <div className="about-container">
      <div
        data-aos="fadeInUpBig"
        data-aos-offset="100"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
        className="section about"
        id="about"
      >
        <h3 className="section-heading">About Me</h3>
        <div className="about-content">
          <div className="info-text">
            <p className="p1">
              Hello! I&apos;m Ranjit, a software engineer based in Ahmedabad, who enjoys
              building things that live on the internet. I develop websites and
              web apps that provide intuitive, pixel-perfect user interfaces with
              efficient and modern backends.
            </p>
            <p className="p2">
              Shortly after graduating from {" "}
              <a href="https://www.gtu.ac.in" target="_blank" rel="noopener noreferrer" id="university-link">Gujarat Technological University</a>.
              {" "}I joined the development team at{" "}
              <a href="https://www.linkedin.com/in/talentroots-technologies" target="_blank" rel="noopener noreferrer" id="company-name">Talentroot technologies</a>. Currently I work
              at{" "}
              <a href="https://www.karavyasolutions.com/" target="_blank" rel="noopener noreferrer" id="company-name">Karavya Solutions LLP</a>, where I work on a
              wide variety of interesting and meaningful
              projects on a daily basis.
            </p>
            <p className="list-heading">
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="skill-grid">
              {skills.map((skill, index) => (
                <li key={index} className="skill">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="info-pic">
            <a href="https://github.com/ranjeet1412 " target="_blank" rel="noopener noreferrer">
              <div className="pic-container"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
