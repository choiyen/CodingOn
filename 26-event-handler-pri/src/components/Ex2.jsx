import React from "react";
import { useState } from "react";
import Color from "./Color";

export default function Ex2() {
  const [textColor, changeColor] = useState({ color: "black", text: "검정색" });
  return (
    <div>
      <h4 style={{ color: textColor.color }}> {textColor.text} 글씨</h4>
      <button
        onClick={(e) => {
          changeColor({ color: "red", text: e.target.innerText });
        }}
      >
        빨간색
      </button>
      <button
        onClick={(e) => {
          changeColor({ color: "blue", text: e.target.innerText });
        }}
      >
        파란색
      </button>
    </div>
  );
}
