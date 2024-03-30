"use client"
import React from 'react';
import Image from 'next/image';

const LeftSideBar = () => {
  const socials = [
    {
      name: "Linkedin",
      image: "/assets/linkedin.svg",
      href: "https://www.linkedin.com/in/ranjit-baldaniya1412"
    },
    {
      name: "Twitter",
      image: "/assets/twitter.svg",
      href: "https://twitter.com/iRanjit_1412"
    },
    {
      name: "Instagram",
      image: "/assets/instagram.svg",
      href: "https://www.instagram.com/ranjit___2805"
    },
    {
      name: "Github",
      image: "/assets/github.svg",
      href: "https://github.com/ranjeet1412"
    }
  ];

  return (
    <div className="left-side-bar animated fadeInLeft">
      <div className="left-side-bar-container">
        <div className="vertical-sidebar-line" />
        {socials.map((social, index) => (
          <a key={index} href={social.href} className="social-link" target="_blank" rel="noopener noreferrer">
            <Image src={social.image} alt={social.name} width={24} height={24} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
