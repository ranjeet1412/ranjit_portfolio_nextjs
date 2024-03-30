import About from '@/app/about/page';
import Contact from '@/app/contact/page';
import Experience from '@/app/experience/page';
import Intro from '@/app/intro/page';
import Projects from '@/app/projects/page';
import React from 'react';


const MainContent = () => {
  return (
    <div className="main-container">
    <Intro/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
    </div>
  );
};

export default MainContent;
