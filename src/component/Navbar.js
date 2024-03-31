"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


const NavBar = ({ navState }) => {
  const [scrollPosition, setScrollPosition] = useState(null);
  const [showNav, setShowNav] = useState(navState);

  const router = useRouter();

  const tabs = [
    { href: "#about", text: "About", counter: "01." },
    { href: "#experience", text: "Experience", counter: "02." },
    { href: "#projects", text: "Projects", counter: "03." },
    { href: "#contact", text: "Contact", counter: "04." },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reloadPage = () => {
    router.reload();
  };

  const setFalse = () => {
    setShowNav(false);
    document.body.style.overflowY = "auto";
  };

  const toggleNavbar = () => {
    setShowNav(!showNav);
    document.body.style.overflowY = showNav ? "auto" : "hidden";
  };
  // https://github.com/ranjeet1412
  return (
    <div
      id="navbar"
      className={`${
        scrollPosition && scrollPosition > 40 ? "nav-bar-scrolled" : "nav-bar"
      } animated slideInDown delay-1s`}
    >
      <a
        href="/"
        className="logo"
        onClick={reloadPage}
      >
        <img
          className="logo-image"
          src="/assets/logo.png"
          alt="Logo"
        />
      </a>
      <div onClick={toggleNavbar} className="toggle-navbar-icon">
        <img
          src={`/assets/${!showNav ? "menu.svg" : "close.svg"}`}
          className={`${!showNav ? "hamburger" : "close"}`}
          alt="menu"
        />
      </div>
      <div className={`${showNav ? "right-nav-bar-toggled" : "right-nav-bar"}`}>
        <ol className="nav-links">
          {tabs.map((tab, index) => (
            <li key={index}>
              <span className="counter">{tab.counter}</span>
              <a
                onClick={setFalse}
                className="links"
                href={tab.href}
                // onClick={() => router.push(tab.href)}
              >
                {tab.text}
              </a>
            </li>
          ))}
        </ol>
        <div className="resume-container">
          <a
            onClick={setFalse}
            className="resume"
            href="https://docs.google.com/document/d/1haRoRKK5TlM2hv1omDwMA8v0fi_F52FkxCinRTdBoUk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
