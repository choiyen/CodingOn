console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000); // 2초를 기다리고 실행.
console.log(3);
// 1 -> 3 -> 2 : 비동기 때문에 이렇게 처리됨.

///////////
//ex. 편의점에 가서 음료수를 사고 나오는 상황.
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다");
}
function pickDrink() {
  //3초 기다린 후 실행
  setTimeout(function () {
    console.log("고민끝!");
    product = "제로콜라!";
    price = 2000;
  }, 3000);
}
//해당 코드가 실행되기 전에 밑에 코드가 실행됨.
function pay(product, price) {
  console.log(`상품명 : ${product}, 가격 : ${price}`);
}
let product;
let price;

goMart();
pickDrink();
pay(product, price);

///////////
//1. 콜백 함수를 이용해서 비동기 처리
//ex. 편의점에 가서 음료수를 사고 나오는 상황.
function goMart1() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다");
}
function pickDrink1(Callback) {
  //3초 기다린 후 실행
  setTimeout(function () {
    console.log("고민끝!");
    product = "제로콜라!";
    price = 2000;
    //pay() 함수 실행.
    Callback(product, price);
  }, 3000);
}
//해당 코드가 실행되기 전에 밑에 코드가 실행됨.
function pay1(product, price) {
  console.log(`상품명 : ${product}, 가격 : ${price}`);
}
let product1;
let price1;

goMart1();
pickDrink1(pay1);
//콜백 지옥
// 함수의 매개변수로 넘겨지는 콜백 함수가 반복되어 코드가 복잡해짐.

//promise
//비동기 함수를 동기 처리하기 위해 만들어진 객체
