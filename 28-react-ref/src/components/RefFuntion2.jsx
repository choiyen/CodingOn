import React, { useRef, useState } from "react";

export default function RefFuntion2() {
  const idRef = useRef(1);
  const [id, setid] = useState(10);
  const plusIdRef = () => {
    idRef.current += 1;
    test += 1;
    console.log(idRef.current);
  };
  let test = 10; //재렌더링시 10으로 초기화됨.
  const plusIdState = () => {
    setid(id + 1);
  };
  return (
    <div>
      <h1>Ref Sample</h1>
      <h1>{test}</h1>
      <h2>{idRef.current}</h2>
      <button onClick={plusIdRef}>PLUS Ref</button>
      <h2>{id}</h2>
      <button onClick={plusIdState}>PLUS State</button>
    </div>
  );
}
