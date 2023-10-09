import React, { useState } from "react";

function Slider() {
  const [width, setWidth] = useState(50);

  let circleStyle = {
    width: "20px",
    height: "20px",
    backgroundColor: "black",
    borderRadius: "50%",
    marginRight: "-8px",
    boxShadow: " 0 0 0 15px ",
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
        <button onClick={() => setWidth(80)}></button>
      </div>
    </div>
  );
}

export default Slider;
