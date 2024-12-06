// src/components/Navbar.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiSearchCircle } from 'react-icons/hi';
import { FaGithub, FaQuestionCircle, FaFire } from 'react-icons/fa'; // Importing additional icons
import { MdMap } from 'react-icons/md'; // Importing map icon

const Navbar = () => {
  const location = useLocation();

  // Determine if the current path is the Home Page
  const isHomePage = location.pathname === '/';

  // State for modals
  const [isAQIModalOpen, setAQIModalOpen] = useState(false);
  const [isFAQModalOpen, setFAQModalOpen] = useState(false);

  // Handlers to open/close AQI Modal
  const openAQIModal = () => setAQIModalOpen(true);
  const closeAQIModal = () => setAQIModalOpen(false);

  // Handlers to open/close FAQ Modal
  const openFAQModal = () => setFAQModalOpen(true);
  const closeFAQModal = () => setFAQModalOpen(false);

  return (
    <>
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-black">
        {/* Left: Logo or Return to Home */}
        {isHomePage ? (
          <Link to="/" aria-label="Home">
            <div className="flex flex-col">
              <p className="font-Montserrat text-white font-black text-2xl tracking-widest">
                Breathe Healthy
              </p>
              <small className="text-white font-Roboto text-xs uppercase">
                Know your Air
              </small>
            </div>
          </Link>
        ) : (
          <Link
            to="/"
            className="font-Montserrat text-white font-black text-2xl tracking-widest hover:text-gray-400 transition-colors duration-300"
            aria-label="Return to Home"
          >
            Return to Home
          </Link>
        )}

        {/* Center: Interactive Elements */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          {/* Interactive AQI Map */}
          <button
            type="button"
            onClick={openAQIModal}
            className="flex items-center font-Montserrat text-white font-black hover:text-gray-400 transition-colors"
            aria-label="Interactive AQI Map"
          >
            <MdMap className="mr-1 text-xl" />
            AQI Map
          </button>

          {/* GitHub Link */}
          <a
            href="https://github.com/dhirenmahajan/BreatheHealthy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-Montserrat text-white font-black hover:text-gray-400 transition-colors"
            aria-label="GitHub Repository"
          >
            <FaGithub className="mr-1 text-xl" />
            GitHub
          </a>

          {/* FAQ */}
          <button
            type="button"
            onClick={openFAQModal}
            className="flex items-center font-Montserrat text-white font-black hover:text-gray-400 transition-colors"
            aria-label="Frequently Asked Questions"
          >
            <FaQuestionCircle className="mr-1 text-xl" />
            FAQ
          </button>

          {/* Wildfire Links */}
          <a
            href="https://www.airnow.gov/wildfire-guide-factsheets/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-Montserrat text-white font-black hover:text-gray-400 transition-colors"
            aria-label="Wildfire Guide and Fact Sheets"
          >
            <FaFire className="mr-1 text-xl" />
            Wildfires
          </a>
        </div>

        {/* Right: Search Link */}
        <Link
          className="group flex items-center justify-center rounded-2xl border border-white px-4 py-2 bg-transparent text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500 mt-4 md:mt-0"
          to="/search"
          aria-label="Search other Locations"
        >
          <span className="font-Montserrat text-white font-black group-hover:text-white">
            Search other Locations
          </span>
          <HiSearchCircle className="ml-2 text-xl group-hover:text-white" />
        </Link>
      </nav>

      {/* AQI Map Modal */}
      {isAQIModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="aqi-map-title"
        >
          <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 h-5/6 relative">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeAQIModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Close AQI Map Modal"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 id="aqi-map-title" className="text-xl font-bold text-center mt-4">
              Interactive AQI Map
            </h2>
            <iframe
              src="https://gispub.epa.gov/airnow/?monitors=ozonepm&basemap=topographic&contours=none&xmin=-9473337.863145435&xmax=-9342859.855862817&ymin=4715528.91862761&ymax=4764295.7426734865&tab=current"
              title="Interactive AQI Map"
              className="w-full h-full mt-2 rounded-b-lg"
            />
          </div>
        </div>
      )}

      {/* FAQ Modal */}
      {isFAQModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="faq-title"
        >
          <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-5/6 overflow-y-auto relative p-6">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeFAQModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Close FAQ Modal"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 id="faq-title" className="text-xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div>
                <h3 className="font-semibold">
                  How do I search for a location&apos;s air quality?
                </h3>
                <p>
                  Click on the &quot;Search other Locations&quot; link in the Navbar.
                  Enter the desired location in the search bar to view its air quality details.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div>
                <h3 className="font-semibold">What is AQI?</h3>
                <p>
                  AQI stands for Air Quality Index. It is a standardized indicator used to
                  communicate how polluted the air currently is or how polluted it is meant to be.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div>
                <h3 className="font-semibold">
                  How can I view the interactive AQI map?
                </h3>
                <p>
                  Click on the &quot;AQI Map&quot; button in the Navbar to open a pop-up displaying
                  the interactive AQI map provided by the EPA.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div>
                <h3 className="font-semibold">
                  Where can I find more information about wildfires?
                </h3>
                <p>
                  Click on the &quot;Wildfires&quot; link in the Navbar to access the wildfire guide
                  and fact sheets provided by AirNow.
                </p>
              </div>

              {/* Add more FAQ items as needed */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
