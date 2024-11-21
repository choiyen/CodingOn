import React from "react";

export default function Handler(props) {
  const { img, backcolor, color, text } = props.color;
  console.log(color);

  return (
    <div>
      <img src={`${img}`} alt={img} />
      <div
        style={{
          backgroundColor: backcolor,
          color: color,
          height: "50px",
        }}
      >
        {text}
      </div>
    </div>
  );
}
