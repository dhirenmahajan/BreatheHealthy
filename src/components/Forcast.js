// src/components/Forcast.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import moment from 'moment';
import { handleBorderColorMap, handleColorMap } from '../data/apiData';
import {
  getforcastAq,
  getError,
  getStatus,
  fetchForcastAq,
} from '../redux/forcastAqSlice';

const Forcast = ({ airQuality }) => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  Chart.register(CategoryScale);
  const dispatch = useDispatch();

  const forcastAq = useSelector(getforcastAq);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const aqiData = [];
  const timeLabel = [];
  forcastAq?.forEach((data) => {
    aqiData.push(data.main?.aqi);
    timeLabel.push(data.time);
  });

  const color = handleColorMap(aqiData);
  const borderColor = handleBorderColorMap(aqiData);

  useEffect(() => {
    if (addRequestStatus === 'idle' && Object.keys(airQuality).length) {
      try {
        setAddRequestStatus('pending');
        dispatch(fetchForcastAq(airQuality.location)).unwrap();
      } catch (err) {
        throw new Error(err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  }, [airQuality, dispatch, addRequestStatus]);

  let content;

  if (status === 'loading') {
    content = <p className="text-gray-400 font-Roboto">Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <div className="bg-white rounded-2xl drop-shadow-sm mt-3 py-2 font-Roboto">
        <div className="flex justify-between pb-2 border-b border-solid border-gray-300 px-3">
          <h3 className="text-lg font-medium text-gray-600">Next Hours</h3>
          <small className="font-light text-gray-400">
            Updated:
            {' '}
            {moment(new Date()).startOf('hours').fromNow()}
          </small>
        </div>
        <div className="pt-2 px-4">
          <Bar
            data={{
              labels: timeLabel,
              datasets: [
                {
                  label: 'AQI',
                  data: aqiData,
                  borderColor,
                  backgroundColor: color,
                  borderWidth: 2,
                  borderRadius: 10, // Reduced from 20 to 10 for a slimmer appearance
                  borderSkipped: false,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    stepSize: 6,
                  },
                },
                y: {
                  grid: {
                    display: false,
                  },
                  min: 0,
                  max: 5,
                },
              },
              plugins: {
                legend: {
                  display: false, // Hides the legend
                },
              },
            }}
            height={150} // Reduced height from 200 to 150
            width={300} // Reduced width from 350 to 300
          />
        </div>
      </div>
    );
  } else if (status === 'failed') {
    content = <p className="text-red-400 font-Roboto">{error}</p>;
  }

  return <div>{content}</div>;
};

export default Forcast;
