import React from "react";
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const increse = () => {
    setNumber(number + 1);
  };
  const alertMsg = (msg) => {
    alert(`${msg}`);
  };

  const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(msg);
  };
  return (
    <div>
      <h1>Number Counter</h1>
      <h2>{number}</h2>
      {/* 함수에 인자가 없으면 함수 이름만 전달 */}
      <button onClick={increse}>더하기</button>
      <br />
      {/* 함수에 인자 보내기 : 익명함수로 감싸서 처리한다. */}
      <button onClick={() => alertMsg("hello~")}>alert 출력</button>
      <button onClick={(e) => consoleMsg(e, "hello~")}>
        alert 이벤트 출력
      </button>
    </div>
  );
}
