import React, { useState } from "react";

function Slider() {
  const [width, setWidth] = useState(50);

  let circleStyle = {
    width: "20px",
    height: "20px",
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

  function handleResize() {
    setWidth(50);
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
        }}></div>
      <div style={barStyle}>
        <div style={circleStyle} draggable={true} onDrag={handleResize} />
      </div>
    </div>
  );
}

export default Slider;
