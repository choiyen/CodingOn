import React, { useReducer } from "react";

const initstate = { value: 0 };

const reducer = (prevState, action) => {
  console.log(prevState, action);

  switch (action.type) {
    case "INCREMENT":
      return { value: prevState.value + 1 };
    case "DECREMENT":
      return { value: prevState.value - 1 };
    case "RESET":
      return initstate;
    default:
      return { value: prevState.value };
  }
};

export default function UseReducerEx() {
  const [state, dispatch] = useReducer(reducer, initstate);
  //reducer : state를 업데이트 하는 함수
  // dispatch : 액션 state가 어떻게 변경되어야 하는지에 대한 힌트를 발생시키는 함수
  // state : 현재의 상태
  // useReducer는 [state, dispatch]를 리턴함.

  return (
    <div>
      <h1>UseReducerEx</h1>
      <h2>{state.value}</h2>
      {/* 넘기는 변수의 형태는 객체가 아니어도 됨. 단, 넘겨주는 변수가 많을 경우 객체 권장*/}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Plus</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Minus</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

// dispatch 함수가 어떤 로직을 실행할 지를 reducer에 전달.
// reducer가 받은 변수에 따라 다른 함수를 실행한다.
