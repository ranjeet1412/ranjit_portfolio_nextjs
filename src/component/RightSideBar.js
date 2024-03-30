import React from 'react';

const RightSideBar = () => {
  const emailId = "ranjit.gb.rg@gmail.com";

  return (
    <div className="right-side-bar animated fadeInRight">
      <div className="right-side-bar-container">
        <div className="vertical-sidebar-line" />
        <a href={`mailto:${emailId}`} className="sidebar-mail-link">{emailId}</a>
      </div>
    </div>
  );
};

export default RightSideBar;
