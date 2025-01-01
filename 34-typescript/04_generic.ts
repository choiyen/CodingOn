//generic
// 선언을 할 때 타입을 지정하기 어려운 케이스가 존재
// - 데이터 타입을 외부에서 지정 + 생성 시점에 타입을 명시하겠다.
// => 재사용성 증가 -> 타입을 변수처럼 사용
// <T> 형태로 주로 사용 :(T, U, V, .....)

function numArrlen(arr: number[]): number {
  return arr.length;
}
function strArrlen(arr: string[]): number {
  return arr.length;
}

numArrlen([1, 2, 3]);
//numArrlent(["ad"])//에러

//<T>를 이용해서 매개변수를 선언하는 공간을 하나 더 만듬

function arrlen<T>(arr: T[]) {
  return arr.length;
}

arrlen([1, 2, 3]); // arrlen<number>([1,2,3]);
arrlen(["1", "2", "3"]);
arrlen<string | number>(["일", 2]);

//퀴즈
// 두개의 매개 변수를 넘겨 받아서 콘솔로 출력하는 함수 generic이용해서 만들고 호출
function printSome<T>(a: T, b: T) {
  console.log(a, b);
}

printSome(5, 7);
printSome<string[]>(["hi"], ["hello"]);
printSome(1, 2);

function printSome2<T, U>(a: T, b: U) {
  console.log(a, b);
}

///////////////////////////////////
// interface 와 generic
interface Phone<T> {
  company: string;
  createdAT: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<iphoneOption> = {
  company: "apple",
  createdAT: new Date("2024-11-01"),
  option: {
    color: "pink",
    storage: 256,
  },
};

type galaxyOption = {
  color: string;
  isBux: boolean;
};

function arrElement<T>(params: Array<T>, b: number) {
  if (params.length <= b) {
    return false;
  }
  console.log(b);
  console.log(params[b]);
  return params[b];
}
console.log(arrElement<string>(["a", "b", "c", "d"], 3)); //b
console.log(arrElement<string>(["a", "b", "c", "d"], 5)); // false
