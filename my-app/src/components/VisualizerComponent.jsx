
import React from 'react';

const VisualizerComponent = ({ numbers }) => {
  if (!numbers || !Array.isArray(numbers)) {
    return null; 
  }

  return (
    <div style={{ display: 'flex', marginTop: '20px' }}>
      {numbers.map((num, index) => (
        <div
          key={index}
          style={{
            width: `${20 + num * 5}px`,
            height: '380px',
            backgroundColor: 'lightgreen',
            margin: '0 10px',
            display: 'flex',
          alignItems:'center'
          }}
        >
          {num}
        </div>
      ))}
    </div>
  );
};

export default VisualizerComponent;
