import React, { useState } from "react";

type sliderProps = {
  maxWidth: number;
};

let maxWidth: number;
let value: number;
function Slider(props: sliderProps) {
  if (!props.maxWidth) {
    maxWidth = 800;
  } else {
    maxWidth = props.maxWidth;
  }

  const [width, setWidth] = useState(50);

  let circleStyle = {
    width: "35px",
    height: "35px",
    backgroundColor: "black",
    borderRadius: "50%",
    marginRight: "-8px",
    boxShadow: " 0 0 2px 5px ",
    display: "grid",
    placeContent: "center",
    color: "white",
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
    e.dataTransfer.setDragImage(new Image(), 0, 0);
    if (e.clientX !== 0) {
      setWidth(e.clientX);
    } else if (e.clientX > 799) {
      setWidth(maxWidth);
    }
    value = Math.trunc((width / maxWidth) * 10 * 15);
    if (value > 150) value = 150;
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          width: `${maxWidth}px`,
          height: "30px",
          display: "flex",
          //   flexWrap: "wrap",
          alignItems: "center",
          justifyItems: "start",
        }}>
        <div style={barStyle}></div>
        <div style={circleStyle} draggable={true} onDrag={handleResize}>
          {value}
        </div>
      </div>
      <button
        onClick={() => {
          setWidth(324);
          value = 60;
        }}>
        Reset
      </button>
    </div>
  );
}

export default Slider;
