import React from 'react';
import Hexagon from './hexagon';

const Honeycomb = () => {
  return (
    <div className="honeycomb"> 
      <div style={{ position: 'absolute', left: "0px", top: "600px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "100px", top: "600px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "100px", top: "700px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "0px", top: "700px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "0px", top: "800px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "0px", top: "900px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "0px", top: "600px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "0px", top: "600px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "0px", top: "600px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "100px", top: "800px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "100px", top: "900px", padding: "30px", }}>
        <Hexagon/>
      </div>
    </div>
  )
};

export default Honeycomb;