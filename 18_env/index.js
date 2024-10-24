// const ps = process.env;
// console.log(ps);
//.env 파일을 만들어서 관리하는 목적
//계정 정보를 담아두는 파일(예를 들어, 시크릿 키)
//그냥 확인하면 안되는 데이터 베이스 정보가 들어 있음.
//어떤 걸로 실행할 것인지를 정의하는 파일.
// 절대로 깃허브에 올리면 안되는 파일.

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
