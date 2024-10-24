const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

//cookie-parser

//일반 쿠키
//app.use(cookieParser());
app.use(cookieParser("mySecretKey"));
//secretKey : 비밀키
// - 서명된 쿠키가 있는 경우, 비밀키를 가지고 해당 쿠키가 내 서버가 만든 쿠키임을 인증 가능.
// - 쿠키는 클라이언트에서 위조가 쉬우므로 비밀키를 통해 만든 서명을 쿠키 값 뒤에 붙임.
// - 서명된 쿠키는 req.signedCookies 객체 들어있음.

//cookie의 옵션 객체
const cookieConfig = {
  // httpOnly 웹 서버만 통해서만 쿠키에 접근 가능
  // maxAge : 쿠키의 수명, 단위를 밀리초
  // expires : 만료 날짜를 GRT 시간대로 설정
  //path : 해당 디렉토리와 하위 디렉토리에서만 겨로가 활성화되고
  //       웹 브라우저는 해당하는 쿠키만 웹서버에 전송(기본값 : /)
  //domain: 쿠키가 전송될 도메인을 특정 가능(기본값 : 현재의 도메인)
  //secure : 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키를 서버에 전송
  //signed : 쿠키의 암호화를 결정(res.signedCookies 객체에 들어 있음.)
  httpOnly: true,
  maxAge: 60 * 1000, //여기까지만 설정하면 암호화를 안되어 그대로 노출됨
  signed: true, //암호화 쿠키
};

app.get("/", (req, res) => {
  res.render("cookie");
});

//쿠키 설정
app.get("/setCookie", (req, res) => {
  //res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션);
  res.cookie("myCookie", "myValue", cookieConfig);
  res.send("set cookie!");
});

//쿠키 확인
app.get("/getCookie", (req, res) => {
  //res.send(req.cookies); //브라우저가 보관하고 있는 쿠키(일반 쿠키)
  res.send(req.signedCookies); //암호화 쿠키
});

//쿠키 삭제
app.get("/clearCookie", (req, res) => {
  //res.clearCookie(키, 값, 옵션)
  res.clearCookie("myCookie", "myValue", cookieConfig);
  res.send("clear cookie!");
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
