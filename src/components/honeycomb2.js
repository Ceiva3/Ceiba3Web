import React from 'react';
import Hexagon from './hexagon';

const Honeycomb2 = () => {
  return (
    <div className="honeycomb" > 
      <div style={{ position: 'absolute', left: "0px", top: "590px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "110px", top: "700px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "0px", top: "700px", padding: "30px", }}>
        <Hexagon/>
      </div>
     
      <div style={{ position: 'absolute', left: "0px", top: "920px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "220px", top: "590px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "220px", top: "700px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "220px", top: "810px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "220px", top: "920px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "110px", top: "810px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "110px", top: "920px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "330px", top: "810px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "330px", top: "700px", padding: "30px", }}>
        <Hexagon/>
      </div>
      <div style={{ position: 'absolute', left: "330px", top: "590px", padding: "30px", }}>
        <Hexagon/>
      </div>
    </div>
  )
};

export default Honeycomb2;