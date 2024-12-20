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
      <div className="mt-6 rounded-xl bg-white p-6 flex flex-col justify-center items-center drop-shadow">
        <p className="text-gray-600 text-center">Loading recommended actions...</p>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="mt-6 rounded-xl bg-white p-6 flex flex-col justify-center items-center drop-shadow">
        <p className="text-red-500 text-center">
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
    <div className="mt-6 rounded-xl bg-white py-2 pb-4 mb-4 flex flex-col justify-center items-center drop-shadow">
      {/* Header with Bottom Border */}
      <div className="text-lg font-medium text-black-600 pb-3 border-b border-solid border-gray-300 w-full flex justify-center">
        <h3 className="text-center">Action Recommended</h3>
      </div>
      {/* Content */}
      <div className="font-Roboto pt-5 font-bold px-4 text-center">
        <p>{getRecommendedAction(aqiValue)}</p>
      </div>
    </div>
  );
};

export default ActionRecommended;
