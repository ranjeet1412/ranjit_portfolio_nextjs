"use client"
import React, { useEffect, useState } from "react";
import Footer from "@/component/Footer";
import LeftSideBar from "@/component/LeftSideBar";
import MainContent from "@/component/MainContent";
import NavBar from "@/component/Navbar";
import RightSideBar from "@/component/RightSideBar";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [navbarState, setNavbarState] = useState(null);

  const hideNavbar = () => {
    setNavbarState(false);
    document.body.style.overflowY = "auto";
  };

  const navBarState = (navbarState) => {
    setNavbarState(navbarState);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="landing-page">
      <NavBar navState={navbarState} hideNavbar={hideNavbar} navBarState={navBarState} />
      <div className="content">
        {screenWidth > 768 && (
          <div className="sidebars">
            <LeftSideBar className="left-side-bar" />
            <RightSideBar className="right-side-bar" />
          </div>
        )}
        <div className="main-content">
          <MainContent onClick={hideNavbar} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
