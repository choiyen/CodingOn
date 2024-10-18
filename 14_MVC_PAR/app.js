const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [Before] MVC 적용 전에는 app. js에서 라우트 정의
// 단점 : 라우터 (경로) 가 많아진다면? app.js 코드가 길어짐 -> 유지보수 성이 하락.
app.get("/", (req, res) => {
  res.render("index");
});

//[After] router 객체로 라우터 분리
const indexRouter = require("./routes/index"); // 이떄 index는 생략 가능
app.use("/", indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한대로 동작.
//다른 파일에선

//404 error
//맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost: ${PORT}`);
});
