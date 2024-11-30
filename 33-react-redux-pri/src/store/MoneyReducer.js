const initialState = {
  money: 0,
};

export const PLUS = "MONEY/PLUS";
export const MINUS = "MONEY/MINUS";

/// payload 라는 이름으로 데이터를 받아주겠다.
export const deposit = (money) => {
  return { type: PLUS, money };
};
export const withdraw = (money) => {
  return { type: MINUS, money };
};

const MoneyReducer = (state = initialState, action) => {
  console.log(action.money);
  let count = Number(action.money);
  switch (action.type) {
    case PLUS:
      return { money: state.money + count };

    case MINUS:
      return { money: state.money - count };
    default:
      return state;
  }
};

export default MoneyReducer;
