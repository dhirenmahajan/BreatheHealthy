// src/components/Footer.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  // Mapping of paths to friendly page names
  const pageNames = {
    '/': 'You are on the Home Page',
    '/search': 'You are on the Search Page',
    '/search/details': 'You are on the AQI Details Page',
    // Add more routes and their corresponding names as needed
  };

  // Determine the current page name based on the pathname
  const currentPage = pageNames[location.pathname] || 'You are on this page';

  return (
    <footer className="mt-6 flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-black">
      {/* Left: App Made By */}
      <div className="font-Montserrat text-white font-black mb-2 md:mb-0">
        App made by Dhiren Mahajan
      </div>

      {/* Center: Current Page Message */}
      <div className="font-Montserrat text-white font-black mb-2 md:mb-0">
        {currentPage}
      </div>

      {/* Right: Download Buttons */}
      <div className="flex space-x-4">
        {/* App Store Button */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download on the App Store"
          className="focus:outline-none focus:ring-2 focus:ring-white"
        >
          <img
            src="/img/appstore.png"
            alt="Download on the App Store"
            className="h-10 w-auto"
          />
        </a>

        {/* Google Play Store Button */}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
          className="focus:outline-none focus:ring-2 focus:ring-white"
        >
          <img
            src="/img/playstore.png"
            alt="Get it on Google Play"
            className="h-10 w-auto"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
