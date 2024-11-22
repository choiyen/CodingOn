import React, { useState } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

export default function LifeCycleFunc() {
  const [number, setnumber] = useState(0);
  const [visible, setVisble] = useState(true);

  const changeNumber = () => setnumber(number + 1);
  const changVisible = () => setVisble(!visible);

  return (
    <>
      <div>LifeCycleFunc</div>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changVisible}>ON/OFF</button>
      {visible && <LifeCycleFuncChild number={number}></LifeCycleFuncChild>}
    </>
  );
}
