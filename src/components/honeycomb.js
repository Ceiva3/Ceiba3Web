import React from 'react';
import Hexagon from './hexagon';

const Honeycomb = () => {
  const hexagons = []; // Para almacenar los componentes hexágonos

  // Ajusta estos valores según el número de hexágonos y filas que desees
  const rows = 5;
  const cols = 7;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Ajusta estos valores para cambiar el espaciado y el tamaño
      const x = col * 82 + (row % 2) * 41; // Desplazamiento para filas alternas
      const y = row * 62;

      hexagons.push(
        <div key={`${row}-${col}`} style={{ position: 'absolute', left: `${x}px`, top: `${y}px`, padding: "30px", }}>
          <Hexagon />
        </div>
      );
    }
  }

  return <div style={{ position: 'relative' }}>{hexagons}</div>;
};

export default Honeycomb;