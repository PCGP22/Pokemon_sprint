import React, { useState } from "react";

function Slider() {
  const [width, setWidth] = useState(50);

  let circleStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "black",
    borderRadius: "50%",
    marginRight: "-2px",
  };

  let barStyle = {
    backgroundColor: "black",
    width: `${width}px`,
    height: "24px",
    marginLeft: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  };

  function handleResize(e: any) {
    setWidth(e.clientX);
    if (e.clientX === 0) {
      setWidth(5);
    }
    console.log(e.clientX);
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          width: "800px",
          height: "30px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyItems: "start",
        }}>
        <div style={barStyle}>
          <div style={circleStyle} draggable={true} onDrag={handleResize} />
        </div>
      </div>
      <button onClick={() => setWidth(80)}></button>
    </div>
  );
}

export default Slider;
