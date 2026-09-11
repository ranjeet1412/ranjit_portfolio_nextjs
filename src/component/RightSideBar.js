'use client';

import React from 'react';

const RightSideBar = () => {
  const email = 'ranjit.gb.rg@gmail.com';

  return (
    <div className="styled-side side-right anim-fade" style={{ animationDelay: '1000ms' }}>
      <div className="styled-email-wrapper">
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};

export default RightSideBar;
