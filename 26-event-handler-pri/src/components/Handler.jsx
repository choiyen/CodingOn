import React from "react";

export default function Handler({ color }) {
  return (
    <div>
      <img src={`${color.img}`} alt={color.img} />
      <div
        style={{
          backgroundColor: color.backcolor,
          color: color.color,
          height: "50px",
        }}
      >
        {color.img}
        {color.text}
      </div>
    </div>
  );
}
