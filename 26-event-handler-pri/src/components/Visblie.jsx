import React from "react";
import { useState } from "react";

export default function Visblie() {
  const [font, setfont] = useState("사라져라");
  const [getdisplay, setdisplay] = useState("block");

  let changefont = () => {
    if (font == "사라져라") {
      setfont("보여라");
      setdisplay("none");
    } else {
      setfont("사라져라");
      setdisplay("block");
    }
  };

  return (
    <div>
      <h1 id="name" style={{ display: getdisplay }}>
        안녕하세요
      </h1>
      <button onClick={changefont}>{font}</button>
    </div>
  );
}
