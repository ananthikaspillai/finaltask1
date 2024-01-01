// store.js
import { configureStore } from '@reduxjs/toolkit';
import bubbleSortReducer from "../src/Redux/bubbleSortSlice";

const store = configureStore({
  reducer: {
    bubbleSort: bubbleSortReducer,
    // Add other reducers as needed
  },
  // Add middleware or other configurations as needed
});

export default store;
