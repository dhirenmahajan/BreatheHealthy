// src/components/Footer.js

import React from 'react';

const Footer = () => (
  <footer className="mt-6 flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-black">
    {/* Centered Text */}
    <div className="text-white text-sm mb-2 md:mb-0">
      App made by Dhiren Mahajan
    </div>

    {/* Download Buttons */}
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

export default Footer;
