const express = require("express");
const app = express();
const PORT = 8000; //상수이기 떄문에 대문자.

//express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set("view engine", "ejs"); //view engine은 하나의 속성.
// 템플릿 엔진 파일을 저장할 위치 등록(default 폴더 명은 views)
app.set("views", "./views"); //실제 접근할 폴더.

// static 미들웨어 등록(정책 파일 로드 ex. css, js, img)
//접근할 이름, 실제 표시되는 주소
// static이라는 실제 폴더를 public이라는 이름으로 접근하겠다.
app.use("/public", express.static(__dirname + "/static"));
console.log(__dirname); //절대 경로로 띄워줌.

//app.get(경로, 해당 경로로 들어왔을 떄 실행할 함수)
//요청 매서드 : get
//요청 주소 : "/" ->"서버주소 : 포트번호" -> "http://localhost:8000/"
app.get("/", function (req, res) {
  //res.send(응답 내용);
  // res.send("hello express");
  //text 형태로 쳤으나, tag 형태로 쳐도 됨.

  //index.ejs 라는 파일을 렌더
  res.render("index", {
    btns: ["사과", "오랜지", "키위"],
    isLogin: true,
    me: { name: "name", msg: "반갑습니다." },
  });
});

//login 경로로 요청이 들어오면 로그인 페이지 응답
app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(PORT, function () {
  console.log(`sever Iistening on ${PORT}! http://localhost:${PORT}`);
});
