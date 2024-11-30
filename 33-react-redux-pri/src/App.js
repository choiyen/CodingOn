import { useState, useRef } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deposit, MINUS, PLUS, withdraw } from "./store/MoneyReducer";

function App() {
  //store에 있는 상태 가져오기 - useSelector 이용
  const bank = useSelector((state) => {
    console.log(state);
    return state.moneyCount.money;
  }); // 어느 컴포넌트에서든 가져올 수 있음
  // const [stateNumber, setstateNumber] = useState(50);
  // const plus = () => setstateNumber(stateNumber + 1);
  // const minus = () => setstateNumber(stateNumber + 1);

  return (
    <div className="App">
      <h1>코딩온 은행</h1>
      <h1>금액 : {bank} 원</h1>
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
  const inputref = useRef(null);
  const [input, setinput] = useState(0);

  const invaliddispatch = (dispatch, type, money) => {
    if (isNaN(money)) {
      alert("숫자가 아닌 값은 입력 불가");
      return;
    } else {
      dispatch({ type, money });
      return;
    }
  };
  return (
    <div className="box">
      <h1>Box4</h1>
      <input
        type="number"
        ref={inputref}
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button
        // onClick={() => invaliddispatch(dispatch, PLUS, inputref.current.value)}
        // onClick={() => dispatch(deposit(Number(inputref.current.value)))}
        onClick={() => dispatch(deposit(Number(input)))}
      >
        입금
      </button>
      <button
        // onClick={() => invaliddispatch(dispatch, MINUS, inputref.current.value)}
        // onClick={() => dispatch(withdraw(Number(inputref.current.value)))}
        onClick={() => dispatch(deposit(Number(input)))}
      >
        출금
      </button>
    </div>
  );
};

export default App;
