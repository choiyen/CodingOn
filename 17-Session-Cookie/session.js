const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

//session의 옵션 객체
const sessionConfig = {
  //secure : 값을 true로 하면 https에서만 세션을 주고 받음.
  //secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명 값(세션을 발급받을 때 사용되는 키);
  //resave : 세션에 수정사항이 생기지 않더라도, 매 요청마다 세션을 다시 저장할 것인지 지
  // 세션을 항상 저장할 것인지 지정하는 값(false를 권장)
  //saveUninitialized : 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정함.

  // httpOnly 웹 서버만 통해서만 쿠키에 접근 가능
  // maxAge : 쿠키의 수명, 단위를 밀리초
  // expires : 만료 날짜를 GRT 시간대로 설정
  // => cookie 객체에 넣어서 정의를 해줘야함.

  secret: "mySessionSecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 1000, //여기까지만 설정하면 암호화를 안되어 그대로 노출됨
  },
};

app.use(session(sessionConfig));

app.get("/", (req, res) => {
  res.render("session");
});

//쿠키 설정
app.get("/set", (req, res) => {
  //req.session.키 = 값
  req.session.name = "홍길동";
  res.send("set Session!");
});

//세션 확인
app.get("/get", (req, res) => {
  //req.session.키 => 값이 출력됨.
  console.log(req.session.name);
  console.log(req.sessionID); // 현재의 세션의 ID값을 출력받을 수 있음.
  console.log(req.session);
  res.send({ id: req.sessionID, name: req.session.name }); //암호화 쿠키
});

//쿠키 삭제
app.get("/destory", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      console.log(err);
      res.send("fail");
    }
    res.redirect("/get");
  });

  res.send("clear cookie!");
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
