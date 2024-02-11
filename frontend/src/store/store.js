// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import restaurantReducer from './restautantSlice';

export const store = configureStore({
  reducer: {
    restaurants: restaurantReducer,
    // Add other slices as needed
  },
});
