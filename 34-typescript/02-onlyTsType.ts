//only typescript type

//Tuple
let drink: [string, string] = ["사이다", "롯데"];
drink[0] = "cider";
drink[1] = "lotte";
//drink.push("wow"); // 동작이 된다 => tuple의 한계
console.log(drink);

//readonly : 요소 타입 순서와 길이를 고정
let drink2: readonly [string, number] = ["사이다", 2000];
// drink2.push("ddddd"); //에러 발생
console.log(drink2);

let olimpic_newgame: readonly [object, boolean] = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];

// olimpic_newgame[1] = false

/////////////////////////////////////////////////////////

//Enum
enum Auth {
  admin = 0,
  user = 1,
  guset = 2,
}
enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}
console.log(Auth.admin);
console.log(Cafe.americano);

enum Cake {
  choco,
  vanilla,
  lemon = "레몬",
}

console.log(Cake.choco, Cake.vanilla, Cake.lemon); //0,1 -> 이왕이면 문자면 문자, 숫자면 숫자를 써라.

//any
//명시적으로 any
let val: any;
val = 10;
val = true;
//타입스크립트를 쓰는데, 자주 쓰면 의미가 있을까?

// 암묵적으로
let val2;

//////////////////////////

// 사용자 정의 타입 : type & interface
// 1. interface
interface Student {
  // 지정된 키값만 들어갈 수 있게 만듬.
  name: string;
  isPassed: boolean;
}

const student: Student = {
  name: "ssss",
  isPassed: true,
};

//interface 상속
interface BassballClub extends Student {
  Position: string;
  height: number;
  readonly backNumber?: number; //? :있어도 되고 없어도 된다.
  [grade: number]: Score;
}

enum Score {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}

const baseballStudent: BassballClub = {
  name: "otani",
  isPassed: true,
  Position: "pitcher",
  height: 190,
  backNumber: 17,
  1: Score.B,
  2: Score.A,
};

console.log(baseballStudent);

// 2. Type
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  Sm = 500,
  MD = 700,
  LG = 1000,
}

const Width1: Bp1 = 1000;
const Width2: Bp2 = Bp2.MD;

//교차 타입 : 두개 이상의 타입을 합치는 것.
interface toy {
  name: string;
  start(): void;
}
interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = toy & Car;

const toyCar: ToyCar = {
  name: "tayo",
  start() {
    console.log("출발");
  },
  color: "blue",
  price: 5000,
};

type Gender = "F" | "M";
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};
