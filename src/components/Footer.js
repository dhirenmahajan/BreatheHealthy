// src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-black">
    {/* Return to Home Button */}
    <Link to="/" className="font-Montserrat text-white font-black text-2xl tracking-widest">
      Return to Home
    </Link>

    {/* Centered Text */}
    <div className="text-white text-sm mt-2 md:mt-0">
      App made by Dhiren Mahajan
    </div>

    {/* Download Buttons */}
    <div className="flex space-x-4 mt-2 md:mt-0">
      {/* App Store Button */}
      <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <img
          src="/img/appstore.png"
          alt="Download on the App Store"
          className="h-10 w-auto"
        />
      </a>

      {/* Google Play Store Button */}
      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
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
