// bubbleSortSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bubbleSortSlice = createSlice({
  name: 'bubbleSort',
  initialState: {
    inputNumbers: '',
    numbers: [],
    sortingOrder: 'ascending',
    elapsedTime: null,
    iterationCount: 0,
  },
  reducers: {
    setInputNumbers: (state, action) => {
      state.inputNumbers = action.payload;
    },
    setNumbers: (state, action) => {
      state.numbers = action.payload;
    },
    setSortingOrder: (state, action) => {
      state.sortingOrder = action.payload;
    },
    setElapsedTime: (state, action) => {
      state.elapsedTime = action.payload;
    },
    setIterationCount: (state, action) => {
      state.iterationCount = action.payload;
      console.log(action.payload)
    },
  },
});

export const {
  setInputNumbers,
  setNumbers,
  setSortingOrder,
  setElapsedTime,
  setIterationCount,
} = bubbleSortSlice.actions;


export const visualizeBubbleSort = () => async (dispatch, getState) => {
  const startTime = new Date();
  dispatch(setIterationCount(0));
  let count = 0

  const arr = getState().bubbleSort.inputNumbers.split(',').map(Number);
  const sortedArr = [...arr];

  for (let i = 0; i < sortedArr.length - 1; i++) {
    for (let j = 0; j < sortedArr.length - 1 - i; j++) {
      count = count+1
      dispatch(setIterationCount(count ));

      const shouldSwap =
        getState().bubbleSort.sortingOrder === 'ascending'
          ? sortedArr[j] > sortedArr[j + 1]
          : sortedArr[j] < sortedArr[j + 1];

      if (shouldSwap) {
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = temp;

        dispatch(setNumbers([...sortedArr]));
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
  }

  const endTime = new Date();
  const elapsedMilliseconds = endTime - startTime;
  dispatch(setElapsedTime(elapsedMilliseconds));
};

export default bubbleSortSlice.reducer;

