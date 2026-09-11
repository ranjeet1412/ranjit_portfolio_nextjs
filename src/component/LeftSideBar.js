'use client';

import React from 'react';
import { IconGitHub, IconInstagram, IconTwitter, IconLinkedin } from '@/component/icons';

const LeftSideBar = () => {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/ranjeet1412',
      icon: <IconGitHub />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ranjit___2805',
      icon: <IconInstagram />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iRanjit_1412',
      icon: <IconTwitter />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ranjit-baldaniya1412',
      icon: <IconLinkedin />,
    },
  ];

  return (
    <div className="styled-side side-left anim-fade" style={{ animationDelay: '1000ms' }}>
      <ul className="styled-social-list">
        {socials.map((social, index) => (
          <li key={index}>
            <a
              href={social.url}
              aria-label={social.name}
              target="_blank"
              rel="noopener noreferrer">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
