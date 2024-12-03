/* eslint-disable */

const APP_ID = "8f444623c918f9161bf29f68f69ce310";
//"8f444623c918f9161bf29f68f69ce310";
const AP_BASE_URL = "https://api.openweathermap.org/data/2.5/air_pollution?";
const FORCAST_AP_BASE_URL =
  "https://api.openweathermap.org/data/2.5/air_pollution/forecast?";
const GEO_BASE_URL = "https://api.openweathermap.org/geo/1.0/direct?";
const limit = 5;

// FIXME: Fixed implicit-arrow-linebreak, but broke max-len
export const geoURL = (location) =>
  `${GEO_BASE_URL}q=${location}&limit=${limit}&appid=${APP_ID}`;

export const airQualityURL = (lat, lon) =>
  `${AP_BASE_URL}lat=${lat}&lon=${lon}&appid=${APP_ID}`;

export const forcastAqURL = (lat, lon) =>
  `${FORCAST_AP_BASE_URL}lat=${lat}&lon=${lon}&appid=${APP_ID}`;

// src/data/apiData.js

export const aqiRatings = [
  {
    aqi: 1,
    color: "rgb(0, 128, 0, 0.5)",
    borderColor: "rgb(0, 128, 0)",
    rating: "Excellent",
    comment: "No health implications.",
    action: "Air quality is excellent. No precautions are necessary.",
  },
  {
    aqi: 2,
    color: "rgb(156, 234, 82, 0.5)",
    borderColor: "rgb(156, 234, 82)",
    rating: "Good",
    comment: "Some pollutants may slightly affect very few hypersensitive individuals.",
    action: "Air quality is good. No significant impact on health.",
  },
  {
    aqi: 3,
    color: "rgb(255, 165, 0, 0.5)",
    borderColor: "rgb(255, 165, 0)",
    rating: "Moderately Polluted",
    comment: "Healthy people may experience slight irritations and sensitive individuals will be slightly affected to a larger extent.",
    action: "Air quality is moderate. Sensitive individuals should consider limiting prolonged or heavy exertion outdoors.",
  },
  {
    aqi: 4,
    color: "rgb(232, 96, 47, 0.5)",
    borderColor: "rgb(232, 96, 47)",
    rating: "Heavily Polluted",
    comment: "Sensitive individuals will experience more serious conditions. The hearts and respiratory systems of healthy people may be affected.",
    action: "Air quality is poor. Everyone, especially sensitive groups, should reduce prolonged or heavy exertion outdoors.",
  },
  {
    aqi: 5,
    color: "rgb(255, 0, 0, 0.5)",
    borderColor: "rgb(255, 0, 0)",
    rating: "Severely Polluted",
    comment: "Healthy people will commonly show symptoms. People with respiratory or heart diseases will be significantly affected and will experience reduced endurance in activities.",
    action: "Air quality is very poor. Everyone should avoid prolonged outdoor exertion and consider staying indoors.",
  },
];

export const pollutantDetails = [
  {
    id: 1,
    name: "CO (Carbon Monoxide)",
    description: "CO is a colorless, odorless gas that can be harmful when inhaled in large amounts.",
  },
  {
    id: 2,
    name: "NO₂ (Nitrogen Dioxide)",
    description: "NO₂ is a significant air pollutant that can irritate airways in the human respiratory system.",
  },
  {
    id: 3,
    name: "NO (Nitric Oxide)",
    description: "NO plays a role in atmospheric chemistry but can contribute to the formation of smog and acid rain.",
  },
  {
    id: 4,
    name: "O₃ (Ozone)",
    description: "Ozone at ground level is a harmful pollutant that can cause respiratory problems and other health issues.",
  },
  {
    id: 5,
    name: "SO₂ (Sulfur Dioxide)",
    description: "SO₂ is produced by volcanic eruptions and industrial processes, leading to acid rain and respiratory issues.",
  },
  {
    id: 6,
    name: "PM₂.₅ (Fine Particulate Matter)",
    description: "PM₂.₅ consists of tiny particles that can penetrate deep into the lungs, causing various health problems.",
  },
  {
    id: 7,
    name: "PM₁₀ (Coarse Particulate Matter)",
    description: "PM₁₀ particles can irritate the respiratory system and contribute to heart and lung diseases.",
  },
  {
    id: 8,
    name: "NH₃ (Ammonia)",
    description: "NH₃ is commonly found in the environment and can contribute to the formation of particulate matter.",
  },
];

export const otherLocation = [
  {
    id: "_1Hh9jXsH7qaOk1pHfiaI",
    name: "Cincinnati",
    lat: 39.162,
    lon: -84.4569,
    country: "US",
    state: "Ohio",
    favorite: false,
  },
  {
    id: "b-GpErGjLPxMwZbS_3WlM",
    name: "New Delhi",
    lat: 28.6667,
    lon: 77.2167,
    country: "IN",
    state: "Federal Capital Territory",
    favorite: false,
  },
  {
    id: "CbYsXb_Dy0LmfAHjlhsGi",
    name: "Los Angeles",
    lat: 34.0522,
    lon: -118.2437,
    country: "US",
    state: "California",
    favorite: false,
  },
  {
    id: "T99ZosQnD90gBpS8vsks1",
    name: "London",
    lat: 51.5073219,
    lon: -0.1276474,
    country: "GB",
    state: "England",
    favorite: false,
  },
  {
    id: "8sW7o86uMYkWsSrKMpN7a",
    name: "Paris",
    lat: 48.8566,
    lon: 2.3522,
    country: "FR",
    state: "Île-de-France",
    favorite: false,
  },
  {
    id: "N2O6Cpgmt3-j6pj0J95iS",
    name: "Shanghai",
    lat: 31.2322758,
    lon: 121.4692071,
    country: "CN",
    favorite: false,
  },
];

export const handleRatings = (data = aqiRatings, aqi) =>
  data.filter((ratings) => ratings.aqi === aqi);

export const handleColorMap = (dataArr) =>
  dataArr.map((aqi) => handleRatings(aqiRatings, aqi)[0].color);

export const handleBorderColorMap = (dataArr) =>
  dataArr.map((aqi) => handleRatings(aqiRatings, aqi)[0].borderColor);
