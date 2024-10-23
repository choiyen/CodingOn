const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
  connectionLimit: 15, // 최대 연결수(기본값 10)
});

// 회원가입 요청
const signup = async ({ userid, pw, name }) => {
  const query = "INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)";
  const [rows] = await pool.query(query, [userid, pw, name]);
  return rows;
};

// 로그인 요청
const signin = async ({ userid, pw }) => {
  const query = "SELECT * FROM user WHERE userid = ? and pw = ?";
  const [rows] = await pool.query(query, [userid, pw]);
  return rows;
};

// 회원정보 한명 가져오기 (페이지 렌더링)
const get_profile = async (id) => {
  const query = "SELECT * FROM user WHERE id = ?";
  const [row] = await pool.query(query, [id]);
  return row;
};

// 회원 정보 수정
const edit_profile = async (data) => {
  const query = "UPDATE user SET name = ?, pw = ? where id = ?";
  const values = [data.name, data.pw, data.id];

  const [result] = await pool.query(query, values);
  return result;
};

// 회원 탈퇴
const delete_profile = async (id) => {
  const query = "DELETE FROM user where id = ?";

  const [result] = await pool.query(query, [id]);
  return result;
};

module.exports = { signup, signin, get_profile, edit_profile, delete_profile };
