//typescript basic type

// 명시적으로 선언하는 방법
let a: number = 1;
a = 2;
// a = 'hello';
let b: string = "str";
let c: boolean = true;
let d: undefined;
let e: null = null;

//타입 추론
let aa = 1;
let bb = "h1";
let cc = false;
let dd;
let ee = null;

//배열
let numArr: number[] = [1, 2, 3, 4]; // number 타입이 들어있는 배열
// numArr = ['a'];
let strArr: Array<string> = ["apple", "banana", "orange"];

// 배열 원소가 여러 타입을 경우
let arr1: (string | number | boolean)[] = [1, true, "string"];
let arr2: Array<string | number[] | boolean> = [[1, 2], true, "string"];

//어떤 자료형이든 상관없는 배열을 만듬
let arr3: any[] = [1, 2, 3, "word", true];

//objcet : 객체
let object1: object = {
  name: "홍길동",
  grade: 1,
};
