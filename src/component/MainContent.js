'use client';

import React from 'react';
import Intro from '@/app/intro/page';
import About from '@/app/about/page';
import Experience from '@/app/experience/page';
import Projects from '@/app/projects/page';
import OtherProjects from '@/component/OtherProjects';
import Contact from '@/app/contact/page';

const MainContent = () => {
  return (
    <main id="content">
      <Intro />
      <About />
      <Experience />
      <Projects />
      <OtherProjects />
      <Contact />
    </main>
  );
};

export default MainContent;
