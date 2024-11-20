import React from "react";
import { useState } from "react";

export default function Ex4({ color, setColor }) {
  let getoption = () => {
    let option1 = document.querySelector("#bgcolor").value;
    let option2 = document.querySelector("#color").value;
    let option3 = document.querySelector("#imgselect").value;
    let text = document.querySelector("#text").value;
    let couter;

    setColor({
      backcolor: option1,
      color: option2,
      img: option3,
      text: text,
    });
  };
  return (
    <div>
      <div>
        과일:
        <select name="user" id="imgselect" onChange={getoption}>
          <option value="apple.jpeg">사과</option>
          <option value="banna.png">바나나</option>
          <option value="pitch.jpeg">복숭아</option>
          <option value="orange.jpeg">오렌지</option>
        </select>
        배경색 :
        <select name="bgcolor" id="bgcolor" onChange={getoption}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="Orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
        글자색 :
        <select name="color" id="color" onChange={getoption}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="Orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
      </div>
      <br />
      <div>
        <input type="text" id="text" onChange={() => getoption()} />
      </div>
    </div>
  );
}
