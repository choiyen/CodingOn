import React, { useState } from "react";

export default function SayFuntion() {
  console.log(useState("welcome!"));
  const [message, SetMessage] = useState("welcome!");
  //"welcome!"은 상태의 초기값, (숫자, 문자, 배열 값의 형태는 자유로움)
  // message : 메세지 상태
  // setMessage() : message statie 값을 바꾸는 함수

  const onclickEnter = () => {
    SetMessage("안녕하세요~");
  };
  const onclickLeave = () => {
    SetMessage("안녕히가세요~");
  };

  return (
    <div>
      <button onClick={onclickEnter}>입장</button>
      <button onClick={onclickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}
