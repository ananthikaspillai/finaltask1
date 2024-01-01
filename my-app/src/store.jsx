
import { configureStore } from '@reduxjs/toolkit';
import bubbleSortReducer from "../src/Redux/bubbleSortSlice";

const store = configureStore({
  reducer: {
    bubbleSort: bubbleSortReducer,
  },
});

export default store;
