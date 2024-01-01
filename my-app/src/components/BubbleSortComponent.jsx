
// import React, { useState } from 'react';
// import VisualizerComponent from './VisualizerComponent';

// const BubbleSortComponent = () => {
//   const [inputNumbers, setInputNumbers] = useState('');
//   const [numbers, setNumbers] = useState([]);
//   const [sortingOrder, setSortingOrder] = useState('ascending');
//   const [elapsedTime, setElapsedTime] = useState(null);
//   const [iterationCount, setIterationCount] = useState(0);

//   const handleInputChange = (event) => {
//     setInputNumbers(event.target.value);
//   };

//   const handleSortingOrderChange = (event) => {
//     setSortingOrder(event.target.value);
//   };

//   const visualizeBubbleSort = async () => {
//     const startTime = new Date();
//     setIterationCount(0);

//     const arr = inputNumbers.split(',').map(Number);
//     const sortedArr = [...arr];

//     for (let i = 0; i < sortedArr.length - 1; i++) {
//       for (let j = 0; j < sortedArr.length - 1 - i; j++) {
//         setIterationCount((count) => count + 1);

//         const shouldSwap =
//           sortingOrder === 'ascending'
//             ? sortedArr[j] > sortedArr[j + 1]
//             : sortedArr[j] < sortedArr[j + 1];

//         if (shouldSwap) {
//           const temp = sortedArr[j];
//           sortedArr[j] = sortedArr[j + 1];
//           sortedArr[j + 1] = temp;

//           setNumbers([...sortedArr]);
//           await new Promise((resolve) => setTimeout(resolve, 1000));
//         }
//       }
//     }

//     const endTime = new Date();
//     const elapsedMilliseconds = endTime - startTime;
//     setElapsedTime(elapsedMilliseconds);
//   };

//   return (
//     <div style={{ marginLeft: '10px' }}>
//       <h1 style={{ color: 'brown' }}>Bubble Sort</h1>
//       <div>
//         <label>
//           <h3 style={{ marginLeft: '20px' }}>Enter Numbers</h3>
//           <input
//             type="text"
//             value={inputNumbers}
//             onChange={handleInputChange}
//           />
//         </label>
//       </div>
//       <div style={{ marginTop: '10px' }}>
//         <label>
//           Select Sorting Order:{' '}
//           <select
//             value={sortingOrder}
//             onChange={handleSortingOrderChange}
//             style={{ marginLeft: '10px' }}
//           >
//             <option value="ascending">Ascending</option>
//             <option value="descending">Descending</option>
//           </select>
//         </label>
//       </div>
//       <button
//         style={{
//           marginTop: '10px',
//           backgroundColor: 'beige',
//           borderRadius: '10px',
//           marginLeft: '40px',
//         }}
//         onClick={visualizeBubbleSort}
//       >
//         Sort Numbers
//       </button>
//       <p style={{ marginTop: '10px' }}>
//         Elapsed Time: {elapsedTime !== null ? `${elapsedTime} ms` : 'N/A'}
//       </p>
//       <p>Number of Iterations: {iterationCount}</p>
//       <VisualizerComponent numbers={numbers} />
//     </div>
//   );
// };

// export default BubbleSortComponent;


// BubbleSortComponent.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import bubbleSortReducer, { visualizeBubbleSort } from "../Redux/bubbleSortSlice";
// import VisualizerComponent from './VisualizerComponent';

// const BubbleSortComponent = () => {
//   const dispatch = useDispatch();
//   const {
//     inputNumbers,
//     sortingOrder,
//     elapsedTime,
//     iterationCount,
//     numbers,
//   } = useSelector((state) => state.bubbleSort);

//   const handleInputChange = (event) => {
//     dispatch(bubbleSortReducer.actions.setInputNumbers(event.target.value));
//   };

//   const handleSortingOrderChange = (event) => {
//     dispatch(bubbleSortReducer.actions.setSortingOrder(event.target.value));
//   };

//   const handleSortClick = () => {
//     dispatch(visualizeBubbleSort());
//   };

//   return (
//     <div style={{ marginLeft: '10px' }}>
//     <h1 style={{ color: 'brown' }}>Bubble Sort</h1>
//     <div>
//       <label>
//         <h3 style={{ marginLeft: '20px' }}>Enter Numbers</h3>
//         <input
//           type="text"
//           value={inputNumbers}
//           onChange={handleInputChange}
//         />
//       </label>
//     </div>
//     <div style={{ marginTop: '10px' }}>
//       <label>
//         Select Sorting Order:{' '}
//         <select
//           value={sortingOrder}
//           onChange={handleSortingOrderChange}
//           style={{ marginLeft: '10px' }}
//         >
//           <option value="ascending">Ascending</option>
//           <option value="descending">Descending</option>
//         </select>
//       </label>
//     </div>
//     <button
//       style={{
//         marginTop: '10px',
//         backgroundColor: 'beige',
//         borderRadius: '10px',
//         marginLeft: '40px',
//       }}
//       onClick={visualizeBubbleSort}
//     >
//       Sort Numbers
//     </button>
//     <p style={{ marginTop: '10px' }}>
//       Elapsed Time: {elapsedTime !== null ? `${elapsedTime} ms` : 'N/A'}
//     </p>
//     <p>Number of Iterations: {iterationCount}</p>
//     <VisualizerComponent numbers={numbers} />
//   </div>
//   );
// };

// export default BubbleSortComponent;



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
