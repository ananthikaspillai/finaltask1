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

    let swapped = true;
    while (swapped) {
      swapped = false;

      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;

          setNumbers([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 1000));

          swapped = true;
        }
      }
    }
  };
  return (
    <div style={{ marginLeft: "10px" }}>
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
      <button style={{ marginTop: '10px', backgroundColor: 'beige', borderRadius: '10px', marginLeft: '40px' }} onClick={visualizeBubbleSort}>
        Sort Numbers
      </button>
      <VisualizerComponent numbers={numbers} />
    </div>
  );
};
export default BubbleSortComponent;