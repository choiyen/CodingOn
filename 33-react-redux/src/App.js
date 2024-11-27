import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //store에 있는 상태 가져오기 - useSelector 이용
  const number = useSelector((state) => {
    console.log(state);
    return state.counter.number;
  }); // 어느 컴포넌트에서든 가져올 수 있음
  // const [stateNumber, setstateNumber] = useState(50);
  // const plus = () => setstateNumber(stateNumber + 1);
  // const minus = () => setstateNumber(stateNumber + 1);

  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h1>number : {number}</h1>
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
      <button onClick={() => dispatch({ type: "PLUS" })}>Plus</button>
      <button onClick={() => dispatch({ type: "MINUS" })}>minus</button>
    </div>
  );
};

export default App;
