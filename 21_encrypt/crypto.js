const crypto = require("crypto");

//crypto "단방향" 암호화 구현
// createHash()
//:지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식

/*
- password를 sha512 방식으로 암호화하고 base64로 인코딩하여 return 하는 함수를 만들어본다.
*/

const createHashedPassword = (password) => {
  //createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
  return crypto.createHash("sha512").update(password).digest("base64");
};

console.log(createHashedPassword("1234"));
console.log(createHashedPassword("2345"));
//해시 함수 방식은 레인보우 테이블 공격에 취약한 한계가 있음.
// => 암호화된 비밀번호를 빠르게 역추적해서 원본 비밀번호를 찾아낼 수 있음.

///////////////////////////
// pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
// = 비밀번호 기반 키 도출 함수, 주로 비번 저장시 사용함.
// = buffer 형식의 데이터를 반환 -> tostring()을 이용해 문자열로 변환.

//1) 단방향 암호화 생성 함수
/**
 * 1) 임의의 솔트 값을 생성
 * 2) 해당 솔트와 제공된 비밀번호를 기반으로 해시 생성
 * 3) 생성된 솔트와 해시를 반환
 */
function saltAndHashPassword(password) {
  const salt = crypto.randomBytes(16).toString("base64"); //임의의 솔트 생성
  const iteration = 1000; //해시 함수를 반복할 횟수
  const keylen = 64; //생성할 키의 길이
  const digest = "sha512"; //해시 알고리즘
  const hash = crypto
    .pbkdf2Sync(password, salt, iteration, keylen, digest)
    .toString("base64");
  //buffer 형태에서 string으로 변환

  return {
    salt,
    hash,
  };
}

//사용 예제
const password = "1234";
//비밀번호를 암호화
const { salt, hash } = saltAndHashPassword(password);
console.log(`비번 암호화에 쓰인 Salt: ${salt}, 암호화 결과 hash : ${hash}`);

//2. 암호화 비교 함수
//: inputPassword = 제공된 비번, salt, hash를 기반으로 새로운 해시 생성
// 새로운 해시와 저장된 해시(savehash)를 비교
// 제공된 비번이랑 원래 비번이 같으면 두 해시 값도 일치
function checkPassword(inputpassword, saveSalt, savehash) {
  const iteration = 1000;
  const keylen = 64;
  const digest = "sha512";

  const hash = crypto
    .pbkdf2Sync(inputpassword, saveSalt, iteration, keylen, digest)
    .toString("base64");

  return savehash === hash;
}

///비밀번호 확인
const inputpassword = "12434";
const isMatch = checkPassword(inputpassword, salt, hash);
console.log(`비밀번호 일치 : ${isMatch}`);

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipherEncrypt = (word) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encryptedData = cipher.update(word, "utf-8", "base64");
  encryptedData += cipher.final("base64");
  return encryptedData;
};

const decipher = (encryptedData) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decryptedData = decipher.update(encryptedData, "base64", "utf-8");
  decryptedData += decipher.final("utf-8");
  return decryptedData;
};

const encryptedData = cipherEncrypt("1234");
console.log(`암호화된 데이터 : ${encryptedData}`);
const decryptedData = decipher(encryptedData);
console.log("복호화된 데이터 : ", decryptedData);
