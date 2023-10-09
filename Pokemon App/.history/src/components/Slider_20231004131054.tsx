import React, { useState } from "react";

function Slider() {
  const [width, setWidth] = useState(50);

  let circleStyle = {
    width: "35px",
    height: "35px",
    backgroundColor: "black",
    borderRadius: "50%",
    marginRight: "-8px",
    boxShadow: " 0 0 2px 5px ",
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
    if (e.clientX !== 0) {
      setWidth(e.clientX);
    }
    if (e.client > 800) {
      setWidth(800);
    }
    console.log(width, (width / 800) * 100);
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          width: "800px",
          height: "30px",
          display: "flex",
          //   flexWrap: "wrap",
          alignItems: "center",
          justifyItems: "start",
        }}>
        <div style={barStyle}></div>
        <div style={circleStyle} draggable={true} onDrag={handleResize} />
      </div>
      <button onClick={() => setWidth(80)}>Reset</button>
    </div>
  );
}

export default Slider;
