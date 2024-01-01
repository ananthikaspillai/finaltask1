
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInputNumbers, setSortingOrder, setIterationCount } from "../Redux/bubbleSortSlice"; 
import { visualizeBubbleSort } from "../Redux/bubbleSortSlice"; 
import VisualizerComponent from './VisualizerComponent';

const BubbleSortComponent = () => {
  const dispatch = useDispatch();
  const {
    inputNumbers,
    sortingOrder,
    elapsedTime,
    iterationCount,
    numbers,
  } = useSelector((state) => state.bubbleSort);

  const handleInputChange = (event) => {
    dispatch(setInputNumbers(event.target.value)); 
  };

  const handleSortingOrderChange = (event) => {
    dispatch(setSortingOrder(event.target.value)); 
  };

  const handleSortClick = () => {
    dispatch(visualizeBubbleSort());
  };

  return (
    <div style={{ marginLeft: '10px' }}>
      <h1 style={{ color: 'brown' }}>Bubble Sort</h1>
      <div>
        <label>
          <h3 style={{ marginLeft: '20px' }}>Enter Numbers</h3>
          <input
            type="text"
            value={inputNumbers}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>
          Select Sorting Order:{' '}
          <select
            value={sortingOrder}
            onChange={handleSortingOrderChange}
            style={{ marginLeft: '10px' }}
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </label>
      </div>
      <button
        style={{
          marginTop: '10px',
          backgroundColor: 'beige',
          borderRadius: '10px',
          marginLeft: '40px',
        }}
        onClick={handleSortClick}  
      >
        Sort Numbers
      </button>
      <p style={{ marginTop: '10px' }}>
        Elapsed Time: {elapsedTime !== null ? `${elapsedTime} ms` : 'N/A'}
      </p>
      <p>Number of Iterations: {iterationCount}</p>
    </div>
  );
};

export default BubbleSortComponent;
