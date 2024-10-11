//promise 객체(프로미스)
//-비동기 함수를 동기 처리하기 위해 만든 객체
//- 미래에 성공/실패에 대한 결과 값을 "약속"한다는 의미
//- 성공, 실패를 분리해서 반환
//- 성공 then, 실패 catch 메서드로 이어 받아서 처리 가능

/* promise의 상태
pending : 대기 
fullfilled : 이행
Rejected : 거부
Settled : 결론
*/

//1. promise 객체 생성 코드
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(`현재 프로미스의 상태는 fullfilled(이행)!  then 메서드로 연결~
         이 떄 flag 값은 ${flag}`);
    } else {
      reject(`현재 프로미스의 상태는 rejected(이행)!  catch 메서드로 연결~
         이 떄 flag 값은 ${flag}`);
    }
  });
}

// 2. promise를 사용하는 코드
promise1(5 > 3)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    //가장 마지막에 선택 사항, 성공과 실패에 상관 없이 실행되는 코드
    console.log("finally");
  });

// 2. promise를 사용하는 코드
//화살표 함수로도 사용 가능하다.
promise1(5 > 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    //가장 마지막에 선택 사항, 성공과 실패에 상관 없이 실행되는 코드
    console.log("finally");
  });

// -----------------------------------------------------------------------
//2.promise 예제

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    //3초 기다린 후 실행
    setTimeout(function () {
      console.log("고민끝!");
      product = "제로콜라!";
      price = 2000;
      resolve();
    }, 3000);
  });
}

let product;
let price;
goMart();
pickDrink().then(() => {
  pay(product, price);
});

//해당 코드가 실행되기 전에 밑에 코드가 실행됨.
function pay(product, price) {
  console.log(`상품명 : ${product}, 가격 : ${price}`);
}

//==========Promise 사용 안한 경우 ============
// callback 함수 사용

// function add(n1, n2, cb) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     cb(result);
//   }, 1000);
// }

// function mul(n, cb) {
//   setTimeout(function () {
//     setTimeout(() => {
//       let result = n * 2;
//       cb(result);
//     }, 700);
//   });
// }

// function sub(n, cb) {
//   setTimeout(() => {
//     let result = n - 1;
//     cb(result);
//   }, 500);
// }

// add(4, 3, function (x) {
//   console.log("1:  ", x);
//   mul(x, function (y) {
//     console.log("2: ", y);
//     sub(y, function (z) {
//       console.log("3: ", z);
//     });
//   });
// });

/////////////////////////////////////
//3. 프로미스 체이닝
//함수를 이용해서 (4+3) * 2 - 1

// function add1(n1, n2) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const result = n1 + n2;
//       resolve(result);
//     }, 1000);
//   });
// }

// function mul1(n) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const result = n * 2;
//       // resolve(result);
//       reject(new Error("의도적으로 발생시킨 에러"));
//     }, 700);
//   });
// }

// function sub1(n) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const result = n - 1;
//       resolve(result);
//     }, 500);
//   });
// }

// add1(4, 3)
//   .then((result) => {
//     console.log("1: ", result);
//     return mul1(result);
//   })
//   .then((result) => {
//     console.log("2: ", result);
//     return sub1(result);
//   })
//   .then((result) => {
//     console.log("3: ", result);
//   })
//   .catch((error) => {
//     console.log("에러 발생");
//   });

//========= 실습 문제 =====

function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}
function back(cb) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}
function hell(cb) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

call("kim")
  .then((result) => {
    console.log(result + "반가워");
    return back(result);
  })
  .then((result) => {
    console.log(result + "을 실행했구나");
    return hell(result);
  })
  .then((result) => {
    console.log("여기는 : ", result);
  });
