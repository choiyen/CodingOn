//state의 초기 값 정의 필요.
export const PLUS = "counter/PLUS";
export const MINUS = "counter/MINUS";

const initialState = {
  number: 50,
};

// reducer 정의 : 상태 변화를 일으키는 함수
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
