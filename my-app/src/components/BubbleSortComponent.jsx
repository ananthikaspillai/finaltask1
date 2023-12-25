import React, { useState } from 'react';
import VisualizerComponent from './VisualizerComponent';

const BubbleSortComponent = () => {
  const [inputNumbers, setInputNumbers] = useState('');
  const [numbers, setNumbers] = useState([]);

  const handleInputChange = (event) => {
    setInputNumbers(event.target.value);
  };

  const visualizeBubbleSort = async () => {
    const arr = inputNumbers.split(',').map(Number);
    const sortedArr = [...arr];

    for (let i = 0; i < sortedArr.length - 1; i++) {
      for (let j = 0; j < sortedArr.length - 1 - i; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          
          const temp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = temp;

          setNumbers([...sortedArr]);
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', marginLeft: '400px' }}>
        <label>
          <h3>Enter Numbers</h3>
          <input
            type="text"
            value={inputNumbers}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button style={{ marginLeft: '400px' }} onClick={visualizeBubbleSort}>
        Sort Numbers
      </button>
      <VisualizerComponent numbers={numbers} />
    </div>
  );
};

export default BubbleSortComponent;