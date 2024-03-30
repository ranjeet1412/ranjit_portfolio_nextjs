"use client"
import React from 'react';

const Intro = () => {
  return (
    <div className="intro-container">
      <div id="intro" className="section intro">
        <div className="intro-line animated fadeInDown delay-1s">Hi, my name is</div>
        <div className="name animated fadeInDown delay-2s">Ranjit Baldaniya.</div>
        <div className="subheading animated fadeInUp delay-3s">
          I build things for the web.
        </div>
        <div className="intro-description animated fadeInUp delay-3s">
          I'm a software engineer based in Ahmedabad specializing in building and
          occasionally designing high-quality websites and applications.
        </div>
        <div className="mail-link-container animated fadeInUp delay-4s">
          <div className="link-box">
            <a href="mailto:ranjit.gb.rg@gmail.com" className="mail-link">Get In Touch</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
