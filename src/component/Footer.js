"use client"
// components/Footer.js
import React, { useState } from 'react';

const Footer = () => {
  const [islinkHovered, setIslinkHovered] = useState(false);

  const isHovered = () => {
    setIslinkHovered(true);
  };

  const isHoveredOut = () => {
    setIslinkHovered(false);
  };

  const footer = {
    text: "Designed & Built By Ranjit Baldaniya"
  };

  const footerClass = {
    unHovered: "footer-container",
    hovered: "footer-container-hovered"
  };

  return (
    <div className={islinkHovered ? footerClass.hovered : footerClass.unHovered}>
      <a
        onMouseOver={isHovered}
        onMouseOut={isHoveredOut}
        href="https://github.com/ranjeet1412/ranjit_portfolio_nextjs"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-text"
      >
        {footer.text}
      </a>
    </div>
  );
};

export default Footer;
