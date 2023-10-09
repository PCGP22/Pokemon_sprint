import { useState } from "react";

type sliderProps = {
  maxWidth: number;
  state: any;
};

let maxWidth: number;
let value: number = 60;
let color: string = "yellow";
function Slider(props: sliderProps) {
  if (!props.maxWidth) {
    maxWidth = 600;
  } else {
    maxWidth = props.maxWidth;
  }

  const [width, setWidth] = useState(60 * (maxWidth / 150));

  let circleStyle = {
    width: "25px",
    height: "25px",
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
    height: "20px",
    marginLeft: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
  };

  function handleResize(e: any) {
    console.log(e.clientX);
    if (e.clientX > 720) {
      setWidth(e.clientX - 724);
    } else if (e.clientX > 1020) {
      setWidth(maxWidth);
    } else if (e.clientX === 0) {
      return;
    } else if (e.clientX <= 720) {
      setWidth(1);
      value = 0;
      color = "#f07e1d";
      return;
    }
    value = Math.trunc((width / maxWidth) * 10 * 15);
    if (value > 150) value = 150;
    if (value < 50) color = "#f07e1d";
    if (value >= 50) color = "#f0f056";
    if (value > 75) color = "#44db4e";
  }

  function handleReset() {
    setWidth(60 * (maxWidth / 150));
    value = 60;
    color = "#f0f056";
  }

  function handleClick(e: any) {
    console.log(e.clientX);
    if (e.clientX !== 0) {
      setWidth(e.clientX - 724);
    } else if (e.clientX > maxWidth - 1) {
      setWidth(maxWidth);
    }
    value = Math.trunc(((e.clientX - 724) / maxWidth) * 10 * 15);
    if (value > 150) value = 150;
    if (value < 50) color = "#f07e1d";
    if (value >= 50) color = "#f0f056";
    if (value > 75) color = "#44db4e";
  }

  function handleInputChange(e: any) {
    if (e.target.value !== 0) {
      setWidth(e.target.value * (maxWidth / 150));
    } else if (e.target.value > 150) {
      setWidth(maxWidth);
    }
    value = e.target.value;
    if (value > 150) value = 150;
    if (value < 50) color = "#f07e1d";
    if (value >= 50) color = "#f0f056";
    if (value > 75) color = "#44db4e";
  }

  return (
    <div className="slider">
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        min={0}
        max={150}
        className="create__inputs centered"
        ref={props.state}
      />
      <div
        style={{
          backgroundColor: "#63635e",
          width: `${maxWidth}px`,
          height: "26px",
          display: "flex",
          //   flexWrap: "wrap",
          alignItems: "center",
          justifyItems: "start",
        }}
        onClick={handleClick}>
        <div style={barStyle}></div>
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
      {/* <button type="button" onClick={handleReset}>
        Reset
      </button> */}
    </div>
  );
}

export default Slider;
