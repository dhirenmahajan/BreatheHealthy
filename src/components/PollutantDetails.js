// src/components/PollutantDetails.js

import React from 'react';
import Slider from 'react-slick';
import { pollutantDetails } from '../data/apiData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PollutantDetails = () => {
  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on arrow click
    responsive: [
      {
        breakpoint: 1024, // For screens less than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For screens less than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl drop-shadow-sm mt-6 pt-4 pb-6 font-Roboto">
      <div className="flex justify-between pb-3 border-b border-solid border-gray-300 px-6">
        <h3 className="text-lg font-medium text-black-600">Pollutant Details</h3>
      </div>
      <div className="px-6 mt-4">
        <Slider
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          responsive={settings.responsive}
        >
          {pollutantDetails.map((pollutant) => (
            <div key={pollutant.id} className="px-2">
              <div className="bg-gray-100 rounded-lg p-4 h-full flex flex-col justify-center">
                <h4 className="text-xl font-semibold text-black-700 mb-2">{pollutant.name}</h4>
                <p className="">{pollutant.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PollutantDetails;
