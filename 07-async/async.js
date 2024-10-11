//async -> await
// async : 함수 앞에 붙이는 키워드
// - 함수만 보고도 비동기 함수 임을 유추하고자 함.
// - 프로미스를 무조건 반환하게 만듬.
// await : 기다리는 역할을 함.
// - 성공 또는 실패로 프로미스 객체의 실행이 완료되기를 기다림.
// - await 뒤에는 프로미스가 오게 됨.
// - async 키워드를 사용한 함수 안에서만 await을 사용할 수 있음.

// 예제 1
function f1() {
  return 1;
}
async function f2() {
  return 2;
}
// 무조건 promise 객체로 반환
console.log("1 >>> ", f2()); // promise(<fulfilled> : 1)

f2().then((result) => {
  console.log(result);
});
//값을 반환 받기 위해선 then을 사용해야 함.

//예제 2
// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["사과", "레몬", "수박"];
      // resolve(fruits);
      reject(new Error("알 수 없는 에러 발생"));
    }, 1000);
  });
}

///then - catch
// fetchFruits()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// //async - await의 사용시 에러 처리는 try-catch 구문으로 함.
// async function printFruits() {
//   try {
//     const fruits = await fetchFruits(); //await을 쓰면 변수로 전환됨.
//     console.log(fruits);
//   } catch (error) {
//     console.log(error);
//   }
// }
// printFruits();

// //2.promise 예제

// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다");
// }

// function pickDrink() {
//   return new Promise(function (resolve, reject) {
//     //3초 기다린 후 실행
//     setTimeout(function () {
//       console.log("고민끝!");
//       product = "제로콜라!";
//       price = 2000;
//       resolve();
//     }, 3000);
//   });
// }

// //해당 코드가 실행되기 전에 밑에 코드가 실행됨.
// function pay(product, price) {
//   console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// let product;
// let price;
// async function exec() {
//   goMart();
//   await pickDrink();
//   pay(product, price);
// }
// exec();

//=============실습 문제======

// function call(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name);
//     }, 1000);
//   });
// }
// function back(cb) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("back");
//       resolve("back");
//     }, 1000);
//   });
// }
// function hell(cb) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// async function exec1() {
//   let result = await call("kim");
//   console.log(result + "반가워");
//   result = await back(result);
//   console.log(result + "을 실행했구나!");
//   result = await hell(result);
//   console.log("여기는 : ", result);
// }
// exec1();

function color(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = color;
      resolve();//실행이 끝났음을 알려줌, 반환값이 있어야 넘겨줌.
    }, 1000);
  });
}


async function exec3() 
{
  await color("red");
  await color("orange");
  await color("yellow");
  await color("green");
  await color("blue");
}

exec3();
