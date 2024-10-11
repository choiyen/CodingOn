//rest 파라미터
// 1. 함수에서 rest를 사용할 때
const values = [10, 20, 30, 40, 50, 60];
function get(a, b, ...rest) {
  console.log("a >", a);
  console.log("b >", b);
  console.log(rest);
}

get(...values); // spread 연산자로 요소들을 펼쳐서 넣어줌.
get(values); // 이러면 a가 값이 전부 들어감. b = underfined, rest는 [](빈배열)

// 2. 객체에서 rest 사용
const icecream = {
  company: "lotte",
  flavor: "choco",
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor); //choco
console.log(rest); // {company : 'lotte', price : 1000};

//3. 배열에서 rest 사용
const number = [1, 2, 3, 4, 5];
const { one, two, ...rest1 } = number;
console.log(one, two, rest);
