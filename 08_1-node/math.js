//math module 정의
//하나의 파일에 한개를 정의

//add라는 더하기 함수 정의
const add = (a, b) => a + b;
//add 라는 함수를 다른  js 파일에서 쓸 수 있도록 내보냄.

module.exports = add;
