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
    <div style={{marginLeft:"510px"}}>
      <h1 style={{color:'brown'}}>Bubble Sort</h1>
      <div>
        <label>
          <h3 style={{marginLeft:'20px'}}>Enter Numbers</h3>
          <input
            type="text"
            value={inputNumbers}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button style={{marginTop:'10px',backgroundColor:'beige',borderRadius:'10px',marginLeft:'40px'}} onClick={visualizeBubbleSort}>
        Sort Numbers
      </button>
      <VisualizerComponent numbers={numbers} />
    </div>
  );
};

export default BubbleSortComponent;