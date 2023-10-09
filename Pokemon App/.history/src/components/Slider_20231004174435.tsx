import { useState } from "react";

type sliderProps = {
  maxWidth: number;
};

let maxWidth: number;
let value: number;
let color: string = "yellow";
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
    backgroundColor: `color-mix(in srgb, ${color} 33%, white)`,
    borderRadius: "50%",
    marginRight: "-8px",
    boxShadow: " 0 0 2px 5px ",
    display: "grid",
    placeContent: "center",
    color: "black",
    fontWeight: "bolder",
  };

  let barStyle = {
    backgroundColor: `${color}`,
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
    } else if (e.clientX > 799) {
      setWidth(maxWidth);
    }
    value = Math.trunc((width / maxWidth) * 10 * 15);
    if (value > 150) value = 150;
    if (value < 50) color = "#f07e1d";
    if (value >= 50) color = "#f0f056";
    if (value > 75) color = "#44db4e";
  }

  function handleReset() {
    setWidth(324);
    value = 60;
    color = "#f0f056";
  }

  function handleClick(e: any) {
    setWidth(e.clientX);
  }

  function handleMove(e: any) {
    // console.log(e.clientX);
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "#63635e",
          width: `${maxWidth}px`,
          height: "30px",
          display: "flex",
          //   flexWrap: "wrap",
          alignItems: "center",
          justifyItems: "start",
        }}
        onClick={handleClick}>
        <div style={barStyle} onMouseMove={handleMove}></div>
        <div
          style={circleStyle}
          draggable={true}
          onDrag={handleResize}
          onDragStart={(e: any) =>
            e.dataTransfer.setDragImage(new Image(), 0, 0)
          }>
          {value}
        </div>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Slider;
