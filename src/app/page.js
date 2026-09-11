'use client';

import React, { useState } from 'react';
import Loader from '@/component/Loader';
import NavBar from '@/component/Navbar';
import LeftSideBar from '@/component/LeftSideBar';
import RightSideBar from '@/component/RightSideBar';
import MainContent from '@/component/MainContent';
import Footer from '@/component/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      <div id="root">
        <NavBar />
        <LeftSideBar />
        <RightSideBar />
        <div id="content">
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
