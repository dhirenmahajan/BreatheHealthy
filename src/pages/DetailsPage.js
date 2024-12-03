// src/pages/DetailsPage.js

import React from 'react';
import { useSelector } from 'react-redux';
import { getAirQuality, getError, getStatus } from '../redux/airQualitySlice';
import DetailsSummary from '../components/DetailsSummary';
import Forcast from '../components/Forcast';
import ApComponents from '../components/ApComponents';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import the Footer component

const DetailsPage = () => {
  const airQuality = useSelector(getAirQuality);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-4 overflow-auto">
        {/* Details Summary */}
        <DetailsSummary
          airQuality={airQuality}
          status={status}
          error={error}
          summary
        />

        {/* Forecast */}
        <Forcast airQuality={airQuality} />

        {/* Additional Components */}
        <ApComponents airQuality={airQuality} />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DetailsPage;
