import React, { useState } from 'react';

const Hexagon = () => {
  const [color, setColor] = useState('white'); // Estado inicial blanco

  const toggleColor = () => {
    setColor(currentColor => currentColor === 'white' ? 'yellow' : 'white'); // Cambia el color al hacer clic
  };

  return (
    <svg width="100" height="115" viewBox="0 0 100 86" onClick={toggleColor} style={{ cursor: 'pointer', padding: "9px", }}>
      <polygon
        points="50,0 100,25 100,75 50,100 0,75 0,25"
        style={{ 
          fill: 'url(/nf.webp)', 
          stroke: 'black', 
          strokeWidth: 1,
        }}
      />
    </svg>
  );
};

export default Hexagon;