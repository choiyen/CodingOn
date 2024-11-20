import React from "react";
import { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("black");

  const changColor = (chang, font) => {
    let h1 = document.querySelector("#color");
    h1.textContent = font;
    setColor(chang);
  };
  return (
    <div>
      <h1 id="color" style={{ color: color }}>
        검정색 글씨
      </h1>
      <button onClick={() => changColor("red", "빨간색 글씨")}>빨간색</button>
      <button onClick={() => changColor("blue", "파란색 글씨")}>파란색</button>
    </div>
  );
}
