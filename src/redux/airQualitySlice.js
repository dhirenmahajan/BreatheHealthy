// src/redux/airQualitySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { airQualityURL } from '../data/apiData';

const initialState = {
  airQuality: {},
  selectedLocation: null, // New property to track the selected location
  status: 'idle',
  error: null, // Changed from 'null' string to null value
};

// Async thunk remains the same
export const fetchAirQuality = createAsyncThunk(
  'airQuality/fetchAirQuality',
  async (location) => {
    try {
      const response = await axios.get(
        airQualityURL(location.lat, location.lon),
      );
      return { ...response.data, location };
    } catch (err) {
      throw new Error(err.response?.data?.message || err.message);
    }
  },
);

const airQualitySlice = createSlice({
  name: 'airQuality',
  initialState,
  reducers: {
    setSelectedLocation(state, action) {
      state.selectedLocation = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAirQuality.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAirQuality.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { list, location } = action.payload;
        const { main, dt, components } = list[0];
        state.airQuality = {
          main: { ...main },
          dt,
          components: { ...components },
          location: { ...location },
        };
        state.selectedLocation = location; // Update selected location
      })
      .addCase(fetchAirQuality.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setSelectedLocation } = airQualitySlice.actions;

export const getAirQuality = (state) => state.airQuality.airQuality;
export const getSelectedLocation = (state) => state.airQuality.selectedLocation;
export const getStatus = (state) => state.airQuality.status;
export const getError = (state) => state.airQuality.error;

export default airQualitySlice.reducer;
