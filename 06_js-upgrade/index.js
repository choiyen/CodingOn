// 구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서" 중요
// [변수1, 변수2, ...] = 배열
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c"];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five); // 1 2 3 4 5

const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha); // a b c undefined

const lists = ["apple", "grape"];
const [f1, f2, f3 = "orange"] = lists;
console.log(f1, f2, f3); // apple grape orange

let num1 = 1;
let num2 = 3;
console.log("swap 전 >", num1, num2);
[num2, num1] = [num1, num2]; // [num2, num1] = [1, 3]
console.log("swap 후 >", num1, num2);

// 2. 객체 구조 분해 할당
// - 변수를 선언하는 순서는 중요하지 않음
// - 키 값과 변수 명이 일치해야 함.
// {키1, 키2, 키3} = 변수

const obj = {
  title: "조커",
  content: "스릴러",
  num: 1,
};
//객체 구조 분해를 쓰지 않았을 떄.
console.log(obj.title, obj.content, obj.num1);
console.log(obj["title"], obj["content"], obj["num"]);

// 객체 구조 할당
// key가 존재하지 않을 때를 대비하여 = 연산자로 default 값을 할당할 수 있다.
const { title, content, num, star } = obj;
console.log(title, content, num, star); //조커, 스릴러, 1, undefined

// 콜론 (:)를 이용하면 새 변수명으로 바꿔서 저장 가능
const { title: t1 } = obj;
console.log(t1);

const lectureInfo = {
  name: "KDT Web 14th",
  part: "Web",
};

function getInfo(lecture) {
  //lecture는 객체 -> 구조분해 할당
  const { name, part } = lecture;
  const output = `${name} 강의는 ${part} 개발을 공부합니다!`;

  return output;
}

const result = getInfo(lectureInfo);
console.log(result);

//////////////////////////////////////
// 단축 평가
// && , ||
// A && B : 두 개의 피연산자 모두 True 면 true 반환
// A || B : 두 개의 피연산자 중에서 하나만 true 여도 true 반환

console.log(true && true); //true
console.log(false && true); //false

console.log(true || false); // true
console.log(false || true); // true

const xx = 5;
const yy = 7;

//삼향연산자 예시
const result1 = xx > yy ? "xx가 큼" : "yy가 큼";
console.log(result1);

//단축평가 ( &&, 논리곱)
const result2 = xx > yy && "xx가 큼";
const result3 = xx < yy && "yy가 큼";

console.log(result2, result3); // false 'yy가 큼'
// 단축평가 (||, 논리합)
const result4 = xx || 100;
console.log(result4); //앞에가 true이면 뒤에는 검사 x

const nameEx = "홍길동";
const nameEx2 = null;

console.log(nameEx || "이름없음"); //홍길동
console.log(nameEx2 || "이름없음"); //이름없음

//값이 있을 수도, 없을 수도 있을 떄 null 값이 대입되면 오류해결.

//...연산자.
//spread 연산자

const a = [1, 2, 3];
const b = [4, 5];
