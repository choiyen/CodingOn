//math 모듈을 불러와서 사용.

const add1 = require("./math");

console.log(add1(5, 7));

//한개만 불러오고 있을 경우, 다른 이름으로도 변수 선언 가능.
const hello = require("./math");
console.log(hello(5, 3));

////////////////
//Math2 모듈 불러오기
const math2 = require("./math2");
console.log(math2.add(5, 3));
console.log(math2.PI);

//구조 분해 할당을 배운 이유.
const { add, PI } = require("./math2");
console.log(add(5, 3));
console.log(PI);
