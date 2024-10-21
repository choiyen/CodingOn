//회원가입 수행.

// ------- mysql 연결 전 -----------

// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다" },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

// ------ mysql 연결 -------------
// mysql2/promise : promise 객체로 사용가능한 방식
const mysql = require("mysql2/promise");

// DB연결
// createConnection: 단일연결
// - 요청할 때마다 새로운 연결을 생성
// - 적은 수의 동시 연결이나 단순한 데이터베이스 쿼리일 때 사용
// createPool: 다중연결
// - 연결 풀을 생성. 풀은 미리 정의된 수의 연결을 생성하고 관리
// - 요청이 들어오면 연결 풀에서 사용가능한 연결을 제공. 작업완료 후 해당 연결을 반환
// - 연결이 필요하지 않을 경우 자동 반환, 풀의 연결 수를 제한하고 관리를 최적화
// - 일반적인 웹 서비스에 적합
const pool = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "KDT",
  connectionLimit: 15, // 최대 연결수(기본값 10)
});

const postlogin = async (userid, name, pw) => {
  const query = "INSERT INTO user (userid, name, pw) VALUES (?, ? , ?)";
  const [rows] = await pool.query(query, [userid, name, pw]); //DB에서 찾아올 때까지 시간이 걸림.
  return rows;
};

const selectlogin = async (userid) => {
  const query = "SELECT * FROM user WHERE userid = ?";
  const [rows] = await pool.query(query, [userid]);
  return rows;
};

const cancle = async (userid, pw) => {
  const query = "SELECT * FROM user WHERE userid = ?";
  const [rows] = await pool.query(query, [userid]);
  return rows;
};

const patch_login = async (name, pw, id) => {
  const query = "UPDATE user SET name = ?, pw = ? WHERE userid = ?";
  const [result] = await pool.query(query, [name, pw, id]);
  console.log("UPDATE result", result);
  return result;
};

const duplication = async (id) => {
  const query = "SELECT * FROM user WHERE userid = ?";
  const [result] = await pool.query(query, [id]);
  console.log("SELECT result", result);
  return result;
};

const delete_login = async (id) => {
  const query = "DELETE FROM user WHERE userid = ?";
  const [result] = await pool.query(query, [id]);
  console.log("DELETE DATE", result);
  return result;
};

module.exports = {
  postlogin,
  selectlogin,
  patch_login,
  delete_login,
  duplication,
  cancle,
};
