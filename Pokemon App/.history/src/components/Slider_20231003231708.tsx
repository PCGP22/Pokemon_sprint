import React from "react";

function Slider() {
  let width = 500;
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
          <div
            style={{ width: "50px", height: "50px", backgroundColor: "black" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
