import React from "react";
import logo from "./logo.svg";

export default function Pr2() {
  return (
    <div>
      {/* 이미지가 src 폴더에 존재할 때 */}
      <img src={logo} alt="" />
      {/* 이미지가 public 폴더에 존재할 때 */}
      <img src="/logo192.png" alt="" />
    </div>
  );
}
