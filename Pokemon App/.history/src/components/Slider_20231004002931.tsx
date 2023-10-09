import React, { useState } from "react";

function Slider() {
  const [width, setWidth] = useState(50);

  let circleStyle = {
    width: `${width}px`,
    height: "50px",
    backgroundColor: "black",
    borderRadius: "50%",
    marginRight: "-2px",
  };

  function handleResize() {
    setWidth(60);
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          width: "800px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyItems: "start",
        }}>
        <div
          style={{
            backgroundColor: "black",
            width: "500px",
            height: "24px",
            marginLeft: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}>
          <div style={circleStyle} draggable={true} onDrag={handleResize} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
