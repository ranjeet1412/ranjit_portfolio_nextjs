'use client';

import React, { useState, useEffect } from 'react';

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const mountTimeout = setTimeout(() => setIsMounted(true), 10);
    // Total animation completes around 2800ms, then unmount loader
    const finishTimeout = setTimeout(() => {
      if (finishLoading) {
        finishLoading();
      }
    }, 2850);

    return () => {
      clearTimeout(mountTimeout);
      clearTimeout(finishTimeout);
    };
  }, [finishLoading]);

  return (
    <div className={`styled-loader ${isMounted ? 'mounted' : ''}`}>
      <div className="logo-wrapper">
        <svg id="loader-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <title>Loader Logo</title>
          <g>
            {/* Monogram 'R' */}
            <g id="R">
              <path
                d="M 37, 32 L 53, 32 C 59, 32 63.5, 35.5 63.5, 42 C 63.5, 47.5 59.5, 50.5 53.5, 51.5 L 64, 68 L 54.5, 68 L 45.5, 52.5 L 43.5, 52.5 L 43.5, 68 L 37, 68 Z M 43.5, 38 L 43.5, 46.5 L 52.5, 46.5 C 55, 46.5 57, 45.2 57, 42.2 C 57, 39 55, 38 52.5 38 Z"
                fill="#64ffda"
              />
            </g>
            {/* Outer Hexagon outline with stroke animation */}
            <path
              className="hexagon-path"
              stroke="#64ffda"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 50, 5
                 L 11, 27
                 L 11, 72
                 L 50, 95
                 L 89, 73
                 L 89, 28 z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
