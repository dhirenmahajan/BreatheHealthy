import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactSpeedometer from 'react-d3-speedometer'; // Import the speedometer
import DetailsSummary from '../components/DetailsSummary';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ActionRecommended from '../components/ActionRecommended';
import PollutantDetails from '../components/PollutantDetails';
import {
  fetchAirQuality,
  getAirQuality,
  getSelectedLocation,
  getError,
  getStatus,
} from '../redux/airQualitySlice';
import { otherLocation } from '../data/apiData';

const HomePage = () => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const dispatch = useDispatch();
  const airQuality = useSelector(getAirQuality);
  const selectedLocation = useSelector(getSelectedLocation);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const defaultLocation = otherLocation.find((loc) => loc.name === 'Cincinnati');

  useEffect(() => {
    if (!selectedLocation && defaultLocation) {
      dispatch(fetchAirQuality(defaultLocation));
    }
  }, [dispatch, selectedLocation, defaultLocation]);

  const handleShowDetails = (location) => {
    if (addRequestStatus === 'idle') {
      try {
        setAddRequestStatus('pending');
        dispatch(fetchAirQuality(location)).unwrap();
      } catch (err) {
        // Handle error
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  let content;
  if (status === 'loading') {
    content = <p className="text-gray-600">Loading air quality data...</p>;
  } else if (status === 'failed') {
    content = (
      <p className="text-red-500">
        Error:
        {' '}
        {error}
      </p>
    );
  } else if (status === 'succeeded') {
    content = (
      <DetailsSummary
        airQuality={airQuality}
        status={status}
        error={error}
        summary={false}
      />
    );
  } else {
    content = null;
  }

  // Derive AQI value
  const aqiValue = airQuality?.main?.aqi || 1; // Default to 1 if AQI is not available

  return (
    <div className="flex flex-col min-h-screen px-4">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow">
        {/* Home Section */}
        <div className="mt-6 rounded-xl bg-white py-2 pb-4 mb-4 flex flex-col drop-shadow">
          {/* Section Title */}
          <div className="text-lg font-medium text-black-600 pb-3 border-b border-solid border-gray-300 w-full flex justify-center">
            <h3 className="px-1">Last Searched Location</h3>
          </div>

          {/* Section Content */}
          <div className="px-4 pt-3 flex flex-col md:flex-row items-center justify-between">
            {/* Left: Speedometer */}
            <div className="flex-1 flex justify-center items-center">
              <ReactSpeedometer
                value={aqiValue}
                minValue={1}
                maxValue={5}
                segments={5}
                needleColor="steelblue"
                startColor="green"
                endColor="red"
                width={250}
                height={150}
                currentValueText="AQI Level"
                textColor="black"
              />
            </div>
            {/* Right: Content */}
            <div className="flex-1 flex justify-center items-center">
              {content}
            </div>
          </div>
        </div>

        {/* Action Recommended */}
        <ActionRecommended />

        {/* Pollutant Details */}
        <PollutantDetails />

        {/* Other Major Cities */}
        <div>
          <div className="bg-white rounded-2xl drop-shadow-sm mt-6 pt-4 pb-2 font-Roboto">
            <div className="flex justify-center pb-3 border-b border-solid border-gray-300 px-6">
              <h3 className="text-lg font-medium text-black-600">Other Major Cities</h3>
            </div>
            <div>
              <ul className="pt-2 px-6 w-full font-Roboto text-sm text-gray-400 font-bold grid grid-cols-2 gap-2">
                {otherLocation.map((location) => (
                  <Link
                    to="search/details"
                    key={location.id}
                    onClick={() => handleShowDetails(location)}
                  >
                    <li className="rounded-lg border border-gray-300 px-2 py-2 flex justify-between hover:bg-green-600 hover:text-white cursor-pointer">
                      <p>{location.name}</p>
                      <p className="text-gray-600">{location.country}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
