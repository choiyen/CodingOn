//bcrypt
//: 비밀번호를 암호화하는 알고리즘 중에 하나
//: 주로 강력한 보안이 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수

const bcrypt = require("bcrypt");

const originalpassword = "1234";
const saltRounds = 10; // 솔트 라운드 횟수를 정의한다.

//먼저 비밀번호를 해싱하는 함수
function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds); //salt가 자동으로 생성되어 해당 해시가 만들어짐.
}

//2. 원본 번호와 해시된 비밀번호가 일치하는지 확인하는 함수
function comparePassword(password, hashPW) {
  return bcrypt.compareSync(password, hashPW);
}

//사용예제
//원본 비밀번호를 해싱하느 결과
const hashPW = hashPassword(originalpassword);
console.log(`Hashed Password : ${hashPW}`);

//원본 비밀번호와 해시된 비빌번호가 동일한지 확인
const isMatch = comparePassword(originalpassword, hashPW);
console.log(`비밀번호 일치 : ${isMatch}`);

const isMatch2 = comparePassword("dddd", hashPW);
console.log(`비밀번호 일치 : ${isMatch2}`);
