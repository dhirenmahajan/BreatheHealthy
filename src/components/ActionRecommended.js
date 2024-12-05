// src/components/ActionRecommended.js

import React from 'react';
import { useSelector } from 'react-redux';
import { getAirQuality, getStatus, getError } from '../redux/airQualitySlice';
import { aqiRatings } from '../data/apiData';

const ActionRecommended = () => {
  const airQuality = useSelector(getAirQuality);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  // Extract AQI value
  const aqiValue = airQuality.main?.aqi;

  // Determine recommended actions
  const getRecommendedAction = (aqi) => {
    const rating = aqiRatings.find((item) => item.aqi === aqi);
    return rating ? rating.action : 'Air quality data is unavailable.';
  };

  if (status === 'loading') {
    return (
      <div className="mt-6 rounded-xl bg-white p-6 flex flex-col justify-center items-start drop-shadow">
        <p className="text-gray-600">Loading recommended actions...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="mt-6 rounded-xl bg-white p-6 flex flex-col justify-center items-start drop-shadow">
        <p className="text-red-500">
          Error:
          {error}
        </p>
      </div>
    );
  }

  if (!aqiValue) {
    return null; // Don't render if AQI data is unavailable
  }

  return (
    <div className="mt-6 rounded-xl bg-white py-2 pb-4 mb-4 flex flex-col justify-center items-start drop-shadow">
      {/* Header with Bottom Border */}
      <div className="text-lg font-medium text-black-600 pb-3 border-b border-solid border-gray-300 px-3 w-full">
        <h3 className="px-1">Action Recommended</h3>
      </div>
      {/* Content */}
      <div className="px-4 pt-3">
        <p>{getRecommendedAction(aqiValue)}</p>
      </div>
    </div>
  );
};

export default ActionRecommended;
