import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App2() {
  //store에 있는 상태 가져오기 - useSelector 이용
  const isVisible = useSelector((state) => state.isVisible);

  // const [stateNumber, setstateNumber] = useState(50);
  // const plus = () => setstateNumber(stateNumber + 1);
  // const minus = () => setstateNumber(stateNumber + 1);

  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h1>isVisible의 값은 "{isVisible ? "참" : "거짓"}"</h1>
      <Box1></Box1>
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="box">
      <h1>Box1</h1>
      <Box2></Box2>
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="box">
      <h1>Box2</h1>
      <Box3></Box3>
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="box">
      <h1>Box3</h1>
      <Box4></Box4>
    </div>
  );
};

const Box4 = () => {
  const dispatch = useDispatch();
  return (
    <div className="box">
      <h1>Box4</h1>
      <button onClick={() => dispatch({ type: "CHANGE" })}>CHAINGE</button>
    </div>
  );
};

export default App2;
