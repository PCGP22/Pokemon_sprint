import React, { useState } from "react";

function Slider() {
  const [width, setWidth] = useState(50);

  let circleStyle = {
    width: "35px",
    height: "35px",
    backgroundColor: "black",
    borderRadius: "50%",
    marginRight: "-8px",
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
    console.log(e.clientX);
    circleStyle = { ...circleStyle, boxShadow: " 0 0 5px 5px " };
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
