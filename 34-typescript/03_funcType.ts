function print(a: number, b: number, c?: number): void {
  console.log("print() 출력 결과");
  console.log(a);
  console.log(b);
  console.log(c);
}
print(2, 4, 6);
print(2, 4); //c가 ?이므로 두개만 들어가도 에러 X(단, 마지막은 undefined)
function print2(a: number, b: number, c = 100): void {
  console.log("print() 출력 결과");
  console.log(a);
  console.log(b);
  console.log(c);
}
print2(2, 4);

//string  xprm

function sayHello(): string {
  return "Hello~";
}

function concatString(x: string, y: string) {
  return x + y;
}
//number 리턴
function squareArea(x: number, y: number) {
  return x * y;
}

const circleArea = (r: number): number => {
  return r * r * Math.PI;
};

//interface 정의 시 함수 타입 표현
interface Greet {
  name: string;
  h1(): string;
  bye(a: number): string;
}

const std: Greet = {
  name: "gildong",
  h1() {
    return "안녕" + this.name;
  },
  bye(a: number) {
    return `작별 인사 ${a}번 하기`;
  },
};

//never
// : 함수의 끝에 절대 도달하지 않는 경우 : 무한루프
function goingOn(): never {
  while (true) {
    console.log("go");
  }
}

function sum1(a: number, b: number): void {
  console.log(a + b);
}
sum1(5, 11);
function sum2(...params: Array<number>) {
  let count = 0;
  const params1 = [...params];
  for (let param of params1) {
    count += param;
  }

  console.log(count);
}

sum2(1, 2, 3, 4, 10);
