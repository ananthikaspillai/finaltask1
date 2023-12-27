
import React from 'react';

const VisualizerComponent = ({ numbers }) => {
  if (!numbers || !Array.isArray(numbers)) {
    return null; 
  }

  const maxValue = Math.max(...numbers); 

  return (
    <div style={{ display: 'flex', marginTop: '20px', transform: 'scaleY(-1)' }}>
      {numbers.map((num, index) => (
        <div
          key={index}
          style={{
            width: '25px',
            height: `${(num / maxValue) * 300}px`, 
            backgroundColor: 'lightblue',
            margin: ' 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'normal'
          }}
        >
          <span style={{ transform: 'scaleY(-1)' }}>{num}</span>
        </div>
      ))}
    </div>
  );
};

export default VisualizerComponent;


