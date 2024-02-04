import React, { useState } from 'react';

const Hexagon = () => {
  const [color, setColor] = useState('white'); // Estado inicial blanco

  const toggleColor = () => {
    setColor(currentColor => currentColor === 'white' ? 'yellow' : 'white'); // Cambia el color al hacer clic
  };

  return (
    <svg width="100" height="100" viewBox="0 0 100 86" onClick={toggleColor} style={{ cursor: 'pointer', padding: "9px", backgroundImage: "url('/nf.webp')", }}>
    </svg>
  );
};

export default Hexagon;